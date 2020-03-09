function fatorial (number)  {
    if (number) 
            return number * fatorial(number - 1); 
        else return 1;

    }

export { fatorial }