# Contabilidade (Parâmetros de Integrações)

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938212](https://tdn.totvs.com/pages/releaseview.action?pageId=423938212)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Habilita Evento Contábil:**

-   Não Utiliza evento.
-   Utiliza Evento da Natureza: Por esta opção o evento contábil será buscado diretamente na Natureza, caso não exista, buscará o evento informado no tipo de movimento.
-   Utiliza Evento do Tipo de Movimento: Por esta opção o evento contábil será buscado diretamente no tipo de movimento.
-   Utiliza Evento da Natureza Inversa: Por esta opção o evento contábil será buscado diretamente na Natureza Inversa do movimento, caso esta não exista buscará o evento informado no tipo de movimento. A utilização desta opção poderá ser feita em movimentos de transferência que geram a partir de um movimento uma entrada e uma saída sendo que um utiliza a Natureza realmente indicada no movimento e o outro a Natureza Inversa.

**Edição da Contabilização:**

-   Edita: O sistema dará acesso à contabilização do movimento e o usuário poderá efetuar qualquer alteração que for necessária.
-   Mostra: A contabilização somente será mostrada ao usuário sem que seja possível a alteração na mesma.

**Contabilização Obrigatória:** Marcando esta opção o movimento só poderá ser salvo após ser indicado um evento contábil.

**Evento Default:** Informe qual evento contábil para este tipo de movimento, estes eventos já deverão estar cadastrados através do menu Cadastro/Contabilidade/Eventos Contábeis.
***Observação**:* Se o campo acima estiver marcado, não será permitida exclusão da contabilidade do movimento.

**Código do Lote Contábil:** Informe qual o código do lote contábil.

**Código do Lote para Estorno:**

-   Informe neste campo o código do lote contábil que guardará os lançamentos estornados.
-   O sistema permite que um movimento cuja contabilização já tenha sido integrada pelo TOTVS Gestão Contábil possa ser alterada, portanto isto gera um estorno contábil e portanto, para cada tipo de movimento você poderá indicar um lote de estorno.
-   No menu Movimentos, para aqueles que têm a contabilização ativa, haverá a opção de menu Estornar a Contabilidade. Ao selecionar um movimento e acioná-la, o sistema gerará no lote de estorno indicado a contrapartida dos lançamentos contábeis anteriores, que já estão no lote de integração, e apagará a contabilidade no TOTVS Gestão de Estoques, Compras e Faturamento possibilitando alterar e gerar nova contabilização para o movimento. 

***Observações**:* O estorno é feito nota a nota. Não é registrado histórico dos lançamentos estornados. Eles passam a pertencer somente ao TOTVS Gestão Contábil. No contra partida, as contas de débito com os respectivos valores passam a ser crédito e vice-versa.

**Tipo de Contabilização:**

-   Nota por Nota: informe se a contabilização deverá ser efetuada nota por nota.
-   Por Total Diário: informe se a contabilização deverá ser feita pelo total lançado no dia para este tipo de movimento, desta forma, todos os lançamentos efetuados no dia serão somados e contabilizados em um único lançamento contábil.
