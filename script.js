/* PRINT PRODUCTION — BEGINNER EDITING GUIDE
  1. Change the contact details below.
  2. Replace image files in images/ (keep same names), OR change image: paths below.
  3. Edit the title/description/category of each item.
  4. To add a project, copy one object inside PRODUCTS or PROJECTS.
  No installation or build process is required.
*/
const SETTINGS = {
  whatsapp: "96876372936", // Number shown in your supplied advertising images; verify before publishing. Example: "96891234567" (country code + number, NO + or spaces)
  instagram: "https://www.instagram.com/creative_oman786/"
};
const PRODUCTS = [
  {id:"silver2041",title:"Black & Silver Vertical House Plate",category:"acrylic",image:"images/portfolio-black-silver-2041.webp",short:"Custom black and silver architectural nameplate.",description:"A vertical house-name and number design with contrasting black and brushed-metal finishes.",spec:"Vertical format • Metal-look finish • Custom sizing"},
  {id:"steel2838",title:"Brushed Steel Nameplate",category:"acrylic",image:"images/portfolio-steel-house-2838.webp",short:"Statement nameplate with black raised lettering.",description:"A contemporary entrance sign combining a dark upper section with a brushed-steel panel.",spec:"Brushed steel appearance • Vertical layout"},
  {id:"laser1204",title:"Laser-Cut House Name Sign",category:"acrylic",image:"images/portfolio-laser-house-1204.webp",short:"Minimal cut-out number and family-name lettering.",description:"A bold silhouette with decorative family-name lettering designed for an exterior wall.",spec:"Custom house number • Laser-cut style"},
  {id:"arabicwall",title:"Arabic Acrylic Wall Lettering",category:"acrylic",image:"images/portfolio-arabic-wall-decor.webp",short:"Elegant individual Arabic lettering for entrance décor.",description:"Custom Arabic wall lettering arranged vertically for an entrance wall.",spec:"Decorative acrylic lettering • Custom layout"},
  {id:"light1984",title:"Illuminated Number 1984",category:"illuminated",image:"images/portfolio-illuminated-1984.webp",short:"Tall illuminated house-number lightbox.",description:"Vertical illuminated house-number design for an impressive and easy-to-read entryway.",spec:"Illuminated sign • Vertical format"},
  {id:"tree1307",title:"Tree Silhouette House Sign",category:"acrylic",image:"images/portfolio-tree-sign-1307.webp",short:"Decorative tree design paired with an address and name.",description:"A custom exterior sign that combines botanical silhouette artwork with an address number and a family name.",spec:"Decorative silhouette • Custom number and name"},
  {id:"gold1307",title:"Gold Mirror Finish Plate 1307",category:"acrylic",image:"images/portfolio-gold-sign-1307.webp",short:"Reflective gold-finish vertical number plate.",description:"Elegant metallic number plate featuring a polished gold appearance and a fine geometric detail.",spec:"Metallic-look finish • Vertical plaque"},
  {id:"numbers1307",title:"Raised Black Number Letters 1307",category:"acrylic",image:"images/portfolio-black-numbers-1307.webp",short:"Minimal house-number lettering directly on the wall.",description:"Individual raised address numerals in a dramatic vertical arrangement.",spec:"Individual house numbers • Black finish"},
  {id:"palm1307",title:"Palm Silhouette Name Sign",category:"acrylic",image:"images/portfolio-palm-sign-1307.webp",short:"Custom palm-tree nameplate with bold numbers.",description:"A tropical-inspired house-name sign with palm-tree silhouette and raised black lettering.",spec:"Decorative laser-cut look • Custom dimensions"},
  {id:"script1307",title:"Elegant Vertical Numerals 1307",category:"acrylic",image:"images/portfolio-script-numbers-1307.webp",short:"Decorative black numerals on a modern entrance wall.",description:"An understated vertical house-number design using expressive raised number shapes.",spec:"Raised individual numbers • Custom finish"},
  {id:"dots9134",title:"Illuminated Dotted House Plate 9134",category:"illuminated",image:"images/portfolio-9134-dots.webp",short:"Warm backlit numbers with circular cutouts.",description:"Vertical illuminated number plaque with an architectural dotted pattern.",spec:"Illuminated numerals • Custom plate"},
  {id:"floral9134",title:"Illuminated Floral House Plate 9134",category:"illuminated",image:"images/portfolio-9134-floral.webp",short:"Floral laser-cut detailing and bright address numbers.",description:"Decorative vertical number plate with floral patterns and integrated lighting.",spec:"Backlit numbers • Decorative cutout"},
  {id:"villa1839",title:"Villa 1839 Gate Address Sign",category:"illuminated",image:"images/portfolio-villa-1839.webp",short:"Wall-mounted illuminated address for a villa gate.",description:"Contemporary house-number sign that adds a polished finish to a villa entrance.",spec:"Illuminated villa sign • Exterior wall"},
  {id:"light7452",title:"Slim Lightbox House Number 7452",category:"illuminated",image:"images/portfolio-lightbox-7452.webp",short:"Slim vertical backlit address plaque.",description:"A clean architectural house-number box with illuminated vertical digits.",spec:"Slim profile • Warm illumination"},
  {id:"trio1307",title:"Three House Number Styles 1307",category:"acrylic",image:"images/portfolio-1307-three-styles.webp",short:"Three design options for the same address.",description:"A comparison of custom house number styles featuring metallic, standalone and botanical designs.",spec:"Acrylic • Metal finishes • Custom designs"}
];
const PROJECTS = [
  {title:'Black & Silver House Plate',category:"acrylic",image:"images/portfolio-black-silver-2041.webp",description:"Custom entrance signage showcase."},
  {title:'Brushed Steel Nameplate',category:"acrylic",image:"images/portfolio-steel-house-2838.webp",description:"Custom entrance signage showcase."},
  {title:'Laser-Cut House Sign',category:"acrylic",image:"images/portfolio-laser-house-1204.webp",description:"Custom entrance signage showcase."},
  {title:'Arabic Acrylic Wall Décor',category:"acrylic",image:"images/portfolio-arabic-wall-decor.webp",description:"Custom entrance signage showcase."},
  {title:'Illuminated 1984 Sign',category:"acrylic",image:"images/portfolio-illuminated-1984.webp",description:"Custom entrance signage showcase."},
  {title:'Tree Silhouette 1307',category:"acrylic",image:"images/portfolio-tree-sign-1307.webp",description:"Custom entrance signage showcase."},
  {title:'Gold 1307 Number Plate',category:"acrylic",image:"images/portfolio-gold-sign-1307.webp",description:"Custom entrance signage showcase."},
  {title:'Black 1307 Numerals',category:"acrylic",image:"images/portfolio-black-numbers-1307.webp",description:"Custom entrance signage showcase."},
  {title:'Palm Nameplate 1307',category:"acrylic",image:"images/portfolio-palm-sign-1307.webp",description:"Custom entrance signage showcase."},
  {title:'Script Numbers 1307',category:"acrylic",image:"images/portfolio-script-numbers-1307.webp",description:"Custom entrance signage showcase."},

  {title:'Illuminated Dotted 9134 Plate',category:"acrylic",image:"images/portfolio-9134-dots.webp",description:"Decorative illuminated exterior address sign."},
  {title:'Illuminated Floral 9134 Plate',category:"acrylic",image:"images/portfolio-9134-floral.webp",description:"Backlit floral number sign."},
  {title:'Villa Gate 1839 Address',category:"acrylic",image:"images/portfolio-villa-1839.webp",description:"Contemporary villa entrance signage."},
  {title:'Slim Illuminated 7452 Plate',category:"acrylic",image:"images/portfolio-lightbox-7452.webp",description:"Vertical architectural lightbox sign."},
  {title:'1307 Three Design Styles',category:"acrylic",image:"images/portfolio-1307-three-styles.webp",description:"Three custom address design directions."},
  {title:"Minimal House Numbers",category:"acrylic",image:"images/house-modern.svg",description:"A modern address sign with crisp typography."},
  {title:"Architectural Backlit Sign",category:"acrylic",image:"images/house-backlit.svg",description:"A warm, welcoming illuminated entrance concept."},
  {title:"Shopfront Identity",category:"signboards",image:"images/sign-shop.svg",description:"Dimensional letters for a premium storefront."},
  {title:"Decorative Cutout Panel",category:"laser",image:"images/laser-pattern.svg",description:"Precision-cut decorative metalwork pattern."},
  {title:"AURA Identity Concept",category:"logo",image:"images/logo-mark.svg",description:"An elegant symbol and wordmark concept."},
  {title:"Stationery & Print Design",category:"printing",image:"images/print-stationery.svg",description:"Premium printed business essentials."},
  {title:"Brand Visual Direction",category:"graphic",image:"images/logo-mark.svg",description:"Coordinated typography, color and composition."},
  {title:"Brushed Metal Sign",category:"acrylic",image:"images/house-metal.svg",description:"A refined metal plate for a private entrance."},
  {title:"Two-Tone Address Design",category:"acrylic",image:"images/house-dual.svg",description:"Layered materials for a distinctive finish."}
];

