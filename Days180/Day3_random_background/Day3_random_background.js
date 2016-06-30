$(document).ready(function () {

    function randomColor() {
        return '#' + Math.random().toString(16).slice(2, 8);
    };

    $('.clickme_button').on("click", function () {
        var Color = randomColor();
        $('.wrapper').css('background-color', Color);
        $('.wrapper').css('transition', '1s');
    });

});
