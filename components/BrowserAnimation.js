/** @type {HTMLCanvasElement} */
import { useRef, useEffect } from 'react';

function BrowserAnimation() {
  const canvas = useRef();
  const c = useRef();
  const loadingImg = useRef();
  let browsers = [];
  let animate = null;
  console.log(canvas.current);

  useEffect(() => {
    c.current = canvas.current.getContext('2d');

    if (innerWidth < 720) {
      canvas.current.width = innerWidth / 1.2;
      canvas.current.height = 600;
    } else if (innerWidth < 1030) {
      canvas.current.width = innerWidth;
      canvas.current.height = 1000;
    } else if (innerWidth > 1400) {
      canvas.current.width = 1200;
      canvas.current.height = 560;
    } else {
      canvas.current.width = innerWidth / 1.2;
      canvas.current.height = 560;
    }

    window.addEventListener('resize', () => {
      c.current.clearRect(0, 0, canvas.current.width, canvas.current.height);
      if (innerWidth < 720) {
        canvas.current.width = innerWidth / 1.2;
        canvas.current.height = 600;
      } else if (innerWidth < 1030) {
        canvas.current.width = innerWidth / 1.2;
        canvas.current.height = 1000;
      } else if (innerWidth > 1400) {
        canvas.current.width = 1200;
      } else {
        canvas.current.width = innerWidth / 1.2;
        canvas.current.height = 560;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      browsers = [];

      init();
      fixLoadingPosition();
    });

    const canvasInfo = canvas.current.getBoundingClientRect();
    const onWheelRole = (e) => {
      if (window.scrollY + canvasInfo.height > canvasInfo.bottom) {
        startAnimation();

        setTimeout(() => {
          window.removeEventListener('scroll', onWheelRole);
        }, 3000);
      }
    };

    window.addEventListener('scroll', onWheelRole);

    // Put loading in middle of left browser
    const fixLoadingPosition = () => {
      if (innerWidth < 720) {
        loadingImg.current.style.left =
          canvas.current.width / 2 - loadingImg.current.width / 2 + 'px';
        loadingImg.current.style.top = canvas.current.height / 4.5 + 'px';
      } else if (innerWidth < 1030) {
        loadingImg.current.style.left =
          canvas.current.width / 2 - loadingImg.current.width / 2 + 'px';
        loadingImg.current.style.top = canvas.current.height / 3.5 + 'px';
      } else {
        loadingImg.current.style.left =
          canvas.current.width / 2 / 2 - loadingImg.current.width / 1.4 + 'px';
        loadingImg.current.style.top = canvas.current.height / 3 + 'px';
      }
    };

    init();
    fixLoadingPosition();

    return () => {
      window.removeEventListener('scroll', onWheelRole);
    };
  }, []);

  class Browser {
    constructor(x, y, width, height, radius, bgColor, device) {
      this.device = device;
      this.c = c.current;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.bgColor = bgColor;
      this.radius = {
        tl: radius,
        br: radius,
        tr: radius,
        bl: radius,
      };
      this.opacity = 0;
      this.loading = this.loading.bind(this);

      this.opac = 0;
      this.opac1 = 0;
      this.opac2 = 0;
      this.opac3 = 0;
      this.opac4 = 0;
      this.opac5 = 0;
      this.opac6 = 0;
      this.time = null;
      this.time1 = null;
      this.time2 = null;
      this.time3 = null;
      this.time4 = null;
      this.time5 = null;
      this.time6 = null;
    }

    browser() {
      this.c.globalAlpha = 1;
      if (typeof this.radius === 'undefined') {
        this.radius = 5;
      }
      if (typeof this.radius === 'number') {
        this.radius = {
          tl: this.radius,
          tr: this.radius,
          br: this.radius,
          bl: this.radius,
        };
      } else {
        let defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
        for (let side in defaultRadius) {
          this.radius[side] = this.radius[side] || defaultRadius[side];
        }
      }
      this.c.beginPath();
      this.c.moveTo(this.x + this.radius.tl, this.y);
      this.c.lineTo(this.x + this.width - this.radius.tr, this.y);
      this.c.quadraticCurveTo(
        this.x + this.width,
        this.y,
        this.x + this.width,
        this.y + this.radius.tr
      );
      this.c.lineTo(this.x + this.width, this.y + this.height - this.radius.br);
      this.c.quadraticCurveTo(
        this.x + this.width,
        this.y + this.height,
        this.x + this.width - this.radius.br,
        this.y + this.height
      );
      this.c.lineTo(this.x + this.radius.bl, this.y + this.height);
      this.c.quadraticCurveTo(
        this.x,
        this.y + this.height,
        this.x,
        this.y + this.height - this.radius.bl
      );
      this.c.lineTo(this.x, this.y + this.radius.tl);
      this.c.quadraticCurveTo(this.x, this.y, this.x + this.radius.tl, this.y);
      this.c.closePath();
      this.c.fillStyle = this.bgColor;
      this.c.fill();

      // Load the other parts
      this.elements();
      // this.loading();
    }

    elements() {
      // Top Left buttons
      this.c.beginPath();
      this.c.arc(this.x + 15, this.y + 15, 4, 0, Math.PI * 2);
      this.c.fillStyle = 'yellow';
      this.c.fill();
      this.c.closePath();
      this.c.beginPath();
      this.c.arc(this.x + 30, this.y + 15, 4, 0, Math.PI * 2);
      this.c.fillStyle = 'green';
      this.c.fill();
      this.c.closePath();
      this.c.beginPath();
      this.c.arc(this.x + 45, this.y + 15, 4, 0, Math.PI * 2);
      this.c.fillStyle = 'red';
      this.c.fill();
      this.c.closePath();

      // Search bar and it's container
      this.c.beginPath();
      this.c.fillStyle = '#444';
      this.c.fillRect(this.x, this.y + 25, this.width, 25);
      this.c.closePath();
      // Search bar it self
      this.roundRect(
        this.x + 45,
        this.y + 30,
        this.width - 95,
        15,
        {
          tl: 8,
          br: 8,
          tr: 8,
          bl: 8,
        },
        '#888'
      );

      // Tab 1
      this.c.beginPath();
      this.c.moveTo(this.x + 60, this.y + 25);
      this.c.lineTo(this.x + 65, this.y + 10);
      this.c.lineTo(this.x + 140, this.y + 10);
      this.c.lineTo(this.x + 145, this.y + 25);
      this.c.fillStyle = '#444';
      this.c.fill();
      this.c.closePath();

      // Tab 2
      this.c.beginPath();
      this.c.moveTo(this.x + 145, this.y + 25);
      this.c.lineTo(this.x + 150, this.y + 10);
      this.c.lineTo(this.x + 230, this.y + 10);
      this.c.lineTo(this.x + 235, this.y + 25);
      this.c.fillStyle = '#666';
      this.c.fill();
      this.c.closePath();
    }

    roundRect(x, y, width, height, radius, fill) {
      if (typeof radius === 'undefined') {
        radius = 5;
      }
      if (typeof radius === 'number') {
        radius = { tl: radius, tr: radius, br: radius, bl: radius };
      } else {
        let defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
        for (let side in defaultRadius) {
          radius[side] = radius[side] || defaultRadius[side];
        }
      }
      this.c.beginPath();
      this.c.moveTo(x + radius.tl, y);
      this.c.lineTo(x + width - radius.tr, y);
      this.c.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
      this.c.lineTo(x + width, y + height - radius.br);
      this.c.quadraticCurveTo(
        x + width,
        y + height,
        x + width - radius.br,
        y + height
      );
      this.c.lineTo(x + radius.bl, y + height);
      this.c.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
      this.c.lineTo(x, y + radius.tl);
      this.c.quadraticCurveTo(x, y, x + radius.tl, y);
      this.c.closePath();
      this.c.fillStyle = fill;
      this.c.fill();
    }

    loading() {
      // All
      let radius = 7;
      let x = null;

      // Top one
      let topOneY = null;
      let topOneWidth = null;
      let topOneHeight = null;

      // Middle group
      let s1Height = null;
      let s2Height = null;
      let s3Height = null;
      let s4Height = null;
      let s1Y = null;
      let s2Y = null;
      let s3Y = null;
      let s4Y = null;
      let groupWidth = null;

      // Next to middle group
      let NextToGroupX = null;
      let NextToGroupY = null;
      let NextToGroupWidth = null;
      let NextToGroupHeight = null;

      // Last one
      let lastOneWidth = null;
      let lastOneHeight = null;
      let lastOneY = null;

      if (this.device === 'large') {
        x = this.x + 100;

        // Top one
        topOneY = this.y + 70;
        topOneWidth = this.width - 200;
        topOneHeight = this.height / 6;

        // Middle group
        s1Height = 15;
        s2Height = 30;
        s3Height = 17;
        s4Height = 20;
        s1Y = this.y + 140;
        s2Y = this.y + 158;
        s3Y = this.y + 191;
        s4Y = this.y + 211;
        groupWidth = (this.width - 200) / 2 - 10;

        // Next to middle group
        NextToGroupX = this.x + (this.width - 200) / 2 + 100;
        NextToGroupWidth = (this.width - 200) / 2;
        NextToGroupY = this.y + 140;
        NextToGroupHeight = 91;

        // Last one
        lastOneWidth = this.width - 200;
        lastOneHeight = 75;
        lastOneY = this.y + 234;
      } else if (this.device === 'medium') {
        x = this.x + 100;

        // Top one
        topOneY = this.y + 70;
        topOneWidth = this.width - 200;
        topOneHeight = this.height / 4;

        // Middle group
        s1Height = 25;
        s2Height = 35;
        s3Height = 21;
        s4Height = 30;
        s1Y = this.y + 140 + 60;
        s2Y = this.y + 158 + 70;
        s3Y = this.y + 191 + 75;
        s4Y = this.y + 211 + 80;
        groupWidth = (this.width - 200) / 2 - 10;

        // Next to middle group
        NextToGroupX = this.x + (this.width - 200) / 2 + 100;
        NextToGroupWidth = (this.width - 200) / 2;
        NextToGroupY = this.y + 140 + 60;
        NextToGroupHeight = 121;

        // Last one
        lastOneWidth = this.width - 200;
        lastOneHeight = 73;
        lastOneY = this.y + this.height - lastOneHeight;
      } else {
        x = this.x + 50;

        // Top one
        topOneY = this.y + 70;
        topOneWidth = this.width - 100;
        topOneHeight = this.height / 6;

        // Middle group
        s1Height = 15;
        s2Height = 30;
        s3Height = 17;
        s4Height = 20;
        s1Y = this.y + 140;
        s2Y = this.y + 158;
        s3Y = this.y + 191;
        s4Y = this.y + 211;
        groupWidth = this.width / 3 - 10;

        // Next to middle group
        NextToGroupX = this.x + (this.width - 200) / 2 + 100;
        NextToGroupWidth = this.width / 2 - 50;
        NextToGroupY = this.y + 140;
        NextToGroupHeight = 91;

        // Last one
        lastOneWidth = this.width - 100;
        lastOneHeight = 40;
        lastOneY = this.y + 234;
      }

      // Top one
      this.c.globalAlpha = this.opac;
      if (this.opac === 0 || !this.opac) {
        this.time = setTimeout(() => {
          this.opac += 0.02;

          if (this.opac >= 1) {
            this.opac = 1;
            clearTimeout(this.time);
          }
        }, 1000);
      }
      this.roundRect(
        x,
        topOneY,
        topOneWidth,
        topOneHeight,
        radius,
        'rgba(255, 255, 255, 0.2)'
      );

      // Middle group
      this.c.globalAlpha = this.opac1;
      if (this.opac1 === 0 || !this.opac1) {
        this.time1 = setTimeout(() => {
          this.opac1 += 0.02;

          if (this.opac1 >= 1) {
            this.opac1 = 1;
            clearTimeout(this.time1);
          }
        }, 1200);
      }
      this.roundRect(
        x,
        s1Y,
        groupWidth,
        s1Height,
        radius,
        'rgba(255, 255, 255, 0.2)'
      );

      //
      this.c.globalAlpha = this.opac2;
      if (this.opac2 === 0 || !this.opac2) {
        this.time2 = setTimeout(() => {
          this.opac2 += 0.02;

          if (this.opac2 >= 1) {
            this.opac2 = 1;
            clearTimeout(this.time2);
          }
        }, 1600);
      }
      this.roundRect(
        x,
        s2Y,
        groupWidth,
        s2Height,
        radius,
        'rgba(255, 255, 255, 0.2)'
      );

      //
      this.c.globalAlpha = this.opac3;
      if (this.opac3 === 0 || !this.opac3) {
        this.time3 = setTimeout(() => {
          this.opac3 += 0.02;

          if (this.opac3 >= 1) {
            this.opac3 = 1;
            clearTimeout(this.time3);
          }
        }, 1800);
      }
      this.roundRect(
        x,
        s3Y,
        groupWidth,
        s3Height,
        radius,
        'rgba(255, 255, 255, 0.2)'
      );

      //
      this.c.globalAlpha = this.opac4;
      if (this.opac4 === 0 || !this.opac4) {
        this.time4 = setTimeout(() => {
          this.opac4 += 0.02;

          if (this.opac4 >= 1) {
            this.opac4 = 1;
            clearTimeout(this.time4);
          }
        }, 2000);
      }
      this.roundRect(
        x,
        s4Y,
        groupWidth,
        s4Height,
        radius,
        'rgba(255, 255, 255, 0.2)'
      );

      // Next to middle group
      this.c.globalAlpha = this.opac5;
      if (this.opac5 === 0 || !this.opac5) {
        this.time5 = setTimeout(() => {
          this.opac5 += 0.02;

          if (this.opac5 >= 1) {
            this.opac5 = 1;
            clearTimeout(this.time5);
          }
        }, 2100);
      }
      this.roundRect(
        NextToGroupX,
        NextToGroupY,
        NextToGroupWidth,
        NextToGroupHeight,
        radius,
        'rgba(255, 127, 80, 0.4)'
      );

      // LastONe
      this.c.globalAlpha = this.opac6;
      if (this.opac6 === 0 || !this.opac6) {
        setTimeout(() => {
          this.opac6 += 0.02;

          if (this.opac6 >= 1) {
            clearTimeout(this.time6);
            this.opac6 = 1;
          }
        }, 2400);
      }
      this.roundRect(
        x,
        lastOneY,
        lastOneWidth,
        lastOneHeight,
        radius,
        'rgba(255, 255, 255, 0.2)'
      );
    }

    update() {
      this.loading();
    }
  }

  const init = () => {
    let width = null;
    let height = null;
    let x = null;
    let y = null;
    let containerY = null;
    let containerX = null;
    let radius = null;
    let device = null;

    if (innerWidth < 720) {
      width = 300;
      height = 280;
      x = canvas.current.width / 2 - width / 2;
      y = 0;
      radius = 20;
      containerY = canvas.current.height - height;
      containerX = x;
      device = 'small';
    } else if (innerWidth < 1030) {
      width = canvas.current.width - 200;
      height = canvas.current.height / 2.5;
      x = 100;
      y = 100;
      radius = 20;
      containerY = canvas.current.height / 2 + 80;
      containerX = x;
      device = 'medium';
    } else {
      width = canvas.current.width / 2.2 - 20;
      height = canvas.current.height - 250;
      x = 10;
      y = 50;
      radius = 20;
      containerY = y;
      containerX = canvas.current.width / 2 + 10;
      device = 'large';
    }

    browsers.push(new Browser(x, y, width, height, radius, '#222', device));
    browsers[0].browser();

    browsers.push(
      new Browser(
        containerX,
        containerY,
        width,
        height,
        radius,
        '#414666',
        device
      )
    );
    browsers[1].browser();
  };

  function startAnimation() {
    c.current.clearRect(
      browsers[1].x,
      browsers[1].y,
      browsers[1].width,
      browsers[1].height
    );
    browsers[1].browser();
    browsers[1].update();
    animate = requestAnimationFrame(startAnimation);

    if (animate) {
      setTimeout(() => {
        cancelAnimationFrame(animate);
      }, 5000);
    }
  }

  return (
    <div
      style={{
        position: 'relative',
        width: 'fit-content',
        height: 'fit-content',
      }}
    >
      <canvas id="browsers" ref={canvas}></canvas>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="http://localhost:3000/loading.gif"
        alt=""
        style={{
          width: '5rem',
          position: 'absolute',
        }}
        ref={loadingImg}
      />
    </div>
  );
}

export default BrowserAnimation;
