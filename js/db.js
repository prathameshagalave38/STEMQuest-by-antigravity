// STEMQuest Local Content Database
const STEMQuestDB = {
  // 1. Badge Definitions
  badges: [
    { id: "first-quest", name: "First Quest Complete", icon: "fa-rocket", desc: "Completed your very first STEMQuest lesson!", category: "milestone" },
    { id: "iron-will-7", name: "Iron Will (7-Days)", icon: "fa-fire", desc: "Maintained a 7-day daily learning streak!", category: "character" },
    { id: "lab-rat", name: "Virtual Lab Explorer", icon: "fa-flask", desc: "Conducted 5 virtual experiments on the workbench.", category: "mastery" },
    { id: "perfect-scientist", name: "Perfect Scientist", icon: "fa-graduation-cap", desc: "Finished 10 quizzes with a perfect score on first try.", category: "mastery" },
    { id: "speed-demon", name: "Speed Demon", icon: "fa-bolt", desc: "Completed a quest in under 5 minutes.", category: "mastery" },
    { id: "helper-hero", name: "Helper Hero", icon: "fa-hands-helping", desc: "Helped 5 classmates solve their doubts in the forum.", category: "character" },
    { id: "village-elder", name: "Village Elder", icon: "fa-crown", desc: "Earned the top spot in classroom helper rank.", category: "social" },
    { id: "class-champ", name: "Class Champion", icon: "fa-trophy", desc: "Ranked #1 on the weekly Class Leaderboard.", category: "milestone" },
    { id: "district-hero", name: "District Hero", icon: "fa-map-marked-alt", desc: "Finished top 10 in a regional science tournament.", category: "milestone" },
    { id: "electricity-conqueror", name: "Electricity Conqueror", icon: "fa-plug", desc: "Defeated the Electricity Dragon and restored light to the village.", category: "mastery" },
    { id: "fraction-hero", name: "Fraction Hero", icon: "fa-pie-chart", desc: "Helped the Village Bakery divide food fairly.", category: "mastery" }
  ],

  // 2. Subjects Worlds
  subjects: {
    physics: {
      name: "Physics Peaks",
      tagline: "Unleash the forces that build and power worlds!",
      icon: "fa-sun",
      themeColor: "purple"
    },
    chemistry: {
      name: "Chemistry Caves",
      tagline: "Mix elemental reactions and protect materials!",
      icon: "fa-flask",
      themeColor: "pink"
    },
    math: {
      name: "Math Mountains",
      tagline: "Unlock coordinates and balance equations!",
      icon: "fa-square-root-alt",
      themeColor: "indigo"
    },
    biology: {
      name: "Biology Jungle",
      tagline: "Explore cellular secrets and ecosystems!",
      icon: "fa-leaf",
      themeColor: "green"
    },
    tech: {
      name: "Tech Valley",
      tagline: "Program systems, robotics, and build logic grids!",
      icon: "fa-laptop-code",
      themeColor: "cyan"
    }
  },

  // 3. Chapters Definitions
  chapters: [
    {
      id: "phys_ch1",
      subject: "physics",
      name: "Restoring the Village Grid (Electricity)",
      desc: "A massive storm damaged the power line. Learn about voltage, current, and switch grids to restore light to the farm village.",
      xpRequired: 0,
      quests: ["phys_q1", "phys_q2"]
    },
    {
      id: "phys_ch2",
      subject: "physics",
      name: "The Power of Levers (Forces & Motion)",
      desc: "A heavy boulder blocks the irrigation canal. Harness forces, friction, and torque using pulleys to lift the obstacle.",
      xpRequired: 300,
      quests: ["phys_q3"]
    },
    {
      id: "math_ch1",
      subject: "math",
      name: "Division at the Village Bakery (Fractions)",
      desc: "Help the baker divide food portions fairly among the villagers to satisfy nutrition rules using fractions.",
      xpRequired: 0,
      quests: ["math_q1", "math_q2"]
    },
    {
      id: "math_ch2",
      subject: "math",
      name: "Building the Geometry Bridge (Triangles)",
      desc: "A wooden bridge collapsed. Rebuild it using rigid geometric designs like trusses to ensure it survives floods.",
      xpRequired: 200,
      quests: ["math_q3"]
    },
    {
      id: "chem_ch1",
      subject: "chemistry",
      name: "Cleaning the Well (pH & Acids/Bases)",
      desc: "The village well water has turned acidic. Master pH levels and neutralize solutions to make the water drinkable.",
      xpRequired: 0,
      quests: ["chem_q1"]
    }
  ],

  // 4. Quest Lessons Detail
  quests: {
    phys_q1: {
      id: "phys_q1",
      chapterId: "phys_ch1",
      name: "Light Up the Darkness",
      desc: "Understand what makes electrons flow. Connect simple loops containing cells, wires, and lightbulbs.",
      xpReward: 50,
      coinsReward: 10,
      steps: [
        {
          type: "concept",
          title: "What is Electricity?",
          content: "Electricity is the flow of tiny charged particles called **electrons** through a material. Think of it like water flowing through a pipe. A pump pushes water, and a battery pushes electrons! The path electrons travel is called a **circuit**.",
          diagram: "💡⚡🔋 (Battery connects to lightbulb via wire loops)"
        },
        {
          type: "checkpoint",
          question: "For electricity to flow and light up a bulb, what type of circuit path is required?",
          options: [
            "An open path with gaps",
            "A closed loop with no breaks",
            "A path made entirely of wood",
            "No path is required"
          ],
          correctIndex: 1,
          explanation: "Electrons need a continuous, closed pathway (conductive loop) from the negative terminal of the battery to the positive terminal."
        },
        {
          type: "mini-activity",
          title: "Identify the Conductor!",
          instruction: "Tap on the material that will let electricity flow when placed in the circuit break.",
          elements: [
            { id: "iron_nail", name: "Iron Nail", isCorrect: true, type: "metal" },
            { id: "rubber_band", name: "Rubber Band", isCorrect: false, type: "rubber" },
            { id: "wooden_stick", name: "Wooden Stick", isCorrect: false, type: "wood" },
            { id: "plastic_ruler", name: "Plastic Ruler", isCorrect: false, type: "plastic" }
          ]
        },
        {
          type: "boss-battle",
          bossName: "Electricity Dragon",
          questions: [
            {
              q: "Which unit is used to measure electrical current flow rate?",
              options: ["Volts (V)", "Amperes (A)", "Ohms (Ω)", "Watts (W)"],
              correctIndex: 1,
              explanation: "Current is the rate of flow of charge, measured in Amperes (Amps)."
            },
            {
              q: "What is a material called if it does NOT allow electrons to flow easily?",
              options: ["Conductor", "Insulator", "Semiconductor", "Superconductor"],
              correctIndex: 1,
              explanation: "Insulators have high resistance and block current flow (e.g. rubber, wood)."
            },
            {
              q: "If you connect three lightbulbs in series (one after another in a single line), what happens if one bulb breaks?",
              options: ["The other two grow brighter", "Only one stays on", "All bulbs go out", "The battery explodes"],
              correctIndex: 2,
              explanation: "In a series circuit, breaking one element breaks the entire closed loop, stopping current flow everywhere."
            }
          ]
        }
      ]
    },
    math_q1: {
      id: "math_q1",
      chapterId: "math_ch1",
      name: "The Perfect Halves",
      desc: "Learn what numerator and denominator represent by dividing fresh bread batches.",
      xpReward: 50,
      coinsReward: 10,
      steps: [
        {
          type: "concept",
          title: "Introduction to Fractions",
          content: "A fraction represents a **part of a whole**. It has two numbers: the **Numerator** (top) which tells how many parts we have, and the **Denominator** (bottom) which tells how many total equal parts the whole is divided into.",
          diagram: "🍕 (1 slice out of 4 = 1/4)"
        },
        {
          type: "checkpoint",
          question: "If a roti is cut into 8 equal slices, and Priya eats 3 slices, what fraction of the roti did she eat?",
          options: ["3/8", "8/3", "5/8", "3/5"],
          correctIndex: 0,
          explanation: "She ate 3 parts (numerator) out of 8 total parts (denominator)."
        },
        {
          type: "mini-activity",
          title: "Equate Fractions",
          instruction: "Select the fraction that is equivalent to 2/4.",
          elements: [
            { id: "f1", name: "1/3", isCorrect: false },
            { id: "f2", name: "1/2", isCorrect: true },
            { id: "f3", name: "3/4", isCorrect: false },
            { id: "f4", name: "2/3", isCorrect: false }
          ]
        },
        {
          type: "boss-battle",
          bossName: "Fraction Ogre",
          questions: [
            {
              q: "Which fraction is the largest?",
              options: ["1/4", "1/2", "1/8", "1/3"],
              correctIndex: 1,
              explanation: "If you divide a whole into fewer pieces, each piece is larger. So 1/2 is larger than 1/3, 1/4, or 1/8."
            },
            {
              q: "Add these fractions: 1/5 + 2/5",
              options: ["3/10", "3/5", "2/25", "3/25"],
              correctIndex: 1,
              explanation: "Since denominators are the same, add numerators: 1 + 2 = 3. Denominator remains 5."
            }
          ]
        }
      ]
    }
  },

  // 5. Daily Challenges
  dailyChallenges: [
    {
      id: "dc1",
      title: "The Gear Puzzle",
      type: "mcq",
      question: "If Gear A (with 10 teeth) turns clockwise, which way does Gear B (meshed directly with A) turn?",
      options: ["Clockwise", "Counter-Clockwise", "It stays still", "It turns faster"],
      correctIndex: 1,
      explanation: "Directly meshed gears always turn in opposite directions."
    },
    {
      id: "dc2",
      title: "Acidic Rain",
      type: "match",
      question: "Match the liquid to its correct pH level:",
      pairs: [
        { left: "Lemon Juice", right: "pH 2 (Acidic)" },
        { left: "Pure Water", right: "pH 7 (Neutral)" },
        { left: "Soap Water", right: "pH 10 (Basic)" }
      ]
    }
  ],

  // 6. Virtual Labs Templates
  labs: {
    physics_circuit: {
      id: "physics_circuit",
      title: "Electrical Circuit Builder",
      subject: "physics",
      description: "Drag battery, wires, switches, and resistors to complete the bulb glow simulation.",
      components: [
        { id: "wire", name: "Copper Wire", icon: "fa-minus" },
        { id: "battery", name: "9V Battery", icon: "fa-battery-full" },
        { id: "bulb", name: "Light Bulb", icon: "fa-lightbulb" },
        { id: "switch", name: "Switch Toggle", icon: "fa-toggle-on" }
      ]
    },
    chemistry_ph: {
      id: "chemistry_ph",
      title: "pH Neutralizer Sandbox",
      subject: "chemistry",
      description: "Mix acids (hydrochloric acid) and bases (sodium hydroxide) and test with Litmus strips to reach neutral pH 7.",
      liquids: [
        { id: "acid", name: "HCl Acid (pH 2)", color: "#ef4444" },
        { id: "base", name: "NaOH Base (pH 12)", color: "#3b82f6" },
        { id: "water", name: "Pure Water (pH 7)", color: "#60a5fa" }
      ]
    }
  },

  // 7. Mock Leaderboards
  leaderboard: {
    class: [
      { rank: 1, name: "Arjun Shekhawat", level: 14, xp: 4520, avatar: "astronaut" },
      { rank: 2, name: "Kiran Patil", level: 12, xp: 3880, avatar: "robotics" },
      { rank: 3, name: "Aarav Sharma", level: 10, xp: 2900, avatar: "engineer" },
      { rank: 4, name: "Priya Rao (You)", level: 8, xp: 2150, isUser: true, avatar: "scientist" },
      { rank: 5, name: "Rohan Deshmukh", level: 7, xp: 1800, avatar: "inventor" },
      { rank: 6, name: "Sneha Ghadge", level: 6, xp: 1400, avatar: "scientist" }
    ],
    school: [
      { rank: 1, name: "Devendra Rathore", level: 25, xp: 12500, avatar: "astronaut" },
      { rank: 2, name: "Savita Kamble", level: 22, xp: 10200, avatar: "scientist" },
      { rank: 18, name: "Priya Rao (You)", level: 8, xp: 2150, isUser: true, avatar: "scientist" }
    ],
    district: [
      { rank: 1, name: "Amit Yadav (Churu)", level: 48, xp: 28400, avatar: "engineer" },
      { rank: 2, name: "Ruchi Sen (Sikar)", level: 44, xp: 25900, avatar: "robotics" },
      { rank: 142, name: "Priya Rao (You)", level: 8, xp: 2150, isUser: true, avatar: "scientist" }
    ]
  },

  // 8. Teacher Dashboard Mock Data
  teacherData: {
    className: "Class 9-A (STEM Group)",
    totalStudents: 32,
    avgStreak: "6.2 Days",
    students: [
      { id: "st1", name: "Arjun Shekhawat", xp: 4520, level: 14, streak: 12, completion: 92, weakArea: "Chemistry", status: "excellent" },
      { id: "st2", name: "Kiran Patil", xp: 3880, level: 12, streak: 8, completion: 85, weakArea: "None", status: "active" },
      { id: "st3", name: "Priya Rao", xp: 2150, level: 8, streak: 5, completion: 74, weakArea: "Physics (Electricity)", status: "needs_help" },
      { id: "st4", name: "Rohan Deshmukh", xp: 1800, level: 7, streak: 0, completion: 60, weakArea: "Math (Fractions)", status: "struggling" }
    ],
    alerts: [
      { studentName: "Rohan Deshmukh", msg: "Has failed the Fractions Boss Battle 3 times in a row.", severity: "high" },
      { studentName: "Priya Rao", msg: "Struggling with closed circuit wiring in Quest 1.", severity: "medium" }
    ],
    assignments: [
      { title: "Electric Loop Builder", subject: "Physics", dueDate: "June 28, 2026", completedCount: 22, total: 32 },
      { title: "Fraction Division Sheet", subject: "Mathematics", dueDate: "July 2, 2026", completedCount: 8, total: 32 }
    ]
  },

  // 9. Parent Dashboard Mock Data
  parentData: {
    studentName: "Priya Rao",
    weeklyHours: [2.5, 3.1, 1.8, 4.2, 2.0, 3.5, 1.2], // Mon to Sun duration
    totalXPThisWeek: 350,
    streaksUnlocked: 12,
    completedChaptersThisWeek: ["Electricity Basics"],
    teacherNote: "Priya has shown great interest in Biology. She needs a little practice with electrical diagram layouts, but her effort is fantastic!",
    vigyanNote: "Priya excels at visual problem solving! I recommend that she practices 2 more circuit simulation runs this week to lock down current voltage values."
  }
};

window.STEMQuestDB = STEMQuestDB;
