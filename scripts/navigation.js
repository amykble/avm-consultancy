function check() {

    var checkBox = document.getElementById("nav-toggle");
    var spanColor = document.getElementById("hamburger");

    if (checkBox.checked == true) {
        spanColor.style.backgroundColor = "#fafafa";
    } else {
        spanColor.style.backgroundColor = "#2E2E2E";
  }
}

const header = document.querySelector("header");
const sectionOne = document.querySelector(".landing-page");

const sectionOneOptions = {
    rootMargin: "-75% 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
    entries, sectionOneObserver){
    
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                header.classList.add("nav-scrolled");
            } else {
                header.classList.remove("nav-scrolled");
            }
        });

},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);