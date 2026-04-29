# Tabela Pai x Filho perde o id da div ao salvar

> **Fonte:** [https://fluiggers.com.br/t/tabela-pai-x-filho-perde-o-id-da-div-ao-salvar/2781](https://fluiggers.com.br/t/tabela-pai-x-filho-perde-o-id-da-div-ao-salvar/2781)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 09/05/2024, 12:13
> **Visualizações:** 149 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Leonardo Masera** (@Leonardo_Masera) — 09/05/2024, 12:13

Tenho uma tabela pai x filho que possui uma coluna que altera entre um campo zoom e um campo de input padrão. o formulário funciona normalmente oculta os campos correto, porém quando salva o form e carrega ele novamente as div’s da tabela perdem os id’s. segue exemplo:

Form normal:
primeira row da tabela:

```auto
<div id="divOcultaZoom___1" nam="divOcultaZoom___1">CONTEUDO</div>
<div id="divOcultaCampo___1" nam="divOcultaCampo___1">CONTEUDO</div>

segunda row da tabela

<div id="divOcultaZoom___2" nam="divOcultaZoom___2">CONTEUDO</div>
<div id="divOcultaCampo___2" nam="divOcultaCampo___2">CONTEUDO</div>

após salvar o form e carregar ele os id's ficam assim:
primeira row da tabela:
<div id="divOcultaZoom" nam="divOcultaZoom">CONTEUDO</div>
<div id="divOcultaCampo" nam="divOcultaCampo">CONTEUDO</div>

segunda row da tabela

<div id="divOcultaZoom" nam="divOcultaZoom">CONTEUDO</div>
<div id="divOcultaCampo" nam="divOcultaCampo">CONTEUDO</div>
```

Isso só ocorre com as div’s os campos não perdem o id.

Alguém sabe como arrumar isso? ou teria uma sugestão de outra forma de ocultar o zoom sem ser ocultando a div que ele esta dentro.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**venturelli** (@venturelli) — 09/05/2024, 16:09 | ❤️ 1

Realmente pra divs ele não recarrega com os “\_\_\_”. E pior, deve criar um campo na sua tabela de dados com esse id, então é recomendável usar divs dessa forma.

Você está ocultando via js ou evento? Se for via js:

```auto
$("#id_do_campo_zoom___1").next().hide()
```

O campo zoom cria um span logo em seguida ao campo select com toda a estrutura do zoom lá dentro, dessa forma você oculta toda a estrutura do elemento seguinte ao campo zoom.

Você pode ainda, por precaução, adicionar a validação:

```auto
if ($("#id_do_campo_zoom___1").next().hasClass("select2")) {
  $("#id_do_campo_zoom___1").next().hide();
}
```

---

## Resposta #2

**Allan Reichert** (@allan.reichert) — 10/05/2024, 07:57 | ❤️ 1

Olá,

Não sei se há outra melhor mas criei um script que executo ao carregar o form:

![image](https://fluiggers.com.br/uploads/default/original/2X/7/7cb7febca0c0fb059bf89641e13893d6e6d427cc.png)

---
