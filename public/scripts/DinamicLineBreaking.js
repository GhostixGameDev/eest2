function dinamicLineBreak(containerClass, defaultWidth = 300) {  // defaultWidth is an optional parameter
    const container = document.querySelector(containerClass);
    if (!container) return;

    const sourceText = document.getElementById("DLB-source-text").innerText;
    const formattedList = document.getElementById("DLB-formatted-list");

    // Hide the original text
    document.getElementById("DLB-source-text").style.display = "none";

    // Set container width if undefined
    const containerWidth = container.offsetWidth || defaultWidth; // Use defaultWidth if container has no width

    // Temporary span for character width estimation
    const measureSpan = document.createElement("span");
    measureSpan.style.visibility = "hidden";
    measureSpan.style.whiteSpace = "nowrap";
    measureSpan.innerText = "A"; // Use a common character for width measurement
    document.body.appendChild(measureSpan);

    // Estimate the average character width
    const avgCharWidth = measureSpan.offsetWidth;
    document.body.removeChild(measureSpan);

    // Calculate max characters per line
    const maxCharsPerLine = Math.floor(containerWidth / avgCharWidth);

    const words = sourceText.split(" ");
    let line = "";

    words.forEach((word, index) => {
        // Test adding the word to the current line
        let testLine = line + word + " ";
        // Check if testLine exceeds character limit
        if (testLine.length > maxCharsPerLine && line !== "") {
            // Add current line to the list as <li>
            const li = document.createElement("li");
            li.innerText = line.trim();
            formattedList.appendChild(li);

            // Start a new line with the current word
            line = word + " ";
        } else {
            // Add word to the current line
            line = testLine;
        }

        // Add the last line after the loop
        if (index === words.length - 1 && line) {
            const li = document.createElement("li");
            li.innerText = line.trim();
            formattedList.appendChild(li);
        }
    });
}