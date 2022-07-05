const requestURL2 = 'https://raw.githubusercontent.com/carterlan/wdd230/main/chamber/education.json';
const tables= document.querySelector('.tables');


function displayMembers(member) {
    // Create elements to add to the document
    let tab = document.createElement('section');
    let title = document.createElement('h2');
    let field = document.createElement('h4');
    let percent = document.createElement('h4');

    // Website creator
    //let linktext = document.createTextNode(`${member.name}`);
    //a.appendChild(linktext);
    //a.title = `Website: ${member.name}`;
    //a.href = `${member.website}`;

    // Change the textContent property to contain the member's full name, address, phone, email
    title.textContent = `Education Attained: ${member.title}`;
    field.textContent = `Count: ${member.field}`;
    percent.textContent = `Percentage: ${member.percent}`;
   

  
    // Add/append the section(card) with the h2 element
    tab.appendChild(title);
    tab.appendChild(field);
    tab.appendChild(percent);
  
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.tables').appendChild(tab);
}

fetch(requestURL2)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const members = jsonObject['members'];
    members.forEach(displayMembers);
});


const displays = document.querySelector(".tables");