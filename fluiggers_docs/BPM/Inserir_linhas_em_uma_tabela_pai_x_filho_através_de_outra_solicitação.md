# Inserir linhas em uma tabela pai x filho através de outra solicitação

> **Fonte:** [https://fluiggers.com.br/t/inserir-linhas-em-uma-tabela-pai-x-filho-atraves-de-outra-solicitacao/947](https://fluiggers.com.br/t/inserir-linhas-em-uma-tabela-pai-x-filho-atraves-de-outra-solicitacao/947)
> **Categoria:** BPM
> **Tags:** `form`, `processo`, `bpm`, `fluigapi`, `paixfilho`
> **Criado em:** 25/02/2022, 08:22
> **Visualizações:** 1460 | **Likes:** 2 | **Respostas:** 5

---

## Pergunta original

**Victor Castro** (@victorcastro) — 25/02/2022, 08:22

Tenho uma atividade do tipo serviço em um processo A que precisa criar uma solicitação no processo B e inserir linhas em uma tabela pai x filho desse processo B.

Alguém poderia me dar um exemplo de como fazer? Testei alguns códigos que vi por ai, mas nenhum deu certo. Alguns não dão erro, mas não inserem as linhas na tabela.

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 25/02/2022, 10:59

Você esta passando os names dos campos para a tabela usando aquela numeração sequencial?

Tipo: **nomeCampo\_\_\_1**, **nomeCampo\_\_\_2** ?

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 25/02/2022, 11:08

Fiquei curioso (eu não tinha adicionado nada de CardService na minha declaração de tipos do vscode) e fui olhar no manual.

Vi que agora tem o [CardAPIService](https://fluig.totvs.com/api/sdk/com/fluig/sdk/service/CardAPIService.html) e ele possuí o método `createChild` que parece ser pra adicionar um item pai filho (tem também o editChild e removeChild). Como descobri agora ainda nem testei pra ver como é o funcionamento, mas seria uma super ajuda pra tratar pai x filho.

Usando a `/webdesk/ECMCardService?wsd` você precisa informar a tabela e o índice:

```xml
<cardData>
    <item>
        <field>tableid___2</field>
        <value>tableItems</value>
    </item>
    <item>
        <field>Autor___2</field>
        <value>Nome do Autor</value>
    </item>
</cardData>
```

Exemplo em uma Widget: [Fluig: Exemplo de Inserção de Pai Filho por Web Service em Widget · GitHub](https://gist.github.com/brunogasparetto/f73ea69a21eeee0315604a456b28a0a6)

---

## Resposta #3

**Sérgio Machado** (@sergio.machado) — 25/02/2022, 11:43 | ❤️ 1

Eu já usei ele Bruno, usei recentemente em um projeto para adicionar, editar e deleter registros de uma tabela pai e filho via eventos de processo e funcionou muito bem. no entanto, funciona apenas para registros de formulários.

Fiz uns testes editando uma tabela pai e filho de uma solicitação e deu zica.

---

## Resposta #4

**Victor Castro** (@victorcastro) — 25/02/2022, 13:26 | ❤️ 1

Passei sim.

Mas acabou que eu estava tentando inserir em um processo que já existia só como teste, e não estava funcionando. Então criei um formulário de teste só com uma tabela e magicamente funcionou rs.

Mas você já desenvolveu essa funcionalidade? Se sim, tem como deixar um exemplo aqui? Só a título de conhecimento mesmo. Se tiver feito de uma forma diferente da que eu fiz.

---

## Resposta #5

**Sérgio Machado** (@sergio.machado) — 25/02/2022, 14:25

Iniciando uma nova solicitação contendo registros na tabela pai e filho eu nunca precisei fazer, mas depois que vi tua pergunta fiquei curioso e fiz um teste aqui.

Criei um processo bem simples e iniciei uma nova solicitação pelo Soap Ui, utilizando o método **startProcess** do serviço **ECMWorkflowEngineService**.

Posso fazer um exemplo completo depois e postar aqui para caso alguém precise depois.

De qualquer forma postarei aqui abaixo o envelope Soap que utilizei para este meu teste.

```auto
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.workflow.ecm.technology.totvs.com/">
   <soapenv:Header/>
   <soapenv:Body>
      <ws:startProcess>
         <username>sergio.machado</username>
         <password>123456</password>
         <companyId>1</companyId>
         <processId>startProcessTabela</processId>
         <choosedState>2</choosedState>
         <colleagueIds></colleagueIds>
         <comments>Solicitacao Iniciada pelo SOAP</comments>
         <userId>sergio.machado</userId>
         <completeTask>true</completeTask>
         <attachments></attachments>
         <cardData>
         <!-- Campos Simples -->
            <item>
               <item>dataEmissao</item>
               <item>20/01/2022</item>
            </item>
            <item>
               <item>categoria</item>
               <item>adm</item>
            </item>
            <!-- Campos Tabela Pai e Filho -->
            <item>
               <item>codigoIBGE___1</item>
               <item>5100805</item>
            </item>
            <item>
               <item>nome___1</item>
               <item>Apiacás</item>
            </item>
            <item>
               <item>aeroporto___1</item>
               <item>S</item>
            </item>
            <item>
               <item>codigoIBGE___2</item>
               <item>2402907</item>
            </item>
            <item>
               <item>nome___2</item>
               <item>João Pessoa</item>
            </item>
            <item>
               <item>aeroporto___2</item>
               <item>N</item>
            </item>
         </cardData>
         <appointment></appointment>
         <managerMode>false</managerMode>
      </ws:startProcess>
   </soapenv:Body>
</soapenv:Envelope>
```

---

## Resposta #6

**Victor Castro** (@victorcastro) — 25/02/2022, 15:10

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/sergio.machado/48/659_2.png) sergio.machado:
>
> > Posso fazer um exemplo completo depois e postar aqui para caso alguém precise depois.

Se puder, eu quero sim. Conhecimento nunca é demais

---
