// SLP common navigation and motion system.

const HEADER_HTML = `
<div class="topstrip">
  <div class="wrap">
    <span>FUKUOKA, JP</span>
    <span class="signal">TECHNO / AMBIENT / MINIMAL / ELECTRONICA</span>
    <span class="top-controls">
      <button class="motion-toggle" type="button" aria-pressed="true">MOTION ON</button>
    </span>
  </div>
</div>

<header class="site">
  <div class="wrap">
    <a class="logo" href="index.html" aria-label="SLP home">SLP</a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation">MENU</button>
    <nav class="site" id="site-navigation" aria-label="Main navigation">
      <a href="index.html" data-page="home">home</a>
      <a href="catalog.html" data-page="catalog">catalog</a>
      <a href="artists.html" data-page="artists">artists</a>
      <a href="movie.html" data-page="movie">movie</a>
      <a href="about.html" data-page="about">about</a>
      <a href="contact.html" data-page="contact">contact</a>
    </nav>
  </div>
</header>
`;

const FOOTER_HTML = `
<footer class="site">
  <div class="wrap">
    <div>
      <a href="https://twitter.com/slprecordings">X</a>
      <a href="https://www.instagram.com/slprcrdngs/">Instagram</a>
      <a href="https://slprecordings.bandcamp.com/">Bandcamp</a>
      <a href="https://www.youtube.com/@slprecordings">YouTube</a>
    </div>
    <div class="copyright">© SLP</div>
  </div>
</footer>
`;

const MOTION_KEY = 'slp-motion';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function storedMotionPreference() {
  try {
    return window.localStorage.getItem(MOTION_KEY);
  } catch (_) {
    return null;
  }
}

function motionIsEnabled() {
  const stored = storedMotionPreference();
  if (stored === 'on') return true;
  if (stored === 'off') return false;
  return !reducedMotion.matches;
}

function setMotion(enabled, persist) {
  document.body.classList.toggle('motion-off', !enabled);
  const toggle = document.querySelector('.motion-toggle');
  if (toggle) {
    toggle.setAttribute('aria-pressed', String(enabled));
    toggle.textContent = enabled ? 'MOTION ON' : 'MOTION OFF';
  }

  if (!enabled) {
    document.querySelectorAll('.reveal').forEach(function (item) {
      item.classList.add('is-visible');
    });
  }

  if (persist) {
    try {
      window.localStorage.setItem(MOTION_KEY, enabled ? 'on' : 'off');
    } catch (_) {
      // The control still works for the current page when storage is unavailable.
    }
  }
}

function setupRevealMotion() {
  const selector = [
    '.hero > *',
    '.page-header > *',
    '.latest .eyebrow',
    '.latest-grid > *',
    '.section-label',
    '.card',
    '.movie-item',
    '.about-grid > *',
    '.contact > *',
    '.detail-back',
    '.detail-grid > *',
    '.detail-content-grid > *',
    '.related > *',
    'footer.site .wrap > *'
  ].join(',');
  const items = Array.from(document.querySelectorAll(selector));

  items.forEach(function (item, index) {
    item.classList.add('reveal');
    item.style.setProperty('--reveal-delay', (index % 5) * 45 + 'ms');
  });

  if (!motionIsEnabled() || !('IntersectionObserver' in window)) {
    items.forEach(function (item) { item.classList.add('is-visible'); });
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold:0.12, rootMargin:'0px 0px -5% 0px' });

  items.forEach(function (item) { observer.observe(item); });
}

function setupPageTransitions() {
  document.addEventListener('click', function (event) {
    const link = event.target.closest('a[href]');
    if (!link || event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (link.target === '_blank' || link.hasAttribute('download')) return;

    const destination = new URL(link.href, window.location.href);
    const isInternal = destination.origin === window.location.origin;
    const isSameDocument = destination.pathname === window.location.pathname && destination.hash;
    if (!isInternal || isSameDocument || !motionIsEnabled()) return;

    event.preventDefault();
    document.body.classList.remove('menu-open');
    document.body.classList.add('is-leaving');
    window.setTimeout(function () { window.location.href = destination.href; }, 260);
  });

  window.addEventListener('pageshow', function () {
    document.body.classList.remove('is-leaving');
  });
}

function setupHeroResponse() {
  const hero = document.querySelector('.hero');
  const title = hero && hero.querySelector('h1');
  if (!hero || !title) return;

  hero.addEventListener('pointermove', function (event) {
    if (!motionIsEnabled() || event.pointerType === 'touch') return;
    const box = hero.getBoundingClientRect();
    const x = ((event.clientX - box.left) / box.width - .5) * 9;
    const y = ((event.clientY - box.top) / box.height - .5) * 6;
    title.style.setProperty('--hero-shift-x', x.toFixed(2) + 'px');
    title.style.setProperty('--hero-shift-y', y.toFixed(2) + 'px');
  });

  hero.addEventListener('pointerleave', function () {
    title.style.setProperty('--hero-shift-x', '0px');
    title.style.setProperty('--hero-shift-y', '0px');
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const headerSlot = document.getElementById('site-header');
  const footerSlot = document.getElementById('site-footer');
  if (headerSlot) headerSlot.innerHTML = HEADER_HTML;
  if (footerSlot) footerSlot.innerHTML = FOOTER_HTML;

  const currentPage = document.body.getAttribute('data-page');
  const currentLink = currentPage && document.querySelector('nav.site a[data-page="' + currentPage + '"]');
  if (currentLink) {
    currentLink.classList.add('current');
    currentLink.setAttribute('aria-current', 'page');
  }

  const menuToggle = document.querySelector('.menu-toggle');
  const siteNavigation = document.getElementById('site-navigation');
  const menuViewport = window.matchMedia('(max-width: 820px)');
  const setMenuState = function (open, returnFocus) {
    const nextState = Boolean(open && menuViewport.matches);
    document.body.classList.toggle('menu-open', nextState);
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', String(nextState));
      menuToggle.textContent = nextState ? 'CLOSE' : 'MENU';
      if (returnFocus) menuToggle.focus();
    }
    if (siteNavigation) siteNavigation.inert = menuViewport.matches && !nextState;
  };

  setMenuState(false, false);
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      setMenuState(!document.body.classList.contains('menu-open'), false);
    });
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && document.body.classList.contains('menu-open')) {
      setMenuState(false, true);
    }
  });

  document.addEventListener('click', function (event) {
    if (!document.body.classList.contains('menu-open')) return;
    if (event.target.closest('#site-header')) return;
    setMenuState(false, false);
  });

  menuViewport.addEventListener('change', function () {
    setMenuState(false, false);
  });

  const motionToggle = document.querySelector('.motion-toggle');
  setMotion(motionIsEnabled(), false);
  if (motionToggle) {
    motionToggle.addEventListener('click', function () {
      setMotion(!motionIsEnabled(), true);
    });
  }

  if (motionIsEnabled() && document.body.animate) {
    document.body.animate(
      [{ opacity:0, transform:'translateY(12px)' }, { opacity:1, transform:'translateY(0)' }],
      { duration:520, easing:'cubic-bezier(.22,1,.36,1)' }
    );
  }

  setupRevealMotion();
  setupPageTransitions();
  setupHeroResponse();

  const syncScrollState = function () {
    document.body.classList.toggle('scrolled', window.scrollY > 24);
  };
  syncScrollState();
  window.addEventListener('scroll', syncScrollState, { passive:true });
});
