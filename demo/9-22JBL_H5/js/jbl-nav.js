// JavaScript Document
//底部导航获得焦点时
$(document).ready(function(){
  $(".w-goHome").click(function(){
   	$(".w-nbHome").addClass("w-nbHome-f");
	$(".w-nbShop").removeClass("w-nbShop-f");
	$(".w-nbService").removeClass("w-nbService-f");
	$(".w-nbCar").removeClass("w-nbCar-f");
	$(".w-nbMy").removeClass("w-nbMy-f");
	$(".w-goHome").addClass("w-nb-color-f");
	$(".w-goShop").removeClass("w-nb-color-f");
	$(".w-goService").removeClass("w-nb-color-f");
	$(".w-goCar").removeClass("w-nb-color-f");
	$(".w-goMy").removeClass("w-nb-color-f");	
  });
  
  $(".w-goShop").click(function(){
    $(".w-nbShop").addClass("w-nbShop-f");
   	$(".w-nbHome").removeClass("w-nbHome-f");
	$(".w-nbService").removeClass("w-nbService-f");
	$(".w-nbCar").removeClass("w-nbCar-f");
	$(".w-nbMy").removeClass("w-nbMy-f");
	    $(".w-goShop").addClass("w-nb-color-f");
   	$(".w-goHome").removeClass("w-nb-color-f");
	$(".w-goService").removeClass("w-nb-color-f");
	$(".w-goCar").removeClass("w-nb-color-f");
	$(".w-goMy").removeClass("w-nb-color-f");	
  });
  
  $(".w-goService").click(function(){
    $(".w-nbService").addClass("w-nbService-f");
    $(".w-nbShop").removeClass("w-nbShop-f");
   	$(".w-nbHome").removeClass("w-nbHome-f");
	$(".w-nbCar").removeClass("w-nbCar-f");
	$(".w-nbMy").removeClass("w-nbMy-f");
	    $(".w-goService").addClass("w-nb-color-f");
    $(".w-goShop").removeClass("w-nb-color-f");
   	$(".w-goHome").removeClass("w-nb-color-f");
	$(".w-goCar").removeClass("w-nb-color-f");
	$(".w-goMy").removeClass("w-nb-color-f");	
	
  });  
    
  $(".w-goCar").click(function(){
    $(".w-nbCar").addClass("w-nbCar-f");
    $(".w-nbService").removeClass("w-nbService-f");
    $(".w-nbShop").removeClass("w-nbShop-f");
   	$(".w-nbHome").removeClass("w-nbHome-f");
	$(".w-nbMy").removeClass("w-nbMy-f");	
	    $(".w-goCar").addClass("w-nb-color-f");
    $(".w-goService").removeClass("w-nb-color-f");
    $(".w-goShop").removeClass("w-nb-color-f");
   	$(".w-goHome").removeClass("w-nb-color-f");
	$(".w-goMy").removeClass("w-nb-color-f");
  });  
  
  $(".w-goMy").click(function(){
    $(".w-nbMy").addClass("w-nbMy-f");
    $(".w-nbCar").removeClass("w-nbCar-f");
    $(".w-nbService").removeClass("w-nbService-f");
    $(".w-nbShop").removeClass("w-nbShop-f");
   	$(".w-nbHome").removeClass("w-nbHome-f");
	    $(".w-goMy").addClass("w-nb-color-f");
    $(".w-goCar").removeClass("w-nb-color-f");
    $(".w-goService").removeClass("w-nb-color-f");
    $(".w-goShop").removeClass("w-nb-color-f");
   	$(".w-goHome").removeClass("w-nb-color-f");		
  });  
  
  
  
  
  
});