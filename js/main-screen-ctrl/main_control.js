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

  cursor.over(".shrink-cur", {
    scale: 1,
    background: "white",
  });
}
// bootstrap lib
// BootStrap tooltips and media query

function initBs() {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );

  const tooltipTriggerDisposeList = [].slice.call(
    document.querySelectorAll('[data-popper-placement="bottom"]')
  );

  if(tooltipTriggerDisposeList){
    tooltipTriggerDisposeList.map(function(tooltipTriggerEl){
      document.body.removeChild(tooltipTriggerEl);
    })
  }
  let slink = document.getElementById("social-link");
  if (tooltipTriggerList) {
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl, {
        animation: true,
        delay: { show: 200, hide: 200 },
      });
    });
    if (slink) {
      function detectScreen() {
        let mql = window.matchMedia("(max-width: 992px)");
        let classesArray = slink.classList;
        if (mql.matches) {
          classesArray = classesArray.replace("fixed-bottom", "removed");
        } else {
          classesArray = classesArray.replace("removed", "fixed-bottom");
        }
      }
      detectScreen();
      window.addEventListener("resize", () => {
        detectScreen();
      });
    }
  }
}
// scroll detect

function initScroll() {
  const navEl = document.getElementById("nav-bar");
  const aboutNavEl = document.getElementById("aboutnav");
  const scrollDBtn = document.getElementById("scroll-d-btn");

  const sd = new ScrollDetect();
  if ((navEl && scrollDBtn) || (aboutNavEl && scrollDBtn)) {
    let toggleUpDown = true;
    sd.scrollTo("y", 0);
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

    sd.onScroll(() => {
      let yPos = sd.getScrollPosY();
      let isPass = yPos > 36;
      if (isPass) {
        toggleUpDown = false;
        scrollDBtn.textContent = "scroll up";
        if (navEl) navEl.classList.add("bg-white");
      } else {
        toggleUpDown = true;
        scrollDBtn.textContent = "scroll down";
        if (navEl) navEl.classList.replace("bg-white", "bg-none");
      }
    });
  }
}
// aboutme magicscroll

const controller = new ScrollMagic.Controller();

function initScrollController() {
  const aboutme_nav_el = document.getElementById("aboutnav");

  if (aboutme_nav_el) {
    new ScrollMagic.Scene({ triggerElement: "#trigger1" })
      // trigger animation by adding a css class
      .setClassToggle("#scene1", "move-state")
      .addTo(controller);
    new ScrollMagic.Scene({ triggerElement: "#trigger2" })
      // trigger animation by adding a css class
      .setClassToggle("#scene2", "move-state")
      .addTo(controller);
    new ScrollMagic.Scene({ triggerElement: "#trigger3" })
      // trigger animation by adding a css class
      .setClassToggle("#scene3", "move-state")
      .addTo(controller);
    new ScrollMagic.Scene({ triggerElement: "#trigger4" })
      // trigger animation by adding a css class
      .setClassToggle("#scene4", "move-state")
      .addTo(controller);
  }
}
// clip board function

function initClipboard() {
  var copyText = document.getElementById("email-copy");

  if (copyText) {
    copyText.addEventListener("click", function () {
      navigator.clipboard.writeText("issacmm64@gmail.com");
      copyText.textContent = "email copyed";
    });

    copyText.addEventListener("mouseleave", function () {
      copyText.textContent = "Copy Email";
    });
    /* Copy the text inside the text field */
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
initScrollController();
initClipboard();

swup.on("contentReplaced", initScroll);
swup.on("contentReplaced", initCur);
swup.on("contentReplaced", initWellcomeTimmer);
swup.on("contentReplaced", initBs);
swup.on("contentReplaced", initScrollController);
swup.on("contentReplaced", initClipboard);
