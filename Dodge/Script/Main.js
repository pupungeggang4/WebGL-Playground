window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    gl = canvas.getContext('webgl2')
    canvasUI = document.createElement('canvas')
}

function errorHandle() {
}

function rightClick() {
    return false
}
