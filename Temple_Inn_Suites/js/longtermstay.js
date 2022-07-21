let like = localStorage.getItem("like") || 'images.like.png';
const image =  document.getElementById("like");

	image.src = "images/like.png";
    localStorage.setItem("like", `${image.src}`);

function changeImage() {
    
    if (image.getAttribute('src') == "images/like.png"){
        image.src = "images/likesolid.png";
        
    } else {
        image.src = "images/like.png";
        
    }
   localStorage.setItem("like", `${image.src}`);
}

// get the stored value in localStorage
//image.setAttribute(window.localStorage.getItem(image.src));

// store the new number of visits value
like =  localStorage.setItem("like", image);

