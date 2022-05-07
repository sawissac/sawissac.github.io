const curDot = window.curDot;
const cursor = curDot({
  diameter: 30,
  borderWidth: 1,
  borderColor: "#fff",
  easing: 4,
  background: "transparent",
  zIndex: 9999,
});

// timmer

function initWellcomeTimmer() {
  const mainLink = document.getElementById("main-link");
  if (mainLink) {
    const nextLinkTimmer = setTimeout(() => {
      mainLink.click();
      clearTimeout(nextLinkTimmer);
    }, 2000);
  }
}

// cursor lib

function initCur() {
  cursor.over(".expand-white", {
    scale: 3,
    background: "white",
  });

  cursor.over(".expand-red", {
    scale: 3,
    background: "red",
  });
}
// bootstrap lib
// BootStrap tooltips and media query

function initBs() {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  let slink = document.getElementById("social-link");

  if (tooltipTriggerList && slink) {
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl, {
        animation: true,
        delay: { show: 200, hide: 200 },
      });
    });
    window.addEventListener("resize", () => {
      let mql = window.matchMedia("(max-width: 992px)");
      let classesArray = slink.classList;
      if (mql.matches) {
        classesArray = classesArray.replace("fixed-bottom", "removed");
      }else{
        classesArray = classesArray.replace("removed", "fixed-bottom");
      }
    });
  }
}
// scroll detect

function initScroll() {
  const navEl = document.getElementById("nav-bar");
  const scrollDBtn = document.getElementById("scroll-d-btn");

  if (navEl && scrollDBtn) {
    const sd = new ScrollDetect();
    let toggleUpDown = true;
    scrollDBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (toggleUpDown) {
        sd.scrollTo("y", 9999);
        scrollDBtn.textContent = "scroll up";
        toggleUpDown = false;
      } else {
        sd.scrollTo("y", 0);
        scrollDBtn.textContent = "scroll down";
        toggleUpDown = true;
      }
    });

    sd.onScroll((direction) => {
      let yPos = sd.getScrollPosY();
      let isPass = yPos > 36;
      if (isPass) {
        toggleUpDown = false;
        scrollDBtn.textContent = "scroll up";
        navEl.classList.add("bg-white");
      } else {
        toggleUpDown = true;
        scrollDBtn.textContent = "scroll down";
        navEl.classList.replace("bg-white", "bg-none");
      }
    });
  }
}

// swup lib

const swup = new Swup({
  animationSelector: '[class*="swup-transition-"]',
});

initCur();
initWellcomeTimmer();
initBs();
initScroll();

swup.on("contentReplaced", initScroll);
swup.on("contentReplaced", initCur);
swup.on("contentReplaced", initWellcomeTimmer);
swup.on("contentReplaced", initBs);
