$.ajax({
	type:"get",
	url:"data/car.json",
	async:true,
	success:function(data){
		console.log(data);
		var obj=data.index;
		console.log(obj);
		var str='<h2 class="content_left_top"><span><img src="img/car.png"/><strong>'+obj.about.heading+'</strong></span><span>+MORE</span></h2><p class="content_left_bottom">'+obj.about.main+'</p>'
		$(".content_left").append(str)
		str='';
		str='<h2 class="content_right_top"><span><img src="img/car.png"/><strong>'+obj.news.heading+'</strong></span><span>+MORE</span></h2><ul class="content_right_bottom">'
		for(var i=0;i<obj.news.xwfl.length;i++){
			str+='<li><a href="#">'+obj.news.xwfl[i].conent+'</a><span>2011-03-12</span></li>'
			
		}
		str+="</ul>";
		console.log(str)
		$(".content_right").append(str)
		str='';
		for(var i=0;i<obj.footer.length;i++){
			str+='<div><img src="'+obj.footer[i].footerOne+'"/></div>'
		}
		str+=str
		$(".pic").append(str)
	}
});
window.addEventListener('load',function(){
	var width=$(".pic").width();
	  $(".pic").width($(".pic").width()*2+30*7+"px")
	  var timer=0;
	  $(".but_l").click(function(){
	  	if(timer<-width){
	  		timer=0;
	  	}
	  	else{
	  		timer-=$(".pic>div").width()
	  
	  	$(".pic").css({"transform":"translateX("+timer+"px"+")"})
	  	}
	  	
	  })
	  $(".but_r").click(function(){
	  	timer+=$(".pic>div").width()
	  	if(timer>0){
	  		timer=-width;
	  		$(".pic").css({"transform":"translateX("+timer+"px"+")"})
	  	}
	  	
	  	else{
	  		$(".pic").css({"transform":"translateX("+timer+"px"+")"})
	  	}
	  	
	  })
},true)