/* ============================================================
   ShopVerse – Week 03: product-detail.js
   Handles ALL interactivity for the Product Detail page:
   - Product data loading (URL params)
   - Image gallery with navigation
   - Color & Size selectors with price updates
   - Quantity counter
   - Add to Cart with badge animation
   - Buy Now flow
   - Product tabs (Description, Specs, Reviews, Shipping)
   - Reviews listing + filter + write review form
   - Star rating input
   - Live search bar with suggestions
   - Sticky cart bar on scroll
   - Related products grid
   - Recently viewed grid
   - Share button
   ============================================================ */

'use strict';

// ── Product Catalog ───────────────────────────────────────────
const PRODUCTS = [
  { id: 1,  name: 'MacBook Pro M3 16"',          category: 'electronics', price: 1299, oldPrice: 1799, rating: 4.9, reviews: 2410, badge: 'new',  imgClass: 'img-electronics', img: '../assets/images/MacBook_Pro.jpg', discount: 28, inStock: true, sold: 2847, imgs: ['../assets/images/MacBook_Pro.jpg', '../assets/images/MacBook_Pro.jpg', '../assets/images/MacBook_Pro.jpg', '../assets/images/MacBook_Pro.jpg'] },
  { id: 2,  name: 'Sony WH-1000XM5 Headphones',  category: 'electronics', price: 279,  oldPrice: 399,  rating: 4.8, reviews: 8720, badge: 'hot',  imgClass: 'img-electronics', img: '../assets/images/Headphones.jpg', discount: 30, inStock: true, sold: 12400, imgs: ['../assets/images/Headphones.jpg', '../assets/images/Headphones.jpg', '../assets/images/Headphones.jpg', '../assets/images/Headphones.jpg'] },
  { id: 3,  name: 'iPhone 12 - Blue',             category: 'electronics', price: 899,  oldPrice: 1099, rating: 4.9, reviews: 4110, badge: 'new',  imgClass: 'img-electronics', img: '../assets/images/iPhone_12_-_Blue.jpg', discount: 18, inStock: true, sold: 9800, imgs: ['../assets/images/iPhone_12_-_Blue.jpg', '../assets/images/iPhone_12_-_Red.jpg', '../assets/images/Gradient_Smartphone.jpg', '../assets/images/iPhone_12_-_Blue.jpg'] },
  { id: 4,  name: 'GoPro HERO6 4K Action Camera', category: 'electronics', price: 649,  oldPrice: 999,  rating: 4.7, reviews: 2870, badge: null,   imgClass: 'img-electronics', img: '../assets/images/GoPro_HERO6_Black.jpg', discount: 35, inStock: true, sold: 4300, imgs: ['../assets/images/GoPro_HERO6_Black.jpg', '../assets/images/GoPro_HERO7_Silver.jpg', '../assets/images/GoPro_HERO8_Black.jpg', '../assets/images/GoPro_with_Gimbal.jpg'] },
  { id: 5,  name: 'Gradient Smartphone Pro',      category: 'electronics', price: 599,  oldPrice: 749,  rating: 4.8, reviews: 1560, badge: 'new',  imgClass: 'img-electronics', img: '../assets/images/Gradient_Smartphone.jpg', discount: 20, inStock: true, sold: 3200, imgs: ['../assets/images/Gradient_Smartphone.jpg', '../assets/images/iPhone_12_-_Blue.jpg', '../assets/images/iPhone_12_-_Red.jpg', '../assets/images/Gradient_Smartphone.jpg'] },
  { id: 6,  name: 'GoPro HERO8 Black Edition',    category: 'electronics', price: 199,  oldPrice: 249,  rating: 4.6, reviews: 3240, badge: null,   imgClass: 'img-electronics', img: '../assets/images/GoPro_HERO8_Black.jpg', discount: 20, inStock: true, sold: 3100, imgs: ['../assets/images/GoPro_HERO8_Black.jpg', '../assets/images/GoPro_HERO6_Black.jpg', '../assets/images/GoPro_HERO7_Silver.jpg', '../assets/images/GoPro_with_Gimbal.jpg'] },
  { id: 7,  name: 'Blue Casual T-Shirt',          category: 'fashion',     price: 49,   oldPrice: 89,   rating: 4.7, reviews: 1540, badge: 'sale', imgClass: 'img-fashion',     img: '../assets/images/Blue_T-Shirt.jpg', discount: 45, inStock: true, sold: 2100, imgs: ['../assets/images/Blue_T-Shirt.jpg', '../assets/images/Grey_T-Shirt.jpg', '../assets/images/Denim_Jeans.jpg', '../assets/images/Blue_T-Shirt.jpg'] },
  { id: 8,  name: 'Nike Premium Sneakers',        category: 'fashion',     price: 129,  oldPrice: 159,  rating: 4.6, reviews: 3280, badge: 'new',  imgClass: 'img-fashion',     img: '../assets/images/Sneakers.jpg', discount: 19, inStock: true, sold: 5600, imgs: ['../assets/images/Sneakers.jpg', '../assets/images/Sneakers.jpg', '../assets/images/Sneakers.jpg', '../assets/images/Sneakers.jpg'] },
  { id: 9,  name: 'Denim Jeans Classic Fit',      category: 'fashion',     price: 39,   oldPrice: 79,   rating: 4.5, reviews: 8200, badge: 'sale', imgClass: 'img-fashion',     img: '../assets/images/Denim_Jeans.jpg', discount: 51, inStock: true, sold: 8100, imgs: ['../assets/images/Denim_Jeans.jpg', '../assets/images/Blue_T-Shirt.jpg', '../assets/images/Grey_T-Shirt.jpg', '../assets/images/Denim_Jeans.jpg'] },
  { id: 10, name: 'Brown Leather Jacket',         category: 'fashion',     price: 199,  oldPrice: 299,  rating: 4.7, reviews: 2140, badge: null,   imgClass: 'img-fashion',     img: '../assets/images/Brown_Leather_Jacket.jpg', discount: 33, inStock: true, sold: 1200, imgs: ['../assets/images/Brown_Leather_Jacket.jpg', '../assets/images/Brown_Leather_Jacket.jpg', '../assets/images/Brown_Leather_Jacket.jpg', '../assets/images/Brown_Leather_Jacket.jpg'] },
  { id: 11, name: 'Grey Casual T-Shirt',          category: 'fashion',     price: 29,   oldPrice: 49,   rating: 4.4, reviews: 890,  badge: 'new',  imgClass: 'img-fashion',     img: '../assets/images/Grey_T-Shirt.jpg', discount: 40, inStock: true, sold: 1800, imgs: ['../assets/images/Grey_T-Shirt.jpg', '../assets/images/Blue_T-Shirt.jpg', '../assets/images/Denim_Jeans.jpg', '../assets/images/Grey_T-Shirt.jpg'] },
  { id: 12, name: 'GoPro HERO7 Silver',           category: 'electronics', price: 129,  oldPrice: 159,  rating: 4.6, reviews: 670,  badge: null,   imgClass: 'img-electronics', img: '../assets/images/GoPro_HERO7_Silver.jpg', discount: 19, inStock: true, sold: 2200, imgs: ['../assets/images/GoPro_HERO7_Silver.jpg', '../assets/images/GoPro_HERO6_Black.jpg', '../assets/images/GoPro_HERO8_Black.jpg', '../assets/images/GoPro_with_Gimbal.jpg'] },
  { id: 13, name: 'DJI Action Camera 4K',         category: 'electronics', price: 299,  oldPrice: 399,  rating: 4.9, reviews: 980,  badge: 'hot',  imgClass: 'img-electronics', img: '../assets/images/DJI_Action_Camera.jpg', discount: 25, inStock: true, sold: 1800, imgs: ['../assets/images/DJI_Action_Camera.jpg', '../assets/images/GoPro_HERO6_Black.jpg', '../assets/images/GoPro_HERO8_Black.jpg', '../assets/images/DJI_Action_Camera.jpg'] },
  { id: 14, name: 'Professional DSLR Camera',     category: 'electronics', price: 799,  oldPrice: 999,  rating: 4.7, reviews: 2100, badge: null,   imgClass: 'img-electronics', img: '../assets/images/Professional_DSLR_Camera.jpg', discount: 20, inStock: true, sold: 1500, imgs: ['../assets/images/Professional_DSLR_Camera.jpg', '../assets/images/Camera_Tripod_Stand.jpg', '../assets/images/Professional_DSLR_Camera.jpg', '../assets/images/Camera_Tripod_Stand.jpg'] },
  { id: 15, name: 'GoPro with Gimbal Stabilizer', category: 'electronics', price: 349,  oldPrice: 499,  rating: 4.8, reviews: 3140, badge: 'hot',  imgClass: 'img-electronics', img: '../assets/images/GoPro_with_Gimbal.jpg', discount: 30, inStock: true, sold: 2900, imgs: ['../assets/images/GoPro_with_Gimbal.jpg', '../assets/images/GoPro_HERO6_Black.jpg', '../assets/images/GoPro_HERO8_Black.jpg', '../assets/images/GoPro_with_Gimbal.jpg'] },
  { id: 16, name: 'Camera Tripod Stand Pro',      category: 'home',        price: 49,   oldPrice: 79,   rating: 4.5, reviews: 1230, badge: null,   imgClass: 'img-home',        img: '../assets/images/Camera_Tripod_Stand.jpg', discount: 38, inStock: true, sold: 950, imgs: ['../assets/images/Camera_Tripod_Stand.jpg', '../assets/images/Professional_DSLR_Camera.jpg', '../assets/images/Camera_Tripod_Stand.jpg', '../assets/images/Professional_DSLR_Camera.jpg'] },
  { id: 17, name: 'Apple Watch Series 9',         category: 'sports',      price: 399,  oldPrice: 499,  rating: 4.5, reviews: 670,  badge: 'sale', imgClass: 'img-sports',      img: '../assets/images/Apple_Watch.jpg', discount: 20, inStock: true, sold: 900, imgs: ['../assets/images/Apple_Watch.jpg', '../assets/images/Apple_Watch.jpg', '../assets/images/Apple_Watch.jpg', '../assets/images/Apple_Watch.jpg'] },
  { id: 18, name: 'Running Shoes Ultra Boost',    category: 'sports',      price: 149,  oldPrice: 199,  rating: 4.7, reviews: 4560, badge: 'new',  imgClass: 'img-sports',      img: '../assets/images/Sneakers.jpg', discount: 25, inStock: true, sold: 4200, imgs: ['../assets/images/Sneakers.jpg', '../assets/images/Sneakers.jpg', '../assets/images/Sneakers.jpg', '../assets/images/Sneakers.jpg'] },
  { id: 19, name: 'iPhone 12 - Red Edition',      category: 'electronics', price: 799,  oldPrice: 999,  rating: 4.6, reviews: 2340, badge: null,   imgClass: 'img-electronics', img: '../assets/images/iPhone_12_-_Red.jpg', discount: 20, inStock: true, sold: 1500, imgs: ['../assets/images/iPhone_12_-_Red.jpg', '../assets/images/iPhone_12_-_Blue.jpg', '../assets/images/Gradient_Smartphone.jpg', '../assets/images/iPhone_12_-_Red.jpg'] },
  { id: 20, name: 'Smart Fitness Tracker Watch',  category: 'sports',      price: 199,  oldPrice: 279,  rating: 4.7, reviews: 1890, badge: 'hot',  imgClass: 'img-sports',      img: '../assets/images/Apple_Watch.jpg', discount: 29, inStock: true, sold: 1400, imgs: ['../assets/images/Apple_Watch.jpg', '../assets/images/Apple_Watch.jpg', '../assets/images/Apple_Watch.jpg', '../assets/images/Apple_Watch.jpg'] },
  { id: 21, name: 'Premium Tech Gear Pack',       category: 'electronics', price: 89,   oldPrice: 129,  rating: 4.8, reviews: 5600, badge: 'hot',  imgClass: 'img-electronics', img: '../assets/images/GoPro_with_Gimbal.jpg', discount: 31, inStock: true, sold: 5100, imgs: ['../assets/images/GoPro_with_Gimbal.jpg', '../assets/images/GoPro_HERO6_Black.jpg', '../assets/images/GoPro_HERO8_Black.jpg', '../assets/images/GoPro_with_Gimbal.jpg'] },
  { id: 22, name: 'Active Sports Wear Shoes',     category: 'sports',      price: 99,   oldPrice: 149,  rating: 4.7, reviews: 3210, badge: null,   imgClass: 'img-sports',      img: '../assets/images/Sneakers.jpg', discount: 33, inStock: true, sold: 2900, imgs: ['../assets/images/Sneakers.jpg', '../assets/images/Sneakers.jpg', '../assets/images/Sneakers.jpg', '../assets/images/Sneakers.jpg'] },
  { id: 23, name: 'Professional Camera Bundle',   category: 'electronics', price: 899,  oldPrice: 1199, rating: 4.9, reviews: 1820, badge: 'new',  imgClass: 'img-electronics', img: '../assets/images/Professional_DSLR_Camera.jpg', discount: 25, inStock: true, sold: 1200, imgs: ['../assets/images/Professional_DSLR_Camera.jpg', '../assets/images/Camera_Tripod_Stand.jpg', '../assets/images/Professional_DSLR_Camera.jpg', '../assets/images/Camera_Tripod_Stand.jpg'] },
  { id: 24, name: 'Premium Accessories Kit',      category: 'electronics', price: 39,   oldPrice: 69,   rating: 4.6, reviews: 7890, badge: 'sale', imgClass: 'img-electronics', img: '../assets/images/Camera_Tripod_Stand.jpg', discount: 43, inStock: true, sold: 7100, imgs: ['../assets/images/Camera_Tripod_Stand.jpg', '../assets/images/Professional_DSLR_Camera.jpg', '../assets/images/Camera_Tripod_Stand.jpg', '../assets/images/Professional_DSLR_Camera.jpg'] },
];

