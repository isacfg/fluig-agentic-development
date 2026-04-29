# Ocultar um processo da lista de "Iniciar Solicitações"

> **Fonte:** [https://fluiggers.com.br/t/ocultar-um-processo-da-lista-de-iniciar-solicitacoes/3234](https://fluiggers.com.br/t/ocultar-um-processo-da-lista-de-iniciar-solicitacoes/3234)
> **Categoria:** BPM
> **Tags:** `processo`
> **Criado em:** 05/04/2025, 18:55
> **Visualizações:** 57 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Léo Souza** (@Leo_Souza) — 05/04/2025, 18:55

Olá pessoal, estou iniciando os meus estudos no Fluig.

Preciso criar um subprocesso que deverá ser executado apenas como subprocesso e não iniciado a partir do menu de “Iniciar Solicitações”. Porém, quando configuro o mecanismo de atribuição da tarefa inicial do subprocesso, ele também passa a aparecer na lista de processos de “Iniciar Solicitações” dos usuários associados ao grupo do mecanismo de atribuição de evento de inicialização do subprocesso.

A pergunta é: como posso esconder o subprocesso da lista de “Iniciar Solicitações” dos usuários de forma que ele seja iniciado somente como um subprocesso.

---

## Resposta #1

**William Pereira Alves** (@william.alves) — 22/05/2025, 12:04

Olá Leo\_Souza.

Eu só consegui algo desse tipo criando um processo no Fluig Studio (Eclipse) que contém um formulário que agrupa cada subprocesso dentro de uma ‘div’ específica.

Então, de acordo com a atividade em que o processo se encontra, a ‘div’ correspondente ao subprocesso é habilitada ou não para visualização.

Não sei se existe outra solução, mas essa foi a que melhor me atendeu. Até porque tenho apenas 1 ano de Fluig.

Abraços.

---

## Resposta #2

**Flaviane Rodrigues** (@flavianetania) — 28/05/2025, 13:27

Olá Leo,

Se você colocar um mecanismo de atribuição na atividade inicial ele só aparecerá para quem foi atribuído seja grupo, papel ou pessoa.

---