// ------------------------------------------------------------
// Interface helpers and official WhatsApp links
// ------------------------------------------------------------
const $ = (selector) => document.querySelector(selector);
const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const whatsappSvg = `<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16 .9C7.7.9 1 7.5 1 15.7c0 2.7.7 5.2 2 7.5L.9 31l8-2.1c2.1 1.2 4.5 1.8 7.1 1.8 8.3 0 15-6.7 15-14.9C31 7.5 24.3.9 16 .9Zm0 27.2c-2.3 0-4.5-.6-6.4-1.8l-.5-.3-4.7 1.2 1.3-4.6-.3-.5a12.2 12.2 0 0 1-1.9-6.4c0-6.8 5.6-12.3 12.5-12.3S28.5 9 28.5 15.7 22.9 28.1 16 28.1Zm6.9-9.2c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.2.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.8-1.1-.9-1.8-2-2-2.4-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7l-1.1-2.6c-.3-.6-.6-.5-.8-.5h-.7c-.3 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.1s1.4 3.6 1.6 3.9c.2.2 2.8 4.4 6.9 6.1 1 .4 1.8.7 2.4.8 1 .3 1.9.2 2.6.2.8-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5Z"/></svg>`;
const BASE_URL = 'https://printproduction.github.io/print-production-oman/';
// Oman country code + 8-digit number. No +, spaces or brackets.
const BUSINESS_NUMBER = String(SETTINGS.whatsapp).replace(/\D/g, '');
function whatsappLink(message) {
  return `https://wa.me/${BUSINESS_NUMBER}?text=${encodeURIComponent(message)}`;
}
function orderMessage(item) {
  return `Hello Print Production! I am interested in ${item.title} (reference: ${item.id || item.title}). Please send the price, sizes and customization options. Website: ${BASE_URL}`;
}
function whatsappIcon(item) {
  return `<a class="wa-icon" href="${escapeHtml(whatsappLink(orderMessage(item)))}" target="_blank" rel="noopener noreferrer" title="Order on WhatsApp" aria-label="Order ${escapeHtml(item.title)} on WhatsApp">${whatsappSvg}</a>`;
}
const categoryLabel = category => category === 'acrylic' ? 'ACRYLIC' : category === 'illuminated' ? 'ILLUMINATED' : String(category).toUpperCase();
function productCard(item) {
  return `<article class="product-card"><div class="card-image">
      <button type="button" class="image-view" data-view-id="${escapeHtml(item.id)}" aria-label="View full-size photo of ${escapeHtml(item.title)}" title="View full image">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" width="1000" height="800" loading="lazy" decoding="async">
      </button><span class="image-tag">${escapeHtml(categoryLabel(item.category))}</span>${whatsappIcon(item)}
    </div><div class="card-body"><span class="card-category">Custom house plates</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.short)}</p>
      <button type="button" class="text-action" data-view-id="${escapeHtml(item.id)}">View full image ↗</button></div></article>`;
}
function projectCard(item, index) {
  return `<article class="portfolio-card"><div class="card-image">
      <button type="button" class="image-view" data-project-index="${index}" aria-label="View full-size photo of ${escapeHtml(item.title)}" title="View full image">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" width="1000" height="800" loading="lazy" decoding="async">
      </button><span class="image-tag">${escapeHtml(categoryLabel(item.category))}</span>${whatsappIcon(item)}
    </div><div class="card-body"><span class="card-category">Project / ${String(index+1).padStart(2,'0')}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p>
      <button type="button" class="text-action" data-project-index="${index}">View full image ↗</button></div></article>`;
}

