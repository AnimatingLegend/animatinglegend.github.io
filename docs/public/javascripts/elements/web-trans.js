document.addEventListener('DOMContentLoaded', () => {
     // -- Select main page elements -- \\
     const content = document.querySelector(".home, .projects, .blog, .warning_container");

     // === fade in on load === \\
     if (content) {
          requestAnimationFrame(() => {
               content.classList.add('fade-in');
          });

          // -- intercept interal links -- \\
          const links = document.querySelectorAll('a[href]');

          links.forEach(link => {
               const url = new URL(link.href);

               if (url.origin === location.origin) {
                    link.addEventListener('click', function(e) {
                         e.preventDefault();
                         
                         content.classList.remove('fade-in');
                         content.classList.add('fade-out');

                         setTimeout(() => {
                              window.location.href = link.href;
                         }, 500); // -- match the CSS transition duration (e.g., 0.5s) -- \\
                    });
               }
          });
     }
});
