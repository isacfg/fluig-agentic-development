# Como instanciar um objeto da fluigAPI Java no JavaScript

> **Fonte:** [https://fluiggers.com.br/t/como-instanciar-um-objeto-da-fluigapi-java-no-javascript/1495](https://fluiggers.com.br/t/como-instanciar-um-objeto-da-fluigapi-java-no-javascript/1495)
> **Categoria:** API`s Fluig
> **Tags:** `fluigapi`
> **Criado em:** 18/11/2022, 08:24
> **Visualizações:** 851 | **Likes:** 3 | **Respostas:** 0

---

## Pergunta original

**Wasley Santos** (@Wasley_Santos) — 18/11/2022, 08:24

Colegas

Estou com a seguinte dúvida:
Seguindo a documentação de como usar o fluigAPI SDK no backend via javascript
[https://tdn.totvs.com/pages/releaseview.action?pageId=198934765](https://tdn.totvs.com/pages/releaseview.action?pageId=198934765)
eu consigo utilizar alguns serviços. Minha dúvida é como seria o caso onde em um serviço ele solicita como parâmetros um objeto java. Eu tentei instanciar usando new fluigAPI.FolderVO mas não consegui.
Preciso criar pastas usando o SDK:
var folderService = fluigAPI.getFolderDocumentService().create(objeto pasta);
Eu sei que para colocar o nome por exemplo usarei setDocumentDescription​(String documentDescription) mas e o objeto como faço para instanciar?

Essa é a documentação do serviço
[https://api.fluig.com/old/sdk/com/fluig/sdk/service/FolderDocumentService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/FolderDocumentService.html)

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 18/11/2022, 09:11 | ❤️ 3

Nesse guia você clica no tipo desejado e ele te joga pra página explicando a classe ([DocumentVO (Javadoc for Fluig - SDK - API 1.8.1)](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html)) aí nela você consegue ver o caminho completo da declaração da classe pra poder instanciar.

![image](https://fluiggers.com.br/uploads/default/original/1X/f405f58ffeea5395bcadf68968ed7eaedcfc3003.png)
Explicando o caminho completo e que ela extende a Object.

Então, nesse caso, seria:

```javascript
var documento = new com.fluig.sdk.api.document.DocumentVO();
```

A `fluigAPI` é só um helper para trazer os serviços pra você. E esses serviços ainda são bem fracos, pois muita coisa no Fluig ou não tá documentado aí ou só é possível através de Web Service (criar uma nova solicitação, por exemplo).

---
