# Recuperar campo checkbox de tabela pai x filho

> **Fonte:** [https://fluiggers.com.br/t/recuperar-campo-checkbox-de-tabela-pai-x-filho/414](https://fluiggers.com.br/t/recuperar-campo-checkbox-de-tabela-pai-x-filho/414)
> **Categoria:** Formulários
> **Criado em:** 30/04/2021, 16:31
> **Visualizações:** 604 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Wasley Santos** (@Wasley_Santos) — 30/04/2021, 16:31

galera to levando uma surra aqui de um campo checkbox em uma tabela pai x filho
não to conseguindo recuperar se ele foi marcado

será q to fazendo algo errado
código html

input type=“checkbox” id=“selecionado” name=“selecionado” value=“ok”

evento de formulário
var indexes = form.getChildrenIndexes(“tbcontratos”);
for (var i = 0 ; i < indexes.length; i++){
var selecionado = form.getValue(“selecionado\_\_\_” + indexes\[i\]);
throw "campo selecionado " + selecionado;
}

---
