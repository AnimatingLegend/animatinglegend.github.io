document.addEventListener('DOMContentLoaded', () => {
    /**
     *  container for all coding projects
     */
    const codingContainer = document.getElementById('coding-container');

    /**
     *  container for all animation projects
     */
    const animationContainer = document.getElementById('anim-container');

    /**
     * array of coding projects
     */
    coding_projects.forEach(project => {
        /**
         * Create a new div element for each coding project
         */
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('coding-project');

        /**
         *  Determine the logo class based on the project image URL
         */
        const logoClass = project.project_img.includes('funkin_logo') ? 'funkin-logo' :
                        project.project_img.includes('discord_logo') ? 'discord-logo' :
                        project.project_img.includes('quizizz_logo') ? 'quizizz-logo' :
                        project.project_img.includes('film-haven_logo') ? 'film-haven-logo' :
                        project.project_img.includes('github_logo') ? 'github-logo' : 'default-logo';

        /**
         *  Create the HTML for the project image and link
         */
        const imageHTML = project.proj_img_link
        ? `<a title="${project.proj_img_link_title}" href="${project.proj_img_link}" target="_blank">
                <img src="${project.project_img}" alt="${logoClass}">
            </a>`

        : `<img src="${project.project_img}" alt="${logoClass}">`;

        /**
        *  Append the project div to the coding container
        */
        projectDiv.innerHTML = `
            <div class="${logoClass}">
                ${imageHTML}
            </div>

            <h2>
                <a title="${project.proj_link_title}" href="${project.proj_link}" target="_blank" class="${project.proj_link_div_class}">
                    ${project.project_title}
                </a>
            </h2>

            <p class="project-desc">${project.project_desc}</p> <br>
        `;

        codingContainer.appendChild(projectDiv);
    });

    /**
    *  Loop through the animation projects and create div elements for each
    */
    animation_projects.forEach(animation => {
        /**
         * Create a new div element for each animation project
         */
        const videoDiv = document.createElement('div');
        videoDiv.classList.add('anim-project');

        /**
         *  Create the HTML for the animation project video
         */
        const videoHTML = `
            <video loading="lazy" playsinline controls> 
                <source src="${animation.anim_file}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;

        videoDiv.innerHTML = `<h2>${animation.anim_title}</h2> ${videoHTML}`;

        videoDiv.addEventListener('click', () => {
            const video = videoDiv.querySelector('video');

            if (video.paused) 
                video.play; 
            else 
                video.pause;
        });

        animationContainer.appendChild(videoDiv);
    });

});