# Erro ao anexar arquivo

> **Fonte:** [https://fluiggers.com.br/t/erro-ao-anexar-arquivo/3532](https://fluiggers.com.br/t/erro-ao-anexar-arquivo/3532)
> **Categoria:** Formulários
> **Criado em:** 26/12/2025, 15:03
> **Visualizações:** 67 | **Likes:** 4 | **Respostas:** 3

---

## Pergunta original

**Henrique** (@Henrique_L) — 26/12/2025, 15:03

Olá Pessoal,

Estou com um erro no Fluig ao tentar anexar arquivos:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/5/59d630353705a58a2699aeda72cb655e1c0672a9_2_690x221.png)

Alguém já passou por isso e sabe como me auxiliar?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 26/12/2025, 15:41

Pela mensagem tá parecendo que lá no wcmadmin não configurou os volumes para salvar anexos.

Quando cadastramos o Volume podemos deixar um Padrão, que vai servir pra tudo, ou configurar vários volumes, pra cada coisa específica.

![image](https://fluiggers.com.br/uploads/default/original/2X/a/a57c10aaaafea78a4b28d76bd358ce405425d3ac.png)

Dá uma conferida se por acaso não usou o Padrão e nisso esqueceu de configurar o volume pra anexos de workflow.

---

## Resposta #2

**Henrique** (@Henrique_L) — 26/12/2025, 15:53

Temos o default já configurado, funciona normalmente em todos os processos, exceto em um processo em específico que está gerando problema.

Será que é algo específico no workflow?
Comparei com outros processos e não parecia ter nada de diferente.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 27/12/2025, 09:43

Pior que nunca tive erro parecido. Ainda mais considerando que só ocorre com 1 processo específico.

Aí só consigo recomendar a olhar os detalhes do erro e a olhar o log no Fluig. Talvez tenha alguma informação útil neles.

---

## Resposta #4

**Igor Rodrigues** (@fluigor.com.br) — 05/01/2026, 09:28

[@Henrique\_L](/u/henrique_l) Consegue enviar o texto que se encontra ali em ver detalhes técnicos?

---

## Resposta #5 ✅ RESPOSTA ACEITA

**Igor Rodrigues** (@fluigor.com.br) — 12/01/2026, 12:23 | ❤️ 2

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/bruno_gasparetto/48/68_2.png) Bruno\_Gasparetto:
>
> > Aí só consigo recomendar a olhar os detalhes do erro e a olhar o log no Fluig. Talvez tenha alguma informação útil neles.

Olá [@Henrique\_L](/u/henrique_l) encontrei outro cliente com um problema exatamente igual ao seu!
Poderia nos dar mais detalhes, se tu desenvolveu este processo utilizando o plugin da 2.0? e exportou para ambiente 1.8.2 e se realizou versionamentos de código recentemente em seu processo.

---

## Resposta #6

**lucaslamb** (@lucaslamb) — 14/01/2026, 14:22 | ❤️ 1

Olá, estava ocorrendo o mesmo erro para mim depois de exportar com a versão 2.0.0.2.

O que fiz foi colocar a versão do plugin 1.8.2 em outro eclipse, importei o processo e criei uma regra de anexos nas propriedades e exportei, dessa forma voltou a funcionar.

---

## Resposta #7

**Mauricio Freitas** (@mauriciolanner) — 20/01/2026, 16:11 | ❤️ 1

Aparentemente o erro esta dando por usar o fluig studio na versão 2.0 para um fluig na 1.8. O Downgrade da versão do fluig studio para o 182 resolveu também meu problema, mas precisou alterar algo no processo, fiz somente movimentar uma tarefa e depois coloar no lugar de novo.

`Erro ao salvar os anexos: Não existe volume associado para a pasta -1: com.datasul.technology.webdesk.workflow.exception.WorkflowSaveAndSendTaskException: Erro ao salvar os anexos: Não existe volume associado para a pasta -1`

---
