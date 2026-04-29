# Identity

> **12 tópicos**

---

## Sumário

- [API Identity + AD](#api-identity-ad)
- [Acesso negado: Usuário XXXXXXX sem permissão de acesso](#acesso-negado-usurio-xxxxxxx-sem-permisso-de-acesso)
- [Ambiente de homologação - associar ao identity](#ambiente-de-homologao-associar-ao-identity)
- [Automação de login em página Angular](#automao-de-login-em-pgina-angular)
- [Dois ambientes Fluig integrados com o Identity ao mesmo tempo](#dois-ambientes-fluig-integrados-com-o-identity-ao-mesmo-tempo)
- [Fluig com ou sem Identity](#fluig-com-ou-sem-identity)
- [Identity e AD - Alguns usuários sem permissão de acesso](#identity-e-ad-alguns-usurios-sem-permisso-de-acesso)
- [Identity fora do ar](#identity-fora-do-ar)
- [Integração com AD sem Identity](#integrao-com-ad-sem-identity)
- [Login Fluig sem Identity](#login-fluig-sem-identity)
- [Sobre a categoria Identity](#sobre-a-categoria-identity)
- [Superior Imediato AD no Identity](#superior-imediato-ad-no-identity)

---

# API Identity + AD

> **Fonte:** [https://fluiggers.com.br/t/api-identity-ad/506](https://fluiggers.com.br/t/api-identity-ad/506)
> **Categoria:** Identity
> **Tags:** `dataset`, `api`, `identity`
> **Criado em:** 09/06/2021, 15:38
> **Visualizações:** 1262 | **Likes:** 2 | **Respostas:** 2

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 09/06/2021, 15:38

Pessoal, boa tarde!

Atualmente temos uma integração com o RM para desativação automática de usuários no Identity e no AD. Funciona assim:

Usuário é demitido/afastado/etc no RM → Integração **SOAP** com **ECMDatasetService** do Fluig → Integração **REST** com API Identity → Login é desativado na plataforma.

O que observamos é que o usuário no AD só é desativado quando a alteração é feita via interface do Identity - *imediata*, por sinal. Quando o status é alterado via API, o reflexo no AD não acontece.

Alguém já passou por isso? Haveria algum parâmetro extra *não-documentado* para obrigar a alteração também no AD? Utilizamos os endpoints:

![image](https://fluiggers.com.br/uploads/default/original/1X/c5a8b3d6b253827d0e568432f5557449a6573955.png)

Abrimos chamados na TOTVS, mas vai que alguém já passou por isso…

Valeu, galera!

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 09/06/2021, 18:19

[@tharsiab](/u/tharsiab) , de olho aqui!

---

## Resposta #2

**Hilton Gonçalves** (@HiltonGoncalves) — 14/06/2021, 09:35

Bom dia Daniel,
Da uma conferida nesse outro serviço, pode ser que resolva pra vc… *ECMColleagueService*
[https://tdn.totvs.com/pages/releaseview.action?pageId=240295690](https://tdn.totvs.com/pages/releaseview.action?pageId=240295690)

[https://tdn.engpro.totvs.com.br/dosearchsite.action?queryString=ECMColleagueService&searchQuery.spaceKey=fluig](https://tdn.engpro.totvs.com.br/dosearchsite.action?queryString=ECMColleagueService&searchQuery.spaceKey=fluig)

---

## Resposta #3

**Hilton Gonçalves** (@HiltonGoncalves) — 14/06/2021, 09:43 | ❤️ 1

Na documentação do Identity tem outra chamada, essa provavelmente já desabilita no AD: [https://app.fluigidentity.com/rest/swagger-ui/index.html#!/companies/deProvisionUserInActiveDirectory\_delete\_67](https://app.fluigidentity.com/rest/swagger-ui/index.html#!/companies/deProvisionUserInActiveDirectory_delete_67)

![image](https://fluiggers.com.br/uploads/default/original/1X/62f601e06ca9d3363b026bc92db2c89444119896.png)

---

## Resposta #4

**Daniel Cabral Santos** (@daniel.cabral) — 14/06/2021, 10:05

Noh, mas vou ter que fazer na mão? Sacanagem…rs…vamos ver o que a TOTVS diz - até pq eles reconheceram no chamado que esse processo deveria ser automático tal qual é feito na interface gráfica; Se nada mais funcionar, a gente implanta essa chamada.

Valeu demais!!

---

## Resposta #5

**Daniel Cabral Santos** (@daniel.cabral) — 21/06/2021, 10:59 | ❤️ 1

A TOTVS vai disponibilizar uma correção, aparentemente reconheceram que o comportamento está errado mesmo.

---

---

# Acesso negado: Usuário XXXXXXX sem permissão de acesso

> **Fonte:** [https://fluiggers.com.br/t/acesso-negado-usuario-xxxxxxx-sem-permissao-de-acesso/2461](https://fluiggers.com.br/t/acesso-negado-usuario-xxxxxxx-sem-permissao-de-acesso/2461)
> **Categoria:** Identity
> **Tags:** `form`, `processo`, `bpm`, `dataset`
> **Criado em:** 22/12/2023, 18:21
> **Visualizações:** 347 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Guilherme Mesquita Rocha** (@gmesquita) — 22/12/2023, 18:21

Pessoal estou com uma dúvida e gostaria de sanar a seguinte situação:
Ao consultar datasets **INTERNOS** com um usuário que não possui papel admin atribuído, a consulta retorna como se não houvessem registros, conforme imagem abaixo:

![image](https://fluiggers.com.br/uploads/default/original/2X/e/e1091bdf7130f7ac842967fafdd4fba84079c450.png)

Acontece que, fazendo a mesma consulta com o usuário **admin**, retorna os registros…

Ao baixar o log, é evidenciado o seguinte erro:
*Acesso negado: Usuário XXXXXXX sem permissão de acesso: com.totvs.technology.foundation.common.exception.FDNAccessDeniedException*

Visto que o ambiente é o Fluig Identity (o mesmo não possui papeis atribuídos nos usuários), porém as pastas de formulário (tanto as pastas pais quanto as filhas) estão com as devidas permissões de leitura para o “Grupo” do usuário e para “Todos” (por via das dúvidas).

Desta forma, o que posso estar fazendo para solucionar o problema?

---

---

# Ambiente de homologação - associar ao identity

> **Fonte:** [https://fluiggers.com.br/t/ambiente-de-homologacao-associar-ao-identity/2770](https://fluiggers.com.br/t/ambiente-de-homologacao-associar-ao-identity/2770)
> **Categoria:** Identity
> **Criado em:** 02/05/2024, 10:22
> **Visualizações:** 100 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 02/05/2024, 10:22

Prezado,
tenho o endereço **[meudominiotst.customerfi.com](http://meudominiotst.customerfi.com)** e gostaria que ele fosse associado ao Fluig de **homologação** que está instalado no meu servidor de IP 172.16.0.10.

Entretanto, não achei documentação na internet de forma direta para isto.

E não quero que esse servidor interfira com o AD configurado no Identity oficial, ou seja o do [meudominio.fluigidentity.com](http://meudominio.fluigidentity.com).
Isto é, gostaria que essa associação do primeiro parágrafo não conflitasse com o identity oficial.

Poderia me dar uma dica de onde procurar o passo a passo para isto?
Grato

---

---

# Automação de login em página Angular

> **Fonte:** [https://fluiggers.com.br/t/automacao-de-login-em-pagina-angular/738](https://fluiggers.com.br/t/automacao-de-login-em-pagina-angular/738)
> **Categoria:** Identity
> **Tags:** `identity`, `script`, `login`, `angular`
> **Criado em:** 25/10/2021, 15:56
> **Visualizações:** 465 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 25/10/2021, 15:56

Fala galera, blz?

Estou tentando automatizar um login de uma página feita em Angular, mas sem sucesso…com o código abaixo consigo preencher os dados nos campos do form e disparar o login, mas o formulário invalida os campos de login e senha como se eu não tivesse digitado nada:

```auto
let elementCodUsuario = document.getElementById("CodUsuario")
elementCodUsuario.value = "$(username)";
let elementSenha = document.getElementById("Senha");
elementSenha.value = "$(password)";

let event = new Event('change');
elementCodUsuario.dispatchEvent(event);
elementSenha.dispatchEvent(event);
```

Não manjo muito de angular, mas o código parece certo…existe alguma forma de disparar via código a validação desses campos, ou dar um bypass nela?

Valeu!

---

---

# Dois ambientes Fluig integrados com o Identity ao mesmo tempo

> **Fonte:** [https://fluiggers.com.br/t/dois-ambientes-fluig-integrados-com-o-identity-ao-mesmo-tempo/833](https://fluiggers.com.br/t/dois-ambientes-fluig-integrados-com-o-identity-ao-mesmo-tempo/833)
> **Categoria:** Identity
> **Criado em:** 20/12/2021, 07:50
> **Visualizações:** 588 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 20/12/2021, 07:50

Temos um Fluig em produção que utiliza o recurso de LDAP do AD para autenticação via Identity.

Temos também uma instalação Fluig para teste em outro servidor, sem publicação para a internet, isto é, de homologação.

Causaria algum conflito se no Fluig de homologação usássemos as mesmas credenciais que estão sendo usadas no ambiente de Produção para que esta instalação de homologação aceite o login do AD no Identity?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Igor Rodrigues** (@fluigor.com.br) — 21/12/2021, 08:21 | ❤️ 1

Ola [@Mautresim](/u/mautresim)

Você pode ter 2 aplicativos do Fluig no mesmo contexto do Identity,
Basta utilizar a opção de clonar o APP, e realizar o clone do app principal do Fluig.
Porém terás de ajustar um número maior de URLS neste APP Clonado.
segue abaixo.

![image](https://fluiggers.com.br/uploads/default/original/1X/28e051cd0822946e3eb6b2973eaa94406f5bce4b.png)

![image](https://fluiggers.com.br/uploads/default/optimized/1X/c5ce69ff06978d2862ab819c51852e909273924e_2_306x500.png)

---

---

# Fluig com ou sem Identity

> **Fonte:** [https://fluiggers.com.br/t/fluig-com-ou-sem-identity/1509](https://fluiggers.com.br/t/fluig-com-ou-sem-identity/1509)
> **Categoria:** Identity
> **Tags:** `identity`
> **Criado em:** 21/11/2022, 14:06
> **Visualizações:** 690 | **Likes:** 4 | **Respostas:** 4

---

## Pergunta original

**Matheus Loreto** (@matheusl) — 21/11/2022, 14:06

Boa tarde Pessoal,

Gostaria de fazer uma espécie de “benchmark” sobre o uso ou não do Identity.

No momento não fazemos utilização, mas o controle de usuários que o Fluig oferece é limitado. Troca de senha no primeiro acesso, requisitos de complexidade ou até mesmo MFA poderão ser necessários.

Queria opinião dos colegas devs, o que acham do Identity e se recomendam.

---

## Resposta #1

**Rogerio Cruz De Carvalho** (@Rogerio) — 23/11/2022, 11:35 | ❤️ 1

O Identity potencializa ainda mais o uso da Plataforma, além que, quando o cliente contrata o Fluig, tem a mesma quantidade de licenças no Identity sem custos adicionais. Dai é so integrar, você consegue configurar parâmetros de segurança de senhas no Identity, inclusive MFA.

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 23/11/2022, 12:00 | ❤️ 1

Essa parte de MFA e outras regras é bem legal. Aqui, por enquanto, só utilizamos a integração com o AD. Mas também ele não gera automaticamente os usuários no Fluig, somente gera se o usuário tentar efetuar o login pela primeira vez no Fluig (ainda vamos trabalhar em alguma forma de puxar os usuários automaticamente).

Realmente o Identity ajuda em muitas coisas, porém tem seus pontos negativos.

Quando o sistema caí você fica totalmente sem acesso ao Fluig e sequer é possível abrir chamado pra TOTVS, pois precisa do Identity pra entrar no sistema de chamados. E teve uma época nesse ano que o Identity estava com muita instabilidade.

Até é possível desabilitar o Identity, mas aí tem que resetar a senha local de todos e dá uma boa dor de cabeça.

No ambiente de desenvolvimento/homologação não usamos o Identity pela queda de performance nas exportações, e de certa forma nem tem justificativa pra ter Identity nele, embora tenhamos o serviço tanto pra produção quanto homologação.

---

## Resposta #3

**Rogerio Cruz De Carvalho** (@Rogerio) — 23/11/2022, 14:04 | ❤️ 1

No caso em que o cliente não consegue acessar o Portal de Chamados ([TOTVS CST](https://suporte.totvs.com/portal/)) a TOTVS disponibiliza um e-mail para realizar essa abertura de chamados. Mas, o método oficial é pelo portal.

---

## Resposta #4

**Leticia Ingrid** (@Leticia_Ingrid) — 11/02/2025, 08:44

Bom dia, Bruno, já conseguiram através do AD alguma solução para gerar os usuários automaticamente no Fluig?

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 11/02/2025, 09:34 | ❤️ 1

Aqui eu faço a criação buscando os funcionários novos no ERP.

Fiz um dataset jornalizado que toda manhã consulta o RM validando os novos funcionários e então cria eles no Fluig, já atribuindo os grupos de acordo com o cargo. E também já aproveita pra ver os funcionários demitidos pra inativar no Fluig. Isso usando a UserService da API JDK.

Creio que com o AD não seria tão diferente, mas precisaria consultar no AD essas informações.

Aqui preferi no ERP porque nas férias os usuários são inativados no AD, então teria problemas pra saber se o usuário foi demitido ou só entrou de férias.

---

## Resposta #6

**Allan Reichert** (@allan.reichert) — 14/02/2025, 16:16

Tem os prós e contras. O bom é a integração com o AD, que fica um pouco mais fácil com Identity, basta aceitar o usuário e no primeiro login a conta é criada. A vantagem do acesso sem identity é a disponibilidade pois o identity seguidamente apresenta instabilidade no login, mas necessita o cadastro manual dos usuários . Apesar das falhas de disponibilidade prefiro o Identity que inclusive unifica o acesso nossa base de produção e de testes.

---

---

# Identity e AD - Alguns usuários sem permissão de acesso

> **Fonte:** [https://fluiggers.com.br/t/identity-e-ad-alguns-usuarios-sem-permissao-de-acesso/914](https://fluiggers.com.br/t/identity-e-ad-alguns-usuarios-sem-permissao-de-acesso/914)
> **Categoria:** Identity
> **Criado em:** 08/02/2022, 07:42
> **Visualizações:** 685 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 08/02/2022, 07:42

Eu não sei se houve alguma ligação com o problema que tivemos na empresa (um switch da rede deu problema e toda a empresa ficou sem acesso por quase um dia inteiro), mas alguns poucos usuários (de 200, só 3) não conseguem se logar no Identity.

E, antes, eles conseguiam normalmente.
Não é gente que acabou de entrar, mas pessoas que têm anos de uso do Fluig.

Como o Identity está integrado ao AD, fui testar com uma das pessoas a autenticação no ambiente de rede e funciona normalmente.
A entrada no AD, claro, foi testada com a mesma credencial/senha, mas com as mesmas no Identity/Fluig não há jeito de se logar.
Já revi o usuário no Identity e está lá, certinho, como Accepted.

O que será isto?

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 08/02/2022, 08:26 | ❤️ 1

[@Mautresim](/u/mautresim) , chegou a dar uma olhada no log do smart\_sync e também no do fluig no ato do login desses usuários?

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 08/02/2022, 10:26

Caro [@daniel.cabral](/u/daniel.cabral), obrigado por sua dica. A cada pergunta aqui eu aprendo mais uma coisa.

Entretanto, no server.log do Fluig não há menção alguma à tentativa de conexão da pessoa.
Também, no log do Smart Sync, achei dois logs, o ‘ss\_service.txt’ e o ‘ss\_client.txt’. Em nenhum dos dois há alguma referência aos nomes dos usuários problemáticos.

Se é que estou sabendo ler os logs…

---

## Resposta #3 ✅ RESPOSTA ACEITA

**MAURO SIMOES** (@Mautresim) — 10/02/2022, 07:13

**Não** descobri o problema, mas voltou a funcionar ‘do nada’.

---

---

# Identity fora do ar

> **Fonte:** [https://fluiggers.com.br/t/identity-fora-do-ar/958](https://fluiggers.com.br/t/identity-fora-do-ar/958)
> **Categoria:** Identity
> **Tags:** `form`, `fluigapi`, `mobile`, `app`, `identity`
> **Criado em:** 08/03/2022, 10:05
> **Visualizações:** 369 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**RAFAEL BARBOSA DOURADO BRITO** (@myispo) — 08/03/2022, 10:05 | ❤️ 2

O Identity TOTVS se encontra fora do ar, os clientes que acessam a plataforma Fluig via Identity se encontram parados e sem previsão de retorno.

---

## Resposta #1

**MAURO SIMOES** (@Mautresim) — 09/03/2022, 10:50

Bem-vindo, [@myispo](/u/myispo).
Ontem foi complicado. A Totvs só postou um aviso (e nem sei onde foi dado esse aviso, vi numa comunidade do Zap) perto de 16 horas. Desde a véspera eu estava com alguns usuários sem conseguir se autenticar e já era isto. Quebrei minha cabeça para descobrir o problema do usuário e não era no meu ambiente.

---

---

# Integração com AD sem Identity

> **Fonte:** [https://fluiggers.com.br/t/integracao-com-ad-sem-identity/934](https://fluiggers.com.br/t/integracao-com-ad-sem-identity/934)
> **Categoria:** Identity
> **Criado em:** 20/02/2022, 09:37
> **Visualizações:** 1624 | **Likes:** 3 | **Respostas:** 6

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 20/02/2022, 09:37 | ❤️ 1

Tenho um ambiente de homologação e gostaria de integrá-lo com o AD, mas sem passar pelo Identity. Queria uma autenticação direta.

Eu tentei fazer o que [a página da Totvs preconiza](https://tdn.totvs.com/pages/releaseview.action?pageId=257623389), mas não consegui êxito.

Mas, não funciona, o log do servidor sempre me dá a mesma resposta, seja para qual usário for:

> Invalid security token provided ‘xyz@meudominio.com.br’

Como teste, usando o mesmo usuário que está indicado no domain.xml para conexão com o AD, dei um telnet no IP e na porta 389, e a conexão foi feita com sucesso.

Tentei os dois modos que a página acima indicava.

Às vezes, o log acrescentava uma crítica extra, além daquela acima, que é

> \[…\] javax.naming.PartialResultException: Unprocessed Continuation Reference(s); remaining name ‘DC=meu\_dominio,DC=com,DC=br’

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 22/02/2022, 15:22

Ola [@Mautresim](/u/mautresim) está documentação é bem confusa,

consegue adicionar os arquivos de domain.xml e host.xml aqui?

Atenciosamente,

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 23/02/2022, 08:20

Caro [@fluigor.com.br](/u/fluigor.com.br), desculpa a demora. Eu estou aqui como domain.xml. No momento, nosso ambiente está desligado para manutenção de energia e não tenho como pegar o host.xml, mas vai aqui o que eu tinha já pronto do outro arquivo.
[domain63Mod.xml](https://fluiggers.com.br/uploads/short-url/nmIbIu4htGffDo06jzWvDYIPzY4.xml) (48,8,KB)

Como o arquivo excede à capacidade do editor, estou enviando-o via upload.

O arquivo host.xml peguei agora:

```auto
<?xml version="1.0" encoding="UTF-8"?>

-<host name="master" xmlns="urn:jboss:domain:10.0">


-<extensions>

<extension module="org.jboss.as.jmx"/>

<extension module="org.wildfly.extension.core-management"/>

<extension module="org.wildfly.extension.elytron"/>

</extensions>


-<management>


-<security-realms>


-<security-realm name="ManagementRealm">


-<authentication>

<local skip-group-loading="true" default-user="$local"/>

<properties relative-to="jboss.domain.config.dir" path="mgmt-users.properties"/>

</authentication>


-<authorization map-groups-to-roles="false">

<properties relative-to="jboss.domain.config.dir" path="mgmt-groups.properties"/>

</authorization>

</security-realm>


-<security-realm name="ApplicationRealm">


-<server-identities>


-<ssl>

<keystore relative-to="jboss.domain.config.dir" path="application.keystore" keystore-password="password" key-password="password" generate-self-signed-certificate-host="localhost" alias="server"/>

</ssl>

</server-identities>


-<authentication>

<local skip-group-loading="true" default-user="$local" allowed-users="*"/>

<properties relative-to="jboss.domain.config.dir" path="application-users.properties"/>

</authentication>


-<authorization>

<properties relative-to="jboss.domain.config.dir" path="application-roles.properties"/>

</authorization>

</security-realm>

</security-realms>


-<audit-log>


-<formatters>

<json-formatter name="json-formatter"/>

</formatters>


-<handlers>

<file-handler name="host-file" relative-to="jboss.domain.data.dir" path="audit-log.log" formatter="json-formatter"/>

<file-handler name="server-file" relative-to="jboss.server.data.dir" path="audit-log.log" formatter="json-formatter"/>

</handlers>


-<logger log-read-only="false" log-boot="true" enabled="false">


-<handlers>

<handler name="host-file"/>

</handlers>

</logger>


-<server-logger log-read-only="false" log-boot="true" enabled="false">


-<handlers>

<handler name="server-file"/>

</handlers>

</server-logger>

</audit-log>


-<management-interfaces>


-<http-interface security-realm="ManagementRealm">

<http-upgrade enabled="true"/>

<socket port="${jboss.management.http.port:9990}" interface="management"/>

</http-interface>

</management-interfaces>

</management>


-<domain-controller>

<local/>

</domain-controller>


-<interfaces>


-<interface name="management">

<inet-address value="172.16.0.63"/>

</interface>


-<interface name="public">

<inet-address value="172.16.0.63"/>

</interface>

</interfaces>


-<jvms>


-<jvm name="default">

<heap size="64m" max-size="256m"/>


-<jvm-options>

<option value="-server"/>

<option value="-XX:MetaspaceSize=96m"/>

<option value="-XX:MaxMetaspaceSize=256m"/>

</jvm-options>

</jvm>

</jvms>


-<servers>


-<server name="fluig1" group="fluig" auto-start="true">


-<jvm name="default">

<heap size="2g" max-size="4g"/>


-<jvm-options>

<option value="-Dfile.encoding=utf8"/>

<option value="-XX:MaxMetaspaceSize=1024m"/>

<option value="-Djavamelody.disabled=true"/>

<!-- Debug <option value="-Xdebug"/> <option value="-Xrunjdwp:transport=dt_socket,address=8787,server=y,suspend=n"/> Fim Debug -->


</jvm-options>

</jvm>

</server>

</servers>


-<profile>

<subsystem xmlns="urn:jboss:domain:core-management:1.0"/>


-<subsystem xmlns="urn:wildfly:elytron:8.0" final-providers="combined-providers" disallowed-providers="OracleUcrypto">


-<providers>


-<aggregate-providers name="combined-providers">

<providers name="elytron"/>

<providers name="openssl"/>

</aggregate-providers>

<provider-loader name="elytron" module="org.wildfly.security.elytron"/>

<provider-loader name="openssl" module="org.wildfly.openssl"/>

</providers>


-<audit-logging>

<file-audit-log name="local-audit" relative-to="jboss.domain.log.dir" path="audit.log" format="JSON"/>

</audit-logging>


-<security-domains>


-<security-domain name="ManagementDomain" permission-mapper="default-permission-mapper" default-realm="ManagementRealm">

<realm name="ManagementRealm" role-decoder="groups-to-roles"/>

<realm name="local" role-mapper="super-user-mapper"/>

</security-domain>

</security-domains>


-<security-realms>

<identity-realm name="local" identity="$local"/>


-<properties-realm name="ManagementRealm">

<users-properties relative-to="jboss.domain.config.dir" path="mgmt-users.properties" digest-realm-name="ManagementRealm"/>

<groups-properties relative-to="jboss.domain.config.dir" path="mgmt-groups.properties"/>

</properties-realm>

</security-realms>


-<mappers>


-<simple-permission-mapper name="default-permission-mapper" mapping-mode="first">


-<permission-mapping>

<principal name="anonymous"/>

<permission-set name="default-permissions"/>

</permission-mapping>


-<permission-mapping match-all="true">

<permission-set name="login-permission"/>

<permission-set name="default-permissions"/>

</permission-mapping>

</simple-permission-mapper>

<constant-realm-mapper name="local" realm-name="local"/>

<simple-role-decoder name="groups-to-roles" attribute="groups"/>


-<constant-role-mapper name="super-user-mapper">

<role name="SuperUser"/>

</constant-role-mapper>

</mappers>


-<permission-sets>


-<permission-set name="login-permission">

<permission class-name="org.wildfly.security.auth.permission.LoginPermission"/>

</permission-set>

<permission-set name="default-permissions"/>

</permission-sets>


-<http>


-<http-authentication-factory name="management-http-authentication" security-domain="ManagementDomain" http-server-mechanism-factory="global">


-<mechanism-configuration>


-<mechanism mechanism-name="BASIC">

<mechanism-realm realm-name="Management Realm"/>

</mechanism>

</mechanism-configuration>

</http-authentication-factory>

<provider-http-server-mechanism-factory name="global"/>

</http>


-<sasl>


-<sasl-authentication-factory name="management-sasl-authentication" security-domain="ManagementDomain" sasl-server-factory="configured">


-<mechanism-configuration>

<mechanism mechanism-name="JBOSS-LOCAL-USER" realm-mapper="local"/>


-<mechanism mechanism-name="DIGEST-MD5">

<mechanism-realm realm-name="ManagementRealm"/>

</mechanism>

</mechanism-configuration>

</sasl-authentication-factory>


-<configurable-sasl-server-factory name="configured" sasl-server-factory="elytron">


-<properties>

<property name="wildfly.sasl.local-user.default-user" value="$local"/>

</properties>

</configurable-sasl-server-factory>


-<mechanism-provider-filtering-sasl-server-factory name="elytron" sasl-server-factory="global">


-<filters>

<filter provider-name="WildFlyElytron"/>

</filters>

</mechanism-provider-filtering-sasl-server-factory>

<provider-sasl-server-factory name="global"/>

</sasl>

</subsystem>


-<subsystem xmlns="urn:jboss:domain:jmx:1.3">

<expose-resolved-model/>

<expose-expression-model/>

<remoting-connector/>

</subsystem>

</profile>

</host>
```

---

## Resposta #3

**Igor Rodrigues** (@fluigor.com.br) — 03/03/2022, 11:47 | ❤️ 1

Ola [@Mautresim](/u/mautresim)

fiz a análise do seu arquivo, e vou colocar logo abaixo o que pode ser o causador do não funcionamento.

Dados que estavam em seu arquivo

```javascript
<login-module code="com.totvs.foundation.auth.FoundationExtLdapLoginModule" flag="sufficient" module="com.totvs.foundation.auth">
                                <module-option name="java.naming.factory.initial" value="com.sun.jndi.ldap.LdapCtxFactory"/>
                                <module-option name="java.naming.provider.url" value="ldap://172.16.0.2:389/"/>
                                <module-option name="java.naming.security.authentication" value="simple"/>
                                <module-option name="java.naming.security.protocol" value=""/>
                                ***<module-option name="java.naming.security.principal" value="meuDominio\administrator"/>***
                                <module-option name="java.naming.security.credentials" value="ad!"/>
                                <module-option name="uidAttributeID" value="sAMAccountName"/>
                                <module-option name="baseFilter" value="(sAMAccountName={0})"/>
                                <module-option name="loginCombinedWithDatabase" value="true"/>
                                <module-option name="baseCtxDN" value="DC=meuDominio,DC=com,DC=br"/>
                                <module-option name="rolesCtxDN" value="DC=meuDominio,DC=com,DC=br"/>
                                <module-option name="hashAlgorithm" value="MD5"/>
                                <module-option name="hashEncoding" value="HEX"/>
                                <module-option name="principalClass" value="com.totvs.technology.foundation.common.TOTVSTechPrincipal"/>
                            </login-module>
                            <login-module code="com.totvs.foundation.auth.FoundationJwtLoginModule" flag="sufficient" module="com.totvs.foundation.auth">
                                <module-option name="password-stacking" value="useFirstPass"/>
                                <module-option name="principalClass" value="com.totvs.technology.foundation.common.TOTVSTechPrincipal"/>
                            </login-module>
```

Se repararmos o item destacado abaixo, está passando o formato de login diferente do documentado.

```javascript
***<module-option name="java.naming.security.principal" value="meuDominio\administrator"/>***
```

Link da documentação.
[https://tdn.totvs.com/pages/releaseview.action?pageId=257623389](https://tdn.totvs.com/pages/releaseview.action?pageId=257623389)

```javascript
<module-option name="java.naming.security.principal" value="<USUARIO>@<DOMINIO>"/> <!-- Exemplo: value="ldapportal@sp01.local" -->
```

---

## Resposta #4

**MAURO SIMOES** (@Mautresim) — 05/03/2022, 09:40

Caro [@fluigor.com.br](/u/fluigor.com.br), sua observação sobre a forma de fazer a passagem do usuário para conexão com o AD estava correta.
Entretanto, mesmo assim, mesmo alterando para a forma indicada por você, continua dando o mesmo erro.

---

## Resposta #5

**Wasley Santos** (@Wasley_Santos) — 16/01/2023, 18:04

Conseguiu resolver ?

---

## Resposta #6

**MAURO SIMOES** (@Mautresim) — 30/01/2023, 10:07

[@Wasley\_Santos](/u/wasley_santos) , nem tentei mais.

---

## Resposta #7

**Igor Rodrigues** (@fluigor.com.br) — 21/02/2023, 10:41

[@Wasley\_Santos](/u/wasley_santos)

Tu precisa de ajuda man! cole seu domain.xml aqui q tentamos de ajudar!

---

## Resposta #8

**MAURO SIMOES** (@Mautresim) — 12/07/2023, 11:56 | ❤️ 1

[@fluigor.com.br](/u/fluigor.com.br) me desculpe não ter respondido a sua boa vontade de ajudar. É que eu me afastei, involuntariamente. De qualquer modo, desisti mesmo. Não vale a pena, com tanto trabalho.

---

---

# Login Fluig sem Identity

> **Fonte:** [https://fluiggers.com.br/t/login-fluig-sem-identity/1099](https://fluiggers.com.br/t/login-fluig-sem-identity/1099)
> **Categoria:** Identity
> **Criado em:** 25/05/2022, 09:22
> **Visualizações:** 2441 | **Likes:** 5 | **Respostas:** 2

---

## Pergunta original

**Allan Reichert** (@allan.reichert) — 25/05/2022, 09:22

Bom dia,

Alguém tem o procedimento para configurar a autenticação do Fluig sem Identity?

Hoje dependemos do Identity para autenticar no Fluig e frequentemente apresenta instabilidades, incluído o helpdesk da TOTVS, que utiliza a mesma plataforma de login, nos deixando sem contato com o suporte (por telefone já desisti).

Obrigado.
Att. Allan Reichert

---

## Resposta #1

**Cleiton Ferreira** (@Cleiton_Ferreira) — 31/05/2022, 22:18

Allan

Acessar o Fluig com o usuário wcmadmin, através do endereço “http://\[endereco\]:\[porta\]/portal/home?wcmadmin=true.”

Acessar o Painel de Controle → agrupador WCM → Empresas .

Assinalar a empresa desejada e acionar Editar .

Acessar a aba Autenticação .

Desmarcar " Acessar com Identity"

---

## Resposta #2

**Allan Reichert** (@allan.reichert) — 01/06/2022, 15:44

Obrigado!

Vou testar dps informo se deu certo

Abç.

---

## Resposta #3

**Thiago Brianez** (@tbrianez) — 03/06/2022, 11:30

Bom dia Allan,
Estava pensando em habilitar o identity para poder utilizar os dashboard criados no Analytics dentro do Fluig. O que me diz sobre o serviço do Identity?
Sempre acompanho o [STATUS](https://status.fluig.com/) e aparenta ser bem estável.

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 03/06/2022, 15:37 | ❤️ 2

Aqui usamos o Identity na máquina de Produção desde o início de 2020. Até hoje tivemos 3 quedas sentidas. Em uma delas havia uma certa urgência pra aprovar pauta da diretoria, aí desabilitamos o identity e resetamos a senha dos diretores. Depois retornamos ao Identity.

O problema quando caí o Identity é que nem chamado dá pra fazer pra TOTVS.

Já o ambiente de homologação deixamos fora do Identity, por ter uma autenticação mais rápida e ser mais fácil criar o usuário pra fábrica de software.

---

## Resposta #5

**Allan Reichert** (@allan.reichert) — 06/06/2022, 07:49 | ❤️ 1

Bom dia,

Como disse [@Bruno\_Gasparetto](/u/bruno_gasparetto), é bem difícil de falhar, mas quando falha é quase impossível ter suporte da TOTVS pois só atendem com chamado e o portal de chamados fica fora também.

Como usamos o Identity apenas para acessar o Fluig quero desativar pois não tenho vantagem para uso.

---

## Resposta #6

**Allan Reichert** (@allan.reichert) — 19/07/2022, 08:33

Olá,

Após dois dias com instabilidade penso ser hora de dar adeus ao Identity.

Fiz o teste de apenas desativar o Identity mas não dá certo pois tenho sincronizado com o AD.

Sabem como posso migrar para integração direta do Fluig com o AD sem Identity?

---

## Resposta #7 ✅ RESPOSTA ACEITA

**Igor Rodrigues** (@fluigor.com.br) — 20/07/2022, 13:09

Olá [@allan.reichert](/u/allan.reichert)

Agora você chegou no Grande Problema ao utilizar o identity desde o inicio da implantação.
Pois ele gerencia a criação de usuário na plataforma, criando o usuário com um login em formato baseado no e-mail do usuario Ex. igor.rodrigues.totvs.com.br.1 onde o numero é o codigo da empresa Fluig

Hoje a integração LDAP da plataforma Fluig utiliza o campo sAMAccountName para encontrar o usuário no AD, e este parâmetro busca o valor do campo login do cadastro de usuario da plataforma preenchido conforme acima.
para conseguir integrar com o LDAP terás que rodar o hotifix que altera o login em todos os usuários para eles terem como login o mesmo valor do campo sAMAccountName do seu AD.

Este procedimento até onde tenho conhecimento só pode ser realizado através de um hotfix, jamais realize a alteração via banco devido a relação das tabelas e colunas.

Existe este hotfix porém tenho certeza que o suporte não vai recomendar tu usar ele para esse tipo de alteração, não é este o propósito, mais eu tentaria em um ambiente isolado para testar.

Qual seu banco de dados?

Atenciossamente,

---

## Resposta #8

**Allan Reichert** (@allan.reichert) — 20/07/2022, 15:05 | ❤️ 1

Boa tarde,

Sim, bem esse o problema. Temos Oracle 12c

Tenho a base de testes, posso simular as situações sem problema se puder me passar o HotFix.

Obrigado

---

## Resposta #9

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/07/2022, 16:19 | ❤️ 1

Legal do Identity é que ele sempre começa a ter instabilidade nos dias que mais precisamos do Fluig, hehehe.

Já cogitamos também sair do Identity. Provavelmente em breve vamos estudar essa alteração.

---

---

# Sobre a categoria Identity 

> **Fonte:** [https://fluiggers.com.br/t/sobre-a-categoria-identity/505](https://fluiggers.com.br/t/sobre-a-categoria-identity/505)
> **Categoria:** Identity
> **Criado em:** 09/06/2021, 15:32
> **Visualizações:** 316 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 09/06/2021, 15:32

(Substitua este primeiro parágrafo por uma breve descrição de sua nova categoria. Esta orientação aparecerá na área de seleção da categoria, então tente mantê-la abaixo de 200 caracteres.)

Use os parágrafos a seguir para uma descrição mais longa, ou para estabelecer as instruções ou regras da categoria:

-   Por que as pessoas devem usar essa categoria? Para que ela serve?

-   Como exatamente ela é diferente das outras categorias que já existem?

-   O que os tópicos nessa categoria devem conter, em geral?

-   Precisamos dessa categoria? Podemos juntá-la com outra categoria ou subcategoria?

---

---

# Superior Imediato AD no Identity

> **Fonte:** [https://fluiggers.com.br/t/superior-imediato-ad-no-identity/1885](https://fluiggers.com.br/t/superior-imediato-ad-no-identity/1885)
> **Categoria:** Identity
> **Tags:** `processo`
> **Criado em:** 27/04/2023, 09:27
> **Visualizações:** 249 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Daniel Ferreira Santos** (@DanielFerreiraSantos) — 27/04/2023, 09:27

Bom dia,
preciso criar alguns processo onde algumas tarefas teriam como responsável o superior imediato do usuário fluig. Utilizamos o identity integrado como nosso AD e gostaríamos de ter essa informação de superior imediato preenchida no AD. Existe algum campo no Identity que faça esse papel ou que possa utilizar? Caso não exista, existe alguma forma de preencher como dados adicionais.

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 03/05/2023, 08:28 | ❤️ 1

Porque não faz algo dinâmico? Penso num dataset que faz a consulta na API do AD…desconheço a hierarquia no Identity, mas pela possível frequência de manutenção talvez nem valha a pena.

---

---
