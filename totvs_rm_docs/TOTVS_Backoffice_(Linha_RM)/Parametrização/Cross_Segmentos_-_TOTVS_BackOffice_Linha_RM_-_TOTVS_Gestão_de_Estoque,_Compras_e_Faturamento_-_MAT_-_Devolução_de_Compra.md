# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Devolução de Compra

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360060744853-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Devolu%C3%A7%C3%A3o-de-Compra](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360060744853-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Devolu%C3%A7%C3%A3o-de-Compra)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 20 de junho de 2022 às 15:07

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:05:00 min****Dúvida
**Como realizar **Devolução de Compra**?

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**A Devolução de mercadoria se refere a anulação de um procedimento de compra realizado junto á um fornecedor. A devolução pode ser feita considerando todos os itens do movimento ou parte deles, onde será afetado tanto o saldo financeiro quanto o saldo físico. 

1\. Acessar **Cadastros | Financeiros | Mais... | Tipo de Documento**:

**
![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4409682320919/mceclip0.png)

**

Incluir um **Tipo de Documento** específico para este fim onde deverá informar **Classificação: Devolução** e **Pagar ou Receber: A pagar e A receber:
**

**
![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4409677235351/mceclip1.png)
**

2\. Acessar **Ambiente | Parâmetros | Gestão de Estoque Compras e Faturamento** e selecionar o tipo de movimento 2.2.XX a ser parametrizado para este fim. 

![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4409677301143/mceclip2.png)

3\. **Etapa Mov - Emitente/Destinatário 1/2:**

Emitente: Empresa

Edição da Filial de Emissão: informar Edita para permitir que o usuário preencha os dados da filial, ou Mostra se quiser deixar um default preenchido

Edição do Local de Emissão: informar Edita para permitir que o usuário preencha os dados da filial, ou Mostra se quiser deixar um default preenchido

Destinatário: Fornecedor

**Etapa Mov - Emitente/Destinatário 2/2:**

Edição do Cliente \\ Fornecedor: Edita

**Etapa Mov - Datas 1/2:**

Data do Movimento Default: informar qual será a data considerada para afetar estoque e apresentação dos dados da ficha física financeira.

**Exemplo:** Se for informado Data Emissão significa que as movimentações vão afetar estoque de acordo com a data de emissão apresentada na inclusão do movimento

**Observação:** Se o movimento realizar escrituração, o mesmo deve possuir Data de Entrada e Data de Saída.

**Etapa Mov - Outros Dados:**

Usar Cópia de Movimento por Referência: Habilitar

Motivo de Referência: 4 – Devolução de Compra de Mercadorias


**Etapa Item - Lote/Grade/Num.Série:**

Aceita Número de Série: Habilitado

Editar Grade Numerada: Habilitado

Consiste lote: Habilitado |

Status de Lote Movimentados: marcar os status de lotes que poderão ser utilizados neste tipo de movimento

**A parametrização acima é obrigatória para tipos de movimentos que afetam Saldo 2.**

**Importante:
**O saldo Atual está sendo habilitado para diminuir porque a movimentação de compra inclusa anteriormente aumentou o saldo do produto em estoque.

Por se tratar de uma movimentação de devolução o custo de saída da mercadoria geralmente é o mesmo da movimentação de entrada para que a informação financeira não fique distinta.

Para isto deve estar habilitada opção **Buscar custo no movimento relacionado** na **etapa Estoque - Custo** dos parâmetros do Tipo de Movimento de forma que, o custo do produto no movimento de devolução seja o mesmo custo apresentado na movimentação de compra relacionado a esta devolução.

Neste caso, o estoque será afetado considerando **Quantidade do movimento x Fator de conversão da unidade x Valor do custo buscado no movimento relacionado**.

**Etapa Fin - Condições de Pagamento:**

Edita Condição de Pagamento: Edita

**Etapa Fin - Faturamento 1/6:**

Fatura o movimento: Habilita

Fatura na Inclusão: Habilita

Tipo de Geração: Edita

Tipo de Documento Gerado: Outros

