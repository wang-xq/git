$.ajax({
    type: "GET",
    url: "../data/car.json",
    // data: {username: $("#username").val(), content: $("#content").val()},
    dataType: "json",
    success: function (data) {
        console.log(data)

        var obj = data.news;
        var str = ""
        for (var i = 0; i < obj.length; i++) {
            str+="<li><span>"+obj[i].content+"</span><span>"+obj[i].time+"</span></li>"
        }
        $("#news_ul").html(str)

    }
});