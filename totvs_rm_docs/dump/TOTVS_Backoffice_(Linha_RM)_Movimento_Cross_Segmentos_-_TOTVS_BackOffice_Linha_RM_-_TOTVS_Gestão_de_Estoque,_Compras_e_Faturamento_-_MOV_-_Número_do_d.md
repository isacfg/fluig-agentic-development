# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Número do documento deve ter X caracteres

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360047697694-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-N%C3%BAmero-do-documento-deve-ter-X-caracteres](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360047697694-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-N%C3%BAmero-do-documento-deve-ter-X-caracteres)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 10 de dezembro de 2021 às 08:41

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:03:00min**

**Ocorrência
**Ao salvar um movimento que possui Integração Financeira o sistema apresenta uma mensagem de erro:  

*
![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360071091453/mceclip0.png)
*


**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.

**Causa
**A mensagem de erro é apresentada porque a quantidade de caracteres informada no campo **Número do Movimento** não coincide com a quantidade de caracteres informada no documento do **Lançamento Financeiro.

****Solução
**Para solucionar essa ocorrência, realize os seguintes passos:

1\. Acesse o menu **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | [Localize a Classificação do Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento) | Fin – Faturamento 1/6;**
2\. Verifique o **Tipo de Documento** selecionado para o campo **Tipo de Documento Duplicata.** Se estiver selecionado para **Utiliza Tipo de Movimento** será habilitado o campo ao lado **Tipo de Documento Duplicata Default**. Clique na **descrição** do Tipo de Documento e acesse a aba **Dados Adicionais** campo **Formato Sequencial;**

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360069968174/mceclip1.png)
![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360071092033/mceclip2.png)

3\. Se estiver selecionado para **Utiliza do Cliente/Fornecedor** acesse o cadastro do **Cliente/Fornecedor | Anexos | Defaults do Cli/For | Tipo de Documento;**

![mceclip3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360071092233/mceclip3.png)

4\. Após verificar o Formato Sequencial acesse o menu **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Financeira | Contas a Pagar | Inclusão | campo Tamanho do Número: Documento;**

![mceclip7.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360071092453/mceclip7.png)

Altere o tamanho do número do documento considerando a quantidade caracteres da máscara do movimento + caractere sequencial + separador.

**Exemplo:** A máscara do movimento possui 7 caracteres + 2 caracteres sequencial + 1 separador = 10 caracteres.

**Informações adicionais
**Caso se trate de um lançamento do tipo **A Receber** a configuração do tamanho do documento deve ser preenchida em **Ambiente | Parâmetros | Gestão financeira | Contas a Receber | Etapa 18 - Inclusão |** **Tamanho do número** informar o tamanho considerando a quantidade caracteres da máscara do movimento + caractere sequencial + separador.

![Screenshot_1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360101149653/Screenshot_1.png)
