# Movimentar solicitação através de uma widget

> **Fonte:** [https://fluiggers.com.br/t/movimentar-solicitacao-atraves-de-uma-widget/287](https://fluiggers.com.br/t/movimentar-solicitacao-atraves-de-uma-widget/287)
> **Categoria:** Widgets
> **Tags:** `form`
> **Criado em:** 04/04/2021, 21:56
> **Visualizações:** 2555 | **Likes:** 4 | **Respostas:** 0

---

## Pergunta original

**Alexandre Pedro** (@Aline_Jaime) — 04/04/2021, 21:56 | ❤️ 1

Bom dia, pessoal!

Estou desenvolvendo uma aplicação na qual preciso movimentar uma solicitação através de um modal de uma widget, sei que se fosse por formulário iria conseguir forçar através de um:

> $(‘#workflowActions > ul#optionList > li > a\[data-send’).click()

Alguém sabe de alguma api ou outra maneira para fazer isso?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 05/04/2021, 11:53 | ❤️ 3

Acredito que você vai precisar usar a API do Fluig pra isso.

Lembro de já ter visto algo usando o método **saveAndSendTask** do serviço **ECMWorkflowEngineService**

---

## Resposta #2

**Igor Rodrigues** (@fluigor.com.br) — 05/04/2021, 13:03

Tu pode usar a rotina de SaveAndSendTask do SOAP WorkflowEngineService.

Precisa passar alguns parâmetros para ela, como por exemplo, qual o processo e qual atividade tu deseja movimentar, importante que todos os valores do formulário precisam ser repassados novamente no momento da movimentação, pois caso contrário eles ficaram com o valor Null, pois está rotina, atualiza os dados do Form.

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Igor Rodrigues** (@fluigor.com.br) — 05/04/2021, 13:11

Função em JAVA SCRIPT para chamar o envio do Envelope XML.

```javascript
function movimentaProcesso() {

    $('.btnMovimenta').on('click', function(){
        var el                  = $(this).closest('tr');
        var username            = "admin";
        var password            = "senha";
        var companyId           = 1;
        var processInstanceId   = el.attr('data-numSolic');
        var choosedState        = 0;
        var comments            = "Processo inicializado via SOAP ";
        var group               = "Pool:Role:admin";
        var userId              = "admin";
        var completeTask        = "true";
        var managerMode         = "false";

        //template envelope XML
         var _xml = null;
         $.ajax({
            url : '/nomedolayout/resources/js/SaveAndSendTask.xml',
            async : false,
            type : "get",
            datatype : "xml",
            success : function(xml) {
                _xml = $(xml);
            }
         });


         //Alterar os valores recuperados na variavel _xml
         _xml.find("username").text(username);
         _xml.find("password").text(password);
         _xml.find("companyId").text(companyId);
         _xml.find("processInstanceId").text(processInstanceId);
         _xml.find("comments").text(comments);
         _xml.find("choosedState").text(choosedState);
         _xml.find("userId").text(userId);
         _xml.find("completeTask").text(completeTask);
         _xml.find("[name='group']").text(group);
         _xml.find("managerMode").text(managerMode);

         _xml.find("[name='Aempresa']").text(empresa);
       _xml.find("[name='Acidade']").text(cidade);
       _xml.find("[name='Aestado']").text(estado);


        //Usar o metodo WCMAPI.Create para chamar o webservice
        WCMAPI.Create({
            type: "POST",
            url : "/webdesk/ECMWorkflowEngineService?wsdl",
            contentType : "text/xml",
            dataType : "xml",
            data : _xml[0],
            error: function(error) {
                console.log(error);
            },
            success : function(data) {
                console.log(data);

                FLUIGC.toast({
                    title: 'Sucesso !<br>',
                    message: 'A solicitação foi iniciada com sucesso.',
                    timeout: 'slow',
                    type: 'success'
                });
            }
        })

    })
}
```

Envelope SOAP que deve ser montado para envio das informações

```auto
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.workflow.ecm.technology.totvs.com/">
   <soapenv:Header/>
   <soapenv:Body>
      <ws:saveAndSendTask>
         <username>admin</username>
         <password>senha</password>
         <companyId>1</companyId>
         <processInstanceId>16963</processInstanceId>
         <choosedState>5</choosedState>
         <colleagueIds>
            <item>admin</item>
         </colleagueIds>
         <comments>MOVE VIA SOPA</comments>
         <userId>admin</userId>
         <completeTask>true</completeTask>
         <attachments>
         </attachments>
         <cardData>
         <item>
               <item>Aempresa</item>
               <item name="Fempresa"></item>
            </item>
            <item>
               <item>Aname</item>
               <item name="Fname"</item>
            </item>
            <item>
               <item>Acidade</item>
               <item name="Fcidade"></item>
            </item>
            <item>
               <item>Aestado</item>
               <item name="Festado"></item>
            </item>
         </cardData>
         <appointment>
         </appointment>
         <managerMode>false</managerMode>
         <threadSequence>0</threadSequence>
      </ws:saveAndSendTask>
   </soapenv:Body>
</soapenv:Envelope>
```

---
