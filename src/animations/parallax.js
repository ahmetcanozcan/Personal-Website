import Parallax from 'parallax-js';

/**
 * HEADER PARALLAX
 */
var headerParallaxList = [];

[1, 2, 3].forEach(i => {

  let id = `title-scene-${i}`;

  // Get header title scene
  const headerTitleScene = document.getElementById(id);
  if (!headerTitleScene)
    return;

  let headerParallax = new Parallax(headerTitleScene, {
    // Parallax configurations


  });

  headerParallaxList.push(headerParallax);

})



/**
 * BIO PARALLAX
 */

const setBioParallax = name => {
  let element = document.querySelector("#bio .bio-grid " + name);
  new Parallax(element, {
    center: true
  });
}

setBioParallax(".text");
setBioParallax(".image");


// Background parallas
let bgElement = document.getElementById("mbg");
new Parallax(bgElement, {

});