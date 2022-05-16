(function($) {
    $(function () {
 
        // サイドサブメニューアコーディオン
        $('.sub-menu-head').on('click', function(){
            var $subNav = $(this).next('.sub-menu-nav');
            if ($subNav.is(':visible')) {
                $subNav.velocity('slideUp', {duration: 200});
                $(this).parent('li').removeClass('is-active');
            }
            else {
                $subNav.velocity('slideDown', {duration: 200});
                $(this).parent('li').addClass('is-active');
            }
            return false;
        });
 
        $('#nav-toggle').on('click', function() {
            $('body').toggleClass('open');
            $('body').toggleClass('close');
        });
 
        $('.scroll').perfectScrollbar();
        
        // select box
        $('#mode_option').change(function () {
            var val = $('#mode_option option:selected').val();
            console.log(val);
            $('section').fadeOut();
            $('#' + val ).fadeIn();

            $('#main-visual h2').text($('#opt-' + val).text())
        });
    });
})(jQuery);