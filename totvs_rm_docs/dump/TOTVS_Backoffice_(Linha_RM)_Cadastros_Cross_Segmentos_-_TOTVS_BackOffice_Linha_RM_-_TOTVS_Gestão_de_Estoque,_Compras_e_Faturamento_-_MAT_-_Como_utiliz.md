# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como utilizar editor de fórmulas no auxilio ao cadastro desta

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000580387-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-utilizar-editor-de-f%C3%B3rmulas-no-auxilio-ao-cadastro-desta](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000580387-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-utilizar-editor-de-f%C3%B3rmulas-no-auxilio-ao-cadastro-desta)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
> **Data:** 10 de abril de 2025 às 09:18

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:05:00min**

**Dúvida**Como identificar a sintaxe de funções de fórmula e aplicabilidade destas?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**
Toda função é composta por um código e quando há parênteses () em sua sintaxe haverá então uma passagem de parâmetros (valores a serem utilizados na função).

Neste exemplo utilizaremos a função **TABITMCUSTOMOVRELAC**. A função em questão tem o objetivo de buscar no movimento relacionado o valor unitário (custo médio) do item de movimento em questão.

1\. No editor de fórmulas ao selecionar a função e dar um duplo clique sobre esta, o sistema irá lhe apresentar um assistente de utilização da função:

![Imagem](https://totvssuporte.zendesk.com/attachments/token/QEKHGw3rNaFMZxg387ngontXu/?name=inline1512283647.png)

2\. Ao clicar sobre o primeiro parâmetro esperado o sistema apresentará no campo **Descrição** qual a informação desejada para este parâmetro, permitindo assim determinar como passar tal parâmetro e entender a lógica que a função segue:

![Imagem](https://totvssuporte.zendesk.com/attachments/token/ns1xPcb1MkucZjMmhvCSue3U1/?name=inline579969485.png)

3\. Através do campo **Valor do Parâmetro** é possível verificar o tipo de informação que pode ser utilizada para utilizar a função, sendo assim basta clicar para expandi-lo a fim de ter uma ideia de como passar o dado solicitado pelo parâmetro:

![Imagem](https://totvssuporte.zendesk.com/attachments/token/dQD5sDJpOuQpb8tfjnHMkGnPz/?name=inline695608437.png)

4\. No caso deste parâmetro como a função em si não possui uma tabela específica no banco de dados (a **TABITMMOV** tem a tabela **TITMMOV**, esta em questão é um select em mais de uma tabela por isso não tem tabela específica), para buscarmos o **IDMOV** a ser consistido na função deveremos buscar outra função de fórmula que no caso será a **TABITMRELACPED** (busca dados do movimento relacionado onde passaremos como parâmetro o campo IDMOV com o **tipo I de inteiro**) diferentemente da função principal esta solicita como passagem de parâmetro o campo propriamente dito e não outra função:

![Imagem](https://totvssuporte.zendesk.com/attachments/token/kZGVQrs3F4rAhP6l7hDPgQvlz/?name=inline2017517642.png)

5\. Seguindo o mesmo princípio informado nos passos anteriores podemos identificar que o segundo parâmetro esperado é o **NSEQITMMOV** **(numero sequencial)** do item de movimento a ser averiguado pela função. Esta informação também será carregada através de outra função de fórmula que também será a TABITMRELACPED:

![Imagem](https://totvssuporte.zendesk.com/attachments/token/bWFUDWDAqf1YzOo5RTAtwtKZu/?name=inline104590037.png)

6\. Após preencher todos os parâmetros esperados pela função clique em ok e a função terá sido criada em sua fórmula:

![Imagem](https://totvssuporte.zendesk.com/attachments/token/ZOg7JdwqE9aBxmn5BxCrkMXM9/?name=inline745969895.png)
​

Utilize sempre esta lógica e conseguirá identificar como utilizar qualquer função no sistema.

Para auxílio na realização do teste de fórmula, [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409688488343-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-fazer-teste-de-f%C3%B3rmula?source=search).
