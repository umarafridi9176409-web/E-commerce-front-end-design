/* ============================================================
   ShopVerse – Week 02: products.js (Product Listing Page)
   Handles: product data, filtering, sorting, pagination,
            grid/list toggle, wishlist, add to cart, search
   ============================================================ */

'use strict';

// ── Full Product Catalog ──────────────────────────────────────
const ALL_PRODUCTS = [
  { id: 1,  name: 'Laptop Pro Ultra 15"',           category: 'electronics', price: 1299, oldPrice: 1799, rating: 4.9, reviews: 2410, badge: 'new',  imgClass: 'img-electronics', img: '../assets/assets/Image/tech/image 34.png', discount: 28, inStock: true, freeShip: true },
  { id: 2,  name: 'Premium Wireless Headphones',    category: 'electronics', price: 279,  oldPrice: 399,  rating: 4.8, reviews: 8720, badge: 'hot',  imgClass: 'img-electronics', img: '../assets/assets/Layout/alibaba/Image/tech/image 86.png', discount: 30, inStock: true, freeShip: true },
  { id: 3,  name: 'Smartphone Pro - Blue',          category: 'electronics', price: 899,  oldPrice: 1099, rating: 4.9, reviews: 4110, badge: 'new',  imgClass: 'img-electronics', img: '../assets/assets/Image/tech/image 23.png', discount: 18, inStock: true, freeShip: true },
  { id: 4,  name: 'DSLR Camera Professional',       category: 'electronics', price: 649,  oldPrice: 999,  rating: 4.7, reviews: 2870, badge: null,   imgClass: 'img-electronics', img: '../assets/assets/Image/tech/6.png', discount: 35, inStock: true, freeShip: true },
  { id: 5,  name: 'Tablet Pro 11" Display',         category: 'electronics', price: 599,  oldPrice: 749,  rating: 4.8, reviews: 1560, badge: 'new',  imgClass: 'img-electronics', img: '../assets/assets/Image/tech/image 32.png', discount: 20, inStock: true, freeShip: false },
  { id: 6,  name: 'Smart Electric Kettle',          category: 'home',        price: 59,   oldPrice: 89,   rating: 4.6, reviews: 3240, badge: null,   imgClass: 'img-home',        img: '../assets/assets/Layout/alibaba/Image/tech/image 85.png', discount: 20, inStock: true, freeShip: false },
  { id: 7,  name: 'Polo T-Shirt Classic',           category: 'fashion',     price: 49,   oldPrice: 89,   rating: 4.7, reviews: 1540, badge: 'sale', imgClass: 'img-fashion',     img: '../assets/assets/Layout/alibaba/Image/cloth/Bitmap.png', discount: 45, inStock: true, freeShip: false },
  { id: 8,  name: 'Denim Shorts Premium',           category: 'fashion',     price: 39,   oldPrice: 69,   rating: 4.6, reviews: 3280, badge: 'new',  imgClass: 'img-fashion',     img: '../assets/assets/Layout/alibaba/Image/cloth/Bitmap (2).png', discount: 19, inStock: true, freeShip: true },
  { id: 9,  name: 'Denim Backpack Casual',          category: 'fashion',     price: 35,   oldPrice: 59,   rating: 4.5, reviews: 8200, badge: 'sale', imgClass: 'img-fashion',     img: '../assets/assets/Layout/alibaba/Image/cloth/image 26.png', discount: 51, inStock: true, freeShip: false },
  { id: 10, name: 'Winter Jacket with Fur Hood',    category: 'fashion',     price: 199,  oldPrice: 299,  rating: 4.7, reviews: 2140, badge: null,   imgClass: 'img-fashion',     img: '../assets/assets/Layout/alibaba/Image/cloth/2 1.png', discount: 33, inStock: true, freeShip: false },
  { id: 11, name: 'Blue Blazer Formal',             category: 'fashion',     price: 149,  oldPrice: 219,  rating: 4.4, reviews: 890,  badge: 'new',  imgClass: 'img-fashion',     img: '../assets/assets/Layout/alibaba/Image/cloth/image 30.png', discount: 40, inStock: true, freeShip: false },
  { id: 12, name: 'Leather Wallet Premium',         category: 'fashion',     price: 29,   oldPrice: 49,   rating: 4.6, reviews: 670,  badge: null,   imgClass: 'img-fashion',     img: '../assets/assets/Layout/alibaba/Image/cloth/image 24.png', discount: 19, inStock: true, freeShip: true },
  { id: 13, name: 'Gaming Headset Pro',             category: 'electronics', price: 299,  oldPrice: 399,  rating: 4.9, reviews: 980,  badge: 'hot',  imgClass: 'img-electronics', img: '../assets/assets/Image/tech/image 29.png', discount: 25, inStock: true, freeShip: true },
  { id: 14, name: 'Smartwatch Fitness Tracker',     category: 'electronics', price: 199,  oldPrice: 299,  rating: 4.7, reviews: 2100, badge: null,   imgClass: 'img-electronics', img: '../assets/assets/Image/tech/8.png', discount: 20, inStock: true, freeShip: true },
  { id: 15, name: 'iPhone 12 - Red Edition',        category: 'electronics', price: 799,  oldPrice: 999,  rating: 4.8, reviews: 3140, badge: 'hot',  imgClass: 'img-electronics', img: '../assets/assets/Image/tech/image 33.png', discount: 30, inStock: true, freeShip: true },
  { id: 16, name: 'Designer Table Lamp',            category: 'home',        price: 49,   oldPrice: 79,   rating: 4.5, reviews: 1230, badge: null,   imgClass: 'img-home',        img: '../assets/assets/Image/interior/6.png', discount: 38, inStock: true, freeShip: false },
  { id: 17, name: 'Espresso Coffee Machine',        category: 'home',        price: 129,  oldPrice: 179,  rating: 4.5, reviews: 670,  badge: 'sale', imgClass: 'img-home',        img: '../assets/assets/Image/interior/8.png', discount: 20, inStock: true, freeShip: false },
  { id: 18, name: 'Elegant Lounge Chair',           category: 'home',        price: 349,  oldPrice: 499,  rating: 4.7, reviews: 4560, badge: 'new',  imgClass: 'img-home',        img: '../assets/assets/Image/interior/1.png', discount: 25, inStock: true, freeShip: true },
  { id: 19, name: 'Smart Electric Kettle Pro',      category: 'home',        price: 79,   oldPrice: 119,  rating: 4.6, reviews: 2340, badge: null,   imgClass: 'img-home',        img: '../assets/assets/Image/tech/image 85.png', discount: 20, inStock: true, freeShip: false },
  { id: 20, name: 'Magazine Rack Stand',            category: 'home',        price: 39,   oldPrice: 59,   rating: 4.7, reviews: 1890, badge: 'hot',  imgClass: 'img-home',        img: '../assets/assets/Image/interior/7.png', discount: 29, inStock: true, freeShip: true },
  { id: 21, name: 'Headphones White Gold Edition',  category: 'electronics', price: 89,   oldPrice: 129,  rating: 4.8, reviews: 5600, badge: 'hot',  imgClass: 'img-electronics', img: '../assets/assets/Image/tech/image 86.png', discount: 31, inStock: true, freeShip: false },
  { id: 22, name: 'Clay Pot Artisan Handmade',      category: 'home',        price: 19,   oldPrice: 35,   rating: 4.7, reviews: 3210, badge: null,   imgClass: 'img-home',        img: '../assets/assets/Image/interior/3.png', discount: 33, inStock: true, freeShip: false },
  { id: 23, name: 'Multi-Function Juicer',          category: 'home',        price: 89,   oldPrice: 139,  rating: 4.9, reviews: 1820, badge: 'new',  imgClass: 'img-home',        img: '../assets/assets/Image/interior/9.png', discount: 25, inStock: true, freeShip: true },
  { id: 24, name: 'Ceramic Interior Pot',           category: 'home',        price: 29,   oldPrice: 49,   rating: 4.6, reviews: 7890, badge: 'sale', imgClass: 'img-home',        img: '../assets/assets/Layout/alibaba/Image/interior/image 90.png', discount: 43, inStock: true, freeShip: false },
];

