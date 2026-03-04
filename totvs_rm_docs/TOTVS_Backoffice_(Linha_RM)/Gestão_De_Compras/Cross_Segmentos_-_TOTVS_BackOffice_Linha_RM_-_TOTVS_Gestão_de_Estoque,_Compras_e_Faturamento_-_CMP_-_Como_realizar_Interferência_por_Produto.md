# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Como realizar Interferência por Produto

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360017738751-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Como-realizar-Interfer%C3%AAncia-por-Produto](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360017738751-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Como-realizar-Interfer%C3%AAncia-por-Produto)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
> **Data:** 6 de outubro de 2025 às 17:06

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/24157182383895)**Tempo aproximado para leitura: **00:03:00 min

Dúvida**Como realizar Interferência no Novo Quadro Comparativo.\]


**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 2406.

**Solução**A Interferência por Produto somente será possível quando utilizado o **Tipo de Julgamento de Melhor Oferta** como **Melhor Oferta por** **Produto**.

Quando o sistema esta configurado para utilizar Tipo de Julgamento de Melhor Oferta, o Assistente de Cotação disponibiliza a opção de definir o tipo de julgamento a ser utilizado na cotação:


![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/35447662888599)


Quando selecionado a opção **Melhor Oferta Global,** o sistema irá permitir que a Interferência seja feita apenas por **Fornecedor**. Sendo assim ao dar um duplo clique sobre o item que deseja interferir via Quadro Comparativo o sistema apresentará a mensagem: **Não é permitido interferência nos itens da cotação quando o tipo de julgamento a Melhor Oferta é Global.**


![screenshot_20181009_115125.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360013021891)


Para efetuar a Interferência por Produto, dê **Duplo Clique ( Clique 2x )** e cima do Fornecedor desejado para realizar a interferência.


![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/35447662892823)


Para realizar o procedimento, é necessário que informe a quantidade no campo **Quantidade A Ser Gerada**:


![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/35447662894359)

Caso a coluna não seja exibida, selecione o Configurador de Colunas e verifique se a coluna **Qtd. A ser Gerada** está habilitada:


![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/35447662895895)
​


Será necessário verificar no Menu Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Gestão de Compras > Cotação > Definições Gerais 2/6, se o campo **Permite Cotação Parcialmente Gerada** esta marcado:


![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24157182390295)

Para realizar Interferência por Fornecedor, basta selecionar o Ícone do print abaixo:


![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/35447631361815)


Será aberto a tela da Interferência onde você selecionará o Fornecedor desejado.

**OBS: Na Interferência por Fornecedor NÃO preenche Quantidade a Ser gerada (Apenas pro Produto).**

**
Importante
**

Por padrão quando **não** utiliza-se a parametrização para **Usar tipo de Julgamento de Melhor Oferta** na cotação o sistema utiliza a melhor oferta como Global.
A Melhor Oferta Global no entanto permite que o tipo de julgamento seja alterado para Melhor Oferta por Produto, através do ícone **Alterar Tipo de Julgamento**, mas o contrário não será possível onde este ícone ficará desabilitado.


![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/35447631364119)
