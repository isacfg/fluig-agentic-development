# Dicas sobre Datasets

> **Fonte:** [https://fluiggers.com.br/t/dicas-sobre-datasets/3530](https://fluiggers.com.br/t/dicas-sobre-datasets/3530)
> **Categoria:** BPM
> **Tags:** `form`, `bpm`
> **Criado em:** 18/12/2025, 16:29
> **Visualizações:** 53 | **Likes:** 5 | **Respostas:** 1

---

## Pergunta original

**Leonardoo** (@Leonardoo) — 18/12/2025, 16:29 | ❤️ 1

Boa tarde! Desde já agradeço pelo tempo dedicado a responder esse tópico.

Queria algumas dicas e boas praticas, quando falamos na criação de Dataset com consulta a outros serviços como API e BANCO DE DADOS. **Existe alguma atenção ou detalhe que deve ser considerado ao trabalhar com esses tipos de dados?** Também fiquei muito curioso qual a melhor forma de entregar as informações ao usuário com base em valores preenchidos em formulários ou até mesmo nível hierárquico de acesso informações.

**Exemplo: Em uma outra plataforma trabalhamos muito com a conexão direta ao banco de dados aonde aplicamos regras para filtro de informações.. Exemplo VENDEDOR X é representante de CLIENTE Y então por sua vez apareceria em um campo equivalente ao “ZOOM“ apenas os clientes desse vendedor para realizar um pedido.**

Eu tenho essa dúvidas pois estamos começando agora com o FLUIG e quero pegar um caminho que seja fácil de manter lógica, estrutura e coerência de desenvolvimento para não poluir a plataforma com dados e logicas desnecessárias.

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 19/12/2025, 09:29 | ❤️ 1

Para datasets internos do Fluig até existem algumas validações próprias. Por exemplo, um usuário não consegue puxar os dados do dataset interno de um formulário no qual ele não participou do processo (por padrão), a não ser que você dê permissão de leitura a todos os registros do formulário ou faça uma personificação ao consultar o dataset.

Já nos casos de datasets customizados a gente precisa definir as regras manualmente.

Eu gosto muito de criar datasets auxiliares para reaproveitar código, praticamente usando como se fossem funções. Então criaria ao menos 1 dataset para informar as permissões que o usuário possuí para cada situação. E nos datasets que puxem os dados chamaria o dataset de permissão pra saber os dados que serão retornados.

O campo Zoom permite passar filtros que serão enviados como constraints para o Dataset, mas no caso de permissões é bom só confiar na informação do usuário logado mesmo.

Quanto às pesquisas direto em banco de dados, no caso do Fluig eu praticamente só faço isso para as tabelas padrões do sistema. Acho que nunca fiz uma pesquisa numa tabela de formulário, justamente porque são criadas dinamicamente no banco de dados e com isso os nomes ficam diferentes no ambiente de Dev/Homolog e Produção.

Já com relação a esses dados que podem ser diferentes entre Dev/Homolog e Produção me acostumei a ter formulários pra salvar esses parâmetros, ou mesmo salvar como dados adicionais na Empresa. Assim consigo criar código que não vou precisar ficar mudando valores fixos, simplesmente pesquiso os valores do “ambiente”.

Pra quem tá começando na plataforma pode ter algumas dúvidas sobre o que é back-end e front-end, então aconselho a dar uma olhada nesse vídeo [https://youtu.be/LRv6hctjVCo](https://youtu.be/LRv6hctjVCo) (é antigo, mas feito com carinho, hehehe).

Aí de quebra tenho esses vídeos sobre reaproveitar código Fluig:

-   [https://youtu.be/LRv6hctjVCo](https://youtu.be/LRv6hctjVCo)
-   [https://youtu.be/w\_9HxkdwRAI](https://youtu.be/w_9HxkdwRAI)

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 19/12/2025, 18:05 | ❤️ 3

O cara é foda e tem bom gosto….

![image](https://fluiggers.com.br/uploads/default/optimized/2X/6/68df6f57bec0f5a64a876e199e8726dd1e51e3a1_2_690x392.jpeg)

---
