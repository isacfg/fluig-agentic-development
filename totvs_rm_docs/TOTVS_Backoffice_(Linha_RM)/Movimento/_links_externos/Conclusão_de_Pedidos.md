# Conclusão de Pedidos

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938174](https://tdn.totvs.com/pages/releaseview.action?pageId=423938174)
> **Domínio:** TDN (TOTVS Developer Network)

---

Com a utilização da rotina de Faturamento Parcial, o Usuário se vê, em certas situações, na necessidade de que este Pedido não seja mais Faturado. Isto pode ocorrer por situações corriqueiras dos processos da empresa como: indisponibilidade do material no Fornecedor, insatisfação na entrega, falta de espaço no transporte ou no armazenamento, dentre outras. Por conta das rotinas de Recebimento de Materiais, este processo alterará a Quantidade dos Itens que ainda estão pendentes de recebimento para 0 (zero), como se todos eles já estivessem sido 'recebidos'.

É possível rastrear a execução do processo (Data, Motivo da Conclusão e Usuário Responsável) consultando a tabela TMOTIVOCONCLPED no banco de dados ou em menu Gestão > Visões de Dados, utilizando a consulta abaixo:

SELECT \* FROM TMOTIVOCONCLPED WHERE IDMOV = X AND CODCOLIGADA = Y
Onde:
X = Identificador do Movimento
Y = Código da Coligada

SELECT \* FROM TMOTIVOCONCLPED WHERE IDMOV = X AND CODCOLIGADA = Y
Onde:
X = Identificador do Movimento
Y = Código da Coligada

Além disso, a quantidade concluída de cada item ficará gravada na tabela de Itens de Movimento (TITMMOV), campo QUANTIDADECONCLUIDA.

Para o correto funcionamento desse processo, alguns pré-requisitos devem ser cumpridos:

-   O movimento deve ter seu status igual a Parcialmente Faturado, Pendente ou Bloqueado.

O sistema também faz diversas verificações a fim de validar os dados não só do(s) Movimento(s) em questão, mas também suas dependências/ integrações com outras rotinas. Vale lembrar que essas validações somente serão consistidas em movimentos daquele contexto (no que diz respeito à parametrização). Integrações que poderão ser validadas:

-   Portal Paradigma (mais informações [aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=423937972));
-   Reserva (mais informações [aqui](https://tdn.totvs.com/pages/releaseview.action?pageId=423938132));
-   Financeiro (mais informações [aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=423938167));
-   Orçamento (mais informações [aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=440840394));
-   Imobilizado (mais informações [aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=423938845)).
-   Projeto (mais informações [aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=423938857)).

Status do Registro

Após a execução do processo, o **Status de Conclusão** (campo STSCONCLUIDO, tabela TMOV) será preenchido com um valor de forma a sinalizar quais movimentos foram submetidos ao mesmo.

Este campo pode conter os seguintes valores:

-   Parcialmente concluído (**P**): Nem todos os itens foram completamente concluídos;
-   Concluído (**C**): O movimento foi completamente concluído;
-   Vazio: O processo responsável pela conclusão de pedidos não foi executado para este movimento.

Após a conclusão de todos os itens do movimento, seu **Status** será alterado para Recebido/Faturado.

Com esta nova rotina, os Usuários passam a contar com uma ferramenta importante no processo de gestão de Compras/Vendas, agilizando as rotinas de entrega/recebimento de materiais, mantendo toda a documentação do que é executado dentro do sistema.

Atenção!

-   A execução deste processo é irreversível e não excluirá as integrações do movimento, como Contabilização ou Lançamentos Financeiros gerados com tipos de documento classificados como **Adiantamento**. Os lançamentos financeiros classificados como Previsão ou Sem Classificação serão excluídos após a conclusão do pedido.
-   O movimento concluído não estará disponível para continuar o faturamento e o movimento que o originou não voltará a ficar com status pendente.
-   Os itens que forem concluídos terão as quantidades estornadas, caso o tipo de movimento esteja com a parametrização **Informa Projeto/Tarefa (etapa 71)** diferente de **Não informa** e possua itens oriundos do TCOP será realizado o estorno para o TCOP (recurso disponível a partir da versão 12.1.2310). Com exceção dos movimentos gerados a partir do Pedido Extra.
-   Caso seja necessário restringir o acesso do usuário à Conclusão de Pedidos, poderá retirar a permissão **Concluir Pedido** no perfil usuário, aba Acesso a Menus.

Informações

Foi disponibilizado no Totvs Compartilhamento a consulta SQL (NUCSQL0005 - Histórico de Conclusão de Pedidos) para visualizar o Histórico de Conclusão de Pedidos
