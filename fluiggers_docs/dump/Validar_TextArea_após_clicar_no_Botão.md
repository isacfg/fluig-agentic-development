# Validar TextArea após clicar no Botão

> **Fonte:** [https://fluiggers.com.br/t/validar-textarea-apos-clicar-no-botao/2176](https://fluiggers.com.br/t/validar-textarea-apos-clicar-no-botao/2176)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 01/09/2023, 16:16
> **Visualizações:** 224 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Jonathas** (@JothurInformatica) — 01/09/2023, 16:16

Olá comunidade, posso estar com uma dúvida bem simples mesmo. Mais gostaria de saber como faço para validar o text area, após eu clicar no botão “Não”.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/0/044d852f9b0c24f52dde5147c33a6329deb0478f_2_690x171.png)

Aqui nessa primeira imagem, tenho 2 opções ( no caso SIM e NÃO). Quando clico no Não, vai aparecer o textarea:
![image](https://fluiggers.com.br/uploads/default/optimized/2X/2/2d5692683357f37418676754badd16866c28808d_2_690x333.png)

Conforme a imagem.

Como faço para validar? Eu valido todos no ValidateForm.js =
if (ativ == 146) {
if (valueIsEmpty(form.getValue(“rn12\_relatorio3”))) {
throw “Preencher o campo Anotações”;
}
}

---

## Resposta #1

**Jonathan Albuquerque** (@Jonathan.Albuquerque) — 05/09/2023, 17:50

Segue um exemplo de como realizar uma validação em um campo após o clique em um determinado botão

```auto
<div class="container">
    <form>
        <div class="form-group">
             <div class="row">
            <label for="retorno">Retorno ok?</label>
               <input type="button" class="btn btn-success" id="sim" value="Sim">
               <input type="button" class="btn btn-danger" id="nao" value="Não">
            </div>
        </div>

        <div class="form-group">
            <label for="anotacoes">Anotações:</label>
            <textarea class="form-control" id="anotacoes" name="anotacoes"></textarea>
            <small id="anotacoes-help" class="form-text text-muted"></small>
        </div>
    </form>
</div>

<script>
    $(document).ready(function () {
        $("#sim, #nao").click(function () {
            if ($(this).attr("id") === "sim") {
            // inclua seu desenvolvimento aqui
                $("#anotacoes-help").text("O preenchimento é opcional.");
            } else {
            // inclua seu desenvolvimento aqui
                $("#anotacoes-help").text("O preenchimento é obrigatório.");
            }
        });
    });
</script>
```

---
