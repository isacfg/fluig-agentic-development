# FormController.getValue(fieldname)

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=745139690](https://tdn.totvs.com/pages/viewpage.action?pageId=745139690)

---

# Índice



O método **getValue** retorna o valor de um campo no registro de formulário. O parâmetro **fieldname** define o nome do campo do qual o valor será lido e é case insensitive, ou seja, você pode usar "codigo", "Codigo", "CoDiGo" ou "CODIGO", todos irão funcionar.



# Exemplos de uso

* * *



## Validar o preenchimento de um campo

* * *

```
<html>
<body>
    <form name="form" role="form">
		Código do usuário*: <input type="text" name="codigo"> <br>
 		Nome do usuário (opcional): <input type="text" name="nome"> <br>
    </form>
</body>
</html>
```
```
function validateForm(form){
    if (form.getValue("codigo") == "") {
        throw "Informe o código";
    }
}
```



## Validações condicionais

* * *

```
<html>
<body>
    <form name="form" role="form">
		Tem alguma alergia? (s/n): <input type="text" name="temAlergia"> <br>
		Se sim, quais? <input type="text" name="alergias"> <br>
    </form>
</body>
</html>
```
```
function validateForm(form){
	var temAlergia = form.getValue("temAlergia");
	var alergias = form.getValue("alergias)";

    if (temAlergia == "s") {
		if (alergias == null || alergias == "") {
	        throw "Você deve informar quais alergias";
		}
    } else if (temAlergia == "n") {
		if (alergias != null || alergias != "") {
		   throw "Se você não possui alergias, não deve preencher o campo quais";
		}
	} else {
		throw "Você deve informar apenas 's' ou 'n' no campo 'Tem alguma alergia'";
	}
}
```
