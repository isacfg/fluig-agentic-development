# Criando documento com docAPI, e setando ExpirationDate

> **Fonte:** [https://fluiggers.com.br/t/criando-documento-com-docapi-e-setando-expirationdate/3350](https://fluiggers.com.br/t/criando-documento-com-docapi-e-setando-expirationdate/3350)
> **Categoria:** ECM / GED
> **Tags:** `fluigapi`, `ged`
> **Criado em:** 22/07/2025, 14:55
> **Visualizações:** 56 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**matheus.jesus** (@matheus.jesus) — 22/07/2025, 14:55

Aparece o seguinte erro quando tento criar um documento pela docAPI setando o ExpirationDate, dizendo que não encontrou o metodo setExpirationDate:

Erro ao copiar o documento: InternalError: Can’t find method com.datasul.technology.webdesk.dm.dtos.DocumentDto.setExpirationDate(java.lang.String). (afterProcessFinish#43)

Alguém sabe como informar a data de expiração do documento?

```
var docAtt = attachments.get(i);

        var docDto = docAPI.newDocumentDto();

        docAPI.copyDocumentToUploadArea(docAtt.getDocumentId(), docAtt.getVersion());

        docDto.setDocumentId(0);
        docDto.setDocumentType("2");
        docDto.setParentDocumentId(parseInt(parentDocumentId));
        docDto.setDocumentDescription(newFileName);
        docDto.setInheritSecurity(true);
        docDto.setExpirationDate(expirationDate);
        docDto.setExpires(true);
```

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/07/2025, 17:34

Na descrição do erro diz que você tentou passar uma string pro método `setExpirationDate`, mas ele só aceita o tipo `Date`.

---

## Resposta #2

**matheus.jesus** (@matheus.jesus) — 23/07/2025, 08:36 | ❤️ 1

Obrigado amigo, deu certo!
A variavel expirationDate que eu estava passando recebia um valor de um campo date, então achei que não precisaria de formatação.

passando um new Date() funcionou. Deus abençoe!

---
