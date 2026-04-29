# Processo de criação de solicitação de compra no RM

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=606649705](https://tdn.totvs.com/pages/viewpage.action?pageId=606649705)

---

# Índice



# Processo de criação de solicitação de compra no RM

* * *

Neste exemplo, vamos utilizar o processo de criação de solicitação de compra no RM,  que utiliza um formulário, o qual possui uma tabela pai x filho orquestrados por *datatable* e preenchida através de modais. Neste *datatable* será possível filtrar as linhas da tabela pai x filho, botões para visualizar um registro, editar um registro e remover um registro. Neste modal teremos um exemplo de validação de preenchimento dos campos do modal, campo zoom e input com máscara.

Eventos de formulários:

*displayFields* - buscará o código e nome do usuário logado via fluigAPI;

*enableFields* - desabilitará campos por atividade do processo e exibindo ou não tag do html com *setVisibleById*;

*validateForm* – exemplo de validação no ato de enviar o formulário após salvá-lo e validar se a tabela pai x filho tem registros.

Fará utilização do campo zoom para buscar os dados no RM, exemplo de *reload* em campo zoom através do preenchimento de outro e campo zoom no modal. 

Dataserver’s utilizados do RM:

-   CtbCCustoData
-   GlbColigadaData
-   EstLOCData
-   CtbFilialData
-   EstPrdDataBR
-   MovMovimentoTBCData



## Componentes utilizados

* * *

Vamos exemplificar o uso dos seguintes componentes que são utilizados nesse processo:

-   Utilização de campo zoom com consulta a um *dataset*;
-   Utilização da função *setSelectedZoomItem*;
-   Utilização da função *reloadZoomFilterValues*;
-   Utilização de *datatable*;
-   Utilização de *modal*;
-   Utilização de *mustache*;
-   Evento de formulário *enableField* para bloqueio de campos;
-   Evento de formulário *displayFields* para carregar campos;
-   Evento de formulário *validateForm* para validar o preenchimento dos campos;
-   Preenchimento automático de campo;
-   Integração com serviço do RM.



## Diagrama

* * *

Esse é o diagrama do processo que estamos utilizando como exemplo:





## Desenvolvimento

* * *

Os desenvolvimentos que foram necessários para criar esse processo estão disponíveis para visualização e *download*. Desta forma, você pode baixá-los, ajustar ao seu negócio ou as suas necessidades e utilizá-los nos processos do seu dia a dia!

**[](https://git.fluig.com/projects/SAMPLES/repos/exemplos-avancados-de-processos/browse/solicitacao-compra-rm)**

**[Clique aqui](https://git.fluig.com/projects/SAMPLES/repos/exemplos-avancados-de-processos/browse/solicitacao-compra-rm)** para ver e baixar o código fonte dos desenvolvimentos desse processo.

Dica!

O arquivo **README.md** – existente no repositório – contém informações técnicas mais detalhadas. Ao longo dos próprios códigos fonte também existem várias explicações para auxiliar no entendimento e na utilização desse exemplo.
