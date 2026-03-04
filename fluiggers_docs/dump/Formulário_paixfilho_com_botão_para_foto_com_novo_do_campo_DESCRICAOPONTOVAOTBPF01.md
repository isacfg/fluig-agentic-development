# Formulário paixfilho com botão para foto com novo do campo DESCRICAOPONTOVAOTBPF01

> **Fonte:** [https://fluiggers.com.br/t/formulario-paixfilho-com-botao-para-foto-com-novo-do-campo-descricaopontovaotbpf01/1645](https://fluiggers.com.br/t/formulario-paixfilho-com-botao-para-foto-com-novo-do-campo-descricaopontovaotbpf01/1645)
> **Categoria:** Formulários
> **Tags:** `paixfilho`
> **Criado em:** 17/02/2023, 07:59
> **Visualizações:** 383 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Uilian Gurjon** (@Uilian_Gurjon) — 17/02/2023, 07:59

Bom dia,
Amigos, eu estou tentando criar um botão para chamar a função da câmera em um pai x filho, porém gostaria de identificar o anexo com o conteúdo do campo DESCRICAOPONTOVAOTBPF01.

Obrigado!

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 17/02/2023, 10:57

Bom dia

Aqui a chamada do show camera

```auto
function showCamera(parameter) {
	JSInterface.showCamera(parameter);
}
```
```auto
<form name="form" role="form">
				<button onclick='showCamera($("#DESCRICAOPONTOVAOTBPF01).val())'>Anexar</button>
			</form>
```

Vale lembrar que se esse campo DESCRICAOPONTOVAOTBPF01 for um campo pai filho vc vai ter que modificar o index de acordo com a linha

Espero ter ajudado.

---

## Resposta #2

**Uilian Gurjon** (@Uilian_Gurjon) — 17/02/2023, 13:42

Boa tarde, a modificação seria nessa chamada?

```auto
<form name="form" role="form">
				<button onclick='showCamera($("#DESCRICAOPONTOVAOTBPF01).val())'>Anexar</button>
			</form>
```

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 17/02/2023, 13:55

Exato,
è nesse local mesmo

---
