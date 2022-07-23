const requestURL = 'https://raw.githubusercontent.com/carterlan/wdd230/main/Temple_Inn_Suites/temples.json';
const cards = document.querySelector('.temples');
const like =  document.getElementById("likes");
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

   
    like.setAttribute('id', `likes${count}`); 
    like.setAttribute('onclick', `changeImage${count}()`);
    

    
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', temple.src);
    portrait.setAttribute('alt', `Picture of ${temple.name} temple`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '96%');
    
    //Append lke button
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
    count++;
 
  
 
}

function likeMachine() {
  const likes0 = document.getElementById("likes0");
  const likes1 = document.getElementById("likes1");
  const likes2 = document.getElementById("likes2");
  const likes3 = document.getElementById("likes3");
  
  // get the stored value in localStorage
  let numVisits = Number(window.localStorage.getItem("visits-ls"));
  
  // determine if this is the first visit or display the number of visits.
  if (numVisits !== 0) {
    
      var test0 = localStorage.getItem('likes0');
      var test1 = localStorage.getItem('likes1');
      var test2 = localStorage.getItem('likes2');
      var test3 = localStorage.getItem('likes3');

      likes0.setAttribute('src',`${test0}`);
      likes1.setAttribute('src',`${test1}`);
      likes2.setAttribute('src',`${test2}`);
      likes3.setAttribute('src',`${test3}`);
  } else {
    
      test0 = localStorage.setItem('likes0', 'images/like.png');
      test1 = localStorage.setItem('likes1', 'images/like.png');
      test2 = localStorage.setItem('likes2', 'images/like.png');
      test3 = localStorage.setItem('likes3', 'images/like.png');

      likes0.setAttribute('src',"images/like.png");
      likes1.setAttribute('src',"images/like.png");
      likes2.setAttribute('src',"images/like.png");
      likes3.setAttribute('src',"images/like.png");
  }
  
  // increment the number of visits.
  numVisits++;
  
  // store the new number of visits value
  localStorage.setItem("visits-ls", numVisits);
  
 
  
  }

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject['temples'];
    temples.forEach(displaytemples);
    likeMachine();
});


//Create the individual like buttons clickon function
 function changeImage0() {
  
      test0 = localStorage.getItem('likes0');
      
      if ("images/like.png" == test0){
         likes0.src = "images/likesolid.png";
         test0 = localStorage.setItem('likes0', 'images/likesolid.png');
      } else {
         likes0.src = "images/like.png";
         test0 = localStorage.setItem('likes0', 'images/like.png');
      }

   
  }
  function changeImage1() {
    test1 = localStorage.getItem('likes1');
        if ("images/like.png" == test1){
        
          likes1.src = "images/likesolid.png";
          test1 = localStorage.setItem('likes1', 'images/likesolid.png');
      } else {

          likes1.src = "images/like.png";
          test1 = localStorage.setItem('likes1', 'images/like.png');
      }
    }
  function changeImage2() {
    test2 = localStorage.getItem('likes2');
        if ("images/like.png" == test2){
        
          likes2.src = "images/likesolid.png";
          test2 = localStorage.setItem('likes2', 'images/likesolid.png');
      } else {

          likes2.src = "images/like.png";
          test2 = localStorage.setItem('likes2', 'images/like.png');
      }
    }
  function changeImage3() {
    test3 = localStorage.getItem('likes3');
        if ("images/like.png" == test3){
        
          likes3.src = "images/likesolid.png";
          test3 = localStorage.setItem('likes3', 'images/likesolid.png');
      } else {

          likes3.src = "images/like.png";
          test3 = localStorage.setItem('likes3', 'images/like.png');
      }
 
}



