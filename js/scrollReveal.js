/* ============================================================
   SCROLL REVEAL — Intersection Observer for reveal animations
   ============================================================ */

(function() {
  'use strict';

  // Elements with reveal classes + stagger children
  var revealEls = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .stagger > *, .fade-in'
  );

  if (!revealEls.length) return;

  var observer = new IntersectionObserver(
    function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(function(el) {
    observer.observe(el);
  });
})();
