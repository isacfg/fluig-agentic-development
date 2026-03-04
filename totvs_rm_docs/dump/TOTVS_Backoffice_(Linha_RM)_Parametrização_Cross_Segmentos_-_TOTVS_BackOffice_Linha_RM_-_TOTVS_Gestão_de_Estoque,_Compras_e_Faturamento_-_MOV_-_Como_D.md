# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Desabilitar os Campos Filial de Saída e Local de Saída em Movimentos

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028660412-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Desabilitar-os-Campos-Filial-de-Sa%C3%ADda-e-Local-de-Sa%C3%ADda-em-Movimentos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028660412-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Desabilitar-os-Campos-Filial-de-Sa%C3%ADda-e-Local-de-Sa%C3%ADda-em-Movimentos)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 14 de abril de 2025 às 15:44

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31407270429591)
 Tempo aproximado para leitura: 00:01:00min**

**Ocorrência**Ao incluir um movimento os campos Filial de Saída (ou Entrega) e Local de Saída são visualizados na parte inferior da aba Identificação | Cabeçalho para preenchimento obrigatório.

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360029806352)

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**Esta situação ocorre porque o tipo de movimento está parametrizado para Editar ou Mostrar Filial e Local de Destino.

**Solução**Para desabilitar os campos referentes a Filial (TMOV.CODFILIALENTREGA) e Local de Entrega ou Saída (TMOV.CODLOCENTREGA), realize os seguintes passos:
1\. Acesse menu Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento;
2.selecionar o tipo de movimento > Parametrizar > etapa Mov - Emitente/Destinatário 2/2;
3\. No campo Edição do Local de Saída informe **Não Edita**;
4\. Salve a alteração nos parâmetros.

**Observação:** O uso de tais campos é recomendado apenas no processo de [Transferência de Mercadoria com Local Transitório](http://tdn.totvs.com/display/public/LRM/TRF0002_Transferencia_de_Mercadoria_Utilizando_Local_de_Estoque_Transitorio).
