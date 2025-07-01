document.addEventListener("DOMContentLoaded", () => {
  // Select main page section
  const content = document.querySelector(".home, .projects, .blog");

  if (content) {
    // Fade in the section on load
    requestAnimationFrame(() => {
      content.classList.add("fade-in");
    });

    // Intercept internal links
    const links = document.querySelectorAll("a[href]");

    links.forEach(link => {
      const url = new URL(link.href, location.origin);

      if (
        url.origin === location.origin &&
        !link.hasAttribute("download") &&
        !link.target
      ) {
        link.addEventListener("click", function (e) {
          e.preventDefault();

          content.classList.remove("fade-in");
          content.classList.add("fade-out");

          setTimeout(() => {
            window.location.href = link.href;
          }, 500); // Match the CSS transition time
        });
      }
    });
  }
});
