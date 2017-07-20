/**
 * Created by Apple on 2017/7/13.
 */
var oSmall = document.querySelectorAll("small")
var oBig = document.querySelectorAll("bigPic")
var oSpan = document.querySelectorAll("head")
var oImg = oBig.firstElementChild

/*oSmall[0].onmouseover(function () {
    oBig.style.display = "block"
    console.log("bbbbbbbbbbb")

})*/
oSmall.onmouseover=function () {
    console.log("1111111111111")
}
oSmall.onmouseout=function () {
    console.log("aaaaaaaaaaaaaaa")
}

oSmall.onmousemove = function (ev) {
    var ev = ev || event;
    var l = ev.clientX - oSpan.offsetWidth / 2;
    var t = ev.clientY - oSpan.offsetHeight / 2;

    if (l <= 0) l = 0;
    if (l >= oSmall.offsetWidth - oSpan.offsetWidth) l = oSmall.offsetWidth - oSpan.offsetWidth;
    if (t <= 0) t = 0;
    if (t >= oSmall.offsetHeight - oSpan.offsetHeight) t = oSmall.offsetHeight - oSpan.offsetHeight;

    oSpan.style.left = l + "px";
    oSpan.style.top = t + "px";

    var lf = (oImg.offsetWidth - oBig.offsetWidth) / (oSmall.offsetWidth - oSpan.offsetWidth);
    var tp = (oImg.offsetHeight - oBig.offsetHeight) / (oSmall.offsetHeight - oSpan.offsetHeight);
    oImg.style.left = -lf * l + "px"
    oImg.style.top = -tp * t + "px"

}