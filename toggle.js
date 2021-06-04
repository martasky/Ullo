let lightOff = true

toggle()

function toggle() {
if(lightOff == true) {
document.querySelector("div .toggle-switch").addEventListener("click", switchOn);

function switchOn() {
document.querySelector(".title div").classList.remove("toggle-off");
document.querySelector(".title div").classList.add("toggle")
document.querySelector("#header-wrapper").classList.remove("lightoff");
document.querySelector("#header-wrapper").classList.add("lighton")
let lightOff = false
document.querySelector("div .toggle-switch").addEventListener("click", switchOff);

function switchOff() {
  document.querySelector(".title div").classList.remove("toggle");
  document.querySelector(".title div").classList.add("toggle-off");
  document.querySelector("#header-wrapper").classList.remove("lighton");
document.querySelector("#header-wrapper").classList.add("lightoff")
  let lightOff = true;
  toggle();
}
}
}
}