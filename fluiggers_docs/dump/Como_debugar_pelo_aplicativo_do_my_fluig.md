# Como debugar pelo aplicativo do my fluig?

> **Fonte:** [https://fluiggers.com.br/t/como-debugar-pelo-aplicativo-do-my-fluig/3341](https://fluiggers.com.br/t/como-debugar-pelo-aplicativo-do-my-fluig/3341)
> **Categoria:** Mobile
> **Criado em:** 08/07/2025, 10:51
> **Visualizações:** 87 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Rodrigo Vasconcelos** (@Rodrigo_Vasconcelos) — 08/07/2025, 10:51

Como debugar pelo aplicativo do my fluig?

---

## Resposta #1

**Guilherme Mesquita Rocha** (@gmesquita) — 09/07/2025, 10:32 | ❤️ 2

Olá Rodrigo, em relação ao front-end, geralmente eu vou colocando diversos consoles.log e capturo eles através do Eruda, já que ele serve como um console para mobile, assim, basta apenas importá-lo via CDN dentro do HTML do seu formulário…

```auto
<script src="https://cdn.jsdelivr.net/npm/eruda"></script>
<script>eruda.init();</script>
```

[github.com](https://github.com/liriliri/eruda)

![](https://opengraph.githubassets.com/7db826588b7dd5aab8de0ac00b452d8c/liriliri/eruda)

### [GitHub - liriliri/eruda: Console for mobile browsers](https://github.com/liriliri/eruda)

Console for mobile browsers

Em casos de eventos de workflow, acredito que através de `log.info` e `log.dir` seja o suficiente.

---
