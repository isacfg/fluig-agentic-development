# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Seleção de Natureza de Operação utilizando TOTVS Colaboração

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360015276172-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Sele%C3%A7%C3%A3o-de-Natureza-de-Opera%C3%A7%C3%A3o-utilizando-TOTVS-Colabora%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360015276172-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Sele%C3%A7%C3%A3o-de-Natureza-de-Opera%C3%A7%C3%A3o-utilizando-TOTVS-Colabora%C3%A7%C3%A3o)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
> **Data:** 9 de abril de 2025 às 16:02

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
Tempo aproximado para leitura: **00:01:00 min

Dúvida**Como o sistema seleciona a Natureza de Operação quando movimento é inserido via arquivo XML?

**Ambiente**Cross Segmentos - Backoffice Linha RM - Gestão de Estoque, Compras e Faturamento - A partir da 11.80.

**Solução**A seleção de **CFOP** de um movimento inserido via TC é feita primeiro no item para que a partir desta seja preenchida a do movimento.

O Sistema irá se basear na CFOP informada no **XML** para que encontre no sistema qual registro selecionar a fim de caracterizar a operação inversa (fiscalmente falando). Sendo assim será necessário cadastrar essas CFOP's inversas através do menu **"Anexos -** **Natureza Inversa - TOTVS Colaboração".**

**
![screenshot_20180904_111810.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360010477171/screenshot_20180904_111810.png)

**

Levando em consideração um cadastro hipotético de natureza inversa abaixo:

\* Natureza do XML 5.102
\* Naturezas inversas:
1.101.01
1.556.02
1.556.03
1.202.01

\* A seleção da CFOP tem por base as seguintes premissas:

-   Caso o tipo de movimento possua uma CFOP Default na etapa "**Fis - Natureza**" e esta seja de último nível o sistema irá considerar esta no movimento e item de movimento, desde que atenda as regras de seleção existente no sistema (será selecionada apenas caso a CFOP default esteja disponível na lista de CFOP's do campo quando buscar os códigos utilizando o caractere %).

![screenshot_20180904_112859.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360010454032/screenshot_20180904_112859.png)

-   Sem que haja uma CFOP default nos parâmetros, o sistema irá executar a regra de seleção definida no Gestão Fiscal e dentro desta regra de seleção verificará qual CFOP das que se encontram cadastradas como natureza inversa se encaixam para seleção e preenchimento no movimento/item. Caso mais de uma se encaixe e nenhuma delas esteja marcada como default o sistema deixará o campo em branco dependendo assim do usuário preencher este campo no momento da inclusão. Caso apenas uma se encaixe esta será preenchida no movimento/item.

\* Quando no cadastro de natureza inversa não existir uma CFOP com a flag "Default" marcada o Sistema terá o comportamento abaixo:

Ao incluir o movimento o sistema executa a regra de seleção e esta retorna apenas a CFOP 1.556.03 (mesmo não estando como default) assim esta será selecionada para preenchimento.
Mas se o Sistema retornar as CFOP's 1.556.03 e 1.556.02 após aplicar a regra, então o campo será preenchido com a Natureza 1.556 tanto no item como no movimento e o usuário é quem decidirá qual delas preencher.

Caso o a regra apresente naturezas analíticas distintas o sistema remove o último nível.

A regra retorna as CFOP's 1.556.03 e 1.556.02 e 1.202.01, neste caso o sistema remove o último nível restando as CFOP's 1.556. e 1.202. Como foram identificadas duas naturezas sintéticas, o sistema remove mais um nível e chega ao resultado com a natureza sintética de código 1,  então o campo será preenchido com a Natureza 1 tanto no item como no movimento e o usuário é quem decidirá qual preencher no campo.

\* Quando no cadastro de natureza inversa existir uma CFOP com a flag "Default" marcada o Sistema terá o comportamento abaixo:

![screenshot_20180904_112129.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360010453572/screenshot_20180904_112129.png)

Ao incluir o movimento o sistema executa a regra de seleção e esta retorna apenas a CFOP 1.556.03 pois esta marcada como Default assim esta será selecionada para preenchimento tanto no movimento quanto no item de movimento.
