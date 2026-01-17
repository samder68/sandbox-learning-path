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
        this.responses = JSON.parse(localStorage.getItem('user_responses')) || {};
        this.currentSection = 0;
        this.init();
    }

    init() {
        this.renderNavigation();
        this.renderForm();
        this.setupEventListeners();
        this.updateProgress();
    }

    renderNavigation() {
        const nav = document.getElementById('sectionNav');
        nav.innerHTML = questionnaireData.map((s, i) => `
            <div class="section-nav-btn ${i === this.currentSection ? 'active' : ''}" onclick="app.navigateToSection(${i})">
                <span>Module ${i+1}</span>
                <strong>${s.title}</strong>
            </div>
        `).join('');
    }

    renderForm() {
        const form = document.getElementById('questionnaire');
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
            <textarea name="${qId}" class="form-control">${val}</textarea></div>`;
    }

    navigateToSection(i) {
        this.currentSection = i;
        this.init();
    }

    setupEventListeners() {
        document.getElementById('questionnaire').oninput = (e) => {
            const name = e.target.name;
            if (e.target.type === 'checkbox') {
                const checked = Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(cb => cb.value);
                this.responses[name] = checked;
            } else {
                this.responses[name] = e.target.value;
            }
            localStorage.setItem('user_responses', JSON.stringify(this.responses));
            this.updateProgress();
        };

        document.getElementById('getAiRecommendationsBtn').onclick = () => this.getRecommendations();
        document.getElementById('resetBtn').onclick = () => { localStorage.clear(); location.reload(); };
    }

    updateProgress() {
        const total = questionnaireData.reduce((acc, s) => acc + s.questions.length, 0);
        const answered = Object.keys(this.responses).length;
        const pct = Math.round((answered / total) * 100);
        document.getElementById('progressBar').style.width = pct + '%';
        document.getElementById('progressText').innerText = pct + '% Complete';
    }

    async getRecommendations() {
        // AI Fetch Logic here (using your existing prompt)
        const results = document.getElementById('resultsSection');
        results.classList.remove('hidden');
        document.getElementById('loadingSpinner').classList.remove('hidden');
        // Final implementation would fetch from /api/generate-plan
    }
}

const app = new QuestionnaireApp();
