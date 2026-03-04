# Permissão dinâmica de grupos a documentos do GED

> **Fonte:** [https://fluiggers.com.br/t/permissao-dinamica-de-grupos-a-documentos-do-ged/2804](https://fluiggers.com.br/t/permissao-dinamica-de-grupos-a-documentos-do-ged/2804)
> **Categoria:** ECM / GED
> **Tags:** `ecm`, `ged`, `servicetask`, `lgpd`
> **Criado em:** 21/05/2024, 17:41
> **Visualizações:** 200 | **Likes:** 3 | **Respostas:** 2

---

## Pergunta original

**RafaelMD** (@RafaelMD) — 21/05/2024, 17:41

Tenho um servicetask em que gravo os anexos do processo no GED, apenas grupos específicos podem ver os anexos de cada solicitação e esse grupo é definido por um campo hidden no formulário. Como posso atribuir a permissão à pasta em que os anexos estão gravados apenas para esse grupo?

---

## Resposta #1

**venturelli** (@venturelli) — 22/05/2024, 10:38 | ❤️ 2

Você pode usar esse script de criação de pasta como exemplo [Source of cadastro\_fornecedor.criarPastaFornecedorCasoNaoExista.js - Exemplos-Avancados-de-Processos - fluig Stash](https://git.fluig.com/projects/SAMPLES/repos/exemplos-avancados-de-processos/browse/cadastro-fornecedor/workflow/scripts/cadastro_fornecedor.criarPastaFornecedorCasoNaoExista.js) e adaptar para adicionar as permissões:

```auto
var objetoPasta = new com.fluig.sdk.api.document.FolderVO();

var permissoes = new java.util.ArrayList();
var permissao = com.fluig.sdk.api.document.DocumentPermissionVO();

var tipo = 1; // 1 = por usuário, 2 = grupo e 3 = todos os usuários
var nivel = 1; // 0 = leitura, 1 = salvar, 2 = modificar e 3 = total

permissao.setAttributionType(tipo);
permissao.setAttributionValue(form.getValue("campoHidden")); // nome do usuário ou do grupo que terá permissão
permissao.setSecurityLevel(nivel);

// permissao.setDownloadEnabled(true); //  se quiser marcar que permite download
// permissao.setShowContent(true); // se quiser habilitar a opção de permiter listar conteúdo

permissoes.add(permissao);

objetoPasta.setPermissoes(permissoes);
```

---

## Resposta #2

**RafaelMD** (@RafaelMD) — 23/05/2024, 15:37

Agradeço pela ajuda, está sendo muito útil.
Estou com certa dificuldade de entender como atribuir essas permissões à uma pasta já existente, consegui adaptar seu script para atribuir as permissões ao criar uma nova pasta pela função create() do fluigAPI.getFolderDocumentService(), mas não consegui achar outras funções/objetos que façam apenas a atualiazação da pasta que já existe.
O mais próximo que encontrei foi o updateFile() mas este está relacionado apenas ao objeto DocumenteVO(), não achei um correspondente para o FolderVO().

---

## Resposta #3 ✅ RESPOSTA ACEITA

**venturelli** (@venturelli) — 24/05/2024, 10:34 | ❤️ 1

Dei uma olhada e realmente na [FolderDocumentService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/FolderDocumentService.html) não tem a atualização.

Como toda pasta é um documento, dá pra usar então a [DocumentService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html).

```auto
var version = 1000; // As pastas não são versionadas, então a versão sempre vai ser 1000.
var documentId = 0; // aqui vais ter que substituir pelo id da tua pasta

var documentService = fluigAPI.getDocumentService();
var permissoes = documentService.getDocumentPermissions​(documentId, version); // recupera a lista atual de permissões

var permissao = ...; // cria a permissao da mesma forma que antes

permissoes.add(permissao); // adiciona a nova permissão à lista
documentService.setDocumentPermissions​(documentId, permissoes)
```

---

## Resposta #4

**RafaelMD** (@RafaelMD) — 24/05/2024, 11:19

Funcionou perfeitamente!
Sou iniciante e em alguns momentos o desenvolvimento sofre algumas pausas por falta de conhecimento, por tanto suas respostas foram de grande valor e utilidade pra mim, agradeço muito!

---
