# Aplicar mascaras em campos de um datatable em edição

> **Fonte:** [https://fluiggers.com.br/t/aplicar-mascaras-em-campos-de-um-datatable-em-edicao/3172](https://fluiggers.com.br/t/aplicar-mascaras-em-campos-de-um-datatable-em-edicao/3172)
> **Categoria:** Widgets
> **Tags:** `mustache`, `datatable`
> **Criado em:** 24/02/2025, 21:29
> **Visualizações:** 53 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Wasley Santos** (@Wasley_Santos) — 24/02/2025, 21:29

Galera
Alguém sabe como faço para aplicar uma mascara em campos de um datatable que foram criados a partir de um mustache.
Estou precisando aplicar a mascara para edição de campos mas quando tento implementar a mascara fica como um valor fixo não permitindo a edição

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 25/02/2025, 11:43

Tenta chamar `MaskEvent.init()` pra fazer o Fluig varrer o HTML novamente reaplicando as máscaras.

---