// ── Sample Reviews ────────────────────────────────────────────
const REVIEWS_DATA = [
  { id: 1, name: 'Alex R.', avatar: 'AR', rating: 5, date: 'June 8, 2026', title: 'Absolutely incredible machine!', body: 'The M3 chip is a beast. I\'ve been using this for video editing in Final Cut Pro and the performance is beyond anything I\'ve used before. The battery lasts all day and the display is stunning. Well worth the investment.', helpful: 127, verified: true, sentiment: 'positive' },
  { id: 2, name: 'Sarah M.', avatar: 'SM', rating: 5, date: 'June 5, 2026', title: 'Best laptop I\'ve ever owned', body: 'Upgraded from an Intel MacBook and the difference is night and day. Everything is snappy and responsive. The keyboard feels great, speakers are outstanding. The build quality feels premium in every way.', helpful: 89, verified: true, sentiment: 'positive' },
  { id: 3, name: 'James T.', avatar: 'JT', rating: 4, date: 'May 29, 2026', title: 'Great but pricey', body: 'Performance is top-notch but the price point is steep. That said, if you need a professional-grade laptop it delivers on every promise. The thermals are much better than previous generations.', helpful: 54, verified: true, sentiment: 'positive' },
  { id: 4, name: 'Priya K.', avatar: 'PK', rating: 5, date: 'May 22, 2026', title: 'Game changer for design work', body: 'As a graphic designer, this machine handles everything I throw at it – Adobe CC, Figma, even heavy 3D renders. The ProMotion display makes scrolling so smooth it\'s almost therapeutic. 10/10 recommend.', helpful: 210, verified: true, sentiment: 'positive' },
  { id: 5, name: 'Mike D.', avatar: 'MD', rating: 3, date: 'May 15, 2026', title: 'Good but some issues', body: 'The hardware is great but I had a few software glitches early on. After updates things are much better. Still think the value is a bit off compared to alternatives at this price point. Solid machine overall.', helpful: 32, verified: false, sentiment: 'critical' },
];

