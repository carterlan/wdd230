const currentDate = new Date();
const year = currentDate.getFullYear();

const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: "numeric", minute: "numeric", second: "numeric"};
const today = new Date().toLocaleDateString('en-UK', options);

document.querySelector('#lastUpdated').textContent = `Last Updated: ${document.lastModified}`;

document.querySelector('#copyRight').textContent = `\u00A9 ${year} | Landon Carter | Utah`;