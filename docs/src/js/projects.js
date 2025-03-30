const  projects = [
    // Funkin-Definitive-Edition
    {
        title: '<a title="Funkin-Definitive-Edition Github Repo" href="https://github.com/AnimatingLegend/Funkin-Definitive-Edition" class="FDE" target="_blank">Funkin-Definitive-Edition</a>',
        description: `My project, Funkin' Definitive Edition, was created on August 12, 2022. 
        <a title="Friday Night Funkin Old Github Repo" href="https://github.com/FunkinCrew/Funkin/tree/legacy/0.2.x" class="FNF" target="_blank"><strong>Friday Night Funkin's original engine</strong></a> contained a lot of bugs and errors at that time, and playing was frustrating. 
        Because I was bored and wanted to improve the experience, I decided to fix these bugs and implement my own modifications to improve the game. 
        I wrote this project in <strong>Haxe and HaxeFlixel</strong>, which allowed me to modify and optimize the game engine successfully.`,
        image: '../assets/images/logos/FNF-Logo.png',
        link:'/content/FDE-WEB-DEMO/'
    },

    // Colorbot / Legbot-Host
    {
        title: '<strong><a title="ColorBot-Host Github Repo" class="colorbot-host" href="https://github.com/colorlol/colorbothost" target="_blank">ColorBot</a> / <a title="Legbot-Host Github Repo" class="legbot-host" href="https://github.com/AnimatingLegend/legbothost" target="_blank">Legbot-Host</a></strong>',
        description: `Two projects in the same category, <strong>Legbot-Host, and Colorbot-host</strong>. 
        Legbot-host was a Discord bot that I made with my friend <a title="colorlol" href="https://github.com/colorlol" class="colorlol" target="_blank"><strong>Tamesh</strong></a> during the 2021 pandemic. 
        We were spending so much time on Discord with not much else going on, so we figured we'd learn <strong>Node.js</strong> and create a bot that could tell jokes, display the weather, and even generate images of pets. 
        This experience built upon my earlier work with Discord bots, including Tamesh's Colorbot, where I first explored basic bot functionality. 
        Legbot-Host expanded on these foundational skills, allowing us to implement more complex features. 
        It was an awesome learning experience and a good time that helped us improve our coding skills 
        Though I did cease to develop the bot sometime in 2022, it was a fantastic learning experience about how to go about developing bots and dealing with real-time APIs.`,
        image: '../assets/images/logos/Discord-Logo.png',
        link: null
    },

    // Quizizz-Cheat
    {
        title: '<a title="Quizizz-cheat Github Repo" href="https://github.com/colorlol/quizizzcheat" class="quiz" target="_blank">Quizizz Cheat</a>',
        description: `During that same time in 2021, <a title="colorlol" href="https://github.com/colorlol" class="colorlol" target="_blank"><strong>Tamesh</strong></a> and I also created Quizziz-Cheat, a small project that taught us the basics of <strong>inspect element</strong> and how to manipulate code in real time. 
        Since we frequently had to use <strong>Quizziz</strong> for schoolwork—which was both tedious and time-consuming—we figured, why not automate the process? 
        This script was written in <strong>JavaScript</strong> and worked by reading Quizziz's test data and automatically highlighting the correct answers. 
        Although the project was eventually discontinued and Quizziz patched the exploit, it was a great learning experience in understanding JavaScript strings and how web pages process data.`,
        image: '../assets/images/logos/Quizizz-Logo.png',
        link: null
    }
];

const projectContainer = document.getElementById('projects-container');

projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

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
        <div class="${logoClass}">
            ${imageHTML}
        </div>
        <h2>${project.title}</h2>
        <p class="project-desc">${project.description}</p> <br>
    `;

    projectContainer.appendChild(projectDiv);
});