# RMCTB00001_Alterações do Período Contábil e do Usuário

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=270909883](https://tdn.totvs.com/pages/releaseview.action?pageId=270909883)
> **Domínio:** TDN (TOTVS Developer Network)

---

# Assunto

**Produto:**

TOTVS Gestão Contábil

**Versões:**

12.1.18

**Ocorrência:**

Alterações do Período Contábil e do Usuário após virada de ano.

**Ambiente:**



**Passo a passo:**

**Definição do Processo:**

O objetivo deste documento é de orientação ao processo para alteração do Período Contábil e Período de Digitação do Usuário após virada de ano.

As seguintes parametrizações determinam os Períodos Contábeis no TOTVS Gestão Contábil, limitando a alteração de Lançamentos em um específico intervalo de datas.



**1.** Data Inicial e Data Final do Período Contábil;

**2.** Data de Fechamento;

**3.** Período de Digitação de Lançamentos por Usuário;



**DESENVOLVIMENTO/PROCEDIMENTO**

**1) Data Inicial e Data Final do Período Contábil:**

Nesta pasta, informe o Período Contábil correspondente ao intervalo de datas que a contabilidade da empresa irá incluir registros, ou seja, a empresa irá ampliar o seu Período Contábil.

a) Acesse o seguinte menu através da nova MDI:

**'Ambiente' / 'Parâmetros' / 'TOTVS Gestão Contábil' / 'Avançar' / Clique em Fechamento / Avançar:**

**
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270909883/TDN_I.png?version=1&modificationDate=1490008354000&api=v2)

**

b) Altere a opção Data Final do Período Contábil para a data desejada (exemplo: 31/12/2017) e Avance as etapas do 'Assistente de Implantação de Processos' até a confirmação da alteração;



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270909883/image2017-12-8_15-31-22.png?version=1&modificationDate=1512757882000&api=v2)



c) Efetue um Logout/Login para efetivar as alterações realizadas.



**OBS:** *Somente ao parametrizar o RM Saldus, você poderá informar manualmente a Data Inicial do Período Contábil, que poderá inclusive ser anterior à data da parametrização (instalação), tendo em vista a necessidade de algumas empresas contabilizarem períodos anteriores à data corrente (atual). Uma vez parametrizado o RM Saldus e inicializado o exercício, a Data Inicial do Período Contábil não poderá mais ser alterada manualmente, somente através  da Liberação de Período esta data será atualizada automaticamente, lembrando que sempre será uma data posterior, nunca uma data anterior a qual já estava salva.*

**2) Data de Fechamento:**

No campo 'Data de Fechamento' informe uma data quando sua contabilidade já estiver fechada e não mais quiser fazer alterações dentro do período.

Desta forma todas as alterações, inclusões e exclusões anteriores a data informada no campo, serão barradas.

Esta data poderá ser alterada a qualquer momento.

Para alteração da data de fechamento, acesse: **'Ambiente' / 'Parâmetros' / 'Totvs Gestão Contábil' / 'Avançar' / Clique em Fechamento / Avançar**.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270909883/TDN_III.png?version=1&modificationDate=1490008557000&api=v2)



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270909883/image2017-12-8_15-54-10.png?version=1&modificationDate=1512759251000&api=v2)



Efetue um Logout/Login para efetivar as alterações realizadas.


No parâmetro citado existem informações sobre a última alteração realizada na Data de Fechamento, mostrando o usuário/data responsável pela última modificação.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270909883/image2017-12-8_15-55-3.png?version=1&modificationDate=1512759304000&api=v2)



**Importante:** Antes de informar esta data certifique-se de que não existam lançamentos em lotes **não integrados**, com datas anteriores a esta nova data de fechamento (**Escrituração Contábil / Lotes**). O sistema não permitirá que você informe uma data posterior à data de algum lançamento ainda não integrado ao lote zero.



**3) Período para Manutenção de Lançamentos Contábeis por Usuário:**

