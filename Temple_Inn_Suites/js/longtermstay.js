

const likes = document.getElementById("likes");
//const likes3 = document.getElementById("likes3");

const visitsDisplay = document.querySelector("#numberofvisits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	//visitsDisplay.textContent = ` ${numVisits}`;
    var test = localStorage.getItem('likes');console.log(test);
    like.setAttribute('src',`${test}`);
    like3.setAttribute('src',`${test}`);
} else {
	//visitsDisplay.textContent = `This is your first visit!`;
    test = localStorage.setItem('likes', 'images/like.png');
    like.setAttribute('src',"images/like.png");
   //like3.setAttribute('src',"images/like.png");
}

// increment the number of visits.
numVisits++;

// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

function changeImage() {

    test = localStorage.getItem('likes');
    if ("images/like.png" == test){
       likes.src = "images/likesolid.png";
       test = localStorage.setItem('likes', 'images/likesolid.png');
    } else {
       likes.src = "images/like.png";
       test = localStorage.setItem('likes', 'images/like.png');
    }
}


