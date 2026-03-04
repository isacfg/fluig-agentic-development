# Mecanismo customizado com usuários vindo do RM

> **Fonte:** [https://fluiggers.com.br/t/mecanismo-customizado-com-usuarios-vindo-do-rm/2569](https://fluiggers.com.br/t/mecanismo-customizado-com-usuarios-vindo-do-rm/2569)
> **Categoria:** BPM
> **Tags:** `processo`, `bpm`
> **Criado em:** 07/02/2024, 11:33
> **Visualizações:** 135 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Luana Kurtz Moreira** (@luuanakm) — 07/02/2024, 11:33

Eu estou tentando atribuir o mecanismo customizado com a mesma regra
do fluig de Para um grupo (Pool), quando criado um mecanismo de atribuição customizado, cria-se essa estrutura

function resolve(process,colleague){

```
var userList = new java.util.ArrayList();


userList.add('usuáriorm');
userList.add('usuáriorm');
userList.add('usuáriorm');

return userList;
```

}

e colocando a matrícula que vem do RM funciona, mas para escolher os usuários que vão assumir a tarefa Alguém consegue me dar uma ajuda?

---

## Resposta #1

**Eduardo Vantini Neto** (@eduardo.vantini) — 08/02/2024, 16:51

Olá, tudo bem? É uma atividade conjunta? Se sim marca essa opção que funciona
![image](https://fluiggers.com.br/uploads/default/original/2X/b/b5f81bd0bb66d3832ddcbb17629b81a174407169.png)

Abs

---
