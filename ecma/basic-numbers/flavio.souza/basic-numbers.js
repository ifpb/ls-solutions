let result = ''; //Resultado vazio.

for (let number = 0; number <= 99; number += 1) {   //inicio for 0 a 99, com intervalo de 1.
  const whiteSpace = number % 10 === 9 ? '\n' : ' ';    //var espaço em branco. com quebra de linha.
  const value = number < 10 ? `0${number}` : number;    //condição, se numero for menor que 10, adicionar um 0 antes do numero em si ou então, segue numeração normalmente.
  result += value + whiteSpace;     //"result" agora é tratado com as variaveis "whiteSpace" e "Value"
}

console.log(result);