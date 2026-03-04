# Mensagens de log para processos

> **Fonte:** [https://tdn.totvs.com/display/fluig/Mensagens+de+log+para+processos](https://tdn.totvs.com/display/fluig/Mensagens+de+log+para+processos)

---

# Índice

# Objetivo

* * *

O objetivo deste guia é auxiliar o suporte e desenvolvedores da plataforma a ativar e compreender um novo conjunto de mensagens de log que trazem informações relevantes sobre a solicitação de processo durante as fases de abertura e movimentação, passando por eventos de processo e datasets que venham a ser consultados dentro desses eventos.

Os tópicos a seguir irão demonstrar como ativar essas mensagens e farão uma breve descrição de todos os campos retornados.



# Pré-requisitos

* * *

Para ativar e monitorar as mensagens de log, é importante conhecer o procedimento de [Gestão de logs](https://tdn.totvs.com/pages/viewpage.action?pageId=203764136).  



# Ativando o modo Debug nos pacotes que possuem o novo padrão de mensagem.

Para ativação das mensagens o analista ou desenvolvedor deverá ter executado previamente os passos do guia [Ativar log em nível de debug de uma classe ou pacote](https://tdn.totvs.com/pages/viewpage.action?pageId=203764136).

Atenção

A ativação do modo Debug pode causar impacto na performance da plataforma, portanto habilite-a apenas quando necessário e desative-a ao concluir a análise.

Feitos estes passos é necessário cadastrar três categorias de log:

*com.datasul.technology.webdesk.customization*

DEBUG

*com.datasul.technology.webdesk.dataset*

DEBUG

*com.datasul.technology.webdesk.workflow.engine*

DEBUG

Cadastradas as 3 categorias, as mensagens no novo formato irão começar a aparecer no log.



# Mensagens de ações em tela

* * *

As mensagens de ações em tela irão começar trazendo o número da solicitação no inicio da mensagem. Supondo que a solicitação que estamos monitorando tenha o número 107 então o começo da linha será formado desta forma:

*"\[Solicitacao: 107\]"* 

Veja a seguir os campos que acompanham a mensagem:

Campo

Descrição

Evento

Acontecimento realizado pelo usuário através da interface do fluig executado dentro do motor de Workflow. São exemplos de eventos:

-   Completando tarefa do usuário\[TAR\_PROCES\]
-   Verificando se atividade 4 é automática.
-   Criando tarefa para a thread 0 e movimento 3
-   Completando histórico do movimento 2

Atividade Atual

Traz informações sobre a tarefa atual. Geralmente é retornado o código da atividade que pode ser verificado nos modeladores de workflow do fluig. As vezes também é retornado o nome da atividade.

Usuário Executor

Usuário que executou a tarefa. ColleagueId do usuário que executou a tarefa. O usuário que executou a tarefa não necessariamente é o usuário responsável. Lembre-se que o gestor e o substituto podem executar tarefas em nome do usuário responsável.

Gestor

Retorna se o usuário executor é gestou ou não

Substituto

Retorna se o usuário é substituto ou não.



# Mensagens exibidas antes e depois da execução de um evento de customização de processo

* * *

Além do cabeçalho inicial já citado no tópico anterior são impressas as seguintes informações:

Campo

Descrição

Processo

Código e descrição do processo.

Versão

Versão do processo da onde está sendo executado aquele evento.

Atividade

Atividade aonde o evento está sendo executado.

Usuário Executor

Usuário que irá executar o evento do processo.

Gestor

Retorna se o usuário executor é gestou ou não

Substituto

Retorna se o usuário é substituto ou não.

Evento

Código do Evento.

Mensagem

Mensagem extra que trará informações diferentes de acordo com o evento executado ou retornará a mensagem de erro caso ocorra algum.



# Mensagens exibidas na invocação dos métodos de personalização de processo

* * *

Essas mensagens são executadas no exato momento em que o motor de JavaScript será invocado para rodar os scripts passando informações de motor de *workflow* como parâmetro.

Além do cabeçalho inicial já citado no tópico anterior são impressas as seguintes informações:

Campo

Descrição

Processo

Código e descrição do processo.

Versão

Versão do processo da onde está sendo executado aquele evento.

Atividade

Atividade aonde o evento está sendo executado.

Usuário Executor

Usuário que irá executar o evento do processo.

Gestor

Retorna se o usuário executor é gestou ou não

Substituto

Retorna se o usuário é substituto ou não.

Estado atual

Código do estado atual da solicitação workflow. Trará apenas o código e não a descrição da atividade.

Estado Destino

Trará o código do estado destino (quando possível). Trará apenas o código e não a descrição da atividade.

Evento executado

Retornará o nome do evento que está sendo executado naquele momento.

Parâmetros

Trará a lista de parâmetros que estão sendo passados para o evento. Exemplo de lista de parametros passados para o evento BeforeTaskComplete:

Parâmetros: *\[param1=claudia,param2=4,param3=\[Andressa\]\]*



# Mensagens exibidas na consulta de datasets

* * *

Essas mensagens serão exibidas na consulta de qualquer dataset independente da forma e do local em que ela é feita. Consultas realizadas pelo plugin do fluig Studio, por eventos de processo, por *zooms*, em chamadas XMLRPC dentro do formulário ou mesmo dentro de eventos do processo.

Datasets não possuem um relacionamento direto com solicitações workflow. Neste caso as linhas de datasets consumidos começam com a string "Executando Dataset".

Segue a lista de colunas que serão exibidas ao consultar um dataset no fluig.

Campo

Valor

Executando Dataset

Código - Descrição do dataset sendo consultado

Tipo

Tipo do dataset. Os datasets podem ser: *internos*, *simples* ou *avançados*.

Para conhecer as diferenças sobre esses tipos, acesse a documentação [Desenvolvimento de Datasets](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Datasets).

Tipo de acesso a dados

Retorna dois tipos possíveis de acessos a dados:

-   *Online* - Acesso online. No caso de datasets customizados toda vez que o dataset for consultado serão executados scripts de retorno que podem fazer acessos a bancos de dados externos, webservices e informações provindas das mais diversas naturezas.
-   *Offline* - Acesso ao cache - Significa que o dataset possui sincronização com o servidor e que as consultas feitas neste dataset estão sendo repassadas para tabelas internas do fluig previamente populadas.

Campos Solicitados

Lista de campos que foram solicitados para o dataset retornar.

Constraints

Lista de Constraints que foram passadas para a consulta do dataset.

Os campos que uma constraint possuem são:

-   **Campo**: Campo aonde a constraint será operada
-   **Valor Inicial**: Valor inicial do Range da constraint
-   **Valor Final**: Valor final do Range da constraint
-   **Tipo de Constraint**: Tipos de constraint como **MUST**, **SHOULD** e **SHOULD\_NOT**



Para datasets do tipo *offline*, além das informações acima também são trazidos os seguintes campos:

Campo

Valor

Última sincronização

Data e hora da última sincronização desse dataset.

Taxa de aderência

Nível de aderência que aquele dataset possui para sincronização com o mobile.

Id metalista

Id da metalista onde estão sendo armazenados os valores daquele dataset.

Cache mobile

Retorna se, para aquele dataset, está habilitada a opção de uso do cache em dispositivos móveis.



# Filtrando as novas mensagens de log

* * *

Através da Strings "\[Solicitacao: Número da solicitação\]"  e "Executando Dataset=Código do dataset" é possível rastrear o comportamento de uma solicitação workflow ou verificar e replicar todos os tipos de acesso que um dataset teve dentro da plataforma fluig.

Aconselhamos o uso de ferramentas de log que trabalhem com os conceitos de Filtros e *Highlighting* (Realce) para facilitar a compreensão do que está acontecendo dentro do ambiente do seu cliente. 

Durante o desenvolvimento inicial deste novo padrão de mensagens foi utilizada a ferramenta LogExpert que implementa esses conceitos e trabalha com a Licença MIT, podendo ser utilizado gratuitamente por profissionais dos mais diversos perfis.



Outras ferramentas para análise de log podem ser encontradas no guia [Análise de log](https://tdn.totvs.com/pages/viewpage.action?pageId=235336390) do dev.fluig.com.

Observação

Em futuras versões do fluig serão implementadas mais - e melhores - mensagens que irão facilitar o dia a dia dos desenvolvedores que precisam localizar a causa de uma inconsistência dentro dos desenvolvimentos sobre a plataforma fluig.