// ── State ─────────────────────────────────────────────────────
const state = {
  productId: 1,
  product: null,
  cartCount: 0,
  quantity: 1,
  selectedColor: 'Space Black',
  selectedStorage: '512GB SSD',
  selectedRam: '16GB',
  priceAdd: 0,
  ramPriceAdd: 0,
  currentImage: 0,
  wishlistActive: false,
  currentReviewRating: 0,
  activeTab: 'description',
  revFilter: 'all',
};

// ── DOM Refs ──────────────────────────────────────────────────
const cartBadge     = document.getElementById('cart-badge');
const siteHeader    = document.getElementById('site-header');
const btnAccount    = document.getElementById('btn-account');
const userDropdown  = document.getElementById('user-dropdown');
const toastEl       = document.getElementById('cart-toast');
const toastMsgEl    = document.getElementById('toast-msg');
const stickyBar     = document.getElementById('sticky-cart-bar');
const searchInput   = document.getElementById('search-input');
const suggestions   = document.getElementById('search-suggestions');

// ── Utility: show toast ───────────────────────────────────────
function showToast(msg) {
  toastMsgEl.textContent = msg;
  toastEl.classList.add('show');
  setTimeout(() => toastEl.classList.remove('show'), 3000);
}

// ── Utility: update cart badge ────────────────────────────────
function updateCartBadge() {
  cartBadge.textContent = state.cartCount;
}

