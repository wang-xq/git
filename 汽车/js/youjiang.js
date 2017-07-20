/**
 * Created by Apple on 2017/7/13.
 */
$.ajax({
    type: "get",
    url: "../data/car.json",
    async: true,
    success: function (data) {
        console.log(data.bonus[0])
        var obj = data.bonus[0];
        var str = ""
        for (var i = 0; i < obj.information.length; i++) {
            str += '<div class="clearfix"><div class="content_left"><img src="' + obj.commodityPic + '" class="cont_img"/></div><div class="content_midden"><h3>' + obj.information[i].title + '</h3><p class="midden_price">奖品价值：<span>' + obj.information[i].money + '</span>元</p><p class="midden_num">共：<span>' + obj.information[i].sum + '</span>分 剩<span>' + obj.information[i].residue + '</span>份</p><p class="midden_date">开始时间：<mark>' + obj.information[i].star + '</mark>截止时间：<mark>' + obj.information[i].over + '</mark></p></div><div class="content_right"><p>参加人数:<span>' + obj.information[i].people + '</span></p><input type="button" value="' + obj.information[i].huodong + '" /></div></div>'
        }

        $(".jiang_main").append(str)
        $(".jiang_main>div").eq(0).addClass("jiang_top").find(".content_left").append('<img src="' + obj.information[0].new + '" class="new"/>')
        $(".jiang_main>div").eq(1).addClass("jiang_bottom")
        $(".jiang_main>div").eq(0).find(".content_right>input").addClass("right_state")
        $(".jiang_main>div").eq(1).find(".content_right>input").addClass("right_end")

    }

});