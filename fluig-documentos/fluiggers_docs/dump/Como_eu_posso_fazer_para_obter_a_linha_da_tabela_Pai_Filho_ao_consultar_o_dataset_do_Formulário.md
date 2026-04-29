# Como eu posso fazer para obter a linha da tabela Pai Filho ao consultar o dataset do Formulário?

> **Fonte:** [https://fluiggers.com.br/t/como-eu-posso-fazer-para-obter-a-linha-da-tabela-pai-filho-ao-consultar-o-dataset-do-formulario/2583](https://fluiggers.com.br/t/como-eu-posso-fazer-para-obter-a-linha-da-tabela-pai-filho-ao-consultar-o-dataset-do-formulario/2583)
> **Categoria:** Formulários
> **Tags:** `dataset`
> **Criado em:** 19/02/2024, 17:19
> **Visualizações:** 515 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Maicon Soares** (@ohhMaicao) — 19/02/2024, 17:19

Boa tarde. Estou construindo um dataset que irá consultar as linhas “Pai Filho” dos registros de um formulário. Nesta consulta eu preciso que retorne também o número da linha deste filho no registro, exemplo, se o CAMPO\_\_\_3 possui o valor “Mariazinha”, eu preciso que retorne que a “Mariazinha” está na linha 3.

Como eu posso fazer para obter a linha da tabela Pai Filho ao consultar o dataset do Formulário?

---

## Resposta #1

**Joao Marcos Magnez Coelho** (@joaomarcos) — 01/03/2024, 18:22

Olá [@ohhMaicao](/u/ohhmaicao)

Você precisa do numero da linha para popular ou validar algo no campo?

se for, voce pode no seu js declarar a variavel:

var id = selectedItem.inputId.split(‘\_\_\_’)\[1\];

E depois obter o valor daquele campo ou prenche-lo exemplo:

$(‘#CAMPO\_\_\_’+id)

---

## Resposta #2

**Isaac Figueiredo** (@kngrev) — 29/04/2024, 08:30

Olá [@ohhMaicao](/u/ohhmaicao)

Dentro de um dataset você pode utilizar essa função para retornar os itens de um Pai Filho, os o retorno da função volta os itens ordenados pelo index. Então se você usar um loop vai conseguir ter os indexes de cada campo.

function getItensPaiFilho(nomeDataset, documentId, nomePaiFilho) {

const c1 = DatasetFactory.createConstraint(“documentid”, documentId, documentId, ConstraintType.MUST);

const c2 = DatasetFactory.createConstraint(“tablename”, nomePaiFilho, nomePaiFilho, ConstraintType.MUST);

const c3 = DatasetFactory.createConstraint(“metadata#active”, “true”, “true”, ConstraintType.MUST);

const result = DatasetFactory.getDataset(nomeDataset, null, \[c1, c2, c3\], null);

return result;

}

---

## Resposta #3

**Isaac Figueiredo** (@kngrev) — 04/06/2024, 16:58 | ❤️ 1

Consegui uma solução

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/n/ce73a5/48.png) [Update via API - Fluig, apagando childrens formulario](https://fluiggers.com.br/t/update-via-api-fluig-apagando-childrens-formulario/2377) [API\`s Fluig](https://fluiggers.com.br/c/api-s-fluig/9)
>
> > Senhores, boa tarde. Desenvolvi um serviço que utiliza da nova API do Fluig, para atualizar alguns campos do formulario, após sua finalização dentro do Fluig. Até ai tudo certo, o serviço está funcionando normalmente, porém ao fazer a requisição de update, não importa para qual campo do formulario, o Fluig simplesmente está apagando todas as childrens salvas no meu formulario, segue exemplo: Primeira requisição GET, antes de realizar o PUT, a API ainda me retorna as childrens salvas no formul…

[https://api.fluig.com/latest/ecm-forms/swagger-ui/#/Form\_records](https://api.fluig.com/latest/ecm-forms/swagger-ui/#/Form_records)

---
