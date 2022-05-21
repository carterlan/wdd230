//Dates for the Home page
const currentDate = new Date();
const year = currentDate.getFullYear();

const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
const today = new Date().toLocaleDateString('en-UK', options);

document.querySelector('#today').textContent = today;

document.querySelector('#lastUpdated').textContent = `Last Modification: ${document.lastModified}`;

document.querySelector('#copyRight').innerHTML = `\u00A9 ${year} Spanish Fork Chamber <br> <b>Landon Carter</b> <br> WDD 230 Project`;

//Interactive menu
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

//Dispaly Banner on Tuesday Function
let d = new Date();

const banner = document.getElementById("banner");
if (d.getDay() == 2) {
    banner.style.display = "block";
}
