# Fluxos

> **Fonte:** [https://tdn.totvs.com/display/fluig/Fluxos](https://tdn.totvs.com/display/fluig/Fluxos)

---

# Índice



Para que o fluxo automático funcione corretamente, além de incluir o *job* do fluxo automático, é necessário incluir o *job* de Tarefas atrasadas.
O fluxo automático é acionado quando uma tarefa está atrasada, mas caso o cliente não tenha criado o *job* de tarefa atrasada no agendador, o fluxo não será movimentado.

# Fluxo Comum

Fluxo padrão para movimentação de atividades. É o tipo de fluxo mais usado pra movimentação de atividades, permitindo que uma atividade seja movimentada para outra sem a possibilidade de retorno. As configurações do fluxo comum são:





-   **Código:** É o código do fluxo, utilizado pra identificá-lo no sistema e não pode ser alterado.

-   **Nome:** É o nome do fluxo, a legenda que aparecerá próxima ao desenho do fluxo para identificá-lo quando estiver visualizando o processo.

-   **Fluxo automático:** Habilita o fluxo automático, conforme descrito nos tópicos a seguir.

-   **Ativ. Fluxo:** Legenda de identificação para fluxo, especificando o nome da atividade quando estiver sendo apontada por aquele fluxo específico.

-   **Permite retorno:** Habilita o fluxo de retorno, conforme descrito nos tópicos a seguir.

-   **Ativ. Retorno:** Legenda de identificação para fluxo de retorno, especificando o nome da atividade quando estiver sendo apontada como retorno da atividade atual.



# Fluxo de Retorno

Ao habilitar o retorno nas configurações de um fluxo, sua cor se tornará vermelha e uma seta irá apontar para a atividade de origem.

Quando uma solicitação tiver sido movimentada da atividade de origem para a atividade de destino através desse fluxo, durante a movimentação da atividade destino será permitido retornar a solicitação à atividade anterior. O responsável que será atribuído à esta atividade será o mesmo usuário que a movimentou da primeira vez.

Só é possível utilizar o fluxo de retorno para a versão do processo corrente durante a movimentação. Por isso, caso uma solicitação seja convertida para uma outra versão do processo, **durante a primeira movimentação da solicitação** **após a conversão, essa solicitação não poderá retornar à atividade anterior**, pois neste caso a solicitação terá uma nova movimentação representando sua conversão e portanto perderá a possibilidade de retorno imediato.

#
Fluxo Automático

Ao habilitar o fluxo automático nas configurações de um fluxo, sua cor se tornará verde e será adicionado o ícone de um relógio próximo ao meio da seta.

Este tipo de fluxo define que se o prazo de uma atividade for concluído sem que ela tenha sido movimentada, a solicitação será movida automaticamente para a atividade de destino apontada pelo fluxo.

Como o fluxo automático só poderá ser movimentado **após** o prazo da atividade ser concluído, a atividade de origem também precisará ter configurado um fluxo de saída comum para movimentações convencionais

Para que esse fluxo funcione corretamente, é obrigatório que a atividade de origem tenha um **prazo** definido e que o administrador da plataforma agende uma tarefa de **Fluxo Automático,** através da opção Agendador de Tarefas no Painel de Controle, com o intervalo em que o sistema deve verificar e executar a movimentação das atividades com fluxos automáticos.

Importante notar que, durante a execução de um fluxo automático, **não há um usuário logado realizando a movimentação**. Portanto, eventos que utilizem o usuário logado através de APIs do fluigAPI devem levar isso em consideração em suas tratativas para evitar problemas em sua execução.

# Fluxo Informativo

Esse tipo de fluxo é apresentado apenas quando uma atividade for relacionada a algum objeto que não seja uma atividade, tais como anotações, documentos, *databases* e afins. Não é possível movimentar a solicitação através desse fluxo, ele serve apenas como uma referência entre uma atividade e um objeto.



#  Fluxo Padrão

Esse tipo de fluxo indica qual ação deve ser tomada por uma atividade automática, caso nenhuma das condições definidas seja atendida. Com o fluxo padrão configurado, quando um Gateway Automático Exclusivo ou Inclusivo não encontrar nenhuma condição válida, ele será movimentado para a atividade destino deste fluxo.

Apenas atividades comuns e os gateways inclusivo, exclusivo e complexo podem ser configurados com um fluxo padrão de saída, porém no caso de atividades comuns e no gateway complexo atualmente serve apenas como informativo, sem ações definidas.

Somente um fluxo de saída padrão pode ser definido por atividade / gateway. Para configurá-lo em uma atividade, basta marcar a opção conforme descrito abaixo:

Ao habilitar a opção Fluxo padrão, mesmo em uma atividade comum, o fluxo não poderá ser configurado como fluxo automático nem permitir retorno e estas opções serão desabilitadas por padrão neste cenário, conforme a imagem acima.

Fluxo padrão **não** vai movimentar automaticamente uma atividade comum com a variável estendida *AutomaticTasks* configurada.

Um fluxo padrão pode ter uma condição própria para ele e ser movimentado apenas com sua condição sendo atendida. Caso uma solicitação seja movimentada por uma automática pelo fluxo padrão devido a nenhuma condição ter sido aceita, o informativo aparecerá no histórico para que seja possível identificar o não cumprimento das condições. Mesmo com um fluxo padrão, automáticas exclusivas e inclusivas ainda devem possuir obrigatoriamente ao menos uma condição válida para um destino.
