// Questionnaire data with all 113 questions across 15 sections
const questionnaireData = [
    // --- PASTE YOUR FULL questionnaireData ARRAY HERE ---
    // (It's too long to include again, just copy it from your original app.js file)
  {
    title: "Why Are YOU Here? (Goals)",
    questions: [
      {
        type: "checkbox",
        text: "What's your main reason for using this tool? (Check all that apply)",
        options: [
          "I have no idea what I want to study or do for work",
          "I want to explore career options before committing to college",
          "I'm looking for free ways to learn new skills",
          "I need help finding scholarships or financial aid",
          "I want to change careers but don't know where to start",
          "I'm curious about myself and what fits my personality",
          "I need material for college essays or applications",
          "Someone suggested I check this out",
          "I'm just Browse/curious"
        ],
        hasTextbox: true,
        textboxPrompt: "What else brought you here today? Think about what's going on in your life that made you want to explore learning opportunities."
      },
      {
        type: "textarea",
        text: "What would make this time well-spent for you? What are you hoping to gain or discover?",
        hasTextbox: true,
        textboxPrompt: "Describe what success looks like after completing this questionnaire."
      },
      {
        type: "radio",
        text: "How much time do you want to spend on this questionnaire?",
        options: ["Less than 30 minutes", "30-60 minutes", "1-2 hours", "Take my time over multiple sessions"]
      },
      {
        type: "textarea",
        text: "Are you currently facing any specific decisions or deadlines related to education or career choices?",
        hasTextbox: true,
        textboxPrompt: "Think about any upcoming decisions, application deadlines, or life changes that are motivating you to explore your options now."
      },
      {
        type: "textarea",
        text: "What's your biggest question about your future right now?",
        hasTextbox: true,
        textboxPrompt: "This might be about career paths, education choices, or life direction in general."
      }
    ]
  },
  {
    title: "Who YOU Are (Identity & Background)",
    questions: [
      { type: "radio", text: "What's your age range?", options: ["Under 18", "18-24", "25-34", "35-44", "45-54", "55-64", "65+"] },
      { type: "radio", text: "How do you identify your gender?", options: ["Woman", "Man", "Non-binary", "Prefer not to say", "Other"] },
      { type: "checkbox", text: "What racial or ethnic background(s) do you identify with? (Select all that apply)", options: ["White", "Black/African American", "Hispanic/Latino", "Asian", "Native American", "Pacific Islander", "Middle Eastern", "Other", "Prefer not to say"] },
      { type: "text", text: "Where are you located? (City, State/Province, Country)", id: "user-location" },
      { type: "checkbox", text: "What languages do you speak? (Select all that apply)", options: ["English", "Spanish", "French", "German", "Chinese/Mandarin", "Japanese", "Korean", "Arabic", "Portuguese", "Russian", "Other"] },
      { type: "text", text: "How would you describe your religious or spiritual identity? (Optional)" },
      { type: "radio", text: "If you're comfortable sharing, how would you describe your political views?", options: ["Very liberal", "Liberal", "Moderate", "Conservative", "Very conservative", "No political views", "Prefer not to say"] },
      { type: "radio", text: "Do you identify as having a learning difference, disability, or neurodivergence?", options: ["Yes", "No", "Unsure", "Prefer not to say"] },
      { type: "textarea", text: "How has your family background or upbringing influenced your goals and values?", hasTextbox: true, textboxPrompt: "Think about family expectations, cultural traditions, or experiences that have shaped who you are." },
      { type: "textarea", text: "What communities or groups do you feel most connected to?", hasTextbox: true, textboxPrompt: "This could include cultural communities, online groups, professional networks, hobby communities, etc." }
    ]
  },
  {
    title: "YOUR Current Reality (Lifestyle & Access)",
    questions: [
      { type: "radio", text: "What best describes your current situation?", options: ["Full-time student", "Part-time student", "Full-time employed", "Part-time employed", "Unemployed/job searching", "Self-employed/freelancer", "Caring for family members", "Retired", "Between opportunities", "Other"] },
      { type: "radio", text: "Are you planning to pursue formal education or training?", options: ["Yes, within 6 months", "Yes, within 1-2 years", "Maybe someday", "No, looking for alternatives", "Already enrolled in something"] },
      { type: "radio", text: "Realistically, how much time do you have available for learning or skill development?", options: ["Less than 5 hours/week", "5-10 hours/week", "10-20 hours/week", "20-40 hours/week", "More than 40 hours/week", "Very inconsistent schedule"] },
      { type: "checkbox", text: "What devices do you have reliable access to? (Select all that apply)", options: ["Smartphone", "Laptop", "Desktop computer", "Tablet", "None of these regularly"] },
      { type: "radio", text: "How would you rate your internet access?", options: ["Excellent (high-speed, reliable)", "Good (mostly reliable)", "Fair (sometimes slow/cuts out)", "Poor (limited access)", "Very limited or no access"] },
      { type: "radio", text: "Do you have a quiet, private space where you can focus on learning?", options: ["Yes, always available", "Yes, sometimes available", "Rarely available", "No quiet space available"] },
      { type: "textarea", text: "Do you have caregiving responsibilities that affect your schedule or energy?", hasTextbox: true, textboxPrompt: "This could include children, elderly parents, family members with disabilities, etc." },
      { type: "rating", text: "How much do financial concerns affect your educational or career decisions?", scale: 5, labels: ["No impact", "Major impact"] },
      { type: "rating", text: "How emotionally ready do you feel for making significant changes in your life?", scale: 5, labels: ["Not ready", "Very ready"] },
      { type: "textarea", text: "Describe your typical energy levels and how your daily life is structured", hasTextbox: true, textboxPrompt: "Think about when you have the most energy, what drains you, and how predictable your routine is." }
    ]
  },
  {
    title: "How YOU Learn Best (Learning Preferences)",
    questions: [
      { type: "radio", text: "What's your preferred learning pace?", options: ["Very fast - I like to move quickly", "Fast - I prefer efficiency", "Moderate - Steady but thorough", "Slow and thorough - I need time to process", "Very slow - I need lots of time and repetition"] },
      { type: "checkbox", text: "What learning formats appeal to you most? (Select all that apply)", options: ["Online courses/videos", "In-person classes", "Books and reading", "Podcasts/audio", "Hands-on workshops", "One-on-one tutoring/mentoring", "Study groups", "Self-paced learning", "Other"] },
      { type: "radio", text: "Do you prefer learning alone or with others?", options: ["Always alone", "Usually alone", "No strong preference", "Usually with others", "Always with others"] },
      { type: "rating", text: "How comfortable are you with online/digital learning?", scale: 5, labels: ["Very uncomfortable", "Very comfortable"] },
      { type: "textarea", text: "Describe the best learning experience you've ever had - what made it work so well?", hasTextbox: true, textboxPrompt: "This could be from school, work training, a hobby, or anywhere else." },
      { type: "radio", text: "How much structure do you prefer in your learning?", options: ["Highly structured with clear curriculum", "Some structure with flexibility", "Minimal structure, mostly self-directed", "Complete freedom to explore"] },
      { type: "textarea", text: "What learning accommodations or supports do you need to be successful?", hasTextbox: true, textboxPrompt: "This could include extra time, different formats, specific technologies, etc." },
      { type: "textarea", text: "What learning methods have NOT worked well for you in the past?", hasTextbox: true, textboxPrompt: "Understanding what doesn't work is just as important as knowing what does." }
    ]
  },
  {
    title: "YOUR Academic Journey (School Experiences)",
    questions: [
      { type: "radio", text: "What's the highest level of education you've completed?", options: ["Less than high school", "High school diploma/GED", "Some college (no degree)", "Associate degree", "Bachelor's degree", "Master's degree", "Doctoral degree", "Professional degree (law, medicine, etc.)"] },
      { type: "text", text: "What was your main field of study or area of focus?" },
      { type: "rating", text: "How satisfied were you with your previous educational experiences?", scale: 5, labels: ["Very dissatisfied", "Very satisfied"] },
      { type: "textarea", text: "What subjects or areas did you excel in during school?", hasTextbox: true, textboxPrompt: "Think about both the subjects themselves and what made you good at them." },
      { type: "textarea", text: "What subjects or areas did you struggle with, and why do you think that was?", hasTextbox: true, textboxPrompt: "Was it the content, teaching style, your interest level, or something else?" },
      { type: "radio", text: "How long has it been since you were last in a formal educational setting?", options: ["Currently enrolled", "Less than 1 year", "1-3 years", "3-5 years", "5-10 years", "More than 10 years"] },
      { type: "textarea", text: "What study habits or learning strategies worked best for you?", hasTextbox: true, textboxPrompt: "Think about how you prepared for tests, completed projects, or mastered difficult material." },
      { type: "rating", text: "How confident do you feel about your ability to succeed in academic learning?", scale: 5, labels: ["Not confident", "Very confident"] },
      { type: "textarea", text: "If you could redesign your educational experience, what would you change?", hasTextbox: true, textboxPrompt: "Think about pace, content, teaching methods, or anything else that would have made it better." }
    ]
  },
  {
    title: "YOUR Work & Life Experience",
    questions: [
      { type: "textarea", text: "Describe your current job or most recent work experience" },
      { type: "checkbox", text: "What industries or sectors have you worked in? (Select all that apply)", options: ["Technology", "Healthcare", "Education", "Retail/Customer service", "Manufacturing", "Finance/Banking", "Government", "Non-profit", "Food service", "Construction/Trades", "Transportation", "Other"] },
      { type: "textarea", text: "What work tasks or responsibilities do you find most enjoyable?", hasTextbox: true, textboxPrompt: "Think about the specific activities that make you feel engaged and energized." },
      { type: "textarea", text: "What work tasks or responsibilities do you find most draining or frustrating?", hasTextbox: true, textboxPrompt: "Consider what makes you feel stressed, bored, or unfulfilled." },
      { type: "rating", text: "How satisfied are you with your current career path?", scale: 5, labels: ["Very dissatisfied", "Very satisfied"] },
      { type: "textarea", text: "What would you change about your work situation if you could?", hasTextbox: true, textboxPrompt: "This could be about the work itself, the environment, schedule, pay, or anything else." }
    ]
  },
  {
    title: "What Interests YOU (Passions & Curiosities)",
    questions: [
      { type: "checkbox", text: "What subject areas genuinely interest you? (Select all that apply)", options: ["Technology/Programming", "Business/Entrepreneurship", "Arts/Creative fields", "Sciences (Biology, Chemistry, Physics)", "Healthcare/Medicine", "Education/Teaching", "Social work/Human services", "Skilled trades", "Sports/Fitness", "Environmental issues", "Other"] },
      { type: "textarea", text: "What hobbies or interests do you pursue in your free time?", hasTextbox: true, textboxPrompt: "Include anything you do for enjoyment, learning, or personal satisfaction." },
      { type: "checkbox", text: "What types of activities energize you? (Select all that apply)", options: ["Solving complex problems", "Creating or building things", "Helping others", "Leading teams or projects", "Analyzing data or information", "Working with your hands", "Teaching or explaining", "Performing or presenting", "Organizing and planning", "Other"] },
      { type: "textarea", text: "What topics do you find yourself reading about or researching in your spare time?", hasTextbox: true, textboxPrompt: "Think about what you're naturally curious about." },
      { type: "textarea", text: "If you had unlimited time and resources, what would you want to learn or explore?", hasTextbox: true, textboxPrompt: "Don't worry about practicality - what genuinely excites you?" },
      { type: "textarea", text: "What problems in the world do you wish you could help solve?", hasTextbox: true, textboxPrompt: "This could be local community issues or global challenges." },
      { type: "checkbox", text: "What motivates you to learn new things? (Select all that apply)", options: ["Career advancement", "Personal growth", "Pure curiosity", "Solving problems", "Financial improvement", "Recognition/achievement", "Helping others", "Creative expression", "Other"] },
      { type: "textarea", text: "Describe a time when you learned something challenging successfully - what kept you motivated?", hasTextbox: true, textboxPrompt: "This could be from work, school, hobbies, or personal life." },
      { type: "rating", text: "How much do you enjoy learning new things in general?", scale: 5, labels: ["Dislike learning", "Love learning"] },
      { type: "textarea", text: "What's something you've always wanted to try but haven't had the chance to?", hasTextbox: true, textboxPrompt: "This could be a skill, career, experience, or area of study." },
      { type: "textarea", text: "When you imagine your ideal day, what activities are you doing?", hasTextbox: true, textboxPrompt: "Think about both work and personal activities that would make you feel fulfilled." }
    ]
  },
  {
    title: "YOUR Work Environment Preferences",
    questions: [
      { type: "radio", text: "What work setting appeals to you most?", options: ["Home office/remote", "Traditional office environment", "Flexible/hybrid arrangement", "Outdoor settings", "Travel frequently", "Various locations", "Laboratory/technical facility", "Other"] },
      { type: "checkbox", text: "What work schedule would fit your life best? (Select all that apply)", options: ["Traditional 9-5 weekdays", "Flexible hours", "Part-time", "Night shifts", "Weekend work", "Seasonal work", "Project-based work", "Other"] },
      { type: "rating", text: "How important is high income versus meaningful work to you?", scale: 5, labels: ["Meaningful work most important", "High income most important"] },
      { type: "textarea", text: "Describe the type of company culture or work environment where you thrive", hasTextbox: true, textboxPrompt: "Think about atmosphere, values, communication style, etc." }
    ]
  },
  {
    title: "YOUR Goals & Dreams (Motivation & Vision)",
    questions: [
      { type: "textarea", text: "What does success look like to you in 5 years?", hasTextbox: true, textboxPrompt: "Think about career, personal life, lifestyle, relationships, impact, etc." },
      { type: "checkbox", text: "What are your top priorities right now? (Select all that apply)", options: ["Career growth", "Financial stability", "Work-life balance", "Personal relationships", "Health and wellness", "Education/learning", "Creative expression", "Community involvement", "Family", "Other"] },
      { type: "rating", text: "How motivated are you to make significant changes in your life?", scale: 5, labels: ["Not motivated", "Very motivated"] },
      { type: "textarea", text: "What's driving your interest in career or education changes right now?", hasTextbox: true, textboxPrompt: "What's happening in your life that's making you want to explore new directions?" },
      { type: "radio", text: "How quickly do you want to see results from new learning or career changes?", options: ["I need immediate results", "Within 6 months", "Within 1-2 years", "I'm patient for long-term goals", "No specific timeline"] },
      { type: "textarea", text: "What would you regret NOT pursuing if you look back in 10 years?", hasTextbox: true, textboxPrompt: "Think about opportunities, experiences, or paths you don't want to miss." },
      { type: "checkbox", text: "What outcomes are most important to you in your next career or educational step? (Select all that apply)", options: ["High income potential", "Job security", "Creative fulfillment", "Helping others", "Recognition/prestige", "Flexibility/autonomy", "Continuous learning opportunities", "Work-life balance", "Other"] },
      { type: "textarea", text: "Who are your role models or people who inspire you?", hasTextbox: true, textboxPrompt: "This could be people you know personally, public figures, or fictional characters." },
      { type: "textarea", text: "What kind of legacy do you want to leave or impact do you want to have?", hasTextbox: true, textboxPrompt: "Think about how you want to be remembered or what you want to contribute to the world." }
    ]
  },
  {
    title: "What Holds YOU Back (Obstacles & Challenges)",
    questions: [
      { type: "checkbox", text: "What obstacles are you currently facing? (Select all that apply)", options: ["Financial constraints", "Time limitations", "Family obligations", "Health issues", "Lack of information", "Fear of failure", "Imposter syndrome", "Age-related concerns", "Location limitations", "Lack of support", "Other"] },
      { type: "textarea", text: "What has held you back from pursuing your goals in the past?", hasTextbox: true, textboxPrompt: "Be honest about both external barriers and internal fears or doubts." },
      { type: "rating", text: "How confident are you in your ability to overcome challenges?", scale: 5, labels: ["Not confident", "Very confident"] },
      { type: "textarea", text: "What support systems do you have? (family, friends, mentors, communities)", hasTextbox: true, textboxPrompt: "Think about who you can count on for encouragement, advice, or practical help." },
      { type: "radio", text: "How do you typically handle setbacks or failures?", options: ["Push through immediately", "Take time to regroup and plan", "Seek help from others", "Change my approach", "Take a break and revisit later", "Often give up"] },
      { type: "textarea", text: "What skills or knowledge do you feel you're missing to reach your goals?", hasTextbox: true, textboxPrompt: "Think about both technical skills and soft skills." },
      { type: "rating", text: "How much does fear of failure influence your decisions?", scale: 5, labels: ["No influence", "Major influence"] },
      { type: "textarea", text: "What would you attempt if you knew you couldn't fail?", hasTextbox: true, textboxPrompt: "This can help identify what fear might be holding you back from." },
      { type: "textarea", text: "What practical steps could you take to address your biggest obstacles?", hasTextbox: true, textboxPrompt: "Think about specific, actionable things you could do to move forward." }
    ]
  },
  {
    title: "YOUR Success Stories (Positive Experiences)",
    questions: [
      { type: "textarea", text: "Describe a significant accomplishment you're proud of", hasTextbox: true, textboxPrompt: "This could be from work, school, personal life, volunteering, etc." },
      { type: "textarea", text: "Tell me about a time you overcame a major challenge or obstacle", hasTextbox: true, textboxPrompt: "What strategies did you use? What did you learn about yourself?" },
      { type: "textarea", "text": "When have you helped others achieve their goals or solve problems?", hasTextbox: true, textboxPrompt: "Think about formal mentoring, informal help, or any way you've made a difference." },
      { type: "textarea", text: "What project or achievement taught you the most about yourself?", hasTextbox: true, textboxPrompt: "What did you discover about your strengths, interests, or values?" },
      { type: "checkbox", text: "What strengths do others often compliment you on? (Select all that apply)", options: ["Problem-solving", "Communication", "Leadership", "Creativity", "Organization", "Empathy/emotional intelligence", "Technical skills", "Reliability", "Teaching/explaining", "Teamwork", "Other"] },
      { type: "textarea", text: "Describe a time when you had to learn something completely new - how did you approach it?", hasTextbox: true, textboxPrompt: "Think about your learning process and what strategies worked." },
      { type: "textarea", text: "What's something you've taught others successfully?", hasTextbox: true, textboxPrompt: "This could be formal teaching or informal sharing of knowledge/skills." },
      { type: "rating", text: "How good are you at finishing projects or commitments you start?", scale: 5, labels: ["Rarely finish", "Always finish"] }
    ]
  },
  {
    title: "YOUR Values & Community (What Matters)",
    questions: [
      { type: "checkbox", text: "What values are most important to you? (Select all that apply)", options: ["Honesty/integrity", "Creativity", "Security/stability", "Freedom/independence", "Achievement", "Service to others", "Family", "Adventure", "Justice/fairness", "Learning/growth", "Other"] },
      { type: "textarea", text: "How important is making a positive impact on others in your work or life?", hasTextbox: true, textboxPrompt: "Think about whether and how you want to help, serve, or influence others." },
      { type: "radio", text: "Do you prefer working independently or collaboratively?", options: ["Strongly prefer working alone", "Prefer working alone", "No strong preference", "Prefer working with others", "Strongly prefer working with others"] },
      { type: "textarea", text: "What causes or issues do you care deeply about?", hasTextbox: true, textboxPrompt: "This could be social, environmental, political, or any other issues that matter to you." },
      { type: "rating", text: "How important is work-life balance to you?", scale: 5, labels: ["Not important", "Extremely important"] },
      { type: "textarea", text: "How do you want to contribute to your community or society?", hasTextbox: true, textboxPrompt: "Think about both local community and broader society." },
      { type: "textarea", text: "What does diversity and inclusion mean to you, and how important is it in your work environment?", hasTextbox: true, textboxPrompt: "Consider how diversity affects your comfort and effectiveness at work." }
    ]
  },
  {
    title: "Money & Practical Concerns (Financial Reality)",
    questions: [
      { type: "radio", text: "What's your current household income range?", options: ["Under $25,000", "$25,000-$50,000", "$50,000-$75,000", "$75,000-$100,000", "$100,000-$150,000", "Over $150,000", "Prefer not to say"] },
      { type: "radio", text: "How much can you realistically invest in education or training?", options: ["Under $1,000", "$1,000-$5,000", "$5,000-$15,000", "$15,000-$30,000", "Over $30,000", "I need free or low-cost options", "I need financial aid"] },
      { type: "checkbox", text: "What financial aid options are you interested in? (Select all that apply)", options: ["Scholarships", "Grants", "Student loans", "Work-study programs", "Employer tuition assistance", "Payment plans", "Income-based repayment", "Other"] },
      { type: "textarea", text: "Do you have any unique circumstances that might qualify you for specific scholarships or aid?", hasTextbox: true, textboxPrompt: "This could include background, experiences, location, field of study, etc." },
      { type: "radio", text: "How important is it to earn money while you're learning or training?", options: ["Essential - I must work while learning", "Very important", "Somewhat important", "Not important - I can focus on learning", "Not applicable"] },
      { type: "rating", text: "How comfortable are you with taking on educational debt?", scale: 5, labels: ["Very uncomfortable", "Very comfortable"] },
      { type: "textarea", text: "What's your target income goal after completing additional training or education?", hasTextbox: true, textboxPrompt: "Think about both starting salary and longer-term earning potential." }
    ]
  },
  {
    title: "YOUR Career Personality (Optional Assessment)",
    questions: [
      { type: "radio", text: "Do you prefer routine and predictability or variety and change in your work?", options: ["Love routine and predictability", "Prefer routine with some variety", "Like a good mix of both", "Prefer variety with some routine", "Crave constant change and new challenges"] },
      { type: "checkbox", text: "What work activities appeal to you most? (Select all that apply)", options: ["Analyzing data and information", "Creating content or designs", "Managing people and projects", "Solving technical problems", "Building relationships", "Working with your hands", "Teaching or training others", "Performing or presenting", "Other"] },
      { type: "radio", text: "How do you prefer to make decisions?", options: ["Quickly with gut instinct", "After some research and thought", "After extensive analysis", "With input from others", "Very slowly and carefully"] },
      { type: "rating", text: "How comfortable are you with taking risks?", scale: 5, labels: ["Very risk-averse", "Very comfortable with risk"] },
      { type: "radio", text: "In group settings, do you prefer to lead or follow?", options: ["Always prefer to lead", "Usually prefer to lead", "Depends on the situation", "Usually prefer to follow", "Always prefer to follow"] },
      { type: "textarea", text: "What type of recognition or rewards motivate you most?", hasTextbox: true, textboxPrompt: "Think about public recognition, private feedback, monetary rewards, advancement opportunities, etc." }
    ]
  },
  {
    title: "YOUR Next Steps (Action & Commitment)",
    questions: [
      { type: "radio", text: "What's your realistic timeline for making significant changes?", options: ["I want to start immediately", "Within 3 months", "Within 6 months", "Within 1 year", "1-2 years", "More than 2 years", "No specific timeline"] },
      { type: "textarea", text: "What specific information do you need most to move forward with your goals?", hasTextbox: true, textboxPrompt: "Think about career details, educational requirements, financial information, etc." },
      { type: "checkbox", text: "What type of support would be most helpful to you? (Select all that apply)", options: ["Career counseling", "Financial aid guidance", "Academic advising", "Mentorship", "Skills assessment", "Job search help", "Networking opportunities", "Practical planning assistance", "Other"] },
      { type: "rating", text: "How ready are you to take concrete action on your goals?", scale: 5, labels: ["Not ready yet", "Ready to act now"] },
      { type: "textarea", text: "What's your biggest remaining question or concern about moving forward?", hasTextbox: true, textboxPrompt: "What's still holding you back or making you uncertain?" },
      { type: "textarea", text: "What would you like to commit to doing in the next 30 days to move toward your goals?", hasTextbox: true, textboxPrompt: "Think about small, specific steps you can realistically take." }
    ]
  }
];

