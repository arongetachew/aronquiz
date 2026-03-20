const questions = {
  algebra: [
    { q: 'Solve for x: 2x = 10', o: ['x = 3', 'x = 4', 'x = 5', 'x = 6'], a: 2 },
    { q: 'Value of 3x + 1 when x = 2?', o: ['5', '6', '7', '8'], a: 2 },
    { q: 'Simplify: 4x - x', o: ['2x', '3x', '4', 'x'], a: 1 },
    { q: 'Solve: x + 7 = 12', o: ['5', '6', '7', '8'], a: 0 },
    { q: 'If y = x - 2, what is y when x = 5?', o: ['2', '3', '4', '5'], a: 1 },
    { q: 'Solve for y: 2y + 4 = 10', o: ['2', '3', '4', '5'], a: 1 },
    { q: 'Simplify: 2(x + 3)', o: ['2x+3', '2x+5', '2x+6', 'x+6'], a: 2 },
    { q: 'What is 5x when x = -2?', o: ['-10', '-7', '3', '10'], a: 0 }
  ],
  geometry: [
    { q: 'Interior angles sum of a triangle?', o: ['90°', '180°', '270°', '360°'], a: 1 },
    { q: 'Area of rectangle 5 by 4?', o: ['9', '18', '20', '40'], a: 2 },
    { q: 'How many sides does a hexagon have?', o: ['5', '6', '7', '8'], a: 1 },
    { q: 'Complement of a 40° angle?', o: ['40°', '50°', '140°', '150°'], a: 1 },
    { q: 'Perimeter of a square with side 3?', o: ['6', '9', '12', '15'], a: 2 },
    { q: 'What is a polygon with 8 sides?', o: ['Heptagon', 'Octagon', 'Nonagon', 'Decagon'], a: 1 },
    { q: 'Angle greater than 90° but less than 180°?', o: ['Acute', 'Right', 'Obtuse', 'Straight'], a: 2 },
    { q: 'Volume of a cube with side 2?', o: ['4', '6', '8', '12'], a: 2 },
    { q: 'An isosceles triangle has how many equal sides?', o: ['0', '1', '2', '3'], a: 2 },
    { q: 'Radius of a circle with diameter 10?', o: ['2.5', '5', '10', '20'], a: 1 }
  ],
  probability: [
    { q: 'Prob of rolling a 1 on a die?', o: ['1/2', '1/3', '1/4', '1/6'], a: 3 },
    { q: 'Prob of flipping heads on a coin?', o: ['0.25', '0.5', '0.75', '1.0'], a: 1 },
    { q: 'Prob of drawing an Ace from a deck?', o: ['1/13', '1/52', '4/13', '1/4'], a: 0 },
    { q: 'If 2 red & 3 blue balls, prob of red?', o: ['2/3', '2/5', '3/5', '1/2'], a: 1 },
    { q: 'Prob of rolling an even number on a die?', o: ['1/6', '1/3', '1/2', '2/3'], a: 2 },
    { q: 'Can probability be greater than 1?', o: ['Yes', 'No', 'Sometimes', 'Always'], a: 1 },
    { q: 'Prob of an impossible event?', o: ['-1', '0', '0.5', '1'], a: 1 },
    { q: 'Prob of a certain event?', o: ['0', '0.5', '1', '100'], a: 2 },
    { q: 'Outcomes for flipping 2 coins?', o: ['2', '3', '4', '8'], a: 2 },
    { q: 'Prob of drawing a club from a deck?', o: ['1/4', '1/13', '1/52', '1/2'], a: 0 }
  ],
  statistics: [
    { q: 'Mean of 2, 4, 6?', o: ['2', '4', '6', '12'], a: 1 },
    { q: 'Median of 1, 3, 5, 7, 9?', o: ['3', '5', '7', '9'], a: 1 },
    { q: 'Mode of 1, 2, 2, 3?', o: ['1', '2', '3', 'None'], a: 1 },
    { q: 'Range of 10, 15, 20?', o: ['5', '10', '15', '20'], a: 1 },
    { q: 'Mean of 10 and 20?', o: ['10', '15', '20', '30'], a: 1 },
    { q: 'Median of 2, 4, 6, 8?', o: ['4', '5', '6', '10'], a: 1 },
    { q: 'The most frequent value is called?', o: ['Mean', 'Median', 'Mode', 'Range'], a: 2 },
    { q: 'Difference between highest and lowest?', o: ['Mean', 'Median', 'Mode', 'Range'], a: 3 },
    { q: 'Average is another word for?', o: ['Mean', 'Median', 'Mode', 'Range'], a: 0 },
    { q: 'Middle value when ordered?', o: ['Mean', 'Median', 'Mode', 'Range'], a: 1 }
  ],
  general: [
    { q: 'What is 10 x 5?', o: ['15', '50', '500', '105'], a: 1 },
    { q: 'What is 42 ÷ 6?', o: ['6', '7', '8', '9'], a: 1 },
    { q: 'What is 20% of 100?', o: ['10', '20', '50', '80'], a: 1 },
    { q: 'What is 2³?', o: ['5', '6', '8', '9'], a: 2 },
    { q: 'What is the square root of 64?', o: ['6', '7', '8', '9'], a: 2 },
    { q: 'What is 15 + 27?', o: ['32', '42', '52', '24'], a: 1 },
    { q: 'What is 100 - 45?', o: ['45', '50', '55', '65'], a: 2 },
    { q: 'What is 0.5 as a fraction?', o: ['1/4', '1/3', '1/2', '3/4'], a: 2 },
    { q: 'What is 3/4 as a decimal?', o: ['0.25', '0.5', '0.75', '1.0'], a: 2 },
    { q: 'What is 7 x 8?', o: ['54', '56', '64', '62'], a: 1 }
  ]
};

