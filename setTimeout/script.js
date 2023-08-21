//setTimeout - executar uma função depois de um tempo

console.log("Antes do setTimeout")

setTimeout(function () {
    
    console.log("Testando o setTimeout")

}, 2000)

// setInterval
setInterval(function(){
    console.log("Testando setInterval")
}, 1000)

//clearTimeout

let x = 0;

let myTimer = setTimeout(function () {
    console.log("O x é 0")
}, 1500)

x = 5

if(x > 0){
    clearInterval(myTimer)
    console.log("O x passou de 0")
}

//clearSetInterval 

let myInterval = setInterval(function(){

    console.log("Imprimindo interval")

}, 500)

setTimeout(function(){

    console.log("Não precisamos mais repetir!")

    clearInterval(myInterval)
    
},1500)