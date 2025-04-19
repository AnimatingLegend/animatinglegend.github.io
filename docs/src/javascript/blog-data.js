const test_blog_posts = [
    // Nothing to see here folks !
];

const blog_posts = [
    {
        blog_title: `WEEK OF 2025/18/04: A FRESH START / SOURCE CODE OVERHAUL`,
        shown_content: `
        <strong class="blog-headings-large">Introduction</strong> <br>
        Hello all, and happy Friday! 
        I just wanted to quickly inform you that I got rid of all previous blog post's because I personally thought they were lazy and horribly written, so I'm here to make a well thought out and lengthy blog post for you guys.
        Think of it as a "fresh start", like as I haven't made any blog post's prior to this new one...
        <br> <br>`,
        hidden_content: `
        <strong class="blog-headings-large">Section 1 - Website Source code</strong> <br>
        But with that being said, I hope all is well, and I mainly wanna talk about the progress I've made with the site, and the overall progress I've mad with my FNF Engine: <strong>Funkin-Definitive-Edition</strong>.
        For starters, I did a MASSIVE overhaul on the websites source code, in terms of functionality, and the way everything is displayed.
        I completely rewritten a majority of the backend code for the <strong><a href="projects.html" class="link">Projects</a></strong> Section of the website.
        The way projects were being displayed before was really confusing and messy in terms of how it's written backend wise.
        The data was broken up into 4 sections <strong>Title, Description, Image & Link</strong>.
        The way I went about programming it was by hardcoding a lot of the HTML elements into the 4 sections, which looking back at it was such a hassle...
        I later took note of this, and decided to softcode a lot of the elements so I'm not typing as much HTML into those sections.
        I also decided to break the sections down into 10 so everything is neat, easier to read and more easier to implement!

        <br> <br>
        <strong class="blog-headings-medium">Before:</strong> <br> <br>
        <img src="../content/blogs/2025-18-04/project_code_BEFORE.png" class="thumbnail img-content-2" onclick="openLightbox(src)">

        <br> <br>
        <strong class="blog-headings-medium">After:</strong> <br> <br>
        <img src="../content/blogs/2025-18-04/project_code_AFTER.png" class="thumbnail img-content-2" onclick="openLightbox(src)">

        <br> <br>
        And as for the "Source Code Overhaul", I rearranged a lot of file into specific folder/libraries so the workspace explorer looks more cleaner and easier to navagate.

        <br> <br>
        <strong class="blog-headings-medium">Old Workspace:</strong> <br> <br>
        <img src="../content/blogs/2025-18-04/source_code_overhaul_OLD.png" class="thumbnail img-content-1" onclick="openLightbox(src)">

        <br> <br>
        <strong class="blog-headings-medium">Updated Workspace:</strong> <br> <br>
        <img src="../content/blogs/2025-18-04/source_code_overhaul_NEW.png" class="thumbnail img-content-1" onclick="openLightbox(src)">

        <br> <br>
        <strong class="blog-headings-large">Section 2 - Funkin': Definitive Edition</strong> <br>
        For seconds, I just wanted to talk more about Funkin-Definitive-Edition. (by which you can <strong><a title="Funkin-Definitive-Edition - WEB DEMO" href="/content/bin-release" class="link" target="_blank">play now!</a></strong>)
        For the past couple of weeks, I've been hard at work trying to tweak up a lot of the game's minor bugs / glitches in order for it to be <strong>HTML</strong> friendly and "website ready".
        For starters, the game would always crash either on the boot-up screen, or when loading into a song.
        When looking further into it, I came to a conclusion figuring out it had something to do with how libraries work with my engine... 
        So I basically had to rewrite the file locations for songs and stages in <strong>Project.xml</strong> and everything was loading up pretty well.
        As for any other information about the game, FDE now supports <strong>Haxe v4.2.5</strong>, and <strong>Haxeflixel v4.9.0</strong>.
        The only reason I updated versions was because people were having building issues, and the previous haxe version the game was running on, (Haxe v4.1.5) was EXTREMELY OUTDATED.
        If you want to build the game yourself or learn more about this issue then <strong><a title="Funkin-Definitive-Edition - BUILDING GUIDE" href="https://github.com/AnimatingLegend/Funkin-Definitive-Edition/blob/master-final/docs/guides/building.md" target="_blank" class="link">read this guide</a></strong>.
        There still are some bugs, but they're pretty miniscule, and I'm actively working on the <strong><a title="Funkin-Definitive-Edition - HTML5 SOURCE CODE" href="https://github.com/AnimatingLegend/Funkin-Definitive-Edition/tree/master-HTML5" target="_blank" class="link">HTML5 version</a></strong> of the engine, so bugs are constantly getting squashed.

        <br> <br>
        <strong class="blog-headings-medium">Photo Of Gameplay:</strong> <br> <br>
        <img src="../content/blogs/2025-18-04/fnf_fde_gameplay.png" class="thumbnail img-content-2" onclick="openLightbox(src)">

        <br> <br>
        <strong class="blog-headings-large">Conclusion</strong> <br>
        That pretty much wraps up everything I wanted to talk about in terms of my website, and my game engine.
        Thank you for reading this semi-long blog post, and hopefully there will be more in the mere future! <strong>(*°∀°)=3</strong>

        <br> <br>
        <strong class="blog-headings-medium">SONG OF THE WEEK:</strong> <br>
        <iframe title="Easy Lovers (From &quot;Camille 2000&quot;) (Alternate Take)" src="https://www.youtube.com/embed/pE0-mVGFIOc" class="yt-embed"></iframe>

        <br> <br>
        <strong class="blog-headings-medium">Written By: Aaron Augustin</strong>`
    }
];