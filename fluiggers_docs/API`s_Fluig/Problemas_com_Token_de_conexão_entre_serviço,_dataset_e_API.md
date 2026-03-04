# Problemas com Token de conexão entre serviço, dataset e API

> **Fonte:** [https://fluiggers.com.br/t/problemas-com-token-de-conexao-entre-servico-dataset-e-api/3547](https://fluiggers.com.br/t/problemas-com-token-de-conexao-entre-servico-dataset-e-api/3547)
> **Categoria:** API`s Fluig
> **Tags:** `dataset`
> **Criado em:** 22/01/2026, 10:10
> **Visualizações:** 28 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Jefferson** (@JeffDev) — 22/01/2026, 10:10 | ❤️ 1

Pessoal migramos o ambiente do ERP que estava integrado no fluig via API que também mudou o link as rotas são as mesmas pelo visto, temos um serviço REST que tenta conectar nessa API, e dá esse erro no teste

({“Detalhe”:“401 Unauthorized”,“Mensagem”:“”,“Descricao”:“O token de autenticação informado é inválido ou expirou!”}).

Descobri porque um processo parou de funcionar, fui olhar ele usava um dataset, que usa esse serviço dentro dele, já troquei senha atualizei token, usuário e tudo mais referente ao novo ambiente, e nada, minha dúvida é se tem algum outro lugar no fluig que isso está setado na API antiga, e que eu não estou encontrando, A briga é pelo token estar expirado, mas não está…

Desde já agradeço a todos por tirar um tempinho para ler este ser leigo kkkk

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 23/01/2026, 12:30

Olá [@JeffDev](/u/jeffdev) , seja bem vindo ao Forum!

Se este serviço está cadastrado no Painel de controle > serviços!
Recomendo que vc remova e cadastre novamente!

---
