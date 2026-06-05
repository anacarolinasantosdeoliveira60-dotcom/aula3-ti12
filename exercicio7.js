let desconto 
let preço
let percentual

preço=parseFloat(prompt("informe o preço do produto"))
percentual=parseFloat(prompt("informe o percentual de desconto"))
desconto=(preço*percentual)/100
alert("valor do desconto: R$"+ desconto)