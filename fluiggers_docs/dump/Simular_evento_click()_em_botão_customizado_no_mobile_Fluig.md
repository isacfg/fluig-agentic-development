# Simular evento click() em botão customizado no mobile Fluig

> **Fonte:** [https://fluiggers.com.br/t/simular-evento-click-em-botao-customizado-no-mobile-fluig/1931](https://fluiggers.com.br/t/simular-evento-click-em-botao-customizado-no-mobile-fluig/1931)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`, `mobile`
> **Criado em:** 23/05/2023, 15:31
> **Visualizações:** 238 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Rafael Oliveira** (@roliveira) — 23/05/2023, 15:31

Boa tarde amigos!
Alguém já conseguiu simular o evento de click() do botão Enviar do Fluig com um botão customizado no formulário e fazer isso funcionar no app mobile?
Isso é possível?
Tenho tentado sem sucesso utilizando da seguinte forma:
window.parent.$(‘button\[data-send\]’).first().click();
$(“#workflowActions > button:first-child”, parent.document).click();

---
