# Controle Orçamentário

> **10 artigos**

---

## Sumário

- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Natureza Orçamentária/Financeira Global
- Natureza Orçamentária Financeira 🔗 _(_links_externos)_
- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Natureza Orçamentária inválida para o Tipo de Orçamento informado!
- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Como aumentar número de registros em Visão de Consulta de Orçamento
- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Como desvincular Classificação de Período a Centro de Custo
- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Como utilizar Classificação de Período de Orçamento
- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - O Centro de Custo Agrupado já existe no Orçamento para o mesmo período!
- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Controle Orçamentário
- ORC0002_Controle_Orcamentario 🔗 _(_links_externos)_
- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Como importar Orçamento via arquivo TXT/Excel

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Natureza Orçamentária/Financeira Global

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/7297495813655-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Natureza-Or%C3%A7ament%C3%A1ria-Financeira-Global](https://centraldeatendimento.totvs.com/hc/pt-br/articles/7297495813655-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Natureza-Or%C3%A7ament%C3%A1ria-Financeira-Global)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
> **Data:** 16 de setembro de 2022 às 12:05

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:03:00min**

**Dúvida
**Como configurar a Natureza Orçamentária/Financeira como Global?
**
Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**A tabela **Natureza Orçamentária/Financeira** poderá ser ser definida como **Global** apenas antes de cadastrar qualquer natureza na coligada, o que geralmente ocorre na criação da coligada.

Para isso deve acessar os parâmetros do **Gestão de Estoque, Compras e Faturamento | Tabelas | Natureza Orçamentária/Financeira** e marcar o *check box* **Permite Globais**.

![Imagem](https://totvssuporte.zendesk.com/attachments/token/w5nzPxht5IavdtcJk3yIdUdfY/?name=inline-1374219094.png)

Após cadastrar a primeira natureza, o *check box* será desabilitado para alterações. Nesse caso poderá executar o processo **Copiar Natureza Orçamentária/Financeira entre Coligadas**.

![Imagem](https://totvssuporte.zendesk.com/attachments/token/qMpq4Et3FhlXqm7CH6ZVaUPSK/?name=inline927054550.png)

**[Clique aqui](https://tdn.totvs.com/pages/releaseview.action?pageId=423937949)** para maiores informações dos campos exibidos na criação da Natureza Orçamentaria/Financeira.

---

# Natureza Orçamentária Financeira

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423937949](https://tdn.totvs.com/pages/releaseview.action?pageId=423937949)
> **Domínio:** TDN (TOTVS Developer Network)

---

Atualmente já existe no TOTVS Gestão de Estoque, Compras e Faturamento, uma tabela de Natureza do Orçamento.
Identificamos que essa tabela tem o mesmo conteúdo que a Tabela de Natureza Financeira, portanto, decidimos evoluir a Tabela de Natureza do Orçamento tendo em vista que as duas teriam as mesmas informações tanto no Gestão de Estoque, Compras e Faturamento através do processo de controle orçamentário quanto no TOTVS Gestão Financeira através do processo de Fluxo de Caixa.
**Natureza**: Referente a visualização da natureza financeira nos lançamentos classificados a pagar, receber ou ambos.
***Observação***: Naturezas do tipo "ambos" podem ser utilizadas tanto para receita quanto para despesa (caso de mercadoria para revenda). Desta forma no Fluxo de Caixa do financeiro para os lançamentos financeiros com a natureza orçamentária financeira classificada como "ambos", o sistema levará em consideração o tipo do lançamento, a pagar ou receber, para separação dos valores no fluxo de caixa.
Sintético/Analítico: Analítica é uma natureza orçamentária/financeira inteiramente interligada a uma natureza principal (Sintética), exemplo:

-   Natureza 01 (Sintética)
-   Natureza 01.01 (Analítica)

Não Permite transferir Valores: Com este parâmetro habilitado o sistema não permite transferir valores de uma natureza a outra. Muito útil no processo de realocação orçamentária no modulo TOTVS Gestão de Estoque, Compras e Faturamento.
Defaults Contábeis: Campo a ser informado as contas de debito e/ou credito referente a contabilização do movimento.
**Associação**: A vinculação da natureza orçamentária/Financeira com o produto é através do cadastro de produto – detalhes – classificação.
***Observações***: Associando a Natureza Orçamentária/Financeira no cadastro de produto e parametrizando o tipo de movimento para editá-la o sistema retorna automaticamente a natureza após inserir o produto no movimento e posteriormente no lançamento financeiro (caso o tipo de movimento esteja parametrizado para gerar lançamento financeiro para o TOTVS Gestão Financeira).
Ao criar a natureza orçamentária/Financeira (cadastro – tabelas auxiliares – natureza orçamentária/Financeira) o sistema permite a vinculação da natureza analítica ao centro de custo baseado no processo de controle orçamentário (Cadastros – Tabelas de Orçamento – Vinculo da natureza orçamento e Centro de custo).

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423937949/image_preview.png?version=1&modificationDate=1549980424647&api=v2)
**Parametrização

Acesso a edição da natureza Orçamentária/Financeira no item do movimento é parametrizado em Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | selecione 04.09 - Outras Movimentações.

* * *

-   [Processos (Natureza Orçamentária Financeira)](/pages/viewpage.action?pageId=454851544)

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Natureza Orçamentária inválida para o Tipo de Orçamento informado!

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4403929187607-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Natureza-Or%C3%A7ament%C3%A1ria-inv%C3%A1lida-para-o-Tipo-de-Or%C3%A7amento-informado](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4403929187607-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Natureza-Or%C3%A7ament%C3%A1ria-inv%C3%A1lida-para-o-Tipo-de-Or%C3%A7amento-informado)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
> **Data:** 9 de abril de 2025 às 15:09

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31292941418519)**Tempo aproximado para leitura: **00:04:00min**

**Ocorrência**Ao realizar o processo de **Importação de Arquivo de Orçamento** ocorre a mensagem: **Natureza Orçamentária inválida para o Tipo de Orçamento informado!**

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4403929067671)

