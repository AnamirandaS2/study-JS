console.log(this)


let pessoa = {
    nome: "Ana",
    idade: 17,
    falar: function(){
        console.log("Olá, tudo bem?")
    },
    dizerNome: function(){
        console.log("O meu nome é "+ this.nome)
    },
    aniversario: function(){
        this.idade += 1
    }
}

pessoa.dizerNome()

console.log(pessoa.idade)

pessoa.aniversario()

console.log(pessoa.idade)