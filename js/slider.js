$(document).ready(function() {
	var timer1 = $.timer(function() {
		$(".baum").animate({
			opacity : "0"
		}, 1000);
		$(".haus").animate({
			opacity : "1"
		}, 1000);
	});
	var timer2 = $.timer(function() {
		$(".haus").animate({
			opacity : "0"
		}, 1000);
		$(".schni").animate({
			opacity : "1"
		}, 1000);
	});
	var timer3 = $.timer(function() {
		$(".schni").animate({
			opacity : "0"
		}, 1000);
		$(".pit").animate({
			opacity : "1"
		}, 1000);
	});
	var timer4 = $.timer(function() {
		$(".pit").animate({
			opacity : "0"
		}, 1000);
		$(".dave").animate({
			opacity : "1"
		}, 1000);
	});
	var timer5 = $.timer(function() {
		$(".dave").animate({
			opacity : "0"
		}, 1000);
		$(".baum").animate({
			opacity : "1"
		}, 1000);
	});

	timer1.set({
		time : 1000,
		autostart : true
	});
	timer2.set({
		time : 2000,
		autostart : true
	});
	timer3.set({
		time : 3000,
		autostart : true
	});
	timer4.set({
		time : 4000,
		autostart : true
	});
	timer5.set({
		time : 5000,
		autostart : true
	});
});
