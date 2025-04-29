// Enums em TypeScript

// Enum numérico (padrão: começa de 0)
enum StatusNum {
    Ativo,     // 0
    Inativo,   // 1
    Pendente   // 2
  }
  
  const estadoNum: StatusNum = StatusNum.Ativo;
  console.log(estadoNum); // 0
  
  // Enum com valores customizados
  enum StatusCustom {
    Ativo = 1,
    Inativo = 2,
    Pendente = 5
  }
  
  console.log(StatusCustom.Pendente); // 5
  
  // Enum de strings
  enum StatusStr {
    Ativo = "ATIVO",
    Inativo = "INATIVO",
    Pendente = "PENDENTE"
  }
  
  const estadoStr: StatusStr = StatusStr.Ativo;
  console.log(estadoStr); // "ATIVO"
  
  // ✅ Em resumo:
  /*
  | Característica                  | Explicação                                           |
  |----------------------------------|------------------------------------------------------|
  | Organiza constantes             | Ex.: Status de usuário, tipo de pagamento             |
  | Pode ser número ou string        | Valor pode ser implícito (número) ou explícito (string) |
  | Usado para segurança de código   | Evita erros de digitação                              |
  | Permite fácil comparação         | Ex.: if (estado === Status.Ativo)                    |
  */
  
  // ⚡ Pequeno exemplo de uso prático:
  
  enum DiaSemana {
    Segunda = "SEG",
    Terca = "TER",
    Quarta = "QUA",
    Quinta = "QUI",
    Sexta = "SEX"
  }
  
  function diaUtil(dia: DiaSemana) {
    return dia !== DiaSemana.Sexta;
  }
  
  console.log(diaUtil(DiaSemana.Quarta)); // true
  console.log(diaUtil(DiaSemana.Sexta));  // false
  