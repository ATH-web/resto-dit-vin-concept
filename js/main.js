const header = document.querySelector('[data-header]');
const toggle = document.querySelector('[data-menu-toggle]');
const mobileNav = document.querySelector('[data-mobile-nav]');

const syncHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 18);
syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  mobileNav?.classList.toggle('is-open', !open);
});

mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    toggle?.setAttribute('aria-expanded', 'false');
    mobileNav?.classList.remove('is-open');
  });
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = [...document.querySelectorAll('[data-reveal]')];

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -6% 0px' });
  revealEls.forEach((el) => revealObserver.observe(el));
}

const wineSection = document.querySelector('[data-wine-section]');
const wineWord = document.querySelector('[data-wine-word]');
const wineTitle = document.querySelector('#wine-title');
if (wineSection && wineWord && !reduceMotion && 'IntersectionObserver' in window) {
  let isInView = false;
  let animationTimer;
  const resetWineWord = () => {
    clearTimeout(animationTimer);
    wineWord.classList.add('is-resetting');
    wineWord.classList.remove('is-divin');
    wineTitle?.setAttribute('aria-label', 'Dit Vin');
    window.requestAnimationFrame(() => wineWord.classList.remove('is-resetting'));
  };
  const wineObserver = new IntersectionObserver(([entry]) => {
    const isClearlyVisible = entry.isIntersecting && entry.intersectionRatio >= .55;
    if (!isClearlyVisible) {
      if (!isInView) return;
      isInView = false;
      resetWineWord();
      return;
    }
    if (isInView) return;
    isInView = true;
    animationTimer = window.setTimeout(() => {
      if (!isInView) return;
      wineWord.classList.add('is-divin');
      wineTitle?.setAttribute('aria-label', 'Divin');
    }, 300);
  }, { threshold: 0.55 });
  wineObserver.observe(wineSection);
}
