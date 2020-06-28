var number;
var result = '';
var cont = 0;
var i = 0;

do {

    i < 10 ? number = '0' + i : number = i;
    result += number + ' ';

    i += 1
    cont += 1

    if (cont == 10) {
        console.log(result)
        result = ''
        cont = 0
    }


} while (i < 100);



