/*2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem saldo de vitorias **{saldoVitorias}** e está no nível de **{nivel}**"

  
Bons estudos 😉 */

function saldoVitorias(vitorias, derrotas){
    return vitorias-derrotas
    
}

 
let resultado = saldoVitorias(102, 0)

if (resultado<=10){
    console.log("O Herói tem saldo de vitorias " + resultado + " e está no nível Ferro")
}else if (resultado>10 && resultado <=20){
    console.log("O heróis tem saldo de vítórias "+ resultado + " e está no nível de Bronze")
}else if (resultado>20 && resultado <=50){
    console.log("O heróis tem saldo de vítórias "+ resultado + " e está no nível de Prata")
}else if (resultado>50 && resultado <=80){
    console.log("O heróis tem saldo de vítórias "+ resultado + " e está no nível de Ouro")
}else if (resultado>80 && resultado <=90){
    console.log("O heróis tem saldo de vítórias "+ resultado + " e está no nível de Diamante")
}else if (resultado>90 && resultado <=100){
    console.log("O heróis tem saldo de vítórias "+ resultado + " e está no nível de Lendario")
}else if (resultado>=101){
    console.log("O heróis tem saldo de vítórias "+ resultado + " e está no nível de Imortal")
}