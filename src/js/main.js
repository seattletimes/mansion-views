// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");

// if (!("resize" in document.body.style)) {
  var first = document.querySelector(".first");
  var container = document.querySelector(".image-slider");

  var resizeable = function(e) {
    e.preventDefault();
    var bounds = e.target.getBoundingClientRect();
    var x = e.clientX - bounds.left;
    first.style.width = x + "px";
  };

  first.addEventListener("mousedown", function(e) {
    e.preventDefault();
    container.addEventListener("mousemove", resizeable);
  });
  container.addEventListener("mouseup", function() {
    container.removeEventListener("mousemove", resizeable);
  });
  container.addEventListener("mouseleave", function() {
    container.removeEventListener("mousemove", resizeable);
  });

  var resize = function() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 630) {
      document.querySelector(".image-slider .first img").style.maxWidth = width + "px";
      document.querySelector(".image-slider .second img").style.maxWidth = width + "px";
    }
  };
  
  resize();
  window.addEventListener('resize', resize);
// }
