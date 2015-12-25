// JavaScript Document

$(".w_radio_c1").click(function(){
	$(".w_radio_on").attr("class","w_radio_c1");
	$(this).addClass("w_radio_on");
})

$(".w_checkbox_c1").on("click",function(){
    $(this).hasClass("w_checkbox_on")? $(this).removeClass("w_checkbox_on"):$(this).addClass("w_checkbox_on");
})

//悬浮菜单
$(".w_menuFloat").click(function(){
	$(".w_menuFloat_icon0").addClass("w_rotate360");
})
$(".w_menuFloat_icon0").click(function(){      
    $(this).toggleClass("w_rotate360");               
    $(this).siblings().removeClass("w_rotate360");
})

$(".w_menuFloat").click(function(){
	$(".w_MF_bgc1").toggleClass("w_menuFloat_move1");
})

$(".w_menuFloat").click(function(){
	$(".w_MF_bgc2").toggleClass("w_menuFloat_move2");
})

$(".w_menuFloat").click(function(){
	$(".w_MF_bgc3").toggleClass("w_menuFloat_move3");
})