Período para Manutenção de Lançamentos Contábeis é o período definido **para o usuário** em que ele terá acesso liberado para incluir, alterar ou excluir lançamentos contábeis. Qualquer tentativa de incluir, alterar ou excluir lançamentos contábeis fora do período definido será barrada pelo sistema.

Quando a data de um lançamento estiver fora do período de manutenção definido para um usuário, este lançamento não poderá ser excluído nem suas partidas alteradas por este usuário, a não ser que a data deste lançamento seja alterada para dentro do período permitido para o usuário, ficando o lançamento a partir daí, disponível para alterações e exclusão por este usuário.



É possível realizar a alteração para todos os usuários de uma mesma coligada ou para usuários específicos:

a) Acesse a nova MDI, menu **'Utilitários' / Alteração do Período para Manutenção de Lançamentos Contábeis**.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270909883/TDN_VI.png?version=1&modificationDate=1490008934000&api=v2)



b) Informe ou altere o 'Período para Digitação de Lançamentos' Data inicial e Data Final (exemplo: 01/01/2018 a 31/12/2018). Avance.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270909883/image2017-12-8_15-59-19.png?version=1&modificationDate=1512759559000&api=v2)



C) Marque as opções desejadas e atualize a data de digitação.

D) Informe também a opção **'Filtrar por módulo do RM'** se deseja selecionar os módulos para, em seguida, informar quais usuários destes módulos serão alterados. Se não desejar informar os módulos as alterações serão aplicadas somente para os usuários do módulo contábil;

E) Na tela seguinte, serão apresentadas as opções:

-   Todos os usuários: Será alterada a data para manutenção de lançamentos contábeis de todos os usuários com permissão a coligada vigente.
-   Somente Supervisores: A alteração ocorrerá apenas para os usuários definidos como supervisor na coligada corrente.
-   Exceto Supervisores: A alteração irá contemplar todos os usuários da coligada corrente exceto os usuários supervisores.
-   Definir usuários: Poderão ser selecionados usuários específicos para a alteração do período contábil.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270909883/TDN_VIII.png?version=1&modificationDate=1490009041000&api=v2)



No final do processo será apresentado um Log com informações sobre as alterações realizadas.



**INFORMAÇÕES ADICIONAIS**

Quando, porém, a opção 'Barrar alteração da data do lançamento fora deste período para dentro do mesmo' estiver marcada, não será permitido que o

usuário altere a data de tais lançamentos, impossibilitando então que quaisquer alterações nos lançamentos que estiverem fora do período de manutenção definido para o usuário sejam feitas.



**IMPORTANTE:** A alteração do "Período para manutenção de lançamentos contábeis" somente será efetivada para os usuários deslogados de todos os módulos do sistema, caso o usuário que tenha permissão para acessar o RM Saldus esteja logado o seu período não será atualizado, sendo necessário realizar novamente o processo para alteração do período do mesmo.

A permissão de acesso a este processo de alteração global é definida no Perfil associado ao usuário, isto quer dizer que qualquer usuário da contabilidade com acesso a este processo em seu Perfil poderá definir e/ou alterar o período para manutenção de lançamentos para um ou mais usuários simultaneamente.

A opção de poder indicar os módulos para seleção dos usuários somente ficará disponível para usuários Supervisores. Usuários Não Supervisores poderão selecionar somente usuários do módulo Contábil.

Caso o sistema não efetive o preenchimento do Período informado, é orientado realizar as seguintes configurações no BDE:

Database - Na Base de Dados em questão:

Blob Size = 999

Blobs to cache = 65000



**Observações:**

Sobre o Processo de Fechamento e/ou Liberação de período, oriento que leia mais sobre o assunto acessando no WikiHelp:

[http://wikihelp.totvs.com.br/WikiHelp/CTB/Ctb.ExercicioContabil.aspx](http://wikihelp.totvs.com.br/WikiHelp/CTB/Ctb.ExercicioContabil.aspx)
