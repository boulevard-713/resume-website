/* ============================================================
   GALLERY — Populate 3 evenly-filled scrolling rows
   ============================================================ */

(function() {
  'use strict';

  // All 23 images in assets/gallery/
  var imageIds = [];
  for (var i = 1; i <= 23; i++) {
    imageIds.push(i);
  }

  // Shuffle
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  var shuffled = shuffle(imageIds);

  // Distribute across 2 rows: 12 + 11 = 23
  var row1 = shuffled.slice(0, 12);
  var row2 = shuffled.slice(12);

  var rows = [
    { el: document.getElementById('galleryRow1'), ids: row1 },
    { el: document.getElementById('galleryRow2'), ids: row2 }
  ];

  rows.forEach(function(row) {
    if (!row.el) return;

    // Duplicate set for seamless infinite scroll
    var html = '';
    for (var dup = 0; dup < 2; dup++) {
      row.ids.forEach(function(id) {
        html += '<img src="assets/gallery/' + id + '.jpg" alt="" loading="lazy">';
      });
    }
    row.el.innerHTML = html;

    // Pause on hover
    row.el.addEventListener('mouseenter', function() {
      row.el.style.animationPlayState = 'paused';
    });
    row.el.addEventListener('mouseleave', function() {
      row.el.style.animationPlayState = 'running';
    });
  });
})();
