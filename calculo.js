function calcular(){
    const peso = document.getElementById("peso")
    const altura = document.getElementById("altura")
    const resultado = document.getElementById("resultado")

    let pesoImc = parseFloat(peso.value)
    let alturaCenti = parseFloat(altura.value)

    //tranforamndo altura de centrimento para metro
    let alturaM = alturaCenti / 100

    let seuImc = pesoImc  / (alturaM ** 2)

    resultado.innerHTML = `seu imc é:"  ${seuImc.toFixed(2)}`
  
}