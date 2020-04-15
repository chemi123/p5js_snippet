function drawHeartTop(x, y, size) {
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

function drawHeartCenter(x, y, size) {
  beginShape();
  vertex(x, y - size / 2);
  bezierVertex(x + size / 2, y - size,
               x + size * 7 / 6, y - size / 6,
               x, y + size / 2);
  bezierVertex(x - size * 7 / 6, y - size / 6,
               x - size / 2, y - size,
               x, y - size / 2);
  endShape();
}
