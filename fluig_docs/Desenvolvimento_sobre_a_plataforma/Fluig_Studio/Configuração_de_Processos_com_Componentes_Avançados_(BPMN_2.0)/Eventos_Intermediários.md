# Eventos Intermediários

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=126714787](https://tdn.totvs.com/pages/viewpage.action?pageId=126714787)

---

##  Evento Intermediário

Conforme o próprio nome indica é um evento que ocorre entre o inicio e o fim do processo. É uma atividade comum que poderá ser atribuida para qualquer usuário durante a execução de um processo workflow. Usada para fins de conformidade com a notação BPMN 2.0.



##  Evento Intermediário Temporizador

Permite a criação de um atraso na solicitação workflow. quando o processo chegar nesta atividade a solicitação ficará parada neste ponto do processo pelo período determinado dentro do agendamento da atividade.

ATENÇÃO

A tecnologia utilizada para a temporização das atividades reinicia seus contadores de tempo a partir de um determinado período definido pelo próprio tipo de tempo utilizado para definir o gatilho. Isso significa que não se pode utilizar períodos de tempo acima de 24 horas para se temporizar por horas, ou um período acima de 31 dias para se temporizar por dia. O contador reinicia toda 24 horas ou todo começo do mês. Isso também significa que ao se colocar um período de dias, como por exemplo 8 dias, o período irá reiniciar no dia primeiro e começará a contar a partir de então. Para mais informações: [http://quartz-scheduler.org/documentation/quartz-2.1.x/cookbook/BiDailyTrigger](http://quartz-scheduler.org/documentation/quartz-2.1.x/cookbook/BiDailyTrigger).



##  Evento Intermediário Condicional

Este evento criará uma atividade na central de tarefas atrasadas que ficará executando periodicamente um script condicional. Quando as condições do script forem cumpridas o processo será movido para a próxima etapa do processo. O usuário que movimentou a tarefa anterior do evento intermediário condicional será usado para movimentar esta tarefa. Ao criar esta tarefa, deverá ser gerado um Script de Evento Workflow associado, que corresponde ao código da atividade deste evento (exemplo: intermediateconditional2), que, sendo criada através do Studio, gera uma função JavaScript homônima que será executada a partir do tempo definido. 

Atenção

Os scripts deste evento devem ter um método com o mesmo nome da atividade e devem ser nomeados como tal.

Mais detalhes sob como funciona e exemplos de uso podem ser encontrados no [artigo dedicado a](https://tdn.totvs.com/display/fluig/Scripts+Condicionais) [scripts condicionais](https://tdn.totvs.com/display/fluig/Scripts+Condicionais)[.](https://tdn.totvs.com/display/fluig/Scripts+Condicionais)



##  Evento Intermediário de envio de sinal

Este evento funcionará como uma atividade automática e irá realizar a emissão de sinal configurado dentro do Fluig . Quando o solicitação chegar nesta atividade ela será movida imediatamente para a próxima atividade apenas realizando o envio de um sinal.



##  Evento Intermediário de recepção de sinal

Este evento manterá a solicitação workflow parada até que o sinal configurado tenha sido emitido por outra atividade de envio de sinal.



##  Evento Intermediário de Link (Entrada) 

Em alguns processos as vezes é necessário criar um fluxo de atividade que acaba atravessando boa parte do diagrama dificultando o entendimento do mesmo. Eventos intermediários de link permitem a criação de conectores de fluxo tornando a conexão de atividades mais elegante. Nas configurações (propriedades) deste componente é apresentado um combo-box que irá listar todas as atividades intermediárias de link de saída de fluxo . Para cada a evento intermediário de link de entrada obrigatoriamente deverá existir pelo menos um evento intermediário de link de saída. Todo evento de link de entrada deverá receber pelo menos um fluxo de entrada . No processo de exemplo a seguir temos um fluxo que precisa ligar a atividade inicial com a atividade5 . Veja que o fluxo atravessa quase todo o diagrama para poder conectar as duas atividades :

Utilizando os eventos de entrada e saída de links é possível ter uma modelagem mais eficiente e elegante. Veja o mesmo processo utilizando os eventos de entrada e saida de links :

Você obteve exatamente o mesmo processo porém com uma modelagem muito mais clara.





##  Evento Intermediário de Link (Saída)

Determina a saída de um fluxo do processo que entrou no evento de Link de entrada . Necessita pelo menos um fluxo de saída para ser considerado um evento modelado de forma válida.



##  Evento Intermediário múltiplo

Este elemento irá disparar múltiplos sinais executar múltiplos scripts condicionais ao ser executado. Este item é recomendado em situações em que o modelador deseja disparar mais de um sinal ao mesmo tempo em determinado momento do processo.



##  Evento Intermediário de captura de erro

Este elemento só pode ser associado a atividade serviço quando a mesma é configurada como Execução **Automatizada**, sendo obrigatória neste caso. Ela serve para indicar para qual atividade a solicitação deve ser movimentada caso o número de tentativas da atividade de serviço seja excedido sem que haja uma execução com sucesso. Não pode receber fluxos e nem ter um fluxo de saída com fluxo de retorno, sua única interação é anexada à própria atividade de serviço com um fluxo de saída comum para uma atividade qualquer. Este evento também não pode ser instanciado de forma isolada dentro de um diagrama sendo que a única forma de instancia-lo é colocando o mesmo por cima de uma tarefa de serviço automatizada . O modelo abaixo representa a modelagem básica necessária para se utilizar o evento intermediário de captura de erro :
