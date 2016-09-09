$(function () {
    $('.answer').hide();

    $('.question').click(function () {
        var $answer = $(this).next('.answer');
        var $icon = $(this).children('i');
        if ($answer.is(':hidden')) {
            $answer.slideDown(500);
            $icon.attr('class', 'fa fa-minus-circle');
        } else {
            $answer.slideUp(300);
            $icon.attr('class', 'fa fa-plus-circle');
        }
    });
});
