# Pesquisa: no seu ambiente os Devs são Admin?

> **Fonte:** [https://fluiggers.com.br/t/pesquisa-no-seu-ambiente-os-devs-sao-admin/3226](https://fluiggers.com.br/t/pesquisa-no-seu-ambiente-os-devs-sao-admin/3226)
> **Categoria:** Administração
> **Criado em:** 29/03/2025, 10:52
> **Visualizações:** 50 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Bruno Gasparetto** (@Bruno_Gasparetto) — 29/03/2025, 10:52

O [@Daniel\_Sales](/u/daniel_sales) teve uma iniciativa incrível de criar uma widget personalizada para fornecer mais recursos à nossa extensão do vscode. Pra isso ela criará endpoints no Fluig.

Porém eu me preocupo muito com a segurança e estou tentando usar o serviço de checar a permissão do usuário (que está difícil, pois alguns pacotes do Fluig exigem credenciais diferentes do Nexus).

Aí tive essa dúvida se normalmente dão papel de admin pros devs. E é muito mais simples identificar se o usuário é admin.

Por isso a enquete :grin:

Nos ambientes que administram e/ou desenvolvem, os Devs são cadastrados como admin?

-   Sim
-   Não

0 votante

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 31/03/2025, 06:46

Acredito que o ideal será admin mesmo, pois o Fluig nem deve ter permissões pra cada detalhe que um dev pode executar.

A Widget tá começando a tomar forma. Já inserimos no nosso GitHub.

[github.com](https://github.com/fluiggers/fluig-widget-helper)

![](https://opengraph.githubassets.com/57f0b6cfa5444844601af1c62c2cfe67/fluiggers/fluig-widget-helper)

### [GitHub - fluiggers/fluig-widget-helper: Conjunto de endpoints para auxiliar no...](https://github.com/fluiggers/fluig-widget-helper)

Conjunto de endpoints para auxiliar no desenvolvimento no Fluig usando a extensão do VS Code

Depois que finalizar a parte de atualizar script de workflow já vamos começar a configurar a extensão pra usar a widget.

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Daniel Sales** (@Daniel_Sales) — 31/03/2025, 10:37 | ❤️ 1

Se o DEV não for admin ele não consegue publicar nada. e se for liberar só as permissões de publicação para um usuário da uma serie de problemas em outras partes. O ideal é o dev ser sempre admin

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 31/03/2025, 10:49

Ótimo saber.

Nunca pesquisei a fundo se tinha como dar permissões específicas.

Porém sei que o Fluig é bem fraco nisso, pois queria dar algumas permissões pro nosso suporte poder indicar usuário substituto e outras coisas mais usuais pro suporte e só consegui isso os colocando como Admin também.

---
