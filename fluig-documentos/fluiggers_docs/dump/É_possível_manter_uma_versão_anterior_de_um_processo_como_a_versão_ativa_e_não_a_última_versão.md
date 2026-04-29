# É possível manter uma versão anterior de um processo como a versão ativa e não a última versão?

> **Fonte:** [https://fluiggers.com.br/t/e-possivel-manter-uma-versao-anterior-de-um-processo-como-a-versao-ativa-e-nao-a-ultima-versao/571](https://fluiggers.com.br/t/e-possivel-manter-uma-versao-anterior-de-um-processo-como-a-versao-ativa-e-nao-a-ultima-versao/571)
> **Categoria:** BPM
> **Criado em:** 21/07/2021, 19:01
> **Visualizações:** 646 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Cassius** (@Cassius) — 21/07/2021, 19:01

Gostaria de saber se é possível manter uma versão anterior à última versão do processo como a ativa e não a última versão criada.
Se não é possível, é possível excluir versões de um processo?
Obrigado.

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 22/07/2021, 08:38

Bom dia!

Quando você exclui um processo, ele não é exatamente excluído:

![image](https://fluiggers.com.br/uploads/default/original/1X/48e0f239fc9b62641c719968dee0d4fc3734c7b3.png)

[https://tdn.totvs.com/display/public/HF/Configurar+processos](https://tdn.totvs.com/display/public/HF/Configurar+processos)

Pelo que eu sei, você pode sim manter uma (e somente uma) versão mais nova do processo sem liberação - até que você a libere a nova versão, a ativa será a anterior. Agora, se a ideia é manter uma versão mais antiga ativa (por exemplo, existem 20 e você quer a 12ª), desconheço forma.

Você controla isso no momento de exportar o diagrama, mantenha o “liberar versão” desmarcado, assim manterá a versão atual ativa.

---
