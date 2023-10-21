// Sem parâmetro: Data atual
const hoje= new Date();

// Com parâmetro: String com a data
const exemplo1 = new Date(  "2020-02-28"  );
const exemplo2 = new Date(  "2020-02-27 10:35:00"  );

//  Com parâmetro: Um número para ano, mês, dia, hora, minuto, segundo e milissegundo
const exemplo3 = new Date(  2020, 2, 28, 13, 20, 2, 15  );

const data = new Date()
console.log(data.toLocaleString())
console.log(data.getFullYear())//ano
console.log(data.getMonth())//mes
console.log(data.getDate())//dia
console.log(data.getHours())//horas
console.log(data.getMinutes())//minutos
console.log(data.getSeconds())//segundos
console.log(data.getMilliseconds())//segundos
console.log(data.getDay())//retorna o dia da semana

console.log(data.getTime())//representa quantos milesegundos se passaram desde 
console.log(data.getTimezoneOffset())//retorna diferença de fusos horario
console.log(data.valueOf())//retorna o valor primitivo do objeto

console.log(data.toDateString())//retorna com valor string

console.log(data.toLocaleDateString("pt-BR"))//retorna na linguagem requerida
