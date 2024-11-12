class PhotoGallery{
    #folder;
    #numberOfImages;
    #album;
    constructor(path, amount, where){
        this.#folder = path;
        this.#numberOfImages = amount;
        this.#album = document.getElementById(where);
    }

    // Load photo gallery images into DOM
    appendImagesToAlbum = () => {
        if (!this.#album) return;

        // Iterate through the folder and create images.
        for (let i = 1; i <= this.#numberOfImages; i++) {
            // Create a button element
            const button = document.createElement("button");
            button.setAttribute("id", `image-${i}`);
            button.setAttribute("class", "images");

            // Create an image element
            const img = document.createElement("img");
            img.setAttribute("id", `image-${i}`)
            img.src = `${this.#folder}${i}.jpg`;
            img.alt = `Image ${i}`;

            // Append the image to the button, and the button to the album
            button.appendChild(img);
            this.#album.appendChild(button);
        }
    }

    //Open the preview box
    openExpandedImage = (wich) => {
        if(!this.#album) return;
        var imageID = parseNumberUntilDot(wich);
    }
}

// Helper function
function parseNumberUntilDot(input) {
    const dotIndex = input.indexOf('.');
    // If there is a dot, take the substring before it; otherwise, take the entire input
    const numberString = dotIndex !== -1 ? input.substring(0, dotIndex) : input;
    const parsedNumber = parseInt(numberString, 10);

    return isNaN(parsedNumber) ? null : parsedNumber;
}