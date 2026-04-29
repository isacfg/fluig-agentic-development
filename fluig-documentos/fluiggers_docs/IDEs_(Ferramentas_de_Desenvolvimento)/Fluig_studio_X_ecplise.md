# Fluig studio X ecplise

> **Fonte:** [https://fluiggers.com.br/t/fluig-studio-x-ecplise/1417](https://fluiggers.com.br/t/fluig-studio-x-ecplise/1417)
> **Categoria:** IDEs (Ferramentas de Desenvolvimento)
> **Criado em:** 20/10/2022, 13:47
> **Visualizações:** 1275 | **Likes:** 6 | **Respostas:** 9

---

## Pergunta original

**Marcos** (@msanfelice) — 20/10/2022, 13:47

Bom tarde a todos, estou iniciando no fluig, e ja estou me deparando com algumas dificuldades, instalei o Fluig versao 1.7.1 na minha maquina e correu tudo bem , porem quando vou tentar criar o servidor do fluig no ecplise, me retorna a seguinte mensagem de erro, meu eclipse e o Oxigen.3 :

O conjunto de host/porta usados é inválido ou está indisponível

GET [http://127.0.0.1:8080/portal/api/rest/wcmservice/rest/role/findRolesByUser?username=msanfelice&password=...&login=msanfelice](http://127.0.0.1:8080/portal/api/rest/wcmservice/rest/role/findRolesByUser?username=msanfelice&password=...&login=msanfelice) returned a response status of 403

---

## Resposta #1

**Matheus Mósso** (@msmosso) — 21/10/2022, 19:02

Boa noite [@msanfelice](/u/msanfelice),

Somente a versão Luna é homologada pela TOTVS para uso com o Fluig Studio. É provavel que esse erro seja relacionado a alguma incompatibilidade do Fluig Studio com a versão que você está utilizando.

![image](https://fluiggers.com.br/uploads/default/original/1X/5c17269e6e4fc4a0f4d8900b72fa84897eacc75d.png)

[https://tdn.totvs.com/pages/releaseview.action?pageId=73078179](https://tdn.totvs.com/pages/releaseview.action?pageId=73078179)

---

## Resposta #2

**Uilian Fragallo** (@fragallo) — 25/08/2024, 12:56

Olá, tudo bem?

Acabei de instalar o Fluig 1.8.2 e estou tendo o mesmo problema, com as duas versões homologadas: Luna e 2019. A instalação está em um laptop com Windows 11 e consigo acessar pela rede, no endereço IP que coloquei, eu usando a porta 8080.

Quando a conexão com o servidor é criada não ocorre erro. Mas ao tentar acessar o servidor, a mensagem “O conjunto de host/porta usados é inválido ou está indisponível” aparece.

Não tenho a menor ideia do que fazer, já que o Fluig está funcionando, inclusive com acesso de outro computador.

---

## Resposta #3

**venturelli** (@venturelli) — 27/08/2024, 08:30

[@fragallo](/u/fragallo) , no seu caso específico, pode ser várias coisas. O mais normal é que essa máquina específica não consegue acessar a url ou ip diretamente por algum bloqueio de rede. Isso é facilmente verificado ao tentar acessar via browser, na mesma maquina onde está o eclipse, a url/ip e porta configurada.

Caso isso funcione, o ideal é abrir o eclipse como debug (`eclipse.exe -debug`) e acompanhar o log na janela de terminal que será iniciada.

Se o problema continuar por ai, cola a conteúdo aqui.

---

## Resposta #4

**Uilian Fragallo** (@fragallo) — 27/08/2024, 09:23 | ❤️ 1

Olá [@venturelli](/u/venturelli). Tudo bem?

Consegui resolver instalando a versão 181, ou seja, na configuração do download coloquei [update.fluig.com/181](http://update.fluig.com/181) e isso resolveu.

Muito obrigado, de qualquer forma, pela orientação.

---

## Resposta #5

**Aldimar Junior** (@aldimar.junior) — 05/03/2025, 19:10

Em 2025 estou tendo o mesmo problema… estou rodando o fluig com https habilitado, modo demo sem licença, consigo acessar normalmente via browser porem no eclipse eu recebo o mesmo erro mencionado anteriormente “O conjunto de host/porta usados é inválido ou está indisponível”. dei uma olhada no log do eclipse e vi que ele está fazendo uma requisição para “/portal/api/rest/wcmservice/rest/role/findRolesByUser” fazendo a mesma requisição no navegador eu recebo um erro falando que “queryParam password está desabilitado por segurança”, fui dar uma olhada na documentação e no patch notes do fluig realmente menciona essa questão e eles falam “Caso ainda haja necessidade de uso, poderá ser adicionado um parâmetro no cadastro da empresa”… blz, que parâmetro? alguem já passou por esse problema? estou começando a achar que só da isso em ambiente modo “demo” pois fiz uma instalação para um cliente licenciado e o eclipse funcionou normalmente

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 06/03/2025, 08:09 | ❤️ 1

Por isso é importante usar o plugin na mesma versão do fluig do servidor.

O plugin 1.8.1 não funciona no Fluig 1.8.2, e vice-versa, principalmente devido à forma de autenticação que mudou.

Até a nossa extensão do vscode teve que ter uma grande alteração pra suportar essa nova forma.

Mas uma coisa que reparei testando o Fluig 1.8.2 no modo demonstração é que ele dá muito problema com aviso do modo demo também na API, obrigando a sempre tentar logar pra ele dar o aviso e só depois de aceitar o modo demo ele libera a API.

Não lembro se foi aqui no fórum ou no Telegram que passaram a informação do parâmetro pra colocar no cadastro da empresa, mas na dúvida dá pra abrir chamado pra totvs

---

## Resposta #7

**tiago santos** (@tiago_santos) — 27/03/2025, 15:39

Estou no modo demo esta aparecendo somente esta informação, “O conjunto de host/porta usados é inválido ou está indisponível”
Já atualizei o plugin 1.8.2 e a versão do Fluig também 1.8.2 mas ainda não funciona alguma sugestão?

---

## Resposta #8

**Bruno Gasparetto** (@Bruno_Gasparetto) — 28/03/2025, 07:54

A versão 1.8.2 do Fluig é muito problemática no modo demo. Praticamente não vai conseguir usar corretamente, pois pra cada tentativa de login ela exige primeiro que você vá na tela de login ativar o modo demo e como cada chamada do plugin ele tenta logar, você precisa clicar no botão pra ativar o demo antes.

Ao menos foi o que senti quando tentei testar o demo.

---

## Resposta #9

**tiago santos** (@tiago_santos) — 31/03/2025, 08:48

Fiz diversas alterações para tentar fazer o plugin do fluig se conectar com eclipse luna, alterei a porta , o ip, atualizei o fluig , atualizei o eclipse. mas permance o mesmo erro, nao conecta .
Alguem ja teve esse problema?

---

## Resposta #10

**Pablo Valle** (@pablooav) — 03/04/2025, 16:38 | ❤️ 3

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/a/a587f6/48.png) aldimar.junior:
>
> > ando o fluig com https habilitado, modo demo sem licença, consigo acessar normalmente via browser porem no

Em 10 de Dezembro de 2024 o Fluig postou um update relacionado a este problema, se o seu fluig estiver em uma versão antes dessa e vc esteja recebendo este erro, vc precisa atualizar o Fluig e também atualizar o plugin pra versão 1824 (1.8.2 é a versão o Fluig, e esse 4 é a release que tem essa correção pra conseguir exportar widget sem precisar configurar nada no wcmadmin). O único problema é que vc não consegue exportar mais widgets em clientes que estão antes dessa versão, então vc teria que ter 2 eclipses pra utilizar nos diferentes clientes.

De qualquer forma, se vc precisar configurar o wcmadmin o caminho é

Acesse o ***wcmadmin> painel de controle > empresas > selecione a empresa > editar > cadastrar dados adicionais*** , informe os valores abaixo:
**chave** : tmp.queryparam.password.blocked
**valor** : 20241110

---

## Resposta #11

**tiago santos** (@tiago_santos) — 13/04/2025, 14:56 | ❤️ 1

Valeu pela ajuda, consegui resolver a conexão usando o plugin no eclipse Luna 1.8.1 e a versão do fluig na 1.8.2.4, funcionou a conexão.
realizei essas alterações:
Acesse o ***wcmadmin> painel de controle > empresas > selecione a empresa > editar > cadastrar dados adicionais*** , informe os valores abaixo:
**chave** : tmp.queryparam.password.blocked
**valor** : 20241110
e reiniciei o fluig.

---
