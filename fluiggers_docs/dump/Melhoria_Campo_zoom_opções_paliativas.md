# Melhoria Campo zoom/opções paliativas

> **Fonte:** [https://fluiggers.com.br/t/melhoria-campo-zoom-opcoes-paliativas/3052](https://fluiggers.com.br/t/melhoria-campo-zoom-opcoes-paliativas/3052)
> **Categoria:** Formulários
> **Tags:** `form`, `dataset`
> **Criado em:** 01/11/2024, 18:44
> **Visualizações:** 66 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Rafael Luz** (@Rafael_Luz) — 01/11/2024, 18:44

Boa Noite, pessoal!

Tenho um campo zoom que está integrado com um dataset customizado que me retorna cerca uma quantidade considerável de registros através de uma consulta no sistema RM, o que está tornando o campo um pouco lento.

Alguém sabe uma maneira de melhorar a performance e otimização do campo ou alguma solução paliativa? Ou até mesmo um modal para visualizar todos os registros para seleção.

Obrigado !

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 04/11/2024, 09:27 | ❤️ 1

O que já fiz aqui numa situação parecida é limitar a SQL do RM a retornar somente os 300 primeiros resultados de acordo com o que o usuário digitou no zoom, e se não digitou nada a consulta retorna vazio.

Mas existe na documentação uma explicação sobre fazer um zoom externo para casos que possuem muitos registros ou que precisa de um maior controle.

---

## Resposta #2

**Rafael Luz** (@Rafael_Luz) — 06/11/2024, 21:37

Boa Noite,

Visualizei na documentação mais em conjunto com a limitação do RM, melhorou bastante, muito obrigado.

---
