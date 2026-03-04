# Utilização da tarefa de Envio (mailtask)

> **Fonte:** [https://fluiggers.com.br/t/utilizacao-da-tarefa-de-envio-mailtask/2400](https://fluiggers.com.br/t/utilizacao-da-tarefa-de-envio-mailtask/2400)
> **Categoria:** BPM
> **Tags:** `fluigapi`
> **Criado em:** 04/12/2023, 12:12
> **Visualizações:** 157 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Guilherme A Vieira** (@Guilherme.Alves) — 04/12/2023, 12:12

Estou construindo um fluxo em que, em uma das tarefas, deve ser enviado um e-mail, para duas caixas postais, com informações do formulário.

No diagrama do processo (vide imagem em anexo), para melhor representação, utilizei a tarefa de envio (mailtask). Entretanto, nas propriedades da tarefa de envio não há a identificação do template que deve ser utilizado para o enviar o e-mail, assim como não há como selecionar os parâmetros a serem utilizados no template.

Em alguns exemplos, observei que a tarefa de envio não é utilizada e o e-mail é enviado em um evento do processo, com o método notifier.notify(…). Nos exemplos, utilizaram os eventos beforeStateEntry e afterTaskComplete.

Dúvidas:

1.  A tarefa de envio não deve/pode ser utilizada?
2.  Qual tarefa automática (sem interação humana) deve ser utilizada para substituir a tarefa de envio?
3.  Qual evento do processo é mais indicado para chamar o método notify?
4.  O método notify deve sempre estar dentro de um try…catch?

---
