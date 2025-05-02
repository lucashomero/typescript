// Arrays em TypeScript

// 1. Sintaxe com tipo[]
let numeros: number[] = [1, 2, 3, 4]
let nomes: string[] = ["Lucas", "João", "Maria"]

// 2. Sintaxe com Array<T>
let numerosAlt: Array<number> = [1, 2, 3, 4]
let flags: Array<boolean> = [true, false, true]

// Ambas as formas são equivalentes — escolha a mais legível para o seu projeto.

// 3. Arrays com tipos personalizados (objetos)
type Produto = {
  nome: string
  preco: number
}

let produtos: Produto[] = [
  { nome: "Camiseta", preco: 50 },
  { nome: "Calça", preco: 100 }
]

// 4. Arrays com múltiplos tipos (union types)
let dados: (string | number)[] = ["Lucas", 21, "Homero", 30]

// Observação: Arrays em TypeScript são tipados por padrão.
// Isso melhora a autocompletação e ajuda na detecção de erros.
