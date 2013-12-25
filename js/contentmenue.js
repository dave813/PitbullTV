$(document).ready(function() {
	
	$(".contentmenuepoint").mouseover(function() {
		$(".contentmenuepoint").css("heigth" , "70px");
	});

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//Games

	$("#contentmenuepointgames").mouseover(function() {
		$("#games").css("visibility", "visible");
	});

	$("li").mouseleave(function() {
		$("#games").css("visibility", "hidden");
	});

	//angezockt
	$("#contentmenuepointangezockt").mouseover(function() {
		$("#angezockt").css("visibility", "visible");
	});

	$("li").mouseleave(function() {
		$("#angezockt").css("visibility", "hidden");
	});
	
	//Bsp
	$("#contentmenuepointbsp").mouseover(function() {
		$("#bsp").css("visibility", "visible");
	});

	$("li").mouseleave(function() {
		$("#bsp").css("visibility", "hidden");
	});

});
