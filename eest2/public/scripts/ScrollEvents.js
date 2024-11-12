const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
    });
})
function showOnScroll(elements){
    const hiddenElements = document.querySelectorAll(elements);
    hiddenElements.forEach((element) => observer.observe(element));
}

