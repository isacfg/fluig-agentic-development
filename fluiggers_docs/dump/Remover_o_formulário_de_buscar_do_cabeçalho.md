# Remover o formulário de buscar do cabeçalho

> **Fonte:** [https://fluiggers.com.br/t/remover-o-formulario-de-buscar-do-cabecalho/1402](https://fluiggers.com.br/t/remover-o-formulario-de-buscar-do-cabecalho/1402)
> **Categoria:** Ambiente Fluig
> **Criado em:** 10/10/2022, 16:18
> **Visualizações:** 292 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Giovani Hardt** (@ghardt) — 10/10/2022, 16:18

Pessoal,

Na versão 1.7 tínhamos possibilidade de ocultar o input de buscar do cabeçalho, utilizando $(“.fl-search”).hide();.

Agora com a versão 1.8, alguém poderia me dar uma dica?

---

## Resposta #1

**Everton Alves** (@everton) — 10/10/2022, 17:54

Olá!

Não sei se é a melhor forma, mas tente o seguinte:

```javascript
$('[id^=searchInputText]').parent().parent().hide()
```

Nessa nova versão não tem mais essa classe .fl-search, então, selecionamos a caixa de pesquisa, voltamos para a div pai e a ocultamos.

---

## Resposta #2

**Matheus Mósso** (@msmosso) — 12/10/2022, 08:05 | ❤️ 1

Bom dia [@ghardt](/u/ghardt),

Acredito que a melhor forma de fazer isso seria criar um template custom do header e remover o formulário.

Crie um arquivo no diretório repository/wcmdir/custompage chamado custompagehead.ftl e adicione o seguinte conteúdo:

```css
<style>
[data-submit-search] {
   display: none;
}
</style>
```

Salve, atualize a página e verifique se ficou como você deseja.

---
