// Tipos Primitivos - TypeScript

// number: inteiros ou decimais
let idade: number = 25;
let altura: number = 1.75;

// string: textos com aspas ou template string
let nome: string = "Lucas";
let frase: string = `Olá, ${nome}`;

// boolean: verdadeiro ou falso
let estaLogado: boolean = true;

// null: ausência intencional de valor
let nada: null = null;

// undefined: variável sem valor atribuído
let valor: undefined = undefined;

// symbol: identificadores únicos
let id: symbol = Symbol("id");

// bigint: inteiros muito grandes
let grandeNumero: bigint = 9007199254740991n;

// any: aceita qualquer tipo (⚠️ evita segurança de tipos)
let valorIndefinido: any = 5;
valorIndefinido = "agora é uma string";
valorIndefinido = true;

// ⚠️ Evite usar 'any' sempre que possível.
// Prefira tipos mais específicos ou 'unknown'.
