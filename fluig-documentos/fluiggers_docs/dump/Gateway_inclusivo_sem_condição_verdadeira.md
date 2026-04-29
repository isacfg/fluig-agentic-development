# Gateway inclusivo sem condição verdadeira

> **Fonte:** [https://fluiggers.com.br/t/gateway-inclusivo-sem-condicao-verdadeira/2987](https://fluiggers.com.br/t/gateway-inclusivo-sem-condicao-verdadeira/2987)
> **Categoria:** BPM
> **Tags:** `processo`, `bpm`
> **Criado em:** 25/09/2024, 16:37
> **Visualizações:** 77 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Rahyan Ramos** (@Ramos) — 25/09/2024, 16:37

Em um processo que estou desenvolvendo, existe uma etapa em que o responsável pela tarefa pode solicitar um parecer para o setor jurídico e solicitar um parecer técnico sobre a situação, como também pode não solicitar nenhum parecer e seguir para a próxima etapa, como na imagem do processo atual:
![image](https://fluiggers.com.br/uploads/default/original/2X/e/ef143f7d950e1563d7afe6340ce6224be0d64b5a.png)

A atividade ‘Definir Medida Corretiva’ só deve ser feita após a realização dos pareceres, quando solicitado. Porém da forma como está estruturado atualmente, se o responsável não solicitar nenhum dos pareceres aparece a mensagem de erro:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/9/900e68b0d721ed43d000b60509507e8797eebe9d_2_690x162.png)

E adicionar um caminho direto no Join também gera um erro.
Alguém poderia me ajudar a encontrar uma solução para esse problema?

---

## Resposta #1

**venturelli** (@venturelli) — 26/09/2024, 16:54

Neste caso, daria para um gateway exclusivo, antes do inclusivo que vai direto para o definir medida corretiva caso não tenha as condições que serão usadas no inclusivo. Daria pra usar o fluxo padrão para evitar repetição de condições.

Tem a possibilidade de adicionar esse gateway exclusivo **após** o inclusivo com fluxo padrão. Vai ficar feio e não sei as consequências futuras disso, mas por enquanto funciona.

---

## Resposta #2

**Rahyan Ramos** (@Ramos) — 30/09/2024, 10:11

Ótimo, fiz isso e supriu minhas necessidades. Muito obrigado!

---
