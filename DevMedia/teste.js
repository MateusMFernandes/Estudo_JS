let nome = "Jackeline";

let texto = `${nome} é muito legal!`;

let novoTexto = texto.replace("legal", "simpática");

console.log(novoTexto)
novoTexto = novoTexto.length

if(novoTexto > 20){
	console.log("Texto longo!");
} else{
	console.log("Texto curto!");
}