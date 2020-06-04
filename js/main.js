const container = document.querySelector(".container");
const header = document.querySelector("header");
const logo = document.querySelector(".logo a img")

const options = {
    rootMargin: "-700px 0px 0px 0px"
};

const headerObserver = new IntersectionObserver(function(entries, headerObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            container.classList.add("container-scrolled");
            logo.classList.add("logo-shrink")
        } else {
            container.classList.remove("container-scrolled")
            logo.classList.remove("logo-shrink")
        }
    });
}, options);

headerObserver.observe(header);