// ------------------------------------------------------------
// Full-screen image viewer. Images NEVER open WhatsApp.
// ------------------------------------------------------------
const lightbox = $('#lightbox');
const stage = $('.lightbox-stage');
let viewerItems = [];
let viewerIndex = 0;
let previouslyFocused = null;
function drawViewer() {
  const item = viewerItems[viewerIndex];
  if (!item) return;
  const photo = $('#lightbox-image');
  photo.src = item.image;
  photo.alt = item.title;
  $('#lightbox-title').textContent = item.title;
  $('#lightbox-count').textContent = `${viewerIndex + 1} / ${viewerItems.length}`;
  const link = $('#lightbox-whatsapp');
  link.href = whatsappLink(orderMessage(item));
  link.setAttribute('aria-label', `Order ${item.title} on WhatsApp`);
  $('#lightbox-prev').disabled = viewerItems.length < 2;
  $('#lightbox-next').disabled = viewerItems.length < 2;
}
function openViewer(items, index) {
  if (index < 0 || !items.length) return;
  viewerItems = items;
  viewerIndex = index;
  previouslyFocused = document.activeElement;
  drawViewer();
  document.body.classList.add('modal-open');
  lightbox.showModal();
}
function closeViewer() { if (lightbox.open) lightbox.close(); }
function stepViewer(delta) {
  if (viewerItems.length < 2) return;
  viewerIndex = (viewerIndex + delta + viewerItems.length) % viewerItems.length;
  drawViewer();
}
$('#lightbox-close').addEventListener('click', closeViewer);
$('#lightbox-prev').addEventListener('click', () => stepViewer(-1));
$('#lightbox-next').addEventListener('click', () => stepViewer(1));
// Close only on the DARK AREA surrounding the photo, not the photo or controls.
lightbox.addEventListener('click', e => {
  if (e.target === lightbox || e.target === stage) closeViewer();
});
lightbox.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  previouslyFocused?.focus();
});
document.addEventListener('keydown', e => {
  if (!lightbox.open) return;
  if (e.key === 'ArrowLeft') { e.preventDefault(); stepViewer(-1); }
  if (e.key === 'ArrowRight') { e.preventDefault(); stepViewer(1); }
});

