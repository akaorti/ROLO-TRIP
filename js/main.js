// =========================================
//  BOGOTÁ OCULTA — main.js
// =========================================

const translations = {
  es: {
    navExplore: 'Explorar', navMap: 'Mapa', navPlaces: 'Lugares', navTips: 'Tips',
    heroEyebrow: 'La ciudad que aún no conoces',
    heroTitle: 'Descubre la <em>Bogotá</em><br>que vive entre calles',
    heroSub: 'Lugares secretos, sabores auténticos y experiencias que los guías nunca te muestran. Para locales y viajeros que quieren ir más allá.',
    searchPlaceholder: 'Busca un barrio, sabor o experiencia...',
    searchBtn: 'Buscar',
    stat1: 'Lugares únicos', stat2: 'Barrios explorados', stat3: 'Idiomas', stat4: 'Fuera de lo común',
    catsLabel: 'Explorar por categoría',
    catsTitle: '¿Qué quieres descubrir hoy?',
    cat1: 'Sabores locales',        cat1sub: 'Tiendas de barrio, mercados vivos y cocina que no sale en Instagram',
    cat2: 'Arte urbano',            cat2sub: 'Murales, galerías independientes y cultura callejera',
    cat3: 'Naturaleza escondida',   cat3sub: 'Cerros, humedales y parques que la ciudad guarda en silencio',
    cat4: 'Barrios emergentes',     cat4sub: 'Zonas con identidad propia, lejos del circuito turístico',
    cat5: 'Planes nocturnos',       cat5sub: 'La Bogotá que despierta cuando el sol se va',
    cat6: 'Mercados y plazas',      cat6sub: 'Plazas de mercado que son el corazón real de los barrios',
    cat7: 'Café local',             cat7sub: 'Tiendas de especialidad, librerías con café y tostadores independientes',
    featLabel: 'Selección editorial',
    featTitle: 'Lugares que te van a sorprender',
    featCta: 'Ver todos los lugares',
    tipsLabel: 'Antes de salir', tipsTitle: 'Tips para moverte como local',
    tip1: 'Clima',      tip1sub: 'Bogotá tiene 4 estaciones en un día. Lleva siempre una chaqueta y no te fíes del sol de la mañana.',
    tip2: 'Transporte', tip2sub: 'TransMilenio y SITP cubren toda la ciudad. La tarjeta TuLlave es tu mejor aliada para moverte barato.',
    tip3: 'Moneda',     tip3sub: 'Peso colombiano (COP). Muchos lugares de barrio solo aceptan efectivo — lleva siempre algo de cash.',
    tip4: 'Horarios',   tip4sub: 'Los mercados arrancan temprano (6am). Los bares de culto abren tarde. Bogotá no tiene un solo ritmo.',
    footerSub: 'Hecha con amor por alguien que también está redescubriendo la ciudad.',
  },
  en: {
    navExplore: 'Explore', navMap: 'Map', navPlaces: 'Places', navTips: 'Tips',
    heroEyebrow: 'The city you haven\'t discovered yet',
    heroTitle: 'Discover the <em>Bogotá</em><br>that lives between streets',
    heroSub: 'Hidden spots, authentic flavors and experiences no guidebook will show you. For locals and travelers who want to go further.',
    searchPlaceholder: 'Search a neighborhood, flavor or experience...',
    searchBtn: 'Search',
    stat1: 'Unique places', stat2: 'Neighborhoods explored', stat3: 'Languages', stat4: 'Off the beaten path',
    catsLabel: 'Explore by category',
    catsTitle: 'What do you want to discover today?',
    cat1: 'Hidden flavors',          cat1sub: 'Local eateries, grills and food that never made it to Instagram',
    cat2: 'Street art',              cat2sub: 'Murals, graffiti and street culture in its purest form',
    cat3: 'Hidden nature',           cat3sub: 'Hills, wetlands and páramos the city quietly keeps to itself',
    cat4: 'Emerging neighborhoods',  cat4sub: 'Areas with their own identity, far from the tourist trail',
    cat5: 'Nightlife',               cat5sub: 'The Bogotá that wakes up when the sun goes down',
    cat6: 'Markets & squares',       cat6sub: 'Market squares that are the true heart of each neighborhood',
    cat7: 'Local coffee',            cat7sub: 'Specialty shops, bookstore cafés and independent roasters',
    featLabel: 'Editorial pick',
    featTitle: 'Places that will surprise you',
    featCta: 'See all places',
    tipsLabel: 'Before you go', tipsTitle: 'Tips to move around like a local',
    tip1: 'Weather',    tip1sub: 'Bogotá has 4 seasons in a day. Always bring a jacket and never trust the morning sun.',
    tip2: 'Transport',  tip2sub: 'TransMilenio and SITP cover the whole city. The TuLlave card is your best bet to get around cheap.',
    tip3: 'Currency',   tip3sub: 'Colombian Peso (COP). Many local spots are cash-only — always carry some bills.',
    tip4: 'Schedules',  tip4sub: 'Markets start early (6am). Cult bars open late. Bogotá has no single rhythm.',
    footerSub: 'Made with love by someone also rediscovering the city.',
  }
};

