# Pai Filho com Muitos Registros

> **Fonte:** [https://fluiggers.com.br/t/pai-filho-com-muitos-registros/2912](https://fluiggers.com.br/t/pai-filho-com-muitos-registros/2912)
> **Categoria:** Formulários
> **Tags:** `form`, `dataset`
> **Criado em:** 31/07/2024, 21:53
> **Visualizações:** 74 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Eduardo Guimarães** (@Eduardo_Guimaraes) — 31/07/2024, 21:53

Fala pessoal. Tenho um processo aqui que precisa importar diversos registros do protheus e preencher uma tabela pai filho. O problema é que são muitos registros (já vi casos de passar de 3 mil) e isso vem deixando o processo de importação e de salvar o formulário extremamente lento, inclusive gerando um erro nesses maiores ao tentar iniciar a solicitação (WFLYJPA0060: Transaction is required to perform this operation (either use a transaction or extended persistence context) ). Alguém tem alguma ideia de como eu posso salvar esses dados no formulário sem a pai filho ou tem alguma ideia de como resolver esse erro? Lembrando que eu preciso desses dados durante o processo e não vamos poder ficar importando a cada interação no formulário.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**venturelli** (@venturelli) — 01/08/2024, 08:42 | ❤️ 2

Qual versão você está usando? Não deveria estar gerando problemas mesmo com essa quantidade de registros.

De qualquer forma, se os dados estão vindo de um serviço externo e não preenchidos manualmente, o ideal seria usar um dataset para isso. No dataset é possível atribuir um período configurável para se atualizar e no uso do dia a dia ele pega os dados salvos e não consulta novamente o serviço: [Sincronização de datasets - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=212899013).

---
