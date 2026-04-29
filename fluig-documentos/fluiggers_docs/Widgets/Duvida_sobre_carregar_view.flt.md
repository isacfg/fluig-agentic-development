# Duvida sobre carregar view.flt

> **Fonte:** [https://fluiggers.com.br/t/duvida-sobre-carregar-view-flt/2763](https://fluiggers.com.br/t/duvida-sobre-carregar-view-flt/2763)
> **Categoria:** Widgets
> **Criado em:** 29/04/2024, 08:37
> **Visualizações:** 253 | **Likes:** 0 | **Respostas:** 9

---

## Pergunta original

**Henrique Cabral** (@HenriqueCabral) — 29/04/2024, 08:37

Bom dia pessoal, estou fazendo uma widget e preciso de uma ajuda. Estou puxando o dataset em um select que tenho no flt da view e puxando o JS “”. O problema em questão é que no arquivo edit.ftl, tudo funciona, aparecendo os valores do dataset no select em questão, mas após publicar na página, ele não carrega o script e não puxa o dataset. A questão é que o código do edit.ftl e view.ftl é o mesmo mas não está puxando os dados do dataset na view da widget, alguém sabe o que poderia ser?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 29/04/2024, 10:07

O Fluig não exibe nenhum erro?

---

## Resposta #2

**Henrique Cabral** (@HenriqueCabral) — 29/04/2024, 10:17

Exibe!! Exibe o erro a seguir:
Uncaught ReferenceError: DatasetFactory is not defined

Como se ele não conseguisse ler o script:

Ele não está atribuído no application.info (já tentei colocar lá e dá o mesmo erro) mas como no edit funciona normal então, sendo puxado apenas pelo ftl, acho que não há problema. Mas esse erro aparece na view principal apenas, quando estou no editar página, o select puxa todos os dados que preciso do ds. Por ser o mesmo código na view.flt e no edit.flt, estranhei o erro. Sabe o que poderia ser?

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 29/04/2024, 10:22

Pra consultar Dataset em widgets precisa adicionar a vcXMLRPC.js.

Provavelmente na edição o Fluig já está incluindo essa lib, mas na hora de exibir não.

Só colocar um `<script src="/webdesk/vcXMLRPC.js"></script>` na sua view.ftl

---

## Resposta #4

**Henrique Cabral** (@HenriqueCabral) — 29/04/2024, 10:25

Já estava aplicando o script na view.ftl:

![image](https://fluiggers.com.br/uploads/default/original/2X/7/7d30100965b3be4051de7f5789ac6e2f91b90fe3.png)

Parece que ele não está lendo ele no arquivo, está igualzinho no edit e está fazendo a leitura mas na view não funciona.

---

## Resposta #5

**Henrique Cabral** (@HenriqueCabral) — 29/04/2024, 10:34

Vou te enviar junto das prints e código também.

FTL:

![image](https://fluiggers.com.br/uploads/default/original/2X/b/b31f337900fe21c7fe6bd0ccbf568b97d4112f9b.png)

Esse é o inicio do código, tanto no view.flt quanto no edit.ftl

No JS puxo o ds a partir da função:

function preencheCtCusto() {
const dataset = DatasetFactory.getDataset(“ds\_DHO\_CentroCusto”, null, null, null);
const selectCtCusto = document.getElementById(“selectCtCusto”);

```
if (dataset && dataset.values && dataset.values.length > 0) {
    // Criar um objeto para armazenar os centros de custo únicos com suas matrículas
    const ctCustoUnicos = {};

    dataset.values.forEach(item => {
        const nomeCusto = item.DESC_CC;
        const codigoCusto = item.COD_CC;

        // Se o gestor ainda não foi adicionado, adicione-o ao objeto de gestores únicos
        if (!ctCustoUnicos[nomeCusto]) {
            ctCustoUnicos[nomeCusto] = codigoCusto;
        }
    });

    // Converter o objeto de CC únicos em uma matriz
    let CCArray = Object.entries(ctCustoUnicos);

    // Ordenar a matriz de gestores por ordem alfabética do nome
    CCArray.sort((a, b) => a[0].localeCompare(b[0]));

    // Adicionar cada gestor único e ordenado ao select de gestores
    CCArray.forEach(([nomeCusto, codigoCusto]) => {
        const option = document.createElement("option");
        option.value = codigoCusto; // Define o value como COD_CC
        option.text = nomeCusto; // Define o texto como DESC_CC
        selectCtCusto.appendChild(option);
        //console.log(`Adicionando ao selectGestores: ${option.text} (value: ${option.value})`);
    });

    // Verifica se há dados salvos no array para o centro de custo selecionado
    const custoSelecionado = selectCtCusto.value;
    const dadosSalvos = dados.filter(dado => dado.COD_CC === custoSelecionado);

    if (dadosSalvos.length > 0) {
        // Se houver dados salvos, preenche a tabela com esses dados
        preencherTabelaComDadosSalvos(dadosSalvos);
    } else {
        // Caso contrário, preenche a tabela com os dados do dataset
        atualizarTabela(custoSelecionado);
    }
} else {
    console.error('Dataset não obtido ou vazio.');
}
```

}

No edit, tendo esse mesmo inicio, funciona certinho, mas no view não, dá aquele erro que comentei.

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 29/04/2024, 21:39

Quando você carrega a página chegou a inspecionar a aba “Rede” (ou Network) do console de desenvolvedor do navegador pra ver se deu erro de carregar o arquivo vcXMLRPC.js?

Outra coisa, você tá chamando a função do dataset só depois que a widget é inicializada né? Depois que o método `init` dela ocorre.

Uma coisa que não sei se influencia, mas vi no print do seu ftl que você deixou vários scripts fora da div da widget. Nunca tentei fazer assim, eu sempre jogo tudo dentro da div (com exceção dos parâmetros). Mas realmente não faço ideia se isso influenciaria.

![image](https://fluiggers.com.br/uploads/default/original/2X/b/bcbeaca9ee3a421ea0ffd4b92d931d531577bdc1.png)

O que realmente é importante é só tentar pesquisar itens dentro do método `init` ou depois que ele carregar, justamente por ser ele que indica que a widget foi completamente carregada.

Aqui tenho várias widgets que uso bastante o `DatsetFactory.getDataset` e nunca vi problema.

![image](https://fluiggers.com.br/uploads/default/original/2X/b/bd9b9a6575cb27cd729fc91b990a03fc99ac2eb5.png)

---

## Resposta #7

**Henrique Cabral** (@HenriqueCabral) — 30/04/2024, 09:17

Bom dia Bruno! Estava verificando esses pontos que comentou e mesmo com essas alterações o erro persiste. Estava validando aqui e, por exemplo, no edit ele puxa tudo que precisa puxar do js:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/5/5d3758b17cc68b365911339e24c353cb4daf7d84_2_690x35.png)

Nesse caso ele da sequência aos centros de custo e puxa a data de início de avaliação, que são as funções que coloquei a serem efetuadas. O que reparei é que na view.ftl ele não puxa nem a data, portanto aparenta ter um erro no carregar do js, pelo que reparei. Os dois arquivos js já estão carregados no application e não sei se precisariam ser puxados na ftl também. Saberia me dizer se isso pode estar causando o erro?

---

## Resposta #8

**Bruno Gasparetto** (@Bruno_Gasparetto) — 30/04/2024, 09:48

Bom, se você tem a tag script inserindo o vcXMLRPC.js na view.ftl, não aparece erro na inspeção do navegador dizendo que não foi possível baixar o vcXMLRPC.js, você tá executando o script só após o método **init** da widget ser executado e mesmo assim tá dando erro de que não existe a DatasetFactory, então pode ser alguma coisa bem mais séria mesmo.

Numa situação dessas talvez só com a TOTVS dando uma olhada, porque pode ser algum defeito no seu ambiente.

---

## Resposta #9

**Henrique Cabral** (@HenriqueCabral) — 30/04/2024, 10:09

Acho que talvez o erro seja executar o script após o método init, como posso ter certeza se está sendo executado após o método? É o único ponto que não tenho certeza se está ok, de resto está de acordo.

---

## Resposta #10

**Bruno Gasparetto** (@Bruno_Gasparetto) — 02/05/2024, 09:17

Você tem que executar as ações que buscam os dados no dataset dentro do método `init` ou fazendo o método `init` chamar os métodos que carregam os dados ou no método `init` fazer a configuração dos eventos que carregarão os dados (por exemplo, tem um botão que ao ser clicado vai buscar os dados, ou você o deixa configurado nos `bindings` da widget ou configura o evento dentro do `init`).

---
