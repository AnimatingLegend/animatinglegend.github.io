const test_blog_posts = [
    // Nothing to see here folks !
];

const blog_posts = [
    {
        blog_title: `WEEK OF 2025/18/04: A FRESH START / SOURCE CODE OVERHAUL`,
        shown_content: `
        <strong class="blog-headings-large">Introduction</strong> <br>
        Hello all, and happy Friday! 
        I just wanted to quickly let you know that I deleted all my previous blog posts because I personally felt they were lazy and poorly written. So, I'm here to give you a well-thought-out and lengthy blog post instead.
        Think of it as a "fresh start," as if I've never made any blog posts before this one...
        <br> <br>`,
        hidden_content: `
        <strong class="blog-headings-large">Section 1 - Website Source Code</strong> <br>
        With that being said, I hope all is well! I mainly want to talk about the progress I've made on the webite and the overall progress I've made with my FNF engine: <strong>Funkin-Definitive-Edition</strong>.
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
        Secondly, I just wanted to talk more about Funkin-Definitive-Edition (which you can <strong><a title="Funkin-Definitive-Edition - WEB DEMO" href="/content/bin-release" class="link" target="_blank">play now!</a></strong>).
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
        <strong class="blog-headings-medium">SONG OF THE WEEK:</strong> <br>
        <iframe title="Easy Lovers (From &quot;Camille 2000&quot;) (Alternate Take)" src="https://www.youtube.com/embed/pE0-mVGFIOc" class="yt-embed"></iframe>

        <br> <br>
        <strong class="blog-headings-medium">Written By: Aaron Augustin</strong>`
    }
];