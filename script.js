//***************========================NAV BAR SCROLLING===============================*************
const nav = document.querySelector('nav')
const upperNav = document.querySelector('.upper-nav')
const lowerNavText = document.querySelectorAll('.nav-right a')
const logoWhite = document.querySelector('.logo-white ')
const logoGray = document.querySelector('.logo-gray ')

//EVent Listener that will toggle the window-scroll class created in CSS on window vertical scroll i.e scrollY > 0
window.addEventListener('scroll', () => {
    nav.classList.toggle('window-scroll', window.scrollY > 0)
})

//EVent Listener that will toggle the upper-nav-scroll class created in CSS on window vertical scroll i.e scrollY > 0
window.addEventListener('scroll', () => {
    upperNav.classList.toggle('upper-nav-scroll', window.scrollY > 0)
})

//EVent Listener that will LOOP through and toggle the navScroll class created in CSS on window vertical scroll i.e scrollY > 0
window.addEventListener('scroll', () => {
    lowerNavText.forEach(a => {
        a.classList.toggle('navScroll', window.scrollY > 0)
    });
})


//===========================================CHANGING THE LOGO FROM WHITE TO GRAY ON SCROLL========================================================
//function to remove the white logo
const rmLogoWhite = () =>{
    logoWhite.style.display = 'none'
}

//function that removes the grayLogo
const rmLogoGray = () =>{
    logoGray.style.display = 'none'
}

//function that will show the grayLogo
const showLogoGray = () => {
    logoGray.style.display = 'block'
}

//EVENT LISTENER for a scroll to change the logo from white from gray
window.addEventListener('scroll', () => {
    if(window.scrollY > 0){
        rmLogoWhite();  //calls the removeLogoWhite function to remove the white logo on scroll
        showLogoGray(); //calls the showLogoGray function to show the gray logo on scroll
    }
    
    else{
        rmLogoGray();
        logoWhite.style.display = 'block';
    }
})



//===========================================WHAT OUR STUDENTS ARE SAYING========================================================
const box = document.querySelectorAll('.say');
const boxImage = document.querySelectorAll('.say img')
const boxH6 = document.querySelector('.say h6')
const boxP = document.querySelector('.say p')
const smallcircle = document.querySelectorAll('.saying .circle  span')
const smallcircle1 = document.querySelector('.saying .circle  span.one')
const smallcircle2 = document.querySelector('.saying .circle  span.two')
const smallcircle3 = document.querySelector('.saying .circle  span.three')
console.log(box);
console.log(smallcircle3);
console.log(smallcircle2);
console.log(smallcircle1);


//removes active class from what students are saying
const removeActive = () =>{
    box.forEach(activ => {
        activ.classList.remove('active')
    })
}

//removes active class from circle
const removeCircleActive = () => {
    smallcircle.forEach(element => {
        element.classList.remove('active')
        
    })
}


//removes active class from circle
const toggleCircleActive = () => {
    smallcircle.forEach(ele => {
        ele.classList.toggle('active')
        
    })
}

//loops through the boxes with the class of say
box.forEach(item => {
    item.addEventListener('click', () => {
        removeActive(); //calls the removeactive function
        item.classList.toggle('active'); //toggles the active class

        if(item.classList.contains('one')){
            removeCircleActive();
            smallcircle1.classList.add('active')
        }

        else if(item.classList.contains('three')){
            removeCircleActive();
            smallcircle3.classList.toggle('active')
        }

        else{
            removeCircleActive();
            smallcircle2.classList.add('active')
        }

    })
})



//=============================BUILD WITH NODEX IMAGE ZOOM
// Precept from the AOS (animate on scroll) libraray used . i.e the AOS by Michalsnik
// AOS.init({
//     duration: 1200,
//   })


  //=============================MOBILE NAV BAR================================================
const mobileMenu = document.querySelector('.nav-right-mobile i');
const dropDown = document.querySelector('.nav-right');
const cancel = document.querySelector('.cancel')
const overlay = document.querySelector('header')
console.log(overlay)

mobileMenu.addEventListener('click', () => {
        dropDown.style.display = 'block' 
})

cancel.addEventListener('click', () => {
    dropDown.style.display = 'none'
})

// overlay.addEventListener('click', () => {
//     dropDown.style.display = 'none'
// })

overlay.addEventListener('click', function(e){
    if(e.target === dropDown){
        dropDown.style.display = 'none'
    }
})



// ==================================================================TESTIMIONIAL VIDEO POPUP========

//=============TESTIMONIAL 1
const button = document.querySelector('#lemuel');
const cross = document.querySelector('#cancel1')
const video = document.querySelector('#vid1 iframe')
const videos = document.querySelector('#vid1')
console.log(video, cross, button, videos)

console.log(button)

button.addEventListener('click', () => {
    video.style.display = 'block'
    videos.style.display = 'flex'
})

function stop() {
    let stopvid = document.getElementById("videoId")
    stopvid.contentWindow.postMessage( '{"event":"command", "func":"stopVideo", "args":""}', '*');
}

cross.addEventListener('click', () => {
    video.style.display = 'none'
    videos.style.display = 'none'
    stop();
})

//=============TESTIMONIAL 2
const button2 = document.querySelector('#johnatan');
const cross2 = document.querySelector('#cancel2')
const video2 = document.querySelector('#vid2 iframe')
const videos2 = document.querySelector('#vid2')


button2.addEventListener('click', () => {
    video2.style.display = 'block'
    videos2.style.display = 'flex'
})

function stop2() {
    let stopvid2 = document.getElementById("videoId2")
    stopvid2.contentWindow.postMessage( '{"event":"command", "func":"stopVideo", "args":""}', '*');
}

cross2.addEventListener('click', () => {
    video2.style.display = 'none'
    videos2.style.display = 'none'
    stop2();
})


//=============TESTIMONIAL 3
const button3 = document.querySelector('#ikechukwu');
const cross3 = document.querySelector('#cancel3')
const video3 = document.querySelector('#vid3 iframe')
const videos3 = document.querySelector('#vid3')
console.log(video, cross, button, videos)

console.log(button)

button3.addEventListener('click', () => {
    video3.style.display = 'block'
    videos3.style.display = 'flex'
})

function stop3() {
     let stopvid3 = document.getElementById("videoId3")
    stopvid3.contentWindow.postMessage( '{"event":"command", "func":"stopVideo", "args":""}', '*');
 }

// function pause() {
//     let video3 = document.getElementById("videoId3")
//     video3.contentWindow.postMessage( '{"event":"command", "func":"pauseVideo", "args":""}', '*');
//  }

cross3.addEventListener('click', () => {
    video3.style.display = 'none'
    videos3.style.display = 'none'
    stop3()
})