# É possível criar/editar formulários e seus campos via API?

> **Fonte:** [https://fluiggers.com.br/t/e-possivel-criar-editar-formularios-e-seus-campos-via-api/2410](https://fluiggers.com.br/t/e-possivel-criar-editar-formularios-e-seus-campos-via-api/2410)
> **Categoria:** API`s Fluig
> **Tags:** `form`, `fluigapi`
> **Criado em:** 07/12/2023, 15:29
> **Visualizações:** 738 | **Likes:** 3 | **Respostas:** 3

---

## Pergunta original

**Patrick** (@pmattheew) — 07/12/2023, 15:29

Na minha empresa estamos precisando criar centenas de formulários dentro de processos a partir de um documento Word detalhando estes formulários em questão. Meu plano inicial é de consumir os dados deste arquivo para gerar automaticamente todos os formulários, pois cria-los na mão pela plataforma do Fluig é maçante e facilmente passível a erros.

Minha dúvida é: é possível gerar formulários complexos através da API que o Fluig disponibiliza? Criando seus campos e regras através da API? Pois na documentação não fica claro se sim e o que é cada coisa separadamente…

Pois o processo feito pelo Fluig é: eu crio o processo, uma vez ele feito edito, acesso a aba “Formulário” que aparece ao lado do diagrama do menu de edição do processo e crio este formulário para este processo através de lá.

Se houver a necessidade de mais detalhes ou reexplanação estou disposto a fazer. Desde já agradeço!

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 07/12/2023, 23:39 | ❤️ 1

Dá pra criar e editar um formulário pelo Web Service do Fluig.

Eu só fiz isso usando o WS em SOAP. Nele é só usar o [ECMCardIndexService](https://tdn.totvs.com/pages/releaseview.action?pageId=662867789#Documenta%C3%A7%C3%A3odosWebServices-ECMCardIndexService). Esse serviço tem várias opções para criar e editar formulários (usei mais a operação createSimpleCardIndexWithDatasetPersisteType e updateSimpleCardIndexWithDatasetAndGeneralInfo).

Em ambas operações precisa passar um array com o nome do arquivo html do formulário, indicar que ele é o documento principal e enviar o documento html em base64. Assim o Fluig vai fazer um parser procurando os campos pra criar o formulário no banco de dados.

Aí você precisa de alguma forma interpretar o seu Word convertendo ele num formulário HTML e aí enviar pro Fluig.

---

## Resposta #2

**Patrick** (@pmattheew) — 08/12/2023, 13:47

Valeu Bruno!!

Porém ainda continuo meio confuso, olhando o método `createSimpleCardIndex()` deste WS ele exige os parâmetros `user` e `password`, estas seriam minhas credenciais do Fluig?

A array que você disse deve ser passada para o parâmetro `Attachments`? Ou `customEvents`? Teria algum lugar para eu encontrar a schema dessa array?

Depois como eu poderia listar este formulário? Pelo caminho `/ecm-forms/api/v2/cardindex` eu consigo ou tem nada a ver com este formulário que foi criado? (pergunto pois todos os formulários que tenho criado não aparecem neste caminho, enquanto aparece outros formulários criados que não sei onde encontrar visualmente pela interface do Fluig)

Tenho conhecimento zero sobre Fluig e Totvs pois é meu primeiro contato, você recomendaria algum lugar que eu possa aprender esses conceitos mais basicamente, por favor?

Ainda assim muito obrigado pelo esclarecimento! Até mais!

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 09/12/2023, 10:39 | ❤️ 1

> Porém ainda continuo meio confuso, olhando o método `createSimpleCardIndex()` deste WS ele exige os parâmetros `user` e `password` , estas seriam minhas credenciais do Fluig?

Sim, a autenticação dos métodos SOAP no Fluig é feita passando esse usuário e senha.

> A array que você disse deve ser passada para o parâmetro `Attachments` ? Ou `customEvents` ? Teria algum lugar para eu encontrar a schema dessa array?

Attachments são os arquivos que compõem o formulário no front-end (html, js, css, imagens etc).

Já os customEvents são os arquivos que compõem os eventos de formulário que rodam no back-end. São os arquivos da pasta events. Porém aqui você não envia o arquivo em base64 e sim o conteúdo dele (o conteúdo dos eventos são salvos direto no banco de dados).

Você já fez os cursos do Fluig Academy? Lá ensinam todos os conceitos básicos da plataforma e são cursos gratuitos.

Pra pegar legal o que precisa nos métodos eu sempre uso o SoapUI pra carregar o WSDL e mando gerar os exemplos das operações. Aí a gente tem realmente tudo o que precisa. Mas a documentação também ajuda bastante.

Segue um exemplo do XML pra criar um formulário no Fluig (o WSDL é [https://lab.fluig.com/webdesk/ECMCardIndexService?wsdl](https://lab.fluig.com/webdesk/ECMCardIndexService?wsdl))

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.dm.ecm.technology.totvs.com/">
   <soapenv:Header/>
   <soapenv:Body>
      <ws:createSimpleCardIndexWithDatasetPersisteType>
         <username>academy.aluno</username>
         <password>academy.aluno</password>
         <companyId>1</companyId>
         <parentDocumentId>2</parentDocumentId>
         <publisherId>academy.aluno</publisherId>
         <documentDescription>FormularioTeste002</documentDescription>
         <cardDescription />
         <datasetName>ds_FormularioTeste002</datasetName>
         <Attachments>
            <item>
               <fileName>FormularioTeste002.html</fileName>
               <filecontent>PCFET0NUWVBFIGh0bWw+DQo8aHRtbD4NCjxoZWFkPg0KICAgIDxtZXRhIGNoYXJzZXQ9IlVURi04Ij4NCiAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+DQogICAgPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSIvc3R5bGUtZ3VpZGUvY3NzL2ZsdWlnLXN0eWxlLWd1aWRlLm1pbi5jc3MiLz4NCiAgICA8c2NyaXB0IHNyYz0iL3BvcnRhbC9yZXNvdXJjZXMvanMvanF1ZXJ5L2pxdWVyeS5qcyI+PC9zY3JpcHQ+DQogICAgPHNjcmlwdCBzcmM9Ii9wb3J0YWwvcmVzb3VyY2VzL2pzL2pxdWVyeS9qcXVlcnktdWkubWluLmpzIj48L3NjcmlwdD4NCiAgICA8c2NyaXB0IHNyYz0iL3BvcnRhbC9yZXNvdXJjZXMvanMvbXVzdGFjaGUvbXVzdGFjaGUtbWluLmpzIj48L3NjcmlwdD4NCiAgICA8c2NyaXB0IHNyYz0iL3N0eWxlLWd1aWRlL2pzL2ZsdWlnLXN0eWxlLWd1aWRlLm1pbi5qcyI+PC9zY3JpcHQ+DQogICAgPHNjcmlwdCBzcmM9ImN1c3RvbS5qcyI+PC9zY3JpcHQ+DQo8L2hlYWQ+DQo8Ym9keT4NCiAgICA8ZGl2IGNsYXNzPSJmbHVpZy1zdHlsZS1ndWlkZSI+DQogICAgICAgIDxmb3JtIG5hbWU9ImZvcm0iIHJvbGU9ImZvcm0iPg0KICAgICAgICAgICAgPGRpdiBjbGFzcz0iY29sLW1kLTYiPg0KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tZ3JvdXAiPg0KICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJub21lIj5Ob21lPC9sYWJlbD4NCiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9InRleHQiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIG5hbWU9Im5vbWUiIGlkPSJub21lIj4NCiAgICAgICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgPGRpdiBjbGFzcz0iY29sLW1kLTYiPg0KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tZ3JvdXAiPg0KICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJlbWFpbCI+RS1NYWlsPC9sYWJlbD4NCiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9InRleHQiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIG5hbWU9ImVtYWlsIiBpZD0iZW1haWwiPg0KICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgPC9kaXY+DQogICAgICAgIDwvZm9ybT4NCiAgICA8L2Rpdj4NCjwvYm9keT4NCjwvaHRtbD4NCg==</filecontent>
               <principal>true</principal>
            </item>
            <item>
               <fileName>custom.js</fileName>
               <filecontent>JChmdW5jdGlvbiAoKSB7CiAgICBjb25zb2xlLmxvZygidGVzdGFuZG8iKTsKfSkK</filecontent>
               <principal>false</principal>
            </item>
         </Attachments>
         <customEvents>
            <!--Zero or more repetitions:-->
            <item>
	          <eventId>displayFields</eventId>
			<eventDescription>/**
 * Exibe os itens referentes a cada etapa
 *
 * @param {FormController} form
 * @param {customHTML} customHTML
 */
function displayFields(form, customHTML) {
    // código do evento displayFields
}
</eventDescription>
            </item>
         </customEvents>
         <persistenceType>1</persistenceType>
      </ws:createSimpleCardIndexWithDatasetPersisteType>
   </soapenv:Body>
</soapenv:Envelope>
```

---

## Resposta #4

**Patrick** (@pmattheew) — 13/12/2023, 14:40

Valeu pela força Bruno!! Seus esclarecimentos me ajudaram muito!

De acordo com [esta declaração](https://tdn.totvs.com/pages/releaseview.action?pageId=73084007#Utiliza%C3%A7%C3%A3odeWebservices-Antesdecome%C3%A7ar) dá a entender que a nova API REST irá substituir o Webservice e que pode realizar as mesmas operações porém mudando apenas o protocolo.

Eu consegui criar um formulário rudimentar apenas utilizando sua extensão através do comando Ctrl + F9, pois não compreendo o suficiente ainda de XML (sei que é simples, porém exige tempo).

Como sou familiarizado com REST optei por seguir com ele e consegui criar outro formulário simples usando o Postman, agora tenho tentado fazer este processo por um programa em Node.js porém curiosamente tenho conseguido pelo Postman mas pelo programa não, através da rota `POST /ecm-forms/api/v2/cardIndex`…

No fim será que se eu não conseguir terei de prosseguir com o Webservice, mas creio que dará certo :+1:t5:

Muito obrigado mais uma vez, até mais!

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 13/12/2023, 14:57 | ❤️ 1

O grande problema é que cada API do Fluig atende uma parte do problema.

Tem coisa que só vi como fazer no SOAP, tem coisa que só tem na nova API REST e tem coisa que só tem na Legada API REST.

Aí tem a API SDK, que em teoria era pra permitir tudo que tem na SOAP e nas REST, mas acaba sendo ainda mais limitada.

O Fluig peca muito no quesito integrações, considerando que ele vende a ideia de facilitar integrações entre sistemas.

---
