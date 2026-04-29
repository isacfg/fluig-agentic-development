# Adicionar filhos a tabela

> **Fonte:** [https://fluiggers.com.br/t/adicionar-filhos-a-tabela/2503](https://fluiggers.com.br/t/adicionar-filhos-a-tabela/2503)
> **Categoria:** Ambiente Fluig
> **Tags:** `paixfilho`, `fluig`, `tabela`
> **Criado em:** 11/01/2024, 08:24
> **Visualizações:** 236 | **Likes:** 2 | **Respostas:** 3

---

## Pergunta original

**Artur Alves** (@artur.alves) — 11/01/2024, 08:24

Tenho uma tabela em que há dois cabeçalhos.

```auto
<thead>
								<tr class="tableHeadRow active" style="white-space: nowarp">
									<th class="tableColumn" style="text-align: center; border-right: 1px solid #d1d3d4;" colspan="2">Entradas do Dia</th>
									<th class="tableColumn" style="text-align: center; border-right: 1px solid #d1d3d4;" colspan="2">Atrasados</th>
									<th class="tableColumn" style="text-align: center; border-right: 1px solid #d1d3d4;" colspan="2">Carteira Total</th>
									<th class="tableColumn" style="text-align: center; border-right: 1px solid #d1d3d4;" colspan="2">Recebimento Antecipado</th>
								</tr>
								<tr class="tableHeadRow active" name="tHead2Receber" id="tHead2Receber">
									<th class="tableColumn" style="text-align: center;">Cliente</th>
									<th class="tableColumn" style="text-align: center; border-right: 1px solid #d1d3d4;">Valor</th>
									<th class="tableColumn" style="text-align: center;">Cliente</th>
									<th class="tableColumn" style="text-align: center; border-right: 1px solid #d1d3d4;">Valor</th>
									<th class="tableColumn" style="text-align: center;">Cliente</th>
									<th class="tableColumn" style="text-align: center; border-right: 1px solid #d1d3d4;">Valor</th>
									<th class="tableColumn" style="text-align: center;">Cliente</th>
									<th class="tableColumn" style="text-align: center; border-right: 1px solid #d1d3d4">Valor</th>
								</tr>
							</thead>
```

Dessa forma como esta acima, e, tem o corpo dela.

```auto
<tbody>
								<tr style="display:none" detail="true" detailname="contas_receber" class="tableBodyRow">
									<td style="vertical-align: middle; text-align: center; padding: 5px;">
										<div class="form-input">
											<input style="height: 25px; min-width: 375px" autocomplete="off" type="text" name="entrada_cliente" id="entrada_cliente" class="form-control input-sm table-field block-itens" readonly>
										</div>
									</td>
									<td style="vertical-align: middle; text-align: center; padding: 5px; border-right: 1px solid #d1d3d4;">
										<div class="form-input">
											<input style="height: 25px; min-width: 125px;" autocomplete="off" type="text" name="entrada_valor" id="entrada_valor" class="form-control input-sm table-field block-itens" readonly>
										</div>
									</td>
									<td style="vertical-align: middle; text-align: center; padding: 5px;">
										<div class="form-input">
											<input style="height: 25px; min-width: 375px" autocomplete="off" type="text" name="atrasado_cliente" id="atrasado_cliente" class="form-control input-sm table-field block-itens" readonly>
										</div>
									</td>
									<td style="vertical-align: middle; text-align: center; padding: 5px; border-right: 1px solid #d1d3d4;">
										<div class="form-input">
											<input style="height: 25px; min-width: 125px;" autocomplete="off" type="text" name="atrasado_valor" id="atrasado_valor" class="form-control input-sm table-field block-itens" readonly>
										</div>
									</td>
									<td style="vertical-align: middle; text-align: center; padding: 5px;">
										<div class="form-input">
											<input style="height: 25px; min-width: 375px" autocomplete="off" type="text" name="carteira_cliente" id="carteira_cliente" class="form-control input-sm table-field block-itens" readonly>
										</div>
									</td>
									<td style="vertical-align: middle; text-align: center; padding: 5px; border-right: 1px solid #d1d3d4;">
										<div class="form-input">
											<input style="height: 25px; min-width: 125px;" autocomplete="off" type="text" name="carteira_valor" id="carteira_valor" class="form-control input-sm table-field block-itens" readonly>
										</div>
									</td>
									<td style="vertical-align: middle; text-align: center; padding: 5px;">
										<div class="form-input">
											<input style="height: 25px; min-width: 375px" autocomplete="off" type="text" name="recebimento_cliente" id="recebimento_cliente" class="form-control input-sm table-field block-itens" readonly>
										</div>
									</td>
									<td style="vertical-align: middle; text-align: center; padding: 5px; border-right: 1px solid #d1d3d4;">
										<div class="form-input">
											<input style="height: 25px; min-width: 125px;" autocomplete="off" type="text" name="recebimento_valor" id="recebimento_valor" class="form-control input-sm table-field block-itens" readonly>
										</div>
									</td>
								</tr>
							</tbody>
```

Dessa forma. Porém, quando vou adicionar um filho a ela com a função **wdkAddChild** o mesmo adiciona a linha dois do cabeçalho.
Ficando dessa forma:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/4/4c5e98b408bf495d518037c9573d8adb050e0d50_2_690x140.png)

