$(document).ready(function () {

    var i = 1;
    var blur = '';
    $('p').click(function () {
        i = i + 10;
        blur = '0' + ' ' + '0' + ' ' + i + 'px' + ' ' + '#700';
        $(this).css('text-shadow', blur);
    });

});
