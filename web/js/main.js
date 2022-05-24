//! Deprecated (old method)
//// const nav = document.getElementById('sidebar__items')

//// nav.addEventListener('click', (e) => {
////     if(!e.target && e.target.tagName !== 'A') return

////     let current = document.getElementsByClassName("nav-active")
////     if(!current.length == 0){
////         current[0].classList.remove('nav-active')
////     }
////     e.target.classList.add('nav-active')
//// })zz

const sectionsList = document.querySelectorAll(".section")
const anchorsList = document.querySelectorAll(".sidebar__items > a")

window.onscroll = (e) => {
    updateAsideNav()
}

function updateAsideNav() {
    const lastCurrent = document.querySelector("[aria-current=true]")
    
    for (let i = 0; i < sectionsList.length; i++) {
    
        if(sectionInView(sectionsList[i])){
            if(lastCurrent === anchorsList[i]) return
    
            anchorsList[i].setAttribute("aria-current", true)
            if(lastCurrent !== null) lastCurrent.removeAttribute("aria-current")
            return
        }
    }
    
    // If there isn't any valid section in the current view
    anchorsList.forEach((element) => {
        element.removeAttribute("aria-current")
    })
}

function sectionInView (element) {
    const sectionMargin = parseInt(getComputedStyle(document.querySelector(".section")).marginBottom)
    const cords = element.getBoundingClientRect()

    if(cords.top <= 1+sectionMargin && cords.bottom >= 0){
        return true
    }
    return false
}

//
//*
//!
//?
//TODO
////