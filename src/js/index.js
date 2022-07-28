
import './menu';

const toolBartRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');

toolBartRef.addEventListener('change', switchTheme);

function switchOnDark() {
  bodyRef.classList.add('dark-theme');
  bodyRef.classList.remove('light-theme');
  setLocalStorage()
}

function switchOnLight() {
  bodyRef.classList.add('light-theme');
  bodyRef.classList.remove('dark-theme');
  setLocalStorage()
}

function switchTheme(event) {
    event.currentTarget.checked ? switchOnDark():switchOnLight()
}

function setLocalStorage(){
  const themeName = bodyRef.className;
  localStorage.setItem('theme-name', themeName);
}

function setDefault (){
  
    const getCurrentTheme = localStorage.getItem('theme-name');
    if (getCurrentTheme === 'dark-theme') {
        switchOnDark();
        toolBartRef.checked = true;
        return;
}   switchOnLight();
    toolBartRef.checked = false;
}

setDefault()