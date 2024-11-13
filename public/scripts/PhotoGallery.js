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
            button.addEventListener("click", () => {
                this.openExpandedImage(i);
            })

            // Create an image element
            const img = document.createElement("img");
            img.setAttribute("id", `image-${i}`);
            img.src = `${this.#folder}${i}.jpg`;
            img.alt = `Image ${i}`;

            // Append the image to the button, and the button to the album
            button.appendChild(img);
            this.#album.appendChild(button);
        }
    }
    //Open the preview box
    openExpandedImage = (imageID) => {
        if(!this.#album) return;
        const previewBox = document.getElementById("preview-box");
        const previewImage = document.getElementById(`image-${imageID}`);
        if(!previewBox || !previewImage) return;
        // Make the preview box visible
        previewBox.style.display = "block";
        // Put the image inside
        const img = document.getElementById("preview-image");
        img.src = `${this.#folder}${imageID}.jpg`;
    }
    closePreviewBox = () => {
        const previewBox = document.getElementById("preview-box");
        if(!previewBox) return;
        previewBox.style.display = "none";
    }
}