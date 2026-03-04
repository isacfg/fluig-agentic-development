# Como listar os usuários de um Grupo dentro de outro Grupo?

> **Fonte:** [https://fluiggers.com.br/t/como-listar-os-usuarios-de-um-grupo-dentro-de-outro-grupo/1917](https://fluiggers.com.br/t/como-listar-os-usuarios-de-um-grupo-dentro-de-outro-grupo/1917)
> **Categoria:** Formulários
> **Tags:** `dataset`
> **Criado em:** 15/05/2023, 09:30
> **Visualizações:** 842 | **Likes:** 5 | **Respostas:** 3

---

## Pergunta original

**Bruno Gasparetto** (@Bruno_Gasparetto) — 15/05/2023, 09:30

Quando queremos listar os usuários de um grupo basta simplesmente utilizar o dataset `colleagueGroup`. Ele nos retorna todos os usuários vinculados a grupos.

Mas como listar os usuários quando colocamos um grupo dentro de outro grupo?

Aqui temos a seguinte situação:

Os usuários do Grupo Analista podem iniciar um processo (A Solicitação de Pauta). Porém querem aceitar exceções, pessoas que não são Analista e mesmo assim podem iniciar a solicitação.

Encontramos essa solução do Fluig. Criamos um Grupo específico que indica quem pode iniciar a Solicitação, nele colocamos o grupo Analistas e também colocamos individualmente os usuários exceções.

![image](https://fluiggers.com.br/uploads/default/original/1X/2f5401a959f4a6af3c3547e65f85d157ee01fb19.png)

Mas quando usamos o dataset `colleagueGroup` só é retornado o usuário testedepaginapublica, ignorando todos os usuários do grupo Analistas.

Tem algum jeito de conseguir pegar os usuários do “subgrupo”?

---

## Resposta #1

**Allan Reichert** (@allan.reichert) — 15/05/2023, 15:48

olá!

Não sei se entendi, seria para listar em uma consulta tipo a “Zoom”?

Se for isso poderia criar um dataset avançado com um select nas tabelas, unindo a tabela de usuários e usuários de grupos.

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 15/05/2023, 15:52

[@allan.reichert](/u/allan.reichert) , a ideia é criar um Dataset mesmo. Mas não encontrei referência de onde o Fluig faz essa ligação que há um grupo dentro de outro grupo.

Os únicos datasets com group no nome são o `group` e o `colleagueGroup`, mas eles não indicam que há um grupo dentro de outro.

Eu evito ao máximo ficar fazendo consultas SQL no Fluig, tentando utilizar os datasets. Mas acho que pra algumas coisas do próprio Fluig (que não seja tabela de formulário ou coisas do tipo) tem que apelar pra isso né

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 15/05/2023, 16:13

Só pra ficar documentado:

A tabela `FDN_GROUPUSERROLE` lista os relacionamentos de grupos com usuários, grupos e papeis.

A tabela `FDN_USERROLE` faz o relacionamento de usuário com papeis.

![image](https://fluiggers.com.br/uploads/default/original/1X/ae578cdffddf9e1d27d7fc219d8ec0649f483647.png)

Aí é só tratar pra retornar os casos de ter vários grupos aninhados e também caso tenha ligação com papel.

---

## Resposta #4 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 16/05/2023, 15:55 | ❤️ 4

Outra opção, utilizando as ferramentas do Fluig ao invés de fazer a consulta direta na base, é utilizar o serviço GroupService.

```javascript
/**
 * Teste de pegar usuários de um grupo
 *
 * @param {string[]} fields Campos Solicitados
 * @param {Constraint[]} constraints Filtros
 * @param {string[]} sorts Campos da Ordenação
 * @returns {Dataset}
 */
function createDataset(fields, constraints, sorts) {
    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("matricula");

    var groupService = fluigAPI.getGroupService();
    var usuarios = groupService.findUsersByGroup(
        "SolicitaPautaDIREX", // Código do Grupo
        null, // Pattern (não sei o que é e não testei)
        1000, // Quantos usuários retornará.
        0, // Offset
        "" // Order
    );

    for (var i = 0; i < usuarios.size(); ++i) {
        dataset.addRow([usuarios.get(i).getCode()]);
    }

    return dataset;
}
```

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 18/05/2023, 10:38

Só complementando: esse método só busca em grupos. Se colocou um Papel dentro do grupo ele não retornará os usuários daquele Papel.

Então se for utilizar grupos misturando com papeis é importante apelar pra uma consulta SQL mesmo.

---

## Resposta #6

**Kauê ** (@KaueZuliani) — 20/05/2025, 13:33 | ❤️ 1

[@Bruno\_Gasparetto](/u/bruno_gasparetto) , tu me salvou cara, to varrendo a internet faz uns 4 dias procurando essas tabelas,
Obrigado!

---
