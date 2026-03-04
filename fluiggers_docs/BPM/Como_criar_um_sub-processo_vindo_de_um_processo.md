# Como criar um sub-processo vindo de um processo

> **Fonte:** [https://fluiggers.com.br/t/como-criar-um-sub-processo-vindo-de-um-processo/3494](https://fluiggers.com.br/t/como-criar-um-sub-processo-vindo-de-um-processo/3494)
> **Categoria:** BPM
> **Criado em:** 07/11/2025, 14:43
> **Visualizações:** 76 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Henrique Silva** (@Henrique_Silva) — 07/11/2025, 14:43

Boa tarde pessoal, tenho um processo que em determinado estado do processo eu preciso criar atividades para serem feitas, segue o print dos campos onde eu coloco as informações

Imagem 1 - Processo Principal Atual

![image](https://fluiggers.com.br/uploads/default/optimized/2X/2/2392e51c69ef384c8edf7732dd6e997cb63e21bb_2_690x144.png)

Imagem 2 - Sub-processo antigo
Esse processo funcionava em um sub-processo antigo:

[drive.google.com](https://drive.google.com/file/d/1Od_k68SUOZL9JR17cv5rFg3OAZIohdAb/view?usp=drive_link)

[](https://drive.google.com/file/d/1Od_k68SUOZL9JR17cv5rFg3OAZIohdAb/view?usp=drive_link)

### [imagem 2.png](https://drive.google.com/file/d/1Od_k68SUOZL9JR17cv5rFg3OAZIohdAb/view?usp=drive_link)

Google Drive file.

Imagem 3 - Sub-Processo novo (Listar Tarefas)
Agora a ideia é adicionar essas atividades no processo FLUIGADHOC

[drive.google.com](https://drive.google.com/file/d/1Iui7Jvn07kbvz8k_0X1uQHznfRlgmCiH/view?usp=drive_link)

[](https://drive.google.com/file/d/1Iui7Jvn07kbvz8k_0X1uQHznfRlgmCiH/view?usp=drive_link)

### [imagem 3.png](https://drive.google.com/file/d/1Iui7Jvn07kbvz8k_0X1uQHznfRlgmCiH/view?usp=drive_link)

Google Drive file.

Em Assunto, detalhes e data de conclusão serão valores para relacionar com o processo principal atual
Exemplo: Assunto RNC - Numero do processo principal, detalhes - um texto digitado em um campo do processo principal + assunto, e data de conclusão - o prazo

E toda vez que clicar em adicionar, adicionar na lista tarefa, usando os campos da imagem 1

Uma das dificuldades está sendo relacionar os dois processos, associando o sub-processo com o processo pai, após o primeiro clique.

Segue o código que estou usando para iniciar o processo

```javascript
function startProcess() {
  try {
    var sol = $("#matResp_registro").val();
    var hr = $("#fdHora").val();
    var dt = $("#fdData").val();
    var obs = $("#txObs").val();
    var resp = $("#zoomColleagueId").val();
    var nameResp = $("#zoomColleagueName").val();
    var nrRegistro = $("#nr_registro").val();
    var hashPai = $("#hashPai").val() || "";

    console.log("Responsável:", resp, nameResp);

    // Validações
    if (!resp) {
      FLUIGC.toast({
        title: "Atenção",
        message: "Informe o responsável pela atividade.",
        type: "warning",
      });
      return;
    }

    if (!dt) {
      FLUIGC.toast({
        title: "Atenção",
        message: "Informe o prazo da atividade.",
        type: "warning",
      });
      return;
    }

    // Monta parâmetros SOAP
    var prm = new SOAPClientParameters();
    prm.add("companyId", "1");
    prm.add("username", "adm");
    prm.add("password", "adm");
    prm.add("processId", "FLUIGADHOC");
    prm.add("choosedState", 3);
    prm.add("colleagueIds", [resp]);
    prm.add(
      "comments",
      "Processo iniciado via formulário de não conformidade."
    );
    prm.add("userId", sol);
    prm.add("completeTask", true);
    prm.add("attachments", "");
    prm.add("appointment", "");
    prm.add("managerMode", false);
    prm.add("cardData", [
      { key: "meeting", value: "RNC - " + nrRegistro },
      { key: "detail", value: obs },
      { key: "dueDate", value: dt },
      { key: "nomeativ", value: obs },
      { key: "dtprazoatividade", value: dt },
      { key: "hdnrespativ", value: resp },
      { key: "numProcessPai", value: nrRegistro },
      { key: "hashPai", value: hashPai },
      { key: "nmResponsavel", value: nameResp },
      { key: "idResponsavel", value: resp },
    ]);

    console.log("Chamando startProcessClassic...");
    var jsonText = SOAPClient.invoke(
      returnCurrentURL() + "webdesk/ECMWorkflowEngineService",
      "startProcessClassic",
      prm,
      false,
      null
    ).json;

    console.log("jsonText", jsonText);

    // Força JSON válido (mesma técnica do outro processo)
    var arrJson = jsonText
      .replace("result", '"result"')
      .split("key")
      .join('"key"')
      .split("value")
      .join('"value"');

    arrJson = $.parseJSON(arrJson);
    console.log("DADOS", arrJson["result"]);

    // Captura o número do processo Adhoc
    var numAdhoc = arrJson["result"].find(
      (item) => item.key === "iProcess"
    ).value;
    console.log("Número do processo Adhoc criado:", numAdhoc);

    $("#numProcessAdhoc").val(numAdhoc);
    hAPI.setCardValue("numProcessAdhoc", numProcessAdhoc);


    // Salva no processo pai
    if (parent?.window?.WKFAPI?.setCardValue) {
      parent.window.WKFAPI.setCardValue("numProcessAdhoc", numAdhoc);
    }

    FLUIGC.toast({
      title: "Sucesso!",
      message: "Processo Adhoc gerado com sucesso! Nº: " + numAdhoc,
      type: "success",
    });

    // Limpa campos
    $("#zoomColleagueId").val("");
    $("#zoomColleagueName").val("");
    $("#sResponsavel").val("");
    $("#fdData").val("");
    $("#txObs").val("");

    var _zoom = FLUIGC.autocomplete("input#sResponsavel");
    _zoom.removeAll();
  } catch (err) {
    console.error("Erro ao iniciar processo Adhoc:", err);
    FLUIGC.toast({
      title: "Erro!",
      message: "Falha ao criar o processo Adhoc. " + err,
      type: "danger",
    });
  }
}

cancelProcess = function (id, res) {
  var prm = new SOAPClientParameters();
  prm.add("companyId", "1");
  prm.add("username", "adm");
  prm.add("password", "adm");
  prm.add("processInstanceId", id);
  prm.add("userId", res);
  prm.add("cancelText", "Cancelado via processo de RNC");

  var jsonText = SOAPClient.invoke(
    returnCurrentURL() + "webdesk/ECMWorkflowEngineService",
    "cancelInstance",
    prm,
    false,
    null
  ).json;

  var arrJson = jsonText.replace("result", '"result"');
  arrJson = arrJson.split("key").join('"key"');
  arrJson = arrJson.split("value").join('"value"');
  arrJson = $.parseJSON(arrJson);

  FLUIGC.toast({
    title: "Sucesso!",
    message: "o processo foi cancelado",
    type: "success",
  });

  table();
};

// converte yyyy-dd-mm → dd/mm/yyyy
function formatDateYDDMM(data) {
  if (!data) return "";
  const [ano, dia, mes] = data.split("-");
  return `${dia.padStart(2, "0")}/${mes.padStart(2, "0")}/${ano}`;
}
// =====================================================================
// 📋 FUNÇÃO: table()
// =====================================================================
// Essa função atualiza uma tabela dinâmica de registros.
// É chamada após gerar um processo ou salvar.
table = function () {
  try {
    var options = {
      linha: function () {
        var consulta = getDadosTabela();
        console.log("Consulta tabela:", consulta);

        if (consulta.values.length > 0) {
          var arrLinha = [];
          for (var i = 0; i < consulta.values.length; i++) {
            console.log(i);
            arrLinha.push({
              acao: consulta.values[i]["nomeativ"] || "",
              prazo: consulta.values[i]["dtprazoatividade"] || "",
              responsavel: consulta.values[i]["hdnrespativ"] || "",
              btn: function () {
                return function (text, render) {
                  var strRet = "";
                  var strTxt = render(text);

                  if (strTxt.trim() === "Aberto") {
                    strRet =
                      '<button type="button" class="btn btn-danger">Cancelar</button>';
                  } else if (strTxt.trim() === "Finalizado") {
                    strRet =
                      '<button type="button" class="btn btn-danger disabled">Cancelar</button>';
                  }
                  return strRet;
                };
              },
            });
          }
          return arrLinha;
        }
      },
    };

    var html =
      '<table class="table table-striped table-bordered">' +
      " <thead>" +
      "	<tr>" +
      "	  <th>Ação</th>" +
      "	  <th>Prazo</th>" +
      "	  <th>Responsável</th>" +
      "	  <th></th>" +
      "	</tr>" +
      " </thead>" +
      " <tbody>" +
      "	{{#linha}}" +
      "	<tr>" +
      "		<td>{{acao}}</td>" +
      "		<td>{{prazo}}</td>" +
      "		<td>{{responsavel}}</td>" +
      '		<td><div class="btn-group btn-group-xs">{{#btn}} {{status}} {{/btn}}</div></td>' +
      "	</tr>" +
      "	{{/linha}}" +
      " </tbody>" +
      "</table>";

    console.log(options);

    $("#must").children().remove();
    $("#must").append(Mustache.render(html, options));
  } catch (err) {
    console.log(err);
  }
};

getDadosTabela = function () {
  // Constraint vazia ou baseada em algum filtro opcional
  $("#numProcessAdhoc").val;
  var constraints = new Array(
    DatasetFactory.createConstraint(
      "documentid",
      $("#numProcessAdhoc").val(),
      $("#numProcessAdhoc").val(),
      ConstraintType.MUST
    )
  );

  // Busca os cards do dataset FLUIGADHOC
  var dataset = DatasetFactory.getDataset(
    "FLUIGADHOC",
    null,
    constraints,
    null
  );

  console.log("Dados retornados pelo dataset FLUIGADHOC:", dataset);

  return dataset;
};
```

Se tiver alguma dica, ou documentação que eu possa ler, ou algo que possa melhorar no código seria de grande ajuda

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 14/11/2025, 10:43

Buenas [@Henrique\_Silva](/u/henrique_silva) vi no seu código que estás querendo tratar atividades de não conformidades?
eu tenho um projeto bem legal, posso compartilhar contigo! me envie um e-mail
[igorskater@gmail.com](mailto:igorskater@gmail.com)

---

## Resposta #2

**Henrique Silva** (@Henrique_Silva) — 18/11/2025, 11:26

Eai Igor, te mandei email, porem recebi que não foi possível encontrar seu e-mail;
Se quiser, pode mandar um email no [henriqaraujo1@gmail.com](mailto:henriqaraujo1@gmail.com)

---
