# Change em um input pai x filho

> **Fonte:** [https://fluiggers.com.br/t/change-em-um-input-pai-x-filho/490](https://fluiggers.com.br/t/change-em-um-input-pai-x-filho/490)
> **Categoria:** Sem categoria
> **Criado em:** 02/06/2021, 10:50
> **Visualizações:** 591 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Julio Cesar Campos de Andrade** (@JCANDRADE) — 02/06/2021, 10:50

Pessoal bom dia!

É possível usar a função do JQUERY $(’#idImput’).change(function()){} para um input dentro da table pai x filho?

Preciso criar uma função para que quando o input for alterado, a função seja disparada.

Obrigado!

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 02/06/2021, 12:29 | ❤️ 1

O jeito mais fácil:

Dê uma classe ao input. Por exemplo:

```auto
<input type="text" id="teste" name="teste" class="escutarChange">
```

Aí no JS:

```javascript
$("#id_da_tabela_pai_filho").on("change", ".escutarChange", function (event) {
    // this é o input que disparou o evento
});
```

---

## Resposta #2

**Julio Cesar Campos de Andrade** (@JCANDRADE) — 02/06/2021, 12:41 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/bruno_gasparetto/48/68_2.png) Bruno\_Gasparetto:
>
> > ```auto
> > $("#id_da_tabela_pai_filho").on("change", ".escutarChange", function (event) {
> >     // this é o input que disparou o evento
> > });
> > ```

Perfeito! Funcionou!
Obrigado!

---

## Resposta #3

**system** (@system) — 03/06/2021, 04:42

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
