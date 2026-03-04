# Botões customizados - My Fluig

> **Fonte:** [https://fluiggers.com.br/t/botoes-customizados-my-fluig/592](https://fluiggers.com.br/t/botoes-customizados-my-fluig/592)
> **Categoria:** Mobile
> **Criado em:** 02/08/2021, 09:13
> **Visualizações:** 1251 | **Likes:** 3 | **Respostas:** 3

---

## Pergunta original

**Matheus Loreto** (@matheusl) — 02/08/2021, 09:13 | ❤️ 1

Bom dia,

Estou fazendo uma alteração em uma etapa do formulário para executar uma autorização via Mobile.

Preciso que ao clicar em “Autorizar” seja executado mais um trecho de código, antes de enviar propriamente a solicitação. Então o My Approval não atende.

Criei uma tela exclusiva para o Mobile, com dois botões e ao clicar nos botões, ao final do restante do código deve disparar o trigger do botão “Enviar” para a sequência da atividade.

No navegador, o botão está funcionando perfeitamente, chamando a função abaixo:

window.parent.$(‘button\[data-send\]’).first().click();

Porém, no mobile a função não funciona.

Alguém já teve necessidade parecida? Conseguiu resolver o envio pelo mobile?!

At.te

![FluigMobile](https://fluiggers.com.br/uploads/default/optimized/1X/935f1f3ee8421d6099e857abc9e51dcec46da020_2_282x500.png)

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 02/08/2021, 11:26

Bom dia,

Já tentou colocar o codigo que precisa no beforsavetask?

---

## Resposta #2

**Vitor Rios** (@Vitor_Rios) — 03/08/2021, 13:41

Como assim? Estou com o mesmo problema, mas não entendi…
é possível efetuar um clique usando evento de processo?! no aplicativo e no navegador efetuar o clique funciona da mesma forma?

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 03/08/2021, 13:56

Quando clicar em enviar chama o beforsavetask com o codigo de integração.
O que precia e apenas no formulario escolher aprovar ou reprovar.
e no beforsavetask verificar o a escolha e rodar os codigos necessarios.
no novo myappaproval vc escolhe aprovar ou reprovar e ao enviar vc vai rodar esse codigo.

---

## Resposta #4

**Vitor Rios** (@Vitor_Rios) — 03/08/2021, 14:05

Entendi… no meu caso, preciso especificamente clicar em autorizar e meu botão autorizar já fazer automaticamente o envio do form…

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 05/08/2021, 09:42

Essa é uma ótima pergunta.

Acredito que não seja possível porque no Mobile esse botão “Enviar” deve estar em outra View e não ser acessível pelo DOM. Diferente do modo Navegador que a gente consegue acessá-lo usando `parent`, pois o formulário está carregado num iframe.

Talvez a própria TOTVS explique isso se abrir um chamado.

---

## Resposta #6 ✅ RESPOSTA ACEITA

**Matheus Loreto** (@matheusl) — 05/08/2021, 15:31 | ❤️ 2

Abri chamado e me ofereceram consultoria paga. No meu caso, o fluxo poderá ser realizado tanto na web, quanto mobile. Queria criar um facilitador no mobile, o Approval é legal mas deixa o fluxo “estranho” para executar via web, porque o usuário terá de selecionar manualmente a tarefa destino, e não cair num gateway lógico.

Acabei optando por deixar um select com a função que preciso que execute e o botão padrão de Enviar do Mobile.

---

## Resposta #7

**system** (@system) — 06/08/2021, 07:31

Este tópico foi fechado automaticamente 16 horas depois da última resposta. Novas respostas não são mais permitidas.

---
