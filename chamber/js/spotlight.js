
const requestURL = 'https://raw.githubusercontent.com/carterlan/wdd230/main/chamber/data.json';
const cards = document.querySelector('.cards');
let count = 0;

function displayMembers(member) {
    // Create elements to add to the document
    let card = document.createElement('section');
    card.classList.add('spotlight');
    let name = document.createElement('h2');
    let address = document.createElement('h4');
    let phone = document.createElement('h4');
    let email = document.createElement('h4');
    let website = document.createElement('a');
    let memberlevel = document.createElement('h2');
    memberlevel.classList.add('levels');
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
    memberlevel.textContent = `${member.memberlevel} Member`
    website.href= member.website
    website.textContent =(`${member.name}`)
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
    if (count == 4) {
        return
      } else if (count <= 3) {
        if (member.memberlevel == "Gold") {
          document.querySelector('div.cards').appendChild(card);
        };
        if (member.memberlevel == "Silver") {
          document.querySelector('div.cards').appendChild(card);
          card.setAttribute("id", "spotLight3");
        };
        count = count + 1;
        console.table(count);
      };
  
    // Add/append the existing HTML div with the cards class with the section(card)
    //if(memberlevel.textContent == "Bronze Member"){
    
    //}
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


const display = document.querySelector("article");



//Input all of the Spotlights

//const spotlights = document.querySelector('#spotlights');
//console.log(spotlights);  
//const spotlight = obj.spotlights.querySelector('.spotlight');
//const spotlight = JSON.parse(spotlights)

//console.log(spotlight)
//levels.classList.add('tester')
// temporary checking for valid response and data parsing
//spotlights.classList.add('test');

//const level = document.querySelector('#levels')
//let allChildren = spotlights.querySelectorAll(":scope > span");
//allChildren.forEach(item => item.classList.add("red"));