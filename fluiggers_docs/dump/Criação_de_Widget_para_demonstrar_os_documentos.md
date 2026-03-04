# Criação de Widget para demonstrar os documentos

> **Fonte:** [https://fluiggers.com.br/t/criacao-de-widget-para-demonstrar-os-documentos/1371](https://fluiggers.com.br/t/criacao-de-widget-para-demonstrar-os-documentos/1371)
> **Categoria:** Widgets
> **Tags:** `fluigapi`
> **Criado em:** 29/09/2022, 14:38
> **Visualizações:** 324 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**WANDERSON DOS SANTOS GERVASIO** (@WANDERSON) — 29/09/2022, 14:38

Galera, criei um widget a qual apresenta todos os documentos de uma pasta, daí gostaria de saber como faço para incluir o ícone nesta widget?

```javascript
$.each(_Jsonret.content, function(k,v){
    			$("#relacionar_diretorios_" +_this.instanceId).append('<li class="list-group-item diretorios">' + v.iconPath +'</li>');
        		});
```

---

## Resposta #1

**Wasley Santos** (@Wasley_Santos) — 25/10/2022, 20:13

Estou precisando fazer a mesma coisa, lista os documentos de uma determinada pasta. Como você fez? Poderia postar o código inicial

---
