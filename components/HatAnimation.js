/** @type {HTMLCanvasElement} */
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import style from '@/styles/Hat.module.scss';
import Router from 'next/router';

function HatAnimation() {
  const canvas = useRef();
  const container = useRef();
  let containerInfo = useRef();
  let c = useRef();
  let interval = null;
  let animation = null;
  let stars = [];
  const limit = 70;

  Router.events.on('routeChangeStart', () => {
    stars = [];
    cancelAnimationFrame(animation);
    clearInterval(interval);
    return;
  });

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
      clearInterval(interval);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      stars = [];
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      stars = [];

      clearInterval(interval);
      cancelAnimationFrame(animation);
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
      if (false) {
        c.current.fillText('✨', this.x, this.y);
      } else {
        let img = document.getElementById('sparks');
        c.current.drawImage(img, this.x, this.y, this.size, this.size);
      }
      c.current.closePath();
    }

    update(index) {
      this.x += this.dx;
      this.y -= this.dy;
      if (this.opacity >= 0) {
        this.opacity -= this.fadeTime;
      } else {
        stars = stars.filter((item) => item !== this);
      }

      this.createStar(index);
    }
  }

  const startBuilding = (mode) => {
    if (mode === 'auto') {
      for (let i = 0; i < 3; i++) {
        const size = Math.random() * 20 + 5;
        const dx = (Math.random() - 0.5) * 0.5;
        const dy = Math.random() * 0.5;
        const min = 0.01,
          max = 0.001,
          fadeTime = Math.random() * (max - min) + min;
        const x = canvas.current.width / 2 - 10;
        const y = canvas.current.height;
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
      for (let i = 0; i < 50; i++) {
        const size = Math.random() * 20 + 5;
        const dx = (Math.random() - 0.5) * 2.5;
        const dy = Math.random() * 5 + 1;

        const min = 0.01,
          max = 0.02,
          fadeTime = Math.random() * (max - min) + min;

        const x = canvas.current.width / 2 - 10;
        const y = canvas.current.height;
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
      if (stars.length < limit) {
        c.current.clearRect(0, 0, canvas.current.width, canvas.current.height);
        cancelAnimationFrame(animation);

        startBuilding();
      }
    }
  };

  return (
    <div className={style.container} ref={container} onClick={onClick}>
      <div className={style.hat1}>
        <Image
          src={'http://localhost:3000/hat/chapue.svg'}
          layout="fill"
          alt=""
          className="hat"
        />
      </div>
      <div className={style.hat2}>
        <Image
          src={'http://localhost:3000/hat/top-layer.svg'}
          layout="fill"
          alt=""
          className="hat"
        />
      </div>
      <div className={style.hat3}>
        <Image
          src={'http://localhost:3000/hat/hat.svg'}
          layout="fill"
          alt=""
          className="hat"
        />
      </div>
      <canvas id="canvas" ref={canvas}></canvas>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="http://localhost:3000/sparkles.svg"
        alt="d"
        id="sparks"
        style={{ display: 'none' }}
      />
    </div>
  );
}

export default HatAnimation;
