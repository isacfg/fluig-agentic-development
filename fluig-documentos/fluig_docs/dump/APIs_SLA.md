# APIs SLA

> **Fonte:** [https://tdn.totvs.com/display/fluig/APIs+SLA](https://tdn.totvs.com/display/fluig/APIs+SLA)

---

# Objetivo

* * *

Este conteúdo tem como objetivo auxiliar na referência da atualização da API de SLAs na versão 2.0, para pesquisa de solicitações, juntamente com informações referentes a seus prazos e resumo de contagem sobre tais informações.



# APIs de SLA

* * *

APIs

Parâmetros

**/api/2.0/workflows/requests/sla/resume**

O que faz: Retorna, agrupado por status da solicitação e do SLA, a contagem de solicitações naquela situação.

**processes** - Código dos processos a serem filtrados, separados por vírgula em caso de mais de um.

**cardFilters** - Campos de formulário a serem filtrados, os campos DEVEM pertencer ao formulário atrelado ao processo. Os campos devem ser separados por CHAVE:VALOR e separados por vírgula entre estes agrupamentos.

**countersRequired** - Quais contadores são requeridos, não informar caso deseje todos. Eles podem ser:

-   finishedRequests: Solicitações finalizadas em geral
-   finishedExpiredRequests: Solicitações finalizadas e expiradas
-   finishedOnTimeRequests: Solicitações finalizadas e com SLA em dia
-   finishedWarningRequests: Solicitações finalizadas que entraram no tempo de aviso
-   canceledRequests: Solicitações canceladas
-   canceledExpiredRequests: Solicitações canceladas expiradas
-   canceledOnTimeRequests: Solicitações canceladas com SLA em dia
-   canceledWarningRequests: Solicitações canceladas no tempo de aviso
-   openRequests: Solicitações abertas
-   openExpiredRequests: Solicitações abertas expiradas
-   openOnTimeRequests: Solicitações abertas no prazo
-   openWarningRequests: Solicitações abertas no tempo de aviso

**initialStartDate** - Data inicial para pesquisa pelo início da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**finalStartDate** - Data final para pesquisa pelo início da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**initialDeadlineDate** - Data inicial para pesquisa pelo prazo da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**finalDeadlineDate** - Data final para pesquisa pelo prazo da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**initialWarningDate** - Data inicial para pesquisa pelo prazo de aviso da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**finalWarningDate** - Data final para pesquisa pelo prazo de aviso da solicitação. O formato a ser passado no GET é yyyy-MM-dd

**requester** - Requisitante da solicitação. Neste parâmetro deve ser enviado a matrícula do usuário.

**assignee** - Responsável de uma das tarefas atuais da solicitação. Neste parâmetro deve ser enviado a matrícula do usuário.

**manager** - Gestor do processo da solicitação. Neste parâmetro deve ser enviado a matrícula do usuário. Deve ser um Gestor válido segundo as regras atuais.

**/api/2.0/workflows/requests/sla/resume/requester/me**

O que faz: Retorna, agrupado por status da solicitação e do SLA, a contagem de solicitações naquela situação. Neste REST o parâmetro requester é omitido, assumindo que o usuário logado é o requisitante solicitado.

**processes** - Código dos processos a serem filtrados, separados por vírgula em caso de mais de um.

**cardFilters** - Campos de formulário a serem filtrados, os campos DEVEM pertencer ao formulário atrelado ao processo. Os campos devem ser separados por CHAVE:VALOR e separados por vírgula entre estes agrupamentos.

**countersRequired** - Quais contadores são requeridos, não informar caso deseje todos. Eles podem ser:

-   finishedRequests: Solicitações finalizadas em geral
-   finishedExpiredRequests: Solicitações finalizadas e expiradas
-   finishedOnTimeRequests: Solicitações finalizadas e com SLA em dia
-   finishedWarningRequests: Solicitações finalizadas que entraram no tempo de aviso
-   canceledRequests: Solicitações canceladas
-   canceledExpiredRequests: Solicitações canceladas expiradas
-   canceledOnTimeRequests: Solicitações canceladas com SLA em dia
-   canceledWarningRequests: Solicitações canceladas no tempo de aviso
-   openRequests: Solicitações abertas
-   openExpiredRequests: Solicitações abertas expiradas
-   openOnTimeRequests: Solicitações abertas no prazo
-   openWarningRequests: Solicitações abertas no tempo de aviso

**initialStartDate** - Data inicial para pesquisa pelo início da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**finalStartDate** - Data final para pesquisa pelo início da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**initialDeadlineDate** - Data inicial para pesquisa pelo prazo da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**finalDeadlineDate** - Data final para pesquisa pelo prazo da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**initialWarningDate** - Data inicial para pesquisa pelo prazo de aviso da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**finalWarningDate** - Data final para pesquisa pelo prazo de aviso da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**assignee** - Responsável de uma das tarefas atuais da solicitação. Neste parâmetro deve ser enviado a matrícula do usuário.

**manager** - Gestor do processo da solicitação. Neste parâmetro deve ser enviado a matrícula do usuário. Deve ser um Gestor válido segundo as regras atuais.

**/api/2.0/workflows/requests/sla/resume/assignee/me**

O que faz: Retorna, agrupado por status da solicitação e do SLA, a contagem de solicitações naquela situação. Neste REST o parâmetro assignee é omitido, assumindo que o usuário logado é um dos responsáveis da tarefa das solicitações.

**processes** - Código dos processos a serem filtrados, separados por vírgula em caso de mais de um.

**cardFilters** - Campos de formulário a serem filtrados, os campos DEVEM pertencer ao formulário atrelado ao processo. Os campos devem ser separados por CHAVE:VALOR e separados por vírgula entre estes agrupamentos.

**countersRequired** - Quais contadores são requeridos, não informar caso deseje todos. Eles podem ser:

-   finishedRequests: Solicitações finalizadas em geral
-   finishedExpiredRequests: Solicitações finalizadas e expiradas
-   finishedOnTimeRequests: Solicitações finalizadas e com SLA em dia
-   finishedWarningRequests: Solicitações finalizadas que entraram no tempo de aviso
-   canceledRequests: Solicitações canceladas
-   canceledExpiredRequests: Solicitações canceladas expiradas
-   canceledOnTimeRequests: Solicitações canceladas com SLA em dia
-   canceledWarningRequests: Solicitações canceladas no tempo de aviso
-   openRequests: Solicitações abertas
-   openExpiredRequests: Solicitações abertas expiradas
-   openOnTimeRequests: Solicitações abertas no prazo
-   openWarningRequests: Solicitações abertas no tempo de aviso

**initialStartDate** - Data inicial para pesquisa pelo início da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**finalStartDate** - Data final para pesquisa pelo início da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**initialDeadlineDate** - Data inicial para pesquisa pelo prazo da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**finalDeadlineDate** - Data final para pesquisa pelo prazo da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**initialWarningDate** - Data inicial para pesquisa pelo prazo de aviso da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**finalWarningDate** - Data final para pesquisa pelo prazo de aviso da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**requester** - Requisitante da solicitação. Neste parâmetro deve ser enviado a matrícula do usuário.

**manager** - Gestor do processo da solicitação. Neste parâmetro deve ser enviado a matrícula do usuário. Deve ser um Gestor válido segundo as regras atuais.

**/api/2.0/workflows/requests/sla/resume/manager/me**

O que faz: Retorna, agrupado por status da solicitação e do SLA, a contagem de solicitações naquela situação. Neste REST o parâmetro manager é omitido, assumindo que o usuário logado é um dos gestores do processo das solicitações.

**processes** - Código dos processos a serem filtrados, separados por vírgula em caso de mais de um.

**cardFilters** - Campos de formulário a serem filtrados, os campos DEVEM pertencer ao formulário atrelado ao processo. Os campos devem ser separados por CHAVE:VALOR e separados por vírgula entre estes agrupamentos.

**countersRequired** - Quais contadores são requeridos, não informar caso deseje todos. Eles podem ser:

-   finishedRequests: Solicitações finalizadas em geral
-   finishedExpiredRequests: Solicitações finalizadas e expiradas
-   finishedOnTimeRequests: Solicitações finalizadas e com SLA em dia
-   finishedWarningRequests: Solicitações finalizadas que entraram no tempo de aviso
-   canceledRequests: Solicitações canceladas
-   canceledExpiredRequests: Solicitações canceladas expiradas
-   canceledOnTimeRequests: Solicitações canceladas com SLA em dia
-   canceledWarningRequests: Solicitações canceladas no tempo de aviso
-   openRequests: Solicitações abertas
-   openExpiredRequests: Solicitações abertas expiradas
-   openOnTimeRequests: Solicitações abertas no prazo
-   openWarningRequests: Solicitações abertas no tempo de aviso

**initialStartDate** - Data inicial para pesquisa pelo início da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**finalStartDate** - Data final para pesquisa pelo início da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**initialDeadlineDate** - Data inicial para pesquisa pelo prazo da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**finalDeadlineDate** - Data final para pesquisa pelo prazo da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**initialWarningDate** - Data inicial para pesquisa pelo prazo de aviso da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**finalWarningDate** - Data final para pesquisa pelo prazo de aviso da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**requester** - Requisitante da solicitação. Neste parâmetro deve ser enviado a matrícula do usuário.

**assignee** - Responsável de uma das tarefas atuais da solicitação. Neste parâmetro deve ser enviado a matrícula do usuário.

**/api/2.0/workflows/requests/sla/**

O que faz: Retorna uma lista das informações primárias de cada solicitação referente a seu SLA.

**processes** - Código dos processos a serem filtrados, separados por vírgula em caso de mais de um.

**cardFilters** - Campos de formulário a serem filtrados, os campos DEVEM pertencer ao formulário atrelado ao processo. Os campos devem ser separados por CHAVE:VALOR e separados por vírgula entre estes agrupamentos.

**statusRequired** - Quais contadores são requeridos, não informar caso deseje todos. Eles podem ser:

-   finishedRequests: Solicitações finalizadas em geral
-   finishedExpiredRequests: Solicitações finalizadas e expiradas
-   finishedOnTimeRequests: Solicitações finalizadas e com SLA em dia
-   finishedWarningRequests: Solicitações finalizadas que entraram no tempo de aviso
-   canceledRequests: Solicitações canceladas
-   canceledExpiredRequests: Solicitações canceladas expiradas
-   canceledOnTimeRequests: Solicitações canceladas com SLA em dia
-   canceledWarningRequests: Solicitações canceladas no tempo de aviso
-   openRequests: Solicitações abertas
-   openExpiredRequests: Solicitações abertas expiradas
-   openOnTimeRequests: Solicitações abertas no prazo
-   openWarningRequests: Solicitações abertas no tempo de aviso

**initialStartDate** - Data inicial para pesquisa pelo início da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**finalStartDate** - Data final para pesquisa pelo início da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**initialDeadlineDate** - Data inicial para pesquisa pelo prazo da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**finalDeadlineDate** - Data final para pesquisa pelo prazo da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**initialWarningDate** - Data inicial para pesquisa pelo prazo de aviso da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**finalWarningDate** - Data final para pesquisa pelo prazo de aviso da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**requester** - Requisitante da solicitação. Neste parâmetro deve ser enviado a matrícula do usuário.

**assignee** - Responsável de uma das tarefas atuais da solicitação. Neste parâmetro deve ser enviado a matrícula do usuário.

**manager** - Gestor do processo da solicitação. Neste parâmetro deve ser enviado a matrícula do usuário. Deve ser um Gestor válido segundo as regras atuais.

**expand** - Campo padrão que indica se as coleções no objeto de retorno serão listadas. actualTasks retorna os dados dos usuários e do estado das atividades correntes da solicitação caso aberta. cardFields retorna os campos do formulário referentes a solicitação. Esses campos podem ser agrupados separados por vírgula.

**order** - Ordenação do resultado. Para ordenação decrescente colocar o símbolo (-) antes do atributo a ser ordenado. Para múltipla ordenação separar os campos por vírgula. Os campos possíveis de se ordenar são: processInstanceId, deadlineDate, processId, requesterCode, requesterName, startDate e endDate.

**calculate** - Se os dados calculáveis da solicitação serão calculados. Estes campos são: remainingTime, fullTime e percentageConcluded. Por padrão este campo é true, colocá-lo para false omite os valores calculáveis, mas torna a resposta mais veloz.

**page** - Página atual de resultados para paginação.

**pageSize** - Quantidade de registros por página.

**/api/2.0/workflows/requests/sla/requester/me**

O que faz: Retorna uma lista das informações primárias de cada solicitação referente a seu SLA. Neste REST o parâmetro requester é omitido, assumindo que o usuário logado é o requisitante solicitado.

**processes** - Código dos processos a serem filtrados, separados por vírgula em caso de mais de um.

**cardFilters** - Campos de formulário a serem filtrados, os campos DEVEM pertencer ao formulário atrelado ao processo. Os campos devem ser separados por CHAVE:VALOR e separados por vírgula entre estes agrupamentos.

**statusRequired** - Quais contadores são requeridos, não informar caso deseje todos. Eles podem ser:

-   finishedRequests: Solicitações finalizadas em geral
-   finishedExpiredRequests: Solicitações finalizadas e expiradas
-   finishedOnTimeRequests: Solicitações finalizadas e com SLA em dia
-   finishedWarningRequests: Solicitações finalizadas que entraram no tempo de aviso
-   canceledRequests: Solicitações canceladas
-   canceledExpiredRequests: Solicitações canceladas expiradas
-   canceledOnTimeRequests: Solicitações canceladas com SLA em dia
-   canceledWarningRequests: Solicitações canceladas no tempo de aviso
-   openRequests: Solicitações abertas
-   openExpiredRequests: Solicitações abertas expiradas
-   openOnTimeRequests: Solicitações abertas no prazo
-   openWarningRequests: Solicitações abertas no tempo de aviso

**initialStartDate** - Data inicial para pesquisa pelo início da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**finalStartDate** - Data final para pesquisa pelo início da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**initialDeadlineDate** - Data inicial para pesquisa pelo prazo da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**finalDeadlineDate** - Data final para pesquisa pelo prazo da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**initialWarningDate** - Data inicial para pesquisa pelo prazo de aviso da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**finalWarningDate** - Data final para pesquisa pelo prazo de aviso da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**assignee** - Responsável de uma das tarefas atuais da solicitação. Neste parâmetro deve ser enviado a matrícula do usuário.

**manager** - Gestor do processo da solicitação. Neste parâmetro deve ser enviado a matrícula do usuário. Deve ser um Gestor válido segundo as regras atuais.

**expand** - Campo padrão que indica se as coleções no objeto de retorno serão listadas. actualTasks retorna os dados dos usuários e do estado das atividades correntes da solicitação caso aberta. cardFields retorna os campos do formulário referentes a solicitação. Esses campos podem ser agrupados separados por vírgula.

**order** - Ordenação do resultado. Para ordenação decrescente colocar o símbolo (-) antes do atributo a ser ordenado. Para múltipla ordenação separar os campos por vírgula. Os campos possíveis de se ordenar são: processInstanceId, deadlineDate, processId, requesterCode, requesterName, startDate e endDate.

**calculate** - Se os dados calculáveis da solicitação serão calculados. Estes campos são: remainingTime, fullTime e percentageConcluded. Por padrão este campo é true, colocá-lo para false omite os valores calculáveis, mas torna a resposta mais veloz.

**page** - Página atual de resultados para paginação.

**pageSize** - Quantidade de registros por página.

 **/api/2.0/workflows/requests/sla/assignee/me**

O que faz: Retorna uma lista das informações primárias de cada solicitação referente a seu SLA. Neste REST o parâmetro assignee é omitido, assumindo que o usuário logado é um dos responsáveis da tarefa das solicitações.

**processes** - Código dos processos a serem filtrados, separados por vírgula em caso de mais de um.

**cardFilters** - Campos de formulário a serem filtrados, os campos DEVEM pertencer ao formulário atrelado ao processo. Os campos devem ser separados por CHAVE:VALOR e separados por vírgula entre estes agrupamentos.

**statusRequired** - Quais contadores são requeridos, não informar caso deseje todos. Eles podem ser:

-   finishedRequests: Solicitações finalizadas em geral
-   finishedExpiredRequests: Solicitações finalizadas e expiradas
-   finishedOnTimeRequests: Solicitações finalizadas e com SLA em dia
-   finishedWarningRequests: Solicitações finalizadas que entraram no tempo de aviso
-   canceledRequests: Solicitações canceladas
-   canceledExpiredRequests: Solicitações canceladas expiradas
-   canceledOnTimeRequests: Solicitações canceladas com SLA em dia
-   canceledWarningRequests: Solicitações canceladas no tempo de aviso
-   openRequests: Solicitações abertas
-   openExpiredRequests: Solicitações abertas expiradas
-   openOnTimeRequests: Solicitações abertas no prazo
-   openWarningRequests: Solicitações abertas no tempo de aviso

**initialStartDate** - Data inicial para pesquisa pelo início da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**finalStartDate** - Data final para pesquisa pelo início da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**initialDeadlineDate** - Data inicial para pesquisa pelo prazo da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**finalDeadlineDate** - Data final para pesquisa pelo prazo da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**initialWarningDate** - Data inicial para pesquisa pelo prazo de aviso da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**finalWarningDate** - Data final para pesquisa pelo prazo de aviso da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**requester** - Requisitante da solicitação. Neste parâmetro deve ser enviado a matrícula do usuário.

**manager** - Gestor do processo da solicitação. Neste parâmetro deve ser enviado a matrícula do usuário. Deve ser um Gestor válido segundo as regras atuais.

**expand** - Campo padrão que indica se as coleções no objeto de retorno serão listadas. actualTasks retorna os dados dos usuários e do estado das atividades correntes da solicitação caso aberta. cardFields retorna os campos do formulário referentes a solicitação. Esses campos podem ser agrupados separados por vírgula.

**order** - Ordenação do resultado. Para ordenação decrescente colocar o símbolo (-) antes do atributo a ser ordenado. Para múltipla ordenação separar os campos por vírgula. Os campos possíveis de se ordenar são: processInstanceId, deadlineDate, processId, requesterCode, requesterName, startDate e endDate.

**calculate** - Se os dados calculáveis da solicitação serão calculados. Estes campos são: remainingTime, fullTime e percentageConcluded. Por padrão este campo é true, colocá-lo para false omite os valores calculáveis, mas torna a resposta mais veloz.

**page** - Página atual de resultados para paginação.

**pageSize** - Quantidade de registros por página.

**/api/2.0/workflows/requests/sla/manager/me**

O que faz: Retorna uma lista das informações primárias de cada solicitação referente a seu SLA. Neste REST o parâmetro manager é omitido, assumindo que o usuário logado é um dos gestores do processo das solicitações.

**processes** - Código dos processos a serem filtrados, separados por vírgula em caso de mais de um.

**cardFilters** - Campos de formulário a serem filtrados, os campos DEVEM pertencer ao formulário atrelado ao processo. Os campos devem ser separados por CHAVE:VALOR e separados por vírgula entre estes agrupamentos.

**statusRequired** - Quais contadores são requeridos, não informar caso deseje todos. Eles podem ser:

-   finishedRequests: Solicitações finalizadas em geral
-   finishedExpiredRequests: Solicitações finalizadas e expiradas
-   finishedOnTimeRequests: Solicitações finalizadas e com SLA em dia
-   finishedWarningRequests: Solicitações finalizadas que entraram no tempo de aviso
-   canceledRequests: Solicitações canceladas
-   canceledExpiredRequests: Solicitações canceladas expiradas
-   canceledOnTimeRequests: Solicitações canceladas com SLA em dia
-   canceledWarningRequests: Solicitações canceladas no tempo de aviso
-   openRequests: Solicitações abertas
-   openExpiredRequests: Solicitações abertas expiradas
-   openOnTimeRequests: Solicitações abertas no prazo
-   openWarningRequests: Solicitações abertas no tempo de aviso

**initialStartDate** - Data inicial para pesquisa pelo início da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**finalStartDate** - Data final para pesquisa pelo início da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**initialDeadlineDate** - Data inicial para pesquisa pelo prazo da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**finalDeadlineDate** - Data final para pesquisa pelo prazo da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**initialWarningDate** - Data inicial para pesquisa pelo prazo de aviso da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**finalWarningDate** - Data final para pesquisa pelo prazo de aviso da solicitação. O formato a ser passado no GET é yyyy-MM-dd.

**requester** - Requisitante da solicitação. Neste parâmetro deve ser enviado a matrícula do usuário.

**assignee** - Responsável de uma das tarefas atuais da solicitação. Neste parâmetro deve ser enviado a matrícula do usuário.

**expand** - Campo padrão que indica se as coleções no objeto de retorno serão listadas. actualTasks retorna os dados dos usuários e do estado das atividades correntes da solicitação caso aberta. cardFields retorna os campos do formulário referentes a solicitação. Esses campos podem ser agrupados separados por vírgula.

**order** - Ordenação do resultado. Para ordenação decrescente colocar o símbolo (-) antes do atributo a ser ordenado. Para múltipla ordenação separar os campos por vírgula. Os campos possíveis de se ordenar são: processInstanceId, deadlineDate, processId, requesterCode, requesterName, startDate e endDate.

**calculate** - Se os dados calculáveis da solicitação serão calculados. Estes campos são: remainingTime, fullTime e percentageConcluded. Por padrão este campo é true, colocá-lo para false omite os valores calculáveis, mas torna a resposta mais veloz.

**page** - Página atual de resultados para paginação.

**pageSize** - Quantidade de registros por página.

**/api/2.0/workflows/requests/{processInstanceId}/sla/manager/me**

O que faz: Retorna os dados referentes ao SLA de uma solicitação específica.

**processInstanceId** - Código da solicitação específica.

**expand** - Campo padrão que indica se as coleções no objeto de retorno serão listadas. actualTasks retorna os dados dos usuários e do estado das atividades correntes da solicitação caso aberta. cardFields retorna os campos do formulário referentes a solicitação. Esses campos podem ser agrupados separados por vírgula.

**calculate** - Se os dados calculáveis da solicitação serão calculados. Estes campos são: remainingTime, fullTime e percentageConcluded. Por padrão este campo é true, colocá-lo para false omite os valores calculáveis, mas torna a resposta mais veloz.

Informações

Para maiores detalhes, acesse o conteúdo das APIs de SLA em [Fluig API](https://api.fluig.com).
