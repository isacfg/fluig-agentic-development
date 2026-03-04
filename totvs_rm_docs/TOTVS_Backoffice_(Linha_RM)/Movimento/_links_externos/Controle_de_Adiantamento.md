# Controle de Adiantamento

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/Controle+de+Adiantamento](https://tdn.totvs.com/display/public/LRM/Controle+de+Adiantamento)
> **Domínio:** TDN (TOTVS Developer Network)

---





FAQ: **Controle de Adiantamento**

Avaliação

-   ***Como Fazer***

Como parametrizar o sistema para utilizar Controle de Adiantamento Financeiro?

-   ***Definição do Processo***

O processo tem por finalidade geração de lançamento financeiro para o Totvs Gestão Financeira, com valor já pago ou recebido a título de adiantamento no momento da efetivação do pedido.

Solução

-   ***Parametrizações Necessárias***

**Acessar | Cadastro | Fórmula | Inserir | e cadastrar fórmula que será utilizada para geração do lançamento financeiro.**

**Exemplo****: MVB**

Acessar | **Cadastro | Tabelas Auxiliares | Tipo de Documento |** e incluir tipo de documento específico para este fim, onde deverá informar | **Classificação : Adiantamento |**

Acessar | **Opções | Parâmetros | RMNucleus |** e selecionar processo onde o tipo de movimento a ser utilizado para este fim foi configurado. A seguir editar o mesmo e informar:

\- Emitente: Fornecedor

\- Edição da Filial de Emissão: informar “Edita” para permitir que o usuário preencha os dados da filial, ou “Mostra” se quiser deixar um default preenchido

\- Edição do Local de Emissão: informar “Edita” para permitir que o usuário preencha os dados da filial, ou “Mostra” se quiser deixar um default preenchido

\- Destinatário: Empresa

\- Edição do Local de Destino: informar “Edita” para permitir que o usuário preencha os dados da filial, ou “Mostra” se quiser deixar um default preenchido (Parametrização para pedidos de compras – 1.1.XX)

**Etapa Compras / Vendas**

Gera Movimento de Compra: Habilitar

(Parametrização para pedidos de compras – 1.1.XX)

Opção de Faturamento: definir forma de faturamento do pedido

Lançamentos no Faturamento após Geração: informar qual efeito do lançamento de pedido ao faturar movimentação. Se o movimento de destino gerar financeiro deve ser habilitada opção | Cancelar ou Excluir | para evitar duplicidade de lançamentos no Totvs Gestão Financeira.

(Neste exemplo será informado “Excluir”)

**Etapa Fin – Condição de Pagamento**

Edita Condição de Pagamento: Edita

Utiliza Edição de Meios de Pagamentos: Desabilitar

**Etapa Fin – Faturamento**

Fatura o movimento: Habilita

Tipo de Geração: Edita

Tipo de Documento Gerado: Outros

Tipo de Documento Duplicata: informar local de onde será buscado tipo de documento a ser considerado para este fim. Se escolher a opção “Utiliza do Tipo de Movimento” será apresentado campo **| Tipo de Documento Duplicata Default** | para informar o tipo de documento, caso contrário será consistido código do tipo de documento informado no cadastro do cliente \\ fornecedor preenchido no movimento.

Tipo de Documento Duplicada Default: informar o tipo de documento que será utilizado neste tipo de movimento

Numeração do Lançamento: informar se deseja utilizar “número do movimento + sequencial” ou apenas “sequência”

Gerar Lançamentos: A Pagar

Vencimento a Partir: informar qual data preenchida no movimento será considerada para compor data de vencimento no financeiro

Data de Emissão: informar qual data preenchida no movimento será considerada para compor data de vencimento no financeiro

(Parametrização para pedidos de compras – 1.1.XX)

Fórmula de Valor a Ratear: informar código de fórmula que retorna valor financeiro(original). É necessário que a fórmula em questão possua variáveis de “movimento”

Adiantamento – Controle de Adiantamento: informar tipo de controle que será feito na movimentação em termos de adiantamento. Neste caso específico será informado **“Controlar Adiantamento”**.

Tipo de Documento: informar tipo de documento cadastrado anteriormente com classificação “Adiantamento”. Este tipo de documento será considerado para geração do lançamento em questão.

Serão apresentadas 03 opções de adiantamento com particularidades distintas:

\- Não Controla: o tipo de movimento em questão não utiliza adiantamento.

\- Controlar Adiantamento: movimentações inclusas neste tipo de movimento vão controlar adiantamento, fazendo com que seja gerado um lançamento financeiro, obedecendo condição de pagamento informada no movimento e um lançamento de adiantamento na data de emissão do movimento.

\*\*Ao faturar pedido, o lançamento de adiantamento será mantido no Totvs Gestão Financeira para que seja feito vínculo entre os lançamentos relacionados, e os lançamentos financeiros excluídos ou cancelados (obedecendo parametrização do tipo de movimento).

\- Gera apenas Adiantamento: movimentações inclusas neste tipo de movimento vão controlar apenas adiantamento, ou seja, será gerado um lançamento financeiro apenas com valor de “adiantamento” informado na aba “Cabeçalho”. Este lançamento vai considerar data de emissão do movimento.

\*\*Ao faturar pedido, o lançamento de adiantamento será mantido no Totvs Gestão Financeira para que seja feito vínculo entre os lançamentos relacionados.

-   ***Descrição do Processo - Totvs Gestão de Estoque, Compras e Faturamento***

A inclusão do movimento de pedido será feito como de costume, tendo como particularidade o preenchido do campo **| Adiantamento |** apresentado na aba **| Cabeçalho |** do movimento.

O exemplo abaixo vai considerar parametrização “Contralar Adiantamento”, com os dados: Emissão: 09/07/2010

Condição de Pagamento: 30/60/90 dias

Valor do Movimento:             9.000,00

Valor do Adiantamento:        6.000,00

Dados do Lançamento financeiro:

**Emissão            Valor             Vencimento             Tipo de Documento**

09/07/2010      6.000,00         09/07/2010                16(adiantamento)

09/07/2010      1.000,00         09/08/2010               01(nota fiscal)

09/07/2010      1.000,00        09/09/2010               01(nota fiscal)

09/07/2010      1.000,00        09/10/2010               01(nota fiscal)

Ao faturar movimento de pedido, os lançamentos financeiros(tipo de documento :01) gerados serão excluídos(conforme parametrização definida pelo usuário), sendo mantido apenas lançamento vinculado ao tipo de documento(16) de “adiantamento”.

Os lançamentos do movimento destino serão gerados sem restrição, obedecendo condição de pagamento referenciada no movimento.

-   ***Descrição do Processo - Totvs Gestão Financeira***

O vínculo entre o adiantamento e o(s) lançamento(s) será feito no aplicativo Totvs Gestão Financeira, onde o usuário deverá inicialmente “baixar” o lançamento de adiantamento, e a seguir fazer o relacionamento entre os mesmos, tendo as opções:

***1ª OPÇÃO***

Selecionar lançamento de “Adiantamento” e clicar no menu **| Operações | Vincular | Adiantamento a Lançamentos |**. A partir daí, será apresentada janela **| Adiantamento a Lançamentos |** onde o usuário deve selecionar o(s) lançamento(s) desejado(s) na opção **| Lançamentos Não Vinculados |** e clicar no ícone | [
![clip_image002](https://lh4.ggpht.com/_G7KXZLoZDsY/TKs374Nx_3I/AAAAAAAABpY/ozvWi5YP8TM/clip_image002_thumb.jpg?imgmax=800)
](https://lh5.ggpht.com/_G7KXZLoZDsY/TKs37BLBtAI/AAAAAAAABpU/bL7YMn1-GwE/s1600-h/clip_image002%5B4%5D.jpg)Vincular o(s) lançamento(s) selecionado(s) | ou | [
![clip_image004](https://lh5.ggpht.com/_G7KXZLoZDsY/TKs38_U-AXI/AAAAAAAABpg/Cpndul0ifMM/clip_image004_thumb.jpg?imgmax=800)
](https://lh6.ggpht.com/_G7KXZLoZDsY/TKs38OpqUcI/AAAAAAAABpc/JXkfWRwIQUo/s1600-h/clip_image004%5B4%5D.jpg) Vincular Todos |.

***Funcionalidade***

Se o valor do(s) lançamento(s) vinculado(s) ultrapassar o valor do adiantamento, o sistema realiza o “vínculo parcial”, ou seja, ao baixar o (s) lançamento (s) o sistema vincula o valor do adiantamento e baixa o valor do(s) lançamento(s) que ultrapassou o adiantamento, gerando um extrato de caixa para o mesmo.

***2ª OPÇÃO***

Selecionar lançamento e clicar no menu **| Operações | Vincular | Lançamento a Adiantamentos |**. A partir daí, será apresentada janela **| Lançamento a Adiantamentos |** onde o usuário deve selecionar o adiantamento desejado na opção **| Lançamentos Não Vinculados |** e clicar no ícone | [
![Imagem](https://lh5.ggpht.com/_G7KXZLoZDsY/TKs3-7te6iI/AAAAAAAABpo/Yb6-eO4cNY4/clip_image002%5B1%5D_thumb.jpg?imgmax=800)
](https://lh3.ggpht.com/_G7KXZLoZDsY/TKs3-O6fA7I/AAAAAAAABpk/XVWVOtcJEHE/s1600-h/clip_image002%5B1%5D%5B2%5D.jpg)Vincular o(s) lançamento(s) selecionado(s) | ou | [
![Imagem](https://lh3.ggpht.com/_G7KXZLoZDsY/TKs4AG5Py0I/AAAAAAAABpw/NCcqFs1udsM/clip_image004%5B1%5D_thumb.jpg?imgmax=800)
](https://lh4.ggpht.com/_G7KXZLoZDsY/TKs3_ZwrkMI/AAAAAAAABps/dktYrE6IF4A/s1600-h/clip_image004%5B1%5D%5B2%5D.jpg) Vincular Todos |.

No momento da baixa do lançamento, ao deixar o campo **| Informar dados somente uma vez |** ”desabilitado” será apresentada mensagem **| Deseja Alterar a vinculação atual de Adiantamento deste lançamento? Caso contrário, será mantido o vínculo existente, caso ele exista.|** Ao informar “Não” o vínculo será mantido, sendo apresentada tela **| Baixa de Lançamentos |** com os valores pertinentes lançamento, adiantamento, baixa.... A partir daí, clicar em **| OK |** para concluir o processo de baixa.

***Funcionalidade***

Se o valor do adiantamento ultrapassar o valor do lançamento, será apresentada tela **| Baixa Parcial do Adiantamento |** onde o usuário informará se o valor excedente deve gerar um lançamento financeiro a pagar ou a receber, assim como, o tipo de documento e data de vencimento do mesmo.

Se tratando de lançamento a “Receber” será apresentada opção | Lançamento de Nat. Invertida já Baixado | para o usuário habilitar de acordo com a necessidade.

-   ***Informações Adicionais***

Maiores informações sobre vínculo entre adiantamento e lançamento, assim como, os dados de lançamentos a receber ou a pagar e extrato serão esclarecidos e orientados junto ao suporte do aplicativo Totvs Gestão Financeira.

Para maiores informações:

Consulte o [WikiHelp TOTVS](http://wikihelp.totvs.com.br/WikiHelp/Rpt/Rpt.Reports.aspx)



 **[
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/61934230/image2013-6-10%2015%3A3%3A33.png?version=1&modificationDate=1370887580000&api=v2)
](https://www.byyou.com/static/resources/hotsite/index.html) COMUNIDADE  **[R@Materiais e Finanças](https://totvs.byyou.com/?space=rmateriais)****

**Canais de Atendimento:
**

**Chamado:** Através do Portal Totvs [www.suporte.totvs.com.br](http://www.suporte.totvs.com.br/)

**Telefônico:** 4003-0015
