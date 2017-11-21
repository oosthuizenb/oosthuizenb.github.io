$(document).ready(function(){
    //Event binding
    $('.icon').click(responsive);
    $('.project').hover(projectIn, projectOut);

    //--Responsive Navbar--
    function responsive() {
        var navbar = document.getElementsByClassName('nav')[0];
        if (this === $('.icon')[0] && navbar.className === 'nav') {
                navbar.className += ' responsive';
                $('.items').animate({left: '0px'}, 500);
        } else {
            navbar.className = 'nav';
            $('.items').animate({left: '-160px', display: 'block'}, 500);
        }
    };

    // Projects hover
    function projectIn() {
        var project = $(this);
        var caption = project.find(".project-caption");

        caption.animate({bottom: '0px'}, 300);
    }

    function projectOut() {
        var project = $(this);
        var caption = project.find(".project-caption");

        caption.animate({bottom: '-30px'}, 300);
    }
});