// ── Utility: render stars ─────────────────────────────────────
function renderStars(rating) {
  return '★'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '☆' : '');
}

// ── Utility: compute total price ──────────────────────────────
function computePrice() {
  return (state.product.price + state.priceAdd + state.ramPriceAdd) * state.quantity;
}

// ── Utility: format price ─────────────────────────────────────
function formatPrice(val) {
  return '$' + val.toLocaleString();
}

// ── Load Product by URL param ─────────────────────────────────
function loadProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id') || '1');
  state.product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  state.productId = state.product.id;
  renderProductDetail();
}

// ── Render Detail Page ────────────────────────────────────────
function renderProductDetail() {
  const p = state.product;

  // Breadcrumb
  document.getElementById('bc-product-name').textContent = p.name;
  document.title = `ShopVerse | ${p.name}`;

  // Badges
  const badgeEl = document.getElementById('product-badge-display');
  if (p.badge) {
    badgeEl.textContent = p.badge.toUpperCase();
    badgeEl.style.display = 'inline-block';
  } else {
    badgeEl.style.display = 'none';
  }
  document.getElementById('stock-indicator').textContent = p.inStock ? '✓ In Stock' : '✗ Out of Stock';

  // Title, rating, sold
  document.getElementById('product-title').textContent = p.name;
  document.getElementById('rating-stars-big').textContent = renderStars(p.rating);
  document.getElementById('rating-count').textContent = `${p.rating} · ${p.reviews.toLocaleString()} reviews`;
  document.getElementById('sold-count').textContent = `${p.sold.toLocaleString()} sold`;

  // Price
  document.getElementById('detail-price').textContent = formatPrice(p.price);
  document.getElementById('detail-old-price').textContent = p.oldPrice ? formatPrice(p.oldPrice) : '';
  document.getElementById('detail-discount').textContent = p.discount ? `Save ${p.discount}%` : '';

  // Sticky bar
  document.getElementById('sticky-product-name').textContent = p.name;
  document.getElementById('sticky-price').textContent = formatPrice(p.price);

  // Button price
  document.getElementById('btn-price').textContent = formatPrice(computePrice());

  // Gallery thumbnails
  renderGallery();

  // Related products
  renderRelatedProducts();
  renderRecentlyViewed();
  renderReviews();
}

