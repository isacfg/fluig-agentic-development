# Como limpar tabela PaixFilho

> **Fonte:** [https://fluiggers.com.br/t/como-limpar-tabela-paixfilho/1123](https://fluiggers.com.br/t/como-limpar-tabela-paixfilho/1123)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 08/06/2022, 12:08
> **Visualizações:** 361 | **Likes:** 3 | **Respostas:** 0

---

## Pergunta original

**Vaz** (@Vaz) — 08/06/2022, 12:08

Pessoal, bom dia!

Como posso fazer paga apagar “zerar” a minha tabela PaixFilho?

Gostaria que todos os itens fossem excluídos e ela ficasse como se fosse uma nova.

---

## Resposta #1

**Eduardo Vantini Neto** (@eduardo.vantini) — 09/06/2022, 13:25 | ❤️ 3

Olá, tudo bem??

```auto
$("input[id^=IdCampo___]").each(function(i, e) {
	fnWdkRemoveChild(e);
})
```

Desse jeito remove todos os filhos.

Abs.

---
