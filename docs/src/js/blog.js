document.addEventListener('DOMContentLoaded', function() {
    const blogPostsContainer = document.getElementById('blog-posts');

    // Dynamically render blog posts from data.js
    blogPosts.forEach(post => {
        const blogSection = document.createElement('div');
        blogSection.classList.add('blog-section');
        blogSection.style.marginBottom = '20px'; // Add space between blog posts

        blogSection.innerHTML = `
            <h2 class="blog-title-text"><strong>${post.title}</strong></h2> <br>
            <p class="shown-content">${post.shownContent}</p>
            <p class="hidden-content" style="display: none; opacity: 0; transition: opacity 0.3s;">${post.hiddenContent}</p> <br>
            <button class="show-more-btn">Show More...</button>
        `;

        blogPostsContainer.appendChild(blogSection);

        const hiddenContent = blogSection.querySelector('.hidden-content');
        const button = blogSection.querySelector('.show-more-btn');

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
});

document.querySelectorAll('img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => openLightbox(img.src));
    console.log("Opening:", img.src);
});

function openLightbox(src) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
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

    const img = document.createElement('img');
    img.src = src;
    img.style.cssText = `
      max-width: 90%;
      max-height: 90%;
      border-radius: 10px;
    `;

    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
      position: absolute;
      top: 20px;
      right: 30px;
      font-size: 40px;
      color: white;
      cursor: pointer;
      z-index: 10001;
      user-select: none;
    `;

    closeBtn.onclick = () => document.body.removeChild(lightbox);
    lightbox.onclick = (e) => {
        if (e.target === lightbox) document.body.removeChild(lightbox);
    };

    lightbox.appendChild(closeBtn);
    lightbox.appendChild(img);
    document.body.appendChild(lightbox);
}
