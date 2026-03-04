# Alterando campo fluig mobile

> **Fonte:** [https://fluiggers.com.br/t/alterando-campo-fluig-mobile/1066](https://fluiggers.com.br/t/alterando-campo-fluig-mobile/1066)
> **Categoria:** Mobile
> **Criado em:** 04/05/2022, 09:43
> **Visualizações:** 520 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 04/05/2022, 09:43

Inicio um processo com fluig mobile e na atividade seguinte devo(o mesmo usuário que iniciou o processo) alterar um campo específicos. Porém ao acessar o formulário é como se os campos fossem somente readonly e não consigo alterar.

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 04/05/2022, 14:28

Mobile é um caso muiiiiiiiittttttttooooooo delicado no Fluig [@daniel\_fmartins](/u/daniel_fmartins)

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 05/05/2022, 09:25

Comece limpando seu enablefields e testando como se comporta se o campo vai aparecer para edição. Dai parta para os bloqueios campo a campo. se for so um campo liberado e o resto bloqueado tenho um scrpit para isso que vai no enablefields.

```javascript
switch(atividade){
	case 0:
		var habilitar = false; // Informe True para Habilitar ou False para Desabilitar os campos
		var mapaForm = new java.util.HashMap();
		mapaForm = form.getCardData();
		var it = mapaForm.keySet().iterator();
		while (it.hasNext()) { // Laço de repetição para habilitar/desabilitar os campos
			var key = it.next();
    		form.setEnabled(key, habilitar);
       	}
		form.setEnabled("campo a liberar",true);
	break;
}
```

---

## Resposta #3

**Daniel ** (@daniel_fmartins) — 05/05/2022, 14:51

Continuou da mesma forma :/. Não consigo entender.

---

## Resposta #4

**Allan Reichert** (@allan.reichert) — 12/05/2022, 08:39

olá, quando utiliza o displayfields para desabilitar um campo com a função form.setEnabled(“campo”,false), Perceba que ao inspecionar o campo, este vai estar com nome diferente (“campo\_”) . se tentar desabilitar todos usando setEnabled e habilitar depois nao vai dar certo.

espero ter ajudado

---
