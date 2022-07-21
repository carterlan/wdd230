

const likes = document.getElementById("likes");

const visitsDisplay = document.querySelector("#numberofvisits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = ` ${numVisits}`;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
    localStorage.setItem('likes', 'http://127.0.0.1:5500/images/like.png');
    
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
var test = localStorage.getItem('likes');console.log(test);
console.log(likes.src);
//window.onload =  likes.setAttribute('src',test);
function changeImage() {
    if (likes.src == test){
        likes.src = "http://127.0.0.1:5500/images/like.png";
        localStorage.setItem('likes', 'http://127.0.0.1:5500/images/like.png');
    } else {
       likes.src = "http://127.0.0.1:5500/images/likesolid.png";
       localStorage.setItem('likes', 'http://127.0.0.1:5500/images/likesolid.png');
    }
}





