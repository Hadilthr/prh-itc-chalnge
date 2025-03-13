document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".home-content h1", {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power2.out"
    });

    gsap.from(".home-content p", {
        duration: 1.2,
        opacity: 0,
        y: 50,
        ease: "power2.out",
        delay: 0.3
    });

    gsap.from(".home-image img", {
        duration: 1.5,
        opacity: 0,
        x: 100,
        ease: "power2.out",
        delay: 0.5
    });
});

        
   

