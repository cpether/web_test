

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
	x, y,
	start_time,
	text = 'Wake up, Neo...',
	text_pos = 0;


window.onload = function() {

	canvas = document.getElementById('main_canvas');
	ctx    = canvas.getContext('2d');

	canvas.width = canvas.clientWidth;
	canvas.height = 376;

	start_time = (new Date()).getTime();
	x = 20;
	start_x = x;
	y = 20;

	update();

};



function draw_curser() {

	if(Math.round((new Date()).getTime()/400) % 2 == 1) {
		ctx.fillStyle = "#329932";
		ctx.fillRect (x,y, 9, 17);
	}
};


function animate_text(delay) {

	var time_now = (new Date()).getTime();
	if(((time_now - start_time) - delay) > (text_pos * 300)) {
		if(text_pos < text.length) {
			text_pos++;
		}
	}

	ctx.font = '13pt Courier';
	ctx.textBaseline = "top";
	ctx.fillStyle = "#329932";
	ctx.fillText(text.substr(0,text_pos),start_x,y)
	
	x = (start_x + ctx.measureText(text.substr(0,text_pos)).width);
};



function update() {

	var time_now = (new Date()).getTime();
	var page_time = time_now - start_time;

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	draw_curser();

	if(page_time > 2000 && page_time < 10000) {
		animate_text(2000);
	}
	if(page_time > 10000 && page_time < 11000) {
		x = start_x;
		text_pos = 0;
		text = "Red or blue pill?";
	}
	if(page_time > 11000 && page_time < 20000) {
		animate_text(11000);
	}
	if(page_time > 20000) {
		x = start_x;
		text_pos = 0;
	}


	requestAnimFrame(update);
}


