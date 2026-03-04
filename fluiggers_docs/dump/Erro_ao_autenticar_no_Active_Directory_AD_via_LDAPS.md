# Erro ao autenticar no Active Directory AD via LDAPS

> **Fonte:** [https://fluiggers.com.br/t/erro-ao-autenticar-no-active-directory-ad-via-ldaps/904](https://fluiggers.com.br/t/erro-ao-autenticar-no-active-directory-ad-via-ldaps/904)
> **Categoria:** Ambiente Fluig
> **Tags:** `active-directory`, `activedirectory`
> **Criado em:** 01/02/2022, 11:32
> **Visualizações:** 1490 | **Likes:** 8 | **Respostas:** 5

---

## Pergunta original

**Emerson Rodrigues** (@Emerson_Rodrigues) — 01/02/2022, 11:32

Eu configurei o fluig de acordo com essa TDN aqui, [Configuração de autenticação utilizando LDAP - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=257623389), só que aí o protocolo é LDAP e o cliente utiliza LDAPS que uma espécie de segurança ssl, aí eu num sei se é o fluig que num aceita esse breguete aee de LDAPS ou sei lá, porque depois de configurado eu tento acessar o usuário utilizando a senha do AD dele e num vai, somente com a senha cadastrada no fluig mesmo, e no log num fala nada de muito importante a não ser que a senha ta errada.

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 01/02/2022, 16:47

Olá Emerson, tudo bem?

na documentação temos

```auto
<login-module code="com.totvs.foundation.auth.FoundationExtLdapLoginModule" flag="sufficient" module="com.totvs.foundation.auth">
    <module-option name="java.naming.factory.initial" value="com.sun.jndi.ldap.LdapCtxFactory"/>
    <module-option name="java.naming.provider.url" value="ldap://<SERVIDOR>:<PORTA>/"/>
    <module-option name="java.naming.security.authentication" value="simple"/>
    <module-option name="java.naming.security.protocol" value=""/>
    <module-option name="java.naming.security.principal" value="<USUARIO>@<DOMINIO>"/> <!-- Exemplo: value="ldapportal@sp01.local" -->
    <module-option name="java.naming.security.credentials" value="<SENHA>"/>
    <module-option name="uidAttributeID" value="sAMAccountName"/>
    <module-option name="baseFilter" value="(sAMAccountName={0})"/>
    <module-option name="loginCombinedWithDatabase" value="false"/>
    <module-option name="baseCtxDN" value="DC=<ESTRUTURA>"/>
    <module-option name="rolesCtxDN" value="DC=<ESTRUTURA>"/>
    <module-option name="hashAlgorithm" value="MD5"/>
    <module-option name="hashEncoding" value="HEX"/>
    <module-option name="principalClass" value="com.totvs.technology.foundation.common.TOTVSTechPrincipal"/>
</login-module>
```

Deve ter atenção a linha abaixo, informando o valor SSL

```auto
<module-option name="java.naming.security.protocol" value="ssl"/>
```

e colocar a porta correta configurada para o SSL na conexão do LDAP não informar “s”

```auto
<module-option name="java.naming.provider.url" value="ldap://<SERVIDOR>:<PORTA>/"/>
```

Veja se funciona!

Abrass

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 02/02/2022, 11:23

Será que o servidor também não tem de ser configurado para aceitar ldaps?

---

## Resposta #3

**MAURO SIMOES** (@Mautresim) — 02/02/2022, 11:24

Você está configurando Smart Sync, Emerson\_Rodrigues?

---

## Resposta #4

**Igor Rodrigues** (@fluigor.com.br) — 02/02/2022, 16:42 | ❤️ 2

Pessoal recebi a informação que o Fluig não é homologado para integração LDAPS.
Sugestão foi de abertura como melhoria.

---

## Resposta #5

**Igor Rodrigues** (@fluigor.com.br) — 02/02/2022, 16:42 | ❤️ 2

Ele não está usando Fluigidentity [@Mautresim](/u/mautresim)

---

## Resposta #6

**MAURO SIMOES** (@Mautresim) — 03/02/2022, 07:22 | ❤️ 1

Rapaz! Cada dia aprendo uma coisa nova: é possível usar o Fluig sem usar o Identity, só com autenticação via AD?

---

## Resposta #7

**Emerson Rodrigues** (@Emerson_Rodrigues) — 09/02/2022, 16:43

Oi Mautresim no caso do cliente em questão o servidor está configurado com LDAPS sim

---

## Resposta #8

**Emerson Rodrigues** (@Emerson_Rodrigues) — 09/02/2022, 17:12

Exatamente isso Fluigor, tive a mesma informação depois, só não deu tempo de atualizar aqui, sabe informar onde abro essas sugestões de melhorias Igor?

---

## Resposta #9 ✅ RESPOSTA ACEITA

**Igor Rodrigues** (@fluigor.com.br) — 22/02/2022, 16:10 | ❤️ 1

[@Emerson\_Rodrigues](/u/emerson_rodrigues)

Segue link de acesso a Central Colaborativa da TOTVS

[https://centraldeatendimento.totvs.com/hc/pt-br/community/topics](https://centraldeatendimento.totvs.com/hc/pt-br/community/topics)

---

## Resposta #10

**Rodrigo de Oliveira** (@redschenko) — 09/04/2024, 15:13 | ❤️ 2

Olá.

Consegui fazer funcionar.
Segui a documentação contida neste link [Configure LDAPS | Setup LDAPS | LDAPS on Windows Server](https://www.miniorange.com/guide-to-setup-ldaps-on-windows-server#overview) para gerar um certificado.
Depois importei o certificado conforme passo 2.2 do documento e reiniciei o Fluig.
Após isto, passou a autenticar com as credenciais do AD.

Espero ter ajudado.

---
