function BrowserAnimation() {
  // Scrolls
  const animateTargets = document.querySelectorAll('.fadein-target');
  const scrollTarget = document.querySelector('#section2-scroll');
  const targetInfo = scrollTarget.getBoundingClientRect();

  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  let i = 0;
  async function load() {
    for (i = 0; i < animateTargets.length + 1; i++) {
      if (i === 0) {
        animateTargets[i].classList.add('start');
      } else {
        animateTargets[i - 1].classList.add('start');
      }

      await timer(200);
    }
  }

  const browserCopyAnimation = () => {
    const location = window.scrollY;
    if (location > targetInfo.top) {
      if (i <= 0) {
        load();
        i++;
      }
    } else {
      animateTargets.forEach((item) => item.classList.remove('start'));
      i = 0;
    }
  };

  window.addEventListener('scroll', browserCopyAnimation);

  return <div>BrowserAnimation</div>;
}

export default BrowserAnimation;
