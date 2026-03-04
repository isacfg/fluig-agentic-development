# Integração de movimento RM X Fluig

> **Fonte:** [https://fluiggers.com.br/t/integracao-de-movimento-rm-x-fluig/1881](https://fluiggers.com.br/t/integracao-de-movimento-rm-x-fluig/1881)
> **Categoria:** Sem categoria
> **Tags:** `processo`, `fluig`, `rm`, `webservice`, `integração`
> **Criado em:** 26/04/2023, 11:35
> **Visualizações:** 1444 | **Likes:** 6 | **Respostas:** 2

---

## Pergunta original

**Rafael Oliveira** (@roliveira) — 26/04/2023, 11:35

Pessoal, bom dia!
Preciso muito da ajuda dos amigos aqui.

Tenho um processo no Fluig onde o mesmo é iniciado no RM.
O movimento ao ser criado no RM, é gerado um IDFLUIG.
No Fluig, ao pesquisar a solicitação através do IDFLUIG gerado, é possível encontrar a solicitação para realizar as movimentações necessárias, APROVAR ou REPROVAR.

DÚVIDAS:

-   Ao REPROVAR a solicitação, é possível via integração atualizar o status do movimento no RM para CANCELADO?

-   Qual serviço devo utilizar para executar esta tarefa, MOVMOVIMENTOTBCDATA (SaveRecord) ou MovCancelMovProc?

-   Caso seja o MovCancelMovProc, onde encontrar uma documentação para utilizá-lo?


MovCancelMovProc foi dica de um amigo em um grupo de Whatsapp, porém não encontro a documentação na internet.

---

## Resposta #1

**Eduardo Vantini Neto** (@eduardo.vantini) — 26/04/2023, 14:26 | ❤️ 1

Olá, para cancelar o movimento você deve usar o MovCancelMovProc.
Você vai usar o webservice wsProcess, método executeWithParams.
Use o xml

```auto
<MovCancelMovProcParams>
      <MovimentosACancelar>
          <MovimentosCancelar>
              <ApagarMovRelac>false</ApagarMovRelac>
              <CancelarMovimentosGeradosSimultFaturamento>true</CancelarMovimentosGeradosSimultFaturamento>
              <CodColigada>{CODCOLIGADA}</CodColigada>
              <CodSistemaLogado>T</CodSistemaLogado>
              <CodUsuarioLogado>{CODCOLIGADA}</CodUsuarioLogado>
              <DataCancelamento>{DATACANCELAMENTO}</DataCancelamento>
              <IdExercicioFiscal>{EXERCICIOFISCAL}</IdExercicioFiscal>
              <IdMov>{IDMOV}</IdMov>
              <MotivoCancelamento></MotivoCancelamento>
              <NumeroMov />
          </MovimentosCancelar>
      </MovimentosACancelar>
</MovCancelMovProcParams>
```

Desse jeito vai cancelar o movimento.

Espero que te atenda

Abs

---

## Resposta #2

**Rafael Oliveira** (@roliveira) — 26/04/2023, 14:47 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/eduardo.vantini/48/88_2.png) eduardo.vantini:
>
> > executeWithParams

Eduardo, boa tarde amigo!
Muito obrigado por sua atenção e pela ajuda.
Conseguir configurar no SOAP UI para teste. Vou criar em ambiente de homologação um movimento para teste e depois posto aqui se deu certo ou não.

---

## Resposta #3

**Rafael Oliveira** (@roliveira) — 27/04/2023, 13:01 | ❤️ 1

Eduardo, boa tarde amigo!

Pode me tirar outra dúvida caso você tenha conhecimento?

Eu conseguiria Atualizar/Editar o movimento no RM também via Fluig?

Exemplo: Inserir no campo complementar do movimento no RM um link de redirecionamento para a solicitação no Fluig e o IDFluig.

---

## Resposta #4

**Eduardo Vantini Neto** (@eduardo.vantini) — 27/04/2023, 16:25 | ❤️ 1

