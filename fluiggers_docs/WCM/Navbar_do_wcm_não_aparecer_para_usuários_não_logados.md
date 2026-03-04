# Navbar do wcm não aparecer para usuários não logados

> **Fonte:** [https://fluiggers.com.br/t/navbar-do-wcm-nao-aparecer-para-usuarios-nao-logados/2402](https://fluiggers.com.br/t/navbar-do-wcm-nao-aparecer-para-usuarios-nao-logados/2402)
> **Categoria:** WCM
> **Criado em:** 04/12/2023, 14:59
> **Visualizações:** 242 | **Likes:** 2 | **Respostas:** 3

---

## Pergunta original

**Gabriel Borchardt** (@borchardt) — 04/12/2023, 14:59

Olá pessoal, estou com um caso onde preciso ter o wcm.header do fluig quando o usuário está logado mas quando a página estiver pública (sem o /p/ na url) ele deve sumir, porém é o mesmo layout, tem como isso?

```auto
<@wcm.header authenticated="true"/>
```

Eu vejo que ele tem a propriedade authenticated mas quando troco para false ou retiro ele ainda continua aparecendo para quem não está logado, a ideia é ter uma navbar personalizada apenas para quando o usuário não estiver logado e vendo a página, e usar esse componente de header quando estiver logado.

---

## Resposta #1

**Guilherme Mesquita Rocha** (@gmesquita) — 04/12/2023, 15:25

Boa tarde!
Desconheço essa possibilidade… seria viável fazer uma tratativa tentando pegar alguma classe/id do elemento que há o cabeçalho do ambiente do Fluig? E aí, através do código: `WCMAPI.getUser()` você verifica se for `Guest` (isso significa que o usuário não está autenticado no Fluig), esconde o cabeçalho, caso contrário, mostre…

Ex:
![image](https://fluiggers.com.br/uploads/default/original/2X/e/efed98d9c509c542b3830e3a97d7aa07f868f399.png)

---

## Resposta #2

**Gabriel Borchardt** (@borchardt) — 04/12/2023, 15:38 | ❤️ 1

Entendi, parece um pouco fora da curva mas funcionaria sim… Pensei que existiria alguma opção nativa da plataforma para não ter que fazer algo do tipo, de qualquer forma, obrigado!

---

## Resposta #3

**Gabriel Borchardt** (@borchardt) — 04/12/2023, 15:45

[@gmesquita](/u/gmesquita) vc tem algum conhecimento sobre esse tópico?

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/b/439d5e/48.png) [Integrar Formulário do Fluig com Sharepoint](https://fluiggers.com.br/t/integrar-formulario-do-fluig-com-sharepoint/2399/1) [Formulários](https://fluiggers.com.br/c/form-fluig-html/15)
>
> > Olá, alguém já fez integração de documentos enviados em forms do fluig para pastar do microsoft sharepoint?

---

## Resposta #4

**Guilherme Mesquita Rocha** (@gmesquita) — 04/12/2023, 15:46

Não tenho… também tenho curiosidade nisso hahaha! Vou aguardar a interação de alguém nesse tópico.

---

## Resposta #5 ✅ RESPOSTA ACEITA

**Gabriel Borchardt** (@borchardt) — 05/12/2023, 11:55 | ❤️ 1

pessoal, consegui com esse código abaixo, ele espera o conteúdo carregar para não bugar e seleciona o elemento com appcode do header do wcm e então verifica se o usuário é o guest, se sim deixa a nativa oculta e exibe a customizada!

```auto
document.addEventListener('DOMContentLoaded', function() {
  var nav = document.querySelectorAll('[appcode="responsive_header"]');
  var userAuth = WCMAPI.getUser();
  var guestNavbar = document.querySelectorAll('guest-navbar');

  nav.forEach(navbar => {
    if (userAuth === 'Guest') {
      navbar.style.display = 'none';
    } else {
      guestNavbar.style.display = 'none';
      navbar.style.display = 'block';
    }
  });

  console.log(userAuth);
});
```

---
