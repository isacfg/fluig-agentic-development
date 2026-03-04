# Não exibir o diagrama (fluxo) na aba "Detalhes"

> **Fonte:** [https://fluiggers.com.br/t/nao-exibir-o-diagrama-fluxo-na-aba-detalhes/427](https://fluiggers.com.br/t/nao-exibir-o-diagrama-fluxo-na-aba-detalhes/427)
> **Categoria:** BPM
> **Criado em:** 06/05/2021, 02:58
> **Visualizações:** 329 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**Cassius** (@Cassius) — 06/05/2021, 02:58

Boa noite a todos.

Existe a possibilidade de não ser exibido o diagrama (fluxo) do processo na aba **Detalhes** quando clicamos sobre ela?
Falo isso, pois as vezes isso mais atrapalha do que ajuda usuários com mais dificuldade com tecnologia. Quando clicam sem querer na aba **Detalhes** eles tem a sensação que perderam tudo o que fizeram.
Então a ideia seria apenas exibir o formulário desenvolvido para o processo, independente de clicar sobre a aba **Detalhes** ou não.
Obrigado.

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 06/05/2021, 09:00

[@Cassius](/u/cassius) , bom dia!

Já tentou ocultá-lo via jquery?

---

## Resposta #2

**Cassius** (@Cassius) — 06/06/2021, 00:11

Daniel boa noite.

Realmente não sei como fazer isso. Não tenho domínio com jQuery.
Tem algum exemplo?

Obrigado.

Cassius

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 06/06/2021, 08:45

ja usou o inspecionar do navegador com ele vc ve o fonte da pagina e procura por alguma div com o id dessa função e da um hide pelo id

---

## Resposta #4

**Daniel Cabral Santos** (@daniel.cabral) — 11/06/2021, 11:08

Cassius, basicamente é o seguinte:

Clique direito no elemento desejado → Inspecionar.
Observe a estrutura do HTML, verá alguma classe específica, div do elemento em questão, id, etc…sempre haverá uma forma de identificar o elemento desejado.

E aí, utiliza o seletor jQuery para ocultá-lo:

```auto
$("#iddoelemento").hide();

ou

$(".classedoelemento").hide();
```

coloque isso em um script executado no carregamento de sua página.
Foram exemplos básicos que talvez lhe ajudem. Sugiro também que busque alguma documentação de jQuery para estudo, vai lhe ajudar muito nesse e outro trabalhos no Fluig! :slight_smile:

---
