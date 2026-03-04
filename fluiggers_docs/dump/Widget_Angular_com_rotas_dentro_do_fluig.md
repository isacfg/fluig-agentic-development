# Widget Angular com rotas dentro do fluig

> **Fonte:** [https://fluiggers.com.br/t/widget-angular-com-rotas-dentro-do-fluig/2807](https://fluiggers.com.br/t/widget-angular-com-rotas-dentro-do-fluig/2807)
> **Categoria:** WCM
> **Tags:** `widget`, `wcmapi`, `angular`
> **Criado em:** 23/05/2024, 08:09
> **Visualizações:** 156 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Gabriel Borchardt** (@Gabriel_Borchardt) — 23/05/2024, 08:09

Bom dia pessoal! Estou com umas dúvidas aqui, estamos fazendo um projeto onde terá uma widget feita com angular dentro do Fluig, até então beleza, conseguimos fazer ela, criar serviços que usam oauth para consultar datasets e tudo mais, porém para casos onde a widget precise mostrar uma tela diferente (uma rota dentro do angular), ao executar e ir para a rota não muda a tela dentro da widget, mas sim adiciona o nome da rota no endereço do navegador, logo, o fluig não entende pois não existe uma rota com aquele nome nas páginas do sistema, ocasionando em nenhuma execução.

Alguém ja passou por isso?

```auto
this.router.navigate('home');
```

Exemplo: isso deveria ir para a rota home da widget, mas se sua página tem por exemplo: \[TOTVS [https://seuendereco.com/portal/p/suaempresa/paginaangular](https://seuendereco.com/portal/p/suaempresa/paginaangular)

ele adicionará no fim do endpoint um /home, ocasianando um 404…

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 23/05/2024, 10:05 | ❤️ 1

Olá Gabriel, tudo bem?

Você chegou a configurar sua base\_url? se não, dá uma olhada neste vídeo que eu fiz.

[![](https://img.youtube.com/vi/9aeAYEIOWJg/hqdefault.jpg "Executando uma aplicação Angular dentro de uma Widget do Fluig")](https://www.youtube.com/watch?v=9aeAYEIOWJg&t=15s)

Uma outra coisa que você pode observar é no log do navegador, já tive problemas semelhantes que ao verificar o log percebi que eu não tinha importado alguns dependencias obrigátorias.

---

## Resposta #2

**Isaac Figueiredo** (@kngrev) — 27/05/2024, 10:09

Tive um problema semelhante ao utilizar Vue e Vue router para gerenciar as rotas. Utilizei uma estrategia de history um pouco mais antiga, o createWebHashHistory, talvez exista algo semelhante no Angular, talvez HashLocationStrategy e LocationStrategy

---
