const codingContainer = document.getElementById('coding-container');
const animationContainer = document.getElementById('anim-container');

coding_projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('coding-project');

    const logoClass = project.project_img.includes('funkin_logo') ? 'funkin-logo' :
                      project.project_img.includes('discord_logo') ? 'discord-logo' :
                      project.project_img.includes('quizizz_logo') ? 'quizizz-logo' :
                      project.project_img.includes('github_logo') ? 'github-logo' : 'default-logo';

    /**
     * My dumbass has been hardcoding the link titles and shit the whole time.
     * took my time and softcoded the way projects get displayed in some aspects
     * everything should be properly working now...
     */
   const imageHTML = project.proj_img_link
   ? `<a title="${project.proj_img_link_title}" href="${project.proj_img_link}" target="_blank">
        <img src="${project.project_img}" alt="${logoClass}">
    </a>`

   : `<img src="${project.project_img}" alt="${logoClass}">`;

    projectDiv.innerHTML = `
        <div class="${logoClass}">
            ${imageHTML}
        </div>

        <h2>
            <a title="${project.proj_link_title}" href="${project.proj_link} target="_blank" class="${project.proj_div_class}">
                ${project.project_title}
            </a>
        </h2>

        <p class="project-desc">${project.project_desc}</p> <br>
    `;

    codingContainer.appendChild(projectDiv);
});

animation_projects.forEach(animation => {
    const videoDiv = document.createElement('div');
    videoDiv.classList.add('anim-project');

    const videoHTML = `
        <video controls loading="lazy"> 
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