**
Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.


**Causa
**Em tipos de movimento com orçamento **Despesa**, serão aceitos apenas naturezas **A Pagar** ou **Ambos** e Orçamentos de **Receita** serão aceitos somente Naturezas **A Receber** ou Ambos. 

**Solução**Acesse os parâmetros do tipo de movimento que está importando, etapa **Orçamento** e confira o campo **Tipo Orçamento** (caso encontre dificuldades para localizar os parâmetros do tipo de movimento [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento)):

![Imagem](https://totvssuporte.zendesk.com/attachments/token/VnV3jFE3x7sQrB0utWD5ebFOB/?name=inline1437345362.png)

​Confira também qual a natureza da **Natureza Orçamentária Financeira**, acessando menu **Orçamento | Tabelas do Orçamento | Natureza Orçamentária Financeira:**

![Imagem](https://totvssuporte.zendesk.com/attachments/token/0W3BE7DxVu2P1pfdg6ypruP5M/?name=inline-1084177841.png)

**
Informações adicionais**
Antes da versão 12.1.28 havia uma inconsistência no sistema que permitia esse tipo de inclusão. Essa situação foi tratada para preservar a integridade dos dados. Nesse caso deverá alinhar o tipo do orçamento com a natureza usada ao realizar a importação do movimento.

Para mais informações sobre o Controle Orçamentário, [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345887-RM-CMP-Controle-Or%C3%A7ament%C3%A1rio?source=search).

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Como aumentar número de registros em Visão de Consulta de Orçamento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360050379874-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Como-aumentar-n%C3%BAmero-de-registros-em-Vis%C3%A3o-de-Consulta-de-Or%C3%A7amento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360050379874-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Como-aumentar-n%C3%BAmero-de-registros-em-Vis%C3%A3o-de-Consulta-de-Or%C3%A7amento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
> **Data:** 9 de abril de 2025 às 15:09

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31292914099351)**Tempo aproximado para leitura: **00:02:00min**

**Dúvida**
Como aumentar número de registros em Visão de **Consulta de Orçamento**?

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 12.

**Solução**
Para aumentar o número máximo de registros na visão de Consulta de Orçamento, gentileza [clicar aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115016013767-RM-Frame-Aumentar-quantidade-de-registros-na-vis%C3%A3o-Servidores-de-Aplica%C3%A7%C3%A3o-?source=search).

No caso da tela Consulta de Orçamento a **Action** será a **MovConsultaOrcamentoData.**

Segue abaixo print de outra forma que poderá verificar o nome das actions no sistema.

**Barra lateral do sistema, opção Executar:**

![screenshot_20200630_120411.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360078176653)

Outras formas para identificar actions do sistema clique [aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360010960271-RM-FOP-Como-identificar-uma-Action-ou-um-DataServer-?source=search) ou [aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115016079668-RM-Frame-ID-do-Server-Action-Gerenciamento-de-Jobs?source=search).

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Como desvincular Classificação de Período a Centro de Custo

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028066652-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Como-desvincular-Classifica%C3%A7%C3%A3o-de-Per%C3%ADodo-a-Centro-de-Custo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028066652-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Como-desvincular-Classifica%C3%A7%C3%A3o-de-Per%C3%ADodo-a-Centro-de-Custo)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
> **Data:** 9 de abril de 2025 às 15:07

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura:**00:03:00 min**

