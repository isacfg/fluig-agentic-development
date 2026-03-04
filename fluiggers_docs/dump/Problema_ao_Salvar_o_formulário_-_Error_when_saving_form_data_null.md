# Problema ao Salvar o formulário - Error when saving form data: null

> **Fonte:** [https://fluiggers.com.br/t/problema-ao-salvar-o-formulario-error-when-saving-form-data-null/1634](https://fluiggers.com.br/t/problema-ao-salvar-o-formulario-error-when-saving-form-data-null/1634)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`, `bpm`
> **Criado em:** 10/02/2023, 11:05
> **Visualizações:** 723 | **Likes:** 1 | **Respostas:** 2

---

## Pergunta original

**Gillead Natan Moreira Gonçalves** (@Gillead_Natan_Moreir) — 10/02/2023, 11:05

![image](https://fluiggers.com.br/uploads/default/optimized/1X/d0786cf5b9465ba563b604e367bae00ab15634d6_2_690x293.png)

Isso tem acontecido, depois que add um linha child da tabela pai x fiho.

Obs:

Detalhe, isso aconteceu depois que eu acrescentei o calendário na minha tabela Pai x Filho

Alguém pode me ajudar para resolver esse Problema ?

HTML

```
<!-- OPENING DE DISCIPLINA -->

													<td style="vertical-align: middle; text-align: center; padding-top:5px; padding-bottom: 5px;">
														<div class="input-group date" id="DATAABERTDISCEX1" >
															<span class="input-group-addon"><i class="flaticon flaticon-calendar icon-md"
																	aria-hidden="true"></i></span>
															<input type="text" id="DATAABERTDISCEX" name="DATAABERTDISCEX" class="form-control data ocultin datacalendario "
																placeholder="Selecione Data" title="DATAABERTDISCEX" style="text-align:center">
														</div>
													</td>
```

Javascript

function childAdd(tablename){

```
console.log(tablename)

//wdkAddChild função padrão do fluig para incluir uma linha na tabela informada no parâmetro

var rowtb1 = wdkAddChild(tablename);

var mySpanishCalendar = FLUIGC.calendar('.datacalendario',{
    language: 'pt-br'
});


return rowtb1
```

}

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 10/02/2023, 11:24

Opa! Tem algum detalhe no server.log? Geralmente na pilha do erro há alguma “camada” que nos dê mais informação do que aconteceu.

---

## Resposta #2

**Gillead Natan Moreira Gonçalves** (@Gillead_Natan_Moreir) — 15/02/2023, 12:08

2023-02-15 06:55:33,555 INFO \[com.datasul.technology.webdesk.dm.service.DocumentServiceDelegate\] (default task-2670) companyId 1 documentId 117 colleagueId gillead.goncalves
2023-02-15 06:55:33,941 INFO \[com.datasul.technology.webdesk.dm.service.DocumentServiceDelegate\] (default task-2670) Document converted 14 Fevereiro, 2023 - Gillead Gonçalves
2023-02-15 06:55:34,021 INFO \[com.datasul.technology.webdesk.workflow.business.WorkflowBO\] (default task-2670) # Saving card. Process: Process\_OfertadeCurso\_0001, Instance: 42, Sequence: 322, Dados: {atvppc=194, ID\_MODALIDADE=Presencial, DATAMATRIIN=02/02/2023, COD\_PERLET\_TXT=, ID\_ANEXADO\_PCC\_POS=, COD\_REDUZIDO\_TXT=, TIPO\_OFERT\_POS=Normal, COMPONENTADDtxt=, MODALIDADEtxt=P, DISCNOVAtxt=, NIVEL\_ENSINO\_TXT=, DATAFECHACOMP=, DISCIPLINASEX=, CHDISC=, NOMECOMP=, NIVEL\_ENSINO=Pós graduação Lato Sensu, TIPO\_OFERT\_POStxt=01, DATAFECHADISCEX=, CAMPUS\_ID=, DEPARTAMENTO=, PARCELPOS=, DATAMATRIFIM=31/01/2023, Cobincomp=, CHCOMP=, Aulain=08/02/2023, DATAABERTDISCEX=, CHDISC\_\_\_1=50, MATRIZ=, INSTITUICAOIASD=, CHDISCNV=, DISCIPLINASEX\_\_\_1=A Arte de Liderar e Inspirar, COD\_PERLET=, DATAABERTCOMP=, DISCNOVA=, CODFILIAL\_TXT=, COD\_TURMA=, DIASAULA=Seg, TIPO\_CONTR\_DOCENT=PJ - Pessoa Jurídica, DATAABERTDISCEX\_\_\_1=16/02/2023, TURNO=Matutino, DATAFECHADISCEX\_\_\_1=13/02/2023, ANEXADO\_PPC\_POStxt=N, NivelEnsino\_txt=, DATAABERTDISCNV=, DATAFECHADISCNV=}
2023-02-15 06:55:34,637 ERROR \[org.jboss.as.ejb3.invocation\] (default task-2670) WFLYEJB0034: EJB Invocation failed on component wdk/CardFieldML for method public int com.datasul.technology.webdesk.forms.business.CardFieldMetaList.createCardFields(com.datasul.technology.webdesk.dm.model.Document,java.util.Map) throws java.lang.Exception: javax.ejb.EJBTransactionRolledbackException
at org.jboss.as.ejb3@18.0.1.Final//org.jboss.as.ejb3.tx.CMTTxInterceptor.invokeInCallerTx(CMTTxInterceptor.java:203)

.
.
.
.
.

Causa:

Caused by: java.lang.NullPointerException

2023-02-15 06:55:34,777 ERROR \[com.fluig.ecm.workflow.service.ProcessAttachmentServiceBean\] (default task-2670) Error when saving form data: null: javax.ejb.EJBTransactionRolledbackException
at org.jboss.as.ejb3@18.0.1.Final//org.jboss.as.ejb3.tx.CMTTxInterceptor.invokeInCallerTx(CMTTxInterceptor.java:203)
at org.jboss.as.ejb3@18.0.1.Final//org.jboss.as.ejb3.tx.CMTTxInterceptor.required(CMTTxInterceptor.java:364)
at org.jboss.as.ejb3@18.0.1.Final//org.jboss.as.ejb3.tx.CMTTxInterceptor.processInvocation(CMTTxInterceptor.java:144)
at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext.proceed(InterceptorContext.java:422)
at org.jboss.invocation@1.5.2.Final//org.jboss.invocation.InterceptorContext$Invocation.proceed(InterceptorContext.java:509)
at org.jboss.weld.core@3.1.2.Final//org.jboss.weld.module.ejb.AbstractEJBRequestScopeActivationInterceptor.aroundInvoke(AbstractEJBRequestScopeActivationInterceptor.java:72)

causa:

Caused by: java.lang.NullPointerException
at deployment.fluig-server.ear.ecm-ejb.jar//com.datasul.technology.webdesk.forms.business.CardFieldMetaList.createOrUpdateFields(CardFieldMetaList.java:290)
at deployment.fluig-server.ear.ecm-ejb.jar//com.datasul.technology.webdesk.forms.business.CardFieldMetaList.createCardFields(CardFieldMetaList.java:266)
at deployment.fluig-server.ear.ecm-ejb.jar//com.datasul.technology.webdesk.forms.business.CardFieldMetaList.createCardFields(CardFieldMetaList.java:192)
at jdk.internal.reflect.GeneratedMethodAccessor4416.invoke(Unknown Source)

---

## Resposta #3

**Gillead Natan Moreira Gonçalves** (@Gillead_Natan_Moreir) — 15/02/2023, 13:06

[@daniel.cabral](/u/daniel.cabral) esta ai o que solicitou, será por que esta acontecendo isso ?

---

## Resposta #4

**Gillead Natan Moreira Gonçalves** (@Gillead_Natan_Moreir) — 01/03/2023, 07:51 | ❤️ 1

Foi realizada a solução, da seguinte forma. Renomei a tablename e id da tabela PaixFilho. E então foi permitido enviar o processo.

---
