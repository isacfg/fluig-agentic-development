# Não deixar selecionar dois rádios diferentes

> **Fonte:** [https://fluiggers.com.br/t/nao-deixar-selecionar-dois-radios-diferentes/1234](https://fluiggers.com.br/t/nao-deixar-selecionar-dois-radios-diferentes/1234)
> **Categoria:** Formulários
> **Criado em:** 18/08/2022, 14:46
> **Visualizações:** 263 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Daniela** (@daniela.troggian) — 18/08/2022, 14:46

Pessoal, boa tarde
Sou nova no fluig e gostaria de saber se alguém sabe me dar uma dica de como colocar um evento em um radio para deixar a pessoal escolher só uma opção.

---

## Resposta #1

**Jonathan Albuquerque** (@Jonathan.Albuquerque) — 18/08/2022, 16:43

Veja se isso lhe atende:

```auto
<div class="row">
	<div class="col-lg-12">
		<label>Tipo:</label>
		<label class="radio-inline">
			<input type="radio" name="rd_Tipo" value="Nova" />
			Nova
		</label>
		<label class="radio-inline">
			<input type="radio" name="rd_Tipo" value="Ampliação"  />
			Ampliação
		</label>
		<label class="radio-inline">
			<input type="radio" name="rd_Tipo" value="Adequação" />
			Adequação
		</label>
	</div>
</div>
```

E para resgatar o valor selecionado você pode utilizar:

```auto
document.querySelector('input[name=rd_Tipo]:checked').value
```

---