class QuestionnaireApp {
  constructor() {
    this.responses = this.loadResponses();
    this.currentSection = 0;
    this.autoSaveInterval = null;
    // Bind the analyze method to the class instance
    this.analyzeResponses = this.analyzeResponses.bind(this);
    this.init();
  }

  init() {
    this.renderNavigation();
    this.renderForm();
    this.updateProgress();
    this.setupEventListeners();
    this.startAutoSave();
  }

  renderNavigation() {
    const nav = document.getElementById('sectionNav');
    nav.innerHTML = questionnaireData.map((section, index) =>
      `<button type="button" class="section-nav-btn ${index === this.currentSection ? 'active' : ''}" 
              data-section="${index}">
        ${index + 1}. ${section.title}
      </button>`
    ).join('');
  }

  renderForm() {
    const form = document.getElementById('questionnaire');
    form.innerHTML = '';

    questionnaireData.forEach((section, sectionIndex) => {
      const sectionDiv = document.createElement('div');
      sectionDiv.className = 'section';
      sectionDiv.id = `section-${sectionIndex}`;

      sectionDiv.innerHTML = `
        <h2 class="section__title">${section.title}</h2>
        ${section.questions.map((question, questionIndex) =>
        this.renderQuestion(question, sectionIndex, questionIndex)
      ).join('')}
      `;

      form.appendChild(sectionDiv);
    });
  }

