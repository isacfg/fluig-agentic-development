# Aprovação de Contrato por Workflow no Fluig

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938705](https://tdn.totvs.com/pages/releaseview.action?pageId=423938705)
> **Domínio:** TDN (TOTVS Developer Network)

---

Através da integração do Fluig com o TOTVS Gestão de Estoque, Compras e Faturamento é possível realizar a aprovação de Contratos, Itens de Contrato e Medições para faturamento.
Nesse processo ao incluir ou alterar um Item de Contrato será gerado um workflow no Fluig com os dados do Contrato, Item de Contrato ou Medição, onde um usuário com papel de aprovador deve acessar o Formulário no Fluig e conforme análise dos dados aprovar ou não o workflow.

****************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
**************Parametrização de Integração Fluig**

Para a utilização da integração com o Fluig é necessário configurar em Parâmetros | Globais |Integração Fluig informando o Endereço do Servidor do Fluig, Usuário/Senha do administrador do Fluig e Id da Empresa do Fluig.
Importante: para maiores informações sobre a instalação e configuração do Fluig, [clique aqui](https://tdn.totvs.com/pages/releaseview.action?pageId=257623022). 

******************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
****************Parametrização de Contrato para Geração de Workflow no Fluig**

Para que os Contratos possam geram workflow no Fluig o sistema deve estar parametrizado com as seguintes opções:
 
******************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
****************Parametrização Geral:**

Em [Parâmetros | Gestão de Estoque, Compras e Faturamento | Contratos | Workflow Fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=423938209) deve estar selecionada a opção "Usa" em "Usa Aprovação".
 
******************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
********************Geração Automática de Workflow**

Em [Parâmetros | Gestão de Estoque, Compras e Faturamento | Contratos | Workflow Fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=423938209) se o parâmetro "Geração Automática de Workflow" estiver marcado, ao incluir um contrato com um tipo de contrato que gera workflow, após salvar o contrato será gerado automaticamente o workflow no Fluig.
Caso esse parâmetro esteja desmarcado, é habilitado na visão de Manutenção de Contrato o processo "Geração de Workflow Fluig para Contrato", dessa forma somente será gerado o workflow no Fluig após selecionar o Contrato e executar esse processo. 

**Observação**:

-   O solicitante da aprovação é o usuário que dispara o WorkFlow, no caso da geração automática é o mesmo usuário que criou o contrato. Quando utilizado a geração manual do Workflow o usuário solicitante é quem executa o processo.

******************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
****************Parametrização Tipo de Contrato:**

Em [Parâmetros | Gestão de Estoque, Compras e Faturamento | Contratos | Workflow Fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=423938209) deve ser parametrizada com pelo menos uma das seguintes opções:
 
******************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
********************Aprovação no Item Periódico e Item Não Periódico**

Ao informar os campos nesse grupo será gerado workflow de aprovação para os itens periódicos e não periódicos do contrato, conforme as seguintes opções: 



-   **Nível de Aprovação**: define o Nível de Aprovação utilizado. As opções disponíveis são: Contrato e Item de Contrato. Caso, seja selecionado a opção de Contrato, será gerado um único Workflow por Contrato, contendo as informações de todos os Itens de Contrato. Para a opção selecionada de Item de Contrato será incluído um workflow por Item de Contrato.
-   **Processo**: este parâmetro define o processo do Fluig que será utilizado para a inclusão do Workflow. Para aprovação de Contratos do TOTVS Gestão de Estoque Compras e Faturamento está disponível um workflow de exemplo nomeado como "Contrato".
-   **Estados de Aprovação**: devem ser informados os estados de aprovação possíveis para o processo selecionado. Os estados de aprovação são as etapas do workflow em que o Contrato/Item serão considerados aprovados. Exemplo: "Aprovado"; "Aprovação Automática".



 ******************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
********************Aprovação na Medição**

Ao informar os campos nesse grupo será gerado workflow de aprovação para os itens por medição do contrato, conforme as seguintes opções:

-   Nível de Aprovação: define o Nível de Aprovação utilizado.

    -   As opções disponíveis são: Contrato:
    -   Item de Contrato:
    -   Medição.

    Caso, seja selecionado a opção de Contrato, será gerado um único Workflow por Contrato, contendo as informações de todos os Itens de Contrato.
    Para a opção selecionada de Item de Contrato será incluído um workflow por Item de Contrato, e caso seja selecionada a opção Medição será gerado um Workflow para cada medição incluída, com as suas respectivas informações.
-   **Processo**: este parâmetro define o processo do Fluig que será utilizado para a inclusão do Workflow. Para aprovação de Medições de Contratos do TOTVS Gestão de Estoque Compras e Faturamento está disponível um workflow de exemplo nomeado como "Contrato".
-   **Estados de Aprovação**: devem ser informados os estados de aprovação possíveis para o processo selecionado. Os estados de aprovação são as etapas do workflow em que a Medição será considerada aprovada. Exemplo: "Aprovado"; "Aprovação Automática".

***Observação***: uma vez informado o Nível de Aprovação será obrigatório informar o Processo e os Estados de Aprovação. Caso seja selecionado o Nível de Aprovação para Contrato, para dois ou mais Itens de Contrato será gerado apenas um workflow para aprovação para os mesmos, devendo respeitar a restrição de que o processo e o estado de aprovação para ambos deverá ser o idêntico.

********************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
******************Inclusão de Contrato**

Ao incluir um Contrato será criado no Fluig o workflow conforme parametrização. O usuário aprovador deve acessar seu painel de tarefas no Fluig e movimentar o workflow gerado para alguma das etapas possíveis.
Os workflows gerados para o Contrato podem ser visualizados a partir da visão de Manutenção de Contrato em Anexos | [Item de Aprovação Fluig](https://tdn.totvs.com/x/scdEGQ), nessa visão é possível verificar o Identificador do workflow no Fluig e o Status de Aprovação (Aprovado ou Não Aprovado). 
Na visão de Manutenção de Contrato são disponibilizados os botões "Aprovados Fluig" e "Não Aprovados Fluig", para filtrar na visão os Contratos com workflow aprovado no Fluig e Contratos com workflow não aprovado, respectivamente

**********************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
********************Inclusão de Itens Periódicos e Não Periódicos**

Na Inclusão do Contrato, caso o nível de aprovação selecionado seja Contrato, será gerado para todos os Itens Periódicos/Não periódicos apenas um Workflow, caso seja selecionada a opção de Item de Contrato será gerado um workflow para cada Item de Contrato.
Será gerado o workflow somente para os Itens que possuírem Status "À Faturar", para que o usuário possa realizar a aprovação no Fluig. Caso o workflow não tenha sido aprovado o usuário não poderá faturar o Item de Contrato.

**********************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
********************Inclusão de Itens por Medição**

Na Inclusão do Contrato, caso o nível de aprovação selecionado seja Contrato, é gerado para todos os Itens de Medição apenas um Workflow, caso seja selecionada a opção de Item de Contrato é gerado um workflow para cada Item de Contrato. Se o Nível de aprovação for igual a Medição é gerado um workflow para cada medição incluída com os seus respectivos dados. Será gerado o workflow somente para as medições que possuem Status igual a "À Faturar", para que se possa realizar a aprovação do Fluig. Caso o workflow não tenha sido aprovado não será possível faturar a Medição.
Para todas as inclusões, se dois ou mais Tipos de Faturamento estiverem utilizando o Nível de Aprovação para Contrato, os Itens de Contrato serão agrupados e será gerado apenas um workflow.
 
************************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
**********************Alteração de Contrato - Itens Periódicos e Não Periódicos**

Na alteração do Item de Contrato, caso o Nível de aprovação selecionado seja Contrato, somente é incluído o workflow para os Itens de Contrato que estejam com esta parametrização. Caso, seja selecionado o Nível de aprovação por Item de Contrato, somente os Itens que possuem esta parametrização terão os seus workflows incluídos.  
***Importante!*** na alteração do Item de Contrato, se o Item já tiver sido faturado (Campo ITEMUTILIZADO = 1 na tabela TITMCNTWFLUIG) e o Nível de aprovação for Contrato ou Item de Contrato é realizado a inclusão de um novo Workflow, caso o item ainda não tenha sido faturado (Campo ITEMUTILIZADO = 0 na tabela TITMCNTWFLUIG) é estornado o workflow em aberto e incluído um novo workflow.
 
**************************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
************************Alteração de Contrato - Itens por Medição**

Na alteração de Item de Contrato, caso o Nível de aprovação selecionado seja Contrato, somente será incluído o workflow para as Medições dos Itens de Contrato que estejam com esta parametrização. Caso, seja selecionado o Nível de aprovação por Item de Contrato, somente serão incluídos workflows para as Medições dos Itens de Contrato que possuem esta parametrização.  Se o Nível de aprovação for igual a Medição será gerado um workflow para cada medição na alteração da Medição.
***Importante!*** na alteração da Medição, se a Medição já tiver sido faturada (Campo ITEMUTILIZADO = 1 na tabela TITMCNTMEDICAOWFLUIG) e o Nível de aprovação for Contrato ou Item de Contrato será realizado a inclusão de um novo Workflow, caso a Medição ainda não tenha sido faturada (Campo ITEMUTILIZADO = 0 na tabela TITMCNTMEDICAOWFLUIG) é estornado o workflow em aberto e incluído um novo workflow.
***Atenção!*** não é permitido alterar o Cadastro de Tipos de Contrato ([Contratos | Tabelas de Contrato | Tipo de Contrato](/display/LRM/Tipos+de+Contratos)) e o campo "Tipo de Contrato" no Cadastro do Contrato ([Contratos | Manutenção de Contrato | Edição do Contrato | Aba Cabeçalho](/pages/viewpage.action?pageId=423938074)) caso exista algum Item de Contrato ou Medição faturados.  

****************************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
****************************Cancelamento de Contrato/Item de Contrato

Ao cancelar um Contrato ou Item de Contrato, se existir Workflow que não gerou faturamento (Campo ITEMUTILIZADO = 0 na tabela TITMCNTWFLUIG ou TITMCNTMEDICAOWFLUIG) o mesmo é excluído. Caso o workflow já tenha gerado faturamento (Campo ITEMUTILIZADO = 1 na tabela TITMCNTWFLUIG ou TITMCNTMEDICAOWFLUIG) o mesmo é mantido como histórico. 

******************************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
****************************Desfazer Cancelamento de Contrato/Item de Contrato**

Ao Desfazer Cancelamento de Contrato/Item de Contrato o Workflow é incluído da mesma forma supracitada para alterações em Contrato/Item de Contrato/Medições. 
 
********************************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
******************************Cancelamento de Movimento**

Ao realizar o Cancelamento do Movimento gerado a partir de Item de Contrato ou Medição, será alterado o Item Utilizado (Campo ITEMUTILIZADO = 1 na tabela TITMCNTWFLUIG ou TITMCNTMEDICAOWFLUIG) do último workflow aprovado e utilizado.
Se houver um novo workflow não utilizado ao realizar cancelamento do Movimento não será alterado o valor do Item Utilizado. Portanto, no cancelamento, o Item Utilizado voltará para não utilizado apenas quando o Item de Contrato tiver o Status "À Faturar'. Exemplo: no caso de Itens de Contrato de Tipo de Faturamento Periódico somente irá alterar o Item Utilizado para não utilizado quando o último movimento gerado for cancelado/excluído. 

********************************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
******************************Faturamento**

Quando utilizado aprovação por workflow no Fluig, somente será possível faturar um item de contrato ou medição se o workflow gerado pelo mesmo estiver aprovado.
O faturamento pode ser realizado para Itens Periódico e Não Periódicos a partir da visão de Manutenção de Contrato, processo "Faturamento de Contrato" ou também através de Faturamento por Lote, menu [Contratos | Faturamento por Lote](/display/LRM/Faturamento+por+Lote).
Para Itens por Medição o faturamento é realizado através do Anexo | Visualizar Medições do Contrato | Faturamento de Medição. 
 
**********************************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
********************************Workflow de Exemplo**

É disponibilizado um workflow de exemplo para que se possa utilizar a Aprovação de Contrato através do Fluig.
Os estados de Aprovação e Reprovação são "Aprovado" e "Reprovado", respectivamente.
Ao movimentar o Workflow de exemplo é possível realizar as seguintes ações:

-   **Aprovação Automática**: No workflow de exemplo está predefinido que Contratos que o somatório dos valores dos itens de contrato que participam do workflow tenham valor até 10.000 sejam aprovados automaticamente, ou seja, se o valor do contrato é até 10.000, ao gerar o workflow o mesmo é avançado automaticamente para "Aprovado", se for o valor for superior a 10.000 o workflow é avançado para a etapa de "Aprovação", onde será analisado por um usuário definido como aprovador se a solicitação deve ser aprovada ou reprovada.
    ***Importante!*** por padrão, o sistema realiza o avanço automático do WorkFlow para o estado de Aprovação, para que o avanço automático NÃO seja realizado, ou seja, para que o WorkFlow seja mantido em seu estado inicial é necessário:
    Realizar a importação da Fórmula Visual "MOVWKF0024 - Fluig - Manter WF do Contrato no Estado Inicial" e marcar no momento da importação a opção "Importar Gatilhos" e também a opção "Todas Coligadas" em Seleção de Coligada (Menu Gestão | Fórmula Visual | Fórmula Visual | Importação de Fórmula Visual). A [Fórmula Visual](https://tdn.totvs.com/pages/viewpage.action?pageId=403746948) se encontra disponível na Pasta C:\\Totvs\\CorporeRM\\ObjetosGerenciais\\Fórmulas Visuais (Caminho padrão de instalação da Biblioteca RM, que pode ser alterado conforme necessidade no momento da instalação).
-   **Aprovado**: Ao escolher essa ação o workflow é Aprovado e o item de contrato ou medição que o gerou estará disponível para faturamento.
-   **Reprovado**: Ao escolher essa ação o workflow é Reprovado e o item de contrato ou medição que o gerou não será liberado para faturamento.
    ***Observação***:
    -   Os workflows são customizáveis, sendo assim possível criar as etapas do mesmo conforme necessidade da empresa. Para verificar os procedimentos para configuração dos Workflows clique aqui. 

************************************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
**********************************Aprovação de Contrato via aplicativo Mobile**

O processo de aprovação de contrato por workflow está disponível também via aplicativo mobile. Disponível para as plataformas IOS e Android.

-   Pré Requisitos:

**Android**
Versão: 4.1 ou superior
Dispositivos suportados: Smartphones ou tablets

**IOS**
Versão: 8 ou superior
Dispositivos suportados: IPhone 4 ou superior, IPad 2 ou superior
Para maiores informações sobre o Fluig Mobile [clique aqui](https://tdn.totvs.com/pages/releaseview.action?pageId=107940624).
