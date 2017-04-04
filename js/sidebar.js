/* --------------------------------------------------------------------------
  Follow sidebar
  --------------------------------------------------------------------------- */
$(function() {
    var $sidebar = $(".sidebar"),
        $window = $(window),
        $start = $sidebar.offset().top + 40;

    $window.scroll(function() {
        if ($window.scrollTop() > $start) {
            $sidebar.addClass("sidebar-scrolled");
        } else {
            $sidebar.removeClass("sidebar-scrolled");
        }
    });
});
