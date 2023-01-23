# Treinamento-javascript

<h3>TRATAMENTO DE DADOS</h3>{

<p>(n) É oque eu quero converter.</p> 
<br>

`String para número`
`Number.parseInt(n) para número inteiro `
`Number.parseFloat(n) para número real (com .)`
`Number(n)`

<strong>Caso específico use Int ou Float, caso o javascript decida use o Number</strong>
<br>

`Número para string`
`String(n)`
`n.toString()`

Usar TemplateStrings com `` $(n), ou seja esse exemplo: 
> var s = 'Javascript'
>`Estou aprendendo ${s}`

ou usar concatenação, mas sempre interpolar.

Pode ser usado atributos para formatar strings 

n.length  `quantos caracteres a string tem`
n.toUpperCase()  `tudo para 'MAIUSCULAS'`
n.toLowerCase()  `tudo para 'minúsculas'`

Formatar números 

>var n1 = 1543.5

>n1.toFixed(2)  `para ter 2 casa depois do .`

>replace('.',',')  `para ter vírgula no lugar do ponto`

exemplo: 

>n1.toFixed(2).replace('.',',')

para converter em real linha de comando
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}
<h3>OPERADORES</h3>{

>5 + 2 = 7  `soma dos números`

>5 - 2 = 3  `subtração dos números`

>5 * 2 = 10  `multiplicação dos números`

>5 / 2 = 2.5  `divisão real dos números` 

>5 % 2 = 1  `resto da divisão inteira entre números`

>5 ** 2 = 25  `é a potencia elevada ao número` <strong>`Exemplo: 5 elevado a 2 = 5.5 = 25` 

<strong>Tomar cuidado com os operadores, isso porque 5 + 3 / 2, ele faz primeiro o 3 / 2 logo 5 + 3 / 2 = 6.5, Use () para alterar a ordem de Precedência</strong>

Exemplos: 
> 5 + 2 = 7 

> 5 - 2 = 3 

> 5 * 2 = 10

> 5 / 2 = 2.5

> 5 % 2 = 1

> 5 ** 2 = 25

> (5 * 2) + (4 / 2) = 12

<strong>ordem de Precedência
() > ** > * = / = % > + = - </strong>
}
