let player1Paddle;
let player2Paddle;
let ball;
let player1Score;
let player2Score;

function setup() {
  createCanvas(1920, 960);
  player1Paddle = new Paddle(26);
  player2Paddle = new Paddle(width - 56);
  ball = new Ball();
  player1Score = new Score(width / 2 - 80);
  player2Score = new Score(width / 2 + 80);
}

function draw() {
  background(40, 0, 13);
  player1Paddle.display();
  player2Paddle.display();

  if (player1Paddle.isUp) {
    player1Paddle.up();
  } else if (player1Paddle.isDown) {
    player1Paddle.down();
  }

  if (player2Paddle.isUp) {
    player2Paddle.up();
  } else if (player2Paddle.isDown) {
    player2Paddle.down();
  }

  ball.update(player1Score, player2Score);
	ball.display();

  ball.hasHitPlayer1(player1Paddle); 
  ball.hasHitPlayer2(player2Paddle);

  stroke(166, 75, 199);
  line(width/2, 0, width/2, height);

  player1Score.display();
  player2Score.display();
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		player2Paddle.isUp = true;
	} else if (keyCode == DOWN_ARROW) {
		player2Paddle.isDown = true;
	}
  if (keyCode == 87) {
		player1Paddle.isUp = true;
	} else if (keyCode == 83) {
		player1Paddle.isDown = true;
	}
}

function keyReleased() {
	if (keyCode == UP_ARROW) {
		player2Paddle.isUp = false;
	} else if (keyCode == DOWN_ARROW) {
		player2Paddle.isDown = false;
	}
  if (keyCode == 87) {
		player1Paddle.isUp = false;
	} else if (keyCode == 83) {
		player1Paddle.isDown = false;
	}
}