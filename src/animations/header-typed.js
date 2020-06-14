import Typed from 'typed.js';


const headerTypedElemClassName = ".header-title-typed";

const typed = new Typed(headerTypedElemClassName, {
  strings: [
    "GAMES",
    "AI",
    "CODING",
    "DESIGN",
    "BASKETBALL",
    "SCI-FI"
  ],
  shuffle: true,
  typeSpeed: 70,
  loop: true,
  backDelay: 2000
});


export default typed;