$(function(){
    $("#fullpage").fullpage({
        resize:true,
        navigation:true,
        anchors:['page1','page2','page3','page4','page5','page6','page7','page8','page9','page10','page11'],
        navigationTooltips:['首页','视觉','交互','皮肤','功能','待办邮件','联系人邮箱','科技','连接易信','马上体验'],
        loopBottom:true
    });
    var clientWidth=$(window).width();
    //text
    var textWidth=$(".sub-text").width();
    $(".sub-text").css("left",(clientWidth-textWidth)/2+"px");
    //title
    var titleWidth=$(".title").width();
    $(".title").css("left",(clientWidth-titleWidth)/2+"px");
    $(".section:nth-of-type(9) .title").css("left",(clientWidth-titleWidth)/2-110+"px");
    //logo
    var logoWidth=$(".logo").width();
    $(".logo").css("left",(clientWidth-logoWidth)/2-90+"px");
    $(".section:nth-of-type(1) .logo").css("left",(clientWidth-logoWidth)/2+"px");
    $(window).resize(function(){
        var clientWidth=$(window).width();
        $(".sub-text").css("left",(clientWidth-textWidth)/2+"px");
        $(".title").css("left",(clientWidth-titleWidth)/2+"px");
        $(".section:nth-of-type(9) .title").css("left",(clientWidth-titleWidth)/2-110+"px");
        $(".logo").css("left",(clientWidth-logoWidth)/2+"px");
        $(".section:nth-of-type(1) .logo").css("left",(clientWidth-logoWidth)/2+"px");
    })

})