# Workflow MLA x Fluig

> **Fonte:** [https://fluiggers.com.br/t/workflow-mla-x-fluig/831](https://fluiggers.com.br/t/workflow-mla-x-fluig/831)
> **Categoria:** Formulários
> **Criado em:** 16/12/2021, 17:17
> **Visualizações:** 817 | **Likes:** 2 | **Respostas:** 2

---

## Pergunta original

**Ramon Bittencourt** (@Ramon) — 16/12/2021, 17:17

Fiz uma integração com o datasul fazer aprovações do MLA no fluig, as informações chegam no fluig, dataset do formulário é populado, a solicitação é gerada no usuário correto porém quando acessada ela cai em uma div do formulário que me da a mensagem “Registro não encontrado” (div = “wf\_indisponivel”), se inspeciono a página as informações estão ali ocultas e nenhum erro é dado no console e nem no log (aparentemente).

Documentações utilizadas:

-   [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360042930613-Cross-Segmentos-Linha-Datasul-MLA-Pré-requisitos-para-integração-do-MLA-x-Fluig](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360042930613-Cross-Segmentos-Linha-Datasul-MLA-Pr%C3%A9-requisitos-para-integra%C3%A7%C3%A3o-do-MLA-x-Fluig)

-   [Workflow - Aprovação de Pendências MLA - Experiência de Uso - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=244723591)


Alguém já realizou essa integração e utilizou esses processos que tem na documentação ou tenha passado por essa situação?

Obrigado!

![formWFMLA002](https://fluiggers.com.br/uploads/default/optimized/1X/423761f3a3815ea03ad2346fc213eb972c2418d3_2_690x290.png)

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 21/12/2021, 08:23

Olá [@ramon](/u/ramon)

Ja implantei essas funcionalidades de experiencia de uso, teu ambiente está integrado ao Fluig Identity, tando o Fluig quanto o ERP ? pois a premissa para a experiencia de uso funcionar corretamente e possuir o ERP e o Fluig integrados ao Identity pelo SSO.

pois existe um relacionamento do usuário Fluig com o usuário do TOTVS Datasul.

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Ramon Bittencourt** (@Ramon) — 01/03/2022, 15:12 | ❤️ 2

Então, não é necessário o Identity.
Acabei abrindo um ticket e me responderam a pouco tempo atrás.
Os ajustes são realizados apenas nos eventos que utilizam a função “callProcedureWithToken” (função que se conecta ao datasul).

// Definir variável de empresa e alimentar ela com o id da empresa presente no campo da pendência
var empresaId = pegar o valor do campo cod\_empresa presente na pendência do fluig.

if (empresaId == -1 || empresaId == “-1”)
empresaId = null;

Subtituir **callProcedureWithToken**(token, “lap/mlaapi014.p”, “detalheDocumento”, jsonParams);
Por **callProcedureWithTokenAndCompany**(token, empresaId, “lap/mlaapi014.p”, “detalheDocumento”, jsonParams);

Os parâmetros que vão após o “empresaId” devem ser os mesmos do método anterior.

Feito esses ajustes funcionou normalmente.

---

## Resposta #3

**Igor Rodrigues** (@fluigor.com.br) — 03/03/2022, 11:35

[@Ramon](/u/ramon)

Show de bola Ramon, chegou a validar a parte mobile? eu me recordo que tínhamos um problema de montagem do formulário se utilizado a movimentação via mobile.
pois ele realizava a leitura dos dados via servico do datasul, o que obrigava a empresa a publicar o jboss ou tomcat para a web para ter a funcionalidade no mobile.

se conseguir validar isso seria interessante para todos.

---
