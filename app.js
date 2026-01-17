/**
 * HIGH-SIGNAL QUESTIONNAIRE DATA
 * Structured into 6 Modules for Deep Archetype Analysis
 */
const questionnaireData = [
    {
        title: "The Core",
        questions: [
            { type: "text", text: "Location? (City, State)", id: "user-location" },
            { type: "radio", text: "Current Life Stage?", options: ["High School", "Young Adult (18-24)", "Mid-Career Pivot", "Late Career"] },
            { type: "checkbox", text: "Bilingual?", options: ["English", "Spanish", "Other"] },
            { type: "radio", text: "Financial Aid Need?", options: ["1 (Low)", "2", "3", "4", "5 (Critical)"] }
        ]
    },
    {
        title: "The Arena",
        questions: [
            { type: "checkbox", text: "What do you play?", options: ["Sudoku/Wordle", "Backgammon/Chess", "Team Sports", "eSports/Gaming", "Strategy Games"] },
            { type: "radio", text: "Which 'Win' feels better?", options: ["Solving a puzzle alone", "Outsmarting one opponent", "Winning as a team"] },
            { type: "radio", text: "Pressure Style?", options: ["I need time to analyze", "I thrive under split-second pressure"] }
        ]
    },
    {
        title: "The Feed",
        questions: [
            { type: "textarea", text: "What was the last series or movie you loved? Why?" },
            { type: "checkbox", text: "YouTube/Reading Habit?", options: ["Tutorials", "Documentaries", "True Crime", "Self-Help", "Fantasy/Sci-Fi"] }
        ]
    },
    {
        title: "The Lab",
        questions: [
            { type: "radio", text: "How do you pick up a new skill?", options: ["The Tinkerer (Click buttons)", "The Shadow (Watch first)", "The Architect (Read manual)"] },
            { type: "checkbox", text: "What makes you quit a course?", options: ["Too much reading", "Too slow", "No real-world use"] }
        ]
    },
    {
        title: "The Workshop",
        questions: [
            { type: "radio", text: "Your role at a gathering?", options: ["Logistics/Organizing", "Fixing the Tech", "Leading conversation", "1-on-1 Helping"] },
            { type: "textarea", text: "Describe a hard problem you enjoyed fixing." }
        ]
    },
    {
        title: "The Horizon",
        questions: [
            { type: "text", text: "Target Income Goal?", id: "income-goal" },
            { type: "checkbox", text: "Top 3 Priorities?", options: ["Work from Home", "9-5 Predictability", "Community Impact", "Hands-on Work", "Creativity"] }
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
        
        // Wait for DOM to be ready
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
        
        // Ensure spinner is hidden on start
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

        // Re-attach listeners after rendering
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
                    <label class="radio-option">
                        <input type="radio" name="${qId}" value="${opt}" ${val === opt ? 'checked' : ''}> 
                        ${opt}
                    </label>
                `).join('')}</div></div>`;
        }
        if (q.type === 'checkbox') {
            const vals = Array.isArray(val) ? val : [];
            return `<div class="question"><p class="question__text">${q.text}</p>
                <div class="checkbox-group">${q.options.map(opt => `
                    <label class="checkbox-option">
                        <input type="checkbox" name="${qId}" value="${opt}" ${vals.includes(opt) ? 'checked' : ''}> 
                        ${opt}
                    </label>
                `).join('')}</div></div>`;
        }
        // Text and Textarea fallthrough
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
        
        const dlBtn = document.getElementById('downloadBtn');
        if (dlBtn) dlBtn.onclick = () => this.downloadData();
    }

    updateProgress() {
        const total = questionnaireData.reduce((acc, s) => acc + s.questions.length, 0);
        // Count only non-empty responses
        const answered = Object.values(this.responses).filter(v => v && v.length > 0).length;
        const pct = Math.min(Math.round((answered / total) * 100), 100);
        
        const pb = document.getElementById('progressBar');
        const pt = document.getElementById('progressText');
        if (pb) pb.style.width = pct + '%';
        if (pt) pt.innerText = pct + '% Complete';
    }

    async getRecommendations() {
        const results = document.getElementById('resultsSection');
        const spinner = document.getElementById('loadingSpinner');
        const analysis = document.getElementById('analysisResults');

        results.classList.remove('hidden');
        spinner.classList.remove('hidden');
        analysis.innerHTML = '';
        results.scrollIntoView({ behavior: 'smooth' });

        try {
            const response = await fetch('/api/generate-plan', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    profile: JSON.stringify(this.responses), 
                    prompt: "Act as a Career Strategist. Analyze the user's archetypes from gaming, media, and learning styles. Provide 3 paths, 3 free resources, and tailored NJ-based aid." 
                })
            });

            const data = await response.json();
            spinner.classList.add('hidden');
            
            if (data && data.text) {
                // FORMATTING ENGINE
                let formatted = data.text
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
                    .replace(/🎯/g, '<br>🎯').replace(/🎓/g, '<br>🎓').replace(/💰/g, '<br>💰')
                    .replace(/((http|https):\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="ai-link">$1</a>')
                    .replace(/\n/g, '<br>');
                
                analysis.innerHTML = `<div class="ai-response-container">${formatted}</div>`;
            }
        } catch (error) {
            spinner.classList.add('hidden');
            analysis.innerHTML = `<p style="color:red">Connection Error: ${error.message}</p>`;
        }
    }

    downloadData() {
        const dataStr = "data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(this.responses, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "career_discovery_data.txt");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }
}

// Initialize the app
const app = new QuestionnaireApp();