Alguém conseguiria me ajudar? Tentei referenciar o tbody na função de adicionar filhos, porém, ele solicita apenas o nome da tabela.

Obs.: No HTML quando exporto o formulário para o servidor, ele vem dessa forma:

![image](https://fluiggers.com.br/uploads/default/original/2X/6/626f6ee938dfda756e961d1f5e723da07b8023b5.png)

Com algumas classes e outras tags que não defini no formulário pelo eclipse.

Detalhe: A segunda linha por padrão ela vem em estado de hide (escondido), inseri no código um .show() no carregamento da página, por isso aparece a segunda linha.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Artur Alves** (@artur.alves) — 11/01/2024, 09:33 | ❤️ 1

Consegui resolver.

Pra quem estiver com esse mesmo problema, eu removi atráves do JS as propriedades (detail, detailname) da segunda tag do cabeçalho e removi o name e o id também, manipulando ele pela classe.

```javascript
$(document).ready(function() {
	$(".tHead2Receber").show();
	document.querySelector("#contas_receber > thead > tr.tableHeadRow.active.tHead2Receber").removeAttribute("detail","detail")
	document.querySelector("#contas_receber > thead > tr.tableHeadRow.active.tHead2Receber").removeAttribute("detailname","detailname")
}
```

Agora no momento de adicionar, ele adiciona o tr que esta no tbody, que é o certo, pois são os inputs da tabela!

---

## Resposta #2

**Allan Reichert** (@allan.reichert) — 12/01/2024, 07:49 | ❤️ 1

Olá, uma sugestão também é utilizar divs. Quando a tabela é muito detalhada, deixo o cabeçalho em branco e coloco divs dentro da td, assim dimensiono os campos e faço quebras de linha. Olha como fica:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/7/7fac564bfacc7ef2c97dfe7ba06564249e774511_2_588x500.png)

---

## Resposta #3

**Artur Alves** (@artur.alves) — 12/01/2024, 09:20

Caramba, não tinha pensado nessa possibilidade, interessante para se usar em algumas ocasiões como essa e fica bem legal o layout.

Esse símbolo de **\- (menos)** no canto superior direito, ele serve pra diminuir a div e deixar como se fosse apenas uma linha?

---

## Resposta #4

**Allan Reichert** (@allan.reichert) — 15/01/2024, 09:01

Sim, a mesma função que é utilizada para remover a linha da tabela, no caso a div e o botão “remover” ficam dentro da td, que seria a linha da tabela.

---