Olá, tudo bem? Para atualizar você vai usar o webservice wsDataServer, com o método SaveRecord.
Use o dataserver MOVMOVIMENTOTBCDATA ([View](https://api.totvs.com.br/legado/devrm/bo_rm/MOVMOVIMENTOTBCDATA.html?Objeto=MOVMOVIMENTOTBCDATA)).

E o XML

```auto
<MovMovimento >
    <TMOV>
        <CODCOLIGADA>1</CODCOLIGADA>
        <IDMOV>1</IDMOV>
    </TMOV>
    <TMOVCOMPL>
        <CODCOLIGADA>1</CODCOLIGADA>
        <IDMOV>1</IDMOV>
        <LINKFLUIG>{LINK_FLUIG}</LINKFLUIG>
    </TMOVCOMPL>
</MovMovimento>
```

Acho que assim é o suficiente. Mais da uma lida na documentação do link aí em cima que está tudo detalhado.

Abs

---

## Resposta #5

**Rafael Oliveira** (@roliveira) — 27/04/2023, 17:00

Blz Eduardo!
O SaveRecord conheço, utilizo em alguns processos aqui.
Até tentei utilizar o recurso diretamente no SOAP UI para atualizar o movimento, mas recebi a seguinte mensagem:

O Movimento não pode ser alterado devido a modificações realizadas por outro processo.

# [](#p-4412-favor-atualizar-o-registro-e-tentar-novamente-1)Favor atualizar o registro e tentar novamente.

at RM.Mov.Movimento.Alteracao.MovMovAlteracaoScl.DoLoadContextMaster(List`1 listParam) at RM.Mov.Movimento.Manutencao.MovMovManutencaoScl`1.DoLoadContext(List`1 listParam) at RM.Mov.Movimento.Alteracao.MovMovAlteracaoScl.DoLoadContext(List`1 listParam)
at RM.Lib.Subscriber.RMSSubscriberController`2.GetPackageContext(List`1 listParam, Int32 lenPackageCxt, Int32 numPack)
at RM.Lib.Subscriber.RMSSubscriberController`2.Prepare(List`1 listParam, Int32 lenPackageCxt, Object ownerData)
at RM.Mov.Movimento.MovMovimentoData.PrepareLists(MovValidateOwerData movValidate)
at RM.Lib.Server.RMSDataServer.InternalSaveRecord(RMSContext context, DataSet& dataSet, Object ownerData, Boolean skipSecurity, Boolean skipSecurityCollumns)
at RM.Lib.Server.RMSDataServer.SaveRecord(RMSContext context, DataSet& dataSet, Object ownerData)
at RM.Con.Conector.ConWSDataServer.SaveRecord(String DataServerName, String XML, String UserName, String UserPassword, String contexto, String emailUsuarioContexto)

---

## Resposta #6

**Eduardo Vantini Neto** (@eduardo.vantini) — 02/05/2023, 13:26 | ❤️ 1

[@roliveira](/u/roliveira) tudo bem? Não consegui reproduzir exatamente esse erro. O movimento é originado no Nucleus? Da uma olhada no campo tmov.integraaplicacao. Se for originado em outro módulo não vai alterar.

At.

---

## Resposta #7

**Rafael Oliveira** (@roliveira) — 02/05/2023, 13:43

Boa tarde Eduardo!
Exatamente, o movimento é originado no Nucleus sim.
Não compreendi quando diz para olhar o campo tmov.integraaplicacao.

---

## Resposta #8

**Eduardo Vantini Neto** (@eduardo.vantini) — 02/05/2023, 15:16 | ❤️ 1

Se são originados pelo Nucleus, não precisa olhar o campo. Esse é um campo no banco de dados, na tabela TMOV, ele indica de qual sistema originou o movimento.

Esse erro que você enviou aparece no SOUPUI?
Esse movimento passar por aprovação no Agilis?
O usuário do RM que você está usando no SOUPUI tem acesso ao movimento, ou alterar movimentos aprovados (Caso use o Agilis)?

Se puder, cola o XML completo do SOUAPUI aqui.

Valeu

---

## Resposta #9

**Rafael Oliveira** (@roliveira) — 02/05/2023, 15:45

1.  Esse erro que você enviou aparece no SOUPUI?
    R: Isso, exatamente Eduardo, o erro está sendo retornado no SOAP UI. Estou tentando realizar o update primeiramente no SOAP para ter a certeza que vai funcionar antes de implementar no código do Workflow.

2.  Esse movimento passar por aprovação no Agilis?
    R: Não, o movimento é gerado no RM inicialmente. Após isso, é gerado o IDFLUIG pelo RM e lá no Fluig é possível encontrar essa solicitação gerada e realizar as movimentações necessárias. Isso funciona perfeitamente.

3.  O usuário do RM que você está usando no SOUPUI tem acesso ao movimento, ou alterar movimentos aprovados (Caso use o Agilis)?
    R: Sim, o usuário tem permissão lá no RM para acessar o movimento.

4.  Se puder, cola o XML completo do SOUAPUI aqui.
    R: Estou utilizando desta forma o XML no SaveRecord:


<soapenv:Envelope xmlns:soapenv=“[http://schemas.xmlsoap.org/soap/envelope/](http://schemas.xmlsoap.org/soap/envelope/)” xmlns:tot=“[http://www.totvs.com/](http://www.totvs.com/)”>
soapenv:Header/
soapenv:Body
tot:SaveRecord

tot:DataServerNameMOVMOVIMENTOTBCDATA</tot:DataServerName>

tot:XML
<!\[CDATA\[ 1 327036 2 1 327036 IDFLUIG\_AQUI LINK\_SOLICITACAO\_FLUIG\_AQUI \]\]>
</tot:XML>

tot:ContextoCODCOLIGADA=1;CODSISTEMA=T;CODUSUARIO=adminfluig</tot:Contexto>
</tot:SaveRecord>
</soapenv:Body>
</soapenv:Envelope>

---

## Resposta #10

**Rafael Oliveira** (@roliveira) — 02/05/2023, 15:46

![image](https://fluiggers.com.br/uploads/default/original/1X/7e31a3e3704a36a790a1caade3cddbf43dbc7fdf.png)

---

## Resposta #11

**Bruno Gasparetto** (@Bruno_Gasparetto) — 06/11/2023, 16:23

Resgatando esse tópico só pra perguntar onde consigo essas informações de Processos.

No RM sei que tem os DataServer para utilizar no wsDataServer (e que a TOTVS já removeu toda a documentação, mas consegui uma lista de DataServers do RM), mas não encontrei documentação sobre os Processos.

Estamos começando a engatinhar na integração de mandar informações para o RM. Ainda não temos a opção do REST (o ambiente ainda está atrasado nessa questão), por isso ainda busco informações do SOAP.

Edit:

Esse é aquele caso que a gente precisa executar um processo no RM e depois copiar o XML gerado pra saber o que precisamos preencher pra executar no wsProcess?

---

## Resposta #12

**Vagner Duarte** (@vagner_duarte) — 21/05/2024, 14:48

Fala roliveira tudo joia, estou com uma demanda bem parecida por aqui também, preciso de cancelar um movimento que foi criado no RM através do fluig, por acaso, você conseguiu? se sim, pode compartilhar a solução?

---
