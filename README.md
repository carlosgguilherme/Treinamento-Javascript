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
> var s = 'Javascript' | `Estou aprendendo ${s}`

ou usar concatenação, mas sempre interpolar.

Pode ser usado atributos para formatar strings 

>n.length  `quantos caracteres a string tem`

>n.toUpperCase()  `tudo para 'MAIUSCULAS'`

>n.toLowerCase()  `tudo para 'minúsculas'`

Formatar números 

>var n1 = 1543.5

>n1.toFixed(2) `para ter 2 casa depois do .`

>replace('.',',') `para ter vírgula no lugar do ponto`

exemplo: 

>n1.toFixed(2).replace('.',',')

para converter em real linha de comando
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

<h3>OPERADORES</h3>{

<strong>Aritméticos,
    Atribuição,
    Relacionais,
    Lógicos,
    Ternários</strong>
    <hr>


<h4>Aritméticos</h4>

>5 + 2 = 7  `soma dos números`

>5 - 2 = 3  `subtração dos números`

>5 * 2 = 10  `multiplicação dos números`

>5 / 2 = 2.5  `divisão real dos números` 

>5 % 2 = 1  `resto da divisão inteira entre números`

>5 ** 2 = 25  `é a potencia elevada ao número` `Exemplo: 5 elevado a 2 = 5.5 = 25` 

<strong>Tomar cuidado com os operadores, isso porque 5 + 3 / 2, ele faz primeiro o 3 / 2 logo 5 + 3 / 2 = 6.5, Use () para alterar a ordem de Precedência</strong>

Exemplos: 
> 5 + 2 = 7 

> 5 - 2 = 3 

> 5 * 2 = 10

> 5 / 2 = 2.5

> 5 % 2 = 1

> 5 ** 2 = 25

> (5 * 2) + (4 / 2) = 12

<strong>ordem de Precedência:
() > ** > * = / = % > + = - </strong>
<hr>


<h4>Atribuições Simples:</h4>

> a = 5 + 3 = 8

> b = a % 5 = 3

> c = 5 * b ** 2 = 45

> d = 10 - a / 2 = 6

> e = 6 * 2 / d = 2

> f = b % e + 4 / e = 3

<h4>Auto-atribuições - Operadores de atribuição: </h4>

> n = 3

> n = n + 4 | n += 4

> n = n - 5 | n -= 5

> n = n * 4 | n *= 4

> n = n / 2 | n /= 2

> n = n ** 2 | n **= 2

> n = n % 5 | n %= 5

`Resultado é 3`

<h4>Incremento:</h4>
<strong>Para incrementar +1 ou decrementar -1</strong>

>n++ `Somar 1`

>n-- `Subtrair 1`

<hr>

<h4>Relacionais</h4>

> 5 > 2 = true `Maior`

> 7 < 4 = false `Menor`

> 8 >= 8 = true `Maior igual`

> 9 <= 7 = false `Menor igual`

> 5 == 5 = true `Igual`

> 4 != 4 = false `Diferente`

<strong>Exemplos</strong>

> preço >= 200.50 `o preço é maior ou igual a 200.50?`

> idade < 18 `a idade é menor do que 18?`

> curso == 'JavaScript' `o curso é JavaScript?`

> n1 != n2 `o primeiro número é diferente do segundo?`

`Javascript não verifica o tipo e sim o valor ` `== mesmo valor` `=== mesmo valor e tipo`
<hr>
<h4>Lógicos</h4>

> ! `Negação` `NÂO`

> && `Conjunção` `E`

> || `Disjunção` `OU`

Exemplos:

> idade >= 15 && idade <= 17 `a idade está entre 15 e 17 anos?`

>estado == 'RJ' || estado == 'SP' `o estado é RJ ou SP?`

>salário > 1500 && sexo != 'M' `o salário é acima de 1500 e não é homem?`

<strong>ordem de Precedência:
! > && > || </strong>

<h4>Térnario</h4>

> ?

> :

Exemplo:

> idade = 17

> res = idade >= 18 ?'MAIOR':'MENOR'

>'MENOR'
<hr>
<h3>Introdução ao DOM</h3>

Usando `.document` com as tag abaixo, para indentificação de onde quero fazer a manipulação, podendo ser feito pelo `Nome da Tag`|`TagName`,`id`,`name`, `Nome da classe`|`ClassName` e o `querySelector`

Exemplos:

>.getElementByTagName 

>.getElementById 

>.getElementByName 

>.getElementByClassName

>.querySelector 

}

