# Dúvida integração RM

> **Fonte:** [https://fluiggers.com.br/t/duvida-integracao-rm/3332](https://fluiggers.com.br/t/duvida-integracao-rm/3332)
> **Categoria:** Formulários
> **Criado em:** 30/06/2025, 08:01
> **Visualizações:** 56 | **Likes:** 1 | **Respostas:** 3

---

## Pergunta original

**Raphael** (@raphaelgomes) — 30/06/2025, 08:01

Estou estudando a parte de integração entre o Fluig e Rm e me surgiu uma duvida. Na hora da integração, exemplo, de uma entidade, necessita passar como parâmetros a coligada e codentidade, se no caso, existir, esses parâmetros na base, a integração atualiza os dados, se não, inclui o novo cadastro. Minha duvida é: Quero incluir um novo cadastro, existe uma forma de passar no XML o codentidade correspondente na tabela GAUTOINC +1 no caso para novos cadastros?

---

## Resposta #1

**Matheus Mósso** (@msmosso) — 30/06/2025, 09:25 | ❤️ 1

Bom dia Rafael,

No XML você envia o código -1, para que seja autoincrementado.

Exemplo:

\-1

---

## Resposta #2

**Raphael** (@raphaelgomes) — 30/06/2025, 15:16

Preenchendo direto no XML -1 dessa forma:

```auto
"    <IDPRD>-1</IDPRD>" +
```

Aparece o seguinte erro:

Input string was not in a correct format.

Porém quando crio um campo hidden idprd passando o value -1 e no js preencho o xml, funciona. Não sei se existe alguma outra forma de preencher o xml, mas desse jeito funcionou.

---

## Resposta #3

**Matheus Mósso** (@msmosso) — 30/06/2025, 16:06

Você está criando um movimento? Caso afirmativo, o IDPRD deve ser o de um produto previamente cadastrado. Os campos que podem ser auto incrementados são IDMOV, NUMEROMOV, IDMOVRATCCU…

---

## Resposta #4

**Raphael** (@raphaelgomes) — 30/06/2025, 16:36

Estou cadastrando um novo produto

---

## Resposta #5

**Matheus Mósso** (@msmosso) — 03/07/2025, 14:21

Você está usando o dataserver EstPrdBr?

Esse é o XML que usamos aqui:

```auto
var xml = '<EstPrdBR>  '  +
	 '       <TPRODUTO>  '  +
	 '           <CODCOLPRD>'+CODCOLIGADA+'</CODCOLPRD>  '  +
	 '           <CODCOLIGADA>'+CODCOLIGADA+'</CODCOLIGADA>  '  +
	 '           <IDPRD>-1</IDPRD>  '  +
	 '           <CODIGOPRD>'+CODPRD+'</CODIGOPRD>  '  +
	 '           <NOMEFANTASIA>'+NOMEFANTASIA.trim()+'</NOMEFANTASIA>  '  +
	 '           <CODIGOREDUZIDO></CODIGOREDUZIDO>  '  +
	 '           <CODFAB>01</CODFAB>  '  +
	 '     		 <CODTB1FAT>0001</CODTB1FAT> '  +
	 '           <NUMNOFABRIC></NUMNOFABRIC>  '  +
	 '           <ULTIMONIVEL></ULTIMONIVEL>  '  +
	 '           <TIPO>P</TIPO>  '  +
	 '           <DESCRICAO>'+DESCRICAO.trim()+'</DESCRICAO>  '  +
	 '           <PRECO1>0</PRECO1>  '  +
	 '           <PRECO2>0</PRECO2>  '  +
	 '           <PRECO3>0</PRECO3>  '  +
	 '           <PRECO4>0</PRECO4>  '  +
	 '           <PRECO5>0</PRECO5>  '  +
	 '           <DATABASEPRECO1>2018-09-10</DATABASEPRECO1>  '  +
	 '           <DATABASEPRECO2>2018-09-10</DATABASEPRECO2>  '  +
	 '           <DATABASEPRECO3>2018-09-10</DATABASEPRECO3>  '  +
	 '           <DATABASEPRECO4>2018-09-10</DATABASEPRECO4>  '  +
	 '           <DATABASEPRECO5>2018-09-10</DATABASEPRECO5>  '  +
	 '           <REFERENCIACP>0</REFERENCIACP>  '  +
	 '           <CODUNDCONTROLE>'+UM+'</CODUNDCONTROLE>  '  +
	 '           <DTCADASTRAMENTO>2018-09-10</DTCADASTRAMENTO>  '  +
	 '           <CUSTOUNITARIO></CUSTOUNITARIO>  '  +
	 '           <QTDEVOLUME></QTDEVOLUME>  '  +
	 '           <CODUNDCOMPRA>UN</CODUNDCOMPRA>  '  +
	 '           <CODUNDVENDA>UN</CODUNDVENDA>  '  +
	 '           <CAMPOLIVRE2></CAMPOLIVRE2>  '  +
	 '           <CAMPOLIVRE3></CAMPOLIVRE3>  '  +
	 '           <CUSTOMEDIO></CUSTOMEDIO>  '  +
	 '           <CUSTOREPOSICAO></CUSTOREPOSICAO>  '  +
	 '           <CUSTOREPOSICAOB></CUSTOREPOSICAOB>  '  +
	 '           <USANUMDECPRECO></USANUMDECPRECO>  '  +
	 '           <INATIVO></INATIVO>  '  +
	 '           <PESAVEL></PESAVEL>  '  +
	 '           <DATAULTALTERACAO></DATAULTALTERACAO>  '  +
	 '           <CONTROLADOPORLOTE></CONTROLADOPORLOTE>  '  +
	 '           <TIPOCALCULOCUSTO></TIPOCALCULOCUSTO>  '  +
	 '           <USANUMSERIE></USANUMSERIE>  '  +
	 '           <CODUSUARIO></CODUSUARIO>  '  +
	 '           <PRODUTOBASE></PRODUTOBASE>  '  +
	 '           <SERVICOPRODUTORMOFFICINA></SERVICOPRODUTORMOFFICINA>  '  +
	 '           <PRODUTOEPI></PRODUTOEPI>  '  +
	 '           <PRODVISIVELCLICBUSINESS></PRODVISIVELCLICBUSINESS>  '  +
	 '           <NUMEROCCF>0</NUMEROCCF>  '  +
	 '           <DESCRICAOAUX>'+DESCRICAOAUX+'</DESCRICAOAUX>  '  +
	 '           <DTCUSTOUNITARIO>2018-09-10</DTCUSTOUNITARIO>  '  +
	 '           <DATACUSTOMEDIO>2018-09-10</DATACUSTOMEDIO>  '  +
	 '           <USUARIOCRIACAO>integracao</USUARIOCRIACAO>  '  +
	 '       </TPRODUTO>  '  +
	 '       <TPRDCOMPL>  '  +
	 '           <CODCOLIGADA>1</CODCOLIGADA>  '  +
	 '           <IDPRD>-1</IDPRD>  '  +
	 '       </TPRDCOMPL>  '  +
	 '       <TPRODUTODEF>  '  +
	 '           <CODCOLIGADA>1</CODCOLIGADA>  '  +
	 '           <IDPRD>-1</IDPRD>  '  +
	 '           <CODFAB>01</CODFAB>  '  +
	 '           <CODTB1FAT>0001</CODTB1FAT>  '  +
	 '           <TOLERANCIAINF>100</TOLERANCIAINF>  '  +
	 '           <TOLINFPRECO>0</TOLINFPRECO>  '  +
	 '           <TOLERANCIASUP>0</TOLERANCIASUP>  '  +
	 '       </TPRODUTODEF>  '  +
	 '       <TPRDFISCAL>  '  +
	 '           <CODCOLIGADA>1</CODCOLIGADA>  '  +
	 '           <IDPRD>-1</IDPRD>  '  +
	 '           <SITUACAOMERCADORIA>02</SITUACAOMERCADORIA>  '  +
	 '           <INVENTARIOFISCAL>1</INVENTARIOFISCAL>  '  +
	 '           <TIPOTRIBUTACAO>0</TIPOTRIBUTACAO>  '  +
	 '       </TPRDFISCAL>  '  +
	 '       <TTRBPRD>  '  +
	 '           <CODCOLIGADA>1</CODCOLIGADA>  '  +
	 '           <IDPRD>-1</IDPRD>  '  +
	 '           <CODTRB>IPI</CODTRB>  '  +
	 '           <ALIQUOTA>15</ALIQUOTA>  '  +
	 '       </TTRBPRD>  '  +
	 '       <TPRDFIL>  '  +
	 '           <CODCOLIGADA>1</CODCOLIGADA>  '  +
	 '           <IDPRD>-1</IDPRD>  '  +
	 '           <CODFILIAL>1</CODFILIAL>  '  +
	 '           <ESTOCAVEL></ESTOCAVEL>  '  +
	 '           <CONSIGNADO>0</CONSIGNADO>  '  +
	 '       </TPRDFIL>  '  +
	 '  </EstPrdBR>  ' ;
```

---
