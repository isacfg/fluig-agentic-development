# Permissões ECM - Permissão de modificação

> **Fonte:** [https://fluiggers.com.br/t/permissoes-ecm-permissao-de-modificacao/439](https://fluiggers.com.br/t/permissoes-ecm-permissao-de-modificacao/439)
> **Categoria:** ECM / GED
> **Criado em:** 13/05/2021, 08:56
> **Visualizações:** 845 | **Likes:** 0 | **Respostas:** 6

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 13/05/2021, 08:56

Pessoal,

Por necessidade de um projeto, tive a necessidade de restringir permissões das pasta no ECM, até aí tudo bem.

Porém, eu defini um requisito que em uma determinada pasta, os usuários não poderão criar um novo registro de formulário, somente visualizar, editar ou apagar.

Para isso, configurei as permissões da dita pasta como:

![image](https://fluiggers.com.br/uploads/default/optimized/1X/98d377e65bb00a8ddd73bf07935d706fe7dc4d48_2_690x114.png)

Ao acessar, o usuário consegue criar o registro normalmente.

Obs.: já testei ali a opção SOMENTE os colaboradores comuns dos grupos e deu no mesmo.

Essa permissão, considera adição como modificação?

---

## Resposta #1

**Willian Laynes** (@Willian_Laynes) — 13/05/2021, 09:45

Bom dia,

M não era pra deixar adicionar.

L = Leitura,
G = Gravação,
M = Modificação,
T = Tudo

Essa pasta não está setada para pegar as permissões da pasta pai?

---

## Resposta #2

**Daniel ** (@daniel_fmartins) — 13/05/2021, 09:49

Na coloquei para herdar as permissões da pasta pai porque existem outras pasta no mesmo nível do diretório e quero que essas outras tenham acesso total. Somente essa específica que eu queria restringir isso.

---

## Resposta #3

**Willian Laynes** (@Willian_Laynes) — 13/05/2021, 09:49

![image](https://fluiggers.com.br/uploads/default/original/1X/0af1f89288f5dd05a02fa5b7fb0d9cc463e2c8b2.png)

---

## Resposta #4

**Willian Laynes** (@Willian_Laynes) — 13/05/2021, 09:52

No caso você seta diretamente nela se irá herdar a pasta pai, não influencia as outras, mas se você não setou nela é estranho não ter pego. O usuário que vc testou é normal? Não é um usuário ADM?

---

## Resposta #5

**Daniel ** (@daniel_fmartins) — 13/05/2021, 09:54

Isso, é um usuário normal que eu criei pra teste. Através do perfil ADM que tenho seto as permissões e testo com esse user que criei.

---

## Resposta #6

**Willian Laynes** (@Willian_Laynes) — 13/05/2021, 09:58

Tenta setar na Aba restrições para ver se da certo.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/af09d811d652f4b35ae7e4af61ec576b40eb62f9_2_690x194.png)

---

## Resposta #7

**Daniel ** (@daniel_fmartins) — 13/05/2021, 10:08

Deu na mesma. Vou tentar fazer um teste em outro ambiente.

---
