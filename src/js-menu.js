import menuTemplate from './menu-template.hbs';
import menu from './menu.json';
import './styles.css';

console.log(menuTemplate([]));

const menuRef = document.querySelector('.js-menu');
const markup = createMenuTemplateMarkup(menu);

menuRef.insertAdjacentHTML('beforend', markup);

function createMenuTemplateMarkup(menu) {
    return menu.map(menuTemplate);
}


// =====================================================================
// const menuRef = document.querySelector('.js-menu');

// const markup = cardsMenuTemplate(cards);
// menuRef.insertAdjacentHTML('beforend', markup);

// menuContainer.addEventListener('click', onMenuMarkupClick);

// function onMenuMarkupClick(event) {
//     const isCardMenu = event.target.classList.contains('menu__item');

//     if(!isCardMenu) {
//         return;
//     }
// }
