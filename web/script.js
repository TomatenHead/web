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

function scrollToCategory(category) {
    const card = Array.from(menuCards).find((item) => item.dataset.category === category);
    if (card && menuScroll) {
        card.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }
}

if (tabButtons.length && menuCards.length) {
    const activeButton = document.querySelector('.tab-btn.active');
    const initialCategory = activeButton ? activeButton.dataset.category : 'sorbets';
    scrollToCategory(initialCategory);

    tabButtons.forEach((button) => {
        button.addEventListener('click', () => {
            tabButtons.forEach((btn) => btn.classList.remove('active'));
            button.classList.add('active');
            scrollToCategory(button.dataset.category);
        });
    });
}

function scrollMenu(direction) {
    if (!menuScroll || menuCards.length === 0) return;
    const cardStyle = window.getComputedStyle(menuCards[0]);
    const cardWidth = menuCards[0].offsetWidth;
    const gap = parseFloat(cardStyle.marginRight || '0') || 24;
    const distance = (cardWidth + gap) * 3;
    menuScroll.scrollBy({ left: distance * direction, behavior: 'smooth' });
}

if (scrollLeftBtn) {
    scrollLeftBtn.addEventListener('click', () => scrollMenu(-1));
}

if (scrollRightBtn) {
    scrollRightBtn.addEventListener('click', () => scrollMenu(1));
}

