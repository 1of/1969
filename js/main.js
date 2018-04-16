// Executes when the HTML document is loaded and the DOM is ready
$(document).ready(function() {


    $(".rect-sl").on('click', function(event){
    	event.preventDefault();
        var id  = $(this).find("a").attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });

    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
    });



});

// .load() когда загружены даже картинки
$(window).on("load", function() {

     // Executes when complete page is fully loaded, including
     // all frames, objects and images
     //alert("Window is loaded");
});
