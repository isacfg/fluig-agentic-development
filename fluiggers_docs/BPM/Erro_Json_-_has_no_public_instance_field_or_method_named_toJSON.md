# Erro Json - has no public instance field or method named "toJSON

> **Fonte:** [https://fluiggers.com.br/t/erro-json-has-no-public-instance-field-or-method-named-tojson/411](https://fluiggers.com.br/t/erro-json-has-no-public-instance-field-or-method-named-tojson/411)
> **Categoria:** BPM
> **Criado em:** 30/04/2021, 12:49
> **Visualizações:** 2714 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Vagner Duarte** (@vagner_duarte) — 30/04/2021, 12:49

pessoal,

estou tentando dar manutenção em um processo que está retornando um erro de JSON. O erro retornado pelo log é este:

> > > retorno CATCH >>> InternalError: Java class “\[Ljava.lang.reflect.Constructor;” has no public instance field or method named “toJSON”. (#534)

alguem pode me ajudar com este erro. Segue o bloco de código onde pega o erro.

```javascript
try {
    var clientService = fluigAPI.getAuthorizeClientService();
    var data = {
      companyId: getValue("WKCompany") + "",
      serviceCode: "integracaosaseventos",
      endpoint: "/Evento/Inserir",
      method: "POST",
      timeoutService: "250",
      options: {
        mediaType: "application/json",
      },
      params: dadosEvento,
    };

    var vo = clientService.invoke(JSONUtil.toJSON(data));
    var result = vo.getResult();

    log.info(" >>> retorno TRY >>> " + result);
  } catch (error) {
	  log.dir('Dados do Evento ****************' + params);
	  result = error;
    log.info(" >>> retorno CATCH >>> " + result);
  }
```

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 30/04/2021, 13:34

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/vagner_duarte/48/7_2.png) vagner\_duarte:
>
> > `var vo = clientService.invoke(JSONUtil.toJSON(data));`

O erro está nessa linha.
o certo seria

```javascript
var vo = clientService.invoke(JSON.stringify(data));
```

O que acontece é que sua variável data já é um Json, e o que você precisa fazer é converter em string para poder enviar

---

## Resposta #2

**Vagner Duarte** (@vagner_duarte) — 30/04/2021, 13:43

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/daniel_sales/48/22_2.png) Daniel\_Sales:
>
> > `var vo = clientService.invoke(JSON.stringify(data));`

Mas ele ja estava deste jeito, dai pesquisei na internet e tinha um erro parecido, e resolveram desta forma que ficou, alterei, mas continua o mesmo erro.

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 30/04/2021, 14:39

Pode postar o script todo?

---

## Resposta #4

**Vagner Duarte** (@vagner_duarte) — 30/04/2021, 16:08

```javascript
function servicetask33(attempt, message) {
  var CodSebrae = 35;

  var UnidadeOrganizacionalID = hAPI.getCardValue("h_UnidadeOrganizacionalID");

  var tipoProduto = hAPI.getCardValue("tipoProduto");

  //NO MOMENTO ESTA CHUMBADO MAS PRECISA PEGAR O VALOR DO FORMULARIO C = CAPACITAÇÃO E = EDUCAÇÃO.
  var TipoEvento = "C";

  var TipoPublico = hAPI.getCardValue("slct_tipo_publico");
  var PublicoEvento = hAPI.getCardValue("slct_publico_evento");
  var PubCanaisDigitais =
    hAPI.getCardValue("ck_publicarCanaisDigitais") == "on" ? true : false;
  var EventoGratuito =
    hAPI.getCardValue("ck_eventoGratuito") == "on" ? true : false;
  var MinimoParticipantes = parseInt(hAPI.getCardValue("nb_minParticipantes"));
  var MaximoParticipantes = parseInt(hAPI.getCardValue("nb_maxParticipantes"));
  var DiasReserva = parseInt(hAPI.getCardValue("nb_diasParaManterReserva"));
  var CodResponsalvel = hAPI.getCardValue("h_codRespoDisponibili");

  var CodProjeto = hAPI.getCardValue("h_CodProjeto");
  var CodAcaoSeq = parseInt(hAPI.getCardValue("h_CodAcaoSeq"));

  var Aproveitamento =
    hAPI.getCardValue("ck_aproveitamento") == "on" ? true : false;

  var CodEmpreendimentoPublicoFechado = parseInt(hAPI.getCardValue("h_CodPJ"));

  var MinimoPagantes = parseInt(hAPI.getCardValue("nb_minPagantes"));

  var Preco = hAPI.getCardValue("tx_preco");
  Preco = formataMoeda(Preco);

  var DiasEmitirAviso = parseInt(
    hAPI.getCardValue("nb_diasAntecedenciaParaAvisos")
  );
  var EmailAviso = hAPI.getCardValue("eml_email");
  var PermiteDesconto =
    hAPI.getCardValue("ck_permiteDesconto") == "on" ? true : false;

  var DescontoMaximo = hAPI.getCardValue("tx_descontoMax");
  DescontoMaximo = formataMoeda(DescontoMaximo);

  var URL = hAPI.getCardValue("url_url");
  var CodProdutoERP = null;
  var CodFilial = null;

  var rd_salas = hAPI.getCardValue("rd_salas");

  var DiasEnvioAnexo = parseInt(
    hAPI.getCardValue("nb_diasAntecedenciaEnvioAnexo")
  );

  var processo = getValue("WKNumProces");
  var campos = hAPI.getCardData(processo);
  var ListaInstrutor = function (campos) {
    var vetor = [];
    var contador = campos.keySet().iterator();
    while (contador.hasNext()) {
      var id = contador.next();

      if (id.match("nomeInstrutor___")) {
        var campo = campos.get(id);
        var seq = id.split("___");

        var nomeInstrutor = campos.get("nomeInstrutor___" + seq[1]).trim();
        var tipoInstrutor = campos.get("tipoInstrutor___" + seq[1]).trim();
        var FuncionarioCredenciadoId = parseInt(
          campos.get("FuncionarioCredenciadoId___" + seq[1]).trim()
        );
        var CodPessoaJ = campos.get("CodPessoaJ___" + seq[1]).trim();
        var CodParceiro = campos.get("CodParceiro___" + seq[1]).trim();

        // if (tipoInstrutor == "F") {
        //   var json = {
        //     TipoInstrutor: tipoInstrutor + "",
        //     FuncionarioCredenciadoId: CodParceiro + "",
        //     NomeInstrutor: nomeInstrutor + "",
        //   };
        // }
        if (tipoInstrutor == "C") {
          var json = {
            TipoInstrutor: tipoInstrutor + "",
            FuncionarioCredenciadoId: FuncionarioCredenciadoId + "",
            NomeInstrutor: nomeInstrutor + "",
          };
        }
        if (tipoInstrutor == "N") {
          var json = {
            TipoInstrutor: tipoInstrutor + "",
            NomeInstrutor: nomeInstrutor + "",
          };
        }
        if (tipoInstrutor == "P") {
          var json = {
            TipoInstrutor: tipoInstrutor + "",
            CodPessoaJ: CodParceiro + "",
            NomeInstrutor: nomeInstrutor + "",
          };
        }
        vetor.push(json);
      }
    }
    return vetor;
  };

  function tratarData(data) {
    var dt = data.split("/");
    var dia = dt[0];
    var mes = dt[1];
    var ano = dt[2];
    var dat = ano + "-" + mes + "-" + dia;
    return dat;
  }
  function tratarHora(horas) {
    var newHora = horas.split(":");
    var hora = newHora[0];
    var minutos = newHora[1];
    var segundos = "00";
    var HoraFormatada = hora + ":" + minutos + ":" + segundos;
    return HoraFormatada;
  }

  function formataMoeda(valor) {
    valor = valor.trim();
    valor = valor.replace("R$", "");
    valor = valor.replace(".", "");
    valor = valor.replace(",", ".");
    valor = parseFloat(valor);
    return valor;
  }

  if (tipoProduto == "portifolio") {
    var Nome = hAPI.getCardValue("txt_nomeEvento");
    var nb_codProduto = parseInt(hAPI.getCardValue("h_CodProduto"));
    var codProduto = nb_codProduto.toFixed(0);
    var TipoServicoID = parseInt(hAPI.getCardValue("h_TipoServicoID"));
    var ModalidadeID = parseInt(hAPI.getCardValue("h_ModalidadeID"));
    var Combo = hAPI.getCardValue("ck_eventoCombo") == "on" ? true : false;
  } else if (tipoProduto == "instantaneo") {
    var Nome = hAPI.getCardValue("txt_nomeEvento_inst");
    var nb_codProduto = parseInt(hAPI.getCardValue("h_CodProduto_inst"));
    var codProduto = nb_codProduto.toFixed(0);
    var TipoServicoID = parseInt(hAPI.getCardValue("h_TipoServicoID_inst"));
    var ModalidadeID = parseInt(hAPI.getCardValue("h_ModalidadeID_inst"));
    var Combo = false;
  }

  if (rd_salas == "C") {
    var ListaAgenda = function (campos) {
      var vetor = [];
      var contador = campos.keySet().iterator();
      while (contador.hasNext()) {
        var id = contador.next();

        if (id.match("CodCidade___")) {
          var campo = campos.get(id);
          var seq = id.split("___");

          var SalaId = parseInt(campos.get("SalaId___" + seq[1]).trim());
          var CodCidade = parseInt(campos.get("CodCidade___" + seq[1]).trim());
          var CodBairro = parseInt(campos.get("CodBairro___" + seq[1]).trim());
          var CodEstado = parseInt(campos.get("CodEstado___" + seq[1]).trim());
          var FormatoID = parseInt(campos.get("FormatoID___" + seq[1]).trim());
          var Local = campos.get("tx_local___" + seq[1]).trim();

          var dadosLocal = Local.split("-");
          var Logradouro = dadosLocal[0];
          var Complemento = dadosLocal[1];
          var Cep = dadosLocal[3];

          var Nome = campos.get("tx_sala___" + seq[1]).trim();
          var datas = campos.get("tx_datas___" + seq[1]).trim();
          var horarios = campos.get("tx_horarios___" + seq[1]).trim();
          var data = datas.split("-");
          var hora = horarios.split("-");

          var dataInicio = data[0].trim();
          var datainicioFormat = tratarData(dataInicio).trim();

          var dataFim = data[1].trim();
          var datafimFormat = tratarData(dataFim).trim();

          var horaInicio = hora[0].trim();
          var horainicioFormat = tratarHora(horaInicio).trim();

          var horaFim = hora[1].trim();
          var horafimFormat = tratarHora(horaFim).trim();

          var DataHoraInicio =
            datainicioFormat.trim() + " " + horainicioFormat.trim();
          var DataHoraFim = datafimFormat.trim() + " " + horafimFormat.trim();

          var json = {
            TipoData: "D",
            DataHoraInicio: DataHoraInicio + "",
            DataHoraFim: DataHoraFim + "",
            SalaId: SalaId,
            Nome: Nome + "",
            Logradouro: Logradouro + "",
            Complemento: Complemento + "",
            CodCidade: CodCidade,
            CodBairro: CodBairro,
            CodEstado: CodEstado,
            CEP: Cep + "",
            FormatoID: FormatoID,
          };
          vetor.push(json);
        }
      }
      return vetor;
    };
  } else if (rd_salas == "NC") {
    var ListaAgenda = function (campos) {
      var vetor = [];
      var contador = campos.keySet().iterator();
      while (contador.hasNext()) {
        var id = contador.next();

        if (id.match("CodCidade___")) {
          var campo = campos.get(id);
          var seq = id.split("___");

          // var SalaId = parseInt(campos.get("SalaId___" + seq[1]).trim());
          var CodCidade = parseInt(campos.get("CodCidade___" + seq[1]).trim());
          var CodBairro = parseInt(campos.get("CodBairro___" + seq[1]).trim());
          var CodEstado = parseInt(campos.get("CodEstado___" + seq[1]).trim());
          // var FormatoID = parseInt(campos.get("FormatoID___" + seq[1]).trim());
          var Local = campos.get("tx_local___" + seq[1]).trim();

          var dadosLocal = Local.split(" - ");
          var Logradouro = dadosLocal[0];
          var Complemento = dadosLocal[1];
          var Cep = dadosLocal[3];
          Cep = Cep.replace("-", "");
          var Nome = campos.get("tx_sala___" + seq[1]).trim();
          var datas = campos.get("tx_datas___" + seq[1]).trim();
          var horarios = campos.get("tx_horarios___" + seq[1]).trim();
          var data = datas.split("-");
          var hora = horarios.split("-");

          var dataInicio = data[0].trim();
          var datainicioFormat = tratarData(dataInicio).trim();

          var dataFim = data[1].trim();
          var datafimFormat = tratarData(dataFim).trim();

          var horaInicio = hora[0].trim();
          var horainicioFormat = tratarHora(horaInicio).trim();

          var horaFim = hora[1].trim();
          var horafimFormat = tratarHora(horaFim).trim();

          var DataHoraInicio =
            datainicioFormat.trim() + " " + horainicioFormat.trim();
          var DataHoraFim = datafimFormat.trim() + " " + horafimFormat.trim();

          var json = {
            TipoData: "D",
            DataHoraInicio: DataHoraInicio + "",
            DataHoraFim: DataHoraFim + "",
            SalaId: null,
            Nome: Nome + "",
            Logradouro: Logradouro + "",
            Complemento: Complemento + "",
            CodCidade: CodCidade,
            CodBairro: CodBairro,
            CodEstado: CodEstado,
            CEP: Cep + "",
            FormatoID: null,
          };
          vetor.push(json);
        }
      }
      return vetor;
    };
  }
  if (TipoPublico == "A" || TipoPublico == "") {
    CodEmpreendimentoPublicoFechado = null;
    ListaPublicoDefinido = function (campos) {
      campos = null;
    };
  } else if (TipoPublico == "F") {
    ListaPublicoDefinido = function (campos) {
      campos = null;
    };
  } else if (TipoPublico == "D") {
    CodEmpreendimentoPublicoFechado = null;
    var ListaPublicoDefinido = function (campos) {
      var vetor = [];
      var contador = campos.keySet().iterator();
      while (contador.hasNext()) {
        var id = contador.next();

        if (id.match("nome_clientePF___")) {
          var campo = campos.get(id);
          var seq = id.split("___");

          var cpf = campos.get("cpf_clientePF___" + seq[1]).trim();
          var nomePF = campos.get("nome_clientePF___" + seq[1]).trim();
          var nomeEmpresa = campos.get("empresa_clientePF___" + seq[1]).trim();
          var CodPessoaJ = campos.get("h_id_CodPessoaJ___" + seq[1]).trim();
          var CodPessoaF = campos.get("h_id_CodPessoaF___" + seq[1]).trim();

          var json = {
            CodPessoaJ: CodPessoaJ + "",
            CodPessoaF: CodPessoaF + "",
          };
          vetor.push(json);
        }
      }
      return vetor;
    };
  }

  var ListaTipoComercializacao = [];

  var ck_agenciaFixa = hAPI.getCardValue("ck_agenciaFixa");
  var ck_chat = hAPI.getCardValue("ck_chat");
  var ck_foneRecado = hAPI.getCardValue("ck_foneRecado");
  var ck_totens = hAPI.getCardValue("ck_totens");
  var ck_agenciaItineranteTemporaria = hAPI.getCardValue(
    "ck_agenciaItineranteTemporaria"
  );
  var ck_email = hAPI.getCardValue("ck_email");
  var ck_portaAPorta = hAPI.getCardValue("ck_portaAPorta");
  var ck_salaEmpreendedor = hAPI.getCardValue("ck_salaEmpreendedor");
  var ck_aplicativos = hAPI.getCardValue("ck_aplicativos");
  var ck_espacoSebrae = hAPI.getCardValue("ck_espacoSebrae");
  var ck_portal = hAPI.getCardValue("ck_portal");
  var ck_telefone = hAPI.getCardValue("ck_telefone");

  ListaTipoComercializacao = [
    {
      CodMeioAtendimento: ck_agenciaFixa,
    },
    {
      CodMeioAtendimento: ck_chat,
    },
    {
      CodMeioAtendimento: ck_foneRecado,
    },
    {
      CodMeioAtendimento: ck_totens,
    },
    {
      CodMeioAtendimento: ck_agenciaItineranteTemporaria,
    },
    {
      CodMeioAtendimento: ck_email,
    },
    {
      CodMeioAtendimento: ck_portaAPorta,
    },
    {
      CodMeioAtendimento: ck_salaEmpreendedor,
    },
    {
      CodMeioAtendimento: ck_aplicativos,
    },
    {
      CodMeioAtendimento: ck_espacoSebrae,
    },
    {
      CodMeioAtendimento: ck_portal,
    },
    {
      CodMeioAtendimento: ck_telefone,
    },
  ];

  if (PubCanaisDigitais == true) {
    PubCanaisDigitais = "S";
  } else if (PubCanaisDigitais == false) {
    PubCanaisDigitais = "N";
  }

  if (EventoGratuito == true) {
    EventoGratuito = "S";
    MinimoPagantes = null;
    preco = 0;
    PermiteDesconto = false;
  } else if (EventoGratuito == false) {
    EventoGratuito = "N";
  }

  if (Aproveitamento == true) {
    Aproveitamento = "S";
  } else if (Aproveitamento == false) {
    Aproveitamento = "N";
  }

  if (PermiteDesconto == true) {
    PermiteDesconto = "S";
  } else if (PermiteDesconto == false) {
    PermiteDesconto = "N";
    DescontoMaximo = 0;
  }

  if (Combo == true) {
    Combo = 1;
  } else if (Combo == false) {
    Combo = 0;
  }

  if (EventoGratuito == "S") {
    var dadosEvento = {
      CodSebrae: CodSebrae,
      UnidadeOrganizacionalID: UnidadeOrganizacionalID + "",
      CodProduto: codProduto,
      Nome: Nome + "",
      TipoEvento: TipoEvento,
      TipoPublico: TipoPublico + "",
      ListaPublicoDefinido: ListaPublicoDefinido(campos),
      PublicoEvento: PublicoEvento + "",
      PubCanaisDigitais: PubCanaisDigitais + "",
      EventoGratuito: EventoGratuito + "",
      MinimoParticipantes: MinimoParticipantes,
      MaximoParticipantes: MaximoParticipantes,
      DiasReserva: DiasReserva,
      CodProjeto: CodProjeto + "",
      CodAcao: CodAcaoSeq,
      Aproveitamento: Aproveitamento + "",
      CodEmpreendimentoPublicoFechado: CodEmpreendimentoPublicoFechado,
      MinimoPagantes: MinimoPagantes,
      Preco: Preco,
      DiasEmitirAviso: DiasEmitirAviso,
      EmailAviso: EmailAviso + "",
      PermiteDesconto: PermiteDesconto + "",
      DescontoMaximo: DescontoMaximo,
      URL: URL + "",
      TbFat1: null,
      TbFat2: null,
      TbFat3: null,
      TbFat4: null,
      TbFat5: null,
      TbFlx1: null,
      TbFlx2: null,
      TbFlx3: null,
      TbFlx4: null,
      TbFlx5: null,
      ListaInstrutor: ListaInstrutor(campos),
      ListaAgenda: ListaAgenda(campos),
      TipoServicoID: TipoServicoID,
      ModalidadeID: ModalidadeID,
      InstrumentoID: 31,
      MacroeventoID: null,
      DiasEnvioAnexo: DiasEnvioAnexo,
      Responsavel: CodResponsalvel,
      Combo: Combo,
      ListaTipoComercializacao: ListaTipoComercializacao,
      Observacao: null,
      ListaUsuarioInscricao: [
        {
          UsuarioID: CodResponsalvel,
        },
      ],
    };
  }

  if (EventoGratuito == "N") {
    var dadosEvento = {
      CodSebrae: CodSebrae,
      UnidadeOrganizacionalID: UnidadeOrganizacionalID + "",
      CodProduto: codProduto,
      Nome: Nome + "",
      TipoEvento: TipoEvento,
      TipoPublico: TipoPublico + "",
      ListaPublicoDefinido: ListaPublicoDefinido(campos),
      PublicoEvento: PublicoEvento + "",
      PubCanaisDigitais: PubCanaisDigitais + "",
      EventoGratuito: EventoGratuito + "",
      MinimoParticipantes: MinimoParticipantes,
      MaximoParticipantes: MaximoParticipantes,
      DiasReserva: DiasReserva,
      CodProjeto: CodProjeto + "",
      CodAcao: CodAcaoSeq,
      Aproveitamento: Aproveitamento + "",
      CodEmpreendimentoPublicoFechado: CodEmpreendimentoPublicoFechado,
      MinimoPagantes: MinimoPagantes,
      Preco: Preco,
      DiasEmitirAviso: DiasEmitirAviso,
      EmailAviso: EmailAviso + "",
      PermiteDesconto: PermiteDesconto + "",
      DescontoMaximo: DescontoMaximo,
      URL: URL + "",
      TbFat1: null,
      TbFat2: null,
      TbFat3: null,
      TbFat4: null,
      TbFat5: null,
      TbFlx1: null,
      TbFlx2: null,
      TbFlx3: null,
      TbFlx4: null,
      TbFlx5: null,
      ListaInstrutor: ListaInstrutor(campos),
      ListaAgenda: ListaAgenda(campos),
      TipoServicoID: TipoServicoID,
      ModalidadeID: ModalidadeID,
      InstrumentoID: 31,
      MacroeventoID: null,
      DiasEnvioAnexo: DiasEnvioAnexo,
      Responsavel: CodResponsalvel,
      Combo: Combo,
      ListaTipoComercializacao: ListaTipoComercializacao,
      Observacao: null,
      ListaUsuarioInscricao: [
        {
          UsuarioID: CodResponsalvel,
        },
      ],
    };
  }

  log.dir('este é o conteúdo do JSON***************' + JSON.stringify(dadosEvento));
  log.info("TIPO DA SALA --->" + rd_salas);

  try {
    var clientService = fluigAPI.getAuthorizeClientService();
    var data = {
      companyId: getValue("WKCompany") + "",
      serviceCode: "integracaosaseventos",
      endpoint: "/Evento/Inserir",
      method: "POST",
      timeoutService: "250",
      options: {
        mediaType: "application/json",
      }
    };
    data.params = dadosEvento;

    var vo = clientService.invoke(JSON.stringify(data));
    var result = vo.getResult();
    log.info('******************* erro');
    log.info(" >>> retorno TRY >>> " + result);
  } catch (error) {

	  log.info('%%%%%%%%%%%%%%% erro');
	  result = error;
	 log.info('&&&&&&&&&&&&&' + JSON.stringify(result));
    log.info(" >>> retorno CATCH >>> " + result);
  }
}
```

Este é todo o meu código.

Agora está dando o erro:

Erro ReferenceError: “params” is not defined. (#539) - Tempo de Execução 183 ms

---

## Resposta #5

**Willian Laynes** (@Willian_Laynes) — 30/04/2021, 16:50 | ❤️ 2

Adicione em cada campo do teu objeto do “dadosEvento” isso aqui +"", para forçar a virar uma string, quando vai algum campo vazio quebra o JSON.striingify():

Ex:

{
“nome”:minha\_variavel+"",
“idade”:minha\_variavel2+""
}

Se estiver vindo do front, faça lá.

---

## Resposta #6 ✅ RESPOSTA ACEITA

**Willian Laynes** (@Willian_Laynes) — 30/04/2021, 16:54

Teu log info do param faz parte de um objeto.

log.dir(‘Dados do Evento \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*’ + data.params);

---

## Resposta #7

**system** (@system) — 03/05/2021, 10:06

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
