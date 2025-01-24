let carro ={
    marca: "Dodge",
    modelo: "Ram",
    ano: 2025
}

function ligar(veiculo){
    if(veiculo){
        console.log("O veiculo esta ligado")
    }else{
        console.log("Veiculo esta desligado")
    }
}
ligar()
console.log(carro.ano)