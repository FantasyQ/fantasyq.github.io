$(document).ready(function() {
    // lazy load
    $('img.lazy').lazyload({
        effect : 'fadeIn'
    });
    // End lazy load

    // 為了展示方便，把所有連結的預設動作關掉
    $('a').click(function(event) {
            event.preventDefault();
    })
    // End - 為了展示方便，把所有連結的預設動作關掉

    // 回首頁
    $('#_logo_home').click(function() {
        $('html, body').animate({scrollTop: $('body').offset().top}, 1000, 'easeInOutExpo');
    })
    // End 回首頁

    // 照片光箱
    $('.colorBoxGroup1').click(function() {
        var picHref = $(this).attr('href');
        $('._lightBox, ._lightBox_content').stop(true, false).fadeIn();
        $('._lightBox_content_pic').html('<img src="' + picHref + '">');
    })
    $('._lightBox, ._lightBox_content').click(function() {
        $(this).stop(true, false).fadeOut();
    })
    // End 照片光箱
})
