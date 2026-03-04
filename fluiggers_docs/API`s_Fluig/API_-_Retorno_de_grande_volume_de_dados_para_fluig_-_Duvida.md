# API - Retorno de grande volume de dados para fluig - Duvida

> **Fonte:** [https://fluiggers.com.br/t/api-retorno-de-grande-volume-de-dados-para-fluig-duvida/3361](https://fluiggers.com.br/t/api-retorno-de-grande-volume-de-dados-para-fluig-duvida/3361)
> **Categoria:** API`s Fluig
> **Tags:** `dataset`
> **Criado em:** 29/07/2025, 09:32
> **Visualizações:** 45 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Nathalia Gomes** (@Nathalia_Maria) — 29/07/2025, 09:32

**Olá, pessoal! Tudo bem?**

Gostaria de tirar uma dúvida sobre a melhor forma de tratar uma API que retorna um volume grande de registros no Fluig.

Atualmente, estou utilizando um dataset com paginação, já que a API que consumo é paginada. No entanto, mesmo implementando esse controle no dataset, não estou conseguindo avançar para as próximas páginas nem trazer novos registros corretamente.

Gostaria de saber se esse é realmente o caminho ideal para lidar com esse tipo de cenário no Fluig, ou se existe uma abordagem mais adequada para tratar grandes volumes de dados vindos de APIs.

Desde já, agradeço pela ajuda!

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 29/07/2025, 19:33

Tenho hoje um dataset que consome a API de solicitações - uma espécie de consulta customizada, pois preciso pesquisar pelo conteúdo dos formulários também e acredito que pelo ‘peso’ dessa API com esse volume de dados devo ter passado pelo mesmo problema que você.

O que fiz que amenizou um pouco nossa vida nesse caso foi:

-   Testar diferentes tamanhos de página até encontrar o melhor custo x benefício
-   Trazer o mínimo de campos, quando possível
-   Notei que em alguns casos é melhor fazer um pós-processamento dos dados ao invés de encher a chamada de filtros e expansões - trazer tudo e processar em memória foi mais rápido em alguns cenários
-   Nesse caso em particular, poderia partir para consultas SQL por exemplo, pegando todos os dados separadamente - em nome da simplicidade e assumindo que esse dataset pode rodar por um tempo sem prejudicar a operação, continuei usando a API.
-   Com ajuda de IA, também tentei implementar algo parecido com promises para executar mais de uma chamada ao mesmo tempo, mas aparentemente as n chamadas rodam na mesma thread, não trazendo ganhos e sim perdas de performance. Não levei essa ideia adiante para manter a simplicidade e legibilidade do código. Torcendo para que no Fluig 2.0 realmente tenhamos acesso ao ES6 para resolver isso!

Não sei se os camaradas tem alguma outra ideia, mas as questões acima foram por pura tentativa e erro na API de usuários

```auto
/bpm/api/v1/requests
```

Tentei também a v2 mas os resultados e a performance são idênticos.

Entendo que, apesar da performance lamentável, o caminho da API é o mais limpo e mantido pelo fornecedor, sendo garantido no longo prazo (acho, né?).

---