**Ocorrência**No módulo **Gestão de Estoque, Compras e Faturamento**, ao tentar realizar o processo **Desvincula Centro de Custo da Classificação de período** é apresentada a mensagem:

Falha ao desvincular o Registro abaixo: 
Código da Coligada: 1, Centro de Custo: 91.12.00.00

Possíveis Causas: 
\- O Centro de Custo está sendo utilizado no Orçamento. 
\- Não existe vínculo.

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**Causa
**Ao editar o vinculo existente observe que o campo se encontra desativado para alteração. O campo de classificação não pode ser alterado caso o **Centro de Custo** vinculado já tenha feito parte de algum **Valor Orçado**. Sendo assim o processo para Desvincular os cadastros não pode ser executado.

**Solução**Para solucionar essa ocorrência será necessário cadastrar um novo Centro de Custo, e associa-lo á nova classificação ou deixar este campo em branco para este novo Centro de Custo.

Outra opção é, excluir todos os movimento que afetaram orçamento para este centro de custo assim como os Valores Orçados cadastrados. Feito isso o campo será liberado para edição, e o processo de desvinculo poderá ser executado.

Para saber como utilizar a Classificação de período corretamente [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028064612).

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Como utilizar Classificação de Período de Orçamento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028064612-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Como-utilizar-Classifica%C3%A7%C3%A3o-de-Per%C3%ADodo-de-Or%C3%A7amento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028064612-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Como-utilizar-Classifica%C3%A7%C3%A3o-de-Per%C3%ADodo-de-Or%C3%A7amento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
> **Data:** 9 de abril de 2025 às 15:05

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:03:00 min

Dúvida**Qual a finalidade do cadastro e vínculo à uma **Classificação de Período**?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**Este cadastro tem como função permitir que Períodos de Orçamentos que intercedem outros períodos sejam cadastrados no sistema.

Por exemplo:


**\- Período 1 = 01/01/2017 a 31/01/2017**

**\- Período 2 = 31/01/2017 a 28/02/2017**


Neste caso, um período está "dentro" do outro e o sistema não permitirá que este seja cadastrado. Nesta situação para que o período 2 seja cadastrado cria-se uma Classificação de Período e associa ao período 2.

Recomenda-se então que o cadastro aqui mencionado seja desvinculado do conceito de data (exemplo: Ano 2017; Ano 2018) para algo do tipo "Orçamento Principal", tornando o cadastro mais claro em sua utilização no sistema.

O objetivo desta classificação também é definir quais centros de custo afetarão cada orçamento e uma vez vinculados tais centros de custos à classificação do período (menu Orçamento > Tabelas do Orçamento > Vínculo do Centro de Custo e Classificação Período) não será possível desassocia-los.

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - O Centro de Custo Agrupado já existe no Orçamento para o mesmo período!

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360004234231-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-O-Centro-de-Custo-Agrupado-j%C3%A1-existe-no-Or%C3%A7amento-para-o-mesmo-per%C3%ADodo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360004234231-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-O-Centro-de-Custo-Agrupado-j%C3%A1-existe-no-Or%C3%A7amento-para-o-mesmo-per%C3%ADodo)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
> **Data:** 10 de abril de 2025 às 09:33

---

**
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31311918574999)
**Tempo aproximado para leitura: **00:01:00 min**

**Ocorrência**Ao cadastrar um vínculo de centro de custo agrupador o sistema apresenta a mensagem: **O Centro de Custo Agrupado já existe no Orçamento para o mesmo período!**

**
![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4414487950487)

**

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 11.80.

**Causa
**Já existe um registro de valor orçado para o centro de custo a ser agrupado dentro do mesmo período, impedindo assim que ele seja agrupado a outro centro de custo.

