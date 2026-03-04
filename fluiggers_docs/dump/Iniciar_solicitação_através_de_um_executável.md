# Iniciar solicitação através de um executável

> **Fonte:** [https://fluiggers.com.br/t/iniciar-solicitacao-atraves-de-um-executavel/3022](https://fluiggers.com.br/t/iniciar-solicitacao-atraves-de-um-executavel/3022)
> **Categoria:** API`s Fluig
> **Tags:** `form`, `dataset`, `fluigapi`
> **Criado em:** 15/10/2024, 12:07
> **Visualizações:** 149 | **Likes:** 5 | **Respostas:** 3

---

## Pergunta original

**Rahyan Ramos** (@Ramos) — 15/10/2024, 12:07 | ❤️ 1

Olá a todos!

Estou desenvolvendo um processo referente à avaliação de experiência da empresa.
Para que o processo fique o mais automatizado possível, eu preciso consultar na API do RM os colaboradores que atingiram o período de empresa necessário para o preenchimento da avaliação e a partir desses colaboradores que retornarem da consulta ao RM, para cada colaborador iniciar um processo no Fluig.

Eu consigo adicionar essa lógica de consulta ao RM e criação da solicitação no Fluig através de um executável que seria ativado todos os dias por meio do agendador de tarefas? Se sim, como?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 15/10/2024, 21:47 | ❤️ 1

Você pode fazer o próprio Fluig fazer isso. Basta criar um dataset jornalizado e nele fazer a consulta ao RM e então executar a API de iniciar um processo.

---

## Resposta #2

**Igor Rodrigues** (@fluigor.com.br) — 16/10/2024, 20:28

Salve [@Ramos](/u/ramos)
Neste link tem um video meu, instruindo alguns colegas a como consultar informações no RM.

[drive.google.com](https://drive.google.com/file/d/1ZsARuii7hxkyBxAtWxwPZIKTELrv8GbE/view?usp=sharing)

[](https://drive.google.com/file/d/1ZsARuii7hxkyBxAtWxwPZIKTELrv8GbE/view?usp=sharing)

### [Integracao RM Video.mkv](https://drive.google.com/file/d/1ZsARuii7hxkyBxAtWxwPZIKTELrv8GbE/view?usp=sharing)

Google Drive file.

---

## Resposta #3

**Rahyan Ramos** (@Ramos) — 17/10/2024, 18:52

Perfeito, Bruno. Ainda não cheguei a trabalhar com dataset jornalizado, vou pesquisar mais sobre e tentar aplicar isso direto pelo Fluig.
No caso sobre a criação automática da solicitação, eu poderia então gerar um processo com um gatilho em determinado horário do dia que faria a consulta e se retornasse os parâmetros que eu preciso do RM e já definiria os usuários Fluigs automaticamente para o preenchimento do formulário?

---

## Resposta #4

**Rahyan Ramos** (@Ramos) — 17/10/2024, 18:53 | ❤️ 1

Agradeço, Igor.
Já fiz alguns processos consumindo esse mesmo serviço da API Soap do RM

---

## Resposta #5 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 18/10/2024, 09:13 | ❤️ 2

Basicamente isso.

O Dataset jornalizado você configura pra executar de tempos em tempos no Agendador de Tarefas do Fluig. Poderia colocar pra executar a cada 1h, por exemplo. Então de acordo com o que é retornado pelo RM você pode usar a API ou WS do Fluig pra iniciar o processo.

[API Rest](https://api.fluig.com/latest/process-management/swagger-ui/#/Processes/start)

[SOAP](https://tdn.totvs.com/pages/releaseview.action?pageId=662867789#Documenta%C3%A7%C3%A3odosWebServices-ECMWorkflowEngineService) - Operação `simpleStartProcess` ou `startProcess`.

Dependendo do que é necessário o próprio RM pode enviar o disparo para o Fluig. Há algumas integrações no RM principalmente quando é de algum fluxo de aprovação. Mas infelizmente nunca estudei essa parte.

---
