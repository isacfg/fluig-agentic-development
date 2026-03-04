# Campo zoom - Limite de caractere

> **Fonte:** [https://fluiggers.com.br/t/campo-zoom-limite-de-caractere/2794](https://fluiggers.com.br/t/campo-zoom-limite-de-caractere/2794)
> **Categoria:** Formulários
> **Criado em:** 20/05/2024, 11:07
> **Visualizações:** 92 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**luiza** (@cintraluiza) — 20/05/2024, 11:07

Estou com um problema de limite de caractere no campo zoom. Cada item do campo é extenso e quando eu seleciono, aparece cortado no campo.

Ex: um item com a descrição 00004 - AÇO CA 50 - 8.0 MM (4.740 KG/BR) - CONFORME NBR 7480 ENVIAR CERTIFICADO DE QUALIDADE DO LOTE
quando eu clico no item, aparece no campo zoom somente AÇO CA 50 - 8.0 MM (4.740 KG/BR) - CONF

Como faço para aparecer a descrição completa, sem cortar caractere?

---

## Resposta #1

**venturelli** (@venturelli) — 22/05/2024, 10:51

Ele não deveria cortar caracteres. Confirma se no atributo data-zoom o displayKey é o nome campo listado em fields. Provavelmente está configurado de forma diferente.

Em fields, são listados todos os campos que são visíveis ao fazer a busca e o displayKey é o campo que será exibido ao selecionar um item. Ainda que tivesse um limite de caracteres, não iria remover o "00004 - " da frente, o que leva a crer que não está configurado o mesmo campo.

Qualquer coisa, adiciona um print do formulário e código fonte do campo zoom.

---
