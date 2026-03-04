# Integração processo com sub-processo

> **Fonte:** [https://fluiggers.com.br/t/integracao-processo-com-sub-processo/636](https://fluiggers.com.br/t/integracao-processo-com-sub-processo/636)
> **Categoria:** BPM
> **Tags:** `form`, `bpm`
> **Criado em:** 01/09/2021, 12:18
> **Visualizações:** 1150 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Odair Batista** (@odair.batista) — 01/09/2021, 12:18

Tenho um workflow que integra o processo (pai) com sub processo (filho) por meio de um formulário no processo (pai) e outro formulário no sub processo (filho). Os dados no formulário do processo (pai) são fixos e não há iteração do usuário neste momento. Quando inicio o processo (pai) manualmente os dados são enviado para o sub processo (filho) normalmente, mas se uso agendador de tarefas para iniciar o processo (pai) é como se não houvessem dados fixados no formulário ou nem passa pelo formulário do processo (pai). Existe alguma configuração ou até mesmo customização em algum evento para que na execução automática possa forçar a integração como fosse uma execução manual?

---

## Resposta #1

**Romulo Pereira** (@romuloccomp) — 03/09/2021, 11:33

Odair,
Os campos (pai) são preenchidos, sem interação do usuário?
Se você colocou esse preenchimento no display, ele pode não acontecer se executar o agendador.

---

## Resposta #2

**Odair Batista** (@odair.batista) — 03/09/2021, 11:51 | ❤️ 1

Romulo, obrigado pelo retorno amigo, na verdade os valores estão fixados no HTML, mas é exatamente isto que está acontecendo, ele nem toma conhecimento deste valores. Tive que utilizar um schedule externo e consumir o webservice do fluig para iniciar o processo pai passando os dados do formulário no XML, assim funcionou.

---

## Resposta #3

**Romulo Pereira** (@romuloccomp) — 03/09/2021, 12:02

Suspeitei que era isso.

---
