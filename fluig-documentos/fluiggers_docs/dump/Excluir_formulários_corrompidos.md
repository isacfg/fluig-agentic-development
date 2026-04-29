# Excluir formulários corrompidos

> **Fonte:** [https://fluiggers.com.br/t/excluir-formularios-corrompidos/3174](https://fluiggers.com.br/t/excluir-formularios-corrompidos/3174)
> **Categoria:** Ambiente Fluig
> **Criado em:** 25/02/2025, 11:42
> **Visualizações:** 67 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**Fernando Ricardo de Almeida** (@feralm) — 25/02/2025, 11:42

Bom dia

Em novembro do ano passado tivemos problemas com nossa base de dados aonde algumas tabelas de formulários corromperam.

Gostaria de excluir todos os formulários com data de antes de ‘24/11/2024’ pois vamos trocar de servidor e não queria levar essas informações corrompidas para no novo servidor.

Tentei fazer update na tabela PROCES\_WORKFLOW mandando o status de em aberto para cancelado

UPDATE PROCES\_WORKFLOW set status = 1 where status=0 and start\_date <= ‘2024-11-25’

Na exibição do Fluig na consulta apareceu como cancelado.
Mas no Fluig quando foi na opção de excluir onde trás ou cancelados e finalizados não consigo excluir pois esses formulários que mudei o status para cancelado via update não são exibidos para exclusão.

Existe alguma outra tabela podem me ajudar com este caso ?

At,
Fernando

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 25/02/2025, 13:26

Buenas Mestre

Não é recomendado em hipótese alguma updates no banco de dados do FLUIG, principalmente no que envolve a solução de BPM, devido aos múltiplos relacionamentos de tabelas que ele possui! alguns até ainda desconhecidos pela comunidade.
Quando tu disse que teve problemas com a estrutura de BD nas tabelas de formulários está se referindo as tabelas ML? criadas junto com cada formulário desenvolvido?

atenciosamente
Igor

---

## Resposta #2

**Fernando Ricardo de Almeida** (@feralm) — 25/02/2025, 14:33

Boa tarde, Igor,

Obrigado pelo retorno !
São as tabela as tabelas ML sim que corromperam sim foi tentado recuperar mais não rolou alguns campos ficaram em branco
outros do códigos separados em outros campos assim por diante o trabalho que ia dar pra recuperar não valia a pena começaram
e fazer novos formulários a partir de 25/11/2024 e estamos usando desde então.

Como vamos trocar de servidor gostaria de excluir essas requisições trazer apenas a partir da data de 25/11/2024

Tem alguma outra solução ?

---

## Resposta #3

**Igor Rodrigues** (@fluigor.com.br) — 02/12/2025, 09:19

Qual sua estrutura atual de banco de dados? ORACLE , SQL SERVER ou MYSQL ?
As tabelas ML que vc tem certeza que não utiliza mais poderiam sim ser removidas! mais o importante seria vc ir no menu eliminar solicitacoes e tentar eliminar as solicitacoes anteriores a esta data utilizando a plataforma! e posteriormente ter que se preocupar apenas com os registros de formulario! (tabelas ML) e o registro do form html na tabela (DOCUMENTOS)

---
