 (() => {
  const refs = {
    openMenuBtn: document.querySelector('.mob-menu__btn-open'),
    closeMenuBtn: document.querySelector('.mob-menu__btn-close'),
    menu: document.querySelector('.mob-menu'),
    menuItem: document.querySelector('.mob-menu')
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menu.addEventListener('click', removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
  function removeMenu(e) {
    if (e.target === refs.menu) {
      refs.menu.classList.add('is-hidden');
    }
  }
})();