// ── State ─────────────────────────────────────────────────────
let state = {
  category: 'all',
  maxPrice: 2000,
  minRating: 0,
  sortBy: 'featured',
  currentPage: 1,
  perPage: 8,
  viewMode: 'grid',
  inStockOnly: false,
  onSaleOnly: false,
  freeShipOnly: false,
  cartCount: 0,
};

// ── DOM Elements ──────────────────────────────────────────────
const productsGrid    = document.getElementById('products-grid');
const productCountEl  = document.getElementById('product-count');
const pageNumbers     = document.getElementById('page-numbers');
const prevPageBtn     = document.getElementById('prev-page');
const nextPageBtn     = document.getElementById('next-page');
const sortSelect      = document.getElementById('sort-select');
const viewGridBtn     = document.getElementById('view-grid');
const viewListBtn     = document.getElementById('view-list');
const priceSlider     = document.getElementById('price-slider');
const priceMaxDisp    = document.getElementById('price-max-display');
const cartBadgeEl     = document.getElementById('cart-badge');
const toastEl         = document.getElementById('cart-toast');
const toastMsgEl      = document.getElementById('toast-msg');
const btnAccount      = document.getElementById('btn-account');
const userDropdown    = document.getElementById('user-dropdown');
const siteHeader      = document.getElementById('site-header');
const activeFiltersEl = document.getElementById('active-filters');

