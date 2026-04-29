# Como selecionar radio e habilitar campo readonly?

> **Fonte:** [https://fluiggers.com.br/t/como-selecionar-radio-e-habilitar-campo-readonly/1012](https://fluiggers.com.br/t/como-selecionar-radio-e-habilitar-campo-readonly/1012)
> **Categoria:** Formulários
> **Criado em:** 07/04/2022, 16:05
> **Visualizações:** 1074 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Filipe Silva** (@ferilva89) — 07/04/2022, 16:05

PessoALL, boa tarde!

![image](https://fluiggers.com.br/uploads/default/original/1X/8846dbecee33709078aa4ea850176823226aa3fb.png)

```auto
<div class="form-field" data-type="radio" data-show-properties="" data-field-name="rprioridade" style="position: relative; left: 0px; top: 0px;">
			<div class="form-input">
			<div class="form-group">
				<label>PRIORIDADE:</label>
				<span class="required text-danger"><strong>*</strong></span>
					<div class="radio-options">
					<div class="radio">
						<label>
							<input type="radio" name="rprioridade" value="A - EMERGENTE (IMEDIATO)" required="required">A - EMERGENTE (IMEDIATO)
						</label>
					</div>
					<div class="radio">
						<label>
							<input type="radio" name="rprioridade" value="B - URGENTE (24 HORAS)" required="required">B - URGENTE (24 HORAS)
						</label>
					</div>
					<div class="radio">
						<label>
							<input type="radio" name="rprioridade" value="C - PROGRAMADO" required="required">C - PROGRAMADO
						</label>
					</div>
					</div>
			</div>
			</div>
		</div>
		<div class="form-field" data-type="date" data-show-properties="" data-field-name="dateprogram" style="position: relative; left: 0px; top: 0px;">
			<div class="form-input">
			<div class="form-group">
				<label>DATA PROGRAMADA:</label>
					<input id="date6" name="dateprogram" type="text" class="form-control" data-date="" required="required" style="width: 20%;" readonly>
				</div>
			</div>
		</div>
```

Estou tentando algumas opções aqui, mas sem sucesso.

```auto
function enableFields(form) {
	var activity = getValue('WKNumState');
	if (activity == 18) {
		form.setEnabled('tnumcracha', false);
		form.setEnabled('tnomsolic', false);
		form.setEnabled('tsetorsolic', false);
		form.setEnabled('tmaqequip', false);
		form.setEnabled('requipstop', false);
		form.setEnabled('rprioridade', false);
		form.setEnabled('dateprogram', false);
		form.setEnabled('tfalha', false);
	}
	if (activity == 15) {
		form.setEnabled('tnumcracha', false);
		form.setEnabled('tnomsolic', false);
		form.setEnabled('tsetorsolic', false);
		form.setEnabled('tmaqequip', false);
		form.setEnabled('requipstop', false);
		form.setEnabled('rprioridade', false);
		form.setEnabled('dateprogram', false);
		form.setEnabled('tfalha', false);
		form.setEnabled('caprovado', false);
		form.setEnabled('tmotivo', false);
        $("[name='rprioridade']").click(() => {
			if ($("#programado").is(":checked")) {//RADIO COM A OPÇÃO SIM
				$("#dateprogram").removeAttr('readonly');
			} else {
				$("#dateprogram").attr('readonly', true);
			}
		});
	}
}
```

Como faço para habilitar o campo de DATA PROGRAMADA ao usuário selecionar a opção C - PROGRAMADO no radio?

---

## Resposta #1

**Filipe Silva** (@ferilva89) — 08/04/2022, 14:22

Tentei de outra forma e consegui fazer funcionar, porém só quando carrega o form. Se eu altarar o radio em execução, não consigo alterar…

```auto
if (activity == 2 || activity == 0) {
		if (form.getValue("rprioridade") == "C") {
			form.setEnabled('dateprogram', true);
			}
		else {
			form.setEnabled('dateprogram', false);
			}
	}
```

O que utilizao para passar por essa condição no clique, não apenas no carregamento do form?

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 19/04/2022, 09:14

displayFields e enableFields são eventos disparados no back-end, então tudo que você fizer neles é válido somente para quando carregar o formulário. E não é possível usar JQuery ou qualquer lib de front-end nesses eventos.

No seu caso você precisa criar os eventos em front-end, usando o JS no próprio formulário (colocando direto no HTML ou carregando o arquivo JS no HTML).

Você pode usar JS normalmente, inclusive usar a JQuery que já vem com o Fluig, pra facilitar o vínculo dos eventos e manipulação dos elementos.

---
