document.addEventListener("DOMContentLoaded", () => {
  // Select main page section
  const content = document.querySelector(".home_container, .projects_container, .warning_container, .blog");
  const bg = document.querySelector('body');
  
  const isErrorPg = window.location.pathname.includes('docs/error.html');

  if (content) {
    // Fade in the section on load
    requestAnimationFrame(() => {
      if (bg) 
        bg.classList.add('fade-in');
      content.classList.add("fade-in");
    });

    // Intercept internal links
    const links = document.querySelectorAll("a[href]");

    links.forEach(link => {
      const url = new URL(link.href, location.origin);
       const isErrorRedirect = url.pathname.includes("docs/error.html");

      if (
        url.origin === location.origin &&
        !link.hasAttribute("download") &&
        !link.target
      ) {
        link.addEventListener("click", function (e) {
          e.preventDefault();

          content.classList.remove("fade-in");
          content.classList.add("fade-out");

          if (isErrorRedirect && bg) {
            bg.classList.remove("fade-in");
            bg.classList.add("fade-out");
          }

          setTimeout(() => {
            window.location.href = link.href;
          }, 500); // Match the CSS transition time
        });
      }
    });
  }

  // If you're already on error.html, fade in both background + content
  if (isErrorPg) {
    requestAnimationFrame(() => {
      if (bg) 
        bg.classList.add("fade-in");
    });
  }
});
