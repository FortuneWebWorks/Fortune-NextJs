import { useEffect, useRef } from 'react';
import style from '@/styles/Section3.module.scss';
import Router from 'next/router';
import Svg from '@/svg/Angular.svg';

function TecsAnimation() {
  const canvas = useRef();
  const c = useRef();
  const animation = useRef();
  let tecs = [];

  const paths = [
    [
      { path: '../svg/Deno.svg' },
      { path: '../svg/Angular.svg' },
      { path: '../svg/Apache.svg' },
      { path: '../svg/Docker.svg' },
    ],
    [
      { path: '../svg/Go.svg' },
      { path: '../svg/JavaScript.svg' },
      { path: '../svg/laravel.svg' },
      { path: '../svg/MongoDB.svg' },
    ],
    [
      { path: '../svg/MySQL.svg' },
      { path: '../svg/nextjs.svg' },
      { path: '../svg/Nginx.svg' },
      { path: '../svg/Postgresql.svg' },
    ],
    [
      { path: '../svg/React.svg' },
      { path: '../svg/Svelte.svg' },
      { path: '../svg/Symfony.svg' },
      { path: '../svg/Typescript.svg' },
      { path: '../svg/vue.svg' },
    ],
    [
      { path: '../svg/inertia.svg' },
      { path: '../svg/rust.svg' },
      { path: '../svg/Web3.svg' },
      { path: '../svg/solidity.svg' },
    ],
  ];

  Router.events.on('routeChangeStart', () => {
    cancelAnimationFrame(animation.current);
  });

  useEffect(() => {
    canvas.current = document.getElementById('tecs');

    c.current = canvas.current.getContext('2d');

    canvas.current.width = innerWidth;
    canvas.current.height = innerHeight;

    const onResize = () => {
      canvas.current.width = innerWidth;
      canvas.current.height = innerHeight;

      // eslint-disable-next-line react-hooks/exhaustive-deps
      tecs = [];
      generator();
    };

    window.addEventListener('resize', onResize);

    generator();
    animate();

    return () => {
      cancelAnimationFrame(animation.current);

      window.removeEventListener('resize', onResize);
    };
  });

  class Tec {
    constructor(x, y, dx, src) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.icon = document.createElement('img');
      this.icon.src = src;
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
      const text = document.getElementById('text').getBoundingClientRect();

      if (
        this.y < text.top + text.height + 100 &&
        this.y > text.top - 100 &&
        this.x > text.left - 25 &&
        this.x < text.left + text.width - 25
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
    animation.current = requestAnimationFrame(animate);

    c.current.clearRect(0, 0, canvas.current.width, canvas.current.height);
    for (let i = 0; i < tecs.length; i++) {
      tecs[i].update();
    }
  };

  return (
    <section className={style.section3}>
      <canvas id="tecs" ref={canvas}></canvas>
      <div className={style.section3_text}>
        <p id="text">
          It isn’t <span style={{ color: 'coral' }}>sorcery</span>.<br /> It’s
          good web design.
        </p>
      </div>
    </section>
  );
}

export default TecsAnimation;
