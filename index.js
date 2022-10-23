'use strict';
//Select image of self on the home page
const img = document.getElementById('home-img');
//Implement changing the image on hover
img.addEventListener('mouseover', function(){
    img.src = "../assets/images/pixel.jpg";
})
//Transition back to the unpixelated image
img.addEventListener('mouseout', function(){
    img.src="../assets/images/self.jpg";
})





