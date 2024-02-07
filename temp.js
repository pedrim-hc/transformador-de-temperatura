let resposta = document.getElementById("resposta")

function trans(){
    let temp = Number(document.getElementById("temp").value)
    let conta = 0

    conta = (temp * 9/5) + 32 
    resposta.innerHTML = "A conversão para fahrenheit é "+conta
}