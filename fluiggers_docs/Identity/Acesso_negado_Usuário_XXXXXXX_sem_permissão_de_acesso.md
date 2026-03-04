# Acesso negado: Usuário XXXXXXX sem permissão de acesso

> **Fonte:** [https://fluiggers.com.br/t/acesso-negado-usuario-xxxxxxx-sem-permissao-de-acesso/2461](https://fluiggers.com.br/t/acesso-negado-usuario-xxxxxxx-sem-permissao-de-acesso/2461)
> **Categoria:** Identity
> **Tags:** `form`, `processo`, `bpm`, `dataset`
> **Criado em:** 22/12/2023, 18:21
> **Visualizações:** 347 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Guilherme Mesquita Rocha** (@gmesquita) — 22/12/2023, 18:21

Pessoal estou com uma dúvida e gostaria de sanar a seguinte situação:
Ao consultar datasets **INTERNOS** com um usuário que não possui papel admin atribuído, a consulta retorna como se não houvessem registros, conforme imagem abaixo:

![image](https://fluiggers.com.br/uploads/default/original/2X/e/e1091bdf7130f7ac842967fafdd4fba84079c450.png)

Acontece que, fazendo a mesma consulta com o usuário **admin**, retorna os registros…

Ao baixar o log, é evidenciado o seguinte erro:
*Acesso negado: Usuário XXXXXXX sem permissão de acesso: com.totvs.technology.foundation.common.exception.FDNAccessDeniedException*

Visto que o ambiente é o Fluig Identity (o mesmo não possui papeis atribuídos nos usuários), porém as pastas de formulário (tanto as pastas pais quanto as filhas) estão com as devidas permissões de leitura para o “Grupo” do usuário e para “Todos” (por via das dúvidas).

Desta forma, o que posso estar fazendo para solucionar o problema?

---
