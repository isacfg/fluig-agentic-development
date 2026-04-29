# Validação de formulário no front

> **Fonte:** [https://fluiggers.com.br/t/validacao-de-formulario-no-front/221](https://fluiggers.com.br/t/validacao-de-formulario-no-front/221)
> **Categoria:** Formulários
> **Tags:** `form`, `beforesendvalidate`, `validação`, `front`
> **Criado em:** 26/03/2021, 15:23
> **Visualizações:** 4324 | **Likes:** 45 | **Respostas:** 19

---

## Pergunta original

**Victor Castro** (@victorcastro) — 26/03/2021, 15:23 | ❤️ 10

Já vi várias vezes pessoas com algumas dúvidas ou dificuldades pra fazer validação do formulário.

Resolvi criar esse tópico pra demonstrar a forma que eu faço e deixar de exemplo pra quem se precisar. Quem quiser compartilhar o jeito que faz, fique a vontade.

Bom, primeiramente, a estrutura do HTML é a seguinte:

```auto
<div class="row">
	<div class="form-field col-md-6">
		<div class="form-input">
			<div class="form-group">
				<label for="campo1">Campo 1</label>
				<input type="text" name="campo1" id="campo1" class="form-control">
			</div>
		</div>
	</div>
	<div class="form-field col-md-6">
		<div class="form-input">
			<div class="form-group">
				<label for="campo2">Campo 2</label>
				<input type="text" name="campo2" id="campo2" class="form-control">
			</div>
		</div>
	</div>
</div>
```

A validação é feita em um arquivo **js**, no **beforeSendValidate**. Nele, tem uma estrutura já montada (que serve pra todos os processos, só precisando alterar quais campos precisam ser validados) onde é feita a checagem dos campos marcados como obrigatórios. É um código extenso, então vou deixar aqui pra quem quiser baixar. [formValidate.js](https://fluiggers.com.br/uploads/short-url/lfu4B7JuzdY8XjkYhJQNhJJBRzm.js) (11,0,KB)

Mas, basicamente, ele possui a seguinte estrutura:
![image](https://fluiggers.com.br/uploads/default/original/1X/8ebc82af63639f200137bf2657fa156d8d9b4399.png)

Quem quiser pegar o código pra entender como funciona, fique a vontade. Mas o mais importante é entender que pra poder fazer a validação de um campo só precisa simplesmente chamar a função **addHasFree** passando o nome do campo como parâmetro.

O **throw** é mais amigável do que no evento **validateForm**. E a função ainda colore os campos e as labels de vermelho, ficando da seguinte forma:

![image](https://fluiggers.com.br/uploads/default/optimized/1X/c651fc6e6e81f31d3fdff3b3e735c5930bc1f1ba_2_690x275.png)

É interessante também porque, caso precise executar algum código após a validação ter sido verificada sem erros, é só adicionar o código depois do **exibeCamposObrigatórios()**, uma vez que ao encontrar algum campo sem preenchimento, o throw obviamente interrompe o código antes.

Qualquer dúvida, só perguntar. Espero que ajude alguém.

---

## Resposta #1

**Victor Castro** (@victorcastro) — 26/03/2021, 15:24 | ❤️ 2

Dá uma olhada, [@lucaslemuel\_f](/u/lucaslemuel_f).

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 26/03/2021, 16:10 | ❤️ 1

Ainda não testei, mas tenho vontade de usar o plugin JQuery Validation e chamar a validação na beforeSendValidate.

Quando comecei a mexer com o Fluig eu fiquei abismado dele não aceitar validações básicas do HTML (campos obrigatórios, por exemplo).

---

## Resposta #3

**Daniel Cabral Santos** (@daniel.cabral) — 26/03/2021, 16:22 | ❤️ 4

Já fizemos algo parecido aqui, utilizando o validateForm (preservando as regras de validação no backend) e devolvendo ao front os campos a corrigir, além do realce em tela. Deixar tudo no front não deixa de ser um risco…se quiserem compartilho tbm.

Desenvolvido pelo nosso colega Kelvin Hudson que não tomou vergonha na cara de se cadastrar aqui ainda…rs…

---

## Resposta #4

**Igor Rodrigues** (@fluigor.com.br) — 26/03/2021, 17:23 | ❤️ 2

Já usei [@Bruno\_Gasparetto](/u/bruno_gasparetto) , é uma porcaria! não vale a pena.

Está forma mencionada acima, é a indicada pelo time de produto.

Parabens [@victorcastro](/u/victorcastro)

---

## Resposta #5

**Victor Castro** (@victorcastro) — 26/03/2021, 17:44

Claro. Novas ideias são sempre bem-vindas.

---

## Resposta #6

**Daniel Sales** (@Daniel_Sales) — 27/03/2021, 20:52 | ❤️ 2

Uma boa ideia é validar no front é no back vou testar uma forma fácil e posto aqui.

---

## Resposta #7

**Helbert Campos** (@helbert_campos) — 28/03/2021, 22:30 | ❤️ 2

O legal é que se você criar a variável do `validator`. Ex.:

```auto
$validator = $('form').validate({...});
```

É possível resgatar todas as mensagens de erro dos campos:

```auto
$validator.errorList
```

![Screen Shot 2021-03-28 at 22.28.10](https://fluiggers.com.br/uploads/default/optimized/1X/8e706b42ef14740a49881a6addbec13f3e30305a_2_690x224.png)

Assim você pode exibir junto na mensagem para o usuário.

![Screen Shot 2021-03-28 at 22.09.13](https://fluiggers.com.br/uploads/default/optimized/1X/b5eba027bc8b9716ddb12b5aac086132e699a4ba_2_690x364.png)

---

## Resposta #8

**Igor Rodrigues** (@fluigor.com.br) — 29/03/2021, 08:26

[@victorcastro](/u/victorcastro) o download do JS quebrou! resolve pra nois.

---

## Resposta #9 ✅ RESPOSTA ACEITA

**Victor Castro** (@victorcastro) — 29/03/2021, 09:03

Tô upando o arquivo aqui mas não tá dando pra baixar. Não sei o que houve…

Vou deixar um link do drive pra quem quiser baixar ([formValidate.js](https://drive.google.com/file/d/1WxRq-DIADzGXrEvdDOszVof-8HS9KbCK/view?usp=sharing)).

---

## Resposta #10

**Victor Castro** (@victorcastro) — 29/03/2021, 09:06 | ❤️ 1

Massa [@helbert\_campos](/u/helbert_campos). Se quiser, deixa um exemplo de validação que você faz pra galera ter uma ideia.

---

## Resposta #11

**Bruno Gasparetto** (@Bruno_Gasparetto) — 29/03/2021, 09:15 | ❤️ 1

[@helbert\_campos](/u/helbert_campos) , foi exatamente o que imaginei. Usar um plugin JQuery de validação, chamar a validação manualmente no evento beforeSendValidate (já que o Fluig não dispara a validação do formulário) e caso tenha erros exibir no throw.

---

## Resposta #12

**Victor Castro** (@victorcastro) — 29/03/2021, 09:29 | ❤️ 1

O meu problema com o throw do back é estético kkkkkkkkk

---

## Resposta #13

**Daniel Cabral Santos** (@daniel.cabral) — 29/03/2021, 10:40

[@victorcastro](/u/victorcastro) , sobe aqui no fórum mesmo:

![image](https://fluiggers.com.br/uploads/default/original/1X/199e47c6d915db3a8ae594d2a76e5819beb5b7b3.png)

Já tentou?

---

## Resposta #14

**Victor Castro** (@victorcastro) — 29/03/2021, 11:13

Sim, deu o mesmo problema.

---

## Resposta #15

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 29/03/2021, 15:27

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/victorcastro/48/12_2.png) victorcastro:
>
> > Qualquer dúvida, só perguntar. Espero que ajude alguém.

[@victorcastro](/u/victorcastro), desculpe a minha ignorância… mas eu procurei o evento **beforeSendValidate**, mas não localizei… preciso criar ele “na mão” mesmo ?

---

## Resposta #16

**Bruno Gasparetto** (@Bruno_Gasparetto) — 29/03/2021, 15:35 | ❤️ 3

[@JulioRocha](/u/juliorocha) , o evento **beforeSendValidate** é um evento que acontece do lado do cliente (navegador) antes do formulário ser enviado pro Fluig.

Basta você criar a função com esse nome no seu JS que é carregado no HTML do formulário.

[https://tdn.totvs.com/pages/releaseview.action?pageId=270924158#EventosdeFormulário-beforeSendValidate](https://tdn.totvs.com/pages/releaseview.action?pageId=270924158#EventosdeFormul%C3%A1rio-beforeSendValidate)

---

## Resposta #17

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 29/03/2021, 16:27

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/bruno_gasparetto/48/68_2.png) Bruno\_Gasparetto:
>
> > Basta você criar a função com esse nome no seu JS que é carregado no HTML do formulário.

Vou testar, muito obrigado!

---

## Resposta #18

**Victor Castro** (@victorcastro) — 29/03/2021, 17:01

[@JulioRocha](/u/juliorocha) é isso aí o que o [@Bruno\_Gasparetto](/u/bruno_gasparetto) falou. No arquivo que eu disponibilizei pra baixar tem lá um exemplo de implementação.

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/victorcastro/48/12_2.png) [Validação de formulário no front](https://fluiggers.com.br/t/validacao-de-formulario-no-front/221/10) [Formulários](https://fluiggers.com.br/c/form-fluig-html/15)
>
> > Tô upando o arquivo aqui mas não tá dando pra baixar. Não sei o que houve… Vou deixar um link do drive pra quem quiser baixar ([formValidate.js](https://drive.google.com/file/d/1WxRq-DIADzGXrEvdDOszVof-8HS9KbCK/view?usp=sharing)).

Qualquer dúvida pode perguntar, sem problemas.

---

## Resposta #19

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 29/03/2021, 17:17 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/bruno_gasparetto/48/68_2.png) Bruno\_Gasparetto:
>
> > Basta você criar a função com esse nome no seu JS que é carregado no HTML do formulário.

Basicamente eu preciso abrir uma tag e inserir todo o código que o [@victorcastro](/u/victorcastro) enviou, certo ?

---

## Resposta #20

**Victor Castro** (@victorcastro) — 29/03/2021, 17:25 | ❤️ 1

Isso. Se você declarar o **beforeSendValidate** dentro da tag script, vai funcionar. Lembrando que a estrutura do HTML também importa, como eu especifiquei acima, tendo em vista que ele procura a label dentro da classe `form-field`.

---

## Resposta #21

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 29/03/2021, 17:57 | ❤️ 4

deu certo!

![image](https://fluiggers.com.br/uploads/default/optimized/1X/c0c30ae0a8eb19de9ca3c376f8d9d3263578b5d7_2_690x261.png)

---

## Resposta #22

**Victor Castro** (@victorcastro) — 29/03/2021, 18:09 | ❤️ 2

Show! [@JulioRocha](/u/juliorocha) :clap:t3:

---

## Resposta #23

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 30/03/2021, 11:52

[@victorcastro](/u/victorcastro) , como faço para por aquele “\*” em vermelho ? :smiley:

---

## Resposta #24

**Victor Castro** (@victorcastro) — 30/03/2021, 12:06 | ❤️ 1

Na frente da label eu coloco

```auto
<strong class=“obg”>*</strong>
```

E no CSS

```auto
.obg {
   color: red;
}
```

---

## Resposta #25

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 30/03/2021, 12:07 | ❤️ 1

Ah, pensei que era alguma coisa específica do arquivo js acima kkk, muito obrigado!

Desculpa minha falta de conhecimento, ainda sou novo nisso.

---

## Resposta #26

**Victor Castro** (@victorcastro) — 30/03/2021, 12:09 | ❤️ 2

Não é demérito nenhum, amigo. Com certeza você sabe muita coisa que eu não sei. Estamos aqui pra nos ajudarmos.

Também não tenho muito tempo de experiência no Fluig. Não tem que ter vergonha de perguntar :smiley:

---

## Resposta #27

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 30/03/2021, 14:35

Muito obrigado [@victorcastro](/u/victorcastro) , tmj!!

Agora estou tentando adaptar esse js para o uso em uma tabela PaixFilho rs

---

## Resposta #28

**Victor Castro** (@victorcastro) — 30/03/2021, 14:38 | ❤️ 1

[@JulioRocha](/u/juliorocha) tem uma função que chama **addHasFreeTable**, que é pra validar campos da tabela PaixFilho. Essa requer parâmetros diferentes da outra. Ela pede pra você passar qual o tipo do campo, se é um input ou se é um select (campos zoom são considerados select), o nome do campo e um outro parâmetro, 0 ou 1. Tanto o 0 quanto o 1 não deixam passar se o campo estiver vazio. A diferença é que o 0 obriga o usuário a digitar PELO MENOS UM REGISTRO. Ou seja, não pode avançar sem adicionar ao menos um filho à tabela e informar um valor para aquele campo. Já o 0 só vai obrigar o usuário a informar um valor se a tabela tiver um filho. Se a tabela não tiver filho nenhum, ele não dá erro. Deixa passar.

**Segue exemplo:**

![image](https://fluiggers.com.br/uploads/default/original/1X/da81f820fe2312342000cf08d7f23bd54d894c49.png)

---

## Resposta #29

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 30/03/2021, 14:41 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/victorcastro/48/12_2.png) victorcastro:
>
> > [@JulioRocha](/u/juliorocha) tem uma função que chama **addHasFreeTable** , que é pra validar campos da tabela PaixFilho. Essa requer parâmetros diferentes da outra. Ela pede pra você passar qual o tipo do campo, se é um input ou se é um select (campos zoom são considerados select), o nome do campo e um outro parâmetro, 0 ou 1. Tanto o 0 quanto o 1 não deixam passar se o campo estiver vazio. A diferença é que o 0 obriga o usuário a digitar PELO MENOS UM REGISTRO. Ou seja, não pode avançar sem adicionar ao menos um filho à tabela e informar um valor para aquele campo. Já o 0 só vai obrigar o usuário a informar um valor se a tabela tiver um filho. Se a tabela não tiver filho nenhum, ele não dá erro. Deixa passar.

Victor, muito obrigado!

---

## Resposta #30

**Rodrigo de Oliveira** (@redschenko) — 09/04/2021, 15:00

[@victorcastro](/u/victorcastro)

É possível executar um dataset no beforeSendValidate()?
Basicamente, antes de enviar preciso validar uma informação no banco de dados.

---

## Resposta #31

**Victor Castro** (@victorcastro) — 09/04/2021, 15:21 | ❤️ 2

[@redschenko](/u/redschenko)

É possível sim. Segue exemplo:

```javascript
var beforeSendValidate = function(numState, nextSate){
   var dataset = DatasetFactory.getDataset('nome_dataset', null, null, null);
   dataset.values[0]["NOME_COLUNA"];
}
```

---

## Resposta #32

**Victor Castro** (@victorcastro) — 09/04/2021, 15:32

[@daniel.cabral](/u/daniel.cabral) aguardando o seu exemplo rsrs

---

## Resposta #33

**Victor Castro** (@victorcastro) — 09/04/2021, 15:33

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/daniel.cabral/48/5_2.png) daniel.cabral:
>
> > Deixar tudo no front não deixa de ser um risco…se quiserem compartilho tbm.

[@daniel.cabral](/u/daniel.cabral) aguardando seu exemplo rsrs

---

## Resposta #34

**system** (@system) — 10/04/2021, 07:33

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
