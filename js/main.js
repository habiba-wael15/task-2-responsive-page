/**
 * Nova Store - Main Application Script
 * Saiket Systems Full Stack Development Internship - Task 2
 * Modern Responsive E-Commerce Landing Page
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. Products Catalog Data
     ========================================================================== */
  const PRODUCTS = [
    {
      id: 1,
      name: 'Aura Pro Noise-Cancelling Headphones',
      category: 'electronics',
      categoryLabel: 'Electronics',
      price: 249.00,
      oldPrice: 299.00,
      rating: 4.9,
      reviews: 428,
      badge: { text: 'Bestseller', type: 'badge-popular' },
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
      fallbackSvg: 'assets/images/product-electronics.svg',
      shortDesc: 'Studio-grade acoustic drivers with custom active noise cancellation and 40h battery.',
      fullDesc: 'Engineered for audiophiles and remote professionals. The Aura Pro delivers unmatched high-fidelity audio, hybrid active noise cancellation, memory-foam ear cushions, and ultra-low latency wireless connectivity.',
      inStock: true
    },
    {
      id: 2,
      name: 'Pulse Mini Rugged Bluetooth Speaker',
      category: 'electronics',
      categoryLabel: 'Electronics',
      price: 79.00,
      oldPrice: null,
      rating: 4.7,
      reviews: 194,
      badge: { text: 'New', type: 'badge-new' },
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80',
      fallbackSvg: 'assets/images/product-electronics.svg',
      shortDesc: 'IPX7 waterproof 360-degree portable audio with punchy dual-driver bass.',
      fullDesc: 'Compact size with explosive sound. Perfect for outdoor adventures, beach days, or home office ambient listening. Features 18 hours of playback and USB-C fast charging.',
      inStock: true
    },
    {
      id: 3,
      name: 'Studio Wireless Mechanical Keyboard',
      category: 'electronics',
      categoryLabel: 'Electronics',
      price: 139.00,
      oldPrice: 169.00,
      rating: 4.8,
      reviews: 312,
      badge: { text: 'Sale', type: 'badge-sale' },
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80',
      fallbackSvg: 'assets/images/product-electronics.svg',
      shortDesc: 'Custom tuned tactile switches with machined aluminum frame and warm backlighting.',
      fullDesc: 'Precision engineered for creative productivity. Supports multi-device Bluetooth 5.2 switching, hot-swappable tactile switches, and an ergonomic 75% compact layout.',
      inStock: true
    },
    {
      id: 4,
      name: 'Merino Wool Minimalist Overshirt',
      category: 'fashion',
      categoryLabel: 'Fashion',
      price: 118.00,
      oldPrice: 145.00,
      rating: 4.8,
      reviews: 156,
      badge: { text: 'Trending', type: 'badge-popular' },
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80',
      fallbackSvg: 'assets/images/product-fashion.svg',
      shortDesc: 'Ethically sourced 100% Australian merino wool with tailored relaxed drape.',
      fullDesc: 'A versatile wardrobe essential built for layering across all seasons. Natural thermoregulating fibers keep you comfortable in both warm afternoons and crisp evenings.',
      inStock: true
    },
    {
      id: 5,
      name: 'All-Weather Urbane Trench Coat',
      category: 'fashion',
      categoryLabel: 'Fashion',
      price: 185.00,
      oldPrice: 220.00,
      rating: 4.9,
      reviews: 210,
      badge: { text: 'Popular', type: 'badge-featured' },
      image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80',
      fallbackSvg: 'assets/images/product-fashion.svg',
      shortDesc: 'Water-resistant structured canvas with storm collar and storm-flap detailing.',
      fullDesc: 'Refined silhouette combining timeless tailoring with functional modern weather resistance. Features deep interior stash pockets and eco-friendly PFC-free durable water repellent coating.',
      inStock: true
    },
    {
      id: 6,
      name: 'Relaxed Tapered Linen Trouser',
      category: 'fashion',
      categoryLabel: 'Fashion',
      price: 84.00,
      oldPrice: null,
      rating: 4.6,
      reviews: 98,
      badge: null,
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80',
      fallbackSvg: 'assets/images/product-fashion.svg',
      shortDesc: 'Pre-washed breathable European linen with elasticated drawstring waistband.',
      fullDesc: 'Effortless style for relaxed work days or weekend travels. Garment-dyed for ultra-soft texture and designed with double-pleat comfort.',
      inStock: true
    },
    {
      id: 7,
      name: 'Chrono Minimal Leather Watch',
      category: 'accessories',
      categoryLabel: 'Accessories',
      price: 165.00,
      oldPrice: null,
      rating: 4.9,
      reviews: 340,
      badge: { text: 'Bestseller', type: 'badge-popular' },
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
      fallbackSvg: 'assets/images/product-accessories.svg',
      shortDesc: 'Sapphire crystal face with Japanese quartz movement and full-grain leather band.',
      fullDesc: 'Understated elegance crafted for everyday wear. Water-resistant up to 50 meters, featuring clean indices, subtle teal second hand, and quick-release strap system.',
      inStock: true
    },
    {
      id: 8,
      name: 'Vegetable-Tanned Card Sleeve',
      category: 'accessories',
      categoryLabel: 'Accessories',
      price: 48.00,
      oldPrice: 60.00,
      rating: 4.7,
      reviews: 182,
      badge: { text: 'Sale', type: 'badge-sale' },
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80',
      fallbackSvg: 'assets/images/product-accessories.svg',
      shortDesc: 'Slim RFID-blocking profile holding 6-8 cards plus folded currency.',
      fullDesc: 'Handcrafted from Italian vegetable-tanned leather that develops a rich, personalized patina over time. Ultra-thin profile disappears comfortably into any pocket.',
      inStock: true
    },
    {
      id: 9,
      name: 'Polarized Acetate Sunglasses',
      category: 'accessories',
      categoryLabel: 'Accessories',
      price: 95.00,
      oldPrice: null,
      rating: 4.8,
      reviews: 145,
      badge: { text: 'New', type: 'badge-new' },
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80',
      fallbackSvg: 'assets/images/product-accessories.svg',
      shortDesc: 'Hand-polished bio-acetate frames with 100% UV400 polarized clarity lenses.',
      fullDesc: 'Timeless rounded silhouette engineered with five-barrel German hinges. Provides crystal-clear visual glare reduction for driving, coastal trips, and city walks.',
      inStock: true
    },
    {
      id: 10,
      name: 'Nordic Ceramic Ambient Table Lamp',
      category: 'home',
      categoryLabel: 'Home & Living',
      price: 89.00,
      oldPrice: 110.00,
      rating: 4.9,
      reviews: 215,
      badge: { text: 'Popular', type: 'badge-featured' },
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
      fallbackSvg: 'assets/images/product-home.svg',
      shortDesc: 'Hand-thrown matte terracotta base with natural woven linen lampshade.',
      fullDesc: 'Create a warm, serene evening atmosphere. Includes an energy-efficient warm LED bulb (2700K) and integrated 3-stage rotary dimmer on the cord.',
      inStock: true
    },
    {
      id: 11,
      name: 'Artisan Stoneware Pour-Over Carafe',
      category: 'home',
      categoryLabel: 'Home & Living',
      price: 54.00,
      oldPrice: null,
      rating: 4.8,
      reviews: 178,
      badge: null,
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
      fallbackSvg: 'assets/images/product-home.svg',
      shortDesc: 'Glazed heat-retentive ceramic brewing carafe with precision stainless dripper.',
      fullDesc: 'Elevate your daily morning ritual. Ergonomic pour spout prevents dripping, and dishwasher-safe food-grade glaze maintains temperature for optimal extraction.',
      inStock: true
    },
    {
      id: 12,
      name: 'Organic Woven Cotton Throw Blanket',
      category: 'home',
      categoryLabel: 'Home & Living',
      price: 68.00,
      oldPrice: 85.00,
      rating: 4.7,
      reviews: 130,
      badge: { text: 'Sale', type: 'badge-sale' },
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80',
      fallbackSvg: 'assets/images/product-home.svg',
      shortDesc: 'GOTS-certified organic waffle weave with gentle fringe borders.',
      fullDesc: 'Lightweight yet cozy, breathable 100% organic cotton weave. Perfect for sofa lounging, reading nooks, or an added layer on your bed.',
      inStock: true
    }
  ];

  /* ==========================================================================
     2. Application State
     ========================================================================== */
  const STATE = {
    cart: [],
    activeCategory: 'all',
    searchQuery: '',
    sortBy: 'featured',
    appliedPromo: null
  };

  const PROMO_CODES = {
    'NOVA10': { discountPercent: 10, label: '10% Off' },
    'SAIKET20': { discountPercent: 20, label: '20% Internship Special' }
  };

  const CART_STORAGE_KEY = 'nova_store_cart_v2';

  /* ==========================================================================
     3. DOM Elements
     ========================================================================== */
  const DOM = {
    productGrid: document.getElementById('product-grid'),
    emptyState: document.getElementById('empty-state'),
    resultsCount: document.getElementById('results-count'),
    searchInput: document.getElementById('product-search-input'),
    searchClearBtn: document.getElementById('search-clear-btn'),
    sortSelect: document.getElementById('product-sort-select'),
    categoryPills: document.getElementById('category-pills'),
    categoryCards: document.querySelectorAll('.category-card'),
    resetFiltersBtn: document.getElementById('reset-filters-btn'),

    // Cart Elements
    cartBadge: document.getElementById('cart-badge'),
    cartItemsList: document.getElementById('cart-items-list'),
    cartEmptyView: document.getElementById('cart-empty-view'),
    cartPopulatedView: document.getElementById('cart-populated-view'),
    cartSubtotal: document.getElementById('cart-subtotal'),
    cartDiscountRow: document.getElementById('cart-discount-row'),
    cartDiscountText: document.getElementById('cart-discount-text'),
    cartShipping: document.getElementById('cart-shipping'),
    cartTotal: document.getElementById('cart-total'),
    cartCheckoutBtn: document.getElementById('cart-checkout-btn'),
    clearCartBtn: document.getElementById('clear-cart-btn'),
    promoInput: document.getElementById('promo-input'),
    btnApplyPromo: document.getElementById('btn-apply-promo'),
    promoFeedback: document.getElementById('promo-feedback'),
    cartOffcanvasEl: document.getElementById('cartOffcanvas'),

    // Quick View Modal
    quickViewModalEl: document.getElementById('quickViewModal'),
    modalProductImg: document.getElementById('modal-product-img'),
    modalProductCategory: document.getElementById('modal-product-category'),
    modalProductTitle: document.getElementById('modal-product-title'),
    modalProductRating: document.getElementById('modal-product-rating'),
    modalProductPrice: document.getElementById('modal-product-price'),
    modalProductDesc: document.getElementById('modal-product-desc'),
    modalProductQty: document.getElementById('modal-product-qty'),
    modalAddCartBtn: document.getElementById('modal-add-cart-btn'),

    // Contact Form
    contactForm: document.getElementById('contact-form'),
    contactFeedback: document.getElementById('contact-feedback'),
    contactSubmitBtn: document.getElementById('contact-submit-btn'),

    // Newsletter Form
    newsletterForm: document.getElementById('newsletter-form'),
    newsletterInput: document.getElementById('newsletter-email'),

    // Back to top & Navigation
    btnBackToTop: document.getElementById('btn-back-to-top'),
    navbarCollapse: document.getElementById('navbarNav'),
    navLinks: document.querySelectorAll('.nav-link')
  };

  /* ==========================================================================
     4. Helper Utilities
     ========================================================================== */
  function formatCurrency(amount) {
    return '$' + Number(amount).toFixed(2);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHtml = '';

    for (let i = 0; i < fullStars; i++) {
      starsHtml += '<i class="bi bi-star-fill text-warning"></i> ';
    }
    if (hasHalfStar) {
      starsHtml += '<i class="bi bi-star-half text-warning"></i> ';
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      starsHtml += '<i class="bi bi-star text-muted"></i> ';
    }
    return starsHtml;
  }

  function showToast(title, message, iconClass = 'bi-check2-circle text-teal') {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;

    const toastEl = document.createElement('div');
    toastEl.className = 'toast custom-toast align-items-center shadow-lg';
    toastEl.setAttribute('role', 'alert');
    toastEl.setAttribute('aria-live', 'assertive');
    toastEl.setAttribute('aria-atomic', 'true');
    toastEl.innerHTML = `
      <div class="toast-header d-flex justify-content-between align-items-center">
        <span class="d-flex align-items-center gap-2">
          <i class="bi ${iconClass} fs-5"></i>
          <strong class="me-auto text-dark">${escapeHtml(title)}</strong>
        </span>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body d-flex justify-content-between align-items-center py-2 px-3">
        <span>${escapeHtml(message)}</span>
        <button type="button" class="btn btn-sm btn-link text-teal text-decoration-none fw-bold view-cart-toast-btn">View Cart</button>
      </div>
    `;

    toastContainer.appendChild(toastEl);
    const toast = new bootstrap.Toast(toastEl, { delay: 3500 });
    toast.show();

    const viewCartBtn = toastEl.querySelector('.view-cart-toast-btn');
    if (viewCartBtn) {
      viewCartBtn.addEventListener('click', () => {
        toast.hide();
        openCartOffcanvas();
      });
    }

    toastEl.addEventListener('hidden.bs.toast', () => {
      toastEl.remove();
    });
  }

  function openCartOffcanvas() {
    if (DOM.cartOffcanvasEl && window.bootstrap) {
      const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(DOM.cartOffcanvasEl);
      bsOffcanvas.show();
    }
  }

  /* ==========================================================================
     5. Storage & State Persistence
     ========================================================================== */
  function loadCartFromStorage() {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          STATE.cart = parsed.filter(item => {
            return item && typeof item.id === 'number' && typeof item.quantity === 'number' && item.quantity > 0;
          });
        }
      }
    } catch (e) {
      console.warn('Could not read cart from localStorage:', e);
      STATE.cart = [];
    }
  }

  function saveCartToStorage() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(STATE.cart));
    } catch (e) {
      console.warn('Could not save cart to localStorage:', e);
    }
  }

  /* ==========================================================================
     6. Product Rendering & Filtering
     ========================================================================== */
  function getFilteredAndSortedProducts() {
    let list = PRODUCTS.slice();

    // 1. Category Filter
    if (STATE.activeCategory !== 'all') {
      list = list.filter(p => p.category === STATE.activeCategory);
    }

    // 2. Search Query Filter
    if (STATE.searchQuery.trim() !== '') {
      const q = STATE.searchQuery.trim().toLowerCase();
      list = list.filter(p => {
        return (
          p.name.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.shortDesc.toLowerCase().includes(q)
        );
      });
    }

    // 3. Sorting
    switch (STATE.sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        list.sort((a, b) => a.id - b.id);
        break;
    }

    return list;
  }

  function renderProducts() {
    if (!DOM.productGrid) return;

    const filtered = getFilteredAndSortedProducts();

    // Update Results Counter
    if (DOM.resultsCount) {
      DOM.resultsCount.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} products`;
    }

    // Handle Empty State
    if (filtered.length === 0) {
      DOM.productGrid.classList.add('d-none');
      if (DOM.emptyState) {
        DOM.emptyState.classList.remove('d-none');
      }
      return;
    }

    if (DOM.emptyState) {
      DOM.emptyState.classList.add('d-none');
    }
    DOM.productGrid.classList.remove('d-none');

    // Build Cards HTML
    const cardsHtml = filtered.map(product => {
      const badgeHtml = product.badge
        ? `<span class="product-badge ${product.badge.type}">${escapeHtml(product.badge.text)}</span>`
        : '';

      const oldPriceHtml = product.oldPrice
        ? `<span class="product-old-price">${formatCurrency(product.oldPrice)}</span>`
        : '';

      return `
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div class="product-card" data-product-id="${product.id}">
            <div class="product-image-container">
              ${badgeHtml}
              <img 
                src="${escapeHtml(product.image)}" 
                alt="${escapeHtml(product.name)}" 
                class="product-image" 
                loading="lazy"
                onerror="this.onerror=null; this.src='${escapeHtml(product.fallbackSvg)}';"
              >
              <button 
                type="button" 
                class="product-quick-view-btn" 
                data-product-id="${product.id}"
                aria-label="Quick view for ${escapeHtml(product.name)}"
                title="Quick View"
              >
                <i class="bi bi-eye"></i>
              </button>
            </div>
            
            <div class="product-content">
              <span class="product-category">${escapeHtml(product.categoryLabel)}</span>
              <h3 class="product-title" title="${escapeHtml(product.name)}">${escapeHtml(product.name)}</h3>
              
              <div class="product-rating">
                <div class="star-rating">${renderStars(product.rating)}</div>
                <span class="fw-bold text-dark">${product.rating}</span>
                <span class="rating-count">(${product.reviews})</span>
              </div>
              
              <div class="product-footer">
                <div class="product-price-box">
                  <span class="product-price">${formatCurrency(product.price)}</span>
                  ${oldPriceHtml}
                </div>
                <button 
                  type="button" 
                  class="btn-add-to-cart add-to-cart-action" 
                  data-product-id="${product.id}"
                  aria-label="Add ${escapeHtml(product.name)} to cart"
                >
                  <i class="bi bi-bag-plus"></i>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    DOM.productGrid.innerHTML = cardsHtml;

    // Attach Event Handlers to Product Cards
    DOM.productGrid.querySelectorAll('.add-to-cart-action').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = parseInt(btn.getAttribute('data-product-id'), 10);
        addToCart(id, 1, true, btn);
      });
    });

    DOM.productGrid.querySelectorAll('.product-quick-view-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = parseInt(btn.getAttribute('data-product-id'), 10);
        openQuickViewModal(id);
      });
    });
  }

  /* ==========================================================================
     7. Cart Interactions & Calculations
     ========================================================================== */
  function addToCart(productId, quantity = 1, showFeedback = true, triggerBtn = null) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = STATE.cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      STATE.cart[existingIndex].quantity += quantity;
    } else {
      STATE.cart.push({ id: productId, quantity: quantity });
    }

    saveCartToStorage();
    renderCart();

    // Visual button feedback
    if (triggerBtn) {
      const originalHtml = triggerBtn.innerHTML;
      triggerBtn.classList.add('btn-added');
      triggerBtn.innerHTML = '<i class="bi bi-check2"></i> <span>Added</span>';
      setTimeout(() => {
        triggerBtn.classList.remove('btn-added');
        triggerBtn.innerHTML = originalHtml;
      }, 1200);
    }

    // Trigger bounce animation on badge
    if (DOM.cartBadge) {
      DOM.cartBadge.classList.remove('bump');
      void DOM.cartBadge.offsetWidth; // trigger reflow
      DOM.cartBadge.classList.add('bump');
    }

    if (showFeedback) {
      showToast('Added to Cart', `${product.name} (x${quantity})`);
    }
  }

  function updateCartQuantity(productId, newQty) {
    const index = STATE.cart.findIndex(item => item.id === productId);
    if (index === -1) return;

    if (newQty <= 0) {
      STATE.cart.splice(index, 1);
    } else {
      STATE.cart[index].quantity = newQty;
    }

    saveCartToStorage();
    renderCart();
  }

  function removeFromCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    STATE.cart = STATE.cart.filter(item => item.id !== productId);
    saveCartToStorage();
    renderCart();

    if (product) {
      showToast('Item Removed', `${product.name} was removed from your bag.`, 'bi-trash3 text-danger');
    }
  }

  function clearCart() {
    if (STATE.cart.length === 0) return;
    STATE.cart = [];
    STATE.appliedPromo = null;
    if (DOM.promoInput) DOM.promoInput.value = '';
    if (DOM.promoFeedback) DOM.promoFeedback.textContent = '';
    saveCartToStorage();
    renderCart();
    showToast('Cart Cleared', 'All items were removed from your shopping bag.');
  }

  function calculateCartTotals() {
    let subtotal = 0;
    let totalItems = 0;

    STATE.cart.forEach(item => {
      const product = PRODUCTS.find(p => p.id === item.id);
      if (product) {
        subtotal += product.price * item.quantity;
        totalItems += item.quantity;
      }
    });

    let discount = 0;
    if (STATE.appliedPromo && STATE.appliedPromo.discountPercent) {
      discount = (subtotal * STATE.appliedPromo.discountPercent) / 100;
    }

    // Shipping rules: Free if subtotal >= $75 or cart empty, else $9.00 flat rate
    let shipping = 0;
    if (subtotal > 0) {
      shipping = subtotal >= 75 ? 0 : 9.00;
    }

    const total = Math.max(0, subtotal - discount + shipping);

    return {
      subtotal,
      discount,
      shipping,
      total,
      totalItems
    };
  }

  function renderCart() {
    const totals = calculateCartTotals();

    // 1. Update Cart Badge Count
    if (DOM.cartBadge) {
      DOM.cartBadge.textContent = totals.totalItems;
      DOM.cartBadge.setAttribute('aria-label', `Shopping bag with ${totals.totalItems} items`);
    }

    // 2. Empty State vs. Populated View
    if (STATE.cart.length === 0) {
      if (DOM.cartEmptyView) DOM.cartEmptyView.classList.remove('d-none');
      if (DOM.cartPopulatedView) DOM.cartPopulatedView.classList.add('d-none');
      if (DOM.cartCheckoutBtn) DOM.cartCheckoutBtn.disabled = true;
      return;
    }

    if (DOM.cartEmptyView) DOM.cartEmptyView.classList.add('d-none');
    if (DOM.cartPopulatedView) DOM.cartPopulatedView.classList.remove('d-none');
    if (DOM.cartCheckoutBtn) DOM.cartCheckoutBtn.disabled = false;

    // 3. Render Cart Item Rows
    if (DOM.cartItemsList) {
      const itemsHtml = STATE.cart.map(item => {
        const product = PRODUCTS.find(p => p.id === item.id);
        if (!product) return '';

        const itemTotal = product.price * item.quantity;

        return `
          <div class="cart-item" data-product-id="${product.id}">
            <img 
              src="${escapeHtml(product.image)}" 
              alt="${escapeHtml(product.name)}" 
              class="cart-item-image"
              onerror="this.onerror=null; this.src='${escapeHtml(product.fallbackSvg)}';"
            >
            <div class="cart-item-details">
              <h4 class="cart-item-title" title="${escapeHtml(product.name)}">${escapeHtml(product.name)}</h4>
              <div class="cart-item-price">${formatCurrency(product.price)} &times; ${item.quantity} = <strong>${formatCurrency(itemTotal)}</strong></div>
              <div class="cart-quantity-controls">
                <button type="button" class="btn-qty qty-minus" data-product-id="${product.id}" aria-label="Decrease quantity of ${escapeHtml(product.name)}">
                  <i class="bi bi-dash"></i>
                </button>
                <span class="qty-display">${item.quantity}</span>
                <button type="button" class="btn-qty qty-plus" data-product-id="${product.id}" aria-label="Increase quantity of ${escapeHtml(product.name)}">
                  <i class="bi bi-plus"></i>
                </button>
              </div>
            </div>
            <button type="button" class="btn-remove-item remove-cart-item-btn" data-product-id="${product.id}" aria-label="Remove ${escapeHtml(product.name)} from cart">
              <i class="bi bi-trash3"></i>
            </button>
          </div>
        `;
      }).join('');

      DOM.cartItemsList.innerHTML = itemsHtml;

      // Bind dynamic quantity & remove actions
      DOM.cartItemsList.querySelectorAll('.qty-minus').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = parseInt(btn.getAttribute('data-product-id'), 10);
          const current = STATE.cart.find(i => i.id === id);
          if (current) {
            updateCartQuantity(id, current.quantity - 1);
          }
        });
      });

      DOM.cartItemsList.querySelectorAll('.qty-plus').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = parseInt(btn.getAttribute('data-product-id'), 10);
          const current = STATE.cart.find(i => i.id === id);
          if (current) {
            updateCartQuantity(id, current.quantity + 1);
          }
        });
      });

      DOM.cartItemsList.querySelectorAll('.remove-cart-item-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = parseInt(btn.getAttribute('data-product-id'), 10);
          removeFromCart(id);
        });
      });
    }

    // 4. Update Summaries
    if (DOM.cartSubtotal) DOM.cartSubtotal.textContent = formatCurrency(totals.subtotal);

    if (DOM.cartDiscountRow) {
      if (totals.discount > 0) {
        DOM.cartDiscountRow.classList.remove('d-none');
        if (DOM.cartDiscountText) DOM.cartDiscountText.textContent = `-${formatCurrency(totals.discount)} (${STATE.appliedPromo.label})`;
      } else {
        DOM.cartDiscountRow.classList.add('d-none');
      }
    }

    if (DOM.cartShipping) {
      DOM.cartShipping.textContent = totals.shipping === 0 ? 'FREE' : formatCurrency(totals.shipping);
      if (totals.shipping === 0) {
        DOM.cartShipping.classList.add('text-success', 'fw-bold');
      } else {
        DOM.cartShipping.classList.remove('text-success', 'fw-bold');
      }
    }

    if (DOM.cartTotal) DOM.cartTotal.textContent = formatCurrency(totals.total);
  }

  /* ==========================================================================
     8. Quick View Modal Handlers
     ========================================================================== */
  let activeModalProductId = null;

  function openQuickViewModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product || !DOM.quickViewModalEl) return;

    activeModalProductId = product.id;

    if (DOM.modalProductImg) {
      DOM.modalProductImg.src = product.image;
      DOM.modalProductImg.alt = product.name;
      DOM.modalProductImg.onerror = () => {
        DOM.modalProductImg.src = product.fallbackSvg;
      };
    }
    if (DOM.modalProductCategory) DOM.modalProductCategory.textContent = product.categoryLabel;
    if (DOM.modalProductTitle) DOM.modalProductTitle.textContent = product.name;
    if (DOM.modalProductRating) {
      DOM.modalProductRating.innerHTML = `${renderStars(product.rating)} <span class="ms-1 fw-bold">${product.rating}</span> <span class="text-muted">(${product.reviews} reviews)</span>`;
    }
    if (DOM.modalProductPrice) {
      let priceHtml = `<span>${formatCurrency(product.price)}</span>`;
      if (product.oldPrice) {
        priceHtml += ` <span class="text-muted text-decoration-line-through fs-6 ms-2">${formatCurrency(product.oldPrice)}</span>`;
      }
      DOM.modalProductPrice.innerHTML = priceHtml;
    }
    if (DOM.modalProductDesc) DOM.modalProductDesc.textContent = product.fullDesc;
    if (DOM.modalProductQty) DOM.modalProductQty.value = '1';

    const modal = bootstrap.Modal.getOrCreateInstance(DOM.quickViewModalEl);
    modal.show();
  }

  function handleModalAddToCart() {
    if (!activeModalProductId) return;
    const qty = DOM.modalProductQty ? Math.max(1, parseInt(DOM.modalProductQty.value, 10) || 1) : 1;
    addToCart(activeModalProductId, qty, true);

    const modal = bootstrap.Modal.getInstance(DOM.quickViewModalEl);
    if (modal) modal.hide();
  }

  /* ==========================================================================
     9. Promo Code Handler
     ========================================================================== */
  function applyPromoCode() {
    if (!DOM.promoInput) return;
    const code = DOM.promoInput.value.trim().toUpperCase();

    if (!code) {
      if (DOM.promoFeedback) {
        DOM.promoFeedback.className = 'text-danger small mt-1';
        DOM.promoFeedback.textContent = 'Please enter a promo code.';
      }
      return;
    }

    if (PROMO_CODES[code]) {
      STATE.appliedPromo = { code, ...PROMO_CODES[code] };
      renderCart();
      if (DOM.promoFeedback) {
        DOM.promoFeedback.className = 'text-success small mt-1';
        DOM.promoFeedback.textContent = `Applied ${PROMO_CODES[code].label}!`;
      }
      showToast('Promo Code Applied', `Discount activated: ${PROMO_CODES[code].label}`);
    } else {
      if (DOM.promoFeedback) {
        DOM.promoFeedback.className = 'text-danger small mt-1';
        DOM.promoFeedback.textContent = 'Invalid promo code. Try "NOVA10" or "SAIKET20".';
      }
    }
  }

  /* ==========================================================================
     10. Simulated Checkout Handler
     ========================================================================== */
  function handleCheckout() {
    if (STATE.cart.length === 0) return;

    const totals = calculateCartTotals();
    const demoModalEl = document.getElementById('demoCheckoutModal');
    
    if (demoModalEl && window.bootstrap) {
      // Close offcanvas first
      if (DOM.cartOffcanvasEl) {
        const offcanvas = bootstrap.Offcanvas.getInstance(DOM.cartOffcanvasEl);
        if (offcanvas) offcanvas.hide();
      }

      // Populate checkout modal values
      const checkoutTotalVal = document.getElementById('checkout-modal-total');
      const checkoutItemCountVal = document.getElementById('checkout-modal-items');
      if (checkoutTotalVal) checkoutTotalVal.textContent = formatCurrency(totals.total);
      if (checkoutItemCountVal) checkoutItemCountVal.textContent = totals.totalItems;

      const checkoutModal = bootstrap.Modal.getOrCreateInstance(demoModalEl);
      checkoutModal.show();
    } else {
      alert(`🎉 Nova Store Demo Checkout\n\nTotal: ${formatCurrency(totals.total)} for ${totals.totalItems} items.\n\nNote: This is a simulated portfolio demonstration for the Saiket Systems Full Stack Internship. No real financial transaction was processed.`);
    }
  }

  /* ==========================================================================
     11. Contact Form Client-Side Validation
     ========================================================================== */
  function initContactForm() {
    if (!DOM.contactForm) return;

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectSelect = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');
    const consentCheckbox = document.getElementById('contact-consent');

    function validateEmail(val) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(val);
    }

    function setFieldState(input, isValid, errorText) {
      const parent = input.closest('.form-group') || input.parentElement;
      const feedback = parent.querySelector('.invalid-feedback');

      if (isValid) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
      } else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        if (feedback && errorText) {
          feedback.textContent = errorText;
        }
      }
      return isValid;
    }

    // Live validation listeners on blur and input
    if (nameInput) {
      nameInput.addEventListener('blur', () => {
        const valid = nameInput.value.trim().length >= 2;
        setFieldState(nameInput, valid, 'Please enter your full name (at least 2 characters).');
      });
      nameInput.addEventListener('input', () => {
        if (nameInput.classList.contains('is-invalid')) {
          const valid = nameInput.value.trim().length >= 2;
          setFieldState(nameInput, valid, 'Please enter your full name (at least 2 characters).');
        }
      });
    }

    if (emailInput) {
      emailInput.addEventListener('blur', () => {
        const valid = validateEmail(emailInput.value.trim());
        setFieldState(emailInput, valid, 'Please enter a valid email address.');
      });
      emailInput.addEventListener('input', () => {
        if (emailInput.classList.contains('is-invalid')) {
          const valid = validateEmail(emailInput.value.trim());
          setFieldState(emailInput, valid, 'Please enter a valid email address.');
        }
      });
    }

    if (subjectSelect) {
      subjectSelect.addEventListener('change', () => {
        const valid = subjectSelect.value !== '';
        setFieldState(subjectSelect, valid, 'Please select an inquiry topic.');
      });
    }

    if (messageInput) {
      messageInput.addEventListener('blur', () => {
        const valid = messageInput.value.trim().length >= 10;
        setFieldState(messageInput, valid, 'Please provide a message with at least 10 characters.');
      });
      messageInput.addEventListener('input', () => {
        if (messageInput.classList.contains('is-invalid')) {
          const valid = messageInput.value.trim().length >= 10;
          setFieldState(messageInput, valid, 'Please provide a message with at least 10 characters.');
        }
      });
    }

    if (consentCheckbox) {
      consentCheckbox.addEventListener('change', () => {
        setFieldState(consentCheckbox, consentCheckbox.checked, 'Please accept the demonstration confirmation.');
      });
    }

    // Submit handler
    DOM.contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = nameInput ? setFieldState(nameInput, nameInput.value.trim().length >= 2, 'Please enter your full name.') : true;
      const isEmailValid = emailInput ? setFieldState(emailInput, validateEmail(emailInput.value.trim()), 'Please enter a valid email address.') : true;
      const isSubjectValid = subjectSelect ? setFieldState(subjectSelect, subjectSelect.value !== '', 'Please select an inquiry topic.') : true;
      const isMessageValid = messageInput ? setFieldState(messageInput, messageInput.value.trim().length >= 10, 'Please write a message with at least 10 characters.') : true;
      const isConsentValid = consentCheckbox ? setFieldState(consentCheckbox, consentCheckbox.checked, 'Please accept the demonstration confirmation.') : true;

      const isFormValid = isNameValid && isEmailValid && isSubjectValid && isMessageValid && isConsentValid;

      if (!isFormValid) {
        if (DOM.contactFeedback) {
          DOM.contactFeedback.style.display = 'block';
          DOM.contactFeedback.className = 'form-feedback-message alert alert-danger';
          DOM.contactFeedback.innerHTML = '<i class="bi bi-exclamation-triangle-fill me-2"></i> Please correct the highlighted errors before submitting.';
        }
        return;
      }

      // Simulate sending submission
      if (DOM.contactSubmitBtn) {
        DOM.contactSubmitBtn.disabled = true;
        DOM.contactSubmitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Sending message...';
      }

      setTimeout(() => {
        if (DOM.contactSubmitBtn) {
          DOM.contactSubmitBtn.disabled = false;
          DOM.contactSubmitBtn.innerHTML = '<i class="bi bi-send-fill me-2"></i> Send Message';
        }

        if (DOM.contactFeedback) {
          DOM.contactFeedback.style.display = 'block';
          DOM.contactFeedback.className = 'form-feedback-message alert alert-success';
          DOM.contactFeedback.innerHTML = `
            <div class="d-flex gap-3 align-items-start">
              <i class="bi bi-check-circle-fill text-success fs-4 mt-1"></i>
              <div>
                <strong>Thank you, ${escapeHtml(nameInput.value.trim())}!</strong>
                <p class="mb-1">Your inquiry regarding "<em>${escapeHtml(subjectSelect.options[subjectSelect.selectedIndex].text)}</em>" was validated successfully.</p>
                <small class="text-muted d-block">Simulated Client Feedback: Nova Store is a frontend prototype for the Saiket Systems Internship. No email was sent to a live server.</small>
              </div>
            </div>
          `;
        }

        // Reset form inputs & valid classes
        DOM.contactForm.reset();
        [nameInput, emailInput, subjectSelect, messageInput, consentCheckbox].forEach(el => {
          if (el) {
            el.classList.remove('is-valid');
            el.classList.remove('is-invalid');
          }
        });

        showToast('Message Sent', 'Your contact message was validated and registered successfully.');
      }, 700);
    });
  }

  /* ==========================================================================
     12. Newsletter Form Handler
     ========================================================================== */
  function initNewsletterForm() {
    if (!DOM.newsletterForm || !DOM.newsletterInput) return;

    DOM.newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = DOM.newsletterInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        showToast('Newsletter', 'Please enter a valid email address to subscribe.', 'bi-exclamation-circle text-warning');
        DOM.newsletterInput.focus();
        return;
      }

      showToast('Subscribed!', 'Thank you for subscribing to Nova Store. Use demo code "NOVA10" for 10% off!');
      DOM.newsletterInput.value = '';
    });
  }

  /* ==========================================================================
     13. Filter, Search & Navigation Event Bindings
     ========================================================================== */
  function initFiltersAndSearch() {
    // Search input
    if (DOM.searchInput) {
      DOM.searchInput.addEventListener('input', () => {
        STATE.searchQuery = DOM.searchInput.value;
        if (DOM.searchClearBtn) {
          DOM.searchClearBtn.style.display = STATE.searchQuery.length > 0 ? 'block' : 'none';
        }
        renderProducts();
      });
    }

    if (DOM.searchClearBtn) {
      DOM.searchClearBtn.addEventListener('click', () => {
        if (DOM.searchInput) {
          DOM.searchInput.value = '';
          STATE.searchQuery = '';
          DOM.searchClearBtn.style.display = 'none';
          DOM.searchInput.focus();
          renderProducts();
        }
      });
    }

    // Sort select
    if (DOM.sortSelect) {
      DOM.sortSelect.addEventListener('change', () => {
        STATE.sortBy = DOM.sortSelect.value;
        renderProducts();
      });
    }

    // Category pills in products section
    if (DOM.categoryPills) {
      DOM.categoryPills.querySelectorAll('.category-pill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          DOM.categoryPills.querySelectorAll('.category-pill-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const category = btn.getAttribute('data-category');
          STATE.activeCategory = category;

          // Sync category cards active state
          DOM.categoryCards.forEach(card => {
            if (card.getAttribute('data-category') === category) {
              card.classList.add('active-category');
            } else {
              card.classList.remove('active-category');
            }
          });

          renderProducts();
        });
      });
    }

    // Category cards in top showcase section
    DOM.categoryCards.forEach(card => {
      card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        STATE.activeCategory = category;

        // Sync pill buttons
        if (DOM.categoryPills) {
          DOM.categoryPills.querySelectorAll('.category-pill-btn').forEach(b => {
            if (b.getAttribute('data-category') === category) {
              b.classList.add('active');
            } else {
              b.classList.remove('active');
            }
          });
        }

        // Sync card active states
        DOM.categoryCards.forEach(c => c.classList.remove('active-category'));
        card.classList.add('active-category');

        renderProducts();

        // Smooth scroll to product section
        const productsSec = document.getElementById('products');
        if (productsSec) {
          productsSec.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Reset filters empty state button
    if (DOM.resetFiltersBtn) {
      DOM.resetFiltersBtn.addEventListener('click', () => {
        STATE.activeCategory = 'all';
        STATE.searchQuery = '';
        STATE.sortBy = 'featured';

        if (DOM.searchInput) {
          DOM.searchInput.value = '';
          if (DOM.searchClearBtn) DOM.searchClearBtn.style.display = 'none';
        }

        if (DOM.sortSelect) {
          DOM.sortSelect.value = 'featured';
        }

        if (DOM.categoryPills) {
          DOM.categoryPills.querySelectorAll('.category-pill-btn').forEach(b => {
            if (b.getAttribute('data-category') === 'all') {
              b.classList.add('active');
            } else {
              b.classList.remove('active');
            }
          });
        }

        DOM.categoryCards.forEach(c => c.classList.remove('active-category'));

        renderProducts();
      });
    }
  }

  function initCartControls() {
    if (DOM.clearCartBtn) {
      DOM.clearCartBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to remove all items from your bag?')) {
          clearCart();
        }
      });
    }

    if (DOM.btnApplyPromo) {
      DOM.btnApplyPromo.addEventListener('click', applyPromoCode);
    }

    if (DOM.promoInput) {
      DOM.promoInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          applyPromoCode();
        }
      });
    }

    if (DOM.cartCheckoutBtn) {
      DOM.cartCheckoutBtn.addEventListener('click', handleCheckout);
    }

    if (DOM.modalAddCartBtn) {
      DOM.modalAddCartBtn.addEventListener('click', handleModalAddToCart);
    }

    // Modal quantity controls
    const modalQtyMinus = document.getElementById('modal-qty-minus');
    const modalQtyPlus = document.getElementById('modal-qty-plus');
    if (modalQtyMinus && DOM.modalProductQty) {
      modalQtyMinus.addEventListener('click', () => {
        let val = parseInt(DOM.modalProductQty.value, 10) || 1;
        if (val > 1) DOM.modalProductQty.value = val - 1;
      });
    }
    if (modalQtyPlus && DOM.modalProductQty) {
      modalQtyPlus.addEventListener('click', () => {
        let val = parseInt(DOM.modalProductQty.value, 10) || 1;
        DOM.modalProductQty.value = val + 1;
      });
    }
  }

  function initUIAndNavigation() {
    // Back to top button scroll listener
    window.addEventListener('scroll', () => {
      if (DOM.btnBackToTop) {
        if (window.scrollY > 350) {
          DOM.btnBackToTop.classList.add('visible');
        } else {
          DOM.btnBackToTop.classList.remove('visible');
        }
      }
    });

    if (DOM.btnBackToTop) {
      DOM.btnBackToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Mobile Navbar collapse auto-close on nav-link click
    DOM.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (DOM.navbarCollapse && DOM.navbarCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(DOM.navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      });
    });

    // Reset checkout modal after completion
    const demoConfirmBtn = document.getElementById('demo-confirm-finish');
    if (demoConfirmBtn) {
      demoConfirmBtn.addEventListener('click', () => {
        const demoModalEl = document.getElementById('demoCheckoutModal');
        const modal = bootstrap.Modal.getInstance(demoModalEl);
        if (modal) modal.hide();
        clearCart();
        showToast('Demo Complete', 'Cart reset. Thank you for testing Nova Store!');
      });
    }
  }

  /* ==========================================================================
     14. Application Initialization
     ========================================================================== */
  function init() {
    loadCartFromStorage();
    renderProducts();
    renderCart();
    initFiltersAndSearch();
    initCartControls();
    initContactForm();
    initNewsletterForm();
    initUIAndNavigation();
  }

  // Execute on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

