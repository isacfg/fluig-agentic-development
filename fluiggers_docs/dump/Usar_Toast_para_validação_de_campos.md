# Usar Toast para validação de campos

> **Fonte:** [https://fluiggers.com.br/t/usar-toast-para-validacao-de-campos/1106](https://fluiggers.com.br/t/usar-toast-para-validacao-de-campos/1106)
> **Categoria:** Formulários
> **Tags:** `form`, `validação`
> **Criado em:** 26/05/2022, 22:43
> **Visualizações:** 1153 | **Likes:** 3 | **Respostas:** 0

---

## Pergunta original

**Thiago Brianez** (@tbrianez) — 26/05/2022, 22:43

Olá pessoal, minha primeira dúvida aqui :smiley:

Consigo usar o Toast para mensagem de validação pro usuário?

Atualmente uso o beforeSendValidate no front chamando outra função no back e quando tento passar o Toast até surge a mensagem, porém sem validação :triumph:

beforeSendValide tá assim:

```javascript
if (numState == 4) {
  var erros = validarAtividade4();
  if (erros > 0) {
      FLUIGC.toast({
      title: '',
      message: 'Coloca informação ai João!',
      type: 'warning'
       });
```

No validarAtividade4 passo um contador, onde a mensagem não pode ser em branco

```javascript
function validarAtividade4() {
	var contador = 0;
	if ($("#campoExemplo").val() == "") {
		contador++;
```

Com o throw não passa, mas no Toast passa :frowning: , alguém ai pode dar um help? hhauaauh
Valeussss!

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Marcella Tsangos** (@marcella_tsangos) — 28/05/2022, 11:53 | ❤️ 1

Se você colocar um “return false”, ele trava.

```auto
if (cInitDivision.trim() == "...") {
    FLUIGC.toast({
        title: '',
        message: 'There is not Initial Division informed.',
        type: 'danger',
        timeout: 30000
    });
    return false;
}
```

---

## Resposta #2

**Thiago Brianez** (@tbrianez) — 30/05/2022, 14:15 | ❤️ 2

MEU DEUS! O RETURN PASSOU BATIDO AHHAHAUAUAHAH
Valeu Marcella :smiley:

---
