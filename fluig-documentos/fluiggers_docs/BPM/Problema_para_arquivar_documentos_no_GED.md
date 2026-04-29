# Problema para arquivar documentos no GED

> **Fonte:** [https://fluiggers.com.br/t/problema-para-arquivar-documentos-no-ged/209](https://fluiggers.com.br/t/problema-para-arquivar-documentos-no-ged/209)
> **Categoria:** BPM
> **Criado em:** 23/03/2021, 18:50
> **Visualizações:** 905 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Wasley Santos** (@Wasley_Santos) — 23/03/2021, 18:50 | ❤️ 1

Caros

Alguém já teve esse tipo de erro no Fluig?

![erro de arquivo principal não encontrado](https://fluiggers.com.br/uploads/default/optimized/1X/f21f74bd8e1f376f67b49cef36539bbfa6ece700_2_690x249.png)

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 24/03/2021, 14:06

[@Wasley\_Santos](/u/wasley_santos) esta utilizando o SOAP ou REST pra publicar? outro detalhe pq ele retornou a mensagem de arquivado com sucesso, era outro documento ?

---

## Resposta #2

**Wasley Santos** (@Wasley_Santos) — 25/03/2021, 14:06

[@fluigor.com.br](/u/fluigor.com.br) estou usando hAPI. E a mensagem acima de confirmado é do mesmo documento onde na segunda tentativa o hAPI consegui arquivar o documento sem problema. Porém, fica gerando esse erro em muitos registros.
Estou suspeitando que possa ser tamanho do nome do arquivo, espaço, caracteres especiais. E ai ele meio que se perde

---

## Resposta #3

**Wasley Santos** (@Wasley_Santos) — 25/03/2021, 14:12

Vou compartilhar o código

```auto
var docs = hAPI.listAttachments();
						for (var i = 0; i < docs.size(); i++) {
						var doc = docs.get(i);
									  doc.setParentDocumentId(pastaFuncionario);
								  doc.setExpires(false);
								  doc.setCreateDate(calendar);
								  doc.setInheritSecurity(true);
								  doc.setTopicId(1);
								  doc.setUserNotify(false);
								  doc.setValidationStartDate(calendar);
								  doc.setVersionOption("0");
								  doc.setUpdateIsoProperties(true);
								  doc.setDocumentDescription(descricao_documento);

								  if (doc.getDocumentType() == "7") {
									hAPI.publishWorkflowAttachment(doc);
								  }
						}
					```
```

---
