# Anexo em Link Público

> **Fonte:** [https://fluiggers.com.br/t/anexo-em-link-publico/1147](https://fluiggers.com.br/t/anexo-em-link-publico/1147)
> **Categoria:** Widgets
> **Tags:** `form`
> **Criado em:** 21/06/2022, 14:39
> **Visualizações:** 446 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Leonardo** (@leonardomarthiniano) — 21/06/2022, 14:39

Estou com um problema com uma Widget, onde o usuário acessa uma página externa preenche os campos e anexa arquivos e assim que ele responde vai para o Fluig com informações do Form preenchidas de acordo com o que o usuário respondeu no link externo. As informações estão chegando corretamente. Só os anexos que não estou conseguindo acessar, quando clico no ícone de anexo ele me joga pra uma outra página. Abaixo deixo o link de quando funcionava normal:

[fluig.acpbioenergia.com.br](https://fluig.acpbioenergia.com.br/volume/stream/Rmx1aWc=/P3Q9MSZ2b2w9ZGVmYXVsdCZpZD0xNDU5NCZ2ZXI9MTAwMCZmaWxlPUNOUEoucGRmJmNyYz0xMjkxOTQ0NjMmc2l6ZT0wLjA3NzIwNiZ1SWQ9NzgmZlNJZD0xJnVTSWQ9MSZkPWZhbHNlJnRrbj0mcHVibGljVXJsPWZhbHNl.pdf)

[](https://fluig.acpbioenergia.com.br/volume/stream/Rmx1aWc=/P3Q9MSZ2b2w9ZGVmYXVsdCZpZD0xNDU5NCZ2ZXI9MTAwMCZmaWxlPUNOUEoucGRmJmNyYz0xMjkxOTQ0NjMmc2l6ZT0wLjA3NzIwNiZ1SWQ9NzgmZlNJZD0xJnVTSWQ9MSZkPWZhbHNlJnRrbj0mcHVibGljVXJsPWZhbHNl.pdf)

### [P3Q9MSZ2b2w9ZGVmYXVsdCZpZD0xNDU5NCZ2ZXI9MTAwMCZmaWxlPUNOUEoucGRmJmNyYz0xMjkxOTQ0NjMmc2l6ZT0wLjA3NzIwNiZ1SWQ9NzgmZlNJZD0xJnVTSWQ9MSZkPWZhbHNlJnRrbj0mcHVibGljVXJsPWZhbHNl.pdf](https://fluig.acpbioenergia.com.br/volume/stream/Rmx1aWc=/P3Q9MSZ2b2w9ZGVmYXVsdCZpZD0xNDU5NCZ2ZXI9MTAwMCZmaWxlPUNOUEoucGRmJmNyYz0xMjkxOTQ0NjMmc2l6ZT0wLjA3NzIwNiZ1SWQ9NzgmZlNJZD0xJnVTSWQ9MSZkPWZhbHNlJnRrbj0mcHVibGljVXJsPWZhbHNl.pdf)

79.06 KB

Abaixo o link que está indo agora, de forma incorreta:

[https://fluig.acpbioenergia.com.br/webdesk/streamcontrol/0/15498/4000/?WDCompanyId=1&WDNrDocto=15498&WDNrVersao=4000&WDParentDocumentId=0&token=eaadb9c6-529f-4abc-8b22-9d0d28109b1e&WKNumProces=8546&WKNumState=12&WKDef=terceiro&WKVersDef=36&taskUserId=Suporte#](https://fluig.acpbioenergia.com.br/webdesk/streamcontrol/0/15498/4000/?WDCompanyId=1&WDNrDocto=15498&WDNrVersao=4000&WDParentDocumentId=0&token=eaadb9c6-529f-4abc-8b22-9d0d28109b1e&WKNumProces=8546&WKNumState=12&WKDef=terceiro&WKVersDef=36&taskUserId=Suporte#)

Alguém sabe o que pode ser?

---

## Resposta #1

**Jonathan Albuquerque** (@Jonathan.Albuquerque) — 22/06/2022, 10:36 | ❤️ 1

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/l/cab0a1/48.png) leonardomarthiniano:
>
> > Estou com um problema com uma Widget, onde o usuário acessa uma página externa preenche os campos e anexa arquivos e assim que ele respon…

Se puder evidenciar melhor seu problema anexando as telas, você está salvando isso onde, GED, BPM? Mas de antemão creio que você deverá utilizar a API /2.0/documents/getDownloadURL/{documentId} para capturar o link correto do documento.

---

## Resposta #2

**Leonardo** (@leonardomarthiniano) — 22/06/2022, 11:34

Olá, Jonathan. Cara, consegui resolver. Era um caminho incorreto aqui na hora de buscar o anexo no GED. Agradeço a resposta!

---