// ── Gallery ───────────────────────────────────────────────────
function renderGallery() {
  const p = state.product;
  const thumbsContainer = document.getElementById('thumbnails');
  thumbsContainer.innerHTML = '';

  p.imgs.forEach((icon, i) => {
    const thumb = document.createElement('div');
    thumb.className = `thumbnail${i === 0 ? ' active' : ''}`;
    thumb.setAttribute('role', 'listitem');
    thumb.innerHTML = `<img src="${icon}" alt="Product view ${i+1}" style="width: 100%; height: 100%; object-fit: cover;" />`;
    thumb.addEventListener('click', () => setMainImage(i));
    thumbsContainer.appendChild(thumb);
  });

  // Set initial main image
  setMainImage(0);
}

function setMainImage(idx) {
  const p = state.product;
  state.currentImage = idx;
  const mainImgIcon = document.getElementById('main-img-icon');
  if (mainImgIcon) {
    mainImgIcon.outerHTML = `<img id="main-img-icon" src="${p.imgs[idx]}" alt="Main product image" style="width: 100%; height: 100%; object-fit: contain;" />`;
  }
  document.querySelectorAll('.thumbnail').forEach((t, i) => {
    t.classList.toggle('active', i === idx);
  });
}

// Gallery navigation
document.getElementById('prev-img').addEventListener('click', () => {
  const p = state.product;
  if (!p) return;
  const newIdx = (state.currentImage - 1 + p.imgs.length) % p.imgs.length;
  setMainImage(newIdx);
});
document.getElementById('next-img').addEventListener('click', () => {
  const p = state.product;
  if (!p) return;
  const newIdx = (state.currentImage + 1) % p.imgs.length;
  setMainImage(newIdx);
});

// ── Color Selector ────────────────────────────────────────────
document.getElementById('color-options').addEventListener('click', (e) => {
  const swatch = e.target.closest('.color-swatch');
  if (!swatch) return;
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
  swatch.classList.add('active');
  state.selectedColor = swatch.dataset.color;
  document.getElementById('selected-color').textContent = swatch.dataset.color;
});

