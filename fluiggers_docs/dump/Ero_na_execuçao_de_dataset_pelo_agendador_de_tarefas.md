# Ero na execuçao de dataset pelo agendador de tarefas

> **Fonte:** [https://fluiggers.com.br/t/ero-na-execucao-de-dataset-pelo-agendador-de-tarefas/1058](https://fluiggers.com.br/t/ero-na-execucao-de-dataset-pelo-agendador-de-tarefas/1058)
> **Categoria:** Ambiente Fluig
> **Criado em:** 27/04/2022, 23:01
> **Visualizações:** 1264 | **Likes:** 7 | **Respostas:** 5

---

## Pergunta original

**Julio Lazzarini** (@FluiLazza) — 27/04/2022, 23:01 | ❤️ 3

Boa noite colegas, Criei um agendamento no agendador de tarefas tipo “sincronização de Dadaset”, associando um dataset especifico avançado, com a função de enviar email:

Se eu executo este dataset manualmente, pela listagem de datasets, funciona perfeitamente enviando emails aos destinatarios. Mas se executo pelo agendador de tarefas, não envia os emails e no log da a seguinte infoemação abaisxo como warning: “Encontrou mais de uma trigger para o job datasetId:ds\_GED\_docto\_vencimentoTue Apr 26 14:00:44 BRT 2022 da empresa 1 o que pode acontecer caso o job tenha sido executado manualmente”

Alguem ja passou por isso ou sabe o que tenho que fazer no dataset para que o mesmo funcione?

---

## Resposta #1

**Patrick Cavalcante Moraes** (@Patrick_Cavalcante) — 28/04/2022, 12:24 | ❤️ 1

Bom dia,

Possuo alguns dataset no agendado de tarefas também, e está apresentando esse mesmo alerta, porém passa dele.

Aparamente é algum erro no serviço RealTime, após este alerta, me apresenta “RealTime is down!” e “Connection timed out: connect - 166”.

Abrir um ticket para verificação, o estranho que minha base de homologação está funcionando.

Aqui é o proceso que eles haviam me encaminhando para teste.

" peço que recrie os serviços conforme orientado na documentação [Recriar Serviços do Fluig - TOTVS Fluig - TDN](https://tdn.totvs.com/x/YtwGEQ), em seguida apague as pastas temporárias conforme a documentação [Fluig - Plataforma - CON - Como excluir as pastas temporárias do diretório de instalação](https://centraldeatendimento.fluig.com/hc/pt-br/articles/360026666131-Fluig-Plataforma-CON-Como-excluir-as-pastas-tempor%C3%A1rias-do-diret%C3%B3rio-de-instala%C3%A7%C3%A3o?source=search) e também as pastas keys.
Após isso suba os serviços novamente."

Se resolver me informe como por gentileza.

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 28/04/2022, 20:15

Parece erro do fluig tive problemas recente com o agendador de tarefas e vai sair uma correção para isto.

---

## Resposta #3

**Patrick Cavalcante Moraes** (@Patrick_Cavalcante) — 03/05/2022, 11:28

Bom dia,

Sabem se conseguiram resolver este erro?

---

## Resposta #4

**Daniel Sales** (@Daniel_Sales) — 03/05/2022, 14:06

Previsão de Liberar no dia 10/05

---

## Resposta #5

**Julio Lazzarini** (@FluiLazza) — 11/05/2022, 18:06

Boa tarde Daniel, sabe se houve esta liberacao?

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 12/05/2022, 10:39

Qual versão vocês estão usando?

Aqui estamos com a 1.7.1-220125 e não tivemos problemas com Dataset Sincronizado.

Vi que dia 10/05 saiu a versão 1.7.1-220510.

Sinceramente eu sou muito receoso em atualizar o Fluig se não estiver com nenhum defeito, afinal sempre aparecem alguns bugs nas atualizações e o tempo pra correção geralmente é longo.

Aliás, na caixa de busca de downloads existe a opção de Fluig 1.8 (mas não tem nada pra baixar ainda).

---

## Resposta #7

**Daniel Sales** (@Daniel_Sales) — 13/05/2022, 08:59 | ❤️ 1

Sim houve a liberação dia 10/05 Já aplicamos aqui e surtiu melhoras significativas de performance.

[@Bruno\_Gasparetto](/u/bruno_gasparetto) no saiu justamente devido a um bug no agendador de tarefas.
Eu abri um ticket referente ao problema e saiu a correção.

---

## Resposta #8

**Julio Lazzarini** (@FluiLazza) — 18/05/2022, 22:44

Conforme a totvs me informou, dataset com envio de email não funciona.
Então pergunto aos colegas fluiggers, de que forma eu posso fazer para que um dataset seja executado todos os dias em tal horario especifico? Alguem pode me ajudar?

---

## Resposta #9

**Daniel Sales** (@Daniel_Sales) — 22/05/2022, 18:41

Boa noite,
Já tentou jornalizar esse dataset?
O dataset jornalizado roda de tempos em tempos e busca os dados num servidor externo e cria uma tabela espelho no fluig. Logo se vc colocar nesse dataset jornalizado seus disparos de email deve funcionar. Faça o teste e nos avise.

---

## Resposta #10

**MAURO SIMOES** (@Mautresim) — 23/05/2022, 17:40 | ❤️ 2

(Estou editando tudo para ficar menos ruim. Não há mais referência a tabela interna do dataset. E há uma função que transforma mês de número para nome porque o banco de dados Oracle está num servidor que está com uma configuração em que os meses aparecem como letras)

Eu tenho este Dataset Avançado que envia email regularmente, todos os dias, sem problemas.

Se servir, adapte-o.

A versão do meu Fluig é Crystal Lake 1.7.1-211222.

Ele procura no Protheus por aniversariantes.

E aprendi foi aqui mesmo, neste Forum de que gosto muito.

Feita a codificação, foi só agendar para todos os dias às 09:00hs.

O bloco útil naturalmente é na função onSync e não uso a createDataset.

Basicamente, é o seguinte:

```auto
function onSync(lastSyncDate) {
            var dataSource = "/jdbc/PROTHEUS";//cuidado. Case sensitive
            var created = false;
            var dataset = DatasetBuilder.newDataset();
            var ic = new javax.naming.InitialContext();
            var ds = ic.lookup(dataSource);
//--------selecionando os de hoje e de mais 4 dias
let txtDataHoje = new Date().toLocaleDateString();//MON dd, yyyy
let txtDataReforma = fRetraduzDataParaLocal(txtDataHoje);//dd/mm/yyyy
let dia = txtDataReforma.substr(0,2);
let mes = txtDataReforma.substr(3,2);
let ano = txtDataReforma.substr(6,4);
//----Tornando os meses em número e reformulando a data para dd/mm/yyyy
let mesDiaVez = (mes*1).toString()+(dia*1).toString();//mesdia de hoje na string
//-----calculando 4 dias à frente
let diasAFrente = 4;
let objDataFutura = new Date(ano*1,(mes*1-1),(dia*1+diasAFrente));//mês-1 por exigência do js
let txtDataFutura = objDataFutura.toLocaleDateString();//MON dd, yyyy futura dias à frente
let txtDataFuturaReforma = fRetraduzDataParaLocal(txtDataFutura);//dd/mm/yyyy
let diaF = txtDataFuturaReforma.substr(0,2);
let mesF = txtDataFuturaReforma.substr(3,2);
let mesDiaFrente = (mesF*1).toString()+(diaF*1).toString();
//-----------------------------
let myQuery="SELECT DISTINCT R.RA_NOMECMP,R.RA_NASC,R.RA_XFORNEC,R.RA_EMAIL,"+
"R.RA_CATFUNC "+
"FROM SRA010 R "+
"WHERE R.RA_DEMISSA  = '        ' "+
"AND cast(substr(R.RA_NASC,5,4) as number) >= "+mesDiaVez+" "+
"AND cast(substr(R.RA_NASC,5,4) as number) <= "+mesDiaFrente+" "+
"AND R.RA_CATFUNC IN ('P','E','M','A') "+
"AND R.D_E_L_E_T_ = ' ' "+
"UNION " +
"SELECT DISTINCT S.RA_NOMECMP,S.RA_NASC,S.RA_XFORNEC,S.RA_EMAIL,S.RA_CATFUNC "+
"FROM SRA020 S " +
"WHERE S.RA_DEMISSA  = '        ' "+
"AND cast(substr(S.RA_NASC,5,4) as number) >= "+mesDiaVez+" "+
"AND cast(substr(S.RA_NASC,5,4) as number) <= "+mesDiaFrente+" "+
"AND S.RA_CATFUNC IN ('P','E','M','A') "+
"AND S.D_E_L_E_T_ = ' ' "+
"ORDER BY RA_NASC,RA_NOMECMP";
            log.info("myQuery ONSYNC SELECT  ==================== " + myQuery);
            try {
                var conn = ds.getConnection();
                var stmt = conn.createStatement();
                var rs = stmt.executeQuery(myQuery);
                var columnCount = rs.getMetaData().getColumnCount();
                while (rs.next()) {
                    if (!created) {
                        for (var i = 1; i <= columnCount; i++) {
                            dataset.addColumn(rs.getMetaData().getColumnName(i));
                        }
                        created = true;
                    }
                    var Arr = [];
                    for (var i = 1; i <= columnCount; i++) {
                        var obj = rs.getObject(rs.getMetaData().getColumnName(i));
                        if (null !== obj) {
                            Arr[i - 1] = rs.getObject(rs.getMetaData().getColumnName(i)).toString();
                                     } else {
                            Arr[i - 1] = "null";
                        }
                    }
                    dataset.addRow(Arr);
                }//while

            } catch (e) {
                log.error("ERRO==============> " + e.message);
            } finally {
                if (rs !== null) {
                    rs.close();
                }
                if (stmt !== null) {""
                    stmt.close();
                }
                if (conn !== null) {
                    conn.close();
                }
            }//finally
//-------------------
    var template = "tpl_aniversario";
    var parametros = new java.util.HashMap();
      let destinatarios = new java.util.ArrayList();
       destinatarios.add("mausim@meudominio.com.br");//ativado para teste
let concatena = "<table style='text-align:center/'>";
let concatenaFuturo = "<table style='text-align:center/'>";
let intTemHoje=0;
let intTemFuturo=0;
for (var j = 0; j < dataset.rowsCount; j++) {
    //----se for RPA, tem de ter EMAIL DO UCRG
    let categoria = dataset.getValue(j,'RA_CATFUNC');
    let emailUcrg = dataset.getValue(j,'RA_EMAIL');
    emailUcrg = emailUcrg.toUpperCase();
    let intPodeConsiderar = 1;

    let nome =dataset.getValue(j, 'RA_NOMECMP').trim();
    let sigla = dataset.getValue(j, 'RA_XFORNEC').trim().toLowerCase();
    let nasc = dataset.getValue(j, 'RA_NASC').trim().toLowerCase();
    let foto = "https://www.meudominio.com.br/institucional/imagens/"+sigla+".png";
    //---pegando dia e mês da data do nascimento que chega yyyymmdd
    let dia = nasc.substr(6,2);
    let mes = nasc.substr(4,2);
    //--
    if(mes.toString()+dia.toString()==mesDiaVez){
        //é aniversariante de hoje
        intTemHoje=1;
     concatena = concatena +
            "<tr><td style='padding:10px;'>"+
            "<img src='" + foto + "' " +
            "width='100' height='100'></td>"+
            "<td style='padding:10px;'>" +
            nome + "</td><td style='padding:10px;'>" +
            dia +"/"+mes+ "</td></tr>";
 parametros.put("nome", concatena);
    }else{
    //é aniversariante futuro
            intTemFuturo=1;
 concatenaFuturo = concatenaFuturo +
            "<tr><td style='padding:10px;'>"+
            "<img src='" + foto + "' " +
            "width='100' height='100'></td>"+
            "<td style='padding:10px;'>" +
            nome +" (Categoria deste profissional: "+categoria+")</td><td style='padding:10px;'>" +
            dia +"/"+mes+ "</td></tr>";
 parametros.put("nome", concatenaFuturo);
    }
}//for j
 concatena = concatena +'</table>';
//-------------------HOJE?
if(intTemHoje==1){
    parametros.put("subject", "Aniversariantes do dia (dataset a_ds_ucrg_avancao) ");
                    votos="<p>Aos amigos aniversariantes, "+
        "nossos votos de felicidades.</p>";
    parametros.put("votos", votos);
    notifier.notify("fluig", template, parametros, destinatarios, "text/html");
}
//-----------------FUTUROS?
if(intTemFuturo==1){
    log.info("Tem futuros");
    parametros.put("subject", "Aniversariantes FUTUROS  (dataset a_ds_ucrg_avancao)");
                    votos="<p>Aniversariantes e suas datas</p>";
    parametros.put("votos", votos);
    notifier.notify("fluig", template, parametros, destinatarios, "text/html");
}
//------os aniversariantes nulos têm de ficar por último, porque do contrário o...
//...put "nome" abaixo iria apagar os nomes futuros
if(intTemHoje===0){
    log.info("Não tem hoje");
       parametros.put("subject", "Não há aniversariantes do dia (dataset a_ds_ucrg_avancao) ");
                    votos="<p>Hoje, "+txtDataReforma +", não há aniversariantes.</p>";
    parametros.put("votos", votos);
     parametros.put("nome", "");  //anula o parâmetro dos outros que podem ter dados
    notifier.notify("fluig", template, parametros, destinatarios, "text/html");
}
   return dataset;
}//onSync
```
```auto
function createDataset(fields, constraints, sortFields) {

        }
```
```auto
function onMobileSync(user) {

        }
```
```auto
function  fRetraduzDataParaLocal(txtDataHoje){
let numeroMes=0;
//----
let mesLido = txtDataHoje.substr(0,3);
let diaLido = txtDataHoje.substr(4,2);
let anoLido = txtDataHoje.substr(8,4);
//----
switch(mesLido.toUpperCase()){
    case "JAN":
        numeroMes="01";
        break;
    case "FEV":
        numeroMes="02";
        break;
    case "MAR":
        numeroMes="03";
        break;
    case "APR":
        numeroMes="04";
        break;
    case "MAY":
        numeroMes="05";
        break;
    case "JUN":
        numeroMes="06";
        break;
    case "JUL":
        numeroMes="07";
        break;
    case "AUG":
        numeroMes="08";
        break;
    case "SEP":
        numeroMes="09";
        break;
    case "OCT":
        numeroMes="10";
        break;
    case "NOV":
        numeroMes="11";
        break;
    case "DEC":
        numeroMes="12";
        break;
}//switch
return diaLido+"/"+numeroMes+"/"+anoLido;
    }// fRetraduzDataParaLocal
```

---

## Resposta #11

**Julio Lazzarini** (@FluiLazza) — 23/05/2022, 18:04

Opa Daniel, desculpe a pergunta, mas como eu jornalizo?

---

## Resposta #12

**Bruno Gasparetto** (@Bruno_Gasparetto) — 23/05/2022, 18:36

A documentação [Sincronização de datasets - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=212899013) até que explica bem como fazer dataset jornalizado e outros tipos de sincronização.

Mas de forma resumida:

1.  Definir a estrutura do Dataset na função `defineStructure`;
2.  Criar o Dataset e toda a lógica de atualização na função `onSync`;
3.  Ir no painel de controle do Fluig e agendar a sincronização do Dataset.

---

## Resposta #13

**Julio Lazzarini** (@FluiLazza) — 14/08/2022, 22:35

opa, obrigado Bruno. apliquei a chamada do dataset pelo onsync e funcionou

---
