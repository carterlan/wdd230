//Dates for the Home page
const currentDate = new Date();
const year = currentDate.getFullYear();

const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
const today = new Date().toLocaleDateString('en-UK', options);

//document.querySelector('#today').textContent = today;

document.querySelector('#lastUpdated').innerHTML = `<b>Last Modification:</b> ${document.lastModified}<br>`;

document.querySelector('#copyRight').innerHTML = `\u00A9 ${year} Temple Inn & Suites<b>|Landon Carter|</b> <br>`;

//Interactive menu
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};


//Hidden date submit for Join page form
dateTime = document.getElementById("dateTime");
dateTime = currentDate;
