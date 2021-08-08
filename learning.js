console.log("Ola mundo");

var numero = 10; //evitar usar
let outronumero = 10;
let string = "Ola ";
let outra = "Mundo"; 
const oi = "Ola mundo"; //nao é possivel alterar 

//* carateres especiais: 
// \n: nova linha
// \\: exibe a \
// \': exibe ' 
// \": exibe "

let concat = string + outra; 
let concat2 = string.concat(outra); 
let concat3 = '${ola} ${mundo} ${20+2}'; 
concat == concat2;

let comparar = 1==1; //true  
let comparar2 = "ola" == "Ola"; //false
let comparar3 = 1=="1"; //true 
let comparar4 = 1==="1" //false porque compara o tipo tambem
 
// == || != compara o valor so; === || !== comparar o valor e o tipo

let array = [1,2,"string"];
let x = null;

let carro = { //objeto
    rodas: 4, 
    portas: 3, 
    nome: "um carro",
};
//alterar variaveis: 
carro.portas = 2; 
carro["portas"] = 2;

//funcoes 

let olamundo = function(){
    console.log("Ola Mundo");
}

olamundo(); 

let soma = function(valor1, valor2){
    let resultado = valor1+valor2; 
    console.log(resultado);
}

soma(1,2);

let soma = function(valor1, valor2){
    let resultado = valor1+valor2; 
    return resultado;
}

// Este objeto não precisa ser mexido
let carro = {
    rodas: 4,
    portas: 2,
    cor: "cinza",
    ano: 2012,
    estado: "novo"
};


function mudarPropriedade(nomePropriedade, novoValor){
    switch(nomePropriedade){
        // O case rodas é um exemplo para as próximas partes
        case "rodas":
            if(novoValor > 1){
                carro.rodas = novoValor;  
                return "Alteracao concluida";
            }
            else{
                return "Minimo de rodas precisa ser 2";
            }
            break;
        case "portas":
            // Para alterar as portas, é necessário que o
            // novo valor seja maior que 0
            // senão deve retornar a string "Minimo de portas precisa ser 1"
            if(novoValor > 0){
                carro.portas = novoValor;
                return "Alteracao concluida";
            }
            else{
                return "Minimo de portas precisa ser 1"; 
            }
            break;
        case "cor":
            // para alterar a cor, novo valor pode ser igual a cinza ou preto ou vermelho
            // se for diferente, retornar "Cor invalida"
            if(novoValor == "cinza" || novoValor == "preto" || novoValor == "vermelho"){
                carro.cor = novoValor;   
                return "Alteracao concluida";
            }
            else{
                return "Cor invalida"
            }
            break;
        // criar um case para o "ano"
        // alterar o ano do carro para o ano informado
        // se o ano for igual a 2019, alterar o estado para "novo" 
        // senao alterar o estado para "usado"
        case "ano": 
            carro.ano = novoValor;
            if (novoValor == 2019){
                carro.estado = "novo"; 
            }
            else{
                carro.estado = "usado";
            }
            return "Alteracao concluida";
        default:
            // retornar a fraase "Propriedade invalida";
            return "Propriedade invalida"; 
    }
    
    // retornar a frase Alteracao concluida somente se foi possivel
    // alterar um dado do objeto.
}

function calcularVetor(vetor, numero){
    //Seu código aqui
    let ret = [];

    for (let num of vetor){  //for (let i = 0; i<=vetor.length;i++)
        if (num > 5){
            let x = num * numero; 
            ret.push(x); 
        }
        else{
            ret.push(num); 
        }
    }
    return ret; 
}

let testeFinal = function(string, numero){
    switch(string){
        case "mundojs": 
            console.log("MundoJS"); 
            return numero; 
        case "soma": 
            let metade = numero/2; 
            return metade + (numero * numero); 
        case "vetor": 
            let vetor = []; 
            for (let i = 0; i<5;i++){
                vetor[i] = numero + i * 2; 
            }
            return vetor; 
        case "booleano":             
            let vet = []; 
            let mais = 0; 
            for (let x = 0; x<5;x++){
                mais += numero + x * 2; 
            }
            if (mais > 35){
                return true; 
            }
            else{
                return false; 
            }
            break;    
            default: 
                return -1; 
    }   
    
}
