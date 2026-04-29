# Biometria facial, biometria digital

> **Fonte:** [https://fluiggers.com.br/t/biometria-facial-biometria-digital/3275](https://fluiggers.com.br/t/biometria-facial-biometria-digital/3275)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 06/05/2025, 11:34
> **Visualizações:** 84 | **Likes:** 1 | **Respostas:** 5

---

## Pergunta original

**Leticia Ingrid** (@Leticia_Ingrid) — 06/05/2025, 11:34

Boa tarde!

Alguém já utilizou alguma api de software externo que faça leitura facial ou digital no Fluig que possa indicar? Ferramenta paga ou gratuita

Atenciosamente

---

## Resposta #1

**Mauricio Freitas** (@mauriciolanner) — 09/05/2025, 16:47

Você ta tentando mudar o login do fluig pra biometria? Creio que não conseguirá fazer isso, procure metodos de autenticação usando o identity da totvs

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 09/05/2025, 16:59

Diretamente no Fluig, acredito que só se colocar um provedor de identidade corporativo…como o [@mauriciolanner](/u/mauriciolanner) disse, o Identity pode te ajudar nisso.

---

## Resposta #3

**Leticia Ingrid** (@Leticia_Ingrid) — 09/05/2025, 17:09

Não seria mudar o formato de login, eu preciso de um leitor facial dentro de um form do fluig que me informe a chapa do colaborador depois de identifica-lo através da leitura facial para que eu possa vincular ele ao EPI que ele esta pegando, para que se ao final do dia o epi ou material que ele pegou emprestado não for entregue, que possamos rastrear e saber com quem está, queria fazer dentro do Fluig porque já utilizamos ele integrado ao RM para movimentações de estoque, mas se não for possível teremos que recorrer a um software do mercado mesmo

---

## Resposta #4

**Mauricio Freitas** (@mauriciolanner) — 12/05/2025, 07:33

Agora entendi, nesse caso, você ter que criar um código pra isso, acredito que deve haver APIs no mercado que atendam essa demanda., mas saiba que não será simples, mas nativo do fluig ou da totvs, não conheço nada pronto, pode até ser que exista, pq a totvs tem sistema de ponto virtual usando biometria, mas desconheço que seja aberto a outros produtos como o fluig.

---

## Resposta #5

**Leticia Ingrid** (@Leticia_Ingrid) — 13/05/2025, 16:06

sem dúvidas é um desafio, nós utilizamos o ponto virtual (meu RH) mas realmente não é aberto ao Fluig, estamos estudando apis do mercado para utilizar

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 13/05/2025, 18:02 | ❤️ 1

Nessa situação acredito que vai precisar procurar algum leitor biométrico que forneça uma API.

Olhando rapidamente vi essa [Documentação](https://www.controlid.com.br/docs/access-api-pt/reconhecimento-facial/configuracoes-reconhecimento-facial/) da ControlID pro equipamento [IDFace](https://www.controlid.com.br/controle-de-acesso/idface/).

Então vai muito do equipamento fornecer uma API ou então ter que usar o SDK do leitor pra fazer a integração. Vi que vários leitores (ao menos de digital) fornecem SDK em Java, C e C++. Aí no caso do Fluig até seria possível usar o SDK em Java, se fizer um aplicativo/widget em Java pra ser o proxy de comunicação com o leitor, mas isso se o leitor ficar instalado no servidor do Fluig né, o que acho improvável.

---

## Resposta #7

**Leticia Ingrid** (@Leticia_Ingrid) — 15/05/2025, 09:46

Agradeço a contribuição!

---
