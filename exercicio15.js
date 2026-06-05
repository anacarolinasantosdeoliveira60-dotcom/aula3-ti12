let custototal
let quantidade
let custounidade

quantidade=parseFloat(prompt("informe a quantidade de unidades produzidas"))
custounidade=parseFloat(prompt("informe o custo de fabricação de cada unidade"))
custototal=quantidade*custounidade
alert("custo total de produção:R$"+custototal)