# Invalid version "html PUBLIC ": non-numeric "html PUBLIC "

> **Fonte:** [https://fluiggers.com.br/t/invalid-version-html-public-non-numeric-html-public/250](https://fluiggers.com.br/t/invalid-version-html-public-non-numeric-html-public/250)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 29/03/2021, 22:57
> **Visualizações:** 458 | **Likes:** 4 | **Respostas:** 4

---

## Pergunta original

**Lucas Lemuel** (@lucaslemuel_f) — 29/03/2021, 22:57 | ❤️ 1

Ao tentar exportar o formulário/processo para o servidor, está sendo retornado a seguinte mensagem:
**invalid version "html PUBLIC ": non-numeric "html PUBLIC "**

Pelo que entendi a mensagem ocorre devido a versão pública da página ser inválida. Porém aonde ajustar a mesma para que seja possível enviar ?

Obs.: realizei a exclusão do projeto no Eclipse, marcando a opção de deletar permanentemente. Criei um novo projeto e ao selecionar o servidor para assim carregar a lista de processos, o mesmo exibiu a mesma mensagem de erro.

Que página estaria com erro ?

![invalid version](https://fluiggers.com.br/uploads/default/optimized/1X/1133984b2a8b02b12d0ce12145a6f6c15db98a5e_2_471x500.jpeg)

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 30/03/2021, 00:53

Impressão que tenho é que o DOCTYPE do HTML está errado.

Por padrão sempre utilizo o seguinte doctype (primeira linha do HTML):

```auto
<!DOCTYPE html>
```

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 30/03/2021, 08:46

Bruno, bom dia!

O server.log ‘reclamou’ algo a mais?

---

## Resposta #3

**Lucas Lemuel** (@lucaslemuel_f) — 30/03/2021, 10:50

Então, o arquivo HTML está normal, com !DOCTYPE

---

## Resposta #4

**Lucas Lemuel** (@lucaslemuel_f) — 30/03/2021, 10:51

Bom dia,

Não sobe mensagem no server.log, da a entender de que é uma validação realizada no lado do eclipse.
Sabe me informar se possui algum log do plugin ?

---

## Resposta #5

**Lucas Lemuel** (@lucaslemuel_f) — 05/04/2021, 10:42 | ❤️ 1

Bom dia,

Aparentemente essa mensagem que retorna no Plugin do Eclipse é que o mesmo não consegue comunicação com o servidor.
Pois estava tentando atualizar com os arquivos fora da rede do ambiente.
Quando estou na rede interna, efetua o envio dos arquivos normalmente. Fiz testes também com a VPN e envia os arquivos normalmente.
Porém, não sei oque esteja impactando, pois se encontra público o acesso e com a porta liberada no firewall.

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 05/04/2021, 11:50 | ❤️ 2

Super intuitiva a mensagem de erro, hehehehe.

---
