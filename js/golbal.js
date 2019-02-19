$(function () {

    //屏幕滚动导航悬浮
    if ($('.js-nav-box')) {
        var $moveNav=$('.js-nav-box');
        $(window).scroll(function () {
            var top = $(this).scrollTop();
            top > 60 ? $moveNav.addClass('nav-fly') : $moveNav.removeClass('nav-fly');
        });
    }
    //返回顶部效果
    $('.js-back-btn').click(function () {
        $('html,body').animate({scrollTop: 0});
    });

    // //手机下单弹窗
    $('.js-phone-order').click(function () {
        $('.js-phone-box').fadeIn();
        $('.g-mian-bg').fadeIn();
    });
    //关闭弹窗
    $('.js-popup-close').click(function () {
        $('.js-phone-box').fadeOut();
        $('.g-mian-bg').fadeOut();
    });


//   手机扫码弹窗
    $('.phone-btn').click(function () {
        $('.js-phone-box').fadeIn();
        $('.g-mian-bg').fadeIn();
    });
    //收藏本站
    $('.add-favorite').click(function () {
        try {
            window.sidebar.addPanel('捷创电子', 'http://www.jc-pcba.com', '');
        }
        catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
        }
    });
});//end function

