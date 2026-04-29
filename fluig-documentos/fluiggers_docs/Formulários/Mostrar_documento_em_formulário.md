# Mostrar documento em formulário

> **Fonte:** [https://fluiggers.com.br/t/mostrar-documento-em-formulario/3268](https://fluiggers.com.br/t/mostrar-documento-em-formulario/3268)
> **Categoria:** Formulários
> **Criado em:** 30/04/2025, 15:31
> **Visualizações:** 50 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Joseph Tonete Knoener** (@jovare_tenorio) — 30/04/2025, 15:31

Olá, boa tarde!

Queria mostrar um documento que já está no Fluig ao lado dos meu campos de preencimento em um formulário,

![formuário](https://fluiggers.com.br/uploads/default/optimized/2X/0/00112189eeb2c0df5a4e0946d7d2dbd569ba12b2_2_690x441.png)

mas até agora a única forma que achei foi usando o componente de visualização de documento descrito nessa página do tdn:

![](https://tdn.totvs.com/s/-dgf44d/8804/xgjkrn/56/_/favicon.ico) [tdn.totvs.com](https://tdn.totvs.com/pages/releaseview.action?pageId=766954991)

### [Componente de visualização de documento - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=766954991)

Tem algum jeito?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Joseph Tonete Knoener** (@jovare_tenorio) — 30/04/2025, 16:00 | ❤️ 1

Consegui fazer. Descobri que dá pra acessar os dados do arquivo pela mesma rota do ECMBC:

```javascript
var response = await fetch(`${server-domain}/ecm/api/rest/ecm/documentView/contentVersion/${document-id}/1000/false`)
var docData = await response.json()
$('#iframe').attr('src', docData.phisicalFile)
```

Isso retorna um JSON com vários dados do arquivo, incluindo o caminho até o arquivo no servidor, daí é só passar o caminho pra um iframe que ele vai conseguir mostrar o arquivo.

![ready](https://fluiggers.com.br/uploads/default/optimized/2X/2/2f6b58ef8e8e023776e09cb552d0bbce268b35e6_2_690x326.jpeg)

---
