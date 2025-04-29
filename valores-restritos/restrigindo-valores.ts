// Restringindo valores em TypeScript

// Usando `type` com tipo literal
type Status = "ativo" | "inativo" | "pendente";

let situacao: Status;

situacao = "ativo";      // OK
situacao = "pendente";   // OK
// situacao = "apagado"; // ❌ Erro: "apagado" não é permitido

// Usando `interface` com valor restrito
interface Usuario {
  nome: string;
  status: "ativo" | "inativo" | "pendente";
}

const user: Usuario = {
  nome: "Lucas",
  status: "ativo" // ✅ permitido
};

// ✅ Resumo:
/*
| Técnica                      | Como restringe                                      |
|-------------------------------|-----------------------------------------------------|
| Tipo literal (`"valor1" | "valor2"`) | Restringe valores possíveis                   |
| Uso em `type` e `interface`   | Controla exatamente quais valores são aceitos       |
| Erro em tempo de compilação   | TypeScript acusa erro se valor não estiver permitido |
*/
