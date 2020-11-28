


var nextSlide = $(".next");
var prevSlide = $(".prev");



nextSlide.click(function(){

    var immagineCorrente = $("img.active");
    var immagineSuccessiva = immagineCorrente.next();
    var immaginePrecedente = immagineCorrente.prev();
    var primaImmagine = $("img.first");
    var ultimaImmagine = $("img.last");
    
    // al click voglio rimuovere la classe
    // attiva alla prima immagine e aggiungerla 
    // alla seconda e cosi via.
    
    ////////////////SOLUZIONE CORRETTA///////////////
    if (immagineCorrente.hasClass("active") && immagineCorrente.hasClass("last")) {
        primaImmagine.addClass("active");
        ultimaImmagine.removeClass("active");
    } else {
        immagineCorrente.removeClass("active");
        immagineSuccessiva.addClass("active");
    }
    ////////////////////////////////////////////////////

    /* immagineCorrente.removeClass("active");
    immagineSuccessiva.addClass("active");

    if (immagineCorrente == ultimaImmagine) {
        primaImmagine.addClass("active");
        ultimaImmagine.removeClass("active");
    }  */

    

    /* $(".active").removeClass("active");
    $("img:nth-child(2)").addClass("active"); */

    

    /* $("img:nth-child(2)").removeClass("active");
    $("img:nth-child(3)").addClass("active"); */

    /* $("img.active").removeClass("active");
    $("img.active").addClass("active"); */
    
});

prevSlide.click(function () { 

    // al click voglio rimuovere la classe
    // attiva alla prima immagine e aggiungerla 
    // alla seconda e cosi via.

    

    /* $("img.active.first").removeClass("active");
    $(".last").addClass("active"); */

});



    
