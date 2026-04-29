# Anexar mais de um arquivo no processo

> **Fonte:** [https://fluiggers.com.br/t/anexar-mais-de-um-arquivo-no-processo/727](https://fluiggers.com.br/t/anexar-mais-de-um-arquivo-no-processo/727)
> **Categoria:** BPM
> **Tags:** `form`, `bpm`
> **Criado em:** 19/10/2021, 14:57
> **Visualizações:** 543 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Samuel ** (@SamuelBruing) — 19/10/2021, 14:57

Boa tarde pessoal! Estou com um probleminha bem chato… Tenho um processo em que é necessário adicionar mais de um arquivo. Ao anexar apenas um arquivo, consigo movimenta-lo para a próxima etapa sem problemas, mas preciso anexar dois arquivos. Quando anexo dois arquivos, é exibido um erro que diz que o ‘anexo é obrigatório’. Alguém já passou por isso e tem ideia de como é possível resolver?

Desde já obrigado!

---

## Resposta #1

**Victor Castro** (@victorcastro) — 20/10/2021, 08:36

Bom dia [@SamuelBruing](/u/samuelbruing).

Como você fez a sua regra de validação de anexos?

O que aconteceu comigo uma vez foi que eu fiz a validação direto na atividade. Só que no campo **Operação** eu coloquei **igual** e não **maior ou igual** a 1. Então se eu anexava 1 ele deixava, se anexasse mais que um exibia a mensagem que eu configurei. Custei a me tocar que era isso, rs

![image](https://fluiggers.com.br/uploads/default/original/1X/d5b05a5a7b817918d6fd2607717830eb97029c9e.png)

---
