import entradaDados from 'readline-sync';


console.log("Calculando sua dívida \n\n")

let dias_atradados = entradaDados.question ('Quantidade de dias:')





if (dias_atradados > 1 && dias_atradados <= 15){

    let valor = entradaDados.question ('Digite o valor: ')

    let juros = 5

    let calculo_juros = (valor / 100) * juros;
    let total =  Number(valor) + Number(calculo_juros);

    console.log(""+total+"")

}

else if(dias_atradados >= 16 && dias_atradados <= 31){

    let valor = entradaDados.question ('Digite o valor: ')
    
    let juros = 10

    let calculo_juros = (valor / 100) * juros;
    let total = Number(valor) + Number(calculo_juros);

    console.log("O total e "+total+"")
}


else if(dias_atradados < 1)
{
    console.log("Está em dias")
}


else if (dias_atradados >= 32){
    console.log("Digite um valor válido")
}


