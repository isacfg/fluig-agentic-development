# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Natureza Orçamentária inválida para o Tipo de Orçamento informado!

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4403929187607-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Natureza-Or%C3%A7ament%C3%A1ria-inv%C3%A1lida-para-o-Tipo-de-Or%C3%A7amento-informado](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4403929187607-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Natureza-Or%C3%A7ament%C3%A1ria-inv%C3%A1lida-para-o-Tipo-de-Or%C3%A7amento-informado)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
> **Data:** 9 de abril de 2025 às 15:09

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31292941418519)**Tempo aproximado para leitura: **00:04:00min**

**Ocorrência**Ao realizar o processo de **Importação de Arquivo de Orçamento** ocorre a mensagem: **Natureza Orçamentária inválida para o Tipo de Orçamento informado!**

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4403929067671)

**
Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.


**Causa
**Em tipos de movimento com orçamento **Despesa**, serão aceitos apenas naturezas **A Pagar** ou **Ambos** e Orçamentos de **Receita** serão aceitos somente Naturezas **A Receber** ou Ambos. 

**Solução**Acesse os parâmetros do tipo de movimento que está importando, etapa **Orçamento** e confira o campo **Tipo Orçamento** (caso encontre dificuldades para localizar os parâmetros do tipo de movimento [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento)):

![Imagem](https://totvssuporte.zendesk.com/attachments/token/VnV3jFE3x7sQrB0utWD5ebFOB/?name=inline1437345362.png)

​Confira também qual a natureza da **Natureza Orçamentária Financeira**, acessando menu **Orçamento | Tabelas do Orçamento | Natureza Orçamentária Financeira:**

![Imagem](https://totvssuporte.zendesk.com/attachments/token/0W3BE7DxVu2P1pfdg6ypruP5M/?name=inline-1084177841.png)

**
Informações adicionais**
Antes da versão 12.1.28 havia uma inconsistência no sistema que permitia esse tipo de inclusão. Essa situação foi tratada para preservar a integridade dos dados. Nesse caso deverá alinhar o tipo do orçamento com a natureza usada ao realizar a importação do movimento.

Para mais informações sobre o Controle Orçamentário, [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345887-RM-CMP-Controle-Or%C3%A7ament%C3%A1rio?source=search).
