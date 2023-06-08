// Mbo Nav menu

const BtnMenu = document.getElementById("btn-mob-nav");
const Header = document.querySelector(".main-header");
const BtnIcon = document.querySelector(".icon-menu");
BtnMenu.addEventListener("click", MobNavFunction);
function MobNavFunction() {
  Header.classList.toggle("open");
  BtnIcon.classList.toggle("fa-bars");
  BtnIcon.classList.toggle("fa-xmark");
}

//   strings: ["Developer", "Designer"],
//   typeSpeed: 70,
//   backSpeed: 70,
//   loop: true,
// });

// Get the text elements

function changeWidthAndContent() {
  const text1 = document.querySelector(".text-1");
  let contents = ["Designer", "Developer"];
  let widths = ["0px", "120px", "0", "105px"];
  let i = 0;

  function updateWidths(mq) {
    if (mq.matches) {
      widths = ["0px", "81px", "0", "71px"];
    } else {
      widths = ["0px", "111px", "0", "95px"];
    }
  }

  const mq = window.matchMedia("(max-width: 768px)");
  updateWidths(mq);
  mq.addListener(updateWidths);

  setInterval(() => {
    text1.style.width = widths[i];
    if (text1.style.width === "0px") {
      setTimeout(() => {
        contents = contents.reverse();
        text1.textContent = contents[0];
      }, 600);
    } else {
      text1.textContent = contents[0];
    }
    i = (i + 1) % widths.length;
  }, 1700);
}

changeWidthAndContent();

const counters = document.querySelectorAll(".number");
const speed = 10000; // The higher the slower

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

let sectionScrolled = false;

window.addEventListener("scroll", () => {
  if (
    sectionScrolled === false &&
    window.scrollY > document.querySelector(".counter").offsetTop - 100
  ) {
    sectionScrolled = true;
    counters.forEach((counter) => {
      counter.innerText = 0;
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
    });
  }
});

const SwipBtn = document.getElementById("swip");
const SwipReverse = document.querySelector(".swip-btn");
const Feedback1 = document.querySelector(".feedback1");
const Feedback2 = document.querySelector(".feedback2");

SwipBtn.addEventListener("click", SwipBtns);
function SwipBtns() {
  SwipReverse.classList.toggle("reverse");
  Feedback1.classList.toggle("none");
  Feedback2.classList.toggle("none");
}