const lugaresData = [
  // ARTE URBANO
  { id: 1, emoji: '🎨', categoria: 'arte', barrio: 'La Candelaria', nombre_es: 'Distrito Graffiti', nombre_en: 'Graffiti District', desc_es: 'El corredor de arte urbano más grande de Bogotá.', desc_en: 'The largest urban art corridor in Bogotá.' },
  { id: 2, emoji: '🏗️', categoria: 'arte', barrio: 'San Felipe', nombre_es: 'Barrio San Felipe', nombre_en: 'San Felipe Neighborhood', desc_es: 'Galerías de arte contemporáneo conviven con talleres de artistas.', desc_en: 'Contemporary art galleries coexist with artist studios.' },
  { id: 3, emoji: '🕌', categoria: 'arte', barrio: 'La Candelaria', nombre_es: 'Barrio Egipto', nombre_en: 'Egipto Neighborhood', desc_es: 'Un barrio popular con vistas únicas a la ciudad.', desc_en: 'A popular neighborhood with unique city views.' },
  { id: 4, emoji: '🛹', categoria: 'arte', barrio: 'Fontanar', nombre_es: 'Skatepark Fontanar', nombre_en: 'Fontanar Skatepark', desc_es: 'Cultura urbana, skateboarding y arte callejero.', desc_en: 'Urban culture, skateboarding and street art.' },
  // CAFÉ LOCAL
  { id: 5, emoji: '☕', categoria: 'cafe', barrio: 'Chapinero', nombre_es: 'Varietale', nombre_en: 'Varietale', desc_es: 'Café de especialidad con origen único.', desc_en: 'Specialty coffee with single origin.' },
  { id: 6, emoji: '📚', categoria: 'cafe', barrio: 'Chapinero', nombre_es: 'Librería Wilborada 1047', nombre_en: 'Wilborada 1047 Bookstore', desc_es: 'Librería independiente con café de especialidad.', desc_en: 'Independent bookstore with specialty coffee.' },
  { id: 7, emoji: '❤️', categoria: 'cafe', barrio: 'Palermo', nombre_es: 'Amor Perfecto', nombre_en: 'Amor Perfecto', desc_es: 'Pioneros del café de especialidad en Colombia.', desc_en: 'Pioneers of specialty coffee in Colombia.' },
  { id: 8, emoji: '🏠', categoria: 'cafe', barrio: 'Usaquén', nombre_es: 'Casa Café Cultor', nombre_en: 'Casa Café Cultor', desc_es: 'Una casa colonial convertida en espacio de café.', desc_en: 'A colonial house turned into a coffee space.' },
  { id: 9, emoji: '🌎', categoria: 'cafe', barrio: 'La Macarena', nombre_es: 'Colo Coffee', nombre_en: 'Colo Coffee', desc_es: 'Café de origen preparado con técnica y amor.', desc_en: 'Colombian origin coffee prepared with technique.' },
  { id: 10, emoji: '✊', categoria: 'cafe', barrio: 'Chapinero', nombre_es: 'Libertario Coffee Roasters', nombre_en: 'Libertario Coffee Roasters', desc_es: 'Tostadores independientes con conciencia social.', desc_en: 'Independent roasters with social conscience.' },
  // NATURALEZA
  { id: 11, emoji: '🦋', categoria: 'naturaleza', barrio: 'Usme', nombre_es: 'Santuario Las Moyas', nombre_en: 'Las Moyas Sanctuary', desc_es: 'Reserva natural con senderos que pocos conocen.', desc_en: 'Natural reserve with trails few people know.' },
  { id: 12, emoji: '🏔️', categoria: 'naturaleza', barrio: 'Límite Bogotá', nombre_es: 'Páramo de Chingaza', nombre_en: 'Chingaza Páramo', desc_es: 'Ecosistema de frailejones y niebla.', desc_en: 'Ecosystem of frailejones and mist.' },
  { id: 13, emoji: '🌺', categoria: 'naturaleza', barrio: 'Engativá', nombre_es: 'Jardín Botánico', nombre_en: 'Botanical Garden', desc_es: 'Más de 4.000 especies de plantas nativas.', desc_en: 'More than 4,000 native plant species.' },
  { id: 14, emoji: '🦆', categoria: 'naturaleza', barrio: 'Suba', nombre_es: 'Humedal La Conejera', nombre_en: 'La Conejera Wetland', desc_es: 'Ecosistema vital con aves migratorias.', desc_en: 'Vital ecosystem with migratory birds.' },
  { id: 15, emoji: '💧', categoria: 'naturaleza', barrio: 'Chapinero Alto', nombre_es: 'Quebrada La Vieja', nombre_en: 'La Vieja Stream', desc_es: 'Sendero de montaña con vistas panorámicas.', desc_en: 'Mountain trail with panoramic views.' },
  // SABORES
  { id: 16, emoji: '🍖', categoria: 'sabores', barrio: 'Kennedy', nombre_es: 'Piqueteadero Doña Segunda', nombre_en: 'Doña Segunda\'s Piqueteadero', desc_es: 'Cocina popular bogotana en su máxima expresión.', desc_en: 'Bogotá popular cuisine at its finest.' },
  { id: 17, emoji: '🍲', categoria: 'sabores', barrio: 'La Candelaria', nombre_es: 'Restaurante Doña Elvira', nombre_en: 'Doña Elvira\'s Restaurant', desc_es: 'Menú del día y recetas de abuela.', desc_en: 'Daily menu and grandmother\'s recipes.' },
  { id: 18, emoji: '🔥', categoria: 'sabores', barrio: 'Bosa', nombre_es: 'Asadero Don Roque', nombre_en: 'Don Roque\'s Grill', desc_es: 'Pollo asado al carbón institución del barrio.', desc_en: 'Charcoal-grilled chicken, neighborhood institution.' },
  // MERCADOS
  { id: 19, emoji: '🛒', categoria: 'mercados', barrio: 'La Perseverancia', nombre_es: 'Plaza de La Perseverancia', nombre_en: 'La Perseverancia Market', desc_es: 'La plaza de mercado más auténtica del centro.', desc_en: 'The most authentic market square downtown.' },
  // BARRIOS
  { id: 20, emoji: '🏘️', categoria: 'barrios', barrio: 'San Felipe', nombre_es: 'Barrio San Felipe', nombre_en: 'San Felipe Neighborhood', desc_es: 'El nuevo epicentro cultural de Bogotá.', desc_en: 'Bogotá\'s new cultural epicenter.' },
];

