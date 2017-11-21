var work = document.querySelector('.work');
var about = document.querySelector('.about');
var contact = document.querySelector('.contact');

var workLinks = document.querySelectorAll('.work-link');
var aboutLinks = document.querySelectorAll('.about-link');
var contactLinks = document.querySelectorAll('.contact-link');

for (var i = 0; i < workLinks.length; i++) {
  workLinks[i].addEventListener('click', scrollWork);
};

for (var i = 0; i < aboutLinks.length; i++) {
  aboutLinks[i].addEventListener('click', scrollAbout);
};

for (var i = 0; i < contactLinks.length; i++) {
  contactLinks[i].addEventListener('click', scrollContact);
};

function scrollContact(){
  doScrolling(contact, 600);
};

function scrollWork(){
  doScrolling(work, 600);
};

function scrollAbout(){
  doScrolling(about, 600);
};

function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}


function elmYPosition(elm) {
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}

function doScrolling(element, duration) {
  var startingY = currentYPosition();
  var diff = elmYPosition(element) - startingY;
  var start;

  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    // Elapsed miliseconds since start of scrolling.
    var time = timestamp - start;
    // Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1);

    if ('requestAnimationFrame' in window === false) {
      window.scroll(0, diff);
      console.log('scrolling');
      if (callback) {
        callback();
      }
      return;
    }

    window.scrollTo(0, startingY + diff * percent);

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step);
    };
  });
};
