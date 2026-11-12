const themeToggle = document.querySelector('.theme-toggle');
const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');
const yearLabel = document.querySelector('[data-current-year]');

if (yearLabel) {
    yearLabel.textContent = new Date().getFullYear();
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.dataset.theme !== 'dark';
        document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
        themeToggle.setAttribute('aria-pressed', String(isDark));
        themeToggle.textContent = isDark ? 'Mode terang' : 'Mode gelap';
    });
}

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const selectedFilter = button.dataset.filter;

        filterButtons.forEach((filterButton) => {
            const isSelected = filterButton === button;
            filterButton.classList.toggle('is-active', isSelected);
            filterButton.setAttribute('aria-pressed', String(isSelected));
        });

        projectCards.forEach((card) => {
            card.hidden = selectedFilter !== 'all' && card.dataset.category !== selectedFilter;
        });
    });
});
