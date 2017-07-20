/**
 * Created by Apple on 2017/7/13.
 */
$.ajax({
    type:"get",
    url:"../data/car.json",
    async:true,
    success:function(data){
        console.log(data.coupon);
        var obj=data.coupon;
        var str="";
        for(var i=0;i<obj.length;i++){
            str+='<div class="clearfix"><div class="coupon_tl"><img src="'+obj[i].car+'" alt="" /></div><div class="coupon_tr"><h5>'+obj[i].heading+'</h5><p>立即节省：<span>'+obj[i].jiesheng+'元</span></p><p>还有<span>'+obj[i].tianshu+'天</span>结束</p><p>'+obj[i].wenzi+'</p><div><input type="button"  value="立即打印"/><input type="button"value="免费手机下载" /></div></div></div>'
        }
        $(".coupon_main").append(str)
        $(".coupon_main>div").eq(0).addClass("coupon_top");
        $(".coupon_main>div").eq(1).addClass("coupon_bottom");
        $(".coupon_top .coupon_tl").append("<span class='quan'>凭券消费</span>")
    }

});