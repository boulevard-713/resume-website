/* ============================================================
   COUNT UP — Animated number counters for language scores
   ============================================================ */

(function() {
  'use strict';

  var scoreEls = document.querySelectorAll('.score-number[data-count]');
  if (!scoreEls.length) return;

  var observer = new IntersectionObserver(
    function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;

        var el = entry.target;
        var targetVal = parseInt(el.getAttribute('data-count'), 10);
        var startTime = null;
        var duration = 1600; // ms

        function step(now) {
          if (!startTime) startTime = now;
          var elapsed = now - startTime;
          var progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic
          var eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(targetVal * eased);

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            el.textContent = targetVal;
          }
        }

        requestAnimationFrame(step);
        observer.unobserve(el);
      });
    },
    { threshold: 0.6 }
  );

  scoreEls.forEach(function(el) {
    observer.observe(el);
  });
})();
