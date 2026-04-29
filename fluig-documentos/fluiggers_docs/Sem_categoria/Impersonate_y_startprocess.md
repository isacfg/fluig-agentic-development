# Impersonate y startprocess

> **Fonte:** [https://fluiggers.com.br/t/impersonate-y-startprocess/546](https://fluiggers.com.br/t/impersonate-y-startprocess/546)
> **Categoria:** Sem categoria
> **Criado em:** 01/07/2021, 16:56
> **Visualizações:** 610 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Julio Kriger** (@Julio_Kriger) — 01/07/2021, 16:56

Hola,

como puedo hacer un startprocess impersonando un usuario distinto del oauth?

muchas gracias.

Saludos,
Julio

---

## Resposta #1

**Willian Laynes** (@Willian_Laynes) — 21/07/2021, 16:53

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/julio_kriger/48/192_2.png) Julio\_Kriger:
>
> > como puedo hacer un startprocess impersonando un usuario distinto del oauth

Você pode usar o SOAP, ele utiliza um usuário normal para autenticar.

https://{SUA URL}/webdesk/ECMWorkflowEngineService?wsdl

```auto
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.workflow.ecm.technology.totvs.com/">
   <soapenv:Header/>
   <soapenv:Body>
      <ws:startProcess>
         <username>?</username>
         <password>?</password>
         <companyId>?</companyId>
         <processId>?</processId>
         <choosedState>?</choosedState>
         <colleagueIds>
            <!--Zero or more repetitions:-->
            <item>?</item>
         </colleagueIds>
         <comments>?</comments>
         <userId>?</userId>
         <completeTask>?</completeTask>
         <attachments>
            <!--Zero or more repetitions:-->
            <item>
               <attachmentSequence>?</attachmentSequence>
               <!--Zero or more repetitions:-->
               <attachments>
                  <!--Optional:-->
                  <attach>?</attach>
                  <!--Optional:-->
                  <descriptor>?</descriptor>
                  <!--Optional:-->
                  <editing>?</editing>
                  <!--Optional:-->
                  <fileName>?</fileName>
                  <!--Optional:-->
                  <fileSelected/>
                  <fileSize>?</fileSize>
                  <!--Optional:-->
                  <filecontent>cid:521007375124</filecontent>
                  <!--Optional:-->
                  <fullPatch>?</fullPatch>
                  <!--Optional:-->
                  <iconPath>?</iconPath>
                  <!--Optional:-->
                  <mobile>?</mobile>
                  <!--Optional:-->
                  <pathName>?</pathName>
                  <!--Optional:-->
                  <principal>?</principal>
               </attachments>
               <!--Optional:-->
               <colleagueId>?</colleagueId>
               <!--Optional:-->
               <colleagueName>?</colleagueName>
               <companyId>?</companyId>
               <!--Optional:-->
               <crc>?</crc>
               <!--Optional:-->
               <createDate>?</createDate>
               <!--Optional:-->
               <createDateTimestamp>?</createDateTimestamp>
               <!--Optional:-->
               <deleted>?</deleted>
               <!--Optional:-->
               <description>?</description>
               <!--Optional:-->
               <documentId>?</documentId>
               <!--Optional:-->
               <documentType>?</documentType>
               <!--Optional:-->
               <fileName>?</fileName>
               <!--Optional:-->
               <newAttach>?</newAttach>
               <!--Optional:-->
               <originalMovementSequence>?</originalMovementSequence>
               <!--Optional:-->
               <permission>?</permission>
               <processInstanceId>?</processInstanceId>
               <size>?</size>
               <!--Optional:-->
               <version>?</version>
            </item>
         </attachments>
         <cardData>
            <!--Zero or more repetitions:-->
            <item>
               <!--Zero or more repetitions:-->
               <item>?</item>
            </item>
         </cardData>
         <appointment>
            <!--Zero or more repetitions:-->
            <item>
               <!--Optional:-->
               <appointmentDate>?</appointmentDate>
               <!--Optional:-->
               <appointmentSeconds>?</appointmentSeconds>
               <appointmentSequence>?</appointmentSequence>
               <!--Optional:-->
               <colleagueId>?</colleagueId>
               <!--Optional:-->
               <colleagueName>?</colleagueName>
               <companyId>?</companyId>
               <!--Optional:-->
               <isNewRecord>?</isNewRecord>
               <movementSequence>?</movementSequence>
               <processInstanceId>?</processInstanceId>
               <transferenceSequence>?</transferenceSequence>
            </item>
         </appointment>
         <managerMode>?</managerMode>
      </ws:startProcess>
   </soapenv:Body>
</soapenv:Envelope>
```

---

## Resposta #2

**Julio Kriger** (@Julio_Kriger) — 22/07/2021, 08:48 | ❤️ 1

Hola!

Gracias por la respuesta.

Una pena que no se pueda hacer por REST API.

Saludos!

---