let currentCategory = 'algebra';
let usedIndices = new Set();
let currentQuestion = null;
let score = 0;
let total = 0;
let xp = 0;

const questionEl = document.getElementById('mcqQuestion');
const optionsEl = document.getElementById('mcqOptions');
const resultEl = document.getElementById('mcqResult');
const scoreEl = document.getElementById('scoreDisplay');
const revealBtn = document.getElementById('revealBtn');
const resetBtn = document.getElementById('resetBtn');
const themeToggle = document.getElementById('theme-toggle');
const dailyChallengeModal = document.getElementById('dailyChallengeModal');
const closeDailyChallengeBtn = document.getElementById('closeDailyChallenge');
const sidebarDailyBtn = document.getElementById('sidebarDailyBtn');
const unitTitleEl = document.getElementById('unitTitle');

function updateScore() {
  if (scoreEl) scoreEl.textContent = `${score} / ${total}`;
  const totalXpDisplay = document.querySelector('.text-secondary[data-xp]');
  if (totalXpDisplay) totalXpDisplay.textContent = xp;
  saveData();
}

function updateProgress() {
  const progressBar = document.getElementById('progressBar');
  if (!progressBar) return;
  const poolSize = questions[currentCategory].length;
  const percent = poolSize > 0 ? Math.floor((usedIndices.size / poolSize) * 100) : 0;
  progressBar.style.width = `${percent}%`;

  // Update progress section stats
  const attemptEl = document.getElementById('progressAttempted');
  const correctEl = document.getElementById('progressCorrect');
  const scoreStatEl = document.getElementById('progressScore');
  const completionEl = document.getElementById('progressCompletion');

  if (attemptEl) attemptEl.textContent = usedIndices.size;
  if (correctEl) correctEl.textContent = score;
  if (scoreStatEl) scoreStatEl.textContent = xp;
  if (completionEl) completionEl.textContent = percent + '%';
}

