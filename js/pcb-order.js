$(function () {
//默认列表参数选择状态,不可选为：disabled类名
    $('.item-right .list').click(function () {
        if ($(this).hasClass('disabled')) {
            return false;
        }
        $(this).addClass('active-list').siblings('.list').removeClass('active-list');
        $('.js-in-calculation').show();//显示
        //模拟异步计价函数   套用做相应修改
        setTimeout(function () {
            $('.js-in-calculation').hide();//显示
        }, 300);
        //模拟异步计价函数   套用做相应修改
    });

    //pcb计价
    $('.js-pcb-title').click(function () {
        if ($(this).hasClass('active-title')) {
            $(this).removeClass('active-title');
            $('.pcb-content').removeClass('show-content');
        } else {
            $('.pcb-content').addClass('show-content');
            $(this).addClass('active-title')
        }
    });

    //板类型
    $('.js-layer .list').click(function () {
        // console.log();
        var value = $(this).attr('data');
        if (value === "单片") {
            $('.js-line-process').addClass('active-item');
            $('.js-delivery-box').removeClass('active-item');
            $('.js-page-request').removeClass('active-item');
        } else if (value === "按客户文件拼版出货") {
            $('.js-line-process').addClass('active-item');
            $('.js-page-request').addClass('active-item');
            $('.js-delivery-box').addClass('active-item');
        } else {
            $('.js-page-request').removeClass('active-item');
            $('.js-line-process').removeClass('active-item');
            $('.js-delivery-box').removeClass('active-item');
        }
    });

//    工艺边
    $('.js-side-param').change(function () {
        var value = $(this)[0].value;
        if (value == '无') {
            $('.js-side-size').attr('disabled', true);
        } else {
            $('.js-side-size').removeAttr('disabled');
        }
    });

//尺寸转换
    $('.js-change-box').hover(function () {
        $('.change-tips').show();
    }, function () {
        $('.change-tips').hide();
    });
    $('.js-submit').click(function () {
        $(this).parent().hide();
    });

//    板子数量
    $('.js-single').hover(function () {
        $('.board-nums').show();
    }, function () {
        $('.board-nums').hide();
    });
    $('.js-number li').click(function () {
        $('.js-quantity').val($(this).html());
        $('.board-nums').hide();
    });
    //确认按钮
    $('.confirm-btn').click(function () {
        var value = $.trim($('.other-input').val());
        if (value == '') {
            return false;
        }
        $('.js-quantity').val(value);
        $('.board-nums').hide();
        $('.other-input').val('');
    });
    //取消按钮
    $('.cancel-btn').click(function () {
        $('.other-input').val('');
        $('.board-nums').hide();
    });
//板子层数
    $('.js-close-box').click(function () {
        $('.js-open-mask').hide();
    });
    //4,6,8层板
    $('.js-boards .list').click(function () {
        var value = $(this).attr("data");
        value === "1" ? $('.js-boards-style').show() : $('.js-boards-style').hide();
        if (value === "4") {
            $('.js-open-mask').show();
            $('.getInput-box').hide();
            for (var i = 0; i < value; i++) {
                $('.getInput-box').eq(i).show();
            }
        }
        if (value === "6") {
            $('.js-open-mask').show();
            $('.getInput-box').hide();
            for (var i = 0; i < value; i++) {
                $('.getInput-box').eq(i).show();
            }
        }
        if (value === "8") {
            $('.js-open-mask').show();
            $('.getInput-box').show();
        }
        SetLayer(value);//板子联动
    });

    //板子联动
    function SetLayer(layers) {
        $(".js-thickness").find(".list").removeClass("disabled");

        if (layers == 6) {  // 6层板
            $(".js-thickness").find(".list[data='0.4']").addClass("disabled");
            $(".js-thickness").find(".list[data='0.6']").addClass("disabled");
            // 设置默认值 选择了0.4 0.6
            if ($("[name='radBoardThickness']").val() == '0.4' || $("[name='radBoardThickness']").val() == '0.6') {
                $("[name='radBoardThickness']").val('1.6');
                $(".js-thickness").find(".list[data='1.6']").addClass('active-list').siblings().removeClass('active-list');
            }
        } else if (layers == 8) { // 8层板
            $(".js-thickness").find(".list[data='0.4']").addClass("disabled");
            $(".js-thickness").find(".list[data='0.6']").addClass("disabled");
            $(".js-thickness").find(".list[data='0.8']").addClass("disabled");
            $(".js-thickness").find(".list[data='1.0']").addClass("disabled");
            if ($("[name='radBoardThickness']").val() == '0.4' || $("[name='radBoardThickness']").val() == '0.6'
                || $("[name='radBoardThickness']").val() == '0.8' || $("[name='radBoardThickness']").val() == '1.0') {
                $("[name='radBoardThickness']").val('1.6');
                $(".js-thickness").find(".list[data='1.6']").addClass('active-list').siblings().removeClass('active-list');
            }
        } else if (layers == 10) { // 10层板
            $(".js-thickness").find(".list[data='0.4']").addClass("disabled");
            $(".js-thickness").find(".list[data='0.6']").addClass("disabled");
            $(".js-thickness").find(".list[data='0.8']").addClass("disabled");
            $(".js-thickness").find(".list[data='1.0']").addClass("disabled");
            $(".js-thickness").find(".list[data='1.2']").addClass("disabled");
            if ($("[name='radBoardThickness']").val() == '0.4' || $("[name='radBoardThickness']").val() == '0.6'
                || $("[name='radBoardThickness']").val() == '0.8' || $("[name='radBoardThickness']").val() == '1.0'
                || $("[name='radBoardThickness']").val() == '1.2') {
                $("[name='radBoardThickness']").val('1.6');
                $(".js-thickness").find(".list[data='1.6']").addClass('active-list').siblings().removeClass('active-list');
            }
        }
    }


    //设计文件数
    $('.js-files-number').blur(function () {
        var $number = $(this);
        var r = /^[1-9]*[1-9][0-9]*$/i;
        var num = parseInt($number.val());
        if (num <= 0 || !(r.test($number.val()))) {
            $number.val(1);
            $number.attr('value', 1);
        } else {
            $number.attr('value', num);
        }
    });
    //减数量
    $('.js-minus').click(function () {
        var $number = $('.js-files-number');
        var num = parseInt($number.val());
        if (num <= 0) {
            return;
        }
        $number.val(--num);
        $number.attr('value', num);
    });
    //加数量
    $('.js-add').click(function () {
        var $number = $('.js-files-number');
        var num = parseInt($number.val());
        $number.val(++num);
        $number.attr('value', num);
    });

//    材料选择
    $('.js-material .list').click(function () {
        var value = $(this).attr("data");
        if (value === "铝基板1.5" || value === "铝基板2.0") {
            $('.js-mcpcb').show();
        } else {
            $('.js-mcpcb').hide();
        }
    });
//    金手指选择
    $('.js-gold-finger>.list').click(function () {
        var value = $(this).attr("data");
        value === "Yes" ? $('.js-bevel').show() : $('.js-bevel').hide();
    });
//焊盘喷镀
//     $('.js-welding-plate .list').click(function () {
//         var value = $(this).attr("data-value");
//         if (value === "1" || value === "2") {
//             $('.js-plate-tips').show();
//         } else {
//             $('.js-plate-tips').hide();
//         }
//     });

    $('.js-parameters .item').click(function () {
        $(this).toggleClass('active-mark');
    });

    //颜色选择
    $('.js-solder-down .list').click(function () {
        SetSolderMask($(this).attr("data"));
    });

// 背景色设置
    function SetSolderMask(color) {
        $('.js-silk-down').find(".list").removeClass("disabled");
        if (color == '红色' || color == '蓝色' || color == '黑色'
            || color == '紫色' || color == '哑光黑' || color == '哑光绿') {
            $('.js-silk-down').find(".list[data='黑色']").addClass("disabled");
            // 选择黑时，设置默认值
            if ($("[name='radFontColor']").val() == '黑色') {
                $("[name='radFontColor']").val('白色');
                $(".js-silk-down").find(".list[data='白色']").addClass("active-list").siblings().removeClass("active-list");
            }
        } else if (color == '白色') {
            $('.js-silk-down').find(".list[data='白色']").addClass("disabled");
            // 选择白时，设置默认值
            if ($("[name='radFontColor']").val() == '白色') {
                $("[name='radFontColor']").val('黑色');
                $(".js-silk-down").find(".list[data='黑色']").addClass("active-list").siblings().removeClass("active-list");
            }
        }
    }


//    右侧计价下单
    $('.js-reference-btn').click(function () {
        $(this).parent().hide();
        $('.js-service').hide();
    });
//    时间选择
    $('.js-time-box>li').click(function () {
        $(this).addClass('active-time').siblings('li').removeClass('active-time');
    });
//    下单按钮
    $('.js-pcb-btn').click(function () {
        $('.js-confirm-box').show();
    });
//    关闭下单遮罩层
    $('.js-close-con').click(function () {
        $('.js-confirm-box').hide();
    });
    //取消按钮
    $('.js-cancel-btn').click(function () {
        $('.js-confirm-box').hide();
    });
    //组合下单
    $('.js-order-btn').click(function () {
        var smtTop = $('.js-smt-title')[0].offsetTop;
        $('.js-confirm-box').hide();
        $('html,body').animate({scrollTop: smtTop});
    });

    //特殊工艺模块
    $('.js-special-title').click(function () {
        $(this).toggleClass('active-iconfont');
        $('.js-special-content').toggleClass('show-content');
        if ($('.js-special-content').hasClass('show-content')) {
            $('.add-flag').html("-");
        } else {
            $('.add-flag').html("+");
        }
    });
    //其它要求
    $('.js-other-element .list').click(function () {
        $(this).toggleClass('active-list');
    });
    //特殊工艺模块

    //smt模块
    $('.js-smt-title').click(function () {
        if ($(this).hasClass('active-title')) {
            $(this).removeClass('active-title');
            $('.smt-content').hide();
        } else {
            $('.smt-content').show();
            $(this).addClass('active-title')
        }
    });
    //smt模块

    //计价右侧交期选择
    $(document).on('click', '.js-delivery li', function () {
        $(this).addClass('active-option').siblings('li').removeClass('active-option');
    })
//立即报价
    $('.js-immediately').click(function () {
        $('.js-refer-tips').fadeOut();
        $('.advertising').fadeOut(function () {
            $('.js-denominated-box').show();
        });
    });
});//end function
