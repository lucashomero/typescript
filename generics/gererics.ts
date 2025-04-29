// Generics em TypeScript

// 1. Função genérica básica
function identidade<T>(valor: T): T {
    return valor;
  }
  
  const resultado1 = identidade<string>("Homero");
  const resultado2 = identidade<number>(123);
  
  // `T` é o tipo genérico — pode ser qualquer tipo definido no momento da chamada
  
  // 2. Exemplo com Arrays
  function primeiroElemento<T>(lista: T[]): T {
    return lista[0];
  }
  
  const primeiroNumero = primeiroElemento([10, 20, 30]);      // T é number
  const primeiroNome = primeiroElemento(["Lucas", "Homero"]); // T é string
  
  // 3. Exemplo com Type
  type Caixa<T> = {
    valor: T;
  };
  
  const caixaNumero: Caixa<number> = { valor: 100 };
  const caixaTexto: Caixa<string> = { valor: "Texto dentro da caixa" };
  
  // ✅ Em resumo:
  /*
  | Conceito       | Explicação                                           |
  |----------------|------------------------------------------------------|
  | O que é?       | Código que aceita tipo variável (T, U, V, etc.)      |
  | Pra que serve? | Reutilizar código para diferentes tipos              |
  | Onde usar?     | Funções, tipos, interfaces e classes                 |
  */
  
  // ⚠️ Atenção:
  // - Generics NÃO alteram o valor real, apenas garantem a tipagem correta.
  // - Se o tipo não for informado, o TypeScript tentará inferir automaticamente.
  