document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const options = {
      threshold: 0.2
    };
  
    const reveal = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      });
    }, options);
  
    sections.forEach(section => reveal.observe(section));
  });
  