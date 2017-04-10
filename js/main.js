/* --------------------------------------------------------------------------
  Initialize
  --------------------------------------------------------------------------- */

$(document).ready(function() {

    /* Syntax Highlighter
    --------------------------------------------------------------------------- */

    SyntaxHighlighter.defaults['toolbar'] = false;
    SyntaxHighlighter.defaults['gutter'] = true;
    SyntaxHighlighter.all();
    SyntaxHighlighter.highlight();

});

/* --------------------------------------------------------------------------
  Follow sidebar
  --------------------------------------------------------------------------- */

$(function() {
    var $sidebar = $(".sidebar"),
        $window = $(window),
        $start = $sidebar.offset().top + 30;

    $window.scroll(function() {
        if ($window.scrollTop() > $start) {
            $sidebar.addClass("sidebar-scrolled");
        } else {
            $sidebar.removeClass("sidebar-scrolled");
        }
    });
});

/* --------------------------------------------------------------------------
  Smooth scrolling - https://css-tricks.com/snippets/jquery/smooth-scrolling/
  --------------------------------------------------------------------------- */

$(function() {
    $('.sidebar-menu-element a').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 700);
                return false;
            }
        }
    });
});

/* --------------------------------------------------------------------------
  Add class on click sidebar element
  --------------------------------------------------------------------------- */

$('.sidebar-menu-element').click(function() {
    $('.sidebar-menu-element').removeClass('is-active');
    $(this).addClass('is-active');
});
