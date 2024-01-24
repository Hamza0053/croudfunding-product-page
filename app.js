const button=document.querySelector('.nav-toggle')
const Backbutton=document.querySelector('.back__button')
let img=document.querySelector('.icon-hamburger')
let inputButton=document.querySelectorAll('.radio__btn')
let continueButton=document.querySelectorAll('.Continue')
let fact=true

// menu toggle
button.addEventListener('click',()=>{
    document.querySelector('.ul__list').classList.toggle("open")

    if (fact) {
        img.src="images/icon-close-menu.svg"
        fact=false
    }
    else
    {
        img.src="images/icon-hamburger.svg"
        fact=true
    }
})

// to open back page
Backbutton.addEventListener('click',()=>{
    document.querySelector('.back__project').style.display="block";
})
// to close back page
document.querySelector('.close__menu').addEventListener('click',()=>{
     document.querySelector('.back__project').style.display="none";
})

// for input butto
let previousBtn
let previousCheck
let refact=true
inputButton.forEach((btn)=>{
   btn.addEventListener('click',(e)=>{
    if (btn.checked) {
        e.target.parentNode.parentNode.classList.add("change__border")
        if (typeof(e.target.parentNode.childNodes[11]) !="undefined") {
           e.target.parentNode.childNodes[11].style.display="block"
        }
       if(refact)
        {
            previousBtn=e.target.parentNode.parentNode.classList
            if (typeof(e.target.parentNode.childNodes[11]) !="undefined") {
                previousCheck= e.target.parentNode.childNodes[11]
            }
            refact=false
        }
        else
        {
            previousBtn.remove("change__border")
            if (typeof(previousCheck) !="undefined"){
                previousCheck.style.display="none"
            }
            previousCheck= e.target.parentNode.childNodes[11]
            previousBtn=e.target.parentNode.parentNode.classList
            fact=true
        }
    }
})
})

// for continue

continueButton.forEach((btn)=>{
    console.log(   document.querySelector('.selected').style)
   btn.addEventListener('click',(e)=>{
    console.log(e.target)
       document.querySelector('.selected').style.display="block"
       document.querySelector('.back__project').style.display="none";
   })
})

document.querySelector('.Got').addEventListener('click',()=>{
    document.querySelector('.selected').style.display="none";
})