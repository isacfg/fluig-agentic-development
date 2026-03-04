# Retirar página apenas do menu lateral

> **Fonte:** [https://fluiggers.com.br/t/retirar-pagina-apenas-do-menu-lateral/2933](https://fluiggers.com.br/t/retirar-pagina-apenas-do-menu-lateral/2933)
> **Categoria:** Ambiente Fluig
> **Tags:** `widget`, `menu`, `pagina`
> **Criado em:** 14/08/2024, 10:54
> **Visualizações:** 89 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Mário César Paulino Ferro** (@mariocpferro) — 14/08/2024, 10:54

Olá, pessoal!
Tenho várias páginas que podem ser acessadas por uma homepage, e gostaria de retirar essas mesmas páginas do menu lateral do FLUIG, porém mantendo a permissão de utilizar a página.
Segue uma pequena imagem demonstrando onde acesso e onde quero retirar.
![image](https://fluiggers.com.br/uploads/default/original/2X/7/79d249373b75a1ed32fdfba9c3000aa6a2d18870.png)

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Pablo Valle** (@pablooav) — 19/08/2024, 18:41 | ❤️ 2

A única maneira atualmente de lidar com a ordenação ou exibir/esconder isso da home é alterando direto no banco.

Na tabela wcm\_page temos uma coluna HIDDEN onde vc pode setar como `true`.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/9/999d7a975fc0cab625d53d60142afdf5d6f0faab_2_690x350.png)

---

## Resposta #2

**Mário César Paulino Ferro** (@mariocpferro) — 20/08/2024, 08:24

Funcionou perfeitamente, muito obrigado!

---
