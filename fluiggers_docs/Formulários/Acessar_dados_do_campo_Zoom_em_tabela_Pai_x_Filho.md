# Acessar dados do campo Zoom em tabela Pai x Filho

> **Fonte:** [https://fluiggers.com.br/t/acessar-dados-do-campo-zoom-em-tabela-pai-x-filho/3154](https://fluiggers.com.br/t/acessar-dados-do-campo-zoom-em-tabela-pai-x-filho/3154)
> **Categoria:** Formulários
> **Tags:** `form`, `paixfilho`, `zoom`
> **Criado em:** 07/02/2025, 10:41
> **Visualizações:** 189 | **Likes:** 4 | **Respostas:** 6

---

## Pergunta original

**Rahyan Ramos** (@Ramos) — 07/02/2025, 10:41

Olá a todos!

Estou desenvolvendo um processo em que, em uma determinada atividade, o responsável deve informar os planos de ação em uma tabela Pai x Filho. Nessa tabela, o usuário define a tratativa, o responsável e o prazo para entrega. Veja a imagem ilustrativa abaixo:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/a/a2f2994c4a5a9f11b09b0e6b5a5c1f6b9db921a1_2_690x229.png)

Segue o trecho do código HTML que monta a tabela:

```auto
<table tablename="planAcao" class="table table-hover" id="planAcao" addbuttonlabel="Adicionar Ação" addbuttonclass="btn btn-primary">
					                <thead>
					                    <tr>
					                        <td class="form-group col-md-6">Tratativa</td>
					                        <td class="form-group col-md-4">Responsável</td>
					                        <td class="form-group col-md-2">Tempo de Entrega</td>
					                    </tr>
					                </thead>
					                <tbody>
					                    <tr>
					                        <td class="form-group col-md-6">
					                        	<input type="text" class="form-control" id="tratativa" name="tratativa">
					                        </td>
					                        <td class="form-group col-md-4">
						                        <input
											        type="zoom"
											        id = "responTrat"
											        name="responTrat"
											        data-zoom="{
											            'displayKey':'colleagueName',
											            'datasetId':'colleague',
											            'placeholder':'Selecione o responsável',
											            'resultLimit':'5000',
											            'fields':[
											                {
											                  'field':'colleagueName',
											                  'label':'Nome'
											                },{
											                  'field':'login',
											                  'label':'Matrícula'
											                }
											            ]
											         }"
										         />
					                        </td>
					                        <td class="form-group col-md-2">
					                        	<input type="text" class="form-control" id="tempoEntrega" name="tempoEntrega" placeholder="00:00" maxlength="5">
					                        </td>
					                    </tr>
					                </tbody>
					            </table>
```

Para capturar os dados do campo zoom, utilizei as funções abaixo, que percorrem todas as linhas da tabela e recuperam o valor selecionado:

```auto
function setSelectedZoomItem(selectedItem){
	const numFilhos = contarFilhos("planAcao");
	let listResponsaveis = []

	for(let i = 1; i <= numFilhos; i++){
		// Obtém o valor (que deve ser o login) do campo na linha i
        let login = $("#responTrat___" + i).val();

        // Se existir um valor (ou seja, o responsável foi selecionado), adiciona na lista
        if (login && login != "") {
            listResponsaveis.push(login);
        }
	}
	$("#responsaveisConcat").val(listResponsaveis.join(", "));
}

function contarFilhos(nomeTabela) {
    const numFilhos = $("#" + nomeTabela + " tbody tr").length - 1;
    return numFilhos;
}
```

A dificuldade que estou enfrentando é a seguinte: o valor recuperado dessas funções é apenas o `colleagueName` (nome do usuário). Sei que, se alterar o parâmetro para `'displayKey':'login'`, a função conseguirá capturar a matrícula, mas o campo do formulário exibirá somente esse valor, o que não é intuitivo para os usuários.

Gostaria de saber se há uma forma de exibir ambos os valores (nome e matrícula) no campo ou se existe alguma abordagem melhor para capturar o login do usuário sem comprometer a apresentação do nome no formulário.

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 07/02/2025, 12:08

