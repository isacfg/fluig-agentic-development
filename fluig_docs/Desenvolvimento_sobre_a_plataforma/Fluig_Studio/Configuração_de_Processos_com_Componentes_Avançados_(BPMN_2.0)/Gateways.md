# Gateways

> **Fonte:** [https://tdn.totvs.com/display/fluig/Gateways](https://tdn.totvs.com/display/fluig/Gateways)

---

# Gateway Exclusivo

Através de expressões aritméticas esse gateway irá decidir o destino de um processo. As expressões serão validadas na ordem que forem expostas na aba de condições. Quando uma das condições for satisfeita, as demais não serão executadas.

Cada condição terá um fluxo de destino relacionado, assim, a primeira expressão que for validada como verdadeira será utilizada para mover o processo para a atividade relacionada.

O fluxo de **entrada** para este gateway não pode possuir um fluxo de retorno, pois como esta atividade é automática um dos fluxos que procede será sempre executado. Caso um dos fluxos de **saída** possua retorno, a tarefa será executada de forma automática novamente.



# Gateway Paralelo

Ao chegar neste componente do processo a solicitação workflow será bifurcada em N saídas permitindo a execução de fluxos paralelos. No fim dos fluxos paralelos será necessário relacionar um objeto de Join que indicará o fim da execução dos fluxos paralelos voltando ao fluxo único do processo.

São criadas duas ou mais atividades, não exibindo para o usuário nenhuma janela de seleção de responsável. Com isso, caso um mecanismo de atribuição de uma destas atividades retorne mais de um responsável, como por exemplo os usuários de um grupo, será selecionado automaticamente o primeiro da lista dos possíveis.



# Gateway Inclusivo

Este componente é uma mescla entre os gateways paralelos e exclusivo. Como no gateway exclusivo, é possível definir expressões lógicas para cada fluxo de saida do gateway. Neste componente todas as expressões serão validadas independente da ordem, sendo que a validação de uma condição verdadeira não impede a validação de outras condições. O processo pode ter todas as condições verdadeiras ou apenas uma, mas nunca pode ter todas as condições falsas. 

As expressões que se confirmarem verdadeiras abrirão um processamento em paralelo que se encerrará no componente de Join.  Em um gateway Inclusivo de três  fluxos de saídas teremos 3 expressões atreladas cada uma a um fluxo de saída. Todas as expressões serão executadas. Caso apenas duas expressões sejam válidas teremos um paralelismo de apenas dois fluxos.

Ex: Imagine que temos um processo de analise de renda em que dependendo da renda do cliente diferentes opções de investimentos e financiamentos serão oferecidos para o cliente. Segue o processo abaixo :

Na lista de condições do gateway Inclusivo temos as seguintes configurações :

Supondo que na execução da solicitação workflow o valor da variável renda seja de 18000. Nesta caso teremos um paralelismo dos fluxos que levam para as atividades "Iniciar financiamento de automóvel" e "Solicitar financiamento de Imóvel" pois o valor 18000 torna verdadeiras as condições de ordem 1 e 2 . A condição da ordem 3 é falsa e não irá ativar o paralelismo do terceiro fluxo.



# Gateway Complexo

Este gateway irá se comportar como o gateway paralelo. Porém antes de de abrir o paralelismo dos diversos fluxos será executado um script que permitirá a execução de diversas operações que poderão estar internalizadas ou não dentro do Fluig. Como a execução de serviços ou a execução de expressões aritméticas através da linguagem javascript. 

Este Gateway deixará de receber atualizações e manutenções. Recomendamos o uso de [atividade de serviço](https://tdn.totvs.com/x/1oSNBw). 



# Gateway Evento

Tipo de gateway especial que se comportará como um gateway paralelo. Porém ele apenas suporta eventos intermediários para serem atrelados com o mesmo . Este gateway poderá ser utilizado como o inicio de um processo fazendo paralelismo logo na abertura de solicitação.

Gateways do tipo evento deixarão de receber atualizações e manutenções. 



# Gateway Evento Exclusivo

Tipo de gateway especial que se comportará como um gateway exclusivo. Porém ele apenas suporta eventos intermediários para serem atrelados com o mesmo. 

Este Gateway deixará de receber atualizações e manutenções. Recomenda-se o uso do Gateway Exclusivo.



# Gateway Evento Paralelo

Tipo de gateway especial que se comportará como um gateway paralelo. Porém ele apenas suporta eventos intermediários para serem atrelados com o mesmo .  Este tipo de gateway não poderá ser utilizado como evento inicial de uma solicitação workflow. 

Este Gateway deixará de receber atualizações e manutenções. Recomenda-se o uso do Gateway Paralelo.





# Gateway de Join

É a entidade que o Fluig utiliza para simbolizar o fim do paralelismos de fluxos . Deverá ser usado no fim dos gateways paralelos.

Caso um *Gateway* Join seja relacionado a uma atividade que não possua mecanismo de atribuição definido, o fluxo será enviado para o primeiro usuário da lista.
