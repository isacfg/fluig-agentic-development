# Erro 401 em uma Widget pública

> **Fonte:** [https://fluiggers.com.br/t/erro-401-em-uma-widget-publica/2365](https://fluiggers.com.br/t/erro-401-em-uma-widget-publica/2365)
> **Categoria:** Widgets
> **Tags:** `form`
> **Criado em:** 22/11/2023, 09:23
> **Visualizações:** 243 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**João Victor Ribeiro** (@Joao_Victor_Ribeiro) — 22/11/2023, 09:23

Olá pessoal, estou com um problema referente à uma widget pública, desenvolvi uma Widget utilizando json, para retornar os dados preenchidos nessa widget para dentro de um form criado no fluig, logado no fluig eu consigo receber os dados preenchidos, mas quando eu tento fazer por um navegador fora da plataforma fluig, ele me retorna erro 401, alguem teria como me ajudar?

---

## Resposta #1

**Guilherme Mesquita Rocha** (@gmesquita) — 23/11/2023, 15:50 | ❤️ 2

Boa tarde.
Esse erro retornado tem a ver com a sua autenticação (Unauthorized) para acessar as informações do Fluig,
para a widget pública funcionar, consumindo Dataset e afins, será necessário realizar a configuração de seu oAuth Provider e oAuth Application. Acredito que esse tópico possa te ajudar:

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/fluigor.com.br/48/1817_2.png)
>
> [Cliente externo sem usuário Fluig startar um processo e anexar documentos](https://fluiggers.com.br/t/cliente-externo-sem-usuario-fluig-startar-um-processo-e-anexar-documentos/307/23) [BPM](https://fluiggers.com.br/c/bpm/5)
>
> > Olá Pessoal, Meu colega [@Rhyan](/u/rhyan) conseguiu fazer funcionar esse método disponibilizado no git do Fluig. [https://git.fluig.com/projects/SAMPLES/repos/widgets/browse/rest-oauth](https://git.fluig.com/projects/SAMPLES/repos/widgets/browse/rest-oauth) Abraçox.

---
