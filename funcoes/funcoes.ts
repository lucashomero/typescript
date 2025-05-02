// Funções em TypeScript

// 1. Tipando parâmetros e retorno
function saudacao(nome: string): string {
  return `Olá, ${nome}`
}

// 2. Função com múltiplos parâmetros
function somar(a: number, b: number): number {
  return a + b
}

// 3. Parâmetros opcionais
function apresentar(nome: string, idade?: number): string {
  return idade
    ? `Nome: ${nome}, Idade: ${idade}`
    : `Nome: ${nome}`
}

// 4. Parâmetros com valor padrão
function cumprimentar(nome: string = "visitante"): string {
  return `Bem-vindo, ${nome}`
}

// 5. Funções anônimas com tipo
const dobro: (n: number) => number = function (n) {
  return n * 2
}

// 6. Arrow functions tipadas
const triplo = (n: number): number => n * 3

// 7. Funções que não retornam nada (void)
function logMensagem(mensagem: string): void {
  console.log(mensagem)
}

// 8. Funções que nunca retornam (never)
function erro(): never {
  throw new Error("Erro inesperado!")
}
