
const requestURL = 'https://raw.githubusercontent.com/carterlan/wdd230/main/chamber/data.json';
let cards = document.querySelector('.cards');
let count = 0;
let results = [];

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

    if (count == 6) {
        return
      } else if (count <= 5) {
        if (member.memberlevel == "Gold") {
            results[count] = cards.appendChild(card);
            count = count + 1;
        };
        if (member.memberlevel == "Silver") {
            results[count] = cards.appendChild(card);
            
            count = count + 1;
        };
        card.setAttribute("id", `spotLight${count}`);
      };
  
}

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const members = jsonObject['members'];
    members.forEach(displayMembers);

    var randomItem = results[Math.floor(Math.random()*[results.length-1])];
    randomItem.style.display = 'none';
    var randomItem2 = results[Math.floor(Math.random()*[results.length-1])];
    while(randomItem == randomItem2) {
        var randomItem2 = results[Math.floor(Math.random()*[results.length-1])];
    };
    randomItem2.style.display = 'none';
});

