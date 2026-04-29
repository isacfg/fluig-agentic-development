# Exportação de Widget com Erro - Connection reset

> **Fonte:** [https://fluiggers.com.br/t/exportacao-de-widget-com-erro-connection-reset/2858](https://fluiggers.com.br/t/exportacao-de-widget-com-erro-connection-reset/2858)
> **Categoria:** Widgets
> **Tags:** `exportar`, `eclipse`
> **Criado em:** 19/06/2024, 09:14
> **Visualizações:** 177 | **Likes:** 4 | **Respostas:** 3

---

## Pergunta original

**Tiago Camargos Silva** (@Tiago_Camargos_Silva) — 19/06/2024, 09:14

Caros colegas, estou com um problema na hora de exportar Widgets, ao mandar exportar.
Simplesmente não acontece nada e apresenta a mensagem de erro: “Connection reset”.

No server.log não apresenta nada.

Estou anexando imagem.

Se alguém já passou por isso e saiba como resolver agradeço.

![Erro_exportar_widget](https://fluiggers.com.br/uploads/default/original/2X/b/b8474bd7bd2bc60ad1d09f103f18496af0f416c4.png)

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 19/06/2024, 15:48 | ❤️ 1

Única vez que tive problema foi com widget que estava com proteção de escrita no servidor do Fluig , assim na hora de enviar o sistema não conseguia sobrescrever o arquivo.

Pelo erro entregue parece que é algum problema de comunicação do Eclipse com o Fluig. A versão do plugin tá igual à versão do Fluig?

Se for exportação de Widget e quiser comprovar que não é problema de conexão pode tentar usar o VSCode pra exportar usando a extensão [Fluig - Extensão para Desenvolvimento - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Fluiggers.fluiggers-fluig-vscode-extension)

---

## Resposta #2

**Tiago Camargos Silva** (@Tiago_Camargos_Silva) — 20/06/2024, 12:49 | ❤️ 1

[@Bruno\_Gasparetto](/u/bruno_gasparetto) deu certo meu amigo, pelo eclipse realmente não foi, mesmo com o plugin estando na versão correta, também tentei reinstalá-lo, sem efeito.

Porém pelo VSCode foi sem problemas, muito obrigado.

Abraço!

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/06/2024, 14:03 | ❤️ 1

Então é bom investigar o motivo do Eclipse dar o problema.

Pode ser que a conexão dele tenha dado algum erro. Já tive uma situação na qual, de repente, ele não autenticava o usuário, mas do nada voltou a funcionar.

Ao menos já sabemos que o seu servidor Fluig tá funcionando corretamente no quesito receber a widget.

---

## Resposta #4

**venturelli** (@venturelli) — 26/06/2024, 14:13 | ❤️ 1

Pra verificar o erro no eclipse você pode ver se o erro realmente foi no eclipse (consultando o log do servidor) e caso seja só do eclipse mesmo, adicione **\-debug** ao atalho do eclipse

```auto
"C:\caminho\para\eclipse\eclipse.exe" -debug
```

Isso vai abrir uma janela do terminal junto com o eclipse e trazer todos os outputs do eclipse. Isso ajuda a verificar o erro ou abrir o chamado dai.

---

## Resposta #5

**Tiago Camargos Silva** (@Tiago_Camargos_Silva) — 26/06/2024, 14:16

Ótimo, irei fazer o teste posteriormente e retorno caso encontre algo.
Obrigado.

---
