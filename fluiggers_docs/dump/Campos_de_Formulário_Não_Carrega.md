# Campos de Formulário Não Carrega

> **Fonte:** [https://fluiggers.com.br/t/campos-de-formulario-nao-carrega/3305](https://fluiggers.com.br/t/campos-de-formulario-nao-carrega/3305)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`
> **Criado em:** 12/06/2025, 10:14
> **Visualizações:** 30 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Artur Alves** (@artur.alves) — 12/06/2025, 10:14

Bom dia, pessoal!

Estou com uma dificuldade que já enfrentei no passado, mas tive que deixar de lado a mesma devido a urgência da demanda, porém, ela surgiu novamente kkkkk

Que seria o seguinte:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/b/b0d4eaf404f76e33d52e06edc88544ff98ed8822_2_690x163.png)

Criei essa tabela no fluig, com campos definidos, ou seja, não será necessário adicionar nenhuma linha como de costume, haja vista que serão somente 7 linhas, sendo essas que estão na imagem.
Porém, ao informar os campos que há dentro dela, na próxima etapa ele me retorna esses campos vazios…

Acredito que seja por eu ter definido o nome dos campos das linhas e ele não criar um index, como “NomeDoCampo\_\_\_1” e etc.

Segue o código:

```auto
<!-- SEGUNDO PAINEL (TABELA) -->
				<div class="panel panel-primary panel-table">
					<div class="panel-heading">
						<h6 class="panel-title">
							<i class="flaticon flaticon-card-user icon-sm" aria-hidden="true"></i> Dados do check-list
						</h6>
					</div>
					<div class="panel-body" style="padding: 0 0 10 0;" id="table_checklist">
						<table tablename="checklist" id="checklist" class="table table-striped table-condensed" nodeletebutton="true" noaddbutton="true">
							<thead>
								<tr detail="true" detailname="checklist" class="header-row">
									<th style="min-width: 150px">Check List</th>
									<th style="min-width: 100px">Stt. Item</th>
									<th style="min-width: 100px">Nº Inventário</th>
									<th style="min-width: 100px">Patrimônio</th>
									<th style="min-width: 450px">Observações</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td class="title-cell">1. Teclado</td>
									<td>
										<div class="form-input">
											<select name="stt_teclado" id="stt_teclado" onchange="" class="form-control input-sm table-field stt-item">
												<option value="">Selecione...</option>
												<option value="ok">Ok</option>
												<option value="nok">Não Ok</option>
											</select>
										</div>
									</td>
									<td>
									</td>
									<td>
									</td>
									<td>
										<div class="form-input">
											<input autocomplete="off" type="text" name="obs_teclado" id="obs_teclado" class="form-control input-sm table-field block-itens">
										</div>
									</td>
								</tr>
								<tr>
									<td class="title-cell">2. Mouse</td>
									<td>
										<div class="form-input">
											<select name="stt_mouse" id="stt_mouse" onchange="" class="form-control input-sm table-field stt-item">
												<option value="">Selecione...</option>
												<option value="ok">Ok</option>
												<option value="nok">Não Ok</option>
											</select>
										</div>
									</td>
									<td>
									</td>
									<td>
									</td>
									<td>
										<div class="form-input">
											<input autocomplete="off" type="text" name="obs_mouse" id="obs_mouse" class="form-control input-sm table-field block-itens">
										</div>
									</td>
								</tr>
								<tr>
									<td class="title-cell">3. Leitor Cód. Barras</td>
									<td>
										<div class="form-input">
											<select name="stt_leitor" id="stt_leitor" onchange="" class="form-control input-sm table-field stt-item">
												<option value="">Selecione...</option>
												<option value="ok">Ok</option>
												<option value="nok">Não Ok</option>
											</select>
										</div>
									</td>
									<td>
									</td>
									<td>
									</td>
									<td>
										<div class="form-input">
											<input autocomplete="off" type="text" name="obs_leitor" id="obs_leitor" class="form-control input-sm table-field block-itens">
										</div>
									</td>
								</tr>
								<tr>
									<td class="title-cell">4. Impressora térmica</td>
									<td>
										<div class="form-input">
											<select name="stt_impressora" id="stt_impressora" onchange="" class="form-control input-sm table-field stt-item">
												<option value="">Selecione...</option>
												<option value="ok">Ok</option>
												<option value="nok">Não Ok</option>
											</select>
										</div>
									</td>
									<td>
										<div class="form-input">
											<input autocomplete="off" type="text" name="inventario_impressora" id="inventario_impressora" class="form-control input-sm table-field block-itens">
										</div>
									</td>
									<td>
										<div class="form-input">
											<input autocomplete="off" type="text" name="patrimonio_impressora" id="patrimonio_impressora" class="form-control input-sm table-field block-itens">
										</div>
									</td>
									<td>
										<div class="form-input">
											<input autocomplete="off" type="text" name="obs_impressora" id="obs_impressora" class="form-control input-sm table-field block-itens">
										</div>
									</td>
								</tr>
								<tr>
									<td class="title-cell">5. Monitor</td>
									<td>
										<div class="form-input">
											<select name="stt_monitor" id="stt_monitor" onchange="" class="form-control input-sm table-field stt-item">
												<option value="">Selecione...</option>
												<option value="ok">Ok</option>
												<option value="nok">Não Ok</option>
											</select>
										</div>
									</td>
									<td>
									</td>
									<td>
									</td>
									<td>
										<div class="form-input">
											<input autocomplete="off" type="text" name="obs_monitor" id="obs_monitor" class="form-control input-sm table-field block-itens">
										</div>
									</td>
								</tr>
								<tr>
									<td class="title-cell">6. CPU</td>
									<td>
										<div class="form-input">
											<select name="stt_cpu" id="stt_cpu" onchange="" class="form-control input-sm table-field stt-item">
												<option value="">Selecione...</option>
												<option value="ok">Ok</option>
												<option value="nok">Não Ok</option>
											</select>
										</div>
									</td>
									<td>
										<div class="form-input">
											<input autocomplete="off" type="text" name="inventario_cpu" id="inventario_cpu" class="form-control input-sm table-field block-itens">
										</div>
									</td>
									<td>
										<div class="form-input">
											<input autocomplete="off" type="text" name="patrimonio_cpu" id="patrimonio_cpu" class="form-control input-sm table-field block-itens">
										</div>
									</td>
									<td>
										<div class="form-input">
											<input autocomplete="off" type="text" name="obs_cpu" id="obs_cpu" class="form-control input-sm table-field block-itens">
										</div>
									</td>
								</tr>
								<tr>
									<td class="title-cell">7. Limpeza</td>
									<td>
										<div class="form-input">
											<select name="stt_limpeza" id="stt_limpeza" onchange="" class="form-control input-sm table-field stt-item">
												<option value="">Selecione...</option>
												<option value="ok">Ok</option>
												<option value="nok">Não Ok</option>
											</select>
										</div>
									</td>
									<td>
										<div class="form-input">
											<input autocomplete="off" type="text" name="inventario_limpeza" id="inventario_limpeza" class="form-control input-sm table-field block-itens">
										</div>
									</td>
									<td>
										<div class="form-input">
											<input autocomplete="off" type="text" name="patrimonio_limpeza" id="patrimonio_limpeza" class="form-control input-sm table-field block-itens">
										</div>
									</td>
									<td>
										<div class="form-input">
											<input autocomplete="off" type="text" name="obs_limpeza" id="obs_limpeza" class="form-control input-sm table-field block-itens">
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
```

Alguém já passou por isso?

---
