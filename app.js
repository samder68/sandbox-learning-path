/**
 * HIGH-SIGNAL QUESTIONNAIRE DATA
 * Structured to capture the deep archetypes needed for the "Elite Career Brief" output.
 */
const questionnaireData = [
    {
        title: "The Core",
        questions: [
            { type: "text", text: "City & State?", id: "user-location" },
            { type: "radio", text: "Current Life Stage?", options: ["High School", "Early Career (under 25)", "Mid-Career Pivot", "Late Career Successor", "Military/Service Transition"] },
            { type: "radio", text: "Current Income & Financial Aid Need?", options: ["Under $25k (Critical Need)", "$25k-$45k (High Need)", "$45k+ (Low Need)"] },
            { type: "checkbox", text: "Language Skills?", options: ["English", "Spanish", "Portuguese", "Other"] }
        ]
    },
    {
        title: "The Arena (Psychology)",
        questions: [
            { type: "checkbox", text: "Gaming/Problem-Solving Style?", options: ["Tactical/Turn-based (Chess/Strategy)", "Fast-paced/Reflexes (Action/Sports)", "Explorer (Open World)", "Social (Team-based/Leadership)"] },
            { type: "radio", text: "Decision Style?", options: ["I analyze every detail first", "I act fast and adapt later", "I focus on the team's needs"] },
            { type: "textarea", text: "Describe a 'win' in your life that felt effortless to you (gaming or real life)." }
        ]
    },
    {
        title: "The Workshop (Experience)",
        questions: [
            { type: "textarea", text: "What hands-on tech/mechanical things have you fixed for friends or family? (Describe in detail)" },
            { type: "checkbox", text: "Soft Skills you've used in past jobs?", options: ["Conflict Resolution", "Inventory/Scheduling", "Shift Leadership", "Direct Sales", "Heavy Lifting/Stamina"] },
            { type: "textarea", text: "Describe a hard problem you enjoyed fixing and how you did it." }
        ]
    },
    {
        title: "The Horizon (The Goal)",
        questions: [
            { type: "text", text: "Target Salary Floor? (e.g. $85k)", id: "income-goal" },
            { type: "checkbox", text: "Top 3 Work Environment Priorities?", options: ["Remote/Work from Home", "9-5 Predictability", "Direct Community Impact", "Hands-on Technical Work", "No weekend emails"] }
        ]
    }
];

