# Plataforma em load balance com Microsoft NLB

> **Fonte:** [https://tdn.totvs.com/display/fluig/Plataforma+em+load+balance+com+Microsoft+NLB](https://tdn.totvs.com/display/fluig/Plataforma+em+load+balance+com+Microsoft+NLB)

---

ATENÇÃO

A utilização de servidores Microsoft Windows para configuração de load balance é **extremamente NÃO RECOMENDADA.** Conforme a **[documentação](https://tdn.totvs.com/x/Xv4bPQ).**

Atenção

Esta página foi revisada para considerar as configurações de server do TOTVS Fluig Plataforma para a atualização 1.6.3 ou superior.

# Índice



# Pré requisitos

* * *

-   O serviço de indexação precisa ser compartilhado por todas as instâncias, portanto deve ser isolado em outro ambiente, podendo ser um servidor único ou [em cluster](https://tdn.totvs.com/display/public/fluig/Fluig+Indexer+em+um+cluster+de+servidores+dedicados);

-   Todas as instâncias deverão ter acesso a uma mesma pasta compartilhada, onde será o repositório de arquivos do sistema;

-   O banco de dados dever ser único para todas as instâncias;


-   Todas as instâncias devem estar atualizadas com a mesma versão da plataforma.


-   É preciso manter afinidade de sessão, ou seja, uma vez que o usuário logou acessando em uma instância, sempre será direcionado para a mesma instância.




# Preparando ambiente

* * *

Antes de começar a instalação, é preciso estar com o ambiente preparado. Faça o seguinte:

**1.** Instale o banco de dados e crie uma instância;

Atenção!

À partir da atualização Snowflake (1.6.3), o controle e sincronização do cache do Fluig é realizado através do banco de dados e é compartilhado entre todos os nós de um cluster. Em atualizações 1.6.0 à 1.6.2 **é necessário realizar a instalação do [Redis](https://tdn.totvs.com/pages/viewpage.action?pageId=205917413) como serviço de cache do Fluig antes do passo 2**.

**2.** Escolha uma pasta e um servidor e torne-a acessível para todas as máquinas que farão parte do *load balancer.*



# Configurando o Microsoft NLB

* * *

Existem 3 portas a serem configuradas:

**7777 e 8888 para o fluig RealTime:**

-   Ambas deverão estar no Modo "Single"

-   Para mais informações acesse [Configurando o Fluig Realtime para execução em cluster](https://tdn.totvs.com/pages/viewpage.action?pageId=146183926).


**Porta HTTP para o fluig Server**

-   Esta porta costuma-se ser a 8080 ou apenas 80.

-   Esta porta deve estar no modo "Multiple" e afinidade "Single".




Em ambientes com *load balance*, é muito importante manter todos os servidores com o horário sincronizado.
