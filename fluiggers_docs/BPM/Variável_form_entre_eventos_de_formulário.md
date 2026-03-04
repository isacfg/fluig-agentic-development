# Variável form entre eventos de formulário

> **Fonte:** [https://fluiggers.com.br/t/variavel-form-entre-eventos-de-formulario/2637](https://fluiggers.com.br/t/variavel-form-entre-eventos-de-formulario/2637)
> **Categoria:** BPM
> **Tags:** `processo`, `bpm`
> **Criado em:** 13/03/2024, 16:05
> **Visualizações:** 148 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Everton Alves** (@everton) — 13/03/2024, 16:05

Olá!

A variável form não é compartilhada entre os eventos de definição de formulário?
Por exemplo, quando eu utilizo o evento enableFields e desabilito um campo através do método setEnabled, no evento inputFields, o método getEnabled não me retorna esse informação.
Teria alguma outra forma de saber se o campo foi desabilitado por outro evento?

---

## Resposta #1

**venturelli** (@venturelli) — 03/04/2024, 11:28 | ❤️ 1

O problema aqui é quando os eventos são executados. O enableFields é usado ao carregar o formulário e o inputFields na hora da gravação dos dados então eles não irão se comunicar.

O que você pode ter é um script, por exemplo:

```auto
function camposParaDesabilitar() {
   // implemente a sua lógica para dizer quais campos serão desabilitados
  return ['campoA', 'campoB'];
}
```

e chamar nos dois pontos. No enableFields para desabilitar os campos e no inputFields para saber quais os campos foram desabilitados.

---
