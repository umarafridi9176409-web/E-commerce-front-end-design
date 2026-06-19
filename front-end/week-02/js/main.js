/* ============================================================
   ShopVerse – Week 02: main.js (Home Page)
   Handles: countdown timer, flash deals, featured products,
            tabs, cart badge, dropdown, newsletter, scroll effects
   ============================================================ */

'use strict';

// ── Product Data ─────────────────────────────────────────────
const PRODUCTS = [
  { id: 1, name: 'Laptop Pro Ultra 15"', category: 'electronics', price: 1299, oldPrice: 1799, rating: 4.9, reviews: 2410, badge: 'new', imgClass: 'img-electronics', img: '../assets/assets/Image/tech/image 34.png', discount: 28 },
  { id: 2, name: 'Premium Wireless Headphones', category: 'electronics', price: 279, oldPrice: 399, rating: 4.8, reviews: 8720, badge: 'hot', imgClass: 'img-electronics', img: '../assets/assets/Layout/alibaba/Image/tech/image 86.png', discount: 30 },
  { id: 3, name: 'Polo T-Shirt Classic', category: 'fashion', price: 49, oldPrice: 89, rating: 4.7, reviews: 1540, badge: 'sale', imgClass: 'img-fashion', img: '../assets/assets/Layout/alibaba/Image/cloth/Bitmap.png', discount: 45 },
  { id: 4, name: 'Denim Shorts Premium', category: 'fashion', price: 39, oldPrice: 69, rating: 4.6, reviews: 3280, badge: 'new', imgClass: 'img-fashion', img: '../assets/assets/Layout/alibaba/Image/cloth/Bitmap (2).png', discount: 19 },
  { id: 5, name: 'Tablet Pro 11" Display', category: 'electronics', price: 599, oldPrice: 749, rating: 4.9, reviews: 980, badge: 'hot', imgClass: 'img-electronics', img: '../assets/assets/Image/tech/image 32.png', discount: 20 },
  { id: 6, name: 'Espresso Coffee Machine', category: 'home', price: 129, oldPrice: 179, rating: 4.7, reviews: 2100, badge: null, imgClass: 'img-home', img: '../assets/assets/Image/interior/8.png', discount: 27 },
  { id: 7, name: 'Elegant Lounge Chair', category: 'home', price: 349, oldPrice: 499, rating: 4.5, reviews: 670, badge: 'sale', imgClass: 'img-home', img: '../assets/assets/Image/interior/1.png', discount: 38 },
  { id: 8, name: 'Smart Electric Kettle', category: 'home', price: 59, oldPrice: 89, rating: 4.8, reviews: 5600, badge: 'hot', imgClass: 'img-home', img: '../assets/assets/Layout/alibaba/Image/tech/image 85.png', discount: 41 },
];

const DEAL_PRODUCTS = [
  { id: 101, name: 'Smartphone Pro - Blue', category: 'electronics', price: 899, oldPrice: 1199, rating: 4.9, reviews: 4110, imgClass: 'img-electronics', img: '../assets/assets/Image/tech/image 23.png', discount: 25, stock: 73 },
  { id: 102, name: 'Gaming Headset Pro', category: 'electronics', price: 299, oldPrice: 399, rating: 4.7, reviews: 2870, imgClass: 'img-electronics', img: '../assets/assets/Image/tech/image 29.png', discount: 35, stock: 42 },
  { id: 103, name: 'Winter Jacket with Fur Hood', category: 'fashion', price: 199, oldPrice: 299, rating: 4.5, reviews: 8200, imgClass: 'img-fashion', img: '../assets/assets/Layout/alibaba/Image/cloth/2 1.png', discount: 51, stock: 88 },
  { id: 104, name: 'Multi-Function Juicer', category: 'home', price: 89, oldPrice: 139, rating: 4.8, reviews: 3140, imgClass: 'img-home', img: '../assets/assets/Image/interior/9.png', discount: 30, stock: 56 },
];

// ── State ─────────────────────────────────────────────────────
let cartCount = 0;
let activeTab = 'all';

// ── DOM Refs ─────────────────────────────────────────────────
const cartBadgeEl = document.getElementById('cart-badge');
const btnAccount  = document.getElementById('btn-account');
const userDropdown= document.getElementById('user-dropdown');
const siteHeader  = document.getElementById('site-header');
const toastEl     = document.getElementById('cart-toast');
const toastMsg    = document.getElementById('toast-msg');

// ── Utilities ─────────────────────────────────────────────────
function showToast(msg) {
  toastMsg.textContent = msg;
  toastEl.classList.add('show');
  setTimeout(() => toastEl.classList.remove('show'), 3000);
}

function updateCartBadge() {
  cartBadgeEl.textContent = cartCount;
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? '½' : '';
  return '★'.repeat(full) + (half ? '☆' : '');
}

// ── Header: scroll effect ─────────────────────────────────────
window.addEventListener('scroll', () => {
  siteHeader.classList.toggle('scrolled', window.scrollY > 10);
});

// ── Header: user dropdown ─────────────────────────────────────
btnAccount.addEventListener('click', (e) => {
  e.stopPropagation();
  const expanded = btnAccount.getAttribute('aria-expanded') === 'true';
  btnAccount.setAttribute('aria-expanded', String(!expanded));
  userDropdown.classList.toggle('active');
});
document.addEventListener('click', () => {
  btnAccount.setAttribute('aria-expanded', 'false');
  userDropdown.classList.remove('active');
});