**Solução****
Excluir** o registro de **valor orçado** para o centro de custo agrupado pelo menu **Orçamento** | **Cadastros** **de Valores Orçados:**

**
![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4414498967191)
**

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Controle Orçamentário

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345887-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Controle-Or%C3%A7ament%C3%A1rio](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345887-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Controle-Or%C3%A7ament%C3%A1rio)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
> **Data:** 9 de abril de 2025 às 15:03

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31292709967511)
 Tempo aproximado para leitura: 00:01:00min**

**Dúvida
**

Como configurar/parametrizar todo o Controle Orçamentário do TOTVS Gestão de Estoque, Compras e Faturamento e seus processos como a inclusão de movimento dentro de um processo de compra

**Ambiente
**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**

Para configurar/parametrizar o Controle Orçamentário no TOTVS Gestão de Estoque, Compras e Faturamento, acesse o link abaixo:
[Controle Orçamentário](http://tdn.totvs.com/display/public/LRM/ORC0002_Controle_Orcamentario)

---

# ORC0002_Controle_Orcamentario

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/ORC0002_Controle_Orcamentario](https://tdn.totvs.com/display/public/LRM/ORC0002_Controle_Orcamentario)
> **Domínio:** TDN (TOTVS Developer Network)

---

# Assunto

**Produto:**

TOTVS Gestão de Estoque, Compras e Faturamento

**Versões:**

11.82 e superiores

**Ocorrência:**

Descrição do processo de Controle Orçamentário do TOTVS Gestão de Estoque, Compras e Faturamento

**Ambiente:**

Orçamento

**Passo a passo:**

O documento tem por finalidade apresentar a correta parametrização do controle orçamentário bem como sua aplicação nos tipos de movimentos dentro de um processo de gestão de compras.

# Parametrização

Acesse o Menu Ambiente - Parâmetros - Gestão de Estoque, Compras e Faturamento e avance:

**Parâmetros de Orçamento** \- 04.02 Controle Orçamentário

Nas Definições de Orçamento, deverá ser parametrizado para utilizar nova versão do orçamento, bem como a descrição dos tipos de orçamentos:

-   Orçado: Descrição que será apresentada do valor orçado, ou seja, o valor que esta sendo previsto para ser utilizado.
-   Real: Descrição que será apresentada do valor realizado, ou seja, o valor que esta efetivamente sendo utilizado, gasto.
-   Opcional 1: Descrição que será apresentada de um valor opcional, ou seja, um valor comprometido, reservado, mas ainda não efetivado
-   Opcional 2: Idem explicação do campo valor opcional 1.

O Grupo Orçamentário é uma tabela intermediária entre o Centro de Custo e a Natureza Orçamentária/Financeira que tem como objetivo definir um agrupamento dos valores orçados. Sendo opcional sua utilização no cadastro dos valores orçados.



**Parâmetros do Tipo de Movimento**

Nos parâmetros do tipo de movimento, vá até a etapa 46 - Orçamento e parametrize da seguinte forma:

Editar Natureza Orçamentária/Financeira no Item: Deverá estar obrigatoriamente com um valor diferente de Não Edita, por tanto, deverá escolher entre Edita, Mostra e Edita Obrigatoriamente.

Flag Controla Orçamento: Marcada

Efeito no Orçamento: Definido neste campo qual será o efeito, aumenta ou diminui, sobre os valores dos tipos de orçamento que são Orçado, Real, Opcional1, Opcional2. Lembrando que a apresentação destes nomes podem variar conforme descrição definida pelo usuário nos parâmetros do Orçamento.

Ação ao Exceder o Orçamento: Define qual a ação será feita quando o saldo for excedido.

-   **Barra:** Movimento não poderá ser salvo.
-   **Avisa:** Mensagem será apresentada informando que o saldo foi excedido;
-   **Bloqueia:** Movimento ficará com o status de Bloqueado e sua liberação somente será feita após a execução do processo de Realocação Orçamentária.

Data Default do Orçamento: Define entre as datas do movimento, qual será utilizada para afetara no controle do orçamento.

Utiliza Rateio no Orçamento: Define se o rateio será utilizado no controle orçamentário ou não, caso seja as opções são: item ou do movimento. Lembrando que neste caso o sistema irá fazer a proporção do percentual/valor do rateio em relação ao valor do orçamento.

Fórmula do valor unitário do orçamento: Neste campo será informado a fórmula do orçamento. Neste caso deverá ser informado o valor de uma unidade, pois para efeito do orçamento o sistema automaticamente multiplica a quantidade do item de movimento pela fórmula do valor orçado. Exemplo de Fórmula do valor do orçamento considerando o valor do IPI do item – desconto do item + despesa do item + frete rateado para o item:

**KPU + (LVL ('IPI') - KDE + KDS + TABITM ('RATEIOFRETE' , 'V') ) / KQT**

Importante

Após dar entrada em um movimento que afeta o orçamento, os campos Efeito no Orçamento e Utiliza Rateio no Orçamento não poderão ser alterados! Ficarão como bloqueados.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/284865087/image2017-7-13%2016%3A34%3A56.png?version=1&modificationDate=1500038155000&api=v2)

