# Cross Segmentos - TOTVS BackOffice (Linha RM) – TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) - MOV - Não é permitido incluir itens de movimento com diferentes deduções de INSS para o Empregador

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409323275415-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-NUCLEUS-MOV-N%C3%A3o-%C3%A9-permitido-incluir-itens-de-movimento-com-diferentes-dedu%C3%A7%C3%B5es-de-INSS-para-o-Empregador](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409323275415-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-NUCLEUS-MOV-N%C3%A3o-%C3%A9-permitido-incluir-itens-de-movimento-com-diferentes-dedu%C3%A7%C3%B5es-de-INSS-para-o-Empregador)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 22 de abril de 2025 às 12:06

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31582734109335)**Tempo aproximado para leitura: **00:03:00 min**

**Ocorrência**Ao tentar salvar o Movimento ocorre o erro: **Não é permitido incluir itens de movimento com diferentes deduções de INSS para o Empregador.**

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4409361728791)

**Ambiente
**Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões.

**Causa**Essa mensagem ocorre quando os produtos incluídos nos itens de movimento possuem percentual de base do INSS Empregado e Empregador diferentes dos informados no movimento.

**Solução
**O percentual para geração da base do tributo INSS é carregado mediante campos existentes no **Cadastro de Produto | Anexos | Dados Fiscais do Produto**:

**
![Imagem](https://totvssuporte.zendesk.com/attachments/token/7VkPwGvbFZaJwZHvPVZ3jTNvt/?name=inline-632888280.png)
**

O sistema soma os dois campos a fim de atingir o valor de 100% para a base do INSS. Sendo assim, uma vez que um movimento possua mais de um item de movimento, todos eles precisam ter o mesmo percentual de Empregado e Empregador preenchidos em seu cadastro.

Além desses campos, o sistema compara tais informações também com os campos existentes na aba **Tributos e Valores | Tributos** do movimento:

![Imagem](https://totvssuporte.zendesk.com/attachments/token/p4phav6MM7sQXIx5y1BO5w3i0/?name=inline-284187222.png)

Portanto, todos os itens assim como os campos do movimento indicados nas imagens, devem estar iguais em um mesmo movimento.
