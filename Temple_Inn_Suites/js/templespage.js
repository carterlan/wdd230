const requestURL = 'https://raw.githubusercontent.com/carterlan/wdd230/main/Temple_Inn_Suites/temples.json';
const cards = document.querySelector('.templesjson');


function displaytemples(temple) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the temple's full name
    h2.textContent = `${temple.name}`;
    h2.className = `${temple.name}`;
    
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', temple.src);
    portrait.setAttribute('alt', `Portait of ${temple.name} Latter-day Prophet`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.value = temple.src;
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('select.templesjson').appendChild(card);
}

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temples = jsonObject['temples'];
    temples.forEach(displaytemples);
});
