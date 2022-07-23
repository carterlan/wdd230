const requestURL = 'https://raw.githubusercontent.com/carterlan/wdd230/main/Temple_Inn_Suites/temples.json';
const cards = document.querySelector('.templesjson');


function displaytemples(temple) {
    // Create elements to add to the document
    let card = document.createElement('option');
    let h2 = document.createElement('h2');
  
    // Change the textContent property of the h2 element to contain the temple's full name
    h2.textContent = `${temple.name}`;
    h2.className = `${temple.name}`;
 
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('select.templesjson').appendChild(card);
}

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject['temples'];
    temples.forEach(displaytemples);
});
