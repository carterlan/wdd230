const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: "numeric", minute: "numeric", second: "numeric"};
document.querySelector('#lastUpdated').textContent = new Date().toLocaleDateString('en-UK', options);
