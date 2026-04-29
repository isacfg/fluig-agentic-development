# Serviço ECMDatasetService WS Fluig

> **Fonte:** [https://fluiggers.com.br/t/servico-ecmdatasetservice-ws-fluig/2898](https://fluiggers.com.br/t/servico-ecmdatasetservice-ws-fluig/2898)
> **Categoria:** Sem categoria
> **Criado em:** 24/07/2024, 09:26
> **Visualizações:** 50 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Wanderley Junior** (@gomeswjunior) — 24/07/2024, 09:26

Fala pessoal,
Alguém pode me dizer se há um erro nessa chamada? Porque só recebo “Retorno de dataset inválido, verifique sua implementação.” O detalhe é que o dataset formHelpdesk é um dataset de formulário que possui o campo “soli\_categoria”. No REST não tenho esse problema.

```auto
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.dataservice.ecm.technology.totvs.com/">
   <soapenv:Header/>
   <soapenv:Body>
      <ws:getDataset>
         <companyId>1</companyId>
         <username>usuario</username>
         <password>senha</password>
         <name>formHelpdesk</name>
         <fields>
            <!--Zero or more repetitions:-->
            <item>soli_categoria</item>
         </fields>
         <constraints>
            <!--Zero or more repetitions:-->
            <item>
               <!--Optional:-->
               <contraintType>1</contraintType>
               <!--Optional:-->
               <fieldName>soli_categoria</fieldName>
               <!--Optional:-->
               <finalValue>Fluig</finalValue>
               <!--Optional:-->
               <initialValue>Fluig</initialValue>
               <likeSearch>false</likeSearch>
            </item>
         </constraints>
         <order>
            <!--Zero or more repetitions:-->
            <item>null</item>
         </order>
      </ws:getDataset>
   </soapenv:Body>
</soapenv:Envelope>
```

---

## Resposta #1

**venturelli** (@venturelli) — 29/07/2024, 08:52

A única coisa que me chamou a atenção foi esse null no order. Envie a tag vazia:

```auto
<order>
         </order>
```

Mas se não funcionar dessa forma, envia o log de erro. Essa mensagem pode acontecer se aconteceu algum erro no script do dataset ou na tentativa pelo Fluig de recuperar e validar o dataset em si

---
