# reloadZoomFilterValues não funciona

> **Fonte:** [https://fluiggers.com.br/t/reloadzoomfiltervalues-nao-funciona/1628](https://fluiggers.com.br/t/reloadzoomfiltervalues-nao-funciona/1628)
> **Categoria:** Formulários
> **Criado em:** 02/02/2023, 19:03
> **Visualizações:** 414 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Gustavo** (@gustavo91) — 02/02/2023, 19:03

Boa noite pessoal.

Eu tenho um formulário que ao carregar, ele cria uma linha automaticamente em uma tabela paixfilho. Essa linha possui um campo zoom, onde eu quero filtrar seus valores a partir de um outro campo zoom que não está na tabela. Porém, não está filtrando.

* * *

*Zoom que eu passo o reloadZoomFilterValues com o valor para filtrar o campo zoom da linha já criada da tabela =>*

```auto
if (selectedItem.inputId == "tipoOperacao") {

        $("#codTipoOperacao").val(selectedItem.Codigo);

        var servicoAvulso = 'SERVIÇO AVULSO'
        var barramento = 'BARRAMENTO'

        var elementos = $("[id^='seq1___']")
        for (i = 0; i < elementos.length; i++) {

            var index = $(elementos[i]).prop("id").split("___")[1]


            if (selectedItem.Codigo == "80") {

                console.log('entrou')
                reloadZoomFilterValues('grupoSP1___' + index, `grupoSP,${servicoAvulso}`);

            } else {
                reloadZoomFilterValues('grupoSP1___' + index, `grupoSP,${barramento}`);
            }

        }
    }
```

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 03/02/2023, 07:53

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/g/46a35a/48.png) gustavo91:
>
> > `reloadZoomFilterValues('grupoSP1___' + index,` grupoSP,${servicoAvulso}`);`

Bom dia,

Ao que indica o erro esta nessa linha vou postar como deve ficar:

```auto
reloadZoomFilterValues('grupoSP1___' + index, 'grupoSP,' + $("#servicoAvulso").val());
```

---
