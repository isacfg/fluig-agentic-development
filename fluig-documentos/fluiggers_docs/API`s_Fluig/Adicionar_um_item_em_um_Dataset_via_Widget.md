# Adicionar um item em um Dataset via Widget

> **Fonte:** [https://fluiggers.com.br/t/adicionar-um-item-em-um-dataset-via-widget/2530](https://fluiggers.com.br/t/adicionar-um-item-em-um-dataset-via-widget/2530)
> **Categoria:** API`s Fluig
> **Tags:** `dataset`, `fluigapi`, `widget`, `webservice`
> **Criado em:** 25/01/2024, 07:37
> **Visualizações:** 241 | **Likes:** 4 | **Respostas:** 2

---

## Pergunta original

**Mendes** (@andersonma) — 25/01/2024, 07:37 | ❤️ 1

Bom dia.
Tenho um Dataset já criado e gostaria de adicionar os registros através de uma Widget, mas não encontrei nenhuma API/WS que me permita adicionar os registros. Alguém tem alguma idéia?

Grato,

---

## Resposta #1

**Mendes** (@andersonma) — 25/01/2024, 15:29

Pessoal, encontrei o WS ECMDatasetService que tem o método updateDataset. Nele tem um parâmetro “**impl**”, alguém já utilizou? não encontrei nenhuma documentação a respeito do conteúdo deste, além de ser uma string.

```auto
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.dataservice.ecm.technology.totvs.com/">
   <soapenv:Header/>
   <soapenv:Body>
      <ws:updateDataset>
         <companyId>1</companyId>
         <username>usuario</username>
         <password>senha-</password>
         <name>dataset</name>
         <description>descricao</description>
         <impl>????</impl>
      </ws:updateDataset>
   </soapenv:Body>
</soapenv:Envelope>
```

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Mendes** (@andersonma) — 25/01/2024, 17:17 | ❤️ 1

Pesssoal, Consegui.

O parâmetro nada mais é do que a própria função de createDataset, por exemplo:

```auto
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.dataservice.ecm.technology.totvs.com/">
   <soapenv:Header/>
   <soapenv:Body>
      <ws:updateDataset>
         <companyId>1</companyId>
         <username>usuario</username>
         <password>senha-</password>
         <name>dataset</name>
         <description>descricao</description>
         <impl>function createDataset(fields, constraints, sortFields) {
                    var dataset = DatasetBuilder.newDataset();

                    //Cria as colunas
                    dataset.addColumn("Coluna1");
                    dataset.addColumn("Coluna2");

                    //Cria os registros
                    dataset.addRow(new Array("valor1", "valo2");
                    return dataset;
                }</impl>
      </ws:updateDataset>
   </soapenv:Body>
</soapenv:Envelope>
```

**Problema:** que sempre que utiliza o método, ele limpa todo conteúdo já cadastrado

**Solução:** Sempre retornar tudo que já está cadastrado, adicionar o novo item e atualizar de uma única vez.

Att,

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 26/01/2024, 09:30 | ❤️ 2

Uma dúvida: nessa situação não compensaria simplesmente criar um formulário e então pesquisar os registros no formulário?

Assim facilita bastante a inserção/remoção de itens.

---
