
const menuBtn = document.querySelector("#menu-btn");

const showMenu = () => {
    const mobileMenu = document.querySelector("#menu");
    mobileMenu.classList.toggle("activated");
    menuBtn.classList.toggle("activated");
};

menuBtn.addEventListener("click", showMenu);

// Body Changing

const bodyElement = document.body;
const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
    bodyElement.classList.toggle("light-theme");
});


// Time and day
const days = document.getElementById("day");

function date(){
    const d = new Date();
    let day = d.getDay();

    setTimeout(()=> {
        date()
    }, 1000)

    days.innerText = d;
}

date();


