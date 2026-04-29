# Como exportar ou obter versões anteriores de um processo

> **Fonte:** [https://fluiggers.com.br/t/como-exportar-ou-obter-versoes-anteriores-de-um-processo/239](https://fluiggers.com.br/t/como-exportar-ou-obter-versoes-anteriores-de-um-processo/239)
> **Categoria:** BPM
> **Tags:** `processo`, `bpm`, `exportar`, `diagrama`
> **Criado em:** 29/03/2021, 11:37
> **Visualizações:** 1438 | **Likes:** 5 | **Respostas:** 0

---

## Pergunta original

**HELIO REZENDE** (@HelioRezende) — 29/03/2021, 11:37 | ❤️ 1

Onde são guardados as versões dos processos ?
É uma tabela ou pastas ?
Como obter uma versão anterior ?

---

## Resposta #1

**Lucas de Castro** (@Lucas_de_Castro) — 10/04/2021, 15:36 | ❤️ 1

Boa tarde Helio,

Para obter a versão anterior basta você excluir a versão atual que será restaurado a versão anterior.

---

## Resposta #2

**Julio Kriger** (@Julio_Kriger) — 13/04/2021, 12:08 | ❤️ 1

Hola!

Puede consultar las versiones de un proceso por API en [https://api.fluig.com/latest/process-management/swagger-ui/#/Processes/findProcessVersions](https://api.fluig.com/latest/process-management/swagger-ui/#/Processes/findProcessVersions).

Y luego exportar el proceso en XML con [https://api.fluig.com/latest/process-management/swagger-ui/#/Processes/exportProcessVersion](https://api.fluig.com/latest/process-management/swagger-ui/#/Processes/exportProcessVersion).

Saludos

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Magno Silva Adauto** (@Magno_Silva_Adauto) — 01/05/2021, 20:06 | ❤️ 2

Olá,

Para baixar uma versão anterior do processo sem a necessidade de excluir a atual, basta estar logado no Fluig e jogar essa URL no navegador trocando os parâmetros e o download será iniciado.

<URL\_FLUIG>/ecm/api/rest/ecm/processdefinition/exportProcessToZip?processId=<ID\_PROCESSO>&version=<VERSAO\_DESEJADA>

Exemplo:

[https://empresa.fluig.com:8143/ecm/api/rest/ecm/processdefinition/exportProcessToZip?processId=processoRH&version=10](https://empresa.fluig.com:8143/ecm/api/rest/ecm/processdefinition/exportProcessToZip?processId=processoRH&version=10)

---

## Resposta #4

**system** (@system) — 17/05/2021, 11:22

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
