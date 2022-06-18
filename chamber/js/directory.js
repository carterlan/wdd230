const requestURL = 'https://raw.githubusercontent.com/carterlan/wdd230/main/chamber/data.json';
const cards = document.querySelector('.cards');


function displayMembers(member) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let address = document.createElement('h4');
    let phone = document.createElement('h4');
    let email = document.createElement('h4');
    let website = document.createElement('h2');
    let memberlevel = document.createElement('h2');
    let logo = document.createElement('img');

    // Website creator
    //let linktext = document.createTextNode(`${member.name}`);
    //a.appendChild(linktext);
    //a.title = `Website: ${member.name}`;
    //a.href = `${member.website}`;

    // Change the textContent property to contain the member's full name, address, phone, email
    name.textContent = `${member.name}`;
    address.textContent = `Address: ${member.address}`
    phone.textContent = `Phone Number: ${member.phone}`
    email.textContent = `Email: ${member.email}`
    website.textContent = `${member.website}`
    memberlevel.textContent = `${member.memberlevel} Member`
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', member.imageurl);
    logo.setAttribute('alt', `Logo of ${member.name}`);
    logo.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(website);
    card.appendChild(memberlevel);
    card.appendChild(logo);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const members = jsonObject['members'];
    members.forEach(displayMembers);
});
