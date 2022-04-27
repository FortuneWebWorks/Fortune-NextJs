/**@type {HTMLCanvasElement} */

class Exploder {
  constructor(canvas, exploders, x, y, dx, dy, opacity) {
    this.canvas = canvas;
    this.c = canvas.getContext('2d');
    this.exploders = exploders;
    this.fire = false;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.opacity = opacity;
  }

  set setFire(isFire) {
    this.fire = isFire;
  }

  draw() {
    // this.c.clearRect(0, 0, canvas.current.width, canvas.current.height);
    if (this.opacity <= 0) {
      this.exploders.splice(this.exploders.indexOf(this), 1);
      this.exploders.length < 1 ? this.canvas.remove() : '';
    } else {
      this.c.globalAlpha = this.opacity;
      this.c.beginPath();
      this.c.font = '14px serif';
      this.c.fillText('👋', this.x, this.y);
      this.c.closePath();
    }
  }

  update() {
    if (this.fire) {
      this.x += this.dx;
      this.y += this.dy;
      this.opacity -= 0.008;

      this.draw();
    }
  }
}

export default Exploder;
