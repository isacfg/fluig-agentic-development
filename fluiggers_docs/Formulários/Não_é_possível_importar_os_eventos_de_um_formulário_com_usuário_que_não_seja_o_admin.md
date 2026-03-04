# Não é possível importar os eventos de um formulário com usuário que não seja o admin

> **Fonte:** [https://fluiggers.com.br/t/nao-e-possivel-importar-os-eventos-de-um-formulario-com-usuario-que-nao-seja-o-admin/646](https://fluiggers.com.br/t/nao-e-possivel-importar-os-eventos-de-um-formulario-com-usuario-que-nao-seja-o-admin/646)
> **Categoria:** Formulários
> **Tags:** `form`, `eclipse`, `ecmcardindexservice`
> **Criado em:** 09/09/2021, 15:51
> **Visualizações:** 894 | **Likes:** 2 | **Respostas:** 5

---

## Pergunta original

**Bruno Gasparetto** (@Bruno_Gasparetto) — 09/09/2021, 15:51

Recentemente resolvi importar alguns formulários do Fluig e percebi que os eventos não são retornados quando utilizo o meu usuário na configuração do servidor (meu usuário tem papel admin e os formulários foram criados e enviados para o Fluig utilizando o meu usuário). Porém se eu configuro o Eclipse para utilizar o usuário admin (o primeiro usuário criado) os eventos são retornados normalmente.

Reparei que o problema não acontece só no Eclipse, é alguma permissão que impede até a pesquisa dos eventos pelo WS ECMCardIndexService.

Reparei que isso começou a acontecer na versão 1.7.0, provavelmente após o último patch de segurança.

Alguém já enfrentou essa situação e conseguiu solucionar ou agora realmente é obrigatório usar sempre o usuário Admin (o primeiro usuário criado) pra importar os itens?

---

## Resposta #1

**Geovane Silva** (@Geovane_Silva) — 16/09/2021, 08:26 | ❤️ 1

Oi bom dia,
Também estou passando por isso, mesmo com o usuário sendo admin.
Como solução de contorno, primeiro baixo todo o processo que quero do fluig no eclipse, depois entro no fluig → processos → configurar processos e exporto o processo… ele gera um arquivo zip, dentro dele tem a pasta events, pego e copio para o projeto no eclipse.

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 16/09/2021, 09:08

Então, só o primeiro usuário criado no Fluig que consegue baixar os eventos, mas todos os outros que possuem papel admin não conseguem.

Muito boa a sua solução paliativa pra conseguir baixar.

Eu abri um chamado pra TOTVS informando o problema. Estou no aguardo de uma resposta deles.

---

## Resposta #3

**Geovane Silva** (@Geovane_Silva) — 16/09/2021, 09:23

Depois nos informe se tiver a solução.

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 17/09/2021, 08:18

[@Geovane\_Silva](/u/geovane_silva), qual é a versão do seu Fluig?

Fiz o teste de criar um novo usuário e com ele também deu o mesmo erro.

A TOTVS pediu até um usuário e senha pra testar. Por isso criei um novo usuário.

Ter mais casos pra relatar ajudaria pra eles entenderem que pode não ser um problema tão isolado.

---

## Resposta #5

**Geovane Silva** (@Geovane_Silva) — 17/09/2021, 08:55 | ❤️ 1

[@Bruno\_Gasparetto](/u/bruno_gasparetto) o fluig está na versão 1.7.0 20210628 e no eclipse o plugin do fluig está na 1.7.0.1, ticket aberto na totvs 12236185

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 17/09/2021, 11:35

Eles vão investigar. Por enquanto deram a mesma solução que a sua de exportar o processo inteiro pelo painel do Fluig.

Acredito que quando atualizar pra 1.7.1 isso se resolva, mas estou com muito receio de atualizar considerando a quantidade de problemas que vi, principalmente envolvendo os anexos de processo.

---

## Resposta #7

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/09/2021, 15:26

De forma resumida: o suporte não descobriu o motivo do SOAP jogar exceção de que o usuário não tem permissão e acham que pode ser algo com a estrutura dos .js dos eventos (mesmo que o problema aconteça com todos os formulários e com eventos que antes eram retornados normalmente) e por isso indicaram a contratação de um consultor para analisar o sistema.

Como é algo que não está atrapalhando e ainda estamos na 1.7.0 vou aguardar o 1.7.1 ficar estável o suficiente pra atualizar o Fluig e só se o caso persistir eu pedirei a consultoria.

---

## Resposta #8

**jonathan.nascimento** (@jonathan.nascimento) — 13/06/2022, 13:57

Estou usando a versão 1.7.1 e o problema persiste. Se alguém conseguiu resolver favor compartilhar conosco.

---
