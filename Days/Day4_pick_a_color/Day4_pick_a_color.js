$(document).ready(function () {

    var pickColorRGB = 'qq';

    $('.palette').click(function () {
        pickColorRGB = $(this).css('background-color');
        $('.currentColor').css({'background-color': pickColorRGB});
    });

    $('.abc').click(function () {
        $(this).css({'background-color': pickColorRGB});
    });

});
