// Definindo tipos personalizados com `type`

type Pessoa2 = {
  nome: string
  idade: number
  profissao?: string
}

const pessoa2: Pessoa = {
  nome: "Lucas",
  idade: 21
}

// Diferenças principais entre `type` e `interface`:
// - Ambos podem ser estendidos
// - `type` pode fazer union, intersection, primitivos e funções
// - `interface` permite declarações múltiplas (merge)

// Exemplo com union (|) - restringe valores possíveis
type Status = "ativo" | "inativo" | "pendente"

const estado: Status = "ativo"

// Exemplo com interseção (&) - combina propriedades de dois tipos
type PessoaBase = {
  nome: string
}

type Funcionario = PessoaBase & {
  cargo: string
}

const dev: Funcionario = {
  nome: "Lucas",
  cargo: "Backend"
}

// Exemplo com função
type Somar2 = (a: number, b: number) => number

const soma2: Somar = (x, y) => x + y

// Outro exemplo prático com interseção
type Usuario = {
  id: number
  nome: string
}

type Admin = {
  permissao: string
}

type UsuarioAdmin = Usuario & Admin

const admin: UsuarioAdmin = {
  id: 1,
  nome: "Homero",
  permissao: "TOTAL"
}

// Cuidado com conflitos entre tipos:
type A = { valor: string }
type B = { valor: number }

// type C = A & B // Erro: tipos incompatíveis para a propriedade "valor"
