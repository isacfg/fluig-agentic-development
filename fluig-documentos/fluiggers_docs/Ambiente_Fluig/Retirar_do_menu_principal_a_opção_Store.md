# Retirar do menu principal a opção "Store"

> **Fonte:** [https://fluiggers.com.br/t/retirar-do-menu-principal-a-opcao-store/3041](https://fluiggers.com.br/t/retirar-do-menu-principal-a-opcao-store/3041)
> **Categoria:** Ambiente Fluig
> **Tags:** `menu`, `store`
> **Criado em:** 25/10/2024, 18:42
> **Visualizações:** 136 | **Likes:** 1 | **Respostas:** 2

---

## Pergunta original

**Cassius** (@Cassius) — 25/10/2024, 18:42

Boa noite. Tudo bem com vocês?

Gostaria de saber se há a possibilidade de retirar o ícone “Store” do menu principal do Fluig.
Vamos abrir a plataforma para alguns usuários que não devem ter acesso a este recurso, e já tentei muitas coisas no menu “Permissões” no “Painel de Controle” e nenhuma das minhas tentativas surtiu efeito.
Se alguém tiver um caminho, agradeço imensamente.
Obrigado.

Abcs.

Cassius

---

## Resposta #1

**João Piologo** (@jpiologo) — 01/11/2024, 07:43

Bom dia, Cassius.

Vá até Painel de Controle → Personalização → Minhas páginas.

Lá, você pode alterar a visualização das páginas que vc tem disponível no seu menu. Mais especificamente clicando nos 3 pontinhos de cada página para ver as opções, você verá a opção “Arquivar”.

At.te.

---

## Resposta #2

**Cassius** (@Cassius) — 01/11/2024, 09:08

Bom dia, João.

O “Store” não é uma página minha personalizada. Ela é algo que a TOTVS deixou disponível na plataforma Fluig, no menu principal, acho que meio como uma forma de divulgar os produtos que eles vendem.
Eu consegui, por exemplo, via a opção “Permissões” no “Painel de Controle”, inibir no menu principal as opções “Aprendizado” e “Avaliações”.
Entretanto não consigo achar em “Permissões” onde retiro esta opção do menu.
Mas muito obrigado por sua resposta.
Continuarei aguardando uma “luz” aqui para esta questão :slight_smile:

Abc.

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Luiz Ferreira** (@luiz.ferreira) — 01/11/2024, 09:51 | ❤️ 1

[@Cassius](/u/cassius), é possível fazer isso usando a técnica de [customização de todas as páginas da plataforma](https://tdn.totvs.com/pages/releaseview.action?pageId=232816834), onde através do arquivo **custompagehead.ftl** é possível injetar um código que vai ocultar o item de menu da Store, visto que pelo painel de controle não há uma forma de ocultar este item do menu.

Dentro da pasta **\[diretório\_instalação\]/repository/wcmdir/** crie a pasta **custompage**, e dentro dela, crie o arquivo **custompagehead.ftl**.

Dentro do arquivo custompagehead.ftl você pode inserir o código de exemplo a seguir para ocultar o item da Store do menu:

```auto
<script type="text/javascript" charset="utf-8">
  $(document).ready(function() {
    // intervalo executado até que o menu seja carregado
    let interval = setInterval(function() {
      if ($('ul[data-menu]').length > 0 && $('ul[data-menu]').children().length > 0) {
        const storeItem = $('a[data-menu-item="mysolutions"]');
        // verifica se o item de menu da store realmente existe
        if (storeItem.length > 0) {
          storeItem.parent().hide();
          console.log("Item de menu da store removido");
        }
        clearInterval(interval);
      }
    }, 100)
  })
</script>
```

O código acima será injetado na tag *head* de todas as páginas, e será executado assim que a página for carregada.

---

## Resposta #4

**Cassius** (@Cassius) — 08/11/2024, 10:26

[@luiz.ferreira](/u/luiz.ferreira) bom dia. Tudo bem?

Obrigado pela dica. Vou fazer um teste. Só tenho que passar pela burocracia da TOTVS Cloud :slight_smile: , mas beleza.
Se o resultado esperado for alcançado, reporto aqui.
Novamente, obrigado.

P.S. Seguindo esta lógica, posso ocultar qualquer elemento de qualquer página do Fluig?

---

## Resposta #5

**Luiz Ferreira** (@luiz.ferreira) — 08/11/2024, 10:44

Bom dia [@Cassius](/u/cassius)

Exatamente, com essa técnica é possível manipular de várias maneiras todas as páginas da plataforma (inclusive ocultar itens).

E quanto ao deploy do arquivo ftl, acabei me esquecendo de comentar, mas se o ambiente estiver na TOTVS Cloud você deve solicitar a criação / atualização do arquivo via chamado.
Por isso é interessante testar essas customizações em um ambiente local, caso tiver.

---
