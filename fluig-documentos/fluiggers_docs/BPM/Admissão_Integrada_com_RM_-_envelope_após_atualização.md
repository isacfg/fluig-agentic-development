# Admissão Integrada com RM - envelope após atualização

> **Fonte:** [https://fluiggers.com.br/t/admissao-integrada-com-rm-envelope-apos-atualizacao/1056](https://fluiggers.com.br/t/admissao-integrada-com-rm-envelope-apos-atualizacao/1056)
> **Categoria:** BPM
> **Tags:** `bpm`, `rm`, `integração`, `admissão`, `xml`
> **Criado em:** 27/04/2022, 09:43
> **Visualizações:** 617 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 27/04/2022, 09:43

Salve nação!

Alguém já conseguiu acertar o XML de envio da integração de Admissão no RM (objeto FopFuncData) após as últimas atualizações?

Precisei incluir alguns campos novos que o sistema pediu, mas não consigo passar por este erro aqui:

![image](https://fluiggers.com.br/uploads/default/original/1X/6c027ab60aa6f58ce501bde35248319f43fbcc8e.png)

O envelope está em anexo - incluí o MOTIVO tanto na fopfunc quanto PFHSTSAL (essa incluí inteira conforme documentação), mas o erro persiste - com certeza o campo MOTIVO está no local errado…

[TESTE.XML](https://fluiggers.com.br/uploads/short-url/2zPe2LTnTyJ3kFXRIzBVngnwjBA.XML) (6,4,KB)

Valeu!

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 24/05/2022, 16:19

Galera, atualizando esse caso…vimos que o envelope estaria desatualizado, blz…fiz alguns testes com o SOAPUI e agora temos erro de violação de chave estrangeira:

![image](https://fluiggers.com.br/uploads/default/original/1X/8b5662379a900851458a5241411785e694dde507.png)

Não sou muito entendido de RM pra saber exatamente o que modificar no envelope, mas creio que seja incluir ou excluir algum dado das subtabelas, correto? Alguém poderia ajudar? Envelope novo em anexo.
[xml revisado.txt](https://fluiggers.com.br/uploads/short-url/qBEj1NyxfVzw67r0P5VeXQgArPu.txt) (6,8,KB)

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Allan Reichert** (@allan.reichert) — 25/05/2022, 09:37 | ❤️ 1

olá, Não entendo de RM. Pelo erro, acredito que o problema é que você esteja incluindo um item filho sem pai. o cadastro em na tabela “PHSTFCO” depende da tabela pai “PMOTMUDFUNCAO”. o ID relacionado a tabela “PMOTMUDFUNCAO” deve estar NULL ou não existe.

---

## Resposta #3

**Daniel Cabral Santos** (@daniel.cabral) — 02/06/2022, 10:37 | ❤️ 1

[@allan.reichert](/u/allan.reichert) , bom dia!

Valeu a dica cara…houve uma confusão entre as coligadas (são várias). O ideal é padronizar os motivos de mudança de função entre elas.

Após esse ajuste e a atualização do XML com os novos campos obrigatórios, a admissão foi feita. Muito obrigado!

---
