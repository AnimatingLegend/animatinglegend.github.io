const coding_container = document.getElementById('coding-container');
const anim_container = document.getElementById('anim-container');

// ==============================
// Array of coding projects
// ===============================
coding_projects.forEach(project => {
     // === Create a new div element for each coding project === \\
     const project_div = document.createElement('div');
     project_div.classList.add('coding-projects');

     // === Determine the logo class based on the project img URL === \\
     const logoClass = project.img.includes('funkin_logo') ? 'funkin-logo' :
                    project.img.includes('discord_logo') ? 'discord-logo' :
                    project.img.includes('quizizz_logo') ? 'quizizz-logo' :
                    project.img.includes('film-haven_logo') ? 'film-haven-logo' :
                    project.img.includes('github_logo') ? 'github-logo' : 'default-logo';

     // === Create the HTML for the project img and link === \\
     const IMAGE_HTML = project.img_url 
     ? `<a title="${project.img_title}" href="${project.img_url}" target="_blank">
          <img src="${project.img}" alt="${logoClass}">
     </a>`
     : `<img src="${project.img}" alt="${logoClass}">`;

     // === Append the project div to the coding container === \\
     project_div.innerHTML = `
          <div class="${logoClass}">
               ${IMAGE_HTML}
          </div>

          <h2>
               <a title="${project.url_title}" href="${project.url}" class="${project.url_div_class}" target="_blank">
                    ${project.title}
               </a>
          </h2>

          <p class="project-desc">${project.description}</p> <br>
     `;

     coding_container.appendChild(project_div);
});

// ==============================
// Array of animation projects
// ===============================
animation_projects.forEach(animation => {
     // === Create a new div element for each animation project === \\
     const video_div = document.createElement('div');
     video_div.classList.add('anim-project')

     // === Create the HTML for the animation video === \\
     const VIDEO_HTML = `
          <video loading="lazy" playsinline controls>
               <source src="${animation.anim_url}" type="video/mp4">
               Your browser doesn't support the video tag.
          </video>
     `;
         
    video_div.innerHTML = `<h2>${animation.anim_title}</h2> ${VIDEO_HTML}`;

     // === Append the video div to the animation container === \\
     video_div.addEventListener('click', () => {
          const video = video_div.querySelector('video');

          if (video.paused) video.play();
          else video.pause();
     });

     anim_container.appendChild(video_div);
});