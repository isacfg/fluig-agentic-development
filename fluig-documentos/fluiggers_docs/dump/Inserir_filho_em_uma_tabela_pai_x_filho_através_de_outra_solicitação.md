# Inserir filho em uma tabela pai x filho através de outra solicitação

> **Fonte:** [https://fluiggers.com.br/t/inserir-filho-em-uma-tabela-pai-x-filho-atraves-de-outra-solicitacao/724](https://fluiggers.com.br/t/inserir-filho-em-uma-tabela-pai-x-filho-atraves-de-outra-solicitacao/724)
> **Categoria:** BPM
> **Tags:** `form`, `paixfilho`, `tabela`
> **Criado em:** 18/10/2021, 16:53
> **Visualizações:** 1571 | **Likes:** 1 | **Respostas:** 3

---

## Pergunta original

**Victor Castro** (@victorcastro) — 18/10/2021, 16:53

Eu consigo inserir um filho em uma tabela que está na solicitação 1 através da solicitação 2?

---

## Resposta #1

**Mauricio Freitas** (@mauriciolanner) — 20/10/2021, 15:44

Por API da sim, você pode modificar processos através de API, mas pra isso vai precisar recuperar o numero do processo.

---

## Resposta #2

**Victor Castro** (@victorcastro) — 20/10/2021, 16:47

Pode me dar um exemplo?

---

## Resposta #3

**Odair Batista** (@odair.batista) — 21/10/2021, 15:40

Use a API ECMCardService

---

## Resposta #4

**Victor Castro** (@victorcastro) — 21/10/2021, 17:02

[@odair.batista](/u/odair.batista) poderia me dar um exemplo?

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 21/10/2021, 19:06

Eu já fiz isso em uma Widget. Segue o exemplo [Fluig: Exemplo de Inserção de Pai Filho por Web Service em Widget · GitHub](https://gist.github.com/brunogasparetto/f73ea69a21eeee0315604a456b28a0a6)

Em evento no backend você pode acessar fazer um pouco diferente, instanciando o serviço ECMCardService e usando o método updateCardData dele.

No manual da hAPI tem um exemplo usando dessa forma. [hAPI - TOTVS Fluig - TDN](https://tdn.totvs.com/display/public/fluig/hAPI)

---

## Resposta #6

**Odair Batista** (@odair.batista) — 21/10/2021, 20:35 | ❤️ 1

Aqui tem um exemplo simples também em ADVPL, deixei bem resumido…

```auto
//Efetua a implantação de filho no formulário FLUIG
	cXML := '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.dm.ecm.technology.totvs.com/">
	cXML += '   <soapenv:Header/>'
	cXML += '   <soapenv:Body>'
	cXML += '      <ws:updateCardData>'
	cXML += '         <companyId>' + cFlgComp + '</companyId>'
	cXML += '         <username>' + cFlgUser + '</username>'
	cXML += '         <password>' + cFlgPwd + '</password>'
	cXML += '         <cardId>' + cFormId + '</cardId>'
	cXML += '         <cardData>'
	cXML += '            <item>'
	cXML += '               <field>' + 'PRBRANCH___' + allTrim(cValToChar(nGridRow)) + '</field>'
	cXML += '               <value>' + SC1->C1_FILIAL + '</value>'
	cXML += '            </item>'
	cXML += '            <item>'
	cXML += '               <field>' + 'PRNUMBER___' + allTrim(cValToChar(nGridRow)) + '</field>'
	cXML += '               <value>' + SC1->C1_NUM + '</value>'
	cXML += '            </item>'
	cXML += '            <item>'
	cXML += '               <field>' + 'PRDATE___' + allTrim(cValToChar(nGridRow)) + '</field>'
	cXML += '               <value>' + dToC(SC1->C1_EMISSAO) + '</value>'
	cXML += '            </item>'
	cXML += '            <item>'
	cXML += '               <field>' + 'PRTOTAL___' + allTrim(cValToChar(nGridRow)) + '</field>'
	cXML += '               <value>' + allTrim(transform(SC1->C1_UVALOR, "@E 999,999,999,999.99")) + '</value>'
	cXML += '            </item>'
	cXML += '            <item>'
	cXML += '               <field>' + 'PRSTATUS___' + allTrim(cValToChar(nGridRow)) + '</field>'
	cXML += '               <value>' + if(cStatus == 'delete', 'Eliminado', if(!isFound, 'Incluido', 'Alterado')) + '</value>'
	cXML += '            </item>'
	cXML += '         </cardData>'
	cXML += '      </ws:updateCardData>'
	cXML += '   </soapenv:Body>'
	cXML += '</soapenv:Envelope>'

	oFluig := tWsdlManager():New()
	oFluig:lVerbose := .t.

	if !oFluig:ParseURL('http://seuservidor.com.br/webdesk/ECMCardService?wsdl')
		alert('Não foi possível comunicação com o serviço Fluig')
	else
		if !oFluig:SetOperation('updateCardData')
			alert('Não foi possível requisitar o operação do serviço Fluig')
		else
			if !oFluig:SendSoapMsg(cXML)
				alert('Não foi possível enviar requisição ao serviço Fluig')
			else
				cResults := oFluig:GetSoapResponse()	//Obtem retorno
			endif
		endif
	endif

	oFluig := nil
```

---
