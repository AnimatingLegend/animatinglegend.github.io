// This is for implementing coding projects
const codingContainer = document.getElementById('coding-container');

codingProjects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('coding-project');

    const logoClass = project.image.includes('FNF-Logo') ? 'fnf-logo' :
                      project.image.includes('Discord-Logo') ? 'discord-logo' :
                      project.image.includes('Quizizz-Logo') ? 'quiz-logo' :
                      project.image.includes('Github-Logo') ? 'github-logo' : 'default-logo';

    const imageHTML = project.link 
        ? `<a title="Click to play FDE Demo" href="${project.link}" target="_blank">
                <img src="${project.image}" alt="${logoClass}">
           </a>`
        : `<img src="${project.image}" alt="${logoClass}">`;

    projectDiv.innerHTML = `
        <div class="${logoClass}">${imageHTML}</div>
        <h2>${project.title}</h2>
        <p class="project-desc">${project.description}</p> <br>
    `;

    codingContainer.appendChild(projectDiv);
});

// This is for implementing animation projects
const animationContainer = document.getElementById('anim-container');

animProjects.forEach(animation => {
    const videoDiv = document.createElement('div');
    videoDiv.classList.add('anim-project');

    const videoHTML = `
        <video controls loading="lazy"> 
            <source src="${animation.video}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;

    videoDiv.innerHTML = `
        <h2>${animation.title}</h2>
        ${videoHTML}
        <!-- <p class="animation-desc">${animation.description}</p> -->
    `;

    videoDiv.addEventListener('click', () => {
        const video = videoDiv.querySelector('video');

        if (video.paused) 
            video.play; 
        else 
            video.pause;
    });

    animationContainer.appendChild(videoDiv);
});