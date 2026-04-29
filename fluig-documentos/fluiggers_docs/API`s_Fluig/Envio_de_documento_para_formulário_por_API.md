# Envio de documento para formulário por API

> **Fonte:** [https://fluiggers.com.br/t/envio-de-documento-para-formulario-por-api/2254](https://fluiggers.com.br/t/envio-de-documento-para-formulario-por-api/2254)
> **Categoria:** API`s Fluig
> **Tags:** `form`, `fluigapi`
> **Criado em:** 09/10/2023, 09:15
> **Visualizações:** 1092 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**Alvaro Lopes** (@LopesAlvaro) — 09/10/2023, 09:15

Bom dia, tudo bem ?

Tenho uma aplicação que necessita iniciar processos automaticamente no fluig para isso utilizei a api do fluig, minha aplicação funciona e consegue iniciar processos via API, porém eu necessito de enviar anexos ao iniciar o processo e eles serem armazenados como anexo da solicitação, alguém sabe me dizer como posso fazer ?

Agradeço a ajuda.

---

## Resposta #1

**Guilherme Mesquita Rocha** (@gmesquita) — 09/10/2023, 14:17

Boa tarde!
Costumo fazer da seguinte maneira:

```auto
/** Serviço.*/
        var periodicService = ServiceManager.getServiceInstance("ECMWorkflowEngineService");
        var serviceHelper = periodicService.getBean();

        var serviceLocator = serviceHelper.instantiate("com.totvs.technology.ecm.workflow.ws.ECMWorkflowEngineServiceService");
        var service = serviceLocator.getWorkflowEngineServicePort();

        var attachments = serviceHelper.instantiate("com.totvs.technology.ecm.workflow.ws.ProcessAttachmentDtoArray");

        /**Attachments */
        var attachmentDto = serviceHelper.instantiate('com.totvs.technology.ecm.workflow.ws.ProcessAttachmentDto');
        var attachment = periodicService.instantiate("com.totvs.technology.ecm.workflow.ws.Attachment");

/**Joga o arquivo base64 resgatado do JSON */
/** Leitura de constraints.*/
   var attach ="";

 if (constraints && constraints.length) {

            for (var i = 0; i < constraints.length; i++) {
                if (constraints[i].fieldName == "b64") {
                    attach = constraints[i].getInitialValue()
                }
            }
        }

/**Seta as propriedades do arquivo 64 */
        attachment.setPrincipal(true);
        attachment.setAttach(true);
        attachment.setEditing(false);
        attachment.setFileSize(1);
        attachment.setFileName("Nome do Anexo");

        /**Converte o base64 para a codificação UTF-8 */
        attachment.setFilecontent(java.util.Base64.getDecoder().decode(new java.lang.String(attach).getBytes("UTF-8")));

 attachmentDto.getAttachments().add(attachment);
        attachmentDto.setDescription("Nome do Anexo");
        attachments.getItem().add(attachmentDto);
```

---

## Resposta #2

**Alvaro Lopes** (@LopesAlvaro) — 09/10/2023, 15:17

Então, mas no caso eu não estou em um formulário dentro fluig, mas sim em um formulário externo, eu necessito enviar os anexos da aplicação externa e enviar para a solicitação dentro do fluig (Na aba de anexos da solicitação).

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 18/10/2023, 09:50

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/jonathan.albuquerque/48/1610_2.png) [Cliente externo sem usuário Fluig startar um processo e anexar documentos](https://fluiggers.com.br/t/cliente-externo-sem-usuario-fluig-startar-um-processo-e-anexar-documentos/307/3) [BPM](https://fluiggers.com.br/c/bpm/5)
>
> > 1- Na estrutura HTML do seu formulário insira o seguinte código para capturar o base64 do input file e salvar em um campo do tipo textarea oculto em seu formulário: <input type="file" /> <script> const fileInput = document.querySelector("input"); fileInput.addEventListener("change", (e) => { const file = e.target.files\[0\]; const reader = new FileReader(); reader.onloadend = () => { const base64String = reader.result.replace("data:", "").replace(/^.+,/, ""); document.getE…

Neste tópico ele ensina a iniciar um processo já enviando os anexos na requisição, porém é usando SOAP.

---

## Resposta #4

**Alvaro Lopes** (@LopesAlvaro) — 20/11/2023, 17:03

Boa tarde Bruno, Obrigado pela resposta me ajudou bastante. Criei uma api intermediária para enviar para o fluig e nela coloquei SOAP.

---
