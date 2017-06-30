/* --------------------------------------------------------------------------
  Initialize
  --------------------------------------------------------------------------- */

$(document).ready(function() {

    /* Syntax Highlighter
    --------------------------------------------------------------------------- */

    SyntaxHighlighter.defaults['toolbar'] = false;
    SyntaxHighlighter.defaults['gutter'] = false;
    SyntaxHighlighter.all();
    SyntaxHighlighter.highlight();

});

/* --------------------------------------------------------------------------
  Follow sidebar
  --------------------------------------------------------------------------- */

$(function() {
    var $sidebar = $(".sidebar"),
        $window = $(window),
        $start = $sidebar.offset().top - 98;

    $window.scroll(function() {
        if ($window.scrollTop() > $start) {
            $sidebar.addClass("sidebar-scrolled");
        } else {
            $sidebar.removeClass("sidebar-scrolled");
        }
    });
});

/* --------------------------------------------------------------------------
  Smooth scrolling and add style on click section
  --------------------------------------------------------------------------- */
/* https://css-tricks.com/snippets/jquery/smooth-scrolling/ */

$(function() {
    $('.sidebar-menu-element a').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                $('.sidebar-menu-element a').removeClass('is-active');
                $(this).addClass('is-active');

                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 700);
                return false;
            }
        }
    });
});
