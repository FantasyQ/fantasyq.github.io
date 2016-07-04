$(document).ready(function () {

    var d = new Date();
    var day = d.getDay();
    var msg = ['Sunday',
               'Blue Monday',
               'Blue Tuesday',
               'Blue Wednesday',
               'Blue Thursday',
               'TGIF',
               'Party Saturday!'
              ];
    var dYear = d.getFullYear();
    var dMonth = d.getMonth()+1;
    var dDate = d.getDate();
    $('.weekBox_today').text(dYear + ' / ' + dMonth + ' / ' + dDate);
    $('#' + 'day' + day).css('background-color','#f6a445');
    $('.weekBox_text').text(msg[day]);

});
