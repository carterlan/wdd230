window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
window.weatherWidgetConfig.push({
    selector:".weatherWidget",
    apiKey:"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/spanish%20fork%2C%20utah?unitGroup=metric&key=R54T2DPLTXAJM5EUSDCHG8WQC&contentType=json", //Sign up for your personal key
    location:"London, UK", //Enter an address
    unitGroup:"metric", //"us" or "metric"
    forecastDays:1, //how many days forecast to show
    title:"London,UK", //optional title to show in the 
    showTitle:true, 
    showConditions:true
});

(function() {
var d = document, s = d.createElement('script');
s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();