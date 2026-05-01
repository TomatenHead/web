const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const yearEl = document.getElementById('current-year');
const tabButtons = document.querySelectorAll('.tab-btn');
const menuCards = document.querySelectorAll('.menu-card');
const scrollLeftBtn = document.querySelector('.scroll-btn-left');
const scrollRightBtn = document.querySelector('.scroll-btn-right');
const menuScroll = document.getElementById('menuCards');

if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
        siteNav.classList.toggle('open');
    });
}

if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

const categories = ['sorbets', 'klassiker', 'specials'];

function showCategory(category) {
    menuCards.forEach((card) => {
        if (card.dataset.category === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

function switchTab(direction) {
    const activeButton = document.querySelector('.tab-btn.active');
    if (!activeButton) return;
    const currentIndex = categories.indexOf(activeButton.dataset.category);
    if (currentIndex === -1) return;
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = categories.length - 1;
    if (newIndex >= categories.length) newIndex = 0;
    const newCategory = categories[newIndex];
    tabButtons.forEach((btn) => btn.classList.remove('active'));
    const newButton = document.querySelector(`.tab-btn[data-category="${newCategory}"]`);
    if (newButton) {
        newButton.classList.add('active');
        showCategory(newCategory);
    }
}

if (tabButtons.length && menuCards.length) {
    const activeButton = document.querySelector('.tab-btn.active');
    const initialCategory = activeButton ? activeButton.dataset.category : 'sorbets';
    showCategory(initialCategory);

    tabButtons.forEach((button) => {
        button.addEventListener('click', () => {
            tabButtons.forEach((btn) => btn.classList.remove('active'));
            button.classList.add('active');
            showCategory(button.dataset.category);
        });
    });
}

if (scrollLeftBtn) {
    scrollLeftBtn.addEventListener('click', () => switchTab(-1));
}

if (scrollRightBtn) {
    scrollRightBtn.addEventListener('click', () => switchTab(1));
}

