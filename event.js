const button = document.querySelector('#high');
const cross = document.querySelector('.cancels')
const video = document.querySelector('.video iframe')
const videos = document.querySelector('.video')
console.log(video, cross)

console.log(button)

button.addEventListener('click', () => {
    video.style.display = 'block'
    videos.style.display = 'flex'
})


// =================================================STOP AND PAUSE A VIDEO WHEN YOU CLOSE THE WEBPAGE===========================================
//===========NOTE: ALWAYS ADD ?enablejsapi=1 AT THE END OF THE src of the iframe of the video
 // to stop the video
//  function stop() {
//      let video = document.getElementById("videoId")
//     video.contentWindow.postMessage( '{"event":"command", "func":"stopVideo", "args":""}', '*');
//  }

 // to pause the video
 function pause() {
    let video = document.getElementById("videoId")
    video.contentWindow.postMessage( '{"event":"command", "func":"pauseVideo", "args":""}', '*');
 }

cross.addEventListener('click', () => {
    video.style.display = 'none'
    videos.style.display = 'none'
    pause();
})





// =============================================SLIDESHOW
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
