# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Condição de Pagamento não permitida para o tipo de movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4404367309975-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Condi%C3%A7%C3%A3o-de-Pagamento-n%C3%A3o-permitida-para-o-tipo-de-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4404367309975-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Condi%C3%A7%C3%A3o-de-Pagamento-n%C3%A3o-permitida-para-o-tipo-de-movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 14 de fevereiro de 2022 às 12:38

---

**
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
**Tempo aproximado para leitura: **00:03:00min**

**Causa
**Ao incluir um Movimento é apresentada a mensagem:

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4404345568023/mceclip0.png)

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 11.00.

**Solução
**A mensagem é apresentada pois nos parâmetros do Tipo de Movimento, etapa **Fin - Condições de Pagamento** a flag **Edita Condições Pagamento do Cliente\\Fornecedor**​​ está selecionada mas não há nenhuma **Condição de Pagamento** Default informada no cadastro do Cliente\\Fornecedor.

Caso encontre dificuldades para acessar os parâmetros do Tipo de Movimento, [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento?source=search).

Para cadastrar uma Condição de Pagamento para o Cliente\\Fornecedor acesse: Menu **Cadastros | Clientes/Fornecedores | Anexos | Condições de Pagamento Defaults para Clientes/Fornecedores**:

![Imagem](https://totvssuporte.zendesk.com/attachments/token/DGGxp8OjMZtuJ8hKXVINZpIqN/?name=inline533030515.png)

Além disso, verifique o campo **Tipo Planos** da Condição de Pagamento selecionada. Selecione a opção de acordo com o Movimento (Etapa **Fin - Faturamento 2/6** A pagar = Compras A receber = Venda) ou deixe ambos selecionados:

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4404366968087/mceclip1.png)
