const requestURL = 'https://raw.githubusercontent.com/carterlan/wdd230/main/chamber/education.json';
const cards = document.querySelector('.tables');


function displayMembers(member) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let race = document.createElement('h2');
    let population= document.createElement('h4');
    let percentage = document.createElement('h4');

    // Website creator
    //let linktext = document.createTextNode(`${member.name}`);
    //a.appendChild(linktext);
    //a.title = `Website: ${member.name}`;
    //a.href = `${member.website}`;

    // Change the textContent property to contain the member's full name, address, phone, email
    race.textContent = `Race: ${member.Race}`;
    population.textContent = `Population: ${member.Population}`
    percentage.textContent = `Percentage: ${member.Percentage}`
   

  
    // Add/append the section(card) with the h2 element
    card.appendChild(race);
    card.appendChild(population);
    card.appendChild(percentage);
  
  
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