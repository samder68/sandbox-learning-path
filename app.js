const questionnaireData = [
    {
        title: "1. The Core (Reality)",
        questions: [
            { type: "text", text: "What is your Location? (City, State)", id: "user-location" },
            { type: "radio", text: "Age Group?", options: ["High School", "Young Adult (18-24)", "Mid-Career Pivot (25-45)", "Late Career/Retirement Chapter"] },
            { type: "checkbox", text: "Languages spoken?", options: ["English", "Spanish", "Other"] },
            { type: "radio", text: "Financial Aid Need? (1 = Low, 5 = Critical)", options: ["1", "2", "3", "4", "5"] }
        ]
    },
    {
        title: "2. The Arena (Play)",
        questions: [
            { type: "checkbox", text: "What games/sports do you play? (Check all that apply)", options: ["Sudoku/Wordle", "Backgammon/Chess", "Team Sports (Football/Wrestling)", "eSports/Competitive Gaming", "Casual Mobile Games", "Strategy Board Games"] },
            { type: "radio", text: "Which 'Win' feels better?", options: ["Solving a puzzle alone", "Outsmarting one opponent", "Winning as a coordinated team"] },
            { type: "radio", text: "Decision Style?", options: ["I take my time to analyze", "I thrive under split-second pressure"] }
        ]
    },
    {
        title: "3. The Feed (Media)",
        questions: [
            { type: "textarea", text: "What was the last TV series or Movie you loved? Why?", hasTextbox: true, textboxPrompt: "What about the story or characters resonated with you?" },
            { type: "checkbox", text: "What do you usually read/watch on YouTube?", options: ["How-to/Tutorials", "History/Documentaries", "True Crime/Mystery", "Business/Self-Help", "Fantasy/Sci-Fi"] }
        ]
    },
    {
        title: "4. The Lab (Learning)",
        questions: [
            { type: "radio", text: "How do you pick up a new skill?", options: ["The Tinkerer (I just start playing with it)", "The Shadow (I watch someone else first)", "The Architect (I need the manual/theory first)"] },
            { type: "checkbox", text: "What stops your learning?", options: ["Too much reading", "Long videos without action", "No real-world application", "Lack of a clear path"] }
        ]
    },
    {
        title: "5. The Workshop (Solve)",
        questions: [
            { type: "radio", text: "You're at a party/gathering. What are you doing?", options: ["Organizing the food/logistics", "Fixing the tech/Wi-Fi issue", "Leading the conversation", "Helping a friend solve a problem 1-on-1"] },
            { type: "textarea", text: "What is a 'hard problem' you actually enjoyed fixing?" }
        ]
    },
    {
        title: "6. The Horizon (Goals)",
        questions: [
            { type: "text", text: "Target Income Goal?", id: "income-goal" },
            { type: "checkbox", text: "Non-Negotiables?", options: ["Work from Home", "9-5 Predictability", "Community Impact", "Hands-on Work", "Creativity"] }
        ]
    }
];

// ... (Rest of the logic from your app.js: class QuestionnaireApp, render methods, etc.)
// UPDATE THE PROMPT IN YOUR APP.JS TO THIS:

const outputPromptText = `
**Goal:** Act as a world-class Career Strategist for a user at a crossroads.
**Context:** Use their 'Arena' (Play), 'Feed' (Media), and 'Lab' (Learning) habits to identify their psychological archetype.

**MANDATORY OUTPUT:**
1. **The Archetype:** Deeply analyze their strengths based on their hobbies (e.g., how Backgammon strategy relates to Logistics).
2. **3 Viable Career Paths:** Unique roles that align with their $ income and lifestyle goals.
3. **The Learning Plan (Exploration First):** For each path, list at least 2 FREE or AFFORDABLE resources (Khan Academy, Coursera Audit, MIT OCW).
4. **Tailored Financial Aid:** Search for Pell Grants, WIOA, and local NJ-specific grants (since user is in Clifton/NJ).
5. **The Narrative Bank:** - Resume Objectives.
   - Interview Talking Points (bridging past experience like retail/sports to new career).
   - Application Essay Starters.
6. **Action Steps:** A concrete "This Week" checklist.

**STRICT LINK RULE:** Use [Resource Name](URL) format. If link is uncertain, use Google Search Logic: https://www.google.com/search?q=[Topic]+[Location].
`;
