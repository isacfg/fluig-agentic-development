# Erro ao exportar formulário pelo VS Code

> **Fonte:** [https://fluiggers.com.br/t/erro-ao-exportar-formulario-pelo-vs-code/2702](https://fluiggers.com.br/t/erro-ao-exportar-formulario-pelo-vs-code/2702)
> **Categoria:** Formulários
> **Tags:** `form`, `bpm`
> **Criado em:** 04/04/2024, 16:20
> **Visualizações:** 145 | **Likes:** 3 | **Respostas:** 1

---

## Pergunta original

**Daniel Braga** (@Daniel_Braga) — 04/04/2024, 16:20

Olá pessoal!
Seguinte, utilizo no VS Code a extensão *Fluig - Extensão para Desenvolvimento* e quando tento fazer a exportação para o servidor de laboratório da TOTVS (Lab) retorna o erro: *Anexo(s) do formulário não encontrado(s).*
Já desinstalei a extensão e reinstalei, e antes de partir para uma ação mais radical, que seria redefinir o VS Code, estou recorrendo aos colegas aqui.
Desde já agradeço imensamente.

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 04/04/2024, 16:44 | ❤️ 2

Acho que todas as vezes que vi alguém reclamar de algum funcionamento dessa extensão foi porque resolveu abrir um diretório com vários projetos Fluig ao invés de abrir somente o diretório no qual ia trabalhar.

Como o VS Code por padrão não trabalha com o conceito de vários projetos abertos ao mesmo tempo (diferente do Eclipse) a extensão foi desenvolvida pensando que o dev abriria somente a pasta do projeto em si.

Se é esse o seu caso tente abrir somente o projeto que está trabalhando pra testar.

Ao menos nos VS Code que tenho a extensão instalada eu trabalho normalmente fazendo a exportação do formulário sem problemas.

---

## Resposta #2

**Daniel Braga** (@Daniel_Braga) — 05/04/2024, 22:20 | ❤️ 1

Salve, Bruno!
A solução passa por aí mesmo, bastou salvar um arquivo de workspace que funcionou, e é um para cada projeto.
Você é mil porcento, amigo. Forte abraço!

---