A alteração destes campos só serão permitidas se todos os movimentos deste tipo forem excluídos.

**Cadastros de Orçamento**

Para acessar as tabelas a serem utilizadas neste processo acesse o menu Orçamento - Tabelas de Orçamento

Natureza Orçamentária/Financeira: É uma classificação generalizada para o cadastro do produto e/ou itens do movimento. Por meio dessa classificação o produto poder ser agrupado como se fosse uma conta de despesa para a realização do orçamento. Esta tabela também é utilizada em um relatório padrão de Fluxo de Caixa do TOTVS Gestão Financeira (RM Fluxus) com ou sem a opção de rateio. Exemplo: Despesas com Hospedagem, Material de Escritório, etc.

Classificação Período do Orçamento: É utilizado para definir classificações de períodos de orçamento. Assim, será possível ter periodicidades coincidentes, isto porque podem existir situações em que uma determinada área da empresa tem um período orçamentário diferente de outra área.

Período do Orçamento: É utilizado para definir os períodos nos quais serão executados o orçamento. Nesta tabela não há uma periodicidade fixa, permitindo assim, que possam ser planejados orçamentos futuros que não interfira no vigente.

Vinculo do Usuário e Centro de Custo: Neste cadastro é definido para quais centros de custo o usuário esta autorizado a realizar movimentações orçamentárias.

Vínculo da Natureza do Orçamento e Centro de Custo: Por meio deste cadastro é possível definir para quais naturezas financeiras um centro de custo pode ser utilizados durante as movimentações.

Vínculo do Centro de Custo e Classificação do Período: Por meio deste cadastro é possível realizar a vinculação do centro de custo à classificação do período. Isto é necessário para não permitir que um centro de custo faça parte de mais de um orçamento ativo.

OBS: Um Centro de custo não pode ser vinculado a mais de uma classificação do período, por tanto, uma vez vinculado e movimentado, a classificação não poderá ser desfeita.

Vínculo do Centro de Custo Agrupador: Neste cadastro é possível definir um centro de custo como agrupador de outros centros de custo. O Agrupador irá concentrar a utilização do orçamento para outros centros de custo vinculados a ele. Ao incluir um movimento para o centro de custo agrupado (filho) o orçamento afetado é o definido para o centro de custo agrupador (pai). Para permitir maior flexibilidade no agrupamento dos centros de custo, as suas vinculações serão definidas por período orçamentário.



Para cadastrar os valores disponíveis para os orçamentos, acesse o menu Orçamento - Cadastros dos Valores Orçados

-   Cadastro dos Valores Orçados: Esta tabela será utilizada para o registro e acompanhamento dos orçamentos. Neste cadastro será possível:

    Acompanhar o histórico de alterações realizadas diretamente no valor orçado;
    Consistir a alteração do valor orçado para que não ultrapasse o valor real já empenhado;
    Apenas os orçamentos dentro do período de movimentação global poderão ser alterados;
    A permissão de acesso seguirá o padrão dos demais cadastros visto que a manutenção dos orçamentos é feita de forma centralizada.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/284865087/image2017-7-13%2017%3A34%3A19.png?version=1&modificationDate=1500038155000&api=v2)



**Valores do Orçamento**

A consulta dos valores orçados pode ser feita pelo menu Orçamento - Consulta Valores de Orçamento. Qualquer movimentação que for realizada no orçamento sempre ira afetar a tabela de saldo do orçamento e também ira incluir um registro na tabela (TMOVORCAMENTO) que foi criada para guardar as movimentações do orçamento, seja alterada via movimentação ou via cadastro de valores orçados.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/284865087/image2017-7-13%2017%3A37%3A19.png?version=1&modificationDate=1500038155000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/284865087/image2017-7-14%2010%3A14%3A38.png?version=1&modificationDate=1500038155000&api=v2)

