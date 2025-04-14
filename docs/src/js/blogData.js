const blogPosts = [
    {
        title: `Test Blog Post #3: Enhanced Images`,
        shownContent: `
        As much as I liked the way I coded images onto my site, I kinda hated the fact that they were so small on mobile devices. 
        What pissed me off more is the fact that you CAN'T enchance the photo if you click on it, So now I'm here to change it. 
        I'm just testing out this feature by using <strong>Javascript</strong> & <strong>HTML</strong>, so these are subject to change.
        
        <br> <br>
        `,
        hiddenContent: `
        <strong class="blog-headings">It may look like a regular image, but try clicking on it!</strong> <br>

        <!-- base thumbnail image -->
        <img src="../content/blogs/2025-13-04/spongbob_meme_img.jpg" class="thumbnail img-content-1" alt="thumbnail" onclick="openLightbox(src)">

        <br> <br>

        I applied this feature to my recent blog post, so for people who want to view the image better on mobile, you can!

        <br> <br>

        <strong>THIS POST WILL BE DELETED SOON, THIS IS FOR FEATURE TESTING ONLY</strong>

        <br> <br>

        <strong>Written By: Aaron Augustin, 4/13/2025 </strong>
        `
    },

    {
        title: `Blog Post #3: Funkin' Definitive Edition - Web Demo`,
        shownContent: `
        Hello, and welcome back to another blog post!

        <br> <br>

        For the past two weeks I've been at work trying to optimize the website as much as possible, as well as fix up my FNF engine.
        And I'm proud to say that after two full weeks, of endless coding, and crying, it's finally fixed and running!
        A lot of changes & fixes were made, and I'm going to cover them in this blog post.

        <br> <br>
        `,
        hiddenContent: `
        For starters, the bug fixes. 
        When I first started working on the HTML5 version of my engine I encountered a lot of compiling, and in-game issues; and it all came down to compiling.
        Before the update, my engine was running <strong>Haxe 4.1.5 & haxeflixel 4.8.0</strong>. 
        But recently it seemed like those two versions are currently outdated so I had to update to a more 'newer' version.
        The engine now supports <strong>Haxe 4.2.5 & Haxeflixel 4.10.0</strong>, still old versions but new in terms of how the game runs.
        If you're looking on building and compiling the game yourself, then <a title="FDE BUILDING GUIDE" href="https://github.com/AnimatingLegend/Funkin-Definitive-Edition/blob/master-final/docs/guides/building.md" class="link" target="_blank">Follow this guide</a>.
        After compiling, I ran into a lot of bugs involving preloading assets like songs, stages, character etc. 
        So I had to COMEPLETELY REWRITE the way those assets are preloaded, both in <strong>Project.xml</strong> & <strong>PlayState.hx</strong>.
        I spent the most time on this one because even after I thought I fixed the issue, more preloading problems popped up. 
        But after testing on multiple devices, it should be running perfectly fine.

        <br> <br>

        For seconds and for last, the changes.
        Since it's my first time coming back to the engine in over 4 months, I decided I wanted to make a few changes to it for optimization purposes.
        I changed the file locations for the song charts, I cached the song charts aswell as the songs themselves, and I tweaked up some song charts also, like 'winter-horrorland'.
        As of writing this blog post, there are some more things that I'm going to change in the following days/weeks. 
        
        <br> <br>

        <strong class="blog-headings">Photo of gameplay:</strong> <br>

        <img src='../content/blogs/2025-07-04/fnf_fde_gameplay.png' alt="1280-720 thumbnail" class="img-content-2 thumbnail" onclick="openLightbox(src)">

        <br> <br>

        <strong class="blog-headings">Song of the week:</strong> <br> 

        <audio controls class="music-content">
            <source src="../content/blogs/2025-07-04/give_a_lil_bit_back.mp3" type="audio/mp3">
        </audio>

        <br> <br>

        If you're thinking about playing the game then <a title="FDE-WEB-DEMO" href="/content/bin-release" class="link" target="_blank">click here!</a> 

        <br> <br>

        Thank you for reading this quick blog post, and hope you enjoy the engine !

        <br> <br>

        <strong>Written by: Aaron Augustin, 4/7/2025 | UPDATED 4/13/2025</strong>
        `
    },

    {
        title: "Test Blog Post #2: Photos, Videos & Music",

        shownContent: `
        When making my last blog post, I had an idea to start implementing photos, videos AND music into my blog posts. 
        So I'm just adding this here to get an idea of how it will look. If I have anyother ideas then I'll just add them here :]

        <br> <br>

        (I also just want to tackle the CSS part of this feature so I don't have to stress about it when the times comes lol)
        `,

        hiddenContent: `

        <br> <br>

        <img src='../content/blogs/2025-01-04/placeholder-img-1.png' alt="600-400" class="img-content-1"> <br>
        <img src='../content/blogs/2025-01-04/placeholder-img-2.png' alt="1280-720" class="img-content-2"> <br>
        <img src='../content/blogs/2025-01-04/placeholder-img-3.png' alt="1920-1080" class="img-content-3"> <br>

        <br> <br>

        <video controls class="video-content"> 
            <source src="../content/blogs/2025-01-04/placeholder-video.mp4" type="video/mp4">
        </video>

        <br> <br>

        <strong>The song being used is a copyrighted placeholder and will be subjected to change soon.</strong> <br> <br>

        <audio controls class="music-content"> 
            <source src="../content/blogs/2025-01-04/placeholder-audio.mp3" type="audio/mpeg">
        </audio>

        <br> <br>

        <strong>THIS POST WILL BE DELETED SOON, THIS IS FOR FEATURE TESTING ONLY</strong>

        <br> <br>

        <strong>Written By: Aaron Augustin, 4/1/2025</strong>

        <br> <br>

        <strong>UPDATED: 4/13/2025 </strong>
        `,
    },

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

    {
        title: "Test Blog post #1 - 3/23/2025",
        shownContent: `
            Hello, welcome to my first blog post! 
            I'm still trying to work on some backend stuff for this page so I may or may not get some good use out of this page very soon!
            If you take a look at the <a href="https://github.com/AnimatingLegend/animatinglegend.github.io/blob/main/docs/blog.html" class="blog-links" target="_blank"><strong>source code</strong></a>, the way I'm currently writing my blogs is horrendous. <br> <br>`,
        hiddenContent: `
            Later down the weeks, blogs will be written in a different format instead of straight <strong>HTML</strong> and <strong>CSS</strong>. 
            And the code for this page will undergo massive improvements and better optimization, <strong>frontend & backend</strong>. <br> <br>
            Thanks for reading! <br> <br>
            <strong>Written By: Aaron Augustin</strong>
        `
    }
];