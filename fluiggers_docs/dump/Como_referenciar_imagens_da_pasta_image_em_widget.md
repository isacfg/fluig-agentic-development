# Como referenciar imagens da pasta image em widget

> **Fonte:** [https://fluiggers.com.br/t/como-referenciar-imagens-da-pasta-image-em-widget/1427](https://fluiggers.com.br/t/como-referenciar-imagens-da-pasta-image-em-widget/1427)
> **Categoria:** Widgets
> **Criado em:** 23/10/2022, 13:21
> **Visualizações:** 623 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Wasley Santos** (@Wasley_Santos) — 23/10/2022, 13:21

Como faço para que minha widget tenha acesso aos icones e imagens da pasta images que estão nela?

Tentei usando src=“/resources/images/image.png”

Preciso adicionar algo no application.info será ? Não achei nada na documentação do tdn

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Wasley Santos** (@Wasley_Santos) — 23/10/2022, 14:45 | ❤️ 2

Consegui encontrar

```auto
<img src='/NOMEDAWIDGET/resources/images/IMAGEM.png' />
```

É necessário referenciar o nome da widget já que não é feito referencia no application.info

---
