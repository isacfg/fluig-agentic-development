# Fluig Studio para outros idiomas

> **Fonte:** [https://tdn.totvs.com/display/fluig/Fluig+Studio+para+outros+idiomas](https://tdn.totvs.com/display/fluig/Fluig+Studio+para+outros+idiomas)

---

# Alterar idioma do fluig Studio 

O idioma padrão do fluig Studio é o Português. Contudo é possível ativar a tradução tanto para o Inglês como para o Espanhol.

### Configurar idioma

Siga o procedimento a seguir para alterar o idioma utilizado:

-   1.  No Studio, acesse menu ***Help | Install new software***.




    2.  *No campo **Work with:***, informe o endereço do projeto "Babel", que é o responsável pelo gerenciamento de internacionalização do Eclipse. Escolha o update site conforme sua versão do Eclipse no site [https://eclipse.org/babel/downloads.php](https://eclipse.org/babel/downloads.php)
         
    3.  Localize o adicional ***Babel Language Packs for eclipse*** e expanda-o;


    4.  No item expandido, selecione os idiomas desejados;


    5.  Acione ***Next*** e prossiga com as instruções fornecidas;


    6.  Ao solicitar a reinicialização, ***não*** o faça.


    7.  Encerre o *TOTVS | Developer Studio*;

Ainda não acabou

O procedimento de configuração ainda não acabou.

É possível prosseguir de duas maneiras diferentes, veja na sequência duas formas alternativas para prosseguir.

-   A primeira alternativa é alterando o arquivo *developerStudio.ini* (eclipse.ini para Eclipse Keppler) adicionando os parâmetros *Duser.language* e Duser.country, informe o idioma desejado: 

    ```
    -Duser.language=es
    -Duser.country=ES
    ```
    ```
    -Duser.language=en
    -Duser.country=US
    ```
    ```
    -Duser.language=pt
    -Duser.country=BR
    ```

    Inicie o Studio normalmente.


-   A segunda alternativa é editar o atalho (conforme seu sistema operacional), acrescentando o parâmetro *\-nl locale* (localização) na linha de comando;

-   *O parâmetro de inicialização nl*, necessita da informação *locale*, que indica qual o idioma a ser utilizado. Este valor é composto por uma ou mais siglas, que formam um código. O *TOTVS | Developer Studio*suporta os seguintes idiomas com seus respectivos códigos.


    **Idioma**

    **Exeplo de linha de comando**

    Português (Brasil)

    eclipse.exe -nl pt\_BR

    Inglês

    eclipse.exe -nl en\_US

    Espanhol

    eclipse.exe -nl es\_ES


Inicie o Studio normalmente.

Observação

Alguns menus poderão ficar indisponíveis após a instalação do Eclipse Babel e do Plugin Fluig (Ex: Menu de Importação, Lista de perspectivas, Menu "novo"). Caso isso aconteça verifique a presença de pacotes RAP dentro dos plugins instalados em seu eclipse. Em alguns casos é necessário remover estes pacotes para que os menus voltem a funcionar no idioma em que a IDE esteja trabalhando . Abaixo segue um exemplo de um pacote rap que poderá causar este problema . Este pacote poderá vir junto com a instalação do plugin Babel.
