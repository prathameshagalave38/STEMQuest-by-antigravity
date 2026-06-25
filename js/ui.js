// STEMQuest Common UI Renderer and Sound Synthesizer
const STEMQuestUI = {
  // Determine root path prefix based on file location
  getPathPrefix() {
    return window.location.pathname.includes('/pages/') ? '../' : '';
  },

  // Audio Synthesizer using Web Audio API (No files needed!)
  playAudio(type) {
    const state = window.STEMQuestState ? window.STEMQuestState.get() : { soundEnabled: true };
    if (!state.soundEnabled) return;

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      const now = ctx.currentTime;
      
      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1000, now);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      } 
      else if (type === 'correct') {
        osc.type = 'triangle';
        // Ascending notes (C5 to E5)
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } 
      else if (type === 'incorrect') {
        osc.type = 'sawtooth';
        // Buzz descending notes
        osc.frequency.setValueAtTime(220, now); // A3
        osc.frequency.setValueAtTime(147, now + 0.12); // D3
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } 
      else if (type === 'level-up') {
        osc.type = 'sine';
        // Triad cascade
        const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
        notes.forEach((freq, idx) => {
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        });
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
        osc.start(now);
        osc.stop(now + 0.5);
      }
      else if (type === 'badge-unlock') {
        osc.type = 'sine';
        // Sweep frequency up
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(1500, now + 0.4);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
      }
    } catch (e) {
      console.warn("Web Audio API not allowed/supported yet.", e);
    }
  },

  // Initialize common UI shells
  initCommonUI(activeTab) {
    this.renderTopbar();
    this.renderBottomNav(activeTab);
    this.renderFloatingVigyan();
    this.renderModalStructure();
    this.listenToStateChanges();
  },

  // Listen to state changes to update values live
  listenToStateChanges() {
    window.addEventListener("stemquest_state_changed", () => {
      this.updateStatsValues();
    });
  },

  // Render Topbar
  renderTopbar() {
    if (document.querySelector(".app-topbar")) return;

    const prefix = this.getPathPrefix();
    const state = window.STEMQuestState ? window.STEMQuestState.get() : null;
    if (!state) return;

    const topbar = document.createElement("header");
    topbar.className = "app-topbar";
    
    topbar.innerHTML = `
      <div class="topbar-logo">
        <a href="${prefix}index.html">
          <i class="fas fa-graduation-cap"></i>
          <span>STEMQuest</span>
        </a>
      </div>
      <div class="topbar-stats">
        <div class="stat-chip streak" title="Daily Streak">
          <i class="fas fa-fire"></i>
          <span id="topbar-streak-val">${state.streak}</span>
        </div>
        <div class="stat-chip xp" title="Experience Points">
          <i class="fas fa-star"></i>
          <span id="topbar-xp-val">${state.xp} XP</span>
        </div>
        <div class="stat-chip coins" title="STEM Coins">
          <i class="fas fa-coins"></i>
          <span id="topbar-coins-val">${state.coins}</span>
        </div>
        <div class="topbar-user" onclick="window.location.href='${prefix}pages/profile.html'">
          <div class="topbar-avatar" id="topbar-avatar-container">
            ${this.getAvatarSVG(state.user.avatar)}
          </div>
          <span id="topbar-rank-val" style="font-weight: 700; font-family: var(--font-display); font-size:14px; display:none; @media(min-width:768px){display:inline;}">${state.rank}</span>
        </div>
      </div>
    `;
    
    document.body.prepend(topbar);
    this.updateStatsValues();
  },

  // Render Bottom Navigation Tabbar
  renderBottomNav(activeTab) {
    if (document.querySelector(".app-nav")) return;
    const prefix = this.getPathPrefix();

    const nav = document.createElement("nav");
    nav.className = "app-nav";

    const tabs = [
      { id: "map", name: "Quest Map", icon: "fa-compass", link: `${prefix}pages/quest-map.html` },
      { id: "lab", name: "STEM Lab", icon: "fa-flask", link: `${prefix}pages/virtual-lab.html` },
      { id: "arena", name: "Arena", icon: "fa-shield-halved", iconAlt: "fa-trophy", link: `${prefix}pages/battle-arena.html` },
      { id: "galaxy", name: "Galaxy Profile", icon: "fa-user", link: `${prefix}pages/profile.html` },
      { id: "settings", name: "Settings", icon: "fa-cog", link: `${prefix}pages/settings.html` }
    ];

    nav.innerHTML = tabs.map(tab => {
      const isActive = tab.id === activeTab ? 'active' : '';
      const iconClass = tab.id === 'arena' ? 'fas fa-trophy' : `fas ${tab.icon}`;
      return `
        <a href="${tab.link}" class="nav-item ${isActive}" onclick="STEMQuestUI.playAudio('click')">
          <i class="${iconClass}"></i>
          <span>${tab.name}</span>
        </a>
      `;
    }).join("");

    document.body.appendChild(nav);
  },

  // Render Floating Vigyan AI Button
  renderFloatingVigyan() {
    if (document.querySelector(".floating-vigyan-btn")) return;
    const prefix = this.getPathPrefix();
    
    const btn = document.createElement("div");
    btn.className = "floating-vigyan-btn";
    btn.title = "Chat with Vigyan AI Tutor";
    btn.innerHTML = `<i class="fas fa-robot"></i>`;
    btn.onclick = () => {
      this.playAudio('click');
      window.location.href = `${prefix}pages/ai-mentor.html`;
    };

    document.body.appendChild(btn);
  },

  // Render Modal overlay containers in the DOM
  renderModalStructure() {
    if (document.getElementById("stemquest-modal-overlay")) return;

    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.id = "stemquest-modal-overlay";
    overlay.innerHTML = `
      <div class="modal-content" id="stemquest-modal-content"></div>
    `;
    
    document.body.appendChild(overlay);
    
    // Render Confetti Container
    const confetti = document.createElement("div");
    confetti.className = "confetti-container";
    confetti.id = "stemquest-confetti";
    document.body.appendChild(confetti);
  },

  // Update Topbar Stats Values directly from state
  updateStatsValues() {
    const state = window.STEMQuestState ? window.STEMQuestState.get() : null;
    if (!state) return;

    const streakVal = document.getElementById("topbar-streak-val");
    const xpVal = document.getElementById("topbar-xp-val");
    const coinsVal = document.getElementById("topbar-coins-val");
    const rankVal = document.getElementById("topbar-rank-val");
    const avatarContainer = document.getElementById("topbar-avatar-container");

    if (streakVal) streakVal.innerText = state.streak;
    if (xpVal) xpVal.innerText = `${state.xp} XP`;
    if (coinsVal) coinsVal.innerText = state.coins;
    if (rankVal) rankVal.innerText = state.rank;
    if (avatarContainer) avatarContainer.innerHTML = this.getAvatarSVG(state.user.avatar);
  },

  // SVG representation for Student Avatars
  getAvatarSVG(avatarState) {
    const role = avatarState?.role || "scientist";
    let color = "#A855F7"; // purple
    if (role === "astronaut") color = "#3b82f6";
    if (role === "engineer") color = "#f59e0b";
    if (role === "robotics") color = "#06b6d4";
    if (role === "inventor") color = "#ec4899";

    return `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Background -->
        <circle cx="50" cy="50" r="45" fill="${color}" opacity="0.2"/>
        <!-- Face/Head -->
        <circle cx="50" cy="45" r="22" fill="#FDBA74"/>
        <!-- Eyes -->
        <circle cx="43" cy="42" r="3" fill="#1E1B4B"/>
        <circle cx="57" cy="42" r="3" fill="#1E1B4B"/>
        <!-- Smile -->
        <path d="M 42 50 Q 50 58 58 50" stroke="#1E1B4B" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <!-- Role Accessories (e.g. hats/goggles) -->
        ${role === 'scientist' ? `
          <!-- Goggles -->
          <rect x="36" y="38" width="12" height="8" rx="2" stroke="#1E1B4B" stroke-width="2" fill="rgba(255,255,255,0.7)"/>
          <rect x="52" y="38" width="12" height="8" rx="2" stroke="#1E1B4B" stroke-width="2" fill="rgba(255,255,255,0.7)"/>
          <line x1="48" y1="42" x2="52" y2="42" stroke="#1E1B4B" stroke-width="2"/>
        ` : ''}
        ${role === 'astronaut' ? `
          <!-- Helmet bubble -->
          <circle cx="50" cy="45" r="28" stroke="#FFFFFF" stroke-width="2" fill="none" opacity="0.7"/>
          <path d="M 30 35 Q 50 20 70 35" stroke="#FFFFFF" stroke-width="1.5" fill="none" opacity="0.8"/>
        ` : ''}
        ${role === 'engineer' ? `
          <!-- Hardhat -->
          <path d="M 30 32 Q 50 15 70 32 Z" fill="#FBBF24" stroke="#1E1B4B" stroke-width="1.5"/>
          <rect x="26" y="30" width="48" height="3" rx="1.5" fill="#F59E0B"/>
        ` : ''}
        ${role === 'robotics' ? `
          <!-- Cyber headset -->
          <rect x="25" y="40" width="4" height="10" fill="#0891B2" rx="1"/>
          <rect x="71" y="40" width="4" height="10" fill="#0891B2" rx="1"/>
          <path d="M 27 40 Q 50 22 73 40" stroke="#0891B2" stroke-width="2" fill="none"/>
          <line x1="73" y1="45" x2="60" y2="49" stroke="#0891B2" stroke-width="1.5"/>
          <circle cx="60" cy="49" r="1.5" fill="#06b6d4"/>
        ` : ''}
        ${role === 'inventor' ? `
          <!-- Thinking lightbulb hat -->
          <path d="M 40 28 Q 50 18 60 28 Z" fill="#EC4899" opacity="0.7"/>
          <circle cx="50" cy="22" r="4" fill="#FBBF24"/>
        ` : ''}
        <!-- Body / Shirt -->
        <path d="M 22 82 C 22 70 32 62 50 62 C 68 62 78 70 78 82 Z" fill="${color}"/>
      </svg>
    `;
  },

  // Trigger Celebration Confetti falling
  triggerConfetti() {
    const container = document.getElementById("stemquest-confetti");
    if (!container) return;

    container.style.display = "block";
    container.innerHTML = "";
    
    const colors = ["#6B21A8", "#DB2777", "#EDE9FE", "#FBBF24", "#059669", "#3B82F6"];
    
    for (let i = 0; i < 60; i++) {
      const piece = document.createElement("div");
      piece.className = "confetti-piece";
      piece.style.left = Math.random() * 100 + "%";
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = Math.random() * 2 + "s";
      piece.style.animationDuration = Math.random() * 2 + 2 + "s";
      piece.style.transform = `rotate(${Math.random() * 360}deg)`;
      container.appendChild(piece);
    }

    setTimeout(() => {
      container.style.display = "none";
    }, 4000);
  },

  // Modal Level Up Notification
  showLevelUpModal(level, rank) {
    const overlay = document.getElementById("stemquest-modal-overlay");
    const content = document.getElementById("stemquest-modal-content");
    if (!overlay || !content) return;

    content.innerHTML = `
      <div style="font-size: 60px; margin-bottom: 10px;">🎉</div>
      <h2 style="font-size: 32px; color: var(--primary-purple); margin-bottom: 10px;">Level Up!</h2>
      <p style="font-size: 18px; margin-bottom: 20px; font-weight: 500;">
        You've reached <strong style="color: var(--quest-pink); font-size: 22px;">Level ${level}</strong>!
      </p>
      <div class="stat-chip" style="margin: 0 auto 24px auto; display: inline-flex; font-size: 18px; padding: 8px 20px;">
        Rank: ${rank}
      </div>
      <p style="font-size: 14px; color: #4B5563; margin-bottom: 24px;">
        Bonus Reward: +50 STEM Coins unlocked. Keep exploring!
      </p>
      <button class="btn btn-primary" onclick="STEMQuestUI.closeModal()">Continue Adventure</button>
    `;
    
    overlay.style.display = "flex";
    this.triggerConfetti();
  },

  // Modal Badge Unlock Notification
  showBadgeModal(badgeId) {
    const overlay = document.getElementById("stemquest-modal-overlay");
    const content = document.getElementById("stemquest-modal-content");
    if (!overlay || !content) return;

    const badge = window.STEMQuestDB ? window.STEMQuestDB.badges.find(b => b.id === badgeId) : null;
    const badgeName = badge ? badge.name : "New Achievement";
    const badgeDesc = badge ? badge.desc : "Well done!";
    const badgeIcon = badge ? badge.icon : "fa-award";

    content.innerHTML = `
      <div style="width: 80px; height: 80px; border-radius: 50%; background: rgba(219,39,119,0.1); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px auto; color: var(--quest-pink); font-size: 40px; border: 2px solid var(--quest-pink);">
        <i class="fas ${badgeIcon}"></i>
      </div>
      <h2 style="font-size: 28px; color: var(--neutral-dark); margin-bottom: 10px;">Badge Unlocked!</h2>
      <h3 style="color: var(--quest-pink); font-size: 20px; margin-bottom: 15px;">${badgeName}</h3>
      <p style="font-size: 15px; color: #4B5563; margin-bottom: 24px; max-width: 320px; margin-left: auto; margin-right: auto;">
        "${badgeDesc}"
      </p>
      <p style="font-size: 13px; color: var(--success-green); font-weight: 600; margin-bottom: 20px;">
        <i class="fas fa-star"></i> +100 XP Bonus Awarded
      </p>
      <button class="btn btn-accent" onclick="STEMQuestUI.closeModal()">Awesome!</button>
    `;

    overlay.style.display = "flex";
    this.triggerConfetti();
  },

  closeModal() {
    const overlay = document.getElementById("stemquest-modal-overlay");
    if (overlay) overlay.style.display = "none";
    this.playAudio('click');
  }
};

window.STEMQuestUI = STEMQuestUI;
window.STEMQuestUIPathPrefix = STEMQuestUI.getPathPrefix();
