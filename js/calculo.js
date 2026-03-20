const trilho = document.getElementById("trilho")

trilho.addEventListener(`click`, ()=>{
    trilho.classList.toggle(`dark`)
})


function calcular(){
    const peso = document.getElementById("peso")
    const altura = document.getElementById("altura")
    const resultado = document.getElementById("resultado")

    let pesoImc = Number(peso.value)
    let alturaImc = Number(altura.value)

    if(!pesoImc || !alturaImc){
        resultado.innerHTML = "<span style= ` color: #fff; `  >Preencha os campos</span>"  
        return
    }

    // se o usuario digitar 165 ou 176, vai tras formar em 1.65 ou 1.76
    // se a altura for maior que 3, assume que está em centímetros e converte para metros
    if(alturaImc > 3){
       alturaImc = alturaImc / 100
    }

    let seuImc = pesoImc  / (alturaImc ** 2)

    if (seuImc <= 16.9 ) {
        resultado.innerHTML = `<span style="  color: #fff;   " >Seu IMC é:</span> <span style="color: #ca2c2c;">${seuImc.toFixed(3)}</span> 
        <br>
        <span style=" color: #fff; ;font-size:20px; font-weight:bolder; margin-bottom:15px ;">Muito abaixo do peso</span> `
    } else if(seuImc >= 17 && seuImc <= 18.4){
        resultado.innerHTML = `<span style=" color: #fff; " >Seu IMC é:</span>  <span style="color:#ca2c2c;">${seuImc.toFixed(3)}</span> 
        <br>
        <span style=" color: #fff; font-size:20px; font-weight:bolder; margin-bottom:15px ;">Abaixo do peso</span>`
    } else if (seuImc >= 18.5 && seuImc <= 24.95){
        resultado.innerHTML = `<span style=" color: #fff; " >Seu IMC é:</span>  <span style="color:  #ca2c2c;">${seuImc.toFixed(3)}</span> <br>
        <span style=" color: #fff; font-size:20px; font-weight:bolder; margin-bottom:15px ;">Peso Normal</span> 
        <br>
        <span style=" color: #fff; font-size:13px; " >Parabéns! Você está dentro do peso adequado</span>`
    } else if (seuImc >= 25  && seuImc <= 29.9){
        resultado.innerHTML = `<span style=" color: #fff;  " >Seu IMC é: </span> <span style="color: #ca2c2c;">${seuImc.toFixed(3)}</span> 
        <br>
        <span style=" color: #fff; font-size:20px; font-weight:bolder; margin-top:15px ;">Acima do peso</span> 
        `
    }else if (seuImc >= 30  && seuImc <= 34.9){
        resultado.innerHTML = `<span style=" color: #fff;  " >Seu IMC é :</span> <span style="color:  #ca2c2c;">${seuImc.toFixed(3)}</span> 
        <br>
        <span style=" color: #fff; font-size:20px; font-weight:bolder; margin-bottom:15px ;">Obesidade Grau I</span>`
    }else if (seuImc >= 35  && seuImc < 40){
        resultado.innerHTML = ` <br> <span style=" color: #fff;  " >Seu IMC é: </span> <span style="color:  #ca2c2c;">${seuImc.toFixed(3)}</span>
         <br>
        <span style=" color: #fff; font-size:20px; font-weight:bolder; margin-bottom:15px ;">Obesidade Grau II</span>`
    } else if (seuImc > 40) {
        resultado.innerHTML = ` <br> <span style=" color: #fff;  " >Seu IMC é: </span> <span style="color:  #ca2c2c;">${seuImc.toFixed(3)}</span> 
        <br>
        <span style=" color: #fff; font-size:20px; font-weight:bolder; margin-bottom:15px ;">Obesidade Grau III</span> `
    }

    }     
    
 function limpar(){
    const peso = document.getElementById("peso")
    const altura = document.getElementById("altura")
    const resultado = document.getElementById("resultado")

    peso.value = " "
    altura.value = " "
    resultado.innerHTML = "<span style= ` color: #fff; ` >Seu IMC é:</span>"
}