  renderQuestion(question, sectionIndex, questionIndex) {
    // We add a specific ID for the location question to easily grab its value later
    const questionId = question.id ? question.id : `q_${sectionIndex}_${questionIndex}`;
    const savedValue = this.responses[questionId] || '';

    let inputHTML = '';

    switch (question.type) {
      case 'text':
        // Use the questionId for both id and name
        inputHTML = `<input type="text" id="${questionId}" name="${questionId}" value="${savedValue}" class="form-control">`;
        break;

      case 'textarea':
        inputHTML = `<textarea id="${questionId}" name="${questionId}" class="form-control" rows="3">${savedValue}</textarea>`;
        break;

      case 'radio':
        inputHTML = `
          <div class="radio-group">
            ${question.options.map((option, optionIndex) => `
              <div class="radio-option">
                <input type="radio" id="${questionId}_${optionIndex}" name="${questionId}" 
                       value="${option}" ${savedValue === option ? 'checked' : ''}>
                <label for="${questionId}_${optionIndex}">${option}</label>
              </div>
            `).join('')}
          </div>
        `;
        break;

      case 'checkbox':
        const savedValues = Array.isArray(savedValue) ? savedValue : (savedValue ? [savedValue] : []);
        inputHTML = `
          <div class="checkbox-group">
            ${question.options.map((option, optionIndex) => `
              <div class="checkbox-option">
                <input type="checkbox" id="${questionId}_${optionIndex}" name="${questionId}" 
                       value="${option}" ${savedValues.includes(option) ? 'checked' : ''}>
                <label for="${questionId}_${optionIndex}">${option}</label>
              </div>
            `).join('')}
          </div>
        `;
        break;

      case 'rating':
        const labels = question.labels || ["Strongly Disagree", "Strongly Agree"];
        inputHTML = `
          <div class="rating-scale">
            <div class="rating-inputs">
              ${Array.from({ length: question.scale }, (_, i) => i + 1).map(num => `
                <label>
                  <input type="radio" name="${questionId}" value="${num}" 
                         ${savedValue == num ? 'checked' : ''}>
                  ${num}
                </label>
              `).join('')}
            </div>
          </div>
          <div class="rating-scale__labels">
            <span>${labels[0]}</span>
            <span>${labels[1]}</span>
          </div>
        `;
        break;
    }

    let textboxHTML = '';
    if (question.hasTextbox) {
      const textboxId = `${questionId}_textbox`;
      const textboxValue = this.responses[textboxId] || '';
      textboxHTML = `
        <div class="question__textbox">
          <label for="${textboxId}" class="question__textbox-label">
            ${question.textboxPrompt || 'Please elaborate:'}
          </label>
          <textarea id="${textboxId}" name="${textboxId}" class="form-control" rows="3" placeholder="Optional - add any additional thoughts here...">${textboxValue}</textarea>
        </div>
      `;
    }

    return `
      <div class="question">
        <div class="question__number">Question ${sectionIndex + 1}.${questionIndex + 1}</div>
        <div class="question__text">${question.text}</div>
        <div class="question__input">
          ${inputHTML}
        </div>
        ${textboxHTML}
      </div>
    `;
  }

