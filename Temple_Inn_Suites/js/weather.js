// select HTML elements in the document
const date = document.querySelector('#date');
const Temp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('#weatherDiscription');
let count = 0;

// Call API
//const url = `api.openweathermap.org/data/2.5/forecast?lat=38.9847&lon=77.0947&units=imperial&appid=3d65e8439714a8d8df48235075b1f462`;
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=38.9847&lon=-77.0947&units=imperial&appid=3d65e8439714a8d8df48235075b1f462`;
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
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
    Temp.innerHTML = `<strong>${weatherData.list[1].main.temp.toFixed(0)}</strong>`;
    const desc = weatherData.list[1].weather[0].description;
    

    //Create uppercase words for the description
    //const newDesc = desc.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ');
    captionDesc.innerHTML = `${desc}<br>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[1].weather[0].icon}.png`;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    
    while (count <= 16) {
    let card = document.createElement('div');
    let day = document.createElement('h1');
    let icon= document.createElement('img');
    let description = document.createElement('h4');
    let tempmin = document.createElement('h4');
    let tempmax = document.createElement('h4');
    let weatherAlert = document.createElement('p');

    day.innerHTML = weatherData.list[count].dt_txt;
    icon.setAttribute('src', `https://openweathermap.org/img/w/${weatherData.list[count].weather[0].icon}.png`);
    description.innerHTML = weatherData.list[count].weather[0].description;
    tempmin.innerHTML = `<br>Min Temp: ${weatherData.list[count].main.temp_min.toFixed(0)}<br>`;
    tempmax.innerHTML = `<br>Max Temp:${weatherData.list[count].main.temp_max.toFixed(0)}<br>`;
    weatherAlert.innerHTML = `Weather Alert: <br>${weatherData.message}<br>`;
    if (Number(weatherData.message) == 0) {
      weatherAlert.setAttribute('hidden', true);
    } else {
      return
    }

    card.appendChild(day);
    card.appendChild(icon);
    card.appendChild(description);
    card.appendChild(tempmin);
    card.appendChild(tempmax);
    card.appendChild(weatherAlert);

    document.querySelector('#weatherID').appendChild(card);
    count = count + 8;
  }
  }    