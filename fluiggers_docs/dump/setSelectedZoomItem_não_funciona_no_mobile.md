# setSelectedZoomItem não funciona no mobile?

> **Fonte:** [https://fluiggers.com.br/t/setselectedzoomitem-nao-funciona-no-mobile/428](https://fluiggers.com.br/t/setselectedzoomitem-nao-funciona-no-mobile/428)
> **Categoria:** Formulários
> **Tags:** `form`, `mobile`
> **Criado em:** 06/05/2021, 12:13
> **Visualizações:** 971 | **Likes:** 1 | **Respostas:** 2

---

## Pergunta original

**Rodrigo de Oliveira** (@redschenko) — 06/05/2021, 12:13

Boa tarde.

Tenho um campo zoom na tabela pai-filho, quando seleciono o item ele preenche corretamente no navegador.
Porém quando uso no Fluig Mobile ele não preenche.

Estou usando o setSelectedZoomItem para preencher.

```
function setSelectedZoomItem(selectedItem) {
    $("#"+selectedItem.type).val(selectedItem["COD"]);
}
```

Esta função não funciona no mobile?
Ou alguém sabe de alguma outra solução?

Agradeço a atenção.

At
Rodrigo de Oliveira.

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 06/05/2021, 15:44

Fui testar no mobile e descobri que meu Fluig não está mais aceitando mobile :persevere:

---

## Resposta #2

**Rodrigo de Oliveira** (@redschenko) — 06/05/2021, 16:19

Todo seu Fluig?
Você não utiliza mobile “regularmente” nos processos?

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 06/05/2021, 16:32

Aqui ainda não teve uma aderência ao mobile. Estava configurado, mas ninguém utilizava.

Se eu conseguir corrigir o acesso vou testar o setSelectedZoomItem. Em nenhuma documentação eu vi falando que não funciona no mobile.

---

## Resposta #4 ✅ RESPOSTA ACEITA

**Rodrigo de Oliveira** (@redschenko) — 08/05/2021, 00:03 | ❤️ 1

Olá, boa noite.

Mudei o zoom para o “padrão” (input type=zoom) e funcionou corretamente.
Problema resolvido.

Obrigado pela atenção.

At
Rodrigo de Oliveira

---

## Resposta #5

**system** (@system) — 08/05/2021, 16:04

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
