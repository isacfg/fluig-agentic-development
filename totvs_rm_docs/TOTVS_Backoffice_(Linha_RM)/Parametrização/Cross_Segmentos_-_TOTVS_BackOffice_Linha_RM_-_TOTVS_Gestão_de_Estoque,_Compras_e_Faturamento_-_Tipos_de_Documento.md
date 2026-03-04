# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Tipos de Documento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/8550418462487-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Tipos-de-Documento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/8550418462487-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Tipos-de-Documento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 31 de agosto de 2022 às 15:56

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00:04:00 min
**

**Dúvida**Como cadastrar os Tipos de Documentos utilizando o módulo de Gestão de Estoque, Compras e Faturamento?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões

**Solução**

Para cadastrar um novo Tipo de Documento, será necessário seguir os passos abaixo. Através deste cadastro é possível controlar os tipos de documentos e classificar os lançamentos Financeiros/Fiscais.

-   Acesse o módulo Gestão de Estoque, Compras e Faturamento > Cadastros > Mais > Tipo de Documento.

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/8549753430167/mceclip0.png)

-   Selecione o filtro Todos para mostrar todos os tipos de documentos já cadastrados no sistema.
-   A tela fornecerá a opção de criar uma nova coluna, para isso deve-se abrir a janela ''novo'', clique no **ícone de incluir** ( folha em branco ou símbolo + ).

![mceclip3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/8549898195991/mceclip3.png)

-   Será aberta uma nova tela, e nela deverá ser preenchido todos os campos em negrito para que seja permitido salvar esse novo tipo de documento.
-   Preencha em **Descrição** o nome do documento.

![mceclip4.png](https://centraldeatendimento.totvs.com/hc/article_attachments/8549916561047/mceclip4.png)

Significado dos campos:

Inativo

Na inclusão de novo tipo de documento o sistema carrega como default a opção desmarcada classificando o cadastro como “Ativo”.

Se marcada a opção o cadastro é classificado como “Inativo” e não será apresentado para seleção nos lookups disponíveis nos processos do financeiro.

Classificação

Existem alguns processos que necessitam de tipos de documento específicos. Para identificar estes tipos é necessário definir uma classificação para o tipo de documento:

-   Previsão
-   Adiantamento
-   Crédito de Adiantamento
-   Devolução
-   Vendor
-   Nota de Crédito
-   Gera IRRF
-   Gera IRRF-PF Alíquota Fixa
-   Gera INSS
-   Gerar IRRF e INSS

Pagar ou Receber

Você pode definir que o Tipo de Documento seja apresentado apenas para lançamentos a "Pagar" ou apenas para lançamentos a "Receber" ou para lançamentos a "Pagar e a Receber".

Gera Número do Documento

Através deste campo é possível definir se o número do documento será definido pelo usuário, gerado sequencialmente ou cópia da referência do lançamento. Se o campo estiver definido como "Definido pelo usuário" ao incluir um lançamento financeiro via interface utilizando esse tipo de documento, o usuário poderá informar manualmente no campo número do documento um valor definido pelo próprio, permitindo inclusive alterar quando lançamento já baixado. Se o campo estiver definido como "Gerar número do documento sequencialmente" o sistema iniciará o processo de geração do número automaticamente a partir da inserção do primeiro lançamento que utiliza este código do tipo de documento parametrizado. Se o campo estiver definido como "Copiar referência" o sistema irá copiar a referência do lançamento financeiro para o campo tipo de documento.

-   Utilizando as opções "Gerar número do documento sequencialmente" ou "Copiar referência" não será possível editar o número do documento no lançamento.
-   A opção "Definido pelo usuário" não se aplica quando inclusão do lançamento ocorre a partir de outros módulos. Neste caso, quando a numeração não é enviada pela origem, preenche de acordo com a opção sequencial.

Cliente/Fornecedor

Você pode definir que o tipo de documento seja utilizado apenas em lançamentos financeiros de um determinado cliente/fornecedor.

Consistir Cliente/Fornecedor

A consistência de Limite de Crédito, Cliente em Atraso e Cadastro Vencido será realizada através do Tipo de Documento quando a opção "Consistir Cliente/Fornecedor" estiver marcada.

-   Caso esteja marcada a flag "Consistir Cliente/Fornecedor" clique nos "**...**" e selecione aquele que se encaixa ao documento.

![mceclip5.png](https://centraldeatendimento.totvs.com/hc/article_attachments/8549997596311/mceclip5.png)

-   Após todo preenchimento clique em **Salvar** e o documento estará disponível para utilização dentro do sistema.

![mceclip6.png](https://centraldeatendimento.totvs.com/hc/article_attachments/8550057974423/mceclip6.png)

**Importante**

Não é possível cadastrar um documento com um **Código** que já anteriormente foi cadastrado. 

Ao tentar salvar com um código já existente será apresentado a mensagem de erro:

![mceclip7.png](https://centraldeatendimento.totvs.com/hc/article_attachments/8550099974423/mceclip7.png)

**Dicas**

-   A permissão para visualização de informações ou realização de processos deste módulo pode ser configurada por usuário ou por perfis, no menu Segurança dos Serviços Globais.
-   Na inclusão de um novo registro é possível que algumas informações já sejam apresentadas por default, para isso, edite um cadastro já existente, clique com o botão direito do mouse sobre a informação desejada, posicione o cursor do mouse sobre a opção "Valor Default" e clique sobre a informação.
-   As informações de alguns campos podem ser obrigatórias, para isso, clique com o botão direito do mouse sobre o campo e clique sobre a opção "Preenchimento Obrigatório".
-   Ao clicar sobre o nome de algumas informações a janela de edição do cadastro da informação é apresentada.
-   Através da funcionalidade "Configurar Colunas", ícone localizado na barra de ferramentas, define-se quais colunas serão apresentadas na janela de visão dos registros.

Para mais informações relacionadas a Tipos de Documento, segue documentação:

[RM - Tipos de Documento](https://tdn.totvs.com/pages/releaseview.action?pageId=421388695)
