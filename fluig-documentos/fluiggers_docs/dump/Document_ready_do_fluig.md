# Document ready do fluig

> **Fonte:** [https://fluiggers.com.br/t/document-ready-do-fluig/1068](https://fluiggers.com.br/t/document-ready-do-fluig/1068)
> **Categoria:** BPM
> **Criado em:** 05/05/2022, 09:35
> **Visualizações:** 442 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Daniel Sales** (@Daniel_Sales) — 05/05/2022, 09:35

Estou tentando descobrir quando todos os componentes do fluig foram realmente carregados. Alguns códigos no document redy não funcionam e se eu inseri-los via console funcionam perfeitamente. É o caso do

```nohighlight
$('[data-send][type="button"]').click(function(){alert("teste");});
```

esse código insere um alert no botão send padrão do fluig. se eu usar o before send data o fluig vai abrir o modal de escolha do usuário e da atividade antes de rodar meu código. Por isso a necessidade de rodar um código logo no click.

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 05/05/2022, 10:08

Eu já percebi que vários itens são carregados por ajax, então se você já tentar atribuir evento pra eles vai dar problema mesmo.

Você pode atribuir o evento após alguns segundos (em alguns lugares eu fiz um setTimeout disparar após uns 3 segundos, pois eu precisava manipular o elemento).

Para atribuir evento você pode fazer da seguinte forma:

```javascript
$('pega_elemento_pai_do_item').on('click', '[data-send][type="button"]', function () {});
```

Assim você está delegando o evento ao invés de atribuir diretamente ao elemento que pode ainda não existir.

---
