 // Array of image sources
 const images = ["bed 4.jpeg","chair 1.jpg","dtable 1.jpg","L type 1.jpg","sofa 1.jpg","stable 1.jpg","ttable 1.jpg"];
 let currentIndex = 0;

 // Function to change the image
 function changeImage() {
     currentIndex = (currentIndex + 1) % images.length;
     document.getElementById("image").src = images[currentIndex];
 }

 // Change the image every 2 seconds
 setInterval(changeImage, 2000);