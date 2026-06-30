(() => {
  "use strict";
  const ART = {
    tomato: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n      <defs>\n        <radialGradient id="tomA" cx="38%" cy="32%" r="75%">\n          <stop offset="0%" stop-color="#FF6B57"/><stop offset="55%" stop-color="#E63329"/><stop offset="100%" stop-color="#B81C1C"/>\n        </radialGradient>\n        <radialGradient id="tomB" cx="40%" cy="34%" r="75%">\n          <stop offset="0%" stop-color="#F2503F"/><stop offset="100%" stop-color="#A6191A"/>\n        </radialGradient>\n      </defs>\n      <ellipse cx="50" cy="84" rx="30" ry="6" fill="#000" opacity=".08"/>\n      <circle cx="34" cy="58" r="22" fill="url(#tomB)"/>\n      <circle cx="66" cy="58" r="22" fill="url(#tomB)"/>\n      <circle cx="50" cy="52" r="27" fill="url(#tomA)"/>\n      <ellipse cx="41" cy="40" rx="9" ry="6" fill="#fff" opacity=".35"/>\n      <path d="M50 28 l5 -9 4 8 9 -4 -5 9 9 2 -9 4 1 8 -7 -5 -7 5 1 -8 -9 -4 9 -2 -5 -9 9 4z" fill="#3FA34D"/>\n      <circle cx="50" cy="30" r="4" fill="#2E7D38"/>\n    </svg>`,
    bread: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n      <defs>\n        <linearGradient id="brdA" x1="0" y1="0" x2="0" y2="1">\n          <stop offset="0%" stop-color="#E8A95A"/><stop offset="60%" stop-color="#C9842F"/><stop offset="100%" stop-color="#A6691F"/>\n        </linearGradient>\n        <linearGradient id="brdB" x1="0" y1="0" x2="0" y2="1">\n          <stop offset="0%" stop-color="#F6D9A8"/><stop offset="100%" stop-color="#E3B36F"/>\n        </linearGradient>\n      </defs>\n      <ellipse cx="50" cy="82" rx="34" ry="6" fill="#000" opacity=".08"/>\n      <path d="M16 70 Q14 38 50 36 Q86 38 84 70 Q84 76 78 76 L22 76 Q16 76 16 70Z" fill="url(#brdA)"/>\n      <path d="M24 50 Q26 42 34 45" stroke="#7A4A16" stroke-width="2.4" fill="none" stroke-linecap="round"/>\n      <path d="M44 47 Q47 39 55 43" stroke="#7A4A16" stroke-width="2.4" fill="none" stroke-linecap="round"/>\n      <path d="M64 49 Q67 42 74 47" stroke="#7A4A16" stroke-width="2.4" fill="none" stroke-linecap="round"/>\n      <path d="M22 76 L78 76 Q82 76 82 71 L18 71 Q18 76 22 76Z" fill="url(#brdB)"/>\n    </svg>`,
    milk: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n      <defs>\n        <linearGradient id="mlkA" x1="0" y1="0" x2="1" y2="0">\n          <stop offset="0%" stop-color="#FFFFFF"/><stop offset="55%" stop-color="#EEF3F8"/><stop offset="100%" stop-color="#D4DEE8"/>\n        </linearGradient>\n      </defs>\n      <ellipse cx="50" cy="86" rx="20" ry="5" fill="#000" opacity=".08"/>\n      <path d="M38 30 L38 22 L62 22 L62 30 L66 40 L66 80 Q66 84 62 84 L38 84 Q34 84 34 80 L34 40 Z" fill="url(#mlkA)" stroke="#C3D0DC" stroke-width="1"/>\n      <rect x="38" y="16" width="24" height="8" rx="2" fill="#2E6FB0"/>\n      <rect x="37" y="50" width="26" height="22" rx="3" fill="#2E6FB0"/>\n      <path d="M44 60 q6 -8 12 0" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/>\n      <circle cx="50" cy="56" r="2.4" fill="#fff"/>\n      <rect x="40" y="34" width="7" height="14" rx="2" fill="#fff" opacity=".5"/>\n    </svg>`,
    soap: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n      <defs>\n        <linearGradient id="spA" x1="0" y1="0" x2="1" y2="0">\n          <stop offset="0%" stop-color="#39B559"/><stop offset="55%" stop-color="#1E9C46"/><stop offset="100%" stop-color="#147A34"/>\n        </linearGradient>\n      </defs>\n      <ellipse cx="50" cy="87" rx="16" ry="4" fill="#000" opacity=".08"/>\n      <rect x="44" y="14" width="12" height="12" rx="2" fill="#0E5F2A"/>\n      <rect x="46" y="9" width="8" height="7" rx="2" fill="#0B4F23"/>\n      <path d="M38 30 Q38 26 42 26 L58 26 Q62 26 62 30 L64 78 Q64 84 58 84 L42 84 Q36 84 36 78 Z" fill="url(#spA)"/>\n      <rect x="42" y="44" width="16" height="26" rx="3" fill="#fff" opacity=".92"/>\n      <rect x="45" y="49" width="10" height="2.6" rx="1.3" fill="#1E9C46"/>\n      <rect x="45" y="55" width="10" height="2.6" rx="1.3" fill="#69C98A"/>\n      <rect x="45" y="61" width="7" height="2.6" rx="1.3" fill="#69C98A"/>\n      <rect x="40" y="32" width="5" height="40" rx="2.5" fill="#fff" opacity=".25"/>\n    </svg>`
  };
  const CATALOG = [ {
    id: "tomato",
    name: "Fresh Tomatoes (1kg)",
    cat: "Fresh Produce",
    price: 120,
    art: ART.tomato,
    tint: "#FDEFE9",
    stock: 48
  }, {
    id: "bread",
    name: "Quickmart Bakery Bread",
    cat: "Bakery",
    price: 65,
    art: ART.bread,
    tint: "#FBF1DE",
    stock: 6
  }, {
    id: "milk",
    name: "Fresh Milk (500ml)",
    cat: "Dairy",
    price: 60,
    art: ART.milk,
    tint: "#EBF1F8",
    stock: 30
  }, {
    id: "soap",
    name: "Dishwash Liquid (1L)",
    cat: "Household",
    price: 240,
    art: ART.soap,
    tint: "#E9F6EE",
    stock: 22
  } ];
  const CATEGORIES = [ {
    name: "Fresh Produce",
    icon: "carrot",
    tint: "#FDEFE9",
    color: "#E2231A"
  }, {
    name: "Bakery",
    icon: "croissant",
    tint: "#FBF1DE",
    color: "#C98A2B"
  }, {
    name: "Dairy",
    icon: "milk",
    tint: "#EBF1F8",
    color: "#3A6FB0"
  }, {
    name: "Household",
    icon: "spray-can",
    tint: "#E9F6EE",
    color: "#1B8A4B"
  }, {
    name: "Drinks",
    icon: "cup-soda",
    tint: "#F3ECF8",
    color: "#7B4FA8"
  }, {
    name: "Frozen",
    icon: "snowflake",
    tint: "#E8F4F8",
    color: "#2A9AB5"
  } ];
  const REWARDS = [ {
    name: "KSh 50 off your basket",
    cost: 500,
    icon: "tag"
  }, {
    name: "Free home delivery",
    cost: 800,
    icon: "truck"
  }, {
    name: "KSh 150 off fresh produce",
    cost: 1500,
    icon: "salad"
  }, {
    name: "Gold tier: 2× points",
    cost: 2e3,
    icon: "crown"
  } ];
  const DISCOUNT_RATE = .15;
  const DELIVERY_FEE = 150;
  const state = {
    view: "home",
    selectedId: "tomato",
    qty: 1,
    fulfilment: "collect",
    cartCount: 0,
    points: 1250
  };
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [ ...root.querySelectorAll(sel) ];
  const bind = (name, root = document) => root.querySelector(`[data-bind="${name}"]`);
  const ksh = n => `KSh ${n.toLocaleString()}`;
  let uidSeq = 0;
  function uniqueArt(svg) {
    const u = `_${uidSeq++}`;
    return svg.replace(/id="([^"]+)"/g, `id="$1${u}"`).replace(/url\(#([^)]+)\)/g, `url(#$1${u})`);
  }
  const selected = () => CATALOG.find(p => p.id === state.selectedId);
  function totals() {
    const sub = selected().price * state.qty;
    const discount = Math.round(sub * DISCOUNT_RATE);
    const fee = state.fulfilment === "deliver" ? DELIVERY_FEE : 0;
    return {
      sub: sub,
      discount: discount,
      fee: fee,
      total: sub - discount + fee
    };
  }
  function slotText() {
    return state.fulfilment === "collect" ? "Ready for pickup today · Ngong Road · 2:00–3:00 pm" : "Scheduled home delivery · today · 5:00–7:00 pm";
  }
  function productCard(p) {
    const low = p.stock <= 10;
    return `\n      <article class="product" data-action="open" data-id="${p.id}">\n        <div class="product__media" style="background:${p.tint}">\n          ${uniqueArt(p.art)}\n        </div>\n        <h4 class="product__name">${p.name}</h4>\n        <p class="product__price">${ksh(p.price)}</p>\n        <p class="stock ${low ? "stock--low" : "stock--in"}">\n          <span class="stock__dot"></span>\n          ${low ? `Low stock · ${p.stock} left` : `In stock · ${p.stock} left`}\n        </p>\n      </article>`;
  }
  function renderHome() {
    bind("product-grid").innerHTML = CATALOG.map(productCard).join("");
  }
  function renderBrowse() {
    bind("cat-grid").innerHTML = CATEGORIES.map(c => `\n      <button class="cat" style="background:${c.tint}">\n        <i data-lucide="${c.icon}" style="color:${c.color}"></i>\n        <span>${c.name}</span>\n      </button>`).join("");
    bind("browse-grid").innerHTML = CATALOG.map(productCard).join("");
  }
  function renderRewards() {
    const goal = 2e3;
    const togo = Math.max(0, goal - state.points);
    bind("rw-points").textContent = state.points.toLocaleString();
    bind("rw-togo").textContent = togo.toLocaleString();
    bind("rw-fill").style.width = `${Math.min(100, state.points / goal * 100)}%`;
    bind("reward-list").innerHTML = REWARDS.map(r => {
      const ok = state.points >= r.cost;
      return `\n        <div class="reward ${ok ? "" : "reward--locked"}">\n          <div class="reward__icon"><i data-lucide="${r.icon}"></i></div>\n          <div class="reward__text">\n            <strong>${r.name}</strong>\n            <span>${r.cost.toLocaleString()} points</span>\n          </div>\n          <button class="reward__btn" ${ok ? "" : "disabled"}>${ok ? "Redeem" : "Locked"}</button>\n        </div>`;
    }).join("");
  }
  function renderProduct() {
    const p = selected();
    bind("pdp-icon").innerHTML = uniqueArt(p.art);
    bind("pdp-icon").style.background = p.tint;
    bind("pdp-cat").textContent = p.cat;
    bind("pdp-name").textContent = p.name;
    bind("pdp-price").textContent = ksh(p.price);
    bind("qty").textContent = state.qty;
    const low = p.stock <= 10;
    const stockEl = bind("pdp-stock");
    stockEl.className = `stock ${low ? "stock--low" : "stock--in"}`;
    $(".stock__label", stockEl).textContent = `${low ? "Low stock" : "In stock"} · ${p.stock} units (live inventory)`;
    $$(".segmented__opt").forEach(b => b.classList.toggle("segmented__opt--on", b.dataset.mode === state.fulfilment));
    $("span", bind("slot")).textContent = slotText();
  }
  function renderCheckout() {
    const p = selected();
    const t = totals();
    bind("co-item").textContent = `${p.name} × ${state.qty}`;
    bind("co-item-price").textContent = ksh(t.sub);
    bind("co-discount").textContent = `− ${ksh(t.discount)}`;
    bind("co-fee").textContent = state.fulfilment === "deliver" ? ksh(t.fee) : "Free pickup";
    bind("co-total").textContent = ksh(t.total);
    bind("co-fulfil").textContent = state.fulfilment === "collect" ? "Click & Collect · Ngong Road" : "Home Delivery · scheduled";
    bind("co-slot").textContent = slotText();
    bind("pay-label").textContent = `Pay ${ksh(t.total)} with M-Pesa`;
    bind("stk-amount").textContent = ksh(t.total);
  }
  function renderChrome() {
    bind("points").textContent = state.points.toLocaleString();
    const badge = bind("cart-badge");
    badge.hidden = state.cartCount === 0;
    badge.textContent = state.cartCount;
    $(".appbar__back").hidden = ![ "product", "checkout" ].includes(state.view);
    $$(".tab").forEach(t => t.classList.toggle("tab--on", t.dataset.nav === state.view));
  }
  function render() {
    renderHome();
    renderBrowse();
    renderRewards();
    renderProduct();
    renderCheckout();
    renderChrome();
    if (window.lucide) lucide.createIcons();
  }
  function navigate(view) {
    state.view = view;
    $$(".view").forEach(v => v.classList.toggle("view--active", v.dataset.view === view));
    bind("overlay").hidden = true;
    renderChrome();
    bind("viewport").scrollTop = 0;
  }
  function openPayment() {
    bind("overlay").hidden = false;
    bind("pay-confirm").hidden = false;
    bind("pay-spinner").hidden = true;
    bind("pay-done").hidden = true;
    $$("span", bind("pin")).forEach(d => d.classList.remove("filled"));
  }
  function enterPin() {
    const dots = $$("span", bind("pin"));
    dots.forEach((d, i) => setTimeout(() => d.classList.add("filled"), i * 180));
    setTimeout(() => {
      bind("pay-confirm").hidden = true;
      bind("pay-spinner").hidden = false;
    }, 950);
    setTimeout(() => {
      bind("pay-spinner").hidden = true;
      bind("pay-done").hidden = false;
      state.cartCount = 1;
      state.points += 12;
      renderChrome();
      if (window.lucide) lucide.createIcons();
    }, 2500);
  }
  function finishPayment() {
    bind("overlay").hidden = true;
    state.qty = 1;
    state.cartCount = 0;
    navigate("home");
    render();
  }
  function onClick(e) {
    const navBtn = e.target.closest("[data-nav]");
    if (navBtn) return navigate(navBtn.dataset.nav);
    const el = e.target.closest("[data-action]");
    if (!el) return;
    switch (el.dataset.action) {
     case "open":
      state.selectedId = el.dataset.id;
      state.qty = 1;
      render();
      navigate("product");
      break;

     case "back":
      navigate(state.view === "checkout" ? "product" : "home");
      break;

     case "qty-inc":
      state.qty++;
      render();
      break;

     case "qty-dec":
      state.qty = Math.max(1, state.qty - 1);
      render();
      break;

     case "fulfil":
      state.fulfilment = el.dataset.mode;
      render();
      break;

     case "add-to-cart":
      state.cartCount = 1;
      render();
      navigate("checkout");
      break;

     case "pay":
      openPayment();
      break;

     case "enter-pin":
      enterPin();
      break;

     case "finish":
      finishPayment();
      break;
    }
  }
  document.addEventListener("click", onClick);
  render();
})();
