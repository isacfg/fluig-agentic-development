# Backup Arquivos ECM

> **Fonte:** [https://fluiggers.com.br/t/backup-arquivos-ecm/1072](https://fluiggers.com.br/t/backup-arquivos-ecm/1072)
> **Categoria:** ECM / GED
> **Criado em:** 09/05/2022, 13:34
> **Visualizações:** 806 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Daniela** (@daniela.troggian) — 09/05/2022, 13:34

Pessoal, Bom Dia:
Tudo bem?
Gostaria de saber se vocês sabem como funciona o backup do Fluig em relação a arquivos e pastas do ECM.
Sei que há a lixeira e que nela podemos definir quanto tempo os arquivos poderão ficar lá
e que ela pode ser bloqueada para que o usuário não tenha acesso
Porém a dúvida é: a única forma de se restaurar um arquivo ou pasta é a lixeira, correto?
Ou há alguma outra forma de se ter backup?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Igor Rodrigues** (@fluigor.com.br) — 10/05/2022, 13:40 | ❤️ 1

Olá [@daniela.troggian](/u/daniela.troggian)

Fluig não possui ferramentas de backup, a lixeira faz parte do CARD de GED/ECM, geralmente os clientes removem a permissão de acesso a lixeira dos usuários deixando ela disponível apenas para usuários administradores, podendo restaurar documentos apagados de forma equivocada por usuários de forma rápida e fácil.
Caso eu apague um documento da lixeira, eu consigo restaurar um BACKUP do mesmo?
A resposta pode ser SIM e NÃO.
Uma fez que estarei trabalhando com backups da aplicação, onde se faz necessário realizar um restore (restaurar um back-up) do banco de dados da aplicação Fluig no momento em que o documento ainda permanecia publicado no GED/ECM ou na Lixeira além do Restore do diretório Volume esse responsável por armazenar os arquivos dos documentos publicados.
Esse restore pode impactar em outras operações realizadas durante o período pós eliminação.

Espero ter ajudado.

---

## Resposta #2

**Daniela** (@daniela.troggian) — 10/05/2022, 16:38

Oi:

Obrigado Igor. É que esta questão é uma solicitação do meu departamento de infraestrutura. Eles tem receio de que o arquivo seja apagado da lixeira e gostariam uma forma de fazer backup da lixeira inteira, como se fosse um backup incremental. Pelo o que eu entendi a forma de se recuperar é via banco então.

---

## Resposta #3

**Igor Rodrigues** (@fluigor.com.br) — 19/05/2022, 12:43

[@daniela.troggian](/u/daniela.troggian)

Via banco e via backup da pasta VOLUME, geralmente os clientes habilitam um recursos chamado SHADOW COPY nesta pasta utilizada para armazenar o que chamamos de VOLUME da aplicação Fluig, o VOLUME armazena todo os documentos que a partir de relacionamentos com o banco de dados e a interface da plataforma são publicados ou consultados nesse diretório.

Vale fazer uma leitura dos 2 links abaixo

[https://tdn.totvs.com/pages/releaseview.action?pageId=239019289](https://tdn.totvs.com/pages/releaseview.action?pageId=239019289)

[https://tdn.totvs.com/pages/releaseview.action?pageId=233766796](https://tdn.totvs.com/pages/releaseview.action?pageId=233766796)

---
