# Ocultar botões FLUIGC.datatable no mobile

> **Fonte:** [https://fluiggers.com.br/t/ocultar-botoes-fluigc-datatable-no-mobile/1178](https://fluiggers.com.br/t/ocultar-botoes-fluigc-datatable-no-mobile/1178)
> **Categoria:** Widgets
> **Tags:** `widget`, `mobile`
> **Criado em:** 05/07/2022, 16:44
> **Visualizações:** 615 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Marco Comassetto** (@marcommas) — 05/07/2022, 16:44

Fala pessoal!

Estou criando uma widget e utilizando o FLUIGC.datatable para montar uma tabela com informações.
Só que no mobile, eu gostaria de remover os campos que destaco na imagem abaixo, mas não encontrei forma, alguém tem alguma ideia de como remover esses botões? ps. eles só aparecem no mobile.

![WhatsApp Image 2022-07-05 at 16.26.33](https://fluiggers.com.br/uploads/default/optimized/1X/d14a405d1ecd39eb07ac0b30344d828959fa9eef_2_634x499.jpeg)

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Marco Comassetto** (@marcommas) — 06/07/2022, 11:37 | ❤️ 2

Segue solução:

```auto
//Oculta setinha que aparece no mobile do lado do primeiro item da tabela
$('.fluigicon-pointer-right').hide();
//Oculta a opção de selecionar colunas da tabela no mobile
$('#idTabela .text-right button' ).hide();
```

---
