# Importação e exportação de projeto no fluig Studio

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=128681226](https://tdn.totvs.com/pages/viewpage.action?pageId=128681226)

---

# Índice



# Objetivo

O objetivo deste guia é apresentar os procedimentos necessários para a importação e exportação de projetos Fluig através do TDS.



# Exportação de Projetos Fluig do TDS

A exportação de um projeto Fluig é realizada pelo plugin Fluig BPM no TOTVS Developer Studio – TDS.

A estrutura de projeto Fluig é apresentada a seguir:





Os arquivos com formulários e seus anexos - por exemplo arquivos CSS e imagens - são armazenados em uma pasta específica. Na figura exemplo acima, os arquivos do formulário estão na pasta “63 - Especificações” que é o local do Fluig onde o formulário do processo foi publicado. A pasta é criada automaticamente com o mesmo nome dado ao formulário do processo de *workflow*.

Por fim, a pasta “*workflow*” contém todos os arquivos que compõem a estrutura do processos. Nela é possível encontrar o “.process” que é a definição do processo e a pasta “scripts”. Na pasta “scripts” são armazenadas a implementação de todos os eventos de customização criados para o processo.

A exportação do projeto Fluig pode ser realizada para que em outro momento seja importada em outra ferramenta de desenvolvimento (Ex: Totvs Developer Studio ou Eclipse). Para fazer este procedimento, basta selecionar o projeto e com o botão direito escolher a opção “*Export*” conforme ilustrado na figura a seguir:



Na árvore, expandir o item “*General*” e selecionar a opção “*Archive File*” conforme ilustrado na figura a seguir:





Por fim, informe o caminho completo e o nome do arquivo a ser gerado para o arquivo do processo. Para a criação de um arquivo no formato ZIP verifique se a opção “*Save in zip format*” está selecionada.



# Importação de Projetos Fluig do TDS

A partir de um projeto já exportado a importação de um projeto Fluig pode ser realizada para a ferramenta de desenvolvimento desejada, desde que esta tenha o plugin Fluig Studio instalado.

Para importar o arquivo de um processo de *workflow*, abra o TDS e selecione a visão “*Package Explorer*”. Em “*Package Explorer*” clique com o botão direito na área de trabalho desta visão e selecione a opção “*Import*” conforme ilustrado na figura a seguir:





Na tela de importação, feche o nó Fluig e, posteriormente, selecione o nó *General* > *Existing Project sinto Workspace*” conforme apresentado na figura a seguir:







Por fim, selecione opção “*Select archive file*” e clique em “*Browser*”. Navegue até o arquivo ZIP que contém a definição do processo a ser importado e finalize o *Wizard* conforme a tela a seguir:







# Importação de artefatos Fluig do servidor Fluig

Após criar um projeto, é possível **importar** os **artefatos** já existentes no **servidor** **Fluig.**

A funcionalidade permite que os artefatos como: ***workflow***, **formulários,** ***datasets***, **eventos**, **relatórios** entre outros, sejam manipulados a partir do *plugin* **Fluig *Designer*** no ***Studio*.**

A seguir, veja o passo a passo para **importar** artefatos já existentes no **Fluig**.



-   Para importar artefatos, clique com o botão direito na visão **Explorador de Pacotes | Importar.**
    Nesta tela, as origens de importação são exibidas.






-   Clique sobre a pasta **Fluig** e verifique as opções de importação disponíveis:

       **Importar *dataset* do servidor Fluig.**

       **Importar definição de formulário do servidor Fluig.**

       **Importar evento Fluig do servidor.**

       **Importar processo do servidor Fluig.**

       **Importar processo via arquivo XML.**

       **Importar relatório do servidor Fluig.**

-   Selecione a opção desejada e clique em Avançar.







-   Como exemplo, um ***Dataset*** do servidor será importado.






-   A seguir, informe o servidor no qual já foi previamente cadastrado e, em seguida, selecione o *dataset* customizado desejado para a importação.
    Clique em **Concluir** para finalizar.








-   O ***Dataset*** importado é disponibilizado no projeto **Fluig** criado anteriormente e, também, será exibido no editor para customização.










# Exportação de artefatos Fluig para servidor Fluig

Assim como é possível importar artefatos de um **servidor** **Fluig**, também é possível exportá-los.

No ***Fluig*** ***Studio*** o usuário pode manipular os artefatos de maneira *offline* e posteriormente exportar para o servidor do **Fluig**.

Para exportar é necessário que um servidor esteja cadastrado e no ar.

A exportação pode ser efetuada para todos os artefatos presentes no projeto **Fluig.**

A seguir, veja o passo a passo para **exportar** artefatos no **Fluig,** ao clicar nas setas acima ou na sequência de números abaixo.



-   Selecione o item desejado para exportar na visão **Explorador de Pacotes,** clique com o botão direito e, em seguida, clique em **Exportar.**
    Neste exemplo, um *dataset* será exportado.






-   Nesta tela, deve ser informado o destino da exportação.
    Selecione, **Exportar para o servidor Fluig**, disponível na pasta **Fluig**.





-   Em seguida, informe o **servidor** de destino, previamente cadastrado.
    Selecione a opção **Novo *Dataset*** somente quando exportar um novo ***Dataset*,** neste exemplo estamos atualizando um ***Dataset*** que já existe e por este motivo não é necessário a seleção da opção.
-   Selecione o *dataset* e preencha a descrição.
-   Para finalizar, clique em **Concluir.**





Para mais informações sobre importações e exportações no Fluig Studio, sugerimos a realização da trilha de treinamento do produto que está disponível na academia TOTVS.
