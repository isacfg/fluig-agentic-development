# Bloquear nova solicitação por expiração de data

> **Fonte:** [https://fluiggers.com.br/t/bloquear-nova-solicitacao-por-expiracao-de-data/172](https://fluiggers.com.br/t/bloquear-nova-solicitacao-por-expiracao-de-data/172)
> **Categoria:** BPM
> **Criado em:** 18/03/2021, 16:14
> **Visualizações:** 428 | **Likes:** 5 | **Respostas:** 2

---

## Pergunta original

**Cassius** (@Cassius) — 18/03/2021, 16:14 | ❤️ 1

Boa tarde a todos.

Hoje eu tenho um processo que quando chega em determinada data (data limite) não devem ser mais permitidas novas solicitações.
Eu pego a data atual via **javascript** e comparo com a data que eu tenho como data limite para realizar este bloqueio.
Porém, percebi que quando pego a data atual, ele pega a data da máquina do solicitante, ou seja, algo muito frágil, pois se ele perceber isso (o que não é difícil) ele muda a data da sua máquina para uma data menor que a data limite e realiza a inscrição.
Já fiz este teste e consegui fazer uma inscrição indevida.
Tem como eu, ao invés de pegar a data da máquina do solicitante, comparar com a data do servidor?

Obrigado.

---

## Resposta #1

**Vinicius de Moura Silveira** (@vinny.silveira) — 18/03/2021, 18:27

Boa noite [@Cassius](/u/cassius) ,

Você pode consumir uma API pública que te retorna o horário exato em JSON, essa é um exemplo: [World Time API - America/Sao\_Paulo](http://worldtimeapi.org/api/timezone/America/Sao_Paulo)

Segue exemplo abaixo do retorno:

![image](https://fluiggers.com.br/uploads/default/optimized/1X/2ba80ee072663f8aff796c1639d6c27c31d99a62_2_442x375.png)

Espero ter ajudado!

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Alef Vinicius** (@alefvinicius) — 18/03/2021, 23:24 | ❤️ 2

Cassius, **basta efetuar a validação em um evento do backend: eventos de processo ou de formulário**. Você pode efetuar a mesma validação em um displayFields e já disparar mensagem para o usuário que não é possível iniciar a solicitação. Qualquer outro evento, desde que seja do backend, ao utitilizar

***var dataAtual = new Date();***

retornará a data atual do servidor! Nos avisa se deu certo, hein?! Boa sorte!

---

## Resposta #3

**Cassius** (@Cassius) — 19/03/2021, 00:06 | ❤️ 2

Obrigado [@vinny.silveira](/u/vinny.silveira) e [@alefvinicius](/u/alefvinicius) .
Achei interessante as duas opções. Vou dar uma pesquisada em ambas, pois como dizia meu avô que era italiano “*impara l’arte e mettila da parte*”, ou seja, aprende e guarda que uma hora você vai precisar do que aprendeu.
Novamente obrigado.

---

## Resposta #4

**Victor Castro** (@victorcastro) — 19/03/2021, 09:56

Bacana, [@Cassius](/u/cassius). Se uma das respostas resolveu o seu problema, não esquece de marcar a mesma como “RESOLVIDO” :grinning:

---

## Resposta #5

**Cassius** (@Cassius) — 19/03/2021, 10:19

Pronto, marcado [@victorcastro](/u/victorcastro) ! :wink:

---
