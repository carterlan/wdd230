// select HTML elements in the document
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('#weatherDiscription');
const windSpeed = document.querySelector('#windSpeed');


// Call API
const url = `https://api.openweathermap.org/data/2.5/weather?lat=40.1150&lon=-111.654922&units=imperial&appid=3d65e8439714a8d8df48235075b1f462`;

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const desc = weatherData.weather[0].description;
    windSpeed.innerHTML = weatherData.wind.speed;

    //Create uppercase words for the description
    const newDesc = desc.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ');
    captionDesc.textContent = newDesc;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    
  }