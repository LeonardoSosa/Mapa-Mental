const sectionsList = document.querySelectorAll(".section")
const anchorsList = document.querySelectorAll(".sidebar__items > a")
let lastCurrent

// On load page
updateSidebar()


window.onscroll = (e) => {
    updateSidebar()
}

function updateSidebar() {
    // Anchors and sections that are linked have the same index

    for (let i = 0; i < sectionsList.length; i++) {
        if(!sectionInView(sectionsList[i])) continue
        if(lastCurrent === i) return

        anchorsList[i].setAttribute("aria-current", true)
        if(lastCurrent !== undefined) anchorsList[lastCurrent].removeAttribute("aria-current")
        lastCurrent = i
        return
    }
    
    // If there isn't any valid section in the current view
    anchorsList.forEach((element) => {
        element.removeAttribute("aria-current")
    })
}

function sectionInView(element) {
    const sectionMargin = parseInt(getComputedStyle(document.querySelector(".section")).marginTop)
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