let lastScroll = 0;
const defaultNumber = 100;
const header = document.querySelector(".header");

const scrollPosition = () =>
    window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains("header--hidden");

export default function headerFix() {
    window.addEventListener("scroll", () => {
    
        if (scrollPosition() > lastScroll && !containHide()) {
            header.classList.add("header--hidden");
        } else if (scrollPosition() < lastScroll && containHide()) {
            header.classList.remove("header--hidden");
        }
    
        lastScroll = scrollPosition();
    });
}