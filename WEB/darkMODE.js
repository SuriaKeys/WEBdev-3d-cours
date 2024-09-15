document.addEventListener('DOMContentLoaded', function () {
  const themeToggleButton = document.getElementById('theme-toggle');
  const themeLink = document.getElementById('theme-style');

  const currentTheme = localStorage.getItem('theme') || 'light-theme.css';
  themeLink.setAttribute('href', currentTheme);

  themeToggleButton.addEventListener('click', function () {
      const newTheme = themeLink.getAttribute('href') === 'light-theme.css' ? 'dark-theme.css' : 'light-theme.css';
      themeLink.setAttribute('href', newTheme);
      localStorage.setItem('theme', newTheme);
      themeToggleButton.textContent = newTheme === 'light-theme.css' ? 'Dark Mode' : 'Light Mode';
  });
});
