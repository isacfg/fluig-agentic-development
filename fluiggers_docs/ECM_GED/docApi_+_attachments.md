# docApi + attachments

> **Fonte:** [https://fluiggers.com.br/t/docapi-attachments/3185](https://fluiggers.com.br/t/docapi-attachments/3185)
> **Categoria:** ECM / GED
> **Tags:** `processo`, `fluigapi`
> **Criado em:** 07/03/2025, 11:20
> **Visualizações:** 215 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Guilherme Silva** (@GuilhermeSilva) — 07/03/2025, 11:20

Bom dia pessoal, tudo certo?

Estou com dificuldades ao utilizar a docApi com Attachments, basicamente eu anexo no meu Processo o documento, e invés dele salvar na pasta com código, ele salva sempre na do ECM Raiz, e também quando vai para raiz não é possível visualizar o documento que fiz upload:

```auto
function beforeStateEntry(sequenceId) {
        log.info("Iniciando beforeStateEntry com sequenceId: " + sequenceId);

        if (sequenceId == 8) {
            log.info("SequenceId é 8, iniciando processamento de anexos.");

            // ID da pasta "Gestores - assinatura" previamente criada no GED
            var folderId = 32792; // Substitua pelo ID real da pasta

            // Verifica se a pasta existe
            try {
                var folderDto = docAPI.getDocument(folderId);
                if (!folderDto || folderDto.getDocumentType() != "1") {
                    log.error("A pasta com ID " + folderId + " não existe ou não é uma pasta.");
                    return;
                }
            } catch (e) {
                log.error("Erro ao verificar a existência da pasta: " + e);
                return;
            }

            // Obtém a lista de anexos do processo
            var attachments = hAPI.listAttachments();
            log.info("Número de anexos encontrados: " + attachments.size());

            for (var i = 0; i < attachments.size(); i++) {
                var docDto = attachments.get(i);
                log.info("Processando anexo ID: " + docDto.getDocumentId() + ", Versão: " + docDto.getVersion());

                if (docDto.getDocumentType() == "7") { // Verifica se é um anexo
                    log.info("Anexo identificado. Iniciando cópia para a área de upload.");

                    // Copia o documento para a área de upload do usuário
                    var copiedFiles = docAPI.copyDocumentToUploadArea(docDto.getDocumentId(), docDto.getVersion());
                    log.info("Arquivos copiados para a área de upload: " + copiedFiles);

                    // Configurações para o novo documento
                    var newDocDto = docAPI.newDocumentDto();
                    newDocDto.setDocumentDescription(docDto.getDocumentDescription());
                    newDocDto.setDocumentType("2"); // Tipo 2 indica documento
                    newDocDto.setParentDocumentId(folderId); // Define a pasta de destino
                    newDocDto.setActiveVersion(true);
                    newDocDto.setColleagueId(getValue("WKUser")); // Usuário atual
                    newDocDto.setPublisherId(getValue("WKUser")); // Publicador

                    // Cria o anexo principal
                    var attachArray = new java.util.ArrayList();
                    for (var j = 0; j < copiedFiles.length; j++) {
                        var mainAttach = docAPI.newAttachment();
                        mainAttach.setFileName(copiedFiles[j]);
                        mainAttach.setPrincipal(j == 0); // Define o primeiro arquivo como principal
                        mainAttach.setAttach(false);
                        attachArray.add(mainAttach);
                    }

                    // Configurações de aprovador
                    var aprovador = docAPI.newApproverDto();
                    aprovador.setCompanyId(getValue("WKCompany"));
                    aprovador.setColleagueId(getValue("WKUser")); // Aprovador
                    aprovador.setDocumentId(0); // Será atualizado após a criação
                    aprovador.setVersion(1); // Versão do documento
                    aprovador.setLevelId(1); // Nível de aprovação
                    aprovador.setApproverType(0); // Tipo de aprovador (0 = Colaborador)
                    var aprovadoresArray = new java.util.ArrayList();
                    aprovadoresArray.add(aprovador);

                    try {
                        // Cria o novo documento no GED
                        var doc = docAPI.createDocument(newDocDto, attachArray, null, aprovadoresArray, null);
                        log.info("Documento criado com sucesso. ID: " + doc.getDocumentId());
                    } catch (e) {
                        log.error("Erro ao criar o documento: " + e);
                    }
                } else {
                    log.info("Documento ID: " + docDto.getDocumentId() + " não é um anexo. Tipo: " + docDto.getDocumentType());
                }
            }
        } else {
            log.info("SequenceId não é 8. Nenhuma ação será executada.");
        }
    }
```

tomei como base essas documentações:
[https://tdn.totvs.com/display/public/fluig/docAPI](https://tdn.totvs.com/display/public/fluig/docAPI)
[https://tdn.totvs.com/display/public/fluig/Guia+de+Propriedades+dos+Objetos](https://tdn.totvs.com/display/public/fluig/Guia+de+Propriedades+dos+Objetos)

---

## Resposta #1

**Narles Lino** (@Narles_Lino) — 13/03/2025, 17:43

Boa tarde.

Verifique se lembrou de dar permissão, no mínimo de gravação, na pasta criada para o grupo de usuário(s) que irá executar esse processo.

Pode ser por isso que ele não está respeitando o parâmetro folderId.

---
