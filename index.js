let array;
do{
    console.log("_____________________");
    console.log(" ");
    console.log("|1 -   INCLUIR   - 1|");
    console.log("|2 -  BOOBLESORT - 2|");
    console.log("|3 -   ALTERAR   - 3|");
    console.log("|4 -  MERGESORT  - 4|");
    console.log("|0 -    SAIR     - 0|")
    console.log("_____________________");

    
    opcao = parseInt( prompt("Escolha a opção:"));
 

switch(opcao){
    
case 1:
console.log("_____________________________")
let tam = prompt("  Qual o tamanho do ARRAY?");
array = fillArray(tam);
console.log (array);
break;

case 2:
console.log("_____________________");
console.log("    BoobleSort");
let result = boobleSort(array);
console.log(result);
break;

case 4:
console.log("_____________________");
console.log("    mergSort");
break;

default:
break;

}


}while(opcao > 0 && opcao < 5)

console.log("Saindo!!!");










function fillArray(tamanho){
let array = [];  
for (let i =0; i < tamanho; i++){
array.push(Math.ceil(Math.random()*(100 - 0) + 0));

}
return array;
}

function boobleSort(array){
    for(let i = 0; i < array.length; i++) {
          
    for(let j = 0; j < array.length; j++) {
            
            if(array[j] > array[j + 1]) {
              let aux = array[j];
              array[j] = array[j + 1];
              array[j + 1] = aux;
            }
          }
        }
        return array
}


