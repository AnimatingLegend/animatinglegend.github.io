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
