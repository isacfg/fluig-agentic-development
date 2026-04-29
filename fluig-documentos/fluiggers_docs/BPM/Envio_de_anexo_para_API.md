# Envio de anexo para API

> **Fonte:** [https://fluiggers.com.br/t/envio-de-anexo-para-api/207](https://fluiggers.com.br/t/envio-de-anexo-para-api/207)
> **Categoria:** BPM
> **Criado em:** 23/03/2021, 17:24
> **Visualizações:** 1061 | **Likes:** 1 | **Respostas:** 2

---

## Pergunta original

**Wasley Santos** (@Wasley_Santos) — 23/03/2021, 17:24

Galera

Alguém tem algum exemplo, ou “norte” para se enviar um anexo do Fluig para um ws?
Estou precisando enviar anexos de processo para uma API no Protheus.
Fiz umas pesquisas iniciais, parece que seria o WS ECMDocumentService e usando o objeto Attachment. Alguém poderia me orientar/confirmar.

---

## Resposta #1

**Julio Kriger** (@Julio_Kriger) — 31/03/2021, 15:42 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/wasley_santos/48/77_2.png) Wasley\_Santos:
>
> > Fiz umas pesquisas iniciais, parece que seria o WS ECMDocumentService e usando o objeto Attachment. Alguém poderia me orientar/confirmar.

Hola! hice algo similar. En el BPM, en un servicio (lo podes hacer desde el WS), tenes que hacer un GET a la url: ‘/process-management/api/v2/requests/’ + WKNumProces + ‘/attachments’, ahí obtenes los adjuntos, luego al WS le pasas el parametro “fileURL” de los adjuntos y desde el WS lees el archivo.

Saludos

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 05/04/2021, 12:11

Já vi algo parecido, mas não lembro o local que vi e tenho pouco conhecimento nessa parte.

Mas pelo que lembro você usa o serviço **ECMDocumentService** pra pegar o Documento e acho que tem que usar a **ByteArrayInputStream**, do Java, pra conseguir inserir na requisição que será enviada ao WS destino. Mas não lembro como fizeram isso no exemplo que vi.

---

## Resposta #3

**Wasley Santos** (@Wasley_Santos) — 20/04/2021, 18:56

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/julio_kriger/48/192_2.png) Julio\_Kriger:
>
> > fileURL

Oi Julio

E como eu consigo o parâmetro “fileURL” pois o response desse endpoint não retorna essa informação.

---

## Resposta #4

**Julio Kriger** (@Julio_Kriger) — 21/04/2021, 06:19

Hola [@Wasley\_Santos](/u/wasley_santos),
Te paso un ejemplo de como acceder a fileURL.

> async documentUrl(id: number) {
> const body = await rp({
> rejectUnauthorized: false,
> url: `${process.env.FLUIG_URL}/api/public/ecm/document/activedocument/${id}`,
> oauth: {
> consumer\_key: process.env.FLUIG\_CONSUMER\_KEY,
> consumer\_secret: process.env.FLUIG\_CONSUMER\_SECRET,
> token: process.env.FLUIG\_ACCESS\_TOKEN,
> token\_secret: process.env.FLUIG\_TOKEN\_SECRET,
> },
> json: true,
> options: {
> encoding: ‘UTF-8’,
> mediaType: ‘application/json’,
> },
> headers: {
> ContentType: ‘application/json;charset=UTF-8’,
> },
> }).catch(error => {
> Logger.error(`Error al obtener el documento ${id}`, error);
> throw error;
> });
> return { filename: body.content.description, fileURL: body.content.fileURL };
> }

Saludos

---