function renderQuestion() {
  const pool = questions[currentCategory];
  if (usedIndices.size >= pool.length) {
    questionEl.textContent = 'Topic Mastered! 🎉';
    resultEl.textContent = `You have completed all ${pool.length} questions in this topic.`;
    resultEl.className = 'mt-5 p-4 rounded-xl text-sm font-bold text-center ring-2 ring-secondary status-correct';
    optionsEl.innerHTML = '';
    return;
  }

  let idx;
  do {
    idx = Math.floor(Math.random() * pool.length);
  } while (usedIndices.has(idx));

  usedIndices.add(idx);
  currentQuestion = pool[idx];

  if (unitTitleEl) {
    unitTitleEl.textContent = currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);
  }

  questionEl.textContent = currentQuestion.q;
  resultEl.textContent = 'Choose an answer to proceed.';
  resultEl.className = 'mt-5 p-4 rounded-xl text-sm font-bold text-center ring-2 ring-transparent status-neutral';
  optionsEl.innerHTML = '';

  currentQuestion.o.forEach((optionText, index) => {
    const label = document.createElement('label');
    label.className = 'mcq-choice p-4 py-3 rounded-xl bg-surface-container-high hover:bg-surface-container-highest cursor-pointer transition-all border border-outline-variant/20 flex items-center gap-4 group text-sm';
    label.innerHTML = `
      <div class="w-6 h-6 rounded bg-surface-container-highest flex items-center justify-center text-[10px] font-black text-on-surface-variant group-hover:bg-primary group-hover:text-on-primary transition-all">
        ${String.fromCharCode(65 + index)}
      </div>
      <input type="radio" name="mcq" value="${index}" class="hidden" />
      <span class="font-semibold text-on-surface">${optionText}</span>
    `;

    label.querySelector('input').addEventListener('change', () => {
      optionsEl.querySelectorAll('label').forEach(c => c.querySelector('input').disabled = true);
      const isCorrect = index === currentQuestion.a;
      total++;
      if (isCorrect) {
        score++;
        xp += 20;
        resultEl.textContent = 'Correct! ✅ Loading next...';
        resultEl.className = 'mt-5 p-4 rounded-xl text-sm font-bold text-center ring-2 ring-secondary status-correct';
        
        // Explicit custom class logic
        label.classList.add('quiz-correct');
        label.classList.remove('bg-surface-container-high', 'text-on-surface');
      } else {
        resultEl.textContent = `Wrong! Answer: ${currentQuestion.o[currentQuestion.a]}. Loading next...`;
        resultEl.className = 'mt-5 p-4 rounded-xl text-sm font-bold text-center ring-2 ring-error status-wrong';
        
        // Red explicit class
        label.classList.add('quiz-wrong');
        label.classList.remove('bg-surface-container-high', 'text-on-surface');

        // Show the correct answer in green too
        const correctLabel = optionsEl.children[currentQuestion.a];
        if (correctLabel) {
            correctLabel.classList.add('quiz-correct');
            correctLabel.classList.remove('bg-surface-container-high', 'text-on-surface');
        }
      }
      updateScore();
      updateProgress();
      
      // Auto move after 2 seconds
      setTimeout(renderQuestion, 2000);
    });
    optionsEl.appendChild(label);
  });
}

function showSection(sectionId) {
  const sections = ['quiz', 'progress', 'leaderboard', 'algebra', 'geometry', 'probability', 'statistics'];
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });

  if (['algebra', 'geometry', 'probability', 'statistics', 'general'].includes(sectionId)) {
    currentCategory = sectionId;
    usedIndices.clear();
    score = 0;
    total = 0;
    renderQuestion();
    updateScore();
    updateProgress();

    const showEl = document.getElementById('quiz');
    if (showEl) showEl.classList.remove('hidden');

    document.querySelectorAll('.subject-link').forEach(link => link.classList.remove('bg-surface-container-high'));
    const activeLink = document.querySelector(`.subject-link[data-subject="${sectionId}"]`);
    if (activeLink) activeLink.classList.add('bg-surface-container-high');
    return;
  }

  const showEl = document.getElementById(sectionId);
  if (showEl) showEl.classList.remove('hidden');
}

