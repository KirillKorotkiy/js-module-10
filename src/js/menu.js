import itemsMenu from '../tempates/menu.hbs'
import menu from '../menu.json'


const ulRef = document.querySelector('.js-menu');

const markup = itemsMenu(menu);

ulRef.insertAdjacentHTML('beforeend', markup)



