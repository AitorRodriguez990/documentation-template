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