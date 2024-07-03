
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



// Time

const hourEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function clock(){

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12){
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    ampm, (innerText = ampm);
    setTimeout(()=> {
        clock();
    }, 1000);
}

clock();

// current Day

const weekdayEl = document.getElementById("weekday"); //Weekday element
const weekday = ["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; //weekdays
const d = new Date();
let day = weekday[d.getDay()];
weekdayEl.innerText = day;

