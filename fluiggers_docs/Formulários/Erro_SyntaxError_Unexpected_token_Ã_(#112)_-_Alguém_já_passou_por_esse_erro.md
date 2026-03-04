# Erro SyntaxError: Unexpected token: Ã (#112) - Alguém já passou por esse erro?

> **Fonte:** [https://fluiggers.com.br/t/erro-syntaxerror-unexpected-token-a-112-alguem-ja-passou-por-esse-erro/2790](https://fluiggers.com.br/t/erro-syntaxerror-unexpected-token-a-112-alguem-ja-passou-por-esse-erro/2790)
> **Categoria:** Formulários
> **Criado em:** 16/05/2024, 17:31
> **Visualizações:** 160 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Filipe Silva** (@ferilva89) — 16/05/2024, 17:31

Olá!

Estamos movimentando um fluig que faz integração com Protheus, eliminando resíduos do PV gerado por Contratos de Venda do Gestão de Contratos (SIGAGCT).

O erro apresentado é esse: Atividade de serviço executada com falha: Tentativa: 1 - Erro SyntaxError: Unexpected token: Ã (#112) - Tempo de Execução 2 s

Segue anexo o log do usuário que executou.

Se alguém tiver uma luz, compartilha aqui, por favor.

Att,

Filipe Nantes
[oliveiram20240516-1705.log](https://fluiggers.com.br/uploads/short-url/wkTKimDrU89RXfhyPIt3ck4LJi.log) (79,9,KB)

---

## Resposta #1

**venturelli** (@venturelli) — 16/05/2024, 23:34

Sem o código do processo em si fica difícil ter certeza, mas o erro de “Unexpected token” normalmente ocorre quando está tentando fazer uma conversão de uma string para um json por exemplo. Como o json espera que o primeiro caractere seja um ‘{’ ele dá o erro dizendo que recebeu algo inesperado, no teu caso, Ã.

Confira os eventos do processo para ver se em algum deles, na linha 112, ele faz um JSON.parse ou envia para algum serviço que talvez esteja esperando receber um json.

---

## Resposta #2

**Hiago oliveira** (@Hiago_oliveira) — 18/06/2024, 16:56

Boa tarde man, resolveu ?
Se não resolvei faria o que o amigo acima falou.
Já enfrentei isso em eventos de workflow.
Abraço !

---