Nesse evento do zoom o `selectedItem` é um objeto que contém o nome do input e todos os campos que você indicou pro zoom carregar. Pode dar um `console.log` nele assim que chamar essa função pra você identificar o que vem.

Eu costumo, na declaração do Zoom, indicar alguns campos como ocultos pra não ficar exibindo por padrão pros usuários (por exemplo, não tem motivo mostrar a matrícula pra eles).

```javascript
{
    'field':'login',
    'label':'Matrícula',
    'visible':'false'
}
```

Aí na sua função `setSelectedZoomItem` você acessa a matrícula com `selectedItem.login`.

Outra coisa, é sempre importante validar qual Zoom você está tratando, pois essa função é disparada para qualquer Zoom do seu formulário (e você pode ter outros campos em algum momento).

Num zoom que não está em Pai Filho normalmente fazemos assim:

```javascript
function setSelectedZoomItem(selectedItem) {
    if (selectedItem.inputName === 'nome_do_meu_input_zoom') {
        // executa o evento
    }
}
```

Em um pai filho o inputName terá o `___` concatenado, então muda um pouco:

```javascript
function setSelectedZoomItem(selectedItem) {
    const inputName = selectedItem.inputName.split("___")[0];

    if (inputName === 'nome_do_meu_input_zoom') {
        // executa o evento
    }
}
```

E agora uma pergunta. Isso aqui tá funcionando `let login = $("#responTrat___" + i).val();`?

Pergunto isso porque lembro que o Fluig não adiciona o índice aos ids dos elementos, fazendo isso somente no `name` dos inputs/select/textarea. Então inspeciona se ao criar mais itens pai filho ele tá realmente colocando \_\_\_indice ao id dos elementos. Pois ter ID repetido na página pode trazer resultados errados em algum momento.

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 07/02/2025, 12:23

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/bruno_gasparetto/48/68_2.png) Bruno\_Gasparetto:
>
> > E agora uma pergunta. Isso aqui tá funcionando `let login = $("#responTrat___" + i).val();`?
> >
> > Pergunto isso porque lembro que o Fluig não adiciona o índice aos ids dos elementos, fazendo isso somente no `name` dos inputs/select/textarea. Então inspeciona se ao criar mais itens pai filho ele tá realmente colocando \_\_\_indice ao id dos elementos. Pois ter ID repetido na página pode trazer resultados errados em algum momento.

Desconsidera essa pergunta.

Só agora que resolvi testar e vi que a partir do Fluig 1.8.1 ele está adicionando o índice também ao ID.

---

## Resposta #3

**Rahyan Ramos** (@Ramos) — 07/02/2025, 16:41 | ❤️ 1

Excelente Bruno, ainda não conhecia muito bem essa propriedade do parâmetro `selectedItem` da função `setSelectedZoomItem`.

Minha maior dificuldade era ao capturar uma mudança no campo Zoom da tabela alterar exatamente o campo onde estou concatenando os valores para definir como responsáveis para a próxima fase, pois a função recupera apenas o valor do campo alterado e não iterando sobre cada linha da tabela. Por fim criei uma nova função responsável por isso enquanto `setSelectedZoomItem` fica apenas para recuperar os dados de selectedItem.

Ficando assim:

```auto
function setSelectedZoomItem(selectedItem){
	const inputName = selectedItem.inputName.split("___")[0];

	if (inputName === 'responTrat') {
	    $("#" + selectedItem.inputId).data("selected", selectedItem);

	    atualizaResponsaveis();
    }
}

function atualizaResponsaveis(){
    const numFilhos = contarFilhos("planAcao");
    let listResponsaveis = [];

    for(let i = 1; i <= numFilhos; i++){
        let selectedData = $("#responTrat___" + i).data("selected");

        if (selectedData && selectedData.login) {
            listResponsaveis.push(selectedData.login);
        }
    }
    $("#responsaveisConcat").val(listResponsaveis.join(", "));
}

function contarFilhos(nomeTabela) {
    const numFilhos = $("#" + nomeTabela + " tbody tr").length - 1;
    return numFilhos;
}
```

Não sei se é o ideal, mas está funcionando.

`contarFilhos(nomeTabela)`: Conta o número de linhas (filhos) presentes no corpo (`tbody`) de uma tabela específica.

