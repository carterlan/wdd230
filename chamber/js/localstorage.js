// initialize display elements
const timeBtnVstDisplay = document.querySelector("#timebetweenvisit");
const visitsDisplay = document.querySelector("#numberofvisits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = ` ${numVisits}`;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

let lastVisit = Number(localStorage.getItem("lastVisit"));
let currentVisit = Number(Date.now());

if (lastVisit !== 0) {
    //Get the stored value for the last visit
    timeBtnVst = Math.round((currentVisit - lastVisit) / 8.64e7);
    timeBtnVstDisplay.textContent = ` ${timeBtnVst} day(s)`;
} else {  
    timeBtnVstDisplay.textContent = `N/A`;  
}


//Update Last Visit Date
lastVisit =  localStorage.setItem("lastVisit", Date.now());
