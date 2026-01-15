document.addEventListener('DOMContentLoaded', function() {
     // === The main tag that supports the blog posts === \\
     const blog_post_CONTAINER = document.getElementById('blog-posts');

     // =======================================
     // Array of Blog post's to be displayed
     // =======================================
     BLOGS.forEach(post => {
          // -- Create a new div to hold blog post content -- \\
          const blogSection = document.createElement('div');
          blogSection.classList.add('blog-section');
          blogSection.style.marginBottom = '20px'; // -- Add spacing between blog posts -- \\

          // === Create Blog post content === \\
          blogSection.innerHTML = `
               <h2 class="blog-title-text"><strong>${post.TITLE}</strong></h2>
               <p class="shown-content">${post.SHOWN_CONTENT}</p>
               <p class="hidden-content" style="display: none; opacity: 0; transition: opacity 0.3s;">${post.HIDDEN_CONTENT}</p> <br>
               <button class="toggle-content">Show More...</button>
          `;

          blog_post_CONTAINER.appendChild(blogSection);

          // === Add event listeners to toggle content === \\
          const hiddenContent = blogSection.querySelector('.hidden-content');
          const button = blogSection.querySelector('.toggle-content');

          const toggleContent = function() {
               if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
                    hiddenContent.style.display = 'block';
                    setTimeout(() => (hiddenContent.style.opacity = '1'), 10); // Smooth fade-in
                    button.textContent = 'Show Less';
               } else {
                    hiddenContent.style.opacity = '0';
                    setTimeout(() => (hiddenContent.style.display = 'none'), 300); // Smooth fade-out
                    button.textContent = 'Show More...';
               }
          };

          blogSection.querySelector('.blog-title-text').onclick = toggleContent;
          button.onclick = toggleContent;
     });

     // =======================================
     // Lightbox functionality
     // This function opens a lightbox when an image is clicked
     // =======================================
     document.querySelectorAll('img').forEach(img => {
          img.style.cursor = 'pointer';
          img.addEventListener('click', () => openLightbox(img.src));
          console.log(`OPENING LIGHTBOT: ${img.src}`);
     });

     // === Opens the lightbox when a blog post image is clicked === \\
     function openLightbox(SRC) {
          // -- Hardcoding the CSS here to make my life easier -- \\
          const lightbox = document.createElement('div');
          lightbox.id = `lightbox`;
          lightbox.style.cssText = `
               position: fixed;
               top: 0; left: 0;
               width: 100vw; height: 100vh;
               background: rgba(0, 0, 0, 0.8);
               display: flex;
               justify-content: center;
               align-items: center;
               z-index: 9999;
          `;

          // -- Create the lightbox image element -- \\
          // -- + add the img source and styling to it -- \\
          const image = document.createElement('img');
          image.src = SRC;
          image.style.cssText = `
               max-width: 90%; max-height: 90%;
               border-radius: 10px;
          `;

          const closeButton = document.createElement('span');
          closeButton.innerHTML = '&times;';
          closeButton.style.cssText = `
               position: absolute;
               top: 10px; right: 10px;
               font-size: 40px;
               color: white;
               cursor: pointer;
               z-index: 10001;
               user-select: none;
          `;

          // -- Add event listeners to close the lightbox -- \\
          closeButton.onclick = () => document.body.removeChild(lightbox);
          lightbox.onclick = (e) => {
               if (e.target === lightbox) document.body.removeChild(lightbox);
          };

          lightbox.appendChild(closeButton);
          lightbox.appendChild(image);
          document.body.appendChild(lightbox);
     }
});
