// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 100
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumurado = true} = pessoa
console.log(sobrenome, bemHumurado)

const{endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

const {conta: {ag, num}} = pessoa //Cuidado ao tentar acessar propriedades   n sejam objetos
console.log(ag, num)