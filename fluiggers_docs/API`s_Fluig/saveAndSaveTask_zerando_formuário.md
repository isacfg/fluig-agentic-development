# saveAndSaveTask zerando formuário

> **Fonte:** [https://fluiggers.com.br/t/saveandsavetask-zerando-formuario/517](https://fluiggers.com.br/t/saveandsavetask-zerando-formuario/517)
> **Categoria:** API`s Fluig
> **Criado em:** 16/06/2021, 16:20
> **Visualizações:** 1059 | **Likes:** 3 | **Respostas:** 6

---

## Pergunta original

**Willian Laynes** (@Willian_Laynes) — 16/06/2021, 16:20

Boa tarde,

Alguém ja teve problema ao consumir o serviço “saveAndSendTask” e ele zerar o formulário movimentado, como se gerasse uma nova versão e só mantivesse os dados que eu enviei.

Tentei setar como versão única o Processo mas não deu certo.

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 16/06/2021, 17:25 | ❤️ 1

Zerando todos os dados?
Quando fui usar esse métodos aconteceu o mesmo comigo, até que descobri que tem que passar todos os dados novamente, caso contrário ele limpa todos os campos mesmo :confused:

---

## Resposta #2

**Willian Laynes** (@Willian_Laynes) — 16/06/2021, 17:43

Aí complica, estava usando o “move”, mas preciso me autenticar com outro usuário e não consegui fazer pelo move.

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 16/06/2021, 17:46 | ❤️ 1

Sempre ouvi falar que precisa enviar todos os dados, mas tenho uma Widget que utiliza esse serviço e envia o cardData vazio e mesmo assim os dados permanecem. No caso utilizamos só pra colocar um comentário de movimentação e fazer o processo andar.

Mas pode ser exatamente por eu mandar `<cardData />`, sem nenhuma informação.

No caso da nossa Widget utilizamos o `updateCardData` para atualizar o formulário (pois acontece em uma etapa) e depois de tudo finalizado usa o `saveAndSendTask` para avançar o processo.

---

## Resposta #4

**Willian Laynes** (@Willian_Laynes) — 16/06/2021, 17:58

Vou tentar atualizar os dados com o UpdateCard e movimentar com o saveAndSendTask passando o card vazio como você falou.

Se der certo aviso aqui.
Obrigado

---

## Resposta #5

**Willian Laynes** (@Willian_Laynes) — 16/06/2021, 19:52 | ❤️ 1

Deu certo assim, enviei os dados com o updateCard e movimentei com seveAndSendTask sem nada no cardData, mas deveriam colocar um parâmetro pra caso o desenvilvedor não queira gerar versão zerada dos campos.

Obrigado

---

## Resposta #6

**Willian Laynes** (@Willian_Laynes) — 16/06/2021, 19:55

Tinha pensado nisso também, mas daria muito trabalho, fora que poderia ocorrer de ter atualização do formulário e eu ter que ficar dando manutenção. Usei igual o [@Bruno\_Gasparetto](/u/bruno_gasparetto) sugeriu.

---

## Resposta #7

**Sérgio Machado** (@sergio.machado) — 16/06/2021, 20:12

No meu caso era um sistema externo, que atualizava alguns campos, inseria um anexo e movimentava a atividade, então não tinha como fugir rsrsr

Também bem zoado essa questão de ter que passar todas as informações novamente

---

## Resposta #8

**Bruno Gasparetto** (@Bruno_Gasparetto) — 16/06/2021, 20:43

É igual a colocar disabled nos campos de formulário e avançar. Eles são apagados.

Mas é estranho não apagar passando cardData vazio. Meio que buga o funcionamento.

---

## Resposta #9

**system** (@system) — 17/06/2021, 12:43

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
