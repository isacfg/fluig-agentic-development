# Utilizar a busca de documento padrão em formulário

> **Fonte:** [https://fluiggers.com.br/t/utilizar-a-busca-de-documento-padrao-em-formulario/570](https://fluiggers.com.br/t/utilizar-a-busca-de-documento-padrao-em-formulario/570)
> **Categoria:** Formulários
> **Tags:** `ecm`, `arquivo`, `pasta`, `busca`
> **Criado em:** 21/07/2021, 08:32
> **Visualizações:** 1409 | **Likes:** 4 | **Respostas:** 3

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 21/07/2021, 08:32

Salve, pessoal!

Há forma de utilizar esse componente WCM [Componente Busca de documentos - TOTVS Fluig - TDN](https://tdn.totvs.com/display/public/fluig/Componente+Busca+de+documentos) em formulários?

Preciso exibir de forma amigável um navegador de pastas do ECM - já encontrei uma forma, mas utilizar este componente seria mais elegante.

A princípio, seria estender a SuperWidget no formulário, mas ainda não encontrei forma para tal.

Valeu!

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Willian Laynes** (@Willian_Laynes) — 21/07/2021, 09:34 | ❤️ 3

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/daniel.cabral/48/5_2.png) daniel.cabral:
>
> > SuperWidget

Bom dia [@daniel.cabral](/u/daniel.cabral)

Dei uma estudada aqui consegui fazer o que você quer…não sei se é a forma ideal mas funcionou.

1.  Primeiro importa esse arquivo para o seu formulário(Achei a biblioteca inspecionado uma WIDGET que importava o componente).

```auto
<script type="text/javascript" src="{ SUA URL}/ecm_resources/resources/components/searchdocument/searchdocument_pt_BR.js"></script>
```

\*\*\*Não esqueça de colocar a URL do seu servidor
Se você tentar executar o ECMBC.searchDocument irá dar erro por não localizar alguns objetos.

2.  Como burlar esses erros de objetos? Como eles existem no escopo global da página, vamos fazer uma cópia deles no escopo do formulário, assim não é necessario alterar a biblioteca.

```auto
var ECM = parentOBJ.ECM;
var WCMC = parentOBJ.WCMC;
var WCMAPI = parentOBJ.WCMAPI;
```

3.  Para executar, basta executar o comando abaixo.

```auto
var config = {
    title: 'Documentos', // valor default 'Selecionar registro'. Título da modal.
    width: 750, // valor default 750. Define a largura da janela
    height: 500, // valor default 500. Define a altura da janela
    parentId: 2, // valor default 0. Id do diretório inicial da busca, com breadcrumb completo
    docTypeId: '1-2-8', // valor default '1-2-8'. Id dos tipos de documentos que devem aparecer na busca, separados por -
    showPrivate: false, // mostrar ou não aquivos privados
    minPermission: 0, // id da permissão mínima para mostrar o arquivo
    showCheckOutDocs: false, // mostrar ou não arquivos em checkout
    socialDocId: 0, // id da pasta onde a busca vai iniciar, o breadcrumb será apenas desta pasta em diante
    selectableDocTypeId: '1-2-8' // valor default '1-2-8'. Id dos tipos de documentos que podem ser selecionados na busca, separados por -
};
ECMBC.searchDocument(config,function(e,v){
    //DADOS DO ITEM SELECIONADO
    console.log(e,v);
})
```

Dessa forma listou para mim aqui. É a forma ideal? Não tenho ideia. Mas se ajudar esta aí o fonte.

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 21/07/2021, 17:06 | ❤️ 1

Funcionou perfeitamente, meu caro!

Muito obrigado pela força! Tinha dado uma solução via dataset+zoom, mas essa navegação padrão já existia e é muito mais legal, além de nativa…valeu demais!

---

## Resposta #3

**Willian Laynes** (@Willian_Laynes) — 21/07/2021, 17:08

Show…Deve funcionar para outras libs tbm…só tem que ver sempre os erro que da no console pra puxar o objeto que faltar para o escopo d formulário.

---

## Resposta #4

**Daniel Cabral Santos** (@daniel.cabral) — 22/07/2021, 08:34

Teoricamente o mesmo princípio serve pras outras, ótima dica pra economizar código!

Mais uma vez, muito obrigado!

---

## Resposta #5

**Daniel Cabral Santos** (@daniel.cabral) — 23/07/2021, 00:35

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
