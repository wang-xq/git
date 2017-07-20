/**
 * Created by Apple on 2017/7/14.
 */
$.ajax({
    type:"get",
    url:"../data/car.json",
    async:true,
    success:function(e){
//				console.log(res)
        str=""
        for(var i in e.information){
//					console.log(e.information[i].title)
            str+="<li><a href='#'>"+e.information[i].title+"<span>"+e.information[i].time+"</span></a></li>"
        }
        $("#scdt").html(str);
    }
});