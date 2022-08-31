let sortingBtn = document.querySelector('.sorting');
let formParentBtn = document.querySelector('.form__btns');
let mobileSiblingstBtn = document.querySelector('.form__info-block--sorting');


let breakpointSorting = 768;


const replaceMobileMenu = (element,parentDesktop,parentMobile) => {
  let containerWidth = document.documentElement.clientWidth;
  if (containerWidth <= breakpointSorting) {
    parentMobile.insertAdjacentElement('afterend', element);
  };
  if (containerWidth > breakpointSorting) {
    parentDesktop.insertAdjacentElement('afterbegin', element);
  }
}

window.addEventListener('resize', () => {
  replaceMobileMenu(sortingBtn,formParentBtn,mobileSiblingstBtn);
});

window.addEventListener('DOMContentLoaded', () => {
  replaceMobileMenu(sortingBtn,formParentBtn,mobileSiblingstBtn);
});







