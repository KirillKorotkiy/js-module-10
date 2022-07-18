
import './menu';


const toolBartRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');

toolBartRef.addEventListener('change', switchTheme);

function switchOnDark() {
  bodyRef.classList.add('dark-theme');
  bodyRef.classList.remove('light-theme');
  const themeName = bodyRef.className;
  localStorage.setItem('theme-name', themeName);
  toolBartRef.checked = true;
}

function switchOnLight() {
  bodyRef.classList.add('light-theme');
  bodyRef.classList.remove('dark-theme');
  const themeName = bodyRef.className;
  localStorage.setItem('theme-name', themeName);
  toolBartRef.checked = false;
}

function switchTheme(event) {
    event.currentTarget.checked ? switchOnDark():switchOnLight()
}

function setDefault (){
    const getCurrentTheme = localStorage.getItem('theme-name');
    if (getCurrentTheme === 'dark-theme') {
        switchOnDark();
        return;
}   switchOnLight();
}

setDefault()