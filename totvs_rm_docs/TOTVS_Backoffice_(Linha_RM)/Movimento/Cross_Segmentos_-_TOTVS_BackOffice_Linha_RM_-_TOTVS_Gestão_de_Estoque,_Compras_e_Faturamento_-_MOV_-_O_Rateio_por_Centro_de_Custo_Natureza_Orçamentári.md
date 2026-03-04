# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - O Rateio por Centro de Custo/Natureza Orçamentária Financeira é obrigatório para o lançamento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022270871-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-O-Rateio-por-Centro-de-Custo-Natureza-Or%C3%A7ament%C3%A1ria-Financeira-%C3%A9-obrigat%C3%B3rio-para-o-lan%C3%A7amento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022270871-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-O-Rateio-por-Centro-de-Custo-Natureza-Or%C3%A7ament%C3%A1ria-Financeira-%C3%A9-obrigat%C3%B3rio-para-o-lan%C3%A7amento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 19 de fevereiro de 2025 às 09:41

---

****
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/16233739720855)
**Tempo aproximado para leitura**: 00:04:00 min****

**Ocorrência**Ao incluir um movimento que possui integração com o lançamento financeiro o sistema emite a mensagem: *"**O Rateio por Centro de Custo/Natureza Orçamentária Financeira é obrigatório para o lançamento"***

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**O módulo financeiro está configurado para utilizar rateio por centro de custo e/ou natureza orçamentária financeira **Ambiente > Parâmetros > Gestão de estoque > Integrações > Financeira > Contas a pagar // Contas a receber > Etapa Recursos adicionais** mas o movimento não possui os campos necessários preenchidos:
1 - Utiliza Centro de custo (Exigido quando obrigatório)
2 - Utiliza Natureza (Exigido quando obrigatório)
3 - Utiliza Ambos (Ainda que não obrigatório, se houver um dos campos informado, o outro se torna obrigatório)

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360019286652)

**Solução**Deverá ser informado no movimento os dados necessários para o envio do lançamento financeiro. Preencher neste caso a natureza orçamentária financeira e/ou rateio por centro de custo de acordo com a opção definida no parâmetro financeiro.
Lembrando que, se o movimento tiver origem de outro módulo, este módulo deverá enviar as informações para o movimento, caso contrário a mensagem também será apresentada.

**Saiba mais em: [Parâmetro de Rateio de Centro de Custo e Departamento](https://tdn.totvs.com/pages/releaseview.action?pageId=423938848)**
