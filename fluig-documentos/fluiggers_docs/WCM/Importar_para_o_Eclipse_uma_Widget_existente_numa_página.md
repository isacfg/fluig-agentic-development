# Importar para o Eclipse uma Widget existente numa página

> **Fonte:** [https://fluiggers.com.br/t/importar-para-o-eclipse-uma-widget-existente-numa-pagina/924](https://fluiggers.com.br/t/importar-para-o-eclipse-uma-widget-existente-numa-pagina/924)
> **Categoria:** WCM
> **Criado em:** 14/02/2022, 07:54
> **Visualizações:** 1140 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 14/02/2022, 07:54

Uma pergunta recorrente, mas que não vejo resposta para o que eu preciso: eu baixei uma página que tem uma widget que preciso.

Mas, e agora, como faço para incorporar essa widget num dos projetos do meu Eclipse Luna?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 14/02/2022, 10:09 | ❤️ 1

[gist.github.com](https://gist.github.com/brunogasparetto/e68e82f3d310d8b24f2048ccc6fef48a)

#### [https://gist.github.com/brunogasparetto/e68e82f3d310d8b24f2048ccc6fef48a](https://gist.github.com/brunogasparetto/e68e82f3d310d8b24f2048ccc6fef48a)

##### importar\_widget\_fluig.md

```Markdown
# Importar Widget do Fluig no Eclipse (Fluig Studio)

Você pode baixar a Widget pelo **Painel de Controle** exportando a página onde a Widget está
ou indo no diretório do Fluig (no computador onde ele está instalado) e copiar o `.war` da pasta `appserver/apps`.

O arquivo .war nada mais é do que um arquivo compactado. Você pode usar qualquer descompactador
(e se quiser até renomear pra .zip pro Windows reconhecer).

Pra editar eu aconselho a fazer o seguinte procedimento:
```
This file has been truncated. [show original](https://gist.github.com/brunogasparetto/e68e82f3d310d8b24f2048ccc6fef48a)

---
