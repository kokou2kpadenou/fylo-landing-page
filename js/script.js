onload = start;

const themeLight = document.getElementById('theme-light');
const theme = document.getElementsByClassName('theme__radio');
const popup = document.getElementsByClassName('popup');

function start() {
  // Read the local storage for the theme set in the pass
  if ('localStorage' in window) {
    let local = localStorage.getItem('fyloTheme');
    if (local) {
      defaultTheme = local;
    } else {
      defaultTheme = 'dark';
    }
  }
  // change the theme to light if light theme was saved?
  // remenber than the dark is set as default in the html
  if (defaultTheme === 'light') {
    themeLight.setAttribute('checked', true);
  }
}

// Close popup menu when click outside the popup
function closePopup(e) {
  if (e.target.className === 'popup') {
    window.location.hash = '#';
  }
}

for (let j=0; j < popup.length; j++) {
	popup[j].addEventListener('click', closePopup);
}


// Update the local storage with the new theme for future use
for (let j=0; j < theme.length; j++) {
	theme[j].addEventListener('click', switchTheme);
}


function switchTheme(e) {
  if ('localStorage' in window) {
    console.log(this.getAttribute('value'));
    localStorage.setItem('fyloTheme', this.getAttribute('value'));
  }
}
