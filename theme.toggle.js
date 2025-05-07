const themeLink = document.getElementById('theme-style');
const toggleButton = document.getElementById('toggle-theme');
const icon = toggleButton.querySelector('i');

function toggleTheme() {
  const currentTheme = themeLink.getAttribute('href');
  const newTheme = currentTheme.includes('dark') ? 'style-light.css' : 'style-dark.css';
  
  themeLink.setAttribute('href', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Alternar ícones
  if (newTheme.includes('dark')) {
    icon.classList.replace('fa-sun', 'fa-moon');
  } else {
    icon.classList.replace('fa-moon', 'fa-sun');
  }
}

// Carregar tema salvo
const savedTheme = localStorage.getItem('theme') || 'style-dark.css';
themeLink.setAttribute('href', savedTheme);

// Ajustar ícone inicial
if (savedTheme.includes('light')) {
  icon.classList.replace('fa-moon', 'fa-sun');
}

toggleButton.addEventListener('click', toggleTheme);