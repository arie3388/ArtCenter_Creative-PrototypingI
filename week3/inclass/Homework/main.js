let btn1 = document.getElementById("misty1")

let switchImage = function(imgID){
    document.getElementById("largeImg").src=this.id+".jpg"
}

btn1.addEventListener("click", switchImage, "misty1")
document.getElementById("misty1").addEventListener("click", switchImage("misty1"))
document.getElementById("misty2").addEventListener("click", switchImage("misty2"))
document.getElementById("misty3").addEventListener("click", switchImage("misty3"))
document.getElementById("misty4").addEventListener("click", switchImage("misty4"))