/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
<script>
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery.style2.medium.lightbox.onscroll-fade-in');
    gallery.addEventListener('wheel', function(e) {
        if (e.deltaY > 0) {
            gallery.scrollLeft += 100;
        } else {
            gallery.scrollLeft -= 100;
        }
        e.preventDefault();
    });
});
</script>
