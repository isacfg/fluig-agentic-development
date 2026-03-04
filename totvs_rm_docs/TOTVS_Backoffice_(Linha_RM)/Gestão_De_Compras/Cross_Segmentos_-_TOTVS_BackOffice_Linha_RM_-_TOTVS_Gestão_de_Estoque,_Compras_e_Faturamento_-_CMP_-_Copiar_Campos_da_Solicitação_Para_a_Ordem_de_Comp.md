# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Copiar Campos da Solicitação Para a Ordem de Compra através da cotação

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035403633-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Copiar-Campos-da-Solicita%C3%A7%C3%A3o-Para-a-Ordem-de-Compra-atrav%C3%A9s-da-cota%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035403633-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Copiar-Campos-da-Solicita%C3%A7%C3%A3o-Para-a-Ordem-de-Compra-atrav%C3%A9s-da-cota%C3%A7%C3%A3o)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
> **Data:** 9 de abril de 2025 às 15:22

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:01:00 min**

**Dúvida
**Como copiar informações de campos na Solicitação de Compra para a Ordem de Compra após a cotação ser realizada?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**É necessário parametrizar para que a cotação permita cotar apenas uma solicitação de compra por vez. Acesse os **parâmetros da cotação,** etapa **"Definições Gerais 3/5"** e marque a flag **"Cotar itens de uma única solicitação de compra"**, salve e exclua a cotação e inclua novamente.
Sem esta configuração os campos preenchidos na solicitação não serão copiados para a ordem de compras uma vez que a cotação pode ter mais de uma solicitação sendo cotada, e assim não há como definir de qual solicitação a informação seria copiada. 
**OBS**: Nõa terá efeito para cotações que já estejam na base. A parametrização somente é acatada para novas cotações. 
**ATENÇÃO:** Caso na aba **"Propriedades"** da cotação seja exibida apenas uma Filial então o caminho a ser acesso na parametrização será **"Definição Escopo Filial"** acesse a etapa **"Definições Gerais 3/5"** e marque a flag **"Cotar itens de uma única solicitação de compra"**
