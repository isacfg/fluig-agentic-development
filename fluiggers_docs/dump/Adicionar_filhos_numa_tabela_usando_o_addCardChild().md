# Adicionar filhos numa tabela usando o addCardChild()

> **Fonte:** [https://fluiggers.com.br/t/adicionar-filhos-numa-tabela-usando-o-addcardchild/3219](https://fluiggers.com.br/t/adicionar-filhos-numa-tabela-usando-o-addcardchild/3219)
> **Categoria:** BPM
> **Tags:** `form`, `dataset`
> **Criado em:** 26/03/2025, 08:54
> **Visualizações:** 41 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Caio Racy** (@Caio_Racy) — 26/03/2025, 08:54

Olá pessoal, estou querendo fazer uma tratativa no beforeTaskSave() no qual eu tenho uma tabela de produtos e se o usuário entra com um produto que é um combo, eu separo ele para enviar, porém se eu usar o addCardChild() não se vai chamar meus changes no front, de calculo de total ou coisa do tipo, teria como adicionar esses eventos após o addCardChild() ou teria que tentar uma abordagem de adicionar diretamente no meu front? Ainda vou fazer uns testes aqui também, mas se alguém já sofreu com algo do tipo e conseguiu uma solução já é de grande ajuda.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Caio Racy** (@Caio_Racy) — 26/03/2025, 14:33 | ❤️ 1

Acabei fazendo pelo front mesmo, foi muito mais rápido e facil, ainda to pegando o jeito, mas consegui importar o script do vcXMLRPC no html e usar o dataset por la, ai tenho controle maior nos meus changes e inputs, depois que ele sair no callback do autocomplete verifico se o item é um combo e busco no banco seus respectivos itens e adiciono um a um e no final removo a linha do item de combo.

---
