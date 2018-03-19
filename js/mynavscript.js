(function () {
    "use strict";
    
    $(function () {
        // Activate Megamenu.
        $('ul.nav li.dropdown').hover(function (){
            $('.dropdown-menu', this).fadeIn(10, function () {
                // Mark Current Dropdown Background.
                $(this).closest('.mega-dropdown')
                        .find('a').first().addClass('redbg');
            });
        }, function () {
            $('.dropdown-menu', this).fadeOut('fast', function () {
                 // Mark Current Dropdown Background.
                $(this).closest('.mega-dropdown')
                        .find('a').first().removeClass('redbg');
            });
        });
    });
})();