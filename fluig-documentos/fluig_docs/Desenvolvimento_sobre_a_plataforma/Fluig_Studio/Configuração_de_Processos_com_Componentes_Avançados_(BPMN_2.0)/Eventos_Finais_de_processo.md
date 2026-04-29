# Eventos Finais de processo

> **Fonte:** [https://tdn.totvs.com/display/fluig/Eventos+Finais+de+processo](https://tdn.totvs.com/display/fluig/Eventos+Finais+de+processo)

---

#  Evento final de processo comum

Indica o fim do processo workflow. Esta tarefa não é atribuída a nenhum usuário pois é apenas uma indicação de que a solicitação workflow foi terminada. Não ocorrerão pós processamentos após o fim da solicitação workflow. (Embora através de customização seja possível realizar pós processamentos) . 

#  Evento final com erro

Indica que a solicitação workflow foi terminada com um erro do ponto de vista de negócio da organização . A Nível de execução o Fluig se comportará da mesma forma que estivesse executando um fim comum. Esta notação tem apenas o objetivo de deixar mais claro do ponto de vista do negócio que a solicitação workflow não seguiu conforme o esperado.

#  Evento final de cancelamento

Permite cancelar uma solicitação Workflow através da navegação da mesma. Caso a solicitação workflow seja movida para esta atividade ela será cancelada. É o mesmo efeito obtido cancelando solicitações abertas através da opção minhas solicitações na central de tarefas .

#  Evento final de Sinal

Ao terminar a solicitação será emitido um sinal que será captado por atividades de recepção de sinal em outros processos.

#  Evento final múltiplo

Este evento permite enviar múltiplos sinais e executar diversos scripts condicionais. Neste caso scripts condicionais serão apenas executados e seu retorno não será validado . Este componente é recomendado nos casos em que se faz necessário enviar diferentes sinais após o fim do processo. Essa atividade não terá agendamento e não irá impedir o fim da solicitação. A solicitação será encerrada e a execução dos scripts e o envio de sinais ficará para como um pós processamento no fim da solicitação workflow.

#  Evento final terminal

Este evento se comporta da mesma forma que o fim comum de processo.  A notação indica que o processo foi encerrado e que não ocorrerá nenhum tipo de compensação ou pós-processamento.
