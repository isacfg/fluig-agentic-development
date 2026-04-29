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
