# Input Zoom - parou de funcionar na versão 170

> **Fonte:** [https://fluiggers.com.br/t/input-zoom-parou-de-funcionar-na-versao-170/255](https://fluiggers.com.br/t/input-zoom-parou-de-funcionar-na-versao-170/255)
> **Categoria:** BPM
> **Criado em:** 30/03/2021, 13:28
> **Visualizações:** 363 | **Likes:** 1 | **Respostas:** 2

---

## Pergunta original

**Ricardo Andrade** (@rca0261) — 30/03/2021, 13:28

Boa tarde.
Alguém está com problema de executar input zoom após atualização da versão Lake 1.7.0-210323 5?

---

## Resposta #1

**Victor Castro** (@victorcastro) — 30/03/2021, 13:41

Qual é o problema que está dando aí?

---

## Resposta #2

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 30/03/2021, 13:55

Eu tive problema com o campo Zoom após atualizar o meu Fluig para uma das versões mais recentes do Fluig 1.7.0.

Com o meu conhecimento “limitado”, demorei para perceber que algumas funções que eram utilizadas em meu Zoom foram depreciadas. Consegui identificar isso entrando no formulário e apertando a tecla F12, lá o Javascript me indicou qual função estava com problema e eu consegui adaptar.

---

## Resposta #3

**Victor Castro** (@victorcastro) — 30/03/2021, 14:36

Quais funções? Consegue dar um exemplo?

Ainda não atualizei. Bom pra eu ficar atento quando for atualizar.

---

## Resposta #4

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 30/03/2021, 14:39 | ❤️ 1

[@victorcastro](/u/victorcastro) , no meu caso, foi um problema com o método
Objeto.**context**.{atributo}
Precisei alterar para Objeto\[Index\].{“atributo”}

Confesso que não sei se essa foi a melhor forma de corrigir, mas funcionou rs

---
