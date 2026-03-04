# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como alterar a máscara do número do movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000598607-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-alterar-a-m%C3%A1scara-do-n%C3%BAmero-do-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000598607-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-alterar-a-m%C3%A1scara-do-n%C3%BAmero-do-movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 4 de outubro de 2021 às 15:09

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 03:00 min

Dúvida**Como alterar a **máscara** do número do movimento?

**Ambiente**
Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento  – Todas as versões.

**Solução
**Para alterar a máscara do movimento execute os seguinte passos:

1.  Acesse o menu **Ambiente |** **Parâmetros**.
2.  Selecione a opção **Gestão de Estoque, Compras e Faturamento.**
3.  Selecione a classificação de seu movimento e clique em **Avançar**.
4.  Dê um duplo clique sobre seu movimento ou marque-o e acesse a opção **Parametrizar**.
5.  Na primeira etapa **Mov - Identificação**, altere o campo destacado abaixo:

![KCS.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360000952728/KCS.png)

 **Importante:**

-   Se houver integração com o **RM Liber**, se a máscara informada for maior que 6 o sistema emitirá a seguinte mensagem: **Atenção**: O tamanho do campo número do documento é superior a 6 dígitos. Esse tamanho poderá acarretar problemas na geração das rotinas legais.
-   Os aplicativos RM Nucleus e RM Liber não impedem que trabalhemos com número documento superior a 06 dígitos, porém há restrição no próprio Sintegra (Convênio 31/99) que determina que o campo número documento seja informado com 06 caracteres. Sendo assim, quando trabalhamos com número documento superior a 06 dígitos, ao gerar os lançamentos para Secretaria da Fazenda, os demais dígitos à esquerda serão desprezados.
-   Para máscara Financeira, acesse o menu **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Financeira | Contas apagar | Inclusão | Tamanho do Número |** **Documento** informar a quantidade de dígitos. É importante sempre somar 2 dígitos a mais da quantidade do movimento.
    **Exemplo:** Movimento com 9 dígitos o número do documento será 11.
-   Ao pesquisar informações na visão por número de movimento o sistema complementará com zeros a esquerda a informação digitada de acordo com a máscara parametrizada. Os movimentos incluídos com a máscara antiga permanecerão sem alteração na numeração e para busca-los somente através de filtro da tela de movimentos é que será possível encontra-los na visão de movimentos.
    **Ex.:** máscara: ######
    Ao digitar a informação 1 o sistema pesquisará 000001 e caso encontre fará o posicionamento automático do registro na grid.
