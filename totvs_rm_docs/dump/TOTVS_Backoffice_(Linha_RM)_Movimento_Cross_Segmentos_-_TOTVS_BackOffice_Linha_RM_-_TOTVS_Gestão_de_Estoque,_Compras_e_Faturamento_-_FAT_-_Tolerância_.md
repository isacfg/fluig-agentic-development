# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - FAT - Tolerância no faturamento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409690094743-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-FAT-Toler%C3%A2ncia-no-faturamento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409690094743-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-FAT-Toler%C3%A2ncia-no-faturamento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 18 de janeiro de 2022 às 16:46

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **03:00 min
****Dúvida**Como parametrizar o módulo para o uso de tolerância no faturamento?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**Solução**
1\. Acessar **Cadastros | Produtos** **| aba Preço** e definir a margem de tolerância (%) de quantidade ou preço para o produto de acordo com as suas regras de negócio **(neste exemplo utilizaremos quantidade)**:

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4409690022167/mceclip0.png)

2\. Acessar o menu **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Gestão de Compras | Ordem de Compra** **etapa** **Mov - Outros Dados** e selecionar no campo **Tolerância: Usar para Quantidade**:

![Imagem](https://totvssuporte.zendesk.com/attachments/token/holjdXWWGK7IYRYdIG0L4bSgR/?name=inline2019832235.png)

3\. No movimento destino (Ordem de Compra), se o usuário aumentar mais do que o limite estabelecido no cadastro do produto, o sistema retornará o erro abaixo. Se a alteração estiver dentro do limite permitido, o movimento será salvo normalmente.

![Imagem](https://totvssuporte.zendesk.com/attachments/token/QRFRdJPuKOIKYJRqmqQM4lY1r/?name=inline-1225484617.png)

Para descobrir a Classificação do Tipo de Movimento clique [aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-NUCLEUS-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento?source=search).
