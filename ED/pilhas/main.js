function stack()
    let itens = []

    this.push = function(element){
        //adiciona um novo elemento a pilha
        itens.push(element)
    }

    this.pop = function(){
        //remove item do topo da pilha
        return itens.pop()
    }

    this.peek = function(){
        //devolve o elemento que está no topo da pilha
        return itens[itens.length - 1]

    }

    this.isEmpty = function(){
        //informar se a pilha está vazia ou não
        return itens.length === 0
    }

    this.clear = function(){
        //limpa a pilha
        itens = []
    }
    this.size = function(){
        //informa o tamanho da pilha
        return itens.length
    }

    this.print = function(){
        //imprime a pilha no console
        console.log(itens.toString())
    }

    let pilha = new stack()

    pilha.push(2)
    pilha.push(4)
    pilha.push(6)
    pilha.push(8)
    pilha.push(10)

    console.log(pilha.size())