# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Natureza de Operação não é exibida durante a inclusão do movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003531771-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Natureza-de-Opera%C3%A7%C3%A3o-n%C3%A3o-%C3%A9-exibida-durante-a-inclus%C3%A3o-do-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003531771-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Natureza-de-Opera%C3%A7%C3%A3o-n%C3%A3o-%C3%A9-exibida-durante-a-inclus%C3%A3o-do-movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 20 de dezembro de 2021 às 10:11

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:04:00min**

**Ocorrência**
Durante a inclusão de um Movimento a **CFOP** determinada para a operação não é apresentada para ser selecionada no *lookup* do campo **Cod. Natureza de Operação** do movimento ou item. Podem ocorrer situações onde nenhuma CFOP é exibida.

CFOP (Código Fiscal de Operações e Prestações), também é conhecido como **Natureza de Operação** ou **Natureza Fiscal** no sistema.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360004574292/mceclip0.png)

**Ambiente**
Cross Segmentos - TOTVS Backoffice (Linha RM) – TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.

**Causas
**As situações mais prováveis para que este incidente ocorra são as seguintes:

1.  A regra de seleção de natureza está configurada como **Completa** ou **Avançada** e as Regras de Tributação associada à Natureza de Operação não estão de acordo com as informações do movimento a ser incluído;
2.  **Exercício Fiscal** não foi selecionado no **Contexto**;
3.  Nenhuma **CFOP** está cadastrada para o **Exercício Fiscal** selecionado.

**Solução
**

1\. Para verificar se o parâmetro de **Tipo de Seleção de Natureza** está configurado como **Completa** ou **Avançada**, acesse:

1.1 - Menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Fiscal | Apuração de Tributos | Regras Apur. ICMS | Lançamento Fiscal 5/7 | Campo Tipo de Seleção de Natureza:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360004574512/mceclip2.png)

Caso esteja com alguma configuração diferente de **Não Seleciona**, o sistema irá verificar as regras de tributação associadas à **CFOP**:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360004574892/mceclip3.png)

Para verificar as regras associadas à natureza, acesse o cadastro de CFOP, em:

1.  Pelo TOTVS Gestão Fiscal: Menu Cadastros |  Natureza de Operação;
2.  Pelo TOTVS Gestão de Estoque, Compras e Faturamento: Menu Cadastros | Fiscais | Natureza Fiscal.

Vale ressaltar que para cada **Tipo de Seleção de Natureza**, o sistema adotará um critério específico para filtro da CFOP.

2\. Deverá verificar no **Contexto** se o **Exercício Fiscal** está selecionado:

**MDI**
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360004578151/mceclip0.png)


**.exe**
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360004579392/mceclip1.png)

Caso não esteja, selecione o Exercício Fiscal corrente e salve a configuração.

3\. Neste caso o Exercício Fiscal já está corretamente selecionado no contexto, porém, as CFOP's ainda continuam não sendo apresentadas. Assim, deve-se acessar o cadastro de CFOP e criar um filtro conforme abaixo:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360004579452/mceclip2.png)

Campo: Código
Operador: *IS NOT NULL
*
Com esse filtro criado, execute-o. O sistema irá retornar todas as CFOP's cadastradas e **vinculadas ao exercício fiscal selecionado no contexto**. Caso não retorne nenhuma CFOP, significa que não há cadastro e por esse motivo na inclusão do movimento nenhum registro é listado.

Caso as três possibilidades acima sejam aplicadas e as CFOP's ainda não sejam apresentadas, sugerimos que um ticket seja aberto junto ao suporte para que uma análise aprofundada seja realizada.

**Importante
**Para mais informações sobre **CFOP**, [clique aqui.](https://tdn.totvs.com/pages/releaseview.action?pageId=422545982)
