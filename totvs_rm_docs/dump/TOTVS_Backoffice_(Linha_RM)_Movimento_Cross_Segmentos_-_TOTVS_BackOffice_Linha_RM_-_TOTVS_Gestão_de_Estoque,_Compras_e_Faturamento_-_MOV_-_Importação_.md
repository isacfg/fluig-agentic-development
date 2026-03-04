# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Importação de Movimento com Relacionamento via Conceito

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360039672113-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Importa%C3%A7%C3%A3o-de-Movimento-com-Relacionamento-via-Conceito](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360039672113-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Importa%C3%A7%C3%A3o-de-Movimento-com-Relacionamento-via-Conceito)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 26 de julho de 2022 às 17:42

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:02:00 min**

**Dúvida**Como executar a importação de um movimento que possua relacionamento via conceito?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**Para importação de um movimento que possua relacionamento via conceito, é necessário incluir um movimento através de cópia por referência utilizando o motivo XX (motivo que você utiliza na cópia por referencia). como no exemplo abaixo foi utilizado o motivo 32

No exemplo foi utilizado a ferramenta Gerador de Saídas >> Geração de Saídas para exportar para TXT esse movimento que foi incluso no sistema. 

Ao verificar a Linha "E" do arquivo TXT é possível identificar que o campo TIPORELAC fica na posição 080-080 conforme print abaixo e esse campo está preenchido com o valor "R" no arquivo TXT que que foi exportado no exemplo.

Ao importar um novo movimento utilizando o arquivo TXT que havia sido exportado, o movimento é criado no sistema com o relacionamento. 

![Imagem](https://totvssuporte.zendesk.com/attachments/token/Wm3hK2klyRYGOiiw7KJNSWqBr/?name=inline-511929955.png)

Segue abaixo o link da documentação de como realizar a importação de movimento via conceito no qual contém mais detalhes de como realizar importação de layout de gerador de saída e exportação de arquivo seguindo o layout importado: [**Importação Movimento**](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008531887-RM-MAT-Importa%C3%A7%C3%A3o-de-movimentos-via-Conceito)

Após importação do arquivo é possível consultar pela rastreabilidade o relacionamento que foi criado conforme print abaixo:

![Imagem](https://totvssuporte.zendesk.com/attachments/token/e84o62wNiVaJ71upBp62HOylb/?name=inline-2001739999.png)
​
Na tabela TMOVRELAC é criado o registro com o TIPORELAC "R" conforme o motivo de referência utilizado.
[RM - MAT - Importação de movimentos via Conceito](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008531887-RM-MAT-Importa%C3%A7%C3%A3o-de-movimentos-via-Conceito?source=search)
