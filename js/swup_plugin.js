var swup = new Swup({
  animationSelector: '[class*="swup-transition-"]',
});

initBs();
initScroll();
initCur();
initWellcomeTimmer();

swup.on('contentReplaced', initBs);
swup.on('contentReplaced', initScroll);
swup.on('contentReplaced', initCur);
swup.on('contentReplaced', initWellcomeTimmer);

swup.on('willReplaceContent', unLoadCur);