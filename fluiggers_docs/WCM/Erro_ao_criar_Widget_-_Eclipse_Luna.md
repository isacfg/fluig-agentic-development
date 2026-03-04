# Erro ao criar Widget - Eclipse Luna

> **Fonte:** [https://fluiggers.com.br/t/erro-ao-criar-widget-eclipse-luna/2780](https://fluiggers.com.br/t/erro-ao-criar-widget-eclipse-luna/2780)
> **Categoria:** WCM
> **Criado em:** 09/05/2024, 09:11
> **Visualizações:** 249 | **Likes:** 2 | **Respostas:** 4

---

## Pergunta original

**Igor Davanço** (@igordavanco) — 09/05/2024, 09:11

Pessoal, bom dia!

Alguém já se deparou com o erro abaixo ao criar uma Widget? O que pode ser?

![ERRO WIDGET](https://fluiggers.com.br/uploads/default/original/2X/2/20a5f7f94f2ffbc6b75255f2f942e26f337e39d3.png)

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 09/05/2024, 12:07

Pela descrição do erro tem caractere inválido no caminho onde sua widget será criada. Talvez esteja implicando com os espaços que tem no caminho.

Mas nunca tive erro parecido.

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Leonardo Masera** (@Leonardo_Masera) — 09/05/2024, 12:22

Provavelmente é porque esta tentando salvar no OneDrive (o caminho para ele tem espaços e -) tenta criar em uma pasta padrão em seu computador.

---

## Resposta #3

**Igor Davanço** (@igordavanco) — 10/05/2024, 10:52

Sim, o estranho é que sempre criei meus projetos e componentes nessa pasta e nunca tive nenhum problema. Começou ontem. Mas já alterei para uma outra pasta e funcionou. Obrigado.

---

## Resposta #4

**Igor Davanço** (@igordavanco) — 10/05/2024, 10:52 | ❤️ 1

Era isso mesmo, o estranho é que sempre criei meus projetos e componentes nessa pasta e nunca tive nenhum problema. Começou ontem. Mas já alterei para uma outra pasta e funcionou. Obrigado.

---

## Resposta #5

**Filipe Miranda** (@Filipe_Miranda) — 27/06/2025, 09:58 | ❤️ 1

Igor, como muda o caminho da pasta?
Isso está acontecendo comigo.

---

## Resposta #6

**Igor Davanço** (@igordavanco) — 30/06/2025, 08:27

Olá Filipe.

Na verdade, vc apenas copia a pasta inteira da sua Workspace para um outro diretório, por exemplo a pasta de “Documentos”, e dentro do Eclipse vc seleciona esse novo diretório (é recomendável que o diretório não possua nenhum espaço ou caracteres especiais para evitar esses problemas), conforme exemplo abaixo:

![FLUIG_01](https://fluiggers.com.br/uploads/default/original/2X/c/ca169c39b1f52c9f93b071ae4b8fa4a3af556798.png)

![FLUIG_02](https://fluiggers.com.br/uploads/default/original/2X/d/d61e3ed23f6ebb6e305a0baeb6256ec015cd1b94.png)

---

## Resposta #7

**Bruno Gasparetto** (@Bruno_Gasparetto) — 30/06/2025, 12:33

Agora fiquei curioso se a Extensão do VS Code tem esse mesmo problema. Nunca imaginei usar caminho de pasta com nome acentuado e espaços (sou muito das antigas que qualquer coisa diferente dava problema, hehehe).

---
