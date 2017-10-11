var work = document.querySelector('.work');
var about = document.querySelector('.about');
var contact = document.querySelector('.contact');

var workLinks = document.querySelectorAll('.work-link');
var aboutLinks = document.querySelectorAll('.about-link');
var contactLinks = document.querySelectorAll('.contact-link');

workLinks.forEach(function(element) {
  element.addEventListener('click', scrollWork);
});

aboutLinks.forEach(function(element) {
  element.addEventListener('click', scrollAbout);
});

contactLinks.forEach(function(element) {
  element.addEventListener('click', scrollContact);
});

function scrollContact(){
  smoothScroll(contact);
};

function scrollWork(){
  smoothScroll(work);
};

function scrollAbout(){
  smoothScroll(about);
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


function smoothScroll(elm) {
  console.log('awe')
    var startY = currentYPosition();
    var stopY = elmYPosition(elm);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 40);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}
