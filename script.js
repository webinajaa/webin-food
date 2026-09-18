/* Konfigurasi Utama Bisnis */
const STORE_CONFIG = {
  name: "RISCO FOOD",
  tagline: "Pesan Mudah, Makan Lebih Nikmat",
  phone: "085825214868",
  waNumber: "6285825214868",
  address: "Jl. Jenderal Sudirman No. 45, Banggae, Majene, Sulawesi Barat",
  openHour: 9,
  closeHour: 22,
  defaultShippingFee: 5000,
  activePromoCode: "RISCOHEMAT",
  discountAmount: 10000
};

/* Data Katalog Menu Contoh */
let productsData = [
  {
    id: 1,
    name: "Paket Ayam Bakar Madu Komplit",
    category: "paket",
    price: 28000,
    originalPrice: 35000,
    badge: "Terlaris",
    desc: "Ayam bakar bumbu madu legit, nasi hangat, tahu, tempe, lalapan segar & sambal bajak pedas.",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Nasi Goreng Spesial RISCO",
    category: "makanan",
    price: 24000,
    originalPrice: 28000,
    badge: "Pilihan Chef",
    desc: "Nasi goreng aroma wok khas, potongan ayam suwir, udang, telur ceplok dan acar mentimun.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Ayam Geprek Sambal Korek Super",
    category: "makanan",
    price: 22000,
    originalPrice: 25000,
    badge: "Pedas",
    desc: "Ayam crispy empuk diulek cabai rawit merah bawang segar dengan siraman minyak panas gurih.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Mie Goreng Rempah Seafood",
    category: "makanan",
    price: 25000,
    originalPrice: 30000,
    badge: "Promo",
    desc: "Mie kenyal ditumis bumbu rempah pilihan, cumi empuk, udang segar, sayuran dan telur orak-arik.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Paket Burger Sapi Juicy & Fries",
    category: "paket",
    price: 32000,
    originalPrice: 38000,
    badge: "Hemat",
    desc: "Patty daging sapi tebal gurih dengan keju cheddar leleh dan seporsi kentang goreng renyah.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Es Kopi Susu Gula Aren Barista",
    category: "minuman",
    price: 18000,
    originalPrice: 22000,
    badge: "Terlaris",
    desc: "Espresso biji kopi nusantara, susu murni creamy, dan sirup gula aren organik.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Es Teh Manis Melati Segar",
    category: "minuman",
    price: 7000,
    originalPrice: 9000,
    badge: "Segar",
    desc: "Seduhan daun teh melati wangi alami dengan es batu kristal higienis pelepas dahaga.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Mangga Yakult Berry Slush",
    category: "minuman",
    price: 19000,
    originalPrice: 23000,
    badge: "Menu Baru",
    desc: "Puree buah mangga harum manis berpadu probiotik Yakult dingin dan percikan sirup berry.",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    name: "Kentang Goreng Truffle Savory",
    category: "cemilan",
    price: 16000,
    originalPrice: 20000,
    badge: "Gurih",
    desc: "Potongan kentang goreng golden brown dengan taburan keju parmesan dan bumbu aromatik.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    name: "Pisang Nugget Cokelat Keju Melt",
    category: "cemilan",
    price: 18000,
    originalPrice: 22000,
    badge: "Manis",
    desc: "Pisang kepok berbalut tepung renyah, saus cokelat lumer tebal dan limpahan parutan keju.",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    name: "Sop Buntut Gurih Kuah Kaldu",
    category: "makanan",
    price: 42000,
    originalPrice: 48000,
    badge: "Spesial",
    desc: "Daging buntut sapi empuk berkuah kaldu rempah kaya rasa, wortel, kentang & emping melinjo.",
    image: "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    name: "Paket Nasi Kotak Acara Kantor",
    category: "paket",
    price: 30000,
    originalPrice: 35000,
    badge: "Porsi Besar",
    desc: "Nasi putih pulen, ayam bakar rempah, tumis sayur buncis jagung, perkedel dan kerupuk udang.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  }
];

let cart = JSON.parse(localStorage.getItem("risco_cart")) || [];
let currentCategory = "all";
let currentSearch = "";
let currentSort = "default";
let isCouponApplied = false;
let appliedDiscount = 0;
let shippingFee = STORE_CONFIG.defaultShippingFee;

const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const categoryPills = document.querySelectorAll(".pill-btn");
const cartBadgeCount = document.getElementById("cartBadgeCount");
const cartHeaderQty = document.getElementById("cartHeaderQty");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartItemsList = document.getElementById("cartItemsList");
const cartSubtotalText = document.getElementById("cartSubtotalText");
const cartDiscountText = document.getElementById("cartDiscountText");
const cartShippingText = document.getElementById("cartShippingText");
const cartTotalText = document.getElementById("cartTotalText");
const discountRow = document.getElementById("discountRow");
const couponInput = document.getElementById("couponInput");
const applyCouponBtn = document.getElementById("applyCouponBtn");
const couponAppliedBadge = document.getElementById("couponAppliedBadge");
const checkoutModalOverlay = document.getElementById("checkoutModalOverlay");
const proceedCheckoutBtn = document.getElementById("proceedCheckoutBtn");
const closeCheckoutBtn = document.getElementById("closeCheckoutBtn");
const checkoutForm = document.getElementById("checkoutForm");
const modalCheckoutGrandTotal = document.getElementById("modalCheckoutGrandTotal");
const shippingZoneSelect = document.getElementById("shippingZone");
const shippingZoneGroup = document.getElementById("shippingZoneGroup");
const addressGroup = document.getElementById("addressGroup");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeIcon = document.getElementById("themeIcon");
const backToTopBtn = document.getElementById("backToTopBtn");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileDrawer = document.getElementById("mobileDrawer");
const toastNotification = document.getElementById("toastNotification");
const toastMessage = document.getElementById("toastMessage");

function formatRupiah(num) {
  return "Rp " + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

let toastTimeout;
function showToast(msg, icon = "🛒") {
  clearTimeout(toastTimeout);
  document.getElementById("toastIcon").innerText = icon;
  toastMessage.innerText = msg;
  toastNotification.classList.add("show");
  toastTimeout = setTimeout(() => {
    toastNotification.classList.remove("show");
  }, 3000);
}

function renderProducts() {
  let filtered = productsData.filter(item => {
    const matchesCategory = (currentCategory === "all") || (item.category === currentCategory);
    const matchesSearch = item.name.toLowerCase().includes(currentSearch.toLowerCase()) || 
                          item.desc.toLowerCase().includes(currentSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (currentSort === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === "popular") {
    filtered.sort((a, b) => (b.badge === "Terlaris" ? 1 : 0) - (a.badge === "Terlaris" ? 1 : 0));
  }

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
        <h3>Menu Tidak Ditemukan</h3>
        <p style="color: var(--text-muted);">Silakan gunakan kata kunci lain.</p>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filtered.map(product => `
    <div class="product-card" data-id="${product.id}">
      <div class="product-image-box">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-badge-overlay">
          ${product.badge ? `<span class="badge badge-primary">${product.badge}</span>` : ''}
          ${product.originalPrice > product.price ? `<span class="badge badge-danger">Hemat ${Math.round(((product.originalPrice - product.price)/product.originalPrice)*100)}%</span>` : ''}
        </div>
      </div>
      <div class="product-body">
        <span class="product-category-tag">${product.category}</span>
        <h4 class="product-title">${product.name}</h4>
        <p class="product-desc">${product.desc}</p>
        <div class="product-footer">
          <div>
            ${product.originalPrice > product.price ? `<div class="price-original">${formatRupiah(product.originalPrice)}</div>` : ''}
            <div class="price-current">${formatRupiah(product.price)}</div>
          </div>
          <button class="add-to-cart-btn" onclick="addToCart(${product.id})" title="Tambah">+</button>
        </div>
      </div>
    </div>
  `).join("");
}

function saveCart() {
  localStorage.setItem("risco_cart", JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveCart();
  showToast(`${product.name} masuk keranjang!`, "✨");
}

function changeQuantity(productId, delta) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(p => p.id !== productId);
  }
  saveCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  showToast("Menu dihapus dari keranjang", "🗑️");
}

function calculateSubtotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function updateCartUI() {
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartBadgeCount.innerText = totalQty;
  cartHeaderQty.innerText = totalQty;

  if (cart.length === 0) {
    cartItemsList.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
        <p style="font-weight: 700; color: var(--text-main);">Keranjang Masih Kosong</p>
        <p style="font-size: 0.85rem;">Pilih santapan favorit Anda di katalog!</p>
      </div>
    `;
    proceedCheckoutBtn.disabled = true;
    proceedCheckoutBtn.style.opacity = "0.5";
  } else {
    proceedCheckoutBtn.disabled = false;
    proceedCheckoutBtn.style.opacity = "1";
    
    cartItemsList.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div style="flex: 1; min-width: 0;">
          <h5 style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 0.95rem;">${item.name}</h5>
          <div style="color: var(--primary); font-weight: 800; font-size: 0.85rem; margin-bottom: 6px;">${formatRupiah(item.price)}</div>
          <div style="display: flex; gap: 8px; align-items: center;">
            <button onclick="changeQuantity(${item.id}, -1)" style="padding: 2px 8px; background: var(--bg-body); border-radius: 4px; font-weight: 800;">-</button>
            <span style="font-weight: 800; font-size: 0.88rem;">${item.quantity}</span>
            <button onclick="changeQuantity(${item.id}, 1)" style="padding: 2px 8px; background: var(--bg-body); border-radius: 4px; font-weight: 800;">+</button>
          </div>
        </div>
        <button onclick="removeFromCart(${item.id})" style="background: none; color: #ef4444; font-size: 1.1rem; padding: 6px;">✕</button>
      </div>
    `).join("");
  }

  const subtotal = calculateSubtotal();
  cartSubtotalText.innerText = formatRupiah(subtotal);

  if (isCouponApplied && subtotal > 0) {
    appliedDiscount = Math.min(STORE_CONFIG.discountAmount, subtotal);
    discountRow.style.display = "flex";
    cartDiscountText.innerText = "- " + formatRupiah(appliedDiscount);
    couponAppliedBadge.style.display = "block";
  } else {
    appliedDiscount = 0;
    discountRow.style.display = "none";
    couponAppliedBadge.style.display = "none";
  }

  cartShippingText.innerText = formatRupiah(shippingFee);
  const grandTotal = Math.max(0, subtotal - appliedDiscount + (cart.length > 0 ? shippingFee : 0));
  cartTotalText.innerText = formatRupiah(grandTotal);
  modalCheckoutGrandTotal.innerText = formatRupiah(grandTotal);
}

applyCouponBtn.addEventListener("click", () => {
  const code = couponInput.value.trim().toUpperCase();
  if (code === STORE_CONFIG.activePromoCode) {
    isCouponApplied = true;
    updateCartUI();
    showToast("Voucher aktif! Potongan Rp 10.000", "🎉");
  } else {
    showToast("Kode voucher tidak valid", "⚠️");
  }
});

document.getElementById("cartOpenBtn").addEventListener("click", () => {
  cartDrawer.classList.add("active");
  cartOverlay.classList.add("active");
});
document.getElementById("cartCloseBtn").addEventListener("click", () => {
  cartDrawer.classList.remove("active");
  cartOverlay.classList.remove("active");
});
cartOverlay.addEventListener("click", () => {
  cartDrawer.classList.remove("active");
  cartOverlay.classList.remove("active");
});

proceedCheckoutBtn.addEventListener("click", () => {
  if (cart.length === 0) return;
  cartDrawer.classList.remove("active");
  cartOverlay.classList.remove("active");
  checkoutModalOverlay.classList.add("active");
});

closeCheckoutBtn.addEventListener("click", () => {
  checkoutModalOverlay.classList.remove("active");
});

document.querySelectorAll("input[name='orderType']").forEach(radio => {
  radio.addEventListener("change", (e) => {
    const type = e.target.value;
    if (type === "Pickup") {
      shippingFee = 0;
      shippingZoneGroup.style.display = "none";
      addressGroup.style.display = "none";
      document.getElementById("custAddress").required = false;
    } else {
      shippingFee = parseInt(shippingZoneSelect.value) || STORE_CONFIG.defaultShippingFee;
      shippingZoneGroup.style.display = "block";
      addressGroup.style.display = "block";
      document.getElementById("custAddress").required = true;
    }
    updateCartUI();
  });
});

shippingZoneSelect.addEventListener("change", (e) => {
  const orderType = document.querySelector("input[name='orderType']:checked").value;
  if (orderType === "Delivery") {
    shippingFee = parseInt(e.target.value) || STORE_CONFIG.defaultShippingFee;
    updateCartUI();
  }
});

checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cart.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }

  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const orderType = document.querySelector("input[name='orderType']:checked").value;
  const address = orderType === "Delivery" ? document.getElementById("custAddress").value.trim() : "Ambil Sendiri di Resto";
  const notes = document.getElementById("custNotes").value.trim() || "-";
  const paymentMethod = document.getElementById("payMethod").value;

  const orderID = "RF-" + Math.floor(100000 + Math.random() * 900000);
  const now = new Date();
  const orderTime = now.toLocaleDateString('id-ID', {
    day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
  }) + " WITA";

  const subtotal = calculateSubtotal();
  const grandTotal = Math.max(0, subtotal - appliedDiscount + shippingFee);

  let waText = `*PESANAN BARU - ${STORE_CONFIG.name}*\n`;
  waText += `----------------------------------------\n`;
  waText += `*No. Pesanan:* #${orderID}\n`;
  waText += `*Waktu:* ${orderTime}\n`;
  waText += `----------------------------------------\n`;
  waText += `*DATA PEMESAN:*\n`;
  waText += `• Nama: ${name}\n`;
  waText += `• No. WA: ${phone}\n`;
  waText += `• Layanan: *${orderType}*\n`;
  if (orderType === "Delivery") {
    waText += `• Alamat Pengiriman:\n  ${address}\n`;
  }
  waText += `• Pembayaran: ${paymentMethod}\n`;
  waText += `• Catatan: ${notes}\n`;
  waText += `----------------------------------------\n`;
  waText += `*RINCIAN MENU:*\n`;

  cart.forEach((item, index) => {
    const itemSubtotal = item.price * item.quantity;
    waText += `${index + 1}. *${item.name}*\n`;
    waText += `   ${item.quantity}x @ ${formatRupiah(item.price)} = ${formatRupiah(itemSubtotal)}\n`;
  });

  waText += `----------------------------------------\n`;
  waText += `*Subtotal:* ${formatRupiah(subtotal)}\n`;
  if (appliedDiscount > 0) {
    waText += `*Voucher (${STORE_CONFIG.activePromoCode}):* -${formatRupiah(appliedDiscount)}\n`;
  }
  if (orderType === "Delivery") {
    waText += `*Ongkos Kirim:* ${formatRupiah(shippingFee)}\n`;
  }
  waText += `*TOTAL PEMBAYARAN:* *${formatRupiah(grandTotal)}*\n`;
  waText += `----------------------------------------\n`;
  waText += `Mohon konfirmasi ketersediaan pesanan saya. Terima kasih! 🙏`;

  const waUrl = `https://wa.me/${STORE_CONFIG.waNumber}?text=${encodeURIComponent(waText)}`;
  
  checkoutModalOverlay.classList.remove("active");
  cart = [];
  saveCart();
  window.open(waUrl, "_blank");
});

searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value;
  renderProducts();
});

sortSelect.addEventListener("change", (e) => {
  currentSort = e.target.value;
  renderProducts();
});

categoryPills.forEach(pill => {
  pill.addEventListener("click", () => {
    categoryPills.forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    currentCategory = pill.getAttribute("data-category");
    renderProducts();
  });
});

const savedTheme = localStorage.getItem("risco_theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
themeIcon.innerText = savedTheme === "dark" ? "☀️" : "🌙";

themeToggleBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const nextTheme = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem("risco_theme", nextTheme);
  themeIcon.innerText = nextTheme === "dark" ? "☀️" : "🌙";
});

mobileMenuBtn.addEventListener("click", () => {
  mobileDrawer.classList.toggle("open");
});

document.querySelectorAll(".mobile-nav-link").forEach(link => {
  link.addEventListener("click", () => {
    mobileDrawer.classList.remove("open");
  });
});

function checkStoreStatus() {
  const now = new Date();
  const currentHour = now.getHours();
  const statusText = document.getElementById("storeStatusText");
  if (currentHour >= STORE_CONFIG.openHour && currentHour < STORE_CONFIG.closeHour) {
    statusText.innerHTML = `● Buka Sekarang (${STORE_CONFIG.openHour}:00 - ${STORE_CONFIG.closeHour}:00 WITA)`;
    statusText.style.color = "#16a34a";
  } else {
    statusText.innerHTML = `○ Tutup Sementara (Buka ${STORE_CONFIG.openHour}:00 WITA)`;
    statusText.style.color = "#dc2626";
  }
}

