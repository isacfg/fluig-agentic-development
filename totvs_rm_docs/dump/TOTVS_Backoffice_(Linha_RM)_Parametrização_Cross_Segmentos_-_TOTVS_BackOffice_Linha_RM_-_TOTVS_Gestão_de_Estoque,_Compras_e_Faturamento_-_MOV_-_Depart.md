# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Departamento Default desabilitado

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024615854-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Departamento-Default-desabilitado](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024615854-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Departamento-Default-desabilitado)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 14 de abril de 2025 às 15:45

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:01:00min**

**Ocorrência**No módulo de Gestão de Estoque, Compras e Faturamento, ao tentar parametrizar Tipo de Movimento para que possua um **Departamento** **default** o campo se encontra desabilitado para edição.

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**Esse incidente ocorre pois o cadastro de Departamento é vinculado ao cadastro de Filial, portanto se não houver uma Filial Default nos parâmetros do tipo de movimento o campo permanecerá desabilitado para edição.

**Solução**Para solucionar essa ocorrência, realize os seguintes passos:
1\. Acessar etapa **Mov - Emitente/Destinatário 1/2**;
2. Selecionar a opção **Mostra** para o campo **Edição da Filial de Emissão**;
3\. Preencher o campo **Filial** com a Filial do Departamento que deseja preencher como default;
4\. Acessar a etapa **Mov - Tab Global** e preencher com o Departamento desejado.
