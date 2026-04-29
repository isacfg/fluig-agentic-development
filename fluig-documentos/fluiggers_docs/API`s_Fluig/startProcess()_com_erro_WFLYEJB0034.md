# startProcess() com erro WFLYEJB0034

> **Fonte:** [https://fluiggers.com.br/t/startprocess-com-erro-wflyejb0034/1081](https://fluiggers.com.br/t/startprocess-com-erro-wflyejb0034/1081)
> **Categoria:** API`s Fluig
> **Tags:** `bpm`, `fluigapi`
> **Criado em:** 13/05/2022, 11:24
> **Visualizações:** 1390 | **Likes:** 4 | **Respostas:** 2

---

## Pergunta original

**Eustaquio Ferreira** (@Eustaquio_Ferreira) — 13/05/2022, 11:24 | ❤️ 1

Bom dia pessoal.

Estou trabalhando em um processo que iniciara alguns outros.
criei um afterTask para o processo pai e chamo o hAPI.startProcess() mas recebo esse erro.

```auto
2022-05-13 11:05:48,857 ERROR [org.jboss.as.ejb3.invocation] (default task-950) WFLYEJB0034: EJB Invocation failed on component wdk/Card for method public abstract void com.datasul.technology.webdesk.dm.business.DocumentAbstractBI.setFieldValues(java.util.Map): javax.ejb.EJBTransactionRolledbackException
```

abaixo segue meu after task caso alguém possa me ajudar.

```auto
function afterTaskComplete(colleagueId,nextSequenceId,userList){

  log.info('LOG FIND --- AfterTASK21 	VERSION 0001');

  log.info(nextSequenceId)
	// try {
  if(nextSequenceId == 21){

    var numeroProcesso = getValue("WKNumProces");
    log.info('LOG FIND --- Nº processo: ' + numeroProcesso);
    var data_solicitacao = hAPI.getCardValue('dataSolicitacao');

    var codigo_solicitante = hAPI.getCardValue('codigoSolicitante');
    var nome_solicitante = hAPI.getCardValue('solicitanteNome');

    log.info('LOG FIND --- Codigo solicitante: ' + codigo_solicitante);
    log.info('LOG FIND --- Solicitante: ' + nome_solicitante);

    var data_finalizacao = hAPI.getCardValue("dataEntrega");

    //Pega o CardData do processo Pai
    var cardData = hAPI.getCardData(numeroProcesso);
    var keys = cardData.keySet().toArray();
    log.info(keys);


    for (var key in keys) {
      var field = keys[key];
      if (field.indexOf("ANALISTACOD___") > -1 && (cardData.get(field) != '')) {
        log.info('LOG FIND --- index: ' + field);


        var analistaNome = hAPI.getCardValue(field.replace('ANALISTACOD', 'analistaNome'));
        var analistaCod = hAPI.getCardValue(field.toLowerCase());

        log.info('LOG FIND --- analista: ' + analistaNome);
        log.info('LOG FIND --- analista: ' + analistaCod);

        var users = new java.util.ArrayList();
        users.add(analistaCod);
        log.info(users);
        var formData = new java.util.HashMap();
        formData.put("solic_codigo", codigo_solicitante);
        formData.put("analista_codigo", analistaCod);
        formData.put("solicitante_nome", nome_solicitante);
        formData.put("analista_nome", analistaNome);
        formData.put("data_entrega", data_finalizacao);
        formData.put("num_solic_admissao", numeroProcesso);

        log.info(formData);
        hAPI.startProcess("cadastrodecandidatos", 0, users, "Solicitação de candidatos ", true, formData, false);

      }
    }
  }
	// } catch (error) {

	// 	log.info('LOG FIND --- ERROR:  ');

	// 	log.info(error);

	// }
}
```

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Eustaquio Ferreira** (@Eustaquio_Ferreira) — 13/05/2022, 14:13 | ❤️ 1

A resolução foi acrescentar um .toString() na linha :

```auto
formData.put("num_solic_admissao", numeroProcesso);
```

ficando assim:

```auto
formData.put("num_solic_admissao", numeroProcesso.toString());
```

:clown_face:

---

## Resposta #2

**alexsunny** (@alexsunny123) — 14/07/2022, 05:43 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/eustaquio_ferreira/48/636_2.png) Eustaquio\_Ferreira:
>
> > The resolution was to add a .toString() to the line:
> >
> > ```auto
> > formData.put("num_solic_admissao", numeroProcesso);
> > ```
> >
> > looking like this:
> >
> > ```auto
> > formData.put("num_solic_admissao", numeroProcesso.toString());
> > ```

thanks my issue has been fixed.

---

## Resposta #3

**alexsunny** (@alexsunny123) — 22/03/2023, 01:01 | ❤️ 1

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/a/51bf81/48.png) alexsunny123:
>
> > > ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/eustaquio_ferreira/48/636_2.png) Eustaquio\_Ferreira:
> > >
> > > > The resolution was to add a .toString() to the line:
> > > >
> > > > ```auto
> > > > formData.put("num_solic_admissao", numeroProcesso);
> > > > ```
> > > >
> > > > looking like this:
> > > > [https://ometv.onl](https://ometv.onl) [https://chatroulette.top](https://chatroulette.top)
> > > >
> > > > ```auto
> > > > formData.put("num_solic_admissao", numeroProcesso.toString());
> > > > ```
> >
> > thanks my issue has been fixed.

thanks for the awesome information.

---
