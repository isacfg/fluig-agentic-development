# Tabela pai x filho em hapi.startprocess

> **Fonte:** [https://fluiggers.com.br/t/tabela-pai-x-filho-em-hapi-startprocess/3144](https://fluiggers.com.br/t/tabela-pai-x-filho-em-hapi-startprocess/3144)
> **Categoria:** BPM
> **Tags:** `form`, `processo`, `paixfilho`, `startprocess`, `hapi`
> **Criado em:** 29/01/2025, 15:45
> **Visualizações:** 87 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**matheus.jesus** (@matheus.jesus) — 29/01/2025, 15:45

tenho um processo “aprovação de cotação” que é iniciado atraves do hapi.startprocess por outro processo “cotação”. no formulario da aprovação de cotação tenho uma tabela pai x filho que recebe os produtos da cotação. como adicionar linhas na tabela pelo startprocess?

fiz assim de teste, mas não funciona. ele não adiciona as linhas na tabela

```auto
var formData = new java.util.HashMap();

for (var i = 0; i < 3; i++) {
     var index = (i+1);
     formData.put("produto___" + index, "SV07.10_01 52207 - SERV LIMP - FABRICA");
     formData.put("necessidade___" + index, "28/02/2025");
     formData.put("quantidade___" + index, "2 UN");
     formData.put("valorItem___" + index, "600.00");
}

var result = hAPI.startProcess("Aprovacao_Cotacao", 2, users, "Processo iniciado automaticamente via script.", true, formData, false);
```

---

## Resposta #1

**Eduardo Vantini Neto** (@eduardo.vantini) — 29/01/2025, 21:41

Olá, tudo bem? Tem dois pontos, para cada iteração adicione

```auto
hAPI.addCardChild("Table_Name", formData);
```

E inclua o var formData = new java.util.HashMap(); dentro do for também

Ficaria assim

```auto
for (var i = 0; i < 3; i++) {
     var formData = new java.util.HashMap();

     var index = (i+1);
     formData.put("produto___" + index, "SV07.10_01 52207 - SERV LIMP - FABRICA");
     formData.put("necessidade___" + index, "28/02/2025");
     formData.put("quantidade___" + index, "2 UN");
     formData.put("valorItem___" + index, "600.00");

     hAPI.addCardChild("Table_Name", formData);
}
```

Acho que assim vai funcionar… testa aí

Abs

---

## Resposta #2

**matheus.jesus** (@matheus.jesus) — 30/01/2025, 10:26

no caso, estou utilizando o hapi.startprocess para iniciar um novo processo. o formData vai conter os valores dos campos do novo processo. eu preciso adicionar linhas numa tabela no formulario do novo processo que estou iniciando, e não no processo atual.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 30/01/2025, 12:12

Se não me engano precisa informar o tableid de cada linha.

`formData.put("tableid___" + index, "nomeDaPaiFilho");`

---
