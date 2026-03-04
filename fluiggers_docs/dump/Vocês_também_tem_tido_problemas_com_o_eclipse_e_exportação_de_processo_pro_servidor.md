# Vocês também tem tido problemas com o eclipse e exportação de processo pro servidor?

> **Fonte:** [https://fluiggers.com.br/t/voces-tambem-tem-tido-problemas-com-o-eclipse-e-exportacao-de-processo-pro-servidor/3549](https://fluiggers.com.br/t/voces-tambem-tem-tido-problemas-com-o-eclipse-e-exportacao-de-processo-pro-servidor/3549)
> **Categoria:** IDEs (Ferramentas de Desenvolvimento)
> **Tags:** `processo`, `fluigapi`, `exportar`, `eclipse`
> **Criado em:** 29/01/2026, 10:14
> **Visualizações:** 71 | **Likes:** 6 | **Respostas:** 1

---

## Pergunta original

**Hélio Monteiro** (@Helio_Monteiro) — 29/01/2026, 10:14

A TOTVS não ajuda com ferramentas terceiras, ou seja sem suporte até pra eclipse, fiquei sem entender querem q façamos tudo via web? imagino q seja o esperado por eles.

Espero que seja uma boa intenção e que corrijam logo alguns bugs.

Recentemente deu problema no meu eclipse e não consigo subir qlq processo pra o servidor fluig de dev ou prod. já reinstalei eclipse, limpei pasta dele e workspace e nada de voltar.

Estava até pensando q fosse algum bug de processo, apaguei solicitações e processos no web e nada. outra vez aconteceu algo semelhante com um colega de equipe aqui e com a reinstalação pra ele deu certo. vcs passam muito por estes bugs? ainda é novo esse ecossistema para nós, antes era terceirizado o desenvolvimento fluig. E pegamos logo neste transição, ou seja duas coisas, os bugs tradicionais + os novos né rs

Segue print do cenário.

Versão indicada do eclipse 2019 + plugin 2.0 e o servidor também está no 2.0.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/5/591d1269562b454045c4334fe29cf63e312bb90e_2_690x373.png)

---

## Resposta #1

**Matheus Arrifano** (@Thor_Matheus) — 30/01/2026, 14:03 | ❤️ 2

Boa tarde!
Consegui resolver esse problema, utilizando o jdk 11 do java
e vinculando ele ao Eclipse 2019

---

## Resposta #2

**matheus.jesus** (@matheus.jesus) — 02/02/2026, 08:33

Bom dia!

Poderia explicar como fez na prática, por favor?

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Jose William Dos Anjos Meneses** (@Jose_William_Dos_Anj) — 03/02/2026, 10:41 | ❤️ 3

Aconteceu comigo recentemente também. Despois de muito “quebrar a cabeça”, consegui resolver instalando o JDK 11.
Depois vai no arquivo *eclipse.ini* que fica dentro da pasta do executável do eclipse, e adiciona a tag:
*\-vm
C:\\Program Files\\Java\\jdk-11\\bin\\javaw.exe*

Logo acima da tag *\-vmargs*.

---

## Resposta #4

**Hélio Monteiro** (@Helio_Monteiro) — 04/02/2026, 15:03 | ❤️ 1

Deu certo fazendo esta troca do java 11 no eclipse. Consegui exportar.

Nossa, passei 1 semana quebrando cabeça e por fim, editando no editor online os script de processo. E de mãos atadas pra qndo precisar exportar um novo processo.

Obrigado [@Thor\_Matheus](/u/thor_matheus) e [@Jose\_William\_Dos\_Anj](/u/jose_william_dos_anj)

---
