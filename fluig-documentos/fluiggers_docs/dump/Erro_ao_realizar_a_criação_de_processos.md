# Erro ao realizar a criação de processos

> **Fonte:** [https://fluiggers.com.br/t/erro-ao-realizar-a-criacao-de-processos/1095](https://fluiggers.com.br/t/erro-ao-realizar-a-criacao-de-processos/1095)
> **Categoria:** BPM
> **Criado em:** 23/05/2022, 10:52
> **Visualizações:** 822 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Caio Lima** (@Caio_Lima) — 23/05/2022, 10:52

Bom dia Pessoal,
Estou realizando a criação de processos para um formulário, porém após realizar o preenchimento de todos os campos do formulário e salvar esta sendo apresentando a tela para atribuição de usuário (Mesmo se definido usuário direto no projeto), após selecionar um usuário o fluig retorna a msg de erro:

WORKFLOW INFO
Ação: Iniciar Solicitação
Usuário: 000715 (Caio Almeida)

STACK DO ERRO
java.lang.Exception: com.datasul.technology.webdesk.workflow.exception.WorkflowStartProcessException: Erro ao salvar dados de formulário:

‘Esta solicitação é para’ não pode ser vazio.

poderiam me auxiliar.
[Erro.txt](https://fluiggers.com.br/uploads/short-url/xbsvFgVO1gyNvjsucDeOEWSBSfC.txt) (33,6,KB)

![Processo](https://fluiggers.com.br/uploads/default/optimized/1X/7173756efc9f6d7ae40450cc07a0763be19e4956_2_690x421.png)

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 23/05/2022, 15:05

[@Caio\_Lima](/u/caio_lima)

Poderia nos informar a versão do seu Fluig?
Isto pode ser um erro de versão, mesmo assim o mecanismo de atribuição por usuário não é um mecanismo recomendado, uma vez que tiver o desligamento do colaborador tu precisará gerar uma nova versão do processo.
Sugestão, crie um grupo, coloque o colaborador que será responsável pela atividade e realize a atribuição por grupo.
Como terás apenas um colaborador dentro deste grupo a movimentação ja entender e encaminha automaticamente para ele.
Caso isso resolva, nos retorne aqui!

Abraços.

---

## Resposta #2

**Caio Lima** (@Caio_Lima) — 23/05/2022, 16:20

Boa tarde [@fluigor.com.br](/u/fluigor.com.br) a versão que temos instalada é TOTVS Fluig Plataforma - Crystal Lake 1.7.1-220412 536.
Esta mensagem esta sendo apresentada indiferente da opção alocadas no processo. sendo um funcionário, grupo, papéis, Etc.

---

## Resposta #3

**Igor Rodrigues** (@fluigor.com.br) — 23/05/2022, 16:37

Olá [@Caio\_Lima](/u/caio_lima)

Dei uma olhada no release notes e verifiquei que na versão anterior, eles podem ter aplicado uma correção para está situação.
sugestão seria abrir um ticket para o suporte, ou atualizar a versão do seu ambiente.

atenciosamente,

---
