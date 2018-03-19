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
        
        $('#flags-id .flags a img').hover(function () {
            $(this).css({
                "border" : "1px solid #E50A0D",
                "padding" : "1px"
            });
        },function () {
            $(this).css("border", "0");
        });
    });
})();