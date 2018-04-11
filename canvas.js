var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var col = document.getElementById('color');

var pal1 = document.getElementById('pal1');
var pal2 = document.getElementById('pal2');
var maxcol = 12
var ncol = 1;

var ancho = canvas.width / maxcol;
var palette = {
	colors: []
}

pal2.addEventListener('click', rectAdd);

function rectAdd() {
	if (ncol <= maxcol) {
		palette.colors[ncol - 1] = color.value;
		ctx.fillStyle = palette.colors[ncol - 1];
		ctx.fillRect(ancho * (ncol - 1), 0, ancho, canvas.height);

		ncol++;
	} else {
		alert("El limite de colores es de " + maxcol)
	}
}

