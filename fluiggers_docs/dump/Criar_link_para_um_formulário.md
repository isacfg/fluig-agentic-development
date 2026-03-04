# Criar link para um formulário

> **Fonte:** [https://fluiggers.com.br/t/criar-link-para-um-formulario/1090](https://fluiggers.com.br/t/criar-link-para-um-formulario/1090)
> **Categoria:** Formulários
> **Tags:** `form`, `bpm`
> **Criado em:** 18/05/2022, 18:31
> **Visualizações:** 520 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Everton Alves** (@everton) — 18/05/2022, 18:31

Olá!

Preciso criar uma widget que monte uma lista dos formulários gravados numa determinada pasta e possibilite a visualização quando clicado em algum item dessa lista.
Existe alguma forma de se criar um link para visualizar um formulário já cadastrado no fluig?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Igor Rodrigues** (@fluigor.com.br) — 19/05/2022, 11:20 | ❤️ 1

Olã [@everton](/u/everton)

Todos os registros de formulários possuem uma url de iframe que pode ser consultada no inspecionar elementos ao abrir o formulário.

```auto
<iframe id="ecm-documentview-docframe" name="ecm-documentview-docframe" frameborder="0" style="" src="http://empresa.fluig.com.br:8480/webdesk/streamcontrol/3160/3161/3000//?WDCompanyId=1&amp;WDNrDocto=3161&amp;WDNrVersao=3000&amp;WDParentDocumentId=3160&amp;edit=false"></iframe>
```

---
