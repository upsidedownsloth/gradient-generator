const randomBtn = document.getElementById("random-btn")
const picker1 = document.getElementById("picker-1")
const picker2 = document.getElementById("picker-2")
const split = document.getElementById("split")
const deg = document.getElementById("deg")
const getGradient = document.getElementById("get-gradient")
const copyBtn = document.getElementById("copy-gradient")
const toast = document.getElementById("toast")

picker1.addEventListener("input", setGradient)
picker2.addEventListener("input", setGradient)
split.addEventListener("input", setGradient)
deg.addEventListener("input", setGradient)
randomBtn.addEventListener("click", getRandomGradient)
copyBtn.addEventListener("click", copyGradient)


function setGradient() {
    const colourOne = picker1.value
    const colourTwo = picker2.value
    const splitValue = split.value
    const degValue = deg.value
    getGradient.innerHTML = document.body.style = `background: linear-gradient(${degValue}deg, ${colourOne} ${splitValue}%, ${colourTwo});`
}
setGradient()

function getRandomGradient() {
    picker1.value = randomColor()
    picker2.value = randomColor()
    setGradient()
}

function copyGradient(){
    let textToCopy = getGradient.innerHTML
    navigator.clipboard.writeText(textToCopy)
    .then(() => {
        showToast()
    })
}

function showToast(){
    toast.className = "show"
    setTimeout(function(){
        toast.className = toast.className.replace("show", "")
    }, 1000)
    toast.innerText = "copied!"
}