# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Tipos de Produtos para Faturamento no Contrato

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/23401211365783-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Tipos-de-Produtos-para-Faturamento-no-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/23401211365783-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Tipos-de-Produtos-para-Faturamento-no-Contrato)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 19 de fevereiro de 2025 às 15:00

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/23401211310487)
 Tempo aproximado para leitura: **00:02:00 min
****
Dúvida**Como Criar Tipos de Produtos para Faturamento no Contrato?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.


**Solução**

Por esta opção serão cadastrados os tipos de produto para faturamento. Essas informações são utilizadas em conjunto com o Tipo de produto por Filial para o cálculo de tributos no movimento.
Exemplos: Produto (venda), serviço de manutenção, serviço de instalação

Para cadastrar, acesse o Menu Contratos > Tabelas de Contratos > Tipos de Produtos para Faturamento:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23401211311383)

Descrição dos Campos:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23401211312663)

**Tabela:** TTIP

**Código**: Informe o código do tipo.
**Descrição**: Informe a descrição para o tipo de produto para faturamento.
**Sigla Série**: Informe a sigla para o tipo, exemplo:

-   SM (para o tipo "serviço de manutenção"),
-   SI (para "serviço de instalação),
-   PV (para "produto de venda"), etc.

**Campo Livre**: Este campo é destinado para qualquer informação adicional que desejar registrar para o tipo incluído.
**Comissão**: Informe, se desejar, o percentual de comissão para o tipo de produto.
**Cont. Número Série**: Informe o número inicial para ser o contador do número de série para os produtos do contrato.
**Incremento Número Série**: Marque esta opção se deseja que o número de série do item do contrato seja incrementado, ou seja, para cada item incluído no contrato, o número de série será acrescido de 1, de acordo com o número inicial indicado no campo anterior, sendo que nos parâmetros do contrato, que são determinados através do menu Opções/Parâmetros/Contratos, precisa ser indicado que o número de série será sequencial.
**Incremento Número Coligada**: Informe se deseja que o sistema também incremente o número da coligada no número de série do item do contrato.

O campo será apresentado no contrato apenas se estiver habilitado nos parâmetros.

Menu Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Contratos > Definições Gerais > habilite a flag Tipo prod. p/faturamento:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23401248053399)

Campo no Contrato:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23401211316247)

**OBSERVAÇÃO:**

1.  Os campos "Incremento Número Série" e "Incremento Número Coligada" só poderão ser acessados se nos parâmetros do contrato, você optou por utilizar número de série sequencial.
2.  Só será permitida a exclusão de tipos que não estão sendo utilizados por algum contrato.


**COMPLEMENTAR:**

Esse cadastro pode ser definido para cada produto cadastrado no sistema como um default, acessando o cadastro do item, aba Integração > Tipo para Faturamento:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23401211317271)
