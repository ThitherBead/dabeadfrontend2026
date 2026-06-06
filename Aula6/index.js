console.log("helo")

function mudarTudo(){
    const titulo = document.getElementById("titulo")
    titulo.innerText = "cALCULADOR DE imc"
    titulo.style.color = "blue"
    titulo.style.fontFamily = "Comic Sans MS"

    let itens = ["maça", "banana", "kiwi", "manga"]
    let container = document.getElementById("lista-frutas")
        container.innerHTML = ""
    for(let i = 0; i < itens.length; i++){
    container.innerHTML += '<p>Item \$ \{i + 1\} : $(itens[i]} </p>'
}
}