class QuestionnaireApp {
    constructor() {
        try {
            this.responses = JSON.parse(localStorage.getItem('user_responses')) || {};
        } catch (e) {
            this.responses = {};
        }
        this.currentSection = 0;
        
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", () => this.init());
        } else {
            this.init();
        }
    }

    init() {
        this.renderNavigation();
        this.renderForm();
        this.setupEventListeners();
        this.updateProgress();
        const spinner = document.getElementById('loadingSpinner');
        if (spinner) spinner.classList.add('hidden');
    }

    renderNavigation() {
        const nav = document.getElementById('sectionNav');
        if (!nav) return;
        nav.innerHTML = questionnaireData.map((s, i) => `
            <div class="section-nav-btn ${i === this.currentSection ? 'active' : ''}" data-index="${i}">
                <span>Module ${i+1}</span>
                <strong>${s.title}</strong>
            </div>
        `).join('');

        nav.querySelectorAll('.section-nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-index'));
                this.navigateToSection(idx);
            });
        });
    }

    renderForm() {
        const form = document.getElementById('questionnaire');
        if (!form) return;
        const section = questionnaireData[this.currentSection];
        form.innerHTML = `
            <div class="section active">
                <h2>${section.title}</h2>
                ${section.questions.map((q, i) => this.renderQuestion(q, i)).join('')}
            </div>
        `;
    }

    renderQuestion(q, i) {
        const qId = `q_${this.currentSection}_${i}`;
        const val = this.responses[qId] || '';
        
        if (q.type === 'radio') {
            return `<div class="question"><p class="question__text">${q.text}</p>
                <div class="radio-group">${q.options.map(opt => `
                    <label class="radio-option"><input type="radio" name="${qId}" value="${opt}" ${val === opt ? 'checked' : ''}> ${opt}</label>
                `).join('')}</div></div>`;
        }
        if (q.type === 'checkbox') {
            const vals = Array.isArray(val) ? val : [];
            return `<div class="question"><p class="question__text">${q.text}</p>
                <div class="checkbox-group">${q.options.map(opt => `
                    <label class="checkbox-option"><input type="checkbox" name="${qId}" value="${opt}" ${vals.includes(opt) ? 'checked' : ''}> ${opt}</label>
                `).join('')}</div></div>`;
        }
        return `<div class="question"><p class="question__text">${q.text}</p>
            <textarea name="${qId}" class="form-control" rows="3">${val}</textarea></div>`;
    }

    navigateToSection(i) {
        this.currentSection = i;
        this.renderNavigation();
        this.renderForm();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setupEventListeners() {
        const form = document.getElementById('questionnaire');
        if (form) {
            form.oninput = (e) => {
                const name = e.target.name;
                if (e.target.type === 'checkbox') {
                    const checked = Array.from(form.querySelectorAll(`input[name="${name}"]:checked`)).map(cb => cb.value);
                    this.responses[name] = checked;
                } else {
                    this.responses[name] = e.target.value;
                }
                localStorage.setItem('user_responses', JSON.stringify(this.responses));
                this.updateProgress();
            };
        }

        const aiBtn = document.getElementById('getAiRecommendationsBtn');
        if (aiBtn) aiBtn.onclick = () => this.getRecommendations();

        const resetBtn = document.getElementById('resetBtn');
        if (resetBtn) resetBtn.onclick = () => { localStorage.clear(); location.reload(); };
    }

    updateProgress() {
        const total = questionnaireData.reduce((acc, s) => acc + s.questions.length, 0);
        const answered = Object.values(this.responses).filter(v => v && v.length > 0).length;
        const pct = Math.min(Math.round((answered / total) * 100), 100);
        const pb = document.getElementById('progressBar');
        const pt = document.getElementById('progressText');
        if (pb) pb.style.width = pct + '%';
        if (pt) pt.innerText = pct + '% Complete';
    }

    async getRecommendations() {
        const resultsSection = document.getElementById('resultsSection');
        const loadingSpinner = document.getElementById('loadingSpinner');
        const analysisResults = document.getElementById('analysisResults');

        resultsSection.classList.remove('hidden');
        loadingSpinner.classList.remove('hidden');
        analysisResults.innerHTML = '';
        resultsSection.scrollIntoView({ behavior: 'smooth' });

        const outputPromptText = `
Act as an Elite Career Architect. Analyze the user's psychological archetypes, gaming styles, and experience.
You MUST follow this EXACT Markdown structure:

# YOUR PERSONALIZED CAREER DISCOVERY PROFILE
## 🎯 YOUR LEARNING PROFILE ANALYSIS
**Who You Are:** [Detailed analysis based on responses]
**Your Advantage:** [Why their specific skills/gaming style give them an edge]

---
## 🎓 YOUR TOP LEARNING PATH MATCHES
[Provide 3 Paths using the following sub-format for each]
### **PATH NAME** ⭐ RECOMMENDED
**Why This Fits:** [Specific reasoning]
**Learning Stack (Free):** [List 3-4 real free resources with URLs to Coursera, Khan Academy, MIT OCW, etc.]
**Paid Certification Investment:** [Cost breakdown]

---
## 💰 FINANCIAL AID & SCHOLARSHIPS
[List FAFSA, WIOA, and specifically NJ-based aid like the Community College Opportunity Grant]

---
## 📝 YOUR APPLICATION MATERIAL AND NARRATIVE BANK
[Provide 2 Resume Objectives and 3 Interview Narrative Themes]

---
## 🎯 YOUR NEXT STEPS (THIS WEEK)
[Day-by-day plan for the first 7 days]

---
## 📚 MAIN PLATFORM DIRECTORY
[Links to major sites referenced]
`;

        try {
            const response = await fetch('/api/generate-plan', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    profile: JSON.stringify(this.responses), 
                    prompt: outputPromptText 
                })
            });

            if (!response.ok) throw new Error(`Server Error: ${response.status}`);
            const data = await response.json();
            loadingSpinner.classList.add('hidden');
            
            if (data && data.text) {
                // Formatting engine to render Markdown-style elements cleanly in the dashboard
                let formatted = data.text
                    .replace(/---/g, '<hr style="border: 0; border-top: 2px solid #e2e8f0; margin: 30px 0;">')
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/^# (.*$)/gim, '<h1 style="color:#1a202c; margin-bottom: 20px;">$1</h1>')
                    .replace(/^## (.*$)/gim, '<h2 style="color:#2d3748; margin-top: 30px;">$1</h2>')
                    .replace(/^### (.*$)/gim, '<h3 style="color:#4a5568; margin-top: 20px;">$1</h3>')
                    .replace(/((http|https):\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="ai-link">$1</a>')
                    .replace(/\n/g, '<br>');
                
                analysisResults.innerHTML = `<div class="ai-response-container" style="text-align: left; padding: 20px;">${formatted}</div>`;
            }
        } catch (error) {
            loadingSpinner.classList.add('hidden');
            analysisResults.innerHTML = `<p style="color:red; padding: 20px;"><strong>Error:</strong> ${error.message}</p>`;
        }
    }
}

const app = new QuestionnaireApp();
