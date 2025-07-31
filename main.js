const quotes = [
  "Believe in yourself and all that you are.",
  "Start where you are. Use what you have. Do what you can.",
  "Each day is a new beginning.",
  "Small steps every day lead to big change."
];

const journalPrompts = [
  [
    "What are three things you're grateful for this morning?",
    "What intention do you want to set for today?"
  ],
  [
    "How can you show kindness to yourself today?",
    "What would make today a success?"
  ],
  [
    "What’s something you're looking forward to today?",
    "How will you take care of your mental well-being today?"
  ]
];

const sparks = [
  "You are capable of more than you think.",
  "The smallest act of progress is still progress.",
  "Peace begins with a single deep breath.",
  "Every day is a new canvas—paint it with purpose."
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function loadContent() {
  document.getElementById("quote").textContent = getRandomItem(quotes);

  const prompts = getRandomItem(journalPrompts);
  const journalList = document.getElementById("journal");
  journalList.innerHTML = "";
  prompts.forEach(prompt => {
    const li = document.createElement("li");
    li.textContent = prompt;
    journalList.appendChild(li);
  });

  document.getElementById("spark").textContent = getRandomItem(sparks);
}

// Load on first visit
window.onload = loadContent;
document.getElementById('darkToggle').onclick = () => {
  document.body.classList.toggle('dark-mode');
};
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js');
  });
}
