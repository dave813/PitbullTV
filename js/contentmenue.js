$(document).ready(function() {

//Games

	$("#contentmenuepointgames").mouseover(function() {
		$("#games").css("visibility", "visible");
	});

	$(".d").mouseout(function() {
		$("#games").css("visibility", "hidden");
	});

	//angezockt
	$("#contentmenuepointangezockt").mouseover(function() {
		$("#angezockt").css("visibility", "visible");
	});

	$("#contentmenuepointangezockt").mouseout(function() {
		$("#angezockt").css("visibility", "hidden");
	});
	
	//Bsp
	$("#contentmenuepointbsp").mouseover(function() {
		$("#bsp").css("visibility", "visible");
	});

	$("#contentmenuepointbsp").mouseout(function() {
		$("#bsp").css("visibility", "hidden");
	});

});
