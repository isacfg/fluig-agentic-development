# Problemas com sub-processo

> **Fonte:** [https://fluiggers.com.br/t/problemas-com-sub-processo/999](https://fluiggers.com.br/t/problemas-com-sub-processo/999)
> **Categoria:** BPM
> **Criado em:** 31/03/2022, 10:51
> **Visualizações:** 1033 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Daniel Sales** (@Daniel_Sales) — 31/03/2022, 10:51 | ❤️ 1

So para relatar um ocorrido e a falta de descaso da TOTVS em resolver o problema.

Toda vez que tenho um processo em que ele vai abrir um subprocesso após passar por um gatway o Fluig simplesmente ignora toda a parametrização feita no gatway e define o usuário responsável pelo subprocesso como sendo o ultimo usuário a fazer a movimentação.

Segue a resposta da TOTVS

> **Solicitação #13651885**

> Hoje o subprocesso é sempre aberto pela pessoa que fez a movimentação. A atribuição não é levada em conta quando encaminha para o subprocesso. Por isso a configuração do subprocesso não tem um mecanismo de atribuição.

> Já tivemos outros clientes querendo controlar o usuário que será marcado como solicitante de um subprocesso e em breve nossa equipe estará desenvolvendo esta funcionalidade.

Eles tiveram a cara de pau de tratar como melhoria e não como erro.

Segue abaixo solução contorno:

![contrato de franquia V4](https://fluiggers.com.br/uploads/default/optimized/1X/6a95bb8f6b2c63798af58251a6ea148830b7242e_2_690x422.png)

Tive que criar uma atividade usuário atribuir a ela o usuário desejado e configura-la com um fluxo normal e um automatizado de um minuto. Para que o Fluig conseguisse fazer direito sua atribuição.

Fica a dica.

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 31/03/2022, 11:32

Também senti essa dificuldade com subprocesso.

Precisei criar uma atividade anterior só pra jogar ao usuário correto pra ele só clicar no “Enviar” e ir pro SubProcesso como autor/responsável.

---

## Resposta #2

**Igor Rodrigues** (@fluigor.com.br) — 01/04/2022, 08:35 | ❤️ 1

[@Daniel\_Sales](/u/daniel_sales) Gambiarrinha poggers hein!

essa foi pra pasta especial!

rsrsrs!

---

## Resposta #3

**Gilmar Paes** (@Gilmar_Paes) — 04/04/2022, 15:54

Infelizmente a utilização do sub-processo é assim mesmo

Eu abri um chamado sobre isso em 2019 se eu não me engano … foi para melhoria e está lá pastando na lista de TO DO até hoje

---

## Resposta #4

**Daniel Sales** (@Daniel_Sales) — 05/04/2022, 16:06

É a vida kkkk

Coloca um fluxo automático e pronto.

---
