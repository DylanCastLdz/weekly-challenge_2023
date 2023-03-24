contador = 1
while (contador <= 100): 
    if (contador % 3 == 0 and contador % 5 == 0):
        print("FizzBuzz")
        contador = contador + 1
    elif contador % 3 == 0:
        print("Fizz")
        contador = contador + 1
    elif contador % 5 == 0:
        print("Buzz")
        contador = contador + 1
    else:
        print(contador)
        contador = contador + 1