function initCountdown() {
  const hoursEl = document.getElementById("cdHours");
  const minsEl = document.getElementById("cdMinutes");
  const secsEl = document.getElementById("cdSeconds");
  let remainingSecs = 5 * 3600 + 42 * 60 + 18;

  setInterval(() => {
    if (remainingSecs > 0) remainingSecs--;
    const h = Math.floor(remainingSecs / 3600);
    const m = Math.floor((remainingSecs % 3600) / 60);
    const s = remainingSecs % 60;

    hoursEl.innerText = h.toString().padStart(2, "0");
    minsEl.innerText = m.toString().padStart(2, "0");
    secsEl.innerText = s.toString().padStart(2, "0");
  }, 1000);
}

document.querySelectorAll(".faq-header").forEach(header => {
  header.addEventListener("click", () => {
    header.parentElement.classList.toggle("active");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 350) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("shareBtn").addEventListener("click", async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: STORE_CONFIG.name,
        text: "Pesan menu lezat di RISCO FOOD Majene langsung via WhatsApp!",
        url: window.location.href
      });
    } catch (err) {}
  } else {
    navigator.clipboard.writeText(window.location.href);
    showToast("Tautan website berhasil disalin!", "🔗");
  }
});

document.getElementById("copyWaBtn").addEventListener("click", () => {
  navigator.clipboard.writeText(STORE_CONFIG.phone);
  showToast(`Nomor WA ${STORE_CONFIG.phone} disalin!`, "📋");
});

function openAdminModal() {
  document.getElementById("adminStatProducts").innerText = productsData.length + " Menu";
  document.getElementById("adminModalOverlay").classList.add("active");
}

function closeAdminModal() {
  document.getElementById("adminModalOverlay").classList.remove("active");
}

function addNewProductLive() {
  const name = document.getElementById("newProdName").value.trim();
  const price = parseInt(document.getElementById("newProdPrice").value);
  const category = document.getElementById("newProdCategory").value;

  if (!name || isNaN(price) || price <= 0) {
    alert("Mohon masukkan nama produk dan harga yang valid.");
    return;
  }

  const newId = productsData.length + 1;
  const newProduct = {
    id: newId,
    name: name,
    category: category,
    price: price,
    originalPrice: price + 4000,
    badge: "Menu Baru",
    desc: "Menu racikan terbaru dari dapur kami dengan kualitas bahan segar.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
  };

  productsData.unshift(newProduct);
  renderProducts();
  closeAdminModal();
  showToast(`Menu "${name}" berhasil ditambahkan!`, "✅");
  document.getElementById("newProdName").value = "";
  document.getElementById("newProdPrice").value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartUI();
  checkStoreStatus();
  initCountdown();
});