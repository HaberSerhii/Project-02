let currentTheme = 1;

function cycleBanner() {
  const root = document.documentElement;
  currentTheme = (currentTheme % 3) + 1;
  root.style.setProperty("--banner-bg", `var(--banner-bg-${currentTheme})`);
  root.style.setProperty("--text-color", `var(--text-color-${currentTheme})`);
}
