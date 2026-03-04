# Bloquear opção de excluir anexo em uma atividade específica

> **Fonte:** [https://fluiggers.com.br/t/bloquear-opcao-de-excluir-anexo-em-uma-atividade-especifica/1006](https://fluiggers.com.br/t/bloquear-opcao-de-excluir-anexo-em-uma-atividade-especifica/1006)
> **Categoria:** BPM
> **Tags:** `processo`, `anexo`
> **Criado em:** 05/04/2022, 14:25
> **Visualizações:** 927 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Victor Castro** (@victorcastro) — 05/04/2022, 14:25

Tenho um processo onde algumas atividades precedem a atividade **VALIDAR INSPEÇÃO**.

Não faz sentido permitir que o usuário possa excluir/editar/inserir anexos depois da inspeção ter sido aprovada. Queria permitir que isso fosse feito somente até a atividade de validação.

Vi que tem a aba “Segurança Anexos” no fluig studio, mas não fala nada sobre uma atividade específica. Alguém tem ideia de como posso fazer isso?

---

## Resposta #1

**Lucas** (@lucasouza) — 07/10/2022, 09:14

Você conseguiu solucionar esse problema? Estou tentando bloquear da mesma forma e não estou conseguindo

---

## Resposta #2

**Victor Castro** (@victorcastro) — 07/10/2022, 09:47

Não consegui resolver em uma atividade específica. Mas eclipse tem uma aba “Segurança Anexos” que você pode fazer algumas validações por lá. Mas não fala nada sobre em uma determinada atividade.

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Thiago Brianez** (@tbrianez) — 26/01/2023, 18:14 | ❤️ 1

Uma **ALTERNATIVA** seria ocultar os botões da aba Anexos.

No seu **displayFields**

```auto
> var atividade = getValue("WKNumState");
> var tipoExec= form.getFormMode();

> form.setValue('tipoExecDF', tipoExec);
> form.setValue('atividadeAtualDF', atividade);
```

No seu **Script**

```javascript
let tipoExecDF = $("#tipoExecDF").val();
let atividadeAtualDF = $("#atividadeAtualDF").val();

console.log("tipoExecDF: " + tipoExecDF);
console.log("atividadeAtualDF: " + atividadeAtualDF);

	if (atividadeAtualDF== "5" && tipoExecDF == "VIEW"){
			window.parent.$("[data-attachments-load]").hide();
			window.parent.$("[data-attachments-load-ged]").hide();
			window.parent.$("[data-attachments-download-attach]").hide();
			window.parent.$("[data-attachments-remove-attach]").hide();
	}
```

Pra entender o [getFormMode()](https://tdn.totvs.com/pages/releaseview.action?pageId=662892312), recomendo ler o TDN da Totvs, a condição que eu passo é pra ocultar em modo de visualização “VIEW”.

Não é uma forma de fazer o “bloqueio”, mas atende. Lembrando que pode haver alteração dos IDs desses botões, ai já sabem né. :sweat_smile:

---
