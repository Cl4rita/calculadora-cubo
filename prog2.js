let resposta = document.getElementById('resposta')

function calcular(){
    let lado = Number(document.getElementById('lado').value)
    console.log("O valor digitado é = ",lado)
    
    let volumeCubo = lado * lado * lado
    console.log("O volume do cubo é = ",volumeCubo)

    resposta.innerHTML = "O volume do cubo é = " + volumeCubo + "m³"

    resposta.style.fontSize = "2rem"
    resposta.style.fontWeight = "bold"
    resposta.style.color = "black"
}