// ------------------------------------------------------------
// Product and portfolio filters
// ------------------------------------------------------------
let visibleProducts = PRODUCTS.slice();
let visibleProjects = PROJECTS.slice();
function bindFilters(buttonSelector, gridSelector, data, render, onUpdate) {
  const buttons = $(buttonSelector);
  const grid = $(gridSelector);
  function apply(category) {
    const visible = category === 'all' ? data : data.filter(item => item.category === category);
    onUpdate(visible);
    grid.innerHTML = visible.map(render).join('');
    buttons.querySelectorAll('[data-filter]').forEach(button => {
      const active = button.dataset.filter === category;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }
  buttons.addEventListener('click', e => {
    const filterButton = e.target.closest('[data-filter]');
    if (filterButton) apply(filterButton.dataset.filter);
  });
  apply('all');
}
bindFilters('#collection-filters','#collection-grid', PRODUCTS, productCard, items => visibleProducts = items);
bindFilters('#portfolio-filters','#portfolio-grid', PROJECTS, item => projectCard(item,PROJECTS.indexOf(item)), items => visibleProjects = items);
document.addEventListener('click', e => {
  const productButton = e.target.closest('[data-view-id]');
  if (productButton) {
    const i = visibleProducts.findIndex(item => item.id === productButton.dataset.viewId);
    openViewer(visibleProducts, i);
  }
  const projectButton = e.target.closest('[data-project-index]');
  if (projectButton) {
    const i = visibleProjects.findIndex(item => item === PROJECTS[Number(projectButton.dataset.projectIndex)]);
    openViewer(visibleProjects, i);
  }
});

// ------------------------------------------------------------
// Responsive navigation and WhatsApp-only contact form
// ------------------------------------------------------------
const menuButton = $('.menu-toggle');
const primaryNav = $('#primary-nav');
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  primaryNav.classList.toggle('open', !expanded);
});
primaryNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  primaryNav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}));
$('#year').textContent = new Date().getFullYear();
const businessContact = $('#contact-whatsapp');
businessContact.textContent = `+${BUSINESS_NUMBER} ↗`;
businessContact.href = whatsappLink('Hello Print Production! I have a project inquiry.');
businessContact.target = '_blank';
businessContact.rel = 'noopener noreferrer';
$('#contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const form = e.currentTarget;
  if (!form.reportValidity()) return;
  const message = `Hello Print Production!\nMy name: ${$('#client-name').value.trim()}\nService: ${$('#client-service').value}\nProject details: ${$('#client-message').value.trim()}`;
  $('#form-status').textContent = 'WhatsApp will open with your message. Please press Send in WhatsApp.';
  // Same-tab navigation avoids mobile popup blockers.
  window.location.href = whatsappLink(message);
});

