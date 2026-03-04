# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Movimento específico para produtos não estocáveis em movimentações criadas pelo Protheus

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4407532800023-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Movimento-espec%C3%ADfico-para-produtos-n%C3%A3o-estoc%C3%A1veis-em-movimenta%C3%A7%C3%B5es-criadas-pelo-Protheus](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4407532800023-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Movimento-espec%C3%ADfico-para-produtos-n%C3%A3o-estoc%C3%A1veis-em-movimenta%C3%A7%C3%B5es-criadas-pelo-Protheus)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 9 de abril de 2025 às 15:46

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:02:00min**

**Dúvida**Como parametrizar o sistema RM para que durante a geração de Ordens de Serviço no Protheus o movimento gerado para produtos não estocáveis seja específico.

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**

Para que seja gerado uma ordem de compra para um produto que não é estocável na filial basta acessar o módulo Gestão de Estoque Compras e Faturamento > menu Ambiente > Parâmetros > Gestão de Estoque Compras e Faturamento > Integrações > Manutenção de Ativos (Protheus).

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4407532018455/mceclip0.png)

Clicando em avançar a seguinte tela será aberta:

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4407532157719/mceclip1.png)

Após marcar a flag o campo Movimento Gerado (Default) é habilitado possibilitando a edição do movimento que será gerado caso o produto movimentado não seja estocável na filial.
