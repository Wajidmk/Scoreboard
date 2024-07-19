let countHome =0
let scoreHome = document.getElementById("score-home")
let countGuest = 0
let scoreGuest = document.getElementById("score-guest")

/*Add points to Home score board*/

function add1home(){
    countHome +=1
    scoreHome.textContent =  countHome
}
function add2home(){
    countHome +=2
    scoreHome.textContent =  countHome
}
function add3home(){
    countHome +=3
    scoreHome.textContent =  countHome
}


/*Add points to Guest score board*/

function add1guest(){
    countGuest +=1
    scoreGuest.textContent =  countGuest
}
function add2guest(){
    countGuest +=2
    scoreGuest.textContent =  countGuest
}
function add3guest(){
    countGuest +=3
    scoreGuest.textContent =  countGuest
}


/*Reset points to 0*/

function resetHome(){
    countHome = 0
    scoreHome.textContent = ""
}
function resetGuest(){
    countGuest = 0
    scoreGuest.textContent = ""
}