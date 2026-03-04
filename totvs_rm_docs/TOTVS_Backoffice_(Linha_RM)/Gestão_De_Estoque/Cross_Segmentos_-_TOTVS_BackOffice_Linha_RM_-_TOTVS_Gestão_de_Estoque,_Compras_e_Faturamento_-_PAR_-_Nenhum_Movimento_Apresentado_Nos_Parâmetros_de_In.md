# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Nenhum Movimento Apresentado Nos Parâmetros de Inventário

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345027-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Nenhum-Movimento-Apresentado-Nos-Par%C3%A2metros-de-Invent%C3%A1rio](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345027-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Nenhum-Movimento-Apresentado-Nos-Par%C3%A2metros-de-Invent%C3%A1rio)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
> **Data:** 9 de abril de 2025 às 15:38

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:02:00min**

**Ocorrência**

Ao tentar parametrizar as etapas de **Inventário**, nenhum Tipo de Movimento é apresentado para acerto de Entrada e/ou Saída.

**
![Imagem](http://tdn.totvs.com/download/attachments/244715080/image2016-8-4%2017%3A33%3A49.png?version=1&modificationDate=1470342951000&api=v2)
**

**
![Imagem](http://tdn.totvs.com/download/attachments/244715080/image2016-8-4%2017%3A34%3A57.png?version=1&modificationDate=1470342952000&api=v2)
**

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa** 

1- O Tipo de movimento não é do Tipo 4.1.

2- A numeração do movimento não esta como mostra.

3- O usuário não tem permissão ao tipo de movimento.

4- A unidade de medida definido no tipo de movimento esta diferente de **unidade controle**.

5- O saldo e o efeito sobre o saldo parametrizado no tipo de movimento estão incompatíveis com campo onde o tipo de movimento de inventario é definido.

**Solução**

1- Criar um tipo de movimento do tipo 4.1.

2- Definir a numeração do movimento como mostra.

3- Liberar acesso ao usuário ao tipo de movimento criado para inventario.

4- Definir no tipo de movimento que a unidade de medida será unidade de controle.

5- Definir o saldo e o efeito de saldo compatível com o campo ao qual deseja informar o tipo de movimento. Exemplo: Se inventario sobre o saldo 2. Definir um tipo de movimento que o efeito sobre o saldo será aumenta e outro que será diminui.
