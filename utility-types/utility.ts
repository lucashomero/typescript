// Utilitários de tipos em TypeScript

// Interface base para exemplos
interface Produto {
    id: number;
    nome: string;
    preco?: number;
  }
  
  // 🔹 Partial<T> - Torna todos os campos opcionais
  type ProdutoParcial = Partial<Produto>;
  
  const prod1: ProdutoParcial = {
    nome: "Camiseta"
  };
  
  // 🔹 Pick<T, K> - Escolhe apenas alguns campos
  type ProdutoNome = Pick<Produto, "nome">;
  
  const prod2: ProdutoNome = {
    nome: "Tênis"
  };
  
  // 🔹 Omit<T, K> - Remove campos
  type ProdutoSemPreco = Omit<Produto, "preco">;
  
  const prod3: ProdutoSemPreco = {
    id: 1,
    nome: "Jaqueta"
  };
  
  // 🔹 Record<K, T> - Cria um tipo de objeto
  type ProdutosPorCategoria = Record<string, Produto[]>;
  
  const estoque: ProdutosPorCategoria = {
    roupas: [{ id: 1, nome: "Camisa", preco: 100 }],
    calcados: [{ id: 2, nome: "Tênis", preco: 250 }]
  };
  
  // 🔹 typeof - Pega o tipo de uma variável/objeto
  const produto = {
    id: 1,
    nome: "Camiseta"
  };
  
  type TipoProduto = typeof produto; // { id: number; nome: string; }
  
  // 🔹 keyof - Retorna as chaves como union
  type ChavesProduto = keyof Produto; // "id" | "nome" | "preco"
  
  // ✅ Resumo:
  /*
  | Palavra      | Função                              |
  |--------------|-------------------------------------|
  | Partial<T>   | Torna tudo opcional                 |
  | Pick<T, K>   | Escolhe alguns campos               |
  | Omit<T, K>   | Remove campos                       |
  | Record<K, T> | Cria objeto com chave e tipo        |
  | typeof       | Pega o tipo de algo                 |
  | keyof        | Pega as chaves de um tipo           |
  */
  