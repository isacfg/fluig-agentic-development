# Campos readonly

> **Fonte:** [https://fluiggers.com.br/t/campos-readonly/3485](https://fluiggers.com.br/t/campos-readonly/3485)
> **Categoria:** Formulários
> **Criado em:** 31/10/2025, 10:48
> **Visualizações:** 39 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**João Paulo Machado Benevides** (@Joao_Paulo_Machado_B) — 31/10/2025, 10:48

Como eu poderia através do fluig, definir que um ou mais campos fiquem disponível para serem editáveis no formulário na etapa de inicio da solicitação, mas nas demais etapas ele seja exibido mas fique bloqueado (readonly) ? é possível fazer isso com a tabela pai e filho tambem ? no inicio o solicitante poder adicionar novas linhas, incluir informação, mas nas etapas seguintes não ser possível adicionar linhas, excluir linhas e nem editar oque foi informado ?

---

## Resposta #1

**Pietro** (@pietro) — 03/11/2025, 11:26

Bom dia,

Tem vários métodos, alguns mais chatos e outros mais fáceis.

Acho que pra um iniciante o ideal seria no HTML definir o input como “READONLY”, e ao carregar a página, durante a atividade inicial, retirar o atributo com removeAttribute(‘readonly’).

Nesse exemplo, seria document.getElementById(“id-do-seu-input”).removeAttribute(‘readonly’)

Pode por no displayFields, ou dentro do seu window.onload = function () { }

Se for usar isso, recomendo criar uma função no display fields que retorna a atividade atual, e dentro do window.onload usar ela pra validar qual a atividade atual.

Adiciona isso no teu DisplayFields:

```javascript
customHTML.append("function atividadeAtual() { return number('" + getValue("WKNumState") + "'); }\n");
```

`E isso no teu arquivo de javascript:`

```javascript
window.onload = function () {
	try {
		const atividade = atividadeAtual();

		// ========================= Início ===============================
		if (atividade == 0 || atividade == 4) {
            document.getElementById(“id-do-seu-input”).removeAttribute('readonly');
        }
    } catch (e) {
        console.error("Erro no window.onload!", e)
    }
}
```

Um outro método é usar o script “EnableFields”, que você pode ver qual a atividade atual e ativar/desativar um campo, mas ai precisa deixar ele sem o atributo ReadOnly.

Isso desativa fixamente o input, então é recomendado cuidar com o uso.

```javascript
var atividade = parseInt(getValue("WKNumState"));

form.setEnabled("ID-DO-SEU-CAMPO", false);

if(atividade == 0 || atividade == 4)
   form.setEnabled("ID-DO-SEU-CAMPO", true);
```

Recomendo dar uma olhada nos cursos da Fluig Academy, é superficial, mas abrange essa sua dúvida e diversas outras coisas, muita coisa é faltante nas FAQs e estão lá nos cursos, e recomendo dar uma pesquisada também, essa dúvida é bem simples e qualquer forúm/FAQ tem a resposta.

Att.

---

## Resposta #2

**João Paulo Machado Benevides** (@Joao_Paulo_Machado_B) — 03/11/2025, 11:38 | ❤️ 1

Obrigado pela ajuda, estava acompanhando os cursos do fluig academy, mas exatamente essa função de esconder os campos pelo eclipse não consegui encontra sobre, acredito que seja por terem atualizado alguns conteúdos e outros não. De qualquer forma agradeço pela ajuda

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 04/11/2025, 17:13

O formulario possui um evento chamado enableFields.js

dentro da pasta events crie o arquivo enabledFields.js

```javascript
function enableFields(form){
    var atividadeAtual = getValue('WKNumState');
	if (atividadeAtual >4 ){
        var mapaForm = new java.util.HashMap();
        var habilitar = false; // Variável para habilitar/desabilitar os campos
        mapaForm = form.getCardData();
        var it = mapaForm.keySet().iterator();
        while (it.hasNext()) { // Laço de repetição para habilitar/desabilitar os campos
            var key = it.next();
            form.setEnabled(key, habilitar);
        }
	}
}
```

no exemplo acima eu bloqueio todos os campos do formulario no caso em que o numero da atividade é maior que 4 normalmente a atividade inicial tem o codigo 4 e na abertura do processo ele vale zero e caso retorne a atividade inicial ela passa a ser 4 (confira no eclipse).

---
