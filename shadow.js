for (let i = 0; i <= 30; i++) {
  stroke(lerpColor(color(WHITE), color(GRAY), 0.3 + i * 0.05))
  ellipse(280, 260, 100 - i * 2, 30 - i);
}
