function calc(n1,n2,op){
    if (op == '+'){
        return (n1+n2);
    }else if (op == '-'){
        return (n1-n2);
    }else if (op == '*'){
        return (n1*n2);
    }else if (op == '/'){
        return (n1/n2);
    }
}

console.log(calc(8,5,'+'));
console.log(calc(8,5,'-'));
console.log(calc(8,5,'*'));
console.log(calc(8,5,'/'));
