# Cadastro de Usuário

> **Fonte:** [https://fluiggers.com.br/t/cadastro-de-usuario/2863](https://fluiggers.com.br/t/cadastro-de-usuario/2863)
> **Categoria:** Administração
> **Tags:** `usuario`
> **Criado em:** 25/06/2024, 10:09
> **Visualizações:** 76 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Gabriel Douglas Fernandes Barbosa** (@GabrielDouglas) — 25/06/2024, 10:09

No cadastro de usuários, eu não vi nenhum campo destinado a departamento/setor, e que normalmente nesses cadastro de departamento tem um gestor, como vocês controlam os gestores dos usuários? Por comunidade?

Estou criando um processo que preciso identificar o gerente do departamento e o diretor, mas pelos cadastros padrões do Fluig não estou encontrando! Help.

---

## Resposta #1

**venturelli** (@venturelli) — 25/06/2024, 10:35 | ❤️ 1

Você pode usar o mecanismo de atribuição por associação.

Crie um grupo do departamento e um grupo dos gerentes, algo como:
**Grupo Loja Matriz**
Aline
Beatriz
Caroline
Daiane
Eliane

**Grupo Gerentes**
Aline
Fernanda
Gabriela

E no mecanismo de atribuição use a associação entre os dois grupos: Gerentes e Loja Matriz.

Edit: [Mecanismo de atribuição - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=270921079#samples-872616687) tem um pouco mais sobre esse mecanismo nessa doc

---