// ── Utilities ─────────────────────────────────────────────────
function showToast(msg) {
  toastMsgEl.textContent = msg;
  toastEl.classList.add('show');
  setTimeout(() => toastEl.classList.remove('show'), 3000);
}

function updateCartBadge() {
  cartBadgeEl.textContent = state.cartCount;
}

function renderStars(rating) {
  return '★'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '☆' : '');
}

// ── Filter & Sort Products ────────────────────────────────────
function getFilteredProducts() {
  let products = [...ALL_PRODUCTS];

  if (state.category !== 'all') {
    products = products.filter(p => p.category === state.category);
  }
  products = products.filter(p => p.price <= state.maxPrice);
  if (state.minRating > 0) {
    products = products.filter(p => p.rating >= state.minRating);
  }
  if (state.inStockOnly)  products = products.filter(p => p.inStock);
  if (state.onSaleOnly)   products = products.filter(p => p.badge === 'sale' || p.discount >= 30);
  if (state.freeShipOnly) products = products.filter(p => p.freeShip);

  // Sort
  switch (state.sortBy) {
    case 'price-asc':  products.sort((a, b) => a.price - b.price); break;
    case 'price-desc': products.sort((a, b) => b.price - a.price); break;
    case 'rating':     products.sort((a, b) => b.rating - a.rating); break;
    case 'newest':     products.sort((a, b) => b.id - a.id); break;
    default: break; // featured: keep order
  }

  return products;
}

// ── Render Active Filter Tags ─────────────────────────────────
function renderActiveFilters(filtered) {
  activeFiltersEl.innerHTML = '';
  const tags = [];
  if (state.category !== 'all')  tags.push({ label: `Category: ${state.category}`, key: 'category' });
  if (state.maxPrice < 2000)     tags.push({ label: `Max $${state.maxPrice}`, key: 'price' });
  if (state.minRating > 0)       tags.push({ label: `${state.minRating}★+`, key: 'rating' });
  if (state.inStockOnly)         tags.push({ label: 'In Stock', key: 'inStock' });
  if (state.onSaleOnly)          tags.push({ label: 'On Sale', key: 'onSale' });
  if (state.freeShipOnly)        tags.push({ label: 'Free Shipping', key: 'freeShip' });

  tags.forEach(({ label, key }) => {
    const tag = document.createElement('span');
    tag.className = 'active-filter-tag';
    tag.innerHTML = `${label}<button aria-label="Remove ${label}" data-key="${key}">✕</button>`;
    tag.querySelector('button').addEventListener('click', () => clearFilter(key));
    activeFiltersEl.appendChild(tag);
  });
}

function clearFilter(key) {
  switch (key) {
    case 'category': state.category = 'all'; document.querySelector('input[name="category"][value="all"]').checked = true; break;
    case 'price':    state.maxPrice = 2000; priceSlider.value = 2000; priceMaxDisp.textContent = '$2000'; break;
    case 'rating':   state.minRating = 0; document.querySelector('input[name="rating"][value="0"]').checked = true; break;
    case 'inStock':  state.inStockOnly = false; document.getElementById('chk-instock').checked = false; break;
    case 'onSale':   state.onSaleOnly = false; document.getElementById('chk-sale').checked = false; break;
    case 'freeShip': state.freeShipOnly = false; document.getElementById('chk-freeship').checked = false; break;
  }
  state.currentPage = 1;
  renderProducts();
}

