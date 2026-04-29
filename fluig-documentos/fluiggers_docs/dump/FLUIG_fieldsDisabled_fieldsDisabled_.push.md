# FLUIG fieldsDisabled fieldsDisabled .push

> **Fonte:** [https://fluiggers.com.br/t/fluig-fieldsdisabled-fieldsdisabled-push/2096](https://fluiggers.com.br/t/fluig-fieldsdisabled-fieldsdisabled-push/2096)
> **Categoria:** Formulários
> **Tags:** `form`, `bpm`, `dataset`
> **Criado em:** 01/08/2023, 17:58
> **Visualizações:** 441 | **Likes:** 3 | **Respostas:** 4

---

## Pergunta original

**joaopretti** (@joaopretti) — 01/08/2023, 17:58

Boa tarde pessoal estou com uma duvida aqui.

![image](https://fluiggers.com.br/uploads/default/original/2X/5/57ae9c15caefd1514e8cde91cb26c8bdca94f685.png)

eu acabei de colocar no fieldsDisabled.push esses dois novos campos chamados “nomefornecedor” e “quantidade” porem quando eu o coloco junto com o “chkaprovacao” como pode ver na imagem, o “chkaprovacao” fica habilitado no processo que não deveria e os demais tambem não funcionam como deveria funcionar. Porem se eu tiro eles, o “chkAprovacao” volta a funcionar, fiz o teste com todos e o fieldsDisabled.push só aceitar 1 campo dentro e não funciona se eu colocar 2,3,4… sabem como corrigir isto?

---

## Resposta #1

**Eduardo Vantini Neto** (@eduardo.vantini) — 03/08/2023, 09:50 | ❤️ 1

Olá João… tudo certo?
Cara… acredito que se você acessar cada registro do array vai funcionar, tenta assim:

```auto
for (var i=0;i<fieldsDisabled.length; i++) {
    form.setEnabled(fieldsDisabled[i], false);
}
```

Isso é para disabled… para enabled muda para true.

Testa aí

---

## Resposta #2

**joaopretti** (@joaopretti) — 03/08/2023, 10:24

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/eduardo.vantini/48/88_2.png) eduardo.vantini:
>
> > ```auto
> > for (var i=0;i<fieldsDisabled.length; i++) {
> >     form.setEnabled(fieldsDisabled[i], false);
> > }
> > ```

Edu, funcionou perfeitamente! ele trava os campos. Mas existe a possibilidade de deixar os campos desabilitados e buscar os itens dentro deles? exemplo:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/a/a3fc4ab0f463b94c9057496c0f2d8129036df115_2_690x213.png)

Eu busquei um numero dos pedidos e ele me traz todos os dados, porem os 2 campos que estão travados não trazem nada, eu queria deixar apenas para o usuario não modificar os campos, mas puxar os dados normalmente, é possivel?

---

## Resposta #3

**Eduardo Vantini Neto** (@eduardo.vantini) — 03/08/2023, 11:15 | ❤️ 1

João… tenta mudar o esquema, ao invés de desabilitar os campos pelo enabledFields, já coloca eles como readonly no html… não sei exatamente, mais acho que já tive um problema assim em que eu precisava popular o campo com dados do dataset e não rolava por que está desabilitado pelo enabledFields

Para já criar o campo como readonly faz assim:

```auto
<input type="text" name="name" id="name" class="form-control" readonly>
```

Para deixar ele readonly no ao carregar o form:

```auto
$(document).ready(function() {
    $("#idCampo").prop("readonly", true);
});
```

Testa aí

---

## Resposta #4

**joaopretti** (@joaopretti) — 03/08/2023, 11:31

Obrigado Eduardo! tinha visto um Doc de Reandoly mas não tinha entendido mto bem… você esclareceu minha duvida e resolveu meu problema!!! Obrigado novamente.

---

## Resposta #5

**joaopretti** (@joaopretti) — 07/08/2023, 15:50

Edu, boa tarde. estava refinando algumas informações em minha aplicação e me veio a duvida:

![image](https://fluiggers.com.br/uploads/default/original/2X/d/d250fa174408013fa0311312567517f09880b591.png)

Eu não consigo mexer nos tamanhos dos campos, ja tentei mudar o tamanho das cols mas nada funciona, sabe como posso modificar conforme o script que vc me mandou?

---

## Resposta #6 ✅ RESPOSTA ACEITA

**Eduardo Vantini Neto** (@eduardo.vantini) — 08/08/2023, 08:29 | ❤️ 1

E ae João… tudo certo? Para alterar o tamanho dos campos pelo style guide, usa o tamanho das colunas. Dentro de cada linha você tem 12 posições de coluna, vou colocar um exemplo aí você vai mudando e o deixando os campos do tamanho que você precisa
Imagina um form com o campo Código, Nome, Data de Nascimento e CPF

```auto
<div class="row form-group">
                <div class="col-md-2">
                    <label for="tCodigo" class="control-label">Código</label>
                    <input type="text" name="tCodigo" id="tCodigo" class="form-control">
                </div>
                <div class="col-md-5">
                    <label for="tNome" class="control-label">Nome</label>
                    <input type="text" name="tNome" id="tNome" class="form-control">
                </div>
                <div class="col-md-3">
                    <label for="tDtaNascimento" class="control-label">Data Nascimento</label>
                    <input type="text" name="tDtaNascimento" id="tDtaNascimento" class="form-control">
                </div>
                <div class="col-md-2">
                    <label for="tCpf" class="control-label">CPF</label>
                    <input type="text" name="tCpf" id="tCpf" class="form-control">
                </div>
            </div>
```

Segue o exemplo aí para seus forms. Para mais detalhes lê a doc do style guide [TOTVS Fluig Developer](https://style.fluig.com/css.html#grid)

Abs

---

## Resposta #7

**joaopretti** (@joaopretti) — 08/08/2023, 09:18

Opa Edu. Tudo certo e por ai?, ontem dei uma mexida e consegui fazer algo parecido com isso!!! Obrigado Edu.

Você sabe me dizer como ou onde posso ver algo para fazer uma integração do Fluig ao protheus?

A partir de um checkbox aprovar um pedido do protheus aqui no fluig? eu abri um topico sobre aqui no fluig

---
