let arrecadacao
let ingressos
let valor

ingressos=parseFloat(prompt("informe a quantidade de ingressos vendidos"))
valor=parseFloat(prompt("informe o valor de cada ingresso"))
arrecadacao=ingressos*valor
alert("montante arrecadado:R$"+arrecadacao)