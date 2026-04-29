# Exportar Pagina Fluig

> **Fonte:** [https://fluiggers.com.br/t/exportar-pagina-fluig/3271](https://fluiggers.com.br/t/exportar-pagina-fluig/3271)
> **Categoria:** Widgets
> **Criado em:** 05/05/2025, 17:14
> **Visualizações:** 68 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Jafe Rodrigues Ferreira** (@Jafe) — 05/05/2025, 17:14

Na pagina de configuração exportei uma pagina para edição(pagina desenvolvida por agente TOTOVS), não estou conseguindo fazer a importação no eclipse para edição.
A pagina veio com 3 arquivos .war

![Captura de tela 2025-05-05 164153](https://fluiggers.com.br/uploads/default/original/2X/5/537c1b46fe7fc70acc69fee36eef1a500e25f6a1.png)

Como faço edição nessa pagina e o processo para importação no servidor.

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 06/05/2025, 09:03 | ❤️ 2

Página e Layout não cheguei a ver como funciona. Talvez dê pra usar algo parecido com esse documento sobre widget

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
Este arquivo está truncado. [exibir original](https://gist.github.com/brunogasparetto/e68e82f3d310d8b24f2048ccc6fef48a)

Mas a Página em si nem sabia de editar ela no Eclipse. Normalmente edita no próprio Fluig. Pois ela é simplesmente criar no painel de controle, escolher o layout e jogar as widgets nela. Sinceramente nunca tentei editar página ao exportar em .war.

---
