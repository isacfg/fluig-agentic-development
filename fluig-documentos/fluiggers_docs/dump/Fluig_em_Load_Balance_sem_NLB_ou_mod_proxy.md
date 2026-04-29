# Fluig em Load Balance sem NLB ou mod_proxy

> **Fonte:** [https://fluiggers.com.br/t/fluig-em-load-balance-sem-nlb-ou-mod-proxy/1249](https://fluiggers.com.br/t/fluig-em-load-balance-sem-nlb-ou-mod-proxy/1249)
> **Categoria:** Ambiente Fluig
> **Criado em:** 24/08/2022, 01:14
> **Visualizações:** 486 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Felipe Braz** (@felipe.braz) — 24/08/2022, 01:14

Tenho um cliente que configurou o fluig em Load Balance sem utilizar o NLB ou mod\_proxy, basicamente ele colocou o RealTime e Indexer numa instância separada compartilhada, compartilhou o volume, apps e wcmdir entre elas, por fim colocou o BigIP para redirecionar as requisições para os 4 servidores de aplicação.
Já viram isso funcionando desta maneira em algum lugar?
Tem algum comentário ou dica a respeito?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Daniel Cabral Santos** (@daniel.cabral) — 26/08/2022, 08:16

Me parece que vai funcionar bem, a diferença é que o BigIP é o balancer agora. Desde que ele faça o balanceamento corretamente… está funcionando como esperado? No apache por exemplo há algumas configurações a fazer a respeito do cabeçalho das requisições e uma configuração para ‘grudar’ a conexão no nó delegado para a sessão.

---

## Resposta #2

**Felipe Braz** (@felipe.braz) — 13/09/2022, 12:27 | ❤️ 1

Obrigado pela resposta

---
