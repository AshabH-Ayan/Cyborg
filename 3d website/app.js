let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function () {
    showSlider('next');
}
prevButton.onclick = function () {
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if (type === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');

    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function () {
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');

    }
});
backButton.onclick = function () {
    carousel.classList.remove('showDetail');

}

document.addEventListener('DOMContentLoaded', () => {
    const imagesToAnimate = document.querySelectorAll(
        '.carousel .list .item:nth-child(2) img, ' +
        '.carousel .list .item:nth-child(3) img, ' +
        '.carousel .list .item:nth-child(4) img'
    );

    imagesToAnimate.forEach(img => {
        img.classList.add('animate-image-on-load');
    });
});


const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});


document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');
    const mainContent = document.getElementById('main-content');
    const introText = document.getElementById('intro-text');
    const splineColumn = document.querySelector('.spline-column');

    setTimeout(() => {
        if (introText && intro && mainContent && splineColumn && typeof Typed !== 'undefined') {
            const typed = new Typed('#intro-text', {
                strings: ["", "CYBERNATE <br> where humanity meets machine<br> and evolution gets<br> an update"],
                typeSpeed: 55,
                showCursor: true,
                cursorChar: '',
                loop: false,
                onComplete: (self) => {

                    setTimeout(() => {
                        intro.classList.add('hidden');

                        mainContent.classList.add('visible');

                        if (typeof customElements.get('spline-viewer') !== 'undefined') {
                            const splineViewer = document.createElement('spline-viewer');
                            splineViewer.setAttribute('class', 'robot-3d');
                            splineViewer.setAttribute('url', 'https://prod.spline.design/thttFyZJ1vLLZfOs/scene.splinecode');
                            splineColumn.appendChild(splineViewer);

                            intro.addEventListener('transitionend', () => {
                                if (window.getComputedStyle(intro).opacity === '0') {
                                    intro.remove();
                                }
                            }, { once: true });

                        } else {
                            console.error('Spline viewer custom element not registered. Spline viewer script may have failed to load.');
                            if (intro) intro.style.display = 'none';
                            if (mainContent && !mainContent.classList.contains('visible')) {
                                mainContent.classList.add('visible');
                            }
                        }

                    }, 30);
                }
            });
        } else {
            console.warn("Required elements, Typed.js, or Spline column not found. Skipping intro animation and Spline loading.");
            if (intro) intro.style.display = 'none';
            if (mainContent && !mainContent.classList.contains('visible')) {
                mainContent.classList.add('visible');
            }
            if (splineColumn && typeof customElements.get('spline-viewer') !== 'undefined') {
                const splineViewer = document.createElement('spline-viewer');
                splineViewer.setAttribute('class', 'robot-3d');
                splineViewer.setAttribute('url', 'https://prod.spline.design/thttFyZJ1vLLZfOs/scene.splinecode');
                splineColumn.appendChild(splineViewer);
            } else if (splineColumn) {
                console.warn('Spline viewer script did not load, cannot add 3D model.');
            } else {
                console.warn('Spline column element not found in HTML.');
            }
        }
    }, 50);
});

document.querySelectorAll('.coming-soon-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent actual navigation

      const popup = document.getElementById('coming-soon-popup');
      popup.style.display = 'block';

      setTimeout(() => {
        popup.style.display = 'none';
      }, 3000); // 3 seconds
    });
  });


