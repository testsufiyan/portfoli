var cursor = document.querySelector(".cursor")
var main = document.querySelector(".container")


main.addEventListener("mousemove", function(mouse){
    cursor.style.left = mouse.x+"px"   
    cursor.style.top = mouse.y+"px"
    console.log(mouse)
})