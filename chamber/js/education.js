const requestURL2 = 'https://raw.githubusercontent.com/carterlan/wdd230/main/chamber/education.json';
const tables= document.querySelector('.tables');


function displayMembers(member) {
    // Create elements to add to the document
    let tab = document.createElement('section');
    let title = document.createElement('h2');
    let field = document.createElement('h4');
    let percent = document.createElement('h4');


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
    const members = jsonObject['members'];
    members.forEach(displayMembers);
});


const displays = document.querySelector(".tables");