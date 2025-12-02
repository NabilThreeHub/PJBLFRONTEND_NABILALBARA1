/* app.js — versi sudah diperbaiki */
const cardsEl = document.getElementById('cards-container');
const catEl = document.getElementById('category-select');
const searchEl = document.getElementById('search-input');

const detailModal = document.getElementById('detail-modal');
const detailClose = document.getElementById('detail-close');
const detailImg = document.getElementById('detail-img');
const detailName = document.getElementById('detail-name');
const detailLoc = document.getElementById('detail-location');
const detailDesc = document.getElementById('detail-desc');

const loginModal = document.getElementById('login-modal');
const loginOpen = document.getElementById('nav-login');
const loginClose = document.getElementById('login-close');
const loginSubmit = document.getElementById('login-submit');
const loginName = document.getElementById('login-name');
const loginPass = document.getElementById('login-pass');

const favPopup = document.getElementById('favorite-popup');
const favClose = document.getElementById('favorite-close');
const favListEl = document.getElementById('favorite-popup-list');

let wisataData = JSON.parse(localStorage.getItem('wisataData') || '[]');
let user = sessionStorage.getItem('pariwisata_user') || null;

/* helper */
const esc = s => (s || '').replace(/[&<>"']/g, m => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}[m]));

const getFavKey = () => `fav_${user}`;

/* kategori */
function initCategories() {
  const cats = ['Semua', ...new Set(wisataData.map(w => w.category))];
  catEl.innerHTML = cats.map(c => `<option>${c}</option>`).join('');
}

function renderCards() {
  const q = searchEl.value.trim().toLowerCase();
  const cat = catEl.value;

  const list = wisataData.filter(w => {
    if (cat !== 'Semua' && w.category !== cat) return false;
    if (q && !w.name.toLowerCase().includes(q)) return false;
    return true;
  });

  cardsEl.innerHTML = list.map(w => `
    <div class="card">
      <img src="${esc(w.image)}" alt="${esc(w.name)}"/>
      <h3>${esc(w.name)}</h3>
      <p class="muted">${esc(w.location)}</p>
      <div class="row">
        <button class="btn secondary" onclick="showDetail(${w.id})">Detail</button>
        <button class="btn" onclick="toggleFavorite(${w.id})">Tambah Favorite</button>
      </div>
    </div>
  `).join('') || '<p class="muted">Tidak ada hasil.</p>';
}

/* detail modal */
function showDetail(id) {
  const w = wisataData.find(x => x.id === id);
  if (!w) return;

  detailImg.src = w.image;
  detailName.textContent = w.name;
  detailLoc.textContent = w.location;
  detailDesc.textContent = w.description;

  detailModal.classList.remove('hidden');
}

/* favorite */
function toggleFavorite(id) {
  if (!user) {
    loginModal.classList.remove('hidden');
    return;
  }
  const key = getFavKey();
  let favs = JSON.parse(localStorage.getItem(key) || '[]');

  if (favs.includes(id)) favs = favs.filter(x => x !== id);
  else favs.push(id);

  localStorage.setItem(key, JSON.stringify(favs));
  showFavoritePopup(favs);
}

function showFavoritePopup(favIds) {
  favListEl.innerHTML = '';
  const favItems = wisataData.filter(w => favIds.includes(w.id));

  if (favItems.length === 0) {
    favListEl.innerHTML = `<p style="text-align:center;color:#777;">Belum ada wisata favorit.</p>`;
  } else {
    favItems.forEach(item => {
      const div = document.createElement('div');
      div.className = 'fav-item';
      div.innerHTML = `
        <img src="${item.image}" alt="${esc(item.name)}"/>
        <div style="flex:1;">
          <h4>${esc(item.name)}</h4>
          <p>${esc(item.category)}</p>
        </div>
        <button onclick="removeFavoritePopup(${item.id})">Hapus</button>
      `;
      favListEl.appendChild(div);
    });
  }

  favPopup.classList.remove('hidden');
}

function removeFavoritePopup(id) {
  if (!user) return;

  const key = getFavKey();
  let favIds = JSON.parse(localStorage.getItem(key) || '[]');

  favIds = favIds.filter(x => x !== id);
  localStorage.setItem(key, JSON.stringify(favIds));

  showFavoritePopup(favIds);
}

/* login */
loginOpen.onclick = () => loginModal.classList.remove('hidden');
loginClose.onclick = () => loginModal.classList.add('hidden');

loginSubmit.onclick = () => {
  const n = loginName.value.trim();
  const p = loginPass.value.trim();

  if (!n) return alert('Nama wajib diisi.');

  // admin login
  if (n.toLowerCase() === 'nabil albara' && p === 'admin001*') {
    sessionStorage.setItem('pariwisata_user', 'admin');
    location.href = 'admin.html';
    return;
  }

  // user login
  user = n;
  sessionStorage.setItem('pariwisata_user', user);

  loginModal.classList.add('hidden');
  alert(`Halo, ${user}!`);
};

/* close modal */
detailClose.onclick = () => detailModal.classList.add('hidden');
favClose.onclick = () => favPopup.classList.add('hidden');

/* pencarian & kategori */
searchEl.oninput = renderCards;
catEl.onchange = renderCards;

/* init */
initCategories();
renderCards();

/* expose */
window.showDetail = showDetail;
window.toggleFavorite = toggleFavorite;

/* scroll ke info */
document.getElementById('nav-info').onclick = () => {
  document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
};

/* loader animasi */
document.getElementById('loader').classList.remove('hidden');
setTimeout(() => {
  renderCards();
  document.getElementById('loader').classList.add('hidden');
}, 600);
