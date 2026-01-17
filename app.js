const questionnaireData = [
    {
        title: "Your Background",
        questions: [
            { type: "text", text: "City & State?", id: "location" },
            { type: "textarea", text: "Describe your current or most recent work experience in detail.", id: "experience" },
            { type: "textarea", text: "What technical or mechanical things have you fixed for friends or family?", id: "tech_fixes" },
            { type: "checkbox", text: "Languages you speak fluently?", options: ["English", "Spanish", "Portuguese", "Other"] }
        ]
    },
    {
        title: "Your Wiring",
        questions: [
            { type: "textarea", text: "Describe a 'win' that felt effortless to you (gaming or real life).", id: "effortless_win" },
            { type: "checkbox", text: "Gaming/Problem-Solving Style?", options: ["Tactical/Strategy", "Fast-paced/Reflex", "Explorer", "Social/Team-based"] }
        ]
    },
    {
        title: "The Goal",
        questions: [
            { type: "text", text: "Target Salary Floor? (e.g. $85k)", id: "salary" },
            { type: "textarea", text: "If money wasn't an issue, what would you spend your days building or doing?", id: "passion" }
        ]
    }
];

class QuestionnaireApp {
    constructor() {
        this.responses = JSON.parse(localStorage.getItem('user_responses')) || {};
        this.init();
    }

    init() {
        const form = document.getElementById('questionnaire');
        if (!form) return;
        
        // Render all questions at once for a better UI flow
        form.innerHTML = questionnaireData.map(section => `
            <div class="section-container" style="margin-bottom: 40px; padding: 20px; border-bottom: 1px solid #eee;">
                <h2 style="color: #2d3748; margin-bottom: 20px;">${section.title}</h2>
                ${section.questions.map(q => this.renderQuestion(q)).join('')}
            </div>
        `).join('');

        document.getElementById('getAiRecommendationsBtn').onclick = () => this.getRecommendations();
        document.getElementById('resetBtn').onclick = () => { localStorage.clear(); location.reload(); };
    }

    renderQuestion(q) {
        const val = this.responses[q.id] || '';
        if (q.type === 'checkbox') {
            return `<div class="question"><p><strong>${q.text}</strong></p>
                ${q.options.map(opt => `<label><input type="checkbox" name="${q.id}" value="${opt}" ${(this.responses[q.id] || []).includes(opt) ? 'checked' : ''}> ${opt}</label><br>`).join('')}
            </div>`;
        }
        if (q.type === 'text') {
            return `<div class="question"><p><strong>${q.text}</strong></p><input type="text" name="${q.id}" value="${val}" class="form-control"></div>`;
        }
        return `<div class="question"><p><strong>${q.text}</strong></p><textarea name="${q.id}" class="form-control" rows="4">${val}</textarea></div>`;
    }

    setupEventListeners() {
        document.getElementById('questionnaire').oninput = (e) => {
            const { name, type, value, checked } = e.target;
            if (type === 'checkbox') {
                const vals = Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(c => c.value);
                this.responses[name] = vals;
            } else {
                this.responses[name] = value;
            }
            localStorage.setItem('user_responses', JSON.stringify(this.responses));
        };
    }

    async getRecommendations() {
        const results = document.getElementById('analysisResults');
        const spinner = document.getElementById('loadingSpinner');
        results.innerHTML = '';
        spinner.classList.remove('hidden');

        const prompt = `Act as an Elite Career Architect. You MUST use these exact headers and provide a deeply tailored 1,000-word brief.
        
        # YOUR PERSONALIZED CAREER DISCOVERY PROFILE
        ## 🎯 YOUR LEARNING PROFILE ANALYSIS
        Connect their experience (${this.responses.experience}) and their 'effortless win' (${this.responses.effortless_win}) to their advantage.
        
        ---
        ## 🎓 YOUR TOP LEARNING PATH MATCHES
        Provide 3 specific paths with real search links to Coursera, edX, and Khan Academy.
        
        ---
        ## 💰 FINANCIAL AID & SCHOLARSHIPS
        Include Pell Grant, WIOA, and the NJ Community College Opportunity Grant.
        
        ---
        ## 📝 YOUR APPLICATION MATERIAL AND NARRATIVE BANK
        Tailored Objective: [Write a professional objective using their specific background]
        The Bridge: [Write a story connecting their win to their new career]
        
        USER DATA: ${JSON.stringify(this.responses)}`;

        try {
            const res = await fetch('/api/generate-plan', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ profile: JSON.stringify(this.responses), prompt })
            });
            const data = await res.json();
            spinner.classList.add('hidden');
            
            // CLEAN RENDERING ENGINE
            results.innerHTML = `<div class="elite-report">${data.text
                .replace(/\n/g, '<br>')
                .replace(/---/g, '<hr style="margin: 40px 0;">')
                .replace(/^# (.*$)/gim, '<h1 style="color:#1a202c; font-size: 2.5rem; border-bottom: 4px solid #3182ce; padding-bottom: 10px;">$1</h1>')
                .replace(/^## (.*$)/gim, '<h2 style="color:#2d3748; font-size: 1.8rem; margin-top: 40px; background: #f7fafc; padding: 10px;">$1</h2>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/((http|https):\/\/[^\s]+)/g, '<a href="$1" target="_blank" style="color: #3182ce; font-weight: bold;">$1</a>')}</div>`;
        } catch (e) {
            spinner.classList.add('hidden');
            results.innerHTML = "Error: " + e.message;
        }
    }
}
window.app = new QuestionnaireApp();
app.setupEventListeners();