// ── Size/Storage Selector ─────────────────────────────────────
document.getElementById('size-options').addEventListener('click', (e) => {
  const btn = e.target.closest('.size-btn');
  if (!btn) return;
  document.querySelectorAll('#size-options .size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  state.selectedStorage = btn.dataset.size;
  state.priceAdd = parseInt(btn.dataset.priceAdd || 0);
  document.getElementById('selected-storage').textContent = btn.dataset.size;
  updatePriceDisplay();
});

// ── RAM Selector ──────────────────────────────────────────────
document.getElementById('ram-options').addEventListener('click', (e) => {
  const btn = e.target.closest('.size-btn');
  if (!btn) return;
  document.querySelectorAll('#ram-options .size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  state.selectedRam = btn.dataset.ram;
  state.ramPriceAdd = parseInt(btn.dataset.ramPrice || 0);
  document.getElementById('selected-ram').textContent = btn.dataset.ram;
  updatePriceDisplay();
});

// ── Quantity Controls ─────────────────────────────────────────
document.getElementById('qty-minus').addEventListener('click', () => {
  if (state.quantity > 1) {
    state.quantity--;
    document.getElementById('qty-display').textContent = state.quantity;
    updatePriceDisplay();
  }
});
document.getElementById('qty-plus').addEventListener('click', () => {
  if (state.quantity < 99) {
    state.quantity++;
    document.getElementById('qty-display').textContent = state.quantity;
    updatePriceDisplay();
  }
});

function updatePriceDisplay() {
  const total = computePrice();
  document.getElementById('detail-price').textContent = formatPrice(state.product.price + state.priceAdd + state.ramPriceAdd);
  document.getElementById('btn-price').textContent = formatPrice(total);
  document.getElementById('sticky-price').textContent = formatPrice(total);
}

// ── Add to Cart ───────────────────────────────────────────────
function doAddToCart() {
  if (!state.product) return;
  state.cartCount += state.quantity;
  updateCartBadge();
  const btn = document.getElementById('btn-add-cart');
  btn.classList.add('pulse');
  setTimeout(() => btn.classList.remove('pulse'), 400);
  showToast(`🛒 ${state.quantity}× "${state.product.name}" added to cart!`);
}

document.getElementById('btn-add-cart').addEventListener('click', doAddToCart);
document.getElementById('sticky-add-btn').addEventListener('click', doAddToCart);

// ── Buy Now ───────────────────────────────────────────────────
document.getElementById('btn-buy-now').addEventListener('click', () => {
  doAddToCart();
  showToast('⚡ Proceeding to checkout...');
  // In a real app, redirect to checkout
});

// ── Wishlist Toggle ───────────────────────────────────────────
const wishlistBigBtn = document.getElementById('btn-wishlist-big');
wishlistBigBtn.addEventListener('click', () => {
  state.wishlistActive = !state.wishlistActive;
  wishlistBigBtn.classList.toggle('active', state.wishlistActive);
  wishlistBigBtn.innerHTML = state.wishlistActive
    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
  showToast(state.wishlistActive ? '❤️ Added to wishlist!' : '💔 Removed from wishlist');
});

// ── Product Tabs ──────────────────────────────────────────────
document.querySelectorAll('.product-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const tabName = tab.dataset.tab;
    document.querySelectorAll('.product-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(`panel-${tabName}`).classList.add('active');
    state.activeTab = tabName;
  });
});

// ── Reviews ───────────────────────────────────────────────────
function renderReviews() {
  const list = document.getElementById('reviews-list');
  list.innerHTML = '';

  let data = [...REVIEWS_DATA];
  if (state.revFilter !== 'all') {
    if (state.revFilter === 'positive') data = data.filter(r => r.sentiment === 'positive');
    else if (state.revFilter === 'critical') data = data.filter(r => r.sentiment === 'critical');
    else data = data.filter(r => r.rating === parseInt(state.revFilter));
  }

  if (data.length === 0) {
    list.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:32px;">No reviews match this filter.</p>';
    return;
  }

  data.forEach(r => {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.setAttribute('aria-label', `Review by ${r.name}`);
    card.innerHTML = `
      <div class="review-header">
        <div class="review-avatar" aria-hidden="true">${r.avatar}</div>
        <div class="review-meta">
          <p class="reviewer-name">${r.name}</p>
          <p class="review-date">${r.date}</p>
          <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
          ${r.verified ? '<p class="review-verified">✓ Verified Purchase</p>' : ''}
        </div>
      </div>
      <h4 class="review-title">${r.title}</h4>
      <p class="review-body">${r.body}</p>
      <div class="review-helpful">
        <span class="helpful-label">Was this helpful?</span>
        <button class="helpful-btn" id="helpful-yes-${r.id}" data-id="${r.id}" data-count="${r.helpful}">
          👍 Yes (${r.helpful})
        </button>
        <button class="helpful-btn" id="helpful-no-${r.id}">👎 No</button>
      </div>
    `;

    // Helpful buttons
    card.querySelector(`#helpful-yes-${r.id}`).addEventListener('click', function() {
      const count = parseInt(this.dataset.count) + 1;
      this.textContent = `👍 Yes (${count})`;
      this.dataset.count = count;
      this.style.color = 'var(--color-success)';
      this.style.borderColor = 'var(--color-success)';
    });

    list.appendChild(card);
  });
}

