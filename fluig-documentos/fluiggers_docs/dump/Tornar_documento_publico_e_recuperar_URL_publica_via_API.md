# Tornar documento publico e recuperar URL publica via API

> **Fonte:** [https://fluiggers.com.br/t/tornar-documento-publico-e-recuperar-url-publica-via-api/3518](https://fluiggers.com.br/t/tornar-documento-publico-e-recuperar-url-publica-via-api/3518)
> **Categoria:** API`s Fluig
> **Criado em:** 08/12/2025, 08:24
> **Visualizações:** 43 | **Likes:** 5 | **Respostas:** 0

---

## Pergunta original

**JHONATA MARTINS DA  COSTA** (@JHONATA_MARTINS_DA_C) — 08/12/2025, 08:24 | ❤️ 1

Bom dia!

Criei um forms de cadastro de produto e um dos campos é a imagem relacionada a esse produto. Esses dados serão utilizados em uma pagina pública e minha duvida é como, após subir a imagem, tornar essa imagem pública e recuperar a URL pública (compartilhamento externo) para então poder utilizar na widget que esta em uma pagina pública.

Grato pela ajuda!

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Eduardo Vantini Neto** (@eduardo.vantini) — 09/12/2025, 14:43 | ❤️ 2

Olá, eu tenho um dataset que retorna o link para acesso ao documento. Eu faço assim

```auto
var documentService = fluigAPI.getDocumentService();
var urlToDownload = documentService.getDownloadURL(parseInt(documentId));
```

Vê se assim te atende.

Abs

---

## Resposta #2

**JHONATA MARTINS DA  COSTA** (@JHONATA_MARTINS_DA_C) — 09/12/2025, 15:00 | ❤️ 2

Fala Eduardo!

Fiz isso mesmo, só que sem o uso do dataset, chamando pela api /api/public/2.0/documents/getDownloadURL/’ + imgId

Não há necessidade de tornar o documento publico, não sei pq na minha cabeça se o documento não fosse marcado como publico nao deveria haver link de exibição externa.

De qualquer forma compartilho algumas configs que me passaram no ticket que fiz na totvs

”Houve uma mudança no comportamento da geração de links de download de documentos compartilhados externamente por motivos de segurança.

Dito isso, nosso time de desenvolvimento sabe que muitos clientes utilizam essa rotina, então foi criada uma forma de restaurar o comportamento anterior. Para isso, siga o procedimento abaixo.

**Para desativar a segurança nas versões 1.8.1 e 1.8.2:**

-   Acesse o Fluig com o usuário wcmadmin

-   Vá em “Empresas” e selecione a empresa desejada

-   Clique em “Editar”, depois clique em “Cadastro de dados adicionais”

-   Remove o seguinte dados adicional :

-   key: **tmp.private.ecm**

-   Salve a configuração.


**Para desativar a segurança na versão 2.0.0:**

-   Acesse o Fluig com o usuário wcmadmin

-   Vá em “Empresas” e selecione a empresa desejada

-   Clique em “Editar”, depois clique em “Cadastro de dados adicionais”

-   Cadastre os seguintes dados adicionais :

-   key: **tmp.public.access.ecm**

-   value: **true**

-   Salve a configuração.”

    Grato pela ajuda!

---
