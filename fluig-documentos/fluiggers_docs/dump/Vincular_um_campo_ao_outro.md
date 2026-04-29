# Vincular um campo ao outro

> **Fonte:** [https://fluiggers.com.br/t/vincular-um-campo-ao-outro/574](https://fluiggers.com.br/t/vincular-um-campo-ao-outro/574)
> **Categoria:** BPM
> **Tags:** `form`
> **Criado em:** 22/07/2021, 11:14
> **Visualizações:** 452 | **Likes:** 0 | **Respostas:** 3

---

## Pergunta original

**Marcelo Barros** (@marcelo_barros) — 22/07/2021, 11:14

Bom dia pessoal,

Tenho um formulário onde existe o **campo1** de cadastro (item a, item b, item c etc…)

No **campo2** caso selecionado no **campo1** o *“item a”* carregar os cadastros relacionados ao *“item a”*, caso selecionar o *“item b”* carregar apenas os cadastros relacionados ao *“item b”* e assim sucessivamente.

Gostaria de saber como faço pra vincular este campo ao outro.

Obrigado.

---

## Resposta #1

**Willian Laynes** (@Willian_Laynes) — 22/07/2021, 11:23

Bom dia [@marcelo\_barros](/u/marcelo_barros) ,

Se eu entendi bem você quer usar os eventos dos elementos.

Exemplo com SELECT:

```auto
$("#campo1").change(function(e){
       //EXECUTA SE ALGUE MUDAR O CAMPO SELECT
       //AQUI VOCÊ DEVE CARREGAR OS NOVOS DADOS DO CAMPO2
      $("#campo2").html({atualize aqui os options do seu select});
})
```

---

## Resposta #2

**Marcelo Barros** (@marcelo_barros) — 22/07/2021, 15:25

Boa tarde [@Willian\_Laynes](/u/willian_laynes),

Sim, eu gostaria de vincular esses campos no formulário, onde quando selecionado a informação no **campo1** retornar para o **campo2** apenas os cadastros relacionados.

Isso eu faria no form correto?

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Willian Laynes** (@Willian_Laynes) — 22/07/2021, 16:13

Você pode criar uma TAG `<script></script>` no seu formulário e colocar o fonte dentro ou criar um script.js e importar no `<head>` do seu formulário.

[https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery\_event\_change\_ref](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_change_ref)

---

## Resposta #4

**Marcelo Barros** (@marcelo_barros) — 23/07/2021, 09:43

Obrigado [@Willian\_Laynes](/u/willian_laynes)

Vou tentar aqui.

Grato.

---

## Resposta #5

**system** (@system) — 24/07/2021, 01:44

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
