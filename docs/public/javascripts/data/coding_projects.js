const coding_projects = [

    // Funkin-Definitive-Edition
     {
        title: "Funkin-Definitive-Edition",
        description: `
        My project, Funkin' Definitive Edition, was created on August 12, 2022. 
        <a title="Friday Night Funkin' - v0.2.7.1 SOURCE CODE" href="https://github.com/FunkinCrew/Funkin/tree/9780a415221eb2922a7243313a84ca42025ccca0" class="link" target="_blank"><strong>Friday Night Funkin's original engine</strong></a> contained a lot of bugs and errors at that time, and playing was frustrating. 
        Because I was bored and wanted to improve the experience, I decided to fix these bugs and implement my own modifications to improve the game. 
        I wrote this project in <strong>Haxe and HaxeFlixel</strong>, which allowed me to modify and optimize the game engine successfully. <br>
        `,

        url: "https://github.com/AnimatingLegend/Funkin-Definitive-Edition",
        url_title: "Funkin-Definitive-Edition - SOURCE CODE",
        url_div_class: "title-link",

        img: "/assets/website/projects/logos/funkin_logo.png",
        img_title: null,
        img_url: null,
        img_div_class: "funkin-logo"
     },

    // Film Haven (School Capstone Project)
     {
        title: "Film Haven",
        description: `
        Film Haven is a capstone project my friend <a title="Jerome 'cxrtierr' Foster" class="link" href="https://www.instagram.com/cxrtierr__/"><strong>Jerome Foster</strong></a> and I created in mid 2024 - mid 2025.
        It started when our web design teacher decided to assign us end-of-the-year capstone projects that we can work on with a partner.
        Since Jerome and I were a little late to this news and didnt have time to brainstorm new ideas, we decided to use his old capstone project idea from 2024, and expand on it further.
        The goal was to create a website where you could discover upcoming/current movie releases, read more on upcoming/current movie releases, and adding those movies onto a watchlist if you're interesed in them.
        Basically a more simplified version of <a title="Internet Movie Database (IMDb)" class="link" href="https://www.imdb.com" target="_blank"><strong>IMDb</strong></a>, and <a title="Letterboxd" class="link" href="https://letterboxd.com" target="_blank"><strong>Letterboxd</strong></a>. <br>
        The prototype was created using <strong>HTML</strong>, <strong>CSS</strong>, & <strong>JavaScript</strong>, while the final product was built using <strong>EJS</strong>, <strong>Node.js</strong>, & <strong>Express</strong>, Using <a title="TMDb (The Movie Database)" class="link" href="https://www.themoviedb.org/?language=en-US" target="_blank"><strong>TMDb (The Movie Database)</strong></a> for real-time movie data and content. 
        `,

        url_div_class: "title-link",
        url_title: "Film Haven - SOURCE CODE",
        url: "https://github.com/AaronAugustin/Film-Haven",

        img: "/assets/website/projects/logos/film-haven_logo.webp",
        img_title: "Film Haven - WEB DEMO",
        img_url: "https://27f5b35b-e2a9-4e63-b1b3-953c5f6a2328-00-1xwvakuju81we.worf.replit.dev",
        img_div_class: "film-haven-logo"
     },

    // discordbot_v14-template(discord project)
    /*
     {
        title: "Discordbot_v14-template",
        description: ``,

        url: "",
        url_title: "",
        url_div_class: "title-link",
       
        img: "/assets/website/projects/logos/discord_logos.png",
        img_title: "",
        img_url: "",
        img_div_class: "discord-logo"
     },
    */

    // Quizizz-Cheat
     {
        url_title: "Quizizz-Cheat - SOURCE CODE",
        url: "https://github.com/colorlol/quizizzcheat",
        url_div_class: "title-link",

        title: "Quizizz-Cheat",
        description: ` 
        During that same time in 2021, <a title="colorlol" href="https://github.com/colorlol" class="link" target="_blank"><strong>Tamesh</strong></a> and I also created Quizziz-Cheat, a small project that taught us the basics of <strong>inspect element</strong> and how to manipulate code in real time. 
        Since we frequently had to use <strong>Quizziz</strong> for schoolwork—which was both tedious and time-consuming—we figured, why not automate the process? 
        This script was written in <strong>JavaScript</strong> and worked by reading Quizziz's test data and automatically highlighting the correct answers. 
        Although the project was eventually discontinued and Quizziz patched the exploit, it was a great learning experience in understanding JavaScript strings and how web pages process data.
        `,

        img: "/assets/website/projects/logos/quizizz_logo.png",
        img_title: null,
        img_url: null,
        img_div_class: "quizizz-logo"
     }
];

console.log('--- coding projects loaded ---');
console.table(coding_projects);