Tipo de Documento Duplicata: informar o local de onde será buscado tipo de documento a ser considerado para este fim. Se escolher a opção “Utiliza do Tipo de Movimento” será apresentado campo **Tipo de Documento Duplicata Default** para informar o tipo de documento, caso contrário será consistido código do tipo de documento informado no cadastro do cliente\\fornecedor preenchido no movimento.

Tipo de Documento Duplicada Default: informar o tipo de documento que será utilizado neste tipo de movimento.

Numeração do Lançamento: informar se deseja utilizar “número do movimento + sequencial” ou apenas “sequência”.

**Observação:** **A parametrização acima é obrigatória para o tipo de movimento que gera financeiro**, as etapas Fin - Faturamento 1/6, 2/6, 3/6, 4/6, 5/6, 6/6 devem ser parametrizadas.


**Etapa Fis - Escrituração 1/2:**

Gerar Escrituração: Habilitar

Tipo de Documento Escrituração: informar o tipo de documento que deve ser apresentado no Totvs Gestão Fiscal.

**Etapa Fis - Escrituração 2/2:**

\- Tipo do Lançamento Fiscal da Transferência: Saída

**A parametrização acima é obrigatória para o tipo de movimento que vai gerar escrituração.

**4\. Parametrização no módulo Totvs Gestão Fiscal

Acessar **Contexto | Filial** e escolher a filial onde a movimentação será inclusa.

![mceclip4.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4409689935383/mceclip4.png)

Acessar **Cadastro | Fiscais | Natureza Fiscal** onde deverá incluir duas naturezas compatíveis com os dados das movimentações a serem inclusas:

Uma Natureza Fiscal de Entrada Transferência de dentro ou fora do Estado (de acordo com a necessidade da operação).

Uma Natureza Fiscal de Saída Transferência para dentro ou fora do Estado (de acordo com a necessidade da operação).

Depois de incluir as naturezas, deve editar natureza de operação de entrada que será utilizada na devolução e acessar a aba **Outros Dados** onde deve informar **Tipo de Devolução: Devolução**.

![mceclip5.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4409689950615/mceclip5.png)

**Descrição do Processo:
**O usuário deverá acessar movimento parametrizado para este fim e clicar no menu **Processos | Assistente de Cópia por Referência** onde será aberta tela:

![mceclip6.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4409683454615/mceclip6.png)

![mceclip7.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4409689970839/mceclip7.png)

Nesta tela o usuário deve clicar em **Avançar** e fazer filtro da movimentação que deseja devolver.

Depois de feito filtro deverá marcar o movimento e clicar em **Avançar** para visualizar os itens pertinentes ao mesmo. Neste momento o usuário deve marcar os itens que deseja devolver e clicar em **Avançar** novamente para concluir o processo de cópia por referência.

A seguir os dados serão apresentados no movimento de devolução podendo ser alterado pelo usuário se necessário. A devolução pode ser feita sobre a quantidade integral do item ou não.

**Informações Adicionais
**Para visualizar o relacionamento entre o movimento de origem e de destino deve acessar o movimento de devolução (destino) e clicar na aba **Cópia por Referência** onde vai visualizar todas informações do movimento de origem.

![mceclip8.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4409684403863/mceclip8.png)

Para visualizar os dados de devolução através do movimento de origem, deve selecionar o mesmo e clicar no ícone **Rastreamento de Movimentos** onde será apresentada aba **Devolução** com as informações do movimento de destino.

![mceclip9.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4409684612631/mceclip9.png)

**Importante
**Produtos controlados por lote não poderão ter seu lote alterado no momento da devolução, uma vez que quando se trata de empréstimo e devolução o lote a ser devolvido deve ser o mesmo que fez parte do empréstimo.

Caso seja necessário alterar o lote a ser devolvido recomendamos que não utilize o processo de Devolução, mas sim uma entrada comum e uma saída comum, havendo necessidade de relacionamento entre os movimento utilize o motivo de referência 20 (cópia simples com relacionamento).

O fato de incluir um movimento de devolução não irá reabrir o movimento devolvido para novo faturamento. Portanto caso seja necessário devolver para correção de nota a nova nota deverá ser gerada a partir de um novo pedido.
