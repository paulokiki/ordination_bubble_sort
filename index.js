
do{
    console.log("1 -   INCLUIR -   1");
    console.log("2 -  BOOBLESORT - 2");
    console.log("3 -   ALTERAR -   3");
    console.log("0 -    SAIR -     0")
    console.log(" ");
    opcao = parseInt( prompt("Escolha a opção:"));
 

switch(opcao){
case 1:
let  tam = prompt("Qual o tamanho do ARRAY?");
    
   console.log (fillArray(tam));
break;

case 2:
console.log("BoobleSort");
console.log(opcao);
break;

default:
break;

}


}while(opcao > 0 && opcao < 4)

console.log("Saindo do DoWhile");




function boobleSort(){

     
}





function fillArray(tamanho){
let array = [];  
for (let i =0; i < tamanho; i++){
array.push(Math.ceil(Math.random()*(100 - 0) + 0));

}
return array;
}


