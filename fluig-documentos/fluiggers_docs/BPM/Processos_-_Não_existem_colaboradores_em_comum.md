# Processos - Não existem colaboradores em comum

> **Fonte:** [https://fluiggers.com.br/t/processos-nao-existem-colaboradores-em-comum/2942](https://fluiggers.com.br/t/processos-nao-existem-colaboradores-em-comum/2942)
> **Categoria:** BPM
> **Tags:** `processo`
> **Criado em:** 26/08/2024, 09:58
> **Visualizações:** 113 | **Likes:** 1 | **Respostas:** 5

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 26/08/2024, 09:58

Um dos documentos de BPM que requer aprovação está dando uma mensagem de erro:

> Não existem colaboradores em comum para os mecanismos de atribuição da tarefa e da condição.

Tem ideia de como posso resolver isto? Está me dando uma dor de cabeça danada. O erro acontece logo na primeira aprovação.

![image](https://fluiggers.com.br/uploads/default/original/2X/3/3bfaff702b1870554bddb4e23db7de16c31a33e5.png)

---

## Resposta #1

**venturelli** (@venturelli) — 27/08/2024, 08:36 | ❤️ 1

Esse erro acontece quando tanto na **atividade destino** quanto na **condição** configurada no gateway foram configurados mecanismo de atribuição.

Pegando uma imagem aleatória da internet:
![image](https://fluiggers.com.br/uploads/default/original/2X/f/f4ccb9f988decc9e2d84b44e9c62d44923337d93.png)

Se na atividade foi configurada o grupo A e na condição o grupo B, os usuários possíveis dessa movimentação serão 2, 4 e 6.

Configura os mecanismo e se tem usuários presentes nos dois grupos.

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 27/08/2024, 09:48

Muito bom! Sinceramente nunca usei Mecanismo de Atribuição em Gateway, mas considerando essa explicação dá pra pensar em algumas situações interessantes pra aplicar.

---

## Resposta #3

**MAURO SIMOES** (@Mautresim) — 28/08/2024, 09:16

Caro [@venturelli](/u/venturelli) obrigado por sua resposta. O problema é que eu, quando vejo mecanismo de atribuição, tem um nome de um campo, conforme imagem abaixo, aparece o mecanismo SC Aprovador.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/4/4a4905fbe16aaf0ef4f2d58246dfb88d7c6eb379_2_690x398.png)

Se eu for no formulário, há o campo

`<input type="hidden" name="scCaptador" id="scCaptador">.`

Mas, nos scripts, não vejo como este campo foi preenchido.

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 28/08/2024, 09:32

Esse é um Mecanismo Customizado. Tem que importar ele pro seu projeto, baixando do Servidor, pra ver como ele determina o responsável.

---

## Resposta #5

**MAURO SIMOES** (@Mautresim) — 28/08/2024, 15:14

Bruno, há um arquivo javascript, conforme imagem, que tem o código também na imagem, mas não diz nada do que quero saber. E está em ‘mechanisms’.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/2/2ce6fc6265031d9a92f8e1fe5efee7b3a3f041db_2_690x157.png)

---

## Resposta #6

**venturelli** (@venturelli) — 28/08/2024, 15:59

Está correto. O Fluig permite criar mecanismos de atribuição customizados, que podem ser utilizados por qualquer processo e por isso ficam nesta pasta mesmo.

O teu mecanismo ele está pegando o valor do campo “scEmissorEmissorNH” ou do campo “scCaptador” dependendo do valor do campo “seClientCredit”. Não tem nada de errado nisso.

Mas agora, você deve conferir na configuração do gateway (Preenchimento correto?) verifique nas condições qual está enviando para a atividade “Aprovar” e qual o mecanismo de atribuição que está configurado nessa condição. Pelo que eu vejo da tua regra, esse campo deveria estar vazio.

E confira também no formulário, quais são os valores dos 3 campos citados (você pode olhar no network do navegador, quando ele faz o ‘send’ quais são os dados que estão sendo enviados para o servidor).

---
