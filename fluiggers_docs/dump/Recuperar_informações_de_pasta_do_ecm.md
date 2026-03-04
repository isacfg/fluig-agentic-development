# Recuperar informações de pasta do ecm

> **Fonte:** [https://fluiggers.com.br/t/recuperar-informacoes-de-pasta-do-ecm/2155](https://fluiggers.com.br/t/recuperar-informacoes-de-pasta-do-ecm/2155)
> **Categoria:** API`s Fluig
> **Tags:** `fluigapi`
> **Criado em:** 28/08/2023, 16:48
> **Visualizações:** 285 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Wanderley Junior** (@gomeswjunior) — 28/08/2023, 16:48

Vou colocar meu cenário para explicar melhor.

Tenho uma pasta principal e dentro dela tenho varias outras. Gostaria de saber se via api é possivel verificar a descrição dessas pastas. Pensei em algo como um laço verificando todas as pastas, pois preciso validar se uma pasta com determinada nomeclatura já existe.

Agradeço a ajuda.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 28/08/2023, 16:57

Já fiz algo assim usando o serviço soap ECMFolderService. Mas dependendo de onde está fazendo a chamada (dataset ou evento back-end) pode ser que tenha algum serviço do SDK que seja mais fácil.

No soap tem o método getSubFolders. Você indica a pasta principal e ele retorna as subpastas.

Exemplo de como usei [Fluig - Exemplo de Gerar e Enviar um PDF à uma pasta GED do Fluig · GitHub](https://gist.github.com/brunogasparetto/b8f48535c1a0d43a6c6bc418acc22684#file-criar_documento_fluig-js-L115)

---

## Resposta #2

**Wanderley Junior** (@gomeswjunior) — 30/08/2023, 08:40

Obrigado bruno, ajudou bastante.

---
