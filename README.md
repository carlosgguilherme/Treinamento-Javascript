# Treinamento-javascript

<h1>TRATAMENTO DE DADOS</h1>{

(n) É oque eu quero converter.

String para número 
Number.parseInt(n) para número inteiro 
Number.parseFloat(n) para número real (com .)
Number(n)

<strong>Caso específico use Int ou Float, caso o javascript decida use o Number</strong>


Número para string
String(n)
n.toString()

Usar TemplateStrings com `` $(n), ou seja esse exemplo 
var s = 'Javascript'
`Estou aprendendo ${s}`

ou usar concatenação, mas sempre interpolar.

Pode ser usado atributos para formatar strings 

n.length // quantos caracteres a string tem
n.toUpperCase() // tudo para 'MAIUSCULAS'
n.toLowerCase() // tudo para 'minúsculas'


Formatar números 

var n1 = 1543.5
n1.toFixed(2) // para ter 2 casa depois do .
replace('.',',') // para ter vírgula no lugar do ponto
exemplo: n1.toFixed(2).replace('.',',')

para converter em real linha de comando
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}
