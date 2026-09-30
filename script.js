(() => {
  'use strict';

  const menuButton = document.querySelector('.menu-button');
  const navigation = document.querySelector('.site-nav');

  const closeMenu = () => {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('open');
    document.body.classList.remove('menu-open');
  };

  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu();
      return;
    }

    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'Close navigation');
    navigation?.classList.add('open');
    document.body.classList.add('menu-open');
  });

  navigation?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) closeMenu();
  });

  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
