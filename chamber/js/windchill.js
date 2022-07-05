//Inputs for calculation of wind chill
const temp = document.querySelector('#temp')
const windspeed = document.querySelector('#windSpeed')

let temp1 = parseFloat(temp.textContent)
let windspeed1 = parseFloat(windspeed.textContent)

//Calculate the Wind Chill
if (temp1 <= 50 && windspeed1 >= 3.0) {
    let windchill = 35.74 + 0.6215 * temp1 - 35.75 * windspeed1 ** (0.16) + 0.4275 * temp1 * windspeed1 ** (0.16);
    windchillformated = windchill.toFixed(0);
    document.querySelector('#windChill').innerHTML = `${windchillformated}°F`;
} else {
    let windchill = "N/A";
    document.querySelector('#windChill').innerHTML = `${windchill}`;
}


