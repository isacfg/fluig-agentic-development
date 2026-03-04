# Alterar delete do paiXfilho para o lado direito da table

> **Fonte:** [https://fluiggers.com.br/t/alterar-delete-do-paixfilho-para-o-lado-direito-da-table/837](https://fluiggers.com.br/t/alterar-delete-do-paixfilho-para-o-lado-direito-da-table/837)
> **Categoria:** Sem categoria
> **Criado em:** 20/12/2021, 16:04
> **Visualizações:** 549 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Julio Cesar Campos de Andrade** (@JCANDRADE) — 20/12/2021, 16:04

Boa tarde!
Gostaria de saber como alterar o botão de delete do pai x filho para o lado direito da div.

Obrigado!

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Igor Rodrigues** (@fluigor.com.br) — 21/12/2021, 10:49 | ❤️ 1

[@JCANDRADE](/u/jcandrade)

Para este caso você precisa customizar o botao deletar. pode comecar mexendo nos atributos da sua table.

```auto
<table class="tg" id="tableRequisicao" tablename="tableRequisicao"  nodeletebutton="true" noaddbutton="true" >
```

-   Colocar a função de exclusão na propriedade customFnDelete da tabela do pai x filho ou

```auto
<table tablename="teste" customFnDelete="fnCustomDelete(this)">
    function fnCustomDelete(oElement){

    //Customização
    alert ("Eliminando filho!");

    // Chamada a funcao padrao, NAO RETIRAR
    fnWdkRemoveChild(oElement);

    //Customização
    alert ("Filho eliminado!");
}
```

-   Fazer uma implementação no seu JavaScript chamando direto a função de exclusão:

```auto
fnWdkRemoveChild(oElement);
```

---
