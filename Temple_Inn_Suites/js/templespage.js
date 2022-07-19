const requestURL = 'https://raw.githubusercontent.com/carterlan/wdd230/main/Temple_Inn_Suites/temples.json';
const cards = document.querySelector('.temples');


function displaytemples(temple) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let email = document.createElement('p');
    let services = document.createElement('p');
    let closures2022 = document.createElement('p');
    let closures2023 = document.createElement('p');
    let additional = document.createElement('p');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the temple's full name
    h2.textContent = `${temple.name}`;
    h2.className = `${temple.name}`;
    address.innerHTML=`<b>Address:</b> ${temple.address}<br>`;
    email.innerHTML = `<b>Email:</b> ${temple.email}<br>`;
    services.innerHTML = `<b>Services:</b> ${temple.services}<br>`;
    closures2022.innerHTML = `<b> Closures 2022</b> ${temple.closures2022}`;
    closures2023.innerHTML = `<b> Closures 2023</b> ${temple.closures2023}`;
    additional.innerHTML = `<b> Additional Information</b> ${temple.additional}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', temple.src);
    portrait.setAttribute('alt', `Picture of ${temple.name} temple`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '100%')
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.append(address);
    card.append(email);
    card.append(services);
    card.append(closures2022);
    card.append(closures2023);
    card.append(additional);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('.temples').appendChild(card);
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
