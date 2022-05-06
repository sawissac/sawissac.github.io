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
