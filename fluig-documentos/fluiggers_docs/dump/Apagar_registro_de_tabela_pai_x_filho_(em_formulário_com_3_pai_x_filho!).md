# Apagar registro de tabela pai x filho (em formulário com 3 pai x filho!)

> **Fonte:** [https://fluiggers.com.br/t/apagar-registro-de-tabela-pai-x-filho-em-formulario-com-3-pai-x-filho/728](https://fluiggers.com.br/t/apagar-registro-de-tabela-pai-x-filho-em-formulario-com-3-pai-x-filho/728)
> **Categoria:** BPM
> **Criado em:** 19/10/2021, 18:57
> **Visualizações:** 1431 | **Likes:** 1 | **Respostas:** 4

---

## Pergunta original

**Vinicius de Moura Silveira** (@vinny.silveira) — 19/10/2021, 18:57

Olá pessoal!

Até vi aqui em outro tópico que tem uma pergunta parecida, só que no meu caso, eu possuo mais de uma tabela pai x filho no formulário, como eu faço para apagar somente uma linha de uma das tabelas?

---

## Resposta #1

**Victor Castro** (@victorcastro) — 20/10/2021, 08:32

Vê se funciona pro que você tá precisando. Nunca testei fazer dessa forma. Tentei pensar em uma lógica que pudesse se encaixar no problema.

```javascript
var cardData = hAPI.getCardData(numSolicitação)
var it       = cardData.keySet().iterator();
while (it.hasNext()) {
   var campo = it.next();

   if (campo.match(/nomeDoCampo___/)) {
      var i = campo.split("___")[1];

      cardData.remove(campo);
      cardData.remove("nomeDoCampo2___" + i);
      cardData.remove("nomeDoCampo3___" + i);
   }
}
```

---

## Resposta #2

**Vinicius de Moura Silveira** (@vinny.silveira) — 21/10/2021, 17:01

Ele não persiste a alteração no form :pensive:, é como se ele removesse um item de uma array qualquer e não fizesse qualquer diferença no registro.

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Vinicius de Moura Silveira** (@vinny.silveira) — 21/10/2021, 21:51

Bom, parece que não tem como mesmo através dos métodos normais… Acabei fazendo um dataset que executa um `delete` direto na tabela do formulário, sei que é “**feio**” mas é a **ÚNICA** alternativa… Valeu pessoal!

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 21/10/2021, 23:31

Talvez um `hAPI.setCardValue("nomedocampo___" + indicePraExcluir, null)` o remova, mas tem que fazer isso pra todos os campos da tabela.

Ao menos quando é no Web Service (soap) é mais ou menos isso que resolve.

Em último caso é possível usar o WS Rest, pois ele tem método para excluir pai filho

---

## Resposta #5

**Vinicius de Moura Silveira** (@vinny.silveira) — 22/10/2021, 10:15 | ❤️ 1

Opa, fala Brunão!

Então, com o [WS Rest](https://api.fluig.com/latest/ecm-forms/swagger-ui/#/Form_records/deleteChild) não rola, pois como já testei, ele exclui a linha de **TODAS** as tabelas pai x filho de um formulário, não tendo a opção de informa qual tablename deve ser atualizada.

Quanto ao SOAP, dessa forma ele só zera o valor do item e não remove o registro da tabela de fato :pensive:

Mas valeu!!

---
