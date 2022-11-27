//========================================SELECTION OF ELEMENTS

//the Array.from converts the nodelist to an array. its only an array that I can add a unique Id to each element. Like I added i in this case later on

const team = Array.from(document.querySelectorAll('.team-content'))
const teams = Array.from(document.querySelectorAll('.team'))

const social = Array.from(document.querySelectorAll('section .team-mates .team .social'))

const soc = Array.from(document.querySelectorAll('section .team-mates .team .social'))


const h2 = Array.from(document.querySelectorAll('.team-content h2'))
const p = Array.from(document.querySelectorAll('.team-content p'))




//=====================================FUNCTIONS
//display the social icons on mouseover
const icon = (i) => {
        social[i].style.display = 'block'
        social[i].classList.add('rotate');
}

//removes the social icons on mouseout
const icon2 = (i) => {
    social[i].style.display = 'none'
    social[i].style.transition = '4s'
    social[i].classList.remove('rotate');
    
}


//changing the team members text-colors on mouseover
const textmouseover = (i) => {
    p[i].style.color = '#00B8FF'
    h2[i].style.color = '#00B8FF'
    p[i].classList.add('rotate');
    h2[i].classList.add('rotate');
}



//changing the team members text-colors on mouseout
const textmouseout = (i) => {
    p[i].style.color = '#02073E'
    h2[i].style.color = '#02073E'
    p[i].classList.remove('rotate');
    h2[i].classList.remove('rotate');
}

//========================================================EVENT LISTENERS
//loops through the array of team and adds an event listener while calling a function

teams.forEach((element, i) => {   //the i is possible cos of the Array.from that converted the team from a nodelist to an array
    element.classList.add(i)
    element.addEventListener('mouseover', () => {
         icon(i)  //calling of the function
         textmouseover(i)
    })  
});


teams.forEach((element, i) => {
    element.classList.add(i)
    element.addEventListener('mouseout', () => {
         icon2(i)  
         textmouseout(i)
    })  
});