function updateLeaderboard() {
  const leaderboardBody = document.getElementById('leaderboardBody');
  if (!leaderboardBody) return;

  // Real Mock Data plus User
  const players = [
    { name: 'Aron Getachew (You)', xp: xp, mastery: (questions[currentCategory].length > 0 ? (usedIndices.size / questions[currentCategory].length * 100).toFixed(1) : 0) + '%', self: true },
    { name: 'MathBot Alpha', xp: 11200, mastery: '92.4%', self: false },
    { name: 'Sarah Solver', xp: 10500, mastery: '88.7%', self: false },
    { name: 'Equation King', xp: 9800, mastery: '85.2%', self: false },
    { name: 'Logic Queen', xp: 9200, mastery: '81.9%', self: false },
    { name: 'Geo Genius', xp: 8500, mastery: '76.3%', self: false }
  ];

  players.sort((a, b) => b.xp - a.xp);

  leaderboardBody.innerHTML = players.map((p, i) => {
    let rankStyles = 'bg-surface-container-highest text-on-surface-variant shadow-inner ring-1 ring-surface-container-highest';
    if (i === 0) rankStyles = 'bg-gradient-to-br from-yellow-300 to-yellow-500 text-yellow-950 shadow-[0_0_15px_rgba(253,224,71,0.5)] scale-110';
    else if (i === 1) rankStyles = 'bg-gradient-to-br from-slate-200 to-slate-400 text-slate-800 shadow-[0_0_15px_rgba(203,213,225,0.4)] scale-105';
    else if (i === 2) rankStyles = 'bg-gradient-to-br from-amber-600 to-amber-700 text-amber-100 shadow-[0_0_15px_rgba(217,119,6,0.4)]';

    return `
    <div class="group flex items-center p-4 pr-6 rounded-3xl bg-surface-container/30 backdrop-blur-md border border-outline-variant/10 hover:bg-surface-container/80 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${p.self ? 'ring-2 ring-primary/50 bg-primary/10' : ''}">
      <div class="w-12 md:w-16 flex justify-center">
        <div class="w-8 h-8 md:w-10 md:h-10 rounded-[0.8rem] ${rankStyles} flex items-center justify-center font-black text-sm md:text-base transition-transform duration-300">${i + 1}</div>
      </div>
      <div class="flex-1 flex items-center gap-4 pl-3 md:pl-4 border-l border-outline-variant/20">
          <div class="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-${i % 2 === 0 ? 'secondary' : 'primary'}-container flex items-center justify-center text-on-${i % 2 === 0 ? 'secondary' : 'primary'}-container font-black md:text-lg shadow-inner ring-1 ring-outline-variant/20">${p.name[0]}</div>
          <span class="font-bold text-sm md:text-base text-on-surface tracking-tight group-hover:text-primary transition-colors">${p.name}</span>
      </div>
      <div class="w-24 md:w-32 text-right">
        <span class="font-black text-base md:text-lg text-primary tracking-tight">${p.xp.toLocaleString()}</span>
        <span class="text-[9px] md:text-[10px] text-on-surface-variant block uppercase font-bold tracking-widest">XP</span>
      </div>
      <div class="w-24 text-right hidden md:block">
        <span class="font-bold text-base text-on-surface-variant">${p.mastery}</span>
      </div>
    </div>
  `}).join('');
}


function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  if (themeToggle) {
    themeToggle.querySelector('span').textContent = isDark ? 'dark_mode' : 'light_mode';
  }
}

function saveData() {
  localStorage.setItem('mathLabXP', xp);
}

function loadData() {
  xp = parseInt(localStorage.getItem('mathLabXP')) || 0;
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
    if (themeToggle) themeToggle.querySelector('span').textContent = 'dark_mode';
  }
}

// Event Listeners
if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
if (revealBtn) revealBtn.addEventListener('click', () => {
  if (currentQuestion) {
    resultEl.textContent = `Correct answer is: ${currentQuestion.o[currentQuestion.a]}`;
  }
});
if (resetBtn) resetBtn.addEventListener('click', () => {
  usedIndices.clear();
  score = 0;
  total = 0;
  updateScore();
  updateProgress();
  renderQuestion();
});

if (sidebarDailyBtn) sidebarDailyBtn.addEventListener('click', () => dailyChallengeModal.classList.remove('hidden'));
if (closeDailyChallengeBtn) closeDailyChallengeBtn.addEventListener('click', () => dailyChallengeModal.classList.add('hidden'));

// Navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = link.getAttribute('href').substring(1);
    if (['quiz', 'progress', 'leaderboard'].includes(target)) {
      e.preventDefault();
      showSection(target);
      if (target === 'leaderboard') updateLeaderboard();
    }
  });
});

document.querySelectorAll('.subject-link').forEach(link => {
  link.addEventListener('click', () => {
    const subject = link.getAttribute('data-subject');
    showSection(subject);
  });
});

window.addEventListener('DOMContentLoaded', () => {
  loadData();
  renderQuestion();
  updateScore();
  updateProgress();
  showSection('algebra'); // Default category
});