# Problema com botão em tabela pix x filho

> **Fonte:** [https://fluiggers.com.br/t/problema-com-botao-em-tabela-pix-x-filho/3180](https://fluiggers.com.br/t/problema-com-botao-em-tabela-pix-x-filho/3180)
> **Categoria:** WCM
> **Tags:** `form`
> **Criado em:** 27/02/2025, 11:02
> **Visualizações:** 62 | **Likes:** 4 | **Respostas:** 2

---

## Pergunta original

**lucaslamb** (@lucaslamb) — 27/02/2025, 11:02 | ❤️ 1

Alguém já conseguiu lidar com botões em uma tabela pai x filho? Estou com um problema onde, o botão funciona normalmente está tudo correto, e um botão para adicionar imagem e outro que apresenta a imagem em um modal.

![image](https://fluiggers.com.br/uploads/default/original/2X/d/d81403e2594809814c97a27a2e8b18706a6fff0f.png)

Porém quando passo a atividade o index é perdido no button de visualizar a imagem e não consigo mais encontrar ele para apresentar a imagem.

Esse é o campo na atividade ativo

```auto
<div class="btn-group">
    <a class="file-input-wrapper btn btn-primary btn-md">
        <input type="file" name="img_btn_m___2" id="img_btn_m___2" data-toggle="tooltip" data-placement="left" title="Adicionar Foto" onclick="uploadFile(this)">
        <i class="flaticon flaticon-camera icon-md" aria-hidden="true" name="img_btn_m___2___2" id="img_btn_m___2___2" value=""></i>
        <input type="hidden" name="obrigafotom___2" id="obrigafotom___2" value="Sim">
    </a>
    <button class="btn btn-info" id="data_modal_img_m___2" onclick="fnAbreFoto(this)" value="" name="data_modal_img_m___2">
        <i class="flaticon flaticon-view icon-md" aria-hidden="true"></i>
    </button>
</div>
```

Esse é o campo em outra atividade

```auto
<div class="btn-group">
    <a class="file-input-wrapper btn btn-primary btn-md">
        <input type="file" name="img_btn_m___2" id="img_btn_m___2" data-toggle="tooltip" data-placement="left" title="" onclick="uploadFile(this)" value="" disabled="" data-original-title="Adicionar Foto">
        <i class="flaticon flaticon-camera icon-md" aria-hidden="true"></i>
        <input type="hidden" name="obrigafotom___2" id="obrigafotom___2" value="Sim">
    </a>
    <button class="btn btn-info btn-md" id="data_modal_img_m" onclick="fnAbreFoto(this)" >
        <i class="flaticon flaticon-view icon-md" aria-hidden="true"></i>
    </button>
</div>
```

E eu preciso desse index pois é como eu busco o url da imagem:

```auto
function fnAbreFoto(campo){
  var tab = campo.id.split("_")[3];
  var index = campo.id.split("___")[1];
  let url = document.getElementById("img_url_"+tab+"___"+index).value;
  document.getElementById('modal_img').innerHTML = `
  <div class="fs-align-items-center fs-display-flex fs-flex-direction-column fs-md-gap fs-sm-padding-vertical">
    <img src="${url}" id="foto_modal"></img>
    <button class="btn btn-default" data-dismiss="modal">Close</button>
  </div>
  `;
  var template = $('#modal_img').html();
  FLUIGC.modal({
    content: Mustache.render(template),
    id: 'fluig_dialog',
    size: "full",
    showHeader: false,
    showFooter: false
  });
}
```

---

## Resposta #1

**Eduardo Vantini Neto** (@eduardo.vantini) — 27/02/2025, 15:56

Olá, tudo bem? O botão não fica com o índice mesmo, teria que procurar um input pelo elemento do botão para pegar o índice. Tipo assim:

```auto
$("#data_modal_img_m").parent("div").find("input[value^=img_btn_m___]").split("___")[1];
```

Abs

---

## Resposta #2

**lucaslamb** (@lucaslamb) — 27/02/2025, 16:51

Boa tarde Eduardo, obrigado pelo retorno.
Problema com essa busca é que buscando pelo parent ou querySelector ele entra sempre no td que é gerado sem o índice, aquele “padrão” de toda tabela e por conta disso não consigo encontrar em lugar nenhum o índice do botão que é clicado. E é nesse problema que estou preso.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 27/02/2025, 17:17 | ❤️ 1

Acredito que assim funcionaria, usando JQuery :

```javascript
function fnAbreFoto(campo){
    const url = $(campo).closest("tr").find('[id*="img_url____"]').val()
    // ...
}
```

---

## Resposta #4

**lucaslamb** (@lucaslamb) — 03/03/2025, 08:29

Tive que fazer uma gambiarra mas funcionou

```auto
url = $(campo).closest("tr").children().eq(4).find("input").eq(2).val();
```

Obrigado pelo apoio.

---

## Resposta #5 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 03/03/2025, 12:03 | ❤️ 2

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/l/90ced4/48.png) lucaslamb:
>
> > `"img_url_"+tab+"___"+index`

Eu não tinha reparado bem que tem um `tab` antes dos `___`, por isso que o código não deve ter funcionado.

Talvez trocar pra esse funcione.

```javascript
// coloquei o input pra reduzir consultas e no id deixei só o início antes do tab
const url = $(campo).closest("tr").find('input[id*="img_url_"]').val();
```

Do jeito que você fez tá indo mais direto ao input correto também. Tá valendo.

---
