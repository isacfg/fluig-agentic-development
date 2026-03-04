# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como habilitar os campos Valor do Material e Valor Sub Empreitada

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003171871-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-habilitar-os-campos-Valor-do-Material-e-Valor-Sub-Empreitada](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003171871-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-habilitar-os-campos-Valor-do-Material-e-Valor-Sub-Empreitada)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 1 de agosto de 2022 às 17:28

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:03:00min**

**Dúvida**Qual parametrização realizar para habilitar os campo Valor do Material e Valor Sub Empreitada na integração Fiscal do movimento?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**Para habilitar os campos de Valor do Material e Valor Sub Empreitada no movimento, deverá seguir os passos abaixo:

-   Valor do Material (TITMOVFISCAL.VLRDEDUCAOMATERIAL)

1.  Acesse o RM Fiscal;
2.  Menu Ambiente | Parâmetros | TOTVS Gestão Fiscal;
3.  Em 03.01 - Identificação de Regras de Apuração, selecione 03.01.03 - ISS e avance;
4.  Na etapa Regras ISS por Filial, selecione a filial desejada e clique em parametrizar;
5.  Na etapa Constr. Civil e Deduções marque as opções Emite Livros de Construção Civil e Deduz Materiais.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360004178532/mceclip1.png)

Após salvar essas alterações, acesse o movimento desejado e verifique a aba de Integrações | Fiscal conforme print abaixo:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360004180591/mceclip3.png)

Movimento de entrada

-   Valor Sub Empreitada (TMOVFISCAL.VLRDEDCAOSUBEMPREITADA)

1.  Acesse o RM Fiscal;
2.  Menu Ambiente | Parâmetros | TOTVS Gestão Fiscal;
3.  Em 03.01 - Identificação de Regras de Apuração, selecione 03.01.03 - ISS e avance;
4.  Na etapa Regras ISS por Filial, selecione a filial desejada e clique em parametrizar;
5.  Na etapa Constr. Civil e Deduções marque as opções Emite Livros de Construção Civil e Deduz Subempreitada.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360004180551/mceclip2.png)

Após salvar essas alterações, acesse o movimento desejado e verifique a aba de Integrações | Fiscal conforme print abaixo:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360004178912/mceclip4.png)

Movimento de saída

**Importante**

-   Esta regra de visibilidade para exibição dos campos é por **Filial,** por tanto, ao acessar o movimento certifique-se que está em uma Filial que está parametrizada para esta finalidade, caso contrário os campos não serão exibidos.
-   O campo Valor do Material (TITMOVFISCAL.VLRDEDUCAOMATERIAL) é exibido em movimentos de Compra e Venda.
-   O campo Valor Sub Empreitada (TMOVFISCAL.VLRDEDCAOSUBEMPREITADA) é exibido somente em movimentos de Venda.
