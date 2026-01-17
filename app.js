const questionnaireData = [
    {
        title: "The Core",
        questions: [
            { type: "text", text: "City & State?", id: "user-location" },
            { type: "radio", text: "Current Life Stage?", options: ["High School", "Early Career (under 25)", "Mid-Career Pivot", "Military/Service Transition"] },
            { type: "radio", text: "Current Income?", options: ["Under $25k", "$25k-$45k", "$45k+"] },
            { type: "checkbox", text: "Language Skills?", options: ["English", "Spanish", "Portuguese", "Other"] }
        ]
    },
    {
        title: "The Arena",
        questions: [
            { type: "checkbox", text: "Gaming/Problem-Solving Style?", options: ["Tactical/Strategy", "Fast-paced/Reflex", "Explorer", "Social/Team-based"] },
            { type: "textarea", text: "Describe a 'win' that felt effortless to you (gaming or real life).", id: "effortless-win" }
        ]
    },
    {
        title: "The Workshop",
        questions: [
            { type: "textarea", text: "What hands-on tech/mechanical things have you fixed for family? (Be specific)", id: "hands-on-experience" },
            { type: "textarea", text: "What was your most recent job title and what did you do there?", id: "past-job" }
        ]
    },
    {
        title: "The Horizon",
        questions: [
            { type: "text", text: "Target Salary Floor? (e.g. $75k)", id: "income-goal" },
            { type: "checkbox", text: "Work Priorities?", options: ["Remote", "Predictability", "Hands-on", "Community Impact"] }
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
        if (nav) {
            nav.innerHTML = questionnaireData.map((s, i) => `
                <div class="section-nav-btn ${i === this.currentSection ? 'active' : ''}" onclick="app.navigateToSection(${i})">
                    <strong>${s.title}</strong>
                </div>
            `).join('');
        }
    }

    renderForm() {
        const form = document.getElementById('questionnaire');
        if (!form) return;
        const section = questionnaireData[this.currentSection];
        form.innerHTML = `<h2>${section.title}</h2>` + section.questions.map((q, i) => {
            const qId = q.id || `q_${this.currentSection}_${i}`;
            const val = this.responses[qId] || '';
            if (q.type === 'radio') {
                return `<div class="question"><p>${q.text}</p>${q.options.map(opt => `<label><input type="radio" name="${qId}" value="${opt}" ${val === opt ? 'checked' : ''}> ${opt}</label>`).join('')}</div>`;
            }
            if (q.type === 'checkbox') {
                const vals = Array.isArray(val) ? val : [];
                return `<div class="question"><p>${q.text}</p>${q.options.map(opt => `<label><input type="checkbox" name="${qId}" value="${opt}" ${vals.includes(opt) ? 'checked' : ''}> ${opt}</label>`).join('')}</div>`;
            }
            return `<div class="question"><p>${q.text}</p><textarea name="${qId}" class="form-control">${val}</textarea></div>`;
        }).join('');
    }

    navigateToSection(i) {
        this.currentSection = i;
        this.renderNavigation();
        this.renderForm();
    }

    setupEventListeners() {
        const form = document.getElementById('questionnaire');
        form.oninput = (e) => {
            const name = e.target.name;
            if (e.target.type === 'checkbox') {
                this.responses[name] = Array.from(form.querySelectorAll(`input[name="${name}"]:checked`)).map(cb => cb.value);
            } else {
                this.responses[name] = e.target.value;
            }
            localStorage.setItem('user_responses', JSON.stringify(this.responses));
            this.updateProgress();
        };

        document.getElementById('getAiRecommendationsBtn').onclick = () => this.getRecommendations();
    }

    updateProgress() {
        const total = 10; // Total questions
        const answered = Object.keys(this.responses).length;
        const pct = Math.min(Math.round((answered / total) * 100), 100);
        document.getElementById('progressBar').style.width = pct + '%';
        document.getElementById('progressText').innerText = pct + '% Complete';
    }

    async getRecommendations() {
        const results = document.getElementById('analysisResults');
        const spinner = document.getElementById('loadingSpinner');
        results.innerHTML = '';
        spinner.classList.remove('hidden');

        const prompt = `Act as an Elite Career Architect. Use these EXACT user details: ${JSON.stringify(this.responses)}.
        REQUIRED FORMAT:
        # YOUR PERSONALIZED CAREER DISCOVERY PROFILE
        ## 🎯 ANALYSIS
        **Advantage:** [Analyze their specific 'effortless-win' and 'hands-on-experience' fields]
        ---
        ## 🎓 PATHS
        [Provide 3 paths with real links to Coursera, edX, or Khan Academy search pages]
        ---
        ## 📝 NARRATIVE BANK
        **Tailored Objective:** [Write a resume objective using their 'past-job' title]
        **The Bridge:** [A specific interview story connecting their 'effortless-win' to their new path]`;

        try {
            const res = await fetch('/api/generate-plan', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ profile: JSON.stringify(this.responses), prompt })
            });
            const data = await res.json();
            spinner.classList.add('hidden');
            
            // Render Markdown cleanly
            results.innerHTML = data.text
                .replace(/\n/g, '<br>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/^## (.*$)/gim, '<h2 style="color:#2d3748; margin-top:20px;">$1</h2>');
        } catch (e) {
            spinner.classList.add('hidden');
            results.innerHTML = "Error: " + e.message;
        }
    }
}
window.app = new QuestionnaireApp();
