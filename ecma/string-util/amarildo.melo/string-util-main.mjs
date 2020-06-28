import { formatter } from "./string-util.mjs";


console.log(formatter("lorem ipsum dolor", "uppercase"));

console.log(formatter("lorem ipsum dolor", "lowercase"));

//Adiciona um '_' entre as palavras 
console.log(formatter("lorem ipsum dolor", "snakecase"));

//Mostra o texto com as letras invertidas 
console.log(formatter("lorem ipsum dolor", "reverse"));