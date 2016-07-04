$(document).ready(function () {

    function randomColor() {
        return '#' + Math.random().toString(16).slice(2, 8);
    };

    $('.abc').mouseenter(function () {
        $(this).css('background-color', randomColor());
        $(this).css('box-shadow', '0 0 10px #fff');
        $(this).css('z-index', '100');
    });

    $('.abc').mouseleave(function () {
        $(this).css('box-shadow', 'none');
        $(this).css('z-index', '10');
    });

});
