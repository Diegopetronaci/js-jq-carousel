var nextSlide = $(".next");
var prevSlide = $(".prev");

nextSlide.click(function(){

    // al click voglio rimuovere la classe
    // attiva alla prima immagine e aggiungerla 
    // alla seconda e cosi via.

    $(".active").removeClass("active");
    $("img:nth-child(2)").addClass("active");
    /* $("img:nth-child(2)").removeClass("active");
    $("img:nth-child(3)").addClass("active"); */
    
});

prevSlide.click(function () {

    // al click voglio rimuovere la classe
    // attiva alla prima immagine e aggiungerla 
    // alla seconda e cosi via.

    /* $("img.active.first").removeClass("active");
    $(".last").addClass("active"); */
    
});



    
