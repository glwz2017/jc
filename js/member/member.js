$(function () {
    //左右等高
    function fnContour() {
        var h = $('.main-right').height() + 30;
        $('.js-menu-left').height(h);
    }

    //加载检测
    void function () {
        fnContour();
    }();

    //会员中心左侧列表切换
    // $('.js-menu-left li').click(function () {
    //     $(this).addClass('active-menu').siblings('li').removeClass('active-menu');
    //     return false;
    // });

    //    右侧悬浮
    $(window).scroll(function () {
        var nowTop = $(this).scrollTop() + 110;
        if (nowTop >= 230) {
            $('.js-suspension').stop().animate({top: nowTop});
        } else {
            $('.js-suspension').stop().animate({top: 230});
        }
    });//end window

    $('.js-member-close').click(function () {
        $(this).parent().parent().fadeOut();
        return false;
    });
    $('.js-business').click(function () {
        $(this).children('.links-way').fadeIn();
    });
    //个人与发票
    $('.js-user-title li').click(function () {
        var index = $(this).index();
        $(this).addClass('active-info').siblings('li').removeClass('active-info');
        $('.js-info-box .js-info').eq(index).show().siblings('.js-info').hide();
        fnContour();//等高
    });

    //默认发票选择
    $("body").on("click", ".js-invoice-lists .invoice-item", function () {
        //添加类名：active-flag  即为选中
        $(this).children('.js-active-flag').addClass('active-flag')
            .end().siblings('.invoice-item').children('.js-active-flag').removeClass('active-flag');
    });
    //发票编辑
    $("body").on("click", ".js-edit", function () {
        alert('修改弹窗');//这个你要做相应改变
        return false;
    });
//    发票删除
    $("body").on("click", ".js-del", function () {
        $(this).parent().parent().parent().hide();
        return false;
    });
//默认收货地址选择
    $("body").on("click", ".js-address-items .address-item", function () {
        $(this).addClass('active-address-item').siblings('.address-item').removeClass('active-address-item');
    });
    //收货地址编辑
    $("body").on("click", ".js-edit-address", function () {
        alert('修改弹窗');//这个你要做相应改变
        return false;
    });
//    收货地址删除
    $("body").on("click", ".js-del-address", function () {
        $(this).parent().parent().hide();
        return false;
    });

//   财务管理-预存款管理-透支管理切换
    $('.js-financial-title li').click(function () {
        var index = $(this).index();
        $(this).addClass('active-li').siblings('li').removeClass('active-li');
        $('.financial-box .tab-con').eq(index).show().siblings('.tab-con').hide();
        fnContour();//等高
    });

//    留言 添加示例
    $('.submit-btn').click(function () {
        var str = $.trim($('#opinion-text').val());//获取用户输入
        var date = new Date();//当前时间
        var time = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDay();
        var ss = '<div class="list-item">\n' +
            '                            <div class="user-list">\n' +
            '                                <i class="header-pic">\n' +
            '                                    <img src="../img/images/member/customer-pic.png" alt="" width="40" height="40">\n' +
            '                                </i>\n' +
            '                                <div class="message">\n' +
            '                                    <h6>提交时间: ' + time + '</h6>\n' +
            '                                    <p class="message-text">' + str + '</p>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                            \n' +
            '                        </div>';
        $('.lists-box').append(ss);//追加元素
        $('#opinion-text').val('');//清空数据
        fnContour();//重新计算左右等高函数
    });


});//end function
