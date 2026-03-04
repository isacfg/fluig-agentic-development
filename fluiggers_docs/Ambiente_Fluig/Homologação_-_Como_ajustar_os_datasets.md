# Homologação - Como ajustar os datasets

> **Fonte:** [https://fluiggers.com.br/t/homologacao-como-ajustar-os-datasets/877](https://fluiggers.com.br/t/homologacao-como-ajustar-os-datasets/877)
> **Categoria:** Ambiente Fluig
> **Criado em:** 18/01/2022, 13:30
> **Visualizações:** 922 | **Likes:** 5 | **Respostas:** 2

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 18/01/2022, 13:30

Estamos com a última versão do Fluig.

Estamos mudando para a nuvem.

Copiei todas as informações do Fluig de produção, ajustei os parâmetros no banco de dados para que apontasse para o novo endereço, que é o de homologação na nuvem.

Minha dúvida é sobre os datasets.

Todos os datasets estão apontando para os serviços que vieram com a importação, isto é, serviços que apontam para banco de dados que têm dados válidos de uso da firma.

Entretanto, eu preciso que os datasets apontem para os serviços de homologação que acabei de criar no Fluig da nuvem. Tais serviços apontam para banco de dados que podem ser alterados à vontade, pois são apenas cópias dos dados de Produção. Não queremos alterar dados que estão valendo, para haver segurança na hora de testar, naturalmente.

Mas são centenas de datasets. Será difícil fazer um a um.

Teria uma maneira global para fazer isto?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/01/2022, 18:20 | ❤️ 2

Uma dica para o futuro:

Não deixe dados fixos nos datasets, sempre mantenha em um lugar mais fácil.

Aqui eu criei formulários para armazenar os usuários e outros parâmetros de serviços, assim sempre que preciso trocar eu troco em 1 lugar e todos os datasets que dependem dos dados já pegam as informações atualizadas.

![image](https://fluiggers.com.br/uploads/default/original/1X/a2cd2ac60e0dc341016a30e99cf72abf29f4c916.png)

Eu já vi uma discussão sobre fazer um update na tabela de datasets, afinal todo o código fonte é salvo direto na tabela. Mas não sei qual é a tabela.

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 20/01/2022, 18:48

Bruno, como sempre, dicas memoráveis. Me esqueci das tabelas internas do Fluig. Valeu!

Vou descobrir e volto aqui no Forum para explicar como eu fiz.

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Daniel Cabral Santos** (@daniel.cabral) — 20/01/2022, 21:09 | ❤️ 1

A tabela é a Serv\_dataset, um replace nela funciona. Mas muito cuidado e faça backup

---

## Resposta #4

**MAURO SIMOES** (@Mautresim) — 25/01/2022, 10:46 | ❤️ 2

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/daniel.cabral/48/5_2.png) daniel.cabral:
>
> > Serv\_dataset

Experimentei trocar a informação do campo ‘ds\_dataset’ na tabela ‘serv\_dataset’ e funcionou em dataset **AVANÇADO**.

Usei o banco de dados e a instalação do Fluig **de testes**.

Para reafirmar minha intenção, eu queria trocar a ligação que todos os datasets tivessem com um determinado serviço para outro.

**Experimentei alterar apenas um dataset.**

Assim, com a ajuda do Bruno e do Daniel, fiz o seguinte no **SQL SERVER**

UPDATE serv\_dataset SET dsl\_dataset =REPLACE(dsl\_dataset,‘/jdbc/nome\_do\_servico\_ANTIGO’,‘/jdbc/nome\_do\_servico\_NOVO’) where cod\_dataset = ‘nome\_do\_meu\_dataset’

Conferi fazendo

select \* from Serv\_dataset where cod\_dataset =‘nome\_do\_meu\_dataset’

Desta consulta, copiei o conteúdo do campo ‘dsl\_dataset’ e joguei no WORD para facilitar a visualização e estava lá a alteração.

Fui em Painel de Controle do Fluig, procurei Datasets, localizei ‘nome\_do\_meu\_dataset’ comandei a consulta e ela respondeu com os dados esperados.

Para os datasets **SIMPLES**, fiz:

UPDATE serv\_dataset SET dsl\_dataset =REPLACE(dsl\_dataset,‘“fluigService” : “nome\_do\_servico\_ANTIGO”’,‘“fluigService” : “nome\_do\_servico\_NOVO”’) where cod\_dataset = ‘nome\_do\_meu\_dataset\_simples’

*(Ficou meio confusa a SQL acima, mas no REPLACE, há aspas simples (') circundando aspas duplas (") nos objetos, por exemplo ’ “fluigService” : “nome\_do\_servico\_ANTIGO” ')*

---
