# STEMQuest — Product Requirements Document

**Version:** 1.0 | **Status:** Draft | **Date:** June 2026 | **Owner:** Product Team

> Gamified STEM Learning Platform for Rural India — Class 6 to 12

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Target User Personas](#2-target-user-personas)
3. [Design Principles & Visual Language](#3-design-principles--visual-language)
4. [Information Architecture & Navigation](#4-information-architecture--navigation)
5. [Gamification Architecture](#5-gamification-architecture)
6. [Core Feature Specifications](#6-core-feature-specifications)
7. [Curriculum Mapping & Content Strategy](#7-curriculum-mapping--content-strategy)
8. [Key Screen Specifications](#8-key-screen-specifications)
9. [Teacher & Parent Tooling](#9-teacher--parent-tooling)
10. [Accessibility & Inclusion](#10-accessibility--inclusion)
11. [Success Metrics & KPIs](#11-success-metrics--kpis)
12. [Phased Product Roadmap](#12-phased-product-roadmap)
13. [Open Questions & Decisions](#13-open-questions--decisions)

---

## 1. Executive Summary

STEMQuest is a **mobile-first, offline-capable gamified learning platform** designed for students in rural India studying in Classes 6–12. Inspired by the visual design language of modern EdTech products — clean UI, conversational AI tutors, vibrant color palettes — STEMQuest re-imagines science education as an adventure.

By embedding game mechanics at the core — not as an afterthought — STEMQuest turns every lesson into a mission, every concept into a challenge, and every milestone into a celebration. The platform specifically targets underserved students in Tier-3 towns and villages who have limited or no consistent internet access, few qualified teachers, and zero exposure to interactive science.

### 1.1 Problem Statement

**Student Challenges**
- Fear of abstract concepts in Physics, Chemistry, Math, and Biology
- Rote learning culture with no experiential understanding
- Lack of qualified STEM teachers in rural schools
- No access to labs, experiments, or practical demonstrations
- Low motivation and high dropout rates post Class 8

**Infrastructure Challenges**
- Inconsistent internet connectivity (2G / no signal areas)
- Devices are shared — mobile-first multi-profile support is needed
- Learning happens in regional languages primarily
- Economic pressure reduces available study time
- No peer competition or benchmarking systems exist

### 1.2 Product Vision

> **"Every rural student who encounters STEMQuest should feel like a scientist, an engineer, a mathematician — not a student who is afraid of science."**

- Make STEM concepts tangible through interactive simulations and visual storytelling
- Use gamification as the **primary engagement layer**, not a cosmetic add-on
- Build an AI tutor persona personalized to each student's level
- Create a community of rural STEM learners who celebrate each other's progress
- Ensure **100% offline functionality** with smart sync when connectivity is available

---

## 2. Target User Personas

### 2.1 Primary Users — Students

#### Persona A: Priya, Class 9 Student — Rural Maharashtra

| Attribute | Detail |
|-----------|--------|
| Age | 14 years |
| Device | Android (shared family phone) |
| Connectivity | 2G / Offline |
| STEM Fear Level | Very High (Math / Physics) |

- Attends a government school with 1 science teacher for 3 subjects
- Has never seen a real science experiment performed
- Watches cricket; loves collecting things (coins, stamps)
- **Motivation:** Wants to become a nurse; doesn't know how science connects to her dream
- **Pain point:** Feels embarrassed asking questions in class, fears being judged

#### Persona B: Arjun, Class 11 Student — Rural Rajasthan

| Attribute | Detail |
|-----------|--------|
| Age | 16 years |
| Device | Android 4G (own) |
| Connectivity | Intermittent 4G |
| STEM Fear Level | Medium (Chemistry) |

- Aspires to crack JEE but has no coaching access
- Competes in local kabaddi; highly competitive personality
- Learns best through challenge and comparison
- **Pain point:** No structured curriculum tracking, no feedback on weak areas

### 2.2 Secondary Users

| User Type | Needs | Key Feature Access |
|-----------|-------|-------------------|
| Parent / Guardian | Know child's progress; ensure safe app usage | Parent Dashboard, Weekly Reports |
| School Teacher | Assign tasks, view class performance, supplement lessons | Teacher Portal, Class Leaderboard, Assignment Builder |
| School Administrator | Track school-level STEM improvement | Admin Analytics, Printable Reports |
| NGO / Government Partner | Measure educational impact at district level | Impact Dashboard, Export Data |

---

## 3. Design Principles & Visual Language

### 3.1 Core Design Philosophy

Drawing from the AlfiTutor reference design — clean white canvas, vibrant purple/pink accent palette, bold typography, friendly AI mascots, and card-based layouts — STEMQuest adapts these for low-literacy, low-bandwidth, rural contexts while maintaining an aspirational, modern feel.

### 3.2 The 5 Design Pillars

| Pillar | Principle | Implementation Example |
|--------|-----------|----------------------|
| **Joyful** | Every interaction should feel like play, not study | Confetti on completing a quest; bouncing animations on XP gain |
| **Accessible** | Works for all literacy levels; visual-first design | Icons before text; voice narration; local language labels |
| **Aspirational** | Students see themselves as heroes, not struggling learners | Avatar customization; "Scientist of the Week" highlight |
| **Lightweight** | Fast on 2G, functional offline, minimal storage | Progressive loading; offline-first architecture; compressed assets |
| **Inclusive** | Gender-neutral, caste-neutral, culturally relevant | Rural Indian context in illustrations; diverse avatar skins/clothing |

### 3.3 Color System

| Token | Hex | Usage | Accessibility |
|-------|-----|-------|---------------|
| Primary Purple | `#6B21A8` | CTA buttons, active nav, badges, headings | AA on white |
| Quest Pink | `#DB2777` | Achievement highlights, streaks, XP bars | AA on white |
| Lavender Fill | `#EDE9FE` | Card backgrounds, module tiles, hover states | Decorative |
| Success Green | `#059669` | Correct answers, completed quests, unlock states | AA on white |
| Warning Amber | `#D97706` | Hint usage, partial credit, timer warnings | AA on white |
| Neutral Dark | `#1E1B4B` | Body text, headings, primary content | AAA on white |
| Surface White | `#FFFFFF` | Page background, card surfaces, input fields | Base |
| Muted Gray | `#F3F4F6` | Inactive states, dividers, secondary surfaces | Decorative |

### 3.4 Typography

| Role | Font | Size | Weight | Use Case |
|------|------|------|--------|----------|
| Display | Baloo 2 (Google Fonts) | 32–48px | Bold 700 | Quest titles, screen headers, hero text |
| Heading | Baloo 2 | 22–28px | SemiBold 600 | Section titles, card headings, module names |
| Body | Noto Sans (multilingual) | 16–18px | Regular 400 | Lesson content, instructions, descriptions |
| Caption | Noto Sans | 13–14px | Regular 400 | Labels, timestamps, hint text |
| UI Label | Noto Sans | 14–16px | Medium 500 | Buttons, nav items, badges, tags |

> **Note:** Noto Sans covers Devanagari, Tamil, Telugu, Kannada, Malayalam, and Bengali — ensuring full regional language support without font switching.

---

## 4. Information Architecture & Navigation

### 4.1 App Structure — 5 Core Zones

| Zone | Icon Metaphor | Primary Purpose | Key Screens |
|------|--------------|-----------------|-------------|
| **Quest Map** | Map / Compass | Main learning journey hub — gamified curriculum | World Map, Chapter Quests, Daily Challenge |
| **Lab** | Flask / Beaker | Interactive simulations and virtual experiments | Sim Launcher, Experiment Log, Lab Journal |
| **Arena** | Trophy / Sword | Competitive challenges, battles, leaderboards | Live Quiz, Battle Mode, Leaderboard, Tournaments |
| **Galaxy (Profile)** | Star / Planet | Student avatar, XP, badges, progress, streaks | Profile, Badge Cabinet, Skill Tree, Journal |
| **Village (Community)** | Home / People | Peer learning, teacher interaction, help forums | Class Feed, Ask a Question, Mentor Chat, Events |

### 4.2 Bottom Tab Bar (Primary Navigation)

- 5 tabs: Quest Map | Lab | Arena | Galaxy | Village
- **Active state:** filled icon + label in Primary Purple
- **Inactive state:** outline icon + label in Muted Gray
- Notification badge: Quest Pink dot with count
- Tab bar stays fixed; content area scrolls

### 4.3 Top Bar (Contextual)

- **Left:** Back arrow or Hamburger (context-dependent)
- **Center:** Screen title in Heading font
- **Right:** XP counter (animated coin icon + number) + Avatar thumbnail
- Background: White with subtle bottom shadow

---

## 5. Gamification Architecture

### 5.1 XP & Leveling System

Every interaction earns Experience Points (XP). XP accumulates to unlock Levels. Each level represents a "Scientist Rank" — giving students a clear sense of progression and identity.

| Level | Scientist Rank | XP Required | Unlocks |
|-------|---------------|-------------|---------|
| 1 | Curious Cub | 0 XP | Basic quests, 5 subjects intro |
| 2 | Explorer | 500 XP | Lab simulations, streak system |
| 3 | Investigator | 1,500 XP | Battle mode, class leaderboard |
| 4 | Analyst | 3,500 XP | Mentor chat, advanced labs |
| 5 | Innovator | 7,000 XP | Create-a-Quiz, peer teaching |
| 6 | Scientist | 12,000 XP | Regional tournament access |
| 7 | Pioneer | 20,000 XP | Scholarship board, mentor badge |
| 8 | Genius | 30,000 XP | Legacy badge, college connections |

### 5.2 XP Earning Framework

| Activity | Base XP | Bonus Multiplier | Daily Cap |
|----------|---------|-----------------|-----------|
| Complete a Quest (lesson) | 50 XP | 1.5x first attempt, 1.2x streak | 300 XP |
| Correct answer — first try | 10 XP | 2x for hard difficulty | Unlimited |
| Daily Challenge completion | 75 XP | 2x if 7-day streak active | 75 XP |
| Virtual Lab experiment | 60 XP | 1.5x for hidden outcome discovery | 120 XP |
| Battle Mode win | 80 XP | 1.3x for comeback wins | 160 XP |
| Help a peer (upvoted answer) | 30 XP | 2x if marked "Best Answer" | 90 XP |
| Teacher assignment completion | 100 XP | 1.5x for full score | 200 XP |
| Watch concept video fully | 20 XP | — | 60 XP |

### 5.3 Badge System

Badges are visible achievements displayed on the student's Galaxy profile. They signal mastery, consistency, and character — and are designed to be shared with family and school.

#### Mastery Badges
- **Speed Demon** — Complete a quest in under 5 minutes with 100% score
- **Perfect Scientist** — 10 quests with full marks in a row
- **Lab Rat** — Complete 25 virtual experiments
- **Formula Master** — Solve 50 Math formula challenges

#### Character Badges
- **Helper Hero** — 20 peer questions answered with upvotes
- **Night Owl** — Studied after 9PM for 5 consecutive days
- **Iron Will** — 30-day unbroken streak
- **Comeback Kid** — Win a Battle after losing the first round

#### Social Badges
- **Village Elder** — Top helper in class community for a month
- **Debate Champion** — Win 3 science debate challenges
- **Teacher's Star** — Recognized by teacher 5 times
- **Viral Explainer** — A peer note shared 10+ times

#### Milestone Badges
- **First Quest** — Complete very first lesson
- **Class Champion** — Rank #1 on class leaderboard
- **100 Days** — 100 days of any learning activity
- **District Hero** — Top 10 in district-level tournament

### 5.4 Streak System

| Streak Length | Visual | Reward | Grace Feature |
|--------------|--------|--------|--------------|
| 1–6 days | Small orange flame | Daily XP bonus active | — |
| 7 days | Bright flame + animation | +7-Day badge, 1 Streak Shield | 1 Shield earned |
| 14 days | Double flame | +14-Day badge, bonus XP pack | 2 Shields available |
| 30 days | Fire crown animation | +30-Day badge, avatar item unlocked | Weekend-only streak required |
| Streak Shield | Shield icon on flame | Protects streak for 1 missed day | Earned at day 7, 21, 60 |
| Lowest Streak Mode | Ghost flame | Streak visible but "resting" — no reset | Active when offline 3+ days |

### 5.5 Leaderboard Design

#### Multi-Level Leaderboards
- **Class Leaderboard** — Weekly reset; top 3 featured in teacher's dashboard
- **School Leaderboard** — Monthly; top student gets "School Champion" badge
- **District Leaderboard** — Quarterly; top 5 get digital certificates
- **Subject Leaderboard** — Top 10 in each subject (Physics, Chemistry, Math, Biology, CS)
- **All-Time Personal Best** — Never resets; students track their own peak

#### Anti-Anxiety Design
- Default view shows student's rank + 3 above + 3 below (not the full list)
- "My Journey" tab shows personal improvement, not rank comparison
- Opt-out available: students can hide from public leaderboard
- Encouragement messages when rank drops: *"You're only 50 XP from jumping 3 places!"*

---

## 6. Core Feature Specifications

### 6.1 Quest Map — Learning Journey

The Quest Map is the heart of STEMQuest. Visualized as a stylized map of India with regional biomes, students navigate outward from their home village — unlocking new territories as they master concepts.

#### 6.1.1 World Map Design

- India-themed world map with **5 regions = 5 subject worlds:**
  - Physics Peaks | Chemistry Caves | Math Mountains | Biology Jungle | Tech Valley
- Each region has 10–15 Chapters; each chapter has 4–8 Quests
- Locked chapters shown in grayscale with padlock icon and XP requirement label
- Active chapter glows with purple aura and animated indicator
- Completed chapters show checkmark + star rating (1–3 stars)
- Hidden bonus quests appear as question marks — unlock via exploration

#### 6.1.2 Quest Structure (Individual Lesson Flow)

| Step | Screen Element | Design Detail | Duration |
|------|---------------|---------------|----------|
| 1. Quest Intro | Cinematic card with chapter art | Bold title, story hook, XP reward shown | 10–15 sec |
| 2. Concept Video | Animated explainer | Character-narrated, local language, offline cached | 2–4 min |
| 3. Check Point | 3 quick-fire MCQs | Immediate feedback with explanation | 1–2 min |
| 4. Mini Lab / Activity | Interactive simulation or drawing task | Hands-on engagement with virtual tools | 2–5 min |
| 5. Final Boss | 5 application questions (mixed types) | Star rating based on score — 5/5 = 3 stars | 3–5 min |
| 6. Quest Complete | Celebration screen | Confetti + audio jingle + next quest preview | 20 sec |

### 6.2 AI Mentor — "Vigyan" (Science Bot)

Vigyan is STEMQuest's AI tutor — a friendly robot character. Vigyan speaks in the student's regional language, adjusts explanation complexity to their level, and is never judgmental.

#### Core AI Abilities
- Explain any concept from the curriculum in simple language
- Answer "Why?" questions with real-life examples
- Provide step-by-step problem solving guidance
- Speak in Hindi, Marathi, Tamil, Telugu, Kannada, Bengali, Gujarati
- Read questions aloud for students with reading difficulty
- Give encouraging feedback — **never say "Wrong"**

#### Smart Context Abilities
- Remember student's weak topics and proactively revisit them
- Suggest next quest based on current performance
- Warn before student is about to make a common mistake
- Available offline with a smaller local model
- Parental mode: summarize weekly learning for parents
- Teacher mode: flag struggling students for teacher attention

#### Vigyan Interaction Design
- Triggered by: tap on Vigyan icon (floating button, bottom-right of any screen)
- **Chat-first UI:** conversational interface like WhatsApp — familiar to rural students
- **Voice input:** tap mic, speak in any supported language
- **Response format:** text + visual diagram when needed + audio read-aloud option
- **Tone:** encouraging big brother/sister voice, uses student's first name
- If unsure: *"That's a great question! Let me check..."* — never shows a bare error

### 6.3 Virtual Lab — Interactive Experiments

The Virtual Lab eliminates the single biggest gap in rural STEM education: absence of practical experiments. Students can conduct 60+ simulated experiments safely, repeatably, on any Android phone.

| Subject | Experiments | Example Experiments | Special Feature |
|---------|-------------|--------------------|----|
| Physics | 15 | Ohm's Law circuit builder, Pendulum simulator, Lens ray diagram | Variable manipulation sliders |
| Chemistry | 18 | Titration sim, pH indicator reactions, Flame test, Electrolysis | Safety mode — no dangerous reactions |
| Biology | 12 | Cell division animation, Osmosis demo, Dissection sim | Layered anatomy viewer |
| Mathematics | 10 | Geometry proof builder, Probability simulator, Graph plotter | Step-by-step proof mode |
| Computer Science | 8 | Code block puzzle, Logic gate sim, Binary calculator | Live output preview |

#### Lab UI Design
- Equipment tray at bottom — drag and drop to workbench area
- Workbench is the main canvas — zoomable, pinchable
- Result panel slides up from bottom when experiment completes
- "Discovery mode" — change variables and observe unexpected outcomes for bonus XP
- Lab journal auto-records all experiments with date, outcome, and student notes
- "Share my experiment" — screenshot with branded frame, shareable on WhatsApp

### 6.4 Battle Arena — Competitive Learning

The Arena converts peer competition from a source of fear into a source of fun. All battles are **anonymous by default** — students see avatars, not names.

| Battle Type | Format | Duration | Reward |
|-------------|--------|----------|--------|
| 1v1 Quick Battle | 10 MCQs, same topic, simultaneous | 5 min | XP + Duelist badge progress |
| Class Tournament | Bracket-style, 8–32 students, teacher-organized | 1 week | Class Champion badge + certificate |
| Daily Challenge | 5 questions, all vs all, global ranking | 24 hours | Daily XP bonus + ranking |
| Team Battle | 2 teams of 3, collaborative answers | 15 min | Team trophy, bonus XP |
| Subject Sprint | 20 questions, one subject, time-based | 10 min | Subject mastery XP multiplier |
| Boss Battle | End-of-chapter special event, mixed question types | 30 min | Chapter completion badge |

### 6.5 Offline Architecture

STEMQuest is built **offline-first**. Internet is an enhancement, not a requirement.

#### Offline Capabilities
- All quest content for enrolled subjects pre-downloaded at onboarding (500MB initial pack)
- Virtual lab simulations run fully offline — no server calls needed
- XP, badges, and progress stored locally; synced when connection available
- Vigyan AI works offline via lightweight on-device model (basic Q&A only)
- Battle mode: async battles work offline — submit answers, results sync when back online
- Content updates download automatically on any Wi-Fi or stable 4G

#### Sync Strategy
- **Delta sync** — only new/changed data synced, not full re-download
- **Background sync** — happens while device charges, no user action needed
- **Conflict resolution** — server wins for leaderboard data; local wins for personal progress
- **Offline indicator** — subtle banner when offline, no blocking modals

---

## 7. Curriculum Mapping & Content Strategy

### 7.1 Subject Coverage

| Subject | Classes | Quests (Year 1) | Priority |
|---------|---------|-----------------|----------|
| Mathematics | 6–12 | 240 quests | P0 — Launch critical |
| Science (Physics) | 6–12 | 180 quests | P0 — Launch critical |
| Science (Chemistry) | 8–12 | 150 quests | P0 — Launch critical |
| Science (Biology) | 6–12 | 160 quests | P1 — Phase 2 |
| Computer Science | 9–12 | 80 quests | P1 — Phase 2 |
| English (STEM reading) | 6–12 | 60 quests | P2 — Phase 3 |

### 7.2 Content Localization Strategy

- All content available in: **Hindi, Marathi, Tamil, Telugu, Kannada, Bengali, Gujarati** (Year 1)
- Text-to-speech in all 7 languages using Google TTS API
- Examples and story hooks use local contexts: farming, festivals, markets, cricket
- Measurement in local context (e.g., "A cricket pitch is 20 metres — that's 20 metres of force...")
- Illustrations show **rural Indian children, classrooms, homes** — not urban settings

---

## 8. Key Screen Specifications

### 8.1 Onboarding Flow

| Screen | Content | Design Notes |
|--------|---------|-------------|
| Welcome Screen | STEMQuest hero image, tagline, CTA: "Start My Journey" | Full-bleed gradient (purple to pink), animated stars |
| Language Select | Grid of 8 language options with flag icons | Large tap targets (min 64px), auto-detect device language |
| Class Select | Horizontal scroll of Class 6–12 cards | Current class highlighted; teacher-guided setup option |
| Subject Select | Checkbox cards for 5 subjects | "I'm scared of..." option to tag fear subjects for Vigyan focus |
| Avatar Builder | Circular avatar with skin tone, hair, clothing, accessories | 20+ rural-context outfits; random button; save to profile |
| Name & Profile | First name input + optional phone for parent link | No password at onboarding — PIN set on next session |
| First Quest Prompt | Vigyan appears and guides first quest selection | Celebratory animation, XP meter starts filling from 0 |

### 8.2 Home / Quest Map Screen

- Full-screen illustrated map with animated elements (clouds moving, flags waving)
- Student avatar placed at current location on map
- Active quest chapter pulses with glow effect
- **Top bar:** XP counter + Level badge + Streak flame + Notification bell
- **Bottom:** Tab navigation (Quest Map highlighted)
- Floating Vigyan button (bottom-right, 56dp circle, with shadow)
- Daily Challenge card slides in from bottom on app open if uncompleted

### 8.3 Quest Screen

- **Header:** Chapter name + star rating (current) + XP earned so far
- **Progress bar:** Segmented, showing which step the student is on
- **Content area:** Full-width scrollable with concept content
- **Question cards:** Rounded corners, shadow, option buttons with 48dp tap targets
- **Answer feedback:** Green glow + checkmark (correct) / Red shake + X + explanation (incorrect)
- **Vigyan hint button:** Yellow bulb icon — tap to spend 1 hint token for a clue
- **Pause:** Top-right X — confirms pause before exiting, saves progress automatically

---

## 9. Teacher & Parent Tooling

### 9.1 Teacher Dashboard

*Access: Web browser on school computer or mobile app (separate teacher login)*

| Feature | Description | Update Frequency |
|---------|-------------|-----------------|
| Class Overview | All students' XP, level, streak, last active date in one table view | Real-time sync |
| Subject Performance Heatmap | Color-coded grid: which students are weak in which topics | After each quest |
| Struggling Students Alert | Vigyan flags students who've failed same quest 3+ times | Immediate alert |
| Assignment Builder | Teacher creates custom quest bundles with deadline | On teacher action |
| Leaderboard Control | Toggle class leaderboard visibility, reset monthly board | On teacher action |
| Printable Report | 1-page PDF per student: quests done, XP, weak areas, recommendations | Weekly auto-generate |
| Lesson Tie-in | Teacher marks which textbook chapter each quest corresponds to | Setup once |

### 9.2 Parent Dashboard

Parent view is simplified — designed for parents with low digital literacy. Accessible via WhatsApp share link or 4-digit PIN on student's phone.

- **This Week:** Quests completed, time spent, XP earned (big numbers, simple visual)
- **Streak flame:** Shows current streak — *"Priya hasn't missed a day in 12 days!"*
- **Subject effort:** Simple bar chart — 5 subjects, relative time spent
- **Vigyan's message:** 1 personalized sentence from AI tutor about the child's week
- **Badges earned:** Showcased prominently — shareable on WhatsApp
- **Teacher note:** If teacher left a comment, shown prominently with teacher avatar

---

## 10. Accessibility & Inclusion

### 10.1 Technical Accessibility

| Category | Requirement |
|----------|-------------|
| Minimum device | Android 6.0+ (covers 95%+ of rural Android users) |
| App install size | < 40MB; content packs downloaded separately |
| RAM requirement | Works on 1GB RAM devices; smooth on 2GB+ |
| Screen support | 4.5" to 6.5" phones; tablet layout for 7"+ devices |
| Text size | Respects system font size setting; min body text 16px |
| Colour contrast | All text ≥ 4.5:1 contrast ratio (WCAG AA) |
| Touch targets | Minimum 48×48dp on all interactive elements |
| Voice | All text content readable via TTS in 7 languages |
| Motion | Reduced motion option in settings for seizure safety |
| Dark mode | Available as user preference; high-contrast dark palette |

### 10.2 Cognitive Accessibility

- No time pressure on learning quests — only Battle mode (opt-in) is timed
- Progress always saved — never lose work if app closes unexpectedly
- Clear, simple language — Flesch-Kincaid reading level ≤ Grade 6 for all instructions
- Error messages always tell the student **what to do**, not just what went wrong
- Consistent navigation — same back button position on every screen
- "Explain again" always available — no limit on revisiting concept videos

---

## 11. Success Metrics & KPIs

### 11.1 Core KPIs — Year 1 Targets

| Metric | Definition | Target (6 months) | Target (12 months) |
|--------|-----------|-------------------|-------------------|
| Daily Active Users (DAU) | Unique students completing ≥1 quest per day | 10,000 | 50,000 |
| 7-Day Retention | % students returning within 7 days of signup | 45% | 55% |
| 30-Day Retention | % students active in month 2 | 30% | 40% |
| Quest Completion Rate | % of started quests fully completed | 65% | 75% |
| Streak ≥7 Days | % of MAU with active 7+ day streak | 25% | 35% |
| Subject Fear Reduction | Self-reported improvement on onboarding fear rating (30-day survey) | 40% improvement | 60% improvement |
| Teacher Adoption | % of enrolled schools with ≥1 active teacher on dashboard | 30% | 60% |
| Lab Sessions / User / Week | Average virtual lab experiments per student per week | 2 | 4 |
| NPS Score | Net Promoter Score from student survey | > 40 | > 55 |

---

## 12. Phased Product Roadmap

### Phase 1 — Foundation (Months 1–4)

**MVP Launch Features**

- Onboarding flow with avatar builder and language selection
- Quest Map with Physics, Chemistry, Math content for Classes 9–10
- 50 quests across 3 subjects in Hindi and English
- XP system, 3 badge categories, streak system
- Vigyan AI tutor (cloud-based, Hindi + English)
- Virtual Lab: 15 Physics and Chemistry experiments
- Student profile with Galaxy view
- Offline download for enrolled subject content
- Class leaderboard and Daily Challenge

---

### Phase 2 — Growth (Months 5–8)

**Expansion Features**

- Classes 6–8 content added (Science and Math quests)
- Biology subject launched with virtual lab
- 5 additional regional languages added
- Battle Arena launched: 1v1 and Team Battle modes
- Teacher Dashboard (web) launched in 5 pilot schools
- Parent Dashboard (WhatsApp link format)
- Tournament system: School-level competitions
- Vigyan offline model (basic Q&A)
- Android tablet layout optimization

---

### Phase 3 — Scale (Months 9–12)

**Scale Features**

- Class 11–12 content for JEE / NEET preparation mode
- Computer Science subject launched
- District-level leaderboards and tournaments
- NGO / Government partner impact dashboard
- Scholarship board — top students connected to partner scholarships
- Peer teaching: students create their own quiz cards
- School administrator panel
- iOS app launch
- Vigyan upgraded to multimodal (image + voice input)

---

## 13. Open Questions & Decisions

| # | Question | Options | Decision Owner | Target Date |
|---|----------|---------|----------------|-------------|
| 1 | Should leaderboard be opt-in or opt-out? | Opt-in (safer) vs Opt-out (more competition) | Product + Research | Month 1 |
| 2 | AI tutor gender and voice? | Gender-neutral robot vs Female vs Male voice | User Research | Month 1 |
| 3 | Should streaks reset on missed day or decay? | Hard reset vs 3-day grace decay | Product | Month 1 |
| 4 | Vigyan name and design for South India? | Regional mascot variants vs one national character | Design | Month 2 |
| 5 | How to handle shared-device multi-profile? | PIN-based profile switch vs separate logins | Engineering + Product | Month 2 |
| 6 | Monetization model? | Freemium vs Government partnership vs NGO grant | Business | Month 3 |
| 7 | Content creation: in-house vs crowdsourced? | Full in-house vs Teacher creator program | Content + Business | Month 2 |

---

*STEMQuest PRD v1.0 — Confidential & Internal Use Only*
*Prepared for: Gamified STEM Learning Platform — Rural India (Class 6–12) | June 2026*