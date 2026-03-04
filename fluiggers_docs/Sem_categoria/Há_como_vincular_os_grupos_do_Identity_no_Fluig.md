# Há como vincular os grupos do Identity no Fluig?

> **Fonte:** [https://fluiggers.com.br/t/ha-como-vincular-os-grupos-do-identity-no-fluig/3492](https://fluiggers.com.br/t/ha-como-vincular-os-grupos-do-identity-no-fluig/3492)
> **Categoria:** Sem categoria
> **Criado em:** 06/11/2025, 19:05
> **Visualizações:** 16 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Guilherme Gimenes** (@Guilherme_Gimenes) — 06/11/2025, 19:05

Olá pessoal.

**Meu cenário é:** Possuo o identity sincronizado corretamente com o AD da empresa. Sendo assim, as pastas do AD são listadas no Identity e quando voce aa lista e aceita, aparecem no grupo do identity.

Então exemplo, temos um grupo no AD chamado “estagiários”, que ao aceitar, aparece o grupo “estagiários” nos grupos do IDentity, listando certinho os 50 estagiários.

***A dúvida é:*** Gostaria que essas mesmas pastas aparecessem no FLUIG, para por exemplo, eu quero criar um banner e dar permissão de visualização somente para o grupo “estagiários”, o fluig puxaria esse grupo do identity.

Atualmente, os grupos no fluig tem que ser manuais ou seja, crio o grupo e adiciono esses 50 estagiarios, um a um. O problema é a manutenção, devido a o entra e sai de funcionarios, promoções etc. Isso sem contar que temos mais de 300 grupos no AD sincronizados com o Identity

É possivel realizar essa integração? Em tudo quanto é IA indica que sim, mas com informações desencontradas, e no manual oficial da Totvs não falam nada a respeito.

Obrigado.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 09/11/2025, 19:45

Já vi na documentação do Identity que ele possuí api. Até no fórum oficial da totvs tem uma seção específica de Identity.

Então acho que, do mesmo jeito que criar o usuário no Identity não reflete automaticamente pro Fluig, os grupos também não.

Precisa fazer algum job de integração no Fluig pra puxar os dados do Identity.

Eu faço isso, de ter um dataset jornalizado no Fluig, buscando atualizações de funcionários no meu ERP. Preferi ir direto no ERP por ter menos grupos, são mais padronizados, e principalmente por que eles naõ estão configurados no AD.

---
