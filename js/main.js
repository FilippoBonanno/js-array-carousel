// Recupero tutti gli elementi necessari da gestire
let slides = document.getElementsByClassName("slide");
console.log(slides);
let imgActive;
let nextSlide;

// INSERISCO UN EVENTLISTNER CHE SOLO AL CLICK MI INCLUDA TUTTO QUELLO CHE AVEVO INSERITO
document.getElementById("next").addEventListener("click", function () {
    // CREO UN CICLO CHE AUMENTI DI 1 E CHE FINISCA QUANDO ARRIVA A < DI 5 IN QUESTO CASO
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        console.log(i);

        // SE CONTIENE LA CLASSE ACTIVE GLIELA TOLGO
        if (slide.classList.contains("active")) {
            //se si, rimuovo la classe active
            slide.classList.remove("active");
            //e prendo nota dell'indice
            imgActive = i;
            console.log("Ho rimosso la classe active dall'elemento: ", i);
        }
    }

    // ADESSO DICO CHE LA SLIDE SUCCESSIVA è QUELLA ATTIVA + 1
    nextSlide = imgActive + 1;
    console.log (nextSlide);

    if (nextSlide >= slides.length) {
        nextSlide = 0;
    }
    
    // METTO ACTIVE ALLA SLIDE SUCCESSIVA
    slides[nextSlide].classList.add("active");
    console.log (`classe attiva: ${nextSlide}`);
});

// INSERISCO UN EVENTLISTNER CHE SOLO AL CLICK MI INCLUDA TUTTO QUELLO CHE AVEVO INSERITO
document.getElementById("prev").addEventListener("click", function () {
    // CREO UN CICLO CHE AUMENTI DI 1 E CHE FINISCA QUANDO ARRIVA A < DI 5 IN QUESTO CASO
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        console.log(i);

        // SE CONTIENE LA CLASSE ACTIVE GLIELA TOLGO
        if (slide.classList.contains("active")) {
            //se si, rimuovo la classe active
            slide.classList.remove("active");
            //e prendo nota dell'indice
            imgActive = i;
            console.log("Ho rimosso la classe active dall'elemento: ", i);
        }
    }

    // ADESSO DICO CHE LA SLIDE SUCCESSIVA è QUELLA ATTIVA + 1
    nextSlide = imgActive - 1;
    console.log (nextSlide);

     if (nextSlide < 0) {
         nextSlide = 4;
    }
    
    // METTO ACTIVE ALLA SLIDE SUCCESSIVA
    slides[nextSlide].classList.add("active");
    console.log (`classe attiva: ${nextSlide}`);
});
