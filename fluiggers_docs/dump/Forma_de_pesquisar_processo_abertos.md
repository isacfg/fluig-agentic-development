# Forma de pesquisar processo abertos

> **Fonte:** [https://fluiggers.com.br/t/forma-de-pesquisar-processo-abertos/2774](https://fluiggers.com.br/t/forma-de-pesquisar-processo-abertos/2774)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 06/05/2024, 11:36
> **Visualizações:** 180 | **Likes:** 3 | **Respostas:** 0

---

## Pergunta original

**Jose Henrique ** (@Jose) — 06/05/2024, 11:36

Estou com uma duvida, tem algum jeito de melhorar a forma de pesquisar os processo abertos ou finalizados, por exemplo por uma palavra chave que está no formulário.
Pois varias vezes tenho que achar um processo em aberto e tenho que ficar procurando, se tivesse uma forma mais fácil me ajudaria bastante.

---

## Resposta #1

**venturelli** (@venturelli) — 06/05/2024, 18:20 | ❤️ 1

Daria pra usar o filtro da central de tarefas, mas tem algumas limitações:

-   Somente para solicitações em aberto;
-   Teria que que estar sob sua responsabilidade ou gerência
-   Os campos serão limitados aos selecionados no desenvolvimento do processo.

Via produto, não tem uma tela nativa pra isso. Mas tem API onde dá pra fazer essa consulta:

[https://api.fluig.com/latest/process-management/swagger-ui/#/Requests/findRequests](https://api.fluig.com/latest/process-management/swagger-ui/#/Requests/findRequests)

e

[https://api.fluig.com/latest/process-management/swagger-ui/#/Processes/findRequestsByProcess](https://api.fluig.com/latest/process-management/swagger-ui/#/Processes/findRequestsByProcess)

Acredito que seja passando o parâmetro fields na seguinte forma:
campo01:valor do campo 01,campo02:valor do campo02

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Allan Reichert** (@allan.reichert) — 10/05/2024, 07:49 | ❤️ 2

Olá,

Utilizo o campo de pesquisa no topo do fluig, se quiser acesso aos filtros avançados é só fazer uma pesquisa (mesmo com o campo vazio) e terá acesso as opções:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/2/268b08ba33d52d6151c214688ecf52745e4f84ab_2_690x480.png)

---

## Resposta #3

**Mendes** (@andersonma) — 02/08/2024, 08:34

Bom dia.

Uma outra alternativa é criar uma widget pesquisando no dataset do formulário do processo o campo que você deseja, listar as informações em uma lista/tabela e adicionar um link para que a pessoa ao clicar é redirecionada para o processo que for encontrado.

At.te,

---
