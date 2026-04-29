# Enviando atividade via app

> **Fonte:** [https://fluiggers.com.br/t/enviando-atividade-via-app/183](https://fluiggers.com.br/t/enviando-atividade-via-app/183)
> **Categoria:** BPM
> **Tags:** `form`, `mobile`, `app`, `beforesendvalidate`
> **Criado em:** 19/03/2021, 16:11
> **Visualizações:** 733 | **Likes:** 3 | **Respostas:** 4

---

## Pergunta original

**Victor Castro** (@victorcastro) — 19/03/2021, 16:11

Eu consigo saber no beforeSendValidate se o usuário tá enviando a atividade via app ou via browser?

---

## Resposta #1

**Alef Vinicius** (@alefvinicius) — 19/03/2021, 20:16 | ❤️ 1

Victor, só serve no front? Caso sim, você pode utilizar o que vou descrever a seguir em um evento de displayFields e preencher a algum campo do form com esse valor para analisar no beforeSendValidate. O Fluig possui uma variável pra isso, a WKMobile ([Desenvolvimento de formulário mobile - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=146181573)), segue exemplo:

```auto
function beforeStateEntry(sequenceId){
  var isMobile = getValue("WKMobile");
     if (isMobile!=null && isMobile==true){
       throw "Esse processo não pode ser executado pelo mobile.";
      }
}
```

---

## Resposta #2

**Victor Castro** (@victorcastro) — 25/03/2021, 08:55

O evento **beforeStateEntry** executa antes do **beforeSendValidate**?

---

## Resposta #3

**Alef Vinicius** (@alefvinicius) — 26/03/2021, 14:34

Não, Victor, beforeStateEntry é antes de entrar numa outra atividade. O exemplo aí só foi mostrar a possibilidade. Você pode utilizar o displayFields, como indiquei, pra isso. Assim você pode ter essa informação já ao acessar o formulário. E aí sim, caso queira, faça a validação no beforeSendValidate. Logo te trago um exemplo no contexto que precisa.

---

## Resposta #4 ✅ RESPOSTA ACEITA

**Victor Castro** (@victorcastro) — 26/03/2021, 14:37 | ❤️ 1

Consegui fazer aqui, [@alefvinicius](/u/alefvinicius). Obrigado!

Mas utilizei o `form.getMobile()`. Quando o usuário entra, ele já retorna **true** se for pelo app. O `getValue("WKMobile")` retorna só quando o usuário envia a atividade.

---

## Resposta #5

**Alef Vinicius** (@alefvinicius) — 26/03/2021, 14:46 | ❤️ 1

Isso mesmo, Victor, já estava vindo com a errata. Informando que o mais indicado para evento de formulário seria pelo FormController ([Form Customization - TOTVS Fluig English - TDN](https://tdn.totvs.com/display/fluigeng/Form+Customization)), podendo assim usar ele no displayFields para passar a informação para o front. Show!

---
