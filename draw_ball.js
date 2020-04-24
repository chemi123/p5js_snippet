function drawBall() {
  fill(255);
  stroke(lerpColor(color(BLACK), color(WHITE), 0.7))
  circle(280, 140, 130);
  noFill();
  for (let i = 1; i <= 50; i++) {
    stroke(lerpColor(color(BLACK), color(WHITE), 0.6 + i * 0.001));
    arc(280, 140, 130, 130 - i * 0.1, 0, PI);
  }  
  for (let i = 1; i <= 50; i++) {
    stroke(lerpColor(color(BLACK), color(WHITE), 0.65 + i * 0.0012));
    arc(280, 140, 130, 125 - i * 0.1, 0, PI);
  }
  for (let i = 1; i <= 50; i++) {
    stroke(lerpColor(color(BLACK), color(WHITE), 0.71 + i * 0.0014));
    arc(280, 140, 130, 120 - i * 0.1, 0, PI);
  }
  for (let i = 1; i <= 50; i++) {
    stroke(lerpColor(color(BLACK), color(WHITE), 0.78 + i * 0.0016));
    arc(280, 140, 130, 115 - i * 0.1, 0, PI);
  }
  stroke(lerpColor(color(BLACK), color(WHITE), 0.88));
  for (let i = 1; i <= 100; i++) {
    arc(280, 140, 130, 110 - i * 0.3, 0, PI);
  }
  for (let i = 1; i <= 50; i++) {
    stroke(lerpColor(color(BLACK), color(WHITE), 0.88 + i * 0.003));
    arc(280, 140, 130, 80 - i * 0.3, 0, PI);
  }
  stroke(lerpColor(color(BLACK), color(WHITE), 0.7))
  circle(280, 140, 130);
}
