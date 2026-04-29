# hAPI.getCardValue (nova)

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=778540423](https://tdn.totvs.com/pages/viewpage.action?pageId=778540423)

---

# Índice



O método **getCardValue** da [hAPI (nova)](https://tdn.totvs.com/pages/viewpage.action?pageId=778540422) retorna o valor de um campo no registro de formulário da solicitação atual.



# Sintaxe

* * *

```
hAPI.getCardValue(fieldName)
```



# Parâmetros

* * *

**fieldname**

-   Uma string [case insensitive](https://tdn.totvs.com/pages/viewpage.action?pageId=754248018) com o nome do campo de formulário que será lido.



# Valor de retorno

* * *

Uma nova string contendo o valor do campo. Sempre é retornado uma string, não importando o tipo de campo no formulário

Caso o campo não exista no formulário ou a solicitação não tenha formulário ou esteja sendo executado em um ponto fora dos eventos de processo, será retornado o valor **null**.



# Exemplos de uso

* * *



Validar o preenchimento de um campo:

```
<html>
<body>
    <form name="form" role="form">
		Código do usuário*: <input type="number" name="codigo"> <br>
 		Nome do usuário*: <input type="text" name="nome"> <br>
    </form>
</body>
</html>
```
```
function beforeTaskSave(colleagueId, nextSequenceId, userList) {
  if (hAPI.getCardValue("codigo") == "") {
    throw "Informe o código";
  }
  if (hAPI.getCardValue("nome") == "") {
    throw "Informe o nome";
  }
}
```
