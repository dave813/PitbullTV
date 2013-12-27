$(document).ready(function() {

	$(".contentmenuepoint").mouseover(function() {
		$(this).addClass("contentmenuepointhover");
		$(this).removeClass("contentmenuepoint");
	});
	$(".contentmenuepointli").mouseleave(function() {
		$(".contentmenuepointhover").addClass("contentmenuepoint");
		$(".contentmenuepointhover").removeClass("contentmenuepointhover");
		
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
