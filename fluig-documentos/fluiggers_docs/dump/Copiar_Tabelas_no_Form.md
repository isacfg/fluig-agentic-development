# Copiar Tabelas no Form

> **Fonte:** [https://fluiggers.com.br/t/copiar-tabelas-no-form/652](https://fluiggers.com.br/t/copiar-tabelas-no-form/652)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 14/09/2021, 16:01
> **Visualizações:** 825 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Romulo Pereira** (@romuloccomp) — 14/09/2021, 16:01

Galera, vocês já fizeram um formulário onde precisar existir duas tabelas, e a segunda é criada com os itens da primeira:

Tabela 1:
Item | Descrição | Especificação | etc…

Tabela 2:
Item | Descrição | Preço | Prazo | etc…

No exemplo, o Item e descrição são comuns e os demais campos são específicos.

Estou avaliando se faço tudo via js ou em algum evento. Se tiverem alguma sugestão, dica ou exemplo, eu agradeço.

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 15/09/2021, 09:27 | ❤️ 2

A forma mais fácil que vejo de fazer isso é através de algum evento de workflow, como por exemplo o afterProcessCreate se essa primeira tabela for preenchida na criação da solicitação.

Ou, afterTaskComplete quando uma determinada atividade for concluída.

Segue abaixo um exemplo que espero que possa te ajudar.

```auto
var indicesTabela1 = hAPI.getChildrenIndexes("TABLENAME-DA-TABELA-1"); // Total de itens da tabela 1

for (var i = 0; i < indicesTabela1.length; i++) {
	// Inseri linhas na tabela 2
	var tabela2 = new java.util.HashMap();
	tabela2.put("itemTabel2", hAPI.getCardValue("itemTabel1___" + indicesTabela1[i]));
	tabela2.put("descricao2", hAPI.getCardValue("descricao1___" + indicesTabela1[i]));
	tabela2.put("preco", "1500");
	tabela2.put("prazo", "60 dias");
	hAPI.addCardChild("TABLENAME-DA-TABELA-2", tabela2);
}
```

Ele vai percorrer cada linha da tabela 01 e jogar para a tabela 02.

---

## Resposta #2

**Romulo Pereira** (@romuloccomp) — 15/09/2021, 09:42

Excelente Sergio, gostei da forma que sugeriu, vou fazer dessa forma.

---