// ── Countdown Timer ───────────────────────────────────────────
function initCountdown() {
  const endTime = Date.now() + (8 * 3600 + 34 * 60 + 22) * 1000;

  function tick() {
    const remaining = Math.max(0, endTime - Date.now());
    const h = String(Math.floor(remaining / 3600000)).padStart(2, '0');
    const m = String(Math.floor((remaining % 3600000) / 60000)).padStart(2, '0');
    const s = String(Math.floor((remaining % 60000) / 1000)).padStart(2, '0');

    const hEl = document.getElementById('count-h');
    const mEl = document.getElementById('count-m');
    const sEl = document.getElementById('count-s');
    if (hEl) hEl.textContent = h;
    if (mEl) mEl.textContent = m;
    if (sEl) sEl.textContent = s;
  }

  tick();
  setInterval(tick, 1000);
}

// ── Render Product Card ───────────────────────────────────────
function createProductCard(p, showDealProgress = false) {
  const card = document.createElement('article');
  card.className = 'product-card';
  card.setAttribute('aria-label', p.name);

  const badges = p.badge ? `<div class="card-badge-wrap"><span class="card-badge badge-${p.badge === 'new' ? 'new' : p.badge === 'hot' ? 'hot' : 'sale-tag'}">${p.badge.toUpperCase()}</span></div>` : '';
  const discountBadge = p.discount ? `<span class="card-discount">-${p.discount}%</span>` : '';
  const oldPrice = p.oldPrice ? `<span class="card-old-price">$${p.oldPrice}</span>` : '';
  const progressHtml = showDealProgress ? `
    <div class="deal-progress-wrap">
      <div class="deal-progress-text">
        <span class="deal-progress-label">Sold: ${p.stock}%</span>
        <span class="deal-progress-pct">${100 - p.stock}% left</span>
      </div>
      <div class="deal-progress-bar">
        <div class="deal-progress-fill" style="width: ${p.stock}%"></div>
      </div>
    </div>` : '';

  card.innerHTML = `
    <div class="product-img-wrap">
      <div class="product-img-bg ${p.imgClass}">
        <img src="${p.img}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: contain; padding: 12px;" />
      </div>
      ${badges}
      <button class="card-wishlist-btn" aria-label="Add to wishlist" data-id="${p.id}">♡</button>
      <div class="card-quick-add" data-id="${p.id}" role="button" tabindex="0">🛒 Quick Add to Cart</div>
    </div>
    <div class="card-body">
      <span class="card-category">${p.category}</span>
      <h3 class="card-name">${p.name}</h3>
      <div class="card-rating">
        <span class="card-stars">${renderStars(p.rating)}</span>
        <span class="card-rating-num">${p.rating} (${p.reviews.toLocaleString()})</span>
      </div>
      <div class="card-price-row">
        <span class="card-price">$${p.price}</span>
        ${oldPrice}
        ${discountBadge}
      </div>
      <button class="card-add-btn" data-id="${p.id}" data-name="${p.name}" aria-label="Add ${p.name} to cart">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        Add to Cart
      </button>
    </div>
    ${progressHtml}
  `;

  // Wishlist button
  const wishBtn = card.querySelector('.card-wishlist-btn');
  wishBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    wishBtn.classList.toggle('wishlisted');
    wishBtn.textContent = wishBtn.classList.contains('wishlisted') ? '♥' : '♡';
  });

  // Quick add
  const quickAdd = card.querySelector('.card-quick-add');
  const addBtn   = card.querySelector('.card-add-btn');
  const addAction = (e) => {
    e.stopPropagation();
    cartCount++;
    updateCartBadge();
    showToast(`🛒 "${p.name}" added to cart!`);
  };
  quickAdd.addEventListener('click', addAction);
  quickAdd.addEventListener('keydown', (e) => { if (e.key === 'Enter') addAction(e); });
  addBtn.addEventListener('click', addAction);

  // Card click → product detail
  card.addEventListener('click', () => {
    window.location.href = `../week-03/product-detail.html?id=${p.id}`;
  });

  return card;
}

// ── Render Flash Deals ────────────────────────────────────────
function renderDeals() {
  const grid = document.getElementById('deals-grid');
  if (!grid) return;
  grid.innerHTML = '';
  DEAL_PRODUCTS.forEach(p => {
    const card = createProductCard(p, true);
    grid.appendChild(card);
  });
}

// ── Render Featured Products ──────────────────────────────────
function renderFeatured(filter = 'all') {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const filtered = filter === 'all' ? PRODUCTS :
    filter === 'new' ? PRODUCTS.filter(p => p.badge === 'new') :
    filter === 'best' ? PRODUCTS.filter(p => p.rating >= 4.8) :
    filter === 'sale' ? PRODUCTS.filter(p => p.badge === 'sale' || (p.discount && p.discount >= 30)) :
    PRODUCTS;
  filtered.forEach(p => grid.appendChild(createProductCard(p)));
}

// ── Tabs ──────────────────────────────────────────────────────
function initTabs() {
  const tabsEl = document.getElementById('tabs');
  if (!tabsEl) return;
  tabsEl.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      tabsEl.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderFeatured(tab.dataset.tab);
    });
  });
}

// ── Newsletter ────────────────────────────────────────────────
function initNewsletter() {
  const form    = document.getElementById('nl-form');
  const success = document.getElementById('nl-success');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('nl-email');
    if (email && email.value && email.validity.valid) {
      if (success) success.style.display = 'block';
      email.value = '';
    }
  });
}

// ── Intersection Observer: animate cards on scroll ────────────
function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.product-card, .cat-card, .trust-item, .promo-card').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
    observer.observe(el);
  });
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  renderDeals();
  renderFeatured('all');
  initTabs();
  initNewsletter();
  setTimeout(initScrollAnimations, 100);
});