// ── Render Products Grid ──────────────────────────────────────
function renderProducts() {
  const filtered  = getFilteredProducts();
  const total     = filtered.length;
  const totalPages= Math.ceil(total / state.perPage);

  // Clamp page
  if (state.currentPage > totalPages) state.currentPage = Math.max(1, totalPages);

  const start = (state.currentPage - 1) * state.perPage;
  const page  = filtered.slice(start, start + state.perPage);

  productCountEl.textContent = total;
  renderActiveFilters(filtered);
  renderGrid(page);
  renderPagination(totalPages);
}

function renderGrid(products) {
  productsGrid.innerHTML = '';
  productsGrid.className = `products-grid${state.viewMode === 'list' ? ' list-view' : ''}`;

  if (products.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:60px 0; color: var(--text-muted);">
        <p style="font-size:3rem; margin-bottom:16px;">😕</p>
        <p style="font-size:1.125rem; font-weight:600; color:var(--text-secondary); margin-bottom:8px;">No products found</p>
        <p style="font-size:0.875rem;">Try adjusting your filters</p>
      </div>`;
    return;
  }

  products.forEach(p => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('aria-label', p.name);

    const badges    = p.badge ? `<div class="card-badge-wrap"><span class="card-badge badge-${p.badge === 'new' ? 'new' : p.badge === 'hot' ? 'hot' : 'sale-tag'}">${p.badge.toUpperCase()}</span></div>` : '';
    const oldPrice  = p.oldPrice ? `<span class="card-old-price">$${p.oldPrice}</span>` : '';
    const discBadge = p.discount ? `<span class="card-discount">-${p.discount}%</span>` : '';
    const outStock  = !p.inStock ? `<span class="card-badge" style="background:var(--text-muted);color:#fff;font-size:0.6875rem;padding:3px 10px;border-radius:999px;position:absolute;bottom:12px;left:12px;">Out of Stock</span>` : '';

    card.innerHTML = `
      <div class="product-img-wrap">
        <div class="product-img-bg ${p.imgClass}">
          <img src="${p.img}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: contain; padding: 12px;" />
        </div>
        ${badges}
        <button class="card-wishlist-btn" aria-label="Add to wishlist" data-id="${p.id}">♡</button>
        ${p.inStock ? `<div class="card-quick-add" data-id="${p.id}">🛒 Quick Add</div>` : ''}
        ${outStock}
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
          ${oldPrice}${discBadge}
        </div>
        ${p.freeShip ? '<span style="font-size:0.75rem;color:var(--color-success);font-weight:600;">🚚 Free Shipping</span>' : ''}
        <button class="card-add-btn" data-id="${p.id}" data-name="${p.name}" ${!p.inStock ? 'disabled style="opacity:0.5;cursor:not-allowed"' : ''}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          ${p.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    `;

    // Wishlist
    const wishBtn = card.querySelector('.card-wishlist-btn');
    wishBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      wishBtn.classList.toggle('wishlisted');
      wishBtn.textContent = wishBtn.classList.contains('wishlisted') ? '♥' : '♡';
    });

    // Add to cart
    const quickAdd = card.querySelector('.card-quick-add');
    const addBtn   = card.querySelector('.card-add-btn');
    const doAdd = (e) => {
      e.stopPropagation();
      if (!p.inStock) return;
      state.cartCount++;
      updateCartBadge();
      showToast(`🛒 "${p.name}" added to cart!`);
    };
    if (quickAdd) quickAdd.addEventListener('click', doAdd);
    if (addBtn && p.inStock) addBtn.addEventListener('click', doAdd);

    // Card click
    card.addEventListener('click', () => {
      window.location.href = `../week-03/product-detail.html?id=${p.id}`;
    });

    productsGrid.appendChild(card);
  });
}

// ── Render Pagination ─────────────────────────────────────────
function renderPagination(totalPages) {
  pageNumbers.innerHTML = '';
  prevPageBtn.disabled = state.currentPage <= 1;
  nextPageBtn.disabled = state.currentPage >= totalPages;

  if (totalPages <= 1) {
    document.getElementById('pagination').style.display = 'none';
    return;
  }
  document.getElementById('pagination').style.display = 'flex';

  const range = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= state.currentPage - 1 && i <= state.currentPage + 1)) {
      range.push(i);
    } else if (range[range.length - 1] !== '...') {
      range.push('...');
    }
  }

  range.forEach(item => {
    if (item === '...') {
      const dots = document.createElement('span');
      dots.className = 'page-dots';
      dots.textContent = '…';
      pageNumbers.appendChild(dots);
    } else {
      const btn = document.createElement('button');
      btn.className = `page-num${item === state.currentPage ? ' active' : ''}`;
      btn.textContent = item;
      btn.setAttribute('aria-label', `Page ${item}`);
      btn.setAttribute('aria-current', item === state.currentPage ? 'page' : undefined);
      btn.addEventListener('click', () => {
        state.currentPage = item;
        renderProducts();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      pageNumbers.appendChild(btn);
    }
  });
}

// ── Bind Filter Controls ──────────────────────────────────────
function bindFilters() {
  // Category
  document.querySelectorAll('input[name="category"]').forEach(radio => {
    radio.addEventListener('change', () => {
      state.category = radio.value;
      state.currentPage = 1;
      renderProducts();
    });
  });

  // Price slider
  priceSlider.addEventListener('input', () => {
    state.maxPrice = parseInt(priceSlider.value);
    priceMaxDisp.textContent = `$${state.maxPrice}`;
    state.currentPage = 1;
    renderProducts();
  });

  // Price presets
  document.querySelectorAll('.price-preset').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.price-preset').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const max = parseInt(btn.dataset.max || 2000);
      state.maxPrice = max;
      priceSlider.value = max;
      priceMaxDisp.textContent = `$${max}`;
      state.currentPage = 1;
      renderProducts();
    });
  });

  // Rating
  document.querySelectorAll('input[name="rating"]').forEach(radio => {
    radio.addEventListener('change', () => {
      state.minRating = parseInt(radio.value);
      state.currentPage = 1;
      renderProducts();
    });
  });

  // Availability checkboxes
  document.getElementById('chk-instock').addEventListener('change', (e) => {
    state.inStockOnly = e.target.checked;
    state.currentPage = 1;
    renderProducts();
  });
  document.getElementById('chk-sale').addEventListener('change', (e) => {
    state.onSaleOnly = e.target.checked;
    state.currentPage = 1;
    renderProducts();
  });
  document.getElementById('chk-freeship').addEventListener('change', (e) => {
    state.freeShipOnly = e.target.checked;
    state.currentPage = 1;
    renderProducts();
  });

  // Clear all
  document.getElementById('clear-filters-btn').addEventListener('click', () => {
    state.category = 'all';
    state.maxPrice = 2000;
    state.minRating = 0;
    state.inStockOnly = false;
    state.onSaleOnly = false;
    state.freeShipOnly = false;
    state.currentPage = 1;
    document.querySelector('input[name="category"][value="all"]').checked = true;
    document.querySelector('input[name="rating"][value="0"]').checked = true;
    document.getElementById('chk-instock').checked = false;
    document.getElementById('chk-sale').checked = false;
    document.getElementById('chk-freeship').checked = false;
    priceSlider.value = 2000;
    priceMaxDisp.textContent = '$2000';
    document.querySelectorAll('.price-preset').forEach(b => b.classList.remove('active'));
    renderProducts();
  });

  // Sort
  sortSelect.addEventListener('change', () => {
    state.sortBy = sortSelect.value;
    state.currentPage = 1;
    renderProducts();
  });

  // View toggle
  viewGridBtn.addEventListener('click', () => {
    state.viewMode = 'grid';
    viewGridBtn.classList.add('active');
    viewListBtn.classList.remove('active');
    renderProducts();
  });
  viewListBtn.addEventListener('click', () => {
    state.viewMode = 'list';
    viewListBtn.classList.add('active');
    viewGridBtn.classList.remove('active');
    renderProducts();
  });

  // Pagination buttons
  prevPageBtn.addEventListener('click', () => {
    if (state.currentPage > 1) {
      state.currentPage--;
      renderProducts();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
  nextPageBtn.addEventListener('click', () => {
    state.currentPage++;
    renderProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Header scroll
  window.addEventListener('scroll', () => {
    siteHeader.classList.toggle('scrolled', window.scrollY > 10);
  });

  // User dropdown
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
}

// Check URL params for category pre-filter
function checkUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  if (cat) {
    state.category = cat;
    const radio = document.querySelector(`input[name="category"][value="${cat}"]`);
    if (radio) radio.checked = true;
  }
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  checkUrlParams();
  bindFilters();
  renderProducts();
});
