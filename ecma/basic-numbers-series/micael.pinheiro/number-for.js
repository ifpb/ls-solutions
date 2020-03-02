var number;
var result = '';
var cont = 0;

for (let i = 00; i < 100; i++) {

    i < 10 ? number = '0' + i : number = i
    result += number + ' '
    cont += 1

    if (cont == 10) {
        console.log(result)
        result = ''
        cont = 0
    }
}
