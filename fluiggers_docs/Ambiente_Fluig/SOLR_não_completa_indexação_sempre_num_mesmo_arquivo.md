# SOLR não completa indexação sempre num mesmo arquivo

> **Fonte:** [https://fluiggers.com.br/t/solr-nao-completa-indexacao-sempre-num-mesmo-arquivo/1410](https://fluiggers.com.br/t/solr-nao-completa-indexacao-sempre-num-mesmo-arquivo/1410)
> **Categoria:** Ambiente Fluig
> **Tags:** `pesquisa`, `indexação`, `solr`
> **Criado em:** 17/10/2022, 16:26
> **Visualizações:** 485 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 17/10/2022, 16:26

Salve nação!

Já passaram por isso? Fluig foi atualizado para 1.7.1 e desde então não reindexa mais. Ao mandar reindexar tudo ele sempre para num número específico:

![image](https://fluiggers.com.br/uploads/default/original/1X/b13a8abbc541aacf3de7663e53d936c6d6ab5ed1.png)

Não encontrei correspondência entre esse número e um arquivo no GED ainda.

---

## Resposta #1

**André Timm** (@andre.timm) — 19/10/2022, 09:14

Você pode tentar ver no log do SOLR. Você consegue acessar o painel do SOLR pelo navegador msm geralemente é http://\[IP\]:8983/solr, caso não de, você pode olhar na tabela FDN\_PARAMGERAL e filtrar pela data\_key totvs/solrURL. Inclusive la você consegue mudar o nivel de log do SOLR caso precise debugar mais afundo

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 19/10/2022, 09:34

O log do SOLR não indica nada no nível padrão - mandamos todos os logs (server.log e solr) para a TOTVS, que acredita ser algum bug na atualização para a versão 1.7.1, por causa disso aqui:

```auto
2022-10-18 15:17:33,513 ERROR [org.hibernate.engine.jdbc.spi.SqlExceptionHelper] (pool-6143-thread-2) The text data type cannot be selected as DISTINCT because it is not comparable.
```

Algum problema estrutural na tabela DOCUMENTO. Mandamos para análise e te conto logo mais. De toda forma, vou reanalisar com o nível mais detalhado no Solr. Valeu!!!

---