// Review filter buttons
document.querySelectorAll('.rev-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.rev-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.revFilter = btn.dataset.filter;
    renderReviews();
  });
});

// ── Star Rating Input ─────────────────────────────────────────
const starInputs = document.querySelectorAll('.star-input');
const ratingLabel = document.getElementById('rating-input-label');
const ratingTexts = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];

starInputs.forEach(star => {
  star.addEventListener('mouseover', () => {
    const val = parseInt(star.dataset.val);
    starInputs.forEach(s => {
      s.classList.toggle('active', parseInt(s.dataset.val) <= val);
    });
    ratingLabel.textContent = ratingTexts[val];
  });
  star.addEventListener('click', () => {
    state.currentReviewRating = parseInt(star.dataset.val);
    ratingLabel.textContent = `You rated: ${ratingTexts[state.currentReviewRating]}`;
    starInputs.forEach(s => {
      s.classList.toggle('active', parseInt(s.dataset.val) <= state.currentReviewRating);
    });
  });
});

document.getElementById('star-rating-input').addEventListener('mouseleave', () => {
  starInputs.forEach(s => {
    s.classList.toggle('active', parseInt(s.dataset.val) <= state.currentReviewRating);
  });
  ratingLabel.textContent = state.currentReviewRating > 0
    ? `You rated: ${ratingTexts[state.currentReviewRating]}`
    : 'Click to rate';
});

// ── Review Form Submit ────────────────────────────────────────
document.getElementById('review-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name  = document.getElementById('rev-name').value.trim();
  const email = document.getElementById('rev-email-input').value.trim();
  const body  = document.getElementById('rev-body').value.trim();

  if (!name || !email || !body || state.currentReviewRating === 0) {
    showToast('⚠️ Please fill in all fields and select a rating.');
    return;
  }

  // Inject new review at top
  const newReview = {
    id: Date.now(),
    name, avatar: name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2),
    rating: state.currentReviewRating,
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    title: document.getElementById('rev-title').value.trim() || 'My Review',
    body,
    helpful: 0,
    verified: false,
    sentiment: state.currentReviewRating >= 4 ? 'positive' : 'critical',
  };
  REVIEWS_DATA.unshift(newReview);

  // Show success
  document.getElementById('review-success').style.display = 'block';
  document.getElementById('review-form').reset();
  state.currentReviewRating = 0;
  starInputs.forEach(s => s.classList.remove('active'));
  ratingLabel.textContent = 'Click to rate';
  setTimeout(() => { document.getElementById('review-success').style.display = 'none'; }, 4000);

  // Re-render reviews
  state.revFilter = 'all';
  document.querySelectorAll('.rev-filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
  renderReviews();
});

// ── Live Search Bar ───────────────────────────────────────────
let searchTimeout = null;
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimeout);
  const q = searchInput.value.trim().toLowerCase();
  if (q.length < 2) {
    suggestions.classList.remove('open');
    return;
  }
  searchTimeout = setTimeout(() => {
    const matches = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    ).slice(0, 5);

    if (matches.length === 0) {
      suggestions.classList.remove('open');
      return;
    }

    suggestions.innerHTML = matches.map(p => `
      <div class="suggestion-item" role="option" data-id="${p.id}" tabindex="0">
        <img src="${p.img}" alt="${p.name}" style="width: 28px; height: 28px; object-fit: contain; border-radius: 4px; background: #fff; padding: 2px; border: 1px solid var(--border-medium);" />
        <div class="suggestion-info">
          <p class="suggestion-name">${p.name}</p>
          <p class="suggestion-cat">${p.category}</p>
        </div>
        <span class="suggestion-price">$${p.price}</span>
      </div>
    `).join('');

    suggestions.classList.add('open');

    // Suggestion click
    suggestions.querySelectorAll('.suggestion-item').forEach(item => {
      const handleSelect = () => {
        const id = item.dataset.id;
        window.location.href = `product-detail.html?id=${id}`;
      };
      item.addEventListener('click', handleSelect);
      item.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleSelect(); });
    });
  }, 200);
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    suggestions.classList.remove('open');
    searchInput.blur();
  }
  if (e.key === 'Enter') {
    suggestions.classList.remove('open');
    showToast(`🔍 Searching for "${searchInput.value}"...`);
  }
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-wrapper')) {
    suggestions.classList.remove('open');
  }
});

