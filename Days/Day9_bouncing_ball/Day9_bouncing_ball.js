$(document).ready(function () {

    var level = 1;
    var levelText = '';
    var messages = ["Good!",
                    "Nice job!",
					"Excellent clickin'!",
					"That was Awesome!!",
					"Boom!",
					"You're a pro!",
					"Unbelievable!",
					"Insanity!",
					"That was crazy!"];

    $('.ball').click(function () {
        if (level < 10) {
            level = level + 1;

            flashMessage();

            var animationSpeed = 12 - level;
            $('.ball').css('animation-duration', animationSpeed + 's');

            levelText = 'Level: ' + level + ' / ' + '10';
            $('.textBox h2').text(levelText);
        } else {
            $('.textBox h2').hide();
            $('.ball').hide();
            $('.message').text('Winner!');
            $('.resetLevel').show();
        };
    });

    function flashMessage() {
        $('.message').show().text(messages[level-2]);
        $('.ball').hide();

        function messageHide() {
            $('.message').text('');
            $('.ball').show();
        }

        setTimeout(messageHide, 3000);
    };

    $('.resetLevel').click(function () {
        level = 1;
        levelText = 'Level: ' + level + ' / ' + '10';

        $('.ball').css('animation-duration', 12 + 's');
        $('.textBox h2').text(levelText);
        $('.ball').show();
        $('.textBox h2').show();
        $('.resetLevel').hide();
        $('.message').hide();
    });

});
