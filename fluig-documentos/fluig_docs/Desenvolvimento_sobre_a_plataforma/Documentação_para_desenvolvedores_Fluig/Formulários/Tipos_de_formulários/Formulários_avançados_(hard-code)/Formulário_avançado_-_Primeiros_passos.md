# Formulário avançado - Primeiros passos

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=745133376](https://tdn.totvs.com/pages/viewpage.action?pageId=745133376)

---

* * *

Os formulários avançados no Fluig permitem uma personalização completa através de codificação, possibilitando a criação de *layouts* e comportamentos totalmente adaptados às necessidades da empresa. Com essa abordagem, é possível integrar sistemas externos, criar validações complexas e desenvolver fluxos personalizados.

No entanto, para aqueles que buscam soluções rápidas e sem necessidade de programação, o Fluig também oferece a opção de formulários sem código que podem ser criados de forma intuitiva através de ferramentas de arrastar e soltar.

Como criar um formulário?

# Formulário avançado - Hello World

 Para quem está começando a aprender sobre a plataforma, este é um passo fundamental e simples para entender como funciona a criação de formulários. Vamos começar?

Se você nunca criou um formulário no Fluig, podemos começar de forma simples, apenas com a plataforma e um editor de texto.


Tenha atenção em dois pontos:

-   As tags **html** e **body** são necessárias.
-   Todos os campos que serão preenchidos precisam estar dentro da tag ***form*** do html. Como no exemplo abaixo:

```
<html>
<body>
    <form name="form" role="form">
        Oi. Informe o seu nome: <input type="text" name="name" />
    </form>
</body>
</html>
```

Agora, acesse a plataforma com seu usuário e senha e siga os passos abaixo:

**
01.** Acesse o item de menu **Documentos**;

**02**. Crie uma pasta ou escolha uma já existente. Na imagem de exemplo a pasta se chama Formulários Fluig;

**03.** Clique no botão **Novo**; 

**04.** Clique na opção **Formulário Avançado**.

Ao abrir a modal insira as informações solicitadas:


**01.** Em seu diretório, selecione o arquivo HTML criado anteriormente em **Escolher arquivo**;

**02.** Defina um nome para o formulário a ser criado;

**03.** Clique em **Confirmar**.

Agora que seu formulário já foi criado, você pode inserir um registro nele. Para isso siga os passos abaixo:

**
01.** Acesse a pasta na qual foi criado o formulário avançado;

**02.** Clique no botão **Novo**;

**03.** Selecione a opção **Registro de formulário**.

O formulário será aberto em um modal. Após o preenchimento confirme os dados inseridos para criar o registro de formulário.



# Acessando e editando um registro

Após adicionar registros de formulário em seu formulário avançado, é possível acessa-los ou até mesmo edita-los. Sendo os passos parecido com a criação do registro.

Para acessar o registro, siga os passos abaixo:


**01.** Navegue até a pasta na qual onde o formulário foi criado;

**02.** Acesse o formulário seguindo os passos descritos na aba **Abrir o formulário**;

**02.** Encontre o registro que deseja visualizar e clique na descrição.

O formulário será aberto em um modal em modo de visualização. Este modo serve para que você possa visualizar o seu registro antes da edição. Para editar o registro, siga os passos abaixo: 


**01.** Localize e confira os dados para confirmar o registro que deseja alterar;

**02.** Clique no botão **Editar Formulário** para habilitar o modo de edição.

**03.** Altere os dados dos campos do formulário;

**04.** Grave as alterações clicando no botão **Salvar formulário**. Ou descartar, caso queira cancelar as alterações.





# O que aconteceu com o meu formulário no modo em edição? 



*<working in progress>*

#### Como o formulário é exibido dentro do Fluig?

Caso tenha a curiosidade de inspecionar o formulário no Fluig, verá que ele é exibido dentro de um iframe. Isso garante que as funções e estilizações que do formulário não sobrescreva as do próprio fluig. E, entre outras coisas, o fluig modifica a tag *form* para impedir o envio diretamente pela tag e forçar o uso dos botões de confirmação da tela.

#### Como utilizar css no formulário

Em todos os formulário no fluig adicionamos a chamada do fluig style guide ([https://style.fluig.com/](https://style.fluig.com/)). Assim você pode, mesmo sem criar uma linha de css, deixar o seu formulário mais bonito e com a mesma cara do fluig.

<exemplo usando o style guide>

Mas se quiser, claro, você pode adicionar seus próprios css. Crie seu arquivo css e no html adicione ele da seguinte forma:

<exemplo html com o css adicionado>

Agora, lá no fluig, atualize o seu formulário clicando nos três risquinhos, editar formulário, envie o nome arquivo .html e o arquivo css conforme o print abaixo. 

<print da tela de navegação de documentos>

Pronto, seu css já foi aplicado. Crie um novo registro e acesse para verificar como ficou.

<print da criação do registro e da visualização do registro>

#### Cuidado: Versionamento de formulário

O fluig faz o versionamento do formulário, o que significa que cada mudança feita no formulário normalmente é registrada e salva como uma nova versão. No nosso exemplo, agora o seu formulário tem três versões: uma sem nenhuma estilização, outra usando o fluig style guide e a última com o seu próprio css. 

Embora o versionamento seja importante para o controle e organização das mudanças feitas, é preciso ter atenção para possíveis confusões, pois o registro de um formulário fica vinculado à versão em que foi criado. Portanto, é um registro criado na primeira versão não tenha as alterações de estilo das versões seguintes.

Esse comportamento é altamente recomendado para alterações como criação ou remoção de campos, ou mesmo para algumas alterações de script, mas no caso de pequenas mudanças visuais, você pode impedir o versionamento do formulário. Para impedir, na hora de atualizar os arquivos do documento, acesse a aba “Propriedades”, encontre a opção “Versionamento” e selecione a opção “Manter versão”.

<print da tela>

Agora os registros de formulários que foram criados na versão atual e os próximos registros de formulários, todos estarão com o mesmo estilo. Já as versões anteriores, hoje não é possível modificar pela plataforma.

<print do registro criado na v3 e do registro criado na v1>
