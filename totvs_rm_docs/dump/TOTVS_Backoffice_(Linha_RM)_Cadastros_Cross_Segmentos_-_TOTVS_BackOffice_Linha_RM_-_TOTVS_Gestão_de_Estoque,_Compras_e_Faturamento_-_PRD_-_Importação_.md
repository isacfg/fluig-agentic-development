# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento  - PRD - Importação/Exportação de Produto via Conceito/Layout

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360007261092-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Importa%C3%A7%C3%A3o-Exporta%C3%A7%C3%A3o-de-Produto-via-Conceito-Layout](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360007261092-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Importa%C3%A7%C3%A3o-Exporta%C3%A7%C3%A3o-de-Produto-via-Conceito-Layout)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
> **Data:** 10 de abril de 2025 às 09:17

---

**
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/16232151241751)
**Tempo aproximado para leitura: **00:04:00 minutos**

**Ocorrência
**Auxilio na Importação/Exportação de Produto via Conceito/*Layout*.

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**Dúvida para importar Produto via Conceito na nova versão 12.

**Solução
**A importação de arquivos txt evoluiu a partir da versão 12.1.14 sendo a mesma agora executada via conceito.

Todo o processo será feito no **Módulo** **Integração:**

![Imagem](https://tdn.totvs.com/download/attachments/284475601/image2017-7-10%2010%3A54%3A27.png?version=1&modificationDate=1499698460000&api=v2)

Após carregar o aplicativo, será necessário escolher a opção **Conceito (ETL)**:

![Imagem](https://tdn.totvs.com/download/attachments/284475601/image2017-7-10%2010%3A56%3A0.png?version=1&modificationDate=1499698460000&api=v2)

Será necessário importar os arquivos de Conceito responsáveis pelo processamento dos arquivos de texto através do Menu destacado abaixo:

![Imagem](https://tdn.totvs.com/download/attachments/284475601/image2017-7-10%2011%3A5%3A12.png?version=1&modificationDate=1499698460000&api=v2)

Os arquivos estão disponíveis em **"C:\\totvs\\CorporeRM\\ObjetosGerenciais\\Conceito"** e são eles:

![Imagem](https://tdn.totvs.com/download/attachments/284475601/image2017-7-10%2011%3A0%3A32.png?version=1&modificationDate=1499698460000&api=v2)

**Configuração Básica de Importação
**Após importar o arquivo de Conceito, será possível definir o local de onde o arquivo txt será carregado. Selecione o conceito que deseja processar e clique em editar. 

Será aberta uma nova aba com toda a configuração e estrutura do arquivo Conceito.

![Imagem](https://tdn.totvs.com/download/attachments/284475601/image2017-7-10%2011%3A48%3A39.png?version=1&modificationDate=1499698460000&api=v2)

Para configurar o local de onde o conceito buscará o arquivo texto, edite a conexão de Origem PRODUTO:

![Imagem](https://tdn.totvs.com/download/attachments/284475601/image2017-7-10%2011%3A51%3A8.png?version=1&modificationDate=1499698460000&api=v2)

Após a edição, será carregada a tela abaixo:

![Imagem](https://tdn.totvs.com/download/attachments/284475601/image2017-7-10%2011%3A53%3A1.png?version=1&modificationDate=1499698460000&api=v2)

Nesta tela clique no botão de *lookup (...)* e escolha uma das três opções listadas:

-   **Arquivo Fixo:**
    Permite definir um arquivo especifico a ser importado.
-   **Diretório:**
    Permite definir uma pasta da máquina onde o sistema irá buscar os arquivos que estiverem disponíveis para importação que atenderem à máscara para o nome do arquivo.

![Imagem](https://tdn.totvs.com/download/attachments/284475601/image2017-7-10%2014%3A16%3A16.png?version=1&modificationDate=1499706977000&api=v2)

Quando escolhido a opção de Diretório, será necessário escolher o caminho a qual o sistema deverá procurar o arquivo e escolher a máscara para o mesmo. A máscara não é dinâmica e não é possível atribuir um tipo(variável) ao nome, como por exemplo:

###; %%%; QQQQ

Como pode ser visto no *print*, foi parametrizado o conceito para buscar na pasta **Saídas**, todos os arquivos que iniciam com o nome PRODUTO e que sua extensão é txt. O \* informado, tem comportamento semelhante ao % no sistema e pode ser usado da seguinte maneira:

PRODUTO**\*** = Arquivos que iniciem com a palavra PRODUTO;

**\***PRODUTO= Arquivos que terminam com a palavra PRODUTO;

**\***PRODUTO**\*** = Arquivos que contenham a palavra PRODUTO;

**Importante:** É aconselhado informar também a extensão do arquivo para evitar erros no momento da importação. Como é possível deixar em um mesmo diretório arquivos com o mesmo nome porém extensões diferentes, o sistema poderá tentar importar arquivo com uma extensão inválida.

-   **Parâmetro:**
    Permite definir o caminho do arquivo a ser importado no momento de executar o conceito.

Salve o conceito antes de processar o mesmo pois apenas clicando na opção de *Ok* da tela de definição do caminho do arquivo a ser importado não indica que a alteração foi salva.

Após executar os passos acima o conceito estará pronto para ser utilizado no processo de importação. Para executar o conceito basta selecionar o mesmo e no menu processos selecione a opção “Processar novo conceito”.

![Imagem](https://tdn.totvs.com/download/attachments/284475601/image2017-7-10%2014%3A17%3A21.png?version=1&modificationDate=1499707042000&api=v2)

**Obtendo o *layout* de produto e um exemplo de txt a partir de produto existente na base.**

No aplicativo **Integrações** acesse o menu **Gerador de saídas – *Layouts*** e selecione o *layout* referente a versão desejada. (Recomenda-se a versão 3 ou 4).

Edite o Layout desejado e clique na opção **Gerar Documentação:**

![Imagem](https://tdn.totvs.com/download/attachments/235574843/image2018-11-27_12-49-14.png?version=1&modificationDate=1543333754773&api=v2)

OU

Edite o *layout* e faça a conferência dos campos manualmente:

![Imagem](https://tdn.totvs.com/download/attachments/235574843/image2016-4-19%2015%3A50%3A54.png?version=1&modificationDate=1461088370000&api=v2)

Para visualizar os campos e suas posições iniciais e finais dê um duplo clique sobre a tabela desejada e a tela abaixo será exibida:

![Imagem](https://tdn.totvs.com/download/attachments/235574843/image2016-4-19%2015%3A51%3A34.png?version=1&modificationDate=1461088411000&api=v2)

Para obter um arquivo texto a partir de um produto já existente na base de dados, basta selecionar o *layout* em questão e em “Processos” selecione a opção “Geração de saídas”, realize um filtro para buscar o produto desejado e execute o processo. Um arquivo texto será gerado com os dados de seu movimento já posicionados da forma que o sistema espera que sejam importados.

**Importante
**O *layout* com os posicionamentos dos campos continua o mesmo da versão 11.8x e estes podem ser consultados através dos novos arquivos de layout (*print* 1) ou através do módulo antigo (*print* 2).

Print 1 - Layout MDI

![Screenshot_8.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4414492653847)

Print 2 - Módulo exe

![Screenshot_9.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4414506029975)

Vale ressaltar que a importação antiga era feita através de ***INSERT*** na base de dados, por tanto, não havia qualquer consistência sobre os dados importados. A importação através de conceito passa por toda regra de parametrização definida, por tanto, poderá ser apresentado inconsistências e erros no processo aos quais será necessário uma análise do arquivo de texto ou até mesmo da configuração/parametrização.