// ------------------------------------------------------------
// Referral rewards: manual screenshot verification (static hosting)
// The progress shown below is USER-REPORTED screenshots prepared,
// never automatic counts, verified referrals, or approval.
// ------------------------------------------------------------
const referralDialog = $('#referral-dialog');
const REFERRAL_KEY = 'pp_referral_code'; // Preserve codes issued by the previous website version.
const SCREENSHOT_KEY = 'printproduction_screenshots_prepared';
function randomCode() {
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);
  return 'PP-' + [...bytes].map(b => b.toString(16).padStart(2,'0')).join('').toUpperCase();
}
let ownCode;
try {
  ownCode = localStorage.getItem(REFERRAL_KEY);
  if (!/^PP-[A-F0-9]{12}$/.test(ownCode || '')) {
    ownCode = randomCode();
    localStorage.setItem(REFERRAL_KEY, ownCode);
  }
} catch (_) { ownCode = randomCode(); }
const referralLink = () => `${BASE_URL}?ref=${encodeURIComponent(ownCode)}`;
$('#ref-code').textContent = ownCode;
$('#ref-link').value = referralLink();
// This generic WhatsApp share link opens the share/contact chooser, not the business chat.
$('#ref-share').href = `https://wa.me/?text=${encodeURIComponent('Have a look at Print Production custom house plates and signage! My referral link: ' + referralLink())}`;
const incomingCode = new URLSearchParams(location.search).get('ref');
if (/^PP-[A-F0-9]{12}$/.test(incomingCode || '') && incomingCode !== ownCode) {
  $('#incoming-ref').hidden = false;
  $('#incoming-code').textContent = incomingCode;
}
function openReferral() {
  referralDialog.showModal();
  document.body.classList.add('modal-open');
}
document.querySelectorAll('[data-open-referral]').forEach(btn => btn.addEventListener('click', openReferral));
$('#ref-close').addEventListener('click', () => referralDialog.close());
referralDialog.addEventListener('click', e => { if (e.target === referralDialog) referralDialog.close(); });
referralDialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
$('#ref-copy').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(referralLink());
    $('#ref-status').textContent = 'Your referral link has been copied.';
  } catch (_) {
    const input = $('#ref-link');
    input.focus();input.select();
    $('#ref-status').textContent = 'Link selected. Press Ctrl+C or Copy to copy it manually.';
  }
});
let prepared = 0;
try {
  const saved = Number(localStorage.getItem(SCREENSHOT_KEY));
  if (Number.isInteger(saved) && saved >= 0 && saved <= 5) prepared = saved;
} catch (_) {}
function persistPrepared() {
  try { localStorage.setItem(SCREENSHOT_KEY, String(prepared)); } catch (_) {}
}
function updatePrepared() {
  $('#ref-progress-count').textContent = `${prepared} / 5`;
  $('#ref-progress-bar').setAttribute('aria-valuenow', String(prepared));
  $('#ref-progress-fill').style.width = `${prepared * 20}%`;
  $('#ref-minus').disabled = prepared === 0;
  $('#ref-plus').disabled = prepared === 5;
  $('#ref-claim').disabled = prepared < 5;
  $('#ref-progress-message').textContent = prepared === 5
    ? '5 screenshots marked ready—not verified. Use the button below, attach ALL FIVE screenshots in WhatsApp, and wait for our approval.'
    : `${prepared} of 5 screenshots marked ready. This count is only your own checklist and does not confirm link delivery or discount eligibility.`;
}
$('#ref-minus').addEventListener('click', () => { prepared = Math.max(0,prepared-1);persistPrepared();updatePrepared(); });
$('#ref-plus').addEventListener('click', () => { prepared = Math.min(5,prepared+1);persistPrepared();updatePrepared(); });
updatePrepared();

