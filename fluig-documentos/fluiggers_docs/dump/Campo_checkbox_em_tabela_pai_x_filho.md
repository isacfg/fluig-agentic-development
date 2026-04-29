# Campo checkbox em tabela pai x filho

> **Fonte:** [https://fluiggers.com.br/t/campo-checkbox-em-tabela-pai-x-filho/377](https://fluiggers.com.br/t/campo-checkbox-em-tabela-pai-x-filho/377)
> **Categoria:** BPM
> **Criado em:** 16/04/2021, 09:28
> **Visualizações:** 1231 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**Vagner Duarte** (@vagner_duarte) — 16/04/2021, 09:28

Pessoal,

preciso criar um campo do tipo checkbox em uma tabela pai x filho. Criei o campo normalmente, porém, ele não pega as classes css e ficam sem estilo, alguém pode ajudar como resolver isso?

---

## Resposta #1

**Willian Laynes** (@Willian_Laynes) — 16/04/2021, 10:42

Se estive utilizando uma classe Fluig (Ex.: form-control),. Sua tabela pai e filho precisa estar dentro de alguma tag com a classe “fluig-style-guide”.

![image](https://fluiggers.com.br/uploads/default/original/1X/265a632696ad8b3be3f0c9c5c41c0d7d438f3c2b.png)

---

## Resposta #2

**Vagner Duarte** (@vagner_duarte) — 16/04/2021, 12:18

Willian, não entendi, todo o meu form ja está dentro div fluig-style-guide:

---

## Resposta #3

**Willian Laynes** (@Willian_Laynes) — 16/04/2021, 13:20

Então o problema é outro, inspeciona o input e verifica se a classe que você esta usando está sendo utilizada, se não tem alguma outra sobrescrevendo ela.

---

## Resposta #4

**Eduardo Vantini Neto** (@eduardo.vantini) — 16/04/2021, 14:52

Olá, se puder, joga o html da tabela aqui, aí podemos ver certinho

---

## Resposta #5

**Vagner Duarte** (@vagner_duarte) — 16/04/2021, 18:14

Segue só parte da tabela:

```
<td width="5%"></td>


<td width="7%">

  <label for="ck_status">Status</label>

</td>


<td width="25%">

  <label>Atividade</label>

</td>
```
```
<td>

  <button type="button" class="btn btn-default  btn-danger" id="del_tbContratar" name="del_tbContratar" onclick="Javascript:fnCustomDelete(this);">X</button>

</td>


<td>

  <div class="custom-checkbox custom-checkbox-info">

    <input type="checkbox" id="ck_status" name="ck_status" value="sim"/>

  </div>

</td>
```

---
