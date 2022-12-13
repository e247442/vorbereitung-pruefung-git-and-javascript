
const circle = document.querySelector("#circ")


function start() {
    window.requestAnimationFrame(update)
}

function update() {
    console.log("Hello World")

    let cy = parseFloat(circle.getAttribute("cy"))
    cy = cy + 1
    circle.setAttribute("cy", cy)

    window.requestAnimationFrame(update)
}