# Como distribuir o conhecimento na equipe?

> **Fonte:** [https://fluiggers.com.br/t/como-distribuir-o-conhecimento-na-equipe/2966](https://fluiggers.com.br/t/como-distribuir-o-conhecimento-na-equipe/2966)
> **Categoria:** Sem categoria
> **Criado em:** 08/09/2024, 20:55
> **Visualizações:** 73 | **Likes:** 3 | **Respostas:** 0

---

## Pergunta original

**Matheus Mósso** (@msmosso) — 08/09/2024, 20:55

Boa noite pessoal,

Gostaria de provocar um questionamento que venho tendo: como utilizar ferramentas para distribuir o conhecimento sobre Fluig dentro dos times de desenvolvimento e acelerar a solução de problemas dos usuários?

Tenho cogitado a utilização do Notion como solução de base de conhecimento do time (uma espécie de Wiki) com o intuito de padronizar o desenvolvimento (exemplo: nome de datasets, tabelas customizadas no banco de dados, idioma de código, padrão de indentação, entre outros)

Vejo também a possibilidade de usar algo no mesmo sentido para, dessa vez, os usuários do Fluig tenham acesso a manuais de preenchimento de formulários, dúvidas frequentes, entre outros.

Cogitamos a possibilidade de adicionar um link nos formulários com um manual de preenchimento, ou uma widget que serve como central de ajuda para todos os processos.

Vocês utilizam alguma outra solução para esses “problemas”?

Obrigado desde já,

Att.,

Matheus Mósso

Abraço!

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 11/09/2024, 00:13 | ❤️ 2

Olá Matheus,

Eu acredito que o grande desafio em uma equipe de desenvolvimento FLUIG é o padrão de codificação, se conseguires implementar um método e padrões de versionamentos ja seria um grande passo em uma equipe de desenvolvimento Fluig.

Sobre a ideia de um manual de usuário para os formulários, não vejo como não ser mais um detalhe a se customizar.

[Git Mantrav2.pdf](https://fluiggers.com.br/uploads/short-url/rrV7cW5OqaN6jmxAA7hOaxiAYPM.pdf) (732,5,KB)
[Metodologia de Desenvolvimento - Fluig.pdf](https://fluiggers.com.br/uploads/short-url/7Dde5lIhl3ts3kdti7MbxQH2B5L.pdf) (454,5,KB)

Compartilhei um pouco das stratégias que uso a mais de 6 anos! Forte abraço!

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 11/09/2024, 08:32 | ❤️ 1

Por aqui usamos uma solução de wiki pra compartilhar conhecimento entre todos, evitando claro de colocar senhas (aí temos cofre de senha pra isso).

Mas ainda não fizemos nada a respeito do Fluig.

Sobre Fluig, eu mantenho tudo versionado no nosso GitLab on premise e todos os processos e widgets são bem documentadas numa pasta específica de documentação. Padrão de codificação acabei desistindo por um tempo, já que havia uma fábrica de software que nos atendia com provavelmente PJs e cada um fazia de um jeito (era um caos, já que sequer documentação e versionamento vinha da parte deles). Como atualmente praticamente só eu estou mexendo no Fluig e tenho meu jeito de codar acabei não implementando documentação sobre isso, mas é uma boa adição.

Sobre manual pra preencher formulário eu acho desnecessário. Se o formulário não é explícito o suficiente então precisa melhorar a UX dele e acrescentar textos de ajuda. Não acho produtivo um usuário precisar ir procurar um manual sobre como preencher o formulário.

Já algo com dicas de processos e termos do Fluig é útil, já que muitos usuários entram na solicitação de forma diferente e não sabem que indo no histórico podem clicar no botão “Movimentar” pra preencher o formulário ou se confundem com os nomes de alguns botões.

---

## Resposta #3

**Matheus Mósso** (@msmosso) — 13/09/2024, 08:42

Excelente!

Muito obrigado [@fluigor.com.br](/u/fluigor.com.br) e [@Bruno\_Gasparetto](/u/bruno_gasparetto) pelas dicas!

---
