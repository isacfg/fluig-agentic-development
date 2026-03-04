# Esconder linha pai x filho

> **Fonte:** [https://fluiggers.com.br/t/esconder-linha-pai-x-filho/447](https://fluiggers.com.br/t/esconder-linha-pai-x-filho/447)
> **Categoria:** Formulários
> **Criado em:** 18/05/2021, 11:03
> **Visualizações:** 940 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Wasley Santos** (@Wasley_Santos) — 18/05/2021, 11:03

Gente

Tenho um formulário onde na linha da tabela pai x filho eu tenho o colleagueId de vários usuários, como eu poderia fazer no front-end para poder esconder as linhas cujo o colleagueId do usuário logado é diferente dos itens na tabela? Segue exemplo (existe uma coluna oculta com o colleagueId, deixei o nome porque ainda não consegui ocultar as linhas)

![image](https://fluiggers.com.br/uploads/default/optimized/1X/ea44c786cb6433f25bbb010008f9a079abb97222_2_690x153.png)

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Eduardo Vantini Neto** (@eduardo.vantini) — 19/05/2021, 08:40 | ❤️ 1

Olá, tudo bem?
Eu fiz um esquema parecido aqui, vamos lá.

Para o exemplo vou imaginar que você já tem o usuário logado, então vou usar como USRLOGADO. E o id input do responsável vou considerar como TXTRESPONSAVEL

```javascript
$("input[id^='_TXTRESPONSAVEL___']").each(function(index,value) {
      var i = index+1

      if (USRLOGADO != $(this).val()) {
         //CONSIDERANDO input > div.col > div.row > td
          $(this).parent().parent().parent().hide()
      }
})
```

Obs: O id do campo no pai x filho, quando foi disabled ele fica com um underline antes, igual ao exemplo. Quando ele está habilitado para edição ele fica sem o underline.

Acredito que isso vai resolver.

Abs.

---

## Resposta #2

**system** (@system) — 20/05/2021, 01:28

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
