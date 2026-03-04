# Usuários criados no AD, aparecem no Identity, mas não em Usuários no Fluig

> **Fonte:** [https://fluiggers.com.br/t/usuarios-criados-no-ad-aparecem-no-identity-mas-nao-em-usuarios-no-fluig/1614](https://fluiggers.com.br/t/usuarios-criados-no-ad-aparecem-no-identity-mas-nao-em-usuarios-no-fluig/1614)
> **Categoria:** Sem categoria
> **Criado em:** 30/01/2023, 17:14
> **Visualizações:** 246 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 30/01/2023, 17:14

Tenho um usuário que aparece no Identity, mas não aparece na lista de usuários. Evidentemente, em FDN\_USER no SQL Server não aparece.

Isto para mim é inédito: alguém já passou por isto?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 30/01/2023, 17:24

Ao menos aqui nenhum usuário criado no Identity é migrado automaticamente para o Fluig. Somente após eles tentarem acessar o Fluig pela primeira vez que seu usuário é criado.

Assim como o usuário também não é inativado automaticamente ao o inativar no AD (consequentemente deveria inativar no Identity, mas não conferi).

Por isso até estou com um projeto de fazer algum dataset jornalizado no Fluig para pesquisar os usuários no RM e assim criá-los automaticamente, já com as permissões corretas, e inativá-los também.

Mas se o Identity já tiver isso será ótimo.

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 30/01/2023, 17:35

Obrigado, [@Bruno\_Gasparetto](/u/bruno_gasparetto). Acredito que o problema seja o que de vez em quando acontece: o Identity pode estar fora do ar.
Vou aguardar passar hoje para ver o que acontece.

---
