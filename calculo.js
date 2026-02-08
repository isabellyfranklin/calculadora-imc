function calcular(){
    const peso = document.getElementById("peso")
    const altura = document.getElementById("altura")
    const resultado = document.getElementById("resultado")

    let pesoImc = Number(peso.value)
    let alturaImc = Number(altura.value)

    if(!pesoImc || !alturaImc){
        resultado.innerHTML = "Prencha os campos"  
        return
    }

    // se o usuario digitar 165 ou 176, vai tras formar em 1.65 ou 1.76
    // se a altura for maior que 3, assume que está em centímetros e converte para metros
    if(alturaImc > 3){
       alturaImc = alturaImc / 100
    }

    let seuImc = pesoImc  / (alturaImc ** 2)

    resultado.innerHTML = `Seu IMC é: <span style="color: #43828b;">${seuImc.toFixed(3)}</span>`
  
}