import './styles.css';

const STORAGE_KEY = 'current-theme';

const body = document.querySelector('body');
const themeSwitchRef = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeSwitchRef.addEventListener('change', onSwitchChange);

function onSwitchChange(event) {
    event.preventDefault();

    // if (typeof localStorage === 'undefined') {
    //     alert("localStorage не работает!");
    // }

    if (event.currentTarget.checked) {
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);

        localStorage.setItem(STORAGE_KEY, Theme.DARK);
    } else {
        body.classList.remove(Theme.DARK);
        body.classList.add(Theme.LIGHT);

        localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
    }
}

const toggleMarker = localStorage.getItem(STORAGE_KEY);
body.classList = toggleMarker || '';
if (toggleMarker === Theme.DARK) {
    themeSwitchRef.checked = true;
} else {
    themeSwitchRef.checked = false;
}