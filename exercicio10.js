let gastos
let litros 
let precolitro

litros=parseFloat(prompt("informe a quantidade de litros consumidos"))
precolitro=parseFloat(prompt("informe o preco do litro"))
gasto=litros*precolitro
alert("gasto total com combustivel:R$"+gasto)