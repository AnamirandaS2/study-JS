let pessoa = {
    nome: "Ana",
    idade: 17,
    falar: function(){
        console.log("Olá, tudo bem?")
    },
    soma: function(a,b){
        return a + b;
    }
}

console.log(pessoa.nome)

pessoa.falar()

var soma = pessoa.soma(2,3)

console.log(soma)