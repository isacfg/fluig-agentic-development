# Índice da tabela pai e filho na sequência

> **Fonte:** [https://fluiggers.com.br/t/indice-da-tabela-pai-e-filho-na-sequencia/1716](https://fluiggers.com.br/t/indice-da-tabela-pai-e-filho-na-sequencia/1716)
> **Categoria:** Formulários
> **Tags:** `form`, `paixfilho`
> **Criado em:** 13/03/2023, 23:56
> **Visualizações:** 1090 | **Likes:** 2 | **Respostas:** 5

---

## Pergunta original

**Wanderley Junior** (@gomeswjunior) — 13/03/2023, 23:56

Fala pessoal…
Alguém já chegou a implementar uma ordenação correta dos índices da tabela pai e filho ao adicionar e remover determinada linha ? Me surgiu essa necessidade depois de perceber que o índice da tabela não respeita a sequencia. Adiciono uma linha e ela recebe o índice 1 mas se há removo e adiciono novamente uma nova linha, ela recebe o índice 2 e assim vai. Gostaria de fazer com que sempre respeitasse a sequencia.

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 14/03/2023, 08:33

Em tempo de execução não tem como(Não que eu saiba). Mas sempre que você salvar ou avançar a solicitação esses índices são rosetados.

Usando apenas o índice, você não consegue evoluir na tarefa em que esta trabalhando é isso?

Eu mesmo nunca tive essa necessidade, e caso queira por exemplo, inserir na sua tabela um contador de linhas, poderá obter essa informação percorrendo a tabela e verificando a quantidade de linhas.

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 14/03/2023, 09:25

Quase todas as vezes que vi alguém reclamando disso era só por “estética”, não por realmente atrapalhar em algo.

Qual a motivação de reorganizar os índices?

---

## Resposta #3

**Wanderley Junior** (@gomeswjunior) — 14/03/2023, 09:27

Exatamente [@sergio.machado](/u/sergio.machado) , quando avanço ou salvo a solicitação eles são resetados… Está ai o meu problema.

---

## Resposta #4

**Wanderley Junior** (@gomeswjunior) — 14/03/2023, 09:34

[@Bruno\_Gasparetto](/u/bruno_gasparetto) o motivo é porque eu uso o índice da linha como chave em um array e a criação desse array é realizada na primeira atividade do processo. Ao movimentar os índices da tabela são resetados e meu array tem salvo nele os índices que foram inseridos. No momento de acessar o array considerando o índice que foi inserido, tenho a divergência .

---

## Resposta #5 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 14/03/2023, 09:49 | ❤️ 1

Entendi.

Você pode, sempre na ação de adicionar/remover uma linha na tabela, varrer a tabela inteira fazendo um replace dos índices. Aí teria que sempre usar um adicionar/remover filho em função customizada ao invés de deixar os botões padrões.

Dá um trabalho, mas não acho que seria algo muito difícil de realizar. Mas seria realmente percorrer todos os input, textarea e select e ir trocando ao menos o name deles para ficar com o índice correto.

Algo no estilo

```javascript
function adicionaLinha() {
    wdkAddChild("seu_tablename");

    $("#id_tabela tbody tr").each(function (index) {
        // Aí faz algo assim pra cada elemento que pode ter o índice
        $(this).find("input").each(function (i, el) {
            let name = el.split('___')[0];
            el.name = `${name}___${index}`;
        })
    });
}
```

Outra opção, que eu particularmente prefiro, seria utilizar algum campo já existente na tabela (ou criar um novo) para servir como “relacionamento” a esse array, ao invés de depender de índice numérico.

Um detalhe importante: ao editar os dados do formulário o Fluig utiliza os índices faltantes pra saber se é pra excluir a linha. Então tem que ter um cuidado especial ao mexer na tabela pai filho.

Mais um motivo pra fazer esse relacionamento de outra forma que não seja pelo índice das linhas.

---

## Resposta #6

**Wanderley Junior** (@gomeswjunior) — 14/03/2023, 12:30 | ❤️ 1

Obrigado pelo apoio bruno. Optei pela sua segunda opção e resolveu meu problema.

---
