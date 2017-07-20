/**
 * Created by Apple on 2017/7/13.
 */

$.ajax({
    type: "GET",
    url: "../data/car.json",
    // data: {username: $("#username").val(), content: $("#content").val()},
    dataType: "json",
    success: function (data) {
        var comodityPic = data.show.comodityPic;
        var information = data.show.details;
        var banner = data.show.banner;
        var informationTxt = ""
        var commoditySmall = "", commodityBig = "", informationTxt = "", com_banner = "";
        for (var i = 0; i < comodityPic.length; i++) {
            commodityBig += "<li><img src='" + comodityPic[i] + "' alt=''></li>";
            commoditySmall += "<li><img src='" + comodityPic[i] + "' alt=''></li>";
            $(".commoditySmall").html(commoditySmall);
            $(".commodityBig ul").html(commodityBig);
            $(".commodityBig li").eq(0).addClass("small")
            $(".bigPic").html("<img src='" + comodityPic[0] + "' alt=''>")

            $(".commoditySmall li").click(function () {
                var index = $(this).index();
                console.log(index)
                $(".commodityBig li").css({"display": "none"});
                $(".commodityBig li").eq(index).css({"display": "block"});
            })


        }

        for (var i = 0; i < information.length; i++) {
            informationTxt += "<li>" + information[i].title + "<i>" + information[i].content + "</i>" + information[i].txt + "</li>";
            if (i == information.length - 1) {
                informationTxt += "<li> <input type='button' value=''></li>"
            }

            $(".information_ul").html(informationTxt)
        }

        for (var i = 0; i < banner.length; i++) {
            com_banner += "<img src='" + banner[i] + "' alt=''>"
            $(".com_banner").html(com_banner)
        }


        //    ···················
        $(".ct_lf_btn1").click(function () {
//    btn1_active
            $(".ct_lf_btn1").removeClass("btn1_active");
            var index = $(this).index();
            console.log(index)
            $(".ct_lf_btn1").eq(index).addClass("btn1_active");
        })


    }
});

