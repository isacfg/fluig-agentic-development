# Processo de cadastro de fornecedor

> **Fonte:** [https://tdn.totvs.com/display/fluig/Processo+de+cadastro+de+fornecedor](https://tdn.totvs.com/display/fluig/Processo+de+cadastro+de+fornecedor)

---

# Índice



# Processo de cadastro de fornecedor

* * *

Nesse exemplo, vamos utilizar o processo de cadastro de fornecedor com as seguintes atividades: Início → Publicar documentos no GED → Erro ao publicar documentos e Fim.

Este processo é iniciado quando se tem a necessidade de cadastrar um fornecedor através de uma solicitação. Para isso, será necessário preencher um formulário com as informações solicitadas.

Neste processo teremos validações de CPF ou CNPJ, validação de CEP, busca de endereço automaticamente através do CEP e também a utilização de máscaras para os campos de Contato, CPF, CNPJ e CEP. O uso das máscaras garante a correta utilização e validação dos campos.

No final do cadastro teremos uma integração com o GED, permitindo assim selecionar uma pasta de destino a fim de guardar os anexos da solicitação.



## Componentes utilizados

* * *

Vamos exemplificar o uso dos seguintes componentes que são utilizados nesse processo:

-   Consulta de CEP com validação a API externa;
-   Autocomplete para preenchimento de campos;
-   Validação de campos;
-   Utilização de máscaras em alguns campos;
-   Integração no GED ao final do processo para criação de pasta por fornecedor e publicação dos anexos.



## Diagrama

* * *

Este é o diagrama do processo que estamos utilizando como exemplo:

Importante

Lembre-se sempre de configurar a pasta na qual serão incluídos os anexos da solicitação.



## Desenvolvimento

* * *

Os desenvolvimentos que foram necessários para criar esse processo estão disponíveis para visualização e *download*. Desta forma, você pode baixá-los, ajustar ao seu negócio ou as suas necessidades e utilizá-los nos processos do seu dia a dia!

**[](https://git.fluig.com/projects/SAMPLES/repos/exemplos-avancados-de-processos/browse/cadastro-fornecedor)**

**[Clique aqui](https://git.fluig.com/projects/SAMPLES/repos/exemplos-avancados-de-processos/browse/cadastro-fornecedor)** para ver e baixar o código fonte dos desenvolvimentos desse processo.

Dica!

O arquivo **README.md** – existente no repositório – contém informações técnicas mais detalhadas. Ao longo dos próprios códigos fonte também existem várias explicações para auxiliar no entendimento e na utilização desse exemplo.
