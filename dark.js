  //TEMA OSCURO
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  let isDarkTheme = false;

  themeToggle.addEventListener('click', () => {
    if (!isDarkTheme) {
      body.classList.add('dark');
      isDarkTheme = true;
    } else {
      body.classList.remove('dark');
      isDarkTheme = false;
    }
  });