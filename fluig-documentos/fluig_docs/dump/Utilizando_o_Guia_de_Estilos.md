# Utilizando o Guia de Estilos

> **Fonte:** [https://tdn.totvs.com/display/fluig/Utilizando+o+Guia+de+Estilos](https://tdn.totvs.com/display/fluig/Utilizando+o+Guia+de+Estilos)

---

# Sobre

* * *

Com o **fluig 1.4** lançamos o ***fluig Style Guide***, o guia de estilos que ajuda que desenvolvimentos sobre a plataforma sejam mais ágeis e que gerem um visual padrão do fluig mesmo no caso de personalizações.

Este guia é destinado a desenvolvedores que desejam construir páginas, *widgets* e formulários com as folhas de estilos (CSS) do guia de estilos do fluig.

## O Guia

* * *

Temos um guia para o acesso completo a todos os componentes do guia de estilo, antes de desenvolver observe a documentação e exemplos de uso.

Documentação Online

Acesse [style.fluig.com](https://style.fluig.com/) e confira todos os componentes disponíveis

Documentação no seu fluig

A sua instalação do fluig também possui o style Guide para consult e terá exatamente o que sua atualização permite utilizar, visto que regularmente trazemos novos componentes para o Style Guide.

Acesse **<seu endereço do fluig>/style-guide** para consultar seu Style Guide disponível.

Exemplo de URL: [https://suaempresa.fluig.com/style-guide](https://suaempresa.fluig.com/style-guide)

## Passos para Utilização

* * *

Os seguintes passos devem ser observados para a utilização do fluig Style Guide:



-   Importe os artefatos necessários no seu desenvolvimento.

```
<head>
<style>
@font-face {
  font-family: 'Fluig Icons';
  src: url('../fonts/fluigicons.eot');
  src: url('../fonts/fluigicons.eot?#iefix') format('embedded-opentype'), url('../fonts/fluigicons.woff') format('woff'), url('../fonts/fluigicons.ttf') format('truetype'), url('../fonts/fluigicons.svg#icomoon') format('svg');
}
</style>
<link rel="stylesheet" type="text/css" href="http://style.fluig.com/css/fluig-style-guide.min.css">
<script src="http://style.fluig.com/js/fluig-style-guide.min.js"></script>
</head>
```

Será necessário ter as fontes locais, pois alguns navegadores impedem carregamento de outros domínios, acrescente no seu ambiente as fontes e altere o CSS acima.

-   **[Download das Fontes](https://tdn.totvs.com/download/attachments/172295291/fluig-fonts.zip?version=1&modificationDate=1414589858000&api=v2)

    **

Atenção

Ao ser liberado o Fluig 1.4, todos os *layouts* de páginas do fluig receberão essas linhas por padrão, por isso não será necessário adicionar essas linhas manualmente.



-   Encapsule seu código sobre a classe ***fluig-style-guide***. Assim você não afeta outros desenvolvimentos que ainda não usam fluig Style Guide.

```
<div class="fluig-style-guide">

     <!-- Insira aqui seu código usando Fluig Style Guide -->

</div>
```

Lembre-se que apesar de ter importado os recursos, caso seu código HTML não esteja dentro dessa classe, o estilo não será aplicado!



-   Utilizando o guia, busque os componentes desejados e monte sua tela.



## Crie seu Design Responsivo

* * *

Uma das principais funções disponível no fluig Style Guide é a possibilidade de criar páginas responsivas, que se comportam de forma especial se estiverem em *smartphones*, *tablets* e computadores.

Criar um design responsivo fará com que sua página, *widget* e formulário adaptem sua visualização dependendo do tamanho da tela que o usuário está utilizando. No exemplo acima quando a tela é maior o usuário vê duas colunas, mas quando o dispositivo tem uma tela pequena os campos ficam um embaixo do outro.

Documentação

Acesse [style.fluig.com/css.html#grid](https://style.fluig.com/css.html#grid) e saiba mais como criar seu design responsivo



## Exemplo de Utilização

* * *



-   Abaixo temos um exemplo de uma página html com a aplicação do guia de estilos do fluig.



### Exemplo Fluig Style Guide

×Close **Fluig Style guide** Acesse [aqui](https://style.fluig.com/javascript.html#alerts).

 

 

Email

Password

 Remember me

Sign in

 



-   Você deverá declarar em seu html a carga do arquivo css e js e declarar na sua div `class``=``"fluig-style-guide".`

```
<!DOCTYPE html>
<html>
<head>
<style>
@font-face {
  font-family: 'Fluig Icons';
  src: url('../fonts/fluigicons.eot');
  src: url('../fonts/fluigicons.eot?#iefix') format('embedded-opentype'), url('../fonts/fluigicons.woff') format('woff'), url('../fonts/fluigicons.ttf') format('truetype'), url('../fonts/fluigicons.svg#icomoon') format('svg');
}
</style>
<link rel="stylesheet" type="text/css" href="http://style.fluig.com/css/fluig-style-guide.min.css">
<script src="http://style.fluig.com/js/fluig-style-guide.min.js"></script>
</head>
<body>
<div class="fluig-style-guide">
 
		<div class="page-header">    
			<h1>Exemplo<small>Fluig Style Guide</small></h1>
		</div>
		<div class="alert alert-warning fade in" role="alert">
			<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
			<strong>Fluig Style guide</strong> Acesse <a href="http://style.fluig.com/javascript.html#alerts">aqui</a>.
		</div>

<form class="form-horizontal" role="form">
    <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
        <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
        </div>
    </div>
    <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
        <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
                <label>
                <input type="checkbox"> Remember me
                </label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">Sign in</button>
        </div>
    </div>
</div>
</form>
</body>
</html>
```



**Downloads:**

[fluig-glyphs.svg](https://tdn.totvs.com/download/attachments/172295291/fluigicons.ttf?version=1&modificationDate=1414588754000&api=v2)

[fluigicons.ttf](https://tdn.totvs.com/download/attachments/172295291/fluigicons.ttf?version=1&modificationDate=1414588754000&api=v2)

[fluigicons.woff](https://tdn.totvs.com/download/attachments/172295291/fluigicons.woff?version=1&modificationDate=1414588751000&api=v2)

[fluigicons.svg](https://tdn.totvs.com/download/attachments/172295291/fluigicons.svg?version=1&modificationDate=1414588746000&api=v2)

[fluigicons.eot](https://tdn.totvs.com/download/attachments/172295291/fluigicons.eot?version=1&modificationDate=1414588741000&api=v2)





# Utilizando em Formulários no fluig 1.4

* * *

O fluig Style Guide estará disponível no Fluig 1.4. Para utilizar em formulários você deve seguir os passos abaixo.

Documentação Online

Acesse [git.fluig.com](https://git.fluig.com/projects/SAMPLES/repos/exercise-style-guide/browse) e confira projeto de exemplo com formulário e Widgets.



## Passos para Utilização

* * *

Os seguintes passos devem ser observados para a utilização do fluig Style Guide em formulários a partir da release 1.4.



-   Importe os artefatos necessários no seu formulário.

```
<head>
<link rel="stylesheet" type="text/css" href="/portal/resources/style-guide/css/fluig-style-guide.min.css">
<script src="/portal/resources/style-guide/js/fluig-style-guide.min.js"></script>
</head>
```



-   Encapsule seu código sobre a classe ***fluig-style-guide***. Assim você não afeta outros desenvolvimentos que ainda não usam fluig Style Guide.

```
<div class="fluig-style-guide">

     <!-- Insira aqui seu código usando Fluig Style Guide -->

</div>
```

Lembre-se de que, apesar de ter importado os recursos, se o seu código HTML não estiver dentro dessa classe, o estilo não será aplicado!



-   Utilizando o guia, busque os componentes desejados e monte sua tela.
