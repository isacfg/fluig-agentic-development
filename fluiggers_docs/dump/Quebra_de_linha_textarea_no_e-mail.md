# Quebra de linha textarea no e-mail

> **Fonte:** [https://fluiggers.com.br/t/quebra-de-linha-textarea-no-e-mail/2613](https://fluiggers.com.br/t/quebra-de-linha-textarea-no-e-mail/2613)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`, `formulario`
> **Criado em:** 01/03/2024, 10:58
> **Visualizações:** 168 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Jose Henrique ** (@Jose) — 01/03/2024, 10:58

Bom dia! Sou novo aqui e não sei muito bem como funciona.

O problema que estou tendo no momento seria que tenho um template customizado de envio de e-mail, porém tenho um campo de observação que no formulário as vezes o usuário aperta enter para pular uma linha normal, mas quando o e-mail é enviado esse campo não está com as quebras de linhas, ele chega como se fosse uma frase.

![image](https://fluiggers.com.br/uploads/default/original/2X/5/5729ec307694815ce3d394aff95504a01f8ae5f3.png)

deixarei o codigo do template aqui.

```javascript
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"><style>
            body{
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-size: 12px;
            }

            table{
                width: 100%;
                border-collapse: collapse;
            }

            th,td{
                border: thin solid black;
                padding: 8px;
            }

            th{
               background-color: rgb(14, 187, 255);
                color: whitesmoke;
            }

            td{
                text-align: center;
            }

           img{
            width: 100%;
            height: 12em;
           }


        </style>


        <title>Document</title>
    </head>
    <body>



    <h2>Prezados, segue processo para conferência e aprovação</h2>

    <h2>Informações de Compra</h2>

      ${TABLE_ITENS!''}

     <!-- <table>
            <tr>
                <th>Fornecedor</th>
                <th>Produto</th>
                <th>Valor da compra</th>
                <th>Prazo de entrega</th>
                <th>Forma de pagamento</th>
            </tr>
         <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
         </tbody>
      </table> -->

      <br>
        <br>

      <table>
          <tr>
             <th>Observação</th>
          </tr>
          <tbody>
            <tr>
                <td>${OBSER_VACAO!''}</td>
            </tr>
         </tbody>
      </table>

      <h3>Acompanhe a Solicitação</h3>

           <!-- <table style="margin-top: 25px; background-color: #f2f2f2;"> -->
            <table>
                <tbody>
                    <tr>
                      <th>Link para a solicitação</th>

                    </tr>

                    <tr>
                        <td align="left" style="color: #666666;"> ${SOLICITACAO_!''}</td>
                    </tr>
                </tbody>
            </table>

    </body>
    </html>

    <p>&nbsp;</p>
    <p>Atenção: esta mensagem e quaisquer arquivos com ela transmitidos são confidenciais, protegidos por sigilo profissional ou por lei, sendo vedada a transmissão ou divulgação de seu conteúdo a terceiros. O uso não autorizado de tais informações, incluindo, mas não se limitando a, qualquer divulgação de seu conteúdo, cópia, distribuição ou qualquer ação ou omissão, é proibido e sujeitará o agente às penalidades cabíveis. Se você recebeu esta mensagem por engano, queira por gentileza excluir e destruir todas as cópias em seu poder e informe o remetente que você recebeu esta mensagem por engano, estando ciente de que a leitura ou a divulgação, bem como a adoção de qualquer ação baseada nesta mensagem estão expressamente proibidas.</p>
```

**Codigo do envio do E-mail**

```javascript
function afterTaskComplete(colleagueId,nextSequenceId,userList){

    var atv_gestor = 100;
    var atv_validasolici = 143;
    var atv_pedidocompra = 28;
    var atv_ativo = 83;


    if(nextSequenceId == atv_validasolici) {

       var assunto = "Processo compras";
       var msgInicial = "";
       var msgFinal = "";

       var destinatarios = userList;

       log.info("##** destinatarios" + destinatarios);

       enviaEmail(assunto, destinatarios, msgInicial, msgFinal, atv_validasolici);

    }


   function enviaEmail(assunto, destinatarios, msgInicial, msgFinal, atividade) {

        var processo = getValue("WKNumProces").toString();
        var linkSolicitacao = "***********************************************"+processo;
        var obser_vacao = hAPI.getCardValue("observacoes");


        try{

            var parametros = new java.util.HashMap();
            var assunto = "[WF" + processo + "] - Requisição de compra"

            parametros.put("subject", "Solicitação de compras (" + processo + ") / colaborador ");


            parametros.put("SOLICITACAO_", linkSolicitacao);
            parametros.put("OBSER_VACAO", obser_vacao);


            var tabelaItens = montaItens();

            parametros.put("TABLE_ITENS", tabelaItens);

            var notificacao = notifier.notify("7777777", "outroTeste", parametros, destinatarios, "text/html");



        } catch (error) {
            log.info("##** Erro no envio de email");
            log.info(error);
        }


    }

   function montaItens() {

 	   var html = "";
 	   html +="<table>";
 	   html +="    <thead>";
 	   html +="      <tr>";
 	   html +="         <th>Fornecedor</th>";
 	   html +="         <th>Produto</th>";
 	   html +="         <th>Valor da compra</th>";
 	   html +="         <th>Prazo de entrega</th>";
 	   html +="         <th>Forma de pagamento</th>";
 	   html +="      </tr>";
 	   html +="    </thead>";
 	   html +="   <tbody>";


 	   var processo = getValue("WKNumProces");
 	   var campos = hAPI.getCardData(processo);

 	   var contador = campos.keySet().iterator();

 	  while (contador.hasNext()) {

		   var id = contador.next();

		   if (id.match(/Fornecedor___/)){

			   var campo = campos.get(id);
			   var id = id.split("___")[1];

			   var Fornecedor = campos.get("Fornecedor___" + id);
			   var Produto = campos.get("Produto___" + id);
			   var Valor2 = campos.get("Valor2___" + id);
			   var PrazoEntrega = campos.get("PrazoEntrega___" + id);
			   var CondicaoPagamento = campos.get("CondicaoPagamento___" + id);

	   html += "     <tr>";
	   html += "        <td style='text-aling:center'>" + Fornecedor + "</td>";
	   html += "        <td style='text-aling:center'>" + Produto + "</td>";
	   html += "        <td style='text-aling:center'>" + Valor2 + "</td>";
	   html += "        <td style='text-aling:center'>" + PrazoEntrega + "</td>";
	   html += "        <td style='text-aling:center'>" + CondicaoPagamento + "</td>";
	   html += "     </tr>";

	   log.info("#%$ retorno")
	   log.info(html);

		   }

	   }

 	   html += "</tbody></table>"

 		   return html


    }
}
```

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 01/03/2024, 11:34 | ❤️ 1

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/j/e274bd/48.png) Jose:
>
> > `parametros.put("OBSER_VACAO", obser_vacao);`

Tenta alterar essa parte pra ficar assim:

```javascript
parametros.put("OBSER_VACAO", obser_vacao.replaceAll("\\R", "<br>"));
```

---

## Resposta #2

**Jose Henrique ** (@Jose) — 01/03/2024, 11:44

Era isso mesmo agora está funcionando, muito obrigado de verdade.

---
