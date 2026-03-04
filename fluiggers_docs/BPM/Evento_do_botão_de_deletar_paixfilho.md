# Evento do botão de deletar paixfilho

> **Fonte:** [https://fluiggers.com.br/t/evento-do-botao-de-deletar-paixfilho/130](https://fluiggers.com.br/t/evento-do-botao-de-deletar-paixfilho/130)
> **Categoria:** BPM
> **Criado em:** 16/03/2021, 10:41
> **Visualizações:** 1869 | **Likes:** 9 | **Respostas:** 0

---

## Pergunta original

**Eliézer Gimenes** (@Eliezergimenes) — 16/03/2021, 10:41 | ❤️ 1

Bom dia.

Alguém sabe dizer como posso disparar um evento no JS do form quando clicar naquele botão de excluir/“lixeira” em um paixfilho?

---

## Resposta #1

**Eduardo Vantini Neto** (@eduardo.vantini) — 16/03/2021, 11:16 | ❤️ 3

Olá, acredito que a melhor solução é criar um botão customizado.
Faz assim:

Na criação da tabela coloca a propriedade nodeletebutton=“true”

**Cria uma botão igual ao padrão:**
i class=“fluigicon fluigicon-trash fluigicon-md” style=“cursor: pointer;” onclick=“removeRow(this)”> /i

**Funação removRow():**

```javascript
function removeRow(element) {
		/*

			seu código aqui

		*/

		/* Função para remover a linha */
		fnWdkRemoveChild(element)
	}

Isso vai funcionar.

Abs
```

---

## Resposta #2

**Victor Castro** (@victorcastro) — 16/03/2021, 11:18 | ❤️ 4

Você pode customizar a função de delete. Conheço duas formas de fazer.

**1\. Você pode usar o botão de delete padrão**

HTML

```auto
<table id="tabela" tablename="tabela" customFnDelete="fnCustomDelete(this)">
```

JS

```javascript
function fnCustomDelete(oElement){
        // Implementar função

        // Revomer o registro filho
        fnWdkRemoveChild(oElement);
        console.log("Filho eliminado!");
    }
```

**2\. Ou você pode criar um botão da forma que desejar e colocar o script nele (eu costumo usar dessa forma)**

![image](https://fluiggers.com.br/uploads/default/original/1X/29f30a4cbe0ef962d4ec06ddf3f5b45a2b410cef.png)

Neste caso, no *onclick* eu só chamei o evento de deletar o filho, mas quando preciso rodar algum script eu crio uma função e coloco ali.

Espero ter ajudado.

---

## Resposta #3

**Gabriel Melo** (@gabrielmelo_1) — 20/04/2022, 11:06 | ❤️ 1

$(document).on(“click”, “.fluigicon-trash”, e => fnWdkRemoveChild(e.target))

---
