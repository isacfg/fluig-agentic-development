# Parâmetro de Orçamento

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=461922032](https://tdn.totvs.com/pages/releaseview.action?pageId=461922032)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Editar Natureza Orçamentária/Financeira do item:**

-   Não Edita: Fica indisponível.
-   Edita: se esta natureza deverá ser utilizada e informada no momento da inclusão do movimento.
-   Edita Obrigatoriamente: a natureza deverá ser informada.
-   Mostra: se esta deverá ser utilizada, mas não poderá ser editada.

***Observações**:*

-   O movimento que será configurado para efetuar o Orçamento terá as seguintes consistências:
-   Para Utilizar o Controle orçamentário por item, o campo “Não agrupar quantidades de itens iguais” deve ser marcado. Pasta integração Compras /Outras opções dos parâmetros do tipo de movimento.
-   Para utilizar o controle orçamentário o centro de custo do item deve ser editado.
-   Pasta Tabelas/Itens dos parâmetros do tipo de movimento.
-   Quando o tipo de movimento estiver parametrizado para controlar orçamento, todos os parâmetros do Orçamento devem ser preenchidos.

**Controla orçamento:** Se o campo estiver marcado, os campos abaixo ficarão disponíveis.

**Efeito no Orçamento:** 

-   Nenhum Efeito: Os movimentos deste tipo não terão nenhum efeito sobre o valor orçado.
-   Aumenta Orçado: Os movimentos deste tipo aumentarão o valor do orçamento. É este que terá o seu valor controlado. Portanto, a opção “aumenta o orçado” geralmente é utilizada nos movimentos do tipo 4, pois, é através deste que serão informados os valores orçados e a partir dele é que o sistema faz o controle.
-   Diminui o Orçado: Os valores de tipos de movimentos com esta opção, irão diminuir o valor orçado.
-   Aumenta Realizado: O valor realizado é aquele que será comparado ao orçado para o controle do orçamento. Movimentos com este efeito sobre o orçamento aumentará o valor real e se este ultrapassar ao valor orçado, o sistema poderá avisar ou barrar a inclusão do movimento dependendo do que foi informado no campo “Efeito no Orçamento”. Exemplo*:* 

Vamos supor que o valor orçado de um movimento é 4.000,00, ao incluir um movimento de compra cujo efeito no orçamento é “Aumenta Realizado” no valor de 1.000,00 o sistema guardará:

Valor Orçado

Valor Realizado

Valor Orçado

Valor Realizado

4.000,00

 1.000,00

Se incluir outra compra no valor de 3.500,00 o sistema guardará:

Valor Orçado

Valor Realizado

Valor Orçado

Valor Realizado

4.000,00

 4.500,00

Caso esteja informado no campo “Ação ao exceder Orçamento” para avisar quando ultrapassar o valor orçado, o sistema emitirá uma mensagem que o valor está ultrapassado. Se parametrizou para barrar quando ultrapassar, o sistema irá barrar a inclusão do movimento e emitirá uma mensagem que o valor orçado foi ultrapassado.

**Ação ao Exceder Orçamento:** Quando um movimento for afetar o orçamento e não possuir verba suficiente para o valor solicitado, podem ser configuradas três ações sobre esse movimento:

-   Avisa: Uma mensagem é emitida sobre o valor excedente do orçamento, e o movimento é criado com status “Pendente”.
-   Barra: Uma mensagem é emitida sobre o valor excedente do orçamento, e não permite salvar o movimento.
-   Bloqueia: Uma mensagem é emitida sobre o valor excedente do orçamento, e o movimento criado com o status “Bloqueado”. Com esse status o movimento fica aguardando que seja liberado pelo assistente de realocação orçamentário, e não pode ser recebido para outro tipo de movimento enquanto estiver bloqueado.

***Observação**:* O controle orçamentário por tipo de movimento (controle financeiro) considera como valor orçado o “valor líquido” do movimento. No caso de controle orçamentário físico (por produto ou alguma tabela opcional) o valor orçado é definido pela “a quantidade x preço”.

**Data Default do Orçamento:**

-   Data de Emissão: o campo será preenchido com a data de emissão do movimento.
-   Data de Entrada/Saída: deverá ser igual a data de entrada/saída.
-   Data Extra 1/2: Se desejar utilizar outras datas para algum outro controle, pode-se utilizar estas duas, os campos a preencher são os mesmos descritos acima em “Data de Entrada”.

Exemplo*:* No movimento do tipo de “Ordem de Fornecimento”, podemos criar uma data com o nome de “data orçamento”, e parametriza para buscar esta data na data de emissão do movimento.

**Utiliza Rateio no Orçamento:** Informe como será o rateio no orçamento. As opções são: Não utiliza, Utiliza no Movimento e Utiliza no Item.

***Observações**:*

-   O sistema não permite a alteração do parâmetro que utiliza rateio se já tiver incluído algum movimento.
-   Se o usuário escolher que vai utilizar o rateio no orçamento, ele irá consistir se o parâmetro de rateio esta marcado.
-   O rateio do movimento pode ser por valor ou quantidade, o sistema irá fazer uma proporção da Quantidade X Valor Unitário do Orçamento (Fórmula) e irá aplicar no rateio selecionado.

**Fórmula do valor unitário do orçamento:** Informe a fórmula que irá calcular o valor unitário do orçamento.
