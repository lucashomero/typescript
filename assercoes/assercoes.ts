// Asserção de Tipo em TypeScript

// Sintaxe usando `as`
const valor1: any = "Homero"
const tamanho1: number = (valor1 as string).length

// Sintaxe usando `<>` (não recomendada em projetos React/JSX)
const valor2: any = "Homero"
const tamanho2: number = (<string>valor2).length

// Quando usar asserção:
// - Quando o TypeScript não consegue inferir corretamente
// - Quando você tem mais conhecimento do que o compilador
// - Ex.: valores de API, elementos DOM, variáveis any

// Exemplo prático com DOM
const input = document.getElementById("meu-input") as HTMLInputElement
input.value = "Novo valor"

// Importante: Asserção NÃO transforma o valor real.
// Ela apenas diz ao TypeScript para tratar como outro tipo.

const x = "123" as unknown as number // perigoso

// Tabela resumo (comentário):
/*
| Aspecto          | Explicação                                                  |
|------------------|--------------------------------------------------------------|
| O que é?         | Forçar o TypeScript a tratar um valor como tipo específico.  |
| Como fazer?      | (valor as Tipo) ou <Tipo>valor                               |
| Usar quando?     | Quando você sabe mais do que o TypeScript sobre o valor.     |
| Atenção!         | Não muda o valor real, apenas "convence" o TypeScript.       |
*/
