# Update via API - Fluig, apagando childrens formulario

> **Fonte:** [https://fluiggers.com.br/t/update-via-api-fluig-apagando-childrens-formulario/2377](https://fluiggers.com.br/t/update-via-api-fluig-apagando-childrens-formulario/2377)
> **Categoria:** API`s Fluig
> **Tags:** `form`, `fluigapi`
> **Criado em:** 27/11/2023, 17:34
> **Visualizações:** 1055 | **Likes:** 13 | **Respostas:** 11

---

## Pergunta original

**victor ferreira** (@nikof) — 27/11/2023, 17:34

Senhores, boa tarde.

Desenvolvi um serviço que utiliza da nova API do Fluig, para atualizar alguns campos do formulario, após sua finalização dentro do Fluig.

Até ai tudo certo, o serviço está funcionando normalmente, porém ao fazer a requisição de update, não importa para qual campo do formulario, o Fluig simplesmente está apagando todas as childrens salvas no meu formulario, segue exemplo:

Primeira requisição GET, antes de realizar o PUT, a API ainda me retorna as childrens salvas no formulario.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/6/6254705a8b383de04383ad309b086f26a97b2db9_2_690x284.png)

Realizei um PUT no mesmo documento para alterar um campo de teste:
![image](https://fluiggers.com.br/uploads/default/original/2X/6/68580399a875f7c3a99a52db03f2fb9c0a660f0a.png)

Porém agora ao fazer outra requisição GET no mesmo documento, o sistema já apagou todas as childrens salvas no formulario.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/5/5031f2213069585aa06ac5f415901c5486671ddb_2_690x120.png)

*Também apaga os registros dentro do fluig, como se não tivessem nem sido inseridos.*

Já realizei o teste utilizando o serviço em NodeJS que desenvolvi, e também diretamente via API da Totvs, em ambos os casos aconteceu o mesmo problema.

Inclusive os exemplos mostrados, foram feitos utilizando diretamente a API da Totvs.

Alguém já viu algo parecido ?

Obrigado !

---

## Resposta #1

**victor ferreira** (@nikof) — 06/12/2023, 09:35

Bom dia Senhores,

Ainda estou com esse problema.

Atualizando o topico na tentativa de obter alguma ajuda.

---

## Resposta #2

**Everton Alves** (@everton) — 06/12/2023, 15:47

Olá!

Tente fazer um GET antes, pegar as informações, altera-las e fazer um PUT com os dados alterados. Acredito que o Fluig entenda que os dados não informados foram excluídos, por isso ele está apagando.

---

## Resposta #3

**victor ferreira** (@nikof) — 08/12/2023, 18:25

Opa Everton,

Fiz conforme você disse, mas continuo com o mesmo problema, após o PUT ele apaga todas as childrens, mesmo eu passando o array populado com as childrens na requisição.

Obrigado mesmo assim pela dica !

Se caso tiver outra ideia, estamos ai…

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 09/12/2023, 11:43

Ao menos no SOAP existem operações que se não informar todos os campos o Fluig considera nulo e apaga o que já existia. Mas também existem operações que se não mandar o campo o Fluig ignora e só altera o que foi informado. É um comportamento estranho. Mas com Pai x Filho acho que faz isso porque a “deleção” de uma linha é não informar essa linha.

Bom, não basta informar os campos da linha colocando o `nomecampo___indice`. Precisa indicar de qual tabela Pai x Filho e índice é o campo.

Exemplo que tenho no SOAP (operação updateCardData do ECMCardService):

```xml
<cardData>
    <item>
        <field>tableid___1</field>
        <value>tableRaes</value>
    </item>
    <item>
        <field>raeDataRegistro___1</field>
        <value>10/05/2023</value>
    </item>
    <item>
        <field>raeAutorRegistro___1</field>
        <value>Bruno</value>
    </item>
    <item>
        <field>raeRegistro___1</field>
        <value>Texto do registro.</value>
    </item>
</cardData>
```

Precisa indicar no campo `tableid___indice` o nome da tabela pai x filho. Assim o Fluig sabe que vai existir aquele índice.

Acredito que no REST deve seguir uma lógica parecida.

---

## Resposta #5

**victor ferreira** (@nikof) — 11/12/2023, 09:23

Bom dia Bruno, obrigado pela resposta.

No REST funciona um pouco diferente, o endpoint que captura / atualiza os dados do formulario, não me retorna nenhuma children no array de childrens (mesmo que o formulario possua registros pai x filho).

![image](https://fluiggers.com.br/uploads/default/optimized/2X/5/572cd3d21be559309261dc625d6126192465b52a_2_608x500.png)

já testei popular diretamente esse array antes do update, mas não adianta, pois a API possui os endpoints exclusivos para capturar / inserir childrens.

O que eu teria que fazer então é toda vez q eu fosse alterar um simples campo do formulario, capturar todas as childrens antes, via endpoint exclusivo e inserir elas novamente via outro endpoint exclusivo.

Porém ai vem outro problema, o endpoint para inserir childrens não aceita um array de objetos, apenas um DTO por vez, o que me levaria a ter que fazer 50 requisições caso o formulario tivesse 50 childrens, o que fica completamente inviavel.

O que é bem triste é um endpoint que seria somente para fazer o update de um campo informado no body, apagar campos que nem foram mencionados na requisição, lamentavel essa API da TOTVS…

Mas enfim, vou verificar alguma outra forma ou abortar essa ideia.

Agradeço pela ajuda senhores !

---

## Resposta #6 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 11/12/2023, 12:58 | ❤️ 1

É bem absurdo, mas consegui usar esse endpoint sem apagar as children.

Fiz uma chamada GET ao endpoint `/ecm-forms/api/v2/cardindex/{documentId}/cards/{cardId}/childrens`

Aí peguei os valores retornados e coloquei junto no body do PUT ao `/ecm-forms/api/v2/cardindex/{documentId}/cards/{cardId}`

O mais incrível é que o GET em `/ecm-forms/api/v2/cardindex/{documentId}/cards/{cardId}` ou o retorno do PUT em `/ecm-forms/api/v2/cardindex/{documentId}/cards/{cardId}` não retorna absolutamente nada no campo `children`.

A única coisa “boa” desse endpoint é que não precisa preencher todos os campos do formulário. Ele só vai alterar o que indicar no body da requisição. Mas incrivelmente apaga todos os filhos que não forem informados.

---

## Resposta #7

**Bruno Gasparetto** (@Bruno_Gasparetto) — 11/12/2023, 13:09

Sinceramente acho que vale a pena abrir um ticket na TOTVS reclamando disso e pedindo uma correção. Realmente não faz sentido ter uma URL para editar os campos de um formulário e isso influenciar nas children.

E vale a pena outro ticket pedindo pra que o serviço de adicionar children permita enviar vários de uma vez.

---

## Resposta #8

**victor ferreira** (@nikof) — 11/12/2023, 14:45 | ❤️ 2

Opa Bruno, fiz igual você e também deu certo, ele mantem as childrens se passar elas no body do PUT.

Porém vou deixar como uma solução paliativa e vou entrar em contato com a TOTVS para solicitar a correção do problema e ajuste no insert de childrens.

Agradeço muito sua ajuda, valeu !

---

## Resposta #9

**Bruno Gasparetto** (@Bruno_Gasparetto) — 11/12/2023, 15:08 | ❤️ 1

Se abrir o ticket e precisar de votos pra totvs entender a necessidade posta aqui pra gente votar a favor

---

## Resposta #10

**Wasley Santos** (@Wasley_Santos) — 15/12/2023, 02:01 | ❤️ 2

Na época que reclamei a explicação da TOTVS foi que quando se atualiza se modifica a versão do formulário e com isso a referencia da tabela pai x filho muda (observe que o retorno da versão vai aumentando), pois para localiza-la precisa-se da versao (lembra da consulta no dataset para localizar pai x filho), por isso para edita via rest se faz necessário enviar novamente a pai x filho por completo para criar na nova versão.

Se for para fazer incrimento na pai x filho pode se usar o metodo POST ele não apaga e não precisa informar o campo no formato \_\_\_. Ele sempre vai adicionar desde que seja item a item no json, caso contrario, precisa ter o \_\_\_x.
Caso deseje mesmo editar o pai x filho pode ser usado também o SOAP updateCard pois ele faz update e incrimento, o unico problema que precisa recuperar o \_\_ da tabela pai x filho para saber a sequencia. Se o campo \_\_\_ ja existir ele atualiza,se não existir ele cria

---

## Resposta #11

**victor ferreira** (@nikof) — 28/12/2023, 10:56 | ❤️ 5

Bom dia Senhores,

Realizei a abertura do ticket para melhoria na API, se puderem nos ajudar deixando um voto, agradeço !

Segue link: [https://centraldeatendimento.totvs.com/hc/pt-br/community/posts/20167619628055-TOTVS-Fluig-TOTVS-Fluig-No-Code-Forms-Melhoria-API-Fluig-Rota-PATCH-para-update-de-formulário](https://centraldeatendimento.totvs.com/hc/pt-br/community/posts/20167619628055-TOTVS-Fluig-TOTVS-Fluig-No-Code-Forms-Melhoria-API-Fluig-Rota-PATCH-para-update-de-formul%C3%A1rio)

Obrigado !

---

## Resposta #12

**Luis Vieira** (@LHBVieira) — 04/04/2024, 11:07 | ❤️ 1

Obrigado,

Deixei um comentário de apoio lá!

---

## Resposta #13

**Daniel Cabral Santos** (@daniel.cabral) — 12/09/2024, 11:34

[@Bruno\_Gasparetto](/u/bruno_gasparetto) , como você resgata o documentId e o cardId no seu código? Estou construindo algo modular aqui e to tentando resgatar de forma dinâmica em qualquer cenário.

---

## Resposta #14

**Bruno Gasparetto** (@Bruno_Gasparetto) — 12/09/2024, 14:55 | ❤️ 1

[@daniel.cabral](/u/daniel.cabral) , depende bastante. Das vezes que precisei atualizar os formulários em geral é por estar utilizando eles em widgets. Aí na hora de consultar o dataset do formulário já pego o documentId (já que praticamente sempre utilizo a opção de formulário em uma tabela separada, senão ficaria no metadata#id).

E nos formulários utilizados em processos sempre crio um campo pra salvar o ID da solicitação, e assim facilitar a vida na hora de procurar o processo.

Não cheguei a fazer nada super dinâmico. Sempre foram situações específicas.

---

## Resposta #15

**Daniel Cabral Santos** (@daniel.cabral) — 12/09/2024, 15:32

Valeu cara! No final usamos campos ocultos no form, fornecidos pelo displayFields.

---
