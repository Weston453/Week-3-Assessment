
function colorAlert (event){
    let color = document.querySelector("#color")
    alert("Blue!")

}

function placeAlert (event){
    let place = document.querySelector("#place")
    alert("Santa Barbra")
}

function ritualAlert (event){
    let ritual = document.querySelector("#ritual")
    alert("Morning Iced Coffee")
}

color.addEventListener("click", colorAlert)
place.addEventListener("click", placeAlert)
ritual.addEventListener("click", ritualAlert)