// ── Header: scroll & dropdown ─────────────────────────────────
window.addEventListener('scroll', () => {
  siteHeader.classList.toggle('scrolled', window.scrollY > 10);
  // Show sticky cart bar after scrolling past hero
  const detailSection = document.getElementById('product-detail-section');
  if (detailSection) {
    const bottom = detailSection.getBoundingClientRect().bottom;
    stickyBar.classList.toggle('visible', bottom < 60);
  }
});

btnAccount.addEventListener('click', (e) => {
  e.stopPropagation();
  const expanded = btnAccount.getAttribute('aria-expanded') === 'true';
  btnAccount.setAttribute('aria-expanded', String(!expanded));
  userDropdown.classList.toggle('active');
});
document.addEventListener('click', (e) => {
  if (!e.target.closest('.user-menu')) {
    btnAccount.setAttribute('aria-expanded', 'false');
    userDropdown.classList.remove('active');
  }
});

// ── Share Button ──────────────────────────────────────────────
document.getElementById('share-btn').addEventListener('click', async () => {
  const p = state.product;
  if (!p) return;
  const shareData = {
    title: p.name,
    text: `Check out this amazing deal on ${p.name} – only $${p.price}!`,
    url: window.location.href,
  };
  if (navigator.share) {
    try { await navigator.share(shareData); } catch {}
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(window.location.href).then(() => {
      showToast('🔗 Link copied to clipboard!');
    }).catch(() => {
      showToast('🔗 Share: ' + window.location.href);
    });
  }
});

// ── Related Products ──────────────────────────────────────────
function createProductCard(p) {
  const card = document.createElement('article');
  card.className = 'product-card';
  const badges = p.badge ? `<div class="card-badge-wrap"><span class="card-badge badge-${p.badge === 'new' ? 'new' : p.badge === 'hot' ? 'hot' : 'sale-tag'}">${p.badge.toUpperCase()}</span></div>` : '';
  const old = p.oldPrice ? `<span class="card-old-price">$${p.oldPrice}</span>` : '';
  const disc = p.discount ? `<span class="card-discount">-${p.discount}%</span>` : '';

  card.innerHTML = `
    <div class="product-img-wrap">
      <div class="product-img-bg ${p.imgClass}">
        <img src="${p.img}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover;" />
      </div>
      ${badges}
      <button class="card-wishlist-btn" aria-label="Wishlist">♡</button>
    </div>
    <div class="card-body">
      <span class="card-category">${p.category}</span>
      <h3 class="card-name">${p.name}</h3>
      <div class="card-rating">
        <span class="card-stars">${renderStars(p.rating)}</span>
        <span class="card-rating-num">${p.rating} (${p.reviews.toLocaleString()})</span>
      </div>
      <div class="card-price-row">
        <span class="card-price">$${p.price}</span>${old}${disc}
      </div>
      <button class="card-add-btn" data-id="${p.id}">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        Add to Cart
      </button>
    </div>
  `;

  card.querySelector('.card-wishlist-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    const btn = card.querySelector('.card-wishlist-btn');
    btn.classList.toggle('wishlisted');
    btn.textContent = btn.classList.contains('wishlisted') ? '♥' : '♡';
  });

  card.querySelector('.card-add-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    state.cartCount++;
    updateCartBadge();
    showToast(`🛒 "${p.name}" added to cart!`);
  });

  card.addEventListener('click', () => {
    window.location.href = `product-detail.html?id=${p.id}`;
  });

  return card;
}

function renderRelatedProducts() {
  const grid = document.getElementById('related-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const related = PRODUCTS
    .filter(p => p.id !== state.productId)
    .filter(p => p.category === state.product.category || Math.random() > 0.5)
    .slice(0, 4);
  related.forEach(p => grid.appendChild(createProductCard(p)));
}

function renderRecentlyViewed() {
  const grid = document.getElementById('recent-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const recent = PRODUCTS.filter(p => p.id !== state.productId).slice(0, 4);
  recent.forEach(p => grid.appendChild(createProductCard(p)));
}

// ── Keyboard navigation for gallery ──────────────────────────
document.addEventListener('keydown', (e) => {
  if (document.activeElement.closest('.search-bar') || document.activeElement.closest('.review-form')) return;
  if (e.key === 'ArrowLeft') document.getElementById('prev-img').click();
  if (e.key === 'ArrowRight') document.getElementById('next-img').click();
});

// ── Intersection observer for subtle entrance animations ──────
function initAnimations() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.product-card, .feature-item, .ship-card, .review-card, .specs-group').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
    observer.observe(el);
  });
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadProduct();
  setTimeout(initAnimations, 150);
});
