# Formulario perdendo os valores após certa etapa do "fluxo"

> **Fonte:** [https://fluiggers.com.br/t/formulario-perdendo-os-valores-apos-certa-etapa-do-fluxo/2298](https://fluiggers.com.br/t/formulario-perdendo-os-valores-apos-certa-etapa-do-fluxo/2298)
> **Categoria:** Formulários
> **Tags:** `form`, `bpm`
> **Criado em:** 20/10/2023, 11:53
> **Visualizações:** 298 | **Likes:** 1 | **Respostas:** 4

---

## Pergunta original

**victor ferreira** (@nikof) — 20/10/2023, 11:53

Senhores, bom dia

Tenho um formulario que ao chegar em uma determinada etapa no “fluxo” ele perde alguns valores salvos nos inputs.

Percebi que não são em todos os inputs, e sim nos que estão com disabled / readonly, ou até hide.

Achei um outro topico com o mesmo problema e pediram para tentar deixar os campos readonly dessa forma:

$(#idCampo).attr(“readonly”, “readonly”);
$(#idCampo).css(“background-color”, “WhiteSmoke”);

Tentei desse jeito e mesmo assim continuo perdendo os valores nos campos, após uma certa etapa no fluxo.

Alguém já passou pelo mesmo problema, e teria alguma dica do que fazer ?

Obrigado !

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Marco Comassetto** (@marcommas) — 21/10/2023, 19:39 | ❤️ 1

Provavelmente você está deixando o campo como disabled, se deixar como disabled o Fluig salvará em branco.

Caso você queria deixar o campo bloqueado para edição, recomento utilizar o enabledFields, que tem esse papel de desabilitar campos.

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 23/10/2023, 08:29

Qual a versão do fluig?

Tive o mesmo problema na 1.8 não lembro qual deas builds.
Parou apos atualizar. Se não me engano teve um bug assim no fluig

---

## Resposta #3

**Allan Reichert** (@allan.reichert) — 23/10/2023, 09:20

Também estou com este problema, só nao consegui simular ainda na ultima versão da plataforma. O problema ocorre para mim quando o usuário acessa o formulário pelo mobile e em campos de tabelas PaiXFilho. Não estou usando a opção disabled.

é a mesma situação?

---

## Resposta #4

**victor ferreira** (@nikof) — 23/10/2023, 09:44

Vou fazer esse teste.

Obrigado por enquanto Marco !

---

## Resposta #5

**victor ferreira** (@nikof) — 23/10/2023, 09:45

Estou na versão 1.8 também, vou verificar melhor se pode ser esse o problema, obrigado pela ajuda !

---

## Resposta #6

**Allan Reichert** (@allan.reichert) — 23/10/2023, 11:27

Acredito que este problema tenha sido tratado na última versão do ambiente. Irei atualizar ao meio dia, depois trago a situação

![image](https://fluiggers.com.br/uploads/default/optimized/2X/9/97d0e8509ab9cd12172e76dace0cb6b49f444a1c_2_690x171.png)

---

## Resposta #7

**victor ferreira** (@nikof) — 25/10/2023, 16:52

Opa Allan, conseguiu algum sucesso com a atualização ?

---

## Resposta #8

**Allan Reichert** (@allan.reichert) — 26/10/2023, 07:59

Olá, Atualizei e não resolveu, aí encontrei um erro em meu script. Acabei tendo coincidência de a falha ocorrer também em outro formulário mais antigo, mas ambos eram falhas de meus scripts.

Compartilha seu displayfields e Script.js caso possua, talvez consiga identificar algum problema

---
