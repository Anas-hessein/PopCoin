if (document.getElementById("shop-coins")) {
    let shopCount = JSON.parse(localStorage.getItem("coins")) || 0
    document.getElementById("shop-coins").innerHTML = `<i class='fas fa-coins' style='color:#e1d45b'></i> : ${shopCount}`

    document.getElementById("activate-original").style.display = "inline-block"
    document.getElementById("activate-original").disabled = false

    if (localStorage.getItem("skin_tom_owned") === "true") {
        document.getElementById("buy-tom").textContent = "Owned";
        document.getElementById("buy-tom").disabled = true;
        document.getElementById("activate-tom").style.display = "inline-block";
        document.getElementById("activate-tom").disabled = false;
    }
    if (localStorage.getItem("skin_handy_owned") === "true") {
        document.getElementById("buy-handy").textContent = "Owned"
        document.getElementById("buy-handy").disabled = true
        document.getElementById("activate-handy").style.display = "inline-block"
        document.getElementById("activate-handy").disabled = false
    }
    if (localStorage.getItem("skin_cartoon_owned") === "true") {
        document.getElementById("buy-cartoon").textContent = "Owned"
        document.getElementById("buy-cartoon").disabled = true
        document.getElementById("activate-cartoon").style.display = "inline-block"
        document.getElementById("activate-cartoon").disabled = false
    }
    
}

function buySkinHandy() {
    let shopCount = JSON.parse(localStorage.getItem('coins')) || 0
    if (shopCount >= 100) {
        shopCount -= 100
        localStorage.setItem('coins', JSON.stringify(shopCount))
        document.getElementById("shop-coins").innerHTML = `<i class='fas fa-coins' style='color:#e1d45b'></i> : ${shopCount}`
        localStorage.setItem("skin_handy_owned", "true")
        document.getElementById("buy-handy").textContent = "Owned"
        document.getElementById("buy-handy").disabled = true
        document.getElementById("activate-handy").style.display = "inline-block"
        document.getElementById("activate-handy").disabled = false
    }
}

function buySkinCartoon() {
    let shopCount = JSON.parse(localStorage.getItem('coins')) || 0
    if (shopCount >= 100) {
        shopCount -= 100
        localStorage.setItem('coins', JSON.stringify(shopCount))
        document.getElementById("shop-coins").innerHTML = `<i class='fas fa-coins' style='color:#e1d45b'></i> : ${shopCount}`
        localStorage.setItem("skin_cartoon_owned", "true")
        document.getElementById("buy-cartoon").textContent = "Owned"
        document.getElementById("buy-cartoon").disabled = true
        document.getElementById("activate-cartoon").style.display = "inline-block"
        document.getElementById("activate-cartoon").disabled = false
    }
}

let price = 0
let collected = false
if (document.getElementById("popcat") && localStorage.getItem("activeItemClosed")) {
    document.getElementById("popcat").src = localStorage.getItem("activeItemClosed")
}

let count = JSON.parse(localStorage.getItem('coins')) || 0
if (document.getElementById("count")) {
    document.getElementById("count").innerHTML = `<i class='fas fa-coins' style='color:#e1d45b'></i> : ${count}`
}

let nBtn = document.getElementById("nBtn")
nBtn.addEventListener("click", cleer)

const popcat = document.querySelector("#popcat")
const btn = document.querySelector("#btn")

let openMouthImg = "./opened.png"
let closeMouthImg = "./closed.png"
if (localStorage.getItem("activeItemClosed")) {
    closeMouthImg = localStorage.getItem("activeItemClosed")
}
if (localStorage.getItem("activeItemOpened")) {
    openMouthImg = localStorage.getItem("activeItemOpened")
}




popcat.addEventListener("mousedown", openMouth)
popcat.addEventListener("mouseup", closeMouth)


popcat.addEventListener("touchstart", function(e) {
    e.preventDefault()
    openMouth()
})

popcat.addEventListener("touchend", function(e) {
    e.preventDefault()
    closeMouth()
})


function openMouth() {
    count += 1
    document.getElementById("count").innerHTML = `<i class='fas fa-coins' style='color:#e1d45b'></i> : ${count}`
    popcat.src = openMouthImg
    localStorage.setItem("coins", JSON.stringify(count))
    console.log(JSON.parse(localStorage.getItem('coins')))
}

function closeMouth() {
    popcat.src = closeMouthImg
}


function cleer() {
    count = 0
    document.getElementById("count").innerHTML = `<i class='fas fa-coins' style='color:#e1d45b'></i> : ${count}`
}

function buySkinTom() {
    let shopCount = JSON.parse(localStorage.getItem('coins')) || 0
    if (shopCount >= 100) {
        shopCount -= 100
        localStorage.setItem('coins', JSON.stringify(shopCount))
        if (document.getElementById("shop-coins")) {
            document.getElementById("shop-coins").innerHTML = `<i class='fas fa-coins' style='color:#e1d45b'></i> : ${shopCount}`
        }
        localStorage.setItem("skin_tom_owned", "true")
        document.getElementById("buy-tom").textContent = "Owned"
        document.getElementById("buy-tom").disabled = true
        document.getElementById("activate-tom").style.display = "inline-block"
        document.getElementById("activate-tom").disabled = false
    }
}

function activateItem(skin) {
    localStorage.setItem("activeItemClosed", skin.closed)
    localStorage.setItem("activeItemOpened", skin.opened)
    localStorage.setItem("activeSkin", skin.name)
    alert(`You have activated the ${skin.name} skin!`)

    const activateBtns = document.querySelectorAll(".activate-btn")
    activateBtns.forEach(btn => {
        btn.disabled = false
        btn.textContent = "Activate"
    })
    
    if (skin.buttonId) {
        const btn = document.getElementById(skin.buttonId)
        if (btn) {
            btn.disabled = true
            btn.textContent = "Activated"
        }
    }
}

if (document.getElementById("shop-coins")) {
    const activeSkin = localStorage.getItem("activeSkin")
    if (activeSkin) {
        const btnId = {
            "original": "activate-original",
            "tom": "activate-tom",
            "handy": "activate-handy",
            "cartoonish": "activate-cartoon"
        }[activeSkin]
        if (btnId) {
            const btn = document.getElementById(btnId)
            if (btn) {
                btn.disabled = true
                btn.textContent = "Activated"
            }
        }
    }
}
