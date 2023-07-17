// length
var arr = [1,2,3,4,5]

console.log(arr.length)

//push - add no final
arr.push(6)
arr.push("Qualquer coisa")

console.log(arr)

//pop - remove no final
arr.pop()

console.log(arr)

//unshift - add no começo
arr.unshift(0)
arr.unshift("teste")

console.log(arr)

// shift - remove do começo
arr.shift()

console.log(arr)

//acessar o último elemento
console.log(arr[arr.length - 1])

//splice - add no meio 
var arr2 = [1,2,3,4,5]

arr2.splice(2,0,999)

console.log(arr2)

arr2.splice(4,1) //(indice)

//join - transformar em string
 var arrFrase = ["o", "rato", "roeu", "a", "roupa"]

  console.log(arrFrase.join(","))

// reverse
console.log(arrFrase.reverse())
