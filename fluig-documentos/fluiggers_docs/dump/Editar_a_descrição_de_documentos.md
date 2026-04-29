# Editar a descrição de documentos

> **Fonte:** [https://fluiggers.com.br/t/editar-a-descricao-de-documentos/514](https://fluiggers.com.br/t/editar-a-descricao-de-documentos/514)
> **Categoria:** ECM / GED
> **Criado em:** 15/06/2021, 08:10
> **Visualizações:** 1184 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Wasley Santos** (@Wasley_Santos) — 15/06/2021, 08:10

Bom dia

Gente estou tentando utilizar o método updateSimpleDocument do ws ECMDocumentServiceService para atualizar a descrição de documentos (documentDescription) no Fluig.

![Capturar](https://fluiggers.com.br/uploads/default/original/1X/c346b59e7a34c3aab63caec1e565d35864821f99.png)

Mas to com dificuldade pq o método pede o objeto attachments, mas eu só queria trocar a descrição do documento.

Criei o ws via Fluig e importei para o eclipse para fazer os ajustes. Estou passando constraints com a informação do ID do documento que estou recuperando via dataset document e a nova descrição do documento. Só que o método possui o attachments como parâmetro. Como eu recupero esse objeto para poder reenviar?

Motivo: O Fluig permite que o usuário carregue documentos e na sua descrição ele permite adicionar caracteres como “/”. Quando se faz o download individual do arquivo ele baixa com o nome original, porém, se você tentar fazer o download da pasta inteira ele baixa pela descrição e ai é recusado pelo windows por causa da “/”

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Vinicius de Moura Silveira** (@vinny.silveira) — 15/06/2021, 08:32 | ❤️ 1

Bom dia [@Wasley\_Santos](/u/wasley_santos)!

Existe um endpoint da API do Fluig pra isso: [DocumentService - Update Description - POST](https://api.fluig.com/old/resource_DocumentServiceRest.html#resource_DocumentServiceRest_updateDescription_POST), ficaria mais ou menos assim no seu front:

```javascript
fetch('/api/public/ecm/document/updateDescription/', {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
        id: 123, // ID do documento,
        description: 'Descrição aqui', // Descrição nova
    })
}).then(res => res.json()).then((res) => {
    console.log('Resposta do WS', res);
})
```

Particularmente eu gosto de usar o método fetch, mas fica a seu critério a implementação.

Se desejar fazer via backend (evento de processo, datasets, etc…) opte por usar o `fluigAPI.getWorkflowService()`
e dá uma lida nessa documentação de como usar o serviço: [Workflow Service - FluigAPI](https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html)

Espero que tenha ajudado!!

OBS.: Estava errada a URL!! Arrumei agora

---

## Resposta #2

**system** (@system) — 16/06/2021, 00:32

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
