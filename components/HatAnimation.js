/** @type {HTMLCanvasElement} */
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import section1 from '@/styles/Section1.module.scss';

function HatAnimation() {
  const canvas = useRef();
  const container = useRef();
  let containerInfo = useRef();
  let c = useRef();
  let interval = null;
  let animation = null;
  let stars = [];

  useEffect(() => {
    containerInfo.current = container.current.getBoundingClientRect();
    canvas.current.width = containerInfo.current.width;
    canvas.current.height = containerInfo.current.height;
    c.current = canvas.current.getContext('2d');

    let interval = setInterval(() => {
      cancelAnimationFrame(animation);
      startBuilding('auto');
    }, 1000);

    window.addEventListener('focus', () => {
      interval = setInterval(() => {
        cancelAnimationFrame(animation);
        startBuilding('auto');
      }, 1000);
    });

    window.addEventListener('blur', () => {
      console.log('Fuck');
      clearInterval(interval);
      stars = [];
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      stars = [];
    };
  }, []);

  class Star {
    constructor(x, y, dx, dy, size, fadeTime, id) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.size = size;
      this.fadeTime = Number(fadeTime).toFixed(4);
      this.opacity = 1;
      this.id = id;
    }

    createStar() {
      c.current.beginPath();
      c.current.font = `${this.size}px verdana, sans-serif`;
      c.current.globalAlpha = this.opacity >= 0 ? this.opacity : 0;
      c.current.fillText('✨', this.x, this.y);
      c.current.closePath();
    }

    update(index) {
      this.x += this.dx;
      this.y -= this.dy;
      if (this.opacity >= 0) {
        this.opacity -= this.fadeTime;
      } else {
        delete stars[index];
      }

      this.createStar(index);
    }
  }

  const startBuilding = (mode) => {
    if (mode === 'auto') {
      for (let i = 0; i < 1; i++) {
        const size = Math.random() * 30 + 5;
        const dx = (Math.random() - 0.5) * 0.5;
        const dy = Math.random() * 0.5;
        const min = 0.01,
          max = 0.001,
          fadeTime = Math.random() * (max - min) + min;
        const x = canvas.current.width / 2 - 20;
        const y = canvas.current.height - 80;
        stars.push(new Star(x, y, dx, dy, size, fadeTime.toFixed(3), i));
      }

      const animate = () => {
        animation = requestAnimationFrame(animate);

        c.current.clearRect(0, 0, innerWidth, innerHeight);
        stars.forEach((item, index) => {
          item.update(index);
        });
      };

      animate();
    } else {
      for (let i = 0; i < 100; i++) {
        const size = Math.random() * 30 + 5;
        const dx = (Math.random() - 0.5) * 2.5;
        const dy = Math.random() * 5 + 1;

        const min = 0.01,
          max = 0.02,
          fadeTime = Math.random() * (max - min) + min;

        const x = canvas.current.width / 2 - 20;
        const y = canvas.current.height - 80;
        stars.push(new Star(x, y, dx, dy, size, fadeTime.toFixed(3), i));
      }

      const animate = () => {
        animation = requestAnimationFrame(animate);

        c.current.clearRect(0, 0, canvas.current.width, canvas.current.height);
        stars.forEach((item, index) => {
          item.update(index);
        });
      };

      animate();
    }
  };

  const onClick = (e) => {
    if (e.target.classList.contains('hat')) {
      c.current.clearRect(0, 0, canvas.current.width, canvas.current.height);
      cancelAnimationFrame(animation);

      startBuilding();
    }
  };

  return (
    <div
      className={`${section1.section1_icon} ${section1.container}`}
      ref={container}
      onClick={onClick}
    >
      <div className={`${section1.hat1} ${section1.hat}`}>
        <Image
          src={'http://localhost:3000/hat/chapue.svg'}
          layout="fill"
          alt=""
          className="hat"
        />
      </div>
      <div className={`${section1.hat2} ${section1.hat}`}>
        <Image
          src={'http://localhost:3000/hat/top-layer.svg'}
          layout="fill"
          alt=""
          className="hat"
        />
      </div>
      <div className={`${section1.hat3} ${section1.hat}`}>
        <Image
          src={'http://localhost:3000/hat/hat.svg'}
          layout="fill"
          alt=""
          className="hat"
        />
      </div>
      <canvas id="canvas" ref={canvas}></canvas>
    </div>
  );
}

export default HatAnimation;
