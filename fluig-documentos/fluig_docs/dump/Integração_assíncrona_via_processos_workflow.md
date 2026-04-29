# Integração assíncrona via processos workflow

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=237397494](https://tdn.totvs.com/pages/viewpage.action?pageId=237397494)

---

# Índice



# Objetivo

* * *

As informações neste documento são destinadas a auxiliar e informar o usuário sobre os modos de realizar processamentos assíncronos por meio de solicitações workflow.

Neste documento serão apresentados conceitos relacionados a modelagem de processos utilizando-se de atividades que são executadas pelo servidor para que a integração necessária seja transparente para o usuário que esteja movimentando a atividade.

Atenção

A Integração assíncrona via processos workflow está disponível no TOTVS Fluig Plataforma a partir da [Atualização 1.5.9](https://tdn.totvs.com/pages/viewpage.action?pageId=235596849).



# Pré-requisitos

* * *

Conhecimento prévio em determinados pontos, sendo estes:

-   Visão geral sobre a plataforma Fluig
-   Visão geral sobre integração de sistemas
-   Conhecimento sobre modelagem de processos
-   JavaScript



# Visão Geral

* * *

Em vários casos, o usuário pode encontrar situações em suas regras de negócio ou necessidades do dia a dia em que uma solicitação Workflow deve executar alguma integração ou processamento em que o próprio usuário inicial não precise ficar esperando para receber a resposta do servidor, sendo que estas atividades devem ser executadas em paralelo ao uso cotidiano do sistema e apenas ser movimentada ao fim do mesmo.

Para este tipo de situação existem atividades que auxiliam nestas configurações, possibilitando que uma solicitação fique aguardando a execução de um processamento programado ou que tenha meios de recuperação de erros na execução de um evento assíncrono para que o usuário tenha como modelar alternativas no caso de falha. Estes procedimentos serão melhor detalhados neste documento, explicando meios de como realizar modelar tais atividades e em quais tipos de situações elas podem ser úteis.



# Atividade de Serviço

* * *

A atividade serviço é utilizada quando se há a necessidade de um script a parte que execute uma integração com um determinado serviço, servindo para realizar a integração com este serviço em específico, porém pode ser utilizado para basicamente qualquer objetivo que envolva a integração de um script a parte com um processo workflow. Existem dois modos de configuração para esta atividade:

-   Execução **Automatizada**

É o modelo de execução assíncrona. Quando uma solicitação entra na atividade de serviço configurada como *Automatizada*, uma requisição é enviada de maneira assíncrona para o servidor onde se manterá em uma fila para execução. No momento que o servidor capturar esta requisição o script associado a atividade será executado e, em caso de sucesso, a atividade será movimentada automaticamente para a próxima atividade, caso contrário ela será movimentada  para o fluxo de erro, indicado pelo **Evento Intermediário de Captura de Erro**, onde pode ser configurada uma atividade nova para que o usuário possa averiguar seus erros e enviar de volta a atividade de serviço ou então seguir um outro fluxo caso desejado.

Vamos nos ater, nesta página, a este tipo de atividade, já que ele representa bem o objetivo de desenvolver conhecimento sobre como realizar integrações assíncronas por meio de processos Workflow, portanto a partir deste momento toda informação nos tópicos seguintes irão referenciar a atividade de serviço configurada como execução *Automatizada.*

-   Execução **Imediata**

É o modelo de execução síncrona, onde seu script executa logo após o evento *afterStateEntry* da solicitação Workflow. Em caso de sucesso,a movimentação irá passar da atividade imediata direto para a atividade seguinte, dando sequência ao fluxo. Em caso de erro, este modelo simplesmente irá retornar o erro encontrado para o usuário e cancelará a movimentação, exigindo uma nova interação do usuário ou averiguação dos erros de imediato. Este tipo de execução está disponível a partir da versão 1.6.5

Veja o exemplo (**create-advanced-folder**) que está no [repositório do Fluig](https://git.fluig.com/projects/SAMPLES) clicando **[aqui](https://git.fluig.com/projects/SAMPLES/repos/projetos/browse/create-advanced-folder)**.



## Configurando atividade de serviço com execução Automatizada

Para realizar a configuração de uma atividade de serviço Automatizada primeiramente é preciso, dentro de um processo Workflow, adicionar uma atividade de serviço. Ao clicar sobre a atividade aparecerá algumas opções para configuração.



1.  ***Código***: É pré-fixado, sendo o código da atividade. É com base nesta nomenclatura (*servicetask9*) que o Script e a função do serviço devem ser criadas.
2.  ***Nome***: É o nome da atividade, ou seja, a label que aparecerá na exibição do diagrama ou na seleção de atividades para movimentar.
3.  ***Execução***: É a configuração que indica se o Script terá execução Automatizada ou Imediata a movimentação. Para configurar uma atividade de serviço como assíncrona a opção selecionada deve ser **Automatizada**.
4.  ***Tentativas***: É a quantidade de vezes que o servidor tentará executar o Script caso ocorram erros durante a execução. Caso essa quantidade for excedida, a atividade de serviço será movimentada para o fluxo de erro. A cada tentativa com problemas o script irá gerar um novo complemento no histórico da solicitação informando a tentativa e o erro causado.
5.  ***Mensagem***: Mensagem que será gravada no complemento do histórico caso haja sucesso na execução da atividade.
6.  ***Serviço***: Serviço base que será chamado pelo Script da atividade. Ao lado deste parâmetro há o link *Editar Script da Tarefa* que, ao ser clicado, irá gerar um Script JS já com seu nome configurado e um Snippet gerado para iniciar o desenvolvimento com base no serviço selecionado neste combo.

Após configurar todas as opções e clicar em *Editar Script da Tarefa*, um Script será gerado para que a personalização necessária possa ser feita, sendo que este Script deve ser programado em JavaScript puro e suporta todas as bibliotecas convencionais que são utilizadas durante os eventos de Workflow. Como base, teremos um Script semelhante a este:



```
function servicetask("Número da atividade")  (attempt, message) {
 try {
	 var Service = ServiceManager.getService('ServiceID');
	 var serviceHelper = Service.getBean();
  //var serviceLocator = serviceHelper.instantiate('classe.locator');
 } catch(error) {
	log.error(error);
	throw error;
 }
}
```



É a partir deste Script que a customização necessária deve ser customizada. Note que existem dois parâmetros na função que o Script chama que são exclusivos para atividades de serviço configuradas como execução Imediata. Estas são:

1.  ***Attempts***: Número da tentativa atual, oscilando entre 1 e N, sendo N um número de 1 a 20 configurado nas opções da atividade de serviço no parâmetro *Tentativas.*
2.  ***Message***: Última mensagem de erro desta atividade. Na primeira execução, este parâmetro é *null.* Ele serve para que o modelador possa tratar mensagens específicas de erro nas execuções subsequentes a primeira.



Realizado os moldes do Script, é então hora de definir os fluxos da atividade de serviço com execução Imediada. Por regra, essa atividade permite apenas um fluxo de saída, que é para onde a solicitação será movimentada caso o Script retorne com sucesso. Para o caso de erro é necessário anexar a atividade um *Evento Intermediário de Captura de Erro,* para tal, basta selecionar o evento em questão e arrastá-lo para cima da atividade de serviço. Uma vez lá, ele demandará um fluxo saindo a partir dele para uma outra atividade qualquer, que será a atividade cuja solicitação será movimentada caso a quantidade de vezes que o Script foi rodado exceda o número de tentativas configuradas pelo usuário. O fluxo, portanto, ficaria semelhante ao abaixo em um modelo básico.



Note que neste caso o fluxo de erro está programado para seguir a uma atividade extra (sub processo) que será utilizada para que o usuário possa visualizar o problema, corrigir e então reenviar a atividade de serviço para uma nova execução, que é o modelo padrão, porém essa atividade também pode ser utilizada para que o processo siga um fluxo completamente diferente caso o modelo de negócio exija de tal forma.

É altamente recomendado que tanto a atividade após a atividade de serviço e a configurada no fluxo de erro possuam mecanismos de atribuição configurados, pois, como é uma atividade que será concluída automaticamente, o usuário atribuído será o primeiro da lista recuperada caso não haja tal configuração.



## Executando atividade de serviço com execução Imediata

Ao ser executada, a atividade de serviço de execução Imediata fica parada e o usuário a quem a mesma está atribuída fica como *System:Auto*, o mesmo utilizado no caso de Gateways. Ela ficará aguardando a conclusão do script relacionado para então ser movimentada ou para o fluxo de sucesso ou para o de erro dependendo do resultado das tentativas de execução do script. É importante ressaltar que caso haja um gestor configurado para a solicitação o mesmo somente poderá movimentar a atividade sem que haja a conclusão da tarefa de serviços para o fluxo de sucesso, pois a atividade de serviço não possui um fluxo direto com o evento intermediário de captura de erro, sendo que apenas o script, atualmente, poderá ser responsável por movimentar a solicitação para o fluxo de erro.

Para o desenvolvimento do script da atividade de serviços os seguintes recursos estão ativos:



Recurso

Descrição

**hAPI**

Recurso para manipulação de formulários e Workflow. Para maiores informações acessar: [hAPI](https://tdn.totvs.com/display/public/fluig/hAPI).

**docAPI**

Recurso para manipulação de documentos. Para maiores informações acessar: [Desenvolvimento de Workflow.](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Workflow#DesenvolvimentodeWorkflow-docAPI)

**log**

Recurso para log no console do sistema.

**ServiceManager**

Recurso para acesso via WebService SOAP. Para maiores informações acessar: [Integração Com Aplicativos Externos.](https://tdn.totvs.com/x/lCVbB)

**datasetManager**

Objeto que permite carregar datasets entro das customizações.

**DatasetFactory**

Serve como "porta de entrada" para o acesso a qualquer Dataset. Maiores detalhes sobre este item se encontram no artigo sobre [construção de datasets.](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Datasets) 

**DatasetBuilder**

É semelhante ao DatasetFactory, servindo ao propósito de construir o objeto de datasets. Maiores detalhes sobre este item se encontram no artigo sobre [construção de datasets.](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Datasets) 

**ConstraintType**

Determina o tipo de constraint a ser utilizada em uma condição do dataset. Maiores detalhes sobre este item se encontram no artigo sobre [construção de datasets.](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Datasets)

**notifier**

Permite realizar notificações extras em eventos e scripts. Para maiores informações acessar: [Personalização de e-mail.](https://tdn.totvs.com/x/m4HzCg)

**WKParams**

Coleção de parâmetros que podem ser utilizados dentro dos scripts como o WKCompany e WKUser. Para maiores informações acessar: [Desenvolvimento de processos workflow](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Workflow).

As variáveis suportadas neste script são:

-   WKCurrentState
-   WKNumState
-   WKDef
-   WKNumProces
-   WKVersDef
-   WKCompany
-   WKIdentityCompany
-   WKUser
-   WKCompletTask
-   WKCardId
-   WKFormId
-   WKNextState



**fluigAPI** 

Recurso que consome classes internas do Fluig Plataforma e prepara métodos utilitários diversos. Para maiores informações acessar: [Fluig API.](https://tdn.totvs.com/x/d4RXBQ)

**IMPORTANTE:** A transação inicia no momento em que o script começa a ser executado e somente acaba após o script ser finalizado e retornar para o produto. Sendo assim, por padrão, o script deve rodar durante cinco minutos ou então irá dar erro indicando que o tempo de transação excedeu. Outro comentário importante é que qualquer exceção durante a execução do script que chegue ao código do produto irá efetuar Rollback da transação, ou seja, todos os dados salvos até então na base da plataforma Fluig serão perdidos como, por exemplo, campos de formulário alterados com hAPI.setCardValue.
