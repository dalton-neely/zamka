const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let L,D,X

const findMinimal = () => {
    for(let i = L; i <= D; i++){
        let sum = 0
        i.toString().split('').forEach(digit => {
            sum += parseInt(digit,10)
        })
        if(sum === X)
            return i
    }
}

const findMaximum = () => {
    for(let i = D; i >= L; i--){
        let sum = 0
        i.toString().split('').forEach(digit => {
            sum += parseInt(digit,10)
        })
        if(sum === X)
            return i
    }
}

rl.on('line', input => {
    if(!L)
        L = parseInt(input,10)
    else if(!D)
        D = parseInt(input,10)
    else{
        X = parseInt(input,10)
        console.log(findMinimal())
        console.log(findMaximum())
        rl.close()
    }
})