// OMR uses three decimal places (baisa). Estimates are NOT a checkout or approval.
function previewDiscount(value) {
  if (value === '' || Number(value) < 0 || !Number.isFinite(Number(value))) return null;
  const fils = Math.round(Number(value) * 1000);
  if (!Number.isSafeInteger(fils)) return null;
  const discount = Math.round(fils * 0.2);
  return {original:(fils/1000).toFixed(3), discount:(discount/1000).toFixed(3), total:((fils-discount)/1000).toFixed(3)};
}
$('#ref-product').insertAdjacentHTML('beforeend',PRODUCTS.map(p => `<option value="${escapeHtml(p.id)}">${escapeHtml(p.title)}</option>`).join(''));
$('#ref-price').addEventListener('input', e => {
  const value = e.target.value;
  const preview = previewDiscount(value);
  const text = value === ''
    ? 'Enter a quoted price to preview the potential savings.'
    : preview
      ? `Original: OMR ${preview.original} · 20% off: −OMR ${preview.discount} · Possible total: OMR ${preview.total}`
      : 'Enter a valid, non-negative quoted price.';
  $('#ref-price-result').textContent = text;
});
$('#ref-claim').addEventListener('click', () => {
  if (prepared !== 5) return;
  const item = PRODUCTS.find(p => p.id === $('#ref-product').value);
  const preview = previewDiscount($('#ref-price').value);
  const details = item ? `\nRequested product: ${item.title} (${item.id})` : '';
  const prices = preview ? `\nQuoted price entered by customer: OMR ${preview.original}; 20% estimated discount: OMR ${preview.discount}; estimated total if approved: OMR ${preview.total}.` : '';
  const message = `Hello Print Production! I have shared my referral link with five different WhatsApp contacts.\nMy referral code: ${ownCode}\nMy referral link: ${referralLink()}\nI am going to attach FIVE screenshots from five different WhatsApp chats showing the link and recipients. Please review the screenshots, verify eligibility, and if approved issue my SINGLE-USE 20% discount code for my next eligible order.${details}${prices}\nI understand the offer is not approved until you confirm it.`;
  // Direct navigation avoids pop-up blockers; the customer must attach screenshots manually.
  window.location.href = whatsappLink(message);
});
