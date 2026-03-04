# Tenant_id na tabela FDN_PARAMGERAL

> **Fonte:** [https://fluiggers.com.br/t/tenant-id-na-tabela-fdn-paramgeral/1022](https://fluiggers.com.br/t/tenant-id-na-tabela-fdn-paramgeral/1022)
> **Categoria:** Ambiente Fluig
> **Criado em:** 12/04/2022, 08:31
> **Visualizações:** 607 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 12/04/2022, 08:31

Eu estou com um erro de timeout no console do navegador.
O erro que dá é

> 10.200.20.6:7777/socket.io/socket.io.js:1 Failed to load resource: net::ERR\_CONNECTION\_TIMED\_OUT

Entrei no WCMADMIN e, em Realtime, fiz um teste de conexão, que gerou um erro:

![image](https://fluiggers.com.br/uploads/default/optimized/1X/00c60a961461118e507bd7510f4d86704273510e_2_690x91.png)

Pesquisei no SQL Server que tem o banco de dados FLUIG a tabela FDN\_PARAMGERAL e procurei a linha que me desse a porta ‘7777’. A resposta foi

> PARAMGERAL\_ID
>
> DATA\_KEY
>
> DATA\_VALUE
>
> TENANT\_ID
>
> 95
>
> node.chat.url
>
> 10.200.20.6:7777
>
> \-1

O que significaria este ‘Tenant\_id’ = -1?
Seria esta a causa do erro?

Aliás, tenho outras entradas nessa tabela com o ‘id’ do tenant também com -1.

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 12/04/2022, 11:25

Parece ser alguma coisa relacionada ao Rocket chat que a totvs esta testando junto com o fluig. já vi vários erros reportando o rocket chat. então deve ter algo haver.

---
