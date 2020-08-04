var topButton=document.querySelector(".top-right");
var one=document.querySelector(".one");
var two=document.querySelector(".two");
var closes=document.querySelector(".close");


topButton.onmouseover=function(){
    
    one.style.transform="rotate(30deg)";
    one.style.transformOrigin="right center";

    two.style.transform="rotate(-30deg)";
    two.style.transformOrigin="right center"
}
topButton.onmouseout=function(){
    one.style.transform="none";
    one.style.transformOrigin="right center";

    two.style.transform="none"
    two.style.transformOrigin="right center"
}
topButton.onclick=function(){
    $(".navigationWeb").animate({right:0+"px"},500)
}
closes.onclick=function(){
    $(".navigationWeb").animate({right:-400+"px"},500)
}
//博客侧边栏
var title=document.querySelectorAll(".center-left1");
title[0].style.display="block";
$(".title2-text").click(function(){
    var x=$(".title2-text").index(this);
    var lenght=$(".title2-text").length;
    console.log(lenght)

      $(".center-left1").css({
            display:"none"
        })  
    title[x].style.display="block";
    
})