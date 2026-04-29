# Referenciar imagens em layout

> **Fonte:** [https://fluiggers.com.br/t/referenciar-imagens-em-layout/2292](https://fluiggers.com.br/t/referenciar-imagens-em-layout/2292)
> **Categoria:** WCM
> **Criado em:** 19/10/2023, 10:53
> **Visualizações:** 180 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Gabriel Borchardt** (@borchardt) — 19/10/2023, 10:53

Olá, alguém sabe como referenciar imagens da pasta images em LAYOUTS? Eu vi um tópico aqui sobre imagens em widgets e isso funciona perfeitamente, porém para uma imagem que está dentro de um layout isso não funcionou para mim

```auto
<img src="layout_intranet/images/maquinas-inovavacao.jpg" alt="Image 1">
```

E também tentei

```auto
<img src="layout_intranet/src/main/webapp/images/politica.jpeg" alt="Image 3">
```

Porém sem sucesso.

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 19/10/2023, 11:33 | ❤️ 1

O caminho é este aqui:

```auto
<img src="/layout_intranet/resources/images/maquinas-inovavacao.jpg" alt="Image 1">
```

---
