const toggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

function toggleTheme() {
  const isDark = body.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
  }
});

toggleBtn.addEventListener('click', toggleTheme);
