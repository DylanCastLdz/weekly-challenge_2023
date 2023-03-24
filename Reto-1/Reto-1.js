let contador = 1
while (contador <= 100) {
    if (contador % 3 == 0 && contador % 5 == 0) {
        console.log("FizzBuzz");
        contador += 1
    } else if (contador % 3 == 0) {
        console.log("Fizz");
        contador +=1
    } else if (contador % 5 == 0) {
        console.log("Buzz");
        contador += 1
    } else {
        console.log(contador);
        contador += 1
    } 
}