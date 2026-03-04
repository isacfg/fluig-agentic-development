# Campos estão desabilitados no subprocesso

> **Fonte:** [https://fluiggers.com.br/t/campos-estao-desabilitados-no-subprocesso/1988](https://fluiggers.com.br/t/campos-estao-desabilitados-no-subprocesso/1988)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`, `bpm`
> **Criado em:** 29/06/2023, 10:43
> **Visualizações:** 196 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 29/06/2023, 10:43

Estou começando a mexer com o fluig e estou com um problema, tenho um processo que tem subprocesso, porém ao ir para o subprocesso os campos estão desabilitados e não consigo preencher eles, não sei o que fazer, poderiam me ajudar?

Esse é o código para desabilitar os campos do subprocesso

```javascript
function enableFields(form){
	var activity = getValue('WKNumState');

	 if (activity =! 0){
	        form.setEnabled('SETOR',false);
	        form.setEnabled('cCtusto',false);
	        form.setEnabled('faturas',false);
	        form.setEnabled('pessoaFisica',false);
	        form.setEnabled('locais',false);
	        form.setEnabled('referencias',false);
	        form.setEnabled('entrega',false);
	        form.setEnabled('valor',false);


	    }

}
```

Processo principal

![image](https://fluiggers.com.br/uploads/default/original/1X/8a635f8e399ef385075004d726eb2d8382f5edb8.png)

---

## Resposta #1

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 29/06/2023, 10:44

Esse é o subprocesso

![image](https://fluiggers.com.br/uploads/default/optimized/1X/abff93c5dd654314896fbe0c9dd3dbcdf92180e7_2_690x330.png)

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 29/06/2023, 15:08

Provavelmente seu problema é o sinal errado

![image](https://fluiggers.com.br/uploads/default/original/1X/29594cb3408729fa0e49241462ba91639854309b.png)

Mas se não me engano quando o subprocesso é criado ele não ficará como atividade 0 e sim o número padrão da atividade inicial, pois o subprocesso é criado e então o usuário precisa entrar pra editar a atividade.

---

## Resposta #3

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 29/06/2023, 15:43

Coloquei o numero padrão da atividade inicial, porém agora ele não desabilita mais os campos

---
