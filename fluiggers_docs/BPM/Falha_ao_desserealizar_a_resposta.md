# Falha ao desserealizar a resposta

> **Fonte:** [https://fluiggers.com.br/t/falha-ao-desserealizar-a-resposta/716](https://fluiggers.com.br/t/falha-ao-desserealizar-a-resposta/716)
> **Categoria:** BPM
> **Criado em:** 13/10/2021, 15:01
> **Visualizações:** 276 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Vitor Rios** (@Vitor_Rios) — 13/10/2021, 15:01

Tenho um campo zoom onde informo as matrículas dos usuários em um formulário, após informar, em um workflow, eu consulto o dataset desse formulário para distribuir tarefas dentre os usuários através de um mecanismo customizado.

Estou recebendo esse valor: usuarios = “\[matricula1\]\[matricula2\]\[matricula3\]”

tentei o split ? que funcionou em uma página comum, mas nesse caso de mecanismo customizado não deu muito certo.

usuarios.split("?").forEach( DistribuiAtividade );

mas esse campo “?” causa erro de caracter desconhecido no eclipse e impede que eu o use. Existe alguma outra forma de separar as matrículas e adicionalas em um array para chamar meu foreach

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 13/10/2021, 23:27 | ❤️ 2

Boa noite!

Tenta esse protocódigo com regex:

```auto
const usuarios = "[matricula1][matricula2][matricula3]";
const sRegex = /\W+/g; // somente símbolos
usuarios.replace(sRegex,",").split(",").filter(n=>n);
```

As três etapas do replace foram:

-   substituir tudo que seja símbolo por vírgula;
-   split usando a vírgula (gerando elementos vazios)
-   filter para remover os elementos vazios.

Pode ficar mais limpo, mas espero ter ajudado!

---
