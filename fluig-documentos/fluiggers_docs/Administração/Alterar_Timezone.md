# Alterar Timezone

> **Fonte:** [https://fluiggers.com.br/t/alterar-timezone/70](https://fluiggers.com.br/t/alterar-timezone/70)
> **Categoria:** Administração
> **Tags:** `timezone`, `jboss`
> **Criado em:** 12/03/2021, 15:22
> **Visualizações:** 1150 | **Likes:** 4 | **Respostas:** 0

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 12/03/2021, 15:22 | ❤️ 3

No hosts.xml:

```auto
# Configurando o Time Zone
		<host>
			<servers>
				<server>
					<jvm>
						<jvm-options>
							<option value="-Duser.timezone='-04:00'"/>
						</jvm-options>
```

---

## Resposta #1

**Emerson Rodrigues** (@Emerson_Rodrigues) — 04/03/2022, 14:29 | ❤️ 1

Boooaaaa brother como sempre salvando hehe … Só pra complementar aqui galera essa resolução do nosso daniel resolve um erro que pode vir a aparecer no console (Moment Timezone has no data for GMT-03:00. See [Moment Timezone | Docs](http://momentjs.com/timezone/docs/#/data-loading/). z @ wcm\_global\_pt\_BR.js?v=1.6.4-180814:30) do chrome quando as horas no SLA estão todos errados na aba de complemento dos processos. Pelo menos aqui pra mim resolveu legal.

---
