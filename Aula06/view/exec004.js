var sal = Number(prompt('quanto você recebe?'))
document.write(`você recebe ${sal.toLocaleString('us-EN', {style: 'currency', currency: 'USD'})}`)