let currentLang = 'es';

const catLabels = {
  es: { sabores: 'Sabores locales', arte: 'Arte urbano', naturaleza: 'Naturaleza escondida', barrios: 'Barrios emergentes', noche: 'Planes nocturnos', mercados: 'Mercados y plazas', cafe: 'Café local', todos: 'Todos' },
  en: { sabores: 'Hidden flavors',  arte: 'Street art',  naturaleza: 'Hidden nature',        barrios: 'Emerging neighborhoods', noche: 'Nightlife', mercados: 'Markets & squares', cafe: 'Local coffee', todos: 'All' },
};

function getCatLabel(cat, lang) { return catLabels[lang][cat] || cat; }

function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });
  document.documentElement.setAttribute('lang', lang);
  renderPlaces(lugaresData, lang);
}

// ========== ESTE ES EL AJUSTE PARA LA SECCIÓN DE LUGARES ==========
function renderPlaces(data, lang) {
  const grid = document.getElementById('placesGrid');
  if (!grid) return;

  grid.innerHTML = ""; // Limpiamos para evitar duplicados
  
  // Detectamos si estamos en la carpeta /pages/
  const isInsidePagesFolder = window.location.pathname.includes('/pages/');
  
  // Si estamos en el home (fuera de pages), mostramos 6. En lugares.html mostramos todo.
  const lista = !isInsidePagesFolder ? data.slice(0, 6) : data;

  if (lista.length === 0) {
    grid.innerHTML = `<p style="color:var(--text-dim);grid-column:1/-1;text-align:center;padding:2rem 0;">Próximamente más lugares ✦</p>`;
    return;
  }

  grid.innerHTML = lista.map(lugar => `
    <div class="place-card" data-id="${lugar.id}">
      <div class="place-card__img">
        ${lugar.emoji}
        <span class="place-card__tag">${getCatLabel(lugar.categoria, lang)}</span>
      </div>
      <div class="place-card__body">
        <h3 class="place-card__name">${lang === 'es' ? lugar.nombre_es : lugar.nombre_en}</h3>
        <p class="place-card__desc">${lang === 'es' ? lugar.desc_es : lugar.desc_en}</p>
        <div class="place-card__meta">
          <span class="place-card__barrio">📍 ${lugar.barrio}</span>
          <span class="place-card__arrow">→</span>
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.place-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      const path = isInsidePagesFolder ? `lugar.html?id=${id}&lang=${currentLang}` : `pages/lugar.html?id=${id}&lang=${currentLang}`;
      window.location.href = path;
    });
  });
}

function setupLangToggle() {
  const btnEs = document.getElementById('btn-es');
  const btnEn = document.getElementById('btn-en');
  if (!btnEs || !btnEn) return;
  btnEs.onclick = () => { currentLang = 'es'; btnEs.classList.add('active'); btnEn.classList.remove('active'); applyTranslations('es'); };
  btnEn.onclick = () => { currentLang = 'en'; btnEn.classList.add('active'); btnEs.classList.remove('active'); applyTranslations('en'); };
}

function setupCategories() {
  const allBtns = document.querySelectorAll('.cat-card, .btn-filter');
  allBtns.forEach(btn => {
    btn.onclick = () => {
      allBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-cat');
      const filtered = (cat === 'todos' || !cat) ? lugaresData : lugaresData.filter(l => l.categoria === cat);
      renderPlaces(filtered, currentLang);
    };
  });
}

function setupSearch() {
  const btn = document.getElementById('searchBtn');
  const input = document.getElementById('searchInput');
  if (!btn || !input) return;
  btn.onclick = () => {
    const q = input.value.trim().toLowerCase();
    const results = lugaresData.filter(l => l.nombre_es.toLowerCase().includes(q) || l.barrio.toLowerCase().includes(q));
    renderPlaces(results, currentLang);
    document.getElementById('lugares')?.scrollIntoView({ behavior: 'smooth' });
  };
}

function setupNavScroll() {
  window.onscroll = () => {
    const nav = document.querySelector('.navbar');
    if (nav) nav.style.background = window.scrollY > 40 ? 'rgba(14,14,14,0.97)' : 'rgba(14,14,14,0.85)';
  };
}

function setupHamburger() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if (btn && menu) btn.onclick = () => menu.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(currentLang);
  setupLangToggle();
  setupCategories();
  setupSearch();
  setupNavScroll();
  setupHamburger();
});