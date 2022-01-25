let pos, colors;
const moveSpeed = 0.4;
const moveScale = 800;

var dadosArray =[
									
									61.7, 21.1, 9.1, 4.5, 2.1, 1.5
									];

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	
	colors = [color("#a32035"), color("#a3a5a8"), color("#53575a"), color("#c8c8c8"), color("#3f6829"), color("#00698f"), color("#006b68"), color("#7f2854")];
	pos = [];
	for(let i = 0; i < 500; i++){
		pos.push({
			x:random(width),
			y:random(height),
			c:colors[floor(random(colors.length))]
		});
	}
}

function draw() {
	for(let i = 0; i < pos.length; i++){
		with(pos[i]){
			let angle = noise(x / moveScale, y / moveScale) * TWO_PI * moveScale;
			x += cos(angle) * moveSpeed;
			y += sin(angle) * moveSpeed;
			fill(c);
			ellipse(x, y, 2, 2);
			if(x > width || x < 0 || y > height || y < 0 || random(1) < 0.001 ){
				x = random(width);
				y = random(height);
			}
		}
	}
}

function mousePressed(){
	for(let i = 0; i < 10; i++){
		pos.push({
			x:mouseX+dadosArray,
			y:mouseY+dadosArray,
			c:colors[floor(random(colors.length))]
		});
	}
}

function mouseDragged(){
	mousePressed();
}