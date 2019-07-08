onload = start;

var themeLight = document.getElementById('theme-light');
var themeDark = document.getElementById('theme-dark');
var theme = document.getElementsByClassName('theme__radio');
var popup = document.getElementsByClassName('popup');

function start() {
  // Read the local storage for the theme set in the pass
  if ('localStorage' in window) {
    var local = localStorage.getItem('fyloTheme');
    if (local) {
      defaultTheme = local;
    } else {
      defaultTheme = 'dark';
    }
  }

  // Set the theme when load
  if (defaultTheme === 'light') {
    themeLight.setAttribute('checked', true);
  } else {
    themeDark.setAttribute('checked', true);
  }
}

// Close popup menu when click outside the popup
function closePopup(e) {
  if (e.target.className === 'popup') {
    window.location.hash = '';
  }
}

for (var j=0; j < popup.length; j++) {
	popup[j].addEventListener('click', closePopup);
}


// Update the local storage with the new theme for future use
for (var j=0; j < theme.length; j++) {
	theme[j].addEventListener('click', switchTheme);
}

function switchTheme(e) {
  if ('localStorage' in window) {
    localStorage.setItem('fyloTheme', this.getAttribute('value'));
  }
}
