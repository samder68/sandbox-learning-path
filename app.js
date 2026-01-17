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
        
        form.innerHTML = questionnaireData.map(section => `
            <div class="section-container" style="margin-bottom: 40px; padding: 20px; border-bottom: 1px solid #eee;">
                <h2 style="color: #2d3748; margin-bottom: 20px;">${section.title}</h2>
                ${section.questions.map(q => this.renderQuestion(q)).join('')}
            </div>
        `).join('');

        this.setupEventListeners();
        this.updateProgress();

        document.getElementById('getAiRecommendationsBtn').onclick = () => this.getRecommendations();
        document.getElementById('resetBtn').onclick = () => { 
            localStorage.clear(); 
            location.reload(); 
        };
    }

    renderQuestion(q) {
        const val = this.responses[q.id] || '';
        if (q.type === 'checkbox') {
            return `<div class="question" style="margin-bottom:20px;"><p><strong>${q.text}</strong></p>
                ${q.options.map(opt => `<label style="display:block;"><input type="checkbox" name="${q.id}" value="${opt}" ${(this.responses[q.id] || []).includes(opt) ? 'checked' : ''}> ${opt}</label>`).join('')}
            </div>`;
        }
        if (q.type === 'text') {
            return `<div class="question" style="margin-bottom:20px;"><p><strong>${q.text}</strong></p><input type="text" name="${q.id}" value="${val}" style="width:100%; padding:10px; border:1px solid #ccc; border-radius:4px;"></div>`;
        }
        return `<div class="question" style="margin-bottom:20px;"><p><strong>${q.text}</strong></p><textarea name="${q.id}" style="width:100%; padding:10px; border:1px solid #ccc; border-radius:4px;" rows="4">${val}</textarea></div>`;
    }

    setupEventListeners() {
        document.getElementById('questionnaire').oninput = (e) => {
            const { name, type, value } = e.target;
            if (type === 'checkbox') {
                const vals = Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(c => c.value);
                this.responses[name] = vals;
            } else {
                this.responses[name] = value;
            }
            localStorage.setItem('user_responses', JSON.stringify(this.responses));
            this.updateProgress();
        };
    }

    updateProgress() {
        const total = 8; // approx number of questions
        const answered = Object.keys(this.responses).length;
        const pct = Math.min(Math.round((answered / total) * 100), 100);
        const pb = document.getElementById('progressBar');
        const pt = document.getElementById('progressText');
        if (pb) pb.style.width = pct + '%';
        if (pt) pt.innerText = pct + '% Complete';
    }

    async getRecommendations() {
        const results = document.getElementById('analysisResults');
        const spinner = document.getElementById('loadingSpinner');
        results.innerHTML = '';
        spinner.classList.remove('hidden');

        const prompt = `Act as an Elite Career Architect. You MUST use these exact headers and provide a deeply tailored 1,000-word brief. 
        # YOUR PERSONALIZED CAREER DISCOVERY PROFILE
        ## 🎯 YOUR LEARNING PROFILE ANALYSIS
        ## 🎓 YOUR TOP LEARNING PATH MATCHES
        ## 💰 FINANCIAL AID & SCHOLARSHIPS
        ## 📝 YOUR APPLICATION MATERIAL AND NARRATIVE BANK
        USER DATA: ${JSON.stringify(this.responses)}`;

        try {
            const res = await fetch('/api/generate-plan', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ profile: JSON.stringify(this.responses), prompt })
            });
            const data = await res.json();
            spinner.classList.add('hidden');
            
            // This is the CRITICAL renderer that makes it "Elite"
            results.innerHTML = `
                <div style="background: white; padding: 40px; line-height: 1.8; color: #333; text-align: left; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-radius: 8px;">
                    ${data.text
                        .replace(/^# (.*$)/gim, '<h1 style="color:#1a365d; border-bottom: 3px solid #3182ce; padding-bottom: 10px; font-size: 2.2em;">$1</h1>')
                        .replace(/^## (.*$)/gim, '<h2 style="color:#2c5282; background:#ebf8ff; padding: 10px; margin-top: 30px; font-size: 1.6em;">$1</h2>')
                        .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#2d3748;">$1</strong>')
                        .replace(/---/g, '<hr style="border:0; border-top:1px solid #e2e8f0; margin: 40px 0;">')
                        .replace(/((http|https):\/\/[^\s]+)/g, '<a href="$1" target="_blank" style="color: #3182ce; font-weight: bold; text-decoration: underline;">$1</a>')
                        .replace(/\n/g, '<br>')}
                </div>`;
        } catch (e) {
            spinner.classList.add('hidden');
            results.innerHTML = "Error: " + e.message;
        }
    }
}
const app = new QuestionnaireApp();
