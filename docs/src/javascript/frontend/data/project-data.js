const animation_projects = [
    {
        anim_title: `Video Games <br> [FLASH ANIMATION]`,
        anim_file: `../assets/videos/animations/Video_Games_FINAL.mp4`
    },

    {
        anim_title: `Bensons Crank <br> [REGULAR SHOW ANIMATION]`,
        anim_file: `../assets/videos/animations/Bensons_Crank.mp4`
    },

    {
        anim_title: `Mexican Joker <br> [SOUTH PARK TEST ANIMATION]`,
        anim_file: `../assets/videos/animations/Mexican_Joker_Test.mp4`
    }
];

const coding_projects = [

    // Funkin-Definitive-Edition
    {
        proj_img_link_title: "Funkin-Definitive-Edition - WEB DEMO",
        proj_img_link: "https://animatinglegend.github.io/content/funkin_definitive_edition/",

        proj_link_div_class: "FNF",
        proj_link_title: "Funkin-Definitive-Edition - SOURCE CODE",
        proj_link: "https://github.com/AnimatingLegend/Funkin-Definitive-Edition",

        project_title: "Funkin-Definitive-Edition",
        project_desc: `
        My project, Funkin' Definitive Edition, was created on August 12, 2022. 
        <a title="Friday Night Funkin' - v0.2.7.1 SOURCE CODE" href="https://github.com/FunkinCrew/Funkin/tree/9780a415221eb2922a7243313a84ca42025ccca0" class="FNF" target="_blank"><strong>Friday Night Funkin's original engine</strong></a> contained a lot of bugs and errors at that time, and playing was frustrating. 
        Because I was bored and wanted to improve the experience, I decided to fix these bugs and implement my own modifications to improve the game. 
        I wrote this project in <strong>Haxe and HaxeFlixel</strong>, which allowed me to modify and optimize the game engine successfully. <br>
        `,
        project_img: "../assets/images/logos/funkin_logo.png",
        project_img_class: "funkin-logo",
        project_link: "/content/funkin_definitive_edition"
    },

    // animatinglegend.github.io (portfolio)
    {
        proj_link_div_class: "GIT",
        proj_link_title: "animatinglegend.github.io - SOURCE CODE",
        proj_link: "https://github.com/AnimatingLegend/animatinglegend.github.io",

        project_title: "animatinglegend.github.io",
        project_desc: `
        This website is a personal project I started around early 2025.
        It started when I had a conversation with one of my teachers about building a resume and a mini portfolio to keep all my work in one place.
        The goal was to have something I could share when looking for good job opportunities in the mere future. <br>
        At the time I had a lot I was doing for school, so I'd have to put that idea on hold. 
        A few months later, (like around January or February) I finally had time to sit down and get started. <br>
        This site was made from scratch using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Javascript</strong>, with the chunk of knowledge I had from my Web Design class. <br>
        I'm still actively working on it, making updates and changes as I go, and planning to add more features over time.
        `,
        project_img: "../assets/images/logos/github_logo.png",
        project_img_class: "github-logo",
        project_link: null
    },

    // Film Haven (School Capstone Project)
    {
        proj_link_div_class: "film-haven",
        proj_link_title: "Film Haven - SOURCE CODE",
        proj_link: "https://github.com/AaronAugustin/Film-Haven",

        project_title: "Film Haven",
        project_desc: `
        Film Haven is a web application built for users to discover new films, explore detailed information, and curate personalized watchlists—all in one seamless experience. <br>

        Inspired by platforms like 
        <a title="Rotten Tomatoes" href="https://www.rottentomatoes.com" class="film-haven" target="_blank"><strong>Rotten Tomatoes</strong></a>, 
        <a title="Internet Movie Database (IMDb)" href="https://www.imdb.com" class="film-haven" target="_blank"><strong>IMDb</strong></a>, and 
        <a title="Letterboxd" href="https://letterboxd.com" class="film-haven" target="_blank"><strong>Letterboxd</strong></a>, Film Haven offers a clean, intuitive interface tailored for movie lovers. <br>

        This project was developed as part of my school’s capstone program, in collaboration with my friend 
        <a title="cxrtierr__" href="https://www.instagram.com/cxrtierr__/" class="film-haven" target="_blank"><strong>Jerome Foster</strong></a>. <br>

        Over a six-month development period, we used a full-stack approach combining 
        <strong>HTML (.EJS)</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>Node.js</strong>, with <strong>Express</strong> powering the backend. <br> 
        We also integrated an API called <a title="The Movie Database (TMDb API)" href="https://www.themoviedb.org/?language=en-US" target="_blank" class="film-haven"><strong>TMDB (The Movie Database)</strong></a> for real-time film data and content. <br>

        Film Haven is more than just a movie site—it's a passion project designed to elevate how people explore, discuss, and connect through cinema.
        `,
        project_img: "../assets/images/logos/film-haven_logo.webp",
        project_img_class: "film-haven-logo",
        project_link: null
    },

    // Legbot-Host (discord project)
    {
        proj_link_div_class: "legbot-host",
        proj_link_title: "Legbot-Host - SOURCE CODE",
        proj_link: "https://github.com/AnimatingLegend/legbothost",

        project_title: "Legbot-Host",
        project_desc: ` 
        Legbot-host was a Discord bot that I made with my friend <a title="colorlol" href="https://github.com/colorlol" class="colorlol" target="_blank"><strong>Tamesh</strong></a> during the 2021 pandemic. 
        We were spending so much time on Discord with not much else going on, so we figured we'd learn <strong>Node.js</strong> and create a bot that could tell jokes, display the weather, and even generate images of pets. 
        This experience built upon my earlier work with Discord bots, including Tamesh's <a title="Colorbot-Host - SOURCE CODE" href="https://github.com/colorlol/colorbothost" target="_blank" class="colorlol"><strong>Colorbot</strong></a>, where I first explored basic bot functionality. 
        Legbot-Host expanded on these foundational skills, allowing us to implement more complex features. 
        It was an awesome learning experience and a good time that helped us improve our coding skills 
        Though I did cease to develop the bot sometime in 2022, it was a fantastic learning experience about how to go about developing bots and dealing with real-time APIs.
        `,
        project_img: "../assets/images/logos/discord_logo.png",
        project_img_class: "discord-logo",
        project_link: null
    },

    // Quizizz-Cheat
    {
        proj_link_div_class: "quiz",
        proj_link_title: "Quizizz-Cheat - SOURCE CODE",
        proj_link: "https://github.com/colorlol/quizizzcheat",

        project_title: "Quizizz-Cheat",
        project_desc: ` 
        During that same time in 2021, <a title="colorlol" href="https://github.com/colorlol" class="colorlol" target="_blank"><strong>Tamesh</strong></a> and I also created Quizziz-Cheat, a small project that taught us the basics of <strong>inspect element</strong> and how to manipulate code in real time. 
        Since we frequently had to use <strong>Quizziz</strong> for schoolwork—which was both tedious and time-consuming—we figured, why not automate the process? 
        This script was written in <strong>JavaScript</strong> and worked by reading Quizziz's test data and automatically highlighting the correct answers. 
        Although the project was eventually discontinued and Quizziz patched the exploit, it was a great learning experience in understanding JavaScript strings and how web pages process data.
        `,
        project_img: "../assets/images/logos/quizizz_logo.png",
        project_img_class: "quizizz-logo",
        project_link: null
    }
];