A tabela de Saldo do orçamento terá os seguintes campos de valores:

Valor Orçado: Este valor é alterado somente pela tela de manutenção do cadastro de orçamento.

Valor Opcional 1 e 2: Os valores Opcional 1 e Opcional 2 são valores intermediários que podem ser configurados no efeito do orçamento por tipo de movimentos.

Valor Excedente: Este valor é atualizado automaticamente, quando algum item do movimento excede o saldo do orçamento disponível no período, e o movimento fica com o status de bloqueado.

Valor Realizado: Este valor é a ultima etapa que deve ser configurada para o efeito dos valores do orçamento.

Valor Recebido e Valor Cedido: Estes valores são utilizados automaticamente na utilização do assistente que faz a transferência de valores do orçamento, para desbloquear um movimento

Saldo: A fórmula para chegar ao saldo disponível do orçamento por período é a seguinte:

**Saldo do Período = Valor Orçado – (Valor Opcional 1 + Valor Opcional 2 + Valor Realizado) - Valor Cedido + Valor Recebido + Valor Excedente**

# Aplicação do Controle Orçamentário

Para um melhor entendimento sobre a aplicação do “Controle Orçamentária” iremos exemplificar dentro de um caso pratico em uma Gestão de Compra (*Solicitação > Ordem de Compra > Nota Fiscal de Entrada*).



**Parametrização das movimentações e cadastro dos valores do orçamento:**

-   Parametrização dos Tipos de Movimentos:

*Solicitação de Compras*: Aumenta o valor opcional 1, neste caso chamado de *“Reserva”.*

**Ordem de Compras*: Aumenta o valor o valor opcional 2, neste caso chamado de “*Comprometido*”*.**

**Nota Fiscal*: Aumenta o valor realizado.*

-   Cadastro dos Valores do período:

*Período* \= 01/01/20XX à 31/12/20XX

*Natureza do Orçamento* = Material de Escritório

*Centro de Custo* = Marketing

*Valor do Orçamento* = 5.000,00



**Inclusão das movimentações:**

-   Inclusão do movimento de **“Solicitação de Compras”** com os seguintes dados:

Data de emissão/data do orçamento = 15/01/20XX.

Centro de custo do orçamento = Marketing

Natureza do Orçamento = Material de Escritório

Valor do orçamento = R$ 1.500,00

Foi incluído o movimento de solicitação de compras com os dados descritos acima no valor de **R$ 1.500,00**, acreditando que será gasto este valor para atender esta solicitação.

Salvo o movimento, foi consultado o saldo do orçamento que retornou os seguintes valores:

Orçado =                               5.000,00

(-) Real =                                      0,00

(-) Reserva =                         1.500,00

(-) Comprometido =                      0,00

(+) Valor Recebido =                    0,00

(-) Valor Cedido =                        0,00

(+) Valor Excedente =                  0,00

**\= Saldo (Disponivel) =     3.500,00**

OBS: Como a solicitação aumente o saldo Reserva o sistema deixa como saldo disponível apenas **R$ 3.500,00**

-   Inclusão do movimento de **“Ordem de Compra”.**

Após negociação entre do setor de compra da empresa e seu fornecedor, ficou fechado os valores para atender a solicitação de compras, conforme dados abaixo.

Centro de custo do orçamento = Marketing

Natureza do Orçamento = Material de Escritório

Valor do orçamento = R$ 1.600,00.



Assim o movimento de Solicitação de Compras foi faturado/recebido gerando a Ordem e Compras. Após salvar o movimento, foi consultado o saldo do orçamento que passou a apresentar os seguintes valores:

Orçado =                                         5.000,00

(-) Real =                                                0,00

(-) Reserva =                                          0,00

(-) Comprometido =                         1.600,00

(+) Valor Recebido =                              0,00

(-) Valor Cedido =                                   0,00

(+) Valor Excedente =                            0,00

**\= Saldo (Disponivel) =           3.400,00**

**Observação 01:** Todo movimento faturamento/recebimento que afete os valores do orçamento, terá seu saldo definido no tipo de movimento estornado, isto porque em um faturamento parcial o sistema estorna o saldo do orçamento e afeta novamente apenas para os itens não faturados. 

