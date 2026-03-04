# API Identity + AD

> **Fonte:** [https://fluiggers.com.br/t/api-identity-ad/506](https://fluiggers.com.br/t/api-identity-ad/506)
> **Categoria:** Identity
> **Tags:** `dataset`, `api`, `identity`
> **Criado em:** 09/06/2021, 15:38
> **Visualizações:** 1262 | **Likes:** 2 | **Respostas:** 2

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 09/06/2021, 15:38

Pessoal, boa tarde!

Atualmente temos uma integração com o RM para desativação automática de usuários no Identity e no AD. Funciona assim:

Usuário é demitido/afastado/etc no RM → Integração **SOAP** com **ECMDatasetService** do Fluig → Integração **REST** com API Identity → Login é desativado na plataforma.

O que observamos é que o usuário no AD só é desativado quando a alteração é feita via interface do Identity - *imediata*, por sinal. Quando o status é alterado via API, o reflexo no AD não acontece.

Alguém já passou por isso? Haveria algum parâmetro extra *não-documentado* para obrigar a alteração também no AD? Utilizamos os endpoints:

![image](https://fluiggers.com.br/uploads/default/original/1X/c5a8b3d6b253827d0e568432f5557449a6573955.png)

Abrimos chamados na TOTVS, mas vai que alguém já passou por isso…

Valeu, galera!

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 09/06/2021, 18:19

[@tharsiab](/u/tharsiab) , de olho aqui!

---

## Resposta #2

**Hilton Gonçalves** (@HiltonGoncalves) — 14/06/2021, 09:35

Bom dia Daniel,
Da uma conferida nesse outro serviço, pode ser que resolva pra vc… *ECMColleagueService*
[https://tdn.totvs.com/pages/releaseview.action?pageId=240295690](https://tdn.totvs.com/pages/releaseview.action?pageId=240295690)

[https://tdn.engpro.totvs.com.br/dosearchsite.action?queryString=ECMColleagueService&searchQuery.spaceKey=fluig](https://tdn.engpro.totvs.com.br/dosearchsite.action?queryString=ECMColleagueService&searchQuery.spaceKey=fluig)

---

## Resposta #3

**Hilton Gonçalves** (@HiltonGoncalves) — 14/06/2021, 09:43 | ❤️ 1

Na documentação do Identity tem outra chamada, essa provavelmente já desabilita no AD: [https://app.fluigidentity.com/rest/swagger-ui/index.html#!/companies/deProvisionUserInActiveDirectory\_delete\_67](https://app.fluigidentity.com/rest/swagger-ui/index.html#!/companies/deProvisionUserInActiveDirectory_delete_67)

![image](https://fluiggers.com.br/uploads/default/original/1X/62f601e06ca9d3363b026bc92db2c89444119896.png)

---

## Resposta #4

**Daniel Cabral Santos** (@daniel.cabral) — 14/06/2021, 10:05

Noh, mas vou ter que fazer na mão? Sacanagem…rs…vamos ver o que a TOTVS diz - até pq eles reconheceram no chamado que esse processo deveria ser automático tal qual é feito na interface gráfica; Se nada mais funcionar, a gente implanta essa chamada.

Valeu demais!!

---

## Resposta #5

**Daniel Cabral Santos** (@daniel.cabral) — 21/06/2021, 10:59 | ❤️ 1

A TOTVS vai disponibilizar uma correção, aparentemente reconheceram que o comportamento está errado mesmo.

---
