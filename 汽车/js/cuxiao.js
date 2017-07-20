/**
 * Created by Apple on 2017/7/13.
 */
$.ajax({
    type:"get",
    url:"../data/car.json",
    async:true,
    success:function(data){
        console.log(data.cXmsg);
        var obj=data.cXmsg;
        var str=' ';
        for(var i in obj){
            str+='<div class="content_1 clear"><div class="con_zuo"><a href="#"><p class="zuo_top"><span>'+obj[i].title+'</span>'+obj[i].name+'</p></a><p class="zuo_bottom">'+obj[i].content+'<a href="#">[查看详情]</a></p></div><div class="con_you clear"><span class="kaishi">开始：2011-4-16</span><span class="jiezhi">截止：2011-5-8</span></div></div>'
        }
        $(".content_w").append(str);

    }
});