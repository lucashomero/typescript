// Interface em TypeScript

// Definindo estrutura de um objeto
interface Pessoa {
  nome: string
  idade: number
  profissao?: string // propriedade opcional
}

// Exemplo de uso
const pessoa: Pessoa = {
  nome: "Lucas",
  idade: 21
}

// Interface para função
interface Somar {
  (a: number, b: number): number
}

const soma: Somar = (x, y) => x + y

// Interface herdando outra
interface Animal {
  nome: string
}

interface Cachorro extends Animal {
  raca: string
}

const meuCachorro: Cachorro = {
  nome: "Bolt",
  raca: "Labrador"
}

// Recapitulando:
// - `interface` define contratos de estrutura
// - Pode ter campos opcionais com `?`
// - Pode descrever funções
// - Pode herdar de outras interfaces
