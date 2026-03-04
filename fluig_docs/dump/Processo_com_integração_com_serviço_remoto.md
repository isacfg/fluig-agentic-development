# Processo com integração com serviço remoto

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=603096961](https://tdn.totvs.com/pages/viewpage.action?pageId=603096961)

---

# Índice



# Processo com integração com serviço remoto

* * *

Nesse exemplo, vamos utilizar um processo com integração com um serviço remoto que possui um formulário e é composto pelas seguintes atividades: Início → Integração → Verificar erro de integração → Fim.

Esse tipo de integração pode ser utilizado para validar a informação de um campo do formulário e utilizar o retorno dessa validação para outros fins.

Nesse exemplo, o solicitante vai iniciar o processo e preencher alguns dados no formulário existente. O código e o nome do solicitante já virão preenchidos no formulário, porém, desabilitados.

Em seguida, precisará selecionar um centro de custo. Posteriormente, deve informar o motivo da solicitação. Com base nessa informação, será feita uma integração com um serviço remoto para validar se o campo Motivo foi preenchido corretamente. Ocorrendo tudo certo na validação, um campo desabilitado do formulário é preenchido com o código retornado. Esse código pode ser utilizado posteriormente em outra tarefa do fluxo, para fazer alguma outra validação, preencher automaticamente algum dado etc.



## Componentes utilizados

* * *

Vamos exemplificar o uso dos seguintes componentes que são utilizados nesse processo:

-   parâmetro *WKUser* para trazer o código do usuário no formulário;
-   preenchimento automático de um campo – Nome do usuário – a partir do valor do *WKUser*;
-   evento de formulário *enableField* para desabilitar os campos Código e Nome do usuário no formulário;
-   campo *zoom* com consulta a um *dataset* para permitir a seleção de um centro de custo;
-   integração com serviço remoto com um campo de texto rico;
-   validação de campo na integração;
-   tratamento para o retorno das mensagens de erro durante a integração;
-   preenchimento de um campo desabilitado do formulário com o código da integração.



## Diagrama

* * *

Esse é o diagrama do processo que estamos utilizando como exemplo:



## Desenvolvimento

* * *

Os desenvolvimentos que foram necessários para criar esse processo estão disponíveis para visualização e *download*. Desta forma, você pode baixá-los, ajustar ao seu negócio ou as suas necessidades e utilizá-los nos processos do seu dia a dia!

**[](https://git.fluig.com/projects/SAMPLES/repos/exemplos-avancados-de-processos/browse/integracao-servico)**

**[Clique aqui](https://git.fluig.com/projects/SAMPLES/repos/exemplos-avancados-de-processos/browse/integracao-servico)** para ver e baixar o código fonte dos desenvolvimentos desse processo.

Dica!

O arquivo **README.md** – existente no repositório – contém informações técnicas mais detalhadas. Ao longo dos próprios códigos fonte também existem várias explicações para auxiliar no entendimento e na utilização desse exemplo.
