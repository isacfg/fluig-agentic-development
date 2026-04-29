# Alterar limite de tempo de execução do dataset

> **Fonte:** [https://fluiggers.com.br/t/alterar-limite-de-tempo-de-execucao-do-dataset/2151](https://fluiggers.com.br/t/alterar-limite-de-tempo-de-execucao-do-dataset/2151)
> **Categoria:** API`s Fluig
> **Tags:** `dataset`, `fluigapi`
> **Criado em:** 25/08/2023, 15:12
> **Visualizações:** 443 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Matheus Madrid** (@Madrid) — 25/08/2023, 15:12

Boa tarde pessoal, tudo bem? Estou querendo salvar uma base de dados com dados de colaboradores, porém o tempo que demora para receber os dados é de no mínimo 20 minutos devido a quantidade de registros da API, com isso recebo a mensagem de “Não há dados para serem exibidos.” mesmo havendo dados, pois quando seleciono um periodo curto de por exemplo uma semana ele exibe os dados, porém com dados mensais ele já não retorna nada devido a essa demora da API.

Tentei criar uma execução de dataset pelo agendador de tarefas, pois pensei “ele pode demorar 20 minutos e eu coloco pra atualizar uma vez ao dia”, mas não obtive sucesso.

Tentei realizar processamento assíncrono, pois pelo que sei se a API demora muito para retornar os dados completos, você pode usar programação assíncrona para processar os dados em segundo plano enquanto aguarda a resposta da API, mas não obtive sucesso também.

Notei que nas logs do tcloud ele exibe o tempo que está sendo executado ( como exemplo abaixo ) e pelo que notei ele fica no máximo 3 minutos, há uma forma de aumentar esse tempo de maneira que eu consiga receber todos os dados da API para posteriormente gravar esses dados no dataset?

**2023-08-25 14:58:37,965 WARN \[com.fluig.monitoring.jschronos.JSChronos\] (JSChronos.CustomizationManagerImpl.invokeFunction.createDataset) CustomizationManagerImpl.invokeFunction.createDataset ja esta sendo executado por 60 segundos params: \[\[null, null, null\], Thread = default task-27060, datasetId = RH\_ResumoDeJornada\]**

Sou leigo no assunto, se houver uma prática melhor sintam-se a vontade para me instruir

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Luiz Ferreira** (@luiz.ferreira) — 31/08/2023, 10:00

Isso pode ser algo relacionado ao tempo de transação da plataforma (Padrão de 300 segundos).
Já precisei alterar este parâmetro para alguns processos com atividades de script que demoram mais que 300 segundos para executar.

Segue documentação: [Configuração do tempo de transação - TOTVS Fluig - TDN](https://tdn.totvs.com.br/pages/releaseview.action?pageId=258277613)

Caso seu ambiente estiver na TCloud, é necessário abrir um chamado na Totvs para alterar o arquivo de configuração do servidor.

---

## Resposta #2

**Matheus Madrid** (@Madrid) — 31/08/2023, 15:47

Abri chamado e eles alteraram, resolveu meu problema, obrigado.

---
