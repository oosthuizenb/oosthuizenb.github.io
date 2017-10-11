var nav_toggle = document.getElementById('nav-toggle');
var nav = document.getElementById('top-nav');

// Test for class
function hasClass(el, className) {
  return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
}

// Add class
function addClass(el, className) {
  if (el.classList) el.classList.add(className);
  else if (!hasClass(el, className)) el.className += ' ' + className;
}

// Remove class
function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);
  else el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
}

// Toggle class
function toggleClass(el, className) {
  hasClass(el, className) ? removeClass(el, className) : addClass(el, className);
}

// Hide/Show mobile nav
nav_toggle.onclick = function() {
  toggleClass(nav, 'nav-on'); // Navbar
  toggleClass(nav_toggle, 'nav-toggle-on'); // Rotate nav icon
}
