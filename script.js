document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate header text
  gsap.from(".title", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
  gsap.from(".subtitle", { duration: 1, y: 50, opacity: 0, delay: 0.5, ease: "power2.out" });

  // Animate sections on scroll
  gsap.utils.toArray("section").forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  });

  // Add hover effect to nav links
  const navLinks = document.querySelectorAll("header ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link, { scale: 1.2, duration: 0.3, ease: "power1.out" });
    });
    link.addEventListener("mouseleave", () => {
      gsap.to(link, { scale: 1, duration: 0.3, ease: "power1.out" });
    });
  });
});