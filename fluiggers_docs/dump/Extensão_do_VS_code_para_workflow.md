# Extensão do VS code para workflow

> **Fonte:** [https://fluiggers.com.br/t/extensao-do-vs-code-para-workflow/3209](https://fluiggers.com.br/t/extensao-do-vs-code-para-workflow/3209)
> **Categoria:** IDEs (Ferramentas de Desenvolvimento)
> **Tags:** `processo`
> **Criado em:** 19/03/2025, 14:41
> **Visualizações:** 269 | **Likes:** 19 | **Respostas:** 10

---

## Pergunta original

**Caio Racy** (@Caio_Racy) — 19/03/2025, 14:41 | ❤️ 1

Olá pessoal, implantamos o fluig na minha empresa faz alguns meses e eu estou construindo os fluxos. Como um novo desenvolvedor de fluig, fui instruído a usar o eclipse Luna por ser homologado da TOTVS, tive que ter uma pequena adaptação com a IDE, visto que usava só o VS Code para meus outros projetos. Como agora a pretensão é aumentar a quantidade de desenvolvedores de fluig na empresa, vou tentando bolar uma boa estrutura para varias pessoas trabalharem em conjunto. Comecei a usar a extensão do VS code e vi uma grande melhoria em alguns aspectos, dito isso minha dúvida é a seguinte:

Para exportar o workflow não tem nada planejado na extensão?

Acredito que a complexidade deve ser bem maior de tratar, pois estou pensando em usá-la juntamente com o git para separar meus ambientes de homologação e produção, deixando apenas a programação do workflow para o eclipse.

---

## Resposta #1

**Augusto Bem-Haja** (@Augusto_Bem-Haja) — 19/03/2025, 21:59 | ❤️ 1

Olá Caio,
Para exportar e importar o diagrama, somente através do plugin Fluig, no Eclipse.
Abraço

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 19/03/2025, 22:17 | ❤️ 4

Teve uma época que eu estava estudando quais são os endpoints pra efetuar exportação/importação dos workflows, mas com as demandas do dia a dia acabei deixando um pouco de lado. Mas temos essa vontade de conseguir exportar diagramas principalmente pensando na exportação dos eventos de processos.

Agora com a versão 1.8.2 do Fluig muita coisa deu problema e ainda precisamos ajustar alguns itens da extensão pra funcionar 100% nele (sei que exportar widgets tá com problema), e como ainda estou usando a versão 1.8.1 meu contato pra fazer as correções tá menor.

Porém temos um membro da comunidade que está testando uma abordagem diferente. Ele criou uma widget pra inserir no Fluig e ela disponibilizar alguns endpoints pra conseguir fazer algumas coisas, como por exemplo atualizar um evento de processo sem precisar mudar a versão do processo (ao menos é a ideia e parece que tá indo bem).

---

## Resposta #3

**Daniel Costa** (@DevDan99) — 24/03/2025, 11:41 | ❤️ 1

Bom dia [@Caio\_Racy](/u/caio_racy), tudo bem? Eu trabalhei com Fluig cerca de pouco mais de 1 ano, e na empresa que fazia os projetos eu sempre codava no Vs Code e fazia o Deploi com eclipse, nunca tive problemas, mas, trabalhava coma versão 1.8.1, agora com a versão 1.8.2 eu acredito que de para codar com VS Code e subir com eclipse ainda mais que a versão do eclipse que usava era a mais antiga porque a TOTVS não tinha o Fluig na versão nova do Eclipse. Então era melhor no vsc, além do mais o VS code ajuda muito a programar no Front. Ai nesse caso eu não usava os plugins eu apenas codava mesmo!
Ps: Caso se sua empresa estiver contratando Dev eu estou disponível no mercado. Segue meu linkedin: [www.linkedin.com/in/danielcosta-](http://www.linkedin.com/in/danielcosta-)
Se puder dar uma força! Agradeço demais!

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 19/04/2025, 15:04 | ❤️ 2

Só pra retomar o assunto, estou estudando como fazer a exportação de workflow, mas pelo que já entendi é a parte mais complicada, pois precisa montar um XML específico com todos os itens do workflow pra enviar ao servidor do Fluig.

Mas por enquanto temos a opção de atualizar eventos de processo. O que já ajuda bastante no desenvolvimento.

---

## Resposta #5

**Caio Racy** (@Caio_Racy) — 22/04/2025, 10:43

Ola Bruno, legal hein, mas o que esse atualizar evento de processo faz? Ele pega uma task criada por exemplo e atualiza direto? sem precisar exportar o workflow? Se for vai ser uma mão na roda. Como eu utilizo ele?

---

## Resposta #6 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/04/2025, 10:57 | ❤️ 4

Ele **atualiza** um evento do Workflow sem precisar exportar o workflow em si. Então o evento já deve existir no servidor Fluig.

Primeiro precisa executar o comando que exporta a nossa Widget auxiliar para o seu servidor Fluig. Só apertar F1 e depois digitar `fluig: exportar` que já trará a opção (ou Ctrl + P e digitar `>fluig: exportar`).

Aí enquanto estiver editando um Evento de Processo ou Atividade de Serviço (internamente ela é um evento pro processo) aperta Ctrl + F9 pra exportar o evento/atividade pro Fluig.

Ele vai perguntar pra qual versão do processo quer exportar, já trazendo a última versão preenchida.

Fizemos esse comando pra auxiliar no desenvolvimento e pra efetuar pequenas correções nos eventos do workflow, afinal pode acontecer de ter algum pequeno erro de lógica que só é descoberto em produção e ter que executar a conversão de todas as solicitações abertas pode ser muito custoso.

---

## Resposta #7

**Caio Racy** (@Caio_Racy) — 22/04/2025, 14:47

Rapaz, mais uma vez excelente, isso realmente acontece mais do que eu imaginava aqui e converter versão é realmente muito demorado, preciso fazer um ajuste realmente e ja vou usar esse formato para subir um ajuste em produção.

Descobrindo cada vez mais coisas boas de usar! Está salvando demais hahaha

---

## Resposta #8

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/04/2025, 15:11 | ❤️ 1

Só testa antes em homolog hein, hehehe.

Ainda não fizemos testes intensos nisso.

O [@Daniel\_Sales](/u/daniel_sales) teve a iniciativa de fazer a widget pra fazer importação de widgets e lembrou dessa necessidade que tinha levantado de atualizar evento sem mexer na versão. Aí já aproveitou o embalo.

É triste que formulário aceita atualizar os eventos sem mudar a versão, basta não mexer nos inputs. Mas workflow não dá essa opção.

---

## Resposta #9

**Jonathas** (@JonathasFluig) — 22/04/2025, 23:23

Opa digo o mesmo que o amigo ai falou.
Se precisar de desenvolvedor fluig Junior só avisar.

---

## Resposta #10

**Caio Racy** (@Caio_Racy) — 24/04/2025, 15:01 | ❤️ 1

Rapaz deu super certo, testamos em homolog com uns servicetasks e depois fiz um testezinho em produção, funcionou bem.

Pensei numa logica pra não usar isso a torto e a direito, vamos usar em caso de hotfixes pequenos e necessários ou em homolog pra não precisar ficar exportando a todo momento, agiliza em muito o tempo de desenolvimento, principalmente no fluxo que tenho aqui que está gigantesco e leva muito tempo para exportar!

---

## Resposta #11

**Caio Racy** (@Caio_Racy) — 11/09/2025, 09:31

Voltando pra verificar se com o a versão 2.0 do Fluig vai afetar esse widget ai e se alguém ja testou. Esse widget se tornou muito útil e funcional. Ai estou pensativo em migrar para a 2.0 sem esse widget funcional.

[@Bruno\_Gasparetto](/u/bruno_gasparetto) você sabe se alguem testou? E qualquer coisa até eu me disponibilizo para testar e melhorar esse widget

---

## Resposta #12

**Bruno Gasparetto** (@Bruno_Gasparetto) — 11/09/2025, 09:40 | ❤️ 1

Fiz vários testes no Lab Fluig, que já estava no 2.0. Dos testes que fiz não tive nenhum problema. Consegui upar widget, formulário, alterar eventos etc.

Mas só o tempo e utilização mostrarão possíveis problemas que necessitem de correção.

---

## Resposta #13

**Caio Racy** (@Caio_Racy) — 11/09/2025, 09:59

Bom saber,

Estou vendo com o consultor de colocar numa VM separada para nao atrapalhar os desenvolvimentos e ai vamos dar uma estressada nos testes.

Pelo que vi as mudanças foram mais funcionalidades e CSS do que alterações no legado ou correções. a parte de criação de formulário eu até que gostei.

Vamos acompanhando, novidades eu trago aqui tbm!

---

## Resposta #14

**Bruno Gasparetto** (@Bruno_Gasparetto) — 11/09/2025, 10:01 | ❤️ 1

Só tem que se atentar que Formulário criado na Web não será editável via Eclipse/VS Code. Eles não terão a opção de importar/exportar, pelo que comentaram nas demonstrações.

Porém confesso que não testei o desenhador de formulário no Lab. Foquei só em testar a extensão e widgets.

---

## Resposta #15

**Igor Rodrigues** (@fluigor.com.br) — 18/09/2025, 20:33 | ❤️ 1

Parabéns [@Bruno\_Gasparetto](/u/bruno_gasparetto) absurdamente impressionado com essa feature! desde que passei a utilizar! tks por tanto! <3

---

## Resposta #16

**Igor Rodrigues** (@fluigor.com.br) — 18/09/2025, 20:35

eu ja pensei em criar um modelador com alguns componentes e gerar um XML compativel com o fluig similiar ao que vem no export de processsos!

---

## Resposta #17

**Daniel Sales** (@Daniel_Sales) — 24/09/2025, 11:02

[@Bruno\_Gasparetto](/u/bruno_gasparetto) da para verificar se o evento existe se não existir e so adicionar a linha do evento que ele passa a exisitr para por na extenção essa funcionalidade.

---

## Resposta #18

**Bruno Gasparetto** (@Bruno_Gasparetto) — 29/12/2025, 06:11 | ❤️ 1

Fiz uma atualização na widget para criar evento de processo. Então agora não faz só update.

Nisso aproveitei pra mudar o nome do comando na extensão pra “Exportar Evento de Processo”.

Mas mantive os endpoints iguais pra não ter problemas de compatibilidade.

---
