# Listar anexos actuales de un proceso

> **Fonte:** [https://fluiggers.com.br/t/listar-anexos-actuales-de-un-proceso/309](https://fluiggers.com.br/t/listar-anexos-actuales-de-un-proceso/309)
> **Categoria:** BPM
> **Tags:** `form`, `anexo`
> **Criado em:** 07/04/2021, 17:58
> **Visualizações:** 2402 | **Likes:** 10 | **Respostas:** 7

---

## Pergunta original

**Julio Kriger** (@Julio_Kriger) — 07/04/2021, 17:58 | ❤️ 1

Hola,

Como puedo hacer para listar los anexos actuales de un proceso desde el formulario del BPM.

Muchas gracias.

Saludos

---

## Resposta #1

**Alef Vinicius** (@alefvinicius) — 08/04/2021, 17:06 | ❤️ 1

Fala, Julio, boa tarde! Que orgulho ver nosso fórum alcançando usuário fora do Brasil! Não sei se entendi muito bem a pergunta, mas quiser ter acesso aos anexos do processo num script do backend você pode utilizar a o post/dica do nosso amigo [@daniel.cabral](/u/daniel.cabral) como referência.

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/daniel.cabral/48/5_2.png) [Valida se um novo anexo foi inserido](https://fluiggers.com.br/t/valida-se-um-novo-anexo-foi-inserido/66) [BPM](https://fluiggers.com.br/c/bpm/5)
>
> > Validar se um novo anexo foi inserido na tarefa corrente: function beforeTaskSave(colleagueId, nextSequenceId, userList) { var numState = getValue("WKNumState"); var process = getValue("WKNumProces"); var anexado = false; var message = ""; if(numState == 0 && hAPI.listAttachments().size() < 2) { message += "<br/>- É necessario anexar os documentos;" } if (numState == 1){ //etapa do processo if (temAnexo() == false) message += "<br/>- É necessario a…

Nele você poderá entender como acessas a lista de anexos e também valida-los.

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 08/04/2021, 17:49 | ❤️ 6

Basicamente você precisa consultar o dataset **processAttachment** para saber quais documentos pertencem ao processo e então pode pesquisá-los no dataset **document**.

Eu utilizo esse [dataset customizado](https://gist.github.com/brunogasparetto/8bca2a174cb6f0de21b2931562599f49) para trazer todos os anexos de um processo juntamente com a sua URL para download (utilizo em alguns widgets).

Talvez com alguma modificação possa lhe ser útil.

---

## Resposta #3

**Julio Kriger** (@Julio_Kriger) — 09/04/2021, 16:08

Hola Ale!
Si, desde Argentina haciendo mucho con Fluig!
La idea es tener un botón en el formulario del BPM, para que al hacer click pueda generar un reporte PDF con información del formulario más una imagen cargada como anexo del BPM.
No tengo disponible al hAPI del lado del browser.
Saludos!

---

## Resposta #4

**Julio Kriger** (@Julio_Kriger) — 09/04/2021, 16:11

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/bruno_gasparetto/48/68_2.png) Bruno\_Gasparetto:
>
> > alvez com al

Hola Bruno,
Gracias por el link.
Consulta, ese data funciona con los archivos adjuntados en ese momento? Es decir estoy en una actividad X, adjunto un archivo y el mismo se va a visualizar en el dataset?
Saludos

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 09/04/2021, 16:29

[@Julio\_Kriger](/u/julio_kriger) , ele retorna todos os anexos. Seria necessário adaptar para trazer os anexos inseridos em uma atividade específica.

---

## Resposta #6

**Julio Kriger** (@Julio_Kriger) — 09/04/2021, 16:47

Obrigado Bruno!

Voy a probar el script.

Saludos

---

## Resposta #7

**Bruno Gasparetto** (@Bruno_Gasparetto) — 09/04/2021, 21:03 | ❤️ 1

[@Julio\_Kriger](/u/julio_kriger) , Para restringir os anexos a uma atividade específica basta cruzar as informações com o dataset **processHistory**. Só seguir o exemplo o exemplo compartilhado pelo [@alefvinicius](/u/alefvinicius) .

---

## Resposta #8

**Julio Kriger** (@Julio_Kriger) — 13/04/2021, 12:03

Hola [@Bruno\_Gasparetto](/u/bruno_gasparetto),

¿Es posible saber los adjunto desde el formulario, accediendo al objeto ECM de javascript?

Saludos!

---

## Resposta #9

**Bruno Gasparetto** (@Bruno_Gasparetto) — 13/04/2021, 14:26

[@Julio\_Kriger](/u/julio_kriger) , acredito que no formulário você consiga acessar os anexos pegando o seguinte array `parent.ECM.workflowView.attachments`.

---

## Resposta #10

**Julio Kriger** (@Julio_Kriger) — 13/04/2021, 14:36

[@Bruno\_Gasparetto](/u/bruno_gasparetto) perfecto! Voy a probar eso. Tiene mucha lógica.

Lástima que no hay documentación clara sobre este tema.

Saludos!

---

## Resposta #11

**Cassius** (@Cassius) — 14/03/2024, 05:35 | ❤️ 1

Bruno, bom dia. Tudo bem?

Muito obrigado por postar esse dataset customizado.
Isso me ajudou enormemente aqui num projeto.
Valeu mesmo!!!

---
