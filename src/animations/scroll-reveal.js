import ScrollReveal from "scrollreveal";


const rv = ScrollReveal();



// Default Reveals
rv.reveal(".d-reveals", {
  delay: 100,
  duration: 350,
  distance: "150%",
  origin: "top"
});

rv.reveal(".skill-card", {
  delay: 350,
  duration: 500,
  interval: 140,
  distance: "100%",
  origin: "left"
});

rv.reveal(".work-card .rl", {
  delay: 350,
  duration: 500,
  interval: 200,
  distance: "100%",
  origin: "left"
});

rv.reveal(".work-card .rr", {
  delay: 350,
  duration: 500,
  interval: 200,
  distance: "100%",
  origin: "right"
});

