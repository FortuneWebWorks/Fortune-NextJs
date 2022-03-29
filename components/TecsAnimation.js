import { useEffect, useRef } from 'react';
import style from '@/styles/Section3.module.scss';

function TecsAnimation() {
  const canvas = useRef();
  const c = useRef();
  let tecs = [];

  const paths = [
    [
      { path: '/svg/Deno.svg' },
      { path: '/svg/Angular.svg' },
      { path: '/svg/Apache.svg' },
      { path: '/svg/Docker.svg' },
    ],
    [
      { path: '/svg/Go.svg' },
      { path: '/svg/JavaScript.svg' },
      { path: '/svg/laravel.svg' },
      { path: '/svg/MongoDB.svg' },
    ],
    [
      { path: '/svg/MySQL.svg' },
      { path: '/svg/nextjs.svg' },
      { path: '/svg/Nginx.svg' },
      { path: '/svg/Postgresql.svg' },
    ],
    [
      { path: '/svg/React.svg' },
      { path: '/svg/Svelte.svg' },
      { path: '/svg/Symfony.svg' },
      { path: '/svg/Typescript.svg' },
    ],
    [{ path: '/svg/vue.svg' }],
  ];

  useEffect(() => {
    c.current = canvas.current.getContext('2d');

    canvas.current.width = innerWidth;
    canvas.current.height = innerHeight;

    window.addEventListener('resize', () => {
      canvas.current.width = innerWidth;
      canvas.current.height = innerHeight;

      // eslint-disable-next-line react-hooks/exhaustive-deps
      tecs = [];
      generator();
    });

    generator();
    animate();
  });

  class Tec {
    constructor(x, y, dx, src) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.icon = document.createElement('img');
      this.icon.src = `http://localhost:3000${src}`;
      this.opacity = 1;
    }

    generator() {
      c.current.beginPath();
      c.current.globalAlpha = this.opacity;
      c.current.drawImage(this.icon, this.x, this.y, 50, 50);
      c.current.closePath();
    }

    update() {
      this.x += this.dx;

      // Return icon if out of screen
      if (this.x > canvas.current.width) {
        this.x = -50;
      }

      // If icon get behind the text
      if (
        this.x > canvas.current.width / 2 - 800 / 2 &&
        this.x < canvas.current.width / 2 + 500 / 2
      ) {
        if (this.opacity >= 0.3) this.opacity -= 0.02;
      } else {
        if (this.opacity < 1) this.opacity += 0.02;
      }

      this.generator();
    }
  }

  const generator = () => {
    paths.forEach((path, index) => {
      const randomDx = Math.random() * 3 + 0.1;
      path.forEach((item, i) => {
        tecs.push(
          new Tec(
            10 + i * (canvas.current.width / paths[index].length),
            (canvas.current.height / paths.length) * (index + 0.4),
            randomDx,
            item.path
          )
        );
      });
      tecs[index].generator();
    });
  };

  const animate = () => {
    requestAnimationFrame(animate);

    c.current.clearRect(0, 0, canvas.current.width, canvas.current.height);
    for (let i = 0; i < tecs.length; i++) {
      tecs[i].update();
    }
  };

  return (
    <section className={style.section3}>
      <canvas id="tecs" ref={canvas}></canvas>
      <div className={style.section3_text}>
        <p>go to mooonnnnn &#128640;</p>
        <p>WITH THE MODERN WEB</p>
      </div>
    </section>
  );
}

export default TecsAnimation;