**Observação 02:** Para o caso de faturamento/recebimento de movimento é SEMPRE recomendado trabalhar com o parâmetro “Baixar Pedido de Compra/Venda após Geração do Movimento” como “Baixar Sempre”.

-   Inclusão do movimento de **“Nota Fiscal”.**

Após fechamento das condições junto ao fornecedor feito na Ordem de Compra, ficou acertado que parte da mercadoria seria entregue de imediato e parte seria entregue em uma posterior oportunidade. A primeira Nota Fiscal afetou o realizado em **R$ 1.000,00**, deixando pendente o valor de **R$ 600,00** do valor comprometido da Ordem de Compra que ainda não foi recebido.

Após a inclusão do movimento de *Nota Fiscal* proveniente do faturamento da *Ordem de Compra*, foi consultado o saldo do orçamento que passou a apresentar os seguintes valores:

Orçado =                              5.000,00

(-) Real =                               1.000,00

(-) Reserva =                              00,00

(-) Comprometido =                  600,00

(+) Valor Recebido =                    0,00

(-) Valor Cedido =                        0,00

(+) Valor Excedente =                  0,00

**\= Saldo (Disponivel) =     3.400,00**

**Observação 01:** O saldo comprometido permaneceu em **R$ 600,00** porque a ordem de compra não foi recebida em sua totalidade.

# Realocação Orçamentária

Este recurso é utilizado para a liberação de movimento que trabalha com o orçamento, mas que estejam com o status do movimento como “**Bloqueado**”, ou seja, quando o valor do orçamento do item de movimento for maior que o orçamento disponível. O movimento só terá o status de “**Bloqueado**” quando o tipo de movimento estiver parametrizado para este procedimento.

Para visualizar os movimentos que estão bloqueados por falta de verba do orçamento, o usuário deverá acessar o menu Orçamento - Realocação Orçamentária de Movimento e será apresentada uma visão com todos os movimentos bloqueados.

Para desbloquear um movimento, o usuário deve selecionar o movimento na lista ir em Processos e executar a Realocação Orçamentária de Movimentos. O assistente é aberto com todos os itens que excederam o orçamento do movimento selecionado. Após selecionar os itens que deseja desbloquear, e clicar no botão avançar, é apresentada uma tela com as opções de realocação respeitando as regras definidas no perfil do usuário, que são:

-   Realoca entre Naturezas do Centro de Custo.
-   Realoca entre Naturezas e Centros de Custo que está Associado.
-   Realoca entre Naturezas e Centros de Custo que está Associado, com Valores dos Períodos Anteriores.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/284865087/image2017-7-14%2010%3A11%3A15.png?version=1&modificationDate=1500038155000&api=v2)

Para liberar o orçamento excedente, o usuário pode retirar valores de valores orçamentos até atingir o valor necessário.

**Observações:**

