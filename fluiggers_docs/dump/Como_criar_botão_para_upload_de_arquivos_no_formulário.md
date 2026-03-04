# Como criar botão para upload de arquivos no formulário

> **Fonte:** [https://fluiggers.com.br/t/como-criar-botao-para-upload-de-arquivos-no-formulario/1891](https://fluiggers.com.br/t/como-criar-botao-para-upload-de-arquivos-no-formulario/1891)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`, `fluigapi`
> **Criado em:** 28/04/2023, 12:07
> **Visualizações:** 890 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**kaue menezes salgado** (@kaue) — 28/04/2023, 12:07

Contenho um código e gostaria de criar um parte para fazer upload de arquivos, pesquisei no style fluig e achei um exemplo de upload-component porém mesmo colocando esse exemplo no código ele não aparece no formulário, teria algum outro jeito de usar esse código ou estou fazendo errado?

código que estou usando porém não aparece no formulário, peguei esse código no próprio site dev do fluig

```javascript
<div class="row">
             	<div class="col-md-3">
						<upload-component
						    id="upload-component-example-2"
						    theme-small="false"
						    multiple="true"
						    upload-api='{
						        "url": "url",
						        "params": {
						            "page": "1"
						        },
						        "headers": {
						            "Content-Type": "text/plain;charset=UTF-8"
						        }
						    }'
						></upload-component>
						</div>
     </div>
```

---

## Resposta #1

**Jonathas** (@JothurInformatica) — 15/08/2023, 17:18

Estou com o mesmo problema. Estou pegando do site deles e não está dando certo.

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Jonathas** (@JothurInformatica) — 17/08/2023, 09:32 | ❤️ 1

Bom dia mano, eu resolvi com o seguinte código:

```auto
<div class="form-group">
								<label for="documento" class="col-sm-2 control-label">Documentos</label>
								<div class="col-sm-9">
									<input type="button" value="Clique aqui para anexar o Documento" onclick="showCamera('nome_do_anexo');" />
								</div>
							</div>
```

Onde usei o próprio ShowCamera, ele vai abrir aquela aba de anexos, ai só o user voltar para o form. Teste ai deu certo aqui.
Agradeço ao Davi Moya pela ajuda.

---

## Resposta #3

**kaue menezes salgado** (@kaue) — 24/08/2023, 10:41

Obrigado mano funcionou certinho, vlw mesmo

---

## Resposta #4

**Guilherme Carvalho** (@guiza1carvalho) — 15/11/2023, 08:54

Alguém conseguiu utilizar esse “upload-component”? Pois o showCamera não consegui fazer funcionar na versão mais nova do app, tanto android quanto ios

---
