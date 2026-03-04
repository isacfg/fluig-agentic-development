# Integração Formulário Público Com API Datasets

> **Fonte:** [https://fluiggers.com.br/t/integracao-formulario-publico-com-api-datasets/173](https://fluiggers.com.br/t/integracao-formulario-publico-com-api-datasets/173)
> **Categoria:** API`s Fluig
> **Tags:** `fluigapi`
> **Criado em:** 18/03/2021, 16:59
> **Visualizações:** 1069 | **Likes:** 9 | **Respostas:** 1

---

## Pergunta original

**Gabriel Pereira** (@gabriel.pereira) — 18/03/2021, 16:59 | ❤️ 1

Boa tarde!
Em um cenário onde irei disponibilizar um formulário público, preciso consultar a API /ecm/dataset/datasets porém não quero utilizar os tokens do Oauth pois os mesmos ficarão disponíveis no Front e de posse desses tokens pessoas mal intencionadas poderão acessar meu Fluig.

Alguém já fez alguma integração que o acesso será público porém sem a utilização dos tokens do Oauth?!

---

## Resposta #1

**Vinicius de Moura Silveira** (@vinny.silveira) — 18/03/2021, 18:19

Boa noite [@gabriel.pereira](/u/gabriel.pereira),

Existem duas opções que eu conheço:

-   Você pode criptografar o JS ou…
-   Você pode fazer um backend (PHP, Node, etc…) que consulte o teu Fluig via OAuth que receba requests apenas de um domínio específico.

Espero ter ajudado!

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 18/03/2021, 23:56 | ❤️ 1

[@leferso](/u/leferso) , olha isso aqui…talvez você saiba ajudar!

---

## Resposta #3

**Leonardo Soares** (@leferso) — 19/03/2021, 07:18 | ❤️ 5

Fala pessoal!

A forma mais segura que vejo é criando um backend que faça essa intermediação entre o formulário publico e Fluig. No seu backend você pode travar as requisições através do CORS e demais camadas de segurança.

Criptografar o JS não seria uma alternativa segura, já que é possível obter essas informações.

---

## Resposta #4

**Helbert Campos** (@helbert_campos) — 23/03/2021, 09:35 | ❤️ 2

[@gabriel.pereira](/u/gabriel.pereira), complementando as alternativas descritas pelo [@vinny.silveira](/u/vinny.silveira) uma ótima saída é criar um backend dentro do próprio Fluig utilizando Java.

Assim todo seu projeto roda dentro de uma mesma aplicação e com segurança.

---

## Resposta #5

**Wasley Santos** (@Wasley_Santos) — 27/03/2021, 11:06

Gente

Fico na dúvida, isso aqui também se aplicaria? Ou seria para outro tipo de acesso ?
[https://tdn.totvs.com/pages/releaseview.action?pageId=258277714](https://tdn.totvs.com/pages/releaseview.action?pageId=258277714)

---
