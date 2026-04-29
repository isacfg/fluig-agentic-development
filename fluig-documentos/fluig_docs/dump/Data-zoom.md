# Data-zoom

> **Fonte:** [https://tdn.totvs.com/display/fluig/Data-zoom](https://tdn.totvs.com/display/fluig/Data-zoom)

---

# Índice



O data-zoom é um atributo do campo pesquisa do formulário, ou seja, o campo tipo "zoom". Este atributo recebe um objeto com vários parâmetros e configurações da consulta e esse objeto, apesar de não ter um nome oficial, vamos chamar de data-zoom.



# Descrição

* * *

O atributo data-zoom é onde a maior parte das configurações possíveis para o campo pesquisa são feitas. Ele é um objeto complexo onde é definido qual o dataset, qual campo deste dataset será usado para preencher o campo, se permite mais de uma item selecionado e quais os campos podem ser usados de filtro.



# Sintaxe

* * *

```
{
 	'datasetId':'colleague',
    'displayKey':'colleagueName',
    'placeholder': 'Selecione o usuário do Fluig',
    'filterValues': 'campo1,valorDoCampo1,campo2,valorDoCampo2',
    'resultLimit': 30,
		'field': 'colleagueName',
		'label': 'colleagueName',
		'standard': 'true'
	},{
		'field': 'colleagueId',
		'label': 'colleagueId',
		'visible': 'false'
	}]
}
```



# Atributos

* * *

## **datasetId**

Uma string que define id do dataset que o campo pesquisa vai consultar

## **displayKey**

Uma string que define qual o campo do dataset que será usado como exibição no campo pesquisa após a seleção

maximumSelectionLength

(opcional)

Um número inteiro que indica um limite de itens do dataset que podem ser selecionados (múltipla escolha)

Caso não seja informado, será utilizado o valor padrão que é 1, ou seja, permite que apenas um registro selecionado.

## **resultLimit**

(opcional)

Um número inteiro que indica um limite de itens retornado por consulta no campo pesquisa

Caso não seja informado, será utilizado o valor padrão que é 300. Não é recomendável usar um número grande por questões de performance e processamento de dados.

## **placeholder**

(opcional)

Um texto para user usado como place holder, ou seja, uma instrução quando não tiver nenhum item selecionado

Caso não seja informado, o campo não exibirá nenhum texto quando não tiver nenhum item selecionado

## **filterValues**

(opcional)

Uma string complexa composta por um ou mais campos que serão usados como filtro prévio do campo de pesquisa e valores esperados. Este campo é válido de forma automática para os datasets internos do Fluig. Em datasets personalizados, vale lembrar que é necessário implementar os filtros a partir das *constraints* recebidas.

Caso não seja informado, nenhum filtro prévio será utilizado.

## **fields**

Uma lista de objetos que representam a coluna e os dados que serão retornados ao ser selecionado um item na pesquisa. configuram quais são os campos ('*field'*) do dataset que serão exibidos, qual o label ('*label'*) que será utilizado, qual será usado para ordenação ('*standard': 'true'*) e se será visível ou não (*'visible': 'false'*) para o usuário final.



# Atributos do objeto field

* * *

## **field**

Uma string com o nome do campo no dataset que será exibido na coluna e/ou retornado a selecionar um item

## **label**

Uma string com o título da coluna que será exibido na listagem do campo pesquisa

## **standard**
(opcional)

Uma string com o valor 'true' quando esta coluna será a coluna de ordenação padrão do campo de pesquisa. 

Quando não informado, assume o valor 'false' e não usa essa coluna como ordenação

## **visible**

**(opcional)**

Uma string com o valor 'false' quando este campo não será visível ao buscar no campo de pesquisa. Ele serve para ocultar algumas informações do dataset mas trazer esses dados ao selecionar um item.

Quando não informado, assume o valor 'true' e o campo é exibido como uma coluna no campo de pesquisa

## **field**

Uma string com o nome do campo no dataset que será exibido na coluna e/ou retornado a selecionar um item

## Exemplo de uso

* * *

Os exemplos de uso estão centralizados na documentação do campo pesquisa.
