document.addEventListener('DOMContentLoaded', function() {
     // -- fade in title -- \\
     gsap.to('.content h1', { visibility: 'visible', stagger: 0.1 });

     // -- Animated title using typed.js -- \\
     const title_option = {
          strings: ["Hey, I'm Aaron Augustin"],
          typeSpeed: 55,
          showCursor: true,
          cursorChar: '|'
     };

     new Typed('#typed-title', title_option)
});