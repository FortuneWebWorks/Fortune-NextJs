/**@type {HTMLCanvasElement} */

import { useRef, useEffect, useState } from 'react';
import styles from '@/styles/Exploding.module.scss';
import CodeEditors from './CodeEditors';

function LfetExplodingBrowser() {
  const canvas = useRef();
  let exploders = useRef([]);
  const c = useRef();

  useEffect(() => {
    c.current = canvas.current.getContext('2d');
    canvas.current.width = 800;
    canvas.current.height = 800;

    for (let i = 0; i < 200; i++) {
      const dx = parseFloat((Math.random() * 10 - 5).toFixed(7));
      const dy = parseFloat((Math.random() * 10 - 5).toFixed(7));

      exploders.current.push(
        new Exploder(
          canvas.current.width / 2,
          canvas.current.height / 2,
          dx,
          dy,
          1
        )
      );
    }

    window.addEventListener('scroll', fire);

    return () => {
      window.removeEventListener('scroll', fire);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animate = () => {
    requestAnimationFrame(animate);

    c.current.clearRect(0, 0, canvas.current.width, canvas.current.height);

    exploders.current.forEach((item) => {
      item.update();
    });
  };

  class Exploder {
    constructor(x, y, dx, dy, opacity) {
      this.c = canvas.current.getContext('2d');
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
        exploders.current.splice(exploders.current.indexOf(this), 1);
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

  // Typeing animation
  const typing = (target) => {
    let text = `
      <div>Test</div>
      <p>Hello world</p>
      <span>Opps</span>
    `;

    let curr = 0;

    let Write = function write() {
      let elem = document.getElementById(target);

      elem.textContent = elem.textContent + text.charAt(curr);

      curr++;

      if (curr < text.length) window.setTimeout(write, 20);
    };

    Write();
  };

  // const rabit = (e) => {
  //   const container = document.getElementById('section-2');

  //   if (container.getBoundingClientRect().top < -500) {
  //     window.removeEventListener('scroll', rabit);

  //     for (let item of container.children) {
  //       if (item !== container.lastChild) item.style.opacity = 0;
  //     }

  //     setTimeout(() => {
  //       for (let item of container.children) {
  //         if (item !== container.lastChild) item.style.display = 'none';
  //       }

  //       container.style.height = '100vh';

  //       container.lastChild.style.cssText = `
  //       transition: opacity 1s 1s ease-in;
  //       position: static;
  //       opacity: 1;
  //       z-index: 1;
  //     `;
  //     }, 500);
  //   }
  // };

  const fire = (e) => {
    const browserContent = document.getElementById('animate-target');

    const container = document
      .getElementById('fire-place')
      .getBoundingClientRect();

    console.log('container-top:', container.top);
    if (container.top < -20) {
      exploders.current.forEach((item) => {
        item.setFire = true;
      });
      animate();
      const target = document.getElementById('explod_target');

      target.classList.add(styles.explod);

      for (let item of browserContent.children) {
        item.style.opacity = 0;
      }

      window.removeEventListener('scroll', fire);

      setTimeout(() => {
        target.remove();
        canvas.current.remove();

        document.getElementById('code-editors').style.cssText = `
          transition: opacity 1s 1s ease-in;
          position: static;
          opacity: 1;
          z-index: 1;
        `;
        document.getElementById('code-editors-container').style.cssText = `
          position: relative;
          overflow: visible;
          height: 21rem;
          top: 0;
        `;
        document.getElementById('second-browser').style.cssText = `
          transition: all 0.5s ease;
          top: 40%;
          transform: translateY(-50%);
          width: 28rem;
          height: 18rem;
          position: relative;
          background-color: #505581 !important;
        `;

        setTimeout(() => {
          typing('html');

          browserContent.children[0].style.opacity = 1;

          typing('css');

          setTimeout(() => {
            browserContent.children[1].style.opacity = 1;
          }, 1000);
        }, 2000);
      }, 2500);
    }
  };

  return <canvas className={styles.exploder} ref={canvas}></canvas>;
}

export default LfetExplodingBrowser;
