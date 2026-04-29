# Diretório dos arquivos de processos e registros de formulário

> **Fonte:** [https://fluiggers.com.br/t/diretorio-dos-arquivos-de-processos-e-registros-de-formulario/315](https://fluiggers.com.br/t/diretorio-dos-arquivos-de-processos-e-registros-de-formulario/315)
> **Categoria:** Administração
> **Tags:** `ged`, `arquivo`, `servidor`, `diretorio`
> **Criado em:** 08/04/2021, 14:51
> **Visualizações:** 1204 | **Likes:** 2 | **Respostas:** 2

---

## Pergunta original

**Victor Castro** (@victorcastro) — 08/04/2021, 14:51

Alguém sabe me falar qual o diretório dos arquivos dos processos e das solicitações geradas de formulários?

Mais precisamente, vou precisar migrar de servidor. Pela [documentação](https://tdn.engpro.totvs.com.br/display/public/FF/ARQ+-+Como+migrar+o+servidor+da+plataforma), eu preciso importar o bkp do banco e a pasta de volume. Por curiosidade, estou procurando no diretório os arquivos gerados dos processos e das solicitações e não encontrei. Se eu copiar manualmente a pasta volume pro novo diretório e o bkp do banco, todos os processos e solicitações do servidor antigo estarão no novo?

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 08/04/2021, 16:40

Victor, o procedimento ‘normal’ é levar o volume todo mesmo. Mas se me lembro bem, fica tudo em ‘public’, mas tudo ‘codificado’ no formato do GED.

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Victor Castro** (@victorcastro) — 08/04/2021, 17:07

Tava fuçando no banco do fluig, parece que tudo relativo aos processos (códigos, config, etc) ficam salvos em tabelas. Na tabela `event_proces`, por exemplo, tem o evento, qual processo está vinculado, a versão e o código propriamente dito. Achei que quando exportava um processo pro server ele publicava em algum lugar na pasta volume os arquivos **.processs** e **.js**, igual é com os formulários. Mas parece que não.

Dá uma olhada.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/85c8e0bc9c5662662374aafc0baa4e2df4aae74f_2_640x500.png)

---

## Resposta #3

**Daniel Cabral Santos** (@daniel.cabral) — 08/04/2021, 17:22 | ❤️ 1

Não não, fica tudo armazenado no banco mesmo. Inclusive quando precisamos fazer algum reparo em versões anteriores de certos eventos, taí a gambeta. :crazy_face:

---

## Resposta #4

**Victor Castro** (@victorcastro) — 08/04/2021, 17:23 | ❤️ 1

Como eu fui descobrir isso só agora?! :joy:

---
