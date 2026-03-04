# Serviço JDBC no fluig

> **Fonte:** [https://fluiggers.com.br/t/servico-jdbc-no-fluig/369](https://fluiggers.com.br/t/servico-jdbc-no-fluig/369)
> **Categoria:** Sem categoria
> **Criado em:** 15/04/2021, 09:17
> **Visualizações:** 1145 | **Likes:** 3 | **Respostas:** 4

---

## Pergunta original

**Calebe** (@calebetec) — 15/04/2021, 09:17

Boa tarde senhores,

estou testando serviços JDBC e dataset, e ja consigo realizar instruções como select em rm, ou protheus, assim como updates. querisa saber como roda por traz essas transações, visto que n é uma api rest o soap, mas que o fluig mim permite operar conforme comentei.

tenho rede na nuvem privada, que tem rm, protheus e fluig… mas logo que o fluig tiver ok, iremos criar um dmz e publicar na nuvem para os funcionarios operarem, assim como via app.

como fica a segurança, ou mesmo o que acontece quando usuário usa o dataset citado?

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 15/04/2021, 10:25

Você pode charmar os dataset pelas widgets ou pelos formularios comas funções próprias
ou fazer uma chamada rest a api de consulta de dataset.

---

## Resposta #2

**Calebe** (@calebetec) — 15/04/2021, 10:48

Oi Daniel tudo bem? Não sei se entendeu a pergunta, eu consigo consultar, atualizar dados de outros bancos como o totvs rm, e totvs protheus, via JDBC, preciso saber como fica a segurança, pois estou em rede priva, porem posteriormente o fluig via esta publicado online para quem sua app ou direto no portal. E trabalhando da forma que mensionei, tem algum risco, e tudo roda na camada do meu ambiente?

---

## Resposta #3

**Daniel Cabral Santos** (@daniel.cabral) — 15/04/2021, 11:50 | ❤️ 1

[@calebetec](/u/calebetec) , acredito que o sistema seja seguro o suficiente pois você não está expondo as queries nem os destinos de bancos de dados diretamente - sempre há o dataset como intermediário.

Mas você deve ter cuidado em tratar seus formulários para impedir SQL Injection, numa situação de, por exemplo, você passar o conteúdo de um campo dentro de uma query.

---

## Resposta #4

**Calebe** (@calebetec) — 15/04/2021, 12:13

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/daniel.cabral/48/5_2.png) daniel.cabral:
>
> > SQL Injection

Entendi [@daniel.cabral](/u/daniel.cabral), na verdade o objetivo do fluig é pra processos internos onde quem usuará os processos sao apenas colaboradore com usuario e senha, assim como nesses processos terão os formularios, mas ate onde estou vendo o jdbc não consome licença de web service, entao é um ponto positivo falando financeiramente. Mas que a segurança é extremamente importante. Como faço essa tratativa nos formulario? Não entendi como funciona esse exemplo que vc passou ai. se poder detalhar agradeço.

um dataset com chamando serviço jdbc com acesso a um campo de uma tabela especifica, vc considera seguro passar nele uma instrução sql do tipo update? Ele é chamado via .beforeStateEntry.js é estartado no avanço de um processo, quando
for aprovado? O que fara no bd é apenas atualizar o valor de 0 para 1.

se poder passar sua visao agradeço. isso mim ajuda muito e ter mais segurança em usar.

---

## Resposta #5

**Daniel Cabral Santos** (@daniel.cabral) — 27/04/2021, 08:55 | ❤️ 2

[@leferso](/u/leferso) cola aqui que já fizemos isso há muito tempo!

Vamos supor que o conteúdo do campo do formulário será um filtro…
O esquema é você bloquear ou remover certos caracteres da string que irá alimentar o dataset, para que o gatuno não tente passar um filtro que force o retorno de mais dados do que o desejado, exemplo:

![](https://www.w3schools.com/favicon.ico) [w3schools.com](https://www.w3schools.com/sql/sql_injection.asp)

![](https://www.w3schools.com/images/w3schools_logo_436_2.png)

### [SQL Injection](https://www.w3schools.com/sql/sql_injection.asp)

W3Schools offers free online tutorials, references and exercises in all the major languages of the web. Covering popular subjects like HTML, CSS, JavaScript, Python, SQL, Java, and many, many more.

![image](https://fluiggers.com.br/uploads/default/original/1X/c02ede8ce32a55cb1f7042e3b807c08d17ee69f8.png)

Isso é facilmente tratável no dataset ou no script de backend para evitar dores de cabeça, principalmente se estiver com permissão de escrita nesse JDBC.

---
