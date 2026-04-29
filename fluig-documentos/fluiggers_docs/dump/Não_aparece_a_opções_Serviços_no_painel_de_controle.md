# Não aparece a opções "Serviços" no painel de controle

> **Fonte:** [https://fluiggers.com.br/t/nao-aparece-a-opcoes-servicos-no-painel-de-controle/394](https://fluiggers.com.br/t/nao-aparece-a-opcoes-servicos-no-painel-de-controle/394)
> **Categoria:** Sem categoria
> **Criado em:** 27/04/2021, 10:33
> **Visualizações:** 644 | **Likes:** 3 | **Respostas:** 0

---

## Pergunta original

**HELIO REZENDE** (@HelioRezende) — 27/04/2021, 10:33 | ❤️ 1

![Menu_PainelControle](https://fluiggers.com.br/uploads/default/original/1X/7adf931edc9acbb9a1deaeff3ba2465bc7704a55.png)

---

## Resposta #1 ✅ RESPOSTA ACEITA

**HELIO REZENDE** (@HelioRezende) — 27/04/2021, 10:35 | ❤️ 2

SOLUÇÃO:
(Resposta do suporte TOTVS).

Acessar o painel de controle, botão direito “inspecionar”, seleciona a aba “console” e colar o comando abaixo e ENTER:

WCMSpaceAPI.WCMPageUtilRest.RECOVERMISSINGWIDGETSRESETINGPAGETOSYSTEMDEFAULT({async:false}, ‘cpaneladmin’);

Aguarde uns 2 minutos, a página de painel de controle será recriada, e todas as opções deverão aparecer na tela.

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 27/04/2021, 10:39

[@HelioRezende](/u/heliorezende) , só por curiosidade, isso aconteceu com qual versão do Fluig?

Estão reclamando muito das últimas atualizações e queria saber se é dela.

---

## Resposta #3

**system** (@system) — 28/04/2021, 02:39

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
