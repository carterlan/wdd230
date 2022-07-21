const requestURL = 'https://raw.githubusercontent.com/carterlan/wdd230/main/Temple_Inn_Suites/temples.json';
const cards = document.querySelector('.temples');
const image =  document.getElementById("likes");
let count = 0;	
const onclick ='onClick';

function displaytemples(temple) {
    // Create elements to add to the document
    let card = document.createElement('div');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let email = document.createElement('p');
    let services = document.createElement('p');
    let closures2022 = document.createElement('p');
    let closures2023 = document.createElement('p');
    let additional = document.createElement('p');
    let portrait = document.createElement('img');
    let button = document.createElement('button')
    let like = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the temple's full name
    h2.textContent = `${temple.name}`;
    card.className = `temple`;
    address.innerHTML=`<b>Address:</b> ${temple.address}<br>`;
    email.innerHTML = `<b>Email:</b> ${temple.email}<br>`;
    services.innerHTML = `<b>Services:</b> ${temple.services}<br>`;
    closures2022.innerHTML = `<b> Closures 2022</b> ${temple.closures2022}`;
    closures2023.innerHTML = `<b> Closures 2023</b> ${temple.closures2023}`;
    additional.innerHTML = `<b>Milestones: ${temple.additional}`;
    button.setAttribute('class', 'like');
    button.setAttribute('onclick', 'changeImage(this)');
    like.setAttribute('id', `likes`);

    
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', temple.src);
    portrait.setAttribute('alt', `Picture of ${temple.name} temple`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '96%');
    
    button.append(like);
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.append(address);
    card.append(email);
    card.append(services);
    card.append(closures2022);
    card.append(closures2023);
    card.append(additional);
    card.append(button);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('.temples').appendChild(card);
    
    if (localStorage.getItem("like") === null){
        like.setAttribute('src',"images/like.png");
    }else {
        if (localStorage.getItem('like') == "images/like.png"){
            like.setAttribute('src',"images/like.png");
    } else {
        like.setAttribute('src',"images/likesolid.png");
        
    }
    }
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





function changeImage(clickelement) {
   
    if (clickelement == "images/like.png"){
        clickelement.img.src = "images/likesolid.png";
        
    } else {
        clickelement.img.src = "images/like.png";
        
    }
  localStorage.setItem("like", `${image.src}`);
}

// get the stored value in localStorage
//image.setAttribute(window.localStorage.getItem(image.src));

// store the new number of visits value

