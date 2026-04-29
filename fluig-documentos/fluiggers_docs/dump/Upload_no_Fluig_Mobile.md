# Upload no Fluig Mobile

> **Fonte:** [https://fluiggers.com.br/t/upload-no-fluig-mobile/3500](https://fluiggers.com.br/t/upload-no-fluig-mobile/3500)
> **Categoria:** Formulários
> **Tags:** `processo`, `mobile`
> **Criado em:** 12/11/2025, 15:14
> **Visualizações:** 36 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**João Paulo Machado Benevides** (@Joao_Paulo_Machado_B) — 12/11/2025, 15:14 | ❤️ 1

Boa tarde, eu gostaria de saber se é possível fazer um campo de upload direto no formulário, porém funcional no My Fluig (aplicativo Mobile) procurando sobre achei alguns materiais sobre porém somente para o Fluig Web, não encontrei algo para o mobile

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Igor Rodrigues** (@fluigor.com.br) — 14/11/2025, 10:32

Fala [@Joao\_Paulo\_Machado\_B](/u/joao_paulo_machado_b)

o show Camera não te ajudou?

-   ```javascript
    function showCamera(param) {JSInterface.showCamera(param);}
    ```
    ```yaml
    <div class="col-md-2">
    								<button type="button" class="btn btn-success" name="documentosChecklist" id="documentosChecklist" onclick="showCamera();">
    									<i class="fluigicon fluigicon-paperclip"></i> Anexar Documentos Checklist
    								</button>
    ```

---
