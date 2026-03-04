# Como funciona o Fluxo Automático?

> **Fonte:** [https://fluiggers.com.br/t/como-funciona-o-fluxo-automatico/2588](https://fluiggers.com.br/t/como-funciona-o-fluxo-automatico/2588)
> **Categoria:** BPM
> **Tags:** `automático`, `fluxo`
> **Criado em:** 22/02/2024, 18:44
> **Visualizações:** 572 | **Likes:** 4 | **Respostas:** 1

---

## Pergunta original

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/02/2024, 18:44 | ❤️ 1

Olá,

Estou numa tentativa e erro de tentar deixar um Fluxo Automático em uma atividade, e tudo porque ao criar um subprocesso o sistema o faz com o usuário executor, e como quem executa o subprocesso anterior é um gerente pensei em criar uma atividade só pra mudar quem é o autor.

![image](https://fluiggers.com.br/uploads/default/original/2X/9/905af8828647414fa0b814b8092ea6badf323166.png)

A última pessoa que executa o subprocesso “Elaborar Parecer Técnico” é um gerente, que é uma aprovação, após isso o ideal seria cair direto no subprocesso “Deliberação Direx”, mas aí ele é criado em nome do gerente (isso não pode acontecer).

Então criei essa atividade “Enviar para Deliberação Direx” e coloquei o prazo de conclusão de 2 minutos e coloquei ali o fluxo automático “Enviado Automaticamente”. Imaginei que esse fluxo fosse disparado no momento que o prazo de conclusão chegasse ao fim, mas pelo jeito me enganei.

Aí fica a dúvida: precisa configurar mais alguma coisa pro fluxo automático funcionar?

Eu baixei este [Exemplo](https://tdn.totvs.com/pages/releaseview.action?pageId=624102042) da TOTVS, mas ele tá com problema e não aparece nenhuma opção na atividade que tem o Fluxo automático.

Fiquei acompanhando o Log do Fluig quando chega o término do prazo da atividade, mas o Fluig simplesmente não executa nenhuma ação.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Marco Comassetto** (@marcommas) — 22/02/2024, 20:40 | ❤️ 3

Bruno,

Você precisa cadastrar no agendador de tarefas a execução do Fluxo Automático.
Para a sua situação, recomendo que seja a execução a cada minuto, e coloque a tua tarefa com prazo de 1 minuto.
Irá funcionar da seguinte forma, quando expirar a tarefa, na próxima execução do fluxo automático a tua atividade irá movimentar.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/3/3e86d5f90aa8700e2fc3809eb2eaaa8877b4b953_2_424x499.png)

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 23/02/2024, 09:49

Muito obrigado, [@marcommas](/u/marcommas) .

Tá aí algo que eu nunca estudei bem, as opções que o agendador de tarefa tem. Sempre configurei só os datasets jornalizados, mas na tela dos datasets.

Fiz o teste aqui e funcionou perfeitamente.

---
