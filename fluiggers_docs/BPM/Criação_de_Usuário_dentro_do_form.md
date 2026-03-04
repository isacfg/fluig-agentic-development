# Criação de Usuário dentro do form

> **Fonte:** [https://fluiggers.com.br/t/criacao-de-usuario-dentro-do-form/139](https://fluiggers.com.br/t/criacao-de-usuario-dentro-do-form/139)
> **Categoria:** BPM
> **Criado em:** 16/03/2021, 15:09
> **Visualizações:** 2120 | **Likes:** 10 | **Respostas:** 9

---

## Pergunta original

**Lucas Folha** (@Lucas_Folha) — 16/03/2021, 15:09 | ❤️ 1

Boa tarde a Todos!

Tenho uma duvida de como poderia fazer para criar usuários com papéis e grupos (createColleaguewithDependencies) pré-definidos dentro de um form de processos.

Até o momento só consegui fazer o html dessa funcionalidade.

![CadUsuario](https://fluiggers.com.br/uploads/default/optimized/1X/9fed1f071963647555fee5d75af0239819f84752_2_690x227.png)

---

## Resposta #1

**Vinicius de Moura Silveira** (@vinny.silveira) — 17/03/2021, 20:01

[@Lucas\_Folha](/u/lucas_folha) , qual dúvida exatamente? De como fazer a chamada ou onde colocar a chamada para o serviço?

---

## Resposta #2

**Lucas Folha** (@Lucas_Folha) — 17/03/2021, 22:15

A dúvida está em como fazer a chamada dentro do form.

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Alef Vinicius** (@alefvinicius) — 18/03/2021, 05:45 | ❤️ 3

Lucas, por já ter o nome do método necessário acredito já ter conhecimento sobre utilização de serviços do Fluig. Pelo que entendi, esse formulário faz parte de um processo, e se assim for, recomendo que acione a integração em um evento de processo como o beforeStateEntry.

1º Passo é Adicionar o Serviço **ColleagueService** no Fluig ([Visualização de Serviços - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=239021223))

2º Fazer a sua correta chamada conforme parâmetros solicitados na assinatura do método. Caso envie um parâmetro que não esteja no tipo solicitado, pode causar erro. Segue o exemplo do serviço createColleague sendo utilizado. Pode te orientar na hora do desenvolvimento, segue exemplo abaixo de usuário sendo criado no beforeStateEntry, usuário em um grupo chamado “usuario”:

```auto
log.info("CADASTRANDO USUARIO: ");
	//Serviço criado com o código ECMColleagueService
	var wep = ServiceManager.getServiceInstance("ECMColleagueService");
    	var wel = wep.instantiate("com.totvs.ECMColleagueServiceService");
    	var wes = wel.getColleagueServicePort();

    	var colleagueDtoArray = wep.instantiate("com.totvs.ColleagueDtoArray");


    	var colleagueDto = wep.instantiate("com.totvs.ColleagueDto");
    	var senhaUsuario = "123456789";
    	var loginUsuario = "loginUsuarioCriado";
    	var emailUsuario = "email@email.com";
    	var nomeUsuario  = "Nome Usuário";

    	colleagueDto.setActive(true);
    	colleagueDto.setAdminUser(false)
    	colleagueDto.setColleagueId(loginUsuario);
    	colleagueDto.setColleagueName(nomeUsuario);
    	colleagueDto.setCompanyId(1);
    	colleagueDto.setEmailHtml(true);
    	colleagueDto.setGroupId("usuario")
    	colleagueDto.setLogin(loginUsuario);
    	colleagueDto.setMail(emailUsuario);
    	colleagueDto.setPasswd(senhaUsuario);



    	colleagueDtoArray.getItem().add(colleagueDto);


       //createColleague("usuarioAdm", "senhaAdm", "codigo_empresa", "objeto array colleagueDto")
    	var resultado =  wes.createColleague("admin", "admin", 1, colleagueDtoArray);


    	if(resultado != "ok"){

    		throw "Erro ao cadastrar o cliente: " + result1;

    	}


    	log.info("USUARIO CADASTRADO");
```

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 19/03/2021, 09:17 | ❤️ 1

Obrigado pelo exemplo.

Na documentação diz que a senha informada precisa ser “criptografada” com hash MD5 (triste ver que o armazenamento da senha é tão inseguro assim), mas que no caso de ter o Identity configurado a senha deve ser informada sem o hash.

Eu estava curioso pra ver essa questão de criar usuários com o Fluig utilizando Identity. Hoje nós sempre precisamos esperar a boa vontade do usuário efetuar o login pela primeira vez pra ter seu usuário criado e estávamos pensando em criar um mecanismo (um processo ou um simples dataset) pra agilizarmos essa criação indicando também os grupos.

Vou efetuar alguns testes com :slight_smile:

---

## Resposta #5

**Lucas Folha** (@Lucas_Folha) — 19/03/2021, 10:01 | ❤️ 1

Show de bola! Vou verificar aqui e fazer os testes, eu retorno com a resposta!!!

---

## Resposta #6

**Igor Rodrigues** (@fluigor.com.br) — 19/03/2021, 10:18 | ❤️ 1

[@Bruno\_Gasparetto](/u/bruno_gasparetto) Lembrando que o Identity também possui APIS para criação de usuários, mesmo que com a dependência da integração com o AD.

---

## Resposta #7

**Bruno Gasparetto** (@Bruno_Gasparetto) — 19/03/2021, 11:46 | ❤️ 1

[@fluigor.com.br](/u/fluigor.com.br), então, ainda não explorei a fundo, mas nossos usuários do AD são sincronizados com o Identity e por padrão todos já são criados com o Fluig disponibilizado no Identity.

Quando entra um novo pedido de acesso ao Fluig a gente depende que a pessoa entre pela primeira vez no Fluig, finalmente criando o usuário, pra só então conseguir dar as permissões.

Vou verificar a API do Identity se tem como ele “forçar” a criação no Fluig ou então, pelo Fluig, criar o usuário puxando as informações do Identity.

---

## Resposta #8

**Igor Rodrigues** (@fluigor.com.br) — 19/03/2021, 13:30

[@Bruno\_Gasparetto](/u/bruno_gasparetto)

Hoje se tu se direcionar ao Painel de controle > Usuarios da plataforma Fluig e inserir o e-mail de um usuário ativo no Identity o fluig ja puxa as informações relacionadas ao identity, como por exemplo colocando a matricula do Fluig, com o hash gerado pelo identity.

Entao certamente eh possivel buscar, eu tenho um exemplo desse processo sem o Just Time habilitado, justamente porque a ideia era que a matricula do Fluig fosse conforme a necessidade do cliente.

Caso queria o exemplo, vou compartilhar em outro topico.

abraço

---

## Resposta #9

**Bruno Henrique** (@Bruno_Henrique) — 03/08/2023, 12:11

[@alefvinicius](/u/alefvinicius) copiei e colei e consegui criar o acesso via afterStateEntry, porém o usuário que crio não entra no grupo que informo no parametro, sabe o que pode ser? E outra questão seria possível adicionar papeis também via parametros?

---

## Resposta #10

**Narles Lino** (@Narles_Lino) — 14/03/2025, 14:52 | ❤️ 1

Use o seguinte método para colocar o usuário em determinados grupo(s) ou papéis:

**createColleaguewithDependencies** Cria um colaborador com grupo de segurança e papéis workflow.

Método:
createColleaguewithDependencies(String username, String password, int companyId,

ColleagueDto colegas, GroupDto grupos, WorkflowRoleDto papeis)

Parâmetros:

-   username: login do colaborador;
-   password: senha do colaborador;
-   companyId: código da empresa;
-   colegas: colaboradores;
-   grupos: grupos de segurança;
-   papeis: papéis workflow.

Retorno: String.

[Guia de Referência Utilização de Webservices - TOTVS | Plataformas e tecnologias - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=268576750)

---

## Resposta #11

**Bruno Gasparetto** (@Bruno_Gasparetto) — 14/03/2025, 18:45 | ❤️ 1

Muito bom.

Na época eu preferi usar o SDK mesmo e como não trabalho com papéis aqui (no geral achei meio inútil considerando que grupos fazem tudo que papel faz e ainda dão mais opções) deixei assim:

![image](https://fluiggers.com.br/uploads/default/original/2X/0/0bafb9f21a3337971bc78eea4825d146872b68b2.png)

No caso a matrícula deixo um UUID por ser integrado ao Identity.

---
