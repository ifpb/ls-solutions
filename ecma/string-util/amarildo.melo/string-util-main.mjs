import { formatter } from "./string-util.mjs";


console.log(formatter("lorem ipsum dolor", "uppercase"));

console.log(formatter("lorem ipsum dolor", "lowercase"));

//Adiciona um '_' entre as palavras 
console.log(formatter("lorem ipsum dolor", "snakecase"));