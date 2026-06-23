// DOM Elements
const clockElement = document.getElementById('clock');
const dateElement = document.getElementById('date-display');
const themeToggleBtn = document.getElementById('theme-toggle');
const formatToggleBtn = document.getElementById('format-toggle');

let is24HourFormat = false; // By default, use 12-hour format

// --- 1. CLOCK FUNCTIONALITY ---

// Add leading zero if a number is less than 10
function formatTime(val) {
    return val < 10 ? '0' + val : val;
}

function updateClock() {
    const now = new Date();
    
    // Time variables
    let hours = now.getHours();
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());
    let ampm = '';

    // Format handling
    if (!is24HourFormat) {
        ampm = hours >= 12 ? ' PM' : ' AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
    }
    
    // Display time
    const hoursStr = formatTime(hours);
    clockElement.textContent = `${hoursStr}:${minutes}:${seconds}${ampm}`;

    // Date display
    const dateString = now.toLocaleDateString('en-IN', {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    });
    dateElement.textContent = dateString;
}

// Update clock every second
setInterval(updateClock, 1000);
// Run once on load
updateClock();

// Toggle Time Format
formatToggleBtn.addEventListener('click', () => {
    is24HourFormat = !is24HourFormat;
    formatToggleBtn.textContent = is24HourFormat ? "Switch to 12h format" : "Switch to 24h format";
    updateClock();
});


// --- 2. DARK MODE FUNCTIONALITY ---

// Check localStorage for a saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = "☀️ Light Mode";
}

// Toggle Dark Mode
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Change button text and save to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = "🌙 Dark Mode";
    }
});
