# Erro ao executar o evento displayFields não foi implementado para o fichário 2228479 na versão 1000

> **Fonte:** [https://fluiggers.com.br/t/erro-ao-executar-o-evento-displayfields-nao-foi-implementado-para-o-fichario-2228479-na-versao-1000/161](https://fluiggers.com.br/t/erro-ao-executar-o-evento-displayfields-nao-foi-implementado-para-o-fichario-2228479-na-versao-1000/161)
> **Categoria:** BPM
> **Criado em:** 17/03/2021, 15:49
> **Visualizações:** 2298 | **Likes:** 5 | **Respostas:** 2

---

## Pergunta original

**Marcos Vinicios de Carvalho** (@mcarvalho1994) — 17/03/2021, 15:49 | ❤️ 1

Prezados, boa tarde!

Comecei a trabalhar recentemente com o Fluig, estou criando meu primeiro fluxo.
Criei um formulário e neste formulário um evento de displayFields, quando acesso Processos/Iniciar Solicitações/Meu Processo estou recebendo o seguinte erro:

Erro ao executar o evento displayFields não foi implementado para o fichário 2228479 na versão 1000.

Alguém já viu este erro? Procurei na tdn mas não achei nada.

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 17/03/2021, 15:59

Boa Tarde [@mcarvalho1994](/u/mcarvalho1994) tudo bem?

Este evento ocorre quando tens algum erro no teu código, posta ele para nós!

Abraços.

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 17/03/2021, 16:00 | ❤️ 1

Normalmente é porque tem algum erro no seu displayFields.js, aí o Fluig não consegue executar ele e a mensagem indicada no Fluig é essa.

Pra saber o que realmente pode ser você precisa olhar o log do Fluig (acessando-o diretamente no servidor, baixando o log no Painel de Controle → Controle de Log → Baixar Log do servidor completo, ou tentando essa solução [Análise de Log Fluig 1.7.0 ou superior direto no navegador](https://fluiggers.com.br/t/analise-de-log-fluig-1-7-0-ou-superior-direto-no-navegador/117) )

---

## Resposta #3

**Marcos Vinicios de Carvalho** (@mcarvalho1994) — 17/03/2021, 16:51 | ❤️ 2

Boa tarde Bruno, consegui identificar o erro.
Fiz como sugeriu e analisei o log no servidor, uma chamado errada errada para um dos métodos.
Consegui resolver, valeu.

---

## Resposta #4

**Marcos Vinicios de Carvalho** (@mcarvalho1994) — 17/03/2021, 16:52 | ❤️ 1

Igor, de fato era um erro no código, consegui identificar qual era o método através do log do server.
Erro de iniciante kkk
Valeu!

---
