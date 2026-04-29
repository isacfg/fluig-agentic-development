# Controle de versão

> **Fonte:** [https://fluiggers.com.br/t/controle-de-versao/3380](https://fluiggers.com.br/t/controle-de-versao/3380)
> **Categoria:** BPM
> **Tags:** `form`, `processo`, `bpm`
> **Criado em:** 19/08/2025, 10:50
> **Visualizações:** 57 | **Likes:** 4 | **Respostas:** 2

---

## Pergunta original

**Victor Castro** (@victorcastro) — 19/08/2025, 10:50

Pessoal, como vocês fazem controle de versão dos arquivos de vocês? Seja de formulário ou de workflow. Vocês fazem gestão do que mudou de uma versão pra outra?

As vezes preciso converter uma solicitação de uma versão pra outra de um processo, porém não lembro que que mudou de uma pra outra, não sei se posso simplesmente converter sem dar problema. Sei que deveria ter começado a fazer essa gestão desde o início…

Qual seria a melhor forma de fazer isso bem documentado?

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 19/08/2025, 16:11 | ❤️ 3

git hub é uma boa opção.
por padrão o fluig j faz esse controle de versão. para quase tudo so widget que não tem. A coisa chata e q ue é dificil de verificasr o que mudou. Então use uma ferramenta a base de git.

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 23/08/2025, 20:29

+1 Git. Costumo por cada projeto com todos os seus artefatos relacionados num repositório separado. Mas às vezes penso que colocar ‘tudo’ num único projeto pode ser melhor, porque muitos artefatos (datasets por exemplo) são compartilhados.

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 25/08/2025, 13:14 | ❤️ 1

[@daniel.cabral](/u/daniel.cabral) a dica é todos os arquivos do projeto em um unico projeto, pois facilita na hora do deploy. Fica claro tudo o que tem que ser publicado no fluig e não correo o risco de esquecer. o que for compartilhado se tiver alteraçoes ai vale um repositorio a parte, maso o risco de esquecer dele é grande. Eu deixo uma copia no meu reposotiro do projeto mas controlo a versão por um projeto a parte e coloco um comentario no fonte dataset compartilhado buscar ultima versão da produção

---
