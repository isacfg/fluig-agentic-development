# Gerar acordo de débitos no RM via Fluig

> **Fonte:** [https://fluiggers.com.br/t/gerar-acordo-de-debitos-no-rm-via-fluig/1566](https://fluiggers.com.br/t/gerar-acordo-de-debitos-no-rm-via-fluig/1566)
> **Categoria:** API`s Fluig
> **Tags:** `fluigapi`, `rm`
> **Criado em:** 06/01/2023, 09:49
> **Visualizações:** 342 | **Likes:** 3 | **Respostas:** 2

---

## Pergunta original

**Cassius** (@Cassius) — 06/01/2023, 09:49

Bom dia a todas e todos.

Gostaria de saber se existe alguma API que de alguma forma gerasse um acordo no TOTVS/RM.
Ou ainda, gerasse lançamentos.
Alguém já viu isso?
Obrigado.

Cassius

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Igor Rodrigues** (@fluigor.com.br) — 06/01/2023, 15:24 | ❤️ 1

Olá Cassius, todas as rotinas do RM, possuem em seu conceito uma chamada XML apartir do que chamaos de DATASERVER
É possível importar o modelo XML da Rotina e consumi-la apartir de um consumo do TBC (webservices do RM expostos pelo RM.host)

e tu teras seus lancamentos dentro do RM apartir de um processo ou rotina do Fluig da qual deseja desenvolver está ação/função.

[drive.google.com](https://drive.google.com/file/d/1ZsARuii7hxkyBxAtWxwPZIKTELrv8GbE/view?usp=sharing)

[](https://drive.google.com/file/d/1ZsARuii7hxkyBxAtWxwPZIKTELrv8GbE/view?usp=sharing)

### [Integracao RM Video.mkv](https://drive.google.com/file/d/1ZsARuii7hxkyBxAtWxwPZIKTELrv8GbE/view?usp=sharing)

Google Drive file.

Video com um exemplo pra realizar estas açoes.

Abracos

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 06/01/2023, 18:14 | ❤️ 1

Obrigado pelo vídeo!

Estou tão acostumado a usar somente os WS customizados pra nossa empresa que não tinha corrido atrás das opções do próprio TBC (exceto pelo serviço de consulta de SQL).

É bom ver essas opções de ReadRecord e SaveRecord pra conseguir fazer mais tipos de integrações sem precisar esperar tanto tempo pelo desenvolvimento das customizações.

---

## Resposta #3

**Cassius** (@Cassius) — 09/01/2023, 22:46 | ❤️ 1

Cara, sem palavras!!!

Muito bom esse vídeo que você passou, isso abre portas para muitas possibilidades (usando com parcimônia, é claro) de integração Fluig x RM.
Muito obrigado!!!

Abraços

---

## Resposta #4

**Igor Rodrigues** (@fluigor.com.br) — 11/01/2023, 10:07

tamo junto firma!

FLUIGGERS!

---
