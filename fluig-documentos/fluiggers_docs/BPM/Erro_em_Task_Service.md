# Erro em Task Service

> **Fonte:** [https://fluiggers.com.br/t/erro-em-task-service/3556](https://fluiggers.com.br/t/erro-em-task-service/3556)
> **Categoria:** BPM
> **Tags:** `processo`, `bpm`, `fluigapi`, `widget`
> **Criado em:** 05/02/2026, 16:12
> **Visualizações:** 38 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Hélio Monteiro** (@Helio_Monteiro) — 05/02/2026, 16:12

Olá pessoal, alguém sabe usar estas servicetask?

Em um processo aqui da empresa possui um deste. Quando cai nele fica em loop e não sai.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/2/2cf4233e02b973c80a021278fd4e82b417ebfa6f_2_690x426.png)

Como funciona esta task, vi que gera um script com o código dela. E este raio, não sei como foi criado.

Conseguem me indicar algum material, video que explique o funcionamento de ambas pra eu compreender?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 05/02/2026, 16:23

A Atividade de Serviço serve para realizar integrações com serviços externos. Assim a gente vincula um Script a essa atividade, o qual executará todo o trâmite da integração.

Devido a isso é necessário capturar os erros que essa integração dispare, impedindo a integração. Essa captura de erro (try…catch) é feita por esse “relâmpago”.

Quando a gente cria a atividade serviço podemos indicar se vai disparar no momento que chega nela, fazendo o usuário esperar a execução, ou se será feita de forma assíncrona. Assim a gente indica quantas tentativas essa atividade tentará efetuar a integração. Caso ocorram mais erros do que a quantidade de tentativas configuradas então o fluxo seguirá pra atividade para a qual o relâmpago está apontando.

Nesse seu fluxo parece que a integração é obrigatória, não dando uma opção alternativa, forçando que o usuário envie novamente para a integração após analisar o erro.

O erro você enxergará na aba “Histórico” do processo, ou no pior dos casos no Log interno do Fluig.

Aqui eu tenho fluxos que seguem essa obrigatoriedade, mas tenho fluxos que permito que o usuário faça a integração manualmente. Vai de cada necessidade.

Por exemplo, tenho fluxo que caso ocorra o disparo do erro, cairá pra uma equipe analisar o motivo do erro e, caso seja algo como serviço indisponível temporariamente, pode só encaminhar novamente pra atividade tentar executar novamente. Porém se o erro for falta de saldo nos centros de custos ela manda o fluxo pro solicitante alterar o rateio informado, e então volta a tentar integrar com o sistema externo.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/7/76da240f39d092ab6a046a94bad425cf08d551cd_2_225x500.png)

---

## Resposta #2

**Hélio Monteiro** (@Helio_Monteiro) — 07/02/2026, 11:08

Neste caso aqui. Foi criado na parte de guardar os arquivos de contratos no GED, e se ocorre algum erro, fica em loop ali pra TI resolver.

Fiquei meio perdido, pois, se eu precisar alterar código pra o processo conseguir gravar os arquivos, tenho que gerar uma nova versão. Então, este processo não vai pegar o novo código né?

Muito bem explicado [@Bruno\_Gasparetto](/u/bruno_gasparetto) , valeuu!!

Acho que vi uma função de mudar a versão de um processo para uma versão mais nova. Cheguei testar mas, não pegou o código novo, ou talvez eu tenha testado errado.
Sabem dizer algo sobre?

Ahh tem algum material pratico (tutorial, video) sobre GED que eu possa fazer uma breve visualização pra compreender melhor a API e como usar?

E onde colocamos permissão tbm. Pois, no processo, apenas está gerando os arquivos se tiver logado como admim. Como a pasta é do Jurídico, não pensamos em liberar ela pra geral.
E o processo é utilizado por vários setores (Comercia, RH, etc)

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 07/02/2026, 17:26 | ❤️ 1

Você pode atualizar o código da atividade, exportar para o Fluig criando uma nova versão e então converter a Solicitação para a nova versão.

Se o erro está no código e julgar que é melhor, dá pra atualizar sem mudar a versão, basta editar o banco de dados inserindo o novo código ou usar a extensão de vscode da comunidade pra isso: [Extensão VS Code Fluiggers - Exportar Evento de Processo](https://marketplace.visualstudio.com/items?itemName=Fluiggers.fluiggers-fluig-vscode-extension#exportar-evento-de-processo).

Sobre o GED acho que encontrará material na [Fluig Academy](https://academy.fluig.com/).

Quando a atividade de processo é executada ela o faz com a credencial do usuário que enviou o fluxo pra ela.

Uma coisa que você pode fazer é, na pasta que precisa criar o arquivo, dar só permissão de Gravação na pasta para todos os usuários e desmarcar a opção Listar Conteúdo. Porém recomendo testar se com essa permissão eles conseguirão pesquisar documentos que estão dentro da pasta (a barra de pesquisa do Fluig pesquisa em tudo, por isso é bom conferir).

Tem também a opção de você salvar o arquivo no GED usando o SOAP do Fluig, pois pelo SOAP você pode informar o usuário e senha do administrador, e assim sempre será salvo por ele, indiferente de quem iniciou a atividade.

---
