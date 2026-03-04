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
