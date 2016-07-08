$(document).ready(function () {

    var msg = ['Sunday',
               'Blue Monday',
               'Blue Tuesday',
               'Blue Wednesday',
               'Blue Thursday',
               'TGIF',
               'Party Saturday!'
              ];

    function curr_time() {
        var d = new Date();
        var day = d.getDay();
        var dYear = d.getFullYear();
        var dMonth = d.getMonth()+1;
        var dDate = d.getDate();
        var hour = d.getHours();
        var min = d.getMinutes();
        var sec = d.getSeconds();

        $('.weekBox_today').html( '<p>' + dYear + ' / ' + dMonth + ' / ' + dDate + '</p>' + '<p>' + addZero(hour) + ':' + addZero(min) + ':' + addZero(sec));
        $('#' + 'day' + day).css('background-color','#f6a445');
        $('.weekBox_text').text(msg[day]);
    };

    function addZero(i) {
        if (i < 10) {
            i = '0' + i;
        };
        return i;
    };

    setInterval(curr_time, 500);

});
