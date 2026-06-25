// STEMQuest Global State Manager
const STEMQuestState = {
  // Default State Schema
  state: {
    user: {
      name: "",
      phone: "",
      classSelected: "",
      language: "en",
      avatar: {
        role: "scientist",
        skin: "default",
        hair: "style1",
        outfit: "rural1",
        accessory: "none"
      }
    },
    xp: 0,
    level: 1,
    rank: "Curious Cub",
    coins: 100,
    streak: 0,
    lastLoginDate: "",
    streakShields: 0,
    completedQuests: [], // array of quest IDs
    unlockedSubjects: ["physics", "math"], // default unlocked
    unlockedChapters: ["phys_ch1", "math_ch1"], // default unlocked
    badgeCollection: [], // array of unlocked badge IDs
    dailyChallengeCompleted: false,
    dailyChallengeDate: "",
    soundEnabled: true,
    darkMode: false,
    labCompleted: [] // array of lab IDs completed
  },

  // Initialize and load from LocalStorage
  init() {
    const saved = localStorage.getItem("stemquest_state");
    if (saved) {
      try {
        this.state = JSON.parse(saved);
      } catch (e) {
        console.error("Failed parsing localStorage state. Resetting.", e);
        this.save();
      }
    } else {
      this.save();
    }
    this.updateStreak();
    this.applyTheme();
  },

  // Save state to LocalStorage
  save() {
    localStorage.setItem("stemquest_state", JSON.stringify(this.state));
    // Dispatch event so active pages can update layout components
    window.dispatchEvent(new Event("stemquest_state_changed"));
  },

  // Reset state
  reset() {
    localStorage.removeItem("stemquest_state");
    window.location.reload();
  },

  // Apply dark mode settings
  applyTheme() {
    if (this.state.darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  },

  toggleDarkMode() {
    this.state.darkMode = !this.state.darkMode;
    this.applyTheme();
    this.save();
  },

  // Get current state values
  get() {
    return this.state;
  },

  // Update specific fields
  updateUser(userData) {
    this.state.user = { ...this.state.user, ...userData };
    this.save();
  },

  // Gamification Engine - Add XP
  addXP(amount) {
    this.state.xp += amount;
    
    // Level scaling algorithm (e.g. 500 XP per level for early, then scaling)
    const prevLevel = this.state.level;
    this.state.level = Math.floor(Math.sqrt(this.state.xp / 100)) + 1;
    
    if (this.state.level > prevLevel) {
      // Level Up!
      this.updateRank();
      this.addCoins((this.state.level - prevLevel) * 50); // bonus coins
      setTimeout(() => {
        if (window.STEMQuestUI) {
          window.STEMQuestUI.playAudio("level-up");
          window.STEMQuestUI.showLevelUpModal(this.state.level, this.state.rank);
        }
      }, 500);
    }
    this.save();
  },

  // Update Rank based on level
  updateRank() {
    const lvl = this.state.level;
    if (lvl >= 100) this.state.rank = "Future Engineer";
    else if (lvl >= 50) this.state.rank = "STEM Hero";
    else if (lvl >= 30) this.state.rank = "Innovator";
    else if (lvl >= 20) this.state.rank = "Junior Scientist";
    else if (lvl >= 10) this.state.rank = "STEM Explorer";
    else if (lvl >= 3) this.state.rank = "Investigator";
    else if (lvl >= 2) this.state.rank = "Explorer";
    else this.state.rank = "Curious Cub";
  },

  // Add Coins
  addCoins(amount) {
    this.state.coins += amount;
    this.save();
  },

  // Spend Coins
  spendCoins(amount) {
    if (this.state.coins >= amount) {
      this.state.coins -= amount;
      this.save();
      return true;
    }
    return false;
  },

  // Streak tracker
  updateStreak() {
    const today = new Date().toDateString();
    if (this.state.lastLoginDate === today) {
      return; // Already logged in today, streak unchanged
    }

    if (this.state.lastLoginDate === "") {
      // First login ever
      this.state.streak = 1;
    } else {
      const lastDate = new Date(this.state.lastLoginDate);
      const currentDate = new Date(today);
      const diffTime = Math.abs(currentDate - lastDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        // Consecutive day
        this.state.streak += 1;
        // Bonus XP for logging in
        this.addXP(20);
        
        // Milestone bonuses
        if (this.state.streak % 7 === 0) {
          this.state.streakShields += 1; // Award a streak shield
          this.addBadge("iron-will-7");
        }
      } else if (diffDays > 1) {
        // Missed day!
        if (this.state.streakShields > 0) {
          this.state.streakShields -= 1; // Shield saved streak!
          console.log("Streak Shield saved your streak!");
        } else {
          this.state.streak = 1; // Reset streak
        }
      }
    }
    this.state.lastLoginDate = today;
    this.save();
  },

  // Complete a Quest
  completeQuest(questId, scorePercent) {
    if (!this.state.completedQuests.includes(questId)) {
      this.state.completedQuests.push(questId);
      
      // Calculate XP and Coins rewards
      let xpEarned = 50;
      if (scorePercent === 100) xpEarned = 75; // Perfect score bonus
      
      this.addXP(xpEarned);
      this.addCoins(20);
      
      // Unlock next quest chapters dynamically if applicable
      this.unlockNextLevels(questId);
      
      // Check quest badges
      if (this.state.completedQuests.length === 1) {
        this.addBadge("first-quest");
      }
      if (this.state.completedQuests.length >= 10 && scorePercent === 100) {
        this.addBadge("perfect-scientist");
      }
      this.save();
      return { xpEarned, coinsEarned: 20 };
    }
    return null;
  },

  unlockNextLevels(questId) {
    // Basic logic mapping complete quest to next unlocks
    if (questId === "phys_q1" && !this.state.unlockedChapters.includes("phys_ch2")) {
      this.state.unlockedChapters.push("phys_ch2");
    }
    if (questId === "math_q1" && !this.state.unlockedChapters.includes("math_ch2")) {
      this.state.unlockedChapters.push("math_ch2");
    }
  },

  // Complete Lab simulation
  completeLab(labId) {
    if (!this.state.labCompleted.includes(labId)) {
      this.state.labCompleted.push(labId);
      this.addXP(60);
      this.addCoins(15);
      if (this.state.labCompleted.length >= 5) {
        this.addBadge("lab-rat");
      }
      this.save();
    }
  },

  // Add Badge
  addBadge(badgeId) {
    if (!this.state.badgeCollection.includes(badgeId)) {
      this.state.badgeCollection.push(badgeId);
      this.addXP(100); // 100 XP for achievements
      this.save();
      setTimeout(() => {
        if (window.STEMQuestUI) {
          window.STEMQuestUI.playAudio("badge-unlock");
          window.STEMQuestUI.showBadgeModal(badgeId);
        }
      }, 1000);
      return true;
    }
    return false;
  },

  // Complete Daily Challenge
  completeDailyChallenge() {
    const today = new Date().toDateString();
    if (this.state.dailyChallengeDate !== today) {
      this.state.dailyChallengeCompleted = true;
      this.state.dailyChallengeDate = today;
      this.addXP(75);
      this.addCoins(30);
      this.save();
      return true;
    }
    return false;
  }
};

// Initialize State immediately on load
STEMQuestState.init();
window.STEMQuestState = STEMQuestState;
