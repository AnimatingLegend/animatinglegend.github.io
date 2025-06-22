const test_blog_posts = [
    // Nothing to see here folks !
];

const blog_posts = [
    {
        blog_title: `MONTH OF 2025/22/06: Film Haven: A Capstone Project`,
        shown_content: `
        <strong class="blog-headings-large">Introduction</strong> <br>
        Hello, happy Sunday, & long time no see!
        Sorry I was gone for 2 and half months, I was busy with a lot of things, including my final year of high school.
        While in high school, I was assigned a capstone project from my web design teacher, which I was able to complete within those 2 months called Film Haven.
        And I want to share the process of how I made it, and the final product.
        <br> <br>`,
        hidden_content:`
        <strong class="blog-headings-large">Section 1 - What is Film Haven?</strong> <br>
        <img src="../content/blogs/2025-22-06/film_haven_logo.png" class="thumbnail img-content-2" onclick="openLightbox(src)"> <br>
        Film haven is a web application where you can discover upcoming, and latest movie releases, read more on upcoming and movie releases, and can potentionaly add them onto your watchlist if you're interesed in it.
        It's basically like a more simplified version of <strong><a title="Letterboxed dot com" href="https://letterboxd.com" class="link" target="_blank">Letterboxd</a></strong> & <strong><a title="Rotten Tomatoes dot com" href="https://www.rottentomatoes.com" class="link" target="_blank">Rotten Tomatoes</a></strong>, but except a lot of features were cut!
        This project was created alongside one of my pals <strong><a title='Jerome "cxrtierr" Foster' href="https://www.instagram.com/cxrtierr__/" class="link" target="_blank">Jerome Foster</a></strong>, Using <strong>HTML (EJS)</strong>, <strong>Node.js</strong>, regular <strong>JS</strong>, and <strong>CSS</strong>, taking about a year to make.

        <br> <br>
        <strong class="blog-headings-large">Section 2 - The Process</strong> <br>
        The start of production was more or less simple. We had to create a simple framework of our prototype, find an API that supports Movie / TV data, and slowly build it up from there.
        The API used for this project was is called <strong><a title="The Movie Database dot com" class="link" href="https://www.themoviedb.org/?language=en-US" target="_blank">TMDb</a> (The Movie Database)</strong>.
        Around the start of development (like mid-late 2024), the API was very limited, so we only used a selected amount of features like "Genres", and "Watchlists", so thats exactly what we used.
        The design on the other hand was based on the Quentin Tarantino movie <strong>Pulp Fiction</strong>, using a lot of the colors and fonts for the website <strong><a href="../content/blogs/2025-22-06/film_haven_logo.png" class="link" target="_blank">seen from the logo above<a></strong>. <br>
        The prototype was completed within a 2 week range. It was made from scratch, using regular <strong>HTML</strong>, <strong>CSS</strong> & <strong>JS</strong>. The WHOLE prototype was programmed by Jerome, while I tweaked up a lot of the backend code afterwards.

        <br> <br>
        <strong class="blog-headings-medium">JEROMES PROTOTYPE:</strong> <br> <br>
        <img src="../content/blogs/2025-22-06/film_haven_proto.png" class="thumbnail img-content-3" onclick="openLightbox(src)">

        <br> <br>
        A lot of features were cut from the prototype like watchlists, and basic website navagation, so we just opted out on making a fun little website based on genres! <br> <br>

        <strong>
        So heres how the prototype (originally) worked: <br>
        - Since it WASN'T accesible to everyone, you would have needed to get an <strong>API key</strong> to use it. <br>
        - Once obtained, theres a list of genres if you clicked on the dropdown. <br>
        - If it clicked on anyone of those, then the array of movies would move in a conveyor belt like formation.
        </strong>

        <br> <br>
        <strong class="blog-headings-medium">RESULTS:</strong> <br> <br>
        <img src="../content/blogs/2025-22-06/film_haven_results.png" class="thumbnail img-content-3" onclick="openLightbox(src)">

        <br> <br>
        <strong class="blog-headings-large">Section 3 - The Final Product</strong> <br>
        Fast forward to early 2025, our web design teacher decided to assign us all to capstone projects. 
        So Jerome and I took the opportunity to go right back to our prototype, and implement the stuff that was originally cut from it.
        This is also the time where the API also got a huge revamp adding new features, and when we also started branching out with different coding languages like <strong>EJS</strong>, & <strong>Node</strong>. <br> <br>

        <strong>
        This is what the new website consisted of: <br>
        - Added a navagation bar. <br> 
        - Specific sections on where movie lists should go. <br>
        - Watchlist feature. <br>
        - Brand new 'Movie-Details' feature. <br>
        - Brand new Login / Signup system (it uses localStorage lmao) <br>
        </strong>

        This project took us about a couple months of planning, but only a couple weeks to code (procrastination got the best of us).

        <br> <br>
        <strong class="blog-headings-medium">FINAL WEBSITE:</strong> <br>
        <img src="../content/blogs/2025-22-06/film_haven_final.png" class="thumbnail img-content-2" onclick="openLightbox(src)">

        <br> <br>
        <strong class="blog-headings-medium">MOVIE DETIALS:</strong> <br>
        <img src="../content/blogs/2025-22-06/film_haven_details.png" class="thumbnail img-content-2" onclick="openLightbox(src)">

        <br> <br>
        <strong class="blog-headings-large">Section 4 - The future of Film Haven</strong> <br>
        Whats there really to say about about the future of film haven? It was a really fun project, and I'm glad to have been part of it, and glad to have worked on it!
        I might come back to it eventually, maybe host it on public servers and actually make it a "functional" website but for now, I'm taking a mini hiatus from it to focus on other things in my life.
        BUT if you do want to view Film Haven for yourself, a server is hosted through <strong><a title="Film Haven - WEB DEMO" href="https://27f5b35b-e2a9-4e63-b1b3-953c5f6a2328-00-1xwvakuju81we.worf.replit.dev" class="link" target="_blank">REPL</a></strong>.
        <strong>DISCLAIMER: since its being hosted throught REPL, it will only be hosted for a couple hrs a day.</strong> 
        
        <br> <br>
        Thank you for reading this months Blog post! and stay tuned for more! <strong>ᕕ( ᐛ )ᕗ</strong>

        <br> <br>
        <strong class="blog-headings-large">BONUS SECTION - SONG OF THE MONTH:</strong> <br>
        <iframe src="https://www.youtube.com/embed/ADFzno8_w8E" title="provider" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" class="yt-embed" allowfullscreen></iframe>

        <br> <br>
        <strong class="blog-headings-medium">Written By: Aaron Augustin</strong>
        `
    },

    {
        blog_title: `MONTH OF 2025/18/04: A FRESH START / SOURCE CODE OVERHAUL`,
        shown_content: `
        <strong class="blog-headings-large">Introduction</strong> <br>
        Hello all, and happy Friday! 
        I just wanted to quickly let you know that I deleted all my previous blog posts because I personally felt they were lazy and poorly written. So, I'm here to give you a well-thought-out and lengthy blog post instead.
        Think of it as a "fresh start," as if I've never made any blog posts before this one...
        <br> <br>`,
        hidden_content: `
        <strong class="blog-headings-large">Section 1 - Website Source Code</strong> <br>
        With that being said, I hope all is well! I mainly want to talk about the progress I've made on the website and the overall progress I've made with my FNF engine: <strong>Funkin-Definitive-Edition</strong>.
        To start, I did a MASSIVE overhaul on the website's source code—both in terms of functionality and how everything is displayed.
        I completely rewrote a majority of the backend code for the <strong><a href="projects.html" class="link">Projects</a></strong> section of the website.
        The way projects were displayed before was confusing and messy, especially in terms of how it was written on the backend.
        The data was broken up into four sections: <strong>Title, Description, Image & Link</strong>.
        Previously, I hardcoded a lot of the HTML elements into those four sections, which in hindsight was a hassle...
        I later realized this and decided to softcode most of the elements, so I wouldn't have to type as much HTML into those sections.
        I also decided to break the sections down into 8 - 10 slots, making everything neater, easier to read, and much more easier to implement!

        <br> <br>
        <strong class="blog-headings-medium">Before:</strong> <br> <br>
        <img src="../content/blogs/2025-18-04/project_code_BEFORE.png" class="thumbnail img-content-2" onclick="openLightbox(src)">

        <br> <br>
        <strong class="blog-headings-medium">After:</strong> <br> <br>
        <img src="../content/blogs/2025-18-04/project_code_AFTER.png" class="thumbnail img-content-2" onclick="openLightbox(src)">

        <br> <br>
        As for the "Source Code Overhaul," I reorganized a lot of files into specific folders/libraries so the workspace explorer looks cleaner and is easier to navigate.

        <br> <br>
        <strong class="blog-headings-medium">Old Workspace:</strong> <br> <br>
        <img src="../content/blogs/2025-18-04/source_code_overhaul_OLD.png" class="thumbnail img-content-1" onclick="openLightbox(src)">

        <br> <br>
        <strong class="blog-headings-medium">Updated Workspace:</strong> <br> <br>
        <img src="../content/blogs/2025-18-04/source_code_overhaul_NEW.png" class="thumbnail img-content-1" onclick="openLightbox(src)">

        <br> <br>
        <strong class="blog-headings-large">Section 2 - Funkin': Definitive Edition</strong> <br>
        Secondly, I just wanted to talk more about Funkin-Definitive-Edition (which you can <strong><a title="Funkin-Definitive-Edition - WEB DEMO" href="/content/funkin_definitive_edition" class="link" target="_blank">play now!</a></strong>).
        Over the past couple of weeks, I've been hard at work fixing a lot of the game's minor bugs and glitches to make it <strong>HTML</strong>-friendly and “website ready.”
        For starters, the game used to crash either on the boot-up screen or while loading into a song.
        After digging into it, I realized the issue had to do with how libraries were being handled in my engine...
        So I had to rewrite the file paths for songs and stages in <strong>Project.xml</strong> — and now everything loads properly.
        In terms of compatibility, FDE now supports <strong>Haxe v4.2.5</strong> and <strong>Haxeflixel v4.9.0</strong>.
        The only reason I updated versions is because people were having build issues, and the previous Haxe version (v4.1.5) was EXTREMELY outdated.
        If you want to build the game yourself or learn more about this issue, <strong><a title="Funkin-Definitive-Edition - BUILDING GUIDE" href="https://github.com/AnimatingLegend/Funkin-Definitive-Edition/blob/master-final/docs/guides/building.md" target="_blank" class="link">read this guide</a></strong>.
        There are still a few bugs, but they're pretty minor, and I'm actively working on the <strong><a title="Funkin-Definitive-Edition - HTML5 SOURCE CODE" href="https://github.com/AnimatingLegend/Funkin-Definitive-Edition/tree/master-HTML5" target="_blank" class="link">HTML5 version</a></strong> of the engine, so bugs are constantly being squashed.

        <br> <br>
        <strong class="blog-headings-medium">Photo Of Gameplay:</strong> <br> <br>
        <img src="../content/blogs/2025-18-04/fnf_fde_gameplay.png" class="thumbnail img-content-2" onclick="openLightbox(src)">

        <br> <br>
        <strong class="blog-headings-large">Conclusion</strong> <br>
        That pretty much wraps up everything I wanted to talk about in terms of the website and the game engine.
        Thanks for reading this semi-long blog post — hopefully there will be more to come in the near future! <strong>(*°∀°)=3</strong>

        <br> <br>
        <strong class="blog-headings-medium">SONG OF THE MONTH:</strong> <br>
        <iframe title="Easy Lovers (From &quot;Camille 2000&quot;) (Alternate Take)" src="https://www.youtube.com/embed/pE0-mVGFIOc" class="yt-embed"></iframe>

        <br> <br>
        <strong class="blog-headings-medium">Written By: Aaron Augustin | Updated: 2025/22/04</strong>`
    }
];