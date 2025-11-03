// document.getElementById("heading1").innerText = "I'm learning JS"
// document.getElementById("heading1").style.color = "white"
// document.getElementById("heading1").style.backgroundColor = "red"


document.getElementById("btn").onclick = function () {
document.getElementById("heading1").innerText = "I'm learning JS"
document.getElementById("heading1").style.color = "white"
document.getElementById("heading1").style.backgroundColor = "red"
}

document.getElementById("btn-reset").onclick = function () {
    document.getElementById("heading1").innerText = "Learning JavaScript"
document.getElementById("heading1").style.color = "black"
document.getElementById("heading1").style.backgroundColor = "transparent"
}

document.getElementById("light-on").onclick = function () {
    document.getElementById("img-bulb").src = "https://www.w3schools.com/js/pic_bulbon.gif"
    document.body.style.backgroundColor = "white"
}

document.getElementById("light-off").onclick = function () {
    document.getElementById("img-bulb").src = "https://www.w3schools.com/js/pic_bulboff.gif"
    document.body.style.backgroundColor = "black"
}
 
document.getElementById("hide-bulbrow").onclick = function () {
    document.getElementById("bulb-row").style.display = "none"
}

document.getElementById("show-bulbrow").onclick = function () {
    document.getElementById("bulb-row").style.display = "block"
}

// window.alert ("i am an alert")

console.log ("log")

var firstName = "Zeeshan Hassan"
var lastName = " Gill"

var fullName = firstName + lastName

console.log(fullName)
