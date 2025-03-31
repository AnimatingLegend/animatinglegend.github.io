const blogPosts = [
    {
        title: "Blog Post #2: Backend, FNF & Animations - 3/31/2025",

        shownContent: `
        Hello again, and welcome back to another blog post !! 
        
        <br> <br>

        Today I wanted to take a <strong>*little*</strong> step back from implementing new features and work more on backend stuff for my website. 
        For starters, I did a massive overhaul on the source code. I wanted to keep things organized in folders instead of it being overwhelming and scattered all over the place.
        So for users viewing the <a href="https://github.com/AnimatingLegend/animatinglegend.github.io" class="link" target="_blank">Portfolio Source Code</a> now, it should look WAY more cleaner and readable. 
        
        <br> <br>
        `,

        hiddenContent: `
        For seconds, I quickly wanted to mention that I started working on more backend stuff for data.js. 
        My projects are now being rendered here aswell as my blog post's the file looks a little messy, but it keeps the rest of the website optimized and clean so im not complaining. 
        
        <br> <br>

        For thirds, I wanted to take a step back and work more on my engine 'Funkin-Definitive-Edition', because 1: it's WAS on an outdated version of haxe/haxeflixel, and 2: the HTML5 version of the game was having issues running.
        So I merged the engine from Haxe 4.1.5, - Haxe 4.3.5. Along side that, I have to update each and every single haxe depenency I had, and along that came a WHOLE bunch of compliling issues. 
        Now for people who want to compile my engine using the latest version of haxe, I saved you the trouble and made my haxe dependencies <a href="https://github.com/AnimatingLegend/Funkin-Haxe-Libraries" class="link" target="_blank">open sourced!!</a> 
        I also completely removed the use of Polymod for my engine, because my engine isn't intended for modding purposes, more as in performance and coding experience. The engine is still undergoing bug maintenance but I squashed a lot of the bugs today, and it should be playable across on my website now! 
        
        <br <br> <br>

        And to conclude this short blog, I wanted to mention that I implmented my animations onto my website! I was holding it off for so long, and for good reason.
        But now that the website is in good shape, everything is polished and optimized, I decided to start adding them here. Theres only 3 currently up right now, but there is more to come in the following weeks! 
        
        <br> <br>

        That basically covers up about 2 days worth of progress. Thank you for sticking with me, and there will be more updates to in the following days! 
        
        <br> <br>

        <strong>Written By: Aaron Augustin</strong>
        `
    },

    {
        title: "Blog Post #1: Changes & Tweaks! - 3/28/2025",

        shownContent: `
            Hello, welcome to my first initial blog post! <br> <br>

            I have made some changes to the ENTIRE WEBSITE. But I mainly got some work on the blog page. 
            The blog posts are now dynamically rendered from a data.js file instead of being hardcoded in the HTML. 
            This allows for easier management and updates to the blog posts without having to modify the HTML directly.
            <br> <br>`,

        hiddenContent: `
            I have also added a "Show More" button that will reveal the hidden content of each blog post when clicked.
            This makes the page cleaner and allows users to focus on the main content first. <br> <br>

            As for the projects page & Main page, I have made some minor changes to the layout and design.
            The projects page now has a more organized layout when it comes to code. 
            Images are now softcoded and loads up instantly instead of taking 2-3 seconds to load up.
            Theres a lot more I have to when it comes to the projects page, but for now, it is a lot better than before. <br> <br>

            As for the main page, I have made some noticable changes to the layout.
            I removed a lot of the <strong>bold</strong> text within my little about me section so its more readable and less cluttered.
            I also spaced out the text a <strong>*tad*</strong> bit so it's not so cramped up on certain devices (most notably mobile devices).
            I got rid of the contact links, because whats the point of having them when you can just click the icons on the bottom of the page? lol.
            And I also made the PDF icon look 'clickable' by adding a hover effect to it. <br> <br>

            A lot was done today, and I am very happy with the results.

            I will continue to work on improving the website and adding more features in the future. Stay tuned! <br> <br>

            <strong>Written By: Aaron Augustin</strong>
        `
    },
];

const animProjects = [
    {
        title: `Video Games <br> [FLASH ANIMATION]`,
        video: `../assets/videos/Video_Games.mp4`
    },

    {
        title: `Bensons Crank <br> [REGULAR SHOW ANIMATION]`,
        video: `../assets/videos/Bensons_Crank.mp4`
    },

    {
        title: `Mexican Joker <br> [SOUTH PARK TEST ANIMATION]`,
        video: `../assets/videos/Mexican_Joker_Test.mp4`
    }
];

const codingProjects = [
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

    // animatinglegend.github.io
    {
        title: `<a title="animatinglegend.github.io Official Github Repo" href="https://github.com/AnimatingLegend/animatinglegend.github.io" class="GIT" target="_blank">animatinglegend.github.io</a>`,
        description: `<strong>Click the title, or the icon above to view the official repository for this website !!!</strong>`,
        image: '../assets/images/logos/Github-Logo.png',
        link: `https://github.com/AnimatingLegend/animatinglegend.github.io`
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
