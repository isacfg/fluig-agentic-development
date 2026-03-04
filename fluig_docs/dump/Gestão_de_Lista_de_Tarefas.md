# Gestão de Lista de Tarefas

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=142813148](https://tdn.totvs.com/pages/viewpage.action?pageId=142813148)

---

# Índice

# Lista de Tarefas

A lista de tarefas é um recurso flexível para organizar atividades a serem desempenhadas diariamente. Permitindo informar que atividade será desempenhada, por quem e quando será o prazo para conclusão.

Esta feature permite configurar uma lista específica sobre determinado assunto e posteriormente permite associar atividades que auxiliarão na conclusão desta tarefa.

**Por exemplo:**

Em uma reunião o líder de produto definiu uma estratégia para avaliar a uma proposta de produto envolvendo setores corporativos.

Para isso criou uma lista de tarefas:

Assunto

Plano de Produto

Detalhes

Estratégia para adoção de melhorias nos setores corporativos

Período

De 10/06 a 20/06/2014

Após definir o escopo principal da lista de tarefas ele deseja criar atividades delegando responsáveis e atribuindo prazos.

 

Atividade I

Atividade II

Atividade III

**Ação**

Pesquisa de Mercado

Pesquisa com grupo de foco

Análise de resultados

**Prazo**

12/06/2014

15/06/2014

20/06/2014

**Responsável**

João Antunes

Maria Fernandes

Emanuel Braga

Após conclusão das atividades, ele poderá **Solucionar** a lista de tarefas dando o assunto por encerrado, ou poderá adicionar mais atividades até que a lista de tarefas seja dada por **Solucionada**.

A lista de tarefas pode ser criada diretamente a partir da inicialização de solicitações, através das opções: **Processo > Listar Tarefas**.

Ou, pode ser utilizada na modelagem de um processo *workflow* a partir do subprocesso *Ad Hoc*.

O subprocesso *Ad Hoc* fornece uma funcionalidade de listas de tarefas para execução de tarefas dentro do *workflow*.
Esta funcionalidade consiste na criação de um conjunto de atividades não definidas dentro de um processo *workflow*, ou seja, dentro de um processo estruturado, é possível criar novas atividades sob demanda para a execução de uma determinada tarefa.

Quando o subprocesso *Ad Hoc* incluído em um *workflow* for executado, o usuário será capaz de definir novas atividades sob demanda, informando e notificando responsáveis pela execução da atividade e seu prazo de conclusão.
O usuário que realiza a criação destas atividades dispõe de uma tela de acompanhamento, onde é possível verificar o status da execução das atividades criadas e, caso necessário, criar novas atividades, conforme veremos adiante.

Além da criação de *workflows* com o subprocesso *Ad Hoc* através do fluig Studio, o fluig permite a criação de processos *workflow* com este subprocesso diretamente pela ferramenta web.

### Processo Padrão de Listas de Tarefas

É possível criar a lista de tarefas diretamente no fluig, sem necessitar de nenhuma configuração de processo workflow, basta acessar **Processo / Listar Tarefas** ou através da tela **Iniciar Solicitações**, na categoria **Tarefas Gerais**, conforme imagens abaixo:



**Figura 1 - Iniciar solicitação padrão**

**Figura 1.1 - Iniciar solicitação padrão**

Para iniciar um novo processo, selecione o mesmo na tela de inicialização. Um novo processo será criado.

Neste será possível criar atividades, e encaminha-las para execução por outros usuários, além de acompanhar o status das mesmas, conforme fluxo descrito nos tópicos anteriores.

**Figura 2 - Processo padrão**

Para verificar como o processo padrão de lista de tarefas foi modelado basta acessar a aba **Detalhes** na inicialização do processo. As atividades padrão são:

**Criar Lista de Tarefas**: Na inicialização do processo, o usuário é questionado quanto ao título e descrição do processo. Nesta atividade, há a opção de criar tarefas e encaminha-las para outros usuários. Caso o usuário não crie nenhuma atividade, o processo é encaminhado diretamente para a atividade de **Aplicar a Solução**.

Para esta atividade, foi criado um formulário padrão que permite a criação das tarefas, conforme imagem. Assim como todos os itens do processo padrão, esta formulário pode ser editado, porém os campos status e observação não podem ser excluídos, visto que são necessários à correta execução do processo.

**Figura 3 - Formulário padrão**

**Solução**: Nesta atividade automática, ocorre a validação da criação das atividades, caso haja uma lista de tarefas a serem criadas, o processo é encaminhado para a atividade **Criar Tarefas**.

**Criar tarefas**: Nesta atividade o usuário poderá gerenciar as tarefas já criadas, além de criar novas tarefas ou cancelar as tarefas que não tenham sido realizadas. Após a conclusão de todas as tarefas, o processo poderá ser encaminhado para a próxima atividade.

**Aplicar a solução**: Nesta atividade, o usuário fará a aplicação da solução e o encerramento do processo.

Este processo será disponibilizado a todos os usuários durante a instalação da versão 1.3 do fluig, podendo ser editado conforme a necessidade dos clientes.

Por se tratar de um processo padrão este já vem modelado no fluig, porém poderá ser modificado quando se julgar necessário através da configuração do processo.

Além disso um filtro personalizado também será criado na Central de Tarefas de todos os usuários cadastrados. Este filtro é um acesso rápido para todas as tarefas pendentes com o usuário. Caso desejado, o mesmo poderá ser normalmente removido pelo usuário.

Agora que já verificou a composição do processo padrão para Listar Tarefas, acompanhe o detalhamento do formulário para preencher a Lista de Tarefas.

**Figura 4 - Formulário padrão**

**Campos do formulário**

**Assunto**: descrição do assunto a ser abordado nas tarefas.

**Detalhes**: informações adicionais a respeito da tarefa.

**Data**: Data de criação das tarefas.

**Data de conclusão**: Data de conclusão das tarefas.

**Adicionar Tarefas**: Ao clicar neste botão, novos campos de preenchimento são abertos para criação das tarefas, permitindo a criação de quantas forem necessárias.

**Figura 5 - Formulário padrão**

Na imagem acima o usuário cadastrou a tarefa **Plano de Produto**, em que sua ação exige que a tarefa **Definição de Escopo** seja concluída.

Ao acionar Enviar e selecionar a atividade **Criar Tarefas**, serão iniciadas solicitações para a lista de tarefa e para a ação a ser executada.

Neste exemplo, como o usuário que criou a Lista de Tarefas é o mesmo que executará a ação, ele poderá acompanhar duas solicitações diferentes na sua central de tarefas, em Tarefas a Concluir, conforme imagem a seguir.

**Figura 6 - Central de Tarefas**

**Solicitante**

Ao clicar na Solicitação da lista de tarefas Plano de Ação, o solicitante poderá acompanhar o andamento das ações e poderá criar ou remover ações cadastradas.

**Figura 7 - Processo Lista de Tarefas**

**Responsável**

Ao clicar na solicitação de ação da lista de tarefas Definição de Escopo, o responsável poderá alterar o status da solicitação para ‘Concluída’ ou ‘Rejeitada’, informar uma observação e enviar a solicitação para seu estado fim.

**Figura 8 - Processo Lista de Tarefas**

A lista de tarefas deve ser encaminhada à atividade **Aplicar Solução**, os detalhes da lista de tarefas serão exibidos e a solicitação será encerrada ao ser enviada à atividade **Terminação imediata do processo**.

**Figura 9 - Processo Lista de Tarefas**

### Configuração e execução de subprocessos Ad Hoc

Além de utilizar o processo padrão de listas de tarefas, também é possível utilizar a atividade subprocesso Ad Hoc em outros processos workflow. 

A lista de tarefas consiste em um conjunto de atividades que são definidas durante a execução do processo. Nesse processo o usuário deve ser capaz de definir o que será feito, o responsável em executar a tarefa além de estipular até quando a tarefa deve ser executada.

Na modelagem de processos workflow o recurso de lista de tarefas é ilustrado através da atividade Subprocesso Ad Hoc.

Durante a criação de um processo *workflow*, inclua a atividade Subprocesso *Ad Hoc* no seu processo, relacionando os fluxo de entrada e saída necessários à correta execução do processo. O subprocesso *Ad Hoc* pode ser incluído sem uma atividade inicial, porém é obrigatória a inclusão de uma atividade final.
Neste exemplo, criaremos um processo de reunião de definição de escopo, iniciando diretamente pelo subprocesso *Ad Hoc*, e com uma atividade de avaliação dos resultados após a execução das tarefas.

**Figura 10 - Modelo de processo com subprocesso Ad Hoc**

Para que um subprocesso *Ad Hoc* seja uma atividade inicial, edite as propriedades da atividade e marque a opção "Atividade Inicial".

**Figura 11 - Tela de propriedades do subprocesso Ad Hoc**

Após salvar e liberar uma nova versão do processo, o mesmo estará disponível para execução.

##### Criar nova solicitação

Na tela de **Criação de Solicitação**, selecione o processo criado. Como o subprocesso *Ad Hoc* foi marcado como atividade inicial, será aberta a aba de criação de atividades. Crie quantas atividades forem necessárias, marcando sempre o responsável pela execução.

**Figura 12 - Tela de configuração de tarefas**

Após criar todas as atividades necessárias, clique na opção "Enviar". A atividade selecionada será "Criar Atividades", sendo assim, as atividades serão criadas e as notificações serão enviadas para os usuários responsáveis. Será exibida uma notificação com o número da solicitação pelo qual será feito o acompanhamento da execução.

**Figura 13 - Exemplo de notificação enviada para usuário**

##### Acompanhamento das solicitações

O usuário que criou as atividades poderá acompanhar a execução através da **Central de Tarefas**. Para isso, selecione a opção "Tarefas a Concluir" da Central de Tarefas e abra a solicitação referente ao processo.
Neste exemplo, nenhuma atividade foi executada até o momento. Por este motivo, ambas as solicitações são exibidas com o status "Em Andamento".

**Figura 14 - Tela de configuração de tarefas**

**Campos Tarefas**

**Ação**: descrição da tarefa a ser realizada.

**Prazo/Conclusão**:  este campo informa o prazo para conclusão da tarefa ou a data de conclusão, caso já esteja finalizada.

**Responsável**: usuário responsável pela tarefa.

**Status**: mostra a situação da tarefa.

##### Remoção de solicitações

Caso necessário, é possível criar ou remover solicitações através da tela de acompanhamento.
Neste exemplo, vamos remover a solicitação enviada para o usuário Leandro e criar uma nova solicitação para o usuário Vinícius.
Para remover uma solicitação, clique no botão "X" à esquerda do mesmo e confirme a exclusão.

A atividade continua sendo exibida na tela para efeitos de histórico, porém seu status é atualizado para "Cancelada".



**Figura** **15 - Status das solicitações**

##### Incluir solicitação

Para criar uma nova atividade, repita o processo anterior, selecionando a opção "Adicionar Atividade" e "Enviar".

Ao criar uma atividade e acionar "Enviar", consequentemente uma nova solicitação é criada.

##### Executando uma atividade

Após a criação da atividades, uma nova tarefa é exibida na **Central de Tarefas** do usuário selecionado como responsável pela mesma.
Ao selecionar esta atividade, a seguinte tela será exibida

**Figura 16 - Formulário de execução de tarefa**

Nesta tela o usuário poderá incluir observações e alterar o status da atividade, entre concluída e rejeitada, além de possuir informações gerais sobre o processo e a atividade.
Neste exemplo, iremos concluir a solicitação. Para concluir a atividade, clique no botão enviar.

##### Finalizando a atividade

Voltamos agora à tela de acompanhamento das solicitações.

Podemos ver, através desta tela, as observações realizadas nas atividades, para isso posicione o mouse sobre a atividade desejada, um sinal "+" será apresentado na lateral direita, clique sobre este.


**Figura 17 - Status atualizado das atividades e d**etalhes das tarefas****

Observação

Note que a segunda atividade, cancelada anteriormente, possui a observação preenchida automaticamente.

Quando todas as atividades necessárias estiverem concluídas, podemos dar continuidade ao processo, clicando em enviar e selecionando a próxima atividade.

 Neste exemplo, enviaremos para a atividade de avaliação dos resultados para após finalizarmos o processo.

**Figura 18 - Conclusão do processo**

Nota

Na página [Desenvolvimento de Workflow](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Workflow), acompanhe detalhes do método *createAdHocTasks* disponível através da **hAPI** para desenvolvimentos sob a plataforma.

Este método permite a criação de atividades *adhoc* dentro dos eventos do fluig
