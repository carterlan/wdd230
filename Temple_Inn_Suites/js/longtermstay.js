

const likes = document.querySelector("likes");

function changeImage() {
    if (document.getElementById("likes").src == "images/like.png"){
        document.getElementById("likes").src = "images/likesolid.png";
    } else {
        document.getElementById("likes").src = "images/like.png";
    }
}

