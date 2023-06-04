gsap.registerPlugin(ScrollTrigger);

const navBtn = document.querySelector(".menu-toggle-btn");
navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");
});

gsap.to(".line1", {
  duration: 0.5,
  width: "100%",
  ease: "power3.easeInOut",
  scrollTrigger: {
    trigger: ".ani-1",
    start: "bottom bottom",
    end: "bottom center",
  },
});

gsap.to(".line2", {
  duration: 0.5,
  width: "100%",
  ease: "power3.easeInOut",
  scrollTrigger: {
    trigger: ".ani-2",
    start: "bottom bottom",
    end: "bottom center",
  },
});

gsap.to(".line3", {
  duration: 0.5,
  width: "100%",
  ease: "power3.easeInOut",
  scrollTrigger: {
    trigger: ".ani-3",
    start: "bottom bottom",
    end: "bottom bottom",
  },
});
