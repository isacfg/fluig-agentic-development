# Voltar Atividade

> **Fonte:** [https://fluiggers.com.br/t/voltar-atividade/2977](https://fluiggers.com.br/t/voltar-atividade/2977)
> **Categoria:** BPM
> **Criado em:** 16/09/2024, 15:15
> **Visualizações:** 117 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**Guilherme Silva** (@GuilhermeSilva) — 16/09/2024, 15:15

Pessoal eu queria saber se tem como voltar uma atividade? por exemplo estou na atividade 1 e então vou para a 2, ai se a atividade 2 for reprovada, voltar para atividade 1.

no caso teria como fazer sem um gateway de decisão? pois todas as atividades devem ter essa opção de retomar a primeira atividade caso seja reprovado, e se tiver um gateway de decisão para cada atividade vai ser muito trabalhoso.

![image](https://fluiggers.com.br/uploads/default/original/2X/3/383a06b4d201ab97afa081334a212445a3e6e003.png)

---

## Resposta #1

**venturelli** (@venturelli) — 17/09/2024, 10:38

Na configuração do fluxo existe a opção “permite retorno” que tem essa função.

[https://tdn.totvs.com/display/fluig/Fluxos](https://tdn.totvs.com/display/fluig/Fluxos)

E você pode personalizar a mensagem no campo “Ativ. Retorno” para “Reprovar” para ser mais compatível com o seu fluxo.

O usuário deverá selecionar manualmente no hora de movimentar a solicitação a opção de reprovar.

---

## Resposta #2

**Guilherme Silva** (@GuilhermeSilva) — 17/09/2024, 11:19

![image](https://fluiggers.com.br/uploads/default/original/2X/0/065b23f2574f3b192ad740c8a993daa5c25bc3f8.png)

na ativ retorno, eu teria que colocar essa condição aonde? dentro do próprio workflow ou nas condições de formulário? não entendi muito bem esse passo

ele da a opção de ir para a próxima atividade e de voltar ao inicio, mas eu queria colocar a lógica de se for Reprovado não dar nem a opção de ir para a próxima atividade

---

## Resposta #3

**Pablo Valle** (@pablooav) — 17/09/2024, 12:35

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/g/d9b06d/48.png) GuilhermeSilva:
>
> > ele da a opção de ir para a próxima atividade e de voltar ao inicio, mas eu queria colocar a lógica de se for Reprovado não dar nem a opção de ir para a próxima atividade

Para que a movimentação seja feita de forma automática sem dar possibilidade de escolha do usuário, ai terá que incluir o gateway, mas é bem tranquilo, basta verificar o valor do campo de aprovação e enviar para a atividade que deseja

---
