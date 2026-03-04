# Integração Com Totvs Colaboração

> **23 artigos**

---

## Sumário

- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Acompanhamento de Arquivos Recebidos
- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Automatização de Importação de Arquivo XML TOTVS Colaboração
- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Erro: Não foi possível encontrar a Coligada correspondente ao CNPJ favor verificar o cadastro de Filiais
- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Importação de NF-e/NFS-e/CT-e de entrada através de XML sem Parceiros
- TSRMCN ER Inclusão de Movimento através de XML TOTVS Colaboração 🔗 _(_links_externos)_
- 1277238 MATFATCMPCRM01-1120 DT Recebimento de CT-e através de XML TOTVS Colaboração 🔗 _(_links_externos)_
- Manual Totvs Colaboração 2.0 🔗 _(_links_externos)_
- MATFATCMPCRM01-2833_DT_Importação_de_NF-e_e_CT-e 🔗 _(_links_externos)_
- Parametrização (TOTVS Colaboração 2.0) 🔗 _(_links_externos)_
- TSRMCN DT Recebimento Automático de NF-e 🔗 _(_links_externos)_
- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Erro ao Consultar XML (Estouro de SqlDateTime)
- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - IMPXML - XML status Pendente
- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - XML não enviado para pasta IN
- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT-  Tipos de Recebimento de NF-e TOTVS Colaboração versão 2.0
- TSRMCN DT Recebimento Automático de NF-e 🔗 _(_links_externos)_
- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - TOTVS Colaboração: Tradução automática de itens para produto diferente do definido.
- Cross Segmentos - TOTVS BackOffice Linha RM - Gestão de Estoque, Compras e Faturamento - COLAB - Não existem arquivos a serem importados na Importação de NF-e e CT-e sem NEOGRID
- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como solucionar o erro "Não existem arquivos a serem importados" no TOTVS Colaboração 2.0
- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Seleção de Filial ao incluir XML de CT-e
- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Seleção de Natureza de Operação utilizando TOTVS Colaboração
- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como utilizar e incluir movimento através do TOTVS Colaboração versão 2.0
- TSRMCN ER Inclusão de Movimento através de XML TOTVS Colaboração 🔗 _(_links_externos)_
- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Principais Parametrizações do Processo Importação de Arquivos XML

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Acompanhamento de Arquivos Recebidos

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008691528-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Acompanhamento-de-Arquivos-Recebidos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008691528-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Acompanhamento-de-Arquivos-Recebidos)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
> **Data:** 24 de janeiro de 2022 às 10:05

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:03:00 min**

**
Ocorrência
**Como acompanhar os arquivos do TOTVS Colaboração 2.0

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**Causa
**Acompanhamento de Arquivos Recebidos TOTVS Colaboração 2.0

**Solução
**Para acompanhar os arquivos recebidos, basta acessar o menu **Compras** | **TOTVS Colaboração – Cadastro XML**. Os arquivos são exibidos nesta tela automaticamente após passarem pela validação inicial, através da importação via Monitor TOTVS Colaboração.

Para importação via TOTVS Colaboração 2.0, dois status são considerados:

-   **Inconsistente**: o arquivo XML não foi incluído devido a alguma inconsistência. Por ex**.**: Filial não encontrada. Neste caso, o sistema permite o preenchimento manual da Filial, através de um duplo clique no registro.
-   **Válido**: o arquivo foi incluído corretamente.

Os registros podem assumir outros status (Pendente, Enviado para validação, etc.), mas eles são utilizados apenas quando há a inclusão manual de um arquivo somente quando utilizada a versão 1.0 do TOTVS Colaboração. Essa inclusão foi descontinuada a partir da versão 2.0 portanto não recomenda-se utiliza-la.***[

](http://wikihelp.totvs.com.br:1210/WikiHelp/EST/EST.Inclus%C3%A3oDocumentosFiscaisViaImporta%C3%A7%C3%A3oXML.aspx)***Todos os arquivos recebidos via importação do TOTVS Colaboração 2.0 já foram validados junto à SEFAZ pela Neogrid.

Para cada registro, é informado o tipo de serviço a que ele se refere (CT-e, NF-e, etc.) através da coluna **Tipo do XML**. A flag **Importado TOTVS Colaboração** diferencia os registros importados daqueles incluídos manualmente, e o campo **Ident**. Movimento indica se já foi criado um movimento para aquele arquivo XML.


![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360004091612/mceclip0.png)

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Automatização de Importação de Arquivo XML TOTVS Colaboração

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008535907-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Automatiza%C3%A7%C3%A3o-de-Importa%C3%A7%C3%A3o-de-Arquivo-XML-TOTVS-Colabora%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008535907-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Automatiza%C3%A7%C3%A3o-de-Importa%C3%A7%C3%A3o-de-Arquivo-XML-TOTVS-Colabora%C3%A7%C3%A3o)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
> **Data:** 19 de fevereiro de 2025 às 09:43

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/30086041828119)**Tempo aproximado para leitura: **00:03:30 min**

**
Ocorrência
**Automatização de processos no **TOTVS Colaboração**.

**
Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**
Causa**

Os Jobs são necessários para uma verificação contínua dos arquivos contidos na pasta IN. Para a execução dos Jobs, é necessário que o ambiente esteja configurado em **Três Camadas** e que o **Host** esteja funcionando corretamente. Desta forma, ao executar o sistema, os Jobs já estarão prontos.

Para o TOTVS Colaboração, é possível realizar o agendamento dos Jobs ou executá-los manualmente. Para ambas as situações, é necessário acessar o menu **Integrações** **| Monitor de Arquivos TOTVS Colaboração**.

![Screenshot_10.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4409279111191)

**Solução**

Existem dois Jobs a serem executados para que os arquivos XML existentes na pasta IN sejam importados. 

**1 -** **Importação de Arquivos – Totvs Colaboração:** esse Job  é um Job Global, responsável por buscar os documentos existentes na pasta IN e distribuí-los por coligada. Neste momento, nenhuma validação é feita. Após a execução desse Job, os documentos lidos são exibidos no **Monitor de arquivos** com o status **Pendente**,  aguardando a ação do segundo Job. Serão exibidos apenas os documentos destinados à Coligada do usuário logado. Para executar esse Job, deve- se ir em **Processos | Importação de Arquivos XML**.

![Screenshot_11.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4409279114903)

**2 -** **Serviço de Consulta de arquivo XML:** esse Job é responsável por validar o arquivo XML do documento enviado, de acordo com o tipo de documento em questão (CT-e, NF-e, NFS-e, etc.), através da chamada do serviço especifico para cada um deles. Serão verificados todos os documentos lidos pelo 1º Job. Caso o documento esteja válido, o registro do arquivo é excluído do monitor, e passa a ser exibido na tela  **Compras | Importação de Arquivo XML - Cadastro XML**,  indicando que o mesmo foi incluído no sistema com sucesso. 

Caso seja encontrado algum  problema no arquivo importado, o status do registro é alterado para **Inconsistente**. Para verificar o erro, basta um duplo clique no registro para que seja exibido o seu Log.

Quando o arquivo está Inconsistente, é necessário corrigir a causa do erro para tentar incluí-lo no sistema. Neste caso, o registro pode ser excluído, ou seu status pode ser alterado manualmente para Pendente através do processo **Alterar status do Arquivo**.

![Screenshot_12.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4409279240855)

Este Job é responsável também por realizar as consultas dos serviços do TOTVS Colaboração, atualizando os status dos documentos fiscais. Dessa forma, ele substitui os processos de consulta hoje disponíveis para cada tipo de documento fiscal individualmente.

**Agendamento de JOB**

Conforme citado, os dois Jobs podem ser executados imediatamente, ou agendados para funcionarem periodicamente. Para que não seja necessária uma constante intervenção manual do usuário, é indicado que o agendamento seja realizado.

Ao acessar os menus de acesso aos Jobs (acima citados), será exibida a tela abaixo, onde o usuário terá como escolha as opções **Agora** e **Executar em**. Ao escolher o segundo item, o usuário poderá agendar uma execução única (marcando o item **Não repetir**), ou periódica , configurando os dias , horários e frequência de execução. A partir daí, a ação manual do usuário não será mais necessária.

**Observação:** Caso a tela de agendamento seja acessada novamente, não será possível visualizar a configuração do agendamento realizada, pois ela sempre traz a configuração original quando aberta (Horas de execução = Agora). Isso não quer dizer, entretanto, que o agendamento foi perdido. Será possível verificar a programação de execução dos Jobs na tela **Gerenciamento de Jobs.**

**
![Screenshot_13.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4409279541655)
**

**Gerenciamento de JOB**

A tela de Gerenciamento de Jobs (em **Ambiente | Gerenciamento de Jobs**) controla todos os Jobs em execução, executados e que estão por executar. Para os executados, é possível verificar se houve sucesso ou não na execução, identificar a causa da falha em caso de erro, e a quantidade de arquivos verificados em caso de sucesso. Para os não executados, é possível verificar o dia/hora das próximas execuções.

![Screenshot_14.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4409270262807)

![Screenshot_15.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4409270266007)

Para identificar o JOB agendado basta verificar a coluna **Tipo da Recorrência** que estará preenchido com o valor 3. Caso queira cancelar o agendamento realizado será necessário excluir este job com o **Tipo da Recorrência igual a 3**.

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Erro: Não foi possível encontrar a Coligada correspondente ao CNPJ favor verificar o cadastro de Filiais

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/35435361056279-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Erro-N%C3%A3o-foi-poss%C3%ADvel-encontrar-a-Coligada-correspondente-ao-CNPJ-favor-verificar-o-cadastro-de-Filiais](https://centraldeatendimento.totvs.com/hc/pt-br/articles/35435361056279-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Erro-N%C3%A3o-foi-poss%C3%ADvel-encontrar-a-Coligada-correspondente-ao-CNPJ-favor-verificar-o-cadastro-de-Filiais)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
> **Data:** 6 de outubro de 2025 às 11:02

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/35435361030935)
 Tempo aproximado para leitura: **00:03:00 min**

**Ocorrência**
Ao tentar importar o XML ao sistema é apresentado a mensagem de erro: **Não foi possível encontrar a Coligada correspondente ao CNPJ X, favor verificar o cadastro de Filiais.**

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa** 
Essa mensagem de erro é apresentada devido o CNPJ da filial contida no XML não está cadastrada no sistema, ou não está parametrizada para a importação.
**ATENÇÃO:** O XML não é baseado em CNPJ de coligada.

**Solução**
Para importação do XML, além de ter a filial cadastrada na GFILIAL é necessário acessar o menu: Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Integrações > Fiscal > Parâmetros por Filial > Selecionar a filial e parametrizar as etapas Importação/Envio de Arquivo XML 1/2 e Importação/Envio Arquivo XML 2/2.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/35435393684375)

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/35435393685015)

Observação

-   Caso a filial ainda não esteja cadastrada, será necessário realizar o cadastro primeiro para, em seguida, efetuar a parametrização.

Para mais informações sobre as parametrizações, acesse:

[MAT - Principais Parametrizações do Processo Importação de Arquivos XML](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008532827-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Principais-Parametriza%C3%A7%C3%B5es-do-Processo-Importa%C3%A7%C3%A3o-de-Arquivos-XML?source=search)

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Importação de NF-e/NFS-e/CT-e de entrada através de XML sem Parceiros

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/5552805375255-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Importa%C3%A7%C3%A3o-de-NF-e-NFS-e-CT-e-de-entrada-atrav%C3%A9s-de-XML-sem-Parceiros](https://centraldeatendimento.totvs.com/hc/pt-br/articles/5552805375255-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Importa%C3%A7%C3%A3o-de-NF-e-NFS-e-CT-e-de-entrada-atrav%C3%A9s-de-XML-sem-Parceiros)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
> **Data:** 24 de abril de 2025 às 10:16

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/16940728181015)
 Tempo aproximado para leitura: **00:05:00 min
****
Dúvida**
Como importar **XML** de Nota Fiscal Eletrônica de entrada gerando movimento?

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**
A importação de XML no ERP da linha **RM** é realizada pela **Importação/Envio de Arquivo XML (TOTVS Colaboração)** que no caso é feita por parametrizações e processos no sistema, e não pelo **Neogrid/TPF.** Por ele é realizado importação de XML apenas de movimentos de Entrada. Essa Importação de arquivos XML não precisa ser ativado ou ser paga a parte, nesse caso é necessário apenas parametrizar o sistema para sua utilização.

Mas vale lembrar que tal recurso funciona com ou sem integração com Parceiros (Neogrid/TPF) .

**OBS:** 

-   XML's de **NFS-e** (Notas Fiscais de Serviço) não serão importados sem a integração com Neogrid/TPF.
-   Apenas o **Serviço de Parceiros** **necessita-se de contratação** e deve ser **avaliado junto ao EAR de sua empresa.** 
-   A leitura e implementação de todas as documentações abaixo são primordiais para implantação do processo.

Hoje o sistema disponibiliza o recurso de Importação de arquivo XML para recebimento de notas de compra. O processo de importação de XML sem integração com parceiros está disponível a partir da versão 12.1.22 sem nenhum custo adicional ao cliente. O processo é praticamente idêntico, onde a única diferença é que os XML's não serão disponibilizados de forma automática na pasta IN pelo Parceiro. 

Para implantação sem a utilização de um Parceiro, primeiramente deve-se **criar uma pasta** (exemplo: C:\\XML), com a nomenclatura que preferir e **dentro dela criar a subpasta IN** (exemplo: C:\\XML\\IN). A subpasta RM que também faz parte da integração será criada automaticamente após a primeira importação de XML.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24420749386263)

Feito isto, acesse menu **Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Integrações > Fiscal > etapa Importação/Envio de Arquivo XML,** marque a flag **Realizar Importação de XML de NF-e e CT-e (sem integração com PARCEIROS)** e informe o diretório padrão de onde o sistema buscará os XMLs. Para que a flag fique habilitada o campo **Tipo Integração** precisa estar como **Não utiliza.**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24420749394967)

Nesta parametrização, os XML's baixados manualmente da **SEFAZ** deverão ser copiados para a pasta IN e posteriormente importados para o RM através do menu **Integrações** > **Monitor de Arquivos**.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24420732745879)

As demais configurações da importação de arquivo XML se mantém as mesmas das versões anteriores e para implantação recomendo analisar as documentações abaixo:

1.  Para inclusão de **NF-e**: [Inclusão de Movimento através de XML TOTVS Colaboração](http://tdn.totvs.com/pages/viewpage.action?pageId=224106789)
2.  Para Inclusão de **CT-e**: [Recebimento de CT-e através de XML TOTVS Colaboração](http://tdn.totvs.com/pages/viewpage.action?pageId=322150273)

Manual sobre a Funcionalidade: [Manual Totvs Colaboração 2.0](https://tdn.totvs.com/pages/viewpage.action?pageId=185748531)

Abaixo documentações com mais informações e parametrizações:

-   [Importação de NF-e e CT-e](https://tdn.totvs.com/pages/viewpage.action?pageId=392500033)
-   [Parametrização (TOTVS Colaboração 2.0)](https://tdn.totvs.com/pages/viewpage.action?pageId=423938829)
-   [Acompanhamento de Arquivos Recebidos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008691528-RM-MOV-Acompanhamento-de-Arquivos-Recebidos-TOTVS-Colabora%C3%A7%C3%A3o-2-0?source=search)
-   [Como utilizar e incluir movimento através do TOTVS Colaboração versão 2.0](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360011408031-RM-MAT-Como-utilizar-e-incluir-movimento-atrav%C3%A9s-do-TOTVS-Colabora%C3%A7%C3%A3o-vers%C3%A3o-2-0?source=search)
-   [Recebimento Automático de NF-e](http://tdn.totvs.com/pages/viewpage.action?pageId=223159982)
-   [Tipos de Recebimento de NF-e TOTVS Colaboração versão 2.0](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028183351-RM-MAT-Tipos-de-Recebimento-de-NF-e-TOTVS-Colabora%C3%A7%C3%A3o-vers%C3%A3o-2-0?source=search)
-   [Seleção de Natureza de Operação utilizando TOTVS Colaboração](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360015276172-RM-MOV-Sele%C3%A7%C3%A3o-de-Natureza-de-Opera%C3%A7%C3%A3o-utilizando-TOTVS-Colabora%C3%A7%C3%A3o?source=search)
-   [Tradução automática de itens para produto diferente do definido](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026068751-RM-MAT-TOTVS-Colabora%C3%A7%C3%A3o-Tradu%C3%A7%C3%A3o-autom%C3%A1tica-de-itens-para-produto-diferente-do-definido?source=search)



## **Atenção principalmente a estes documentos abaixo:**

-   [XML status Pendente TOTVS Colaboração](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034644093-RM-MAT-XML-status-Pendente-TOTVS-Colabora%C3%A7%C3%A3o-?source=search)
-   [Não existem arquivos a serem importados na Importação de NF-e e CT-e sem NEOGRID](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360019178231-Cross-Seguimentos-TOTVS-BackOffice-Linha-RM-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-N%C3%A3o-existem-arquivos-a-serem-importados-na-Importa%C3%A7%C3%A3o-de-NF-e-e-CT-e-sem-NEOGRID)
-   [Seleção de filial ao incluir XML via TOTVS Colaboração](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360015542731-RM-MOV-Sele%C3%A7%C3%A3o-de-filial-ao-incluir-XML-via-TOTVS-Colabora%C3%A7%C3%A3o?source=search)

**IMPORTANTE**

A **Nomenclatura** dos arquivos XML deverá ser feita manualmente quando não contratado o serviço de um dos parceiros:

-   Nomenclatura para **NF-e** começa com o código **109**, conforme exemplo: 109\_20171032141809287\_5936.
-   Nomenclatura para **CT-e** começa com o código **214**, conforme exemplo: 214\_20161123161002118\_5998.

**[Link com vídeo WEBINAR sobre o processo](https://www.youtube.com/watch?v=IafxgIPdZfQ)**

Com o objetivo de aprimorar cada vez mais nossa **comunicação** com os nossos clientes, estamos promovendo nossas comunidades no **WhatsApp.** Através delas, você é informado em primeira mão sobre artigos publicados neste portal. Eventos, notícias, comunicados urgentes… **tudo na palma da sua mão!**
Acesse via **QR Code:**

![Imagem](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUgAAAFDCAIAAADXsQCnAAAgAElEQVR4Aex9d0BUR/f27rIFWHapYouCSpWmiL13ESn23mJimimm2CP2hmJvsSaaWGIsUVFRrDEKJppYIkVFpIgdkCJl2Y93n5/nm9x7d1kQTGP+gLmzd+aec+Y8c6aeEWmrQpUEqiTwr5OA6F/HURVDVRKokoC2CthVSlAlgX+hBKqA/S+s1CqWqiRQBewK04Hil6HCSqwqqEoC5ZWAALAvXbq0efPm5cuXr/xnhhUrVqxbt+7QoUOpqal8sWRlZcXExOjjbv369UeOHMnMzNRoNJy8T58+PXz4cHh4OKSyatUqEs+KFStWr14dFRX14sWL4uJiTsZSHw8fPrxmzZoVK1ZQgYisWLFi3759SUlJ+fn5/EJevHixf//+VatW8TNyynkNj+vXrz927Fh6ejqfzgcPHkRERCxdurSiyFi9evXKlSs3b94cHR1dUFBQVoE/e/bsm2++Wb58+d9BbuWWyapVq86cOfPkyRO+wJEiAOzVq1e3b9/eycnJ5Z8ZnJ2dGzVqNHbs2JiYGD7baWlpa9ascXNzE2TO19f3gw8+uHfvXlFRESfvrVu33nvvvfr16/MzOjs7e3t7f/nll5mZmZxcxjy+99573t7ezs7OnJKdnZ1HjBhx7ty57OxsfjlZWVmjRo1yc3PjZ+SU8xoefXx8xo8f/9tvv/Hp/P333z/++OMGDRpUFBlubm6urq7t2rVbsWJFbm5uWYF99+7djh07OutCRZH0+svx9PScPXt2QkICX+BIEQD27NmzHR0dRf/koFKpAgICzpw5w2f73r178+bNMzU1FeTP0tIyJCTk9u3bfGD/8ccfwcHBgrlEIpFKpXr33XefPXvG/2KpKcHBwRYWFoIld+rU6dixY1lZWfxCMjIyunTpYmJiIpjxNScqlcpBgwZdvHiRT2d0dPSQIUMkEklFkSSRSMRicZ06dWbMmJGTk1NWYMfHxzs6OorF4oqi5y8pR6lUfvLJJzdu3OALHCkCwJ43b179+vX/EnIr6qPA57lz5/hsJycnz58/Xx+wra2t+/fvf+fOHT6wb9682bdvX1Ao1gWWWpVK9f7772dkZPC/WGpK37591Wo1WxrFu3TpEhkZ+fz5c34hGRkZ3bt3l8lkRBLlquwIn321Wj1s2LDo6Gg+nZcuXRo6dGhFAVssFkulUhMTk7p1686aNascwE5ISHB2dq4oeipb1FQ+pyWysLAYP378H3/8wRc4UqqATaL7X6QK2H8Sh56HKmDrEUwlJlcB+3/CrbLYlahiIlEVsCtVvIKFVwG7CtiCilGRiVXArkhpGldWFbD/J6f/gsXOzMysGmP/Z8fYSqWyIsfYYrHYxMTk7z/x8F8A9uPHj3v27CmXy41r8Ut/C/NSgpVL5oJvq0UikUQisbS0HDp06IULF/hzOZg8K4faSCQSmUwGelgCaPJs5syZ2dnZZZ0VNzx5Rh8qXV6V/IZUKsX8P77DIazCJs8kEolUKrWzs/Pw8PDz82vUqJHvXxoaN25cv359MzMzQfH+a4DduXPnyMhIznIXdrjdv3//k08+admyZRNdKF9tNNaFJk2a+Pj4+Pn5NW/evEaNGlJdYPXJxMREKpUqlcp69eo1bdq0SZMmlLFx48YtW7b09fXt06fPunXrfuaFLVu29O3b19nZuUWLFo0bN/b19S2V4MaNG3t7ezfThWrVqkH30IKIxWKJLtStW3fGjBkVCGy0a9bW1u7u7qCzfCJ9xVwQrLe3N+rC3NxcKpWKdPMarKpXDLDBs5mZmbe39/jx49euXfvVV19t/kvDunXr3nvvvZLaZbml+L8J2Jx1bKBao9FkZGRERkZu3bp18+bN+Ltly5ay1skmXdiyZQsqNDw8vFWrVqampgqFAsKE0TAxMZHL5Y6Ojm+++eaGDRs2b95MGTdt2vTNN99MmDChW7dunTt3HsQLPXr06Nix49ixY7/55puNGzdu3rx5y8ugj9pNmzatW7du06ZNCxYs8PX1RUMDSNNfAPv58+evbrHRDRGLxebm5o0bN54+ffpfq94bN25cvXr10qVLW7VqZWNjgxXNSrHY6IHL5fK2bdt+99136enpWVlZ2dnZOX9dePTo0ddff92oUSMCMxv5dwNbo9EUFRVpNJqcnJysrKxXrATUY1ZW1vPnzy9fvhwSEiKTyWAlyEiKxWK5XO7j47NmzZqnT59m6wK+i/iuXbvat28vk8nkvCCTyXx8fFauXMnmMkxzdnZ2pi6cPXu2S5cuEonExMSE4Ie2pgKBDc0Ri8VqtTogIOD8+fNPnz41TGHl/QopPX369Pfff+/Tp4+trS145wyRKsxio9w2bdrs378/Ly9Pq9UWFxdrNBoYEP7IqrJTsrOzd+zY4evry+KZ4v9uYBcXFxcVFZXVUgnWCNl/VGVcXFyfPn3Q8YOJAKgw3G3UqNGWLVuwdYeTcd++fe3ataOMBELUSMOGDVetWsUhwBjNiYmJ6dq1q0gkMtEFFFsZwEbJKpWqd+/ev//++4sXLzjUvp5Hqtni4uL4+PgBAwZYWlrCrFJTC5FWDLAlEolcLheLxW3btt2/f39ubm4VsDldo0raeda5c2dOV7xiNQytc5EuFBcXx8bG9u7dGyMv0iQMcWUymbe396ZNmwoLC1lUo0U4cOBAhw4dBIEtFou9vb3Xr1+PXIRnihjgKDo6ukuXLugkKxQKQLoCgQ08o+HAJEKvXr0uX74M02WAsEr6iQV2XFxc//79LS0tqV0juyUSiSoM2LDYrVu33rt3b05OTiUxZnyx/1mLbbyIjH+TIAdgowfO9v1gsT09PTds2EDAZsvfv39/+/btWc2juFgs9vLyWrduHX3F+L4GLDaATbviKxDYmIdDgWKxWKlU9urV69dff/2rgA17CUGxwK6syTNYbIlE0q5duwMHDvyFbJMyVQGbRPHqEYJcfHx8//79sZ4EYKMPrFAoZDKZp6fnxo0bBYH9448/duzYkcDMiXh6epYP2NHR0Z07dxaLxTDXRJhYLK6oMTawDYKVSmVAQMDfCti2tramukDtGkitGItNU5Ft2rTZt28fuuKsPtFg2/jGmM2uLw6FE/z1PwJsHAIRXO6qQFETsGNjY/v06cOOkKH3Ml0gi82vEeqKcyCNR47F5mfXlxITE9OtWzdSPyyGsxY7KyurrHLAOjZmpGAJWYsdGBj4mrviJHwwQo9xcXH9+vWztramRQFWthUGbAwpW7duzQE26MjPz8c4jX8oSl+dGZOOwgXfLBXYwcHBZ8+e5edNTk5esGABTndxxskikcjGxmbQoEGCp7tiY2P79+9Pw0iSMqaXVCrVBx98UL7TXX369FGr1XxiRCIR1rHZ012QCcwm2lM+j2VNIWW6efNmv379yDgA4cC2VCp1d3dft25dYWEhv3zDwPb09Fy7di0GkGWimSbPIBwgHPQ4OjqGhoY+ffq0fMAGmKkSwalSqXz9wC4qKirUBY5vj9jY2H79+llZWbHtLBFcMTvPULRIJNIH7MLCQo1G8/z584yMjDxdyC9XePHiBfK9eBnQZPArr9zATklJWbJkia2trUKhMDMzMzU1NTc3NzU1lcvlCoWiVq1ao0aNSkhI4LdQ8fHxI0eORC65XA4jJpPJFAqFhYVFnTp1Pvvss0ePHpWVb41G07dvX2traxBDVKHYoKCgEydOsBYbIMSKV0ZGBpa7cnNz8/PzIbOyEgCZv3jxIi8vLzo6ul+/fhYWFljxAo8KhcLU1LRatWqNGzdeunTpkydPKAs+mp+f/+OPP/r7+5uZmfFWu+RmZmbNmzffsmWLRqMpLCws03w+uuIY80OnMUUsk8mcnJy+/PLL5ORkVmEQz8vLy87O1vchwZ1nBGx9Y2zMMpZVtqW+n5OTk5mZ+eLFC40usC0mAZsYJ1S/6uQZ2RADwAYpxcXFBQUFJ0+eXL58+eLFixctWrRkyZLFZQxhYWHIiMiiRYvCw8N37Nhx48YNvpUoH7CLi4ufPHly6NChsWPHvvnmm2+99dbbb7/97rvvvv3222/qwocffrhhw4b79+9zmk+tVnv//v1169aNGDHirbfeQt633nprzJgxo3Xh/fffnzBhQnh4eBmZXrx06dK33357xIgRY3ThzTfffPvtt/GJsWPHhoeHX79+nTOpASV78uTJd999t3jx4oW6AKGFhYWVlYCwsLDw8PCwsLClS5dOnjw5KCgoMDBwzJgxb+vCW2+9NVYX3nnnncDAwOHDhy9YsACfQJYlS5YsX778ww8/DAgICA4OfvPNNyEQ+jtmzJgZM2acPXuWtdgG+mKscgsCWyqVyuVye3t7f3//WbNmgfhFugD2ly1b9u23396+fVvQcVL5gF1UVPTw4cPVq1eXVbz63l+yZEl4ePjy5cv379+flpbGN11/F2Dn5eXNmTOnXr16arXawsJCrVYryxLMzc1hslQqlZmZGayEnZ1dr169fvjhB77Tr3ID+8WLF+np6deuXYuPj09ISLh169adO3du376dkJCAlLS0NEGFePHiRVJS0vXr15ErMTHx7t27iYmJcXFx165du3TpUmhoaO3atcvC9P/eNTMzmzVr1sWLF+Pj4+N0AZTExcXFxsbevXs3JyeH08oAIcnJyf3797e3t1cqlea6YGZmZm5uXiYCkNHS0lKpVFpZWdWpU6dXr15bt269c+fOvXv3kpKS7upCYmJiTEzMRx995OLiYmtrq1QqLSwszM3NLS0tVSqVjY1N9erVg4KCdu/eDeLjmRAXF3f79u3Hjx8TYmGdjME2H9iYn8c+ajMzM1AO5SH27e3te/bseeLECUHHSaUCW3CMnZ+ff/36dQcHhzKJV9/LAIhara5Zs+bYsWN/++03ThVrtdq/GNioHtiQ6dOnW1tbY/shRI/hkJF/0dOgWQ2RSKRWq0NCQo4cOVJQUEBqgUi5gY0OYUFBAU0KoFuLR/QVOd/CI+CE4RBehoIWFBTk5eVlZGSsXr1arVZjGtlIljHzvGLFirS0NJQMAlhi+G056MEhEIVCQXNL6FgZ/2maNJLJZBhXK5XKvn37Hj9+HDvbwCD+Pnz4cMaMGQ4ODviKVCrFdzGhZW1tPWLEiOjoaFaYJGGURlLFMNuYwTYf2OiKQ27UoyRlAzFmZmZt27Y9efKkoG/JcgP76tWr9vb2EFqZhMx/2cTERCaTYT/f0KFDL1++zK/lvx7YVEOhoaGYxIPJhYob/xf1RNoGR2IhISGRkZEVBWzSLX6EWij+T2wKpz+p0Wjy8/Nzc3MzMjJWrlypVqsxOjWe6xI2lyxZcu/ePcFlJPbTnPijR4+6d+8ul8ulUilOQQFpWBMykgBSU+iZSqUaPHjwmTNnyICgydZoNCywYTbFYjH2kGIz5ogRI2JiYkiMbIRDOR5JbQR/RaIgsAnPFCFgQ/gA9qlTpyoW2NeuXatRo4aRgjX8mkwmMzU1xSry0KFDr1y5whfC3wjYX375paWlJWaJ2YF+meKoLTS9FhYWwcHBrwfYfMmWmkK6q9VqMzMzYbHLxCxeXrZsWVpaGmGp1O/ihczMzJ49e5qamkKH6AhUOQigqX6lUtmvX7+oqCg+MQ8ePJg+fbqDgwPaAsqCHpalpeWIESNKxiNGEm/ka3xgs9wRsEEDjLmJiYm5uXm7du0qHNhXr16tXr06S8CrxKnjM2jQoF9//ZUvkL8RsENDQ21sbDC3UT6eUTfY0mhiYoLlh2PHjr0Gi82XbKkpZM0A7DVr1ujzSWhYGmFhYcnJyfx5eMMEZGRk9OjRA1t9MfwxNTUlXTf8RfoVRp4Oe1hYWPTv398AsB0dHck8ovcOBQWwBf09G+bC8K/6gA2yOcwiUSKRKJXKtm3bHj9+vGItdsUCG/ZPJpMNHjz48uXLfDn89cCG4SrZDTd9+nQrK6tXsdhUYTAL5ubmAQEBR48eLQewg4KCBNexCY2sveWLlU2hLGwiu1sewF63bp1arabOLXXGgCJ27oBwhUhYWFhKSgrfSHI+x3mEl1K5XE5DOFp/5pRPjzRABSTQFZTL5RjySSQSCwuLQYMGnT59mt/KPHjwIDQ0tF69egA2mhL8haOFkSNHVobF7tKli0gkQvvFMsLueEU6lMfExMTCwqJ9+/bHjh0rH7AFd57l5+dXLLDR5ZHJZEOGDPk7ApvVtmnTppXPZFHFsDUnEonMzMzKB2y1Wh0UFMT3K06bAWhAy5+0YDki8NM0ErVi7LZe1mIDM2Q9yKwZQN3ChQv1WWwMRAWJzMzM9Pf3NxLY1E3F+0QkBqXUjVepVEOHDj179qw+YFNXHAVieC8Wi62srCoD2DExMTgEolAoMF1HGiIYQWOqVCrbt29/9OjRUoFNNh/9DgNbSisD2CKRyBhgU2WxLL/SzjMO24IbVFgYVCCwwUNlABtzXVlZWXkvQ64uvHz603/8lJubm5eXl5ubm5mZKbiCotVqs7Ky1q9fb29vb/YymOoCnlQqFR2WYqsHcQPABrUg4E+U5eWlpaUFBASYmZlxGhF++UjBtAWm2eRyOa3EYK3I3NxcoVDY2dmNGjXq7Nmz/C7Sw4cPZ8+e7eLiQmtLWJ5UKpVqtbpatWqYdeMQ+YqP58+f79atG/qAoF8fd8Qjxtjt27c/cuTIvwbYaHdY3v+jwLa0tBTsihcWFj59+vTXX3/dsmXL119/DccjG3Rh48aNiPD/bty4cdOmTVu3bt2xY0dsbCx/t4xWq83Jyfnxxx8DAwO7d+/eo0eP7t27d+vWrWvXrt11oXPnznZ2dvqMtiCwi4uLCwsLr169unPnzk26sPFl2Lx58zfffLN27Vo/Pz9a7oLeU1vMKgHiUA6JRGJubu7q6tqpU6eAgACQ2r17d39//65duwYGBs6bN++3337jA/vZs2dbt24dNmwYsvTs2bNHjx5dunTp0aNHr169WrVq1a1bt0mTJhkQI1+w+lIg8K+//nrOnDmNGzdGrxsjDj5fbAprsauAzRrd/8XpJhDSEmow+FtK2cx/H4ttANhJSUlr16719vZ2010B5eTkVM+I0KBBA3d3986dOx84cEDwFH5BQUFCQsLevXv3799/4MCB/fv379OF/fv37927d/369T4+PuRviNXFkhGHPmDn5+dv27atU6dOTk5O9XWhXr169evXb9CgQUNdsLS0xNAdCk3VxCmfHvFC7dq1R40atWnTpoMHDx44cGDfvn0HDhw4ePDgvn379u/fHxMT8+jRI/6APy8v79q1a0eOHAFrB3Xhhx9+OKAL06ZNa9myZe3atY2QpVGvNGjQANeSWVpawmFjFbCpHl/fllLA++8P7OLi4nv37i14eQiElZS+OKFFLBbXrl1727Zt/MNtGG8XFBTk5ua+3OT+//9nZ2f/8ccfHTp0MDc3F/yKPmAXFxdv2bLF3d1dn6lnJ8OoFRb8BJvo7u6+ZMmSxMRE7PT+/4TqYgUFBYIDe+wa5rxMjz/88EOHDh2Mp4Glx3BcKpVaWFgYWTIaOIyxqyw2a3T/5RZbq9XS6S4glqaU8ajvLzSmVq1a3377LWfnNld8vOeCgoLY2Ng2bdrouzBMENgoZsOGDS4uLpjiws4TWjjAGhUIw1S8gYl3WtASi8Vubm7Lly9PTU1lJwI5VBv4SfBNOFrQJ71ypKNekBF80fq5gYagCthUO4bu7qJmEvL9B02e6euKA9i4lA9KgANMtEVRnwq+IrBv3rwJ75+CSmkA2OvXr3dxcVEoFDhPhplhqg65XG5qaop9fpQo+AlMwAIhrq6uS5cuTUlJMYBeAz+R6iCCN8mDij4BljUdAmc1EBKgFEE2q4BNtfPfBTZMHzZF6gM2rdZi1bFmzZrbt2830mJj9buoqKigoODmzZutW7cuh8X+6quvXFxcQB5tMKadAjRhBl709diBAYKWi4tLeHh4cnKy8egldWEjYBAndisc2IRbmG54UKFEfZEqYFMF/TuBrVarAwMD+evYbFdcKpXC4w92XNAeSQIA0AL/FfCYX7t27e+++84YYGPBHEeCCdj6rjcIDw9PTU3lz1dptVoAG5aWOuFktdjOOXQaTQBf72kdWywWu7i4LF26NDk5mZSgfBG0CxyLLfhpiJQkbMzwB20WttCQ9SbG+V9BShWwqSr/u8CGNQZuMX5jIY04TjtgiCuTyerUqbNjxw4+sGG7SKZarRbABlYLCgr++OOPli1bmpubk07TGLLkprGSI9n6gI2uOJoeqDXBG84rUQ6MOejkcwFUoxUTi8Wurq7Lli1LSUlhCX7FOFlsQcgRzWABrSRBlyMTPLI7Z+jMSRWwSbz/0XVswxYbY2zSNgOzMniHpqYcHBx27txpDLCxUw07xgoKCuLi4tq1a2dubs5BHepp1apV6enpghZ748aNbm5uBGwyvOh1s6URPKjuKYLXqN/u5ua2bNmyV7fYbFtQKrDRgIIkkjxLPydO7ED45HuYmBKMVFlsqpT/nMVOS0tbu3atm5uboy7U0wVHR0cHB4e6vODg4ODo6Ih3GjRo0K5du4MHD/LXsbGZJD09/bJQuHTp0uHDh0NCQlxdXR14oW7duvPmzTtz5oxQ1suzZs1q0KABgA1dZ+PW1tZ169atV68eESnIRd26dcGIo6Nj/fr1u3XrtmXLlrS0NFKCV48YBrZCoahZsyZkDmqJHp48/i/B0dGxQYMGDg4OaA1xqrTKYlNzVmWxuUqbkZFx6tSpqVOnTn4ZpkyZMmnSpC/0hEmTJk15GRYuXCi4K0ur1ebm5kZGRr799tujRo0azQtvv/32+PHjJ0yYMFEojNIFZEKcUjp06GBnZwdHCAA2LBhcbbdv3/6DDz6YMmXKS1YmT5gw4XOhMGHChMmTJ0+aNGnq1KkrVqz4+eefy+d3kSvNl8+GgV2jRo3g4OAZM2ZMnjx56tSpEydOnDBhwiRdEJLH/9ImT5785Zdfvvvuu05OTmJdIJ02EKmy2C8rRPvfstjYZfHkyZNbt27dZUJiYuIdnYOk238Od+7cuXv3LpwE4Z2MjAy2z1z8MmRmZq5duxb3NtAsESJSqdTNzW3Lli3Xr19P5IXk5OTu3btz9mBAlXE2A+4BaUQKqyUWi21tbT///POzZ8+CyCRdAJF3eCExMREvJCUlpaSkZGZmCm6MJbUoa8QAsCUSiaenZ1hY2L179+7evZuUlATqIH6ePP6XgNfu3bsXERHRoUMHmhGsstjUqFVZ7D+pKGa5XoLx//7/6Q2hB/Z9zu8oUKPRANjwIozz5DgOCXC6uLicOnUqOzubkx2Pffv25bgfJg1GdtqhgX44atfKymr27NkJCQkVC1FBCktNNABskUgEv+KlFsJ/AX7FSZtJLJTCiVRZbJLhf85iE0o1uiB4IpKkgwihl/8ySgOw4UEF5kUu/5/bXbhkVCgU9evXP378uJHAZnue7DwTuuK0WF3irGbWrFn/CGA3bNhw9erVHKka8whHC+R4498HbLlcXup5bOgDh/dKt9is0sODClxtU3eUyCo1gvUbMIBRJe5SKoejBbVa3atXr9OnT3O0BzgkHwnYFM15h/9Idp7/E53KzszMhAcV0K9QKHAQEvulGjRoEBUVZRjYZHw4VUgz4UinfmnJUdA5c+b8I4Dt4eGxZs0aQekZToTFlkgkKpWK9ghCIDSJyKpNWS02K3PDd3fReWy+GlMh5YgoFAo4M+TL4a/3oALTVzLyfHXXSDBKIpEI1WZmZubv73/48GH+KULDXkpVKpUgsEl8ZLf5RpjeoQi9TCn8CMfnGQ2PzczMpFJpvXr1IiIi9N1Hg664AbUgu43mEm+WbHeZMWNGfHx8Obri1MDxGTE+Be0dNuEY7op7eHjgJhD+d1nDAO8XLAGXLl3q3r07XLtglgG8c05oU1P4GoBtoJrK8dM/wDWSRqOZMWOGnZ2dVCo1NTXFuqXxf1Ft5JEDFlulUoWEhJTD51mpwGa1p0Li7Bgb6oUNMEqlUiaTNWjQIDIy8vnz54LtiD5gA88cVSb9LlkHmjlzZlktNjVSgpSUSRQoCr0ew1f8eHl5sdfosl9h6eF3oC5dutSjRw+JRKJWq7HNDnYbQsBGF0I1XTdr/OkugiLssIHbNmGxa9WqxVdpEMO35AZSaFOwXC7/m3oppUoqMaqhoaF2dnY030P6bWQE3MLTCKaLVCpVcHBwREREhVtsIruiIjQrznYUgW2ZTObm5mZg8qxfv36CLqVQFJQPICcdEolESqVy5syZxlts1jZWFNdUjoHbNsVicaNGjTZs2EAvGx+hS/lKrlVAbw64wpof2W3C9qtbbH23bQLY+twP0xqkATCzP1HPFMD+O/oVp0rKzc3FTSAqXbC0tFSXMSAL+7dWrVr9+vU7dOjQ3x/YWVlZmzdvfuONN9RqtZWVFa7IQNza2rpJkyY7duyIi4tL4YW0tLRevXpZWFiQ9WAjuI3dkgkQr0qlql279sKFC2/dumVkV5yAnZ2dnZ6eziOkbAmpuoA8aWlp27dvZ9elOCz4+vrioGhqampKSgr+Im9qaurTp0/1sfDrr78GBwerVCoIAApFj/DKSl2YCrHYBoB9/fp1XHSjUqnKqNoCr0ND7O3tx4wZc+XKFXYNFZj6i8fYIEKr1ebl5W3btm3w4ME9e/YMCAgICgoKKEvo1atXUFBQr169AgMD6W///v1nzpx54cIFfsW/4hibyK6oSE5OzpEjR/r16wfee/bs2b17d5LDgAED3nvvvenTp8+ePXvOn8P8+fM9PT31OVextbVt3rw5yoFk/HWhZ8+egwYN2r17d1paGt/xoAGmNBrN1atXN27c+Gcqyvw0VxeQbcGCBWPHjvXw8KAZexbYuEBv6NCh8+bNmzt37pw5c/B3zpw5s2fPXrJkCWYfBGmOi4ubMmVKz549oR6QQAn24ILKycmJzpnji2W12GTqYU4NODMsKChITEwcMmRIgA7PD2gAACAASURBVFDo2bMn6sXIvz179oS29+/ff9GiRfHx8X9TYGOkFBsbe1wXoqKiTp06hbiRf0+cOHHy5MkTJ05ERUVRlpMnT/7+++9Pnjzhs/33ATZ4z8/PT0xMPHz48LFjx6KioiIiIg4ePHj06NETJ04cOXJkw4YNjRo10ndsk4UBGxeLxb6+vvPmzfvxxx9JJseOHTuqC8ePH797925eXl6ZRssajWbnzp3NmjXDh0iz2e+WGkcuyotzcga8NWIcQfP5lFEkElWvXv3DDz/Ut7/16dOnP//889GjRyMjI0++DFFRUSdOnNi2bVtISAiHizIBG2BmmVUqlSWNyC+//MI/DqDRaLKyss6cOUMVwUaOHj16pCzh2LFjpO2//PILLgPm1GMlWmzimUTQunXrvXv38n0DYdoDV7HyQSjYGBuTCMwIvllRwMYnODIV/CI/kfIWFRXhwtTc3Fywj59wxgunuww4WiA5cyImJib+/v7Hjx9nr9GlBTYchOZTZThFo9Hs3r0bwMYYnoUZhwDBR6wqA6tQDACb4/qb8uImIPIfjI/SoLRGjRrjxo3DdZMkT2KhqKgoLy+PP1uu1WoTEhI++ugjLBNQk1F5wCaSKjZSUFCQk5OTn5/Pnzj8GwFbo9Fg8aOimEdNC5b2NwS2RhfQRhCwCwoK8vPzDTtaIAxwImKxuFOnTkeOHBEEtgHhCEoMiRqNZs+ePS1atMC3gExCKeYsiQya46GXkUKwZF/Q10CQuaZ2hLKLxWIAG36aWAGCWswLCHIaFxf33nvvlRvYaAKIfTBooCtuQKSv8hP8cKCN5ljEuLi4/v37l+wvJFKpXl7VmSEVRBa7TZs2+/bt41tsiJ7+vgqrRub9WwGbGGdVkBLJ0YKBrjhHw0hfu3btevz48efPnxspllJfKy4u3rt3b6tWrYBDfBfTyzj2TNYPw1d25pleI2oJzKQhpDNshLDNFg4eWYstCGx9nam4uLh33nkHXyEyjLfYNOXGtk24UkrwGt1SBVu+F0hJWM1BUQA2LsPjyO31Abt8XL1Krr8DsI2k3xhgszCguEQi6dGjR1RUVMUCGxYbi8CkMVB0UneCPTYLcXytEZwIUYaBDQwD3mxeiURSs2ZNA11xAxJ+RWCDcc64wMLCIjAw8HUC2wCD8fHx/fv3h4dp/i0or7SllDQM/ItEolatWv3www85OTkGCHo9P1UUsF8DtcYAmwUGG/f39z99+nR2djbGYPx23Uj6aa1Lo9Hs2rWrWbNmdF8XPkc7NGHBgHBoP3rOBE5YcupTUNNA2sKPEEfUmqBMiUTCdsXLNI6rEGBTrwQUYoPKXwhs1C/qmiw2fx9ORVps1B8mz/65wKYxmzF4KCuK2FphyzcG2CwYCAYikah79+7Y2WIksEEDh3IW1TR5hn1EwDONfgFXunCbzBrBmLXktNREQ3SWC4qjcKyEUW+fGovq1auPGzcOY+y/BNhEJ+5j792795UrV/i+NNgKrbw4W33x8fEDBgywsrISFG+FWWxUT9u2bXfu3PngwYPMvzqkp6dv3bq1UaNGbMVQXN+WUo1GU1hYmJeXp4/8rKys3NxcaBg7UYn77nNycvRlzMzMzMnJ4Y8StVptqcAGxrBZkv1ramrq7+8fERGRnp6emZmZkZHB+fqLFy9YImnCvKioCDeNIUuGLqCEjIyM7du3t2zZUqELpqamOKYCb604akobewnGNEjGTyASB8Vxh7uZmZlMJiP5cyKYNocTZVNTU3hfQyFvvPHGBx98EBcXR+SxPD5//jw/P5/UnWX21S02fxyhUqmCgoIuXLjw6NEjloy/JP7bb7/169fPxsaGaoGVaoUBG/4iGzVqNHXq1B07duzRhe+//x6R1/93x44dn3/+eYMGDVhuKa4P2MXFxbiX44cffgDx3zNhz549Bw4ciI6OfvbsGQeixcXFJdfWXrhwQTDXnj179u3b98svv5AWso16qcCuVq0arhBq2LChuy546IK3t3dwcPDChQt37dq1d+9eCPkHXdizZ8/evXtv3Ljx/PlzdjYVGMjNzb18+fKPP/7IMPd/NfXDDz9Mnjy5bdu2rq6uHh4eupuC/vdRNzc3Ly+vEpfjmK2BJSd5on8ul8tr1qyJXB4eHp6eniC4UaNGTk5OKpWK3udEFApF7dq1vb298Tlis2HDhi1atHjrrbc2bdq0Z88eUMvqUmRkZFJSEtpZ6ndAtq8ObJqcB3dwStOsWbOlS5fu2rWLJeM1x6Gc69ev79ixo7W1NZYqOEOeigE2Ol1yudzGxsbZ2dnb29vrZfD8i4KHh0fdunX1OfTVB2ytVnv//v2vvvrK19fX09PTy8uLJd/Ly6tNmzYTJkxISEggZYIaaTSa27dvf/HFFx4eHi9Z/7+8eCwZtc6ePZuzLoW8pQI7ICBg0qRJJS4WFyxYMF8XFi1aFBYWtmDBguHDhzdt2tTHx6dx48YQu7cueHl5NW3adN26ddB7fIj+PnnyZM6cOe3btwePXkzw8fFp1KhRSEjIxIkTw3Rh4cKF8+fPnzt37pIlS7744gtvb28ct2D74VB9e3v7fv36LViwYOHChYsWLVq8ePHChQsXLFhQ4sx4zJgx+hpZrGn17dsX7y/UBWI2NDR09OjRTZo0AY1EsLe3t6enZ+/evSMiImgTDpotsGkA2Obm5sbctokhD6EawwRbW1tnZ2e+brB6UqlxLy8v8O7r61u9enUcImJHZ2g0lUrl+PHj//jjD0iD/9eQowW23TUxMVGr1ebm5ji5RbMO7Dt/n7gBYNMVP2ABNFNvx87Obvjw4Xfu3OHv04yLixsyZAjNElMLikUglUo1btw4QUdipQJ79erVaWlp+fn5BX8O+fn5W7ZsadiwIXzxcjZsmpubz5079/bt23xSMzIyPvzwwxo1aoA2uhQBe0s8PDwWL158+/btP3/tf0+//fbbkCFDlEola82gVTKZzNfXd/PmzXl5efyMP/zwQ7t27QQVQCaTNWvWbNOmTfxc+fn5qampq1atql27Nvax4FtYtRKJRD4+Pnv27EE/iKO7BGxW6ZHR3Ny8Xbt2pd6PjfEFTpXguI4+OyHIVyUl0oga5/ltbGzgNgsqSh8tj8WeP39+/fr16QNUFqdoSv/LI3zCLC0tQ0JCzp49y9EG9ooflmwoh1gstra2HjhwYGJiIh8tcXFxgwYNQi5WmZCiUqnef/99fcDG3V369CYsLAwX38MisX/Zm0Awg0Vkl7Swc+bMEQR2dnb26NGjrays8DKdtwPZ5H6Y/RDif/zxR+/evcmIkViAukaNGm3evBn7wDh5DZ/H9vT0ZM9js3nT09NXrlxZs2ZN4gsR1Gnjxo0PHDjADq2pQmmDCi0F0SwdgH3s2DF992O7urpytuKwH+VQwn/k1z7/HeNTSMjIQo/Ub0IKa0jEYrGFhcWnn35aTotdsQwQq3wcEkv0jvEREgSKxaOlpWVwcLDxwAZmAOwBAwYIWuzY2NgBAwboI8wwsLHzDJfUcwgWiUSLFi0CsElrKYILA6hSWdEB2IKnu7Kzs0eMGEGeFWG3sYIlFovd3d2XL18ueGHAzZs3e/fujTYd8KaqkUql3t7emzZt4h/I0Wq1hoFtwINKenr6ihUrOMAmxWvcuPH+/fsJ2OzEB1lsthkii92+ffvIyEh9wKZbk9japI+yiYJxepOtSrZqOE0w5zV6ZAtny6R0epN+pZLLY7HZ+7FZcjmfKfcjdfPKXQKHT7YcFG5lZRUSEnLu3DlCCEWSk5NLBnj8TWAoBBabA2xYmNjY2P79+7MdeKoArJQYsNgANv/CAIiXLDYRSREW2CzXIpHI1NR09uzZxgAbQMUsNK74wd1d9BWKxMbG9u7dG9pD/WEch5TJZD4+Pq8H2CRYX1/fgwcPkoUv0oXi4mKtVhsXF/fuu++CNlq0A8jhaEGfxb5165abmxspIb7FqpC+uOCbaDTZxoWfnf8rUohNsiuC3WROvUNnXhXYxD+f3HKngCs+t5wCS32B8z77iK54mYANKdvY2AwePBjAxhIXzEVxcTFZbJIJWzHGWGzOFT8guMRlQlhYWEpKCju5TUgjYBN39FFjgM0qClls9lI+2EAyiTdv3sSRKdJXfBe7WV6bxSYefX19Dx8+TPPhLLXUFUcDBO7w1/AY+9atW+7u7lSJJFh+Cv3EiXDeZPWZ4shCj4JZqFjOr5TORgB+evOVgE0zZCx9rx5HTZRaDiqpTK9BECW3YeEaXX2X8hmw2DY2NoMGDcIYW6PRYL4HkIuNjR04cCB0DrSR/hlvsVl2iNrFixeXD9j6vJRmZ2ePHDnS0tKSgI1pMxBM92Pj0A6ZQTRe6IqjjpCdZuBeJ7Bhl2CxURE4KQFqNRpNfHz8+++/DxWlCTACdvv27Q1Mnrm6uhJCqEbKrW8kJSqKHzFQONswgWt+gVAVFFsBFpvTSLDtx6vEiT4DhRjzDodbKk0kEllbW/fu3bscY2xbW9vBgwcTsAt1AcCOi4sbPHgw+1HjgR0XF9e2bVt9XfHKAzZqEH9xXhru+1euXImmpKioiAauxcXFN2/e7NOnD7W8JFK0C97e3hs3bnwNY2wi29fX98cff8TpVyIV/Yv4+Phx48bhTSIYcFUqlR07diRgo+tOnaCEhARch8ZyR1jiJHIejVdLNqOBXPiJXoBGgRiUAI7AJhsvj8UOCwvz9PSEWx8rKytra2vLSguszxj+R9RqNTwB8X+CByX8qlarLS0trXQOiZDu6Og4atSoixcvannBwBjbxMTE1tY2KCgIDh6uMeH69etHjx4NDg6mjbtoOAnbhrviCQkJ3bt3r169Op8RlUq1THf3ZTm64vqcGWZnZ48dO/aNN96ANPBRKysrGxsbW1tbLy+vqVOnRkVFXb9+nVi8rgsRERE9e/a0tLS0tbWlXBCvjY1Ny5Ytv/76a76bqgqfPIMei8ViuDe9evXqtWvXQCEIvn79emRk5JgxY5RKpY2NDUkVOlCjRo1evXpFRUXxd+Zptdo7d+74+fnZ2dlZW1uTzqAE6Bv4pTIpolarLSws4BeJo2+kqNBnysLRUitdQKKVlRXlojLpJxsbG/7nKLuNjU2NGjUmTpwYGxur1RME1rG3bds2dOhQf3//4ODgkJCQ3r17B1VaCNSFXjqPSMF/DkE650r+/v7wI8MnISAgoHv37j169AgMDASdISEhwcHBAQEB/fr1mzNnzo0bN/hc6wM2VjLNzc3r168/ePDgPn369H8Z+vXrN2jQoL59+7q6uspkMrrig1BtuCteWFiYlJT0/vvvh4SEBAUFsVwGBQX17Nlz165dDx484C+wabVaw2NsfcDOzc1dsGBBv379IN6goKAQXQBfrVq1atu2bWBg4IABA8DigAEDBr4Mfn5+LVq06Nu3b3BwcFBQUJ8+fQIDA0HzBx98cOzYMUE6K3xWHNbJxsamY8eO/fv3B4VE8ODBg4cMGeLv79+uXTuwSboKaidOnIhb1mj6gDQhJSVlxIgRAQEByIK/qJqAgIAePXrAERVf3wIDA7t16+bv78/qW1BQUGBgYEBAQE9dgNsmqmXocA9dCAwM7NOnT9++fUNCQgIDA3v37h0YGOjv7w8dpo+i8L59+/r7+3fp0qV79+5IQQ0CjL179+7Vq9fKlSvv3r1LfHEiAsBOTEy8cOHCTz/9dOHChYu68PPPPyNSsX8v/DlwCr9w4cLPP/98XheIEnoHv/7000/nz5+/cOFCNBOQ69q1a4KryvqAjZEkbAXfAxl21GLJVKILxltsjUbz/Pnz6OhoQTFeuHAhKSmJXK9wqscAsM3MzPTNihcVFd28eRMiwkejo6NjYmIuX7588eLFmTNnuru7s60SeJFIJFZWVp07d165cuXFixejo6MvXrwYExMD4V+4cOG3335LT0/n9GxBcIUDGyRhaZollQbVb7zxxpgxY44dOxYTE0NacfHixfPnz//000+///47blnjU5uTk3P+/PkzZ85wlIr0TbCaLl68eOHChXPnznH0DZ/++WUgjSYB/vzzz6yWErUQLKg9f/48fRRURUdHnz9//uzZs+fOneP8hBfOnTsXHx9v4DyvALAxp1JYWIiJChrh0ONri2CIy1LCflrfr0jXd1RIH7A52lPWRwNdcazWGBAjrApfBQ1b7JJzF9h5xh/0Yj5fUD6FhYU4tskyiHVybHsYMGDAyZMnCwoKWFFTnG8AKwPYLG2cOEb7Uqm0bt26M2fOzM7O5qgHW/uQPKetxJ3H9BqxhgoSTMc7gvLk/MQhhi2T/5PhX+lz+jLqqwvwKwBsjiD+ZY+vH9ivIkDDFlvfllIDX6Rjmyxg0O/FHTcDBw48deqU4IDfQLEVa7FZ2jhxFtizZs3KyckRbBANkPof+akK2BzNKeejAYv9KppUBWxOfQDYJiYmdevWrQK2AdWqAjZHc8r5WAXs9u3b65NdWbeU6isHMyDYRF0FbAOo1mqFLr43nOGf/mtVV5zcDxN+/nFd8SqLXSoM/4sWe8GCBfy94qTl5Yv8Oyy2hYXFwIEDT58+XY4xdocOHfSJDsvRgrqo73SXvqKqxtiCYuQnCgA7MzMzNTU1KSnp3p9DUlJSenq6gemKZ8+eJScn8zP+uZg/PSUlJaWmpmZkZPCndrVabVFRUUZGRpIu/CnbKzzExMRMnjzZTBfIK5BMF6RGB7zP/rWxsfnoo48EF9iKi4sLCgru379/7949jnDAWmZmpqBP/FJnxXFsU1B0/JpGir7JM/RylUplUFDQ999/f/fu3TLJePPmzS1bttSHRldX1/nz5wsWeOXKlfnz5zs4OFBdcDwucU6hs2PsmTNnGtBGfRIoKChIS0uD5DkkJScnP3z4UPD4t77StFotptnT0tL01W9qamp2drbg+n9eXp4g1jiECT4+ffpUcLMQSBUA9unTp8PCwqZMmfLln8O0adPWr19/48YNfcVFRkbOnDlz6tSpf85n6Gnq1KlhYWGRkZG45YQjvuzs7BMnTkyZMmXatGmGSinLb5988km3bt1q1KjRvHlzT09PuCKCbyAXFxdnZ2enl8HFxcVVF1x0gX5ydnZ2dXV10wVE3N3d/fz85s2bJ3gDdlFR0cOHD0tufg8NDeUwMm3atClTppw5cwaLrhz2DQO75Eo6fRtU+OVQiiCwaU1eLpd7eHiMGDGCQ6dhAYeGhg4aNMjR0VEfsO3t7QMCAqZPn84vZ9KkSWPGjOnQoYOHh4ebm1vDhg3hFsrd3b1JkyZ+fn62trYolsYLJrpQt27dGTNmZGdnl3VW/PHjx0uWLJk6dSqfx1mzZm3bti01NbWsbWVGRsby5cunT5/OKXOaLixevPjKlSuCLkATEhLCw8PLBBnIMDQ09NChQw8ePKCa5UQEgB0aGurg4IBtGJy/+q74QaETJ07kHGDiZKdHdk987dq1P//881u3bvFr6OHDh9OnT6dcrx6BTtjZ2fXt23f37t0bN2786mVYt27d2rVrV69evUoXVq9evXbtWiSuXbt2zZo19NOaNWvWrVu3XhcQ2bBhw9atW6Ojo+HPkMNIQUHBjRs3mjdvTnfBsoyU+DCYO3fuvXv3BFt0A7PiCoUiNDTU+Gt0UUeCwOYAUiwWsxQaE6emgVMUPQqWaWJiYm1t3atXr82bN69fv37dunUbNmzYuHHjhg0b1qxZ880336xYsaJp06bQFvylcurUqRMaGirYknJUnPMYFxdXu3ZtVgOJQQsLi5KdZ5cuXeLf3cUphH0sLCy8d+8eblakotjIG2+8sXXr1kePHrG5EI+IiMBRM/Z9Y+IWFhYfffTR9evX+WUiRQDY7HlsqhhEWrduLXgTCMqaOnWq4D3PnEI424kcHR2nTp16584dDh60Wu2jR4+mT5/Oyf4qjyYmJkql0sfHZ9GiRfn5+S8qNNBFLRxGSnWNtHDhwlIdLYhfBmK/ZJpgxowZlQFs+kRlR6RS6RtvvDFu3Lh79+5xqiI3NzcvL69k/5a/vz/rWfHVgZ2QkODk5ER7csAjpIsLA3799deyAjslJcXT05P8tKI02vHeoEGDbdu2PX78mA/CyMhId3d3et+AwDlNZ3kOgZQKbH1sT5s2rXzAnjZt2usBtkgkQm8zLCwMUsbuH8ObePj1IZiCfU78oioP2BXVFTegT5X9U82aNT/66KP79+9DpDh6DUkWFxfHxMR069YNNGDPL/0tt8VOSEhwdnY2AOyyXhhQVFRUKrC3b98uCOzjx49XAbsCdEwsFisUCg8PDxbYOA/IMbOC0DWcSOrIKarygK3vPLYBOo3pileAoI0rQiwW16pV6+OPP+YDGyzExMR07doVpg/DqAqx2FXAFnMqCF3xf67FBrDd3d0XLlwI1SE0GgDDK/5UecDWdwjEAMF/N2DzLTZqBCzExMR06dIFwKbJMwxBqyx2+d0Pc7r1IpGokoD92sbYAHbDhg0XLVpkQPsr9qdKAraB010G6P9bAbvUi++jo6MBbHLmU2WxYWv/GWPs1wxsONYW1H7WXAi+UI7EUoFtjJfSl3Nn/78PZcDnmQEi/3HA7ty5M1QZo+sqYFcAsDn9cLLY/PuxoUmCk2ekkWwEXp2RUr9+ff7kGQBWskIQGhrK7zjwCWNT2A+x6YjL5XK2K85iADsNsrOzc/WHgoICzhCaLYETBxcEbH1+xRcvXkx+xakE5N2wYQOcYNMSCPqlJS4QlUrlvHnzBP2KUyH8CIDdvHlzkhKJSCKRyGQyqhpKr9QILuVLS0vjk6rValmLTZPMEIWDg8OXX3758OFDTl3l6cKLFy/oLhdOfbGTZ8QapKFSqQIDAy9evJiRkcEpFrP0qH1OgaVOnrm6um7dujU1NTUvL48tNi8v79ChQw0bNqSVPJBBVLERzk8qleqzzz67efOmoNyE94rTrDhbLuKG17FZYJPeYHuWmZmZWq2Gax5rXbCxsUHE19cXxw/ZbYwaXXj8+PH8+fOty+KbSa1Wo1jcjULLlcSLVCp1cXGZO3cuRyI4w/zo0SMccD+rO+N+7ty5sy8DjrynpKQILjhzSsMj5ngLCgri4+P1uUZSq9Vr1qxJTk7mKA3yfvvtt82aNbO1tbXRBauX7p8sLS0dHR2XLVt29+5d4+nRarUajWb//v3dunWztbUlwVpZWVlbW9vb2zs4OFhZWWHvF0msUiP29va4H1tQgNHR0bDYmMQmbEulUgcHh/fee+/YsWNUR+d04aeffvr555+vXLny7NkzwjZbuCCw0R1Qq9UdO3b8+uuvT548+bLa////CxcupKSk8H2VGwa2RCIpmfeeOXNmRETETz/9RMVBncLDwz09PW1fBrh5UgsFy5cBOoAphoSEBJY1Nm5oHZtfo8YDG7dPwNiamJjUqVOna9euo0ePHjt27OjRo0eOHDlmzBhEJkyYsHv37uTkZCwUFb8MWq02MzNz7969I0eOHCYUhg4dOmTIkMG8MGrUqIEDB3p5eVG3TaILYMcAsF+8eHHx4sXevXu7urrWfxnq6UL9+vVdXFzatWu3f/9+fXOHrFjZeFFR0f3792fNmjV69Gg+HwMHDjx27NjTp09pch4GARtRIyMjx48fP2LEiJEjR44YMWLYsGFDdGHw4MHvvPPOwYMHHz58yDaI7HcF41hDmj179ujRo0eMGDFUF0aMGDF69OgxY8YMHz4c7p9oSZavAxWbAmCnpqYKUisIbJgKuVxua2tbv359JyenevXqoboaNGjg7Ozs4+MzZMiQs2fP8kGo1WpZYJP5gYaYmJhYWVnVqVPH0dER9c7+bdy48fbt2x8+fMhpSQ0AG3ZFoVDUrFnTWRfq1auHwp2cnBo2bFivXj0XF5fAwMC33npr7NixY8aMGTZs2CBeGKxzBTV8+PChQ4cOHz582LBhb7/99nfffZeWlga48KVXWcAmkYlEIjMzsx49emzdujU+Ph77abFlOkkXUlNTnz17lp+fzwd2YWHh48ePb926dVdPSBQKSUlJx48fHzZsmImJiVQqxcVXtMnBMLDPnDnTokULqVQql8tx2yvi2Mlcu3bt7du36xuJ8IWLlOLi4vz8/JSUFEEmEhMTMzMzCwoKyBkwAVuj0WRmZiYnJ9+9exeyunv3LnGclJSEPfZ4X9/XOem4b/T+/ftsgYgnJSWdPn26V69ecrmc7s2pWBjzSysrsHF3GigkNEp1AYCXSqUWFhZt2rQ5cuRIqcBm6YHGwnSb8IJUKrWzs1uyZAm/y1YqsIlO+NXD1cVgwdLScsCAAUePHiVEsFVMdZ2YmAjlocjdu3cfP35MIw5OLVdiVxwiwxKFQqEIDg4+fPjw8+fPWYcvFOdAmh5xnXVBQQG9aWTk999/f/fdd3FggJZJ0H3QB2ytVpufn0/AViqVFhYWuEQacblcXqdOne+++85Ii12sC9qXhwQMUM7yizhyYcwP3+aC2ellfr0aSCHXVyizoKAA9wEWFhbi7i62UWZVvzLiZQU2Cz/EMSlAmFEoFFZWVl27dj158qQBYNNUAgohdeWk068SiaRatWorV65MS0sz3mKjz4gWB00GzIxEIjE1NZVIJGZmZsOHD//111/pxkLBihZMLCoqQi7Blr2yLDaGQ+iKyGSyXr16HTp0yEhbB0gA1WXajk/afO3atXfeeQf7zABstJqAuuAYm4DdrFkziUQCSGO0iRvbpVJprVq1tm3bViYuANH8/Hx9Ptgw7iWWCeRIob/EWoVH0Hzgu3TFD8RVGUjmlFkmYAMnaKBRDrYn4y8qCxa7Q4cOhoHNDtqhpTSAp5KBanwOwF6xYkWZgE1FkXWBYDFPKZVKTU1NBw4c+MsvvwC6nCbDcF1jFkZf415ZwEYdwNmFVCoNCAgAsAVbFz4DGl3AsJP/a6kpV69eHTt2LFatUW3oW5UK7NOnTzdt2hQ+SaEo6IQje61atb799ltjGQcDOAAAIABJREFULDYBEnKn8bMg5WCWshiuMMESXiURn8PXCdhkqTg4rPDHsgKbUE0RQAVuoTGrb2Zm1rZt2xMnThiw2AQwcErAIwYJ1Sywly9fXg5g88sk661UKocOHXr58mV0o8o0XWK40isL2OxYRSaTGQlsUm5W1w0zIPgrAVsul1MVAuFSqdTZ2Zk/Kw6LTcCmJgkRFFIyBWIksEE//gpSyCaSlUbiawY2S0lcXFyfPn1IEV9DpKzABkkc043JFKopMzOzNm3aGAC2k5MTsigUCpz3JhjrY/lVLDaVSY0R6DcxMUFX/MqVKzT4MtLysbUmGK8sYENSNH0VGBh4+PDh3Nxcw3ST9WCBbTiLIFcANiZaSAlgdWUymZub24IFC9CIsNkxxm7evDlgjN1O1KJLJBJBYKMcgJP6RdQAG9MGcyhhgU0tHUtn+eJULKcdYVUqNja2T58+pWo5aeqrR8oKbKINzTSgQlWMioPFxk0gHOUpLi5OSEjA0rGJiQmATWWiNy7IlEQiKbk8ZPny5ampqZwOMzt5RkURYUihfj5hG2MBqVQ6ePDgy5cvs7VgTP2SYnAYpLyVBWxIBx0khUIREhJy9OhRfieWkAyCiFyMPGnyjMg1MnL16tV33nkH17VTrQPYpqam3t7ey5Yt4zstyc/PP3fuXJs2bWgGBREs3clkMgcHh127dnG4AAs0EQUks4yUSjMHaSQTgqJg5RkYtAt+kTMVx7Y4RO2NGzf69euHDi2NQvmKTtoJfQWc2ER+Fn0pZQU2KhFTZZiIYiGE6XFzc/MOHTqcPn2a7wulqKgoLi6uZcuWMpmMFAMR9MZR43xqafIsJSWFM+9TWFiYkpLi4+OD7iGLbdxSSm0QfRFjPbFYbGZmNmzYsCtXrghWMb8eqaZoTM7WI/t+hQG75JPTp0+3srJimygAW6lUdu/efevWrQkJCUl/DnDB8/jxY2zPYCnDKlFaWtqNGzf+nKmUp3v37p04cWLEiBGsQKGCJiYm5ubm3t7ec+bM4RNz+/btffv2tW7dGu4iqP3GyFyhULi4uOzevTsvL4+tBsCvoKDg0aNHCQkJd18uTZVCJfPz06dPsdqnZQKKffr06b1791hHRVgXSU5Ovn37NpzjsMQwBXCjKLCoqOjp06dJSUmJiYm09JikC/fu3YuMjAwKCgL7BoBKQ0RoqqmpqZmZGS7940PCcEpZgU2fNjU1xaQmH9gWFhbt2rXbsWPHrVu3wBr9vX379tGjR1u3bo1JaVyvDT2BAS/xSyPIuEQisbe3X7x48S+//EKigwDv3LkTHR3t6+uLvCyw5XK5ubk5mht8haZysYxqZ2eH5S44PyI6DUQSExOTkpJu3bqVlpYGxx5aoVBhwC4oKJg7d66Dg4NSqTQ1NVUqlbgxD3+tra0dHBy8vb19fHw8PDy8vb09PT19fHyaNGnSu3fv1atXC17g/uTJk61bt3bq1MnHx8fbuODl5eXn5+fr61u7dm2olFwuNzU1lUqlpAdmZmYODg6tW7du0qRJw4YN3dzcPDw8QE/Dhg2tra1tbGysrKzMzMzAi0KhUCqVtra2fn5+u3fv5rvjKS4uzsrK2rlzZ9u2bY0n1dvb28vLy83N7dtvv338+DEHn8XFxTk5Odu2bevVq5ePj0+jRo2aNGnSuHFjHx+fxo0bN2/evMTB07p1627dupWfny9Us8JpGo3m2LFjb731VrNmzXx0wVMXPDw8fH193d3dra2tUX1YxsdSDeevQqGwsLDAm+bm5tWrV69WrVr5/EOWCdjU1AKQFhYWdnZ2FhYW5ubmuC5PpVJZ6AJ25kFcYNDT09NLF5ydnaEJCoXC1NQUWUxNTdVqdY0aNdRqtSCwMayrU6dOo0aN/Pz8GjVqRNLz8vJq2rSpSqUCaGUyGVaqAV3g3MrKqkaNGnZ2driIz9LSUqVSVatWzc7OrkaNGo0aNWrWrBnKFFRzLy8vDw8Pd3d3T09P1FS7du0WLlx48+ZNfX7KKgzYGo3mxo0bERERh3UhIiLiyJEjhw8fjoiI2Ldv37hx4+rXr4+mizaNoCvl4uIyffr0W7du8TsV6enpoaGhgCVHt/Q94hPsphS08bC6aObRdcQ79CYa7Bo1anTt2vWbb745fPjwoUOH8BeRiIiIkydPJicn8/vwxcXFmZmZ69ats7GxIQL0UcimY75HcNsDtrhu2rTJ09MTmxlIeojY2NjMmjUrLi5OX9UKIht7xVu1akXOA1EdmA2xtrbu3LnzokWLwPhBPeHQoUOoX0gmMjJy4cKF2Nhj2D7zfy0HsFGVtWvXHjVq1L59+6ByEUzYtWvX5MmTa9asSZVLolMoFHXq1Bk5cuT27dt//PFH6GdERAQ4+v7770ePHm0A2zRLRwVCejKZDOM1Mv40ZMC+icmTJ+/Zs+fo0aNHjhyB6CIiIo4ePTp37lwnJycLCwvDSo7PsV+3traeMGHCzZs3+ahBvVcYsIuLi/Py8rKysp7zwrNnz5YvX46L4AhgUCyxWOzg4DBp0qSEhASOydJqtQ8ePPjyyy/R3yNJlRoBbiELtL7ANuTCDqIwCKc+komJiZ2dXckFlDdu3MjMzOTx8Tw7O5uzo5vAA2DDgQx9zhhSS45zhIWF0SEQEkKxLmzevNnNzY1VF8KGSqWaPXt2QkICZ8hHJAlGNBrN999/36JFCwxTMSykfWZqtbp///5Hjx4VrEe+QJCSnZ29Z8+eDh06QNpEoTGRsgKb8OPo6Dh9+vRHjx7xqUpLS9uxY0edOnWgOTCkqBSpVFqnTp05c+bcuXMnIyODkzcxMfGzzz5TqVT6KOcoD8rE7atofGGfiUioore397Zt21JSUrKzs9kvZmdnHz582MPDA9sisbiNCQ6+5qBk0mo6tkkKw6nuCgM2TetxPgAvwqtWrYLbCtJRIhGnu27fvs2SiPkk1ucZGDPmL2qFmgO2dtGsoA4w6U2oBj02NjYDBgy4c+cOZ+aTzxQnJTMzc/Xq1eQZyhg68Q6AjWvoAWa25I0bN7q6utJCDoscc3Nz410joWQMs7///nuc7gLv2N0BbKtUKmPu7qLSqMoOHDhgwK+4PpyIRKKyAhu1KRaL4aX0+fPnRAPJLSMjY+/evfBYCKONekcPvFatWgsXLrx//z4aRJJ5cXFxenr6Z599plQq9RHMyp9VM6IKSMZffFQikXh6eu7evfvJkydEISqiuLj4xIkTDRs2pKKoRvj6Q/OUaAUsLCw+/fTT13S6i+jmRIqKilasWNGgQQMCGzVRIpGoXr16U6dO5XgphbhZYOuTtYF0GGSSMuoYrSmmfCE+asvhNFMQ2FT9HNaoOcvMzFy1apWBXpwBOgUtNj7EHttEK057rUpmZebMmSM4N6GPSOjTnj17mjdvjv4LNJX0UqlU9uvXLyoqSl8HDyXzgW34Uj4DvJcV2LQGids29QF7z549NWvWJLuHSkcnsWQgHR4enp6ejrabahbAHj9+vAFgE7rYXgALQkImvljiDMPExMTd3X3Hjh1PnjxhvwXTdfLkyYYNG5L8qa3nSAyVjlkP9Br+XsAmuWCxAVolaLGhQCywWfEZH4cUgG1qvEEGWwdYlpDL5TY2NoMGDUpMTOTsFaMq0YcZQWDrqydOtRGw+YV/9dVXLi4u4AJEohnCzZjluDCguLi4ZLBHB10gBKJHqVT26dPn+PHjxgAbqgmayw1snMcu9XQXXRtAGHBwcJgzZ47ghQEZGRkEbJr3ppmdGjVqrFy5kg5pkfHUaDTp6enGABvtBSqCNBl1DXkC1dgxKpFI3NzcvvvuOxbYVNEANhpZNBbUKeAouYmJCWaICNjld41E9U0Rw+6HiVxOhCw2EEU2Bzw0aNBg+vTppXop5fBp+JEIxifIaFMuusiepIk5Uhsbm8GDBwPYcCfM7+lxuMMjH9jUPQExVGFEG0UWL16Mrji/ZBbYBGlkLJmGnTVrVjncD6MrjtKgUmQG1Wp1nz59IiMjyw1skrCREXK0QL0AVghwZigWi/krSfXq1Zs/f/6LFy/Y9gV5WWBTLaBZlMlkJbPTq1at4gAbG6LS09M/+eQTc3NzqhrBCHBLGAanZMNpaENaV3LfBIDNsoY4gE3zlygKH2UFCODQoUOpVPpKjhb4umjY5xmfbqQUFRUtX768fv36oA9qBLbRFZ82bRpnjI2MrMUWFHFZE6m9x9QRaKA9QDjiO3To0FcBNttHgDLRYF4ftUuXLk1LSxPEEoCNkQtb6yKRyMrKynhgE2w4HlRgfEQiEfZgWVtb9+3bt1Rg8yu6fBZbLBbXqFEDjhbIcrKFX7p0qUePHuieUBOMSmzQoMGiRYtwKTyn8WWBjeog7JmYmHAsNgZTRgIbiMDgmS2ZhtNEJPUHxWJxgwYN9LkfJmBjBk6fhhCwsdCoUCgsLS0///zz2NhYVlxs3NDkWSUBG8US546OjlOmTBEENt0EYoDhMv1ErSk6NlRP0BWcuR0+fDiAzYrJcLy4uDgjI2P16tUlYKOWmxjEITP02QSpXbZsWWpqKgfYgCIBG2pEplUkEtna2s6bN8/IWXEOsJs1awZKoPHYtCyVSjF3WGpXnC+N/fv3l2/yrEaNGh9++CEcBvBt76VLl7p37y4SiajHS21x/fr1FyxYIHhs7tmzZ3v27KHJMwIbarlmzZpLly6lMTbxotFo7t+/b7grzuk0UXuB2Rw6mECzIXjBALAxeUa2nY84UhixWIwdGVgYU6vVADanUSN2/gJg07Z7tENOTk5ffvklJoGK/hzS0tLmzp1ra2tL1fmKESxWY0rD1NSU1jkJjdWqVRsxYkR8fDw05s/k6H0qLCx89OjR6tWra9WqRfOCRKqJiYmlpaVCodBXbWvWrMEkLecDhYWFmzZtcnd3Z8tEHMs28+fPj4uLw2l7Tl7+I4xbQUHBtm3b/Pz8aIiI3YHowtSqVQsbofAyvxB9KYcOHfL39yfNJt5LjdSsWfPjjz/W5/Ps0qVL/v7+1OmlLitO8uCyND5Jjx8//u677+rVq0cZaRbN1NTUxcVl/vz5iYmJHLkVFhampaVNnToVuycJUWwEUqJiwR2NpbHawrYjpQI7MjLSx8cHdUpE6hMaxk142draeuLEibGxsX8jYJOdBLBtbW3bt2//4YcfTpky5XNd+PTTTz///POJEyd+8cUXcCe0aNGiJUuWLH7lEB4ePnv27L59+1pYWKB6IE0acJqZmXl7e3/wwQeTJ0/+7LPPxuvCp0KBfpowYcLUqVNDQ0Pnzp27cOHCcF1YwoTFixfPnDmzUaNG+pwZduvW7b333uN8ZPz48RMmTOjdu7e9vT21O1TlmMDv1KnTuHHjJk6c+Pnnn3Oycx5B7SeffDJ58uT33nvv3XffnTZtGkPjkvDw8KVLl06ZMiUkJGTAgAEGCvzss8/w62efffaFLkydOnX48OHBwcEffvhheHi48bW0ZMmSVatWYdmcTA0bSUlJ2b59e1hYGNU+aA4LC5szZ86ECRM++eQTsDZ+/PhPP/30s88+mzRp0rRp01B9RMmSJf/HYHh4eMn4ZciQIePHj4eCQeU+//zzL7744pNPPunUqVPJOiK/CRaLxWq1usQtz+zZs1m5gbDQ0FBnZ2fYUoI9UG24K56QkLBu3TqWQaKZE6GPLl26FPHjx4+XdGn/LsCm9o9aO7lcrlQq7ezsqlevbq8LdnZ21apVs7e3r1evXlBQ0NatW9PT0x9WULh27dqsWbOo8mgiBOvY6KLb2dnZ29tX0wU7PQG/4m/16tWdnJw+/fTT27dv88lMS0uLiYlp3769vlkZCwsLW1tb/ufs7e2trKzQs4C6QOHInSj2VBKp2KKoh97/ibRatWrVq1dv0aLFkiVLrl69yif13LlzwcHBlpaWBooiOhGpVq1arVq16tatO3DgwMOHD/PLNJzy6NEj3CIseKYlPz//8ePHDx484BTy4MGD6OjoDz74AKoCakGPvb29o6NjYGDggQMHUlNTOXkfPHhw8eJFPz8/KBuxAH2rXr26jY0NzcCTrmIEZG9vv3Llyps3b3K08f79+9euXcNecbblJdNtoCuem5v78OFDDpEcZgUfHzx4kJWVVU7XSPx2q0Imz2gNmUBFYxW4LkG6RCJRqVQhISHHjx8v0+Yqtsnnx1NSUhYuXGhmZkZWmppY1ARbnXwJ0K/UHqMctVo9btw4wfuxCwoKYmNj27RpY2A3NRSCLRxxDN6wYxHvYKAo2LHn088WiF0uYrHYzc1txYoV7AoTtq9qNJo//vgjJCQEn0A1UQkUoV+p1qRSqbW19fDhwy9evMgXuDEpIIBvfDCjhjOwnF/j4uLeffddWs0iYiQSiYWFRadOnc6fP88/3VVcXBwfH48VRHBEUsX8C0YTxCxFcLpr9erVgo4WUlNTvb29kRc6AymBKgPAxqQdHVI2RlbsOxiGcCSDF/6CMTY0hsZ4nGlkc3NzmE25XG5hYREcHBwVFVWm7dAs5/x4cnLy/PnzS7zt07IwiwfUBMYI/HT8Sn+hE2iGVCrV+++/zwE2pqzgV7xVq1YGgE3fxaepQYG2kblmvwidZt8UJBiqSeWIxWJXV9dly5alpKSQcAhXcLRADS4RQyyzERCDIZ+lpeWwYcOio6OpzDJFaG6PkwvpGo2Gv6zFApvEAsqtrKw6dep08eJF/pFBeCmFowVCII1dMblNIiVUw2LjPDaAzc7zFRUVpaam4rZNqgIq3HBXHAzSzZAc9kt9RHbB14wCNrH66uvYJCyaKmBFQOdUcT7GwsIiKCjo+PHjlQFstCzQCWIQAID6sj0LzmvQePTeoUxqtdowsHFUkNhnI9S6E5A4v3JgT78KbjWFFpKGUZmESTc3t2XLliUnJ5NCEK7I0QKfX/ooRUA2Gh21Wj106NByW2yihBMhYNPsN5EaHx///vvv49AV2+dC96Fjx44XLlyAxaZCsOkI7odpsYpQTd0iUgbilANsui8Z1HIcLUAfcIgVMjdgsWmxzUgvYMQ+R1D8R2OBDW7LBGwiorCwcOXKlU5OTlAyyIvVPJIg9AnrQ/BKFxwcfOLEiYoF9oIFC7DhgW1cqIdJVU7ApslYqnLQKdMFFCJosSFuuglEn8VGE0OFU4TEoi+ClgXw5siWFS9BGhE3N7fly5ezFpvU4ubNm71796bP4X16pAgopPZIIpFYWloOHTr0woULVFRFRUiLYCSpc56QkDBu3DishBEmIUlLS8sOHTpQVxwlwKdnYWFhQkICtt9TJWKfPBCuj2V4UMHCJJYMaHmSgK1QKFAj8IRJTaphYBsWFIind0galKIvUjHA5nweH6M6KCgoWLFihZOTE+whAYZVFOgKqSNWDnAReWRkZGUAG70DauxRryAAf6EuoJlsIxpv/ESJJiYmKpXqgw8+4HTFIYdSgQ2EQBrUvrB9Bw4ySfmoYQLBlE6CpQhbAiy2PmCHhIRQLlJNyo4UdmgAgtVq9ZAhQyoD2HzFhbKxwMbuDgAVdcEBNk4iFRQUFBUVwTUSeYlheRGcNoM0jAG2mS6AGDQWkFtZgc2iVxBZJBMDv74qsFE0O+Rgv4pZgfz8/FWrVrm6utLBNMK2Pl3EyA3APnLkSGUAG/NSwAYpLuCEqSkCNuwASGLfRBy/ErD5sjYS2GQGCa7U6EBl2b+kbdQUsiDkI5PtFLi6ui5dupTtilOV3bx5k4DN6TjQh2jfFZUJi/3agA1qWWBjnQl9YJlMplKp2rVrd/bsWbqFAp620N29deuWl5cXZlhoKYSqldhkZch2xeHzjK1ljLExecb2nkg+5QA2dU+oagQjLBmcFyoG2LStGl/i/C0sLNywYYOnpyeEBSGS6aNmkqNJIpFIrVYHBQUdPHiQD2zOJ4x/vHfv3rx588gzDlt/QDU0g0MqdTvJDQubEaR+/PHHGRkZ/DauVGBzijLykZoVahH4AqSi6CexWOzs7BwWFpaUlMRRBa1WywE25QJmaPcbFUsRc3Pz/v37//TTT/wyja8aw29ySqbJM9DAtnpmZmatWrWCjz1+mbdu3fLz8yOtIxbQ0GPulhIpAtdIa9euxeQZWyx8nvHnUKixKAewDQOKvg7DyZEMHisG2JhWjY+PP3369EkmnD59+syZM6dOnZo0aRLG2CQpAFsikZibmzs4ODRr1qxt27YtWrRo+TK0aNGiQ4cOH374oeAYu6ioKD09PSYm5uTJk6eMDqdPn/7+++/HjRvn7OzcuXPnVq1atWzZsnXr1q10oU2bNr6+vlZWVpj5kMvlZmZm5CFIKpWam5t7eXm1adOmZcuWbdu2bd26NYht2rRpp06d5s+fn5GRwV+PLRXYDg4OjRs3btmyJcjAX5YwNh1xfL1atWroR8DIk9E2MTGxt7dv3LgxXgObLXShbdu2I0eO3LVrV4l3Gr5CsMBGTRFgcPDA1dUV7INxEmCXLl1CQ0OvXbvGLzMzM/P69etRUVFG19L/fzE6OrpkNxjfZY1Wq01OTl6yZAlJqTUTOnfuPHLkyKVLlx4/fpzKgiqePHnym2++8ff3p7pDCa1bt4bu1a9fX/DeMnTFZ8yYcfDgQU6ZUVFRO3fu9PDwkMvl1BQSqg3PivPFRQeBnz9/fuXKFcAHXzytC2fOnEHk5s2bmZmZNNTnFPWqwKbiCgsL16xZ06FDBz8/vyYvg5+fX7NmzVq3bu3q6lri8QP6h+Yf5lEikdSpU2fUqFE7d+48p7va8qeffjqnC2fPnj137tzVq1f5/sC0Wm1ubu6RI0cGDx788lNG/W+mC61atRo5ciRUDZce/qS7BjEqKmrVqlUNGzaENhO1IBhX/ISGhh47duzMmTPIAilHRUWdPn36+vXrNHlLYtFqtaUC++OPP967d+/p06fP/jlAIH9O+9/TmTNnzp49u3///latWsGLIOBNjaZCoejcufOKFSuioqLOnz8PkZJCxMTEpKSk5OXl8ZdPWWCjk4K+JTzGubq6Tpw48cSJEyAJZEDJzp8/HxcXl5WVxTKOeIlYJk+e7Ovra1QNMS/5+fkNHjyYDC9bcnFx8fPnz69fv37s2LHTp0+fOnXq/PnzP//8MziNjIxcsWJF+/btmzVrRtrYtGnT5s2bt27dukePHuPGjdu9e/epU6fOnTsHLs6dO3fq1Kl9+/YNGzZM33lsmUzm5OTUpEmTpk2b+r0MTZs2bdasWfPmzdVqNR34R0UQtstqscFpYmLihAkTWED5+fk1fRnat28fHh5++/btCgP23r17Be+4KemCTp8+3dbWViaTYbe6QqGAP0C4BIQBZKcWMJ6pV6/epEmT/vjjD1xBnMeE3NxcvvtOsJ2dnb1z586mTZvSzDBFMFlNj2wEa+Oenp5z5sx5/vx5Tk5OXl7eC13Iy8vLyMg4fvx4s2bNsOGeep6YGjA1NS25zPHbb799+vQpSM19GeDyJicnR3BBslRgL126NCkp6WVhuYwA8v4fe+8dF1WyvA8TB4YhJyWoSBJBWDGsugYwIkkRMLvGxSxR14xhjZgDiJhdc8KcFXNEFEUEwUQOkocwwMA7O8/PumfPDGNY9+6+38/tP4aew5wO1fV0VVdXV9NDyUx2draLi4uKigqmIRKwMBR7e3tfunSpuLiYekclVFZW0oYNS79gWsWxRMQY4cCgvb19REREaWkpq/v4insFmfBD/vHjxz///DO55TOHg0aK9V/Op9SuXbsTJ07QdAlPDKiH1dXVFRUVZWVlFRUV5eXl6GZVVVVlZWVubu7hw4fNzc1hnabQhVwuV01Nzdzc/LfffktNTS0rK6sUX1gNgpeXl79//z4gIEBdXZ2mSFaGeBh3NqJ8cDuOIZBdhrSnb5DYoFtycvLgwYP19fWVlZVxplj1U8IxxFmzZiUnJ0v1Tqmvr/+8xMbEgx526dIlOjpaKrBFhsd58+ZpaWmBIWD4Qc9hgUT0RhzTAS/Ccti8eXPJi+/RtzpxkuSV+vp6Pp9/8ODBNm3asEjP/MrUi/AciG3ZsmVYWJhksXRhAH6GRkJwYbZq1qzZoUOHmHHFYfmvFSdCC5pNFP8ssNevX9/QsU3JRtKT0tJSd3d38k/G0gYIbNSo0YQJE+7fv19VVYXfs5pE+p5oOqZ21tfXJyYm0oUBzPkCG352dnZRUVFf6wX4+PHjESNGwFzKHB0aEeYwkZTDhOLo6BgdHV1TU4NZgwlsTEnMftEuDIVGormJ7uhUVlY2MTFZvnx5ZmYmdYQKQaCFhjx/ycsNpCbTJjCM2Z9pe0O/5OXlLS0tGzq2SaMpmUlOTvb19dXS0qLyUSM2jDQ1NWfMmJGcnCz5Ip5IAfby5cstLCxoWw9thToq+4JoxBVnvkjTM7gELQNUiBDm5uYNBVpoqNGfBTb4g8yS6AIeKisrt2jRYvny5ZKFM4GNSQfNpqnKyMhoz549zHmNgM1Sa8ErqALAluFSKiOCimQj6UlRUZGHh4eamhrO6Orr69vY2HTu3Nnd3X3ChAl79uxhRiYm3qXXkWG2s76+/uXLl0OGDMEmP5NoALatre23AXv48OEygE1bJGQvIEA6OjqeOnWKXEoJ2ERtZr8gyWtra4uLi48fP04n7TDumPI4HE7Tpk2XL1/OjPtPhXw20AJhgXYumNtaNEMx5y+4+n0bsAcOHKilpYX2E7zhu6WpqRkSEvJ157GXL19uaWkJGUXWYNDFyclJxs3vCxYs0NHRwUYCXqRZGRQhgxkAA99aCwuLBQsWvH//nik6WPwn+fWzEptgTOAE3XHFDwvYGNqqqipcowuJjRII1XJycgYGBjt37mQCW7JhTMCgWPIVb+h0V1hYGKKUNlSa1Oc5OTkeHh6GhobW1tbOzs4///zzkiVLRLHNr1279vTpU8TEpJCMxLusovCcHormgtmzZ9vZ2eno6MAURDOysrKyvb39tm3bSNDRW7Izjx8//iywwS14bimJAAAgAElEQVTgB8z+EAlt2rQ5ffq07PLpvyxgm5qaYqZA4ZA3ysrKpqamS5cuZQIbJSDmmewIKmAJMr6QVzITyaw8nPMPHDjw8eNHUpSozTIyr1+/HjhwIOsGDjhfYOPmq4MZQmJDRGNcQRoFBQVRQHyo4sQolBGp9QsXLsQaG/vArJmGiAKbM8UwAbDfvXv3dwCbrEo0myopKeHuLiZNIQEAbFyjC2dy0m8xMYsOnLEkNrMQyhNNIGoA7M6dOzcE7FWrVjUUGonKZGZQfnp6up+fX79+/UJDQ6Ojo58+fZqTk0M7tyxiUpNYz1Es/be4uPjatWsLFy7s169fixYtdHV1aQ3P4XBat269c+fO7whsGFAJJ0y2gSSAxKbmMYkgNY9xhCrepEkTmtNpdsZZjvnz56elpbE68iXApgJJDyeAsPBMIg0S+xuAnZyczJTYJGbA0hR+WCodpKyx6+rqVq1ahVDBtGqnuC2dO3c+ceIEIsiB3KQUiSpgSmzqMBpE6w1CGgpXUFBAlFKpEVQaavRnVXHo+ViNEKRBayUlJUlVHH1hquIIHEeqF9TFxo0bf8n92FhyY/kqFAoJ2A25lH6VxCayl5WVxcTE3Lp168OHD2TiRqW0QIAxr0acBOJUXV2Nr8xG4lov+G+Ul5d/+PDhxo0bmzZtGj16tIODA6Q3h8P54YcfduzYwcKDjDHCv2RIbBIYoDMFmSHmad269YkTJ9AwqVMSq3YQB8A2NTUldyP4hMEeYWRktGzZMuYaG4V8Ftg4N4YdUFXxrUZklmtooYF+WVtb47IXZmvRVBmdImBDusBEBT0cBx+/LjRSXV0dJDZZCGhykpeXd3Jyio6OZgIbPIT2LVq0SE9PjzlXkcuHZM8xT8NmOG/ePFb4YSYJpOZlq+IkCkhrQHfgNfUlwMYcT7MSZgfRWd/du3d/VhWnyQ6D91nj2cqVK9PS0khtltpfeggQ8vl8oVAoEAhgsSOUourKysqioqLs7OwP4ju63rx5k5KSkiBOr169wgVjGRkZubm5BQUFFRUVzNfhCC0QCPLz8x8/frxx48ZBgwaJvFC1tbXt7OwiIyO/I7AxuWPRx5R4JJ1EtzWdPn36a4FdUlJy8uRJUXxilAMDAfmQNm7ceNmyZd+gimOBRmYjbAQSGzPbz8zDeLZnz578/HwaRNLJPwtsbW1tlAYNGtXJycl9dfjhqqqqdevWtW/fXlecDA0N9fX1MWfzeLw+ffrs3bs3MzOzqqqKdqeqqqr4fH5ubu7cuXONjY3h00NIBnFxElNdXZ3L5SK8M0Sirq5uhw4dQkNDnzx5gp0n7D1g36KyshJbHUyKIA9gt23bloaN9k54PJ6Ojo7kpgXkgFSJDUJXVVXdu3fP1dXVyMhIV1fXwMBAV1eXy+ViSYPAD1u2bCkpKaE9JObWFDNfVVVVXl5eUlKCnbAHDx74+PhgnYJ2Umvl5eVxnXpDG5KsvmMmhc8GnUbAtaSVlZWFhYVJSUmnT59etmzZ6NGj+/Tp07FjR+y7itarbcSbyZ06dXJ2dnZxcfHy8po2bdqpU6devHiRk5NTWVkJCNXU1ID+FRUVubm5T5482bRpk5eXV+/evb+7Ko6jPgYGBmpqaqqqqmpqapCuHA5HW1u7Z8+ee/fuxXUfTPJKzWNQsGu1a9cua2tr7LNqaWnpfEp6enqtWrUKCwt79+4d67T2ZyU2Qj4CF1paWtra2jo6OtrihGAYGFN8wialpaVlamrao0eP48ePMy8MIGALBAJcSCLZo8ePH3t4eJiammpqauKOMX1xABId8d1yZmZmc+fOTUxMbIht2FZxoVB4//79Xbt2bdy4MTw8XHQf1caNG7ds2bJ79+6tW7cuXLhw5MiRHh4ebm5ufT4lT09PDw+PIUOGtGnThi5qBLCBJRUVFXt7+8mTJ0dEROzYsWPbtm2RkZFbt27dvHnzxo0bRZvYgwYN6tu3r5ubW+/evfv06ePq6uru7u7q6jpw4MB58+Zdv35dUkpUV1eLnH6PHz++TSJt3749NDS0c+fOFKGKDmxhj9fGxoZlPAOha2pqPnz4sHv37vDw8DVr1qxbty4iImLXrl07d+6MiopavHhx+/bt27Rp4+Hh4SJOfaUlFxeXPn369O3b18XFxdXVdcCAAd7e3kOHDg0JCdm0aROrsVFRUVu3bn327FlZWVlDIyQJbNLioGmXl5dnZmbevn179erVw4cPd3Z2bt26tZmZGS6sA04wn2J7GPhRV1fX1tY2NjZu3bp1586dBw8evGbNmgcPHmRlZZWVlWE+hY2goqIiKyvr3Llz4eHhMTExkmPBaiHrqwxVnMPhGBkZ9e3bd82aNZGRkZs2bYoUp+3bt+/cuXPbtm3Lly8fMWKEu7s7qNqnTx8XFxdpVP+D2i4uLu7u7m5ubp6enuPGjQsKCkIhkZGR4eHhmzdv3rRp0+bNm3fv3p2YmIh7KpkCUzaw5eXl1dXVBw0atGLFisjISJQWERERHh6+ZcuWrdJSZGTk+vXrw8LCdu7cCTcNJmVg6nv48OG0adPc3Nyog8w+Ojg4BAQEbN++fceOHVu3bkX7N2/evEWcbty4kZ+f3xDb/AfYpFR//PgxPT09LS0tIyMjMzMzLS0tKyuroKAgJyfn2LFjrq6uWlpaNK2S6m9oaIiQfRwOh1QRqCuqqqo9e/bctWvXhw8f8vPz8/LycsQpKysrLS3t1KlTgwYN0tbWhvMmtv4hzw0NDb28vKKjo6X6ildWVhYUFEgGjsnPz79x4wYssXAYIL1aBrDBxGVlZbhe9927d+/fv8/MzPwoTrm5uXfu3PHw8ICLApr3yY3ij79YbpHfAv7F5XI1NTW1tLTs7e3379//9u1bydbm5uaWlZVJ9Zpk8oFkXiAQ5OXlxcfH79+//9dff/Xy8rK3t4e5C4YMRXHCMg+fLHMDLZQgHh0cHHx8fIKDg7dv3/7o0SOY4sAVtbW1+fn5iYmJ6enpDXGSZAvxRAawFRUVTUxMJkyY8Pz585ycnMzMzGxxysvL+/jxY15e3qVLl3r37k1uTkRkJuUpj0tR1dTU9PX13dzcfv/99+zs7Nzc3Ozs7MzMzAxxSk9Pz8rKonPaaCEmSlwY0JBVHC6lS5cujYuLQ2ki42WmOGVlZeVKSzk5OWlpaampqWlpaRhiptcACAuHKJp24fcB7lJXV2/RosWBAwfy8vLy8/Ozs7MByYyMjKysLEAJthWplP8TsNFD+AOw4lSiHZcvX+7bty9tSzAZhTQQGL2BbfCWioqKq6vriRMncCEL1oH4rK2tffDgwYgRI5hv0byA013nzp2TBDZkLLMoytfV1T1//nz8+PFM2wy5kSkrK0t1UEEHa2pqKioqYF4iRRf/evXq1cCBA2k7Uf5TwhM6VIDH6AIaoKysbGVldfXqVYhlaiczwxQdLG5j/Qtr7OLi4hcvXuzevRvx95o1a6apqYkNKlSKT+o1GkmEpQymPJhRVFRUtLW1TU1NO3Xq5Ofnt3Xr1qdPn378+BGW9pqamvLycizI0SRSHDAW+CrJZDIcVOTl5Y2MjKZOnYroy1gIgCwo7dGjR71795aXlwekaX1H7WdmYDGFbt+jR49z586B72FBYH6yGonxxekDGcA2MDDYsGFDeno6jn9SgcxxZOXJeMnsFLP2q1ev2tnZEY4w1VI3W7Zsef78eTQPggeVYuVF/MkskPL/ATY9kpEhYINvmGSVmidgu7m5RUdH8/l8ycIx8NQ3Zjlqamqenp6XLl2SCmzJoujJ8+fPJ0yY8Al68vBYxFcOh2Nra7tmzRr6MTLEpiwg0c+SkpIGDRoEIxyJQZKENBjUEcooKytbWFhcvXpVavepfFaGuI3ZHqFQWFlZ+f79+1OnToWGhjo7O5uYmPB4PCbfA6uIiauhoaGnp9eoUaPGn5KROBkYGGhoaJB7L4BNyoiqqqqhoeFPP/00ffr0o0ePJicnw1sWIYoqKiogtJkUozyrF/X19QRsGg7KKCgoMC8MQCHMEh6L44ozD4oSVZl8gmmLfqamptatW7cLFy5UVVVRw5gZZhVMCUEOKtRCymCfbOPGjZIxzyRLw9ixnkv9evXqVdxCi+6wgG1ra3vhwgWpL+KhJMXox98O7IZIzKQ4AdvV1fXbgO3h4fEXgQ31mzyEVFRU7OzsJIFNFGkoQ8AGDDDkMCIQKfCQBgmZ7wVs+FQ9ffo0IiKiX79+lpaWcBEDhmHk43K5Ojo6pqamLVq06NSpU79+/caMGePv7x8cHDxz5sxZ4jR9+nQ/Pz9PT8/27dtbW1s3bdoUtiu4UpOPqoqKiomJiZub25o1a548eVJQUCAQCCoqKmCQJ5wQMJgTEJOGADbtrYBi9Mm84oepqaIEAJvoyTREg7XokzkcPB7Pycnp4sWLLGDTXiCzeYQNrLGDg4NhJ6IWIoMDcwRseotZFPIkYCX/JfmEgA1JibpIan4W2JIF0pN/NbC5XK6Hh8fFixe/QWJDFWeCEPSCxF69ejWxZkMcSTRChoAtQxuHACdG/IvAphbW19fX1NTk5eXFxMTgpBSirGJHAAZYDQ0NExOTjh07ent7T506ddmyZfv3779z505KSorIBbqkpAS9qK2tLS0tffPmTUxMzJ49e1auXDljxoxhw4Z17NjR1NQUYpz8F5SVlXk8nqOj48yZM8+ePfv+/fvy8nKYA8C+IB3pmSyK4WtsbKzIK461eYGFm4KCgiSw0WuA8OHDhz179oQcgykUWypM+zPyGGh8qqur9+zZ88qVKyxgM0sm2lJGKBTm5ubOmDGDx+OxWouvjRo12rBhAzPQAr2LDPrLfMgiCPNf6CCAjQ6iFqye8NmqVauLFy+yCvnCr/8iYJPcowUhl8t1d3f/ZmArKCjgPAzTRI819sqVK0FlSSnREOGSkpIGDx6M4wTY3sD8SmKE/Cu+I7DRPPDcqVOnRo0a1axZMwAPeMYmsJGRUY8ePaA5P3ny5N27d9igpnMprE5hkSYQCPh8fmZm5tOnT/fv3z99+nQ3NzcrKyvAG3tF0G+NjIz69++/Y8eOt2/fokwmj8qeGWNjY2FDISsXZXCTVkBAQHZ2dl1dXbU4wYgAszytseEQQnvIksDGYgSb1WpqaqIzm+fPn6+srGSOMjOPxSpaTr6oubm506dP5/F4oCq1E18bN25MwGaaFYgUIDJJbIwd/kv/wtfa2lqs/+l+bByMhU0aSpOcnNz/EYn9HYEt2phF0GmoqTQLwtXWwcFh/fr1zGFm8b3UrwRsio5MShpzpU3wpu58sypOUrGgoODYsWMDBgyA5zCu2oJ00tHR6dSp08yZMy9cuJCeni6JOohTVo+IF4kIAoEgPT39xo0bv/32W/fu3Q0MDLACh0VKXl5eQ0PD1dV19+7d8H6FLYfKYZXP/CoD2AoKCkZGRkFBQTk5OTKALScnR8Aml28WtgFsbAeoqal17dq1IWCjzVKBnZWVNXXqVDU1NUlg45pOBDNkXqxNFKDZjQlsli5DP4atRCgUAtiYPWkbH0ER/08Bm8CADJfLdXNzkxrzDPM6+bEw9/crKioeP37s5+dHh2NRGpZhqqqqjo6Oa9eu5fP5MPMy34VLDGuuxXgkJSUNHz5cVVWVx+PBm4KO46qoqKipqZEtiqr766o4ImDu3bvXy8urUaNGEFlYWPJ4vB9++GHixImHDx9OSUmhPTPiHqALX5lIk8zjN7B7v379+uTJk3PmzEEUB8xisD4aGhr27Nlz06ZNuNGOdXCyoYoAbBZUIAxVVVXNzc2DgoJSUlJKSkpoOLCS5/P5d+7ccXd3V1dXB25JhEpmoJqpiZOenl7v3r2xxmbOdIAZFiN8Pp88rHAqu6ys7M2bNzNnzjQwMIDnJrMWFRUVY2PjqKiotLQ0yXcpcAChGtTA9AfNiHqH6vD19OnTdnZ2aDb6SDteXC5XFFfn0qVLUqdmyUFkPfl3qeLAHsFbBrAFAsHTp083bNgw85NNaJY4zZw5c+7cuVOnTkWAftYuGm4aMTIycnNzW7JkCV6ZLU6zZs2aOXPmokWLDh8+nJ2dTdgmpSstLW3FihUDBw70E6dx48aNFacxn1Lnzp15PJ6kefzbJDbGKScnZ/fu3f369WvcuDFzd1pDQ6NHjx7r1q27f/9+bm6upBMVCRCU84WfdXV1AoGgsLAwMTFxz549Pj4+iL5ELK6tre3k5LR169bc3FxCMjL0lVXXu3fvIiIiRo4cCXIxP8ePH+/n5zdlypTFixcHBgbOmjVr9uzZc+fOnT179owZMxYuXLh48eJRo0aBwKNHj2YR/BPh//iLf/n5+WFcFi9enJiYiG1LsuEDZtnZ2WvXrv1VnGbOnEk1Ij98+PABAwZQXczWjhgxYujQofjZ7Nmz58yZM3v27FniNH/+/CNHjrx//555sQFAXl5efu3atRUrVoDB0Ee8tXDhwvHjx9vb27u7uzOZasyYMX5+fiNHjgwMDHzy5Mm/Gthubm4nT56Uut9D211ANXOBKmONXV5efvLkyb59+5pKpKZNm5qammpra0NZRYFULGwwenp6lpaWEq+a2tnZTZo0CdfoEqciw+fz4+Pjb926FStOj/+c7ty5M2vWLE1NTWZ1yH8bsIVCYVlZ2fHjx318fIyMjMjVWUlJydDQcOzYsceOHXvz5g2fz/9CJ3MW3mR8raurq6qqyszMvHz5ckhICEKRIE6IsrIyPD137txZWFhImCFaSRbL5/NTU1MfPnz4Z4L98S0uLu7atWuLFi1q166dkZGRqalpk0/JxMTEzMysd+/e69ate/DgwSNxio2NlSyE+SQ2NvbRo0cPHjx4/vx5aWmp5OwsFApFhkMnJ6cmTZqYmJigxqZNm6JaGxsbDw+P3bt3P3jwgFkX8keOHLGysqIf4xWUYGFhMXHixOfPn5O5DnSAyr1+/fp27dpJMpuZOPXp02fPnj1PxIkqffLkyf379x89eoS4YN8wTf+XJLa7u/upU6fKy8slB54JbEIFhLaMfWzZh0CoHBkZ0guYv9HR0fH19X379q0kWnDooqqqCjYe1mdRUdGmTZtkAPvatWtS5zVJgkBHKC8vv3v37pgxY0SBASigIpfLtbCwGD16dExMTGFh4Tf4q0mtTvIhpE1paenDhw9FEcJsbW3hsQydXF9f39vbGz36rCMaTFMscuErbq7duHFj48aNmaNA+datWx8/flwgENDvpZbDeojfNzTX4CYQUqyoLjiNenh4PHz4EMZ/KrampqaysvLp06cGBgb0e2ZGRUVlwIAB8fHxrO0baEC//fabkZER8/eU53A4Q4YMefToEflEkXuYQCDAnXuSo/MlT/69wJaXl+fxeJ6enlIvDPjrwCbiMjM6OjoDBw6UCmzZ1CwpKQkPD/8uwAY3vH79eubMmbicFZ6qampqlpaWEyZMuHz5MsSR7Cb99f8KhcKSkpIbN27MmDGjdevW6urqkNtcLtfc3Dw4ODg+Pr6iouIb5Am1LScnZ9OmTQ3xvaOj4+nTpxuCKBXyVRkmsGlyh7aIK6WePn1KIaWoZIFA8OLFi0aNGjG5hfKqqqoDBgx48eIFy5EeQ7lkyRJjY2P6MTOjrKw8fPjwp0+fUkXfK/M/YDPpLPdXgL158+bvAmz4Nv7+++8wq8CmAln9yy+/IEQhlMzvxQQNlQO5zefzHzx4EBAQYGNjo66uDsMhl8tt1arVhg0b3r17J/Xuu4bKZD2XCmzCGzPQAuvFb/4qG9ienp5xcXHMsHaoSCAQPH/+XDawnz9//rXA5nA4/wP2n4byXyix/yKwIZdISA4fPhyBL7H70rhx4xEjRly9ehUSkiUk8S7z80/E+stfqqqqLl++PHbs2KZNm8K+jX1XNze38+fP02L7G+r5H7D/B+w/sc3/MWATJquqql68eDFv3jwTExOc7FdWVoYr1d69e4uKiphUgETF8WlE4cWJy+8oz6lhBQUFR48e9fDwgP+GmpqavLx848aNFyxY8OrVK9baktlI2fn/Aft/wP4Th/zfAzbQCPw4Oztjsxou7vb29itXrkxJSWGZ9Orq6kpLSxMTEy9evHhQnKKjo5OSkuicxp9I9k1fCNg1NTWpqakbNmzo2LEjXCmwv9CjR4/Dhw+zwoN8eVX/A/Z/CdgYyIYG5vLlyy4uLlLvQPnTUvXTF3CniorKN1jFYTzz8vK6fv26pOm1vLz8yJEj7dq1+1TV9/mrpaU1YMCAN2/eSEKIpf2ySFRSUrJly5ZvXmMTfhISEmbMmGFiYgIXK0VFRX19fT8/v9u3b0uaqSorK+/duxcSEtK+fXtzc3MrK6uOHTvSupfVwm/7Sg3DHpgokPWCBQuwlQjfLyMjoxkzZoi0DBbFvrA6qcCmsfw245lsHk5JSbG2toZVnBbzZDyTscaOj4+nyF/UQmSUlJR8fX2TkpJYjAp3uhUrVpiYmLBewdf/3hq7rq7u/fv39+/fl7wT6+bNm5GRkQMGDLC1tW0pTjafkp2dnYODQ6NGjVi7CARs7GN/7XaXiopK586d16xZI9mYK1euLF26tEOHDi1btrS1tf3UkD/+2tnZWVtb6+rqSiUlnL0NDAzs7e1btmzJfNHGxqZ9+/YBAQGSEcjq6ur4fP6LFy8kWxITE3Pjxo1Lly6FhIRIvR0G+9iyt7vAi1VVVadPn+7RoweXy4UbLIfDcXJy2rNnj+SNArW1tc+fP1+0aJGjoyNiquIosqen5/Xr18vKyr4QWl/+M2D74sWLzs7OCAagpaWlqqravXv3ffv25efnoxe1tbUfP358/PjxTfFVRDfFl7fFSEs3btw4e/bsb7/91rFjRxsbG+IrjEvLli1dXFw2bNhAr974lGJiYu7du0fuBqwu4MDMnTt3bohv/2G+fvPmzYMHDyLOIR1JoFOfPB7Pw8MDUbpYZSIiZadOnVq0aGFtbd2CkWxsbBwcHHr37r1nz57r169/auMNMMatW7f8/PwamhE4HM6wYcPi4uJY1f31r1Ks4nv37h08eHC3bt2c/pycnZ19fX3nzZsXERERFRUVGRm5RZwiIyN37Nixb98+b29vLL0w/9HNCQi08A3HNhUUFPT09BwcHCQb4+Tk1L179xEjRmzZsmXbtm1bxSlSnHbu3Ll8+fLu3bvTfEwIxzEaAwMDLy+vvXv34i16d8uWLTt27Lhy5YpUa9D79+9FcZq6iZOTROratauVlRWFW6AacWj0s+exsdmLm0ARNxc0NDQ0DAkJkboBU1ZWFhER0a1bN9y+QmfOzMzMNm3a9FXxjL+Kjd6/f79ixYomTZooKytramrCYSYgICA+Ph69qKysjIuLmzx5cu/evXv16tWjRw8Jav2/B87Ozm5ublOmTImMjARTbf2UwFRr164dNGiQk5MTkwGcxWngwIG7du3CMQ9W+xG/1cvLS2q9HTp0aCgONI/Hc3Nzi42NlbSKY7batWtXhDiB8/GJ8GGtW7fu2LGjZI3du3c3MzNjhhVi8cZ/D9hLly5t3rw5s3rk5eXlO3bsuHfv3vT0dApvlJOTk5ubm5+fL7omatasWTilQKcXFcXpm4Et2QZ6oqioaGNjs3jx4oyMjPz8/FxxyhGnjx8/3rt3b/To0VKBzeFwrKysQkNDCwsL0Xi8m5ubi6/FxcVS929evXrl7e1NDfhshmr/Es8zCMPbt2+PHDkSV8zgkGmHDh0QHIdpD4Of/MuXL8eNG2dkZATZjvZg/TJ+/Pi4uDjJzVgWAL7ta2lp6aVLl3r06AHDONzXXV1dz5w5g7V9VVXV06dPBwwYANhLnezQWgRamDhxYnJycnZ2dl5eHnMsPn78KBJ6zs7OLDVQQZxEQUgXLVqEgLmsjhQVFR09erRx48Y0BFIHS/K/MoANpRqBlsBm9JmdnZ2QkGBvb6+ioiK1IhkPlZWV/3vAXrZsmbm5Oas1ECC4MIAVfpiWYYgrztRw/j5gKykp2dvbi5x+afuHmlFXV4fTXTRylJGTk+NwOHZ2dqtWrYJJmfkWPWExCr6+evXKx8eHRRYZX6nSLwR2YWGhSJfr1q0bzq7gCNcvv/yCbVWmw3BdXV15efnBgwe7du2qrq6OoUFLcBjLycnp6NGjeXl5rCWf1H597UOBQPDy5cvp06erqanhCLGCgoKDg8PatWszMzMx6aSnp8+cORNLM+a8wyIXQiP5+/tjocEcC0xkOLbJXA9TmBQZwC4uLj527JiRkRENAatefGXSDU9kABvugMwWUh73Yzs6OhKwZdfLbMw/DGxQU05ODhcGNBRYG3d3EdX+uirOJAErr6SkJPLfCAsLk7pup2ObFMmIXsd57FWrVn0tQ/+twK6trRVFVg8NDbWwsABacBlNREQEk+nRZqFQWFhYOGfOHDMzM5wGJ9aHS3nTpk3nzJnz/PlzgUDwtd387O/r6ury8/P37dtnZmaGPW1cCj9p0qRnz57V19djK37nzp0WFhYKCgqSHvs0FnJychRoQWq9Dx8+7NWrFxBIZ2PR5aZNmy5evFiqxP4rwHZ3d5e6xpbaPDysra3NzMx0cHCgCyf/fwNsHGOWl5enm0Ck9hP2Ulrs/bPAnjBhAlBNd4+AnxoKZii1R8yHfx+woYffuXNnxIgRdPmZsrJyx44d7969K8m7QqEwLy/v559/1tfXhybMAjaXy+3du/fJkydLS0tlG/OZHfzyPJ/Pv3XrlqurK0ICyMvLq6qqita0MTExkLQCgeDGjRvt27fH0WIZ2viXAJuMW0D43wFslKyurt6Q8UwGcXC0tlWrVqRq/f8G2KS0yAY2SWzq2N+qikNiS1UfEMyQGILmGnn5PwIb2tjYrFy5UsZQSf3X3wrs0tLSAwcOdO3aFYorYr/4+vpKDfcrFAqzs7MRdwELThAcy3J8WlhYbNq0CedPpXbnrzwUCAQpKSlz5szh8XgENicnp7awQXMAACAASURBVMOHD8OaJRQKk5OTRfHSNDQ0ZKjiXyKxe/bsyZTwUB6VlJT+usRmFYtDIJ4NuJTKIBcT2IQUsByzCqn5f14VB+vIvh8ba2xir/+OxG4I2OPHj2eSkgDw7wR2QUFBWFiYjY0NLnBUVFTU09ObOXMmTu2xuAqRkoYNG6anp0eQBkvhU0FBoWXLltu3by8oKPg7JHZdXR2OlBoYGNCd9TB5oMa6urqsrKwRI0bo6emRJZU5HJQ3NDScMmVKZmYmq4/4ClUcP4baj+39fy2wqV9AAX1tKPMPAxvNkpeX79at26lTpyQ3A0S33ov8ExYsWIDdY5LYgBPFFZd6bpGObbI6T4WwnuOrkpJSq1at1qxZI7UxCQkJkyZNohehOKAxHA5HtsQmowiL1T4rsZmzNVWNbXNzc3PR2WYZe8s5OTmzZs2CJzbCd4jih+7cubOkpEQSmUKhsKCgYPr06c2aNaOIaxCMaIOGhkb//v0vXrwo1QDB6te3fa2srLx586aVlRUu6FZWVm7WrNnMmTMzMjJgZxLtMkycOPGzFqxGjRpNmzYtKytLajMePXrUp08fEJOmZoymyL6wZMkSqdtduB/bxMSEZU5nDopkno5tftsau3Xr1rSnxZRtskX3vwLYSkpKnTp1ioiIiI+PT0lJSRan1+KUkpISGxsbEhJiaWmpp6enr6+vK07ImJiYDB069Ny5c18CbMIzxk9JSQl3caFA+tTX12/fvr3owte4uLiUlJTXr1+jPcnJyampqVeuXBk9ejSxAlmYYDSWesUPMdZXAZuqQASCJk2aoMt6n5K++L6lH3/88dq1a7gvgSpiZtLS0vz9/bF3paSkpKam5uzsnJycLHXjDVbxffv2tW3bFpc/4rJbmKlUVFS6d+++a9cuyZtimTX+xTxuGuzfvz+80OTl5bW0tH7++WeRaxqAXVRUtHbt2i5duhgYGJC5WBJORkZG48aNu3379ps3b8BL+ExOTk5JSTl9+rSzszNdqIjXoY2bmZlhh59YMTk5+fXr1ykpKXFxceHh4SJdXbayINkYGVZx2EFSU1OJzSiTlJR09+7dTp064bI3jDjyurq6JiYmzNuIib1R+z8MbOABxk9Eq+7fv38/RhKdMsclVT///PO0adNmzJgREBDg7+8fGBg4ZcoUf39/TAdSjbSSEhtiB67Ipqamffv2nTx58tQ/p8mTJw8ZMqRHjx6urq6sxnh5ebm4uLRo0QI2P8IeaCr14vsv4XKpEhtWX3l5eUSoCggImDp16pQpU6aJk7+/f0BAwOTJkxcsWJCUlITwGlLrevfu3aRJk7A/RKJD0myGd7GlFBsb6+XlpaurC9dOEt3m5ubLli2TXZ3UNnzVw5qaGtEVSPCpgmCE/ezFixcANtxd169fP2rUqJYtW7IYmiDK4/FatGjh4eHh4+PDYKg/st7e3i4uLhC88JmH9MOugbq6esuWLV1dXVlv9evXz8PDo3Pnzurq6hgdSQBT7axW8Xg8V1dXqQ4q1dXVb9++Fe05S1bXv39/X19fW1tbb2/vyZMnB4iTv78/eCAwMLBLly7a2trgQ5YS8Q8DG3Mk5j9FcSLsQUrgwt6hQ4ceOXIkLi7u5cuXz549i4+Pf/78+dOnTyFUi4uLpW6rSgKbNjbU1NQ6d+68fv16ERM/e/bsKSM9ePAgLCysZcuWUmdlrFQRoJcI+jcBG0Olrq4+ePDge/fuoY3PPqX4+PgnT57Ex8fLvnYvNTV1woQJhoaGIKympqaXlxfrcC8BDzpFXl5eaGhoy5YtcQ04IiIrKir++OOPR48eLSgogIFaUpOncv5KpqamJi0tbcqUKQYGBhgCFRUVT09P7HjBI6CoqCg1NfXIkSMeHh4shga0yB8eu3ToO9ALH0HMWXCYJTTSHhshlsmNUIMRWBJmavoZK0PV0XMZElsgEMTHx+vr69OPKaOgoKCpqdmuXbvff/89NjY2Pj7+0+D/8ffJkyci1zp4y0guvP9hYIPWhDe0j8CjoqKCWJaBgYFJSUkUy5p0WtkcxgQ2sEdYRQQV3ARCpSFTVlZ28ODBtm3b0tqS3kJr0Tw8BAOBtxq6RvezXM6S2GALzBpycnIaGhrTpk0rLi6W9GRAEG8QQWotdXV1ycnJfn5+iLwDtdbHx6chYKOQ6urq06dPI94gTm6Dm+3t7aOiohCKGLSSWulffFhTU5Oenh4QENCoUSNM7hwOx83NjRkMBPB+9OjRiBEjpAKb/FsImfgZGIzGjumnTICnLTQ8gVIJVoQcQvR1lkwmNCLD+q9sYCPQAusVMJuKikr//v0RGonFqAKBYOnSpfBORzeZE8o/D2yaRwnkhCgc0FVWVg4MDExJSQGwv5xvWMAG4fCppqaG012SLI5jm23btsXwM0lGIpoyADbK/F7ABjdTvRoaGqKlB4D95X3HL+vq6pKSkn755RcIBAB74MCBkr1mllxXV/fmzZuwsLB27dqBoRFLVFdXd9SoUTdu3CgtLWX+/vvm4W4VFBTUuHFjKHHKysp9+/ZlnWeoq6uTcdsmSQiac4mpoEXTlEGORhhTwgahmsCMEqACUIx3Fp4b+srj8RpyUKEIKlKBzeVyBw0a9Pz5c9a5dDiiLlu2DKfr0WzmAuEfBjbRkUURgAohtZWUlPz9/V+/fl0jTl/ORlKBTSX369fv6tWrLHrV19ezgI2GETcQ6rDyxPB/X2CTrAZ3fl9ga2pq+vr6ygZ2fX19eXn5jRs3Jk6c2LRpUyUlJS6Xq6GhoaCg0Lx58+XLlzdke/vyoZHxSwA7ODgYwIbAdHFxkQT2o0ePcKUxi3lIQmCsCbrkeEdjB9jjZ/RjKg1jTco8iqUJQhKH9CIzAw6X4aDCBDZ+zPzkcrleXl7Pnj1jMSoB29jYmKakfyOwiUzoFcgH9yMOhxMcHJyamvoNwB4+fDizZBpjRCltKJjhoUOH2rRpQ6oE7QAz4Y1VFp6giu9lPKNxVVBQUFJS+ivArq+vT0lJGT9+vIGBARqpoaExYMCAzwIbG9rHjh3z9fWF6VVdXR03lvfu3Xv79u1v3rxhhRyXgdWv+heADVWcCCsyZbGAjds2ZQCbOe6Q/EriRMgEecl4BjRiMsW7mLXp9gzwA93ByESvjDxGE9c2y455RpXiFVQHw6HUmGfV1dXLli0zNjZmGqeoJf+8xGatkWj6IWGopqYWHBycnJz8tTFxoaoRTpgjDWBfuXKFNRFCYjOBTdBlandoJDWVpnbZ210N8bfkGhslY0LR0NCYOnXqt6ni9fX1TOMZVuxfAmyYxz98+LBly5YOHTrAeRaxinV0dHr27Llt27a/6fwmgD1t2jSajDgcjsiU/fz5cxYBZajiTNkFBgCMgWqCNGQ4RhYSmwlsmtmZP6B5gSAkO0PA7tevn2xgoxxiV3yVAWyssY2NjWnCIusAjvT+k6e7sIAhuyvmHtCO7FLa2trTp09/9eoVS87Q3d+41pw16vX19bGxsSNHjsSVHYAKjQEuDJB6xQ+fz2cCmwj9WWArKipaWVktXbpUsiWwe9WKU2VlJa6woZ9JApsqxabA5MmTWcCG9YiuwqGiJDPp6en+/v6NGzcGr2toaPTr16+goOCzYUkQ4PbFixehoaFNmzaFPwzIiMj+GzduTE1NlawRna2uri4oKIgXJwQql/pLyYfV1dWpqakjR46kgBZcLtfb2/vly5esH+O2TamKNC2Mca0nhARp4Cz0EoCJPSQzGBHJ5w09oRHED7DGlrrdRaq41KK4XO6IESNevHjBkkBMVZw4k1zo4Jo5ZMiQJ0+esIiG0cHV9og0/rW7G1ICLUge2wTFEXdWVZzo2iqEvOZwOI0aNfr1119fvnwJYJNtEMAuKSn5+PFjcXFxSUlJcXFxkTgVi9OtW7dGjRpFh5CZY4Mrfs6fP8+iF0nsH3/8kW6f+ZKMioqKurq6nZ3dggUL0BK0gT5LSkpKS0sRHvCzwGaOsYaGhlRgU7j8wsLCoqIiqqi0tLSiooIwn52dHRQUZGRkBGCrqal16dLl4cOHUj2r6v+c6urqEP17/PjxhoaGQDXkg56eXs+ePdesWYNLKmCZF4oTeC41NXXTpk3Dhw8fNWrU2rVrL168mJSUVFRU9Fm1q6qqKjY21tXVVUNDA0Omo6MzevTolJQUmh/Ly8tLS0tv3749bNgw2KgRShmbWOBvNTU1Ho/H4XBwK/XXqtDMIfiGPGhFSqKMfWwZwMYZ+JEjR969ezcvL4/YG0wucgoODQ01MzOj+8AIO1wuV09Pb+jQobdv3ybGwOv4WlhYiDsDPjscf+aIP759KbBx65W+vr6Dg4OTk5Ozs7OTOK5F165dnZ2du3bt6unpuWXLFlGYEQgZAjYY6P79+xEREWFhYatWrVrJSKtWrQoJCfnpp5/gnMSaQWUAu6Ki4sqVK+PGjUNjnBnJqeHUrVu3zp07d+zY0c3NbfXq1WHihOagbZs2bTp58iRdssGcJiUlNpOTpAKbWLygoOD3339fvXo11RUREXHp0qWcnJzq6moslefMmSM6Y4x5ncPhWFpaRkVFSXUplRxFBAM6f/784MGDjYyMSLdSUlLS19f/6aefpk+ffv369ffv39NsUlVV9eHDh/379/fs2VNfX79Ro0aOjo6+vr4LFy48efLkq1evCgoKJOdT9EgoFJaWlp49e7Z169aqqqqYjMzNzefNmwfn0Lq6uo8fP548eXLTpk1BQUFdu3a1trbu2bMnWKWbODgPWKhr1652dnZcLhd7dQA2k7B/a54pReTk5L4N2HJycioqKh06dAgMDFy2bBmDu//Irl69un///u3bt+/cuTO67Ozs3K1bt06dOjk5ObVv375r165BQUFgxbCwMHp91apV27dvT01NbUjVlWQD5pMvBTaEto2NTVBQ0J49ew4dOnRQnPbv33/o0KH9+/cfPXo0Li6upKRE0gulurp6z549vXr1sv6UrD4lGxsbS0tLnCWg5RONpQxgw/PpwoULBw8ePCSR0DbJzwMHDoSHh48ePdrIyMjGxgbNQVsQyOrHH3/09/eXjHlWX1//bcDGnfVv374dMmSIvb09amzRokWHDh1CQkJwdwTOV69du9bOzg505nA42tra/v7+uPuOOWCsPE2gNTU1ubm5J06cGDZsWJMmTYATaDHq6uqWlpbDhg1bvXr17du3s7OzKysr09LSDh48OGzYMGNjYwQwU1VV1dPTa9Wqlcg3Zu7cuceOHUtLS0P5zEqhg+Tm5m7dutXIyIiuH2rfvn1UVBT22BA5b9KkSW3btjU3N8etoEePHgWrHDhwAKN28ODBqKgoPz8/fX19WEC+dm1MrPJtme8FbCUlJR0dnWbNmn3i6//319ra2s7OrmXLllOmTImKigJqDh06dODAgT179uzfv3/OnDm2trbm5uYIpWZtbU0lWFtbu7m53bx5U4YHBHNcWPkvAjaoJi8v36lTp/379+fl5fE/pbKyMj6fX1ZWVlpairu8WRWAs8PDw62trZmrJoVPCaYR1qlp1CgD2LAb0X2rn5rzmb9lZWWvX79esmSJqqoqIERrPzCWjJtAvhnYcKv+6aefcMgRNWpoaLi4uCAAKyIlHj9+vEePHlBTscDx8PB4/fq1VHdxIjIBG+dwPn78iHv8TE1NIQaxL6CsrKylpeXg4DB69OjNmzefPn16586dP//8c5MmTbhcrpo4QVoiIqKZmZm3t/exY8fKy8slGUsgEOAGIlz6o6Kioqqq2qtXr1OnTuHCeqFQmJiY2KdPHx6Pp6Sk5OjoGBERgbEBw9A4vXv3bv369ZLbvKQefxtiv/wtZkVf4qAitWRFcUJR4Gv6maKioqWl5Y4dO3D/LhGhtLS0rKzs7Nmztra24D1SV6EBycvL29vbX7x4kak20rh/NvMVwEYElejoaDopSVwlu+7a2loAG3ZOdIAcA1mEIIrIycmpqam5u7tLNZ59tmMN/SA9PX3FihVQIEllxQoQ8+6gQYOk3t31DcAGfQBsXLKLqQ3rGkdHxwMHDmCZLRAIYmNjRQtdTU1NRUVFTHZt27a9cuXKF2rj6K9QKMzKyjpw4MCIESNw9Aql4ZSIgoICj8eztLTs0qVL586dzc3NMcHhmDqsVsSjJiYmM2fOzMvLY9kaEMz8+vXrHh4e2GTCXDBw4MDbt28LhcLq6mqBQBATE0OeMw4ODhEREVK5JTc3Nzw8nHl3F7E1kxP+7jx48puNZ7RnBHMgSSkMt0g3PHDgwMePH4knofXU1dVdvXq1ZcuWsAvSLgC4EQGnLl26RG99VeaLgE1zCSvQgtShourpv7W1tZs3b7aysiLDJniIFlQoX3Lw/j5gc7lcjAE8K3CoWFFRUVtb28fHRzKu+Lep4ixgA0VgXCUlJXNz8zVr1vD5fFizRAHDYNkmfwxTU9N169ZJXRcQkVkZcEx+fv7ly5f9/f1bt26tra0NRoELB5Rz2G/Af0A+hgDe9VDjETBccm1VW1ubnp4eERFhaWmJcZSXlzc1NQ0JCXn58iUaUFxcvG3bNjMzM6gntra2mzZtIn5gioGcnJzNmzfjdCftcjGlqCRX/E1PcPbG3d39a63iYCRqM4GFMpaWlvv27WMCm0YNwAZLgFaQ3tgksrOzu3jxIv34qzJfAWxFRUUEMySJLbsmGsiamhpIbAI23PrJ44+IwhozAPvixYtSrTiya2/ov+np6cuXLyeMKSsrw9rP4XBw9JKu0UX7qZy/IrGTkpK6dOnC5XJpM1NJSalx48YBAQGZmZnYR+Dz+Vu3bm3Tpg0d61VVVR0zZgzijTLBQE1qKINznQ8fPly2bJmzszMdLVJRUeHxeHAoAgNBd4BFGowI9pKTkxMFGF66dKmkHo4gpBMnToSqj5CGnTp12rlzJ0KL19TUZGZmzpw509DQEAdU7O3tIyMjiR+YzaYLA2gHG/BmccJ/5ys8z74W2My2QUSTag1iitbPLIlNFACwybeKDjiAP21tbS9cuEA//qqMFGAvX77c3NwcTUSjaTr/ZmBv2LABkU+xsuVyucRAhHYmgUAaNTU1Dw+P7w7sFWJVHAcnIKvRGAUFBW1t7e8IbKFQWFtbS6o4cwbhcDhaWlr9xO4QOM1aWVl5/vz5gQMH6urqkjrapUuXEydOfG0gFEBIIBC8fft27969Pj4+WMQShdF36Ofk50fshTGytbXdsWMHa3arr68vLCw8efKkk5MT4qiqqalpaGgMGTIkJiYGXm5VVVVxcXH9+/fX0ND4cmCDDdAGyYmedF3qgtSM5ItSf8Z6SNaWb1bFWQXiK1Ni79+/X6rEvnbtGtbYrINoKioq8vLy3xnYq1evtra2JkUfVQJpXbt2PXny5NdK7NraWhawaanJnNswVUM/h/+5pqamj4/PjRs3INO+asaijRmWzMnIyAgLC+NyucrKykzzEiSGrq7ukCFDcMUEa20pKbE/mf/+CMSpoaExZcoUpoMKlFKBOL169eqnn35SU1NDf3HUnMvltmjRIjo6Gic6Eexyw4YNNjY2uIZaTk5OW1t74sSJDx48kBoohkUQlkiE70p+fn5sbGx4eHi3bt2sra0pLgK0aMwgWFdDm4AMt7KyCgwMFPm9sIAtFApfvXo1e/bsJk2aYGmtpKRkbW3922+/vX79Gj8uKSk5fPgwwvFi3rSzswsPD6fmMbUPktiELmIJggfF0sT8S4BhZagveE6TNQ0TWXOI/VApnHC5XK6mpubAgQPj4+MlQ7LL2MfGzIg5BVUzWy4vL29padkQsEkVp0UN3sVE1rJly+8psVetWmVlZUVCg3YgFBUVnZycvhzYxHYsYIMEABKOJTGFNqrDglBbW9vb2/vy5cuSW2hUuIwMHL9YwGYaz0BN6qCCggKAjTU2i6dZwAZ9iNW0tLQCAwNZwEYDqqurX79+3aNHDxz9J21NSUlJV1c3ICAAHt1CobCysvLy5cve3t4wocEzqXPnzlFRUR8+fICXAhMVrL4TcvAcHRcKheXl5W/fvj179qzoWq9Ro0b9+OOPpqam6urq6DizI6BAhw4dpk+ffvXqVT6fTy40qLekpOTo0aO4lw/mCSyXcAIclvmMjIy5c+eampqS3a5Dhw579uyh5jG7kJubGxERwTzViFkGhCXMwA2TheSGvhI7kRmFaM4SjCgfNWIh5uPj8+LFC0lgYxAbuh8blAQmmZ9oQMuWLRsC9o0bNxwcHNAAzGg0KcjJydnY2Jw/f541yl/4VYoqvnXr1i5dupiYmJiamhobG+OzcePGJiYmXbt2nT9//qFDh6Il0pkzZ+Lj4yVtLRhspsQm4xD0LrgTNmrUyNTU1MTEpFmzZk2aNEHewsKiR48es2fPPnHihESFDT44ceLEuXPnHj9+nJ+fD+ZmclJWVlZ4eLiFhQU6aPLnhC3HDx8+SPpysoBNsz66w+PxBgwYcPz48TNnzpw8eRKNOylOx48fj4yMFF3B1bx5c6rNVJyaNWvm6ur6+PFjXHsgFApTU1NXrFiBrUEwbqNGjcaOHXvlyhXEEiakfXaAsRCAh2x1dXVpaemHDx9iYmKioqJmz549cODA9u3bm5mZ6erqampq6ujomJqatmnTZsSIERs3brx//z5CNVB1WLffvXt3woQJWlpa4EKcJJs3bx7FMOfz+bdv33ZxceHxeOBXVVXVH374Yfbs2WfOnDklTiBLdHT06dOnDxw4MG3aNENDQ6CRpCtmf2VlZQMDgyZNmhiLE7iCaMjM4F9GRkbgWJw5I2CjWMKPurq6kZERGLupOIEZLCwsunfvvmbNmmPHjtEgYiiPHz8eHh6upaXFxC3lFRQUuFyugYEBhpUaZmRkZGZmZmdnFxISsn///tOnT1Oxp06dOnfu3MqVK2GDpI7/jcCOiYlZsmRJUFBQSEhIYGBgcHBwYGDgNHEaOXKkq6trN4bnkNOnhPvTpG4UsSQ2CQowrqamZvv27ceMGTN9+vTg4OBff/0VmeDg4EmTJrm6utrb26PGbl+c3N3d58+f/+zZM5a4rq+vLyoqEsmi6dOno4NBQUHBwcFBn9Ls2bN///138DQLOVKBDV6BN3+zZs16iJOz2C3P6ZN/nrOzc58+fYYOHTpt2rTgP6eAgIA5c+a8evWKRERRUdGpU6d69epFeoSiomLnzp137dolCpkC9Z6lSjDbyZSKCPCA4/F4LhQK+Xx+dnb2y5cvL1y4EB4ePnv27HHjxg0bNmzkyJEhISEbN268fPny27dv6bIXmhlxcffChQttbGwoNI2qqqq7u3t0dHRBQQGuCsjIyFi3bh3uEoA6Bu83R0fHXr16OX9K4Jru3bt369bN1tYWmxRQjJly2NDQ0NPTMzAwMCAgAOP1Z/r951tISEhQUFBgYGBQUFBAQICvry98XWkCIt2Kx+N16tTJz88P4z59+vQZM2YgP2nSpF69erVv357Fb05iJ8u2bds2dM8sjgwOHTo0MDAwJCQEzQoMDPT39w8KCurVq5co6F3Xrl27d+/O5I2ePXu2bdsW2xbUvL8R2Lm5uYmJiS9evHj58mVCQgI+4+Pjnz59GhUV1a1bN6zsifMwuXK5XH9/f/IVZ3IbC9i0GkEfmjRpMmHChAsXLlB1iYmJL8UpJiZm4sSJZCWmCfKzGW1tbS8vr1u3bkkCWyAQ5OTkPHv2DF1DRfhMSEhITExMS0uTetSRBWyaYmlIwJE0MKRMKioqWlhYbN68+eHDh8zqXr58+fz584SEhJKSElIQysvLb968OWTIELpWQk5O7scff9yxYwdszoQ0JoUpDwDDCRG7aPgknYWF8OTk5MePH9+9e/fevXsJCQmZmZlQv6lAZOrq6tLS0iIjIzH6ALaSklLz5s0XL16cmJgIipWVld26dcvX11ddXV1VnJjaGZ1qItIRJ0D9YX7iN7a2tmvXrn369CkIxaIe8yt4JkGcHj58uHHjRpyoYU4TUAoaNWoUFBR0/fp1KhPv4ipVHFtAwz7LZjTWiAhy9OjRZ8+egY0TEhJevHgRHx8fFxfn7+/PDJmKblLhWNEQcajM76+KE0MQEyBTX19//fp1d3d37JeQTRUIV1VVDQwMxLFNFlswgU3txpDLyclZWFgsWLDg7du3qIVZKcJ64ZfMEZKdh83J29v77t27rJaQRY2pYTLrJQBIvsgCNkQBBglym5gYkocW8JjOY2JipAZpRZOoXj6fHxMTM2jQIAAbRbm7u589e7ah15lNRV9qxInVR/wMy35UR6SG0k5tYBaIfElJSXR0NMIwYcJSVFTU0tLy9fW9dOlSUVGRUCgUCASpqalr1661sLCAwZymfuYyHuoxbCgoiv7L/D0I27Zt2+PHj+MgBHOYJFtI/aqrq0P4YVNTU+IxwpK8vLyJicnq1auzsrLIZkF0wFEcugVBks0IjcwMDoGMHTsW6xFqJ0ZWIBAsW7asSZMmNIsRtxBjEy/RhILMd15jg2oEb2b/r1y50rdvXzhscTgcVA9/BjU1tenTp6ekpICfmKRnAZt2LPF6s2bNZs+e/ebNG1AE0gYH1kQyKjQ0lEnEL8xra2sPGDDgzp07zGYw82RXwxIUnZVsOfMVFrAx6gj2xuPx4PIBcxesuHgCw7ulpaXs+7GpouLi4ujo6G7dukFkycnJaWpqTpkyBZfUgkT0Y1aGWAp7bOiOJGipECj2cFlloprKAZUqKiquXbs2YsQIY2NjClTC5XLbtm27e/fu3NxcDFlhYeHZs2e9vb1xuTdNTCSfaSsLT0BAyCtsUmDXgOAkJyf3ww8/HDt2TCAQlJeXY7aSVMFABKw70GW6u4v0cGAJ/CY6mLB06VK4D6CDdLI4Nzc3KChI6iXnMhhPXl5eTU1t1KhR8fHx0FzATgTspUuXUgQVaomSOFGx2Cgh297fCGzQizXGly9fBrBBMmxNYbBVVFSmT5/+5s0byZhnaO+oiwAAIABJREFUTGBj2NAfAvasWbNSUlJQF6mauPyNgE3j/dmMnJyclpaWl5fX7du3Wawv+ZXZQeQlf4MnTGAzBTX0UhowUEZVVRWR9HFQ0cLCAsCWXUV9fX12dvaWLVssLS3l5eWx5BFZjBctWoRTPjgK1lALAVQwN1VEGalvgbNZ/8Ir+Befz7958+aAAQMQHhycp6qqam5u7u/vn5ycLBAIqqurq6qqRCexFyxYYGZmhmDMEL/oPskopkxmCmoUCx0HHA9p1rp16xMnTtTU1AgEAmIMVmvxldoMiY3bNmmVxLSTGxoa/vbbbwj2SBocOpuTkxMYGMiKncjkWMIhK6OmpjZu3DiyIBLNseMIYBMRSFATJxMpgAi09vur4kzCMelVW1t76dIlAJsODKBN4OZff/0V/o/M6Z9lFSdBRK23sLCYO3cu7YLS+P37gQ0WhF83tnZoe0ZVVRViHC6c5ubmV65cgfcoizhMatfX1+OGWoQrBZFdXV3PnTtXWloKOSDjdXAnk4AsPZ9VF7E16zkGvbq6Oi8v7/z580OGDDEwMKCVhYqKipWVVVBQUFxcHA6B1tbW5uXl/f77705OTjCIEICZ3AzhjDmRyTYkyUFJklpycnIANpzPqV+s1uIrk1FJYoOATLQoKiqKtOJFixYRsImqdXV1OTk5ohOU3wBsVVVVb29vRCll0pwJbHACyMicaIgghHOsv+Tk5Fq0aPE9t7skCUdUg8TmcDg0MCoqKnAqlJeXnzVrVlZWliTnkcSGvgFCk23JzMxs1qxZSUlJVAuVgEPqJN6ZPZeRl7HGRhWSHfySJ5DYqJfVJFADrtd0XhLWI1LFr1+/zufzJfvIrFooFN69e1d0vlJdXZ3miBEjRjx+/JgWRKzfE62YJdND5o8l85Dw0B5Zr5SXlycmJm7dutXT09PQ0BDnOtFBU1PT8ePH37p1iw5+IRTpxIkTMR+xpBmTVhBWEAO02AaemT8jIv/www9Hjx5lAluyF5JPCNhkBiJiKioqmpiYzJs378OHD/BTJpYAsIODgxtaY0vtFx6qqKh4eHhIDWYoEAiWLFlibGzMFSd47LCAzWJmrFW/RGJT4yWJ8J99bFLkMDVK/rS+vv7KlSuurq4ANuYe8DSaMnPmzPT0dBaL4Njmxo0braysMDmhG7Ras7CwmDdvHiQ2q1KssZlLVixcZX8qKSk1tMbGakpGB1kNYH5NSkoaOHAgjS4tHTG/gk0ht4kyBHhra2sAm6ZzDAlWp0SxysrK6OhoJycncKS8vLyuru68efOwTsG7NTU1fD4/Ly8vNTX12bNnSUlJeXl5OCxZVVUl+4wnszvUEpYkFAgE+fn59+/fX7RoETZjlJSUoFFzOBx9fX0fH5+LFy8WFRUxuercuXMuLi4s0y5hFU5+OAoGzza4mkKeA+dM7JEK7ejoeOLECSxAmNWxOsL6CmAjfiAgBKUAGhau6SSJTe+SxEZEF0kek7E7o6Ki4u7u3hCwoYpjoseRBHl5eQhw1idpK8CI7EMgOLmMGZ96QZk/ARsWiKysrISEhKfiGzyePHkSFxdHn9u2bevdu7eOjg4i2vB4PC6Xi/WkoaGhn5/f6dOnY2Nj4+LiYmNjn3xKDx48mDNnjo2NDU+cNDQ04BGhqampoaHh4OCwePFi0bXvxN/UuPz8/KVLl2qJk/aXJS0tLU1NTRMTkyFDhty7d4/FDUKhsKKiIjMzE72L+5SePHkSKzPFxcWdPn3a3d2dgE2TFGmSXC5XR0dHXV2dx+PhhDM+NTU1W7VqFR4efufOHRDzE2GevHz5Mi8vD2gUCoU5OTkbNmywsrICCyoqKv7www979uzJzs4uLCx89+5dQkLC7du3Dx06tHz58ilTpowYMWLKlCmbNm26fft2VlYWn8+XOswsIhB5KYMfVFZW5ubmPnjwYNu2bePHj8ctc/Asxvnw5s2bDx48eN++fZKeP/AeJ+KwMjgNrq+vj9HR0dFBRlOceDwekEw7fPiqoKBgZ2e3bt068BLGB6SLi4tLSEjIysqSujFZUlJy6tSpFi1aaGlpgdnAO1paWtra2ra2titWrBC5x7H8lAHsWbNmGRoa4pcsjsPGOKtr+Cob2GFhYdbW1tRlZMDVrE9NTU11dXViG1tb28jIyGfPnhHbfGLYuGfPnuGAd0MW3/8AG8NcW1t7/vz5WbNmjRWnMWPGjB07dvTo0WPHjh0zZowo8Jqnp6erq2vfvn379OnjIk69e/d2cXHxFCdfX1/8ePSnNGbMmJEjR7q5uTk7O7u4uLi5uXl6evbv33/AgAH9xNcs+fn57du3T3RoURLYxcXF+/fvR8lf+Onh4eHu7i7aLlq6dClOETKLRcieM2fOTJgwgTo4ZsyYT41t8O+YMWMGDRpkbW2NgZRnJKwvlJSULCwsvLy8+vbt27t3byJO3759cb+Ut7f3yJEjQUZU4+fn99tvvz1+/Bhr75qamvj4+ICAABwCgU3O2dl57969d+/ePXLkyNKlS0X2qqFDh/bo0aNFixbASaNGjdq2bTtu3LioqKh79+5lZGSUlZWRqQljKgPYmPX5fH5GRsbdu3d37tw5derUrl27mpiY4KAOiRQLC4sxY8YcPXo0IyOD7O1E21OnTuH2PKl8r6Wl1aZNG29vbwx9//79aTRdXV0dHR1xmEnSkG5gYNCnT59x48axBmbs2LEzZsw4fvx4YWEhtQGdRTy8e/fujR49uv+nJAr67eXlhW/jxo07ePBgfn4++Q4QlQoLC7dv3+7j4+MhTtRIT09PDw8PsiBI9lEGsGtqag4dOjR69Gh3cQIFwPmohfnp7u7u5ubmKk49evRo1apVv379xo0bRywKPI4dO3by5MmHDh3KzMxsyNuaDWyhULh+/XoHBweSORDL4gUCt3Xr1qJgLkeOHDl16tTJkyfxGS1Ox44dGzJkiJ6eHoQ591NcDi6Xy+PxOnToMH/+fHhcnjt37sKFCxcvXjx//vzZs2djYmJev34t9cLXqqqqV69ewfnu3Bens2fPXrhwITY2trCwkAabMhkZGWvWrNHV1SWlg9lBdJP1qaamBsUExhiSJwqfEq4E7dev30lxOiF2gEX+1KlTJ06c2LJli6Ojo5aWFkoGbRs1ajRo0KCHDx/CzauysvLMmTOIXgB1QFlZ2c7ObvTo0X5+fr1797aystLX18cRMSixFJbIwMCgQ4cOY8aM2bx586VLl+Li4t68eZOXl1daWgr9HNuH2NurqamprKwsLS39+PFjenr6y5cvr127Fh4e/ssvv3Tu3NnExAQncKAt41hrixYtRHGORBNidnY2Wd2ZKxoZwFZQULC2tg4JCcGIXxCn8+J07ty5gwcPTp06FddoQycnexuIAEZijggGrkWLFgsWLMjOzpbk7Orq6szMzIsXL547dw4VEb+dO3fu+vXrqampktF+6urqKisrX7x4Iclo58+fP3PmTGRkpLa2tiSqEfNMUhXHfCoUCkWHdq9evXpGnKhJkrWcO3fu7NmzZ86cOS1OW7du7dq1KxgVHKimpkb6oKGh4ezZs5OTkyXnNbA6G9j19fU43QWTBlZEZO7q3r37mTNnGjpptGjRIgSvwjFxjBAC4np7e1+/fp01RxLYGsogEKLUOzobegXPJTdv6fd0uguSFhIJRh2pYwb2AgVomxorN+AaP9DS0mJe8QMDNYa2uro6OTm5W7duXC6Xlnyw4sydO7ewsBCsWVRUtHHjxlatWsH6gMYoKipi2wxMD1sGQQ6WObJFqaio2NnZeXl5TZ06denSpXv37r18+fKjR48SEhKSkpJwy+zr168TEhIePnx48eLF/fv3r1+/ftasWQMHDhRdNq6hoQFrNiiDdbWhoeFPP/00e/bsmzdvUlOJmJSRoYorKiqKnNJ3795NP2ZmEGjB2NhY/lOi7hDXgcIgCEzrysrKZmZm8+fPlxoTDmpIVVUVc+pBpRgRZgOYeRixJd+qr6+vrq5OSkpq6BCIVImNuhBShowpDeGQ2QzkU1NTBw8erK2tDSMODT2ss5qamtOnT09KSpJ8EU+kADssLMzKygorZ4wxZJSSkpKTk1NDF9+LuhEaGop2MI2fMIp4eXlduXKFPKIbas33eg6aSiViRkbGypUrIZRgJiGLRUPApudgNXAgE9uIK868MAAzC1iEzmMD2DRCLVq0iIyMRIBh+GwGBwdjuxjBmFEFqsMqF8CDoQ7rcLLP4V+Ya3g8nrGx8Q8//NC7d+/BgwePHTt24sSJU8VpypQpv/zyy+DBg3v27NmqVStjY2MtLS2Yu1EgbWvxeDwzM7NBgwbt27cPKhUmIKm0lQFsOTm5Vq1aRUZGSh1ciqDCpOcnjP/xF/1iaukghZmZWWhoKNxspZb8fR/KPrYp1SpOhAIfCsVJKk9KbWpKSsqgQYMwOpjrsTqDu66WllZISMirV6+kvlsvNfzwihUrLCwsKCYZk6Y49y9VbRa1eMGCBbq6urAMs8bG3d393LlzDYn6hhr3dzynY5tKSkrwjYWCTehlZcBbJEYwT2GmI6VRQUFBS0urobjiBGy6sVlRUVFdXb1Xr15Xr14F+Kuqqm7fvu3j44ODE0RzVEHGdoIxj8dr2rSpyAVdX18fP6a4ETT74C1mCZRndgf9JY9lDJyhoWG/fv0iIiIePHjAOrEnVRuSDWw7OztmzDPmsObk5GzcuBEB1THlSbYNmMcneQ00a9Zs8eLFXxUQjlnv1+ZlABsOOUOGDKF9bKmFfy2wk5OTBw4ciIN0pElRlCsNDY2vBjYkNgEbrqMQwt26dZMhsaGKczgcOqwDLlFWVu7Xr9/58+f/DcBOS0tbtmwZRcOmaYiFZ/oKYEOaETBADdLScT+mVGBDE3v16hWuYiewGRgYjBo1KiEhoa6urqqqqqioaNeuXZ06dcI+J3NpAMghNrCjo+OoUaNWrly5ffv2w4cPHzlyZPny5T4+PtbW1hoaGhC2TGATSGh6oifUQaoLU4OpqaloR3PZsmV37twpLi5m2eHq6+tplcFk388Ce8uWLSTBmC8ygc0U2uSsgrCt+GR2sFmzZkuWLMFxV2aBf1NeNrDV1dUnTpyYmJgoI4aX1O7LaC2AraOjA66jbX9smGlqan41sCGxIRzAEFDw5OTkunTpwoxSymrWwoUL9fT0MCRMia2srOzh4XH27NkvDL3CKvb7fmXGPAMyIX6J0VkZ/IYgzQQGva6oqAiPbmagBcIAlmddunSBSxMI27x587lz52ZkZGBdl5mZuXDhQisrKyAfMT00NTWNjY3btWvn6+sr8mFetWrV4cOHHz9+nJWVVVBQUFxcXFRU9Pbt22vXrm3YsMHPz8/Z2blJkyZYk5ObAEYQyw1WT7HOgpOcsbFxp06dRo8evXr16suXL7979w7+J0ziE2tK6pMyjGdycnL29vZbt26l15llUgQV8BhaSG1mopp6hCHAdjTsjswC/6a8bGDzeLzx48e/ePHiG+xBDTWYgM005RAfamhoBAcHf50qDolNxIVFDgGiscZuCJ+LFy82MDDgcDhMb0rIgX79+p07d66hFxvq29/xHGts6BRgERa7SwKbsA1MkpDH5IWHmpqadPE9NRusTKo4NpAUFBRUVVU7dOiwffv2srIy+AUlJCRMnDjRxMREU1PT3Ny8U6dOPj4+gYGBGzZsOHLkyM2bN1++fJmenv7x48fy8nI6tgHjYklJyYcPHx4+fBgdHR0WFjZt2jRRBDInJydra2s9PT2KEEzIwcEVbW1tY2Nje3t7T0/PSZMmrVix4ujRow8ePHj//n1xcTEOVFFHkEF3WA/xFQdXWKSjr1DFpb7IDD9MFgS4JDEt4cjTOkVJSUl0a8qiRYtAQKkl46GMNst4S/JfsoGtpqY2cuRIhJ2UfPfbniQlJfn6+mppaQGJCN6OKKCw6YSEhHyd8WzVqlUU3J+8jkDTrl27njhxQuoaW+QqEBoaCqdiaAuYbgFsd3f306dPS33x27oNPMDZEHHFvvDz3bt3YWFhiD1E8oFYUGqG5jgsAsm8RK8rKirq6ekFBgbm5+dLNqO8vPzVq1e9evVSV1eHmQqOcVeuXMHWUVVV1aNHj0JDQ0eOHOnv779mzZrDhw/HxMQ8f/48MzOzqKiooqKiurqado9ZJlaQorKysqio6P379/Hx8bdu3Tp27FhERMSSJUtmzZoVHBwcEBAwadKkyZMnT506NSAgYNasWUuXLt24ceOePXvOnz//5MmTd+/eFRQUlJSUVFRUYG+sRpwkuyP1yenTp11cXLAbwqKhsrJyx44dd+3aJfXFjIyM8PBwBLoEPTFRNqSK478cDsfCwmL+/PlZWVlVVVVSS4bx4r8AbEVFRQMDg3HjxsEeIbUx3/AwMTHR19cXgCKDK2leX20VFwqFkZGRPXr0sLCwsLS0tBbfOWJpadm8eXMLCwtfX9/z589LxWdFRcWaNWvatWtnYWFhbm6Od/F6y5Ytx44de+nSJakvfhuwEYPq6NGjW78mRUVFrV27dvjw4YQxkmNYmrKYEqs+AjaHw2ncuLG5uXmzZs3MxKlp06ZNmjRp1qyZnZ3d0KFDN2zYgOZEiRM1bfXq1Y6Ojgg/jHMI/v7+CQkJ6HtlZeWbN2+uiRPAzOfzgWTiTubx0urqaj6fT6KbCAgmxplNPp9fUFCQlZX14cOHd+/epaSkvHz5MjExMSkpKSUl5cOHD7m5ucXFxXw+n5BcW1tbWVmJy1U+fvyI3df9+/dv27aN1R3qIzI7duz49ddfGwowwuFwbG1tJ0+ejHK2bt3KLG3dunWTJ09u3759kyZNQEwzMzNzc3OLhhNYq127dkOHDg0LC9smTkTqqKioXbt2nT17Nj09HVMh0eevZGRIbEVFRV1d3e7du4eGhkZGRm7btg19pP5S274kQ8RZuXJlly5d7OzsbGxsmjdvbm5ubmVlZW1tLQqNaGVl5eDgsHTpUqn+mujmf7a7iC2uXbu2du3aBQsWLFy4cMmSJYsXL164cOH8+fMXLFiwdetWhHpjrbKgE167dm3FihULFiwIDQ1dtGjREnFavHjxkiVL9u3b9/LlS2zt/BX60rt8Pj86OtrFxQVRpr7ws1mzZs2bNzcyMsIiFjoFDGMygA3wKykp6en9f+x9d0BUR/f2Upa2S0c6giAIgiK2SBQ0sYNgwQIKJmrU2FtMj7ErlsTYxZLEaDTGrlFQQBQbiooduyAKiolSFJCyH+8+nyeTe+9edgFN+Tl/LHOHe2fmnDnPnJkzM2csw8LCPv3008+U4dNPP/1EGT799NOPPvqoT58+9erVq6sMzsrgpAzOzs7169c3NjaGtpFKpU2aNPnmm2/g6gi2qOLi4oKCAmCVXVVid4PQJpPi4uI//vgDA2a8TGzhRNCmsMdCA1MHwbYgmg/AzsnJSU1N/eWXX2bMmBEWFubr6+vi4gKiQI6joyPRBTTWr1+/bt26JiYmgjyE0djW1hbMQT8IDDs5OXl4eHTs2BEusT755JOPP/74008//eKLLyqP607lha+VAcnjxo1755134FTM2dkZGaKenp6e/fr1O3ToUHFxMUsmhzkaPYoAG/eoGBsbOzo61qtXD0770PXXrVtXTcnEa+Cni4uLk5OTm5ubu7v7Bx98MG3atC+//HLKlCnTp0+fMWPG1KlTgam9e/dif44gjX8BNlo9Nzc3Kyvr/v37OTk5Dx8+zFGGbGXArV2QMPCFRAfnYB88eID3Od8+fvwYR/xIBWnEVv7LhYWFmzZt8vPz4+tYkRToXmxKMTU1pcmC+DSbhn/169dfs2bNnTt3HijD/ZfhwYMH169fj46OpjtltV4G5IwtYogbGRl16NDh119/hcEZDCECwU9oXShPeg3IxGrTC2XgfEuZaBqBAQ8btrZv3z527Nh27dq5u7vDVzGmDyCIePuSvv/9xXwNq270AkVovAPyYbCg3DCITUtLu3///oMHD/DLShGJEyuH2dnZx48fHzx4MLv6SFUyNDRs3br1/v37a1GRiAObNdeDQHGJIubwI/CLiFMijRo12rJlS05ODtAHTGVnZ+fk5GRlZeXm5sL/RNXAxqF5EiCFcm2D/Qx7el68eEEb6EkQEWFfhnix6ThkghRNhY/zPoDdtGlTak41IzB96erqwmsHlpfIbMNnNOQSLVe3bt1NmzbRoh1LSF5e3ooVK0xMTNgcsFKFFPQOWlpaZmZm4eHhSUlJYCbp5LKyspKSkufPnz958uTevXs473Hs2LGsrCxW82BGrSmk2VbgcJIei4uLjx07FhERwfrihJMjrA6ypIHbmPtBUQuqa8xlYKTEHkRaXUMONjY2o0ePxuW7JG98KaJKEvnXrl0bMWKERCJBN43SdZTByMioXbt2iYmJLN8oh+pFRIANGsEcVnNAqFimsXESV/oQKXBKDWsFxzUS24hlZWW4xR0b7PhE/amx+f8jRgv+S81EtjZqfqLOa9UGNjpUQjKNw6mjJe4T6ylibW39ww8/kG2fJS0vL2/ZsmUcYFNWaHuovsqTJFOnTr158ybACYczJSUl2dnZ58+fj4uLi4mJGT16dPPmzY2NjYODgxMSEgoKCtThicg7govP/PevXbvWq1cvEjVSO5iMQD0S64gtVUZYPnDi1tbWLLCr3MUBQsrLy69duzZ8+HDS2DQcwMg/ICDgVQDb1tZWFbGoCf0XHKNejEM15IHYi0f6FlnxHS2w8sZvO07K/y1gg93EQXAW3TxH4VDDsNy3sbFZv349AZvdg5WXl7d06VIRYKNppVJpYGDgTz/99OTJk/z8/Fu3bsGCvWLFigkTJnTs2NHT09PBwcHCwgILcp07d36dwE5PTydgQ7ywLY96PbCOw0biJz+CN/liTSl8YMPmzxFTeoTGLisrI42N9W22u5HJZIGBgQcOHKhdjX3x4kV4PmVlA3EcRMegjO1iiEx+hHiFf7F50steXl6sB5XaBDYx9J8WgcZu1qwZyxH14+zCDMaT5CQACMdyC6eRbG1tN2zYQMBmGZ2Xl7dy5Up1gN28efNp06Zt37591apVH330UVhYWKNGjVxdXW1sbHDdNGb+6Oxxh7Y6/knFG4iqioiql9PT03v27MnqE0AaI0wCD63/q8lwTqdJgiuRSGxtbceOHZudnY0qUT1V1ZBeuHbt2siRI3Esh80fPkMDAgIAbE3nLKrKLSkpuXjxop2dHdQA/xf9IGZ2YBpJFEsvxUmZA+EYOZKmAUXe3t61cMUPsUy87VVRrk46xlHqvFnlO4WFhZs3b27WrBnNmcGaKn8hlAA2KSJWLROjsWZI70gkEhsbm59++omAzVYyPz8/JiaGnZ1SE1IEWdna2vr7+3fs2LFJkyZOTk4WFhZY9kfFQA7iWlpaHTt2rBWNTbMqcUEHsPkwJvUCpVQlk9kX0B0QEzgROzu7cePGEbBZlvLj7ISCNDaM0tQF41r1gICA+Ph4wQNe/GzVSSFgs6RRHB0c8Q2P4sCmzogvb5iySSSSKi/lE4Hqn0NxAjZsY+LrKOrwgt6hiZMgsOkgFL2vToSATcxVM0LaBgzFIzvJgeShkUhcoNUdHBxEgL169eo6deqINCdK1NPTM1YGstthdMDZ94LdV8HBwfHx8fn5+erwhN5h25viiKAtVMEbft3YIQP4gLpVA9WsuZgDaag4JyenCRMmCAKbIxgQHlqavn79OjQ2jkNThwhnwKzxTMQURxyrMgJg29vb88WM3yMTzvkkUwp6eRbenJG8rq5uo0aNYmNjBesvuGzJUsEFdllZ2dWrV/fv379169Zt27ZtVYZt1QrIYdu2bbt27Tp+/Di5aGeLVygUubm5J0+e3L59OxUHRwXbt2/fs2fP0aNHMzIy+L1MtYGNhmFPPqKDBFsJe1i8ofESXCnY2tpOmjRp69ate/bs2bFjB7iyY8eOPXv2bNmyZeLEiRYWFiJnxZA5DQGwJw+oJh9gNHbAgoe/v/+MGTN++eWX3bt379q1iwpV1SBg4+7du1NSUrKzs2nzKauxMzMzExMTkQPaFy21c+dO3PSCEQRoR50J6rT+z5dvVSkiGltHR8fGxqZ3794///zzjh074JSCJS0+Pp783gLY6JjKysrS09PHjRvHbrREBXByzsfHZ+rUqVu3bt29ezd4wmZLcZAPecNdYkePHs3NzaVFH5JVANvBwQGs4PzSfe80W6G2JiRzIugxib34kFpfR0dHJpNVXus1c+bMPco7z3bs2EG13bZt286dO9PS0p4+fSoIe4Fjm6WlpevXr+/evXsTZWisDL6+vk2aNPFVO+Dlxo0b4wt/f//x48cfOnRIcBBb6Y35s88+a968ua+vL4pr0qRJs2bN/Pz8AgICRo0atX//fv6hmefPn8fHxw8dOvRdTcI777zTpk0bLy8vnF0DnEgdQUna2dkFBgZ26tSpbdu2AQEBgcrQvn37Si9Frq6ulR5hW7Zs2apVq6ZNm4K6Zs2a+fv7t2rVqlGjRth4S90wpy1p7kozNDpnS3Vgv9XS0rK0tPTy8mrevPlbb73VokULFIqmQemcX3C+devWkydPPnbsGPyiknTieq3Y2NioqChkBYY3bty4SZMmLVq0qLzZk5SSljKABFQYDuq6du3avn17Nbnevn37li1b2tra8lmB6TFOfbdu3bpp06YtW7ZkxczPzy8iIiIuLo5sYDToePHixe3btxctWtS5c+du3bp16tSp3cvQXhmaNm3asGHDZs2avfXWW35+fhwu0SPJW1NlaNOmzYgRI86ePUsrmsQ6lBgWFob82d8OHTrAESA0BFqQum9BwmmEqKOjg+M37du3DwwMhLwFBAS0b9/+nXfecXd3b9q06dtvv42mb9SoUePGjUFO69atv/322zt37qgL7IqKClyjq6pCGqWDSAMDg6CgoB07dggagU6dOjVgwADSjWz+JibFdBMBAAAgAElEQVQmQUFB8FNJLEakrKwsNzf34sWLpzQJJ0+e3Lt3L3xHsyqaGsPMzCwoKGjbtm0pKSknT548ceLESWVISUnZvn17cHAwGo+tJBoJB2VxXkqQFvqEmlxbGYAZFs/0JuuwhU2sMm5oaBgWFhYfH8/fw1teXr5p06aWLVuyuEXpurq6cN6EXo9KQT11dXW9vLzgpE19lqempm7YsCE4OFiQQNZTIhXHRnx9fbds2cLxWAjVnZ+ff+nSpSNHjsBzJtrr5MmTKSkpCQkJ06ZNc3BwECyUzZ+Na2lpmZiYdO3a9cSJE3wNhNuIz549y6c9JSXl4MGDvr6+uOCB2heCwRbBjxsaGoaGhq5fv/748eMnTpyg31OnTu3YsaNLly6WlpaCkzucx9bsEMicOXPc3Nz4lahGChQR7mTctWsXX84UCsXp06cjIyPRBtQSiMjl8tDQ0NjYWL7G5uBc/Ue4RjIwMBAkx8LCon///nfv3uV7cbp27Vp4eDi+onqymQAqIiNP9mWKC2ZF/6WxGaWoE9HT0+vTp09SUhLfZU15efmWLVtatmxJSgOCSEZdHR0ddHlUEF6QSqV+fn4//PADnzPizE9NTY2KihLs7FAQOg4qjo34+fnt3LlT0CKAg+6C/8I1SZXnOgULZfNHk9GvsbFxaGjomTNn+BpbhMaysrIHDx40bdqU/BOznSZbHD9uYGDw3nvvpaWl8RXv9evX+/bta2FhAQkhOUFELpdPnDjxypUrqir25xyb3pg9ezZO2/DroWkK1BE8QqkDbMofrJHJZCEhIXFxcbUIbDqPTWWxEXNz8z59+gheBsy54of96p8WVxPY6lcbW+gaN268du1a/vyTJEcwcvr0aVUjsior4Ofnt2vXLkH0YlhOpkG2aLowgMCgqiB6AfIml8tDQkKqAeysrCw4q0NB6gNbT09vwIAB586d4wMbxzbha4yfoVwunzBhwr8D2MRlUiYA9oEDB94AW5VoctIhAbUCbLY5/l5gC6KXRTInXkNgC86xOUWwj2VlZTUHNpsh4m+AzeeJWMp/W2O/AbZCoXgDbAGruEKh+LuG4qyKgIC+0dgchVzl4xtgvwE21No/aI79BthV4rbKF94A+w2wVQJ71qxZ9erVq1KG1HkBJlY9Pb2goKCdO3eKW8X/+cDu3bs3qGarqg4fXvM7Uqm0b9++R44cEbSK//rrr7CKi9eKpbEmc2yR5UzxCkgkEhjPNJ1jP3ny5Ndff8VJLPEiiEZ0iDCeVWOOff/+/eoZz3R1dWE8488er1271rt379o0nq1YsaJjx44NayP4+Ph4e3v7+voOGzYsPj6evzzILncRl9UxnpWXlz958uTGjRuXeOHixYtXrlzJyMgQ7EfE59gmJiZdunQ5cODAhQsXOBnv3bs3KCjI3t6+YcOG3t7eHPZ4eXnBObagJEmlUmdnZy8vL85Xr+jRx8enX79+GzduTEtL41Bx6dKl5cuXd+rUycPDg1O6t7c3PL2ABLY5agLsixcvTp48mc8xTun8R29v727duq1bt47TFpcvX7506VLlXvGHDx8KGszz8/NjY2MDAgIEC3V3d2fXpYhYLS0tEWDjAqCrV6/y+XnhwoWkpCRcpUitz3JPKpU6ODg0aNCAQ6OPj4+rq2vPnj23bt3Kz3bfvn2dO3emY0VshhKJRGOreEVFxdmzZzdv3rxmzZq1tRTWrVsXGxt79+5dQeM2rWOzVa9yjl1UVHTixIkpU6YM4oX333//ww8/XLRo0bVr1/gdoTiw9fT0cKfk+++/TxkPVobevXs3btx46NChMTExfMasWLFi4MCBuOuDWhcRHR0da2vryZMnr1ixgv/hq0iJiYkZMGBAWFgYLkhE/em3f//+Y8eO/eabbzhFf//993PmzGnatCnJOhFSE2A/evQoMTFx9erVnOKqfPz+++8XL148atSo9957b8iQIYOV10IOHjwY8UmTJu3cuZOzdwXNXVxcfPv27Q0bNqxRBk5Bc+fOtba2hrCRyFWpsUtLSzMzM8eMGTNIKPTv39/c3JxyI74hYm1tPWzYsCVLlnBq8sMPP3zyySf+/v6hoaGgjs0bnrb4fRDyrA6w+UtqfHjUYkr1gF1QUPDzzz+rco1kZGRUuc0wKSmJX09xYHOahPNoY2OzefNmwd0LeXl5q1atov6V/VAqlbq7uyclJQmOIPg1rHlKSUlJVFSUsbExWw2Ku7m5LVmyJCcnh1/QrVu3BKcbNQE2vxT1U1JSUtq3b081ZyNOTk5fffUVf88s7YpXVcqNGzc8PDywd4WgWCWwS0pK0tLSLCws2DpUGUe27u7umzdvFrwi8siRI97e3lXmw9/E9l8G9qZNm0i9cFhjamravXv35ORkfuvWBNjW1tasowU2cxFHC1Kp1M3NLSEhQXBHLZtJbcULCwsHDhxoamrKYQvkuPKu5m+//TYrK4tf3NWrV3v06IGvSOhpU1r1NqjwS1E/hYBNe8hwekdHR0fkwgDxOfmNGzfc3d2rAezz589bW1tzWCr+CGBXOvzdsGHD48eP+YQfPHjQy8sLr1WZFfuCxsDml/2qU6qnsck1EkstxU1NTXv06FGLwIaU/+uATRKDCH4rb4T/bwNbXGKrDewLFy6oum2TBI8TAcPfAFuL+AKOiKxjvwG2iPiSxgYbyRj5BtgKheINsEUkpzb/9UZj1yY3lXm9AbYIS98AW4Q5tfkvHBIg3QKl/UZj14TFtQJsGj396+bY4qx7A2wB/oibJQQ+UCOJNDYrSSyw4+Li+CeKXvNQHHV7dXNsVYxVlS5u+611YMNk9W8xnokL3b8U2Cw6qrOOLcIU3OT8VHl7a15e3tOnT/H7VMNAX+UpQ1JSUkREBK3XgQAAWy6Xw9ECbo1ly8nOzv7xxx/9/f0tLS2NjY3lcjl+5crg4ODQv3//Y8eO8TcwqLKKo0RtbW19fX0rKyvkw/6amJh4enpu2rRJ8OpWVVZxuNqrX7/+nj17Hjx4wJJAcdyexVllBKSfPXuG18ArYnteXt7vv/+Oy1U4HyoUitoCNniCKbqurm7jxo1XrFjxh/J2IU6t8vLycCuFolaDoFUcZ4GdnZ2//PJLYinxB5H8/PzS0lLwkMMfFtiEFlAKR+7JycmPHj0CgfQLB1516tShT9SJINtqGM9wDh+XB5ibm8tkMhJFyLm9vf3nn3+enp7OoY7YL7BXnP7HiZSXl2dmZh48eHDLli3bt29nnaJt1SSQb7Nt27bh5teOHTvK5XKWUzh8b2xs7O/v/+WXX27ZsoVTwsaNG7/++uvevXuHh4eHhIQEBQV17969W7duwcHBQUFB/fr1q7wR/uLFi3D6xRKiCthwV2hkZOTm5hYeHt61a9egoKDK07kI3bp16969+4gRIxITE8WBjbbELxwJ6OrqOjs7z5gxY+PGjb/++iuHkC1btly6dKmgoIDj1w0OtC9fvrxnz55tykAM37Zt2/bt2zdt2iT4YS0CW1sZyNGCu7v7hAkTqPnIp93WrVsr3X2cPHlScEWHZb6mcUFgY1HdwcFhwIABP/7447Zt24ir4MyuXbsSEhJycnLolhW2XD6wQSCcpfn7+y9YsGDTpk2cZtq8efOiRYv4K4is0PLjagKbs0wNd3dSqdTKyio4OLhPnz5dunQJDg4OCQnp1q1baGhocHBweHj42rVrBd0BgljNgH348OGIiAgnJydra2tLS0srKytLS0sLCwtLTQK+srKyqlOnjr29vbW1tVwuh69fopB8uxkZGQnmXadOnZYtW86aNSs9Pf22MmRmZt5VhlvKkJOTI3gLuQiw9fT0rK2te/TocfTo0StXrty6dSsjI+OeMmRkZNy+ffvu3buFhYUcBIKPpLEBBvS4cFhnYGCARuITYmFhYWZmtnTpUtyuxsofLsr78ccf27RpY2dnV6dOHauXwdrauvLqAldX14ULF966dUtwnoJ1bAhWta3i2OqPq3l0dXX19PTMzMxsbGyIEDSipaWlo6Pj4MGDU1JSWBJqHhcEtlQqhbtFuVxep04da2trSCAqA8706NEjISGBnKWxNeEAm7pgNJxcLheUZwsLC1xVzUevSEr1gA2G6+vr+/r6/vTTT9eU4c6dO5nKcO/evdu3b9+4cePRo0dFRUWC0ih8bJPlAhuvqKiIj4/v2rWrgYEBmpmuiQAB6v+i6uRFCH0w68SfI4v8nKVSaaNGjRYsWIC9RzToYn1ZCo5SVAEbRVhYWPTr1+/27dsvXrwg97fIHP4xEWfZgjgBG81MTn+gB0Apnwosj8+bNy8jI4PjcggFff/99w0bNtR9Gai/09HRMTU1nTNnzmsANqpN/n2BdtQc/9LW1jYxMenfv/+JEyf4nKlJCh/Y8AMHL5RUBxoZwaOzTCbDpXziwMbnBEvB1uEk0stqRvC5W1UbVEifwU4JJ2daWlp+fn5xcXGs4JEo4r4UkVtTNNDYCoUiISEhKCjI0NDQwMBAJpPBexuI5LBA/BG+oKGlMRDCLwijbUY0FOTnBt96s2fPJp/bdF0biBdEtUKhEAQ25c+6RsKVlxjOYa6uKk+FQsEHNvmshNiRSzoqi4Rj/vz5WVlZgl3v6tWrGzRooK+vD56jJ4XLxDp16sybN+/27duvTmOjqtQrof+FZ1VqI7xjYmIyYMCAVw1sYh0EA3hA9cATAwMDPT09ExOTDh06qLpGFxqbJYocy6GlqBROhNpL/QhyUB/YsMjo6emBvd7e3vArzhE8knBEBLtOzYB98ODBLl26YGyprwycBubwgv+IqSz9As8EYGoqZIvPBbW3rq5uw4YNo6OjaQM2UStIJyUKApuaytzcvF+/fnfu3CE8U39JOQhGCNjUTyECAUKHhVKIJ1ToggULRIDt4eEhVQZ4hoTm1NbWlsvlM2bMuHnz5qsANiYRqDxNK2gYQrgiEoyNjfv373/y5ElB5lQ7kaOxibdULuoJccK1m/AA37ZtWzWH4kQUiRmnmfjtRaVXGcG36gOb5B89eKNGjeLi4qrHPc2AfeDAgS5duujr68PNPU2Mq6SQXsDCCSSDJIYwAHpIbgjY9DlFdHV1vb2958+fL3gUVIQXgsCGZMAIGR4eDmBjSQnAFskQ/yJgs/IBujidFJFAkXnz5t27d0/Q0rNmzZoGDRpA+QPSGJXjvovp06ffuHHjVQCbhk4k1gQApLBtp6WlZWpqGhkZ+RqATeNnVqPo6OhQ34f7pdu0aYMrfji6jt15Bus6hxBqlFqJVA/YwIhEIsFNIFXKnuALmgEbGhtu8WncoikLIKBs74s47k+nCQaJlGD+LLDV1NWgXxWwMT2zsLDgAFtktMMylAU2Kkz1J0pJKDkURUdHs/ddsNkC2NCcGG2SQUsmk82cOVNEY5uYmKAO1NfgUc294jSMIq3IYoC6ZiSamppGRUW9BuMZ8Rbl4hGiSJN/Q0PDNlUBG0IISWb5w2maGj6C4epobCoIQoJuq3Y0NsFDZD4J45m+vj61K1shVpQF43gZF24gTpCGnZPc8fMxwMlQV1fXx8dn3rx5+fn5VHMWErSFg9NnCwIb1dDW1ra0tOzfv7+g+2FO5pzHvLy85cuXs8shLJ6BTA4JxDqRoTirsWGwJE1lamo6a9YsQWAXFBQMGjQIJ4Q5hWppaXl6ei5atOjevXtEAjHw6tWrvXr1ItmisvhjKBIAkGlsbBwREXH8+HHKU50ILJ0iXSc7FOcQAn1LYMZ/8WhkZBTw8lI+TutXVFTcuHGj8uYDvAl7AQGbWoRSqFD2X/w4x+7LvqClpUXAJj4Tcw4cONCwYUNV0t6kSZMDBw5wSKBvxSN/amyyJxcrw4sXL2Bzw1gUJuKDBw+GhIRgdQpTPmpg9SO6urqwq0NFY+Ud83aWI+JxqVTq6+s7f/783NxcMl9TValv4guNILDRkNra2nXq1Bk4cOD169dhFWczFI8/ffp05cqV5N4dlacGo4ggUYsXL87OzuZwG0StWbPG09OTroAmnamtrW1raztr1izBqubm5o4cORKX9UCCaSCtp6fXuHHjb7755s6dOyxFZcpQ6aukd+/eMN7QSJW+RRMTopAzbiAzNTXt27fv0aNHxaWN89/y8vLS0tIXL17gWkwOB8rKyipvYunSpQsGUywhUqkU1kSMwAE/WluRyWTt2rWja3RZMktLS69evdqsWTO6blWwRTRKxLIz7F6oKmpF4whPT8+ff/758ePHLLARP3DggJ+fn56eHqijfgRMbtGixYEDBwStqhxO8h+5wC4tLb1161ZqauqpU6fOnDlzjglnzpxZv359VFRU8+bNGzVqBEc/lZuxGmgSPD09GzZs2KhRI7hMatq0aZMmTRwdHUlXq8lTDMU//fTTQ4cOnT9/Pu1lQH0vXrx4584dUuYs2aqAjWm2paVlz549d+zYwdB97mXef/nLvnDu3Lnjx49PnTrV0tKStJyahEgkki+++CIpKYmlAiWdO3duxowZbm5urMLH7BfedsaOHfvbb7+dPXsWlUlLS0MkISFh+PDhLVu29FEG+HLy9vZu0KCBr6/vu++++/nnn+/du5dIwIdpaWlbtmzp1atX/fr1PZVBsGE9PT29vb29vLzQ9J6eno0bN27ZsuX48eNTU1NZVlcZLy8vf/78eWZm5qlTp86fP3/69Gmq0rlz586cObNly5aIiIgmTZqgRBTasGHDxo0b+/j42Nvb07AIXR5+jYyM3nrrreXLlxNnKNuzZ8/u3LmzadOm+vr66jeQ+JuYEhsbGzds2NDX19fHxweXbJEvpJCQkN9+++3JkycAM9iC+NGjR/v06dO4cWMQ6KEMDRo0AL769Olz5MgRvg2lSsb+ZR0bGrugoGDx4sWBgYEODg62trZ2dnZWL3eh2NnZvfPOO1OnTt21a9fRo0dPnDhx9uzZpKSkOGU4oF6Ii4uLjY3dv3//vn37Dhw4EBsbu2zZsuDgYCMjI3G1xmcu7ppydHR0cXGxs7OzVwZra+s6deo0aNBg8ODBYApnJKMK2Jh04ZZDFxeXunXrWltbW1lZ2djY2AkFFGSlDHZ2dvXr169bty6tafFrK5Iik8msra0dHR3t7e1tmeDs7GxnZwcRxF5XTIKgUbW1tY2NjfGJpaWljY2Nra0tKuzp6dmuXbsvv/wS126mpaVduXIlLS3t9OnTCQkJn332mb+/f926dW1tbS0tLWmbkKurq6+vb9euXaOjow8fPnzkyJG4uDjBVj148CDabv/+/ZXexRISEpKTk69evZqXl6eOzNE7cLUfExPTsmVLFxcXbLwheXNycnrnnXemTJmyf//+xMTElJSUM2fOHDt2LCkpKSEh4fvvv+/evTtxFUqSekA9PT1sm+Fs7HFxcfH09BT0YEVZaRpBQ7z77rsrV64EQ4CIvXv3Qs6Tk5MfPHgguF3q8ePHR44cOXDgQFJS0hFlOKwMx48fj4uLO3z48KNHj4hdGkX+orHRiyxYsMDDw4OGN4hgqNC6desNGzZgy0tRUVFpaWlRUdFzzcMzZcB3J0+efP/991VdpiXOZRq6UG0xXDQzM4OjBVDEckQE2LSuThtvROYX6IagMWCVxYCqGisFNBHgkIPMMbojjYQBJ93/RqKMl/GaiYlJjx49oCVKSkowq3qhDMXFxRs2bGjZsiV9iAzxIS5L27t3b1FRUXFxsfoNW1xcjMkLy+oq4xUVFTk5OUuXLoXuBfkYksBi5+fnt3Hjxry8vPz8fBBSUlJSpAyXL18eM2YMxIP0NisGnHkymhLTQAyeqzG2EpRGrFD069fvzJkzBQUFYBor4UVFRVjy4DOkrKwM72P+S78lJSVIr566/ovGplJxYQCtZKLJcV90mzZttm3bxt/sBfyo84upY2lpKU2Dz5w5M2jQIKlUKsg1kUTMYUjPU8vp6OiYm5v37Nnz2LFjRBRFxIGN/gvAhoSxU0o2jnJpzwZVpnrigspTN0GZoMtAE6BFaDWbhJi6GEzzoNt79eqVkJDw/PlzTqOUl5f/+uuvb731Fs2cMZJE+xobG/fr1y8xMZHW3jif8x/LlYHSic/qRCoqKrKzsxcvXgxXwbSSR9zwU17KV6YMKAK7hkpLS69fvz569GhsREO7gEvUSxLmEcECLbsiIyJaGv1LS0vL0NAwPDwcZxPAEGILRTgjR/CH+MZGKAckqsNJ/jt/amz6X3R0dP369anhSaokEklAQMDOnTsFvfnR5+IRlgC8efbs2SFDhhgYGBBE1WQrdfDs+0g0MzPr2bOnoC1HFbDxIX7JksHp9dl36F+QFXokTLK10ijO8gElQtCpIchKxEIaReAdqVTas2fPhIQEfktVVFQA2KgwvkKHIpFIZDJZnz59EhIS1DfY1ET4FApFTk7OkiVL7OzsqFciJkskkqZNm+7Zs4eVGUwYYdyGxgaqWVagRaghqE3RrGARBiwatYuql+G3+P333798+TJ7pAxIpsqL44L+S+8LdgT0WpURAWDPmTPH1dWVhnawV4MpgYGBNQQ2v0KpqakDBw4kJamKfSLpkHtSsFpaWmZmZr169aq2zzOiXaRQVldguMFKpPiHnP+iOBJNAjAJH6uRAACkkCGN5g6og76+fu/evQ8dOiQI7K1bt7Zq1Yo6CwAAhcrl8j59+iQmJqoPbH6DapRCwAYtGCrT7APAZjMEsMvLy2/cuAGNTVtcSc+DnxjakFSQDYX4zGmFaj9iKB4eHn7u3Dm4Q64hJll6qx1XCWxobBiTwGgdHZ3AwMBdu3YVFRXVsJ9mq3v69OmoqChSkgQPiohwHO9Qn01dNYCtkcZGKcgQcbbLp/ELXoAMYeiIQjm1pUeIEase+eRQ5niNBTbBDzQC6liqIc1DdiPCv4GBQVhYWGJiIlqK5XZ5eTkBm+pPww1obD6wa7G52cpAY2MojjoQsCEPTZs23b17N2lpdi/g9evXR40aJZFIWGCz3CbqKCIiY9Re/NZRJwVD8bS0NAJ2ldhmNTNLIGikqRCHXeo/CgB73rx5uNYALIMlFiLVpk2b7du340BybXXqpLFJiDkRYjo/wnkTCIHG1nQozm8/6trpgAEMY1gYY5FGFQPYWC1BG+lEDOYssNlqsJoH71BuKBGSip4FCgoGPCMjox49ehw8eBBzbFYaaI6NqTWdVEGGMpmsd+/e/KF4aWmpKvMPm3k14jk5OQRstCaIAif9lPdjl5WVYYjL5l95E8iIESMwbsKHIIHi4Bg2PlGeyJZ++fJDTcmPsE3DxqGx33vvvYsXL8L0XWU/yEc11vApHZbIKvNhGcKJc4FdUVGxcOFCbIogMy8NY95+++3Nmzdjfbh2gY1OhNDCRvjcpxS2wdg4jGfV0NhsgyGOfXKGhoZGRkbYJE9mGKoGP0JgA3KAOtInnFLITskRJogmDZfYXgODf5ZLLLDhVj02Nhanx8kYA8sl5tgEA5oIaGlpyWSyvn37ssYziEtRUVFJSQngzebGiQuqKRo8c17GY3Z2NubY6A1BMnU3fn5+W7duhT2c83l6evrw4cOpjYgV0M9kaESToYHwDjUWfcJG6L/8iEjzyeXy995778yZM8+fP0c9OZttCKIEXUTIlky8xYcvXrwoLS0tKSnhHObloFfkUQDYK1as8Pf3x3qqtbW1nZ0dFrTt7e2Dg4O3bdv29OlTkRw1/de5c+dGjRqFZXMboWCtOgi9/r80Dw+P999/v/IOIGIo1UqV8YwDNnqEutbX15cqz/dbWVk5OTmhtoL1wnqyra0t6gbWOTo6ilgH4UyCaKFv7ezsLC0t+duSMGSAzYYaCJ9jdd3d3b1bt244o5+hDHdfhoyMjNWrV7do0YK0lipgQ0DBNywy5ebmZmZmZmRkvMzsf3+Rf2ZmJhZB8T77W1xc/OjRozt37rBfIZ6RkXHu3LlZs2bZ2dkRRKkT1NbWbtSo0apVq27dusX5NiMj48iRI4MGDaLuiYUudjRaW1vb29vb2dkRY9WPCLYsZ1shSYi2traFhUVERMTevXuvX78OhqDCoPr+/fsFBQU0uma7v4KCgrt37965cwdfcXhLm6xYfqoZFwB2QkLC9OnTJ0yYMGnSpLFjx06aNGn8+PEfffTRxIkTFy9efO7cOb5JRs3CBF/LyMjYsGHDpEmTJtRSGD9+/GeffbZu3bobN25UKANbrqbApnG1rq6uiYlJSEjIpEmTJk+ePHHiRFX1nTRp0sSJE8crw0RlGD58uLOzs6odxa1btx40aNDYsWPHKcOECRPGjx8/bty4CRMmdO7cGbvZSJnTzF9fX79Vq1ZDhgz56KOPUCLKmjhx4tixYzt16tSnT58RyjBUGT744IMhQ4aMGjUqNDTUyckJAxwCBiKsxmaBrVDeJr9jx47PP/985MiRH7wMyHnYsGGjR49etWrVzZs3WVYjfufOnZiYmCFDhrz86M+/H3744dChQzt06ICrkaBmWVVpa2vbrVu3UaNGDR069M/PPvhg+PDhAwcObNasGb3MqlNdXV0nJ6e+ffuCIaqaSaP08ePHR0ZGGhkZEZ4pgg0q3t7effv2/VAZhg0bhgoPGTJk+PDhM2fOPHHiRF5eHqSRBXZaWtoXX3wxdOhQfDh06FBi1MiRI6dPn37hwoXqDY0FgP3kyZOsrKx79+7dv3//3r17WVlZmZmZ9+7dy8jIyM7OfvbsWfVK4jc5UoqLi6EKUChcEXF+s4QC5x32MSsrKzc3V9DIVw1gw66jp6fn6uq6cuXKO3fuoKpClfpfGluTe/fu3blz59ixY4GBgYJiIZFIoqOjL168yP8wKyvrm2++wdIj2bdInqytrT/++ONjx45RS927d+/Bgwc5OTlXr16Nioqys7MzMDDQ19fX09PT19eHEwJDQ0OZTIaN1np6esADtLfIUFyhUDx8+HD69Onu7u7IEIef8auvr29paRkZGSnoaAE2FP5XbK1oDKoOQC8AACAASURBVELdFjoa2G5lMhkKMjAwMDQ0BC2gQk9Pz9DQkL4Cc4yMjFq3br1582bybMVpEfFHfrPev38/KysrPj7eysqK+M9GMPMyVAZiOCIGBgZNmzbdsGFDbm4uH9gHDhzw9fUFKzgsMjQ0bN68eWxsbPXg9iewqVTYKkqFAk3xVaG0GunwfCJUWo3SVBl7qgdsGGlcXV03b95cWFioUc2KioquXLkSEBCgaifj4sWL79+/j2kVJ2ccAoHlErIOhEskEnNz86+//vrq1avFxcX0FfZyPH36dOjQoZaWlvQJ9QtQcTTbhHTygc0XpocPH06ZMsXZ2RlDd1as4RpJ1eku+I1nSUCtaAqAulEdyExI2AbsqeZIp0f+OMjIyKht27a4tpk4U8NIUVGRqru7YIZEfYg0UAeqK3fpb9q06ffff+ejIzExsWHDhtiGxFpGEffx8YEHFf6HVaYIABsIr/LLf+kLGgGbzFqQNicnp02bNmk6E3nx4sXVq1dbt26tatvst99+e//+fUEzCZ3HhtxANSFuYWExY8aM69ev83cdFhYWfvjhh3Xq1MFKGEkbDEskggROAhUNxVUB28XFhT2uA4WvpaUlcmwTfuOpCKoMRbDfBrYMIpP+iz7IyMiIcgDOUQ0kghDqKYyMjAIDAxMTEwV9nlVPbktKSkTu7kK7EJhZOy7OyaoCdlJSEnzawZJCvTY2AgLY1avwn8Cm79UBtjrvUIb/qIimwCYFoqOjY2dnt3HjRvWBDYMwgP3222+rAvbChQurdI2EwR7tZtfW1jY1NRXxoDJ8+HArKysY8IEEdkcNTbA11dguLi7QQqRmERFxZigCbMCYts2COtQN2dLIgvbGA/BkPAcAqH9BhoaGhgEBAa8N2NgyRJwk3kIriAP70KFDBGxYDUERq7GrBx8BYCMjceiK/7d6VXk9X2kEbBIvrDnZ29v//PPPGgEbe5vFNbaIM8OYmBgPDw9oJ2CbrESVSkwE2IMHDzY3NycFCEEhNCKdsiL1KJfLIyIiDh8+rEpjYyhOqp4+hDNDQddIBGyUTp9Av1ENCbHsiIAUMqlEtmjAHh8SrrS1taGxDx48+No0Nk0H0OMQY1F/T+U9E4JD8YSEhIYNG+Ir6q3AKIlE0rBhw/3791cPF38CG1glxFKkevn+E74iitjKaApssBtjWkdHR42G4mpq7OjoaPg8Y+uJOIBNo1CSGIlEYmBgIOLMMCoqqlKlk6wQQlh0IQ4Ng19jY+MBAwYcOXJEFbDr1q1LORDGJBKJiDPD1NTUyMhIFpkAJGk2EmvCNksmW0qVcRq3BwYGxsbGcoBdE5FWZyhOS/HEbQ6wSSDJMK7qfmxwwNPTc9++fXypUCflL8DGCgeVqs73/+R3+HxU5X5YRGIgdtCWdevW/eWXX9TX2GBOlXPsVwHs9957z8zMDINw8sLNaktCEQYjOOMtl8vDw8MPHTrEn/DDeCYIbC0tLRGNDWCT8YyuHyBgYyhOhwVYDSzSLoL/YoG9f/9+PrBxprAaQisCbBjPOPUh9mIoTh5U6FAj6vCagA2banFx8bNnzwoLC3Gm9F/6W1xcLLglQCONzRrPpFKpq6vrxo0b//jjD414kpeXd+HChbZt24osd9Wuxi4oKBg+fDicNNBCF7tAxcbxApxJw+VbYmIi3yDHApvGipBmGM/69u2blJTE58zRo0f79++vr68PR/QoiH6x8AaQU26k8ThoqfIRwJbJZG3btlUF7LKyMhHxVnV2WhzYqDBWrWgJ0EAZ9PX1fXx8fvrpp9zcXH6H8jqAjVLLy8vT09MPHjy4f/9+OMrA74F/T4iNjT148ODZs2f/+OMP/uhLI2DT4ApH811dXadOnQrfLyL8OKgM9EJsbOzPP/8cGBjIuZ+MxLTWNXZBQcHs2bM7duzYvHnzZs2a+fn5eXt7NxIKjRs39vPza9asWeU5qmbNmrVt2/aLL744ffp0lcCmygPkBgYG7dq1W7x4MUdaEhISVqxYERQU5Ozs3KZNG5Ti5+fn6+vr5+fXvHnzt956y8vLi+OoqIZDcVXAVigU5eXleXl5Bw8ehJCQhKPJEhISUlNT//jjD/6ARQTY4ABcIzVv3tzPz69JkyYtWrRo1apV8+bNmzRp0rt37z179vzxxx9/J7BfvHixbNmyFi1amJmZmZiYcG6xpCv//uERJyenqKioY8eO1RDYMHjS2Q+pVGqpDOzNnhxWGCsDm2hsbGxnZyfi+6nWgV1aWnr27Fm4oILs/vbbb3uFwr59++Li4tCPI37u3Dm43eNIIUdjA9iEQHh3YC+FJA7IZDJPT8+JEyfGx8fHxsYeOHBg3759v/32W2xsbFxc3JYtW8aMGWNhYcH2FNWOi2tshUJRVlaWnp7epk0bc3NzqiEi8DMVGhp64sQJvrN6cWAbGBh06NDhu+++27Vr1z5lAKUg9vDhw/fv3xd0jfT6NHZFRQVcI9GaJ+1Pqja7X/+HdB6bTiCQ4aAaGhsTbGwXx4y0yrEiralC9A0NDUXYWOvArqioePbsGTwKFShDfn4+56JZum42Pz+/oKAg/2XAnb6c/aTYeTZlyhTMscl+RsAWaWItLa3GjRsvXbqULeVlafm3bt1auHChra0tcoCRXJ1sBUsUATa6eBzk9vHxwZQeJj2Qg+vQQkNDT58+zTejiAAbO/YiIyOPHj2am5tLpFGkoKCAf+sr+s3XB2yFQjF//nwPDw8DAwMjIyM4lyX6Bbn5D0yEB5Xk5OTaArZUKsWWTEhelcBmTW6021wVo9QBNv9bEas4zvSytkNN43wjE6uxATz1rVze3t7Lly8XrANcI8GDCgAGDvPpVSelSmDD9UqDBg1gzMMvdshIpVITE5PQ0NAzZ85oCmwjI6NBgwalpaXBXCdIKWcExAIbhLMEgsO1YxWngnEeW09Pz8DAAGZVVv+Qua+GnStLRvXiqAn/VyKR4LTG4cOHWRaDQE01NminTX9scag2pbBUIBGqHukinWOVwCb5QwQZGhoaqlruoqasXoSYxn7OBzYrjsQEfkQikXh7ey9btozNjeI4j21nZ0frYeg0KZ8q+1CW7ZoCG3ob2ktfX18ul4eEhKSmplYD2IMHD75w4YLgeJuI5Ufi4+O9vLw4S/rEWC8vr1pYx6ZS58yZ4+bmBp1DfTPJJQk6LVeAs9QSrzPCNiobNzY2Dg4OPnToEBFFEU2BzVLHFqFOHLyq8s0qgU17ktjxfOXhB1UbVIjYWoywwCaK1GlrAHv58uX8ypAzQzs7O3IvRcCG5qD9KuqMz0WATaXfvHkTN4Fg4Q2lwJQtk8mCg4OrNxQfNmzY5cuXX7x4QQWpE+HsFYf+oBsIvL29axPY8FJKjYcIp1OhGTjgDYa+5l/qazhVxX6Jbt26JSUl8ZlbPWDzi6jFFDWBjdUUorrSGjdt2jTBS/n4VNc8RRWwSb2wPT5JAmDTuHHjlStX8usAYC9ZssTe3p52y6KzQA4YMBLJVWIbX4lYxRUKxc2bN7HZi7zHoRSpVGpsbFy9obhMJhs2bNilS5fUBDZmiBUVFeyWUoKSlpYWBsu4RpfPN3VS/tygQm+rAjZ2X0F7ELCR+Lf8suNSDsyMjY3/S8BGk9PdXZBvuVz+t2tssJ2GdXQHKysPurq6TZo0iYmJIQFjI+TMkJ30sVtWIGmc9lX1WCWwKyoqbt686ePjQ4oa1lDU3NTUNCwsTNDjgLjxjJ1js9SpiuNEY0VFRVJSkre3N1oW236pX8NIR1xjY9IkWIpawEZnTCwAr//23/82sNFma9as8fLyIr9R6FUhviYmJtOnTxc83VVRUQHHOuSAno3A4Q4tEwiKBT+R1diCUwxs5uELCW5ZW7ZsWYkyFBcXl5SUUH3u3bu3ePFiJycnWLD09fXhgoqjRaC0a66xYTzDEWhYQEiMpVKpubl59azixsbGuGwUFxuAOqKXiOVESkpK4uPjfXx80JGhleGoB/1OkyZN9u3bx36FPMFAul2P31hiFwbwO0WMEOrUqePwMtj/9Uoa29cbzM3NafM9p7b/AY2N0dqmTZsCAgIcHR0dHBzg6MfuZfDy8vr2229v377NbiZBd/DixYvMzMyLFy+eUwb2CqszZ85cunTp4cOH8KcpKBOCiRxg06kScB5O83Fb0MsK/v+/9vb2bdq0iY6OTlOGc+f+dxcaKnbu3LnExMSZM2f6+fmRjycSIidlwPo/Jt4iXTmqUaXGLi8vv3XrVufOnZ2cnMBPe3t7sNfR0dHDw6N///6aGs90dHSsra379u27adOmU6dOEXXnlVfKEaWcSFpa2oULF2JiYtzd3WHPQp+I7gbThEaNGsXExLAfgodpaWlnz569e/cufNoJtpdaGptg4+zsHBERMXXq1DnKMHfu3NmzZ8/6O8KMGTMGDBhgb29PdWMj/w1gV1RUnDt3bsmSJTNmzJipDNOZMG/evOPHjz99+pQ9sAFgw9uJv7+/q1Do1KnT2rVr79+/r5HSFgc21PKoUaPmzJkzmwlz584dN25c69atK0+8uru7c6rj5ubm6+vbvXv3yZMnf/3117NmzZo5c2a0MsyePXvu3Lnjx493d3en84+1orEfP368fPnymTNnzp07d+bMmbNnz6Y6L1iw4Ndff83Ozmb7SsBGZCiO87AmJiYuLi4eHh7169cHmW7KwCGZHt3c3HAXH3ouPT09uTIYGRkZGxujCzM0NHR3d2/YsCF9RTk3atRo2rRpV65c4W+SQ4XVBTb6Qn9//5iYmJs3bz58+DDnbw3wpNWoUSMWzxT/DwAbzfPs2bOHDx9mZ2eD2dkvw4MHD1gXeXgZqK6oqHj8+PHIkSOxVxy+hGQyGdbhcUvp4sWLs7KyagJswhjmhDKZrGfPnvv27eMIxsOHD+Pj4/v27Ysd6brKABM04nZ2dsOGDTt//jzR+FAZcnJy8O27774L5+FUIrUyPwIpxbFNVXvFS0pK7t69m5WVxakqSnzy5IngZhIRYEO7YnkY520wY2fnTagY+6unpyeTyczMzGgzP/6LQTg2vRgYGJiZmcnlckzCjYyMDA0NodjNzc0//vjj9PR0VY2oFrDJ+UtAQMDWrVsLCgpIhv6uSGFh4aZNm5o2bcpv3VdkFYcEkxEYEXWkTbCGbOK8efNUHQIRYS/nnBA2pSAxPz9/xIgR1tbWEBqM7khiGjRo8O2337IX36NfEP9lNTatLRNP6HQXv8Kpqal0IQQ+pAUtiURiY2MzZsyYBw8e8D+sqKg4ffp0p06daF2KZZpgHNjA/dhxcXGc011071dJSQlxT7BcPitEgE2+zcENWAHpsBqnnngHfQHgSj0CKk8SBU9vdG88LUvB14qJicnkyZOvXbvGrypS1AU2rBd0YYCq7F5bes2BTULJYpXTDPRIXRtrNyKoUGPQ++rkSS8vWLBAlQcVjfhJMlpYWAifZ2SJwdAOFfbw8Fi4cGFmZqZGmROwYeXi0G5iYgLrET9POFpABTgzcxbY/A8VCsWpU6c6dOgA5AgymXiICGoFn2d8Rwtw4k2QFixRVaI4sNlqQEL45gCCPWsvwOwagxdoeBb5nL0k4ABeMzY2njRp0tWrV1VVWAzYxErCQOvWrXfs2MHfIq8q91eXXhNgz507F+uE4D71hcRTNkISg50SEB0k0mukgohjHH2ON9nmZ+PwecZOlfl8A2j56YIphYWFgwYNMjc3p9EdFsxQjRoCGzNeWp0CyQD2qVOn+PUhYENMiXWI2NjYjB49+sGDB/wPFQpFSkpK+/btsSeX5ZhgnJrDyMgoICCAD2yNeMipT5XA5jQxPVKtIDkQFer3IXucvgCfkFARx6hHgMPjiRMnvgH2n81079696OhouO8nYBN/qRmoYWinN/sy3kfzsLqLmo0aA3LP5sYXykWLFj148KB2gU2ukVBt6vu1tLQwFM/KyvqTKWrESGODaho3In9jY+PIyMiUlBR+TuQaiXoEttd7FcA2NDRs06ZNfHw8ZyjOr5v6KWoCm3p2SAiBmUSFIw+sYFAcEcFHsiO+Jo1dk75Qfeayb9ZEYwPY4DUfZpwUTIc4+6KAE2o2agkAm9O6nAz5j9999112drYqYNMAm8wklMIyhI0XFhYOGTLE3NwcMwjaEQ0Qenp6fvfddyLAFsz/0aNHX3/9dd26dUm9EMLhaEEVsDHHxlSO9Dz1gDTHZutPcU01NrobGM8OHTr02oBNLU69PFqZozDov7SXjhUG6gtInCgTyp+E1tjY+KOPPkpPTydecSK1MxQnUSiv7YCcOZVWKBS1AmyWrariHHazbcMCG+BR1SS04VmwFACbc9sTGIktShwf6bQhURWzCwoKBg8ebGFhQRePYb8HgN2gQYNFixbdu3dP8HNqSupHwHwA29nZmZQPIiDZ1NR04MCBKSkp/DxZYLOmCrDC1tZ27Nix2dnZ/CauxlAc808CdlFREb8+1UspLi5W5X6YtChxhnBI8oCKkcCgX+NYHNDroY3wIVjExkl+XhOw4ZuiqKhI1blfwcPAIok4y1pQUPD8+XPB5YdqAzsrK2v+/PkmJiaQ9Sp/cV0jrFC0tRMtR82mo6MD6yWd2caKDjLX19c3NTXFIQdqGDaydOnSu3fv0vFdRHCa+tmzZ6WlpbD3kOgDe2VlZYWFhXiNw/bKRbHhw4c7ODjgcgmWRn19fV9f30WLFt24cYPzFbKi89h8YE+bNs3NzY1yIxr19fUtLCz69euXkJDAyTM/Px+ukXBlB77Fh2Cso6PjhAkTagXYNGkyNTXt1KlTYmLiH3/8QcwUEbYq/5Wfn//kyZNLly7Z2NiwDUdxIBZCQvwhYnHmlzwlQ3gAY9SZOMn5FkY1TiIeLS0tP/3002paxTkdj0QiETGeFRYW7tixY/LkyaNqI4wZM2bUqFGTJk1avHhxSkoKfxW+2sDOzc399ddfe/bsGRISEhwc3EUZgoKCunbt2qVLl85M6NKlS3BwcLdu3fDbqVMnR0dHOnnD6istLS19fX03N7eePXsGK0NISEj37t27devWtWvX7t27BwUFWVlZcXpoEovAwMDBgweP5oVK1yKLFy++dOkS5zZcADs3N3fZsmXjx4/Hdxyu+/v7BwYGhoSEhCoDSAgJCenZs+e7774bFBQ0ePDgsWPHjh49mv1wwoQJa9asuXr1Kv/a2idPnvz000/vvfdeUFBQly5dgoKCQkNDu3fv3rVr1169egUEBLRs2bJXr16cDMeMGdOvX78mTZp4e3v36tUrODg4RBm6desWEhLSrVu3iIiIZcuWCbrm1Uhj0/ZynMGsV69eWFgYcZSlsRpxENW/f39VXut0dHScnJzatm0LaencuTOEJzg4uGfPnj4+PjKZjNQAItovg4ODQ7t27UJDQyGEJIedOnXqqAydOnUCw/GvoKCgkJCQ3r17r127VmQ+VTtDcYVCUVxcPGfOHHd39zp16lhbW1tZWVloHqxeBktlcHNzi4iI2L17N//QTLWB/fz58xs3bsTFxR09ejQ5OfmIMiQrA+Lsb3Jy8lFlSE5O3rx5c9euXWmWSO2E+TaujE9ISEC2R48ePXbsGOLJycm//PJLkyZNOJ69CNi4bbNOnTpgGmjHb8+ePQ8dOlRQUKDghezs7P79+zs6OrIfWltb16lTp169eoGBgQsXLkxMTDx27Njx48dBxTFlmD59eosWLSwtLcFsS0tLNJSlpaWjo+PgwYOTk5P5PWlxcfG1a9eIouTkZOSWnJx8/Pjx6Ojoli1bmpiYUG6Up4WFha+v7+eff07VoMqA7ZcvX+affwa56s+xARPMm7A+bGZmRpzUXBL/8gWIMjU11dLSolZjIwYGBl27dl23bt2hQ4eSk5MPKwOoS05Oxq0sOspAVhhEjIyMunXrtnbt2sOHD0MaSSYPHz6cpAyHDx8+cuQIpUMmExMTr1y5kp+fz5OL/59Qa8CunLp89dVXZmZmYK4qFrDs4MfxLZkWcIxu3759mgIbjhYEj22WlZU9f/786dOnfH+a4innz5/v168fq6jRVEC4sbHxhx9+mJOTw88kLy8vLS3N399f1d1dbJ4cnnTo0OHgwYOCwP7999+Dg4OxbgeOkdlZLpf36NFj3759cKj6/PlzqlVhYeH69eubN2+OBkLlUSh2O/Xr10/Q/XB5efnz588LCgqQVaEyULZbtmwJCAjgVJ6ybdSo0dKlS+llNoLZlirDIYCNARFxW7AUNlF92SN5U/8TtiDqTQwNDcPCwk6ePAm5IuYUFhY+ffp06tSpcBGD4tiBm76+fkRExLFjx/hOgZEJZcUy7dmzZ/n5+c+fP+f3v4TzWgN2pae4L7/8EvehssRrFKdOAYw2MjIKCQmJi4urHrAPHz5MdFKk4mWgFDUj6enpADZRhCk3AXv06NGCN4e/ePGi0vFr69atDQ0N8bI6vyilffv2Bw4cEAT206dPu3TpAtcLbIYSiURfXx/OgIuLiznUlZeXb9mypWXLlsgfDKc4bgJJSkoSRNpLzv3vL0xQNA/ftWtXu3btiDOcCFwjcWqCR+Qp+C9sUOnYsSO2lNKKHSfzmjy+HA5rEwPVyY3tE8FAAPvixYucTeYVFRUlJSUzZ860t7dHEaCCStHV1Q0PDz979qwqDqhKF+ebQqH4JwKbyMZAJTY2thaBrYpTIulgYnp6ep8+fahuaFFIho6OjrGxsTiw27Rpg+3+JENVRiQSiTiwO3fuzDHJoHp6enrqAxtmWHwol8v79+8veBMI8Yds8qxsVRvYlK1g5PTp0507d6YRDbhNTaB+hFjNfkL6lvLHa+w7nDh1BBhI47/a2toGBga9evVSBexZs2bZ29vTtyzDAewzZ84Ikl+TxH8csNlBEYBduxpbI2ZBdgnYffv2hRmTBAXwBrDHjBnD0dj4EBo7ICCgGsAWGYpDYwPYrJxJJBJNgU1zH7lcPmDAgOTkZEGNDdYB2Bw2vk5gs8yvSZxlGpsPB8zsI8CJkRoxDceZe/Tocf78eazg0EAGGpsFNgSGhPz/ELBZPspkstDQ0AMHDlRPY/Pn2KySYUHLEVN6xIATq000FOe0DQZXxsbGY8eO5QO7vLycgF3rQ3HS2Kzy0RTYIAdsxxVchw8fFpm8EXNYBlYP2Kqag3Imja2rDCz8ah4HyZQPK3hVxsE0dA1aWlpGRkZhYWEANrs2WVFR8eLFi9mzZzs4OHDaCEVoCmziDFqBZSC1CyL/LI3NMhS2nNDQ0OppbEHXSCwjiEfUv3JYg8V53EdfUVGRnp4OjY3DRtRtQzJMTEz4Q/Hy8nL2tk2ZTAYLkJq/Wlpa7777bmxsrKDxkzQ2RpKsbYk0Nt/aLDjHxsVdWlpacrm8T58+8fHx/J6UzxwwEHK8c+fOtm3bss3HxlXNsVU1B/Wnp06d6tixI5YYZTIZ3bOrJgPpNfQL2CVCiVC5WOYg6yPpUrb+/Di+Qoba2tq4Vxw+z1B5sIudY6OZOPD+Pwds9IVGRkZBQUHVsIqr8lJKJh8SHfUj6enpuDWSxmNkPNPW1ra0tBw/fvyTJ0/4GWKhqEOHDqqu+OHLDVK0tbW7du0aHx8vbjzjfA4bcu/evQ8dOqQmsGm3k7m5+cCBA48cOYJdMXxaVKXs3r27Q4cONDrlVEkVsJEbmeL4mZ86dSooKIiujFaVP6e46j2yG8hEckA/zr6Au8rDwsLgV5yloqysrLi4eO7cufXq1QOTMb4jQkSALcIW4ht2K/L73H+c8Yz4BfYZGBh07Nhxx44dfAVS5Tp2UFBQYmIih+by8vInT56cOXPmhx9+WLx48YoVK1YqwwplQJz9Rfry5ctXrVo1b968wMBAbBLiqGtdXV1zc/Nu3bqtXr16uTKsWrUqRhmWL1/+3XffLVmypG3btq6urnD3o+avo6NjZGTksWPHnj17xiFEoVDk5eWFh4e7uLg4OTnVrVvXxcXF+WWoV6/eyJEjT548WaVVnNQI9nWYmJj4+/t//PHHK1euXL58OcuKlStXghsrV65cxYTly5evXbv2k08+adq0KbuQQ00p4n64vLw8Pz///PnzGzduZJsDpa9duzY6OrpNmzaurq5169YFmU5OTo41Cw4vQ926dR0dHYl1Li4udevWNTU1VUUFzlTZ29vjTXzr7Ozs5OTk6uraqlWrr776atmyZeBPTEzMihUrlixZsmbNmv79+zs4OKB7AsOJOSLA/v333w8ePLhu3TqwnWR15cqVS5YsWbdu3bFjx3Jzc1VZQ9QailM9RHae1cpyFxWkpQyGhoadO3euxgYVExMTwaF4eXl5Zmbmd9995+Hh4ejoqCbAnJycXFxcXF1dLSws4LSABTbMaVKp1Nra2sPDAyIIKUTc2dm5VatWQ4YMmTFjxnxNwqxZsyo3e925c4ffrykUiqKiovXr18+ZMyc6Onr+/PkLFiyYP3/+PGWYO3fu7t27s7Ky+FNlzlCcBTa8f8jlcjs7O/QXVfIHBKLDMjY2pubjRFRpbLgfXr16dYsWLfjNUb9+/bfffnvgwIFz5sxZuHDhggULvvnmG5CpCRf/fBfMoV9ktXDhwm+++WbhwoXz58+fMmVK27ZtBfcRYSIdHBz8xRdfgNvz5s1bsGDBwoUL586d+/HHH7u4uDg4OIBjdZUBfZCrq6udnR22G0CqMRoFi6RSaUREhOBy140bN4YPH+7t7c1vBUdHRy8vr6lTp169evVfCWwjI6Pg4OD9+/fzJVtcY5uamnbv3v3IkSMcRVdRUZGRkVHpT8vAwIAjfOKPtPcDSBCciWGUxc9HKpW6ubn99NNP6enpmZqEu3fvZmdnP3/+XLDxysvLs7OzMzIy+FlmZGQ8fvxY8GwTH9ioMGSOX3l1UmBJEuQJPhcH9uLFi+3s7PgFaWtrN27cOCYm5u7du/eYwKe3ein37t3LzMykjDMzM8+ePTt06FDBfUTak+8e6wAAGW9JREFU2toWFhbTpk1LTU0lnuPbO3fupKSkeHh4CLrWFGeOVCrt37+/ILDT09PDwsLMzMz4nJFIJHK5fPz48ZcvX1ZlIaqOxubP3ICfGm5QYSUDciaTyUJCQqphFTc1Ne3Ro0dycjIH2NW4+F6QrRolAtgJCQmFhYX8+rzmFFXA1ogiTV9WBWyFQkF+xdk8SRL8/Px2797N2theHbsqKipycnImTJgguCFcW1vbysrqu+++e/DgAWccVFZWdv/+fR8fHzrno34vqaenN2DAgHPnzvHpSk9P7927N7Zy8jOUy+UTJky4cuUK/0OkvAE2K1GvJP4G2DUB9q5du14nsMePHy8C7EWLFt2/f58P7KysrDfAVgke6qdpuPtGY6vqj6ud/q/T2G+ADXXNogND8Tca+y8oeP13d73R2G80tipt9mYozr3EsErj2Zs59l/6s5cPbzT2S05w/2KO/X9iKM7vZrDc9dqMZ9U+3QWr+D/KeBYfH19YWIjpoqpfrqwpFKre5KTzP1SV8ncBe8WKFZw647FK41mtD8UFq4HEhw8fihvP/jlzbJlMVv2h+N8IbBRtaGhYvZ1npqamoaGh/OUudaziuJxNLpcbGRnJZDJcv2BoaGjABENDQ/xXpgxyudzMzMzExIQzEQIVurq6jo6OS5cuhRuGo0xIVoasrCzBpSmFQpGdnX369Gnmiz+jx48fz8zM5DhXUYVnSi8vL9++fXu7du1AGlFnyAQDAwOWQCMjI7lcbm5uji2xfKmATURXV9fAwMCIFwwMDDw8PD755BN4nviTAGXst99+++ijj6ysrNhsiY1+fn61Duznz5+npqaC85zK7N27Nzw8XHApFJsLv/nmm9dmPLt+/XpkZKStrS3aAnxF3NDQ0Nra+rPPPqumaySW14i/5g0qNdl5punF91iFNjAwcHV1HTx4cFRU1IABAyIjIwcMGBChDOHh4X379u3Xr194eHj//v2joqIGKkNkZGRUVNQHH3zQqVMn3NJAcgmm4cI6X1/fNm3aBPJCQEDA+vXrc3JyBBert2/fXun5oG3btux3eHz33Xe///57wV0oBGN+pLS09OTJk1OnTo2MjOyvDKCOfsOVISIiIjIyEgSCD0OGDHn77bdxESIRiEVanJd2dXUNCgqK/GuIiooKDg728fHx8PDgUAGK3n77bXd3dz09Pb6wSSSSVwHsyusKw8LCWH5S3N/f38HBQXDnmZaWloWFxZw5c/h3tpSVlVXbKi6yQSUrK2v58uVDhgwJDw8foAyQxsjIyPDw8GHDhv3yyy+4QYXfylVsKeXzunXr1tu3b1d1YUAN17HZ4rC1y9DQsFOnTtXYeWZsbCy4pVSVxoaPYUNDQxsbm9DQ0ISEBNxQmZaWdu7cubMvw5kzZxDFlZFpTDh16tT06dONjY1xoIKlBQoNN7kwWv/P6IIFC/jigtZas2aNj48Pq1fps8prn+bMmXP79m3O6otgM1MiNtVev34dpLHUvaTyf39ZAhE/evTo6NGj69WrhzNqIFBLGSQSiYGBQZcuXX766SfK9pwypKWlbd68OTQ0VF9fnzPqIUJoryWHaa8I2Ddv3vTy8jIyMqIKsBFBVKMFLSwsoqOj+S1VE2CLbCktKirKyMg4f/48XZYK3uKqzYsXLz548ABuWKlx2YjYOjaf0a8U2KQH6DIkmUwWHBxci4dARIANR1k2NjaRkZF37tyBx98KZWD5RXH8i/b95Ofnr1y5EjuNWUL4POSnCIoLCoqJifHw8MAmREIRcqi8n23WrFm3bt3SCNhU/yojRCBofPjw4ddff+3q6iqIQ5z3PHnyJD/b1NRUHJ7hE15lyqvQ2Ddu3MDNtVWWzr6AofjChQtrdyguAmw+J/kpZcpAQsi+8A8CNstHCDHWsavnQUVwr7gqYOMUno6OjoWFRXh4OAGbPVvLck2hNGux/83Pz1+1apWpqSlLhZrxfyywQSDk5tGjR1OnTnV2dqZuiyISicTU1DQqKkrVFT8DBgzQ1tZWkxvsa/8oYFtZWdW68ayGwC5Xhn8TsNG6r8I1kuA6NoCNQ1p9+/bF+JZ8AHEgjUfOfwnYrLizMioS/xcB28XFBRDF5nkiSvyKnzfAJkZxIjUEtqBkIvEfpLFhiWG7dhwCqZ7GDgkJEXRmKAhsKtrMzCwsLKwa49u8vLzly5erMoxzmpPz+M8ENkdocHcXaWzOiReZTBYRESE4FD99+vR/A9iWlpa4PpEz93lFc2wO/zV9/CcCm5Tea9PYuHpGKpVaWFj06dNHU4sUTkcD2BzQqvP4LwJ23bp1QRHZw/H4BtjV2yv+f0Jj0xbxvwXYOGhtYWFBQ3GN+si8vLwVK1ZUz/vyvwXYuJRPsKsyNjYeMGDAf1tj/wPn2CIiWmsau9I/45QpUywsLIBPwebXNNHc3LxHjx579uzR9Dy2KtdICoUiKysrWnmNLr8y+vr6zs7OUVFRMJ5xuAa3hCUlJYK2iry8vGXLllUP2LNmzbp79y5ngIfSVVnFtbW1K1eeoqOjb9y4wfFlzal2bT0+fPhw7ty5DRo04PNNIpHIZLJ+/fodP36cX1y1h+KGhoZt27bdsmXLs2fPODwvLS19/vy5qh2Q5eXlRUVFT58+Za2bqNiLFy8uXLjQvn17wUPXgqQhUVtb287O7scff3z48CGnpUpLS7Oysjp06EDHwrCKIZIb1n3gdnLAgAGpqan8XQylpaV5eXklJSV8lsLNxrNnz/i4oJdrDdhFRUVLlixp3bq1pzLUr1/fXZPg4eHh6enZsGHDBsrg5eXVoEGD5s2bDx8+vBpzbBFg5+TkrF27tmnTpg0aNPD09MSvj49Po0aNfH19mynDsGHDPvzww5EjR44YMWL48OHDhg0bPnz4qFGjvvzyy5MnTwpyMy8vb+nSpdUD9syZMzUCNpYMTE1N/f39IyMjUcmhtRpA8nBlGDZs2JgxY4YOHdqmTZtKZwMYT3HW3oyMjFQB++LFi+PGjatXrx5atspfDw+Phg0bent7+/r6tm7dOjQ0dOTIkcOGDRuhDKjYiBEjvvjii127dvE33lVUVBQWFqampk6ePHnMmDEgAb8jRowYNWpUZGSki4uL4KKdCBThQeXdd98dPHgwy/BhyjB48OBKXxpubm4Qfg8Pj/rK4O7ujnTOb/369fGmn5/fZ599dunSJbazgF02Ozt72bJluAwPpYD2Dz/8cOzYsePGjfvll1+ysrL4PQKwXWvAfvHiRWpq6oYNG9YoAzn9ilE7rF69eu3atauVYc2aNatXr/7hhx/2799/8+ZNlmzUW/wQiCpgV1RUFBQUpKWlff/99ygIv+vWrfv+++/XrFkzZcoUb29vOzs7Kysra2Wo8zLY2Ng0btx4y5YtgoqiJsDWVGNjO42Ojo5MJrOwsHhZwf/9tay9YMUEXAkml8txqShNmggJAPaJEyfQOuzvo0eP4uPjV6xYwTJcPL527dp169atXbt2ypQpzZo1w1VwnOZo0qTJ3Llz8/LyOMq8oqLi6dOne/bs8fHxsbW1xcVmIAW3yllaWuISUtZMS4SIRHANuJWVFfIkTltZWdnb2zdv3nzGjBkk/CtfeoZbKRRWrVoFDvzwww+HDx/muC7DDoIbN24MGjSofv36YD61BqhwcXH56quvrl279sqBXV5eXlhY+Pjx41xleFStkJubi+8Qyc3Nffr0aVFREafx1LkfW3BLKbxGFhQUcGqXm5v7+PHjBw8e7N27t7KF4FDSwMAAEoC901Kp1MHBYePGjbUO7NmzZ2dkZPA7L4VCITgUh6kPIggjlq6urlQqpV1TUKc1/8WIEU5/kRssEXxgy2Sy8PBwQWC/ePEiLy+Pw3DxRxKhuLg43BwklUqxuV0mk+nr62tra1ea8aZOnVpQUMCRjYqKiidPnmzbts3e3h67/bSVQaoMtNUHTSwCY/F/sbZDbBkOCQk5duxYTk4OyTBofCgUiPzc3Nz8/Hz+3aYKheLatWt9+vQxMzPDLbzY0Qj+w1H0xIkTr169yiGfutRa09iU4+uJiGtsVc4My8rKBJlYrgzFxcWHDx9u1aoVhFhfGXCxc+U2L6lUam9vv2HDBsEdtTXR2HPnztUU2Ox4GCtPurq6mqqgKmUXi9UANuBBs0cycCITXPolCOxqyAOaqaysjC4MkEqlRi8DC+z8/Hy+ZD99+pSAra+vr6MMUqkULAIhnPqLs4L9L2SDOgi4spTL5eHh4ZcvX65Fe8f169f79Oljbm5OwCZC4C910qRJ6enpqtj7nwV2SEgI/yYQVVzA1rzi4uKkpKSWLVuS60J0kCQQtra269evr3VgR0dHZ2ZmaqSxaeGdI3PsYw3jBADqRCBY9MjmL7KlVBXPRdJLS0tLSkpKS0tPnTrVoUMHupSPOhdo7ClTpvCH4gqFgoBNrrw5OMRJBLb+asZZtlNcR0fHxMQkIiICFwaI0KXRv6Cxzc3NWapRKCYFH3300f85YOPYpuAGFRHmlpSUHD58+K233tLR0dHT08PgDXobdz44ODj8/PPPtT4U13S5C/0OCzMaG1dbEXEkG0XQ1RmcUT1/4UNkuUuE4ar+RdvUobFhuEInC6p1dHRcXFymTZvGH4oTsOHKm/YUAszUK1VvdMPygeqDoXivXr3S0tIEDauqyBRPB7AtLCx0mUBdkrGx8aRJk65evaoqk/+mxlYFbJIY/vhNoVCUlJQkJSW1aNEC0kCtSP29ra3thg0bah3Y8+bN458ZQoOpmmNT3agL5yCz5o9szuwInOJsESYmJpGRkYLr2KokD+lsi/Ab5dSpU506dQKwAUUQLpFInJycvv76axFg29vb01CLWpDwLEgFS5FgnM2HMIZL+cLCwi5cuFCLQ3GaY1Nbo1NDxeRyee0AG11d69att23bJngxhXj71fp/xefYIsDGdFrQlgiN3apVK21tbUzkSD8gYmdnJwJsVRtUdHV1xRXpvHnzNB2Kk/7BBJvkVVAc1U8k2ADVHIMcbGkcclC0iYlJVFRUSkqKpg1NF9kI2j5Onz7dpUsX2IoI2BiaqgNs1B+/nCbgG8+IdnXYxeaGa3R79OhRu8DGHJt1PyyVSmEywBx78uTJNR2K05wzMDBw69atgnfEadqiNXy/sLBw8+bNzZo1E2wGY2NjwdNd5eXlpaWlxcXF2PMAdUE1KSkpSU5Ofvvtt9mRLUQcg3MPD49NmzYJrp3m5eXFxMRYWlpSpw5B0dbWpivvBKta6XGScx6bZL2iokJQY6vKp9rpqCo6L4gsK7jIFu/QLxJpoItLvzQFdkVFBU2nBXf+pKSkYI7NGvzRqQHYqoxnW7dutbOzQ22rZAtNYqmUKj/hvKCvrx8cHFy7Q3H4FWfPC2LwD2ceJiYmH3/8cU09qIBB2tra7u7uH3zwQbTyTpm5yjBv3rw/71B5jbHZs2dHRUU5ODhwWIxHEWA/fvz4yJEjuNhlnjKAEBA1adIkV1dXABtrSJhpY5pjbW09aNCgBcowb9686OhofAu6o6Ki5HI5O8ZDp4B8sG6hxQsSiWTJkiXZ2dl0RpIdnb5OYFOXZGhoKJfLBe+1AHsBe+BBX19fJpOZmZk1b9589OjRmorA0qVL4+LiBHeJKRSKlJSU9u3bw/JMRWsEbEHxYBOpQVAK1jiJFfRftlnZzxF/FcC+fv163759raysaHCBgSSMPlZWVp988kl6ejp//gJFpdYcG+ThulAHB4f6yuD2MuDxNf+6ubnZ2toKXrMkkUhEgA2PM97e3u7u7hxC3N3d69WrR9fTA9JYJgGw9fT0HB0dGzRogG9fMsDN3d3d09PTyckJr5G6IxMUjnlX3rM7/q9h3LhxY8aMOXToECQb0wQaQahax+YLVs1T0AcZGBg0bNgwIiJi8uTJ48ePH6MiYOfTuHHjxo8fP2nSpI8//rhfv36+vr7Ozs6aisFbb701derUSi8OLNUUf9XA5sAVjqIHDBgA0ti2GjduXGRkpKqNqK8C2Dk5OTExMZ999tmECRPGjh07ZsyYsWPHTpw48aOPPpo8efKnn366Y8eO7OzsGgEbcoOhGnVmFKFe7fVHVAm0KmBXVFRkZmbOmTMHDusgzezAG3GQhkvqQLWOjg67T4OFLma5GCZxrG7IXyqVuri4/PDDD+fOnbvGhHRluHr1am5uLgaifwuwWVpMTEx69uy5efNmqttVoYD/4ve6MqxevTogIADTb/XFQCKR2NjYjBkz5sGDBwRmNvKqgc1Z/DcyMnrnnXd27dp16dIlpqH+F73y/9q7ol9GuihOVZUUKxIkEkKtjX/CJlqE0Forggj/gAcPsk8rjRcs8eBZeJR4QmhKRTXoJrtLUMlS4UGwIWk2Nvui1fJt/JKz95s7nZ3RTi1rHia30zt3zj3n/O4599wzd75+dTgc2dnZoiqnBrCvrq6Oj48PDg58Pt/+/j7k4PP5wHCfz3d+fi6auwUGyrLYBGxYJPhCJEWaosS5QBrJ8zoSsNkdVJC/BT+HdBH+GFrGZIY6BSVATRrUgGRK4QCScUYdVHj58qXL5Yr07S7gmabWrGar7YoLhrbMzMyOjo719XXR4CJLmKA8OztbUVFBvJJZeFhgQwEoJofFYavV6vV6+c8PB4PBvb293NxcXtkSEhLUALaAw0p/ygI26T1ZJ9gxus4aPbqodkGUxbgoDezBwUG9Xk9+MlZroYu4CGBj/EIvKPhMP6mAKTSNMigQozAUGo1GOR/lEwTz4uOKE8HQ7La2ttXVVfnABs0zMzOvX79WqgYAdldXF3bb5LuvqsVmZQ3pGwyGurq6zc1NfkUzEAh4vd4nCGyyzxjjKbB070CiBCyj/wsvgYhmntEOKkAmYj/wugV9RE9RDa44KhB5AC0WIQjY+BfAxgaJWq22uLh4aWkpksWWGIzVttigFsRjVamlpcXtdksDmw3vCYBNzJFT0Gg0eXl5XV1dZ2dn1CbLDQI2qRnQqNFoZEbFJciAZGnyhRBSTU3Nly9fniawBwYGjEYjq9Y8C9i0GwnePdRf9HYXry4ssDUaTXJyMrncrFuu0+nAAYzlFF+gHsGRoxQIwgZ54HSjVquVabFZnUYZwCbC8HQSBxETTQFjFuhHzrMcYNP0AXSSxVZKSW5uLoDN9x1RcUoppb5jPC0oKLDZbJFSSrHcBVlIk4SRAt6ZwWCwWq1bW1vRABsqJ9qdeF4UccWHh4dLS0uxETQbDYrkaEkz7kH+zcjIsFgsbrebBzY2WkhNTdXpdGlpaQh6EyyBGYkzdYevg7+AZzoDNkajEZ/4USpaAFt3d5C/EFtg0/gFiy3HFSeuUkj2fsBOTEyExY4UPPv8+XN1dTWboIIlH71eX1RUZLPZ/H4/0UC8vby8BLCJYyQ1QQHIR5KCTqczGAwWi0XaFYeqsO0kJiampKRYLJadnZ1f2438vcAeGhrCxxn0en1SUlJqamqsEptYdqhazsrKampq8ng8Nzc3oVCI3Unj5OTkw4cPeFuLtrAnTy9WVGGqgtl7cnJySUmJRPCMNJIvjI2NlZaWUs42LWnGik5yRJGehZRvRXNs0Dw9PV1eXq6UKhbYiB0KUEqZZ6SEeBddq9UWFha+f//+1xaLgluQKy7HYmO6hFESHmhGRkZDQ4M0sPk+IuO1ubkZL4FA33hRxvmK0GKHw+GRkZFXr15Rt5XuNcH3PP5XXrx48ebNm7W1Nd62nJ6eDg0NpaWl0TRYPbRAaeCKO51O0cTmSPLGkDQ+Pl5WVoZxJ7aGWiAUGKL09PTW1taVlRWlOc/3s9gJCQl5eXlY7iJJsQyhXHGYVjgXAGFRUVFvby8Se3ALmUpY7Pz8fN66ivaaRrfMzMy6urpPnz7xL/AheJaTk8O3iZdA3r59+1db7FAoNDU11dHRYTKZKisrzWYzzubHc5hMJqvVarPZdnZ2SNgk+4uLi8nJyZqaGnSt8u5Qo3PEt6qqKvi3ovmPrB6z5Zubm2AwODs729nZSU2pQafp7sAj6uvr+/v7t7e3lQJ7fX29u7u7oqJCKYVNTU2jo6N+v5/tO5X39vZ6enpMJhM1C3lVVVW1t7dPTEywrjjJ+ufPn263u7m52Ww2s/dSI3wBzdbX17979253d1d0uevo6KixsZG/12w219bW9vX1HR4exvDtLmLC/Qq/LTZ8oVAodHBwsLy8PDc3Z7fb5+fncZ5/VMfi4uLGxgakTvK+vb3FNi8+n4+6Zr87Ytg5NCg4Ly0tnZyciKZDRxIbLPbR0ZHL5RK0poZE0ObCwsLW1pbf75eOirM0g73fvn3zeDxzc3NKOel0Or1eL75BxTvV379/93g8vBLa7XaXy7W/vy/I24cOBwKBs7Mzp9MpTQzPVYfD8fHjR7/fz7+REg6Hf/z4EalNh8Oxubl5eXmJL0Ox/Hmo8v+Ajf0Grq+vg4//oKm1ANjX19ehUCj+/WPn+fKFHX9SlU4RER7Hnif34yqeKAqJcDgcCASCwSDObPuQIytc+u4SGmQryy9H+mYbHiQBDVbf5MtXvZpCYN9P/9SjL5qWIQxW9uFwWFSBonnKH+8VDQv98S5UEKwqybwrntWip5BcRd5iE+tkRptRX767EXNGscoW88YVNfgb2Ipue678zIE4cICAenV19ZRMThxY9wzsODD5+RFRcYDsdlSt/GM3PwP7HxP4I+wuTakeIe0PRvJ/Gn3ixXINWmoAAAAASUVORK5CYII=)

---

# TSRMCN ER Inclusão de Movimento através de XML TOTVS Colaboração

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=224106789](https://tdn.totvs.com/pages/releaseview.action?pageId=224106789)
> **Domínio:** TDN (TOTVS Developer Network)

---

 **Este documento é material de especificação dos requisitos de inovação, trata-se de conteúdo extremamente técnico.**                                                             

## Informações Gerais

**Especificação**

**Produto**

TOTVS Gestão de Estoque, Compras e Faturamento

**Módulo**

Recebimento de Materiais

**Segmento Executor**

Construção e Projetos

**Chamado**

TSRMCN

**Release de Entrega Planejada**

12.1.9

**Réplica**

Não

**País**

( X ) Brasil  

## Objetivo

Todas as rotinas responsáveis pelo recebimento de nota fiscal eletrônica foram reescritas, com o objetivo de melhorar a performance e tornar o processo mais simples e estável. Também foram refeitas todas as telas do processo atual, a fim de aprimorar a usabilidade do mesmo.

Todas as melhorias de performance e de usabilidade das telas estão disponíveis tanto para o TOTVS Colaboração 2.0 como para o TOTVS Colaboração 1.0.

É importante salientar que para a utilização do TOTVS Colaboração é indispensável a contratação dos serviços da NeoGrid que é a responsável pelo processamento da leitura dos arquivos XML, pela comunicação com os webservices da SEFAZ e pelo retorno às consultas destes documentos. Estes, por sua vez, serão lidos e interpretados através da execução de JOBs específicos pelo TOTVS Gestão de Estoque, Compras e Faturamento para a devida atualização dos dados no sistema.



## Definição da Regra de Negócio



### 1\. Cadastros

Para o correto funcionamento da rotina de *"Inclusão de Movimento Através do XML - NF-e"* devemos ficar atentos ao preenchimento de alguns cadastros. São eles:

### 1.1. Natureza Fiscal (CFOP)

Quando uma nota fiscal eletrônica é enviada por um fornecedor, ela contém, para cada um dos seus itens, uma natureza fiscal (CFOP) de saída, que caracteriza a operação desse fornecedor. Para a empresa que recebe esse documento entretanto, devemos encontrar a natureza fiscal (CFOP) de entrada correspondente. Essa ‘Natureza Inversa’ é indispensável para a criação de um movimento de NF-e.

Para definir a Natureza Inversa de forma automática na geração do movimento de entrada, o TOTVS Gestão de Estoque, Compras e Faturamento utilizará os seguintes recursos:



### 1.1.1. Regra de Seleção da Natureza (RSN)

Para cada movimento de NF-e a ser incluído, o sistema irá encontrar a Natureza Inversa do CFOP constante do arquivo XML. Para isso, é necessário saber, através das parametrizações vigentes do tipo de movimento, se o movimento a ser criado seleciona a Natureza de Operação somente para o movimento, ou se deve ser selecionada também uma Natureza para o item de movimento. Para ambos os casos, será utilizada em primeiro lugar a Regra de Seleção da Natureza (RSN), rotina hoje já existente e que tem a finalidade de encontrar a Natureza de Operação baseada nas informações do movimento e parametrizações de várias tabelas tais como: Parâmetros do Tipo de Movimento, Produto, Classificação de Produto, Naturezas Fiscais, Regras de ICMS, Regras de IPI, etc..

Para verificar como está a parametrização da sua empresa vá na etapa *"Fis - Natureza"* dos Parâmetros dos Tipos de Movimento que serão utilizados na Inclusão de Movimento através de XML e verifique o preenchimento do campo 'Seleção Automática da Natureza'.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/007.png?version=1&modificationDate=1452253093000&api=v2)

Detalharemos a seguir como o sistema procederá conforme o tipo de Seleção Automática da Natureza definido para o tipo de movimento.



### 1.1.1.1. Seleção Automática da Natureza por Movimento

Neste caso, deverá ser encontrada obrigatoriamente uma Natureza de Operação analítica para o movimento.

Através dos dados do XML e das parametrizações e cadastros do sistema**,** a Regra de Seleção da Natureza irá encontrar a(s) natureza(s) possível(eis), de forma que:

-   Se a RSN encontrar apenas uma Natureza de Operação (CFOP) possível, o movimento de NF-e será incluído com o CFOP encontrado;
-   Se a RSN encontrar mais de uma Natureza de Operação (CFOP) possível, o sistema irá verificar as opções cadastradas como Natureza Inversa da CFOP extraída do XML.

No item 1.1.2 deste documento iremos detalhar como será o comportamento do sistema caso seja necessário utilizar o cadastro de Natureza Inversa do CFOP.



### 1.1.1.2. Seleção Automática da Natureza por Item de Movimento

Nesta situação, será realizado o mesmo procedimento já explicado anteriormente para encontrar a Natureza de Operação do movimento, com a diferença desta poder ser analítica ou sintética. 

Se for encontrada uma Natureza analítica, sua ‘Raiz’ (Natureza Sintética) deve ser extraída e considerada como a Natureza do movimento enquanto que a Natureza analítica será atribuída ao item.

Caso sejam encontradas 2 naturezas sintéticas possíveis, os campos natureza 1 e natureza 2 do movimento serão preenchidos caso ambos estejam parametrizados para o tipo de movimento, mas se existirem mais de 2 naturezas sintéticas possíveis, o sistema não será capaz de solucionar o conflito e, neste caso a natureza não será identificada, sendo preenchida a natureza do movimento com um CFOP de primeiro nível, ou seja, 1 ou 2 conforme a UF de origem da NF-e. 

Caso seja encontrada apenas a Natureza sintética, ela será atribuída ao movimento, e o procedimento de busca será realizado novamente para selecionar a Natureza do item. Para o item, a Regra de Seleção da Natureza irá considerar os dados do movimento e das demais tabelas citadas anteriormente (Parâmetros do Tipo de Movimento, Produto, Classificação de Produto, Naturezas Fiscais, Regras de ICMS, Regras de IPI, etc.).

Conforme já informado o sistema primeiramente executará as Regras de Seleção da Natureza, e caso as mesmas retornem mais de uma opção de CFOP para os itens do movimento, o sistema utilizará o cadastro das Naturezas Inversas que detalharemos a seguir:



### 1.1.2. Natureza Inversa 

No cadastro de Natureza de Operação (CFOP), de responsabilidade do sistema TOTVS Gestão Fiscal, foi criado o anexo *"Natureza Inversa para Importação de XML"*  onde deverão ser cadastradas as possíveis naturezas de operação inversas para uma determinada natureza sintética.

Uma natureza de operação sintética, poderá ter a ela vinculada várias naturezas de operação inversas, sejam elas sintéticas ou analíticas.

Entre as naturezas inversas cadastradas, o usuário poderá definir "Defaults", ou seja, registros que devem ser considerados prioritários caso existam várias naturezas possíveis para um determinado movimento.

Este cadastro será utilizado apenas caso através da aplicação das Regras de Seleção da Natureza tenha sido encontrada mais de uma natureza inversa possível para o item. Neste caso o sistema procederá da seguinte forma:

-   Se apenas uma das naturezas selecionadas  estiver cadastrada como "Default", ela será utilizada para a criação de movimento;
-   Se mais de uma das naturezas selecionadas estiver cadastrada como "Default", o sistema não saberá qual Natureza Inversa escolher e o movimento será criado com o Status do TOTVS Colaboração como 'Natureza Incompleta';
-   Se apenas uma das naturezas selecionadas estiver cadastrada como Natureza Inversa, mesmo não sendo como "Default", ela será utilizada para a criação do movimento;
-   Se mais de uma das naturezas selecionadas estiver cadastrada como Natureza Inversa mas nenhuma delas é "Default", o sistema não saberá qual Natureza Inversa escolher e o movimento será criado com o Status do TOTVS Colaboração como ‘Natureza Incompleta';
-   Se nenhuma das naturezas selecionadas estiver no cadastro de Natureza inversa, o movimento será criado com o Status do TOTVS Colaboração como ‘Natureza Incompleta'. 

É importante salientar que o Status TOTVS Colaboração 'Natureza Incompleta' não influencia no status do movimento que será criado conforme os parâmetros do Tipo de Movimento gerado, ou seja, mesmo estando com esse Status TOTVS Colaboração o movimento poderá gerar todas as demais integrações (financeira, contábil, estoque e de aprovações) se assim estiver parametrizado. 

Os movimentos gerados com o Status TOTVS Colaboração 'Natureza Incompleta' deverão ter seus CFOP informados através de edição manual. 

Uma natureza default pode ser sintética ou analítica, entretanto, poderá haver somente uma natureza analítica default de cada 'raiz' para uma mesma natureza sintética. 

Exemplo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/009.png?version=3&modificationDate=1452601595000&api=v2)

No nosso exemplo acima a natureza 1.102.04 não pode ser default para a natureza 5.101 já que outra natureza que possui a sintética idêntica (1.102.03) já foi definida como default para a mesma.

No TOTVS Gestão de Estoque, Compras e Faturamento, o cadastro das naturezas inversas***,*** está disponível em *“Cadastros > Fiscais > Natureza Fiscal > Anexos > Natureza Inversa para Importação de XML”*.

Você poderá acessar este Anexo a partir da visão de Naturezas ou a partir da tela de edição de uma Natureza específica.

Acesso a partir da visão de Naturezas

**
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-37-6.png?version=1&modificationDate=1534459025000&api=v2)

**

Acesso a partir da tela de edição da Natureza:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-38-46.png?version=1&modificationDate=1534459126000&api=v2)


O sistema irá verificar a Natureza Inversa do CFOP constante da NF-e, ou seja as Naturezas Inversas devem estar cadastradas nas naturezas sintéticas de Saída. Assim, selecione o CFOP sintético para o qual você irá cadastrar as Naturezas Inversas e clique em *"Anexos > Natureza Inversa para Importação de XML"*.

Será apresentada a tela onde você poderá cadastrar as Naturezas Inversas a serem vinculadas à natureza sintética selecionada.

Informe a Natureza Inversa correspondente, marque o campo caso a mesma vá ser uma natureza 'Default' para esta natureza sintética e clique em 'Inserir'.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-41-35.png?version=1&modificationDate=1534459295000&api=v2)

O sistema apresentará na tela a correspondência entre as naturezas inseridas, permitindo que as demais Naturezas Inversas dessa Sintética sejam incluídas, caso existam.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-44-50.png?version=1&modificationDate=1534459489000&api=v2)

Informe todas as naturezas inversas de cada natureza sintética de saída e clique em *"OK"* ou *"Salvar"* para que o sistema as grave.



### 1.2. Produtos

Para efetuar a inclusão de um movimento através do XML é necessário que seja feita a correlação entre os produtos constantes dos XML e os produtos constantes da sua base de dados, ou seja, dos produtos do fornecedor com os produtos do seu estoque.

A tradução dos produtos contidos no XML, que anteriormente era feita com base nas informações da tabela Produtos por Fornecedor, a partir de agora será feita através da tabela Produtos para Importação de XML.

Nesta nova estrutura, o usuário poderá definir um relacionamento de 1 x N, conforme exemplificamos abaixo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/013.png?version=1&modificationDate=1452620233000&api=v2)

Note que para o produto 100524 podemos ter N produtos vinculados como por exemplo os produtos Caneta Esferográfica Azul e Caneta Esferográfica Preta do fornecedor, correspondem a um só produto no estoque, Caneta Esferográfica.

As informações atualmente existentes na tabela Produtos por Fornecedor serão automaticamente inseridas na tabela Produtos por Fornecedor para Importação de XML através do atualizador da versão.

Para incluir novos produtos na tabela acesse *“Cadastros > Produtos > Anexos > Produtos para Importação de XML”.*

Como todos os demais Anexos do sistema, você poderá acessá-lo a partir da visão de Produtos ou a partir da tela de edição de determinado Produto.

Acesso através da visão de Produtos.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_12-50-26.png?version=1&modificationDate=1534521026000&api=v2)

Acesso a partir da tela de edição do produto:

*
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_12-51-39.png?version=1&modificationDate=1534521099000&api=v2)

*

Informe o 'Código do Fornecedor', o 'Código do Produto no Fornecedor' e se este for o único produto correspondente para este fornecedor, clique em *"Salvar"* ou *"OK"* para efetuar a gravação do registro ou no ícone *"Incluir"* caso queira gravar o registro e em seguida informar um novo fornecedor e código de produto correspondente para este produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/016.png?version=2&modificationDate=1452773148000&api=v2)


Caso o produto possua mais de um produto correspondente no mesmo fornecedor, informe um deles no 'Cód. do Produto no Fornecedor' e clique em "Inserir Múltiplos" para utilizar esse recurso facilitador que permitirá que você inclua vários registros na mesma tela e grave-os de uma só vez.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/017.png?version=2&modificationDate=1452773535000&api=v2)


No campo 'Código do Produto' informe o código do produto no fornecedor e em seguida clique em "Inserir", e assim sucessivamente até que todos os códigos no fornecedor tenham sido informados.

Após informar os códigos de todos os produtos correspondentes nesse fornecedor clique em *"Salvar"* ou *"OK"* para efetuar a gravação do registro ou no botão *"Incluir"* caso queira gravar o registro e em seguida informar um novo fornecedor e produto correspondente para este produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/018.png?version=1&modificationDate=1454323556000&api=v2)


Após finalizar a inserção dos Registros Múltiplos, caso opte por "Salvar" o sistema lhe apresentará em tela a mensagem informando os registros que foram gravados.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/023.png?version=1&modificationDate=1452773698000&api=v2)


Para encerrar a informação dos fornecedores e produtos correspondentes a este produto tecle "OK" e o sistema automaticamente sairá da tela de cadastro e exibirá a visão dos Produtos para Importação de XML cadastrados para o seu produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_12-55-28.png?version=1&modificationDate=1534521329000&api=v2)

Vale salientar que caso tenha(m) havido inclusão(ões) a partir da inserção de múltiplos registros será necessário clicar no botão "Atualizar Informações" para que os mesmos sejam apresentados.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_12-56-26.png?version=1&modificationDate=1534521386000&api=v2)

Caso nem todos os produtos constantes de um XML tenham sido vinculados com o respectivo produto da sua base de dados, você também poderá informar uma vinculação no momento da tradução do XML que é executada no processo *"Inclusão de Movimento através de XML - NF-e"*.



### 1.3. Unidades 

Da mesma forma que com os produtos, para efetuar a inclusão via XML é necessário que seja feita a correlação entre as unidades de medida dos produtos constantes dos XML, ou seja das unidades do fornecedor com as unidades utilizadas na sua empresa.

O sistema realizará a tradução do campo Unidade de Medida ‘CODUND’ através da tabela ‘TUNDCFOCOLAB’, onde será possível cadastrar o código da unidade no fornecedor, e informar a unidade correspondente no sistema, podendo assim evitar a intervenção manual do usuário durante o processo de recebimento.

Para informar a correlação entre as unidades vá em *“Cadastros > Mais... > Tabelas Auxiliares > Unidade > Anexos > Unidades para Importação de XML”.*

Você poderá acessar este Anexo exclusivamente da visão de Unidades.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-48-51.png?version=1&modificationDate=1534459731000&api=v2)

O sistema abrirá o Anexo do lado direito da tela de visão das Unidades.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-51-34.png?version=1&modificationDate=1534459893000&api=v2)


Clique no botão "Incluir" para inserir as Unidades dos Fornecedores que correspondem à sua Unidade selecionada.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-52-32.png?version=1&modificationDate=1534459951000&api=v2)


Informe ou selecione o 'Fornecedor' (código ou nome), informe o  'Código da Unidade no Fornecedor' e se esta for a única correspondência para esta unidade, clique em *"Salvar"* ou *"OK"* para efetuar a gravação do registro. Caso existam outros fornecedores para o qual essa unidade será utilizada clique no ícone *"Incluir"* para gravar o registro e em seguida informar um novo fornecedor e código de unidade correspondente para esta unidade.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-52-59.png?version=1&modificationDate=1534459979000&api=v2)


Para encerrar a informação dos fornecedores e unidades correspondentes a esta unidade tecle *"OK"* e o sistema automaticamente sairá da tela de cadastro e exibirá a visão  das Unidades para Importação de XML cadastradas.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-54-58.png?version=1&modificationDate=1534460098000&api=v2)

É importante salientar que caso o sistema não localize a unidade correspondente você poderá informá-la na tradução do XML que é executada no processo *"Inclusão de Movimento através de XML - NF-e"*.

Agora que já falamos sobre os cadastros necessários, vamos falar sobre o processo de importação do XML.



### 2\. Parametrização

O processo *"Inclusão de Movimento através de XML - NF-e"* está disponível na visão de Movimentos (*"Compras > Recebimento de Materiais > Seleção do Tipo de Movimento e Filial > Processos"*) e na tela de cadastro dos XML (*"Compras > Importação de Arquivos XML - Cadastro XML > Processos"*), sendo que o sistema se comportará de forma diferente dependendo da tela de onde o processo foi acionado, conforme detalharemos a seguir:

-   Caso você acesse o processo diretamente da visão de movimentos  (*"Compras > Recebimento de Materiais > Seleção do Tipo de Movimento e Filial > Processos"*) o sistema entenderá que deve ser gerado um movimento do tipo que você informou ao entrar nesta tela, ou seja, o movimento será gerado de acordo com os parâmetros do tipo de movimento corrente;


-   Caso você acesse o processo na tela de cadastro do XML (*"Compras > Importação de Arquivo XML - Cadastro XML > Processos"*) a definição do tipo de movimento a ser gerado será através da fórmula informada no campo "Fórmula Tipo Mov. Recebimento NF-e".  Assim, optando por incluir o XML a partir desta tela o preenchimento da fórmula passa a ser obrigatório e iremos detalhá-lo a seguir:

    Em  *“Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Integrações > Fiscal > Parâmetros por Filial > Importação/Envio de Arquivos 2/2”,* deverá ser preenchido por filial o campo "Fórmula Tipo Mov. p/Recebimento NF-e**"**.

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-59-33.png?version=1&modificationDate=1534460373000&api=v2)


    Este novo parâmetro é do tipo fórmula, e assim, através do mesmo, o usuário poderá implementar uma regra específica para buscar o tipo de movimento que será utilizado tanto no recebimento automático como no recebimento manual das NF-e de cada filial.

    Essa fórmula será executada para cada XML a ser recebido.

    Foram criadas quatro novas funções de fórmula para auxiliar na criação dessa regra, são elas:

    -   TABXMLCOLAB - Retorna o valor de um campo da tabela de XMLs do Totvs Colaboração (TNFEENTRADA);
    -   DADOSXMLCOLAB - Retorna o valor de uma TAG de um XML;
    -   QTDTAGSXMLCOLAB - Retorna o número de vezes que uma determinada Tag aparece no XML;
    -   TABPRDCOLAB - Retorna o conteúdo de um campo do cadastro dos produtos vinculados aos itens constantes do XML.  

    Explicaremos a seguir a sintaxe de cada uma dessas funções bem como daremos exemplos de utilização de todas elas.



    -   TABXMLCOLAB ('NomeCampo', 'TipoRetorno') onde:
        -   NomeCampo = Nome do Campo da Tabela TNFEENTRADA. Podemos citar como campos dessa tabela o código da coligada (CODCOLIGADA), o código da filial (CODFILIAL), o código da coligada do fornecedor (CODCOLCFO), o código do fornecedor (CODCFO), a data de emissão (DATAEMISSAO), etc.;
        -   TipoRetorno = Informa o tipo de retorno relativo ao campo informado em NomeCampo, se S (string), V (valor), D (data) ou I (inteiro). 

    Exemplo de fórmula de seleção do tipo de movimento utilizando a função TABXMLCOLAB:

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/005.png?version=2&modificationDate=1453202335000&api=v2)

    Neste exemplo o sistema irá verificar na tabela TNFEENTRADA (tabela que contém os XML importados) o registro gerado pelo XML e caso o código do fornecedor seja F00017 o movimento será gerado com o tipo 1.2.27, caso contrário o tipo do movimento será 1.2.20.



    -   DADOSXMLCOLAB ('CaminhoTAG', 'NamespaceXML') onde:
        -   CaminhoTAG = Caminho da TAG desejada, separado por barra ( / ). Exemplo: '/nfeProc/NFe/infNFe/det/prod/CFOP' para o CFOP do produto do XML;
            -   IMPORTANTE: O Caminho da Tag deve ser informado exatamente como consta no XML, esta pesquisa considera letras maiúsculas e minúsculas (Case Sensitive).
        -   NamespaceXML = [http://www.portalfiscal.inf.br/nfe](http://www.portalfiscal.inf.br/nfe)

    Exemplo de fórmula de seleção do tipo de movimento utilizando a função DADOSXMLCOLAB:

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/006a%20-%20C%C3%B3pia.png?version=1&modificationDate=1457636982000&api=v2)

    Quando a tag possuir índice, basta informá-lo o entre colchetes (\[ \]).

    No exemplo acima o sistema irá retornar a informação da TAG CFOP do primeiro item da NFe, já que não informamos nenhum índice.

    Veja abaixo um exemplo da mesma fórmula retornando o CFOP do 2º item da NFe:

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159952/100.png?version=1&modificationDate=1469816566000&api=v2)



    -   QTDTAGSXMLCOLAB ('CaminhoTAG', 'NamespaceXML') onde:
        -   CaminhoTAG = Caminho da TAG desejada, separado por barra ( / ). Exemplo: '/nfeProc/NFe/infNFe/det' para o produto do XML;
        -   NamespaceXML = [http://www.portalfiscal.inf.br/nfe](http://www.portalfiscal.inf.br/nfe)

    Veja abaixo um exemplo de fórmula de seleção do tipo de movimento utilizando as funções QTDTAGSXMLCOLAB e DADOSXMLCOLAB:

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/098.png?version=1&modificationDate=1458067609000&api=v2)

    No exemplo acima através da função QTDTAGSXMLCOLAB o sistema irá identificar o número de itens constantes do XML. Após isso, através da função DADOSXMLCOLAB, irá percorrer todos os itens do XML e caso exista algum cujo CFOP seja 5.102 o tipo de movimento gerado será o 1.2.12.

    Assim, utilizando em uma mesma fórmula estas duas funções (QTDTAGSXMLCOLAB e DADOSXMLCOLAB), o sistema irá verificar determinado dado de todos os itens constantes de um XML.



    -   TABPRDCOLAB ('CodigoProdutoColab', 'NomeCampo', 'TipoRetorno') onde:
        -   CódigoProdutoColab = Código do Produto na tabela "Produtos para Importação de XML";
        -   NomeCampo = Nome do campo da tabela de Produtos;
        -   TipoRetorno = Informa o tipo de retorno relativo ao campo informado em NomeCampo, se S (string), V (valor), D (data) ou I (inteiro). 

    Veja abaixo um exemplo de fórmula de seleção do tipo de movimento utilizando as funções QTDTAGSXMLCOLAB, DADOSXMLCOLAB e TABPRDCOLAB:

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/099.png?version=1&modificationDate=1458071338000&api=v2)

    Neste exemplo, em primeiro lugar o sistema utilizará a função QTDTAGSXMLCOLAB para identificar o número de itens constantes do XML, logo depois, através da função DADOSXMLCOLAB irá percorrer todos os itens do XML e através da função TABPRDCOLAB irá identificar na tabela Produtos para Importação de XML quais são os produtos vinculados aos itens do XML. Após verificar sua tabela de produtos e através  e irá analisar se algum deles possui a Tabela de Classificação 1 preenchida com 05. Em caso afirmativo o sistema irá gerar o movimento com o tipo 1.2.12, caso contrário o movimento será do tipo 1.2.11.

    Assim, utilizando em uma mesma fórmula estas três funções (QTDTAGSXMLCOLAB, DADOSXMLCOLAB e TABPRDCOLAB), o sistema irá verificar determinado dado de todos os itens constantes de um XML e ainda irá compará-lo com determinado campo do seu cadastro de Produtos.


    Caso para algum XML através da fórmula não seja possível definir o seu tipo de movimento, o XML será criado na base de dados com o status 'Inconsistente' e poderá ser recebido manualmente.

    Poderão ser definidas fórmulas diferentes para cada filial da empresa.



### 3\. Importação e Gravação do XML

No processo de importação e gravação do XML o sistema irá executar os seguintes procedimentos:



### 3.1. Importação de Arquivos XML

Esse Job  é um Job Global, responsável por buscar os documentos armazenados na pasta de Recebimento (parametrizados em *Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Integrações > Fiscal > Dados Fiscais* > *Importação/Envio de Arquivo XML > 'Diretório Padrão para Importação dos Arquivos XML*') e distribuí-los por coligada. Neste momento, nenhuma validação é feita. Após a execução desse Job, os documentos lidos são exibidos no *“Monitor de Arquivos XML”* com o status **‘**Pendente’,  aguardando a ação do segundo Job.

O ideal é que a execução deste job seja agendada, assim, periodicamente o mesmo será executado de forma automática, buscando os XML disponibilizados.

Informamos que somente serão importados os XML que obedeçam totalmente a todos os requisitos do schema definido pela SEFAZ.

Para maiores detalhes acesse [http://tdn.TOTVS.com/display/public/LRM/CLB\_0002\_Jobs](https://tdn.totvs.com/display/public/LRM/CLB_0002_Jobs)



### 3.2. Serviço de Consulta de Arquivo XML

Esse Job é responsável por validar o arquivo XML do documento enviado, de acordo com o tipo de documento em questão (CT-e, NF-e, NFS-e, etc.), através da chamada do serviço especifico para cada um deles. Serão verificados todos os documentos lidos pelo 1º Job. Caso o documento esteja válido, o registro do arquivo é excluído do monitor, e passa a ser exibido na tela de cadastro dos XML (*"Compras > Importação de Arquivo XML - Cadastro XML"*), indicando que o mesmo foi incluído no sistema com sucesso.

O ideal é que a execução deste job seja agendada, assim periodicamente o mesmo será executado de forma automática.

Caso ocorra algum problema o XML será criado na base de dados com o status 'Inconsistente'. Para verificar o erro ocorrido, basta um duplo clique no registro para que seja exibido o seu Log onde o problema será demonstrado. Quando o arquivo está Inconsistente, é necessário corrigir a causa do erro para poder tentar incluí-lo no sistema. Após a correção do erro basta alterar o seu status para 'Pendente', através do processo *“Alterar status do arquivo”* e o Job tentará recebê-lo automaticamente em sua próxima execução. 

Estando o XML validado ele será incluído no cadastro de XML em *"Compras > Importação de Arquivo XML - Cadastro XML"*.



 

### 4\. Inclusão de Movimento Através de XML - NF-e 

Conforme já dissemos o processo de Inclusão Manual de Movimento a partir de um XML  poderá ser acessado tanto a partir da visão dos movimentos de entrada como da tela do cadastro de XML. Detalharemos cada um deles a seguir.



Para acessar o processo *"Inclusão de Movimento Através de XML - NF-e"* da visão de movimentos basta ir em *"Compras > Recebimento de Materiais > Seleção do Tipo de Movimento e Filial > Processos > Inclusão de Movimento através de XML - NF-e".*

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_13-21-24.png?version=1&modificationDate=1534522884000&api=v2)




O sistema irá lhe apresentar a tela de tradução do XML para que você informe quais são os XML cujos movimentos você deseja gerar. Para incluir os XML no processo basta clicar no botão *"Adicionar Nota"*.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_13-23-16.png?version=1&modificationDate=1534522996000&api=v2)



O sistema lhe apresentará a tela onde você poderá filtrar os XML desejados, assim, informe o critério para seleção dos XML e atendendo ao mesmo, o sistema apresentará todos os XML válidos, do tipo NF-e, cujo destinatário é a filial informada na entrada da visão de movimentos e que ainda não geraram movimento. Marque os XML cujos movimentos você deseja gerar.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/075.png?version=2&modificationDate=1454695105000&api=v2)

Você poderá selecionar vários XML para realizar suas devidas traduções, sendo que os mesmos serão apresentados ordenados através do seu ID (identificador do XML) e número da NF-e em um formato de lista. Ao navegar entre os registros, o sistema atualizará automaticamente as informações contidas nas abas *“Identificação”, “Tradução de Itens” e “Tributação”.*

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-18-14.png?version=1&modificationDate=1534529893000&api=v2)



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-19-49.png?version=1&modificationDate=1534529989000&api=v2)




 Caso queira excluir algum movimento do processo, basta selecioná-lo e clicar no botão "Remover Movimento". 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-21-56.png?version=1&modificationDate=1534530116000&api=v2)



É importante salientar que quando o processo de Inclusão de Movimento Através do XML for acessado a partir da visão de movimentos, os novos movimentos serão gerados com o tipo de movimento corrente, ou seja, o tipo de movimento informado na entrada da visão.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-25-42.png?version=1&modificationDate=1534530342000&api=v2)




Para acessar o processo *"Inclusão de Movimento Através de XML - NF-e"* a partir do cadastro de XML vá em *"Compras > Importação de Arquivo XML - Cadastro XML" ,* selecione os XML cujos movimentos serão gerados e execute o processo *"Inclusão de Movimento através de XML *\- NF-e*".*

 *![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-34-32.png?version=1&modificationDate=1534530872000&api=v2)*

Neste caso você poderá selecionar vários XML para realizar suas devidas traduções, inclusive de filiais diferentes, desde que o status dos mesmos seja 'Válido', o tipo dos mesmos seja 'NF-e' e que ainda não tenham gerado movimento. Tais XML serão apresentados na tela de tradução ordenados através do seu ID (identificador do XML) e número da NF-e em um formato de lista. Ao navegar entre os registros, o sistema atualizará automaticamente as informações contidas nas abas *“Identificação”, “Tradução de Itens” e “Tributação”.*

Além disso, da mesma forma que na visão de Movimentos aqui também você poderá optar por não selecionar nenhum XML específico e quando o sistema apresentar a tela de tradução você poderá informar quais são os XML cujos movimentos você deseja gerar, bastando para isso clicar no botão "Adicionar Nota", só que, neste caso, o sistema apresentará para sua seleção somente os XML que são da filial informada no contexto do sistema.

É importante salientar também que quando o processo de Inclusão de Movimento Através do XML for acessado a partir da tela de cadastro de XML, o tipo de movimento dos novos movimentos a serem criados será automaticamente definido pelo sistema com base na fórmula informada no campo 'Fórmula Tipo Mov. Para Recebimento de NF-e dos parâmetros de cada filial. Veja maiores detalhes no item 2 deste documento.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-39-50.png?version=1&modificationDate=1534531190000&api=v2)

Os demais dados e procedimentos da "Inclusão de Movimento Através de XML - NF-e" independem de onde o processo foi acionado e iremos descrevê-los a seguir.



A aba *“Identificação”*, apresentará as informações gerais do movimento selecionado.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-41-52.png?version=1&modificationDate=1534531312000&api=v2)

Serão apresentados os seguintes dados: 

-   Destinatário / Filial – Filial do movimento;
-   Emitente / Fornecedor – Fornecedor dos produtos;
-   Chave de Acesso da NF-e;
-   Série da NF-e;
-   Número do Documento - Número da NF-e;
-   Data de Emissão da NF-e;
-   Tipo de Movimento no qual a NF-e foi inserida.

Estes dados, em sua maioria, são importados do XML e nenhum deles poderá ser alterado.

Será possível vincular o XML a um movimento de pedido existente na base de dados, bastando para isso que você marque o campo 'Receber Pedido' e clique no ícone "Incluir" para informar o(s) pedido(s) que será(ão) recebido(s) para este XML.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-43-26.png?version=1&modificationDate=1534531406000&api=v2)

O sistema apresentará uma tela de filtros para que você selecione o(s) pedido(s) a ser(em) vinculado(s) ao movimento, sendo que o sistema filtrará apenas os pedidos que geram movimentos do tipo de movimento que será criado.

No nosso caso, como o movimento que será gerado é do tipo 1.2.12, somente os pedidos que podem ser faturados para este tipo de movimento estarão disponíveis para realizar o vínculo.

Marque os pedidos que serão vinculados com a NF-e e clique em "OK".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/004.png?version=1&modificationDate=1457375422000&api=v2)

O sistema irá associar os pedidos selecionados ao movimento que está sendo gerado e os apresentará na tela.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-52-13.png?version=1&modificationDate=1534531933000&api=v2)

Ao ser(em) informado(s) o(s) pedido(s), o sistema imediatamente efetuará o vínculo entre a NF-e e o(s) mesmo(s), caso as informações de ambos sejam correspondentes. 

Este vínculo é feito com base no Produto informado no cadastro "**Produtos para Importação de XML**". Caso seja identificado um produto com o mesmo IDPRD na lista de pedidos, o sistema cria o relacionamento. Quando existem vários pedidos para o mesmo produto da NF-e, o sistema cria o relacionamento para cada um utilizando a seguinte regra:

-   Ao criar o primeiro relacionamento com o item do pedido, o sistema automaticamente verifica se ainda existe saldo do produto em questão para a realização de novos vínculos. Caso exista, é realizada uma busca por itens de pedido que possuam o **mesmo** preço unitário do item já vinculado.
-   Em situações onde o preço do(s) produto(s) no(s) pedido(s) possam variar, foi criada a possibilidade de utilizar o recurso de tolerância, ou seja, pode ser definido no cadastro de produto uma tolerância inferior e/ou superior para o preço. Desta forma o sistema utilizará esta margem na pesquisa pelo(s) produto(s) no(s) pedido(s). Segue configuração necessária:

O Tipo de movimento de NF-e "**movimento de destino**" deve ser parametrizado para utilizar tolerância por "Preço" ou "Quantidade e Preço".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-1-18_11-57-36.png?version=1&modificationDate=1516287476000&api=v2)

No cadastro do produto devem ser preenchidos os campos Tolerância Preço (%) → Inferior e/ou Superior. Lembre-se que este campo se refere ao percentual que será utilizado no cálculo.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-1-18_11-54-56.png?version=1&modificationDate=1516287314000&api=v2)

**Importante:** 

-   A tolerância é um recurso já existente para o processo de faturamento, ou seja, deve ser analisado se o mesmo pode ser utilizado.
-   Durante o recebimento da NF-e este percentual será aplicado ao preço unitário do item do pedido relacionado ao produto da nota. Exemplo:

    Pedidos
    1º Pedido - Produto X, Quantidade 1 UN, Preço R$ 10,00
    2º Pedido - Produto X, Quantidade 1 UN, Preço R$ 10,96
    3º Pedido - Produto X, Quantidade 1 UN, Preço R$ 10,96
    4º Pedido - Produto X, Quantidade 1 UN, Preço R$ 10,97
    5º Pedido - Produto X, Quantidade 1 UN, Preço R$ 11,00

    Nota Fiscal
    Produto X, Quantidade 5 UN, Preço R$ 10,50

    Caso **não** seja utiliza a tolerância, o sistema vai relacionar o item da nota ao Item do primeiro pedido, ficando ainda um saldo de 4 UN a serem traduzidas.
    Caso **seja** utilizada uma tolerância superior e inferior de 10%,   o sistema realizará a pesquisa pelos produtos utilizando a seguinte margem:

    1º Pedido - Produto X, Quantidade 1 UN, Preço entre R$ 9,00 e R$ 11,00 
    2º Pedido - Produto X, Quantidade 1 UN, Preço entre R$ 9,864 e R$ 12,056 
    3º Pedido - Produto X, Quantidade 1 UN, Preço entre R$ 9,864 e R$ 12,056 
    4º Pedido - Produto X, Quantidade 1 UN, Preço entre R$ 9,873 e R$  12,067
    5º Pedido - Produto X, Quantidade 1 UN, Preço entre R$ 9,90 e R$ 12,10 

    Desta forma todos os itens dos pedidos serão relacionados ao produto da NF-e.



Outros pedidos de compras poderão ser adicionados a qualquer momento.

Na aba *"Identificação"* será informado ainda se a tela de edição do movimento será aberta ao fim do processo e se consequentemente o movimento poderá ser editado nesse momento.

Assim, caso queira optar por abrir o movimento automaticamente logo após a sua tradução basta deixar que o campo 'Abrir a Edição do Movimento', permaneça marcado, visto que o mesmo já virá assinalado por default.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-53-0.png?version=1&modificationDate=1534531980000&api=v2)

Caso este campo seja desmarcado, o sistema efetuará a inclusão através do XML  e retornará para a tela do cadastro de XML ou para a visão de Movimentos conforme a tela de onde o processo foi acionado.

Vejamos as demais abas do processo:

Na aba *"Tradução de Itens"* serão apresentados os dados relativos aos itens da NF-e.

Caso o XML não esteja vinculado a um pedido o sistema apresentará além dos dados do item no XML, a Unidade para Importação de XML, o Código e o Nome do Produto para Importação de XML, ou seja os dados do produto correspondente em sua base de dados. O sistema verificará essas informações nas tabelas "Unidades para Importação de Arquivo XML" e "Produtos para Importação de Arquivo XML".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-23-17.png?version=1&modificationDate=1534533796000&api=v2)



Caso ao verificar estas tabelas o sistema não encontre os dados correspondentes aos produtos constantes do XML, você poderá neste momento efetuar manualmente a tradução dos itens e as informações fornecidas por você serão automaticamente inseridas nestas tabelas. 

Para informar qual é o produto da sua base de dados que é correspondente ao produto constante do XML clique no campo 'Produto Tradução' e clique na seta da lista de opções. O sistema abrirá um lookup onde você poderá selecionar o produto desejado através da informação do código ou do nome do mesmo.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-25-22.png?version=1&modificationDate=1534533921000&api=v2)

Conforme a informação fornecida o sistema lhe apresentará a lista dos produtos disponíveis na sua base de dados e que atendem à seleção informada.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-27-0.png?version=1&modificationDate=1534534019000&api=v2)

O produto selecionado irá para a tela de *"Tradução de Itens"* e automaticamente será gravado pelo sistema na tabela *"Produtos para Importação de XML"*.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-28-14.png?version=1&modificationDate=1534534094000&api=v2)

O mesmo processo poderá ser efetuado para as unidades de medida existentes no XML e que não tenham sido traduzidas pelo sistema.

Além de incluir produtos e unidades que não foram traduzidos você poderá alterar os dados que o sistema trouxe na tradução optando por um outro produto ou unidade diferentes daqueles indicados pelo sistema, bastando para isso clicar nos campos 'Unidade Tradução' ou 'Produto Tradução' e fornecer as informações desejadas.

Caso o XML esteja vinculado a pedido(s) os campos 'Código do Produto de Tradução' e 'Produto Tradução' permanecerão em branco e o sistema apresentará além dos dados do item no XML, os campos relativos ao Pedido. Estes dados também serão preenchidos com base no conteúdo das tabelas "Unidades para Importação de Arquivo XML" e "Produtos para Importação de Arquivo XML".

Assim, caso o campo "Receber Pedido" esteja marcado, os quatro campos referentes ao pedido (Número do Pedido, Código do Produto do Pedido, Número Sequencial do Item no Pedido e o Nome do Produto do Pedido) serão exibidos na aba *"Tradução de Itens".*

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-30-35.png?version=1&modificationDate=1534534234000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-34-48.png?version=1&modificationDate=1534534487000&api=v2)

Caso durante o processo de Inclusão do Movimento via XML, o campo "Receber Pedido" seja, em algum momento, desmarcado, os campos referentes ao pedido (Número do Pedido, Código do Produto do Pedido, Número Sequencial do Item no Pedido e o Nome do Produto do Pedido) não mais serão apresentados em tela, já que não haverá a necessidade de utilização dos mesmos.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-36-17.png?version=1&modificationDate=1534534577000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-38-35.png?version=1&modificationDate=1534534714000&api=v2)

Você poderá alterar o produto do pedido que foi informado pelo sistema, bastando para isso, selecionar o item cujo produto do pedido deseja alterar, clicar no campo 'Produto no Pedido' e clicar na seta da lista de opções para que os produtos dos pedidos vinculados ao XML sejam apresentados. 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-42-26.png?version=1&modificationDate=1534534945000&api=v2)


Clique então no botão do lookup do produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/044.png?version=1&modificationDate=1453977260000&api=v2)


O lookup exibirá o(s) produto(s) do(s) pedido(s) de compra vinculado(s) ao XML, e que ainda possuem saldo a receber, para que você selecione um deles.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-43-25.png?version=1&modificationDate=1534535005000&api=v2)

Se nesse momento ainda existir algum item no XML cuja tradução ainda não consta da tabela *"Produtos para Importação de XML"* o sistema não conseguirá localizá-lo nos pedidos vinculados, mas você poderá informar a tradução diretamente nesta tela.

Caso selecione o produto a partir do campo  'Produto Tradução' o sistema exibirá todos os registros da base para que você possa definir qual produto será utilizado na amarração, já se o produto existir em um dos pedidos vinculados clique no campo 'Produto do Pedido' e o lookup exibirá todos os produtos do(s) pedido(s) de compra vinculado(s) ao XML, e à medida em que a tradução estiver sendo realizada, o sistema irá consumir o saldo dos pedidos até que os mesmos sejam zerados.

Outro recurso disponível na aba *"Tradução de Itens"* é o botão "Múltiplos".

O botão Múltiplos poderá ser utilizado quando o pedido selecionado pelo sistema não possuir quantidade suficiente para realizar a tradução do produto.

Assim, ao clicar no botão "Múltiplos", será criada uma réplica da linha selecionada para que o produto possa ser associado a outro registro.

Vamos considerar o nosso exemplo, onde o produto '6.0.0.01.8373'  no XML tem a quantidade 1,00, tendo sido 0,50 solicitada no pedido 26790 e mais 0,50 solicitada no pedido 111111 sendo que ambos os pedidos foram vinculados ao XML.

Na tela de *"Tradução de Itens"* o sistema relacionará o item sempre ao primeiro pedido vinculado ao XML.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-44-15.png?version=1&modificationDate=1534535055000&api=v2)


Poderemos informar então que a quantidade restante no XML foi consumida no pedido 111111.

Para isso selecione o produto e clique no botão "Múltiplos".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_19-55-35.png?version=1&modificationDate=1534546535000&api=v2)

No registro já existente o sistema irá alterar a quantidade recebida para o produto, informando a quantidade total do pedido vinculado ao item, e irá inserir um novo registro com o produto e sua quantidade restante.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_19-57-3.png?version=1&modificationDate=1534546623000&api=v2)

A partir daí você irá proceder da mesma forma que na alteração do pedido, ou seja, clique no campo 'Produto no Pedido' e clique na seta da lista de opções.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_19-58-43.png?version=1&modificationDate=1534546723000&api=v2)

Clique então no ícone do lookup do produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_20-0-11.png?version=1&modificationDate=1534546811000&api=v2)

 O lookup exibirá o(s) produto(s) do(s) pedido(s) de compra vinculado(s) ao XML, e que ainda possuem saldo a receber para que você selecione um deles.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_20-0-53.png?version=1&modificationDate=1534546853000&api=v2)

Ao ser selecionado o pedido, seus dados automaticamente irão para a aba *"Tradução de Itens".*

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_20-4-39.png?version=1&modificationDate=1534547081000&api=v2)

Na aba *“Tributação de Itens”* serão exibidos todos os tributos parametrizados no tipo de movimento do movimento que será gerado.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_20-5-6.png?version=1&modificationDate=1534547106000&api=v2)

Na parte superior da tela, em *“Tributação da Nota”* serão carregadas as informações relativas aos tributos do movimento.

Na parte inferior da tela a visão contida no grupo *“Tributação dos Produtos”* será responsável por exibir os impostos dos produtos (itens de movimento).

O preenchimento dos valores relativos aos tributos (base de cálculo, alíquota e valor) será efetuado obedecendo à configuração do campo 'Busca Valores TOTVS Colab' do respectivo tipo de movimento.

Para verificar a sua configuração vá em *"Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > 04.06 - Gestão Compras > 04.06.05 - Recebimentos de Materiais"* e no tipo de movimento desejado consulte este campo em *"Fis - Tributação - Item" e 'Fis - Tributação - Movimento"*. 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/050.png?version=1&modificationDate=1453989964000&api=v2)

O sistema informará os valores conforme o preenchimento do campo 'Busca Valores TOTVS Colab' com uma das opções a seguir:

-   XML: Esta opção deverá ser selecionada caso deseje que os valores do tributo sejam aqueles recebidos do arquivo XML da NF-e, sem a necessidade de comparação com o tipo de movimento;


-   XML - Calcular valor do ICMS ST: Disponível somente para o tributo ICMS ST. Esta opção deverá ser selecionada caso deseje que os valores do tributo sejam aqueles recebidos do arquivo XML da NF-e, sem a necessidade de comparação com o tipo de movimento. Porém, ao selecionar esse opção, o sistema irá calcular o valor do ICMS ST multiplicando Base de Cálculo do ICMS ST x Aliquota do ST - valores esses que serão selecionados do XML.

             Exemplo: Base de Cálculo do ICMS ST no XML = 20 e Aliquota do ICMS ST no XML = 18%. Dessa forma, o tributo seria carregado no Movimento com Valor do ICMS ST = 3,6

-   Tipo de Movimento - Não comparar com XML: Esta opção deve ser selecionada caso deseje que todas as informações do tributo sejam calculadas/buscadas pelo sistema conforme a parametrização do tipo de movimento, sem a necessidade de comparação com os valores advindos do arquivo XML;


-   Tipo de Movimento - Comparar com XML: Esta opção deve ser selecionada caso deseje que todas as informações do tributo sejam calculadas/buscadas pelo sistema, mas elas devem ser comparadas com as informações advindas do XML. Caso tenha optado por executar esse processo sem abrir a edição do movimento, caso existam diferenças entre os tributos calculados e os constantes do XML, ao final da execução o sistema irá lhe apresentar uma mensagem com essa informação, bastando que você vá à edição do movimento se quiser alterar os valores que foram calculados. Já caso tenha optado por executar esse processo e 'Abrir a Edição do Movimento' quando for solicitada a gravação do movimento o sistema abrirá a tela com a diferença dos tributos caso existam. Detalharemos essa opção mais a frente.
-   XML - Incluir Valor do ICMS Próprio no ST: Disponível somente para o tributo ICMS ST. Esta opção deverá ser selecionada caso deseje que os valores do tributo sejam aqueles recebidos do arquivo XML da NF-e, sem a necessidade de comparação com o tipo de movimento. Porém, ao selecionar esse opção, o sistema somará o Valor do ICMS Próprio, ao Valor do ICMS ST no momento da importação do XML - valores esses que serão selecionados do XML. Exemplo: Valor do ICMS no XML = 5 e Valor do ICMS ST no XML = 12. Dessa forma, o tributo seria carregado no Movimento com Valor do ICMS = 5 e o Valor do ICMS ST = 17.

Para finalizar a execução da rotina *"Inclusão de Movimento através de XML - NF-e"* realizando a inclusão do movimento, basta em qualquer uma das telas do processo clicar no botão 'Executar'.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_20-8-17.png?version=1&modificationDate=1534547298000&api=v2)

Se o campo 'Abrir Edição do Movimento' não estiver marcado o sistema efetuará a execução do processo.

Caso tenha optado por não 'Abrir a Edição do Movimento' após a execução do processo o sistema apresentará a tela com o resultado do processamento:



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_20-14-10.png?version=1&modificationDate=1534547650000&api=v2)

Se os tributos do tipo de movimento estiverem parametrizados como "Tipo de Movimento - Comparar com XML" e for encontrada alguma diferença entre os valores calculados pelo sistema e os valores constantes do XML o movimento será incluído normalmente mas ao final do processo o sistema avisará e apresentará o identificador do movimento onde a divergência foi detectada.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_20-15-5.png?version=1&modificationDate=1534547706000&api=v2)

Caso tenha optado por 'Abrir a Edição do Movimento', ao executar o processo, o sistema automaticamente abrirá a tela do movimento que está sendo gerado.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/095.png?version=1&modificationDate=1455894249000&api=v2)



Você poderá acessar as abas do movimento e conforme suas permissões de acesso poderá incluir dados ou alterar os dados existentes.

Após finalizar a visualização e/ou edição do movimento basta clicar em *"Salvar"* ou em *"OK"*.

Caso no tipo de movimento do movimento que está sendo gerado o campo 'Busca Valores TOTVS Colab' dos tributos esteja configurado para "Tipo de Movimento - Comparar com XML" o sistema abrirá a tela com as diferenças dos tributos caso existam.  

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/102.png?version=1&modificationDate=1470074543000&api=v2)

Caso seja necessário basta clicar na coluna 'Valor Correto' e alterar para o valor constante do XML e clicar em Salvar.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/104.png?version=1&modificationDate=1470075885000&api=v2)


Caso vá manter os valores que foram calculados pelo sistema conforme parametrizado no tipo de movimento basta clicar em 'Salvar' e o sistema finalizará a execução do processo efetuando a gravação do movimento.

Em caso de posterior exclusão do movimento de NF-e criado, o XML em questão será desvinculado do movimento e voltará ao status anterior à inclusão, para que seja possível vincular um novo movimento ao mesmo. 



**Rotina**

**Tipo de Operação**

**Opção de Menu**

**Regras de Negócio**

Criação de Fórmulas

Alteração

Serviços Globais > Fórmulas > TOTVS Gestão de Estoque, Compras e Faturamento

Conforme definições constantes deste documento

Definições de Cli/For para Importação de XML

Criação

Cadastros > Mais... > Tabelas Auxiliares > Definições de Cli/For para Importação de XML

Conforme definições constantes deste documento

Inclusão de Movimento através de XML - NF-e

Criação

Compras > Importação de Arquivo XML - Cadastro XML > Processos > Inclusão de Movimento através de XML - NF-e

Conforme definições constantes deste documento

Natureza Inversa para Importação de XML

Criação

Cadastros > Natureza Fiscal > Anexos > Natureza Inversa para Importação de XML

Conforme definições constantes deste documento

Parâmetros por Filial

Alteração

Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Integrações > Fiscal > Dados Fiscais > Parâmetros por Filial

Conforme definições constantes deste documento

Produtos para Importação de XML

Criação

Cadastros > Produtos > Anexos > Produtos para Importação de XML

Conforme definições constantes deste documento

Unidades para Importação de XML

Criação

Cadastros > Mais... > Tabelas Auxiliares > Unidade > Anexos > Unidades para Importação de XML

Conforme definições constantes deste documento

## Tabelas Utilizadas:

-   DCFOP - Naturezas Fiscais (CFOP);

-   DREGRAICMS - Regras de ICMS;

-   DREGRAIPI - Regras de IPI;
-   GFORMULA - Fórmulas;
-   TDEFINICOESCFOCOLAB - Definições de Cli/For - Totvs Colaboração;
-   TITMMOV - Itens de Movimento;
-   TLOGCOMPIMPOSTOCOLAB - Diferenças de Tributos Calculados x Tributos XML;
-   TMOV - Movimentos;
-   TNATUREZACOLAB - Naturezas Inversas Totvs Colaboração;
-   TNFEENTRADA - Notas Fiscais (NF-e) Recebidas;
-   TPARFILIAL - Parâmetros da Filial;
-   TPRDCFOCOLAB - Produtos Totvs Colaboração;
-   TTRBMOV - Tributos do Movimento;
-   TUNDCFOCOLAB - Unidades Totvs Colaboração;
-   TXMOCOLAB - XML Recebidos pelo Totvs Colaboração.



 **Este documento é material de especificação dos requisitos de inovação, trata-se de conteúdo extremamente técnico.**                                                             

![Imagem](https://centraldeatendimento.totvs.com/plugins/servlet/confluence/placeholder/unknown-macro?name=rate&locale=en_US&version=2)

---

# 1277238 MATFATCMPCRM01-1120 DT Recebimento de CT-e através de XML TOTVS Colaboração

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=322150273](https://tdn.totvs.com/pages/releaseview.action?pageId=322150273)
> **Domínio:** TDN (TOTVS Developer Network)

---

 **Este documento é material de especificação dos requisitos de inovação, trata-se de conteúdo extremamente técnico.**                                                             

## Informações Gerais

**Especificação**

**Produto**

TOTVS Gestão de Estoque, Compras e Faturamento

**Módulo**

Recebimento de Materiais

**Segmento Executor**

Construção e Projetos

**Chamado**

MATFATCMPCRM01-1120

**Release de Entrega Planejada**

12.1.18 (Patch 150), 12.1.19 (Patch 109) e 12.1.20

**Réplica**

Não

**País**

( X ) Brasil  

## Objetivo

Todas as rotinas responsáveis pelo recebimento do conhecimento de transporte eletrônico foram reescritas, com o objetivo de melhorar a performance e tornar o processo mais simples e estável. Também foram refeitas todas as telas do processo atual, a fim de aprimorar a usabilidade do mesmo.

As melhorias de performance e de usabilidade das telas estão disponíveis  apenas para o TOTVS Colaboração 2.0 **a partir da versão 3.00 do XML**.

É importante salientar que para a utilização do TOTVS Colaboração é indispensável a contratação dos serviços da NeoGrid que é a responsável pelo processamento da leitura dos arquivos XML, pela comunicação com os webservices da SEFAZ e pelo retorno às consultas destes documentos. Estes, por sua vez, serão lidos e interpretados através da execução de JOBs específicos pelo TOTVS Gestão de Estoque, Compras e Faturamento para a devida atualização dos dados no sistema.



## Definição da Regra de Negócio



### 1.1. Natureza Fiscal (CFOP)

Quando um conhecimento de transporte eletrônico é enviado, ele contém uma natureza fiscal (CFOP) de saída, que caracteriza a operação. Para a empresa que recebe esse documento entretanto, devemos encontrar a natureza fiscal (CFOP) de entrada correspondente. Essa ‘Natureza Inversa’ é indispensável para a criação de um movimento de CT-e.

Para definir a Natureza Inversa de forma automática na geração do movimento de entrada, o TOTVS Gestão de Estoque, Compras e Faturamento utilizará os seguintes recursos:



### 1.1.1. Regra de Seleção da Natureza (RSN)

Para cada movimento de CT-e a ser incluído, o sistema irá encontrar a Natureza Inversa do CFOP constante do arquivo XML. Para isso, é necessário saber, através das parametrizações vigentes do tipo de movimento, se o movimento a ser criado seleciona a Natureza de Operação somente para o movimento, ou se deve ser selecionada também uma Natureza para o item de movimento. Para ambos os casos, será utilizada em primeiro lugar a Regra de Seleção da Natureza (RSN), rotina hoje já existente e que tem a finalidade de encontrar a Natureza de Operação baseada nas informações do movimento e parametrizações de várias tabelas tais como: Parâmetros do Tipo de Movimento, Produto, Classificação de Produto, Naturezas Fiscais, Regras de ICMS, Regras de IPI, etc..

Para verificar como está a parametrização da sua empresa vá na etapa *"Fis - Natureza"* dos Parâmetros dos Tipos de Movimento que serão utilizados na Inclusão de Movimento através de XML e verifique o preenchimento do campo 'Seleção Automática da Natureza'.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/007.png?version=1&modificationDate=1452253093000&api=v2)

Detalharemos a seguir como o sistema procederá conforme o tipo de Seleção Automática da Natureza definido para o tipo de movimento.



### 1.1.1.1. Seleção Automática da Natureza por Movimento

Neste caso, deverá ser encontrada obrigatoriamente uma Natureza de Operação analítica para o movimento.

Através dos dados do XML e das parametrizações e cadastros do sistema**,** a Regra de Seleção da Natureza irá encontrar a(s) natureza(s) possível(eis), de forma que:

-   Se a RSN encontrar apenas uma Natureza de Operação (CFOP) possível, o movimento de CT-e será incluído com o CFOP encontrado;
-   Se a RSN encontrar mais de uma Natureza de Operação (CFOP) possível, o sistema irá verificar as opções cadastradas como Natureza Inversa da CFOP extraída do XML.

No item 1.1.2 deste documento iremos detalhar como será o comportamento do sistema caso seja necessário utilizar o cadastro de Natureza Inversa do CFOP.



### 1.1.1.2. Seleção Automática da Natureza por Item de Movimento

Nesta situação, será realizado o mesmo procedimento já explicado anteriormente para encontrar a Natureza de Operação do movimento, com a diferença desta poder ser analítica ou sintética. 

Se for encontrada uma Natureza analítica, sua ‘Raiz’ (Natureza Sintética) deve ser extraída e considerada como a Natureza do movimento enquanto que a Natureza analítica será atribuída ao item.

Caso sejam encontradas 2 naturezas sintéticas possíveis, os campos natureza 1 e natureza 2 do movimento serão preenchidos caso ambos estejam parametrizados para o tipo de movimento, mas se existirem mais de 2 naturezas sintéticas possíveis, o sistema não será capaz de solucionar o conflito e, neste caso a natureza não será identificada, sendo preenchida a natureza do movimento com um CFOP de primeiro nível, ou seja, 1 ou 2 conforme a UF de origem do CT-e. 

Caso seja encontrada apenas a Natureza sintética, ela será atribuída ao movimento, e o procedimento de busca será realizado novamente para selecionar a Natureza do item. Para o item, a Regra de Seleção da Natureza irá considerar os dados do movimento e das demais tabelas citadas anteriormente (Parâmetros do Tipo de Movimento, Produto, Classificação de Produto, Naturezas Fiscais, Regras de ICMS, Regras de IPI, etc.).

Conforme já informado o sistema primeiramente executará as Regras de Seleção da Natureza, e caso as mesmas retornem mais de uma opção de CFOP para os itens do movimento, o sistema utilizará o cadastro das Naturezas Inversas que detalharemos a seguir:



### 1.1.2. Natureza Inversa 

No cadastro de Natureza de Operação (CFOP), de responsabilidade do sistema TOTVS Gestão Fiscal, foi criado o anexo *"Natureza Inversa TOTVS Colaboração"*  onde deverão ser cadastradas as possíveis naturezas de operação inversas para uma determinada natureza sintética.

Uma natureza de operação sintética, poderá ter a ela vinculada várias naturezas de operação inversas, sejam elas sintéticas ou analíticas.

Entre as naturezas inversas cadastradas, o usuário poderá definir "Defaults", ou seja, registros que devem ser considerados prioritários caso existam várias naturezas possíveis para um determinado movimento.

Este cadastro será utilizado apenas caso através da aplicação das Regras de Seleção da Natureza tenha sido encontrada mais de uma natureza inversa possível para o item. Neste caso o sistema procederá da seguinte forma:

-   Se apenas uma das naturezas selecionadas  estiver cadastrada como "Default", ela será utilizada para a criação de movimento;
-   Se mais de uma das naturezas selecionadas estiver cadastrada como "Default", o sistema não saberá qual Natureza Inversa escolher e o movimento será criado com o Status do TOTVS Colaboração como 'Natureza Incompleta';
-   Se apenas uma das naturezas selecionadas estiver cadastrada como Natureza Inversa, mesmo não sendo como "Default", ela será utilizada para a criação do movimento;
-   Se mais de uma das naturezas selecionadas estiver cadastrada como Natureza Inversa mas nenhuma delas é "Default", o sistema não saberá qual Natureza Inversa escolher e o movimento será criado com o Status do TOTVS Colaboração como ‘Natureza Incompleta';
-   Se nenhuma das naturezas selecionadas estiver no cadastro de Natureza inversa, o movimento será criado com o Status do TOTVS Colaboração como ‘Natureza Incompleta'. 

É importante salientar que o Status TOTVS Colaboração 'Natureza Incompleta' não influencia no status do movimento que será criado conforme os parâmetros do Tipo de Movimento gerado, ou seja, mesmo estando com esse Status TOTVS Colaboração o movimento poderá gerar todas as demais integrações (financeira, contábil, estoque e de aprovações) se assim estiver parametrizado. 

Os movimentos gerados com o Status TOTVS Colaboração 'Natureza Incompleta' deverão ter seus CFOP informados através de edição manual. 

Uma natureza default pode ser sintética ou analítica, entretanto, poderá haver somente uma natureza analítica default de cada 'raiz' para uma mesma natureza sintética. 

Exemplo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/009.png?version=3&modificationDate=1452601595000&api=v2)

No nosso exemplo acima a natureza 1.102.04 não pode ser default para a natureza 5.101 já que outra natureza que possui a sintética idêntica (1.102.03) já foi definida como default para a mesma.

No TOTVS Gestão de Estoque, Compras e Faturamento, o cadastro das naturezas inversas***,*** está disponível em *“Cadastros > Fiscais > Natureza Fiscal > Anexos > Natureza Inversa para Inclusão de XML ”*.

Você poderá acessar este Anexo a partir da visão de Naturezas ou a partir da tela de edição de uma Natureza específica.

Acesso a partir da visão de Naturezas

**
![Imagem](https://tdn.totvs.com/download/attachments/224106789/image2018-8-16_19-37-6.png?version=1&modificationDate=1534459025000&api=v2)

**

Acesso a partir da tela de edição da Natureza:

![Imagem](https://tdn.totvs.com/download/attachments/224106789/image2018-8-16_19-38-46.png?version=1&modificationDate=1534459126000&api=v2)


O sistema irá verificar a Natureza Inversa do CFOP constante do CT-e, ou seja as Naturezas Inversas devem estar cadastradas nas naturezas sintéticas de Saída. Assim, selecione o CFOP sintético para o qual você irá cadastrar as Naturezas Inversas e clique em *"Anexos > Natureza Inversa para Inclusão de XML"*.

Será apresentada a tela onde você poderá cadastrar as Naturezas Inversas a serem vinculadas à natureza sintética selecionada.

Informe a Natureza Inversa correspondente, marque o campo caso a mesma vá ser uma natureza 'Default' para esta natureza sintética e clique em 'Inserir'.

![Imagem](https://tdn.totvs.com/download/attachments/224106789/image2018-8-16_19-41-35.png?version=1&modificationDate=1534459295000&api=v2)

O sistema apresentará na tela a correspondência entre as naturezas inseridas, permitindo que as demais Naturezas Inversas dessa Sintética sejam incluídas, caso existam.

![Imagem](https://tdn.totvs.com/download/attachments/224106789/image2018-8-16_19-44-50.png?version=1&modificationDate=1534459489000&api=v2)

Informe todas as naturezas inversas de cada natureza sintética de saída e clique em *"OK"* ou *"Salvar"* para que o sistema as grave.

### 1.2. Unidade de Medida



Durante a tradução do XML, o Sistema utilizará como default da unidade de medida do item de movimento a unidade de controle do serviço selecionado (Cadastro de produto/serviço > aba Controle de Estoque > Unidade de Controle).

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2017-12-21_10-19-47.png?version=1&modificationDate=1513862388000&api=v2)



### 1.3 Coligada e Filial

O sistema utilizará o CNPJ informado no XML para, identificar qual é a Coligada e Filial a serem utilizadas durante o recebimento. Para isto, será considerada a seguinte ordem:

1.  Tomador
2.  Destinatário

### 2\. Parametrização



O Sistema permite informar um Serviço default para o vínculo automático durante a tradução do XML. Para isto, basta preencher o parâmetro "Produto/Serviço Default (Recebimento CT-e)" (Parâmetros por tipo de movimento > Etapa Importação/Envio de Arquivo XML).

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-17_21-2-39.png?version=1&modificationDate=1534550559000&api=v2)



O processo *"Inclusão de Movimento através de XML - CT-e"* está disponível na visão de Movimentos (*"Compras > Recebimento de Materiais > Seleção do Tipo de Movimento e Filial > Processos"*) e na tela de cadastro dos XML (*"Compras > Importação de Arquivo XML - Cadastro XML > Processos"*), sendo que o sistema se comportará de forma diferente dependendo da tela de onde o processo foi acionado, conforme detalharemos a seguir:

-   Caso você acesse o processo diretamente da visão de movimentos  (*"Compras > Recebimento de Materiais > Seleção do Tipo de Movimento e Filial > Processos"*) o sistema entenderá que deve ser gerado um movimento do tipo que você informou ao entrar nesta tela, ou seja, o movimento será gerado de acordo com os parâmetros do tipo de movimento corrente;


-   Caso você acesse o processo na tela de cadastro do XML (*"Compras > Importação de Arquivo XML - Cadastro XML > Processos"*) a definição do tipo de movimento a ser gerado será através do parâmetro "Tipo de Movimento para Inclusão Automática de CT-e" (*Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Integrações > Fiscal > Parâmetros por Filial > Importação/Envio de Arquivos 2/2).* Assim, optando por incluir o XML a partir desta tela o preenchimento do parâmetro passa a ser obrigatório.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-17_21-8-14.png?version=1&modificationDate=1534550895000&api=v2)



O Sistema permite que a unidade de medida seja levada do pedido para o movimento de CT-e no caso de faturamento. Para isto, basta marcar o parâmetro "Busca unidade do pedido (processo de faturamento)" (*Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Integrações > Fiscal > Parâmetros por Filial > *Importação/Envio de Arquivos 2/2*),* neste caso, a mesma sobrescreverá a unidade de controle do serviço.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-17_21-9-20.png?version=1&modificationDate=1534550960000&api=v2)

### 3\. Importação e Gravação do XML

No processo de importação e gravação do XML, o sistema irá executar os seguintes procedimentos:



### 3.1. Importação de Arquivos XML

Esse Job  é um Job Global, responsável por buscar os documentos armazenados na pasta de Recebimento (parametrizados em *Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Integrações > Fiscal > Dados Fiscais* > Importação/Envio de Arquivo XML > 'Diretório Padrão para Importação dos Arquivos XML') e distribuí-los por coligada. Neste momento, nenhuma validação é feita. Após a execução desse Job, os documentos lidos são exibidos no *“Monitor de Arquivos XML”* com o status **‘**Pendente’,  aguardando a ação do segundo Job.

O ideal é que a execução deste job seja agendada, assim, periodicamente o mesmo será executado de forma automática, buscando os XML disponibilizados.

Informamos que somente serão importados os XML que obedeçam totalmente a todos os requisitos do schema definido pela SEFAZ.

Para maiores detalhes acesse [http://tdn.TOTVS.com/display/public/LRM/CLB\_0002\_Jobs](https://tdn.totvs.com/display/public/LRM/CLB_0002_Jobs)



### 3.2. Serviço de Consulta de Arquivo XML

Esse Job é responsável por validar o arquivo XML do documento enviado, de acordo com o tipo de documento em questão (CT-e, NF-e, NFS-e, etc.), através da chamada do serviço especifico para cada um deles. Serão verificados todos os documentos lidos pelo 1º Job. Caso o documento esteja válido, o registro do arquivo é excluído do monitor, e passa a ser exibido na tela de cadastro dos XML (*"Compras > Importação de Arquivo XML - Cadastro XML"*), indicando que o mesmo foi incluído no sistema com sucesso.

O ideal é que a execução deste job seja agendada, assim periodicamente o mesmo será executado de forma automática.

Caso ocorra algum problema o XML será criado na base de dados com o status 'Inconsistente'. Para verificar o erro ocorrido, basta um duplo clique no registro para que seja exibido o seu Log onde o problema será demonstrado. Quando o arquivo está Inconsistente, é necessário corrigir a causa do erro para poder tentar incluí-lo no sistema. Após a correção do erro basta alterar o seu status para 'Pendente', através do processo *“Alterar Status do Arquivo”* e o Job tentará recebê-lo automaticamente em sua próxima execução. 

Estando o XML validado ele será incluído no cadastro de XML em *"Compras > Importação de Arquivo XML - Cadastro XML"*.

 

### 4\. Inclusão de Movimento Através de XML - CT-e 

Conforme já dissemos o processo de Inclusão Manual de Movimento a partir de um XML  poderá ser acessado tanto a partir da visão dos movimentos de entrada como da tela do cadastro de XML. Detalharemos cada um deles a seguir.



Para acessar o processo *"Inclusão de Movimento Através de XML - CT-e"* da visão de movimentos basta ir em *"Compras > Recebimento de Materiais > Seleção do Tipo de Movimento e Filial > Processos > Inclusão de Movimento através de XML - CT-e".*

O sistema irá lhe apresentar a tela de tradução do XML para que você informe quais são os XML cujos movimentos você deseja gerar. Para incluir os XML no processo basta clicar no botão *"Adicionar XML"*.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_12-58-45.png?version=1&modificationDate=1534780726000&api=v2)



O sistema lhe apresentará a tela onde você poderá filtrar os XML desejados, assim, informe o critério para seleção dos XML e atendendo ao mesmo, o sistema apresentará todos os XML válidos, do tipo CT-e e que ainda não geraram movimento. Marque os XML cujos movimentos você deseja gerar.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/075.png?version=1&modificationDate=1513705929000&api=v2)

Você poderá selecionar vários XML para realizar suas devidas traduções, sendo que os mesmos serão apresentados ordenados através do seu ID (identificador do XML) e número do documento em um formato de lista. Ao navegar entre os registros, o sistema atualizará automaticamente as informações contidas nas abas *“Identificação”, “Tradução de Itens” e “Tributação”.*





 Caso queira excluir algum XML do processo, basta selecioná-lo e clicar no botão "Remover XML". 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-1-30.png?version=1&modificationDate=1534780891000&api=v2)



É importante salientar que quando o processo de Inclusão de Movimento Através do XML for acessado a partir da visão de movimentos, os novos movimentos serão gerados com o tipo de movimento corrente, ou seja, o tipo de movimento informado na entrada da visão.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-3-15.png?version=1&modificationDate=1534780996000&api=v2)




Para acessar o processo *"Inclusão de Movimento através de XML - CT-e"* a partir do cadastro de XML vá em *"Compras > Importação de Arquivo XML - Cadastro XML" ,* selecione os XML cujos movimentos serão gerados e execute o processo *"Inclusão de Movimento através de XML - CT-e".*

 *![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-4-40.png?version=1&modificationDate=1534781080000&api=v2)*

Neste caso você poderá selecionar vários XML para realizar suas devidas traduções, inclusive de filiais diferentes, desde que o status dos mesmos seja 'Válido', o tipo dos mesmos seja 'CT-e' e que ainda não tenham gerado movimento. Tais XML serão apresentados na tela de tradução ordenados através do seu ID (identificador do XML) e número do documento em um formato de lista. Ao navegar entre os registros, o sistema atualizará automaticamente as informações contidas nas abas *“Identificação”, “Tradução de Itens” e “Tributação”.*

Além disso, da mesma forma que na visão de Movimentos aqui também você poderá optar por não selecionar nenhum XML específico e quando o sistema apresentar a tela de tradução você poderá informar quais são os XML cujos movimentos você deseja gerar, bastando para isso clicar no botão "Adicionar XML", só que, neste caso, o sistema apresentará para sua seleção somente os XML que são da filial informada no contexto do sistema.

É importante salientar também que quando o processo de Inclusão de Movimento Através do XML for acessado a partir da tela de cadastro de XML, o tipo de movimento dos novos movimentos a serem criados será automaticamente definido pelo sistema com base na parametrização. 

Os demais dados e procedimentos da "*"Inclusão de Movimento através de XML - CT-e"*" independem de onde o processo foi acionado e iremos descrevê-los a seguir.



A aba *“Identificação”*, apresentará as informações gerais do XML.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-6-44.png?version=1&modificationDate=1534781205000&api=v2)



Serão apresentados os seguintes dados: 

-   Destinatário / Filial – Filial do movimento;
-   Emitente / Fornecedor – Fornecedor;
-   Chave de Acesso do CT-e;
-   Série do CT-e;
-   Número do Documento - Número do CT-e;
-   Data de Emissão do CT-e;
-   Tipo de Movimento no qual o CT-e será inserido.

Estes dados, em sua maioria, são importados do XML e nenhum deles poderá ser alterado.

Será possível vincular o XML a um movimento de pedido existente na base de dados, bastando para isso que você marque o campo 'Receber Pedido' e clique no ícone "Incluir" para informar o(s) pedido(s) que será(ão) recebido(s) para este XML.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-8-4.png?version=1&modificationDate=1534781285000&api=v2)

O sistema apresentará uma tela de filtros para que você selecione o(s) pedido(s) a ser(em) vinculado(s) ao movimento, sendo que o sistema filtrará apenas os pedidos que geram movimentos do tipo de movimento que será criado.

No nosso caso, como o movimento que será gerado é do tipo 1.2.61, somente os pedidos que podem ser faturados para este tipo de movimento estarão disponíveis para realizar o vínculo.

Marque os pedidos que serão vinculados com o CT-e e clique em "OK".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2017-12-21_11-31-42.png?version=1&modificationDate=1513866702000&api=v2)

O sistema irá associar os pedidos selecionados ao movimento que está sendo gerado e os apresentará na tela.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-21-53.png?version=1&modificationDate=1534782114000&api=v2)



Ao ser(em) informado(s) o(s) pedido(s), o sistema imediatamente efetuará o vínculo entre o CT-e e o(s) mesmo(s), caso as informações de ambos sejam correspondentes. 

Outros pedidos de compras poderão ser adicionados a qualquer momento.

Na aba *"Identificação"* será informado ainda se a tela de edição do movimento será aberta ao fim do processo e se consequentemente o movimento poderá ser editado nesse momento.

Assim, caso queira optar por abrir o movimento automaticamente logo após a sua tradução basta deixar que o campo 'Abrir a Edição do Movimento', permaneça marcado, visto que o mesmo já virá assinalado por default.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-23-5.png?version=1&modificationDate=1534782186000&api=v2)

Caso este campo seja desmarcado, o sistema efetuará a inclusão através do XML  e retornará para a tela do cadastro de XML ou para a visão de Movimentos conforme a tela de onde o processo foi acionado.

Vejamos as demais abas do processo:

Na aba *"Tradução de Itens"* serão apresentados os dados relativos ao item do CT-e, note que o sistema apresenta o mesmo com as seguintes características:

**Código do Serviço**: 001
**Serviço**: Serviço de Transporte

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-23-39.png?version=1&modificationDate=1534782220000&api=v2)



Caso o XML não esteja vinculado a um pedido o sistema apresentará além dos dados do item no XML, o Código do Serviço de Tradução e o Nome do Serviço de Tradução, ou seja os dados do serviço correspondente em sua base de dados. 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-24-19.png?version=1&modificationDate=1534782260000&api=v2)

Você poderá neste momento efetuar manualmente a tradução do item, caso utilize sempre o mesmo Serviço para a entrada de CT-e, o mesmo pode ser definido via parametrização, para mais detalhe vide item 2.

Para informar qual é o serviço da sua base de dados, clique no campo 'Serviço Tradução' e clique na seta da lista de opções. O sistema abrirá um lookup onde você poderá selecionar o Serviço desejado através da informação do código ou do nome do mesmo.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-25-0.png?version=1&modificationDate=1534782301000&api=v2)

Conforme a informação fornecida o sistema lhe apresentará a lista dos Serviços disponíveis na sua base de dados e que atendem à seleção informada.

Você poderá alterar os dados que o sistema trouxe na tradução optando por um outro Serviço diferentes daquele indicado pelo sistema, bastando para isso clicar no campo 'Serviço Tradução' e fornecer as informações desejadas.

Caso o XML esteja vinculado a pedido(s) os campos 'Código do Serviço de Tradução' e 'Serviço Tradução' permanecerão em branco e o sistema apresentará além dos dados do item no XML, os campos relativos ao Pedido. 

Assim, caso o campo "Receber Pedido" esteja marcado, os quatro campos referentes ao pedido (Número do Pedido, Código do Serviço do Pedido, Número Sequencial do Item no Pedido e o Nome do Serviço do Pedido) serão exibidos na aba *"Tradução de Itens".*

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-25-56.png?version=1&modificationDate=1534782357000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-27-17.png?version=1&modificationDate=1534782437000&api=v2)

Caso durante o processo de Inclusão do Movimento via XML, o campo "Receber Pedido" seja, em algum momento, desmarcado, os campos referentes ao pedido (Número do Pedido, Código do Serviço do Pedido, Número Sequencial do Item no Pedido e o Nome do Serviço do Pedido) não mais serão apresentados em tela, já que não haverá a necessidade de utilização dos mesmos.

Você poderá alterar o serviço do pedido que foi informado pelo sistema, bastando para isso, selecionar o item cujo serviço do pedido deseja alterar, clicar no campo 'Serviço do Pedido' e clicar na seta da lista de opções para que os produtos dos pedidos vinculados ao XML sejam apresentados. 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-27-57.png?version=1&modificationDate=1534782477000&api=v2)


O lookup exibirá o(s) serviços(s) do(s) pedido(s) vinculado(s) ao XML, e que ainda possuem saldo a receber, para que você selecione um deles.

Caso selecione o serviço a partir do campo  'Serviço Tradução' o sistema exibirá todos os registros da base para que você possa definir qual serviço será utilizado na amarração, já se o serviço existir em um dos pedidos vinculados clique no campo 'Serviço do Pedido' e o lookup exibirá todos os serviços do(s) pedido(s) vinculado(s) ao XML.



Caso o serviço seja alterado, ou a unidade de medida precise ser ajustada, basta utilizar o Lookup de unidade de tradução contida na tela de tradução de itens.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-28-51.png?version=1&modificationDate=1534782532000&api=v2)



Na aba *“Tributação”* serão exibidos todos os tributos parametrizados no tipo de movimento do movimento que será gerado.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/322150273/image2018-8-20_13-29-29.png?version=1&modificationDate=1534782569000&api=v2)

Na parte superior da tela, em *“Tributação do CT-e”* serão carregadas as informações relativas aos tributos do movimento.

Na parte inferior da tela a visão contida no grupo *“Tributação do Serviço”* será responsável por exibir os impostos dos produtos (itens de movimento).



**Rotina**

**Tipo de Operação**

**Opção de Menu**

**Regras de Negócio**

*Inclusão de Movimento através de XML - CT-e*

Criação

Compras > Importação de Arquivo XML - Cadastro XML > Processos > Inclusão de Movimento através de XML *\- CT-e*

Conforme definições constantes deste documento

Natureza Inversa para Inclusão de XML

Criação

Cadastros > Natureza Fiscal > Anexos > Natureza Inversa para Inclusão de XML

Conforme definições constantes deste documento

Parâmetros por Filial

Alteração

Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Integrações > Fiscal > Dados Fiscais > Parâmetros por Filial

Conforme definições constantes deste documento

## Tabelas Utilizadas:

-   DCFOP - Naturezas Fiscais (CFOP);

-   DREGRAICMS - Regras de ICMS;

-   DREGRAIPI - Regras de IPI;
-   TITMMOV - Itens de Movimento;
-   TMOV - Movimentos;
-   TNATUREZACOLAB - Naturezas Inversas Totvs Colaboração;
-   TNFEENTRADA - Conhecimentos de Transporte (CT-e) Recebidos;
-   TPARFILIAL - Parâmetros da Filial;
-   TTRBMOV - Tributos do Movimento;
-   TXMOCOLAB - XML Recebidos pelo Totvs Colaboração.

## Informações sobre recebimento de Cancelamento de CT-e: 

## [MATFATCMPCRM01-7101 DT Recebimento de Cancelamento de CT-e](/display/LRM/MATFATCMPCRM01-7101+DT+Recebimento+de+Cancelamento+de+CT-e)



 **Este documento é material de especificação dos requisitos de inovação, trata-se de conteúdo extremamente técnico.**                                                             

![Imagem](https://centraldeatendimento.totvs.com/plugins/servlet/confluence/placeholder/unknown-macro?name=rate&locale=en_US&version=2)

---

# Manual Totvs Colaboração 2.0

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=185748531](https://tdn.totvs.com/pages/releaseview.action?pageId=185748531)
> **Domínio:** TDN (TOTVS Developer Network)

---

[Manual - Totvs Colaboração 2 0.docx](/download/attachments/185748531/Manual%20-%20Totvs%20Colabora%C3%A7%C3%A3o%202%200.docx?version=6&modificationDate=1429886794000&api=v2)

---

# MATFATCMPCRM01-2833_DT_Importação_de_NF-e_e_CT-e

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=392500033](https://tdn.totvs.com/pages/releaseview.action?pageId=392500033)
> **Domínio:** TDN (TOTVS Developer Network)

---

# Importação deXML de NF-e e CT-e

## Características do Requisito

**Linha de Produto:**

RM

**Segmento:**

Construção e Projetos

**Módulo:**

**Totvs Gestão de Estoque, Compras*.e Faturamento*.

**Rotina:**

**Rotina**

**Nome Técnico**

*NF-e*

*CT-e*

**NOTA FISCAL ELETRÔNICA**

**CONHECIMENTO DE TRANSPORTE ELETRÔNICO**

**Cadastros Iniciais:**

\-

**Parâmetro(s):**

Parâmetro Financeiros do Tipo de Movimento

**Ponto de Entrada:**

\-

**Tickets relacionados**

MATFATCMPCRM01-2833

**Requisito/S****tory/Issue (informe o requisito relacionado):**

 MATFATCMPCRM01-2833

**País(es):**

Bra.

**Banco(s) de Dados:**

*SQLServer e Oracle.*

**Tabelas Utilizadas:**

TNFEENTRADA

**Sistema(s) Operacional(is):**

\-

**Pacote:**

\-

## Descrição

Implementação da importação de arquivos XML de CT-e e NF-e para inclusão de Movimento.



## Procedimento para Implantação

O sistema é atualizado logo após a aplicação do pacote de atualizações de uma das seguintes versões:

-   12.1.22 ou superiores.



## Procedimento para Utilização

1.  Para parametrizar essa opção, deve acessar o **Totvs Gestão de Estoque, Compras e Faturamento → Ambiente → Gestão de Estoque Compras e Faturamento** e acessar **Integrações → Fiscal → Dados Fiscais → Importação/Envio de Arquivo XML** e marcar a opção **Realizar Importação de XML de NF-e e CT-e** e selecionar a pasta de onde os arquivos serão buscados na opção **Diretório Padrão para Importação dos Arquivos XML**
    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/392500033/image2018-8-16_19-27-20.png?version=1&modificationDate=1534461481000&api=v2)


-   Os demais procedimentos para inclusão podem ser vistos nos seguintes documentos:
    1.  Para inclusão de NF-e: [TSRMCN ER Inclusão de Movimento através de XML TOTVS Colaboração](/pages/viewpage.action?pageId=224106789)
    2.  Para Inclusão de CT-e: [1277238 MATFATCMPCRM01-1120 DT Recebimento de CT-e através de XML TOTVS Colaboração](/pages/viewpage.action?pageId=322150273)

---

# Parametrização (TOTVS Colaboração 2.0)

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938829](https://tdn.totvs.com/pages/releaseview.action?pageId=423938829)
> **Domínio:** TDN (TOTVS Developer Network)

---

Primeiramente devemos parametrizar o ambiente para "TOTVS Colaboração 2.0".
Deverá ser parametrizado o campo "Tipo de movimento para inclusão automática de CT-e" que se encontra na tela de dados fiscais da Filial acessando o menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Fiscal | Parâmetros por Filial | Importação/Envio de Arquivo XML 2/2.
Este campo deverá estar parametrizado com o tipo de movimento CT-e que será criado automaticamente à partir da entrada de um arquivo XML de recebimento de CT-e.
Somente tipos de movimento de entrada (1.2.xx) que possuem o campo "Integração Neogrid = Recebimento de CT-e" podem ser exibidos para escolha.
Caso a filial em questão não queria trabalhar com a criação automática de CT-e, esse campo não deverá ser preenchido.

---

# TSRMCN DT Recebimento Automático de NF-e

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=223159982](https://tdn.totvs.com/pages/releaseview.action?pageId=223159982)
> **Domínio:** TDN (TOTVS Developer Network)

---

# RECEBIMENTO AUTOMÁTICO DE NF-e

## Características do Requisito

**Linha de Produto:**

RM

**Segmento:**

Construção & Projetos

**Módulo:**

Totvs Gestão de Estoque, Compras e Faturamento

**Rotina:**

**Rotina**

**Nome Técnico**

Serviço Totvs Colaboração Consulta

FisTotvsColabConsultaAction

**Rotina(s) envolvida(s)**

**Nome Técnico**

Criação de Fórmulas

GlbFormulaAction

Definições de Cli/For - Totvs Colaboração

MovDefinicoesCliForTOTVSColabAction

Diferença de Tributos Calculados x Tributos do XML

MovLogComparacaoImpostoTotvsColabAction

Importação de Arquivos - Totvs Colaboração

MovTOTVSColabImportacaoArquivosProcAction

Inclusão de Movimento

MovMovimentoBaseAction

Natureza Inversa Totvs Colaboração

MovNaturezaColabAction

Parâmetros da Filial

MovFilialInfoNeoGridParamsForm

Processar Movimento - Totvs Colaboração

MovProcessarMovTOTVSColabProcAction

Produtos Totvs Colaboração

EstPrdCfoTOTVSColaboracaoAction

Recebimento de Pedido

MovFaturamentoAction

Unidades Totvs Colaboração

MovUndCfoColabAction

**Chamados Relacionados
**

TSRMCN

**País(es):**

Brasil

**Banco(s) de Dados:**

SQL e Oracle

**Tabelas Utilizadas:**

DCFOP - Naturezas Fiscais (CFOP)

DREGRAICMS - Regras de ICMS

DREGRAIPI - Regras de IPI

GFORMULA - Fórmulas

TDEFINICOESCFOCOLAB - Definições de Cli/For - Totvs Colaboração

TITMMOV - Itens de Movimento

TLOGCOMPIMPOSTOCOLAB - Diferenças de Tributos Calculados x Tributos XML

TMOV - Movimentos

TNATUREZACOLAB - Naturezas Inversas Totvs Colaboração

TNFEENTRADA - Notas Fiscais (NF-e) Recebidas

TPARFILIAL - Parâmetros da Filial

TPRDCFOCOLAB - Produtos Totvs Colaboração

TTRBMOV - Tributos do Movimento

TUNDCFOCOLAB - Unidades Totvs Colaboração

TXMOCOLAB - XML Recebidos pelo Totvs Colaboração

**Sistema(s) Operacional(is):**

Windows

**Versões/Release:**

12.1.9

## Descrição

O objetivo dessa implementação é permitir a importação automática das notas fiscais eletrônicas, através do processo do TOTVS Colaboração 2.0.

O atual processo responsável pelo recebimento da NF-e, exige a intervenção manual do usuário para resolver alguns conflitos, tais como, tradução dos produtos, seleção da natureza de operação, entre outros. A fim de simplificar este processo, está sendo implementado o recebimento automático da NF-e, o qual será capaz de solucionar todas estas questões, mediante uma prévia configuração, sendo que todas as validações/consistências executadas na criação manual do movimento serão também executadas no recebimento e criação automática da NF-e.

O Recebimento Automático da NF-e está disponível apenas para o TOTVS Colaboração 2.0, mas as melhorias de performance e de usabilidade das telas também estão disponíveis para o TOTVS Colaboração 1.0.

É importante salientar que para a utilização do TOTVS Colaboração é indispensável a contratação dos serviços da NeoGrid que é a responsável pelo processamento da leitura dos arquivos XML, pela comunicação com os webservices da SEFAZ e pelo retorno às consultas destes documentos. Estes, por sua vez, serão lidos e interpretados através da execução de JOBs específicos pelo Totvs Gestão de Estoque, Compras e Faturamento para a devida atualização dos dados no sistema.



## Procedimento para Utilização



### 1\. Parametrização

Para o correto funcionamento da rotina de Recebimento Automático das NF-e é necessário que sejam executadas algumas parametrizações. São elas:



### 1.1. Tipo de Recebimento de NF-e

O campo "Tipo de Recebimento de NF-e" define a forma como o sistema irá realizar o processo de recebimento automático das NF-e. Esta informação é parametrizável por Fornecedor do Totvs Colaboração e/ou por Filial.

Assim, quando do recebimento automático de uma NF-e, caso o emitente da mesma conste na tabela de definições do Cli/For para o Totvs Colaboração (*"Cadastros > Mais > Tabelas Auxiliares > Definições de Cli/For – Totvs Colaboração"*), essa informação prevalecerá e assim, para determinados fornecedores poderá ser definido um Tipo de Recebimento diferente do que é praticado geralmente. 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/001.png?version=3&modificationDate=1452597574000&api=v2)

Para o preenchimento deste campo é importante avaliar quais os fornecedores enviam o nº do Pedido de Compra no XML.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/002.png?version=3&modificationDate=1454321348000&api=v2)

Caso no momento do recebimento automático de uma NF-e o emitente da mesma não conste na tabela de *"Definições de Cli/For para o Totvs Colaboração"*, o sistema obedecerá ao que foi parametrizado para a filial de destino da NF-e em *"Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > 04.03  - Integrações > 04.03.03 - Fiscal > 04.03.03.01 - Dados Fiscais > Parâmetros por Filial > Informações TOTVS Colaboração"*.

Assim, para evitar erro no momento do recebimento, é imprescindível que o parâmetro da filial esteja sempre preenchido indicando como o sistema deve proceder para os fornecedores cujo Tipo de Recebimento não foi informado.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/072.png?version=1&modificationDate=1454494340000&api=v2)

Os Tipos de Recebimento possíveis são:

-   Inclusão Direta: O sistema não considera o código do pedido no XML e realiza a inclusão direta do movimento de NF-e com base nos dados existentes no XML. O movimento será criado acatando a todas as parametrizações do seu tipo de movimento, ou seja, efetuando todas as integrações parametrizadas. O status do movimento será 'Normal' ou 'A Pagar' conforme a parametrização do seu tipo de movimento; 


-    Inclusão Direta - Status Não Processado: O sistema não considera o código do pedido no XML e realiza a inclusão direta do movimento com base nos dados existentes no XML, só que com o status “Não Processado”.  Um movimento criado com status 'Não Processado' existirá apenas como documentação, sem qualquer efeito sobre o sistema, ou seja, estes movimentos serão criados sem a geração de suas possíveis integrações com a Contabilidade, Financeiro e Aprovações e não irão gerar movimentação no estoque, lançamentos financeiros, lançamentos contábeis, workflows de aprovação, etc. Para que estes movimentos passem a ter efeito os mesmos deverão ser processados (vide item 4 deste documento);


-   Recebimento de Pedido: O sistema utiliza o código do pedido contido no XML para buscar o movimento correspondente e realizar o faturamento do mesmo, sendo que se o pedido não for encontrado na base de dados o novo movimento não será criado, pois o sistema abortará o processo, informando o motivo através do log de execução;


-   Recebimento de Pedido ou Inclusão Direta: Através do conteúdo do XML, o sistema tentará identificar o respectivo pedido, e caso seja bem-sucedido, será realizado o faturamento do mesmo. Se o sistema não conseguir identificar nenhum pedido, a inclusão do movimento será feita através dos dados constantes do XML e sem nenhum relacionamento com qualquer outro movimento já existente na base de dados, ou seja, o movimento será criado acatando a todas às parametrizações do seu tipo de movimento, efetuando todas as integrações parametrizadas. O novo movimento terá o status 'Normal' ou 'A Pagar' conforme a parametrização do seu tipo de movimento;


-   Recebimento de Pedido ou Inclusão Direta - Status Não Processado: Através do conteúdo do XML, o sistema tentará identificar o respectivo pedido, e caso seja bem-sucedido, será realizado o faturamento do mesmo.  Se o sistema não conseguir identificar nenhum pedido, a inclusão do movimento será feita através dos dados constantes do XML e sem nenhum relacionamento com qualquer outro movimento já existente na base de dados, ou seja, o movimento será criado acatando às parametrizações do seu tipo de movimento, exceto as de integração, pois o movimento será criado com o status "Não Processado".  Um movimento criado com status 'Não Processado' existirá apenas como documentação, sem qualquer efeito sobre o sistema, ou seja, estes movimentos serão criados sem a geração de suas possíveis integrações com a Contabilidade, Financeiro e Aprovações e não irão gerar movimentação no estoque, lançamentos financeiros, lançamentos contábeis, workflows de aprovação, etc. Para que estes movimentos passem a ter efeito os mesmos deverão ser processados (vide item 4 deste documento).

Lembre-se que, caso para alguns fornecedores o tipo de recebimento seja diferente do que foi definido para a filial, você deve fornecer esta informação em *"Cadastros > Mais > Tabelas Auxiliares > Definições de Cli/For – Totvs Colaboração".*

Caso a filial não vá utilizar a rotina de recebimento automático da NF-e, o campo "Tipo de Recebimento de NF-e" deverá permanecer em branco. 



### 1.2. Fórmula do Tipo de Movimento para Recebimento de NF-e

Em  *“Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Integrações > Fiscal > Parâmetros por Filial > Informações Totvs Colaboração”,* deverá ser preenchido por filial o campo "Fórmula Tipo Mov. p/Recebimento NF-e**"**.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/071.png?version=1&modificationDate=1454493789000&api=v2)

Este novo parâmetro é do tipo fórmula, e assim, através do mesmo, o usuário poderá implementar uma regra específica para buscar o tipo de movimento que será utilizado tanto no recebimento automático como no recebimento manual das NF-e de cada filial.

Essa fórmula será executada para cada XML a ser recebido.

Foram criadas quatro novas funções de fórmula para auxiliar na criação dessa regra, são elas:

-   TABXMLCOLAB - Retorna o valor de um campo da tabela de XMLs do Totvs Colaboração (TNFEENTRADA);
-   DADOSXMLCOLAB - Retorna o valor de uma TAG de um XML;
-   QTDTAGSXMLCOLAB - Retorna o número de vezes que uma determinada Tag aparece no XML;
-   TABPRDCOLAB - Retorna o conteúdo de um campo do cadastro dos produtos vinculados aos itens constantes do XML.  

Explicaremos a seguir a sintaxe de cada uma dessas funções bem como daremos exemplos de utilização de todas elas.



-   TABXMLCOLAB ('NomeCampo', 'TipoRetorno') onde:
    -   NomeCampo = Nome do Campo da Tabela TNFEENTRADA. Podemos citar como campos dessa tabela o código da coligada (CODCOLIGADA), o código da filial (CODFILIAL), o código da coligada do fornecedor (CODCOLCFO), o código do fornecedor (CODCFO), a data de emissão (DATAEMISSAO), etc.;
    -   TipoRetorno = Informa o tipo de retorno relativo ao campo informado em NomeCampo, se S (string), V (valor), D (data) ou I (inteiro). 

Exemplo de fórmula de seleção do tipo de movimento utilizando a função TABXMLCOLAB:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/005.png?version=2&modificationDate=1453202335000&api=v2)

Neste exemplo o sistema irá verificar na tabela TNFEENTRADA (tabela que contém os XML importados) o registro gerado pelo XML e caso o código do fornecedor seja F00017 o movimento será gerado com o tipo 1.2.27, caso contrário o tipo do movimento será 1.2.20.



-   DADOSXMLCOLAB ('CaminhoTAG', 'NamespaceXML') onde:
    -   CaminhoTAG = Caminho da TAG desejada, separado por barra ( / ). Exemplo: '/nfeProc/NFe/infNFe/det/prod/CFOP' para o CFOP do produto do XML;
        -   IMPORTANTE: O Caminho da Tag deve ser informado exatamente como consta no XML, esta pesquisa considera letras maiúsculas e minúsculas (Case Sensitive).
    -   NamespaceXML = [http://www.portalfiscal.inf.br/nfe](http://www.portalfiscal.inf.br/nfe)

Exemplo de fórmula de seleção do tipo de movimento utilizando a função DADOSXMLCOLAB:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/006a%20-%20C%C3%B3pia.png?version=1&modificationDate=1457636982000&api=v2)

Quando a tag possuir índice, basta informá-lo o entre colchetes (\[ \]).

No exemplo acima o sistema irá retornar a informação da TAG CFOP do primeiro item da NFe, já que não informamos nenhum índice.

Veja abaixo um exemplo da mesma fórmula retornando o CFOP do 2º item da NFe:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159952/100.png?version=1&modificationDate=1469816566000&api=v2)



-   QTDTAGSXMLCOLAB ('CaminhoTAG', 'NamespaceXML') onde:
    -   CaminhoTAG = Caminho da TAG desejada, separado por barra ( / ). Exemplo: '/nfeProc/NFe/infNFe/det' para o produto do XML;
    -   NamespaceXML = [http://www.portalfiscal.inf.br/nfe](http://www.portalfiscal.inf.br/nfe)

Veja abaixo um exemplo de fórmula de seleção do tipo de movimento utilizando as funções QTDTAGSXMLCOLAB e DADOSXMLCOLAB:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/098.png?version=1&modificationDate=1458067609000&api=v2)

No exemplo acima através da função QTDTAGSXMLCOLAB o sistema irá identificar o número de itens constantes do XML. Após isso, através da função DADOSXMLCOLAB, irá percorrer todos os itens do XML e caso exista algum cujo CFOP seja 5.102 o tipo de movimento gerado será o 1.2.12.

Assim, utilizando em uma mesma fórmula estas duas funções (QTDTAGSXMLCOLAB e DADOSXMLCOLAB), o sistema irá verificar determinado dado de todos os itens constantes de um XML.



-   TABPRDCOLAB ('CodigoProdutoColab', 'NomeCampo', 'TipoRetorno') onde:
    -   CódigoProdutoColab = Código do Produto na tabela "Produtos TOTVS Colaboração";
    -   NomeCampo = Nome do campo da tabela de Produtos;
    -   TipoRetorno = Informa o tipo de retorno relativo ao campo informado em NomeCampo, se S (string), V (valor), D (data) ou I (inteiro). 

Veja abaixo um exemplo de fórmula de seleção do tipo de movimento utilizando as funções QTDTAGSXMLCOLAB, DADOSXMLCOLAB e TABPRDCOLAB:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/099.png?version=1&modificationDate=1458071338000&api=v2)

Neste exemplo, em primeiro lugar o sistema utilizará a função QTDTAGSXMLCOLAB para identificar o número de itens constantes do XML, logo depois, através da função DADOSXMLCOLAB irá percorrer todos os itens do XML e através da função TABPRDCOLAB irá identificar na tabela Produtos TOTVS Colaboração quais são os produtos vinculados aos itens do XML. Após verificar sua tabela de produtos e através  e irá analisar se algum deles possui a Tabela de Classificação 1 preenchida com 05. Em caso afirmativo o sistema irá gerar o movimento com o tipo 1.2.12, caso contrário o movimento será do tipo 1.2.11.

Assim, utilizando em uma mesma fórmula estas três funções (QTDTAGSXMLCOLAB, DADOSXMLCOLAB e TABPRDCOLAB), o sistema irá verificar determinado dado de todos os itens constantes de um XML e ainda irá compará-lo com determinado campo do seu cadastro de Produtos.



Caso para algum XML através da fórmula não seja possível definir o seu tipo de movimento, o XML será criado na base de dados com o status 'Inconsistente' e poderá ser recebido manualmente.

Este novo parâmetro somente será habilitado quando, no quadro “Tipo Documento Integração Totvs Colaboração” pelo menos uma das opções, 'Todos' ou 'Recebimento de NF-e' estiver marcada.

O recebimento manual do XML consta do documento [TSRMCN\_ER\_Inclusão\_de\_Movimento\_através\_de\_XML\_Totvs\_Colaboração](/pages/viewpage.action?pageId=224106789).  Acesse-o para maiores informações sobre este procedimento.



### 1.3. Parametrização de Local de Estoque e Condição de Pagamento

A informação do Local de Estoque é obrigatória na geração de qualquer movimento e a informação da Condição de Pagamento é obrigatória na geração de todos os movimentos que possuem Integração Financeira.

Para os movimentos gerados automaticamente através do recebimento de um pedido estes campos já virão automaticamente preenchidos mas para aqueles onde a inclusão da NF-e não possui nenhum vínculo com outro movimento,  torna-se necessário fornecer estas informações para o sistema.

Caso a sua empresa possua apenas um Local de Estoque, basta preenchê-lo na parametrização dos tipos de movimento. Para isso vá em *"Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > 04.06 - Gestão Compras > 04.06.05 - Recebimentos de Materiais"* e no tipo de movimento desejado forneça esta informação em *"Mov - Emitente/Destinatário"*. Veja abaixo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/059.png?version=2&modificationDate=1454081457000&api=v2)

O mesmo se aplica à Condição de Pagamento, ou seja, caso a sua empresa adquira produtos com apenas uma condição de pagamento basta parametrizá-la no tipo de movimento. Para isso vá em *"Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > 04.06 - Gestão Compras > 04.06.05 - Recebimentos de Materiais"* e no tipo de movimento desejado forneça esta informação em *"Fin - Condições de Pagamento"*. Veja abaixo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/060.png?version=1&modificationDate=1454081555000&api=v2)

Nos casos acima caso a edição do Local de Estoque e da Condição de Pagamento estejam como "Edita", mesmo assim o sistema ainda criará o movimento de NF-e com a informação do Local de Estoque e da Condição de Pagamento informados como "Default" nestas telas de parâmetros.

Sabemos que essa realidade não se aplica a grande parte das empresas que, em sua maioria, possuem vários Locais de Estoque e trabalham com inúmeras Condição de Pagamento, por isso para que sua empresa possa definir no sistema suas próprias regras de negócio quanto a estas informações poderão ser utilizadas "Fórmulas Visuais".

Assim, caso sua empresa  possua mais de um Local de Estoque e utilize mais de uma Condição de Pagamento, no tipo de movimento informe que estes dados deverão ser editados e não preencha a informação default, conforme demonstramos nas telas a seguir: 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/061.png?version=1&modificationDate=1454082513000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/062.png?version=1&modificationDate=1454082629000&api=v2)

Após isso vá em *"Gestão > Fórmula Visual > Fórmula Visual"*.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/063.png?version=1&modificationDate=1454083104000&api=v2)

Clique no botão "Novo" e insira sua Fórmula Visual a ser utilizada no Recebimento Automático de NF-e.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/064.png?version=1&modificationDate=1454085680000&api=v2)



Na aba *"Gatilhos"* em "Assinantes" selecione o gatilho "Antes de validar o contexto" e clique no ícone "Adicionar Objetos".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/065.png?version=1&modificationDate=1454086813000&api=v2)
 

Foram criados 2 novos objetos relativos ao processo de Recebimento Automático da NF-e do Totvs Colaboração;

-   TOTVS Colaboração / Assinante de Inclusão de Movimento por Faturamento;
-   TOTVS Colaboração / Assinante de Inclusão de Movimento.



No campo localizar digite "Totvs" para que o sistema apresente as mesmas na tela:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/066.png?version=1&modificationDate=1454087321000&api=v2)

Clique no primeiro objeto e o sistema automaticamente o levará para a tela dos Gatilhos. Repita o mesmo com o segundo objeto e clique em OK para gravar o registro.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/067.png?version=1&modificationDate=1454088044000&api=v2)
 

O sistema retornará à visão das Fórmulas Visuais. Dê duplo clique na Fórmula Visual criada para o Recebimento Automático de NF-e.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/068.png?version=2&modificationDate=1454089994000&api=v2)

Clique na aba "Atividades", desça até "RM Movimento" e você terá acesso às atividades a serem utilizadas em sua fórmula visual que são:

-   Atribuir valor no contexto do Assinante/Movimento;
-   Consulta valor no contexto do Movimento (Assinante).

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/069.png?version=1&modificationDate=1454089811000&api=v2)

A partir de agora, já de posse das informações relativas às implementações que efetuamos nas Fórmulas Visuais você poderá criar aquelas que se adequarão à sua empresa.

Neste documento citamos os campos Local de Estoque e Condição de Pagamento mas as fórmulas visuais poderão ser utilizadas para atribuir o conteúdo de outros campos do movimento ou ítens de movimento de Recebimento Automático, conforme a necessidade da sua empresa.

### 2\. Cadastros

Para o correto funcionamento da rotina de Recebimento Automático das NF-e devemos ficar atentos ao preenchimento de alguns cadastros. São eles:



### 2.1. Natureza Fiscal (CFOP)

Quando uma nota fiscal eletrônica é enviada por um fornecedor, ela contém, para cada um dos seus itens, uma natureza fiscal (CFOP) de saída, que caracteriza a operação desse fornecedor. Para a empresa que recebe esse documento entretanto, devemos encontrar a natureza fiscal (CFOP) de entrada correspondente. Essa ‘Natureza Inversa’ é indispensável para a criação automática de um movimento de NF-e.

Para definir a Natureza Inversa na geração automática do movimento de entrada, o Totvs Gestão de Estoque, Compras e Faturamento utilizará os seguintes recursos:



### 2.1.1. Regra de Seleção da Natureza (RSN)

Para cada movimento de NF-e a ser incluído, o sistema irá encontrar a Natureza Inversa do CFOP constante do arquivo XML. Para isso, é necessário saber, através das parametrizações vigentes do tipo de movimento, se o movimento a ser criado seleciona a Natureza de Operação somente para o movimento, ou se deve ser selecionada também uma Natureza para o item de movimento. Para ambos os casos, será utilizada em primeiro lugar a Regra de Seleção da Natureza (RSN), rotina hoje já existente e que tem a finalidade de encontrar a Natureza de Operação baseada nas informações do movimento e parametrizações de várias tabelas tais como: Parâmetros do Tipo de Movimento, Produto, Classificação de Produto, Naturezas Fiscais, Regras de ICMS, Regras de IPI, etc..

Para verificar como está a parametrização da sua empresa vá na etapa *"Fis - Natureza"* dos Parâmetros dos Tipos de Movimento que serão utilizados no Recebimento Automático da NF-e e verifique o preenchimento do campo 'Seleção Automática da Natureza'.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/007.png?version=1&modificationDate=1452253093000&api=v2)

Detalharemos a seguir como o sistema procederá conforme o tipo de Seleção Automática da Natureza definido para o tipo de movimento.



### 2.1.1.1. Seleção Automática da Natureza por Movimento

Neste caso, deverá ser encontrada obrigatoriamente uma Natureza de Operação analítica para o movimento.

Através dos dados do XML e das parametrizações e cadastros do sistema**,** a Regra de Seleçao da Natureza irá encontrar a(s) natureza(s) possível(eis), de forma que:

-   Se a RSN encontrar apenas uma Natureza de Operação (CFOP) possível, o movimento de NF-e será incluído com o CFOP encontrado;
-   Se a RSN encontrar mais de uma Natureza de Operação (CFOP) possível, o sistema irá verificar as opções cadastradas como Natureza Inversa da CFOP extraída do XML.

No item 2.1.2 deste documento iremos detalhar como será o comportamento do sistema caso seja necessário utilizar o cadastro de Natureza Inversa do CFOP.


### 2.1.1.2. Seleção Automática da Natureza por Item de Movimento

Nesta situação, será realizado o mesmo procedimento já explicado anteriormente para encontrar a Natureza de Operação do movimento, com a diferença desta poder ser analítica ou sintética. 

Se for encontrada uma Natureza analítica, sua ‘Raiz’ (Natureza Sintética) deve ser extraída e considerada como a Natureza do movimento enquanto que a Natureza analítica será atribuída ao item.

Caso sejam encontradas 2 naturezas sintéticas possíveis, os campos natureza 1 e natureza 2 do movimento (TMOV.IDNAT, TMOV.IDNAT2) serão preenchidos caso ambos estejam parametrizados para o tipo de movimento, mas se existirem mais de 2 naturezas sintéticas possíveis, o sistema não será capaz de resolver o conflito e, neste caso a natureza não será identificada, sendo preenchida a natureza do movimento com um CFOP de primeiro nível, ou seja, 1 ou 2 conforme a UF de origem da NF-e. 

Caso seja encontrada apenas a Natureza sintética, ela será atribuída ao movimento, e o procedimento de busca será realizado novamente para selecionar a Natureza do item. Para o item, a Regra de Seleção da Natureza irá considerar os dados do movimento e das demais tabelas citadas anteriormente (Parâmetros do Tipo de Movimento, Produto, Classificação de Produto, Naturezas Fiscais, Regras de ICMS, Regras de IPI, etc.).

Conforme já informado o sistema primeiramente executará as Regras de Seleção da Natureza, e caso a mesma retorne mais de uma opção de CFOP para os itens do movimento, o sistema utilizará o cadastro das Naturezas Inversas que detalharemos a seguir:



### 2.1.2. Natureza Inversa 

No cadastro de Natureza de Operação (CFOP), de responsabilidade do sistema Totvs Gestão Fiscal, foi criado o anexo *"Natureza Inversa Totvs Colaboração"* (TNATUREZACOLAB) onde deverão ser cadastradas as possíveis naturezas de operação inversas para uma determinada natureza sintética.

Uma natureza de operação sintética, poderá ter a ela vinculada, várias naturezas de operação inversas, sejam elas sintéticas ou analíticas.

Entre as naturezas inversas cadastradas, o usuário poderá definir "Defaults", ou seja, registros que devem ser considerados prioritários caso existam várias naturezas possíveis para um determinado movimento.

Este cadastro será utilizado apenas caso através da aplicação das Regras de Seleção da Natureza tenha sido encontrada mais de uma natureza inversa possível para o item. Neste caso o sistema procederá da seguinte forma:

-   Se apenas uma das naturezas selecionadas  estiver cadastrada como "Default", ela será utilizada para a criação de movimento;
-   Se mais de uma das naturezas selecionadas estiver cadastrada como "Default", o sistema não saberá qual Natureza Inversa escolher e o movimento será criado com o Status do Totvs Colaboração como 'Natureza Incompleta';
-   Se apenas uma das naturezas selecionadas estiver cadastrada como Natureza Inversa, mesmo não sendo como "Default", ela será utilizada para a criação do movimento;
-   Se mais de uma das naturezas selecionadas estiver cadastrada como Natureza Inversa mas nenhuma delas é "Default", o sistema não saberá qual Natureza Inversa escolher e o movimento será criado com o Status do Totvs Colaboração como ‘Natureza Incompleta';
-   Se nenhuma das naturezas selecionadas estiver no cadastro de Natureza inversa, o movimento será criado com o Status do Totvs Colaboração como ‘Natureza Incompleta'. 

É importante salientar que o Status Totvs Colaboração 'Natureza Incompleta' não influencia no status do movimento que será criado conforme o Tipo de Recebimento utilizado e os parâmetros do Tipo de Movimento gerado, ou seja, mesmo estando com esse Status Totvs Colaboração o movimento poderá gerar todas as demais integrações (financeira, contábil, estoque e de aprovações) se assim estiver parametrizado. 

Os movimentos gerados com o Status Totvs Colaboração 'Natureza Incompleta' deverão ter seus CFOP informados através de edição manual. 

Uma natureza default pode ser sintética ou analítica, entretanto, poderá haver somente uma natureza analítica default de cada 'raiz' para uma mesma natureza sintética. 

Exemplo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/009.png?version=3&modificationDate=1452601595000&api=v2)

No nosso exemplo acima a natureza 1.102.04 não pode ser default para a natureza 5.101 já que outra natureza que possui a mesma sintética (1.102.03) já foi definida como default para a mesma.

No Totvs Gestão de Estoque, Compras e Faturamento, o cadastro das naturezas inversas***,*** está disponível em *“Cadastros > Fiscais > Natureza Fiscal > Anexos > Natureza Inversa Totvs Colaboração”*.

Você poderá acessar este Anexo a partir da visão de Naturezas ou a partir da tela de edição de uma Natureza específica.

Acesso a partir da visão de Naturezas

**
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/025.png?version=1&modificationDate=1453118681000&api=v2)

**

Acesso a partir da tela de edição da Natureza:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/029.png?version=1&modificationDate=1453215427000&api=v2)


O sistema irá verificar a Natureza Inversa do CFOP constante da NF-e, ou seja as Naturezas Inversas devem estar cadastradas nas naturezas sintéticas de Saída. Assim, selecione o CFOP sintético para o qual você irá cadastrar as Naturezas Inversas e clique em *"Anexos > Natureza Inversa Totvs Colaboração"*.

Será apresentada a tela onde você poderá cadastrar as Naturezas Inversas a serem vinculadas à natureza sintética selecionada.

Informe a Natureza Inversa correspondente, marque o campo caso a mesma vá ser uma natureza 'Default' para esta natureza sintética e clique em 'Inserir'.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/011.png?version=7&modificationDate=1453215882000&api=v2)

O sistema apresentará na tela a correspondência entre as naturezas inseridas, permitindo que as demais Naturezas Inversas dessa Sintética sejam incluídas, caso existam.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/012.png?version=5&modificationDate=1453216226000&api=v2)

Informe todas as naturezas inversas de cada natureza sintética de saída e clique em 'OK' ou 'Salvar' para que o sistema as grave.



### 2.2. Produtos

Para efetuar o recebimento automático é necessário que esteja cadastrada a correlação entre os produtos constantes dos XML e os produtos constantes da sua base de dados, ou seja, dos produtos do fornecedor com os produtos do seu estoque.

A tradução dos produtos contidos no XML, que anteriormente era feita com base nas informações da tabela Produtos por Fornecedor (TPRDCFO), a partir de agora será feita através da tabela Produtos por Fornecedor Totvs Colaboração (TPRDCFOCOLAB).

Nesta nova estrutura, o usuário poderá definir um relacionamento de 1 x N, conforme exemplificamos abaixo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/013.png?version=1&modificationDate=1452620233000&api=v2)

Note que para o produto 100524 podemos ter N produtos vinculados como por exemplo os produtos Caneta Esferográfica Azul e Caneta Esferográfica Preta do fornecedor, correspondem a um só produto no estoque, Caneta Esferográfica.

As informações atualmente existentes na tabela Produtos por Fornecedor (TPRDCFO) serão automaticamente inseridas na tabela  Produtos por Fornecedor Totvs Colaboração (TPRDCFOCOLAB) através do atualizador da versão.

Para incluir novos produtos na tabela acesse *“Cadastros > Produtos > Anexos > Produtos Totvs Colaboração”.*

Como todos os demais Anexos do sistema, você poderá acessá-lo a partir da visão de Produtos ou a partir da tela de edição de determinado Produto.

Acesso através da visão de Produtos.

*
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/014.png?version=1&modificationDate=1452621293000&api=v2)
*

Acesso a partir da tela de edição do produto:

*
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/015.png?version=2&modificationDate=1452698588000&api=v2)

*

Informe o 'Código do Fornecedor', o 'Código do Produto no Fornecedor' e se este for o único produto correspondente para este fornecedor, clique em 'Salvar' ou 'OK' para efetuar a gravação do registro ou no ícone "Incluir" caso queira gravar o registro e em seguida informar um novo fornecedor e código de produto correspondente para este produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/016.png?version=2&modificationDate=1452773148000&api=v2)


Caso o produto possua mais de um produto correspondente no mesmo fornecedor, informe um deles no 'Cód. do Produto no Fornecedor' e clique em "Inserir Múltiplos" para utilizar esse recurso facilitador que permitirá que você inclua vários registros na mesma tela e grave-os de uma só vez.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/017.png?version=2&modificationDate=1452773535000&api=v2)


No campo 'Código do Produto' informe o código do produto no fornecedor e em seguida clique em "Inserir", e assim sucessivamente até que todos os códigos no fornecedor tenham sido informados.

Após informar os códigos de todos os produtos correspondentes nesse fornecedor clique em 'Salvar' ou 'OK' para efetuar a gravação do registro ou no botão "Incluir" caso queira gravar o registro e em seguida informar um novo fornecedor e produto correspondente para este produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/018.png?version=1&modificationDate=1454323556000&api=v2)


Após finalizar a inserção dos Registros Múltiplos, caso opte por "Salvar" o sistema lhe apresentará em tela a mensagem informando os registros que foram gravados.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/023.png?version=1&modificationDate=1452773698000&api=v2)


Para encerrar a informação dos fornecedores e produtos correspondentes a este produto tecle "OK" e o sistema automaticamente sairá da tela de cadastro e exibirá a visão  dos Produtos Totvs Colaboração cadastrados para o seu produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/019.png?version=1&modificationDate=1452699507000&api=v2)

Vale salientar que caso tenha(m) havido inclusão(ões) a partir da inserção de múltiplos registros será necessário clicar no botão "Atualizar Informações" para que os mesmos sejam apresentados.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/020.png?version=1&modificationDate=1452700955000&api=v2)

Conforme informamos, no Recebimento Automático da NF-e é imprescindível que todos os produtos constantes de cada XML já tenham sido vinculados com o respectivo produto da sua base de dados, caso contrário o movimento não será criado e sua entrada terá que ser efetuada manualmente.

### 2.3. Unidades 

Da mesma forma que com os produtos, para efetuar o recebimento automático é necessário que esteja cadastrada a correlação entre as unidades de medida dos produtos constantes dos XML, ou seja das unidades do fornecedor com as unidades utilizadas na sua empresa.

O sistema realizará a tradução do campo Unidade de Medida ‘CODUND’ através da tabela ‘TUNDCFOCOLAB’, onde será possível cadastrar o código da unidade no fornecedor, e informar a unidade correspondente no sistema, evitando assim, a intervenção manual do usuário durante o processo de recebimento.

Para informar a correlação entre as unidades vá em *“Cadastros > Mais... > Tabelas Auxiliares > Unidade > Anexos > Unidades Totvs Colaboração”.*

Você poderá acessar este Anexo exclusivamente da visão de Unidades.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/021.png?version=2&modificationDate=1452709532000&api=v2)

O sistema abrirá o Anexo do lado direito da tela de visão das Unidades.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/026.png?version=1&modificationDate=1453137044000&api=v2)


Clique no botão "Incluir" para inserir as Unidades dos Fornecedores que correspondem à sua Unidade selecionada.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/027.png?version=1&modificationDate=1453137417000&api=v2)


Informe ou selecione o 'Fornecedor' (código ou nome), informe o  'Código da Unidade no Fornecedor' e se esta for a única correspondência para esta unidade, clique em 'Salvar' ou 'OK' para efetuar a gravação do registro. Caso existam outros fornecedores para o qual essa unidade será utilizada clique no ícone "Incluir" para gravar o registro e em seguida informar um novo fornecedor e código de unidade correspondente para esta unidade.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/024.png?version=2&modificationDate=1453214895000&api=v2)


Para encerrar a informação dos fornecedores e unidades correspondentes a esta unidade tecle "OK" e o sistema automaticamente sairá da tela de cadastro e exibirá a visão  das Unidades Totvs Colaboração cadastradas.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/028.png?version=1&modificationDate=1453137869000&api=v2)

É importante salientar que caso o sistema não localize a unidade correspondente durante o recebimento automático, o movimento não será gerado.

Agora que já falamos sobre todos as parametrizações e cadastros necessários, vamos falar sobre o processo de Recebimento Automático da NF-e em si.



### 3\. Recebimento Automático da NFe

Conforme já dito o Recebimento Automático somente está disponível para o TOTVS Colaboração 2.0 portanto antes de ativá-lo sugerimos a verificação das parametrizações necessárias para a  atualização desta versão do Totvs Colaboração.

Acesse o manual  [TOTVS Colaboração 2.00](/pages/viewpage.action?pageId=219696881) para instruções acerca da parametrização necessária.

No processo de Recebimento Automático de NFe o Totvs Colaboração irá executar os seguintes procedimentos:



### 3.1. Importação de Arquivos - Totvs Colaboração

Esse Job  é um Job Global, responsável por buscar os documentos enviados pela ClientEDI Neogrid e distribuí-los por coligada. Neste momento, nenhuma validação é feita. Após a execução desse Job, os documentos lidos são exibidos no *“Monitor de Arquivos Totvs Colaboração”* com o status **‘**Pendente’,  aguardando a ação do segundo Job. 

O ideal é que a execução deste job seja agendada, assim, periodicamente o mesmo será executado de forma automática, buscando os XML disponibilizados.

Informamos que somente serão importados os XML que obedeçam totalmente a todos os requisitos do schema definido pela SEFAZ.

Para maiores detalhes acesse [http://tdn.totvs.com/display/public/LRM/CLB\_0002\_Jobs](https://tdn.totvs.com/display/public/LRM/CLB_0002_Jobs)



### 3.2. Serviço Totvs Colaboração Consulta

 Esse Job é responsável por validar o arquivo XML do documento enviado, de acordo com o tipo de documento em questão (CT-e, NF-e, NFS-e, etc.), através da chamada do serviço especifico para cada um deles. Serão verificados todos os documentos lidos pelo 1º Job. Caso o documento esteja válido, o registro do arquivo é excluído do monitor, e passa a ser exibido na tela do movimento conforme o tipo de movimento utilizado, indicando que o mesmo foi incluído no sistema com sucesso.

O ideal é que a execução deste job seja agendada, assim periodicamente o mesmo será executado de forma automática.

Para validar e incluir o movimento o sistema irá em primeiro lugar executar a 'Fórmula do Tipo de Movimento para Recebimento Automático de NFe" comparando-a com os dados do XML para verificar qual o tipo de movimento a ser utilizado na entrada automática da NF-e.

Após encontrar o tipo de movimento a ser incluído o sistema passará à Tradução dos Dados do Arquivo XML.

Caso através da fórmula  definida para a o tipo de movimento no Recebimento Automático (vide item 1.1 deste documento) para algum XML não seja possível definir o seu tipo de movimento esse XML será criado na base de dados com o status 'Inconsistente'. Para verificar o erro ocorrido, basta um duplo clique no registro para que seja exibido o seu Log onde o problema será demonstrado. Quando o arquivo está Inconsistente, é necessário corrigir a causa do erro para poder tentar incluí-lo no sistema. Após a correção do erro basta alterar o seu status para 'Pendente', através do processo *“Alterar status do arquivo TOTVS Colaboração”* e o Job tentará recebê-lo automaticamente novamente em sua próxima execução. Caso opte por não acertar o erro e receber o XML manualmente o registro 'Inconsistente' deverá ser excluído da tela do *"Monitor de Arquivos Totvs Colaboração"*.



### 3.2.1. Tradução dos Dados do Arquivo XML

Tendo identificado o tipo de movimento a ser utilizado, o sistema efetuará a tradução do XML utilizando-se dos dados dos cadastros que já descrevemos anteriormente:



#### 3.2.1.1. Identificação dos Produtos

A identificação de cada produto será efetuada com base nos registros da tabela Produtos Totvs Colaboração (TPRDCFOCOLAB).

Para cada produto no XML, o sistema verificará qual é o produto correspondente no seu cadastro, utilizando-o na inserção do item de movimento.

Caso no XML seja encontrado algum produto sem correspondência o processo de Recebimento Automático será abortado mas o XML será criado na base de dados  com o status  'Inconsistente'. Para verificar o erro ocorrido, basta um duplo clique no registro para que seja exibido o seu Log onde o problema será demonstrado. Quando o arquivo está Inconsistente, é necessário corrigir a causa do erro para poder tentar incluí-lo no sistema. Após a correção do erro basta alterar o seu status para 'Pendente', através do processo *“Alterar status do arquivo TOTVS Colaboração”* e o Job tentará recebê-lo automaticamente novamente em sua próxima execução. Caso opte por não acertar o erro e receber o XML manualmente o registro 'Inconsistente' deverá ser excluído da tela do *"Monitor de Arquivos Totvs Colaboração"*.



#### 3.2.1.2. Identificação das Unidades de Medida 

Assim como na identificação dos produtos, ao localizar o código da unidade de medida de cada item no arquivo XML, o sistema verificará na tabela Unidades Totvs Colaboração (TUNDCFOCOLAB) qual é o código da Unidade correspondente e o mesmo será utilizado na inserção do item de movimento.

Caso no XML seja encontrada alguma unidade sem correspondência o processo de Recebimento Automático será abortado mas o XML será criado na base de dados com o status 'Inconsistente'. Para verificar o erro ocorrido, basta um duplo clique no registro para que seja exibido o seu Log onde o problema será demonstrado. Quando o arquivo está Inconsistente, é necessário corrigir a causa do erro para poder tentar incluí-lo no sistema. Após a correção do erro basta alterar o seu status para 'Pendente', através do processo *“Alterar status do arquivo TOTVS Colaboração”* e o Job tentará recebê-lo automaticamente novamente em sua próxima execução. Caso opte por não acertar o erro e receber o XML manualmente o registro 'Inconsistente' deverá ser manualmente excluído da tela do **"Monitor de Arquivos Totvs Colaboração"**.



#### 3.2.1.3. Identificação dos CFOP 

Vide item 2.1. deste documento onde são explicados os critérios para seleção das Naturezas Fiscais.

Durante o recebimento da nota fiscal eletrônica, caso o sistema não seja capaz de identificar a natureza de operação, o movimento será gerado normalmente, no entanto, será atribuído ao mesmo o Status Totvs Colaboração “Natureza Incompleta’.

O Status Totvs Colaboração 'Natureza Incompleta' não influencia no status do movimento que será criado conforme o Tipo de Recebimento utilizado e os parâmetros do Tipo de Movimento gerado, ou seja, mesmo estando com esse Status Totvs Colaboração o movimento poderá gerar todas as integrações (financeira, contábil, estoque e de aprovações) parametrizadas. 

### 3.2.2. Identificação do Pedido de Compra

Os movimentos gerados com o Status Totvs Colaboração 'Natureza Incompleta' deverão ter seus CFOP informados através da edição manual dos mesmos. 



### 3.2.2. Identificação do Pedido de Compra

Após efetuar a tradução dos dados do XML o sistema irá verificar se consta do mesmo a informação do Número do Pedido no Fornecedor. Assim, caso a tag xPed (Número do Pedido no Fornecedor) do XML esteja preenchida e exista na base de dados um pedido correspondente, o mesmo será selecionado, caso contrário, o sistema buscará por um pedido de compra com status pendente, emitido para o CNPJ do fornecedor e que seja um ‘espelho’ da NF-e em questão, ou seja, o movimento deve possuir os mesmos produtos com as mesmas quantidades constantes do XML.

Se,  de acordo com a regra acima, o sistema identificar mais de um registro, nenhum pedido será selecionado.

**Importante:
**O sistema considera o número enviado na tag xPed, o qual pode localizar mais de um pedido como válido, exemplo:

xPed: 32
Número do pedido X do tipo de movimento 1.1.03: 00032
Número do pedido Y do tipo de movimento 1.1.04: 0000032

Neste exemplo, ambos os pedidos estão de acordo com os pré-requisitos para o recebimento, e por este motivo o usuário precisará informá-lo manualmente. Caso o valor da tag xPed fosse 0000032, o pedido Y seria selecionado automaticamente.

### 3.2.3. Identificação do Tipo de Recebimento NF-e

Após verificar se o Número do Pedido no Fornecedor consta do XML o sistema irá identificar o Tipo de Recebimento a ser praticado para cada NF-e. Para isso o sistema irá verificar se o emitente da mesma consta na tabela Definições de Cli/For - Totvs Colaboração e em caso positivo será utilizado o tipo de recebimento ali definido. Caso o emitente não conste dessa tabela o sistema irá utilizar o Tipo de Recebimento definido para a filial para a qual a NF-e foi emitida.

Conforme o Tipo de Recebimento utilizado, o comportamento do sistema será:



#### 3.2.3.1. Inclusão de Movimento Através do Pedido:

Caso o Tipo de Recebimento seja 'Recebimento de Pedido', a inclusão do movimento relativo à NF-e será efetuada através do processo de Recebimento/Faturamento do pedido.

Neste Tipo de Recebimento, se o sistema não conseguir localizar o pedido informado na NF-e, o processo será abortado e o motivo será informado no log de execução. 



#### 3.2.3.2. Inclusão de Movimento Sem Pedido:

Caso o Tipo de Recebimento seja 'Inclusão Direta' o sistema não irá considerar o código do pedido no XML e fará a inclusão direta do movimento com base nos dados do XML.

Assim, após a tradução, o registro correspondente à NF-e será gerado e não possuirá relacionamento com nenhum movimento de origem.

O movimento será criado, acatando a todas as parametrizações do seu tipo de movimento, ou seja, efetuando todas as integrações parametrizadas. O status do movimento será 'Normal' ou 'A Pagar' conforme sua parametrização.



#### 3.2.3.3. Inclusão de Movimento Com ou Sem Pedido:

Caso o Tipo de Recebimento seja 'Recebimento de Pedido ou Inclusão Direta'  o sistema, em primeiro lugar tenta identificar o pedido, e caso obtenha sucesso, efetuará o seu recebimento. Já caso não tenha sido identificado um pedido correspondente, o sistema incluirá o movimento através dos dados constantes do XML e sem nenhum relacionamento com qualquer outro movimento já existente na base de dados.



#### 3.2.3.4. Inclusão de Movimento Com Status Não Processado:

-   Caso o Tipo de Recebimento seja 'Inclusão Direta - Status Não Processado'  o sistema não irá considerar o código do pedido no XML e fará a inclusão direta do movimento com base nos dados do XML., mas com o status “Não Processado”;


-   Caso o Tipo de Recebimento seja 'Recebimento de Pedido ou Inclusão Direta - Status Não Processado'  o sistema, em primeiro lugar tenta identificar o pedido, e caso obtenha sucesso, efetuará o seu recebimento. Neste caso o status do movimento será  'Normal' ou 'A Pagar' conforme sua parametrização. Já caso não tenha sido identificado um pedido correspondente, o sistema incluirá o movimento através dos dados constantes do XML e sem nenhum relacionamento com qualquer outro movimento já existente na base de dados, sendo que, neste caso o movimento será incluído com o status  "Não Processado".

Um movimento criado com status 'Não Processado' existirá apenas como documentação, sem qualquer efeito sobre o sistema, ou seja, estes movimentos serão criados sem a geração de suas possíveis integrações com a Contabilidade, Financeiro e não irão gerar movimentação no estoque, lançamentos financeiros, lançamentos contábeis, workflows de aprovação, etc. Para que estes movimentos passem a ter efeito os mesmos deverão ser processados.

Após finalizar sua execução o *"Serviço Totvs Colaboração Consulta"* irá apresentar no Bloco de Notas do Log de Execução os dados de todos os movimentos que foram automaticamente gerados, conforme exemplo a seguir:



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/053.png?version=1&modificationDate=1453997771000&api=v2)

### 4\. Processar Movimento - Totvs Colaboração 

Os movimentos criados com o status "Não Processado" deverão ser processados para que passem a ter efeito no sistema.

Para processar um movimento você deve, na visão de movimentos em *"Compras" > "Recebimento de Mercadorias",* informar o tipo de movimento e a filial, selecionar o movimento e executar o processo *"Processar Movimento - Totvs Colaboração"*.

**
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/030.png?version=3&modificationDate=1453823079000&api=v2)

**

Ao processar um movimento você terá acesso à tela de tradução do respectivo XML, sendo possível selecionar vários XMLs para realizar suas devidas traduções. Para selecionar vários movimentos a serem processados, basta marcá-los na visão de movimentos ou, dentro da tela de tradução clicar no botão 'Adicionar Movimento'. 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/031.png?version=2&modificationDate=1453823701000&api=v2)

Ao clicar neste botão o sistema abrirá uma tela de filtro para que você possa informar seus critérios de seleção e em seguida definir os movimentos que serão incluídos na rotina "*"Processar Movimento - Totvs Colaboração"*.

Os movimentos selecionados serão apresentados em ordem de código do Tipo de Movimento e Número do Movimento e em formato de lista.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/032.png?version=1&modificationDate=1453824121000&api=v2)


Ao navegar entre os registros, o sistema atualizará automaticamente as informações contidas nas abas *“Identificação”, “Tradução de Itens”* e *“Tributação”.* 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/033.png?version=2&modificationDate=1453824393000&api=v2)

Caso queira excluir algum movimento do processo, basta selecioná-lo e clicar no botão 'Remover Movimento'.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/034.png?version=1&modificationDate=1453824569000&api=v2)

Veremos a seguir o conteúdo do processo *"Processar Movimento - Totvs Colaboração"*.

A aba *“Identificação”*, apresentará as informações gerais do movimento selecionado.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/035.png?version=1&modificationDate=1453824850000&api=v2)

Serão apresentados os seguintes dados: 

-   Id. Movimento – Identificador (número interno gerado automaticamente pelo sistema) do movimento;
-   Destinatário / Filial – Filial do movimento;
-   Emitente / Fornecedor – Fornecedor dos produtos;
-   Chave de Acesso da NF-e;
-   Série da NF-e;
-   Número do Documento - Número da NF-e;
-   Data de Emissão da NF-e;
-   Tipo de Movimento no qual a NF-e foi inserida.

Estes dados são importados do XML e por isso não poderão ser alterados.

Caso o sistema não tenha vinculado o XML a um pedido, por estar assim definido no Tipo de Recebimento, ou porque o número do pedido não constava do XML e o mesmo não era espelho da NF-e, o sistema permitirá que você vincule um ou mais Pedidos ao movimento que está sendo processado, bastando para isso que você marque o campo 'Receber Pedido' e clique no ícone 'Incluir' para informar o(s) pedido(s) que será(ão) recebido(s) para este movimento de NF-e.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/036.png?version=1&modificationDate=1453828245000&api=v2)

O sistema apresentará uma tela de filtros para que você selecione o(s) pedido(s) a ser(em) vinculado(s) ao movimento, sendo que o sistema filtrará apenas os pedidos que geram movimentos do tipo de movimento que está sendo processado.

No nosso caso, como o movimento que está sendo processado é do tipo 1.2.12, somente os pedidos que podem ser faturados para este tipo de movimento estarão disponíveis para realizar o vínculo.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/037.png?version=2&modificationDate=1453915776000&api=v2)

Ao ser(em) informado(s) o(s) pedido(s), o sistema imediatamente efetuará o vínculo entre a NF-e e o(s) mesmo(s), caso as informações de ambos sejam correspondentes.

Outros pedidos de compras poderão ser adicionados a qualquer momento.

Na aba *"Tradução de Itens"* serão apresentados os dados relativos aos itens da NF-e.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/038.png?version=1&modificationDate=1453910565000&api=v2)

Caso o movimento de NF-e não esteja vinculado a um pedido será permitida apenas a visualização dos seus dados, ou seja, não será permitida nenhuma alteração.

Caso o movimento de NF-e esteja vinculado a um pedido você poderá alterar o pedido que foi informado para o produto, bastando para isso, selecionar o produto cujo pedido deseja alterar, clicar no campo 'Produto no Pedido' e clicar na seta da lista de opções para que o produto do pedido seja apresentado. 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/039.png?version=2&modificationDate=1453913045000&api=v2)


Clique então no botão do lookup do produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/044.png?version=1&modificationDate=1453977260000&api=v2)


O lookup exibirá o(s) pedido(s) de compra vinculado(s) ao XML, e que ainda possuem produtos com saldo a receber para que você selecione um deles.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/046.png?version=1&modificationDate=1453978904000&api=v2)

Outro recurso disponível na aba *"Tradução de Itens"* é o botão "Múltiplos".

 O botão Múltiplos poderá ser utilizado quando o pedido selecionado pelo sistema não possuir quantidade suficiente para realizar a tradução do produto.

Assim, ao clicar no botão "Múltiplos", será criada uma réplica da linha selecionada para que o produto possa ser associado a outro registro.

Vamos considerar o nosso exemplo, onde o produto '6.0.0.01.8373'  no XML tem a quantidade 1,00, tendo sido 0,50 solicitada no pedido 26790 e mais 0,50 solicitada no pedido 111111 sendo que ambos os pedidos foram vinculados ao XML através da rotina *"Processar Movimento - Totvs Colaboração".*

Na tela de *"Tradução de Itens"* o sistema relacionará o item sempre ao primeiro pedido vinculado ao movimento.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/040.png?version=1&modificationDate=1453917382000&api=v2)


Poderemos informar então que a quantidade restante no XML foi consumida no pedido 111111.

Para isso selecione o produto e clique no botão "Múltiplos".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/041.png?version=1&modificationDate=1453917684000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/042.png?version=1&modificationDate=1453917806000&api=v2)

No registro já existente o sistema irá alterar a quantidade recebida para o produto, informando a quantidade total do pedido vinculado ao item, e irá inserir um novo registro com o produto e sua quantidade restante.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/043.png?version=1&modificationDate=1453918086000&api=v2)

A partir daí você irá proceder da mesma forma que na alteração do pedido, ou seja, clique no campo 'Produto no Pedido' e clique na seta da lista de opções.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/047.png?version=1&modificationDate=1453979772000&api=v2)

Clique então no ícone do lookup do produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/048.png?version=1&modificationDate=1453980042000&api=v2)

 O lookup exibirá o(s) pedido(s) de compra vinculado(s) ao XML, e que ainda possuem produtos com saldo a receber para que você selecione um deles.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/046.png?version=1&modificationDate=1453978904000&api=v2)

Ao ser selecionado o pedido, seus dados automaticamente irão para a aba *"Tradução de Itens".*

*
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/049.png?version=1&modificationDate=1453980550000&api=v2)
*

 Na aba *“Tributação de Itens”* serão exibidos todos os tributos parametrizados no tipo de movimento do movimento que está sendo processado.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/051.png?version=1&modificationDate=1453991056000&api=v2)

Na parte superior da tela, em *“Tributação da Nota”* serão carregadas as informações relativas aos tributos do movimento.

Na parte inferior da tela a visão contida no grupo *“Tributação dos Produtos”* será responsável por exibir os impostos dos produtos (itens de movimento).

O preenchimento dos valores relativos aos tributos (base de cálculo, alíquota e valor) será efetuado obedecendo à configuração do campo 'Busca Valores Totvs Colab' do respectivo tipo de movimento.

Para verificar a sua configuração vá em *"Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > 04.06 - Gestão Compras > 04.06.05 - Recebimentos de Materiais"* e no tipo de movimento desejado consulte este campo em *"Fis - Tributação - Item" e 'Fis - Tributação - Movimento"*. Veja abaixo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/050.png?version=1&modificationDate=1453989964000&api=v2)

O sistema informará os valores conforme o preenchimento do campo 'Busca Valores Totvs Colab' com uma das opções a seguir:

-   XML: Esta opção deverá ser selecionada caso o usuário deseje que os valores do tributo sejam aqueles recebidos do arquivo XML da NF-e, sem a necessidade de comparação com o tipo de movimento;


-   Tipo de Movimento - Não comparar com XML: Esta opção deve ser selecionada caso o usuário deseje que todas as informações do tributo sejam calculadas/buscadas pelo sistema conforme a parametrização do tipo de movimento, sem a necessidade de comparação com os valores advindos do arquivo XML;


-   Tipo de Movimento - Comparar com XML: Esta opção deve ser selecionada caso o usuário deseje que todas as informações do tributo sejam calculadas/buscadas pelo sistema, mas elas devem ser comparadas com as informações advindas do XML. No caso do Recebimento Automático, o sistema não apresentará em tela a diferença dos valores encontrados e os valores recebidos do XML, caso exista. Neste caso o usuário deverá selecionar o movimento e verificar se houve diferença indo em *"Anexos > Log de Comparação de Impostos do Totvs Colaboração".* 
    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/052.png?version=1&modificationDate=1453997040000&api=v2)


    Caso não existam diferenças entre os valores calculados pelo sistema e os constantes do XML, será apresentada a seguinte mensagem:

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/057.png?version=1&modificationDate=1454002596000&api=v2)


    Caso existam diferenças o sistema apresentará a tela com as mesmas para que possa ser verificado e o usuário Edite o movimento alterando os valores caso necessário.
    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/054.png?version=1&modificationDate=1454000421000&api=v2)



Para finalizar a execução da rotina *"Processar Movimento - Totvs Colaboração"* basta em qualquer uma das telas do processo clicar no botão 'Executar'.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/055.png?version=1&modificationDate=1454000964000&api=v2)

Após a execução o sistema apresentará a tela onde poderá ser verificado o status de conclusão do processo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/056.png?version=1&modificationDate=1454002680000&api=v2)

A rotina *"Processar Movimento - Totvs Colaboração"* será responsável por:

-   Gerar as integrações (Financeira, Contábil, Aprovação via Workflow, etc.) do movimento;
-   Realizar o vínculo do pedido selecionado com o movimento;
-   Baixar o(s) Pedido(s) de Compra selecionado(s);
-   Alterar o Status do movimento.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/058.png?version=1&modificationDate=1454061441000&api=v2)

Em caso de posterior exclusão do movimento de NF-e criado, o XML em questão será desvinculado do movimento e, voltará ao status anterior à inclusão, para que seja possível vincular um novo movimento ao mesmo. 

Neste caso a inclusão do movimento se dará de forma manual através do processo *"Inclusão de Movimento através de XML - Totvs Colaboração"*. Este processo foi remodelado e maiores esclarecimentos sobre o mesmo encontram-se no documento [TSRMCN\_ER\_Inclusão\_de\_Movimento\_através\_de\_XML\_Totvs\_Colaboração](/pages/viewpage.action?pageId=224106789)

É importante salientar que nesse primeiro momento o Recebimento Automático possui algumas restrições, não sendo permitida ainda a geração automática de movimentos de entrada que são gerados através do processo "Cópia por Referência" (devoluções, retornos, etc.) ou de movimentos que possuem controle de lote e/ou número de série.





![Imagem](https://centraldeatendimento.totvs.com/plugins/servlet/confluence/placeholder/unknown-macro?name=rate&locale=en_US&version=2)

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Erro ao Consultar XML (Estouro de SqlDateTime)

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360040363413-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Erro-ao-Consultar-XML-Estouro-de-SqlDateTime](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360040363413-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Erro-ao-Consultar-XML-Estouro-de-SqlDateTime)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
> **Data:** 6 de julho de 2022 às 14:26

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:01:00min**

**Ocorrência**Ao executar o processo de **Serviço de Consulta de Arquivos XML** sistema apresenta a mensagem abaixo:

*Erro durante a importação do arquivo 109\_20190612093924472\_4306.xml.
Mensagem Original: Estouro de SqlDateTime. Deve estar entre 1/1/1753 12:00:00 AM e 31/12/9999 11:59:59 PM..* **Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 12.1.

**Causa
**Esse incidente ocorre pois no **XML** importado está faltando uma ***tag***. A *tag* faltante é a **DhRecbto** e esta *tag* é quem determina a data e hora de autorização do XML.

**Solução**Excluir o XML importado e solicitar ao fornecedor o envio deste novamente agora com essa *tag* preenchida para nova importação.

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - IMPXML - XML status Pendente

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034644093-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-IMPXML-XML-status-Pendente](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034644093-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-IMPXML-XML-status-Pendente)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
> **Data:** 16 de outubro de 2024 às 17:12

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/16234049573783)
 Tempo aproximado para leitura: 00:01:00 min**

**Dúvida**Ao acessar tela de **Importação de arquivo XML - Cadastro de XML** o registro é exibido com status igual a **Pendente**.

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
**Solução**Um XML somente será registrado no sistema com status Pendente caso este tenha sido cadastrado manualmente através do botão Incluir da tela de Importação de arquivo XML - Cadastro de XML.

![screenshot_20190820_101537.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360044131074)

Esta não é uma prática recomendada uma vez que a versão 2.0 do processo de **Importação de Arquivo XML** não possui comunicação com o TSS e assim o XML não poderá ter seu status alterado para Validado (que é o status necessário para permitir incluir um movimento a partir dele).

A validação de um XML deve ser feita após a execução do processo de **Monitor de Arquivos - Importação de Arquivo XML**, ao executar o processo de **Serviço de Consulta de arquivo XML**, assim o XML será inserido na tela de cadastro de XML com o status igual a **Validado** caso nenhuma pendência seja identificada em seu cadastro.

Para ter o XML com o status igual a Validado exclua-o da tela de cadastro de XML, inclua o arquivo XML em sua pasta IN e execute o processo de Importação de Arquivo XML existente na tela de Monitor de arquivos.

Lembre-se o arquivo precisa seguir uma nomenclatura pré-definida pelo sistema, para saber qual é esta nomenclatura [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360019178231-RM-MAT-Como-solucionar-o-erro-N%C3%A3o-existem-arquivos-a-serem-importados-Importa%C3%A7%C3%A3o-de-NF-e-e-CT-e-sem-NEOGRID?source=search).

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - XML não enviado para pasta IN

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360027915912-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-XML-n%C3%A3o-enviado-para-pasta-IN](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360027915912-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-XML-n%C3%A3o-enviado-para-pasta-IN)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
> **Data:** 1 de agosto de 2022 às 12:34

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:01:00 min**

**Ocorrência**Portal **Neogrid** apresenta nota que não foi enviada para a pasta **IN** e não foi importada no **ERP**, ao **Reenviar ao ERP** ela passa a ser exibida na pasta.

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**Esse incidente pode vir a ocorrer devido a alguns fatores:
Ocorreram erros durante a importação do **XML** e este se encontra na pasta **RM\\ERROR**

-   XML foi consumido em Ambiente e/ou Base de testes
-   **Agendamento de** **JOB** ativo onde houve o consumo do arquivo mas ocorreram erros ao importa-lo e arquivo não se encontra na pasta RM\\ERROR.
-   Arquivo foi excluído da pasta
-   **ClientEDI** instalado em mais de uma máquina com serviço ativo
-   Pasta IN não é a configurada no serviço do ClientEDI
-   Serviço ClientEDI inativo.

**Solução**

-   Acessar pasta \\RM\\ERROR e recortar o XML para a pasta IN novamente, feito isso importe-o para o ERP manualmente ou aguarde o próximo Job Agendado
-   Verifique em sua base de testes se o XML não encontrado se encontra disponível para consulta no **Monitor de Arquivos** ou cadastrado na tela de **Cadastro de XML** do menu **Compras**
-   Verifique os Job's executados para o processo de **Importação de Arquivos XML** e busque os que apresentaram erros.
-   Verifique a pasta IN em todas as máquinas onde o ClientEDI foi instalado, o arquivo XML pode ter sido salvo em uma destas pastas
-   Verifique mediante configurações do ClientEDI a pasta configurada para envio dos arquivos
-   Ative o Serviço do ClientEDI.

Caso nenhuma destas opções seja a solução da situação entre em contato com o suporte TOTVS enviando os arquivos de extensão **.log** existentes na pasta **\\bin** do ClientEDI.

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT-  Tipos de Recebimento de NF-e TOTVS Colaboração versão 2.0

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028183351-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Tipos-de-Recebimento-de-NF-e-TOTVS-Colabora%C3%A7%C3%A3o-vers%C3%A3o-2-0](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028183351-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Tipos-de-Recebimento-de-NF-e-TOTVS-Colabora%C3%A7%C3%A3o-vers%C3%A3o-2-0)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
> **Data:** 1 de agosto de 2022 às 12:20

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:02:00 min**

**Dúvida**Quais opções o sistema disponibiliza para **Recebimento Automático de NF-e** (Compra)?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**Os Tipos de Recebimento possíveis são:

-   **Inclusão direta**: O sistema não considera o código do pedido no XML e realiza a inclusão direta do movimento de NF-e com base nos dados existentes no XML. O movimento será criado acatando a todas as parametrizações do seu tipo de movimento, ou seja, efetuando todas as integrações parametrizadas. O status do movimento será 'Normal' ou 'A Pagar' conforme a parametrização do seu tipo de movimento; 


-   **Inclusão direta - Status não processado:**O sistema não considera o código do pedido no XML e realiza a inclusão direta do movimento com base nos dados existentes no XML, só que com o status “Não Processado”.  Um movimento criado com status 'Não Processado' existirá apenas como documentação, sem qualquer efeito sobre o sistema, ou seja, estes movimentos serão criados sem a geração de suas possíveis integrações com a Contabilidade, Financeiro e Aprovações e não irão gerar movimentação no estoque, lançamentos financeiros, lançamentos contábeis, workflows de aprovação, etc. Para que estes movimentos passem a ter efeito os mesmos deverão ser processados (vide item 4 deste documento);


-   **Recebimento de Pedido:** O sistema utiliza o código do pedido contido no XML para buscar o movimento correspondente e realizar o faturamento do mesmo, sendo que se o pedido não for encontrado na base de dados o novo movimento não será criado, pois o sistema abortará o processo, informando o motivo através do log de execução;


-   **Recebimento de Pedido ou Inclusão direta:** Através do conteúdo do XML, o sistema tentará identificar o respectivo pedido, e caso seja bem-sucedido, será realizado o faturamento do mesmo. Se o sistema não conseguir identificar nenhum pedido, a inclusão do movimento será feita através dos dados constantes do XML e sem nenhum relacionamento com qualquer outro movimento já existente na base de dados, ou seja, o movimento será criado acatando a todas às parametrizações do seu tipo de movimento, efetuando todas as integrações parametrizadas. O novo movimento terá o status 'Normal' ou 'A Pagar' conforme a parametrização do seu tipo de movimento;


-   **Recebimento de Pedido ou Inclusão direta: - Status não processado:** Através do conteúdo do XML, o sistema tentará identificar o respectivo pedido, e caso seja bem-sucedido, será realizado o faturamento do mesmo.  Se o sistema não conseguir identificar nenhum pedido, a inclusão do movimento será feita através dos dados constantes do XML e sem nenhum relacionamento com qualquer outro movimento já existente na base de dados, ou seja, o movimento será criado acatando às parametrizações do seu tipo de movimento, exceto as de integração, pois o movimento será criado com o status "Não Processado".  Um movimento criado com status 'Não Processado' existirá apenas como documentação, sem qualquer efeito sobre o sistema, ou seja, estes movimentos serão criados sem a geração de suas possíveis integrações com a Contabilidade, Financeiro e Aprovações e não irão gerar movimentação no estoque, lançamentos financeiros, lançamentos contábeis, workflows de aprovação, etc. Para que estes movimentos passem a ter efeito os mesmos deverão ser processados (vide item 4 deste documento).

Para maiores informações [clique aqui](http://tdn.totvs.com/pages/releaseview.action?pageId=223159982).

---

# TSRMCN DT Recebimento Automático de NF-e

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=223159982](https://tdn.totvs.com/pages/releaseview.action?pageId=223159982)
> **Domínio:** TDN (TOTVS Developer Network)

---

# RECEBIMENTO AUTOMÁTICO DE NF-e

## Características do Requisito

**Linha de Produto:**

RM

**Segmento:**

Construção & Projetos

**Módulo:**

Totvs Gestão de Estoque, Compras e Faturamento

**Rotina:**

**Rotina**

**Nome Técnico**

Serviço Totvs Colaboração Consulta

FisTotvsColabConsultaAction

**Rotina(s) envolvida(s)**

**Nome Técnico**

Criação de Fórmulas

GlbFormulaAction

Definições de Cli/For - Totvs Colaboração

MovDefinicoesCliForTOTVSColabAction

Diferença de Tributos Calculados x Tributos do XML

MovLogComparacaoImpostoTotvsColabAction

Importação de Arquivos - Totvs Colaboração

MovTOTVSColabImportacaoArquivosProcAction

Inclusão de Movimento

MovMovimentoBaseAction

Natureza Inversa Totvs Colaboração

MovNaturezaColabAction

Parâmetros da Filial

MovFilialInfoNeoGridParamsForm

Processar Movimento - Totvs Colaboração

MovProcessarMovTOTVSColabProcAction

Produtos Totvs Colaboração

EstPrdCfoTOTVSColaboracaoAction

Recebimento de Pedido

MovFaturamentoAction

Unidades Totvs Colaboração

MovUndCfoColabAction

**Chamados Relacionados
**

TSRMCN

**País(es):**

Brasil

**Banco(s) de Dados:**

SQL e Oracle

**Tabelas Utilizadas:**

DCFOP - Naturezas Fiscais (CFOP)

DREGRAICMS - Regras de ICMS

DREGRAIPI - Regras de IPI

GFORMULA - Fórmulas

TDEFINICOESCFOCOLAB - Definições de Cli/For - Totvs Colaboração

TITMMOV - Itens de Movimento

TLOGCOMPIMPOSTOCOLAB - Diferenças de Tributos Calculados x Tributos XML

TMOV - Movimentos

TNATUREZACOLAB - Naturezas Inversas Totvs Colaboração

TNFEENTRADA - Notas Fiscais (NF-e) Recebidas

TPARFILIAL - Parâmetros da Filial

TPRDCFOCOLAB - Produtos Totvs Colaboração

TTRBMOV - Tributos do Movimento

TUNDCFOCOLAB - Unidades Totvs Colaboração

TXMOCOLAB - XML Recebidos pelo Totvs Colaboração

**Sistema(s) Operacional(is):**

Windows

**Versões/Release:**

12.1.9

## Descrição

O objetivo dessa implementação é permitir a importação automática das notas fiscais eletrônicas, através do processo do TOTVS Colaboração 2.0.

O atual processo responsável pelo recebimento da NF-e, exige a intervenção manual do usuário para resolver alguns conflitos, tais como, tradução dos produtos, seleção da natureza de operação, entre outros. A fim de simplificar este processo, está sendo implementado o recebimento automático da NF-e, o qual será capaz de solucionar todas estas questões, mediante uma prévia configuração, sendo que todas as validações/consistências executadas na criação manual do movimento serão também executadas no recebimento e criação automática da NF-e.

O Recebimento Automático da NF-e está disponível apenas para o TOTVS Colaboração 2.0, mas as melhorias de performance e de usabilidade das telas também estão disponíveis para o TOTVS Colaboração 1.0.

É importante salientar que para a utilização do TOTVS Colaboração é indispensável a contratação dos serviços da NeoGrid que é a responsável pelo processamento da leitura dos arquivos XML, pela comunicação com os webservices da SEFAZ e pelo retorno às consultas destes documentos. Estes, por sua vez, serão lidos e interpretados através da execução de JOBs específicos pelo Totvs Gestão de Estoque, Compras e Faturamento para a devida atualização dos dados no sistema.



## Procedimento para Utilização



### 1\. Parametrização

Para o correto funcionamento da rotina de Recebimento Automático das NF-e é necessário que sejam executadas algumas parametrizações. São elas:



### 1.1. Tipo de Recebimento de NF-e

O campo "Tipo de Recebimento de NF-e" define a forma como o sistema irá realizar o processo de recebimento automático das NF-e. Esta informação é parametrizável por Fornecedor do Totvs Colaboração e/ou por Filial.

Assim, quando do recebimento automático de uma NF-e, caso o emitente da mesma conste na tabela de definições do Cli/For para o Totvs Colaboração (*"Cadastros > Mais > Tabelas Auxiliares > Definições de Cli/For – Totvs Colaboração"*), essa informação prevalecerá e assim, para determinados fornecedores poderá ser definido um Tipo de Recebimento diferente do que é praticado geralmente. 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/001.png?version=3&modificationDate=1452597574000&api=v2)

Para o preenchimento deste campo é importante avaliar quais os fornecedores enviam o nº do Pedido de Compra no XML.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/002.png?version=3&modificationDate=1454321348000&api=v2)

Caso no momento do recebimento automático de uma NF-e o emitente da mesma não conste na tabela de *"Definições de Cli/For para o Totvs Colaboração"*, o sistema obedecerá ao que foi parametrizado para a filial de destino da NF-e em *"Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > 04.03  - Integrações > 04.03.03 - Fiscal > 04.03.03.01 - Dados Fiscais > Parâmetros por Filial > Informações TOTVS Colaboração"*.

Assim, para evitar erro no momento do recebimento, é imprescindível que o parâmetro da filial esteja sempre preenchido indicando como o sistema deve proceder para os fornecedores cujo Tipo de Recebimento não foi informado.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/072.png?version=1&modificationDate=1454494340000&api=v2)

Os Tipos de Recebimento possíveis são:

-   Inclusão Direta: O sistema não considera o código do pedido no XML e realiza a inclusão direta do movimento de NF-e com base nos dados existentes no XML. O movimento será criado acatando a todas as parametrizações do seu tipo de movimento, ou seja, efetuando todas as integrações parametrizadas. O status do movimento será 'Normal' ou 'A Pagar' conforme a parametrização do seu tipo de movimento; 


-    Inclusão Direta - Status Não Processado: O sistema não considera o código do pedido no XML e realiza a inclusão direta do movimento com base nos dados existentes no XML, só que com o status “Não Processado”.  Um movimento criado com status 'Não Processado' existirá apenas como documentação, sem qualquer efeito sobre o sistema, ou seja, estes movimentos serão criados sem a geração de suas possíveis integrações com a Contabilidade, Financeiro e Aprovações e não irão gerar movimentação no estoque, lançamentos financeiros, lançamentos contábeis, workflows de aprovação, etc. Para que estes movimentos passem a ter efeito os mesmos deverão ser processados (vide item 4 deste documento);


-   Recebimento de Pedido: O sistema utiliza o código do pedido contido no XML para buscar o movimento correspondente e realizar o faturamento do mesmo, sendo que se o pedido não for encontrado na base de dados o novo movimento não será criado, pois o sistema abortará o processo, informando o motivo através do log de execução;


-   Recebimento de Pedido ou Inclusão Direta: Através do conteúdo do XML, o sistema tentará identificar o respectivo pedido, e caso seja bem-sucedido, será realizado o faturamento do mesmo. Se o sistema não conseguir identificar nenhum pedido, a inclusão do movimento será feita através dos dados constantes do XML e sem nenhum relacionamento com qualquer outro movimento já existente na base de dados, ou seja, o movimento será criado acatando a todas às parametrizações do seu tipo de movimento, efetuando todas as integrações parametrizadas. O novo movimento terá o status 'Normal' ou 'A Pagar' conforme a parametrização do seu tipo de movimento;


-   Recebimento de Pedido ou Inclusão Direta - Status Não Processado: Através do conteúdo do XML, o sistema tentará identificar o respectivo pedido, e caso seja bem-sucedido, será realizado o faturamento do mesmo.  Se o sistema não conseguir identificar nenhum pedido, a inclusão do movimento será feita através dos dados constantes do XML e sem nenhum relacionamento com qualquer outro movimento já existente na base de dados, ou seja, o movimento será criado acatando às parametrizações do seu tipo de movimento, exceto as de integração, pois o movimento será criado com o status "Não Processado".  Um movimento criado com status 'Não Processado' existirá apenas como documentação, sem qualquer efeito sobre o sistema, ou seja, estes movimentos serão criados sem a geração de suas possíveis integrações com a Contabilidade, Financeiro e Aprovações e não irão gerar movimentação no estoque, lançamentos financeiros, lançamentos contábeis, workflows de aprovação, etc. Para que estes movimentos passem a ter efeito os mesmos deverão ser processados (vide item 4 deste documento).

Lembre-se que, caso para alguns fornecedores o tipo de recebimento seja diferente do que foi definido para a filial, você deve fornecer esta informação em *"Cadastros > Mais > Tabelas Auxiliares > Definições de Cli/For – Totvs Colaboração".*

Caso a filial não vá utilizar a rotina de recebimento automático da NF-e, o campo "Tipo de Recebimento de NF-e" deverá permanecer em branco. 



### 1.2. Fórmula do Tipo de Movimento para Recebimento de NF-e

Em  *“Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Integrações > Fiscal > Parâmetros por Filial > Informações Totvs Colaboração”,* deverá ser preenchido por filial o campo "Fórmula Tipo Mov. p/Recebimento NF-e**"**.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/071.png?version=1&modificationDate=1454493789000&api=v2)

Este novo parâmetro é do tipo fórmula, e assim, através do mesmo, o usuário poderá implementar uma regra específica para buscar o tipo de movimento que será utilizado tanto no recebimento automático como no recebimento manual das NF-e de cada filial.

Essa fórmula será executada para cada XML a ser recebido.

Foram criadas quatro novas funções de fórmula para auxiliar na criação dessa regra, são elas:

-   TABXMLCOLAB - Retorna o valor de um campo da tabela de XMLs do Totvs Colaboração (TNFEENTRADA);
-   DADOSXMLCOLAB - Retorna o valor de uma TAG de um XML;
-   QTDTAGSXMLCOLAB - Retorna o número de vezes que uma determinada Tag aparece no XML;
-   TABPRDCOLAB - Retorna o conteúdo de um campo do cadastro dos produtos vinculados aos itens constantes do XML.  

Explicaremos a seguir a sintaxe de cada uma dessas funções bem como daremos exemplos de utilização de todas elas.



-   TABXMLCOLAB ('NomeCampo', 'TipoRetorno') onde:
    -   NomeCampo = Nome do Campo da Tabela TNFEENTRADA. Podemos citar como campos dessa tabela o código da coligada (CODCOLIGADA), o código da filial (CODFILIAL), o código da coligada do fornecedor (CODCOLCFO), o código do fornecedor (CODCFO), a data de emissão (DATAEMISSAO), etc.;
    -   TipoRetorno = Informa o tipo de retorno relativo ao campo informado em NomeCampo, se S (string), V (valor), D (data) ou I (inteiro). 

Exemplo de fórmula de seleção do tipo de movimento utilizando a função TABXMLCOLAB:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/005.png?version=2&modificationDate=1453202335000&api=v2)

Neste exemplo o sistema irá verificar na tabela TNFEENTRADA (tabela que contém os XML importados) o registro gerado pelo XML e caso o código do fornecedor seja F00017 o movimento será gerado com o tipo 1.2.27, caso contrário o tipo do movimento será 1.2.20.



-   DADOSXMLCOLAB ('CaminhoTAG', 'NamespaceXML') onde:
    -   CaminhoTAG = Caminho da TAG desejada, separado por barra ( / ). Exemplo: '/nfeProc/NFe/infNFe/det/prod/CFOP' para o CFOP do produto do XML;
        -   IMPORTANTE: O Caminho da Tag deve ser informado exatamente como consta no XML, esta pesquisa considera letras maiúsculas e minúsculas (Case Sensitive).
    -   NamespaceXML = [http://www.portalfiscal.inf.br/nfe](http://www.portalfiscal.inf.br/nfe)

Exemplo de fórmula de seleção do tipo de movimento utilizando a função DADOSXMLCOLAB:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/006a%20-%20C%C3%B3pia.png?version=1&modificationDate=1457636982000&api=v2)

Quando a tag possuir índice, basta informá-lo o entre colchetes (\[ \]).

No exemplo acima o sistema irá retornar a informação da TAG CFOP do primeiro item da NFe, já que não informamos nenhum índice.

Veja abaixo um exemplo da mesma fórmula retornando o CFOP do 2º item da NFe:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159952/100.png?version=1&modificationDate=1469816566000&api=v2)



-   QTDTAGSXMLCOLAB ('CaminhoTAG', 'NamespaceXML') onde:
    -   CaminhoTAG = Caminho da TAG desejada, separado por barra ( / ). Exemplo: '/nfeProc/NFe/infNFe/det' para o produto do XML;
    -   NamespaceXML = [http://www.portalfiscal.inf.br/nfe](http://www.portalfiscal.inf.br/nfe)

Veja abaixo um exemplo de fórmula de seleção do tipo de movimento utilizando as funções QTDTAGSXMLCOLAB e DADOSXMLCOLAB:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/098.png?version=1&modificationDate=1458067609000&api=v2)

No exemplo acima através da função QTDTAGSXMLCOLAB o sistema irá identificar o número de itens constantes do XML. Após isso, através da função DADOSXMLCOLAB, irá percorrer todos os itens do XML e caso exista algum cujo CFOP seja 5.102 o tipo de movimento gerado será o 1.2.12.

Assim, utilizando em uma mesma fórmula estas duas funções (QTDTAGSXMLCOLAB e DADOSXMLCOLAB), o sistema irá verificar determinado dado de todos os itens constantes de um XML.



-   TABPRDCOLAB ('CodigoProdutoColab', 'NomeCampo', 'TipoRetorno') onde:
    -   CódigoProdutoColab = Código do Produto na tabela "Produtos TOTVS Colaboração";
    -   NomeCampo = Nome do campo da tabela de Produtos;
    -   TipoRetorno = Informa o tipo de retorno relativo ao campo informado em NomeCampo, se S (string), V (valor), D (data) ou I (inteiro). 

Veja abaixo um exemplo de fórmula de seleção do tipo de movimento utilizando as funções QTDTAGSXMLCOLAB, DADOSXMLCOLAB e TABPRDCOLAB:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/099.png?version=1&modificationDate=1458071338000&api=v2)

Neste exemplo, em primeiro lugar o sistema utilizará a função QTDTAGSXMLCOLAB para identificar o número de itens constantes do XML, logo depois, através da função DADOSXMLCOLAB irá percorrer todos os itens do XML e através da função TABPRDCOLAB irá identificar na tabela Produtos TOTVS Colaboração quais são os produtos vinculados aos itens do XML. Após verificar sua tabela de produtos e através  e irá analisar se algum deles possui a Tabela de Classificação 1 preenchida com 05. Em caso afirmativo o sistema irá gerar o movimento com o tipo 1.2.12, caso contrário o movimento será do tipo 1.2.11.

Assim, utilizando em uma mesma fórmula estas três funções (QTDTAGSXMLCOLAB, DADOSXMLCOLAB e TABPRDCOLAB), o sistema irá verificar determinado dado de todos os itens constantes de um XML e ainda irá compará-lo com determinado campo do seu cadastro de Produtos.



Caso para algum XML através da fórmula não seja possível definir o seu tipo de movimento, o XML será criado na base de dados com o status 'Inconsistente' e poderá ser recebido manualmente.

Este novo parâmetro somente será habilitado quando, no quadro “Tipo Documento Integração Totvs Colaboração” pelo menos uma das opções, 'Todos' ou 'Recebimento de NF-e' estiver marcada.

O recebimento manual do XML consta do documento [TSRMCN\_ER\_Inclusão\_de\_Movimento\_através\_de\_XML\_Totvs\_Colaboração](/pages/viewpage.action?pageId=224106789).  Acesse-o para maiores informações sobre este procedimento.



### 1.3. Parametrização de Local de Estoque e Condição de Pagamento

A informação do Local de Estoque é obrigatória na geração de qualquer movimento e a informação da Condição de Pagamento é obrigatória na geração de todos os movimentos que possuem Integração Financeira.

Para os movimentos gerados automaticamente através do recebimento de um pedido estes campos já virão automaticamente preenchidos mas para aqueles onde a inclusão da NF-e não possui nenhum vínculo com outro movimento,  torna-se necessário fornecer estas informações para o sistema.

Caso a sua empresa possua apenas um Local de Estoque, basta preenchê-lo na parametrização dos tipos de movimento. Para isso vá em *"Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > 04.06 - Gestão Compras > 04.06.05 - Recebimentos de Materiais"* e no tipo de movimento desejado forneça esta informação em *"Mov - Emitente/Destinatário"*. Veja abaixo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/059.png?version=2&modificationDate=1454081457000&api=v2)

O mesmo se aplica à Condição de Pagamento, ou seja, caso a sua empresa adquira produtos com apenas uma condição de pagamento basta parametrizá-la no tipo de movimento. Para isso vá em *"Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > 04.06 - Gestão Compras > 04.06.05 - Recebimentos de Materiais"* e no tipo de movimento desejado forneça esta informação em *"Fin - Condições de Pagamento"*. Veja abaixo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/060.png?version=1&modificationDate=1454081555000&api=v2)

Nos casos acima caso a edição do Local de Estoque e da Condição de Pagamento estejam como "Edita", mesmo assim o sistema ainda criará o movimento de NF-e com a informação do Local de Estoque e da Condição de Pagamento informados como "Default" nestas telas de parâmetros.

Sabemos que essa realidade não se aplica a grande parte das empresas que, em sua maioria, possuem vários Locais de Estoque e trabalham com inúmeras Condição de Pagamento, por isso para que sua empresa possa definir no sistema suas próprias regras de negócio quanto a estas informações poderão ser utilizadas "Fórmulas Visuais".

Assim, caso sua empresa  possua mais de um Local de Estoque e utilize mais de uma Condição de Pagamento, no tipo de movimento informe que estes dados deverão ser editados e não preencha a informação default, conforme demonstramos nas telas a seguir: 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/061.png?version=1&modificationDate=1454082513000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/062.png?version=1&modificationDate=1454082629000&api=v2)

Após isso vá em *"Gestão > Fórmula Visual > Fórmula Visual"*.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/063.png?version=1&modificationDate=1454083104000&api=v2)

Clique no botão "Novo" e insira sua Fórmula Visual a ser utilizada no Recebimento Automático de NF-e.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/064.png?version=1&modificationDate=1454085680000&api=v2)



Na aba *"Gatilhos"* em "Assinantes" selecione o gatilho "Antes de validar o contexto" e clique no ícone "Adicionar Objetos".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/065.png?version=1&modificationDate=1454086813000&api=v2)
 

Foram criados 2 novos objetos relativos ao processo de Recebimento Automático da NF-e do Totvs Colaboração;

-   TOTVS Colaboração / Assinante de Inclusão de Movimento por Faturamento;
-   TOTVS Colaboração / Assinante de Inclusão de Movimento.



No campo localizar digite "Totvs" para que o sistema apresente as mesmas na tela:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/066.png?version=1&modificationDate=1454087321000&api=v2)

Clique no primeiro objeto e o sistema automaticamente o levará para a tela dos Gatilhos. Repita o mesmo com o segundo objeto e clique em OK para gravar o registro.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/067.png?version=1&modificationDate=1454088044000&api=v2)
 

O sistema retornará à visão das Fórmulas Visuais. Dê duplo clique na Fórmula Visual criada para o Recebimento Automático de NF-e.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/068.png?version=2&modificationDate=1454089994000&api=v2)

Clique na aba "Atividades", desça até "RM Movimento" e você terá acesso às atividades a serem utilizadas em sua fórmula visual que são:

-   Atribuir valor no contexto do Assinante/Movimento;
-   Consulta valor no contexto do Movimento (Assinante).

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/069.png?version=1&modificationDate=1454089811000&api=v2)

A partir de agora, já de posse das informações relativas às implementações que efetuamos nas Fórmulas Visuais você poderá criar aquelas que se adequarão à sua empresa.

Neste documento citamos os campos Local de Estoque e Condição de Pagamento mas as fórmulas visuais poderão ser utilizadas para atribuir o conteúdo de outros campos do movimento ou ítens de movimento de Recebimento Automático, conforme a necessidade da sua empresa.

### 2\. Cadastros

Para o correto funcionamento da rotina de Recebimento Automático das NF-e devemos ficar atentos ao preenchimento de alguns cadastros. São eles:



### 2.1. Natureza Fiscal (CFOP)

Quando uma nota fiscal eletrônica é enviada por um fornecedor, ela contém, para cada um dos seus itens, uma natureza fiscal (CFOP) de saída, que caracteriza a operação desse fornecedor. Para a empresa que recebe esse documento entretanto, devemos encontrar a natureza fiscal (CFOP) de entrada correspondente. Essa ‘Natureza Inversa’ é indispensável para a criação automática de um movimento de NF-e.

Para definir a Natureza Inversa na geração automática do movimento de entrada, o Totvs Gestão de Estoque, Compras e Faturamento utilizará os seguintes recursos:



### 2.1.1. Regra de Seleção da Natureza (RSN)

Para cada movimento de NF-e a ser incluído, o sistema irá encontrar a Natureza Inversa do CFOP constante do arquivo XML. Para isso, é necessário saber, através das parametrizações vigentes do tipo de movimento, se o movimento a ser criado seleciona a Natureza de Operação somente para o movimento, ou se deve ser selecionada também uma Natureza para o item de movimento. Para ambos os casos, será utilizada em primeiro lugar a Regra de Seleção da Natureza (RSN), rotina hoje já existente e que tem a finalidade de encontrar a Natureza de Operação baseada nas informações do movimento e parametrizações de várias tabelas tais como: Parâmetros do Tipo de Movimento, Produto, Classificação de Produto, Naturezas Fiscais, Regras de ICMS, Regras de IPI, etc..

Para verificar como está a parametrização da sua empresa vá na etapa *"Fis - Natureza"* dos Parâmetros dos Tipos de Movimento que serão utilizados no Recebimento Automático da NF-e e verifique o preenchimento do campo 'Seleção Automática da Natureza'.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/007.png?version=1&modificationDate=1452253093000&api=v2)

Detalharemos a seguir como o sistema procederá conforme o tipo de Seleção Automática da Natureza definido para o tipo de movimento.



### 2.1.1.1. Seleção Automática da Natureza por Movimento

Neste caso, deverá ser encontrada obrigatoriamente uma Natureza de Operação analítica para o movimento.

Através dos dados do XML e das parametrizações e cadastros do sistema**,** a Regra de Seleçao da Natureza irá encontrar a(s) natureza(s) possível(eis), de forma que:

-   Se a RSN encontrar apenas uma Natureza de Operação (CFOP) possível, o movimento de NF-e será incluído com o CFOP encontrado;
-   Se a RSN encontrar mais de uma Natureza de Operação (CFOP) possível, o sistema irá verificar as opções cadastradas como Natureza Inversa da CFOP extraída do XML.

No item 2.1.2 deste documento iremos detalhar como será o comportamento do sistema caso seja necessário utilizar o cadastro de Natureza Inversa do CFOP.


### 2.1.1.2. Seleção Automática da Natureza por Item de Movimento

Nesta situação, será realizado o mesmo procedimento já explicado anteriormente para encontrar a Natureza de Operação do movimento, com a diferença desta poder ser analítica ou sintética. 

Se for encontrada uma Natureza analítica, sua ‘Raiz’ (Natureza Sintética) deve ser extraída e considerada como a Natureza do movimento enquanto que a Natureza analítica será atribuída ao item.

Caso sejam encontradas 2 naturezas sintéticas possíveis, os campos natureza 1 e natureza 2 do movimento (TMOV.IDNAT, TMOV.IDNAT2) serão preenchidos caso ambos estejam parametrizados para o tipo de movimento, mas se existirem mais de 2 naturezas sintéticas possíveis, o sistema não será capaz de resolver o conflito e, neste caso a natureza não será identificada, sendo preenchida a natureza do movimento com um CFOP de primeiro nível, ou seja, 1 ou 2 conforme a UF de origem da NF-e. 

Caso seja encontrada apenas a Natureza sintética, ela será atribuída ao movimento, e o procedimento de busca será realizado novamente para selecionar a Natureza do item. Para o item, a Regra de Seleção da Natureza irá considerar os dados do movimento e das demais tabelas citadas anteriormente (Parâmetros do Tipo de Movimento, Produto, Classificação de Produto, Naturezas Fiscais, Regras de ICMS, Regras de IPI, etc.).

Conforme já informado o sistema primeiramente executará as Regras de Seleção da Natureza, e caso a mesma retorne mais de uma opção de CFOP para os itens do movimento, o sistema utilizará o cadastro das Naturezas Inversas que detalharemos a seguir:



### 2.1.2. Natureza Inversa 

No cadastro de Natureza de Operação (CFOP), de responsabilidade do sistema Totvs Gestão Fiscal, foi criado o anexo *"Natureza Inversa Totvs Colaboração"* (TNATUREZACOLAB) onde deverão ser cadastradas as possíveis naturezas de operação inversas para uma determinada natureza sintética.

Uma natureza de operação sintética, poderá ter a ela vinculada, várias naturezas de operação inversas, sejam elas sintéticas ou analíticas.

Entre as naturezas inversas cadastradas, o usuário poderá definir "Defaults", ou seja, registros que devem ser considerados prioritários caso existam várias naturezas possíveis para um determinado movimento.

Este cadastro será utilizado apenas caso através da aplicação das Regras de Seleção da Natureza tenha sido encontrada mais de uma natureza inversa possível para o item. Neste caso o sistema procederá da seguinte forma:

-   Se apenas uma das naturezas selecionadas  estiver cadastrada como "Default", ela será utilizada para a criação de movimento;
-   Se mais de uma das naturezas selecionadas estiver cadastrada como "Default", o sistema não saberá qual Natureza Inversa escolher e o movimento será criado com o Status do Totvs Colaboração como 'Natureza Incompleta';
-   Se apenas uma das naturezas selecionadas estiver cadastrada como Natureza Inversa, mesmo não sendo como "Default", ela será utilizada para a criação do movimento;
-   Se mais de uma das naturezas selecionadas estiver cadastrada como Natureza Inversa mas nenhuma delas é "Default", o sistema não saberá qual Natureza Inversa escolher e o movimento será criado com o Status do Totvs Colaboração como ‘Natureza Incompleta';
-   Se nenhuma das naturezas selecionadas estiver no cadastro de Natureza inversa, o movimento será criado com o Status do Totvs Colaboração como ‘Natureza Incompleta'. 

É importante salientar que o Status Totvs Colaboração 'Natureza Incompleta' não influencia no status do movimento que será criado conforme o Tipo de Recebimento utilizado e os parâmetros do Tipo de Movimento gerado, ou seja, mesmo estando com esse Status Totvs Colaboração o movimento poderá gerar todas as demais integrações (financeira, contábil, estoque e de aprovações) se assim estiver parametrizado. 

Os movimentos gerados com o Status Totvs Colaboração 'Natureza Incompleta' deverão ter seus CFOP informados através de edição manual. 

Uma natureza default pode ser sintética ou analítica, entretanto, poderá haver somente uma natureza analítica default de cada 'raiz' para uma mesma natureza sintética. 

Exemplo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/009.png?version=3&modificationDate=1452601595000&api=v2)

No nosso exemplo acima a natureza 1.102.04 não pode ser default para a natureza 5.101 já que outra natureza que possui a mesma sintética (1.102.03) já foi definida como default para a mesma.

No Totvs Gestão de Estoque, Compras e Faturamento, o cadastro das naturezas inversas***,*** está disponível em *“Cadastros > Fiscais > Natureza Fiscal > Anexos > Natureza Inversa Totvs Colaboração”*.

Você poderá acessar este Anexo a partir da visão de Naturezas ou a partir da tela de edição de uma Natureza específica.

Acesso a partir da visão de Naturezas

**
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/025.png?version=1&modificationDate=1453118681000&api=v2)

**

Acesso a partir da tela de edição da Natureza:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/029.png?version=1&modificationDate=1453215427000&api=v2)


O sistema irá verificar a Natureza Inversa do CFOP constante da NF-e, ou seja as Naturezas Inversas devem estar cadastradas nas naturezas sintéticas de Saída. Assim, selecione o CFOP sintético para o qual você irá cadastrar as Naturezas Inversas e clique em *"Anexos > Natureza Inversa Totvs Colaboração"*.

Será apresentada a tela onde você poderá cadastrar as Naturezas Inversas a serem vinculadas à natureza sintética selecionada.

Informe a Natureza Inversa correspondente, marque o campo caso a mesma vá ser uma natureza 'Default' para esta natureza sintética e clique em 'Inserir'.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/011.png?version=7&modificationDate=1453215882000&api=v2)

O sistema apresentará na tela a correspondência entre as naturezas inseridas, permitindo que as demais Naturezas Inversas dessa Sintética sejam incluídas, caso existam.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/012.png?version=5&modificationDate=1453216226000&api=v2)

Informe todas as naturezas inversas de cada natureza sintética de saída e clique em 'OK' ou 'Salvar' para que o sistema as grave.



### 2.2. Produtos

Para efetuar o recebimento automático é necessário que esteja cadastrada a correlação entre os produtos constantes dos XML e os produtos constantes da sua base de dados, ou seja, dos produtos do fornecedor com os produtos do seu estoque.

A tradução dos produtos contidos no XML, que anteriormente era feita com base nas informações da tabela Produtos por Fornecedor (TPRDCFO), a partir de agora será feita através da tabela Produtos por Fornecedor Totvs Colaboração (TPRDCFOCOLAB).

Nesta nova estrutura, o usuário poderá definir um relacionamento de 1 x N, conforme exemplificamos abaixo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/013.png?version=1&modificationDate=1452620233000&api=v2)

Note que para o produto 100524 podemos ter N produtos vinculados como por exemplo os produtos Caneta Esferográfica Azul e Caneta Esferográfica Preta do fornecedor, correspondem a um só produto no estoque, Caneta Esferográfica.

As informações atualmente existentes na tabela Produtos por Fornecedor (TPRDCFO) serão automaticamente inseridas na tabela  Produtos por Fornecedor Totvs Colaboração (TPRDCFOCOLAB) através do atualizador da versão.

Para incluir novos produtos na tabela acesse *“Cadastros > Produtos > Anexos > Produtos Totvs Colaboração”.*

Como todos os demais Anexos do sistema, você poderá acessá-lo a partir da visão de Produtos ou a partir da tela de edição de determinado Produto.

Acesso através da visão de Produtos.

*
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/014.png?version=1&modificationDate=1452621293000&api=v2)
*

Acesso a partir da tela de edição do produto:

*
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/015.png?version=2&modificationDate=1452698588000&api=v2)

*

Informe o 'Código do Fornecedor', o 'Código do Produto no Fornecedor' e se este for o único produto correspondente para este fornecedor, clique em 'Salvar' ou 'OK' para efetuar a gravação do registro ou no ícone "Incluir" caso queira gravar o registro e em seguida informar um novo fornecedor e código de produto correspondente para este produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/016.png?version=2&modificationDate=1452773148000&api=v2)


Caso o produto possua mais de um produto correspondente no mesmo fornecedor, informe um deles no 'Cód. do Produto no Fornecedor' e clique em "Inserir Múltiplos" para utilizar esse recurso facilitador que permitirá que você inclua vários registros na mesma tela e grave-os de uma só vez.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/017.png?version=2&modificationDate=1452773535000&api=v2)


No campo 'Código do Produto' informe o código do produto no fornecedor e em seguida clique em "Inserir", e assim sucessivamente até que todos os códigos no fornecedor tenham sido informados.

Após informar os códigos de todos os produtos correspondentes nesse fornecedor clique em 'Salvar' ou 'OK' para efetuar a gravação do registro ou no botão "Incluir" caso queira gravar o registro e em seguida informar um novo fornecedor e produto correspondente para este produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/018.png?version=1&modificationDate=1454323556000&api=v2)


Após finalizar a inserção dos Registros Múltiplos, caso opte por "Salvar" o sistema lhe apresentará em tela a mensagem informando os registros que foram gravados.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/023.png?version=1&modificationDate=1452773698000&api=v2)


Para encerrar a informação dos fornecedores e produtos correspondentes a este produto tecle "OK" e o sistema automaticamente sairá da tela de cadastro e exibirá a visão  dos Produtos Totvs Colaboração cadastrados para o seu produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/019.png?version=1&modificationDate=1452699507000&api=v2)

Vale salientar que caso tenha(m) havido inclusão(ões) a partir da inserção de múltiplos registros será necessário clicar no botão "Atualizar Informações" para que os mesmos sejam apresentados.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/020.png?version=1&modificationDate=1452700955000&api=v2)

Conforme informamos, no Recebimento Automático da NF-e é imprescindível que todos os produtos constantes de cada XML já tenham sido vinculados com o respectivo produto da sua base de dados, caso contrário o movimento não será criado e sua entrada terá que ser efetuada manualmente.

### 2.3. Unidades 

Da mesma forma que com os produtos, para efetuar o recebimento automático é necessário que esteja cadastrada a correlação entre as unidades de medida dos produtos constantes dos XML, ou seja das unidades do fornecedor com as unidades utilizadas na sua empresa.

O sistema realizará a tradução do campo Unidade de Medida ‘CODUND’ através da tabela ‘TUNDCFOCOLAB’, onde será possível cadastrar o código da unidade no fornecedor, e informar a unidade correspondente no sistema, evitando assim, a intervenção manual do usuário durante o processo de recebimento.

Para informar a correlação entre as unidades vá em *“Cadastros > Mais... > Tabelas Auxiliares > Unidade > Anexos > Unidades Totvs Colaboração”.*

Você poderá acessar este Anexo exclusivamente da visão de Unidades.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/021.png?version=2&modificationDate=1452709532000&api=v2)

O sistema abrirá o Anexo do lado direito da tela de visão das Unidades.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/026.png?version=1&modificationDate=1453137044000&api=v2)


Clique no botão "Incluir" para inserir as Unidades dos Fornecedores que correspondem à sua Unidade selecionada.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/027.png?version=1&modificationDate=1453137417000&api=v2)


Informe ou selecione o 'Fornecedor' (código ou nome), informe o  'Código da Unidade no Fornecedor' e se esta for a única correspondência para esta unidade, clique em 'Salvar' ou 'OK' para efetuar a gravação do registro. Caso existam outros fornecedores para o qual essa unidade será utilizada clique no ícone "Incluir" para gravar o registro e em seguida informar um novo fornecedor e código de unidade correspondente para esta unidade.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/024.png?version=2&modificationDate=1453214895000&api=v2)


Para encerrar a informação dos fornecedores e unidades correspondentes a esta unidade tecle "OK" e o sistema automaticamente sairá da tela de cadastro e exibirá a visão  das Unidades Totvs Colaboração cadastradas.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/028.png?version=1&modificationDate=1453137869000&api=v2)

É importante salientar que caso o sistema não localize a unidade correspondente durante o recebimento automático, o movimento não será gerado.

Agora que já falamos sobre todos as parametrizações e cadastros necessários, vamos falar sobre o processo de Recebimento Automático da NF-e em si.



### 3\. Recebimento Automático da NFe

Conforme já dito o Recebimento Automático somente está disponível para o TOTVS Colaboração 2.0 portanto antes de ativá-lo sugerimos a verificação das parametrizações necessárias para a  atualização desta versão do Totvs Colaboração.

Acesse o manual  [TOTVS Colaboração 2.00](/pages/viewpage.action?pageId=219696881) para instruções acerca da parametrização necessária.

No processo de Recebimento Automático de NFe o Totvs Colaboração irá executar os seguintes procedimentos:



### 3.1. Importação de Arquivos - Totvs Colaboração

Esse Job  é um Job Global, responsável por buscar os documentos enviados pela ClientEDI Neogrid e distribuí-los por coligada. Neste momento, nenhuma validação é feita. Após a execução desse Job, os documentos lidos são exibidos no *“Monitor de Arquivos Totvs Colaboração”* com o status **‘**Pendente’,  aguardando a ação do segundo Job. 

O ideal é que a execução deste job seja agendada, assim, periodicamente o mesmo será executado de forma automática, buscando os XML disponibilizados.

Informamos que somente serão importados os XML que obedeçam totalmente a todos os requisitos do schema definido pela SEFAZ.

Para maiores detalhes acesse [http://tdn.totvs.com/display/public/LRM/CLB\_0002\_Jobs](https://tdn.totvs.com/display/public/LRM/CLB_0002_Jobs)



### 3.2. Serviço Totvs Colaboração Consulta

 Esse Job é responsável por validar o arquivo XML do documento enviado, de acordo com o tipo de documento em questão (CT-e, NF-e, NFS-e, etc.), através da chamada do serviço especifico para cada um deles. Serão verificados todos os documentos lidos pelo 1º Job. Caso o documento esteja válido, o registro do arquivo é excluído do monitor, e passa a ser exibido na tela do movimento conforme o tipo de movimento utilizado, indicando que o mesmo foi incluído no sistema com sucesso.

O ideal é que a execução deste job seja agendada, assim periodicamente o mesmo será executado de forma automática.

Para validar e incluir o movimento o sistema irá em primeiro lugar executar a 'Fórmula do Tipo de Movimento para Recebimento Automático de NFe" comparando-a com os dados do XML para verificar qual o tipo de movimento a ser utilizado na entrada automática da NF-e.

Após encontrar o tipo de movimento a ser incluído o sistema passará à Tradução dos Dados do Arquivo XML.

Caso através da fórmula  definida para a o tipo de movimento no Recebimento Automático (vide item 1.1 deste documento) para algum XML não seja possível definir o seu tipo de movimento esse XML será criado na base de dados com o status 'Inconsistente'. Para verificar o erro ocorrido, basta um duplo clique no registro para que seja exibido o seu Log onde o problema será demonstrado. Quando o arquivo está Inconsistente, é necessário corrigir a causa do erro para poder tentar incluí-lo no sistema. Após a correção do erro basta alterar o seu status para 'Pendente', através do processo *“Alterar status do arquivo TOTVS Colaboração”* e o Job tentará recebê-lo automaticamente novamente em sua próxima execução. Caso opte por não acertar o erro e receber o XML manualmente o registro 'Inconsistente' deverá ser excluído da tela do *"Monitor de Arquivos Totvs Colaboração"*.



### 3.2.1. Tradução dos Dados do Arquivo XML

Tendo identificado o tipo de movimento a ser utilizado, o sistema efetuará a tradução do XML utilizando-se dos dados dos cadastros que já descrevemos anteriormente:



#### 3.2.1.1. Identificação dos Produtos

A identificação de cada produto será efetuada com base nos registros da tabela Produtos Totvs Colaboração (TPRDCFOCOLAB).

Para cada produto no XML, o sistema verificará qual é o produto correspondente no seu cadastro, utilizando-o na inserção do item de movimento.

Caso no XML seja encontrado algum produto sem correspondência o processo de Recebimento Automático será abortado mas o XML será criado na base de dados  com o status  'Inconsistente'. Para verificar o erro ocorrido, basta um duplo clique no registro para que seja exibido o seu Log onde o problema será demonstrado. Quando o arquivo está Inconsistente, é necessário corrigir a causa do erro para poder tentar incluí-lo no sistema. Após a correção do erro basta alterar o seu status para 'Pendente', através do processo *“Alterar status do arquivo TOTVS Colaboração”* e o Job tentará recebê-lo automaticamente novamente em sua próxima execução. Caso opte por não acertar o erro e receber o XML manualmente o registro 'Inconsistente' deverá ser excluído da tela do *"Monitor de Arquivos Totvs Colaboração"*.



#### 3.2.1.2. Identificação das Unidades de Medida 

Assim como na identificação dos produtos, ao localizar o código da unidade de medida de cada item no arquivo XML, o sistema verificará na tabela Unidades Totvs Colaboração (TUNDCFOCOLAB) qual é o código da Unidade correspondente e o mesmo será utilizado na inserção do item de movimento.

Caso no XML seja encontrada alguma unidade sem correspondência o processo de Recebimento Automático será abortado mas o XML será criado na base de dados com o status 'Inconsistente'. Para verificar o erro ocorrido, basta um duplo clique no registro para que seja exibido o seu Log onde o problema será demonstrado. Quando o arquivo está Inconsistente, é necessário corrigir a causa do erro para poder tentar incluí-lo no sistema. Após a correção do erro basta alterar o seu status para 'Pendente', através do processo *“Alterar status do arquivo TOTVS Colaboração”* e o Job tentará recebê-lo automaticamente novamente em sua próxima execução. Caso opte por não acertar o erro e receber o XML manualmente o registro 'Inconsistente' deverá ser manualmente excluído da tela do **"Monitor de Arquivos Totvs Colaboração"**.



#### 3.2.1.3. Identificação dos CFOP 

Vide item 2.1. deste documento onde são explicados os critérios para seleção das Naturezas Fiscais.

Durante o recebimento da nota fiscal eletrônica, caso o sistema não seja capaz de identificar a natureza de operação, o movimento será gerado normalmente, no entanto, será atribuído ao mesmo o Status Totvs Colaboração “Natureza Incompleta’.

O Status Totvs Colaboração 'Natureza Incompleta' não influencia no status do movimento que será criado conforme o Tipo de Recebimento utilizado e os parâmetros do Tipo de Movimento gerado, ou seja, mesmo estando com esse Status Totvs Colaboração o movimento poderá gerar todas as integrações (financeira, contábil, estoque e de aprovações) parametrizadas. 

### 3.2.2. Identificação do Pedido de Compra

Os movimentos gerados com o Status Totvs Colaboração 'Natureza Incompleta' deverão ter seus CFOP informados através da edição manual dos mesmos. 



### 3.2.2. Identificação do Pedido de Compra

Após efetuar a tradução dos dados do XML o sistema irá verificar se consta do mesmo a informação do Número do Pedido no Fornecedor. Assim, caso a tag xPed (Número do Pedido no Fornecedor) do XML esteja preenchida e exista na base de dados um pedido correspondente, o mesmo será selecionado, caso contrário, o sistema buscará por um pedido de compra com status pendente, emitido para o CNPJ do fornecedor e que seja um ‘espelho’ da NF-e em questão, ou seja, o movimento deve possuir os mesmos produtos com as mesmas quantidades constantes do XML.

Se,  de acordo com a regra acima, o sistema identificar mais de um registro, nenhum pedido será selecionado.

**Importante:
**O sistema considera o número enviado na tag xPed, o qual pode localizar mais de um pedido como válido, exemplo:

xPed: 32
Número do pedido X do tipo de movimento 1.1.03: 00032
Número do pedido Y do tipo de movimento 1.1.04: 0000032

Neste exemplo, ambos os pedidos estão de acordo com os pré-requisitos para o recebimento, e por este motivo o usuário precisará informá-lo manualmente. Caso o valor da tag xPed fosse 0000032, o pedido Y seria selecionado automaticamente.

### 3.2.3. Identificação do Tipo de Recebimento NF-e

Após verificar se o Número do Pedido no Fornecedor consta do XML o sistema irá identificar o Tipo de Recebimento a ser praticado para cada NF-e. Para isso o sistema irá verificar se o emitente da mesma consta na tabela Definições de Cli/For - Totvs Colaboração e em caso positivo será utilizado o tipo de recebimento ali definido. Caso o emitente não conste dessa tabela o sistema irá utilizar o Tipo de Recebimento definido para a filial para a qual a NF-e foi emitida.

Conforme o Tipo de Recebimento utilizado, o comportamento do sistema será:



#### 3.2.3.1. Inclusão de Movimento Através do Pedido:

Caso o Tipo de Recebimento seja 'Recebimento de Pedido', a inclusão do movimento relativo à NF-e será efetuada através do processo de Recebimento/Faturamento do pedido.

Neste Tipo de Recebimento, se o sistema não conseguir localizar o pedido informado na NF-e, o processo será abortado e o motivo será informado no log de execução. 



#### 3.2.3.2. Inclusão de Movimento Sem Pedido:

Caso o Tipo de Recebimento seja 'Inclusão Direta' o sistema não irá considerar o código do pedido no XML e fará a inclusão direta do movimento com base nos dados do XML.

Assim, após a tradução, o registro correspondente à NF-e será gerado e não possuirá relacionamento com nenhum movimento de origem.

O movimento será criado, acatando a todas as parametrizações do seu tipo de movimento, ou seja, efetuando todas as integrações parametrizadas. O status do movimento será 'Normal' ou 'A Pagar' conforme sua parametrização.



#### 3.2.3.3. Inclusão de Movimento Com ou Sem Pedido:

Caso o Tipo de Recebimento seja 'Recebimento de Pedido ou Inclusão Direta'  o sistema, em primeiro lugar tenta identificar o pedido, e caso obtenha sucesso, efetuará o seu recebimento. Já caso não tenha sido identificado um pedido correspondente, o sistema incluirá o movimento através dos dados constantes do XML e sem nenhum relacionamento com qualquer outro movimento já existente na base de dados.



#### 3.2.3.4. Inclusão de Movimento Com Status Não Processado:

-   Caso o Tipo de Recebimento seja 'Inclusão Direta - Status Não Processado'  o sistema não irá considerar o código do pedido no XML e fará a inclusão direta do movimento com base nos dados do XML., mas com o status “Não Processado”;


-   Caso o Tipo de Recebimento seja 'Recebimento de Pedido ou Inclusão Direta - Status Não Processado'  o sistema, em primeiro lugar tenta identificar o pedido, e caso obtenha sucesso, efetuará o seu recebimento. Neste caso o status do movimento será  'Normal' ou 'A Pagar' conforme sua parametrização. Já caso não tenha sido identificado um pedido correspondente, o sistema incluirá o movimento através dos dados constantes do XML e sem nenhum relacionamento com qualquer outro movimento já existente na base de dados, sendo que, neste caso o movimento será incluído com o status  "Não Processado".

Um movimento criado com status 'Não Processado' existirá apenas como documentação, sem qualquer efeito sobre o sistema, ou seja, estes movimentos serão criados sem a geração de suas possíveis integrações com a Contabilidade, Financeiro e não irão gerar movimentação no estoque, lançamentos financeiros, lançamentos contábeis, workflows de aprovação, etc. Para que estes movimentos passem a ter efeito os mesmos deverão ser processados.

Após finalizar sua execução o *"Serviço Totvs Colaboração Consulta"* irá apresentar no Bloco de Notas do Log de Execução os dados de todos os movimentos que foram automaticamente gerados, conforme exemplo a seguir:



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/053.png?version=1&modificationDate=1453997771000&api=v2)

### 4\. Processar Movimento - Totvs Colaboração 

Os movimentos criados com o status "Não Processado" deverão ser processados para que passem a ter efeito no sistema.

Para processar um movimento você deve, na visão de movimentos em *"Compras" > "Recebimento de Mercadorias",* informar o tipo de movimento e a filial, selecionar o movimento e executar o processo *"Processar Movimento - Totvs Colaboração"*.

**
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/030.png?version=3&modificationDate=1453823079000&api=v2)

**

Ao processar um movimento você terá acesso à tela de tradução do respectivo XML, sendo possível selecionar vários XMLs para realizar suas devidas traduções. Para selecionar vários movimentos a serem processados, basta marcá-los na visão de movimentos ou, dentro da tela de tradução clicar no botão 'Adicionar Movimento'. 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/031.png?version=2&modificationDate=1453823701000&api=v2)

Ao clicar neste botão o sistema abrirá uma tela de filtro para que você possa informar seus critérios de seleção e em seguida definir os movimentos que serão incluídos na rotina "*"Processar Movimento - Totvs Colaboração"*.

Os movimentos selecionados serão apresentados em ordem de código do Tipo de Movimento e Número do Movimento e em formato de lista.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/032.png?version=1&modificationDate=1453824121000&api=v2)


Ao navegar entre os registros, o sistema atualizará automaticamente as informações contidas nas abas *“Identificação”, “Tradução de Itens”* e *“Tributação”.* 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/033.png?version=2&modificationDate=1453824393000&api=v2)

Caso queira excluir algum movimento do processo, basta selecioná-lo e clicar no botão 'Remover Movimento'.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/034.png?version=1&modificationDate=1453824569000&api=v2)

Veremos a seguir o conteúdo do processo *"Processar Movimento - Totvs Colaboração"*.

A aba *“Identificação”*, apresentará as informações gerais do movimento selecionado.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/035.png?version=1&modificationDate=1453824850000&api=v2)

Serão apresentados os seguintes dados: 

-   Id. Movimento – Identificador (número interno gerado automaticamente pelo sistema) do movimento;
-   Destinatário / Filial – Filial do movimento;
-   Emitente / Fornecedor – Fornecedor dos produtos;
-   Chave de Acesso da NF-e;
-   Série da NF-e;
-   Número do Documento - Número da NF-e;
-   Data de Emissão da NF-e;
-   Tipo de Movimento no qual a NF-e foi inserida.

Estes dados são importados do XML e por isso não poderão ser alterados.

Caso o sistema não tenha vinculado o XML a um pedido, por estar assim definido no Tipo de Recebimento, ou porque o número do pedido não constava do XML e o mesmo não era espelho da NF-e, o sistema permitirá que você vincule um ou mais Pedidos ao movimento que está sendo processado, bastando para isso que você marque o campo 'Receber Pedido' e clique no ícone 'Incluir' para informar o(s) pedido(s) que será(ão) recebido(s) para este movimento de NF-e.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/036.png?version=1&modificationDate=1453828245000&api=v2)

O sistema apresentará uma tela de filtros para que você selecione o(s) pedido(s) a ser(em) vinculado(s) ao movimento, sendo que o sistema filtrará apenas os pedidos que geram movimentos do tipo de movimento que está sendo processado.

No nosso caso, como o movimento que está sendo processado é do tipo 1.2.12, somente os pedidos que podem ser faturados para este tipo de movimento estarão disponíveis para realizar o vínculo.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/037.png?version=2&modificationDate=1453915776000&api=v2)

Ao ser(em) informado(s) o(s) pedido(s), o sistema imediatamente efetuará o vínculo entre a NF-e e o(s) mesmo(s), caso as informações de ambos sejam correspondentes.

Outros pedidos de compras poderão ser adicionados a qualquer momento.

Na aba *"Tradução de Itens"* serão apresentados os dados relativos aos itens da NF-e.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/038.png?version=1&modificationDate=1453910565000&api=v2)

Caso o movimento de NF-e não esteja vinculado a um pedido será permitida apenas a visualização dos seus dados, ou seja, não será permitida nenhuma alteração.

Caso o movimento de NF-e esteja vinculado a um pedido você poderá alterar o pedido que foi informado para o produto, bastando para isso, selecionar o produto cujo pedido deseja alterar, clicar no campo 'Produto no Pedido' e clicar na seta da lista de opções para que o produto do pedido seja apresentado. 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/039.png?version=2&modificationDate=1453913045000&api=v2)


Clique então no botão do lookup do produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/044.png?version=1&modificationDate=1453977260000&api=v2)


O lookup exibirá o(s) pedido(s) de compra vinculado(s) ao XML, e que ainda possuem produtos com saldo a receber para que você selecione um deles.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/046.png?version=1&modificationDate=1453978904000&api=v2)

Outro recurso disponível na aba *"Tradução de Itens"* é o botão "Múltiplos".

 O botão Múltiplos poderá ser utilizado quando o pedido selecionado pelo sistema não possuir quantidade suficiente para realizar a tradução do produto.

Assim, ao clicar no botão "Múltiplos", será criada uma réplica da linha selecionada para que o produto possa ser associado a outro registro.

Vamos considerar o nosso exemplo, onde o produto '6.0.0.01.8373'  no XML tem a quantidade 1,00, tendo sido 0,50 solicitada no pedido 26790 e mais 0,50 solicitada no pedido 111111 sendo que ambos os pedidos foram vinculados ao XML através da rotina *"Processar Movimento - Totvs Colaboração".*

Na tela de *"Tradução de Itens"* o sistema relacionará o item sempre ao primeiro pedido vinculado ao movimento.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/040.png?version=1&modificationDate=1453917382000&api=v2)


Poderemos informar então que a quantidade restante no XML foi consumida no pedido 111111.

Para isso selecione o produto e clique no botão "Múltiplos".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/041.png?version=1&modificationDate=1453917684000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/042.png?version=1&modificationDate=1453917806000&api=v2)

No registro já existente o sistema irá alterar a quantidade recebida para o produto, informando a quantidade total do pedido vinculado ao item, e irá inserir um novo registro com o produto e sua quantidade restante.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/043.png?version=1&modificationDate=1453918086000&api=v2)

A partir daí você irá proceder da mesma forma que na alteração do pedido, ou seja, clique no campo 'Produto no Pedido' e clique na seta da lista de opções.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/047.png?version=1&modificationDate=1453979772000&api=v2)

Clique então no ícone do lookup do produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/048.png?version=1&modificationDate=1453980042000&api=v2)

 O lookup exibirá o(s) pedido(s) de compra vinculado(s) ao XML, e que ainda possuem produtos com saldo a receber para que você selecione um deles.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/046.png?version=1&modificationDate=1453978904000&api=v2)

Ao ser selecionado o pedido, seus dados automaticamente irão para a aba *"Tradução de Itens".*

*
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/049.png?version=1&modificationDate=1453980550000&api=v2)
*

 Na aba *“Tributação de Itens”* serão exibidos todos os tributos parametrizados no tipo de movimento do movimento que está sendo processado.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/051.png?version=1&modificationDate=1453991056000&api=v2)

Na parte superior da tela, em *“Tributação da Nota”* serão carregadas as informações relativas aos tributos do movimento.

Na parte inferior da tela a visão contida no grupo *“Tributação dos Produtos”* será responsável por exibir os impostos dos produtos (itens de movimento).

O preenchimento dos valores relativos aos tributos (base de cálculo, alíquota e valor) será efetuado obedecendo à configuração do campo 'Busca Valores Totvs Colab' do respectivo tipo de movimento.

Para verificar a sua configuração vá em *"Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > 04.06 - Gestão Compras > 04.06.05 - Recebimentos de Materiais"* e no tipo de movimento desejado consulte este campo em *"Fis - Tributação - Item" e 'Fis - Tributação - Movimento"*. Veja abaixo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/050.png?version=1&modificationDate=1453989964000&api=v2)

O sistema informará os valores conforme o preenchimento do campo 'Busca Valores Totvs Colab' com uma das opções a seguir:

-   XML: Esta opção deverá ser selecionada caso o usuário deseje que os valores do tributo sejam aqueles recebidos do arquivo XML da NF-e, sem a necessidade de comparação com o tipo de movimento;


-   Tipo de Movimento - Não comparar com XML: Esta opção deve ser selecionada caso o usuário deseje que todas as informações do tributo sejam calculadas/buscadas pelo sistema conforme a parametrização do tipo de movimento, sem a necessidade de comparação com os valores advindos do arquivo XML;


-   Tipo de Movimento - Comparar com XML: Esta opção deve ser selecionada caso o usuário deseje que todas as informações do tributo sejam calculadas/buscadas pelo sistema, mas elas devem ser comparadas com as informações advindas do XML. No caso do Recebimento Automático, o sistema não apresentará em tela a diferença dos valores encontrados e os valores recebidos do XML, caso exista. Neste caso o usuário deverá selecionar o movimento e verificar se houve diferença indo em *"Anexos > Log de Comparação de Impostos do Totvs Colaboração".* 
    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/052.png?version=1&modificationDate=1453997040000&api=v2)


    Caso não existam diferenças entre os valores calculados pelo sistema e os constantes do XML, será apresentada a seguinte mensagem:

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/057.png?version=1&modificationDate=1454002596000&api=v2)


    Caso existam diferenças o sistema apresentará a tela com as mesmas para que possa ser verificado e o usuário Edite o movimento alterando os valores caso necessário.
    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/054.png?version=1&modificationDate=1454000421000&api=v2)



Para finalizar a execução da rotina *"Processar Movimento - Totvs Colaboração"* basta em qualquer uma das telas do processo clicar no botão 'Executar'.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/055.png?version=1&modificationDate=1454000964000&api=v2)

Após a execução o sistema apresentará a tela onde poderá ser verificado o status de conclusão do processo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/056.png?version=1&modificationDate=1454002680000&api=v2)

A rotina *"Processar Movimento - Totvs Colaboração"* será responsável por:

-   Gerar as integrações (Financeira, Contábil, Aprovação via Workflow, etc.) do movimento;
-   Realizar o vínculo do pedido selecionado com o movimento;
-   Baixar o(s) Pedido(s) de Compra selecionado(s);
-   Alterar o Status do movimento.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/058.png?version=1&modificationDate=1454061441000&api=v2)

Em caso de posterior exclusão do movimento de NF-e criado, o XML em questão será desvinculado do movimento e, voltará ao status anterior à inclusão, para que seja possível vincular um novo movimento ao mesmo. 

Neste caso a inclusão do movimento se dará de forma manual através do processo *"Inclusão de Movimento através de XML - Totvs Colaboração"*. Este processo foi remodelado e maiores esclarecimentos sobre o mesmo encontram-se no documento [TSRMCN\_ER\_Inclusão\_de\_Movimento\_através\_de\_XML\_Totvs\_Colaboração](/pages/viewpage.action?pageId=224106789)

É importante salientar que nesse primeiro momento o Recebimento Automático possui algumas restrições, não sendo permitida ainda a geração automática de movimentos de entrada que são gerados através do processo "Cópia por Referência" (devoluções, retornos, etc.) ou de movimentos que possuem controle de lote e/ou número de série.





![Imagem](https://centraldeatendimento.totvs.com/plugins/servlet/confluence/placeholder/unknown-macro?name=rate&locale=en_US&version=2)

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - TOTVS Colaboração: Tradução automática de itens para produto diferente do definido.

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026068751-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-TOTVS-Colabora%C3%A7%C3%A3o-Tradu%C3%A7%C3%A3o-autom%C3%A1tica-de-itens-para-produto-diferente-do-definido](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026068751-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-TOTVS-Colabora%C3%A7%C3%A3o-Tradu%C3%A7%C3%A3o-autom%C3%A1tica-de-itens-para-produto-diferente-do-definido)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
> **Data:** 1 de agosto de 2022 às 12:14

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:02:00 min**

**Ocorrência**No módulo TOTVS Gestão de Estoque, Compras e Faturamento, ao efetuar a **Inclusão** de movimento via arquivo XML, o sistema irá solicitar que o usuário escolha se deseja ou não buscar o **Pedido** de forma automática, caso seja selecionada a opção **Sim**, o sistema apresenta na tela de **Tradução** **de Itens** um código de produto divergente do configurado em **Anexos - Produtos para Importação de XML.**

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
**Causa
**Quando utilizada a busca de pedido de forma automática, o sistema aplica a seguinte regra:

1.  Verifica a tag **XPED**, **NITEMPED** e **ITEMPED**. Caso elas existam, o faturamento traduzirá os itens a partir desta sequência sem verificar o cadastro de Produtos para Importação de XML.
2.  Caso as tags citadas não estejam preenchidas, o sistema considera o cadastro de Produto - Anexos - Produtos para Importação de XML.

O fato do sistema exibir um código divergente do configurado na tela de Tradução de Itens ocorre pois, o XML recebido possui as tags XPED e NIITEMPED preenchidas com valores diferentes da sequência dos itens do pedido que está sendo faturado.

**Solução**Para solucionar esta ocorrência, será necessário refazer a tradução de itens buscando os itens de pedido que de fato correspondem ao item do XML. Outra opção, seria não utilizar a busca do pedido de forma automática, para que o cadastro de produtos traduzidos seja utilizado.

**Saiba Mais**
Para mais informações sobre a inclusão de movimento através de XML via TOTVS Colaboração, [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008532827-RM-MAT-Parametriza%C3%A7%C3%B5es-TOTVS-Colabora%C3%A7%C3%A3o-2-00?source=search).

---

# Cross Segmentos - TOTVS BackOffice Linha RM - Gestão de Estoque, Compras e Faturamento - COLAB - Não existem arquivos a serem importados na Importação de NF-e e CT-e sem NEOGRID

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360019178231-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-N%C3%A3o-existem-arquivos-a-serem-importados-na-Importa%C3%A7%C3%A3o-de-NF-e-e-CT-e-sem-NEOGRID](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360019178231-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-N%C3%A3o-existem-arquivos-a-serem-importados-na-Importa%C3%A7%C3%A3o-de-NF-e-e-CT-e-sem-NEOGRID)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
> **Data:** 24 de abril de 2025 às 10:17

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/30743488171031)
 Tempo aproximado para leitura: **00:04:00 min**

**Ocorrência**Ao acessar menu **Integrações | Monitor de Arquivos | Processos | Importação de Arquivos** é apresentada a mensagem **Não existem arquivos a serem importados,** mesmo que possua XML's na pasta.

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**Este incidente pode ocorrer por vários fatores:

-   O usuário TODOS/EVERYONE não possui acesso total ao diretório em que os XML's foram disponibilizados para importação e suas subpastas.
-   O caminho informado no Parametrizador é um caminho local e a máquina onde os XML's se encontram não é local, mas pertence á rede da empresa.

**Solução**Para solucionar essa ocorrência, realize os seguintes passos:

1.  **Permissão e compartilhamento da pasta
    **

    -   Clique com o botão direito do mouse sobre o diretório selecione a opção **Propriedades** e vá até a aba **Compartilhamento**, clique no botão **Compartilhar**. Na barra de busca digite **Todos**, atribua a permissão Leitura/Gravação e clique em **Compartilhar**.

        ![Imagem](https://totvssuporte.zendesk.com/attachments/token/ComxhnhpCm50WqJzctwktJf8a/?name=inline-1539397711.png)

    -   Compartilhe individualmente conforme o passo anterior as subpastas e todas as subpastas das subpastas.
    -   Copie o endereço da pasta compartilhada e cole-o no caminho **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Fiscal | Totvs Colaboração, campo** **Diretório Padrão para importação dos Arquivos XML**.
    -   Clique com o botão direito sobre o diretório **Propriedades | Segurança** e conceda todas as permissões para o grupo **Todos**.
        ![Imagem](https://totvssuporte.zendesk.com/attachments/token/98RwEvKY24hfCZV5kgcuYGcjx/?name=inline951876633.png)
        ​

        **Observação:** o diretório pode possuir diversas nomenclaturas, a escolha da própria empresa.

2.  **Caminho informado não é de rede
    **Geralmente o diretório compartilhado não pertence a mesma máquina em que o ERP será utilizado, ou o ambiente utilizado é um ambiente em N camadas, ou até mesmo o sistema ser utilizado por várias máquinas em uma empresa, por questões de Sistema Operacional nestes casos recomenda-se informar o caminho de rede da pasta a ser utilizada no processo.

    Exemplo de caminho local:
    ![screenshot_20181023_102347.png](https://centraldeatendimento.totvs.com/hc/article_attachments/30743455988503)

    Exemplo caminho de rede:
    ![screenshot_20181023_104039.png](https://centraldeatendimento.totvs.com/hc/article_attachments/30743455990551)


**Informações adicionais:
**

-   A nomenclatura dos arquivos XML nos diretórios, tanto para envio como retorno, deve seguir a padronização:
    **\[Tipo do Documento\]\_\[Timestamp\]\_\[Número sequencial\].xml
    **Onde:\[Tipo de Documento\] é o código do tipo de documento \[Timestamp\] é a data e hora no formato “yyyyMMddHHmmssSSS”\[Número sequencial\] é um número sequencial de quatro dígitos **(opcional)**.

    Os códigos para cada \[Tipo do Documento\] são:
    109 - NF-e
    214 - CT-e

É necessário criar a pasta IN dentro do diretório definido para salvar os arquivos XML a ser importados.

Com o objetivo de aprimorar cada vez mais nossa **comunicação** com os nossos clientes, estamos promovendo nossas comunidades no **WhatsApp**. Através delas, você é informado em primeira mão sobre artigos publicados neste portal. Eventos, notícias, comunicados urgentes… **tudo na palma da sua mão!**
Acesse via QR Code:

![Imagem](data:image/png;base64,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)

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como solucionar o erro "Não existem arquivos a serem importados" no TOTVS Colaboração 2.0

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360015933291-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-solucionar-o-erro-N%C3%A3o-existem-arquivos-a-serem-importados-no-TOTVS-Colabora%C3%A7%C3%A3o-2-0](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360015933291-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-solucionar-o-erro-N%C3%A3o-existem-arquivos-a-serem-importados-no-TOTVS-Colabora%C3%A7%C3%A3o-2-0)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
> **Data:** 1 de agosto de 2022 às 12:12

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:03:00 min**

**Ocorrência**Ao acessar menu Integrações | Monitor de Arquivos | Processos | Importação de Arquivos - Totvs Colaboração é apresentada a mensagem  **Não existem arquivos a serem importados** , mesmo que possua XMLs na pasta IN.

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**Este incidente pode ocorrer por vários fatores:

-   O usuário TODOS/EVERYONE não possui acesso total ao diretório ClientEDI NeoGrid e suas subpastas.
-   O caminho informado no parametrizador é um caminho local e a máquina onde o ClientEDI esta instalado pertence á rede da empresa.
-   O caminho informado no parametrizador está incluindo a pasta IN.

**Solução**Para solucionar essa ocorrência, realize os seguintes passos:

1.  **Permissão e compartilhamento da pasta IN
    **

    -   Clique com o botão direito do mouse sobre o diretório **ClientEDI NeoGrid** selecione a **Propriedades** e vá até a aba **Compartilhamento**, clique no botão **Compartilhar**. Na barra de busca digite **Todos**, atribua a permissão Leitura/Gravação e clique em Compartilhar.

        ![Imagem](https://totvssuporte.zendesk.com/attachments/token/ComxhnhpCm50WqJzctwktJf8a/?name=inline-1539397711.png)

    -   Compartilhe individualmente conforme o passo anterior as subpastas BIN, IN, RM e todas as subpastas de RM.
    -   Copie o endereço da pasta compartilhada e cole-o no caminho Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Fiscal | Totvs Colaboração, campo **Diretório Padrão dos Arquivos XML TOTVS Colaboração**.
    -   Clique com o botão direito sobre o diretório ClientEDI NeoGrid | Propriedades | Segurança e conceda todas as permissões para o grupo **Todos**.
        ![Imagem](https://totvssuporte.zendesk.com/attachments/token/98RwEvKY24hfCZV5kgcuYGcjx/?name=inline951876633.png)
        ​

        OBS: o diretório ClientEDI NeoGrid pode possuir diversas nomenclaturas, a escolha da própria empresa, como por exemplo NEOGRID\_CLIENT.

2.  **Caminho informado não é de rede**
    Geralmente o ClienteEDI não é instalado na mesma máquina em que o ERP será utilizado, ou o ambiente utilizado é um ambiente em N camadas, ou até mesmo o sistema ser utilizado por várias máquinas em uma empresa, por questões de Sistema Operacional nestes casos recomenda-se informar o caminho de rede da pasta IN.

    Exemplo de caminho local:
    ![screenshot_20181023_102347.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360013955591/screenshot_20181023_102347.png)

    Exemplo caminho de rede:
    ![screenshot_20181023_104039.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360013939252/screenshot_20181023_104039.png)

3.  **Incluir pasta IN no caminho do parametrizador**
    O sistema irá automaticamente buscar as subpastas da pasta bin portanto ao preencher o parâmetro o caminho a ser informado deverá ser até um diretório antes da pasta IN.

    Exemplo caminho incorreto:
    ![screenshot_20181023_104304.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360013939492/screenshot_20181023_104304.png)

    Exemplo caminho correto:
    ![screenshot_20181023_104039.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360013939252/screenshot_20181023_104039.png)

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Seleção de Filial ao incluir XML de CT-e

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360015542731-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Sele%C3%A7%C3%A3o-de-Filial-ao-incluir-XML-de-CT-e](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360015542731-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Sele%C3%A7%C3%A3o-de-Filial-ao-incluir-XML-de-CT-e)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
> **Data:** 20 de junho de 2022 às 15:47

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:01:30 min**

**Dúvida**Para qual Filial o **XML** de **CT-e** será inserido quando feita importação via **TOTVS Colaboração**?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**Quando um XML é importado e inserido no sistema algumas validações serão feitas para selecionar a filial a qual este XML pertence. No caso do CT-e existe uma particularidade importante a ser considerada.

O sistema irá considerar o tipo de tomador do XML para definir o CNPJ do tomador do Serviço. 
Segue abaixo o que cada código significa:


**Tomador de Serviço:**
0-Remetente
1-Expedidor
2-Recebedor
3-Destinatário
4-Outros

**Exemplo:**
Em um XML o tomador é 0(zero) e o remetente da nota pertence ao CNPJ 87.345.021.0001-27 que corresponde ao CNPJ da filial 100. Sendo assim o XML será inserido para a filial 100, mesmo que no XML a tag de destinatário esteja informando o CNPJ de outra filial cadastrada na base de dados.

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Seleção de Natureza de Operação utilizando TOTVS Colaboração

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360015276172-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Sele%C3%A7%C3%A3o-de-Natureza-de-Opera%C3%A7%C3%A3o-utilizando-TOTVS-Colabora%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360015276172-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Sele%C3%A7%C3%A3o-de-Natureza-de-Opera%C3%A7%C3%A3o-utilizando-TOTVS-Colabora%C3%A7%C3%A3o)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
> **Data:** 9 de abril de 2025 às 16:02

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
Tempo aproximado para leitura: **00:01:00 min

Dúvida**Como o sistema seleciona a Natureza de Operação quando movimento é inserido via arquivo XML?

**Ambiente**Cross Segmentos - Backoffice Linha RM - Gestão de Estoque, Compras e Faturamento - A partir da 11.80.

**Solução**A seleção de **CFOP** de um movimento inserido via TC é feita primeiro no item para que a partir desta seja preenchida a do movimento.

O Sistema irá se basear na CFOP informada no **XML** para que encontre no sistema qual registro selecionar a fim de caracterizar a operação inversa (fiscalmente falando). Sendo assim será necessário cadastrar essas CFOP's inversas através do menu **"Anexos -** **Natureza Inversa - TOTVS Colaboração".**

**
![screenshot_20180904_111810.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360010477171/screenshot_20180904_111810.png)

**

Levando em consideração um cadastro hipotético de natureza inversa abaixo:

\* Natureza do XML 5.102
\* Naturezas inversas:
1.101.01
1.556.02
1.556.03
1.202.01

\* A seleção da CFOP tem por base as seguintes premissas:

-   Caso o tipo de movimento possua uma CFOP Default na etapa "**Fis - Natureza**" e esta seja de último nível o sistema irá considerar esta no movimento e item de movimento, desde que atenda as regras de seleção existente no sistema (será selecionada apenas caso a CFOP default esteja disponível na lista de CFOP's do campo quando buscar os códigos utilizando o caractere %).

![screenshot_20180904_112859.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360010454032/screenshot_20180904_112859.png)

-   Sem que haja uma CFOP default nos parâmetros, o sistema irá executar a regra de seleção definida no Gestão Fiscal e dentro desta regra de seleção verificará qual CFOP das que se encontram cadastradas como natureza inversa se encaixam para seleção e preenchimento no movimento/item. Caso mais de uma se encaixe e nenhuma delas esteja marcada como default o sistema deixará o campo em branco dependendo assim do usuário preencher este campo no momento da inclusão. Caso apenas uma se encaixe esta será preenchida no movimento/item.

\* Quando no cadastro de natureza inversa não existir uma CFOP com a flag "Default" marcada o Sistema terá o comportamento abaixo:

Ao incluir o movimento o sistema executa a regra de seleção e esta retorna apenas a CFOP 1.556.03 (mesmo não estando como default) assim esta será selecionada para preenchimento.
Mas se o Sistema retornar as CFOP's 1.556.03 e 1.556.02 após aplicar a regra, então o campo será preenchido com a Natureza 1.556 tanto no item como no movimento e o usuário é quem decidirá qual delas preencher.

Caso o a regra apresente naturezas analíticas distintas o sistema remove o último nível.

A regra retorna as CFOP's 1.556.03 e 1.556.02 e 1.202.01, neste caso o sistema remove o último nível restando as CFOP's 1.556. e 1.202. Como foram identificadas duas naturezas sintéticas, o sistema remove mais um nível e chega ao resultado com a natureza sintética de código 1,  então o campo será preenchido com a Natureza 1 tanto no item como no movimento e o usuário é quem decidirá qual preencher no campo.

\* Quando no cadastro de natureza inversa existir uma CFOP com a flag "Default" marcada o Sistema terá o comportamento abaixo:

![screenshot_20180904_112129.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360010453572/screenshot_20180904_112129.png)

Ao incluir o movimento o sistema executa a regra de seleção e esta retorna apenas a CFOP 1.556.03 pois esta marcada como Default assim esta será selecionada para preenchimento tanto no movimento quanto no item de movimento.

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como utilizar e incluir movimento através do TOTVS Colaboração versão 2.0

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360011408031-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-utilizar-e-incluir-movimento-atrav%C3%A9s-do-TOTVS-Colabora%C3%A7%C3%A3o-vers%C3%A3o-2-0](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360011408031-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-utilizar-e-incluir-movimento-atrav%C3%A9s-do-TOTVS-Colabora%C3%A7%C3%A3o-vers%C3%A3o-2-0)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
> **Data:** 24 de abril de 2025 às 10:17

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/30743332011671)
Tempo aproximado para leitura: **00:04:00 min

Dúvida**Como configurar, importar, consultar, o que cadastrar e como cadastrar para utilizar o TOTVS Colaboração 2.0?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**Solução
**

Todas as rotinas responsáveis pelo recebimento de nota fiscal eletrônica foram reescritas, com o objetivo de melhorar a performance e tornar o processo mais simples e estável. Também foram refeitas todas as telas do processo atual, a fim de aprimorar a usabilidade do mesmo.


Todas as melhorias de performance e de usabilidade das telas estão disponíveis tanto para o **TOTVS Colaboração 2.0** como para o TOTVS Colaboração 1.0.


É importante salientar que para a utilização do TOTVS Colaboração é indispensável a contratação dos serviços da **NeoGrid** que é a responsável pelo processamento da leitura dos arquivos **XML**, pela comunicação com os webservices da **SEFAZ** e pelo retorno às consultas destes documentos. Caso a empresa opte por não contratar o Neogrid a obtenção destes arquivos XML deverão ser realizadas manualmente. Estes, por sua vez, serão lidos e interpretados através da execução de **Jobs** específicos pelo **TOTVS Gestão de Estoque, Compras e Faturamento** para a devida atualização dos dados no sistema.

Para maiores orientações sobre o recurso de TOTVS Colaboração 2.0 de forma completa clique [aqui](http://tdn.totvs.com/pages/releaseview.action?pageId=224106789)
Para visualizar o processo sendo executado acesse nosso [Webinar](https://youtu.be/IafxgIPdZfQ).


Com o objetivo de aprimorar cada vez mais nossa **comunicação** com os nossos clientes, estamos promovendo nossas comunidades no **WhatsApp**. Através delas, você é informado em primeira mão sobre artigos publicados neste portal. Eventos, notícias, comunicados urgentes… **tudo na palma da sua mão!**
Acesse via QR Code:

![Imagem](data:image/png;base64,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)

---

# TSRMCN ER Inclusão de Movimento através de XML TOTVS Colaboração

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=224106789](https://tdn.totvs.com/pages/releaseview.action?pageId=224106789)
> **Domínio:** TDN (TOTVS Developer Network)

---

 **Este documento é material de especificação dos requisitos de inovação, trata-se de conteúdo extremamente técnico.**                                                             

## Informações Gerais

**Especificação**

**Produto**

TOTVS Gestão de Estoque, Compras e Faturamento

**Módulo**

Recebimento de Materiais

**Segmento Executor**

Construção e Projetos

**Chamado**

TSRMCN

**Release de Entrega Planejada**

12.1.9

**Réplica**

Não

**País**

( X ) Brasil  

## Objetivo

Todas as rotinas responsáveis pelo recebimento de nota fiscal eletrônica foram reescritas, com o objetivo de melhorar a performance e tornar o processo mais simples e estável. Também foram refeitas todas as telas do processo atual, a fim de aprimorar a usabilidade do mesmo.

Todas as melhorias de performance e de usabilidade das telas estão disponíveis tanto para o TOTVS Colaboração 2.0 como para o TOTVS Colaboração 1.0.

É importante salientar que para a utilização do TOTVS Colaboração é indispensável a contratação dos serviços da NeoGrid que é a responsável pelo processamento da leitura dos arquivos XML, pela comunicação com os webservices da SEFAZ e pelo retorno às consultas destes documentos. Estes, por sua vez, serão lidos e interpretados através da execução de JOBs específicos pelo TOTVS Gestão de Estoque, Compras e Faturamento para a devida atualização dos dados no sistema.



## Definição da Regra de Negócio



### 1\. Cadastros

Para o correto funcionamento da rotina de *"Inclusão de Movimento Através do XML - NF-e"* devemos ficar atentos ao preenchimento de alguns cadastros. São eles:

### 1.1. Natureza Fiscal (CFOP)

Quando uma nota fiscal eletrônica é enviada por um fornecedor, ela contém, para cada um dos seus itens, uma natureza fiscal (CFOP) de saída, que caracteriza a operação desse fornecedor. Para a empresa que recebe esse documento entretanto, devemos encontrar a natureza fiscal (CFOP) de entrada correspondente. Essa ‘Natureza Inversa’ é indispensável para a criação de um movimento de NF-e.

Para definir a Natureza Inversa de forma automática na geração do movimento de entrada, o TOTVS Gestão de Estoque, Compras e Faturamento utilizará os seguintes recursos:



### 1.1.1. Regra de Seleção da Natureza (RSN)

Para cada movimento de NF-e a ser incluído, o sistema irá encontrar a Natureza Inversa do CFOP constante do arquivo XML. Para isso, é necessário saber, através das parametrizações vigentes do tipo de movimento, se o movimento a ser criado seleciona a Natureza de Operação somente para o movimento, ou se deve ser selecionada também uma Natureza para o item de movimento. Para ambos os casos, será utilizada em primeiro lugar a Regra de Seleção da Natureza (RSN), rotina hoje já existente e que tem a finalidade de encontrar a Natureza de Operação baseada nas informações do movimento e parametrizações de várias tabelas tais como: Parâmetros do Tipo de Movimento, Produto, Classificação de Produto, Naturezas Fiscais, Regras de ICMS, Regras de IPI, etc..

Para verificar como está a parametrização da sua empresa vá na etapa *"Fis - Natureza"* dos Parâmetros dos Tipos de Movimento que serão utilizados na Inclusão de Movimento através de XML e verifique o preenchimento do campo 'Seleção Automática da Natureza'.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/007.png?version=1&modificationDate=1452253093000&api=v2)

Detalharemos a seguir como o sistema procederá conforme o tipo de Seleção Automática da Natureza definido para o tipo de movimento.



### 1.1.1.1. Seleção Automática da Natureza por Movimento

Neste caso, deverá ser encontrada obrigatoriamente uma Natureza de Operação analítica para o movimento.

Através dos dados do XML e das parametrizações e cadastros do sistema**,** a Regra de Seleção da Natureza irá encontrar a(s) natureza(s) possível(eis), de forma que:

-   Se a RSN encontrar apenas uma Natureza de Operação (CFOP) possível, o movimento de NF-e será incluído com o CFOP encontrado;
-   Se a RSN encontrar mais de uma Natureza de Operação (CFOP) possível, o sistema irá verificar as opções cadastradas como Natureza Inversa da CFOP extraída do XML.

No item 1.1.2 deste documento iremos detalhar como será o comportamento do sistema caso seja necessário utilizar o cadastro de Natureza Inversa do CFOP.



### 1.1.1.2. Seleção Automática da Natureza por Item de Movimento

Nesta situação, será realizado o mesmo procedimento já explicado anteriormente para encontrar a Natureza de Operação do movimento, com a diferença desta poder ser analítica ou sintética. 

Se for encontrada uma Natureza analítica, sua ‘Raiz’ (Natureza Sintética) deve ser extraída e considerada como a Natureza do movimento enquanto que a Natureza analítica será atribuída ao item.

Caso sejam encontradas 2 naturezas sintéticas possíveis, os campos natureza 1 e natureza 2 do movimento serão preenchidos caso ambos estejam parametrizados para o tipo de movimento, mas se existirem mais de 2 naturezas sintéticas possíveis, o sistema não será capaz de solucionar o conflito e, neste caso a natureza não será identificada, sendo preenchida a natureza do movimento com um CFOP de primeiro nível, ou seja, 1 ou 2 conforme a UF de origem da NF-e. 

Caso seja encontrada apenas a Natureza sintética, ela será atribuída ao movimento, e o procedimento de busca será realizado novamente para selecionar a Natureza do item. Para o item, a Regra de Seleção da Natureza irá considerar os dados do movimento e das demais tabelas citadas anteriormente (Parâmetros do Tipo de Movimento, Produto, Classificação de Produto, Naturezas Fiscais, Regras de ICMS, Regras de IPI, etc.).

Conforme já informado o sistema primeiramente executará as Regras de Seleção da Natureza, e caso as mesmas retornem mais de uma opção de CFOP para os itens do movimento, o sistema utilizará o cadastro das Naturezas Inversas que detalharemos a seguir:



### 1.1.2. Natureza Inversa 

No cadastro de Natureza de Operação (CFOP), de responsabilidade do sistema TOTVS Gestão Fiscal, foi criado o anexo *"Natureza Inversa para Importação de XML"*  onde deverão ser cadastradas as possíveis naturezas de operação inversas para uma determinada natureza sintética.

Uma natureza de operação sintética, poderá ter a ela vinculada várias naturezas de operação inversas, sejam elas sintéticas ou analíticas.

Entre as naturezas inversas cadastradas, o usuário poderá definir "Defaults", ou seja, registros que devem ser considerados prioritários caso existam várias naturezas possíveis para um determinado movimento.

Este cadastro será utilizado apenas caso através da aplicação das Regras de Seleção da Natureza tenha sido encontrada mais de uma natureza inversa possível para o item. Neste caso o sistema procederá da seguinte forma:

-   Se apenas uma das naturezas selecionadas  estiver cadastrada como "Default", ela será utilizada para a criação de movimento;
-   Se mais de uma das naturezas selecionadas estiver cadastrada como "Default", o sistema não saberá qual Natureza Inversa escolher e o movimento será criado com o Status do TOTVS Colaboração como 'Natureza Incompleta';
-   Se apenas uma das naturezas selecionadas estiver cadastrada como Natureza Inversa, mesmo não sendo como "Default", ela será utilizada para a criação do movimento;
-   Se mais de uma das naturezas selecionadas estiver cadastrada como Natureza Inversa mas nenhuma delas é "Default", o sistema não saberá qual Natureza Inversa escolher e o movimento será criado com o Status do TOTVS Colaboração como ‘Natureza Incompleta';
-   Se nenhuma das naturezas selecionadas estiver no cadastro de Natureza inversa, o movimento será criado com o Status do TOTVS Colaboração como ‘Natureza Incompleta'. 

É importante salientar que o Status TOTVS Colaboração 'Natureza Incompleta' não influencia no status do movimento que será criado conforme os parâmetros do Tipo de Movimento gerado, ou seja, mesmo estando com esse Status TOTVS Colaboração o movimento poderá gerar todas as demais integrações (financeira, contábil, estoque e de aprovações) se assim estiver parametrizado. 

Os movimentos gerados com o Status TOTVS Colaboração 'Natureza Incompleta' deverão ter seus CFOP informados através de edição manual. 

Uma natureza default pode ser sintética ou analítica, entretanto, poderá haver somente uma natureza analítica default de cada 'raiz' para uma mesma natureza sintética. 

Exemplo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/009.png?version=3&modificationDate=1452601595000&api=v2)

No nosso exemplo acima a natureza 1.102.04 não pode ser default para a natureza 5.101 já que outra natureza que possui a sintética idêntica (1.102.03) já foi definida como default para a mesma.

No TOTVS Gestão de Estoque, Compras e Faturamento, o cadastro das naturezas inversas***,*** está disponível em *“Cadastros > Fiscais > Natureza Fiscal > Anexos > Natureza Inversa para Importação de XML”*.

Você poderá acessar este Anexo a partir da visão de Naturezas ou a partir da tela de edição de uma Natureza específica.

Acesso a partir da visão de Naturezas

**
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-37-6.png?version=1&modificationDate=1534459025000&api=v2)

**

Acesso a partir da tela de edição da Natureza:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-38-46.png?version=1&modificationDate=1534459126000&api=v2)


O sistema irá verificar a Natureza Inversa do CFOP constante da NF-e, ou seja as Naturezas Inversas devem estar cadastradas nas naturezas sintéticas de Saída. Assim, selecione o CFOP sintético para o qual você irá cadastrar as Naturezas Inversas e clique em *"Anexos > Natureza Inversa para Importação de XML"*.

Será apresentada a tela onde você poderá cadastrar as Naturezas Inversas a serem vinculadas à natureza sintética selecionada.

Informe a Natureza Inversa correspondente, marque o campo caso a mesma vá ser uma natureza 'Default' para esta natureza sintética e clique em 'Inserir'.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-41-35.png?version=1&modificationDate=1534459295000&api=v2)

O sistema apresentará na tela a correspondência entre as naturezas inseridas, permitindo que as demais Naturezas Inversas dessa Sintética sejam incluídas, caso existam.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-44-50.png?version=1&modificationDate=1534459489000&api=v2)

Informe todas as naturezas inversas de cada natureza sintética de saída e clique em *"OK"* ou *"Salvar"* para que o sistema as grave.



### 1.2. Produtos

Para efetuar a inclusão de um movimento através do XML é necessário que seja feita a correlação entre os produtos constantes dos XML e os produtos constantes da sua base de dados, ou seja, dos produtos do fornecedor com os produtos do seu estoque.

A tradução dos produtos contidos no XML, que anteriormente era feita com base nas informações da tabela Produtos por Fornecedor, a partir de agora será feita através da tabela Produtos para Importação de XML.

Nesta nova estrutura, o usuário poderá definir um relacionamento de 1 x N, conforme exemplificamos abaixo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/013.png?version=1&modificationDate=1452620233000&api=v2)

Note que para o produto 100524 podemos ter N produtos vinculados como por exemplo os produtos Caneta Esferográfica Azul e Caneta Esferográfica Preta do fornecedor, correspondem a um só produto no estoque, Caneta Esferográfica.

As informações atualmente existentes na tabela Produtos por Fornecedor serão automaticamente inseridas na tabela Produtos por Fornecedor para Importação de XML através do atualizador da versão.

Para incluir novos produtos na tabela acesse *“Cadastros > Produtos > Anexos > Produtos para Importação de XML”.*

Como todos os demais Anexos do sistema, você poderá acessá-lo a partir da visão de Produtos ou a partir da tela de edição de determinado Produto.

Acesso através da visão de Produtos.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_12-50-26.png?version=1&modificationDate=1534521026000&api=v2)

Acesso a partir da tela de edição do produto:

*
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_12-51-39.png?version=1&modificationDate=1534521099000&api=v2)

*

Informe o 'Código do Fornecedor', o 'Código do Produto no Fornecedor' e se este for o único produto correspondente para este fornecedor, clique em *"Salvar"* ou *"OK"* para efetuar a gravação do registro ou no ícone *"Incluir"* caso queira gravar o registro e em seguida informar um novo fornecedor e código de produto correspondente para este produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/016.png?version=2&modificationDate=1452773148000&api=v2)


Caso o produto possua mais de um produto correspondente no mesmo fornecedor, informe um deles no 'Cód. do Produto no Fornecedor' e clique em "Inserir Múltiplos" para utilizar esse recurso facilitador que permitirá que você inclua vários registros na mesma tela e grave-os de uma só vez.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/017.png?version=2&modificationDate=1452773535000&api=v2)


No campo 'Código do Produto' informe o código do produto no fornecedor e em seguida clique em "Inserir", e assim sucessivamente até que todos os códigos no fornecedor tenham sido informados.

Após informar os códigos de todos os produtos correspondentes nesse fornecedor clique em *"Salvar"* ou *"OK"* para efetuar a gravação do registro ou no botão *"Incluir"* caso queira gravar o registro e em seguida informar um novo fornecedor e produto correspondente para este produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/018.png?version=1&modificationDate=1454323556000&api=v2)


Após finalizar a inserção dos Registros Múltiplos, caso opte por "Salvar" o sistema lhe apresentará em tela a mensagem informando os registros que foram gravados.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/023.png?version=1&modificationDate=1452773698000&api=v2)


Para encerrar a informação dos fornecedores e produtos correspondentes a este produto tecle "OK" e o sistema automaticamente sairá da tela de cadastro e exibirá a visão dos Produtos para Importação de XML cadastrados para o seu produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_12-55-28.png?version=1&modificationDate=1534521329000&api=v2)

Vale salientar que caso tenha(m) havido inclusão(ões) a partir da inserção de múltiplos registros será necessário clicar no botão "Atualizar Informações" para que os mesmos sejam apresentados.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_12-56-26.png?version=1&modificationDate=1534521386000&api=v2)

Caso nem todos os produtos constantes de um XML tenham sido vinculados com o respectivo produto da sua base de dados, você também poderá informar uma vinculação no momento da tradução do XML que é executada no processo *"Inclusão de Movimento através de XML - NF-e"*.



### 1.3. Unidades 

Da mesma forma que com os produtos, para efetuar a inclusão via XML é necessário que seja feita a correlação entre as unidades de medida dos produtos constantes dos XML, ou seja das unidades do fornecedor com as unidades utilizadas na sua empresa.

O sistema realizará a tradução do campo Unidade de Medida ‘CODUND’ através da tabela ‘TUNDCFOCOLAB’, onde será possível cadastrar o código da unidade no fornecedor, e informar a unidade correspondente no sistema, podendo assim evitar a intervenção manual do usuário durante o processo de recebimento.

Para informar a correlação entre as unidades vá em *“Cadastros > Mais... > Tabelas Auxiliares > Unidade > Anexos > Unidades para Importação de XML”.*

Você poderá acessar este Anexo exclusivamente da visão de Unidades.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-48-51.png?version=1&modificationDate=1534459731000&api=v2)

O sistema abrirá o Anexo do lado direito da tela de visão das Unidades.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-51-34.png?version=1&modificationDate=1534459893000&api=v2)


Clique no botão "Incluir" para inserir as Unidades dos Fornecedores que correspondem à sua Unidade selecionada.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-52-32.png?version=1&modificationDate=1534459951000&api=v2)


Informe ou selecione o 'Fornecedor' (código ou nome), informe o  'Código da Unidade no Fornecedor' e se esta for a única correspondência para esta unidade, clique em *"Salvar"* ou *"OK"* para efetuar a gravação do registro. Caso existam outros fornecedores para o qual essa unidade será utilizada clique no ícone *"Incluir"* para gravar o registro e em seguida informar um novo fornecedor e código de unidade correspondente para esta unidade.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-52-59.png?version=1&modificationDate=1534459979000&api=v2)


Para encerrar a informação dos fornecedores e unidades correspondentes a esta unidade tecle *"OK"* e o sistema automaticamente sairá da tela de cadastro e exibirá a visão  das Unidades para Importação de XML cadastradas.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-54-58.png?version=1&modificationDate=1534460098000&api=v2)

É importante salientar que caso o sistema não localize a unidade correspondente você poderá informá-la na tradução do XML que é executada no processo *"Inclusão de Movimento através de XML - NF-e"*.

Agora que já falamos sobre os cadastros necessários, vamos falar sobre o processo de importação do XML.



### 2\. Parametrização

O processo *"Inclusão de Movimento através de XML - NF-e"* está disponível na visão de Movimentos (*"Compras > Recebimento de Materiais > Seleção do Tipo de Movimento e Filial > Processos"*) e na tela de cadastro dos XML (*"Compras > Importação de Arquivos XML - Cadastro XML > Processos"*), sendo que o sistema se comportará de forma diferente dependendo da tela de onde o processo foi acionado, conforme detalharemos a seguir:

-   Caso você acesse o processo diretamente da visão de movimentos  (*"Compras > Recebimento de Materiais > Seleção do Tipo de Movimento e Filial > Processos"*) o sistema entenderá que deve ser gerado um movimento do tipo que você informou ao entrar nesta tela, ou seja, o movimento será gerado de acordo com os parâmetros do tipo de movimento corrente;


-   Caso você acesse o processo na tela de cadastro do XML (*"Compras > Importação de Arquivo XML - Cadastro XML > Processos"*) a definição do tipo de movimento a ser gerado será através da fórmula informada no campo "Fórmula Tipo Mov. Recebimento NF-e".  Assim, optando por incluir o XML a partir desta tela o preenchimento da fórmula passa a ser obrigatório e iremos detalhá-lo a seguir:

    Em  *“Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Integrações > Fiscal > Parâmetros por Filial > Importação/Envio de Arquivos 2/2”,* deverá ser preenchido por filial o campo "Fórmula Tipo Mov. p/Recebimento NF-e**"**.

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-16_19-59-33.png?version=1&modificationDate=1534460373000&api=v2)


    Este novo parâmetro é do tipo fórmula, e assim, através do mesmo, o usuário poderá implementar uma regra específica para buscar o tipo de movimento que será utilizado tanto no recebimento automático como no recebimento manual das NF-e de cada filial.

    Essa fórmula será executada para cada XML a ser recebido.

    Foram criadas quatro novas funções de fórmula para auxiliar na criação dessa regra, são elas:

    -   TABXMLCOLAB - Retorna o valor de um campo da tabela de XMLs do Totvs Colaboração (TNFEENTRADA);
    -   DADOSXMLCOLAB - Retorna o valor de uma TAG de um XML;
    -   QTDTAGSXMLCOLAB - Retorna o número de vezes que uma determinada Tag aparece no XML;
    -   TABPRDCOLAB - Retorna o conteúdo de um campo do cadastro dos produtos vinculados aos itens constantes do XML.  

    Explicaremos a seguir a sintaxe de cada uma dessas funções bem como daremos exemplos de utilização de todas elas.



    -   TABXMLCOLAB ('NomeCampo', 'TipoRetorno') onde:
        -   NomeCampo = Nome do Campo da Tabela TNFEENTRADA. Podemos citar como campos dessa tabela o código da coligada (CODCOLIGADA), o código da filial (CODFILIAL), o código da coligada do fornecedor (CODCOLCFO), o código do fornecedor (CODCFO), a data de emissão (DATAEMISSAO), etc.;
        -   TipoRetorno = Informa o tipo de retorno relativo ao campo informado em NomeCampo, se S (string), V (valor), D (data) ou I (inteiro). 

    Exemplo de fórmula de seleção do tipo de movimento utilizando a função TABXMLCOLAB:

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/005.png?version=2&modificationDate=1453202335000&api=v2)

    Neste exemplo o sistema irá verificar na tabela TNFEENTRADA (tabela que contém os XML importados) o registro gerado pelo XML e caso o código do fornecedor seja F00017 o movimento será gerado com o tipo 1.2.27, caso contrário o tipo do movimento será 1.2.20.



    -   DADOSXMLCOLAB ('CaminhoTAG', 'NamespaceXML') onde:
        -   CaminhoTAG = Caminho da TAG desejada, separado por barra ( / ). Exemplo: '/nfeProc/NFe/infNFe/det/prod/CFOP' para o CFOP do produto do XML;
            -   IMPORTANTE: O Caminho da Tag deve ser informado exatamente como consta no XML, esta pesquisa considera letras maiúsculas e minúsculas (Case Sensitive).
        -   NamespaceXML = [http://www.portalfiscal.inf.br/nfe](http://www.portalfiscal.inf.br/nfe)

    Exemplo de fórmula de seleção do tipo de movimento utilizando a função DADOSXMLCOLAB:

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/006a%20-%20C%C3%B3pia.png?version=1&modificationDate=1457636982000&api=v2)

    Quando a tag possuir índice, basta informá-lo o entre colchetes (\[ \]).

    No exemplo acima o sistema irá retornar a informação da TAG CFOP do primeiro item da NFe, já que não informamos nenhum índice.

    Veja abaixo um exemplo da mesma fórmula retornando o CFOP do 2º item da NFe:

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159952/100.png?version=1&modificationDate=1469816566000&api=v2)



    -   QTDTAGSXMLCOLAB ('CaminhoTAG', 'NamespaceXML') onde:
        -   CaminhoTAG = Caminho da TAG desejada, separado por barra ( / ). Exemplo: '/nfeProc/NFe/infNFe/det' para o produto do XML;
        -   NamespaceXML = [http://www.portalfiscal.inf.br/nfe](http://www.portalfiscal.inf.br/nfe)

    Veja abaixo um exemplo de fórmula de seleção do tipo de movimento utilizando as funções QTDTAGSXMLCOLAB e DADOSXMLCOLAB:

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/098.png?version=1&modificationDate=1458067609000&api=v2)

    No exemplo acima através da função QTDTAGSXMLCOLAB o sistema irá identificar o número de itens constantes do XML. Após isso, através da função DADOSXMLCOLAB, irá percorrer todos os itens do XML e caso exista algum cujo CFOP seja 5.102 o tipo de movimento gerado será o 1.2.12.

    Assim, utilizando em uma mesma fórmula estas duas funções (QTDTAGSXMLCOLAB e DADOSXMLCOLAB), o sistema irá verificar determinado dado de todos os itens constantes de um XML.



    -   TABPRDCOLAB ('CodigoProdutoColab', 'NomeCampo', 'TipoRetorno') onde:
        -   CódigoProdutoColab = Código do Produto na tabela "Produtos para Importação de XML";
        -   NomeCampo = Nome do campo da tabela de Produtos;
        -   TipoRetorno = Informa o tipo de retorno relativo ao campo informado em NomeCampo, se S (string), V (valor), D (data) ou I (inteiro). 

    Veja abaixo um exemplo de fórmula de seleção do tipo de movimento utilizando as funções QTDTAGSXMLCOLAB, DADOSXMLCOLAB e TABPRDCOLAB:

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/099.png?version=1&modificationDate=1458071338000&api=v2)

    Neste exemplo, em primeiro lugar o sistema utilizará a função QTDTAGSXMLCOLAB para identificar o número de itens constantes do XML, logo depois, através da função DADOSXMLCOLAB irá percorrer todos os itens do XML e através da função TABPRDCOLAB irá identificar na tabela Produtos para Importação de XML quais são os produtos vinculados aos itens do XML. Após verificar sua tabela de produtos e através  e irá analisar se algum deles possui a Tabela de Classificação 1 preenchida com 05. Em caso afirmativo o sistema irá gerar o movimento com o tipo 1.2.12, caso contrário o movimento será do tipo 1.2.11.

    Assim, utilizando em uma mesma fórmula estas três funções (QTDTAGSXMLCOLAB, DADOSXMLCOLAB e TABPRDCOLAB), o sistema irá verificar determinado dado de todos os itens constantes de um XML e ainda irá compará-lo com determinado campo do seu cadastro de Produtos.


    Caso para algum XML através da fórmula não seja possível definir o seu tipo de movimento, o XML será criado na base de dados com o status 'Inconsistente' e poderá ser recebido manualmente.

    Poderão ser definidas fórmulas diferentes para cada filial da empresa.



### 3\. Importação e Gravação do XML

No processo de importação e gravação do XML o sistema irá executar os seguintes procedimentos:



### 3.1. Importação de Arquivos XML

Esse Job  é um Job Global, responsável por buscar os documentos armazenados na pasta de Recebimento (parametrizados em *Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Integrações > Fiscal > Dados Fiscais* > *Importação/Envio de Arquivo XML > 'Diretório Padrão para Importação dos Arquivos XML*') e distribuí-los por coligada. Neste momento, nenhuma validação é feita. Após a execução desse Job, os documentos lidos são exibidos no *“Monitor de Arquivos XML”* com o status **‘**Pendente’,  aguardando a ação do segundo Job.

O ideal é que a execução deste job seja agendada, assim, periodicamente o mesmo será executado de forma automática, buscando os XML disponibilizados.

Informamos que somente serão importados os XML que obedeçam totalmente a todos os requisitos do schema definido pela SEFAZ.

Para maiores detalhes acesse [http://tdn.TOTVS.com/display/public/LRM/CLB\_0002\_Jobs](https://tdn.totvs.com/display/public/LRM/CLB_0002_Jobs)



### 3.2. Serviço de Consulta de Arquivo XML

Esse Job é responsável por validar o arquivo XML do documento enviado, de acordo com o tipo de documento em questão (CT-e, NF-e, NFS-e, etc.), através da chamada do serviço especifico para cada um deles. Serão verificados todos os documentos lidos pelo 1º Job. Caso o documento esteja válido, o registro do arquivo é excluído do monitor, e passa a ser exibido na tela de cadastro dos XML (*"Compras > Importação de Arquivo XML - Cadastro XML"*), indicando que o mesmo foi incluído no sistema com sucesso.

O ideal é que a execução deste job seja agendada, assim periodicamente o mesmo será executado de forma automática.

Caso ocorra algum problema o XML será criado na base de dados com o status 'Inconsistente'. Para verificar o erro ocorrido, basta um duplo clique no registro para que seja exibido o seu Log onde o problema será demonstrado. Quando o arquivo está Inconsistente, é necessário corrigir a causa do erro para poder tentar incluí-lo no sistema. Após a correção do erro basta alterar o seu status para 'Pendente', através do processo *“Alterar status do arquivo”* e o Job tentará recebê-lo automaticamente em sua próxima execução. 

Estando o XML validado ele será incluído no cadastro de XML em *"Compras > Importação de Arquivo XML - Cadastro XML"*.



 

### 4\. Inclusão de Movimento Através de XML - NF-e 

Conforme já dissemos o processo de Inclusão Manual de Movimento a partir de um XML  poderá ser acessado tanto a partir da visão dos movimentos de entrada como da tela do cadastro de XML. Detalharemos cada um deles a seguir.



Para acessar o processo *"Inclusão de Movimento Através de XML - NF-e"* da visão de movimentos basta ir em *"Compras > Recebimento de Materiais > Seleção do Tipo de Movimento e Filial > Processos > Inclusão de Movimento através de XML - NF-e".*

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_13-21-24.png?version=1&modificationDate=1534522884000&api=v2)




O sistema irá lhe apresentar a tela de tradução do XML para que você informe quais são os XML cujos movimentos você deseja gerar. Para incluir os XML no processo basta clicar no botão *"Adicionar Nota"*.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_13-23-16.png?version=1&modificationDate=1534522996000&api=v2)



O sistema lhe apresentará a tela onde você poderá filtrar os XML desejados, assim, informe o critério para seleção dos XML e atendendo ao mesmo, o sistema apresentará todos os XML válidos, do tipo NF-e, cujo destinatário é a filial informada na entrada da visão de movimentos e que ainda não geraram movimento. Marque os XML cujos movimentos você deseja gerar.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/075.png?version=2&modificationDate=1454695105000&api=v2)

Você poderá selecionar vários XML para realizar suas devidas traduções, sendo que os mesmos serão apresentados ordenados através do seu ID (identificador do XML) e número da NF-e em um formato de lista. Ao navegar entre os registros, o sistema atualizará automaticamente as informações contidas nas abas *“Identificação”, “Tradução de Itens” e “Tributação”.*

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-18-14.png?version=1&modificationDate=1534529893000&api=v2)



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-19-49.png?version=1&modificationDate=1534529989000&api=v2)




 Caso queira excluir algum movimento do processo, basta selecioná-lo e clicar no botão "Remover Movimento". 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-21-56.png?version=1&modificationDate=1534530116000&api=v2)



É importante salientar que quando o processo de Inclusão de Movimento Através do XML for acessado a partir da visão de movimentos, os novos movimentos serão gerados com o tipo de movimento corrente, ou seja, o tipo de movimento informado na entrada da visão.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-25-42.png?version=1&modificationDate=1534530342000&api=v2)




Para acessar o processo *"Inclusão de Movimento Através de XML - NF-e"* a partir do cadastro de XML vá em *"Compras > Importação de Arquivo XML - Cadastro XML" ,* selecione os XML cujos movimentos serão gerados e execute o processo *"Inclusão de Movimento através de XML *\- NF-e*".*

 *![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-34-32.png?version=1&modificationDate=1534530872000&api=v2)*

Neste caso você poderá selecionar vários XML para realizar suas devidas traduções, inclusive de filiais diferentes, desde que o status dos mesmos seja 'Válido', o tipo dos mesmos seja 'NF-e' e que ainda não tenham gerado movimento. Tais XML serão apresentados na tela de tradução ordenados através do seu ID (identificador do XML) e número da NF-e em um formato de lista. Ao navegar entre os registros, o sistema atualizará automaticamente as informações contidas nas abas *“Identificação”, “Tradução de Itens” e “Tributação”.*

Além disso, da mesma forma que na visão de Movimentos aqui também você poderá optar por não selecionar nenhum XML específico e quando o sistema apresentar a tela de tradução você poderá informar quais são os XML cujos movimentos você deseja gerar, bastando para isso clicar no botão "Adicionar Nota", só que, neste caso, o sistema apresentará para sua seleção somente os XML que são da filial informada no contexto do sistema.

É importante salientar também que quando o processo de Inclusão de Movimento Através do XML for acessado a partir da tela de cadastro de XML, o tipo de movimento dos novos movimentos a serem criados será automaticamente definido pelo sistema com base na fórmula informada no campo 'Fórmula Tipo Mov. Para Recebimento de NF-e dos parâmetros de cada filial. Veja maiores detalhes no item 2 deste documento.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-39-50.png?version=1&modificationDate=1534531190000&api=v2)

Os demais dados e procedimentos da "Inclusão de Movimento Através de XML - NF-e" independem de onde o processo foi acionado e iremos descrevê-los a seguir.



A aba *“Identificação”*, apresentará as informações gerais do movimento selecionado.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-41-52.png?version=1&modificationDate=1534531312000&api=v2)

Serão apresentados os seguintes dados: 

-   Destinatário / Filial – Filial do movimento;
-   Emitente / Fornecedor – Fornecedor dos produtos;
-   Chave de Acesso da NF-e;
-   Série da NF-e;
-   Número do Documento - Número da NF-e;
-   Data de Emissão da NF-e;
-   Tipo de Movimento no qual a NF-e foi inserida.

Estes dados, em sua maioria, são importados do XML e nenhum deles poderá ser alterado.

Será possível vincular o XML a um movimento de pedido existente na base de dados, bastando para isso que você marque o campo 'Receber Pedido' e clique no ícone "Incluir" para informar o(s) pedido(s) que será(ão) recebido(s) para este XML.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-43-26.png?version=1&modificationDate=1534531406000&api=v2)

O sistema apresentará uma tela de filtros para que você selecione o(s) pedido(s) a ser(em) vinculado(s) ao movimento, sendo que o sistema filtrará apenas os pedidos que geram movimentos do tipo de movimento que será criado.

No nosso caso, como o movimento que será gerado é do tipo 1.2.12, somente os pedidos que podem ser faturados para este tipo de movimento estarão disponíveis para realizar o vínculo.

Marque os pedidos que serão vinculados com a NF-e e clique em "OK".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/004.png?version=1&modificationDate=1457375422000&api=v2)

O sistema irá associar os pedidos selecionados ao movimento que está sendo gerado e os apresentará na tela.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-52-13.png?version=1&modificationDate=1534531933000&api=v2)

Ao ser(em) informado(s) o(s) pedido(s), o sistema imediatamente efetuará o vínculo entre a NF-e e o(s) mesmo(s), caso as informações de ambos sejam correspondentes. 

Este vínculo é feito com base no Produto informado no cadastro "**Produtos para Importação de XML**". Caso seja identificado um produto com o mesmo IDPRD na lista de pedidos, o sistema cria o relacionamento. Quando existem vários pedidos para o mesmo produto da NF-e, o sistema cria o relacionamento para cada um utilizando a seguinte regra:

-   Ao criar o primeiro relacionamento com o item do pedido, o sistema automaticamente verifica se ainda existe saldo do produto em questão para a realização de novos vínculos. Caso exista, é realizada uma busca por itens de pedido que possuam o **mesmo** preço unitário do item já vinculado.
-   Em situações onde o preço do(s) produto(s) no(s) pedido(s) possam variar, foi criada a possibilidade de utilizar o recurso de tolerância, ou seja, pode ser definido no cadastro de produto uma tolerância inferior e/ou superior para o preço. Desta forma o sistema utilizará esta margem na pesquisa pelo(s) produto(s) no(s) pedido(s). Segue configuração necessária:

O Tipo de movimento de NF-e "**movimento de destino**" deve ser parametrizado para utilizar tolerância por "Preço" ou "Quantidade e Preço".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-1-18_11-57-36.png?version=1&modificationDate=1516287476000&api=v2)

No cadastro do produto devem ser preenchidos os campos Tolerância Preço (%) → Inferior e/ou Superior. Lembre-se que este campo se refere ao percentual que será utilizado no cálculo.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-1-18_11-54-56.png?version=1&modificationDate=1516287314000&api=v2)

**Importante:** 

-   A tolerância é um recurso já existente para o processo de faturamento, ou seja, deve ser analisado se o mesmo pode ser utilizado.
-   Durante o recebimento da NF-e este percentual será aplicado ao preço unitário do item do pedido relacionado ao produto da nota. Exemplo:

    Pedidos
    1º Pedido - Produto X, Quantidade 1 UN, Preço R$ 10,00
    2º Pedido - Produto X, Quantidade 1 UN, Preço R$ 10,96
    3º Pedido - Produto X, Quantidade 1 UN, Preço R$ 10,96
    4º Pedido - Produto X, Quantidade 1 UN, Preço R$ 10,97
    5º Pedido - Produto X, Quantidade 1 UN, Preço R$ 11,00

    Nota Fiscal
    Produto X, Quantidade 5 UN, Preço R$ 10,50

    Caso **não** seja utiliza a tolerância, o sistema vai relacionar o item da nota ao Item do primeiro pedido, ficando ainda um saldo de 4 UN a serem traduzidas.
    Caso **seja** utilizada uma tolerância superior e inferior de 10%,   o sistema realizará a pesquisa pelos produtos utilizando a seguinte margem:

    1º Pedido - Produto X, Quantidade 1 UN, Preço entre R$ 9,00 e R$ 11,00 
    2º Pedido - Produto X, Quantidade 1 UN, Preço entre R$ 9,864 e R$ 12,056 
    3º Pedido - Produto X, Quantidade 1 UN, Preço entre R$ 9,864 e R$ 12,056 
    4º Pedido - Produto X, Quantidade 1 UN, Preço entre R$ 9,873 e R$  12,067
    5º Pedido - Produto X, Quantidade 1 UN, Preço entre R$ 9,90 e R$ 12,10 

    Desta forma todos os itens dos pedidos serão relacionados ao produto da NF-e.



Outros pedidos de compras poderão ser adicionados a qualquer momento.

Na aba *"Identificação"* será informado ainda se a tela de edição do movimento será aberta ao fim do processo e se consequentemente o movimento poderá ser editado nesse momento.

Assim, caso queira optar por abrir o movimento automaticamente logo após a sua tradução basta deixar que o campo 'Abrir a Edição do Movimento', permaneça marcado, visto que o mesmo já virá assinalado por default.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_15-53-0.png?version=1&modificationDate=1534531980000&api=v2)

Caso este campo seja desmarcado, o sistema efetuará a inclusão através do XML  e retornará para a tela do cadastro de XML ou para a visão de Movimentos conforme a tela de onde o processo foi acionado.

Vejamos as demais abas do processo:

Na aba *"Tradução de Itens"* serão apresentados os dados relativos aos itens da NF-e.

Caso o XML não esteja vinculado a um pedido o sistema apresentará além dos dados do item no XML, a Unidade para Importação de XML, o Código e o Nome do Produto para Importação de XML, ou seja os dados do produto correspondente em sua base de dados. O sistema verificará essas informações nas tabelas "Unidades para Importação de Arquivo XML" e "Produtos para Importação de Arquivo XML".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-23-17.png?version=1&modificationDate=1534533796000&api=v2)



Caso ao verificar estas tabelas o sistema não encontre os dados correspondentes aos produtos constantes do XML, você poderá neste momento efetuar manualmente a tradução dos itens e as informações fornecidas por você serão automaticamente inseridas nestas tabelas. 

Para informar qual é o produto da sua base de dados que é correspondente ao produto constante do XML clique no campo 'Produto Tradução' e clique na seta da lista de opções. O sistema abrirá um lookup onde você poderá selecionar o produto desejado através da informação do código ou do nome do mesmo.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-25-22.png?version=1&modificationDate=1534533921000&api=v2)

Conforme a informação fornecida o sistema lhe apresentará a lista dos produtos disponíveis na sua base de dados e que atendem à seleção informada.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-27-0.png?version=1&modificationDate=1534534019000&api=v2)

O produto selecionado irá para a tela de *"Tradução de Itens"* e automaticamente será gravado pelo sistema na tabela *"Produtos para Importação de XML"*.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-28-14.png?version=1&modificationDate=1534534094000&api=v2)

O mesmo processo poderá ser efetuado para as unidades de medida existentes no XML e que não tenham sido traduzidas pelo sistema.

Além de incluir produtos e unidades que não foram traduzidos você poderá alterar os dados que o sistema trouxe na tradução optando por um outro produto ou unidade diferentes daqueles indicados pelo sistema, bastando para isso clicar nos campos 'Unidade Tradução' ou 'Produto Tradução' e fornecer as informações desejadas.

Caso o XML esteja vinculado a pedido(s) os campos 'Código do Produto de Tradução' e 'Produto Tradução' permanecerão em branco e o sistema apresentará além dos dados do item no XML, os campos relativos ao Pedido. Estes dados também serão preenchidos com base no conteúdo das tabelas "Unidades para Importação de Arquivo XML" e "Produtos para Importação de Arquivo XML".

Assim, caso o campo "Receber Pedido" esteja marcado, os quatro campos referentes ao pedido (Número do Pedido, Código do Produto do Pedido, Número Sequencial do Item no Pedido e o Nome do Produto do Pedido) serão exibidos na aba *"Tradução de Itens".*

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-30-35.png?version=1&modificationDate=1534534234000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-34-48.png?version=1&modificationDate=1534534487000&api=v2)

Caso durante o processo de Inclusão do Movimento via XML, o campo "Receber Pedido" seja, em algum momento, desmarcado, os campos referentes ao pedido (Número do Pedido, Código do Produto do Pedido, Número Sequencial do Item no Pedido e o Nome do Produto do Pedido) não mais serão apresentados em tela, já que não haverá a necessidade de utilização dos mesmos.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-36-17.png?version=1&modificationDate=1534534577000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-38-35.png?version=1&modificationDate=1534534714000&api=v2)

Você poderá alterar o produto do pedido que foi informado pelo sistema, bastando para isso, selecionar o item cujo produto do pedido deseja alterar, clicar no campo 'Produto no Pedido' e clicar na seta da lista de opções para que os produtos dos pedidos vinculados ao XML sejam apresentados. 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-42-26.png?version=1&modificationDate=1534534945000&api=v2)


Clique então no botão do lookup do produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/044.png?version=1&modificationDate=1453977260000&api=v2)


O lookup exibirá o(s) produto(s) do(s) pedido(s) de compra vinculado(s) ao XML, e que ainda possuem saldo a receber, para que você selecione um deles.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-43-25.png?version=1&modificationDate=1534535005000&api=v2)

Se nesse momento ainda existir algum item no XML cuja tradução ainda não consta da tabela *"Produtos para Importação de XML"* o sistema não conseguirá localizá-lo nos pedidos vinculados, mas você poderá informar a tradução diretamente nesta tela.

Caso selecione o produto a partir do campo  'Produto Tradução' o sistema exibirá todos os registros da base para que você possa definir qual produto será utilizado na amarração, já se o produto existir em um dos pedidos vinculados clique no campo 'Produto do Pedido' e o lookup exibirá todos os produtos do(s) pedido(s) de compra vinculado(s) ao XML, e à medida em que a tradução estiver sendo realizada, o sistema irá consumir o saldo dos pedidos até que os mesmos sejam zerados.

Outro recurso disponível na aba *"Tradução de Itens"* é o botão "Múltiplos".

O botão Múltiplos poderá ser utilizado quando o pedido selecionado pelo sistema não possuir quantidade suficiente para realizar a tradução do produto.

Assim, ao clicar no botão "Múltiplos", será criada uma réplica da linha selecionada para que o produto possa ser associado a outro registro.

Vamos considerar o nosso exemplo, onde o produto '6.0.0.01.8373'  no XML tem a quantidade 1,00, tendo sido 0,50 solicitada no pedido 26790 e mais 0,50 solicitada no pedido 111111 sendo que ambos os pedidos foram vinculados ao XML.

Na tela de *"Tradução de Itens"* o sistema relacionará o item sempre ao primeiro pedido vinculado ao XML.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_16-44-15.png?version=1&modificationDate=1534535055000&api=v2)


Poderemos informar então que a quantidade restante no XML foi consumida no pedido 111111.

Para isso selecione o produto e clique no botão "Múltiplos".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_19-55-35.png?version=1&modificationDate=1534546535000&api=v2)

No registro já existente o sistema irá alterar a quantidade recebida para o produto, informando a quantidade total do pedido vinculado ao item, e irá inserir um novo registro com o produto e sua quantidade restante.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_19-57-3.png?version=1&modificationDate=1534546623000&api=v2)

A partir daí você irá proceder da mesma forma que na alteração do pedido, ou seja, clique no campo 'Produto no Pedido' e clique na seta da lista de opções.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_19-58-43.png?version=1&modificationDate=1534546723000&api=v2)

Clique então no ícone do lookup do produto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_20-0-11.png?version=1&modificationDate=1534546811000&api=v2)

 O lookup exibirá o(s) produto(s) do(s) pedido(s) de compra vinculado(s) ao XML, e que ainda possuem saldo a receber para que você selecione um deles.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_20-0-53.png?version=1&modificationDate=1534546853000&api=v2)

Ao ser selecionado o pedido, seus dados automaticamente irão para a aba *"Tradução de Itens".*

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_20-4-39.png?version=1&modificationDate=1534547081000&api=v2)

Na aba *“Tributação de Itens”* serão exibidos todos os tributos parametrizados no tipo de movimento do movimento que será gerado.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_20-5-6.png?version=1&modificationDate=1534547106000&api=v2)

Na parte superior da tela, em *“Tributação da Nota”* serão carregadas as informações relativas aos tributos do movimento.

Na parte inferior da tela a visão contida no grupo *“Tributação dos Produtos”* será responsável por exibir os impostos dos produtos (itens de movimento).

O preenchimento dos valores relativos aos tributos (base de cálculo, alíquota e valor) será efetuado obedecendo à configuração do campo 'Busca Valores TOTVS Colab' do respectivo tipo de movimento.

Para verificar a sua configuração vá em *"Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > 04.06 - Gestão Compras > 04.06.05 - Recebimentos de Materiais"* e no tipo de movimento desejado consulte este campo em *"Fis - Tributação - Item" e 'Fis - Tributação - Movimento"*. 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/223159982/050.png?version=1&modificationDate=1453989964000&api=v2)

O sistema informará os valores conforme o preenchimento do campo 'Busca Valores TOTVS Colab' com uma das opções a seguir:

-   XML: Esta opção deverá ser selecionada caso deseje que os valores do tributo sejam aqueles recebidos do arquivo XML da NF-e, sem a necessidade de comparação com o tipo de movimento;


-   XML - Calcular valor do ICMS ST: Disponível somente para o tributo ICMS ST. Esta opção deverá ser selecionada caso deseje que os valores do tributo sejam aqueles recebidos do arquivo XML da NF-e, sem a necessidade de comparação com o tipo de movimento. Porém, ao selecionar esse opção, o sistema irá calcular o valor do ICMS ST multiplicando Base de Cálculo do ICMS ST x Aliquota do ST - valores esses que serão selecionados do XML.

             Exemplo: Base de Cálculo do ICMS ST no XML = 20 e Aliquota do ICMS ST no XML = 18%. Dessa forma, o tributo seria carregado no Movimento com Valor do ICMS ST = 3,6

-   Tipo de Movimento - Não comparar com XML: Esta opção deve ser selecionada caso deseje que todas as informações do tributo sejam calculadas/buscadas pelo sistema conforme a parametrização do tipo de movimento, sem a necessidade de comparação com os valores advindos do arquivo XML;


-   Tipo de Movimento - Comparar com XML: Esta opção deve ser selecionada caso deseje que todas as informações do tributo sejam calculadas/buscadas pelo sistema, mas elas devem ser comparadas com as informações advindas do XML. Caso tenha optado por executar esse processo sem abrir a edição do movimento, caso existam diferenças entre os tributos calculados e os constantes do XML, ao final da execução o sistema irá lhe apresentar uma mensagem com essa informação, bastando que você vá à edição do movimento se quiser alterar os valores que foram calculados. Já caso tenha optado por executar esse processo e 'Abrir a Edição do Movimento' quando for solicitada a gravação do movimento o sistema abrirá a tela com a diferença dos tributos caso existam. Detalharemos essa opção mais a frente.
-   XML - Incluir Valor do ICMS Próprio no ST: Disponível somente para o tributo ICMS ST. Esta opção deverá ser selecionada caso deseje que os valores do tributo sejam aqueles recebidos do arquivo XML da NF-e, sem a necessidade de comparação com o tipo de movimento. Porém, ao selecionar esse opção, o sistema somará o Valor do ICMS Próprio, ao Valor do ICMS ST no momento da importação do XML - valores esses que serão selecionados do XML. Exemplo: Valor do ICMS no XML = 5 e Valor do ICMS ST no XML = 12. Dessa forma, o tributo seria carregado no Movimento com Valor do ICMS = 5 e o Valor do ICMS ST = 17.

Para finalizar a execução da rotina *"Inclusão de Movimento através de XML - NF-e"* realizando a inclusão do movimento, basta em qualquer uma das telas do processo clicar no botão 'Executar'.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_20-8-17.png?version=1&modificationDate=1534547298000&api=v2)

Se o campo 'Abrir Edição do Movimento' não estiver marcado o sistema efetuará a execução do processo.

Caso tenha optado por não 'Abrir a Edição do Movimento' após a execução do processo o sistema apresentará a tela com o resultado do processamento:



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_20-14-10.png?version=1&modificationDate=1534547650000&api=v2)

Se os tributos do tipo de movimento estiverem parametrizados como "Tipo de Movimento - Comparar com XML" e for encontrada alguma diferença entre os valores calculados pelo sistema e os valores constantes do XML o movimento será incluído normalmente mas ao final do processo o sistema avisará e apresentará o identificador do movimento onde a divergência foi detectada.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/image2018-8-17_20-15-5.png?version=1&modificationDate=1534547706000&api=v2)

Caso tenha optado por 'Abrir a Edição do Movimento', ao executar o processo, o sistema automaticamente abrirá a tela do movimento que está sendo gerado.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/095.png?version=1&modificationDate=1455894249000&api=v2)



Você poderá acessar as abas do movimento e conforme suas permissões de acesso poderá incluir dados ou alterar os dados existentes.

Após finalizar a visualização e/ou edição do movimento basta clicar em *"Salvar"* ou em *"OK"*.

Caso no tipo de movimento do movimento que está sendo gerado o campo 'Busca Valores TOTVS Colab' dos tributos esteja configurado para "Tipo de Movimento - Comparar com XML" o sistema abrirá a tela com as diferenças dos tributos caso existam.  

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/102.png?version=1&modificationDate=1470074543000&api=v2)

Caso seja necessário basta clicar na coluna 'Valor Correto' e alterar para o valor constante do XML e clicar em Salvar.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/224106789/104.png?version=1&modificationDate=1470075885000&api=v2)


Caso vá manter os valores que foram calculados pelo sistema conforme parametrizado no tipo de movimento basta clicar em 'Salvar' e o sistema finalizará a execução do processo efetuando a gravação do movimento.

Em caso de posterior exclusão do movimento de NF-e criado, o XML em questão será desvinculado do movimento e voltará ao status anterior à inclusão, para que seja possível vincular um novo movimento ao mesmo. 



**Rotina**

**Tipo de Operação**

**Opção de Menu**

**Regras de Negócio**

Criação de Fórmulas

Alteração

Serviços Globais > Fórmulas > TOTVS Gestão de Estoque, Compras e Faturamento

Conforme definições constantes deste documento

Definições de Cli/For para Importação de XML

Criação

Cadastros > Mais... > Tabelas Auxiliares > Definições de Cli/For para Importação de XML

Conforme definições constantes deste documento

Inclusão de Movimento através de XML - NF-e

Criação

Compras > Importação de Arquivo XML - Cadastro XML > Processos > Inclusão de Movimento através de XML - NF-e

Conforme definições constantes deste documento

Natureza Inversa para Importação de XML

Criação

Cadastros > Natureza Fiscal > Anexos > Natureza Inversa para Importação de XML

Conforme definições constantes deste documento

Parâmetros por Filial

Alteração

Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Integrações > Fiscal > Dados Fiscais > Parâmetros por Filial

Conforme definições constantes deste documento

Produtos para Importação de XML

Criação

Cadastros > Produtos > Anexos > Produtos para Importação de XML

Conforme definições constantes deste documento

Unidades para Importação de XML

Criação

Cadastros > Mais... > Tabelas Auxiliares > Unidade > Anexos > Unidades para Importação de XML

Conforme definições constantes deste documento

## Tabelas Utilizadas:

-   DCFOP - Naturezas Fiscais (CFOP);

-   DREGRAICMS - Regras de ICMS;

-   DREGRAIPI - Regras de IPI;
-   GFORMULA - Fórmulas;
-   TDEFINICOESCFOCOLAB - Definições de Cli/For - Totvs Colaboração;
-   TITMMOV - Itens de Movimento;
-   TLOGCOMPIMPOSTOCOLAB - Diferenças de Tributos Calculados x Tributos XML;
-   TMOV - Movimentos;
-   TNATUREZACOLAB - Naturezas Inversas Totvs Colaboração;
-   TNFEENTRADA - Notas Fiscais (NF-e) Recebidas;
-   TPARFILIAL - Parâmetros da Filial;
-   TPRDCFOCOLAB - Produtos Totvs Colaboração;
-   TTRBMOV - Tributos do Movimento;
-   TUNDCFOCOLAB - Unidades Totvs Colaboração;
-   TXMOCOLAB - XML Recebidos pelo Totvs Colaboração.



 **Este documento é material de especificação dos requisitos de inovação, trata-se de conteúdo extremamente técnico.**                                                             

![Imagem](https://centraldeatendimento.totvs.com/plugins/servlet/confluence/placeholder/unknown-macro?name=rate&locale=en_US&version=2)

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Principais Parametrizações do Processo Importação de Arquivos XML

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008532827-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Principais-Parametriza%C3%A7%C3%B5es-do-Processo-Importa%C3%A7%C3%A3o-de-Arquivos-XML](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008532827-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Principais-Parametriza%C3%A7%C3%B5es-do-Processo-Importa%C3%A7%C3%A3o-de-Arquivos-XML)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
> **Data:** 24 de abril de 2025 às 10:17

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/30743428663319)
 Tempo aproximado para leitura: **00:04:00min**

**Dúvida**Como fazer as parametrizações básicas do processo de Importação de Arquivos XML para inclusão de movimentos de recebimento ( Compra )?

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**Para parametrizar o sistema para realizar a importação de arquivos XML, deverá seguir seguintes passos:

1\. Acesse menu **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Fiscal | etapa Importação/Envio de Arquivo XML** e preencha os campos conforme indicado abaixo:

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4406762077335)

-   **Tipo Integração:**
    TOTVS Colaboração 2.00 - indica que é utilizado a integração com a Neogrid.
    TOTVS Colaboração 1.00 - indica utilização do TSS.
    TOTVS Processos Fiscais - indica que está utilizando o TPF (TOTVS Processos Fiscais).
    Não Utiliza - indica que não utiliza nenhum dos parceiros disponíveis
-   ***Checkbox* Realizar Importação de XML de NF-e e CT-e (sem integração com parceiros)**: marque apenas se não houver contratação do Neogrid para disponibilizar os arquivos XML automaticamente na pasta *Client EDI*. 
-   **Diretório Padrão para Importação dos Arquivos XML**: informe o diretório escolhido para a integração, que deverá conter as subpastas IN e RM, exemplo: 

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4406762575639)

**Atenção**
O diretório deverá estar compartilhado em rede com todos os usuários, permitindo leitura e gravação. Para mais informações [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360019178231).

2\. Será necessário parametrizar as filiais que irão trabalhar com Importação de Arquivos XML/TOTVS Colaboração.

Ainda nos parâmetros de Integração Fiscal, clique em **Parâmetros por Filial** | etapa **Importação/Envio de Arquivo XML 1/2** e informe os dados abaixo:

-   **Usuário e Senha:** Preencha tais campos apenas se o *checkbox* Realizar Importação de XML de NF-e e CT-e (sem integração com NEOGRID) estiver **desmarcado**. 
    Estes dados são validados somente no TOTVS Colaboração 1.0. Na versão 2.00 poderá usar usuário e senha genéricos pois o sistema não validará as informações preenchidas.
-   **Ambiente TOTVS Colaboração**: Produção ou Homologação.
-   Marque os **Tipos de Documentos** que terão a integração TOTVS Colaboração 2.00 para recebimento. As opções são Recebimento NF-e e Recebimento CT-e. 

![mceclip5.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4406763413143)

**Importante**
A importação de XMLs de NFS-e não está disponível sem o Neogrid porque cada prefeitura tem seu layout próprio, sendo necessário a tradução dos dados do XML pelo Neogrid, antes da disponibilização do XML na pasta IN.
Já para o parceiro TPF a inclusão de NFS-e esta disponível para mais de um Município.

Com o objetivo de aprimorar cada vez mais nossa **comunicação** com os nossos clientes, estamos promovendo nossas comunidades no **WhatsApp**. Através delas, você é informado em primeira mão sobre artigos publicados neste portal. Eventos, notícias, comunicados urgentes… **tudo na palma da sua mão!**
Acesse via QR Code:

![Imagem](data:image/png;base64,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)

---
