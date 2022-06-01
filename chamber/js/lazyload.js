//Get all data src images
let images = document.querySelectorAll('img[data-src]');

//Update data src to src
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

//Create a delay in load to show lazy loading
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -150px 0px"
};


const imgObserver = new IntersectionObserver((items, imgObserver) => {
    items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          imgObserver.unobserve(item.target);
        } else {
            return;
        }
    });
}, imgOptions);

images.forEach((image) => {
    imgObserver.observe(image);
});
