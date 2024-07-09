//Números primos
num = 2

while (num <= 50) {
    let isPrime = true
    let divisor = 2

    while (divisor < num){
        if (num % divisor === 0) {
            isPrime = false
            break
        }
        divisor++
    } if (isPrime){
        console.log(num)
    }
    num++
}

//Isprime é usado para validar se ele é um numero primo ou não