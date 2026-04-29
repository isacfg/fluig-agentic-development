# Problema com leitura de Dataset

> **Fonte:** [https://fluiggers.com.br/t/problema-com-leitura-de-dataset/3032](https://fluiggers.com.br/t/problema-com-leitura-de-dataset/3032)
> **Categoria:** BPM
> **Tags:** `form`, `dataset`
> **Criado em:** 18/10/2024, 11:44
> **Visualizações:** 76 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Patrick Rehder Bosco** (@PatrickRehder) — 18/10/2024, 11:44

Salve galera, estou com um problema no meu dataset. Eu estou usando uma consulta dentro do dataset para que ele leia duas tabelas e preencha o dataset, segue a consulta abaixo:

SQL = " SELECT CONVERT (DATE, CHAVE.start\_date, 103) AS ‘dataAbertura’, " ;
SQL += " FORM.documentid, ";
SQL += " FORM.matricula, ";
SQL += " FORM.classificaraten ";
SQL += "FROM proces\_workflow CHAVE WITH (NOLOCK) ";
SQL += "INNER JOIN ML001068 FORM WITH (NOLOCK) ";
SQL += "ON ( FORM.documentid = nr\_documento\_card ";
SQL += "AND FORM.matricula = COD\_MATR\_REQUISIT ";
SQL += "AND version = (SELECT Max(version) ";
SQL += "FROM ML001068 ML WITH (NOLOCK) ";
SQL += "WHERE ML.documentid = nr\_documento\_card ";
SQL += "AND ML.matricula = COD\_MATR\_REQUISIT)) ";
if (!!matricula) {
SQL += “WHERE FORM.matricula = '” + matricula + “'”;
}
Dentro do meu formulário eu coloquei uma verificação no arquivo validate para verificar se o usuário tem um chamado aberto desse processo há mais de dois meses, segue o código:

var Matricula = form.getValue(“matricula”);

```
var c1 = DatasetFactory.createConstraint("matricula",Matricula,Matricula,ConstraintType.MUST);
	var ds = DatasetFactory.getDataset("DS_ChamadosRefaturamento",null,[c1],null);

    var dataAtual = new Date();
    var dataAberturaChamado = new Date();
    var resultado = 0;
    var mesAtual = dataAtual.getMonth();
    var mesAberturaChamado = 0;

    for (var i = 0; i < ds.rowsCount; i++) {

        if (ds.getValue(i, "classificaraten") == 'Opções') {
            dataAberturaChamado = ds.getValue(i, "dataAbertura");
            mesAberturaChamado = dataAberturaChamado.getMonth();
            resultado = mesAtual - mesAberturaChamado;

            if (resultado > 2) {
                log
                    .warn("Você possui chamados na atividade classificar atendimento, gentileza avaliar o mesmo para que você possa abrir novos chamados");
                throw "Você possui chamados na atividade classificar atendimento, gentileza avaliar o mesmo para que você possa abrir novos chamados";
            }else{

            }
        }
    }
```

O problema é que está aparecendo o seguinte erro: Erro ao salvar dados de formulário:

TypeError: Cannot read property “rowsCount” from null

Eu testei essa consulta no banco de dados e ela deu certo. Alguém sabe por que o dataset está aparecendo como nulo?

---

## Resposta #1

**venturelli** (@venturelli) — 18/10/2024, 19:21

Confirma o nome do dataset, confere se tem outro warn ou error no log. E principalmente confere se tem um return no seu createDataset.

[Construção do Dataset Avançado - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=412888219) qualquer dúvida sobre o dataset.

Se nada disso ajudar, coloca uns log.info e manda essa parte do início da chamada até o erro e o código do dataset

---

## Resposta #2

**Patrick Rehder Bosco** (@PatrickRehder) — 22/10/2024, 11:37

Valeu por tentar ajudar! Eu descobri que minha consulta JDBC estava errada. Às vezes a consulta que a gente roda no banco não é igual a que tem que rodar no JDBC. Eu mudei o dataset para a seguinte consulta:

SQL = " SELECT CONVERT (DATE, CHAVE.start\_date, 103) AS ‘dataAbertura’, " ;
SQL += " FORM.documentid AS ‘idFluxo’, ";
SQL += " FORM.matricula AS ‘matriculaRequisitante’, ";
SQL += " FORM.classificaraten AS ‘classificaraten’ ";
SQL += "FROM proces\_workflow CHAVE WITH (NOLOCK) ";
SQL += "INNER JOIN ML001068 FORM WITH (NOLOCK) ";
SQL += "ON (CHAVE.NR\_DOCUMENTO\_CARD = FORM.documentid ";
SQL += "AND CHAVE.COD\_MATR\_REQUISIT = FORM.matricula ";
SQL += "AND FORM.version = (SELECT Max(version) ";
SQL += "FROM ML001068 ML WITH (NOLOCK) ";
SQL += "WHERE ML.documentid = CHAVE.NR\_DOCUMENTO\_CARD ";
SQL += "AND ML.matricula = CHAVE.COD\_MATR\_REQUISIT)) ";
if (!!matricula) {
SQL += “WHERE FORM.matricula = '” + matricula + “'”;
}

---
