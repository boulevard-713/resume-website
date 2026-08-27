/* ============================================================
   PARALLAX — Mouse-driven ambient orb movement + hero card tilt
   ============================================================ */

(function() {
  'use strict';

  const orbs = document.querySelectorAll('[data-parallax]');
  const heroCard = document.getElementById('heroCard');
  if (!orbs.length && !heroCard) return;

  document.addEventListener('mousemove', function(e) {
    var cx = e.clientX / window.innerWidth - 0.5;
    var cy = e.clientY / window.innerHeight - 0.5;

    // Move ambient orbs
    orbs.forEach(function(orb) {
      var factor = parseFloat(orb.getAttribute('data-parallax'));
      var tx = cx * factor * 100;
      var ty = cy * factor * 100;
      orb.style.transform = 'translate3d(' + tx + 'px, ' + ty + 'px, 0)';
    });

    // Hero card subtle 3D tilt
    if (heroCard) {
      var rx = -cy * 2.5;
      var ry = cx * 2.5;
      heroCard.style.transform =
        'perspective(1000px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg)';
    }
  });
})();
