# Erro de permissão ao acessar dataset interno em widget

> **Fonte:** [https://fluiggers.com.br/t/erro-de-permissao-ao-acessar-dataset-interno-em-widget/2847](https://fluiggers.com.br/t/erro-de-permissao-ao-acessar-dataset-interno-em-widget/2847)
> **Categoria:** Widgets
> **Tags:** `dataset`
> **Criado em:** 11/06/2024, 15:41
> **Visualizações:** 193 | **Likes:** 1 | **Respostas:** 2

---

## Pergunta original

**Keven Teles** (@Keven) — 11/06/2024, 15:41

![image](https://fluiggers.com.br/uploads/default/original/2X/6/6e03677d17d978ca87810f55dae840002fd86989.png)

essa é a chamada do dataset no widget, mesmo passando o securityUserId ele me retorna que não tenho permissão.

Apenas quando o usuário logado é admin que consigo realizar a consulta no dataset

---

## Resposta #1

**Gabriel Borchardt** (@Gabriel_Borchardt) — 12/06/2024, 07:48

o dataset está liberado para acesso para usuarios da permissão user?

---

## Resposta #2

**Keven Teles** (@Keven) — 12/06/2024, 08:39 | ❤️ 1

muito obrigado, dei a permissão na aba de permissões ao DataServiceRest e funcionou perfeitamente, valeu mesmo

---

## Resposta #3

**Gabriel Borchardt** (@Gabriel_Borchardt) — 12/06/2024, 09:09

Top, atente-se agora ao criar os novos usuários com essa permissão de user, salvo engano o Fluig não preenche sozinho essa permissão…
Boa sorte aí na sua jornada!

---
