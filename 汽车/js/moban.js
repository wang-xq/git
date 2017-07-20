/**
 * Created by Apple on 2017/7/13.
 */
$(".ct_left li").click(function () {
    var index = $(this).index();
    $(".ct_lf_btn1").removeClass("color")
    $(".ct_lf_btn1").eq(index).addClass("color")
    $(".ct_right_1").css({"display": "none"});
    $(".ct_right_1").eq(index).css({"display": "block"});
})

$(".clearfix li").click(function () {
    var indexs = $(this).index();
    if (indexs <= 4 && indexs >= 0) {
        $(".ct_lf_btn1").removeClass("color")
        $(".ct_lf_btn1").eq(indexs - 1).addClass("color")
        $(".ct_right_1").css({"display": "none"});
        $(".ct_right_1").eq(indexs - 1).css({"display": "block"});
    } else if (indexs > 4 && indexs < 7) {
        $(".ct_lf_btn1").removeClass("color")
        $(".ct_lf_btn1").eq(indexs - 2).addClass("color")
        $(".ct_right_1").css({"display": "none"});
        $(".ct_right_1").eq(indexs - 2).css({"display": "block"});
    } else if (indexs >= 7) {
        $(".ct_lf_btn1").removeClass("color")
        $(".ct_lf_btn1").eq(indexs - 1).addClass("color")
        $(".ct_right_1").css({"display": "none"});
        $(".ct_right_1").eq(indexs - 1).css({"display": "block"});
    }
})