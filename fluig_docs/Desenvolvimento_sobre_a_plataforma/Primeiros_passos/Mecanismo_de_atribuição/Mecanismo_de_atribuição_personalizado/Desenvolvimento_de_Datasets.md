# Desenvolvimento de Datasets

> **Fonte:** [https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Datasets](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Datasets)

---

# Índice



# Objetivo

* * *

Este guia tem o objetivo de apresentar o conceito de Dataset, suas possíveis parametrizações e sua importância no TOTVS Fluig Plataforma.



# Pré-requisitos

* * *

Para que se tenha uma compreensão completa destas informações, alguns conhecimentos são considerados pré-requisitos, entre eles:

-   Visão geral sobre a plataforma TOTVS Fluig
-   Visão geral sobre integração de sistemas

Atenção!

A partir das atualizações **1.6.5 Liquid**, **1.7.0 Lake** e **1.7.1 Crystal Lake**, os *select* passados por *constraint* em dataset serão bloqueados pelo serviço. Orientamos a leitura da documentação [Datasets acessando banco de dados externo](https://tdn.totvs.com/x/OgFlDw) que contém um exemplo da correta utilização do procedimento.



# Datasets

* * *

A plataforma Fluig permite disponibilizar informações provindas de várias fontes de dados através de formas variadas de apresentação, dependendo da necessidade de cada cliente. Esse recurso é atendido pelo componente Dataset, que padroniza o acesso às informações, independente da origem dos dados. É possível apresentar ou processar informações referentes a:

-   dados da própria plataforma (como usuários, grupos, papéis, tarefas, etc.);
-   dados criados pelo usuário mas gerenciados pela plataforma (dados de formulários);
-   dados externos (como entidades de um ERP);
-   valores fixos (como uma lista de estados ou unidades de medida).

Um Dataset disponibiliza operações que viabilizam sua consulta como: consultar quais são as colunas disponíveis, quantos registros foram retornados na consulta, os valores de cada campo, e filtrar os valores de retorno.

O diagrama abaixo apresenta um modelo conceitual sobre os Datasets.

# Tipos de Datasets

* * *

Existem três tipos de datasets gerenciados pela plataforma: internos, simples e avançados:

-   **Internos**: permitem acessar dados das entidades do TOTVS Fluig Plataforma, como usuários, grupos, processos ou tarefas, por exemplo, e também os dados existentes em formulários publicados pelos usuários (cada formulário criado via plataforma cria um dataset interno, com a opção de dar o nome para o dataset de formulário). 

    Confira [aqui](https://tdn.totvs.com/display/fluig/Datasets+internos) mais detalhes sobre os datasets internos que acessam dados das entidades da plataforma.

-   **Simples**: realizam consulta em dados provindos de API, de forma simplificada e sem codificação, por isso podem ser utilizados em uma grande gama de situações, por exemplo: extração de dados de um serviço externo (via *WebServices*, por exemplo). A plataforma pode gerar a integração sem qualquer tipo de codificação, sendo necessário apenas informar o endereço e o método do *Webservice* que contém as informações. 

    Acesse [aqui](https://tdn.totvs.com/display/fluig/Dataset+Simples) para saber como construir facilmente um dataset simples.

-   **Avançados:**  é uma forma de customização do dataset simples, permitindo navegar nos dados retornados por meio de uma codificação em JavaScript. Por exemplo: definição de uma lista de valores fixos (como estados de um país).

    Acesse [aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=412888219) para saber como codificar um dataset avançado.


As nomenclaturas dos tipos *simples* e *avançados* foram adotadas a partir da **atualização 1.6.5**. Antes disso, os tipos de datasets eram chamados de *gerados* ou *customizados*, respectivamente.

Ainda que os Datasets possam ter origens distintas, não existe qualquer diferença sob a perspectiva do componente que realizará consultas neste Dataset. Esta característica representa um grande benefício para os usuários, uma vez que a fonte dos Datasets pode ser alterada sem que isto represente retrabalho nos pontos onde ele é utilizado.



## Exemplificando

* * *

Para entender melhor, considere um processo *workflow* que precise trabalhar com uma lista de centros de custo. Em um primeiro momento, pode-se trabalhar com um Dataset simples que monte, de forma fixa, os registros referentes a cada um dos centros de custo necessários para este processo.

Uma vez que codificar a lista se torne pouco flexível (devido a alterações frequentes nos dados), é possível definir que a fonte de dados seja baseada em um Dataset de formulário, desde que se observe o nome dos campos do Dataset, não haverá qualquer impacto sobre o processo *workflow*.

Em um terceiro momento, pode-se optar por mudar o Dataset novamente, desta vez extraindo os centros de custo do ERP do cliente. Novamente não haverá impacto para o processo *workflow* (ou para os demais pontos que utilizem o Dataset), desde que se mantenha a estrutura do Dataset inalterada.



# Consultando dados

* * *

A consulta aos dados retornados pelo Dataset pode ser feita pelo Fluig Studio ou pela própria plataforma (via painel de controle ou *widget*).

## Via Painel de Controle

A partir da **atualização 1.6.2**, o administrador do sistema pode consultar o que o Dataset está retornando, acessando Painel de Controle > Datasets, localizando o Dataset desejado, e acionando Mais ações > Consultar. Os dados retornados serão apresentados de forma semelhante à janela abaixo.

## Via Widget

Através da widget **Listar registros de *datasets,*** é possível consultar os Datasets disponíveis bem como visualizar o seu conteúdo. Com isto é possível verificar quais os campos disponíveis, tanto para filtros quanto para acesso. Através desta widget, visualizações de datasets podem ser publicadas em páginas ou comunidades.

O exemplo abaixo apresenta um exemplo de Dataset sendo visualizado pela widget:

Para filtrar os dados na *widget* de visualização de Datasets, é necessário selecionar quais os campos que você deseja utilizar o filtro, conforme a imagem a seguir:



Observações

Em Datasets internos o filtro por campos ***metadata*** funcionará apenas se forem únicos, ou seja, se deseja filtrar por "***metadata#parent\_id"***, o filtro deve estar ativado apenas para ele. Em Datasets simples ou avançados, o filtro deve ser implementado junto ao seu código de criação.


Via Fluig Studio

Para conhecer a consulta de datasets via Fluig Studio, acesse a página de [Visualização de Datasets](https://tdn.totvs.com/pages/viewpage.action?pageId=239021220).



# Acessando um Dataset

* * *

Vários pontos da plataforma podem fazer uso dos Datasets. Dependendo do local onde o Dataset é utilizado, podem ocorrer variações na forma de acessá-lo ou de manuseá-lo. Para saber mais sobre as formas de acesso ao dataset, consulte a documentação [Acessando Datasets](https://tdn.totvs.com/display/fluig/Acessando+Datasets).

Os Datasets de fontes externas também podem ser sincronizados, para reduzir o número de acessos a serviços de dados e tráfego de informações. Para saber como funciona a sincronização, consulte [Sincronização de Datasets](https://tdn.totvs.com/pages/viewpage.action?pageId=212899013).



# Importar e Exportar Datasets

* * *

A plataforma possibilita exportar um dataset do ambiente de teste/homologação para posteriormente importá-lo no servidor de produção. A partir da **atualização 1.6.5**, esse recurso está disponível pela tela de Datasets, no Painel de Controle. Nas atualizações anteriores, a importação e exportação de datasets ocorria apenas pelo Fluig Studio.

# Para saber mais

* * *



Vídeos How To

Veja mais vídeos how to sobre datasets em: [Datasets - Consulta, criação e registros](https://tdn.totvs.com/pages/viewpage.action?pageId=270925461).
