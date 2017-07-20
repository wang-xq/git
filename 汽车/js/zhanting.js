/**
 * Created by Apple on 2017/7/13.
 */
$.ajax({
    type:"get",
    url:"../data/car.json",
    async:true,
    success:function(data){
        console.log(data.carShow);
        var obj=data.carShow;
        var str=' ';
        for(var i in obj){
            str+='<li class="clear"><img src="'+obj[i].src+'"/><p>'+obj[i].name+'</p></li>'}
        $(".zhangt_bottom ul").append(str);
    }
});