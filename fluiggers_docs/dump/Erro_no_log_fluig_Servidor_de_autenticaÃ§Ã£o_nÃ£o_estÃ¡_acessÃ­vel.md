# Erro no log fluig Servidor de autenticaÃ§Ã£o nÃ£o estÃ¡ acessÃ­vel

> **Fonte:** [https://fluiggers.com.br/t/erro-no-log-fluig-servidor-de-autenticaa-a-o-na-o-esta-acessa-vel/1309](https://fluiggers.com.br/t/erro-no-log-fluig-servidor-de-autenticaa-a-o-na-o-esta-acessa-vel/1309)
> **Categoria:** Ambiente Fluig
> **Criado em:** 13/09/2022, 13:05
> **Visualizações:** 791 | **Likes:** 2 | **Respostas:** 6

---

## Pergunta original

**Felipe Braz** (@felipe.braz) — 13/09/2022, 13:05

Estou recebendo constantemente estas mensagens no log do fluig, alguém sabe me dizer o que pode ser?

2022-09-13 13:03:39,324 INFO \[com.fluig.core.i18n.client.I18nImporter\] (Timer-65) Vai importar o bundle - bundleCode=scheduling, locale=pt\_br, isDefaultLocale=true, relatedBundleCodes=null, i18nUrl=[http://10.190.3.1:80/translation](http://10.190.3.1:80/translation)
2022-09-13 13:03:39,324 INFO \[com.fluig.component.UserJwtToken\] (Timer-65) Vai gerar token, usando a URL: [http://10.1.2.3:80/admin/api/tokens](http://10.1.2.3:80/admin/api/tokens), usando POST
2022-09-13 13:03:39,329 WARN \[com.fluig.component.UserJwtToken\] (Timer-65) Could not generate the token with the following information: user: wcmadmin tenant: 0
2022-09-13 13:03:39,330 WARN \[com.fluig.core.i18n.client.startup.I18nStartup\] (Timer-65) Servidor de autenticaÃ§Ã£o nÃ£o estÃ¡ acessÃ­vel

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 25/06/2024, 13:49

Teve alguma solução pra isso?

Meu fluig começou a dar esse erro e fica tentando criar token de acesso numa URL que não está acessível e isso está lotando o log.

---

## Resposta #2

**Allan Reichert** (@allan.reichert) — 25/06/2024, 16:20

verifica se possui essa configuração

[https://tdn.totvs.com/display/public/fluig/Fluig+API](https://tdn.totvs.com/display/public/fluig/Fluig+API)

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 26/06/2024, 00:09

Tá configurado, tanto em homolog quanto em produção.

Mas antes não dava essa mensagem, ainda mais durante a inicialização.

Resolvi atualizar o Fluig e persistiu.

No outro fórum achei um comentário de que a TOTVS forneceu um domain.xml que corrigiu o problema. A dificuldade é entender o que precisa mudar na configuração.

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 27/06/2024, 16:19 | ❤️ 1

Só dando um retorno: por algum motivo o Fluig não estava conseguindo acessar a si mesmo e isso estava ocasionando esses erros.

No caso coloquei no hosts o endereço IP pro domínio utilizado, assim o Fluig consegue se acessar e os erros pararam.

---

## Resposta #5

**Daniel_Alves** (@Daniel_Alves) — 28/01/2025, 11:50

Olá Bruno, tudo bem?

Estou enfrentando esse mesmo problema durante a implantação do Fluig aqui na empresa. Por gentileza, poderia me informar em qual arquivo hosts você informou o IP ?

Atenciosamente.

---

## Resposta #6 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 28/01/2025, 12:24 | ❤️ 1

Olá, [@Daniel\_Alves](/u/daniel_alves) .

Coloquei no arquivo hosts do próprio servidor (no Windows fica em C:\\Windows\\System32\\drivers\\etc\\hosts). Além de ter revisto as regras de firewall.

Mas confesso que consegui resolver esse problema em produção, mas meu servidor de homologação até hoje dá essa mensagem de erro.

---

## Resposta #7

**Daniel_Alves** (@Daniel_Alves) — 28/01/2025, 14:03

Olá Bruno, entendi. Vou fazer esse ajuste e realizar os testes. Muito obrigado!! :handshake:

---
