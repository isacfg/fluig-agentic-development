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
