// Objetos em TypeScript

// 1. Declaração direta com tipo embutido
let usuario: { nome: string, idade: number } = {
  nome: "Lucas",
  idade: 21
}

// 2. Usando `type` para reutilizar a estrutura
type Usuario = {
  nome: string
  idade: number
}

let u1: Usuario = {
  nome: "Maria",
  idade: 30
}

// 3. Usando `interface`
interface Produto {
  nome: string
  preco: number
}

let item: Produto = {
  nome: "Camiseta",
  preco: 49.9
}

// 4. Propriedades opcionais
type UsuarioOpcional = {
  nome: string
  idade?: number
}

let u2: UsuarioOpcional = { nome: "João" }

// 5. Objeto com chaves dinâmicas
type ErrosFormulario = {
  [campo: string]: string
}

let erros: ErrosFormulario = {
  email: "E-mail inválido",
  senha: "Senha fraca"
}

// 6. Objetos com métodos
type Pessoa = {
  nome: string
  falar: () => void
}

const p1: Pessoa = {
  nome: "Lucas",
  falar: () => {
    console.log("Olá!")
  }
}

// 7. Resumo:
// - `type` pode unir tipos primitivos e usar interseções.
// - `interface` é ideal para herança e orientação a objetos.
