# Processo de atendimento de chamados

> **Fonte:** [https://tdn.totvs.com/display/fluig/Processo+de+atendimento+de+chamados](https://tdn.totvs.com/display/fluig/Processo+de+atendimento+de+chamados)

---

# Índice



# Processo de atendimento de chamados

* * *

Nesse exemplo, vamos utilizar um processo de atendimento de chamados com as seguintes atividades: Início → Atendimento → Aprovação da solução → Fim.

Esse processo é iniciado quando um cliente abre um chamado para tratar algum assunto. Para isso, ele vai preencher os dados solicitados no formulário e precisará obrigatoriamente enviar um anexo para exemplificar sua solicitação. Neste momento, é criada uma pasta com o número da solicitação e feita uma cópia de todos os anexos da atividade para esta pasta. 

O grupo de atendimento para o qual o chamado foi encaminhado receberá uma notificação informando que há um novo chamado pendente. Um atendente assumirá o chamado e, nesse momento, será definida a segurança de anexos atribuindo permissão de acesso a todos os envolvidos no chamado. Em seguida, o atendente realizará o atendimento e enviará uma solução.

Depois que a solução é enviada, o cliente tem um prazo de 2 dias para aprová-la ou retornar com mais questionamentos. Passados os 2 dias, se não houver a aprovação ou um retorno por parte do cliente, a solução será aprovada automaticamente e o chamado será encerrado. Com o chamado finalizado, é automaticamente enviada uma pesquisa de satisfação para que o cliente informe o que ele achou do atendimento em geral.



## Componentes utilizados

* * *

Vamos exemplificar o uso dos seguintes componentes que são utilizados nesse processo:

-   obrigatoriedade da inclusão de anexos na primeira atividade;
-   criação de uma pasta com o número da solicitação e cópia de todos os anexos da atividade para esta pasta;
-   segurança de anexos para atribuir permissão para quem deve ter acesso;
-   comando *notifier.notify* para grupos de atendimento;
-   fluxo automático de aprovação caso expire o prazo de conclusão da atividade. Na atividade de aprovação da solução é possível colocar um prazo de 2 dias para finalizar automaticamente;
-   envio de uma nova solicitação de *feedback –* depois de finalizar o processo via WS *–* contendo o código da solicitação original, o nome da pessoa que abriu o chamado e o nome do atendente.



## Diagrama

* * *

Esses são os diagramas do processo que estamos utilizando como exemplo:

## Desenvolvimento

* * *

Os desenvolvimentos que foram necessários para criar esse processo estão disponíveis para visualização e *download*. Desta forma, você pode baixá-los, ajustar ao seu negócio ou as suas necessidades e utilizá-los nos processos do seu dia a dia!

**[](https://git.fluig.com/projects/SAMPLES/repos/exemplos-avancados-de-processos/browse/atendimento-chamados)**

**[Clique aqui](https://git.fluig.com/projects/SAMPLES/repos/exemplos-avancados-de-processos/browse/atendimento-chamados)** para ver e baixar o código fonte dos desenvolvimentos desse processo.

Dica!

O arquivo **README.md** – existente no repositório – contém informações técnicas mais detalhadas. Ao longo dos próprios códigos fonte também existem várias explicações para auxiliar no entendimento e na utilização desse exemplo.
