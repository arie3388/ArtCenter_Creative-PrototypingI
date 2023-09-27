let firstDiv = document.getElementById("divOne")
let colorchangeButton = document.getElementById("btnChangeColor")

let addTextButton = document.getElementById("btnAddText")
    console.log("fire")

console.log(colorchangeButton)

let changeColor = function(){
    console.log("fire")
    firstDiv.style.backgroundColor = "rgb(170, 170, 230)"
}

let addText = function(){
    let someText= "Hello, this is some text!"
    let parag = document.createElement("p")
    parag.innerText = someText
    firstDiv.appendChild(parag)
}
firstDiv.style.backgroundColor = "rgb(230, 170, 170)"
colorchangeButton.addEventListener("click",changeColor)
addText.addEventListener("click," addText)