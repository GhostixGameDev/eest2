class Carrousel {
    #length;
    #slides;
    #slideIndex;
    #hasArrows;
    #arrows;
    //Class constructors.
	constructor(slidesID, slideIndex, arrows){
		this.#length = slidesID.length;
		this.#slides = new Array(slidesID.length);
		this.#slideIndex = slideIndex;
        for(let i=0; i < this.#length; i++) {
			this.#slides[i] = document.getElementById(slidesID[i]);
		}

        if(arrows !== null){
            this.#hasArrows = true;
            let howManyArrows = arrows.length;
            this.#arrows = new Array(howManyArrows);
            for(let i=0; i < howManyArrows; i++) {
                this.#arrows[i] = document.getElementById(arrows[i]);
            }
            
        }else{
            this.#hasArrows = false;
            this.#arrows = null;
        }
        
	}
    //Getters and Setters
    getLength = () => this.#length;
    setLength = (newValue) => this.#length = newValue;
    refreshLength = () => this.#length = this.#slides.length;

    getSlides = () => this.#slides;
    getSlide = (index) => this.#slides[index];
    setSlides = (newValue) => this.#slides = newValue;

    getSlideIndex = () => this.#slideIndex;
    setSlideIndex = (newValue) => this.#slideIndex = newValue;

    getHasArrows = () => this.#hasArrows;
    setHasArrows = (newValue) => this.#hasArrows = newValue;

    getArrows = () => this.#arrows;
    getArrow = (index) => this.#arrows ? this.#arrows[index] : null;
    setArrows = (newValue) => this.#arrows = newValue;
    //Instance methods
    restartIfFinalIndex = () => {
        //Si el slider llega a la ultima imagen se reinicia.
        if (this.getSlideIndex() >= this.getLength()) {
            this.setSlideIndex(0);
        }else if (this.getSlideIndex() < 0) {
            this.setSlideIndex(this.getLength() - 1);
        }
    }
    animate = (animation) => {
        switch (animation) {
            //Animacion del slider de index.
            case "fade":
                for (let i = 0; i < this.getLength(); i++) {
                    //Establecemos que ninguna imagen pueda verse.
                    this.getSlide(i).style.display = "none";
                }
                //Le sumamos 1 al indice de las imagenes.
                this.restartIfFinalIndex();
                this.setSlideIndex(this.getSlideIndex() + 1);
                this.getSlide(this.getSlideIndex()-1).style.display = "block";
                break;
            //Animación de mover a la izquierda.
            case "move":
                this.restartIfFinalIndex();
                for (let i = 0; i < this.getLength(); i++) {
                    this.getSlide(i).style.transition = "transform 0.5s ease-in-out";
                    this.getSlide(i).style.transform = `translateX(${i - (this.getSlideIndex()) * 101}%)`;
                }
                this.setSlideIndex(this.getSlideIndex() + 1);
                break;
            default:
                break;
        }
    }

    loop = (delay, animation) => {
        this.animate(animation);
        if (this.getHasArrows()) {
            this.getArrow(0).onclick = () => {
                this.setSlideIndex(this.getSlideIndex() - 2);
                this.restartIfFinalIndex();
                this.animate(animation);
            };

            this.getArrow(1).onclick = () => {
                this.animate(animation);
                this.restartIfFinalIndex();
            };
        }
        if(delay != 0){
            setTimeout(() => {
                this.loop(delay, animation);
            }, delay);
        }
    }

}
