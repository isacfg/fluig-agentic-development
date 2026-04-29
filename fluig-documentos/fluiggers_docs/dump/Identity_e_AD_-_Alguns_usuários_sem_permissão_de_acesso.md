# Identity e AD - Alguns usuários sem permissão de acesso

> **Fonte:** [https://fluiggers.com.br/t/identity-e-ad-alguns-usuarios-sem-permissao-de-acesso/914](https://fluiggers.com.br/t/identity-e-ad-alguns-usuarios-sem-permissao-de-acesso/914)
> **Categoria:** Identity
> **Criado em:** 08/02/2022, 07:42
> **Visualizações:** 685 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 08/02/2022, 07:42

Eu não sei se houve alguma ligação com o problema que tivemos na empresa (um switch da rede deu problema e toda a empresa ficou sem acesso por quase um dia inteiro), mas alguns poucos usuários (de 200, só 3) não conseguem se logar no Identity.

E, antes, eles conseguiam normalmente.
Não é gente que acabou de entrar, mas pessoas que têm anos de uso do Fluig.

Como o Identity está integrado ao AD, fui testar com uma das pessoas a autenticação no ambiente de rede e funciona normalmente.
A entrada no AD, claro, foi testada com a mesma credencial/senha, mas com as mesmas no Identity/Fluig não há jeito de se logar.
Já revi o usuário no Identity e está lá, certinho, como Accepted.

O que será isto?

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 08/02/2022, 08:26 | ❤️ 1

[@Mautresim](/u/mautresim) , chegou a dar uma olhada no log do smart\_sync e também no do fluig no ato do login desses usuários?

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 08/02/2022, 10:26

Caro [@daniel.cabral](/u/daniel.cabral), obrigado por sua dica. A cada pergunta aqui eu aprendo mais uma coisa.

Entretanto, no server.log do Fluig não há menção alguma à tentativa de conexão da pessoa.
Também, no log do Smart Sync, achei dois logs, o ‘ss\_service.txt’ e o ‘ss\_client.txt’. Em nenhum dos dois há alguma referência aos nomes dos usuários problemáticos.

Se é que estou sabendo ler os logs…

---

## Resposta #3 ✅ RESPOSTA ACEITA

**MAURO SIMOES** (@Mautresim) — 10/02/2022, 07:13

**Não** descobri o problema, mas voltou a funcionar ‘do nada’.

---
