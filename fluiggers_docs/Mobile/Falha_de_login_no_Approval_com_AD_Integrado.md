# Falha de login no Approval com AD Integrado

> **Fonte:** [https://fluiggers.com.br/t/falha-de-login-no-approval-com-ad-integrado/88](https://fluiggers.com.br/t/falha-de-login-no-approval-com-ad-integrado/88)
> **Categoria:** Mobile
> **Tags:** `approval`, `active-directory`, `activedirectory`
> **Criado em:** 12/03/2021, 18:15
> **Visualizações:** 660 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 12/03/2021, 18:15 | ❤️ 1

Caso possua o login integrado com Active Directory e não consiga logar no Approval com a credencial do AD, comente o seguinte trecho do domain.xml (orientação do suporte TOTVS):

```auto
<login-module code="com.totvs.foundation.auth.FoundationDatabaseServerLoginModule"
            	flag="sufficient"
            	module="com.totvs.foundation.auth">
	<module-option name="hashAlgorithm"
             		value="MD5"/>
	<module-option name="hashEncoding"
             		value="HEX"/>
	<module-option name="principalClass"
             		value="com.totvs.technology.foundation.common.TOTVSTechPrincipal"/>
</login-module>
```

---
