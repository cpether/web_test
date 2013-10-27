

window.requestAnimFrame =
window.requestAnimationFrame       ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame    ||
window.oRequestAnimationFrame      ||
window.msRequestAnimationFrame     ||
function(callback) {
    window.setTimeout(callback, 1000 / 60);
};

var canvas,
	ctx,
	text = 'Wake up, Neo...'


window.onload = function() {

	canvas = document.getElementById('main_canvas');
	ctx    = canvas.getContext('2d');

	canvas.width = canvas.clientWidth;
	canvas.height = 376;

	update();

};


var Terminal = function() {

	this.data = [];


};


function draw_curser() {

	if(Math.round((new Date()).getTime()/500) % 2 == 1) {
		ctx.fillStyle = "#329932";
		ctx.fillRect (20,20, 10, 15);
	}
};


function animate_text(text) {
	for(var i = 0; i < text.length; i++) {
		
	}

};

function update() {

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	draw_curser();

	requestAnimFrame(update);
}
