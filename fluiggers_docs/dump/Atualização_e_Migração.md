# Atualização e Migração

> **Fonte:** [https://fluiggers.com.br/t/atualizacao-e-migracao/765](https://fluiggers.com.br/t/atualizacao-e-migracao/765)
> **Categoria:** Ambiente Fluig
> **Tags:** `fluig`
> **Criado em:** 06/11/2021, 07:58
> **Visualizações:** 3724 | **Likes:** 0 | **Respostas:** 7

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 06/11/2021, 07:58

Amigos, eu estou na versão 1.6.4 e preciso ir para a versão 1.7.1.
Entretanto, estou muito confuso com relação ao que diz a página de criação de ambiente de homologação.
A página diz o que fazer e não dá certo no fim das contas. Vou para o Suporte e ele diz que eu tenho de seguir as instruções que estão naquela página que não deu certo.
Estou cansado e muito disto acredito que seja decorrente de minha inexperiência, pois sou autodidata em Fluig.

O que foi que eu fiz (instruções da página \[[Guia de atualização da plataforma - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=271666186)\]([https://Guia](https://Guia) de atualização da plataforma):

1 - Copiei para o servidor (na nuvem) toda a pasta c:\\fluig do servidor de produção (1.6.4), mantendo a partição e nome de pasta. Tudo igual.
2 - Copiei o c:\\volume do servidor de produção (1.6.4) para o da nuvem.
3 - Criei um banco de dados SQL SERVER com o nome de FluigHOM no servidor da nuvem e copiei os dados do SQL SERVER que constava no servidor de produção (1.6.4) para este banco de homologação
4 - No servidor da nuvem, alterei o domain.xml, reapontando os IPs para o banco de dados FLUIGHOM da nuvem, assim como alterei o Databasename para FLUIGHOM, a fim de que esta cópia ‘se esquecesse’ das informações constantes no fluig 1.6.4.
5 - Apliquei a atualização, no servidor da nuvem, para a **versão 1.6.5 com sucesso**.
6 - Ao tentar aplicar a atualização para a versão 1.7.1 apareceu uma mensagem que a atualização não estava conseguindo usar o banco de dados.
7 - Abri um chamado e o Suporte me disse por que eu estava usando a versão 210928, quando eu deveria usar a 211026, porque ‘recentemente a Totvs tinha lançado uma correção por causa de senha com caracteres especiais que o Fluig não entendia ao tentar conexão com o banco de dados’ (resposta típica de Call Center, que eu já pressenti ser uma dessas, cosméticas, para ganhar tempo, enquanto o usuário fica longe de pensar em novas perguntas e ele não saber o que responder). Não é difícil de imaginar que não era nada disto, pois alterei a senha para ficar igual ao servidor 1.6.4, o de produção, que contém só ‘underlines’, para o tira-teima usei a nova versão e nada funcionou.
8 - Após ajuda com o pessoal interno, descobri que o problema era que o IP apontando para o banco de dados estava sendo bloqueado por regras de rede. Consertado isto, tentei nova atualização.
9 - Agora a mensagem de erro era outra: que o serviço RealTime estava ativo, sendo que não existia nenhum serviço ligado ao Fluig, uma vez que copiei somente as pastas e não tinha criado os serviços.
10 - Abri um chamado no Suporte da Totvs, que me sugeriu verificar se não existia nenhum processo Java ativo. Não tinha.
11 - O suporte sugeriu então que reiniciasse o servidor. Reiniciei e o mesmo erro aconteceu.
12 - Depois, para minha maior confusão, me disse o Suporte que eu não tinha de copiar a pasta do Fluig de produção para poder atualizar, que somente eu deveria preservar a pasta APPS se eu tivesse Widgets customizadas. Perguntei como eu iria trazer somente a pasta APPS para eu poder preservar mnhas widgets e me disseram para seguir a página de instalação.
13 - Por fim, como costuma acontecer, o Suporte disse para eu seguir aquela página lá no início, prenunciando um loop eterno de não-resolução.
14 - Pensei comigo: será que, de algum modo, o servidor de Produção, o 1.6.4, estava ativo e por isto o Real\_time dele estava interferindo no da nuvem?
15 - Derrubei o Fluig 1.6.4 e fui tentar novamente a atualização na nuvem e o erro inicial, aquele que dizia que não conseguia chegar ao banco de dados, o do item 6, voltou a acontecer, e estou na estaca zero.

Alguém teria uma pista? Desde já, agradeço.

---

## Resposta #1

**Allan Reichert** (@allan.reichert) — 11/11/2021, 15:32

Olá, tentou atualizar para a versão 1.7.0 antes?

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 11/11/2021, 16:58

Caro Allan, eu já superei o problema de não achar o banco de dados. O SQL Server não estava sendo atingido nem mesmo pelo SQL Management, porque a instância padrão não existia, ou não estava respondendo. Só com instância nomeada é que eu poderia acessar o banco via SQL Management. Entretanto, o Fluig não aceita instância nomeada e, por isto, eu abri esta consulta no forum.
Mas, agora, estou com outro problema e que já vi em outro forum que muitas pessoas também empacaram na atualização. O problema agora é que não consigo atulizar porque o procedimento **acusa o RealTime ativo**, coisa que não está. O serviço não está rodando. Enfim, estou tropeçando em problemas.

Já tentei as coisas que citaram lá, tais como parar e restabelecer os serviços do SQL Server, dar boot no servidor, parar o serviço do IIS (quem nem existe), nada disto funciona.

---

## Resposta #3

**Allan Reichert** (@allan.reichert) — 11/11/2021, 17:52

Tive também esse problema a um tempo atrás, se não me engano removi o serviço do realtime e depois de atualizado recriei os serviços

para remover: SC DELETE NOME\_DO\_SERVICO

para recria-los:
[https://tdn.totvs.com/pages/releaseview.action?pageId=285662306](https://tdn.totvs.com/pages/releaseview.action?pageId=285662306)

---

## Resposta #4

**MAURO SIMOES** (@Mautresim) — 11/11/2021, 18:29

Não adiantou. Deletei e nada. Abri um chamado na Totvs e, como sempre, vem as respostas do tipo telemarketing “desliga e espera 10 segundos e liga de novo; veja se o cabo está bem conectado”, só que diferente. Passa uma página que tem outros erros e dá a receita de sempre, que é para limpar os arquivos temporários, dar boot, parar os serviços (que nem existem), tentar renomear a pasta de instalação para ver se o Windows impede (indicando que existem programas abertos), etc.

---

## Resposta #5

**Allan Reichert** (@allan.reichert) — 12/11/2021, 14:00

Verifica se já não tem uma nova versão no site, talvez seja bug do instalador. Tenta também executar o instalador como administrador. Caso contrário não sei mais o que poderia ser.

---

## Resposta #6

**MAURO SIMOES** (@Mautresim) — 12/11/2021, 14:15

Muito obrigado, Allan, pelo interesse.
Mas não há uma nova versão, que, aliás, já tinha trocado.
Bug do instalador não deve ser porque, daí, estaríamos todos lascados.
E a instalação sempre fiz como administrador.
Não tem jeito, nem o suporte responde à ultima questão, que foi ter obedecido às dicas deles e nada muda.

---

## Resposta #7

**Daniel Cabral Santos** (@daniel.cabral) — 18/11/2021, 08:49

Allan, tenta o seguinte…pare todos os serviços e tente renomear a pasta do Fluig. Se houver algum processo em execução, você não vai conseguir.

Instale o Unlocker e veja quem é o agressor - pode não ser necessariamente o realtime.

---

## Resposta #8

**MAURO SIMOES** (@Mautresim) — 19/11/2021, 07:19

Caro Daniel,
obrigado pela dica.
Mas já havia renomeado a pasta, e foi permitido. Ou seja, não há nenhum aplicativo que esteja ocupando espaço em memória para impedir o funcionamento.

---

## Resposta #9

**Daniel Cabral Santos** (@daniel.cabral) — 19/11/2021, 08:59

Caraca! Só consigo pensar em bug do instalador até então…mas se já foi descartado, blz. A TOTVS se manifestou?

---

## Resposta #10

**MAURO SIMOES** (@Mautresim) — 19/11/2021, 10:10

Respondeu, como eu disse, apenas como resposta de telemarketing. Só faltou pedir para desligar o modem, esperar dez segundos, e ligar de novo.
O suporte, no fim, jogou a toalha e passou para um técnico mais ‘adequado’, que me pediu um checklist do tamanho do mundo, me pedindo até quanto eu calçava.

Eu estou desconfiado de que, embora a mensagem seja sobre o Realtime estar ‘up’, pode ser um conflito qualquer com os vários softwares residentes para funcionar na nuvem e com máquina virtual. Ainda não sei.

---

## Resposta #11

**Igor Rodrigues** (@fluigor.com.br) — 29/11/2021, 23:20

Bom dia [@Mautresim](/u/mautresim)

Vamos aos pontos.
Ja começamos do principio que estas em uma versão 1.6.4

Dever atualizar para a ultima versão disponivel no portal 1.6.5, caso no momento da atualização o instalador aponte algum servico no ar, sendo windows, verifique se algum dos 3 servicos da plataforma estão como automaticos.
mude todos para manual e reinicie o servidor.
após realizar isso, altere o nome da pasta do fluig para \_OLD e faca uma isntalacao conforme instrui abaixo.
lembre na 1.6.4 ainda não existia o indexer e sim o serviço chamado memCached.

Lendo um pouco do histórico, me parece que estas querendo atualizar um ambiente de homologação, com dados de um backup do ambiente de produção ( desculpe eu não le todos os comentários)
se caso esse for o cenário o mais correto é fazer uma instalação zerada da 1.6.5 apontando para seu banco que está na 1.6.4
Situacoes envolvendo conexoes com o banco e instancias são muito direcionadas a infra interna.

Após ter seu ambiente na 1.6.5 ai você poderá levar ela para 1.7.0 e posteriormente para a 1.7.1

qualquer duvida pode me procurar no skype, que te dou uma força.

Abraco.

---

## Resposta #12

**MAURO SIMOES** (@Mautresim) — 30/11/2021, 08:38

Fluigor, muito obrigado por suas dicas.
Todos esses passos foram feitos e já desisti disto.
Já fui por tantas vertentes diferentes que já nem sei mais do que estou tratando.

Por último, mudei de servidor de estratégia, e agora estou em contato direto com o suporte da Totvs. Caí no atendimento de um especialista que realmente tem me ajudado bastante agora.

Mas, com minha velha experiência, sei que não vai dar em nada e, muito provavelmente, vou aceitar sua generosa oferta.

---

## Resposta #13

**Igor Rodrigues** (@fluigor.com.br) — 30/11/2021, 13:12

só me chamar la! [igorskater@gmail.com](mailto:igorskater@gmail.com)

---
