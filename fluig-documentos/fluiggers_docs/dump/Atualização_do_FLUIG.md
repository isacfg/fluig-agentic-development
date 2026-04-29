# Atualização do FLUIG

> **Fonte:** [https://fluiggers.com.br/t/atualizacao-do-fluig/659](https://fluiggers.com.br/t/atualizacao-do-fluig/659)
> **Categoria:** Ambiente Fluig
> **Criado em:** 17/09/2021, 17:49
> **Visualizações:** 542 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**João Felipe Soares Barreto** (@jfsbarreto) — 17/09/2021, 17:49

Boa tarde Pessoal, estou atuando a primeira vez com atualização de versão do ambiente.

Estou atualmente na versão 1.6.5 e estamos precisando migrar para versão 1.7.1.

Com protheus, sei como funciona e o que eu preciso pra fazer 1 atualização massiva mas pra FLUIG eu ainda não fiz nem tenho idéia do que eu preciso pra fazer essa atualização.

Claro que temos os processos básicos de backup e etc, mas além disso, preciso mais alguma coisa?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 17/09/2021, 18:57 | ❤️ 2

Das vezes que atualizei eu segui as [orientações do manual](https://tdn.totvs.com/pages/releaseview.action?pageId=271666186) e foi tudo bem. Fiz o backup do banco, o backup dos arquivos (por aqui ainda tenho a vantagem de ser uma VM, então peço pra fazer o snapshot).

Só um detalhe: você não pode sair da 1.6.5 direto pra 1.7.1. Precisa primeiro atualizar pra última versão disponível da 1.6.5 (tem os patches, então precisa garantir que a sua 1.6.5 realmente está na última versão lançada).

Se não me engano precisa primeiro atualizar pra 1.7.0 pra então seguir pra 1.7.1.

Ultimamente tenho visto algumas reclamações da 1.7.1, mas não se informar se já corrigiram os problemas com ela.

---
