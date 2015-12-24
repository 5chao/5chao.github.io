// JavaScript Document

$(".w_radio_c1").click(function(){
	$(".w_radio_on").attr("class","w_radio_c1");
	$(this).addClass("w_radio_on");
})

$(".w_checkbox_c1").on("click",function(){
    $(this).hasClass("w_checkbox_on")? $(this).removeClass("w_checkbox_on"):$(this).addClass("w_checkbox_on");
   //或者这么写
  // $(this).toggleClass( "on_check" );
})









