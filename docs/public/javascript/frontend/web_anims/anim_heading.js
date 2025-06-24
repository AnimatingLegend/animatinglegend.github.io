document.addEventListener("DOMContentLoaded", function() {
    gsap.to(".content h1", {visibility: "visible", stagger: 0.1});

    /**
     * @description Animated title using Typed.js
     * {param} strings: Array of strings to type
     */
    const title_option = {
        strings: ["Hey, I'm Aaron Augustin"],
        typeSpeed: 60,
        showCursor: true,
        cursorChar: "|"
    };

    new Typed("#typed-title", title_option);
});