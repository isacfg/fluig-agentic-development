# Customizar Botão Salvar e Enviar

> **Fonte:** [https://fluiggers.com.br/t/customizar-botao-salvar-e-enviar/260](https://fluiggers.com.br/t/customizar-botao-salvar-e-enviar/260)
> **Categoria:** Formulários
> **Criado em:** 30/03/2021, 14:27
> **Visualizações:** 1390 | **Likes:** 9 | **Respostas:** 0

---

## Pergunta original

**Gabriel Pereira** (@gabriel.pereira) — 30/03/2021, 14:27

Boa tarde!
Como faço para customizar um botão com as ações do Enviar e Salvar do processo?

---

## Resposta #1

**Victor Castro** (@victorcastro) — 30/03/2021, 14:42 | ❤️ 5

Pra enviar

```javascript
function customEnviar(){
	//código
	window.parent.$('button[data-send]').first().click();
}
```

Pra salvar

```javascript
function customSalvar(){
	//código
	window.parent.$('button[data-save]').first().click();
}
```

---

## Resposta #2

**Vagner Duarte** (@vagner_duarte) — 06/04/2021, 10:10 | ❤️ 1

opa Valeu [@victorcastro](/u/victorcastro) , vou tentar aqui. Muito obrigado!

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Gabriel Pereira** (@gabriel.pereira) — 08/04/2021, 11:13 | ❤️ 3

Aqui tive que fazer uma pequena alteração:

> > > Salvar
> > > window.parent.$(‘a\[data-save\]’).first().click();

> > > Enviar
> > > window.parent.$(‘a\[data-send\]’).first().click();

---

## Resposta #4

**system** (@system) — 09/04/2021, 08:58

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
