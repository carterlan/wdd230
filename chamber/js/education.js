const requestURL = 'https://raw.githubusercontent.com/carterlan/wdd230/main/chamber/race.json';
const cards = document.querySelector('.tables');


function displayMembers(member) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let title = document.createElement('h2');
    let field = document.createElement('h4');
    let percent = document.createElement('h4');

    // Website creator
    //let linktext = document.createTextNode(`${member.name}`);
    //a.appendChild(linktext);
    //a.title = `Website: ${member.name}`;
    //a.href = `${member.website}`;

    // Change the textContent property to contain the member's full name, address, phone, email
    title.textContent = `Race: ${member.title}`;
    field.textContent = `Population: ${member.field}`;
    percent.textContent = `Percentage: ${member.percent}`;
   

  
    // Add/append the section(card) with the h2 element
    card.appendChild(title);
    card.appendChild(field);
    card.appendChild(percent);
  
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.tables').appendChild(card);
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