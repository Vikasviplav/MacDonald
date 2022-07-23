
function placeOrder() {
  var veg_thali = document.getElementById("veg_thali").checked
  var nonveg_thali = document.getElementById("nonveg_thali").checked
  var burger = document.getElementById("burger").checked
  var frenchfries = document.getElementById("frenchfries").checked
  var water = document.getElementById("water").checked
  var coke = document.getElementById("coke").checked
  if (veg_thali == true) {
    let tag = document.createElement("img")
    tag.src = "./veg.jpg"
    document.getElementById("container").append(tag)
  }
  if (nonveg_thali == true) {
    let tag = document.createElement("img")
    tag.src = "./nonveg.jpg"
    document.getElementById("container").append(tag)
  }
  if (burger == true) {
    let tag = document.createElement("img")
    tag.src = "./burger.jpg"
    document.getElementById("container").append(tag)
  }
  if (frenchfries == true) {
    let tag = document.createElement("img")
    tag.src = "./French-Fries.png"
    document.getElementById("container").append(tag)
  }
  if (water == true) {
    let tag = document.createElement("img")
    tag.src = "./water.jpg"
    document.getElementById("container").append(tag)
  }
  if (coke == true) {
    let tag = document.createElement("img")
    tag.src = "./coke.jpg"
    document.getElementById("container").append(tag)
  }
  
  var p = document.querySelector("h1")
  p.innerText = "Your Order Food is Here"
  document.querySelector("body").append(p)


}
function fun() {
  var script = document.createElement("script")
  script.src = ("./myscript.js")
  document.querySelector("body").append(script)
  var p = document.querySelector("h1")
  p.innerText = "Your Order Is Accepted Please Wait For 5 Sec"
  document.querySelector("body").append(p)

}


document.getElementById("order").addEventListener("click", fun)