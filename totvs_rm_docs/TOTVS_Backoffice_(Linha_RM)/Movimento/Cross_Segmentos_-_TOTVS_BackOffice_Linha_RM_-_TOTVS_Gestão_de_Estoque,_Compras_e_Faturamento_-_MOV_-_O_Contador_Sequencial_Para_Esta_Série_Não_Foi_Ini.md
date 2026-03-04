# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - O Contador Sequencial Para Esta Série Não Foi Inicializado

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034890254-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-O-Contador-Sequencial-Para-Esta-S%C3%A9rie-N%C3%A3o-Foi-Inicializado](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034890254-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-O-Contador-Sequencial-Para-Esta-S%C3%A9rie-N%C3%A3o-Foi-Inicializado)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 22 de abril de 2025 às 12:13

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/24319941011095)**Tempo aproximado para leitura: **00:02:00min**

**Ocorrência
**Ao tentar salvar um **Movimento** ocorre a mensagem: **O Contador Sequencial Para Esta Série Não Foi Inicializado. Vá em Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Numeração do Movimento > Numeração Geral para fazê-lo.**

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360046231713)


**Ambiente
**Cross Segmentos - TOTVS BackOffice (Linha RM) – TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.

**Causa
**Essa mensagem ocorre pois o contador da série utilizada na inclusão do movimento ainda não foi inicializado nos parâmetros do módulo, portanto ainda não existe um sequencial para definir automaticamente o Número do Movimento.

**Solução
**Para resolver o incidente deverá seguir os seguintes procedimentos:

1.  Acessar menu **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | localizar o tipo de movimento que está incluindo** e identificar a **Série** utilizada, contida na etapa **Mov - Identificação**. Confira o preenchimento do campo **Buscar Número Em**, onde as opções disponíveis são **Geral** ou **Filial**.
    Se tiver dúvidas sobre como acessar os parâmetros do tipo de movimento, **[clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691)**.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24320240938775)

2\. Acessar os parâmetros do **Gestão de Estoque, Compras e Faturamento novamente | Parâmetros Gerais | Numeração de Movimento,** selecionar o nível do contador Geral ou Filial, de acordo com o parâmetro **Buscar Número Em** e informar a Série, definir o valor inicial para o contador, por exemplo 1, e salvar os parâmetros.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24319941025815)

3\. Caso utilize **Segundo Número** no movimento, acessar os parâmetros do **Gestão de Estoque, Compras e Faturamento | Parâmetros Gerais | Numeração de Movimento | Segundo Número |** informar a Série, definir o valor inicial para o contador, por exemplo 1, e salvar os parâmetros.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24320240949271)
