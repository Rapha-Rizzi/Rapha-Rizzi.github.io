let numero1 = parseInt(prompt('Digite um numero'));
let numero2 = parseInt(prompt('Digite um numero'));

function soma() {
    resultado = numero1 + numero2
    return resultado
}
function sub() {
    resultado = numero1 - numero2
    return resultado
}

function multi() {
    resultado = numero1 * numero2
    return resultado
}
function divi() {
    resultado = numero1 / numero2
    return resultado
}

document.getElementById('soma').innerHTML = `soma   ${soma()}`
document.getElementById('sub').innerHTML = `sub  ${sub()}`
document.getElementById('multi').innerHTML = `mult  ${multi()}`
document.getElementById('divi').innerHTML = `divi  ${divi()}`
