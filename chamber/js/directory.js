const requestURL = 'https://raw.githubusercontent.com/carterlan/wdd230/main/chamber/data.json';
const cards = document.querySelector('.cards');


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
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);

}

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const members = jsonObject['members'];
    members.forEach(displayMembers);
});

//Grid versus List Action
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");

}

