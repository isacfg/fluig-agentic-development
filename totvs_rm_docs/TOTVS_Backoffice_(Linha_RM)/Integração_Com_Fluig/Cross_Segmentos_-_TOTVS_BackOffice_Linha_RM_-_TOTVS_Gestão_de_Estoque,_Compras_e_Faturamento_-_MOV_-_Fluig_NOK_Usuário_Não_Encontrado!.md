# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fluig: NOK Usuário Não Encontrado!

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000350628-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Fluig-NOK-Usu%C3%A1rio-N%C3%A3o-Encontrado](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000350628-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Fluig-NOK-Usu%C3%A1rio-N%C3%A3o-Encontrado)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Fluig
> **Data:** 9 de abril de 2025 às 15:55

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31294419363479)
 Tempo aproximado para leitura: 00:02:00 min**

**Ocorrência**Ao acessar a etapa Workflow Fluig nos parâmetros do tipo de movimento ou ao tentar criar um movimento integrado ao Fluig é apresentado o erro: **NOK Usuário Não Encontrado!**

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/7728599090839)

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**1- Parâmetro "Id da Empresa Centralizadora do Workflow no Fluig" não definido com o "id empresa" do fluig correto
2- Não sincronização do usuário logado durante a parametrização/inclusão.

**Solução
**1- Acessar o caminho: "Parâmetros > Gestão de Estoque, Compras e Faturamento > Parâmetros Gerais > Definições Gerais > Definições Gerais 3/3" e preencher o campo "Id da Empresa Centralizadora do Workflow no Fluig" com o ID da Empresa Fluig correto
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360020336632)

2- A partir do RM, existe o processo chamado Sincroniza Usuários do Corpore com o GED. Este processo irá verificar a existência dos usuários entre as plataformas e sincroniza-los caso existam. 

No RM o campo USERID da tabela GUSUARIO deve ser igual ao campo MATRICULA DO FLUIG. Além disso o campo e-mail também deve ser igual entre as plataformas.

Por tanto:

**RM**

**FLUIG**

USERID

MATRICULA

E-MAIL

E-MAIL

**Saiba Mais
**Mais detalhes sobre o processo e sua configuração, acesse:**
[GED - Gerenciamento Eletrônica de Documentos](http://tdn.totvs.com/pages/releaseview.action?pageId=270899168)
**
