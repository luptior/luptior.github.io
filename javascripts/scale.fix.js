// Modernized scale fix for iOS devices
(function() {
  'use strict';
  
  const metas = document.getElementsByTagName('meta');
  const isIPhone = /iPhone/i.test(navigator.userAgent);
  
  if (isIPhone) {
    // Set initial viewport
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].name === "viewport") {
        metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
        break;
      }
    }
    
    // Handle gesture start
    document.addEventListener("gesturestart", function gestureStart() {
      for (let i = 0; i < metas.length; i++) {
        if (metas[i].name === "viewport") {
          metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
          break;
        }
      }
    }, false);
  }
})();