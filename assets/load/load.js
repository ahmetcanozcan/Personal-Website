(() => {

  const startTime = new Date().getTime();
  function done() {
    var el = document.getElementById("loading-scene");
    window.scrollTo(0, 0);
    el.classList.add("remove");
    setTimeout(() => el.parentNode.removeChild(el), 500);
    const now = new Date().getTime();
    console.log("Page read in ", now - startTime);
  }
  if (document.readyState === 'loading') {  // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', done);
  } else {  // `DOMContentLoaded` has already fired
    done();
  }

})();
console.log("Hİİ");