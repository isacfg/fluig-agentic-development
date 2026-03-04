# Mobile

> **21 tópicos**

---

## Sumário

- [Alterando campo fluig mobile](#alterando-campo-fluig-mobile)
- [App my fluig loga mas nâo carrega](#app-my-fluig-loga-mas-no-carrega)
- [Botões customizados - My Fluig](#botes-customizados-my-fluig)
- [Capturar dados de aprovação no Approval](#capturar-dados-de-aprovao-no-approval)
- [Como debugar pelo aplicativo do my fluig?](#como-debugar-pelo-aplicativo-do-my-fluig)
- [Consultar Processo - MyFluig](#consultar-processo-myfluig)
- [Contar a quantidade de anexos no form via mobile](#contar-a-quantidade-de-anexos-no-form-via-mobile)
- [DATASET - onMobileSync](#dataset-onmobilesync)
- [Dados do formulário não salva ao movimentar](#dados-do-formulrio-no-salva-ao-movimentar)
- [Dúvida Dataset Offline](#dvida-dataset-offline)
- [Falha de login no Approval com AD Integrado](#falha-de-login-no-approval-com-ad-integrado)
- [Layout com menus nav não são exibidos](#layout-com-menus-nav-no-so-exibidos)
- [Não consigo acessar página pelo fluig mobile](#no-consigo-acessar-pgina-pelo-fluig-mobile)
- [Permissão para acessar Fluig Mobile - MyFluig](#permisso-para-acessar-fluig-mobile-myfluig)
- [Problema no app após a atualização de segurança no Lake](#problema-no-app-aps-a-atualizao-de-segurana-no-lake)
- [Problema zoom no mobile (offline)](#problema-zoom-no-mobile-offline)
- [QR Code - Mobile](#qr-code-mobile)
- [Redirecionar Widget para solicitação aberta em modo de edição mobile (MyFluig)](#redirecionar-widget-para-solicitao-aberta-em-modo-de-edio-mobile-myfluig)
- [Request confirm no enviar do App MyFluig](#request-confirm-no-enviar-do-app-myfluig)
- [Sobre a categoria Mobile](#sobre-a-categoria-mobile)
- [Tabela pai e filho mobile](#tabela-pai-e-filho-mobile)

---

# Alterando campo fluig mobile

> **Fonte:** [https://fluiggers.com.br/t/alterando-campo-fluig-mobile/1066](https://fluiggers.com.br/t/alterando-campo-fluig-mobile/1066)
> **Categoria:** Mobile
> **Criado em:** 04/05/2022, 09:43
> **Visualizações:** 520 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 04/05/2022, 09:43

Inicio um processo com fluig mobile e na atividade seguinte devo(o mesmo usuário que iniciou o processo) alterar um campo específicos. Porém ao acessar o formulário é como se os campos fossem somente readonly e não consigo alterar.

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 04/05/2022, 14:28

Mobile é um caso muiiiiiiiittttttttooooooo delicado no Fluig [@daniel\_fmartins](/u/daniel_fmartins)

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 05/05/2022, 09:25

Comece limpando seu enablefields e testando como se comporta se o campo vai aparecer para edição. Dai parta para os bloqueios campo a campo. se for so um campo liberado e o resto bloqueado tenho um scrpit para isso que vai no enablefields.

```javascript
switch(atividade){
	case 0:
		var habilitar = false; // Informe True para Habilitar ou False para Desabilitar os campos
		var mapaForm = new java.util.HashMap();
		mapaForm = form.getCardData();
		var it = mapaForm.keySet().iterator();
		while (it.hasNext()) { // Laço de repetição para habilitar/desabilitar os campos
			var key = it.next();
    		form.setEnabled(key, habilitar);
       	}
		form.setEnabled("campo a liberar",true);
	break;
}
```

---

## Resposta #3

**Daniel ** (@daniel_fmartins) — 05/05/2022, 14:51

Continuou da mesma forma :/. Não consigo entender.

---

## Resposta #4

**Allan Reichert** (@allan.reichert) — 12/05/2022, 08:39

olá, quando utiliza o displayfields para desabilitar um campo com a função form.setEnabled(“campo”,false), Perceba que ao inspecionar o campo, este vai estar com nome diferente (“campo\_”) . se tentar desabilitar todos usando setEnabled e habilitar depois nao vai dar certo.

espero ter ajudado

---

---

# App my fluig loga mas nâo carrega

> **Fonte:** [https://fluiggers.com.br/t/app-my-fluig-loga-mas-nao-carrega/1715](https://fluiggers.com.br/t/app-my-fluig-loga-mas-nao-carrega/1715)
> **Categoria:** Mobile
> **Criado em:** 13/03/2023, 16:21
> **Visualizações:** 280 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Márcio Martins** (@marcio.martins) — 13/03/2023, 16:21 | ❤️ 1

Boa tarde,

APP MY FLUIG LOGA MAS NÂO CARREGA FORA DA REDE INTERNA DA EMPRESA.

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 17/03/2023, 09:12

Olá Marcio,

Existem algumas particularidades para uso do app, ambiente possui protocolo https?

![image](https://fluiggers.com.br/uploads/default/optimized/1X/4e48ecc81cb0fea762058c989cdfe3f20ae7879c_2_690x183.png)

Caso tu possua https, jogue sua url neste site e verifique se não tem quebra na cadeia.

![](https://www.sslshopper.com/favicon-32x32.png?v=kPgMqpXJo8) [sslshopper.com](https://www.sslshopper.com/ssl-checker.html)

### [SSL Checker](https://www.sslshopper.com/ssl-checker.html)

Use our fast SSL Checker will help you troubleshoot common SSL Certificate installation problems on your server including verifying that the correct certificate is installed, valid, and properly trusted.

Atenciosamente,

---

---

# Botões customizados - My Fluig

> **Fonte:** [https://fluiggers.com.br/t/botoes-customizados-my-fluig/592](https://fluiggers.com.br/t/botoes-customizados-my-fluig/592)
> **Categoria:** Mobile
> **Criado em:** 02/08/2021, 09:13
> **Visualizações:** 1251 | **Likes:** 3 | **Respostas:** 3

---

## Pergunta original

**Matheus Loreto** (@matheusl) — 02/08/2021, 09:13 | ❤️ 1

Bom dia,

Estou fazendo uma alteração em uma etapa do formulário para executar uma autorização via Mobile.

Preciso que ao clicar em “Autorizar” seja executado mais um trecho de código, antes de enviar propriamente a solicitação. Então o My Approval não atende.

Criei uma tela exclusiva para o Mobile, com dois botões e ao clicar nos botões, ao final do restante do código deve disparar o trigger do botão “Enviar” para a sequência da atividade.

No navegador, o botão está funcionando perfeitamente, chamando a função abaixo:

window.parent.$(‘button\[data-send\]’).first().click();

Porém, no mobile a função não funciona.

Alguém já teve necessidade parecida? Conseguiu resolver o envio pelo mobile?!

At.te

![FluigMobile](https://fluiggers.com.br/uploads/default/optimized/1X/935f1f3ee8421d6099e857abc9e51dcec46da020_2_282x500.png)

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 02/08/2021, 11:26

Bom dia,

Já tentou colocar o codigo que precisa no beforsavetask?

---

## Resposta #2

**Vitor Rios** (@Vitor_Rios) — 03/08/2021, 13:41

Como assim? Estou com o mesmo problema, mas não entendi…
é possível efetuar um clique usando evento de processo?! no aplicativo e no navegador efetuar o clique funciona da mesma forma?

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 03/08/2021, 13:56

Quando clicar em enviar chama o beforsavetask com o codigo de integração.
O que precia e apenas no formulario escolher aprovar ou reprovar.
e no beforsavetask verificar o a escolha e rodar os codigos necessarios.
no novo myappaproval vc escolhe aprovar ou reprovar e ao enviar vc vai rodar esse codigo.

---

## Resposta #4

**Vitor Rios** (@Vitor_Rios) — 03/08/2021, 14:05

Entendi… no meu caso, preciso especificamente clicar em autorizar e meu botão autorizar já fazer automaticamente o envio do form…

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 05/08/2021, 09:42

Essa é uma ótima pergunta.

Acredito que não seja possível porque no Mobile esse botão “Enviar” deve estar em outra View e não ser acessível pelo DOM. Diferente do modo Navegador que a gente consegue acessá-lo usando `parent`, pois o formulário está carregado num iframe.

Talvez a própria TOTVS explique isso se abrir um chamado.

---

## Resposta #6 ✅ RESPOSTA ACEITA

**Matheus Loreto** (@matheusl) — 05/08/2021, 15:31 | ❤️ 2

Abri chamado e me ofereceram consultoria paga. No meu caso, o fluxo poderá ser realizado tanto na web, quanto mobile. Queria criar um facilitador no mobile, o Approval é legal mas deixa o fluxo “estranho” para executar via web, porque o usuário terá de selecionar manualmente a tarefa destino, e não cair num gateway lógico.

Acabei optando por deixar um select com a função que preciso que execute e o botão padrão de Enviar do Mobile.

---

## Resposta #7

**system** (@system) — 06/08/2021, 07:31

Este tópico foi fechado automaticamente 16 horas depois da última resposta. Novas respostas não são mais permitidas.

---

---

# Capturar dados de aprovação no Approval

> **Fonte:** [https://fluiggers.com.br/t/capturar-dados-de-aprovacao-no-approval/594](https://fluiggers.com.br/t/capturar-dados-de-aprovacao-no-approval/594)
> **Categoria:** Mobile
> **Tags:** `form`, `bpm`, `mobile`, `app`
> **Criado em:** 03/08/2021, 09:34
> **Visualizações:** 1349 | **Likes:** 3 | **Respostas:** 2

---

## Pergunta original

**Vitor Rios** (@Vitor_Rios) — 03/08/2021, 09:34

Olá, estou desenvolvendo um processo de aprovação e meu gateway toma uma decisão conforme eu preencho um campo de meu formulário (com aprovado ou rejeitado), clico em botões que fazem o preenchimento via js e já enviam o form, porém o envio do form não acontece no app my fluig, nem no approval, porém notei que o approval tem uma função parecida, mas como capturo o resultado de aprovar ou rejeitar no approval? posso usar o aprovar e rejeitar dele para preencher meu formulário?
Queria uma documentação mais precisa do aplicativo…

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 03/08/2021, 17:22

Vitor, boa tarde!

Se entendi bem a pergunta, você pode capturar a ação nos scripts de processo:

![image](https://fluiggers.com.br/uploads/default/optimized/1X/1eaf55aed0824fb926b1b6e339a34af4e20e56b2_2_689x341.png)

Por exemplo, no caso do Approval, nós definimos os destinos do aprovar e do rejeitar no editor de diagrama; sendo assim podemos manipular o processo utilizando os eventos de processo da plataforma. Resolveria seu caso?

---

## Resposta #2

**Vitor Rios** (@Vitor_Rios) — 04/08/2021, 12:14

Acredito que sim, ambos jogam para um gateway, que se aprovado acrescenta um(+1) ao valor de um campo no formulário (se meu campo atingir determinado numero de registros ele finaliza o processo, se não ele repete o processo até que o numero de registros atinja o valor de rodadas necessárias para finalização do processo)… a cada rodada consulto um formulário que informa quem são os aprovadores da rodada…
ambos jogam para o mesmo gateway, mas como capturo se aprovou ou não dentro do gateway?

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 04/08/2021, 12:29 | ❤️ 3

O Approval é uma ferramenta que não roda com Gateway.

A ideia do Approval é você ter uma Atividade X que pode seguir pra Atividade Y (se for aprovado) ou para a Atividade Z (se for rejeitado). Então ela é uma ferramenta só pra essa bifurcação no fluxo.

Eu acabei não usando Approval nenhuma vez justamente porque aqui sempre querem que o usuário justifique o motivo de ter rejeitado a atividade.

Se for usar o Approval nessa situação você pode criar um evento na atividade “Rejeitado” e fazer esse incremento da quantidade de rejeições. E caso atinja o limite já faça o fechamento do processo. Talvez dê pra fazer isso usando os eventos beforeStateEntry pra atualizar o campo e o afterStateEntry pra definir se vai finalizar ou não.

---

## Resposta #4

**system** (@system) — 05/08/2021, 04:29

Este tópico foi fechado automaticamente 16 horas depois da última resposta. Novas respostas não são mais permitidas.

---

---

# Como debugar pelo aplicativo do my fluig?

> **Fonte:** [https://fluiggers.com.br/t/como-debugar-pelo-aplicativo-do-my-fluig/3341](https://fluiggers.com.br/t/como-debugar-pelo-aplicativo-do-my-fluig/3341)
> **Categoria:** Mobile
> **Criado em:** 08/07/2025, 10:51
> **Visualizações:** 87 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Rodrigo Vasconcelos** (@Rodrigo_Vasconcelos) — 08/07/2025, 10:51

Como debugar pelo aplicativo do my fluig?

---

## Resposta #1

**Guilherme Mesquita Rocha** (@gmesquita) — 09/07/2025, 10:32 | ❤️ 2

Olá Rodrigo, em relação ao front-end, geralmente eu vou colocando diversos consoles.log e capturo eles através do Eruda, já que ele serve como um console para mobile, assim, basta apenas importá-lo via CDN dentro do HTML do seu formulário…

```auto
<script src="https://cdn.jsdelivr.net/npm/eruda"></script>
<script>eruda.init();</script>
```

[github.com](https://github.com/liriliri/eruda)

![](https://opengraph.githubassets.com/7db826588b7dd5aab8de0ac00b452d8c/liriliri/eruda)

### [GitHub - liriliri/eruda: Console for mobile browsers](https://github.com/liriliri/eruda)

Console for mobile browsers

Em casos de eventos de workflow, acredito que através de `log.info` e `log.dir` seja o suficiente.

---

---

# Consultar Processo - MyFluig

> **Fonte:** [https://fluiggers.com.br/t/consultar-processo-myfluig/3076](https://fluiggers.com.br/t/consultar-processo-myfluig/3076)
> **Categoria:** Mobile
> **Tags:** `processo`
> **Criado em:** 04/12/2024, 08:43
> **Visualizações:** 57 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Angelo Batista** (@Angelo_Batista) — 04/12/2024, 08:43 | ❤️ 1

Atualmente assim que um processo chega a algum final, não é possível que o usuário consulte os dados do formulário pelo app MyFluig. Existe alguma forma de fazer com que a solicitação fique disponível para consulta do solicitante?

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 04/12/2024, 16:38 | ❤️ 1

A unica forma de consultar solicitações via APP é customizar um portal para consultar solicitações. nativamente o produto não possui esse tipo de funcionalidade!

---

---

# Contar a quantidade de anexos no form via mobile

> **Fonte:** [https://fluiggers.com.br/t/contar-a-quantidade-de-anexos-no-form-via-mobile/217](https://fluiggers.com.br/t/contar-a-quantidade-de-anexos-no-form-via-mobile/217)
> **Categoria:** Mobile
> **Tags:** `form`, `mobile`, `app`, `anexo`
> **Criado em:** 25/03/2021, 08:51
> **Visualizações:** 1380 | **Likes:** 3 | **Respostas:** 4

---

## Pergunta original

**Victor Castro** (@victorcastro) — 25/03/2021, 08:51 | ❤️ 1

Alguém sabe como contar a quantidade de anexos sem ser via evento de formulário? Preciso testar no **beforeSendValidate**.

Isso aqui funciona normalmente via browser. Mas no app não.

```javascript
function contaAnexos(){
	var qtdAnexos = 0;
	$.each(parent.ECM.attachmentTable.getData(), function(i,attachment) {
		qtdAnexos++;
	});

	return qtdAnexos;
}
```

---

## Resposta #1

**Romulo Pereira** (@romuloccomp) — 25/03/2021, 16:19

Victor,
Se você consegui colocar dentro do evento pode usar o hAPI.
A função retorna o numero de anexos:

```auto
hAPI.listAttachments().size();
```

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Victor Castro** (@victorcastro) — 25/03/2021, 16:30

Obrigado pela resposta, [@romuloccomp](/u/romuloccomp).

Não poderia fazer essa checagem em um evento porque, dependendo da resposta, eu abro uma janela pra interação com o usuário.

Mas, a princípio, não teve jeito. Vou deixar abaixo a solução que eu encontrei pra contornar esse problema, caso alguém precise seguir a mesma linha de raciocínio.

Criei a função “getMobile()” no displayFields pra poder ser acessada no front.

```javascript
function displayFields(form,customHTML){
	customHTML.append("<script>");
	customHTML.append("		function getMobile(){return " + form.getMobile() + "};");
	customHTML.append("</script>");
}
```

E no **beforeSendValidate** eu testo se o usuário abriu o formulário pelo app ou pelo browser (getMobile() vai retornar **true** se o usuário estiver pelo app).

Se ele estiver via browser, eu chamo a função **contaAnexos()**, que funciona normalmente (e assim, crio o modal de interação com o usuário).

Se estiver via app, eu pulei essa checagem. Então no evento **beforeStateEntry** eu testo usando o **hAPI.listAttachments()**: se tiver anexado continua o fluxo normalmente. Se não tiver anexado, vai pra atividade X cobrando o anexo (e aí ele acessa essa atividade depois, quando tiver pelo computador).

Pra contextualizar, quando o usuário estiver pelo aplicativo é porque geralmente ele está em campo, e na maioria das vezes não é possível anexar o formulário assinado.

---

## Resposta #3

**Daniel Cabral Santos** (@daniel.cabral) — 26/03/2021, 08:22 | ❤️ 1

Uma ‘alternativa’ #gambiarra poderia ser contar os anexos num evento do backend e gravar em campo oculto pra que o mobile possa trabalhar. Que acha?

---

## Resposta #4

**Victor Castro** (@victorcastro) — 26/03/2021, 08:41

O que eu tive que fazer, na prática, foi quase isso. Eu só não gravei em um campo, porque eu precisaria usar essa informação somente uma vez.

Mas me deram uma sugestão interessante aqui em off (não sei o user do cara): a cada anexo inserido, incrementar uma variável e salvar essa informação em um campo pra poder testar no form. Funcionaria também (só não sei como testar quando um anexo tiver sido incluído/excluído :joy:)

---

## Resposta #5

**Emerson Rodrigues** (@Emerson_Rodrigues) — 06/01/2022, 17:15 | ❤️ 1

Tive que fazer exatamente isso…

---

---

# DATASET - onMobileSync

> **Fonte:** [https://fluiggers.com.br/t/dataset-onmobilesync/475](https://fluiggers.com.br/t/dataset-onmobilesync/475)
> **Categoria:** Mobile
> **Criado em:** 28/05/2021, 17:51
> **Visualizações:** 393 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Davi Souza** (@Davi_Souza) — 28/05/2021, 17:51

Olá Pessoal!

Gostaria de utilizar o onMobileSync do dataset, alguem que já conseguiu fazer tem algum exemplo de como posso utilizar essa opção?

---

---

# Dados do formulário não salva ao movimentar

> **Fonte:** [https://fluiggers.com.br/t/dados-do-formulario-nao-salva-ao-movimentar/2630](https://fluiggers.com.br/t/dados-do-formulario-nao-salva-ao-movimentar/2630)
> **Categoria:** Mobile
> **Criado em:** 11/03/2024, 09:28
> **Visualizações:** 143 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Paulo Dias** (@pdias) — 11/03/2024, 09:28

Olá,
Estamos com um problema que ao preencher um processo no mobile via app My Fluig, ao movimentar a solicitação as informações que foram preenchidas não salvam. Isso não ocorre sempre, por exemplo, com a mesma solicitação ao tentar finalizar uma vez pode ser que salve, porém se tentar de novo pode ser que não salve. O que reparei no server.log de diferente em uma que deu certo e uma que deu errado é isso:

Solicitação que não salvou as informações:

# [](#p-5771-saving-card-process-aprov_ordem_servico-instance-77842-sequence-9-dados-wdkcontrolmobtrue-wkmobiletrue-1)Saving card. Process: Aprov\_ordem\_servico, Instance: 77842, Sequence: 9, Dados: {wdkcontrolmob=true, WKMobile=true}

Solicitação que salvou as informações:

# [](#p-5771-saving-card-process-aprov_ordem_servico-instance-77842-sequence-9-dados-isigbaserespfimos-fsigbaserespfimos-sigbasemanuini-asigbasemanufim-nomemanuini-isigbaserespfim-pmocattextarea-2)Saving card. Process: Aprov\_ordem\_servico, Instance: 77842, Sequence: 9, Dados: {IsigBaserespFimOs=, FsigBaserespFimOs=, sigBasemanuIni=, AsigBasemanuFim=, nomeManuIni=, IsigBaserespFim=, PMOCAtTextArea=}

A diferença é que a solicitação que salva as informações ele passa todos os campos do formulário, enquanto a que não salva ele só passa esses dois campos de mobile.

Alguém já passou por algo parecido?

---

---

# Dúvida Dataset Offline

> **Fonte:** [https://fluiggers.com.br/t/duvida-dataset-offline/1294](https://fluiggers.com.br/t/duvida-dataset-offline/1294)
> **Categoria:** Mobile
> **Tags:** `dataset`, `mobile`
> **Criado em:** 01/09/2022, 09:31
> **Visualizações:** 802 | **Likes:** 3 | **Respostas:** 0

---

## Pergunta original

**Guilherme Carvalho** (@guiza1carvalho) — 01/09/2022, 09:31

Pessoal, bom dia.
Tudo bem?

Estou criando meu primeiro Dataset offline seguindo alguns que encontrei e a documentação ([Sincronização de datasets - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=212899013)) também.

Eu consegui finalizar ele, colocar como offline, sincronizar ele funciona 100% online mas offline não carrega, alguém poderia me ajudar?

Segue informações do Dataset:

```
function defineStructure() {

      addColumn("NOME");
      addColumn("LOGIN");
      addColumn("EMAIL");
      setKey([ "NOME" ]);
      addIndex([ "NOME" ]);

     }

  function onSync(lastSyncDate) {

   var dataset = DatasetBuilder.newDataset();

   dataset.addColumn("NOME");
   dataset.addColumn("LOGIN");
   dataset.addColumn("EMAIL");

  var datasetProdutores = DatasetFactory.getDataset("dsProdutores", null, null, null);

  for(j = 0; j < datasetProdutores.rowsCount; j++) {

     var produtorNome = datasetProdutores.getValue(j, "nome");
     var produtorLogin = datasetProdutores.getValue(j, "login");
     var produtorEmail = datasetProdutores.getValue(j, "email");

      dataset.addRow(new Array(produtorNome, produtorLogin, produtorEmail));

       }

              return dataset;

       }

      function createDataset(fields, constraints, sortFields) {

       var dataset = DatasetBuilder.newDataset();

       dataset.addColumn("NOME");
       dataset.addColumn("LOGIN");
       dataset.addColumn("EMAIL");

       var datasetProdutores = DatasetFactory.getDataset("dsProdutores", null, null, null);

       for(j = 0; j < datasetProdutores.rowsCount; j++) {

          var produtorNome = datasetProdutores.getValue(j, "nome");
          var produtorLogin = datasetProdutores.getValue(j, "login");
          var produtorEmail = datasetProdutores.getValue(j, "email");

         dataset.addRow(new Array(produtorNome, produtorLogin, produtorEmail));

         }

        return dataset;

         }

         function onMobileSync(user) {

          var sortFields = new Array();
          var constraints = new Array();
          var produtoresNomes = new Array('NOME');
          var result = { 'fields' : produtoresNomes, 'constraints' : constraints, 'sortFields' :
          sortFields };

          return result;

           }
```

![Sincronização](https://fluiggers.com.br/uploads/default/optimized/1X/62c353a6d1e7b2f7d14d012d84157ea3129569cc_2_690x308.jpeg)

![Mobile](https://fluiggers.com.br/uploads/default/original/1X/1954b3d35327080c2f3984a699d936f963cd8df7.jpeg)

![Dataset](https://fluiggers.com.br/uploads/default/optimized/1X/54af6fee2b30667a090cc9fe6b993abb41d29ec2_2_690x222.jpeg)

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Guilherme Carvalho** (@guiza1carvalho) — 01/09/2022, 10:33 | ❤️ 3

Me ajudaram na solução do problema aqui, como era meu primeiro eu não tinha usado a associação de dataset offline ainda, fiz a exportação do formulario associando o Dataset e funcionou normal.

![image](https://fluiggers.com.br/uploads/default/original/1X/4e5ebd97e1c38480e7358016ac53369d04917d9d.png)

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 01/09/2022, 11:44


---

---

# Falha de login no Approval com AD Integrado

> **Fonte:** [https://fluiggers.com.br/t/falha-de-login-no-approval-com-ad-integrado/88](https://fluiggers.com.br/t/falha-de-login-no-approval-com-ad-integrado/88)
> **Categoria:** Mobile
> **Tags:** `approval`, `active-directory`, `activedirectory`
> **Criado em:** 12/03/2021, 18:15
> **Visualizações:** 660 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 12/03/2021, 18:15 | ❤️ 1

Caso possua o login integrado com Active Directory e não consiga logar no Approval com a credencial do AD, comente o seguinte trecho do domain.xml (orientação do suporte TOTVS):

```auto
<login-module code="com.totvs.foundation.auth.FoundationDatabaseServerLoginModule"
            	flag="sufficient"
            	module="com.totvs.foundation.auth">
	<module-option name="hashAlgorithm"
             		value="MD5"/>
	<module-option name="hashEncoding"
             		value="HEX"/>
	<module-option name="principalClass"
             		value="com.totvs.technology.foundation.common.TOTVSTechPrincipal"/>
</login-module>
```

---

---

# Layout com menus nav não são exibidos

> **Fonte:** [https://fluiggers.com.br/t/layout-com-menus-nav-nao-sao-exibidos/1521](https://fluiggers.com.br/t/layout-com-menus-nav-nao-sao-exibidos/1521)
> **Categoria:** Mobile
> **Criado em:** 28/11/2022, 17:26
> **Visualizações:** 294 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Wasley Santos** (@Wasley_Santos) — 28/11/2022, 17:26

Galera criei uma página com menus e dentro de cada menu adicionei widgets. No navegador funciona perfeitamente, já no mobile ele não apresenta os menus e demonstra toda sas widget em uma única visualização.
Sabe se existe alguma incompatibilidade? Já tentei usando navbar, nav-tab, no navegador ambas funcionando mas no mobile tem gerado esse problema.

---

---

# Não consigo acessar página pelo fluig mobile

> **Fonte:** [https://fluiggers.com.br/t/nao-consigo-acessar-pagina-pelo-fluig-mobile/737](https://fluiggers.com.br/t/nao-consigo-acessar-pagina-pelo-fluig-mobile/737)
> **Categoria:** Mobile
> **Tags:** `mobile`
> **Criado em:** 22/10/2021, 15:17
> **Visualizações:** 570 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 22/10/2021, 15:17

Boa tarde. Criei uma página e queria acessar a mesma no mobile via app my fluig, já habilitei a opção de application.mobileapp=true no application.info e a opção ![image](https://fluiggers.com.br/uploads/default/original/1X/a7243b31db0b6e30cb099fbd71d79b51f617b8e2.png)

Notei que deveria aparecer uma opção no app “Minhas Páginas”, porém aqui não aparece.

---

---

# Permissão para acessar Fluig Mobile - MyFluig

> **Fonte:** [https://fluiggers.com.br/t/permissao-para-acessar-fluig-mobile-myfluig/3381](https://fluiggers.com.br/t/permissao-para-acessar-fluig-mobile-myfluig/3381)
> **Categoria:** Mobile
> **Criado em:** 20/08/2025, 12:32
> **Visualizações:** 42 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Rahyan Ramos** (@Ramos) — 20/08/2025, 12:32

Boa tarde, pessoal! Tudo bem?

Estou desenvolvendo um processo no **Fluig** que será utilizado principalmente pelo aplicativo mobile **MyFluig**.
No entanto, alguns usuários estão enfrentando problemas de acesso: após realizar o login no app, a tela fica completamente branca e nenhum componente é carregado.

Durante alguns testes, percebi que ao atribuir o papel **Admin** ao usuário, o acesso passa a funcionar normalmente. Porém, como sabemos, esse não é um papel que pode ser liberado para qualquer pessoa.

Minha suspeita é que exista alguma permissão padrão vinculada ao papel **Admin** que esteja habilitando o acesso ao mobile, mas ainda não consegui identificar qual seria.

Alguém já passou por essa situação ou sabe indicar por qual caminho devo seguir para resolver esse problema de permissões?

---

## Resposta #1

**Pietro** (@pietro) — 27/08/2025, 15:52

Boa tarde, tudo certo e contigo?

Pega uma conta limpa (sem acesso algum) para testar, e abre o my fluig, ao ocorrer o problema, baixa/abre o log, dependendo da sua plataforma (windows/linux, acesso local ou remoto), pode ser pelos parametros mesmo, lá aparece os erros de falta de permissão, só puxar as permissões na aba permissões do fluig.

Aqui ambas abas:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/b/b4285d9cad665ce670c974a249a482ade8437680_2_690x319.png)

Dentro do log é só clicar para baixar o log.

Não tenho o erro em mãos, mas vai ser uma stack trace padrão do Java, próximo a isso:

permissionDenied GET - URL\_DA\_API\_NEGADA
Só pegar por niveis (separa por ‘/’) e pesquisar na aba de permissões.

Dentro de permissões, pode pesquisar pelo input fornecido por padrão ou só usar ctrl + F

![image](https://fluiggers.com.br/uploads/default/optimized/2X/6/6c14dcef9da9be87327be35be404e70429b60ab3_2_690x435.png)

Entra na categoria e de acesso na api especifica com o erro ou na categoria por completo, depende como é gerenciado o acesso na sua empresa e se é publico ou não, caso um seleto grupo tenha acesso ao mobile, informe ele lá.

Caso precise de mais informações procura a FAQ de permissões:
[Plataforma ❙ Permissões - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=234455792)

Se precisar de mais algo ou não ter entendido é só avisar!

Att,
Pietro P. W.

---

---

# Problema no app após a atualização de segurança no Lake

> **Fonte:** [https://fluiggers.com.br/t/problema-no-app-apos-a-atualizacao-de-seguranca-no-lake/208](https://fluiggers.com.br/t/problema-no-app-apos-a-atualizacao-de-seguranca-no-lake/208)
> **Categoria:** Mobile
> **Tags:** `mobile`, `app`, `oauth`
> **Criado em:** 23/03/2021, 17:34
> **Visualizações:** 1204 | **Likes:** 3 | **Respostas:** 3

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 23/03/2021, 17:34 | ❤️ 1

Galera, alguém ficou sem conseguir usar o app após aquela atualização emergencial de segurança?

O app loga mas não faz mais nada…qualquer link gera o erro:

![print app](https://fluiggers.com.br/uploads/default/optimized/1X/db99c69bc4a6e96abdd36bd6fa83629f367db8b1_2_230x500.png)

E no server.log:

```auto
signature_invalid: net.oauth.OAuthProblemException: signature_invalid
oauth_problem: signature_invalid
oauth_signature: MiQn5mHdUUCrFnMvJ4sToYdsNEU=
oauth_signature_base_string: GET&http%3A%2F%2Ffluig.(editado).com.br%2Fauthentication%2Fapi%2Fv1%2Flogin%2Fmobile&oauth_consumer_key%3D663fe6cc-8914-4853-86c1-e723b5c1b4f7%26oauth_nonce%3D8E4CFBC3BD8C459DB235F2691CF2A2F8%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D1616520918%26oauth_token%3Dd4dcd84e-899c-4635-acf6-f493d5750fde%26oauth_version%3D1.0
oauth_signature_method: HMAC-SHA1
```

Pensei ter ligação com o tópico [Falha de login no Approval com AD Integrado](https://fluiggers.com.br/t/falha-de-login-no-approval-com-ad-integrado/88/2) mas o domain.xml já não possui tal trecho.

Alguém pegou isso?

Valeu, galera!

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 24/03/2021, 14:25

Estou utilizando o APP full em um projeto ja com a 1.7.0 e não tenho problemas, seria links externos.

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 24/03/2021, 14:37

Externo ou interno, o problema acontece de todo jeito…

---

## Resposta #3

**Daniel Cabral Santos** (@daniel.cabral) — 24/03/2021, 15:07

Tem chamado na TOTVS aberto, posto aqui o desfecho!

---

## Resposta #4

**Bruno Araujo** (@brunotda) — 19/08/2021, 12:24

[@daniel.cabral](/u/daniel.cabral) Conseguiu resolver este problema? Não encontro muitas informações sobre este item além desta sua publicação.

---

## Resposta #5

**Daniel Cabral Santos** (@daniel.cabral) — 19/08/2021, 15:15

Cara, nada ainda…o chamado foi pro limbo. Abriu chamado aí também?

---

## Resposta #6

**Bruno Araujo** (@brunotda) — 24/08/2021, 10:55

Não abri chamado ainda, mas acredito que vai ser necessário.
Não encontrei notas de atualização mencionando impacto e os arquivos estão configurados corretamente.

---

## Resposta #7

**Daniel Cabral Santos** (@daniel.cabral) — 07/03/2022, 14:38

[@brunotda](/u/brunotda) , por acaso resolveu este problema? Aqui ele persiste, mesmo após duas atualizações de versão.

---

## Resposta #8

**Allan Reichert** (@allan.reichert) — 07/03/2022, 15:23

Olá,

Tive problema a um tempo atrás no mobile com https, só autenticava via http. Reinstalei o certificado pelo WCMadmin e resolveu.

---

## Resposta #9

**Igor Rodrigues** (@fluigor.com.br) — 20/07/2022, 13:31 | ❤️ 2

[@daniel.cabral](/u/daniel.cabral)

Importante ressaltar a importância do pfx configurado no WCMadmin conter o bundle com os certificados intermediarios para o mobile, recentemente tive muitos problemas com componentes que utilizavam chamadas pelo mobile, e tive que atualizar o certificado intermediario.

o erro que eu tinha é o mesmo apresentado no seu print

att

---

---

# Problema zoom no mobile (offline)

> **Fonte:** [https://fluiggers.com.br/t/problema-zoom-no-mobile-offline/262](https://fluiggers.com.br/t/problema-zoom-no-mobile-offline/262)
> **Categoria:** Mobile
> **Criado em:** 30/03/2021, 15:03
> **Visualizações:** 540 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Paulo Dias** (@pdias) — 30/03/2021, 15:03

Boa tarde, estou enfrentando problema para trabalhar com o campo zoom no mobile (offline), está tudo sincronizado conforme a documentação, porém quando deixo o dispositivo offline o campo zoom não traz resultados.
Alguém está passando por esse problema?

![Screenshot_20210330-145122](https://fluiggers.com.br/uploads/default/optimized/1X/8a2bda3df9ad89bf2de88ff19ce6ede587768dc7_2_258x500.png)

---

## Resposta #1

**The Cool** (@The_Cool) — 31/03/2023, 14:45

Oi, Estou com o mesmo problema com formulários que usam zoom no mobile, já existe solução?

---

---

# QR Code - Mobile

> **Fonte:** [https://fluiggers.com.br/t/qr-code-mobile/393](https://fluiggers.com.br/t/qr-code-mobile/393)
> **Categoria:** Mobile
> **Tags:** `mobile`, `app`
> **Criado em:** 26/04/2021, 16:51
> **Visualizações:** 526 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Willian Laynes** (@Willian_Laynes) — 26/04/2021, 16:51

Boa tarde Pessoal,

Vocês sabem se o Fluig consegue ler QR Code pela camera?

Grato;

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Willian Laynes** (@Willian_Laynes) — 26/04/2021, 17:08 | ❤️ 2

Achei, nessa ultima versão do fluig -
[https://tdn.totvs.com/pages/releaseview.action?pageId=559498199](https://tdn.totvs.com/pages/releaseview.action?pageId=559498199)

---

## Resposta #2

**system** (@system) — 27/04/2021, 09:09

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---

---

# Redirecionar Widget para solicitação aberta em modo de edição mobile (MyFluig)

> **Fonte:** [https://fluiggers.com.br/t/redirecionar-widget-para-solicitacao-aberta-em-modo-de-edicao-mobile-myfluig/3143](https://fluiggers.com.br/t/redirecionar-widget-para-solicitacao-aberta-em-modo-de-edicao-mobile-myfluig/3143)
> **Categoria:** Mobile
> **Tags:** `mobile`
> **Criado em:** 29/01/2025, 14:33
> **Visualizações:** 79 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Victor Santos Henrique** (@Victor.S.Henrique) — 29/01/2025, 14:33

Olá! Estou tentando encaminhar a url no MyFluig, de uma widget para uma solicitação aberta, já em modo de edição. Tenho o seguinte código, funciona perfeitamente no navegador, mas no app encaminha apenas no modo VIEW sem possibilidade de assumir a tarefa, mesmo sendo o usuário responsável.

```auto
newInspectionRequest: async function (fields) {
    try {
        const proc = await this.startProcess('wkfFireExtinguishers', 5, WCMAPI.userCode, "Processo Iniciado Via Widget de Manutenção", fields);
        const newRequestCode = proc.processInstanceId;
        const url = new URL(`${WCMAPI.serverURL}${WCMAPI.contextPath}/p/${WCMAPI.tenantPATH}/pageworkflowview`);

        url.searchParams.append(`app_ecm_workflowview_processInstanceId`, newRequestCode);
        url.searchParams.append('app_ecm_workflowview_currentMovto', "2");
        url.searchParams.append('app_ecm_workflowview_taskUserId', WCMAPI.userCode);
        url.searchParams.append('app_ecm_workflowview_managerMode', "false");

        window.location.assign(url);
    }
    catch (e) {
        console.log("🚀 ~ e:", e);
        throw new Error("Erro ao abrir solicitação");
    }
},
```

---

## Resposta #1

**Mauricio Freitas** (@mauriciolanner) — 03/09/2025, 07:16

Achoou alguma solução para isso?

---

## Resposta #2

**João Paulo Machado Benevides** (@Joao_Paulo_Machado_B) — 06/11/2025, 12:17

Conseguiu resolver ? estou tendo o mesmo problema

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 13/11/2025, 10:27

Tenta dessa forma

```javascript
window.location.href=WCMAPI.getServerURL()+'/portal/p/1/pageworkflowview?app_ecm_workflowview_processInstanceId='+aux.processoid+"&app_ecm_workflowview_currentMovto="+aux.NUM_SEQ_MOVTO+"&app_ecm_workflowview_taskUserId="+aux.CD_MATRICULA;
```

---

---

# Request confirm no enviar do App MyFluig

> **Fonte:** [https://fluiggers.com.br/t/request-confirm-no-enviar-do-app-myfluig/3007](https://fluiggers.com.br/t/request-confirm-no-enviar-do-app-myfluig/3007)
> **Categoria:** Mobile
> **Tags:** `form`
> **Criado em:** 03/10/2024, 22:07
> **Visualizações:** 24 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Lucas Lima** (@Lukdev) — 03/10/2024, 22:07

Estou tentando fazer aparecer um confirm para o usuario no momento de clicar em “enviar” pelo mobile. Ja tentei utilizar o FLUIGC.message.confirm, o problema é que o comportamento dessa funcao nao é muito legal porque ao clicar em enviar na aba Decisão eu preciso voltar no formulario para aparecer o modal do confirm. Eu queria que o confirm aparecesse no momento do enviar sem precisar voltar no formulario.

Procurei na net sobre isso mas nao achei nada alem do confirm nativo do js, mas esse funcionou apenas no android, no IOS ele ignora e enviar sem aparecer o confirm. Estou chamando ele no beforeSendValidate, alguem pode dar uma ajuda?

---

---

# Sobre a categoria Mobile 

> **Fonte:** [https://fluiggers.com.br/t/sobre-a-categoria-mobile/30](https://fluiggers.com.br/t/sobre-a-categoria-mobile/30)
> **Categoria:** Mobile
> **Criado em:** 11/03/2021, 13:48
> **Visualizações:** 325 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Igor Rodrigues** (@fluigor.com.br) — 11/03/2021, 13:48

(Substitua este primeiro parágrafo por uma breve descrição de sua nova categoria. Esta orientação aparecerá na área de seleção da categoria, então tente mantê-la abaixo de 200 caracteres.)

Use os parágrafos a seguir para uma descrição mais longa, ou para estabelecer as instruções ou regras da categoria:

-   Por que as pessoas devem usar essa categoria? Para que ela serve?

-   Como exatamente ela é diferente das outras categorias que já existem?

-   O que os tópicos nessa categoria devem conter, em geral?

-   Precisamos dessa categoria? Podemos juntá-la com outra categoria ou subcategoria?

---

---

# Tabela pai e filho mobile

> **Fonte:** [https://fluiggers.com.br/t/tabela-pai-e-filho-mobile/876](https://fluiggers.com.br/t/tabela-pai-e-filho-mobile/876)
> **Categoria:** Mobile
> **Criado em:** 17/01/2022, 16:07
> **Visualizações:** 501 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Rodrigo Miranda** (@Rodrigo_Miranda) — 17/01/2022, 16:07 | ❤️ 2

Boa tarde

Estou tempo um problema no fluig mobile na tabela pai e filho, onde tenho pampos ocultos que cpnsegui ocultar mais fica um espaço em branco para cada linha como se os campo oculto tivesse la mais nao mostra eles somente o espaço alguem sabe como remover?

---

---
