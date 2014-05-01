/*Nur zum Vorladen der Bilder (nicht erforderlich)*/
/*Nur die Pfade ändern*/
var bild1 = new Image();
bild1.src = 'play/slider/penis.jpg';
var bild2 = new Image();
bild2.src = 'play/slider/b.jpg';
var bild3 = new Image();
bild3.src = 'play/slider/penis.jpg';
var bild4 = new Image();
bild4.src = 'play/slider/penis.jpg';

var bildoben = 0;
var bildunten = 1;
var op = 1;

var images = new Array('play/slider/4.jpg', 'play/slider/b.jpg', 'play/slider/5.jpg', 'play/slider/1.jpg', 'play/slider/2.jpg', 'play/slider/3.jpg');
var lang = images.length;

function slider() {
	var rahmen1 = document.getElementById('bild1');
	var rahmen2 = document.getElementById('bild2');

	rahmen1.src = images[bildoben];
	rahmen2.src = images[bildunten];
	rahmen1.style.opacity = '1';

	bildoben++;
	bildunten++;

	if ((bildoben + 1) == lang) {
		bildunten = 0;
	}
	if (bildoben == lang && bildunten == 1) {
		bildoben = 0;
		bildunten = 1;
	}
	window.setTimeout("slidemove()",/*Zeit*/ 7000);
}

function slidemove() {
	if (op > 0) {
		op = op - 0.03;
		document.getElementById('bild1').style.opacity = op;
		window.setTimeout("slidemove()", 30);
	} else {
		op = 1;
		window.setTimeout("slider()", 0);
	}
}

