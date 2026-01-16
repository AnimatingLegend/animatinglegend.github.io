window.addEventListener('scroll', () => {
     // -- navbar -- \\
     const nav = document.querySelector('.navagation-bar');

     // -- check if the page has been scrolled down more than 50px -- \\
     // -- if so, add the 'scrolled' class to the header -- \\
     if (window.scrollY > 50) 
          nav.classList.add('scrolled'); 
     else 
          nav.classList.remove('scrolled');
 });