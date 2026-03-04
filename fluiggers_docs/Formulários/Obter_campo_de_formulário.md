# Obter campo de formulário

> **Fonte:** [https://fluiggers.com.br/t/obter-campo-de-formulario/1155](https://fluiggers.com.br/t/obter-campo-de-formulario/1155)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 24/06/2022, 16:49
> **Visualizações:** 351 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Leandro** (@leandrojldp) — 24/06/2022, 16:49 | ❤️ 2

Olá, amigos!

Criamos formulário em forms e precisamos obter o valor de alguns campos no Workflow/Script com a function beforeTaskSave.

Já tentei obter o valor utilizando getEmail, hAPI.getCartValue e não funcionou.

Alguém teriam um exemplo de como obter valor do campo formulário ?

---

## Resposta #1

**Guilherme Beranger** (@Guilherme_Beranger) — 27/06/2022, 11:08

Olá Leandro, bom dia.

para EVENTOS de Formulário a hAPI nao funciona, você deve utilizar o form.getValue: => form.getValue(“atributo name do seu campo”)

---

## Resposta #2

**jonathan.nascimento** (@jonathan.nascimento) — 28/06/2022, 07:59

Olá [@leandrojldp](/u/leandrojldp)
Dentro do evento beforeTaskSave a hAPI funciona normalmente, verifique se está digitando o comando corretamente hAPI.getCar**d**Value

---