  setupEventListeners() {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('section-nav-btn')) {
        const sectionIndex = parseInt(e.target.dataset.section);
        this.navigateToSection(sectionIndex);
      }
    });

    document.getElementById('questionnaire').addEventListener('input', (e) => {
      this.handleInputChange(e);
    });

    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => this.downloadResponses());
    }

    const analyzeBtn = document.getElementById('analyzeBtn');
    if (analyzeBtn) {
      // We bind the `analyzeResponses` method here
      analyzeBtn.addEventListener('click', this.analyzeResponses);
    }
  }

  navigateToSection(sectionIndex) {
    this.currentSection = sectionIndex;
    const sectionElement = document.querySelector(`#section-${sectionIndex}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    document.querySelectorAll('.section-nav-btn').forEach((btn, index) => {
      btn.classList.toggle('active', index === sectionIndex);
    });
  }

  handleInputChange(e) {
    const input = e.target;
    const questionId = input.name;
    if (!questionId) return;

    if (input.type === 'checkbox') {
      const checkboxes = document.querySelectorAll(`input[name="${questionId}"]`);
      this.responses[questionId] = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
    } else {
      this.responses[questionId] = input.value;
    }
    this.updateProgress();
  }

  updateProgress() {
    const totalQuestions = questionnaireData.reduce((sum, section) => sum + section.questions.length, 0);
    const answeredQuestions = Object.keys(this.responses).filter(key => {
      if (key.includes('_textbox')) return false;
      const value = this.responses[key];
      return Array.isArray(value) ? value.length > 0 : (value && value.trim() !== '');
    }).length;

    const percentage = totalQuestions > 0 ? Math.round((answeredQuestions / totalQuestions) * 100) : 0;

    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');

    if (progressBar) progressBar.style.width = `${percentage}%`;
    if (progressText) progressText.textContent = `${answeredQuestions} of ${totalQuestions} questions answered (${percentage}%)`;
  }

  startAutoSave() {
    this.autoSaveInterval = setInterval(() => {
      this.saveResponses();
      this.showAutoSaveIndicator();
    }, 30000);
  }

  saveResponses() {
    // In a real app, this would use localStorage or send to a server.
    // For this example, responses are saved in memory.
    localStorage.setItem('questionnaireResponses', JSON.stringify(this.responses));
  }

  loadResponses() {
    // Load responses from localStorage if they exist
    const saved = localStorage.getItem('questionnaireResponses');
    return saved ? JSON.parse(saved) : {};
  }

  showAutoSaveIndicator() {
    let indicator = document.querySelector('.auto-save-indicator');
    if (!indicator) {
      indicator = document.createElement('div');
      indicator.className = 'auto-save-indicator';
      indicator.textContent = 'Responses auto-saved';
      document.body.appendChild(indicator);
    }

    indicator.classList.add('show');
    setTimeout(() => indicator.classList.remove('show'), 2000);
  }

  // NEW METHOD: Generate a clean, human-readable text blob of responses
  generateResponsesText() {
    let content = 'USER QUESTIONNAIRE RESPONSES\n\n';
    questionnaireData.forEach((section, sectionIndex) => {
      let sectionHasAnswer = false;
      let sectionContent = `--- SECTION: ${section.title.toUpperCase()} ---\n`;
      let questionsContent = '';

      section.questions.forEach((question, questionIndex) => {
        const questionId = question.id || `q_${sectionIndex}_${questionIndex}`;
        const answer = this.responses[questionId];
        const textboxId = `${questionId}_textbox`;
        const textboxAnswer = this.responses[textboxId];

        let hasAnswer = false;
        if (answer && (Array.isArray(answer) ? answer.length > 0 : String(answer).trim() !== '')) {
          hasAnswer = true;
        }
        if (textboxAnswer && textboxAnswer.trim() !== '') {
          hasAnswer = true;
        }

        if (hasAnswer) {
          sectionHasAnswer = true;
          questionsContent += `\nQ: ${question.text}\n`;
          if (answer && (Array.isArray(answer) ? answer.length > 0 : String(answer).trim() !== '')) {
            questionsContent += `A: ${Array.isArray(answer) ? answer.join(', ') : answer}\n`;
          }
          if (textboxAnswer && textboxAnswer.trim()) {
            questionsContent += `Additional notes: ${textboxAnswer}\n`;
          }
        }
      });

      if (sectionHasAnswer) {
        content += sectionContent + questionsContent + '\n';
      }
    });
    return content;
  }

  // NEW METHOD: Simple markdown to HTML converter
  formatAnalysisToHTML(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
      .replace(/\n\s*\*\s(.*?)/g, '\n<ul><li>$1</li></ul>') // Bullets
      .replace(/(<\/ul>\n<ul>)/g, '') // Merge adjacent bullet lists
      .replace(/(\r\n|\n|\r)/gm, '<br>') // Line breaks
      .replace(/<br><br>/g, '<p>') // Paragraphs
      .replace(/🎯/g, '<h3>🎯') // Make main titles H3
      .replace(/🎓/g, '<h3>🎓')
      .replace(/💰/g, '<h3>💰')
      .replace(/🗺️/g, '<h3>🗺️')
      .replace(/📝/g, '<h3>📝')
      .replace(/💌/g, '<h3>💌')
      .replace(/Main Platform Links/g, '<h3>Main Platform Links')
      .replace(/<br><h3>/g, '<h3>'); // Clean up spacing around new headers
  }

  async analyzeResponses() {
    const analyzeBtn = document.getElementById('analyzeBtn');
    const resultsSection = document.getElementById('resultsSection');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const analysisResults = document.getElementById('analysisResults');

    resultsSection.classList.remove('hidden');
    loadingSpinner.classList.remove('hidden');
    analysisResults.innerHTML = '';
    analyzeBtn.disabled = true;
    analyzeBtn.textContent = 'Analyzing...';
    resultsSection.scrollIntoView({ behavior: 'smooth' });

    try {
      const responsesText = this.generateResponsesText();
      const location = this.responses['user-location'] || ''; // Get location

      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ responsesText, location })
      });

      if (!response.ok) throw new Error(`API request failed: ${response.status} ${response.statusText}`);

      const data = await response.json();
      if (!data.success) throw new Error(data.error || 'Analysis failed');
      
      // Use the new formatter here!
      analysisResults.innerHTML = this.formatAnalysisToHTML(data.analysis);

    } catch (error) {
      console.error('Analysis failed:', error);
      analysisResults.innerHTML = `
        <div class="card" style="border-left: 4px solid var(--color-error);">
          <div class="card__body">
            <h3 style="color: var(--color-error);">Analysis Error</h3>
            <p>Sorry, we encountered an error: ${error.message}</p>
            <p>Please check your connection or try again. If the problem persists, the service might be temporarily down.</p>
          </div>
        </div>
      `;
    } finally {
      loadingSpinner.classList.add('hidden');
      analyzeBtn.disabled = false;
      analyzeBtn.textContent = '🤖 Get My Recommendations';
    }
  }

  downloadResponses() {
    let content = 'YOUR LEARNING PATH DISCOVERY QUESTIONNAIRE RESPONSES\n\n';
    content += this.generateResponsesText();
    content += '\n--- END OF RESPONSES ---';

    try {
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `learning_path_responses_${new Date().toISOString().split('T')[0]}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    }
  }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  window.app = new QuestionnaireApp();
});