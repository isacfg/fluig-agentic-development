# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - O lançamento não pode ser cancelado/alterado pois não é o último gerador de IRRF do período

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360016721011-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-O-lan%C3%A7amento-n%C3%A3o-pode-ser-cancelado-alterado-pois-n%C3%A3o-%C3%A9-o-%C3%BAltimo-gerador-de-IRRF-do-per%C3%ADodo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360016721011-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-O-lan%C3%A7amento-n%C3%A3o-pode-ser-cancelado-alterado-pois-n%C3%A3o-%C3%A9-o-%C3%BAltimo-gerador-de-IRRF-do-per%C3%ADodo)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 22 de abril de 2025 às 12:11

---

**
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31582880698519)
** Tempo aproximado para leitura**: 00:03:00 min**

**Ocorrência**No módulo Gestão de Estoque, Compras e Faturamento, ao tentar editar/excluir/cancelar um movimento é apresentada a mensagem: **O Lançamento não pode ser cancelado, pois não é o último gerador de IRRF do período.**

**O Último lançamento gerador de IRRF do período é o**

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4414743373975)

**Ambiente**Cross Segmentos - BackOffice Linha RM - Gestão de Estoque, Compras e Faturamento – A partir da versão 11.


**Causa
**Esse incidente ocorre, pois o tipo de Movimento está parametrizado para gerar o tributo IRRF no lançamento financeiro, desta forma somente o último movimento incluído no sistema para este CNPJ pode ser alterado/excluído/cancelado, devido a cumulatividade de IRRF feita através do módulo Gestão Financeira.

**Solução**Para solucionar essa ocorrência, realize os seguintes passos:
1\. Identificar o último movimento inserido no sistema para este CNPJ;
**Dica:** A mensagem lhe informa o último lançamento que gerou IRRF sendo assim pode-se basear nesta informação para identificar o último movimento através do rastreamento do lançamento financeiro da mensagem.

2\. **Reabrir Financeiro** (excluir) deste movimento;
**Dica:** Pode ser que além deste movimento hajam outros que precedem o que deseja alterar sendo assim será necessário efetuar o passo 1 e 2 para todos estes movimentos, até que o que deseja alterar seja o último gerador de IRRF para este CNPJ.

Selecione o movimento desejado, acesse **Processos | Reabrir Financeiro:**

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4412259374871)

3\. Altere/Exclua/Cancele o movimento desejado.
4\. Gere novamente o lançamento financeiro para o movimento em que foi necessário reabrir financeiro.

**Exemplo:** Existem os movimentos 01, 02 e 03.
Todos eles geraram lançamento financeiro e IRRF para o Cli/For Arthur (CNPJ 75.741.611/0001-90).
Preciso alterar o movimento 01.
Antes de altera-lo eu acesso o movimento 03 e executo o processo de **Reabrir Financeiro**.
Depois acesso o movimento 02 e executo o processo de reabrir financeiro.
Feito isto agora o movimento 01 é o último movimento que gerou IRRF para o Cli/For Arthur, sendo assim eu posso agora realizar minha alteração.
Realizo a alteração salvo o movimento 01 e depois acesso o movimento 02 e 03 e executo o processo de **Gerar Financeiro**.

**Atenção
**Mesmo que o lançamento não tenha gerado a guia de IRRF, se o tipo de documento associado ao lançamento financeiro possuir a classificação igual a **Gerar IRRF** ou **Gerar INSS e IRRF** o mesmo fará parte da cumulatividade do imposto.
