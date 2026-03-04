# Dúvidas na utilização da extensão VS Code

> **Fonte:** [https://fluiggers.com.br/t/duvidas-na-utilizacao-da-extensao-vs-code/3467](https://fluiggers.com.br/t/duvidas-na-utilizacao-da-extensao-vs-code/3467)
> **Categoria:** IDEs (Ferramentas de Desenvolvimento)
> **Tags:** `vscode`
> **Criado em:** 08/10/2025, 11:14
> **Visualizações:** 88 | **Likes:** 4 | **Respostas:** 2

---

## Pergunta original

**Adriel Rupic** (@Adriel_Gouvea) — 08/10/2025, 11:14 | ❤️ 1

Pessoal, eu curti muito o trabalho que vocês tiveram para criar essa extensão, particularmente acho o VS Code muito melhor do que o eclipse de fato. Consegui fazer a importação de formulários e tive um pequeno problema para exportar:

![image](https://fluiggers.com.br/uploads/default/original/2X/0/0e5cd5ab06813a05417bb66b2072043754ca648a.png)

Até cheguei a trocar o nome dos arquivos para ficarem idênticos para ver se não ocasionaria um erro igual está na descrição da extensão.

![image](https://fluiggers.com.br/uploads/default/original/2X/3/3c607eb8ddc8d3f9d10b4bbf42cf70475f17dccd.png)

Mas mesmo assim o erro persiste, alguém tem uma ideia do que estou fazendo de errado?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 09/10/2025, 08:21 | ❤️ 1

Por acaso tá com mais de um projeto Fluig aberto?

A extensão não lida bem com mais de um projeto, então pode ser isso.

Mas o fato do nome do arquivo HTML principal ser igual ao da pasta do formulário foi só por convenção e pra ter “tela” a menos perguntando qual é o anexo principal (como tem no Eclipse)

---

## Resposta #2

**Adriel Rupic** (@Adriel_Gouvea) — 09/10/2025, 09:38 | ❤️ 1

Bruno, bom dia!

Eu havia aberto um projeto em uma pasta que tinha X projetos, quando coloquei o projeto em uma pasta separada ela funcionou perfeitamente.

Muito obrigado pela ajuda!

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 09/10/2025, 10:27 | ❤️ 1

Tive intenção de adaptar pra permitir múltiplos projetos, mas a dor pra tratar as importações desanimou. Mas ainda é uma coisa a se pensar.

Nunca me importei muito com isso porque o vscode é bem mais tranquilo de abrir múltiplas instâncias do que o Eclipse. Além de que o vscode por padrão não trabalha assim. E, sinceramente, acho mais confuso múltiplos projetos.

---

## Resposta #4

**Daniel Sales** (@Daniel_Sales) — 13/10/2025, 09:50

Dica, Se vc tiver com varios projetos e quiser abrir todos não abra o workspace do eclipse

Adicione projeto por projeto ao seu workspace e o pluig vai trabalhart com o projeto que esta no topo da fila. E se quiser trocar de projeto mova ele para o topo da fila e ele pasa a ser o corrente.

---
