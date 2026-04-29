# Processo de atualização de pedido de venda no Protheus

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=624102042](https://tdn.totvs.com/pages/viewpage.action?pageId=624102042)

---

# Índice



# Processo de atualização de pedido de venda no Protheus

* * *

Nesse exemplo, vamos utilizar um processo de atualização de pedido de venda no Protheus com as seguintes atividades: Início → Aprovar alteração pedido → Integração → Tratar situação → Fim.

Esse processo é iniciado quando o solicitante deseja efetuar alguma alteração no pedido de venda existente no Protheus. Para isso, ele faz as alterações desejadas em um formulário. Essas alterações são posteriormente aprovadas ou não. Em caso de aprovação, ocorre a atualização efetiva do pedido de venda.



## Componentes utilizados

* * *

Vamos exemplificar o uso dos seguintes componentes que são utilizados nesse processo:

-   desenvolvimento de processo com formulário que permite a atualização de um pedido de venda no Protheus;
-   pai x filho de produtos com *zoom*;
-   validação de preenchimento de valores do pai x filho com *validateForm*;
-   desenvolvimento de *dataset* que consulta *webservice* SOAP do Protheus para atualizar um pedido de venda;
-   criar um *template* de *e-mail*;
-   envio de *e-mail* com pedido – atividade de envio de *e-mail* ou via evento *notifier.notify*.



## Diagrama

* * *

Esse é o diagrama do processo que estamos utilizando como exemplo:



## Desenvolvimento

* * *

Os desenvolvimentos que foram necessários para criar esse processo estão disponíveis para visualização e *download*. Desta forma, você pode baixá-los, ajustar ao seu negócio ou as suas necessidades e utilizá-los nos processos do seu dia a dia!

**[](https://git.fluig.com/projects/SAMPLES/repos/exemplos-avancados-de-processos/browse/atualizacao-pedido-venda-protheus)**

**[Clique aqui](https://git.fluig.com/projects/SAMPLES/repos/exemplos-avancados-de-processos/browse/atualizacao-pedido-venda-protheus)** para ver e baixar o código fonte dos desenvolvimentos desse processo.

Dica!

O arquivo **README.md** – existente no repositório – contém informações técnicas mais detalhadas. Ao longo dos próprios códigos fonte também existem várias explicações para auxiliar no entendimento e na utilização desse exemplo.
