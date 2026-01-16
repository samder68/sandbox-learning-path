// Questionnaire data with all 113 questions across 15 sections
const questionnaireData = [
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
      { type: "textarea", text: "When have you helped others achieve their goals or solve problems?", hasTextbox: true, textboxPrompt: "Think about formal mentoring, informal help, or any way you've made a difference." },
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
    if (!nav) return;
    nav.innerHTML = questionnaireData.map((section, index) =>
      `<button type="button" class="section-nav-btn ${index === this.currentSection ? 'active' : ''}" data-section="${index}">
        ${index + 1}. ${section.title}
      </button>`
    ).join('');
  }

  renderForm() {
    const form = document.getElementById('questionnaire');
    if (!form) return;
    form.innerHTML = '';
    questionnaireData.forEach((section, sIndex) => {
      const div = document.createElement('div');
      div.className = 'section';
      div.id = `section-${sIndex}`;
      div.innerHTML = `<h2 class="section__title">${section.title}</h2>` + 
        section.questions.map((q, qIndex) => this.renderQuestion(q, sIndex, qIndex)).join('');
      form.appendChild(div);
    });
  }

  renderQuestion(q, sIndex, qIndex) {
    const qId = q.id || `q_${sIndex}_${qIndex}`;
    const val = this.responses[qId] || '';
    let inputHTML = '';

    switch (q.type) {
      case 'text':
        inputHTML = `<input type="text" name="${qId}" value="${val}" class="form-control">`;
        break;
      case 'textarea':
        inputHTML = `<textarea name="${qId}" class="form-control" rows="3">${val}</textarea>`;
        break;
      case 'radio':
        inputHTML = `<div class="radio-group">${q.options.map((opt, i) => `
          <div class="radio-option">
            <input type="radio" id="${qId}_${i}" name="${qId}" value="${opt}" ${val === opt ? 'checked' : ''}>
            <label for="${qId}_${i}">${opt}</label>
          </div>`).join('')}</div>`;
        break;
      case 'checkbox':
        const vals = Array.isArray(val) ? val : [];
        inputHTML = `<div class="checkbox-group">${q.options.map((opt, i) => `
          <div class="checkbox-option">
            <input type="checkbox" id="${qId}_${i}" name="${qId}" value="${opt}" ${vals.includes(opt) ? 'checked' : ''}>
            <label for="${qId}_${i}">${opt}</label>
          </div>`).join('')}</div>`;
        break;
      case 'rating':
        const labels = q.labels || ["Strongly Disagree", "Strongly Agree"];
        inputHTML = `<div class="rating-scale"><div class="rating-inputs">` +
          Array.from({ length: q.scale }, (_, i) => i + 1).map(n => `
            <label><input type="radio" name="${qId}" value="${n}" ${val == n ? 'checked' : ''}> ${n}</label>
          `).join('') + `</div></div><div class="rating-scale__labels"><span>${labels[0]}</span><span>${labels[1]}</span></div>`;
        break;
    }

    let textboxHTML = '';
    if (q.hasTextbox) {
      const tId = `${qId}_textbox`;
      textboxHTML = `<div class="question__textbox"><label class="question__textbox-label">${q.textboxPrompt}</label>
               <textarea name="${tId}" class="form-control" rows="2">${this.responses[tId] || ''}</textarea></div>`;
    }

    return `<div class="question">
              <div class="question__number">Question ${sIndex + 1}.${qIndex + 1}</div>
              <div class="question__text">${q.text}</div>
              <div class="question__input">${inputHTML}</div>
              ${textboxHTML}
            </div>`;
  }

  setupEventListeners() {
    const nav = document.getElementById('sectionNav');
    if (nav) {
      nav.addEventListener('click', (e) => {
        if (e.target.dataset.section) this.navigateToSection(parseInt(e.target.dataset.section));
      });
    }

    const form = document.getElementById('questionnaire');
    if (form) {
      form.addEventListener('input', (e) => {
        const name = e.target.name;
        if (e.target.type === 'checkbox') {
          const checked = Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(cb => cb.value);
          this.responses[name] = checked;
        } else {
          this.responses[name] = e.target.value;
        }
        this.updateProgress();
      });
    }

    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) downloadBtn.addEventListener('click', () => this.downloadCombinedFile());

    const aiBtn = document.getElementById('getAiRecommendationsBtn');
    if (aiBtn) aiBtn.addEventListener('click', () => this.getRecommendations());

    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) resetBtn.addEventListener('click', () => this.resetForm());
  }

  navigateToSection(idx) {
    this.currentSection = idx;
    const target = document.getElementById(`section-${idx}`);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    document.querySelectorAll('.section-nav-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
  }

  updateProgress() {
    const total = questionnaireData.reduce((acc, s) => acc + s.questions.length, 0);
    const answered = Object.keys(this.responses).filter(k => !k.endsWith('_textbox') && this.responses[k]?.length > 0).length;
    const pct = Math.round((answered / total) * 100);
    const pb = document.getElementById('progressBar');
    const pt = document.getElementById('progressText');
    if (pb) pb.style.width = `${pct}%`;
    if (pt) pt.textContent = `${answered} of ${total} questions answered (${pct}%)`;
  }

  startAutoSave() {
    setInterval(() => localStorage.setItem('user_responses', JSON.stringify(this.responses)), 5000);
  }

  loadResponses() {
    return JSON.parse(localStorage.getItem('user_responses')) || {};
  }

  resetForm() {
    if (confirm("WARNING: This will permanently delete all your responses on this device. Do you want to continue?")) {
      localStorage.removeItem('user_responses');
      window.location.reload();
    }
  }

  downloadCombinedFile() {
    let responseText = '';
    questionnaireData.forEach((section, sIndex) => {
      responseText += `\n--- SECTION: ${section.title.toUpperCase()} ---\n`;
      section.questions.forEach((q, qIndex) => {
        const qId = q.id || `q_${sIndex}_${qIndex}`;
        const ans = this.responses[qId];
        const textAns = this.responses[`${qId}_textbox`];
        if (ans || textAns) {
          responseText += `Q: ${q.text}\n`;
          if (ans) responseText += `A: ${Array.isArray(ans) ? ans.join(', ') : ans}\n`;
          if (textAns) responseText += `Notes: ${textAns}\n`;
        }
      });
    });

    const combinedOutput = `INSTRUCTIONS FOR AI:\n\n${outputPromptText}\n\nUSER RESPONSES:\n${responseText}`;
    const blob = new Blob([combinedOutput], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `MY_CAREER_DISCOVERY_${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async getRecommendations() {
    const resultsSection = document.getElementById('resultsSection');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const analysisResults = document.getElementById('analysisResults');

    if (resultsSection) resultsSection.classList.remove('hidden');
    if (loadingSpinner) loadingSpinner.classList.remove('hidden');
    if (analysisResults) analysisResults.innerHTML = ''; 
    if (resultsSection) resultsSection.scrollIntoView({ behavior: 'smooth' });

    const formattedData = this.prepareDataForAi();

    try {
      const response = await fetch('/api/generate-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          profile: formattedData,
          prompt: outputPromptText 
        })
      });

      const data = await response.json();
      
      if (loadingSpinner) loadingSpinner.classList.add('hidden');
      
      if (data && data.text) {
        // Safe, step-by-step formatting
        let text = data.text;
        
        // 1. Bold text
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        // 2. Headers
        text = text.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        
        // 3. Make Links Clickable (handles complex URLs)
        text = text.replace(/((http|https):\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="ai-link">$1</a>');
        
        // 4. Line Breaks
        text = text.replace(/\n/g, '<br>');
        
        analysisResults.innerHTML = `<div class="ai-response">${text}</div>`;
      } else {
        analysisResults.innerHTML = "I'm sorry, I couldn't generate recommendations right now. Please try again.";
      }

    } catch (error) {
      if (loadingSpinner) loadingSpinner.classList.add('hidden');
      if (analysisResults) analysisResults.innerHTML = '<p>Something went wrong. Please check your internet connection and try again.</p>';
      console.error('AI Error:', error);
    }
  }

  prepareDataForAi() {
    let summary = "USER RESPONSES:\n";
    for (const [key, value] of Object.entries(this.responses)) {
      if (value && value.length > 0) {
        summary += `${key}: ${Array.isArray(value) ? value.join(', ') : value}\n`;
      }
    }
    return summary;
  }
}

// Updated Master Prompt to ensure better link stability
const outputPromptText = `prompt:

**Goal:** Provide a balanced roadmap of Free training (online) and Formal Education (local/online) based on user data.

**CRITICAL LINKING RULE:** 1. Use real, verified platforms only.
2. If unsure of a direct course URL, provide a search-engine link.
3. Examples:
- MIT: https://ocw.mit.edu/search/?q=[Course+Name]
- Khan Academy: https://www.khanacademy.org/search?page_search_query=[Course+Name]
- General search for Local Colleges: https://www.google.com/search?q=[College+Name]+[Program+Name]

**SCOPE:**
- **Free:** MOOCs, OpenCourseWare.
- **Formal:** Community Colleges, Trade Schools, State Universities (local to user's city).
- **Online Degrees:** Low-cost options like WGU or SNHU.

**OUTPUT TEMPLATE:**
🎯 **ANALYSIS**
[Brief summary of fit]

🎓 **PATHS**
[Provide 3 paths. Each path must list a specific Free resource and a specific Formal institution/degree.]

💰 **AID & GRANTS**
[Pell Grants, local state workforce grants, etc.]

🗺️ **LOCAL INSTITUTIONS**
[List 3-4 real institutions in the user's region with search-ready links.]

📝 **CAREER BANK**
[Resume objectives and narrative themes.]

🎯 **NEXT STEPS**
[Specific immediate actions.]`;

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
    new QuestionnaireApp();
});
