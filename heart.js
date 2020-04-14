function heartWithColor(x, y, color) {
  beginShape();
  vertex(x, y);
  fill(color[0], color[1], color[2]);
  bezierVertex(x + 30, y - 30, x + 70, y + 20, x, y + 60);
  bezierVertex(x - 70, y + 20, x - 30, y - 30, x, y);
  endShape();
}

function heartWithSize(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x + size / 2, y - size / 2,
               x + size * 7 / 6, y + size / 3,
               x, y + size);
  bezierVertex(x - size * 7 / 6, y + size / 3,
               x - size / 2, y - size / 2,
               x, y);
  endShape();
}

function heart(x, y) {
  beginShape();
  vertex(x, y);
  bezierVertex(x + 30, y - 30, x + 70, y + 20, x, y + 60);
  bezierVertex(x - 70, y + 20, x - 30, y - 30, x, y);
  endShape();
}
