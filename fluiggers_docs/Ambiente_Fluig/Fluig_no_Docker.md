# Fluig no Docker

> **Fonte:** [https://fluiggers.com.br/t/fluig-no-docker/3252](https://fluiggers.com.br/t/fluig-no-docker/3252)
> **Categoria:** Ambiente Fluig
> **Tags:** `docker`
> **Criado em:** 21/04/2025, 22:03
> **Visualizações:** 162 | **Likes:** 1 | **Respostas:** 2

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 21/04/2025, 22:03 | ❤️ 1

Primeiramente, parabéns [@Bruno\_Gasparetto](/u/bruno_gasparetto) , pelo excelente trabalho feito:

[brunogasparetto/fluig-docker-dev: Configuração Básica para rodar Fluig em ambiente de desenvolvimento em docker](https://github.com/brunogasparetto/fluig-docker-dev)

Tô tentando melhorar seu script colocando um loadbalancer na frente de tudo pra ter a possibilidade de um autoscaler, saca? Alguém aqui já conseguiu?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/04/2025, 09:01

Te confesso que fiz esse repositório só pra desenvolvimento. Tanto que na minha máquina, na maioria das vezes, eu deixo marcado pra não iniciar o Realtime e Indexer. Então fiz o mais enxuto possível, sem pensar em escalar.

Um problema também é que a imagem é montada instalando o Fluig, então depois da imagem pronta se você perder o volume ou o banco de dados vai ter que reinstalar do zero.

Mas considerando que tá tentando fazer o loadbalancer então tá pensando em jogar em produção né, aí não teria o problema com a persistência dos dados e a imagem poderia ser reutilizada.

Vai ser legal se depois postar ao menos o que achou da performance após finalizar os ajustes da configuração.

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 24/04/2025, 11:56

[@daniel.cabral](/u/daniel.cabral) , olhando essa [Documentação](https://tdn.totvs.com/display/public/fluig/App+Review) da TOTVS sobre enviar um APP pra Review deles pra poder ser inserido na STORE, vi que numa parte que eles comentam sobre um tutorial pra usar um Fluig “zerado” no Docker.

![image](https://fluiggers.com.br/uploads/default/original/2X/f/f452b355dc0aa320a824b4d3b85b79237ceb930e.png)

Eles deram essa URL [http://portal.fluigstore.com/portal/p/partner/post/trocando-experiencias/774](http://portal.fluigstore.com/portal/p/partner/post/trocando-experiencias/774)

Até tentei acessar pra ver se teria algum conteúdo interessante, mas minha credencial não é válida pra isso.

Se você tiver credencial de partner talvez consiga ver se há algo interessante nesse tutorial.

---

## Resposta #3

**Daniel Cabral Santos** (@daniel.cabral) — 24/04/2025, 15:39

Quem me dera! Rs…alguém aqui tem? [@Daniel\_Sales](/u/daniel_sales) ? [@fluigor.com.br](/u/fluigor.com.br)

---

## Resposta #4

**Daniel Sales** (@Daniel_Sales) — 24/04/2025, 15:58

Eu tinha deixa ver se tenho ainda.

---

## Resposta #5

**Daniel Cabral Santos** (@daniel.cabral) — 25/04/2025, 09:38

Alguns amigos TOTVS e não TOTVS (@totvspartners.com.br) tentaram e nada. Deve ser um acesso super específico.

---