Para mais informações:



 [Consulte o WikiHelp TOTVS](http://wikihelp.totvs.com.br/WikiHelp/FIS/FIS.ECF.aspx)



   **![Imagem](https://tdn.totvs.com/download/thumbnails/63865769/Fluig.jpg?version=1&modificationDate=1407880160000&api=v2)
   COMUNIDADE**  [R@Materiais e Suprimentos](https://fluig.totvs.com/portal/p/10097/subject/rmateriais)

**Canais de Atendimento:**

**Abertura de Chamados** Através do Portal Totvs [www.suporte.totvs.com.br](http://www.suporte.totvs.com.br/)

**Telefônico:** 4003-0015 Escolhendo as opções 2 – (Software), 2 – (Suporte Técnico), 3 – (RM), 5 – (Materiais)

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Como importar Orçamento via arquivo TXT/Excel

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345847-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Como-importar-Or%C3%A7amento-via-arquivo-TXT-Excel](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345847-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Como-importar-Or%C3%A7amento-via-arquivo-TXT-Excel)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
> **Data:** 10 de abril de 2025 às 09:20

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:08:30 min**

**Dúvida
**Como realizar a **Importação de Orçamento** e seus valores através de arquivo **txt/excel**?

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12

**Solução
**Para realizar a importação de orçamento e seus valores através de arquivo txt/excel, gentileza seguir as orientações abaixo:

O processo de Importação de Orçamento possibilitará ao usuário a criação de **Valores Orçados** automaticamente, ou a atualização de valores já cadastrados. Antes de realizar a importação, deverá realizar os vínculos obrigatórios para utilização do controle orçamentário, são eles:

-   **Vínculo do Usuário ao Centro de Custo**
-   **Vinculação da Natureza do Orçamento ao Centro de Custo**

Este processo pode ser feito via arquivo texto (.txt) e/ou planilhas excel (.xls).

**Caminho Módulo exe:** Menu Utilitários | Importações / Exportações | Importar Orçamento

![Sem tÃ­tulo.png](http://tdn.totvs.com/download/attachments/215483813/Sem%20t%C3%ADtulo.png?version=1&modificationDate=1449246449000&api=v2)

**Caminho MDI:** Menu Orçamento | Importação de Orçamento

**
![Imagem](http://tdn.totvs.com/download/attachments/215483813/menunovaMDI.PNG?version=1&modificationDate=1449236597000&api=v2)
**

Abaixo, segue layout a ser seguido para criação dos arquivos de importação:

Arquivo Texto:

**CAMPO**

**TIPO**

**TAMANHO**

**CASAS DECIMAIS**

**POSIÇÃO**

Código do Centro de Custo

A

25

\-

001 - 025

Código da Natureza Orçamentária/Financeira

A

40

\-

026 - 065

Data

Data

10

\-

066 - 075

Valor Orçado

N

20

4

076 - 095

Grupo Orçamentário

A

40

\-

 096 - 135

Tipo

A

1

\-

136

Planilha Excel:

**CAMPO**

**TIPO**

Código do Centro de Custo

Texto

Código da Natureza Orçamentária/Financeira

Texto

Data

Data

Valor Orçado

Moeda

Grupo Orçamentário

Texto

Tipo

Texto

**Observações**

1.  Os campos de **Código do Centro de Custo**, **Código da Natureza Orçamentária/Financeira** e **Grupo Orçamentário** devem ter seu tipo como **Texto**, caso contrário, se na máscara do cadastro estiver com o número 0 à esquerda (exemplo: 001), o excel irá ignorar, podendo assim criar inconsistências e erros ao importar o orçamento.
2.  A primeira linha do arquivo deverá conter o **nome das colunas**, na seguinte ordem: Código do Centro de Custo, Código da Natureza Orçamentária/Financeira, Data, Valor Orçado e Grupo Orçamentário.
3.  O campo de data deverá seguir o formato **DD/MM/AAAA**
4.  A importação pode ser feita inclusive para orçamentos que estejam bloqueados.
5.  A importação sempre afetará o valor orçado. Caso este seja zero, e, tente importar um valor negativo, deverá ser gerada uma exceção e a importação não poderá ser concluída.
6.  Importação de arquivo txt sem o campo **Tipo** será incluído como **Despesa**; - A coluna Tipo deve ser preenchida com '**R**' para **Receita** e '**D**' para **Despesa**.
7.  Valores negativos poderão ser importados, desde que este não deixe o valor orçado negativo. Exemplo:
    **Valor Orçado:** R$ 50.000,00 | **Valor a ser importado:** R$ -50.000,00 (Neste caso, o sistema irá realizar a importação, e deixará o campo de valor orçado zerado).
    **Valor Orçado:** R$ 30.000,00 | **Valor a ser importado:** R$ -31.000,00 (Neste caso, o sistema irá apresentar erro pois o valor não pode ficar negativo).

Vale lembrar que a medida que as movimentações forem sendo feitas, o valor não será exatamente igual ao que está no Valor Orçado. Nestes casos, aconselhamos que seja verificado o saldo DISPONÍVEL para o item de período a qual está tentando realizar a importação. Tal saldo pode ser visto em Consulta Valores de Orçamento.

**Importante**

-   A coluna GRUPO ORÇAMENTÁRIO somente deverá ser preenchida se nos parâmetros de Controle Orçamentário a opção de Usa Tabela de Grupo Orçamentário, estiver com os valores **usa** ou **usa obrigatoriamente**.
-   Arquivos de exemplos estão anexo ao artigo.
-   Não utilizar arquivo .csv pois este não respeitará corretamente as posições iniciais e final de cada campo quando aberto via txt.

**Saiba mais
**Para mais informações sobre controle orçamentário, acesse:
[Artigo - Controle Orçamentário](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345887-RM-CMP-Controle-Or%C3%A7ament%C3%A1rio)

---
