/* ============================================================
   HERO TRANSITION — Fade ambient orbs on scroll past hero
   ============================================================ */

(function() {
  'use strict';

  var ambientContainer = document.getElementById('ambientContainer');
  if (!ambientContainer) return;

  var heroSection = document.getElementById('hero');
  if (!heroSection) return;

  // Fade out orbs as user scrolls through hero
  window.addEventListener('scroll', function() {
    var heroHeight = heroSection.offsetHeight;
    var scrollY = window.pageYOffset || window.scrollY;

    // Progress: 0 at top, 1 at bottom of hero
    var progress = Math.min(scrollY / heroHeight, 1);

    // Fade out orbs
    var opacity = 1 - progress;
    ambientContainer.style.opacity = opacity;

    // Toggle active class (for pointer-events and performance)
    if (opacity < 0.05) {
      ambientContainer.classList.remove('active');
    } else {
      ambientContainer.classList.add('active');
    }
  }, { passive: true });
})();
