$(document).ready(function () {

    var scrollHeight = '';
    $(window).scroll(function () {
        scrollHeight = $(this).scrollTop();
        console.log(scrollHeight);

        if (scrollHeight > 575 && scrollHeight < 830) {
            $('.bottom_container').fadeIn(500);
        } else {
            $('.bottom_container').fadeOut(500);
        };
    });

});
