# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Devolução de Venda

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000352288-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Devolu%C3%A7%C3%A3o-de-Venda](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000352288-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Devolu%C3%A7%C3%A3o-de-Venda)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 4 de outubro de 2021 às 14:14

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 05:00 min

Ocorrência**Descrição do Processo de Devolução de Venda. A devolução de mercadoria se refere anulação de um procedimento de venda realizado junto á um cliente. A devolução pode ser feita considerando todos os itens do movimento ou parte deles, onde será afetado tanto o saldo financeiro quanto o saldo físico.

**Ambiente
**Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - A Partir da Versão 11.80

**Causa
**Auxilio na parametrização do processo de Devolução de Venda

**Parametrização**

**1** - Acessar o cadastro de **Tipo de Documento** e incluir um **novo** com a finalidade específica para este fim, onde deverá informar a **classificação** como **Devolução** e o campo **Pagar** ou **Receber** como **A Pagar** e **A Receber**.

**
![Screenshot_35.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4410026147735/Screenshot_35.png)
**

**2** - Feito o cadastro do documento, vamos parametrizar o movimento em **Ambiente** | **Parâmetros** | **TOTVS Gestão de Estoque, Compras e Faturamento** | **Vendas** | **Devolução de Venda**. Poderá criar ou editar um movimento já existente. No exemplo abaixo, utilizaremos um movimento do tipo **1.2.XX**.

**Etapa Mov – Emitente / Destinatário
**\- Emitente: Cliente
\- Edição da Filial de Emissão: informar “Edita” para permitir que o usuário preencha os dados da filial, ou “Mostra” se quiser deixar um default preenchido
\- Edição do Local de Emissão: informar “Edita” para permitir que o usuário preencha os dados da filial, ou “Mostra” se quiser deixar um default preenchido
\- Destinatário: Empresa
\- Edição do Cliente \\ Fornecedor: Edita

**Etapa Mov – Outros Dados
**\- Usar Cópia de Movimento por Referência: Habilitar
\- Motivo de Referência: 5 – Devolução de Venda de Mercadorias

**Etapa Fis- Escrituração 1/2
**\- Gerar Escrituração: Habilitar
\- Tipo de Documento Escrituração: informar o tipo de documento que deve ser apresentado no Totvs Gestão Fiscal

**Etapa Fis- Escrituração 2/2
**\- Tipo do Lançamento Fiscal da Transferência: Entrada
\* A parametrização acima é obrigatória para o tipo de movimento que vai gerar escrituração\*\*

**Etapa Fis – Natureza
\-** Natureza | Edição: Edita
\- Seleção Automática da Natureza: Seleciona por Item

**Para mais informações sobre processo, clique [aqui](https://tdn.totvs.com/pages/releaseview.action?pageId=315902787):**
