# Processo para validar um documento após sua publicação

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=648426407](https://tdn.totvs.com/pages/viewpage.action?pageId=648426407)

---

# Índice



# Processo para validar um documento após sua publicação

* * *

Nesse exemplo, vamos utilizar uma abertura de processo para validar um documento após sua publicação em uma determinada pasta, a qual possui um formulário e é composto pelas seguintes atividades: Início → Tomar Ciência → Fim.

Todo documento publicado dentro de uma pasta mapeada inicia um processo *workflow,* ou seja, um fluxo de trabalho, onde é remetido para todas as pessoas de um grupo a qual cada usuário deverá acessar este documento e consequentemente tomar ciência do mesmo.

Nesse exemplo, vamos utilizar um evento global do Fluig para iniciar uma solicitação de um fluxo de trabalho automaticamente após a publicação de um [documento](https://tdn.totvs.com/x/HfHuDQ) em uma pasta mapeada para leitura.

Após a publicação do documento, uma solicitação *workflow* é gerada e enviada para todos os usuários cadastrados no grupo ‘Tomar Ciência Documento’. É apresentado um formulário com algumas informações básicas do documento publicado, bem como um botão para acesso direto ao link do documento, gerando assim a ciência do mesmo. No entanto, caso o documento não seja acessado e o usuário tentar enviar a solicitação, uma mensagem de erro é apresentada informando a necessidade de acesso.

## Componentes utilizados

* * *

Vamos exemplificar o uso dos seguintes componentes Fluig:

-   Criação de eventos globais (nesse desenvolvimento foi implementado o afterDocumentPublisher);
-   Abertura de processos através da API Fluig (/process-management/api/v2/processes/ciencia\_publicacao\_documento/start);
-   Criação de um processo *workflow*;
-   Criação de um formulário;
-   Validações de formulário.



## Diagrama

* * *

Esse é o diagrama do processo que estamos utilizando como exemplo: 



## Requisitos para o funcionamento do desenvolvimento

* * *

-   Publicar o formulário form\_ciencia\_documento\_publicado em uma pasta do GED;
-   Cadastrar um grupo com o código tomar-ciencia-documento e adicionar os usuários responsáveis pela análise do documento. Case queira escolher outro código para o grupo, é necessário alterar no mecanismo de atribuição da atividade Tomar Ciência do processo;
-   Cadastrar um serviço do tipo REST chamado fluigAPI no painel de controle tendo como domínio http://<ENDERECO\_FLUIG>:<PORTA> e tipo de autenticação Fluig API;
-   Publicar o processo ciencia\_publicacao\_documento.process;
-   Alterar no evento global afterDocumentPublisher a pasta que será mapeada através da constante "const PASTA";



## Desenvolvimento

* * *

Os desenvolvimentos que foram necessários para criar esse processo estão disponíveis para visualização e *download*. Desta forma, você pode baixá-los, ajustar ao seu negócio ou as suas necessidades e utilizá-los nos processos do seu dia a dia!

**[](https://git.fluig.com/projects/SAMPLES/repos/exemplos-avancados-de-processos/browse/integracao-servico)**

**[Clique aqui](https://git.fluig.com/projects/SAMPLES/repos/exemplos-avancados-de-processos/browse/publicacao-de-documento-iniciando-processo)** para ver e baixar o código fonte dos desenvolvimentos desse processo.

Dica!

O arquivo **README.md** – existente no repositório – contém informações técnicas mais detalhadas. Ao longo dos próprios códigos fonte também existem várias explicações para auxiliar no entendimento e na utilização desse exemplo.
