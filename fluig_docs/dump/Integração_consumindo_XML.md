# Integração consumindo XML

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=152798259](https://tdn.totvs.com/pages/viewpage.action?pageId=152798259)

---

# Índice



# Objetivo

* * *

O objetivo deste guia é demonstrar a técnica padrão para manipulação de arquivos XML dentro dos *scripts* personalizados do TOTVS Fluig Plataforma. 



# Pré-requisitos

* * *

Conhecimento prévio em determinados pontos, sendo estes:

-   Visão geral sobre a plataforma fluig
-   Visão geral sobre integração de sistemas
-   JavaScript



# Manipulação de arquivos XML

* * *

Neste exemplo carregaremos um XML externo ao fluig via java e faremos a leitura e manipulação do mesmo via JavaScript.

Desta maneira fica mais fácil tratar o XML e realizar integrações.



# O XML que será importado

* * *

O XML que estaremos carregando é uma representação de catálogo de CDs.

```
<CATALOG>
 <CD>
  <TITLE>Empire Burlesque</TITLE>
  <ARTIST>Bob Dylan</ARTIST>
  <COUNTRY>USA</COUNTRY>
  <COMPANY>Columbia</COMPANY>
  <PRICE>10.90</PRICE>
  <YEAR>1985</YEAR>
 </CD>
 <CD>
  <TITLE>Hide your heart</TITLE>
  <ARTIST>Bonnie Tyler</ARTIST>
  <COUNTRY>UK</COUNTRY>
  <COMPANY>CBS Records</COMPANY>
  <PRICE>9.90</PRICE>
  <YEAR>1988</YEAR>
 </CD>
</CATALOG>
```

Esta é apenas parte do conteúdo do arquivo XML que será consumido neste exemplo. Note que ele possui três camadas:

1.  A primeira é representada pela *tag <catalog>* e representa a coleção inteira de CDs. 
2.  No segundo nível temos a *tag <CD>* que representa um CD de todo o catálogo. 
3.  As outras *tags* internas à *tag <CD>* representam os dados do CD e formam a terceira camada deste exemplo. 

A compreensão dessa estruturação se faz necessária para entender o exemplo como um todo.

Para verificar o conteúdo completo do XML, clique neste [link](http://www.w3schools.com/xml/cd_catalog.xml).



# Carregando o conteúdo do XML para uma variável JavaScript

* * *

O próximo passo é carregar o conteúdo desse XML para uma variável JavaScript. Faremos a carga de alguns objetos java para conseguirmos carregar o XML (funções do pacote [java.net](http://java.net).URL).

```
var url = new java.net.URL("http://www.w3schools.com/xml/cd_catalog.xml");
var connection = url.openConnection();
connection.setRequestMethod("GET");
connection.setRequestProperty("Accept", "text/plain");
if (connection.getResponseCode() != 200) {
	throw "Failed : HTTP error code : " + connection.getResponseCode();
}
var br = new java.io.BufferedReader(new java.io.InputStreamReader(connection.getInputStream()));
```

O código acima ir carregar para variável *br* o conteúdo do XML provindo do endereço [www.w3schools.com/xml/cd\_catalog.xml](http://www.w3schools.com/xml/cd_catalog.xml) . Note que existem tratamentos para situações onde não foi possível carregar o documento (getResponseCode() != 200) . Atente-se a esses tratamentos para retornar uma mensagem de erro amigável para o usuário, dependendo do momento e local onde esta técnica é utilizada. Antes de mandarmos para o *parser* JavaScript teremos que fazer alguns tratamentos e este será o nosso próximo passo.



# Removendo informações desnecessárias para o *parser* XML JavaScript

* * *

Antes de enviarmos para o *parser,* será necessário remover algumas *tags* ou informações que não são aceitas pelo parser XML do JavaScript. Abaixo temos uma demonstração do bloco que remove esses itens em nosso XML de exemplo.

```
var result = "";
while ((output = br.readLine()) != null) {
	// Removendo cabeçalhos e comentários iniciais do xml exemplo
	if (output.indexOf("<?") > -1 || output.indexOf("<!") > -1) {
		continue;
	}
	result += output;
}
```

Com o código acima acabamos de remover linhas que começam com "<?" e *"<!"* que não são aceitas pelo parser XML e que não fazem parte da estrutura relevante de dados do XML.

Neste caso, por coincidência, estaremos removendo as duas primeira linhas do arquivo XML:

```
<?xml version="1.0" encoding="UTF-8"?>
<!-- Edited by XMLSpy -->
```



Neste exemplo tivemos esses dois elementos que foram removidos para que o XML fosse aceito pelo *parser* XML. Mas em alguns XML os elementos deverão ser tratados antes de serem submetidos ao *parser*.



**Atenção** especial a documentos XML que contenham a *tag <class>.*

Em casos como este deverá ser feito um tratamento removendo essas propriedades para que seja possível converter o XML da resposta da URL em um documento XML JavaScript válido.

Observação

Tags com nome "class" não poderão ter propriedades internas definidas na própria *tag* de abertura .

Ex: *<class size="10">*.

# Realizando a conversão de String para documento XML JavaScript

* * *

Após a remoção e tratamento de "impurezas" da *string* XML, chegamos ao ponto mais crítico: a transformação ou *parsing* da *string* XML para um documento JavaScript XML.

O código para essa transformação é bem simples e poderá ser visto no bloco abaixo

```
var doc = new XML(result);
```



Nesta parte iremos descobrir se o XML passado para o JavaScript é válido como documento XML e se o mesmo está apto para consulta e manipulação. Em caso negativo será gerada uma mensagem de erro no log do WildFly da plataforma Fluig e a execução do evento em questão será anulada.

Observação

Caso a execução do evento Fluig tenha sido anulada antes de gerar os resultados esperados, verifique o log do WildFly Fluig para possíveis erros de *parser* do XML enviado.

# Manipulando o documento XML

* * *

Agora temos a variável *doc* carregada com o XML a partir do primeiro nível, ou seja, a variável *doc* representa a *tag <catalog>* da string XML do documento que foi enviado. Para vermos a quantidade de CDs que temos no catálogo basta usarmos o seguinte comando : *doc.CD.length()* .

Lembrado que o caso das letras deverá seguir o mesmo existente dentro do XML. Neste exemplo nós pegamos a quantidade de ocorrências existente dentro da coleção CD existente dentro do *doc*  (que representa *<catalog>*. No bloco abaixo temos exemplos de consulta, criação e eliminação de campos dentro de todos os registros de CD existentes no documento XML.

```
log.info("Foram encontrados " + doc.CD.length() + " discos no XML");
 // Fazendo a leitura de todos os CDs que vieram no xml
 for (y in doc.CD) {
	// Exibindo uma propriedade de um dos itens do xml
	log.info("Nome do disco: " + doc.CD[y].TITLE);
	// inserindo novo campo que conterá o valor do campo price convertido para o preco em real
	doc.CD[y].VALORBRL = "R$ " + (doc.CD[y].PRICE * 2);

	// Removendo campo Year do xml
	delete doc.CD[y].YEAR;
}
```



Após a execução desta lógica *for* a variável *doc* já conterá o XML alterado e poderá ser utilizada para quaisquer fins necessários, entre eles o reenvio para uma aplicação externa à plataforma Fluig.

Observação

Lembre-se que manipulação de XML é *case-sensitive* com a denominação original do documento XML.

Informações

Em anexo a este artigo temos esta mesma lógica descrita neste arquivo implementada como evento de formulário . Lembrando que esta mesma lógica também poderá ser implementada como evento de processo ou um dataset.

Download: [displayFields.js](https://tdn.totvs.com/download/attachments/152798259/displayFields.js?version=1&modificationDate=1408479720000&api=v2)

Observação

Esta técnica não pode ser utilizada para desenvolvimento de Datasets (Método *createDataset*), pois a classe XMLList não implementa a interface *serializable,* causando erro na execução deste método. O XML será lido e interpretado, porém não será produzido nenhum resultado.
