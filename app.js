// Questionnaire data (5 Pillars)
const questionnaireData = [
  {
    title: "Pillar 1: The Practical Foundation (Financial & Aid Eligibility)",
    questions: [
      { type: "text", text: "What is your current zip code?" },

      {
        type: "radio",
        text: "Are you a US Citizen, Permanent Resident, or DACA recipient?",
        options: ["US Citizen", "Permanent Resident", "DACA recipient", "Prefer not to say"],
        hasTextbox: true,
        textboxPrompt: "Optional: add any context (for example, eligibility nuances you want considered)."
      },
      {
        type: "radio",
        text: "What was your total individual/household income for the last tax year?",
        options: [
          "Under $25,000",
          "$25,000–$49,999",
          "$50,000–$74,999",
          "$75,000–$99,999",
          "$100,000–$149,999",
          "$150,000+",
          "Prefer not to say"
        ],
        hasTextbox: true,
        textboxPrompt: "Optional: add context (for example, recent changes, dependents, temporary income)."
      },
      {
        type: "radio",
        text: "Are you currently employed?",
        options: [
          "Full-time",
          "Part-time",
          "Unemployed",
          "Underemployed",
          "Student (Full-time)",
          "Student (Part-time)"
        ],
        hasTextbox: true,
        textboxPrompt: "Optional: add details (for example, industry, schedule constraints, job search status)."
      },
      {
        type: "radio",
        text: "Are you a first-generation college student (the first in your family to attend)?",
        options: ["Yes", "No", "Not sure", "Prefer not to say"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "checkbox",
        text: "Are you a Veteran, active-duty member, a military spouse, or a military child? (Select all that apply)",
        options: ["Veteran", "Active-duty", "Military spouse", "Military child", "None of the above", "Prefer not to say"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context (for example, service branch, benefits you may use)."
      },
      {
        type: "radio",
        text: "Do you identify as a member of an underrepresented community (Race, Ethnicity, or LGBTQ+)?",
        options: ["Yes", "No", "Prefer not to say"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context (only if you want this considered for programs or support)."
      },
      {
        type: "radio",
        text: "Are you a single parent or the primary caregiver for a child or dependent, or were you raised by a single parent?",
        options: ["Yes", "No", "Prefer not to say"],
        hasTextbox: true,
        textboxPrompt: "Optional: add caregiving details that impact time, schedule, or training format."
      },
      {
        type: "radio",
        text: "Do you have a documented disability or have you been diagnosed with a learning difference like ADHD or Dyslexia?",
        options: ["Yes", "No", "Prefer not to say"],
        hasTextbox: true,
        textboxPrompt: "Optional: add any accommodations that help you learn best."
      },
      {
        type: "radio",
        text: "What is the highest level of education you have completed?",
        options: [
          "Some high school",
          "High school diploma / GED",
          "Some college (no degree)",
          "Certificate / Trade program",
          "Associate degree",
          "Bachelor’s degree",
          "Master’s degree",
          "Doctorate / Professional degree",
          "Other"
        ],
        hasTextbox: true,
        textboxPrompt: "Optional: add degree field(s), major, or certifications."
      },
      {
        type: "checkbox",
        text: "Do you speak, read, or write any languages other than English fluently? (Select all that apply)",
        options: ["Spanish", "French", "Arabic", "Mandarin", "Hindi", "Portuguese", "Russian", "Other", "None"],
        hasTextbox: true,
        textboxPrompt: "Optional: list languages and proficiency details (and list any not shown)."
      },
      {
        type: "radio",
        text: "Do you have a reliable laptop and high-speed internet access for home study?",
        options: ["Yes", "No", "Somewhat / depends"],
        hasTextbox: true,
        textboxPrompt: "Optional: explain limitations (device, bandwidth, shared computer, public Wi-Fi, etc.)."
      },
      { type: "text", text: "How many hours per week can you realistically commit to training?" },
      {
        type: "radio",
        text: "Do you have a valid driver’s license and reliable transportation?",
        options: ["Yes", "No", "License but transportation is unreliable", "Prefer not to say"],
        hasTextbox: true,
        textboxPrompt: "Optional: add details (public transit, commute limits, driving constraints)."
      },
      {
        type: "radio",
        text: "If a training program were free but lasted 3–6 months, could you manage your bills during that time?",
        options: ["Yes", "Maybe (with support)", "No", "Not sure"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context (savings, support, part-time work needs, timeline constraints)."
      }
    ]
  },

  {
    title: "Pillar 2: Deep Resonance (Interests & Hobbies)",
    questions: [
      {
        type: "radio",
        text: "Do you enjoy games that involve finding patterns (Wordle, Crosswords, Sudoku)?",
        options: ["Yes", "No", "Sometimes"],
        hasTextbox: true,
        textboxPrompt: "Optional: add examples or favorites."
      },
      {
        type: "radio",
        text: "In a game like Backgammon, Cards, or Chess, do you play safe or do you enjoy taking risks?",
        options: ["Mostly safe", "Mostly risks", "Depends"],
        hasTextbox: true,
        textboxPrompt: "Optional: explain your style."
      },
      {
        type: "radio",
        text: "When you play a game, do you care more about the story/characters or the mechanics/rules?",
        options: ["Story/characters", "Mechanics/rules", "Both equally"],
        hasTextbox: true,
        textboxPrompt: "Optional: add examples."
      },
      {
        type: "radio",
        text: "Do you enjoy games where you manage resources or build a system (Minecraft, The Sims, Civilization)?",
        options: ["Yes", "No", "Sometimes"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      { type: "textarea", text: "What is your favorite game and why do you like it?" },

      {
        type: "radio",
        text: "In a team setting, are you the one calling the shots or the one supporting others?",
        options: ["Calling the shots", "Supporting others", "A mix / depends"],
        hasTextbox: true,
        textboxPrompt: "Optional: describe your usual role."
      },
      {
        type: "radio",
        text: "When you watch a show or movie, do you focus on the writing and setting choices, or do you just enjoy the storyline?",
        options: ["Writing/setting choices", "Storyline", "Both"],
        hasTextbox: true,
        textboxPrompt: "Optional: add examples."
      },
      {
        type: "radio",
        text: "Do you read for information (how-to, history, news) or escape (fiction, fantasy, stories)?",
        options: ["Information", "Escape", "Both"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      { type: "textarea", text: "What is your favorite book or genre, and why?" },

      {
        type: "radio",
        text: "If you see an interesting fact, do you look it up right away to learn more?",
        options: ["Yes", "No", "Sometimes"],
        hasTextbox: true,
        textboxPrompt: "Optional: add examples."
      },
      {
        type: "radio",
        text: "When listening to music, do you focus on the lyrics/story or the technical beat/instruments?",
        options: ["Lyrics/story", "Beat/instruments", "Both"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      { type: "textarea", text: "What is your favorite music, band, or song and why?" },

      {
        type: "radio",
        text: "Do you enjoy learning lore (background history and hidden details of a world)?",
        options: ["Yes", "No", "Sometimes"],
        hasTextbox: true,
        textboxPrompt: "Optional: add examples (books, games, shows)."
      },
      {
        type: "radio",
        text: "Do you prefer baking (exact measurements) or cooking (tasting and adjusting)?",
        options: ["Baking", "Cooking", "Both", "Neither"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Have you ever taken a device apart just to see how it worked?",
        options: ["Yes", "No"],
        hasTextbox: true,
        textboxPrompt: "Optional: add details."
      },
      { type: "textarea", text: "What did you take apart and what did you learn?" },

      {
        type: "radio",
        text: "Are you the go-to person when friends’ electronics or apps act up?",
        options: ["Yes", "No", "Sometimes"],
        hasTextbox: true,
        textboxPrompt: "Optional: add examples."
      },
      {
        type: "radio",
        text: "Do you enjoy working with your hands (gardening, car repair, crafting)?",
        options: ["Yes", "No", "Sometimes"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      { type: "textarea", text: "What do you enjoy doing with your hands?" },

      {
        type: "radio",
        text: "Do you prefer a finished product you can touch or a digital result on a screen?",
        options: ["Physical/tangible", "Digital/on-screen", "Both"],
        hasTextbox: true,
        textboxPrompt: "Optional: explain your preference."
      },
      {
        type: "radio",
        text: "Do you notice typos or small errors on public signs or menus?",
        options: ["Yes", "No", "Sometimes"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Do you enjoy organizing items?",
        options: ["Yes", "No", "Sometimes"],
        hasTextbox: true,
        textboxPrompt: "Optional: what kinds of organizing do you like?"
      },
      {
        type: "radio",
        text: "Would you rather solve a complex math puzzle or write a 500-word story?",
        options: ["Complex math puzzle", "Write a 500-word story", "Depends"],
        hasTextbox: true,
        textboxPrompt: "Optional: explain why."
      },
      {
        type: "radio",
        text: "When watching movies, do you often guess the ending before it happens?",
        options: ["Yes", "No", "Sometimes"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Do you find comfort in repetitive tasks (like sorting or cleaning) while listening to music?",
        options: ["Yes", "No", "Sometimes"],
        hasTextbox: true,
        textboxPrompt: "Optional: add examples."
      },
      {
        type: "radio",
        text: "If you were at a party, would you rather be the host, the person working the music, or a guest?",
        options: ["Host", "Person working the music", "Guest", "None of these"],
        hasTextbox: true,
        textboxPrompt: "Optional: describe your social style."
      },
      {
        type: "radio",
        text: "Do you enjoy people-watching and trying to guess what others are thinking?",
        options: ["Yes", "No", "Sometimes"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Do you have a hobby that involves collecting and categorizing items?",
        options: ["Yes", "No", "Not sure"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      { type: "textarea", text: "What have you collected and organized, and how do you organize it (alphabetical, size, color, etc.)?" },

      {
        type: "radio",
        text: "When you learn a new hobby, do you buy all the gear immediately or start with the basics?",
        options: ["Buy all the gear", "Start with the basics", "It depends"],
        hasTextbox: true,
        textboxPrompt: "Optional: explain your approach."
      },
      {
        type: "radio",
        text: "Do you enjoy re-watching things you've already seen, or do you always need something new?",
        options: ["Re-watch", "Need something new", "Both"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "If you were a superhero, would you want the power of super-intelligence or super-strength?",
        options: ["Super-intelligence", "Super-strength", "Something else"],
        hasTextbox: true,
        textboxPrompt: "Optional: describe your choice."
      },
      {
        type: "radio",
        text: "Do you enjoy the process of leveling up or grinding to earn rewards?",
        options: ["Yes", "No", "Sometimes"],
        hasTextbox: true,
        textboxPrompt: "Optional: add examples."
      },
      {
        type: "radio",
        text: "When you write an email, do you re-read it three times before sending it?",
        options: ["Yes", "No", "Sometimes"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Do you enjoy the feeling of checking off a long list of small tasks?",
        options: ["Yes", "No", "Sometimes"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Would you rather be a jack of all trades or a master of one specific skill?",
        options: ["Jack of all trades", "Master of one skill", "A mix of both"],
        hasTextbox: true,
        textboxPrompt: "Optional: explain your preference."
      }
    ]
  },

  {
    title: "Pillar 3: Learning Modalities & Environment",
    questions: [
      {
        type: "radio",
        text: "You bought complex furniture. Do you read the manual first or start building immediately?",
        options: ["Read the manual first", "Start building immediately", "A mix of both"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Do you learn better in a live classroom or by watching videos at your own pace?",
        options: ["Live classroom", "Videos at my own pace", "Both"],
        hasTextbox: true,
        textboxPrompt: "Optional: explain what works best for you."
      },
      {
        type: "radio",
        text: "You’ve received a graded test or paper back. Do you prefer a teacher to explain your mistakes in detail, or can you figure it out from a score?",
        options: ["Explain my mistakes in detail", "I can figure it out from a score", "Depends"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Do you prefer a loud, collaborative environment or a quiet, solo workspace?",
        options: ["Loud/collaborative", "Quiet/solo", "Depends"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "What is the longest you’ve ever spent focused on one mental task without getting up?",
        options: ["Under 15 minutes", "15–30 minutes", "30–60 minutes", "1–2 hours", "2+ hours"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Do you retain info better by reading it, hearing it, or physically doing it?",
        options: ["Reading", "Hearing", "Doing", "Combination"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Does testing make you anxious, or do you enjoy proving what you know?",
        options: ["Testing makes me anxious", "I enjoy proving what I know", "Depends"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "If you are stuck, do you want the answer immediately or do you prefer to struggle through it?",
        options: ["Answer immediately", "Prefer to struggle through it", "A mix"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Do you need a why behind what you are learning to stay motivated?",
        options: ["Yes", "No", "Sometimes"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Do you prefer learning broadly (a little of everything) or deeply (one mastery)?",
        options: ["Broadly", "Deeply", "Both"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Can you learn while there is music or a TV on in the background?",
        options: ["Yes", "No", "Sometimes"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Does the idea of a project-based final grade sound better than a multiple choice exam?",
        options: ["Project-based final", "Multiple choice exam", "Either is fine"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Do you prefer to learn in short 15-minute bursts or long 4-hour sessions?",
        options: ["15-minute bursts", "Long 4-hour sessions", "Somewhere in between"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "If you don't understand something the first time, do you feel stupid or curious?",
        options: ["Stupid", "Curious", "Neither / depends"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Do you need a set schedule to be successful, or do you prefer to be flexible?",
        options: ["Set schedule", "Flexible", "A mix"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      }
    ]
  },

  {
    title: "Pillar 4: Work Personality & Soft Skills",
    questions: [
      {
        type: "radio",
        text: "Are you a blank page person (starting fresh) or a rewrite page person (fixing/improving)?",
        options: ["Blank page", "Rewrite page", "Both"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "If a project is failing, do you focus on fixing the process or the people?",
        options: ["Fixing the process", "Fixing the people", "Both"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Do you find comfort in a strict routine, or do you need variety every day?",
        options: ["Strict routine", "Variety every day", "A mix"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Would you rather talk to 20 people a day or 0 people a day?",
        options: ["20 people a day", "0 people a day", "Somewhere in between"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Are you the planner or the doer in your friend group?",
        options: ["Planner", "Doer", "Both"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Do you prefer to be the expert in the room or the generalist who knows a bit of everything?",
        options: ["Expert", "Generalist", "Both"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Does a deadline make you panic or help you focus?",
        options: ["Panic", "Help me focus", "Depends"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "If you could never work in an office again, would you be happy?",
        options: ["Yes", "No", "Not sure"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Do you enjoy explaining complex things to people who don't understand them?",
        options: ["Yes", "No", "Sometimes"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Do you prefer working on a team where everyone has a specific, separate role?",
        options: ["Yes", "No", "Depends"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "If two coworkers are arguing, do you step in to help or stay away from the drama?",
        options: ["Step in to help", "Stay away", "Depends"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Do you prefer to be judged on your effort or your results?",
        options: ["Effort", "Results", "Both"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Are you okay with working outside in different weather conditions?",
        options: ["Yes", "No", "Depends"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Do you prefer a job where you are constantly moving, or one where you are sitting/focused?",
        options: ["Constantly moving", "Sitting/focused", "A mix"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "If your boss gave you a vague instruction, would you ask for clarity or just figure it out?",
        options: ["Ask for clarity", "Figure it out", "A mix"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Do you enjoy the sale, convincing someone to see things your way?",
        options: ["Yes", "No", "Sometimes"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Is it more important to be right or to be kind at work?",
        options: ["Right", "Kind", "Balance both"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Do you prefer to work for a large company or a small start-up feel?",
        options: ["Large company", "Small start-up feel", "Depends"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "How do you handle a computer error: do you get angry or do you feel like it's a puzzle?",
        options: ["Angry/frustrated", "Puzzle/curious", "Depends"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Do you enjoy polishing something until it is perfect, or getting it done well enough?",
        options: ["Polish until perfect", "Done well enough", "Depends"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      }
    ]
  },

  {
    title: "Pillar 5: Vision & Commitment (The Why)",
    questions: [
      { type: "textarea", text: "What is the #1 reason you want a new career right now?" },
      { type: "textarea", text: "If money were no object, what would you spend your Tuesday doing?" },
      { type: "textarea", text: "What is a dream job you think is currently out of your reach?" },

      {
        type: "radio",
        text: "How many months are you willing to train before you need to start earning?",
        options: ["0–1", "2–3", "4–6", "7–12", "12+"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context (timeline pressure, part-time needs, flexibility)."
      },
      {
        type: "radio",
        text: "Are you looking for a job (money) or a career (growth/identity)?",
        options: ["Job", "Career", "Not sure"],
        hasTextbox: true,
        textboxPrompt: "Optional: explain what you mean by job vs career for you."
      },
      {
        type: "radio",
        text: "Does helping your community drive your choices, or financial independence?",
        options: ["Helping my community", "Financial independence", "Both equally"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },

      { type: "text", text: "What is the one subject in school you genuinely enjoyed?" },
      { type: "text", text: "What is the one subject you absolutely hated?" },

      {
        type: "radio",
        text: "Are you more afraid of failure or wasted time?",
        options: ["Failure", "Wasted time", "Both", "Neither / not sure"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "If you could move to any city for a free job/training, would you?",
        options: ["Yes", "No", "Maybe"],
        hasTextbox: true,
        textboxPrompt: "Optional: add constraints (family, cost of living, region preferences)."
      },
      {
        type: "radio",
        text: "Do you want your work to be something you leave at the office or something you think about at home?",
        options: ["Leave it at the office", "Think about it at home", "Some of both"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "Is having a prestigious job title important to you?",
        options: ["Yes", "No", "Somewhat", "Not sure"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },

      { type: "text", text: "What is your ideal starting salary to feel like this change was worth it?" },
      { type: "textarea", text: "Do you have any non-negotiables (for example, no weekends, must be remote, no heavy lifting)?" },

      {
        type: "radio",
        text: "If you had to choose: a job that is boring but easy, or stressful but high-paying?",
        options: ["Boring but easy", "Stressful but high-paying", "Neither / want a third option"],
        hasTextbox: true,
        textboxPrompt: "Optional: explain your choice."
      },
      {
        type: "radio",
        text: "Do you want a job where you are the face of the company or the engine behind the scenes?",
        options: ["Face of the company", "Engine behind the scenes", "Both"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context."
      },
      {
        type: "radio",
        text: "How much do you value job security versus high growth potential?",
        options: ["Strongly job security", "Lean job security", "Balanced", "Lean high growth", "Strongly high growth"],
        hasTextbox: true,
        textboxPrompt: "Optional: add context (risk tolerance, financial responsibilities)."
      },

      { type: "textarea", text: "Describe your dream job if money were no object." },
      {
        type: "textarea",
        text: "Describe a professional or personal accomplishment you are most proud of. What was the specific skill you used to achieve it, and what part of the process did you enjoy the most (planning, execution, problem-solving, final result, or recognition)?"
      },
      {
        type: "textarea",
        text: "Imagining your life 10 years from now, what would have to be true about your job in order for you to feel completely fulfilled and not consider it just a job? Focus on your sense of identity, daily impact, and mental well-being, not just salary or title."
      }
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
    nav.innerHTML = questionnaireData.map((section, index) =>
      `<button type="button" class="section-nav-btn ${index === this.currentSection ? 'active' : ''}" data-section="${index}">
        ${index + 1}. ${section.title}
      </button>`
    ).join('');
  }

  renderForm() {
    const form = document.getElementById('questionnaire');
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
    document.getElementById('sectionNav').addEventListener('click', (e) => {
      if (e.target.dataset.section) this.navigateToSection(parseInt(e.target.dataset.section));
    });

    document.getElementById('questionnaire').addEventListener('input', (e) => {
      const name = e.target.name;
      if (e.target.type === 'checkbox') {
        const checked = Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(cb => cb.value);
        this.responses[name] = checked;
      } else {
        this.responses[name] = e.target.value;
      }
      this.updateProgress();
    });

    document.getElementById('downloadBtn').addEventListener('click', () => this.downloadCombinedFile());
    document.getElementById('resetBtn').addEventListener('click', () => this.resetForm());
  }

  navigateToSection(idx) {
    this.currentSection = idx;
    document.getElementById(`section-${idx}`).scrollIntoView({ behavior: 'smooth' });
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
}

// Master prompt from outputprompt.txt 
const outputPromptText = `prompt:

**Goal:** The goal of this questionnaire is to help individuals discover personalized learning and career paths by evaluating their personality, skills, interests, learning style, demographics, time commitment, and location. The aim is to provide actionable, location-aware recommendations that empower users to explore new opportunities, whether they are transitioning careers, returning to education, or seeking skills development.

**Methodology:** The AI will analyze the user's questionnaire responses to assess their unique profile. It will consider strengths, preferences, challenges, and available resources. Based on this analysis, the AI will generate a tailored learning and career plan that includes specific free online courses with direct links, local training options relevant to the user's location, scholarship opportunities, and practical next steps.

**PRIORITY FREE LEARNING PLATFORMS:** When recommending courses, prioritize drawing from these verified free educational platforms in order of preference:

**Tier 1 - Completely Free Platforms:**
- MIT OpenCourseWare
- Khan Academy
- freeCodeCamp
- Harvard CS50 (edx.org/cs50)
- Google Skillshop
- HubSpot Academy
- Microsoft Learn
- YouTube official educational channels (specific named courses only)

**Tier 2 - Free Access Available:**
- Coursera (audit mode for free access)
- edX (audit mode for free access)
- Udemy (free courses section)
- FutureLearn (free access option)
- Alison
- Class Central (aggregator for free courses)

**Tier 3 - University Open Learning:**
- Stanford Online
- Open Learning Initiative (Carnegie Mellon)
- Open Learning Initiative (Harvard)
- OpenUW (University of Washington)
- Open Yale
- Open.Michigan (University of Michigan)
- OpenLearn (The Open University)

**Tier 4 - Specialized Free Platforms:**
- Udacity (free tier)
- Codecademy (free tier)
- Other verified free educational resources

**COMPREHENSIVE SCHOLARSHIP AND GRANT SEARCH METHODOLOGY:**
When identifying scholarship opportunities, conduct a thorough search across multiple categories to ensure the most affordable options and easily accessible funding opportunities. Search for and include real, verified scholarship organizations with direct links when possible:

**Search Categories:**
1. **Field-Specific Scholarships:** Match scholarships to the user's career path interests (STEM, healthcare, business, trades, arts, etc.)
2. **Demographic-Based Scholarships:** Consider age, gender, ethnicity, military status, first-generation college status, disability status, etc.
3. **Geographic Scholarships:** Local community foundations, state-specific programs, regional organizations
4. **Need-Based Scholarships:** Income-qualified programs, Pell grants, state financial aid
5. **Merit-Based Scholarships:** Academic achievement, skills-based awards
6. **Employer/Industry Scholarships:** Professional associations, major corporations in relevant fields
7. **Non-Traditional Student Scholarships:** Adult learners, career changers, returning students
8. **International Scholarships:** For global learning opportunities when applicable

**Verified Scholarship Organization Types to Include:**
- National scholarship foundations (e.g., Gates Foundation, Coca-Cola Scholars)
- Professional association scholarships
- Corporate scholarship programs
- Community foundation scholarships
- State and federal grant programs
- University-specific scholarships
- Trade organization scholarships
- Minority-serving organization scholarships
- Women's educational foundations
- Veteran and military family scholarships

**Template:** The output must follow this structure and tone:

Perfect! Based on your responses, here's your personalized learning profile and recommendations:

**🎯 YOUR LEARNING PROFILE ANALYSIS**
**Who You Are:** [Brief summary of personality, strengths, background, and current situation, using the questionnaire data]
**Your Advantage:** [Highlight key skills and transferable strengths]

**🎓 YOUR TOP LEARNING PATH MATCHES**
[List 3–4 career/learning paths that fit the user's profile. For each path:]

**Path Name:**
- **Perfect For:** [Who this path suits]
- **Why This Fits:** [Why it matches the user's profile]
- **Free Courses to Start:** [Include ONLY real, currently available free online courses with exact names and TESTED direct links, plus a link to the main site/platform. CRITICAL: Prioritize courses from the Priority Free Learning Platforms list above, starting with Tier 1 platforms. Only include links you can verify are working and lead directly to the course. For Coursera and edX courses, specify "audit for free" and provide the exact course title and platform name with direct working links only if you can verify the URL. Format as: "Course Title" - Platform Name - [Direct Link] - [Link to main platform] - [brief note about free access method]. Provide enough detail that users can easily find the course through the platform's search function. Do NOT include any links unless you can guarantee they work. If uncertain about specific course links, provide: "Course Title" - Platform Name - [Link to main platform] - [search instructions]. Do NOT suggest generic YouTube searches - only include specific, named courses from reputable educational platforms listed above.]

**💰 SCHOLARSHIP OPPORTUNITIES FOR YOU**
[Conduct comprehensive search across all categories listed in the Scholarship Search Methodology. List real, specific scholarship opportunities with organization names, brief descriptions, and direct links to application pages when possible. Include both national and location-specific scholarships. CRITICAL: Only include established, verified scholarship organizations with real names and current programs. For each scholarship, provide: Organization Name - Scholarship Program Name - [Direct Link to Application/Info Page] - [Link to Main Organization Website] - Brief eligibility description. If direct application links cannot be verified, provide: Organization Name - Scholarship Program Name - [Link to Main Organization Website] - Search instructions. Include scholarships from multiple categories: field-specific, demographic-based, geographic, need-based, merit-based, employer/industry, non-traditional student, and international when applicable.]

**🗺️ LOCAL TRAINING OPTIONS**
[Provide real, specific local training options such as named community colleges, trade schools, libraries, workforce development centers, or adult education programs. CRITICAL: Only include verified direct links to actual pages, or link directly to the main institutional website. DO NOT create fake URLs. Include actual institution names and current programs when possible, tailored to the user's location as indicated in the questionnaire. FORMAT: Each institution should be on its own line with a line break between institutions for better readability. Add note: "If any link doesn't work, visit the main website and search for 'continuing education' or 'professional development.'"]

**📝 YOUR ESSAY MATERIAL BANK**
[Include sample essay themes or prompts based on the user's responses, useful for applications, interviews, or personal reflection]

**🎯 YOUR NEXT STEPS (This Week)**
[List clear, actionable steps for the user to take immediately]

**💌 ENCOURAGEMENT FOR YOUR JOURNEY**
[Offer supportive, uplifting advice and motivation]

**Note:** We apologize that some links may be broken or outdated. If any link doesn't work, please use a search engine to search for the name in the description.

**Main Platform Links:**¹
[Include a footnote section listing all main website URLs for every platform, institution, and organization mentioned in the response, formatted as a simple bulleted list with organization name and main website URL]

**Instructions:**
- Use plain, accessible language suitable for any age or background.
- Do not specify any region or state unless it is directly relevant to the user's location as provided in the questionnaire.
- Always tailor recommendations to the user's unique profile and location.
- CRITICAL: Only include verified, working links. If you cannot verify a link works, do not include it. For course recommendations, prioritize the Priority Free Learning Platforms list above, starting with Tier 1 completely free platforms. For each course recommendation: 1) Free courses from major platforms with verified links, 2) Exact course titles with search instructions if links cannot be verified, 3) Platform identification with main platform link, 4) Clear free access instructions (audit for free, free tier, completely free, etc.).
- For scholarship opportunities: Conduct comprehensive search using the Scholarship Search Methodology. Only include verified scholarship organizations with real names and current programs. Provide direct links to application pages when possible, or main organization websites with search instructions.
- For local training options: Only include verified institutional websites or direct links to continuing education pages. If you cannot verify the link, only include the institution name and main website with link to main platform.
- Include the note: "If any link doesn't work, visit the main website and search for the relevant terms."
- Avoid suggesting general searches - provide specific course names and platforms only from the Priority Free Learning Platforms list.
- Ensure proper formatting with line breaks between local training institutions for better readability.
- MANDATORY: For all course recommendations, prioritize completely free platforms (Tier 1) first, then free-access platforms (Tier 2-4). Include both the direct course link (if verified) AND a link to the main platform/site.
- MANDATORY: For scholarship recommendations, search across all categories in the Scholarship Search Methodology to provide the most comprehensive and affordable funding opportunities.
- MANDATORY: Include the apology note about potentially broken links and instructions to search for names if links don't work.
- MANDATORY: Include a footnote section with all main platform URLs mentioned in the response.
- MANDATORY: When recommending courses, explicitly state the free access method for each platform (e.g., "completely free," "audit for free," "free tier available," etc.).`;

document.addEventListener('DOMContentLoaded', () => new QuestionnaireApp());
