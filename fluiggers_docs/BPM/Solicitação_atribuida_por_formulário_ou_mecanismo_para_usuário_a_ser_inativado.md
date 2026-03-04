# Solicitação atribuida por formulário ou mecanismo para usuário a ser inativado

> **Fonte:** [https://fluiggers.com.br/t/solicitacao-atribuida-por-formulario-ou-mecanismo-para-usuario-a-ser-inativado/2949](https://fluiggers.com.br/t/solicitacao-atribuida-por-formulario-ou-mecanismo-para-usuario-a-ser-inativado/2949)
> **Categoria:** BPM
> **Tags:** `processo`, `bpm`, `usuario`
> **Criado em:** 31/08/2024, 12:00
> **Visualizações:** 147 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**Matheus Mósso** (@msmosso) — 31/08/2024, 12:00

Bom dia pessoal.

Crio esse tópico com o intuito de discutir sobre as solicitações que são atribuídas para usuários que foram inativados ou serão inativados na plataforma (ex-colaboradores).

Em nossos formulários nos acostumamos a atribuir a atividade Ajustar com o mecanismo “Por executor de atividade”, informando o usuário executor da atividade de Início. Mas há casos em que o usuário que iniciou a atividade saiu da empresa e foi inativado no Fluig, o que acaba nos gerando um problema. Por não encontrar o usuário ativo, o Fluig acaba tornando a atividade Início uma atividade de consenso (com todos os usuários que podem iniciar o processo). O Fluig também notifica por e-mail todos esses usuários, gerando uma confusão desses.

Uma outra dúvida que existe, também sobre os casos de usuários que, dessa vez, serão inativados (quando somos informados que o colaborador pediu demissão, por exemplo): Em alguns processos, usamos o mecanismo de atribuição “Por campo de formulário”. Nesses casos, quando precisamos inativar o usuário, ele possui muitas solicitações pendentes que não podem ser transferidas pelo “Transferir pendências” do Painel de Controle, o que nos faz ter que acessar o Fluig do usuário e, solicitação por solicitação, usar o inspecionador do navegador, alterar manualmente o campo e selecionar a opção ‘Transferir’.

Vocês conhecem alguma solução alternativa para evitar esses casos?

Obrigado desde já.

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 02/09/2024, 09:20

Eu estava muito acostumado a sempre usar campo de formulário pra maioria dos casos, e precisava realmente ir em cada formulário para alterar manualmente a matrícula presente no campo e só então efetuar a transferência.

Passei a utilizar esse mecanismo por executor da atividade, mas não passei por uma situação semelhante ainda. Agora até fiquei preocupado.

Em alguns casos estou utilizando mecanismo customizado e neles sempre deixo uma opção pra quando identifico que é transferência permitir selecionar o usuário destino, mas no caso de usuário inativado acredito que teria o mesmo problema.

---

## Resposta #2

**Igor Rodrigues** (@fluigor.com.br) — 02/09/2024, 12:45

[@Bruno\_Gasparetto](/u/bruno_gasparetto) [@msmosso](/u/msmosso)

Para processos pendentes ou abertos, chegam a utilizar o Transferir Pendências?
uma vez que eu geralmente recomendo na configuração do executor da atividade utilizar a ultima movimentação.
Porém vale abrir um ticket, caso após a utilização do recurso mencionado termos problemas com o retorno!

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 02/09/2024, 13:04

Sim, normalmente utilizo a transferência pelo painel de controle.

Ainda não tive situação atual com os processos que utilizei mecanismo por executor da atividade. Ficarei atento quando tiver que efetuar transferência.

---
