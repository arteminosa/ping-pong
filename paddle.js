class Paddle {
	constructor(x) {
		this.x = x;
		this.y = height / 2; // height is height of display window
		this.height = 135;
		this.width = 30;

        this.isUp = false;
		this.isDown = false;
	}
	
	display() {
		fill(166, 75, 199);
		rect(this.x, this.y, this.width, this.height);
	}
    up() {
		if (this.y > 0) {
			this.y -= 6;
		}
	}
	
	down() {
		if (this.y < height - this.height) {
			this.y += 6;	
		}
	}
}