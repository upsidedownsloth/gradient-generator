// Task: Write a function to:
// - Generate a gradient using the colors from the pickers and split percentage from the slider. 
// - Use the gradient as the form background.

// Stretch goals:
// - Add more colors.
// - Add a 'Surprise Me' button which generates random gradients (and updates the inputs).
// - Check for contrast between the gradient and the text.


const randomBtn = document.getElementById("random-btn")
const picker1 = document.getElementById("picker-1")
const picker2 = document.getElementById("picker-2")
const split = document.getElementById("split")
const getGradient = document.getElementById("get-gradient")
const copyBtn = document.getElementById("copy-gradient")

picker1.addEventListener("input", setGradient)
picker2.addEventListener("input", setGradient)
split.addEventListener("input", setGradient)
randomBtn.addEventListener("click", getRandomGradient)
copyBtn.addEventListener("click", copyGradient)


function setGradient() {
    const colourOne = picker1.value
    const colourTwo = picker2.value
    const splitValue = split.value
    getGradient.innerHTML = document.body.style = `background: linear-gradient(${colourOne} ${splitValue}%, ${colourTwo});`
}
setGradient()

function getRandomGradient() {
    picker1.value = randomColor()
    picker2.value = randomColor()
    setGradient()
}

function copyGradient(){
    let copyText = getGradient.innerHTML
    console.log(copyText)
}

/* TODO:
- add copy code function
- add degree for gradient
- add READMe and oush to remote */