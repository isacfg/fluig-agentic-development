# Não salva valor no campo caso ocorra throw no script

> **Fonte:** [https://fluiggers.com.br/t/nao-salva-valor-no-campo-caso-ocorra-throw-no-script/1300](https://fluiggers.com.br/t/nao-salva-valor-no-campo-caso-ocorra-throw-no-script/1300)
> **Categoria:** BPM
> **Tags:** `form`, `bpm`
> **Criado em:** 08/09/2022, 09:47
> **Visualizações:** 348 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Victor Castro** (@victorcastro) — 08/09/2022, 09:47

Tenho um script que cria solicitações de um outro processo e, na sequência, salva informações em um banco externo. Mas acontece com frequência de criar a solicitação com sucesso, porém, dar erro ao tentar salvar no banco.

O problema é o seguinte: quando eu crio a solicitação, preencho um campo com o número da solicitação criada. Mas como deu erro posteriormente, acredito que o Fluig não salva o form, e aí o campo fica vazio. Então quando eu mando executar novamente, ele cria outra solicitação, gerando duplicidade. Se o campo com o número da solicitação estivesse preenchido não teria criado outra.

Uma solução paliativa que eu fiz foi, caso gere erro, cancelar a solicitação iniciada. Mas não é o melhor dos mundos.

Existe alguma maneira de “forçar” que o campo seja preenchido de alguma forma?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 08/09/2022, 09:53 | ❤️ 1

Já tive esse problema em uma Atividade Serviço. O Fluig realmente não salva nada no formulário se teve uma exceção não tratada, afinal ocorreu um erro.

A solução que me deram foi a de não dar o throw, mas salvar a informação (cria um campo de erros) informando que deu erro e então usa um Gateway pra decidir o que fazer se o campo de erro estiver preenchido.

No meu caso eu passei a utilizar a mensagem do throw (a atividade serviço recebe a mensagem na nova tentativa automática) pra saber o que aconteceu e então decidir o que faria.

Mas cada caso é uma solução diferente.

---

## Resposta #2

**Victor Castro** (@victorcastro) — 08/09/2022, 10:16

Não tinha pensado nessa possibilidade. Vou ver se para alguns casos fazer isso é melhor do que o que eu faço hoje.

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 09/09/2022, 15:01

Outra solução é separar em duas integrações uma para o start process e a outra para gravar no banco.

---
