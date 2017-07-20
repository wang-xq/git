/**
 * Created by Apple on 2017/7/13.
 */
$.ajax({
    type:"get",
    url:"../data/car.json",
    async:true,
    success:function(data){
        console.log(data.cXdetails);
        var obj=data.cXdetails;
        var str='<div class="content_top"><h2>'+obj.title+'</h2><p>标签：特价商品&nbsp;促销时间：<span>'+obj.firstTime+'</span>至<span>'+obj.lastTime+'</span></p></div><div class="content_bottom"><img src="'+obj.src+'" /><p>'+obj.p1+'</p><p>'+obj.p2+'</p><p>'+obj.p3+'</p><p>'+obj.p4+'</p><p>'+obj.p5+'</p><p>本店的网址：<a href="#">http://www.jlsjzgy.ccoo.cn/</a></p></div>	';
        $(".content").eq(1).append(str);

    }
});