import menuTemplate from './menu-template.hbs';
import cardsMenu from './menu.json';
import './styles.css';

const STORAGE_KEY = 'current-theme';

const Refs = {
    body: document.querySelector('body'),
    themeSwitchRef: document.querySelector('#theme-switch-toggle'),
    menuRef: document.querySelector('ul.js-menu'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

Refs.themeSwitchRef.addEventListener('change', onSwitchChange);

function onSwitchChange(event) {
    event.preventDefault();

    // if (typeof localStorage === 'undefined') {
    //     alert("localStorage не работает!");
    // }

    if (event.currentTarget.checked) {
        Refs.body.classList.remove(Theme.LIGHT);
        Refs.body.classList.add(Theme.DARK);

        localStorage.setItem(STORAGE_KEY, Theme.DARK);
    } else {
        Refs.body.classList.remove(Theme.DARK);
        Refs.body.classList.add(Theme.LIGHT);

        localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
    }
}

const toggleMarker = localStorage.getItem(STORAGE_KEY);
Refs.body.classList = toggleMarker || '';
if (toggleMarker === Theme.DARK) {
    Refs.themeSwitchRef.checked = true;
} else {
    Refs.themeSwitchRef.checked = false;
}

const cardsMarkup = createMenuTemplateMarkup(cardsMenu);

Refs.menuRef.insertAdjacentHTML('beforeend', cardsMarkup);

function createMenuTemplateMarkup(cardsMenu) {
    return cardsMenu.map(menuTemplate).join('');
}