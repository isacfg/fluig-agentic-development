# Table desalinhada

> **Fonte:** [https://fluiggers.com.br/t/table-desalinhada/421](https://fluiggers.com.br/t/table-desalinhada/421)
> **Categoria:** Formulários
> **Criado em:** 04/05/2021, 16:57
> **Visualizações:** 518 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Julio Cesar Campos de Andrade** (@JCANDRADE) — 04/05/2021, 16:57

Pessoal boa tarde!
Estou criando uma table simples, porém as TD não estão alinhadas com as TH.

```auto
<table  class="table" id="dashCompOfertas">
										<thead>
											<tr>
												<th>Descrição</th>
												<th>Valor Unitário</th>
												<th>Licenciamento</th>
												<th>Recorrente?</th>
											</tr>
										<thead/>
										<tbody>
											<tr>
												<td>Produto</td>
												<td>100</td>
												<td>NÃO</td>
												<td>SIM</td>
											</tr>
										</tbody>
									</table>
```

Existe uma função que vai preencher a TD, porém adicionei na mão para tentar identificar o problema.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/b07ef8675a98af2902fdfd6d8327bb531a1c3394_2_690x37.png)

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Willian Laynes** (@Willian_Laynes) — 04/05/2021, 21:52 | ❤️ 1

Boa noite JCANDRADE,

O único erro ali é o fechamento da THEAD esta com a “/” no final o correto é /THEAD
o navegador vai acabar gerando dois blocos de TAG THEAD.
Caso não seja isso o melhor a fazer e inspecionar o o elemento do html para verificar se existe algum CSS alterando o css padrão da tabela.

---

## Resposta #2

**system** (@system) — 06/05/2021, 09:24

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
