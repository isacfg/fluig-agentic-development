# Extensão do vscode, já funciona com o fluig 2.0 Voyager?

> **Fonte:** [https://fluiggers.com.br/t/extensao-do-vscode-ja-funciona-com-o-fluig-2-0-voyager/3461](https://fluiggers.com.br/t/extensao-do-vscode-ja-funciona-com-o-fluig-2-0-voyager/3461)
> **Categoria:** Ambiente Fluig
> **Criado em:** 07/10/2025, 12:37
> **Visualizações:** 123 | **Likes:** 4 | **Respostas:** 6

---

## Pergunta original

**Matheus Arrifano** (@Thor_Matheus) — 07/10/2025, 12:37

Preciso dessa informação, estou tentando me conectar com o servidor, mas quando da certo ele me retorna um código HTML(que provavelmente significa que deu certo!) mas não consigo transitar os arquivos, nem Export nem import

![image](https://fluiggers.com.br/uploads/default/original/2X/f/fd9e9bbc50401ce78821281d5c1eeb8f7dce3088.png)

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 07/10/2025, 17:30

No [Lab Fluig](https://lab.fluig.com) fiz vários testes e todos funcionaram, desde importar/exportar formulários, widgets e datasets.

Porém não é a primeira pessoa que vejo reclamando do Fluig 2.0. No geral estou vendo pessoas reclamando até do plugin do Eclipse, dependendo do que está tentando fazer.

Sua instalação é do zero ou fez update do Fluig 1.8.2 pro 2.0? O Plugin do Eclipse funciona corretamente?

---

## Resposta #2

**Matheus Arrifano** (@Thor_Matheus) — 07/10/2025, 18:05

Instalação do zero, e na minha máquina eu atualizei, já apaguei, reinstalei, atualizei plugin, já dei downgrade nele também.:rofl:. E nada. Tô desconfiado que seja meu notebook até.
Tô no meio de uma implantação, e se não resolver, nem sei o que pode acontecer hahaha

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 07/10/2025, 18:39

Pior que ainda nem tentei instalar o 2.0 pra testar. Só fiz testes no Lab.

Como já vi mais gente reclamando pode ser caso de problema no 2.0. Ainda mais que nem o Eclipse tá funcionando.

Aí só imagino abrir chamado pra totvs analisar

---

## Resposta #4

**Daniel Cabral Santos** (@daniel.cabral) — 07/10/2025, 19:24 | ❤️ 1

Fiz uma atualização 1.8.2 → 2.0 no meu lab e de primeira não subiu, houve um erro após digitar nome/senha relacionado à segurança. Reiniciei umas 2x e magicamente voltou a funcionar.

Zero problemas com a extensão e também com o eclipse até agora, mas não testei a fundo.

---

## Resposta #5

**Hélio Monteiro** (@Helio_Monteiro) — 29/01/2026, 10:11 | ❤️ 1

o fluig 2.0 funcionou normalmente conosco aqui por um tempo.

No vscode não testei ainda, não sabia que tinha plugin lá. Vi uma empresa que usava o eclipse para as funcionalidades do plugin e tem que ser a verão exata indicada né. E durante o desenvolvimento acessava os script pelo vscode pra usar os facilitadores de escrita, autocompletar, quem sabe o vibecoding tbm rs

mas, importação e exportação apenas pelo eclipse. Se tiver esta extensão no vscode já vou testar rs

a TOTVS não ajuda com ferramentas terceiras, ou seja sem suporte até pra eclipse, fiquei sem entender querem q façamos tudo via web? imagino q seja o esperado por eles.

Espero que seja uma boa intenção e que corrijam logo alguns bugs.

recentemente deu problema no meu eclipse e não consigo subir qlq processo pra o servidor fluig de dev ou prod. já reinstalei eclipse, limpei pasta dele e workspace e nada de voltar.

Estava até pensando q fosse algum bug de processo, apaguei solicitacoes e processos no web e nada. outra vez aconteceu algo semelhante com um colega de equipe aqui e com a reistalaçã opra ele deu certo. vcs passam muito por estes bugs? ainda é novo esse ecossitema para nós, antes era terceirizado o desenvolvimento fluig. E pegamos logo neste transição, ou seja duas coisas, os bugs tradicionais + os novos né rs

---

## Resposta #6

**Igor Rodrigues** (@fluigor.com.br) — 03/02/2026, 13:17 | ❤️ 1

Nostra amigo [@Helio\_Monteiro](/u/helio_monteiro) quando vc usar a extensão da comunidade FLUIGGERS no VSCODE, só vai utilizar o eclipse para criar diagramas! hehehe!

---

## Resposta #7

**Hélio Monteiro** (@Helio_Monteiro) — 03/02/2026, 16:52

Então preciso explorá-lo :grinning_face_with_smiling_eyes:

---

## Resposta #8

**Hélio Monteiro** (@Helio_Monteiro) — 04/02/2026, 08:34

Além da extensão da comunidade FLUIGGERS, tem outras extensões que usam para apoiar no desenvolvimento com fluig também?

Outro dia, vi uma extensão do FREEMAKER. Por não conhecer as referências nem baixei.

---

## Resposta #9

**Bruno Gasparetto** (@Bruno_Gasparetto) — 04/02/2026, 09:43 | ❤️ 1

Existem algumas que já vi no GitHub especificamente para Fluig. Principalmente focando em snippets e em auxiliar no autocompletar.

A extensão da comunidade mesmo até pensei em estender a parte de “linguagem” nela pra ter autocompletar incluso, porém eu achei mais tranquilo usar uma lib externa de declaração de tipos, porque assim consigo inserir a tipagem nos comentários do JS e facilitar a vida dentro das funções.

Porém oficialmente lançada pela TOTVS só tem extensão para ADVPL.

De FreeMarker eu uso a `dcortes92.FreeMarker`, mas qualquer uma que ajude com coloração de sintaxe e um autocompletar tá ótimo.

---
