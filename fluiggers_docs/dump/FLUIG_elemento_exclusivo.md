# FLUIG elemento exclusivo

> **Fonte:** [https://fluiggers.com.br/t/fluig-elemento-exclusivo/2077](https://fluiggers.com.br/t/fluig-elemento-exclusivo/2077)
> **Categoria:** BPM
> **Tags:** `processo`
> **Criado em:** 26/07/2023, 10:05
> **Visualizações:** 668 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**joaopretti** (@joaopretti) — 26/07/2023, 10:05

Galera tô com uma dúvida e gostaria de ouvir sugestões

Tenho um processo onde em determinado momento o meu gestor precisa aprovar ou mandar o solicitante rever o formulário por meio de um checkbox para validar.

E eu preciso usar o Elemento Exclusivo, porem não tenho noção de como usa-lo, poderia me dar uma luz por favor? eu não acho em lugar nenhum.

Oque recomendariam?

---

## Resposta #1

**Eduardo Vantini Neto** (@eduardo.vantini) — 26/07/2023, 11:29

Olá, tudo bem?
Vou colocar um exemplo aqui, usando o switch no checkbox ([TOTVS Fluig Developer](https://style.fluig.com/components.html#switch)).

**Checkbox:**

```auto
<div class="row form-group">
	<div class="col-md-4">
		<label for="chkAprovacao" class="control-label">Aprovado?</label>
		<p><input type="checkbox" id="chkAprovacao" name="chkAprovacao" data-on-color="success" data-off-color="danger" data-on-text="Sim" data-off-text="Não" switch-chekbox></p>
	</div>
</div>
```

**JS:**

```auto
FLUIGC.switcher.init("#chkAprovacao");
```

**Exclusivo:**

![image](https://fluiggers.com.br/uploads/default/original/2X/a/a09e9989639ac0243309f5ef053a0209fa264a43.png)

**Condição:**
**Sim:**
![image](https://fluiggers.com.br/uploads/default/original/2X/7/7a9c1acc6dc80119a791d1493fae9e8eb7962d01.png)

**Não:**
![image](https://fluiggers.com.br/uploads/default/original/2X/d/d5dda8bb829ef231a98d5622521c2f77d042fc0f.png)

Testa assim que deve funcionar.

Abs

---

## Resposta #2

**joaopretti** (@joaopretti) — 26/07/2023, 11:59

Muito obrigado! de verdade, isso me ajudou de um jeito inexplicável!!!

Só tenho mais uma duvida, na hora de criar o evento js, qual nome devo colocar no Script Fluig?

![image](https://fluiggers.com.br/uploads/default/optimized/2X/b/bc4e854bea91b7b7d2c443a81d44cf646577612c_2_690x331.jpeg)

Aqui ele ainda me da opção mesmo com o check marcado, pra quem eu tenho que mandar caso eu queria, ele nao vai direto para o fim.

---

## Resposta #3

**joaopretti** (@joaopretti) — 26/07/2023, 12:11

![image](https://fluiggers.com.br/uploads/default/optimized/2X/c/c792e43806b3494941558737b489c664f98619bb_2_690x301.jpeg)

Fiz desse jeito.

---

## Resposta #4

**Eduardo Vantini Neto** (@eduardo.vantini) — 26/07/2023, 15:03

Coloca no formulário mesmo… ou em um js separado… tipo assim:

![image](https://fluiggers.com.br/uploads/default/original/2X/9/99b29fe5d79972c8bdcccec6d8ef6d549cac4336.png)

No main.js

```auto
$(document).ready(function() {
	FLUIGC.switcher.init("#chkAprovacao");
});
```

E referencia o main.js no html

![image](https://fluiggers.com.br/uploads/default/original/2X/9/901339e40aadd42fda03066637cc9a9aaddcf123.png)

Assim, quando carregar o form ele transforma o checkbox em switch

Abs

---

## Resposta #5 ✅ RESPOSTA ACEITA

**joaopretti** (@joaopretti) — 26/07/2023, 17:24

Obrigado! eu tentei de um jeitinho um pouco diferente e funcionou!!!

é mto escasso achar esse tipo de conteúdo na internet hoje. Você me ajudou demais!!!

Você usa discord? queria bater um papo sadio sobre o fluig em geral

---
