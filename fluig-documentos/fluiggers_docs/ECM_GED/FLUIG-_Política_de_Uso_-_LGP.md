# FLUIG- Política de Uso - LGP

> **Fonte:** [https://fluiggers.com.br/t/fluig-politica-de-uso-lgp/1128](https://fluiggers.com.br/t/fluig-politica-de-uso-lgp/1128)
> **Categoria:** ECM / GED
> **Criado em:** 10/06/2022, 11:51
> **Visualizações:** 352 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Daniela** (@daniela.troggian) — 10/06/2022, 11:51

Pessoal, Boa Tarde:

Estava verificando no FLUIG a questão da LGPD. Vi que há a opção de Políticas de Uso e cadastrei uma. Funcionou certinho abriu após a tela de login porém eu gostaria de saber onde eu posso consultar em que o usuário X deu o aceite? Tentei pelos logs de usuário do painel de controle mas não achei nada relacionado.

---

## Resposta #1

**Pablo Valle** (@pablooav) — 06/10/2025, 17:50 | ❤️ 2

Pelo tempo da pergunta imagino que vc já tenha resolvido seu problema, como acabei precisando também dessa funcionalidade, acabei indo atrás aqui e encontrei essa tabela que guarda esta informação que vc precisa

```auto
select * from PolicyUser
```

---
