# Processo de cadastro de centro de custo no RM

> **Fonte:** [https://tdn.totvs.com/display/fluig/Processo+de+cadastro+de+centro+de+custo+no+RM](https://tdn.totvs.com/display/fluig/Processo+de+cadastro+de+centro+de+custo+no+RM)

---

# Índice



# Processo de cadastro de centro de custo no RM

* * *

Nesse exemplo, vamos utilizar um processo de cadastro de centro de custo no RM que possui um formulário e é composto pelas seguintes atividades: Início → Cadastrar Centro de Custo → Fim ou Cancelar.

Esse processo é iniciado para incluir um centro de custo na base de dados do RM. O formulário do processo tem 3 campos de texto: CODCOLIGADA, CODCCUSTO e NOME.

Para o processo foi criado um *script* de evento *Workflow* do tipo *beforeTaskSave* onde está a codificação para salvar o centro de custo.



## Componentes utilizados

* * *

Vamos exemplificar o uso dos seguintes componentes que são utilizados nesse processo:

-   formulário que permite a inclusão de um centro de custo no RM.



## Diagrama

* * *

Esse é o diagrama do processo que estamos utilizando como exemplo:



## Desenvolvimento

* * *

Os desenvolvimentos que foram necessários para criar esse processo estão disponíveis para visualização e *download*. Desta forma, você pode baixá-los, ajustar ao seu negócio ou as suas necessidades e utilizá-los nos processos do seu dia a dia!

**[](https://git.fluig.com/projects/SAMPLES/repos/exemplos-avancados-de-processos/browse/cadastro-centro-custos-rm)**

**[Clique aqui](https://git.fluig.com/projects/SAMPLES/repos/exemplos-avancados-de-processos/browse/cadastro-centro-custos-rm)** para ver e baixar o código fonte dos desenvolvimentos desse processo.

Dica!

O arquivo **README.md** – existente no repositório – contém informações técnicas mais detalhadas. Ao longo dos próprios códigos fonte também existem várias explicações para auxiliar no entendimento e na utilização desse exemplo.
