# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Contabilização de Movimentos

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4408868113559-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Contabiliza%C3%A7%C3%A3o-de-Movimentos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4408868113559-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Contabiliza%C3%A7%C3%A3o-de-Movimentos)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 30 de maio de 2025 às 14:22

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/32481025980823)
 Tempo aproximado para leitura: **00:03:00min
****
Dúvida**

Como configurar o Evento Contábil e contabilizar Movimentos?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**Solução**

O sistema RM não interfere na contabilização dos movimentos pois depende da **regra contábil** da empresa, que é responsável por definir quais valores devem ser contabilizados por movimento e onde buscar os defaults contábeis.

A contabilização do movimento é definida no [**Evento Contábil**](https://tdn.engpro.totvs.com.br/pages/releaseview.action?pageId=423938154).

Os Itens de Evento são executados somente quando existe default contábil no cadastro definido para buscar default ou existe conta contábil informada dentro do próprio Item de Evento e quando sua fórmula retornar valor maior que 0.

Caso a contabilização do movimento esteja apresentando diferença de débitos e créditos, verifique o artigo **[Diferença Entre Partidas de Débito e Crédito ao Contabilizar Movimentos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028690871).**

Existem três formas de contabilizar movimentos:

1.  **Contabilização On-line:**
    Quando o Evento Contábil definido para o tipo de movimento (parâmetros do tipo de movimento, etapa Contabilidade) é executado com sucesso, a contabilização será feita **automaticamente ao salvar o movimento**.

    ![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4408868518423)

2.  **Processo Contabilizar Movimentos:
    **Após salvar o movimento é possível contabiliza-lo ou atualizar a contabilização já incluída pelo processo **Contabilizar Movimentos**, selecionando um ou mais registros na visão.

    ![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4408869102231)



3.  **Contabilização Off-line:
    **Habilitada a contabilização off-line no caminho: Menu Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Integrações > Contábil > Definições Contábeis e habilitar a flag "Habilitar contabilização Off Line" conforme imagem:**

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/32480982868503)

    **
    A contabilização será feita exclusivamente pelo processo **Lotes de Exportação Contábil**, disponível no menu Integrações.

    ![mceclip3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4408869561495)


    Será necessário informar no Lote de Exportação Contábil a faixa de Filiais, Tipos de Movimentos, Código do Lote Contábil e período a ser contabilizado. Após executar o processo **Contabilizar Movimentos (Lote)**, todos os movimentos selecionados pelo lote serão contabilizados.

    ![mceclip4.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4408869855511)


**Importante:**

-   Um mesmo Evento Contábil pode retornar valor correto em um movimento e em outro apresentar diferença de débitos e créditos, pois são contextos diferentes.
-   Caso seja necessário analisar a contabilização do movimento e/ou Evento Contábil, recomendamos contratar o serviço de Consultoria da TOTVS. Se houver dúvidas, entre em contato com o suporte técnico do módulo TOTVS Gestão de Estoque, Compras e Faturamento.
