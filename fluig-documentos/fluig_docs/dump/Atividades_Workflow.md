# Atividades Workflow

> **Fonte:** [https://tdn.totvs.com/display/fluig/Atividades+Workflow](https://tdn.totvs.com/display/fluig/Atividades+Workflow)

---

#  Atividade Comum

É a atividade workflow comum do Fluig. É a unidade básica da separação de um processo workflow em atividades . Deverá ser executado por um usuário para que a solicitação workflow para dar andamento a solicitação workflow.



#  Atividade usuário

Bastante semelhante a atividade comum poderá mais restritiva. Essa notação determina que obrigatoriamente um usuário deverá executar esta tarefa e que ela é controlada e registrada pelo Fluig.



#  Atividade de serviço

Esta atividade permite consultar dados de um serviço externo e passar para o processo dados provindos de tais serviços. Nas propriedades da atividade é possível selecionar um serviço cadastrado no fluig e editar um script JavaScript que fará acesso aos métodos e dados desse serviço. Fazendo uso das APIs hAPI, e forms é possível passar os dados obtidos na consulta do serviço para dentro do fluig.

Existem dois modelos de utilização da atividade serviço: Execução **Imediata** e Execução **Automatizada**.



-   Execução **Automatizada**

Neste caso a execução do script de serviço será assíncrona e script será executado sem a necessidade de uma interação do usuário para que isso aconteça. É possível configurar o número de tentativas e a mensagem de sucesso caso a execução do script seja concluída sem erros. Ao enviar uma solicitação para a atividade de serviço configurada como posterior ela ficará parada na atividade de serviço e executará o script pelo número de vezes consecutivas configuradas no parâmetro tentativas ou até que o script não retorne um erro. Caso o número de tentativas seja concluído sem que haja uma execução do script com sucesso a atividade será movimentada para o evento intermediário de captura de erro que por sua vez movimentará a atividade para o fluxo indicado, caso contrário a atividade de serviço será concluída e seguirá o seu fluxo de saída normal.



A atividade de serviço pode apenas ter um fluxo de saída e deve ter um evento intermediário de captura de erro anexado a mesma para o caso de ocorrer algum problema. É importante ressaltar que a atividade posterior a captura de erro **não** será atribuída automaticamente a quem enviou a solicitação para a atividade de serviços, portanto o operador deve modelar o processo informando qual usuário será o responsável pela atividade de erro para que não haja uma atribuição automática para o primeiro usuário da lista.

Em tarefas de serviço com tipo de execução **Automatizada** é obrigatório o uso do evento anexo de captura de erro. Bem como um fluxo de saída deste evento permitindo que o processo seja desviado caso o script de integração não tenha sido executado com sucesso em todas as tentativas.



O script da atividade de serviço com execução posterior pode receber como parâmetro a quantidade de tentativas e a mensagem de erro da última execução que podem ser utilizados dentro do script. O script em si ficaria como a seguir:

```
function servicetask9(attempt, message) {
	log.info("Exemplo servicetask");
	var a = hAPI.getCardValue("campo_no_formulario");
	if (a == "1") {
		return true;
	} else {
		throw "Exemplo de Erro";
	}
}
```



Tanto a mensagem de sucesso quanto as mensagens de erro serão gravadas no histórico como complementos e apresentados aos usuários que visualizarem aquela solicitação. Este tipo de integração é melhor utilizado para integração com serviços possivelmente indisponíveis ou externos e que necessariamente devem ser assíncronos a utilização do usuário, possibilitando um fluxo de contingência caso a integração não seja concluída com sucesso em todas as tentativas por qualquer razão. Para criação deste fluxo de contingência deverá ser **anexado um evento de captura de erro** (colocado em cima) cujo fluxo de saída será utilizado caso todas as tentativas de integração falharem. Abaixo segue um exemplo de como fica uma modelagem básica de uma tarefa de serviço do tipo Automática.





-   Execução **Imediata**

O código gerado de script específico desta atividade será executado após evento *afterStateEntry* relacionado deste processo e será processado no momento que solicitação entrar na atividade de serviço.

Exemplo de código gerado para iniciar o trabalho de integração com serviço:

```
try {
	var Service = ServiceManager.getService('rm');
	var serviceHelper = Service.getBean();
	var serviceLocator = serviceHelper.instantiate('classe.locator');
} catch(erro) {
	log.error(erro);
}
```

O tipo de execução **Imediata** não é recomentado atualmente por ter sua qualidade reduzida.



#  Atividade de Envio de mensagem

Esta atividade permite o envio de uma mensagem de email para um endereço externo ao endereço a ferramenta fluig. É possível configurar o tipo e email (texto ou html) o assunto e o texto do email em tempo de modelagem. 



#  Atividade manual

Atividade manual representa uma atividade externa ao sistema que não necessariamente precisa ser executada por um usuário usando a tela de movimentação de processos. Um exemplo prático seria o usuário buscar um documento que acabou de ser impresso. Essa notação deve ser usada em casos em que essas atividades externas ao sistema precisam ser colocadas no diagrama de processos para fins de documentação de processo.





#  Atividade de script

Essa atividade faz a execução de um script ao ser executada. Em tempo de modelagem esse script deverá ser desenvolvido em linguagem JavaScript e poderá fazer uso de todas as APIs de infraestrutura que o fluig oferece como a hAPI.



#  Atividade de negócio

O Objetivo desse tipo de atividade é consultar regras de negócio que não estejam internalizados no Fluig. Essa consulta se dará por meio de um script javascript consultando um serviço pré-cadastrado no fluig. O comportamento interno desta atividade será o mesmo comportamento da atividade  de serviço.



#  Subprocesso

Permite selecionar outro processo previamente exportado para o servidor do fluig como subprocesso. Abaixo, os atributos do Subprocesso:

Atributo

Descrição

Código

Código da atividade.

Nome

Nome da atividade.

Descrição

Descrição da atividade.

Subprocesso

Processo que será iniciado ao iniciar esta atividade.

Transfere Anexos

Transfere anexos do processo pai ao processo filho (o inverso não ocorre).

Cancelamento conjunto com solicitação principal

Cancela todos os subprocessos iniciados pela solicitação caso ela seja cancelada.



#  Ad-Hoc

Permite a inclusão e o gerenciamento de tarefas não estruturadas dentro do motor de execução e controle do fluig.



Nem todos os processos de uma organização podem ser estruturados dentro de processos *workflow* estáticos. Nos negócios, encontramos diversas situações que geram um conjunto de tarefas que não podem ser estruturadas da forma tradicional, porém necessitam ficar registradas e precisam ser monitoradas para que tenhamos como medir a evolução dessas tarefas para o alcance dos objetivos.

Exemplo: Supondo que após uma reunião, um determinado plano de ação foi criado para resolver um problema pontual. A criação de um processo estruturado para resolver este único problema não faz sentido. Para essas situações, devemos utilizar o processo Ad-Hoc.

Exemplo de processo simples configurado pelo Ad-Hoc:

Nas propriedades da atividade Ad-Hoc, selecionar a opção de "Tarefa Inicial" para determinar que se torne a atividade inicial do processo. Ao liberar o processo, já poderá ser utilizado.



Ao executar o processo, o usuário já terá acesso a aba "AdHoc" onde poderá informar o título da reunião ou tema, descrição do problema e as atividades a serem realizadas.



Através do botão "Adicionar atividade" é possível criar uma nova tarefa não estruturada, informando a Atividade, Prazo de Conclusão e Responsável.



Após movimentar o processo, selecionar a opção disponível "Criar Tarefas Ad-Hoc", para que sejam criadas as atividades definidas para cada responsável, onde cada um irá receber uma pendência do subprocesso "Executar Tarefa Ad-Hoc" contendo as informações do processo principal.

A partir dessa movimentação, será permitindo ao responsável cumprir ou rejeitar a tarefa, informando na "Observação" o motivo ou complemento sobre a ação tomada na tarefa.



Na solicitação principal, onde a lista foi criada, é permitido ao criador da lista, gerenciar as atividades abertas para saber se foram concluídas ou rejeitadas através da aba "Status". É possível também cancelar tarefas em aberto ou criar novas, independente do status das tarefas anteriores.



Através do botão de mais  localizado na lateral direta da atividade, é possível ver o detalhamento sobre a execução da tarefa, bem como possíveis anexos e observações inseridos na atividade de execução da tarefa.







Importante

As tarefas de subprocesso Ad-Hoc só poderão ser encerradas quando todas as atividades relacionadas não estiverem mais com status "Em andamento".





Atenção

Hoje, os anexos de workflow de um subprocesso **não** são transferidos ao processo pai a menos que haja algum desenvolvimento específico para tal, porém os anexos do pai podem ser transferidos ao processo filho através do atributo [Transfere Anexos](https://tdn.totvs.com/display/HF/Configurar+atividades+e+fluxos).
