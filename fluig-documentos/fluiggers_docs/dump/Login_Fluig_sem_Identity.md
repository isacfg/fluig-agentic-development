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
