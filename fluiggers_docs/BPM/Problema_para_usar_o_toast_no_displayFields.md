# Problema para usar o toast no displayFields

> **Fonte:** [https://fluiggers.com.br/t/problema-para-usar-o-toast-no-displayfields/390](https://fluiggers.com.br/t/problema-para-usar-o-toast-no-displayfields/390)
> **Categoria:** BPM
> **Criado em:** 26/04/2021, 14:05
> **Visualizações:** 1039 | **Likes:** 1 | **Respostas:** 5

---

## Pergunta original

**Vagner Duarte** (@vagner_duarte) — 26/04/2021, 14:05

Pessoal,

quero jogar uma mensagem toast no client através do evento displayfields, porém, estou me embanando com as aspas"", alguém tem um exemplo pronto funcionando para compartilhar?

se eu fizer desta forma funciona:

> Bloco de Citação

customHTML.append(“”);

Desta forma não vai:

> Bloco de Citação

customHTML.append(“”);

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 27/04/2021, 09:03

Dia! Seu código inteiro não chegou, consegue ajustar o post?

---

## Resposta #2

**Vagner Duarte** (@vagner_duarte) — 27/04/2021, 09:33

pois é Daniel, não sei porque, mas quando eu posto o código, ele é retirado. Não sei se é pq tem tag …acredito que seja isso…

---

## Resposta #3

**Vagner Duarte** (@vagner_duarte) — 27/04/2021, 09:34

isso mesmo… agora eu fui colocar < S-C-R-I-P-T-> o sistema retira o código.

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 27/04/2021, 09:47

[@vagner\_duarte](/u/vagner_duarte) , você pode clicar nesse botão que indiquei ou simplesmente escrever isso aí do print (que é o mesmo que sempre utilizamos ao escrever um Markdown). Onde está “your code goes here” é pra você colar o seu código. Desse jeito ele não vai arrancar a sua tag script, pois o fórum saberá que se trata de um código fonte. Mas se o seu código inteiro é um JS não precisa colocar a tag script, simplesmente coloque o código.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/fdb84fd23dc342e500501d6feba74802cf3b35f0_2_690x251.png)

Lembre-se também de deixar seu código bem indentado pra facilitar a leitura.

---

## Resposta #5

**Vagner Duarte** (@vagner_duarte) — 27/04/2021, 09:59

[@Bruno\_Gasparetto](/u/bruno_gasparetto) só agora fiquei sabendo disso, porque aqui, só aparece após passar o mouse encima, por isso, não tinha conseguindo:
![image](https://fluiggers.com.br/uploads/default/original/1X/783432286b0df8910d9c3cc13456e943d7781121.png)

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 27/04/2021, 10:01 | ❤️ 1

[@vagner\_duarte](/u/vagner_duarte) , é que o plugin tem um problema de não exibir o ícone. O [@daniel.cabral](/u/daniel.cabral) até abriu uma issue pro projeto do plugin, mas parece que foi resolvido sem resolver realmente, hehehe.

---

## Resposta #7

**Vagner Duarte** (@vagner_duarte) — 27/04/2021, 10:07

```javascript
customHTML.append("<script>" +
	    						 FLUIGC.toast({
	 	    						title: 'Atenção:',
	 	    						message: 'Informe o Numero do Catrato!',
	 	    						type: 'warning'

	 	    						});+" </script>");
```

Tentei usar da seguinte forma, no evento displayFields, porém, não funciona. a lógica está correta, as “aspas” que estão erradas…

Apesar de que arrumei uma outra solução para funcionar, mas assim deveria funcionar também.

---

## Resposta #8

**Daniel Cabral Santos** (@daniel.cabral) — 27/04/2021, 10:20

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/vagner_duarte/48/7_2.png) vagner\_duarte:
>
> > ```auto
> > customHTML.append("<script>" +
> > 	    						 FLUIGC.toast({
> > 	 	    						title: 'Atenção:',
> > 	 	    						message: 'Informe o Numero do Catrato!',
> > 	 	    						type: 'warning'
> >
> > 	 	    						});+" </script>");
> > ```

Já tentou assim?

```auto
customHTML.append("<script>FLUIGC.toast({title: 'Atenção:', message: 'Informe o Numero do Catrato!', type: 'warning'}); + </script > ");
```

---

## Resposta #9

**Vagner Duarte** (@vagner_duarte) — 27/04/2021, 10:26

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/daniel.cabral/48/5_2.png) daniel.cabral:
>
> > `ustomHTML.append("<script>FLUIGC.toast({`

Testei aqui, não deu!

---

## Resposta #10

**Daniel Cabral Santos** (@daniel.cabral) — 27/04/2021, 14:07

Não testei, mas pode ser que no momento em que o HTML foi injetado, o FLUIGC ainda não foi carregado, não resultando em nada. Tenta injetar seu script dentro de um $document.ready() e conta pra gente

---

## Resposta #11

**Vagner Duarte** (@vagner_duarte) — 27/04/2021, 14:11

mas no front, ele ja funciona. a Ideia era do back, mas enfim, eu arrumei outra forma de fazer funcionar.
\==> Criei a função no front, recebendo a msg como parâmetro, e no back eu chamo somente a função, passando a msg da seguinte forma:

```javascript
customHTML.append("<script> mensagemError('Prestador de Serviço não liberado no Fluig!'); </script>");
```

---

## Resposta #12

**Bruno Gasparetto** (@Bruno_Gasparetto) — 27/04/2021, 14:30

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/daniel.cabral/48/5_2.png) daniel.cabral:
>
> > `customHTML.append("<script>FLUIGC.toast({title: 'Atenção:', message: 'Informe o Numero do Catrato!', type: 'warning'}); + </script > ");`

acho que esse **+** pode estar prejudicando o código, pois ele ficou solto.

Na **displayFields**, ao chamar funções ou executar alguma ação, que não seja declarar uma variável ou função, eu também prefiro sempre só executar após o carregamento do documento utilizando a $(document).ready(fn) ou o “atalho” $(fn). Mais seguro pra evitar erros.

---
