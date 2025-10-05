let price = 0
let count = JSON.parse(localStorage.getItem('coins'))
document.getElementById("count").textContent = ` Your coins: ` + count

let nBtn = document.getElementById("nBtn")
nBtn.addEventListener("click", cleer)

const popcat = document.querySelector("#popcat");
const btn = document.querySelector("#btn");


const openMouthImg = "./opened.png";
const closeMouthImg = "./closed.png";

count = JSON.parse(localStorage.getItem('coins')) || 0;
document.getElementById("count").textContent = ` Your coins: ` + count;


popcat.addEventListener("mousedown", openMouth);
popcat.addEventListener("mouseup", closeMouth);


popcat.addEventListener("touchstart", function(e) {
    e.preventDefault();
    openMouth();
})

popcat.addEventListener("touchend", function(e) {
    e.preventDefault();
    closeMouth();
})


function openMouth() {
    count += 1
    document.getElementById("count").textContent = ` Your coins: ` + count
    popcat.src = openMouthImg
    localStorage.setItem("coins", JSON.stringify(count))
    console.log(JSON.parse(localStorage.getItem('coins')))
}

function closeMouth() {
    popcat.src = closeMouthImg
}


function cleer() {
    count = 0
    document.getElementById("count").textContent =  ` Your coins: ` + count
}

function buying() {
    if (count >= 100) {
        console.log("Yay you have bought a new item, your coins now: " + count + "!")
        count = count - 100
        document.getElementById("count").textContent = ` Your coins: ` + count
        localStorage.setItem("coins", JSON.stringify(count))
    }
}