`setSelectedZoomItem(selectedItem)`: Esta função é disparada quando um item é selecionado no componente Zoom.
A função armazena o objeto `selectedItem` diretamente no elemento HTML (usando o método `data("selected", selectedItem)`), permitindo acesso posterior a todas as propriedades do item selecionado.

`atualizaResponsaveis()`: Atualiza o campo que contém a concatenação das matrículas (logins) dos responsáveis selecionados em cada linha da tabela.
Percorre cada linha e tenta recuperar o objeto armazenado (usando `.data("selected")`) no campo de Zoom identificado por `"responTrat___" + i`.
Se o objeto recuperado existir e possuir a propriedade `login`, adiciona o valor do login (matrícula) a uma lista.
Por fim, define o valor do campo `responsaveisConcat` como uma string com os logins separados por vírgula.

Obrigado pelo apoio, sua resposta abriu minha mente pela solução.

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 08/02/2025, 11:33

Nessa etapa o usuário pode adicionar e remover itens da pai filho que está iterando?

Se isso ocorrer o seu código vai dar problema, pois está usando a quantidade de TRs como índice, mas se eu excluir um item da pai filho e depois adicionar outro aquele índice do item deletado se perdeu e a pai filho não reordena os índices no front nesse momento.

Então nesse cenário você pode ter uma tabela com 1 TR, mas ela já estar no índice 3, por exemplo.

Então se a tabela a ser iterada pode ser manipulada e a intenção é iterar entre todos os filhos “válidos” da tabela (desconsiderando o primeiro TR que é o template dela) você pode fazer assim:

```javascript
$('#planAcao tbody tr:gt(0)')
    .each(function () {
        // this é o elemento TR da iteração
        const selectedData = $(this)
            .find('input[name*="responTrat___"]')
            .data('selected');
        // faz o resto do código
    });
```

---

## Resposta #5

**Rahyan Ramos** (@Ramos) — 10/02/2025, 10:40 | ❤️ 1

Realmente, Bruno. Meu código estava com essa vulnerabilidade.

Só precisei ajustar um pouco o seu exemplo pois o elemento Zoom é um `select` enquanto o seletor utilizado na função está procurando por um elemento `input`, fazendo com que `.data("selected")` retornasse `undefined`.
Modifiquei o seletor para buscar por qualquer elemento cujo name contenha `responTrat___`, ficando assim:

```auto
$('#planAcao tbody tr:gt(0)').each(function () {
        const selectedData = $(this)
            .find('[name*="responTrat___"]')
            .data('selected');

        if (selectedData && selectedData.login) {
            listResponsaveis.push(selectedData.login);
        }
    });
```

Aproveitando o gancho, o elemento de tabela Pai x FIlhos possui uma função nativa que consiga capturar quando o usuário exclui uma linha da tabela, para que eu possa assim ativar minha função `atualizaResponsaveis`?

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 10/02/2025, 11:28 | ❤️ 1

Você pode usar a `customFnDelete` para customizar como remover o item e nisso fazer o tratamento, seguindo essa [Documentação da Pai Filho](https://tdn.totvs.com/pages/releaseview.action?pageId=668198714#Personaliza%C3%A7%C3%A3odeformul%C3%A1riosContinua%C3%A7%C3%A3o-PaixFilho)

Sinceramente, a maioria das minha Pai Filho eu não uso os botões padrões dela. Eu sempre crio indicando pra não ter o botão de Adicionar nem de Remover e então eu crio na mão eles.

Exceto quando são situações muito simples, onde realmente é uma tabela simples que só vai ter os itens.

Como na maioria das vezes preciso fazer Pai Filho mais rica de elementos acabo sempre usando os eventos customizados.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/1/1542b67583e72357765e8bd8eeb6463c658b7206_2_690x271.png)

---

## Resposta #7

**Rahyan Ramos** (@Ramos) — 10/02/2025, 11:49 | ❤️ 1

Entendi. Ainda sou bem iniciante no desenvolvimento Fluig, vou deixar no meu escopo de próximos estudos da ferramenta para aprender a fazer esses componentes personalizados.

Muito obrigado pelo apoio!

---
