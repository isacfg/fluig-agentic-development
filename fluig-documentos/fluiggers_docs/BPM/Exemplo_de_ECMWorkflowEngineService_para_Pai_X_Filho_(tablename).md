# Exemplo de ECMWorkflowEngineService para Pai X Filho (tablename)

> **Fonte:** [https://fluiggers.com.br/t/exemplo-de-ecmworkflowengineservice-para-pai-x-filho-tablename/205](https://fluiggers.com.br/t/exemplo-de-ecmworkflowengineservice-para-pai-x-filho-tablename/205)
> **Categoria:** BPM
> **Tags:** `form`, `fluigapi`
> **Criado em:** 23/03/2021, 17:02
> **Visualizações:** 1178 | **Likes:** 2 | **Respostas:** 4

---

## Pergunta original

**Romulo Pereira** (@romuloccomp) — 23/03/2021, 17:02

Oi pessoal, estou precisando de um exemplo de XML para o **ECMWorkflowEngineService** , que tenha o **cardData** preenchendo um estrutura **Pai X Filho (tablename).**
Para preenchimento normal conseguimos com essa estrutura:

```auto
<cardData>
<item>
<item>Campo</item>
<item>Valor do campo no form</item>
</item>
</cardData>
```

Alguém tem algum exemplo similar?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 23/03/2021, 17:56 | ❤️ 1

Você está usando o método **saveAndSendTask**?

No ECMWorkflowEngineService nunca testei, mas no **ECMCardService** eu faço assim:

```xml
<cardData>
	<item>
	   <field>tableid___1</field>
	   <value>nomeDaTabela</value>
	</item>
	<item>
	   <field>data___1</field>
	   <value>11/03/2021</value>
	</item>
	<item>
	   <field>autor___1</field>
	   <value>Gabriela</value>
	</item>
	<item>
	   <field>registro___1</field>
	   <value>Faltou detalhe sobre o item x.</value>
	</item>
 </cardData>
```

Caso não exista o Registro 1 ele será criado. Caso ele exista será sobreescrito.

Aí é só atualizar o número do registro de acordo com o que já tem salvo. Se a tabela já tem 3 itens, então se colocar \_\_\_4 será criado um novo item.

Talvez na ECMWorkflowEngineService funcione igual.

---

## Resposta #2

**Romulo Pereira** (@romuloccomp) — 24/03/2021, 09:32

Excelente, vou testar.

---

## Resposta #3

**Romulo Pereira** (@romuloccomp) — 24/03/2021, 10:05

Funcionou não =/

```auto
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <soap:Fault>
            <faultcode>soap:Client</faultcode>
            <faultstring>Unmarshalling Error: elemento inesperado (uri:"", local:"field"). Os elementos esperados são &lt;{}item> </faultstring>
        </soap:Fault>
    </soap:Body>
</soap:Envelope>
```

Vou continuar tentando.

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 24/03/2021, 10:15

Mas você adaptou pro formato esperado no ECMWorkflowEngineService? Eu vi que no seu exemplo usa somente item, não tem field e value. Então talvez o correto seja:

```xml
<cardData>
	<item>
	   <item>tableid___1</item>
	   <item>nomeDaTabela</item>
	</item>
	<item>
	   <item>autor___1</item>
	   <item>Gabriela</item>
	</item>
 </cardData>
```

---

## Resposta #5

**Romulo Pereira** (@romuloccomp) — 24/03/2021, 10:23

Sim.

Para quando envio so nm\_nome\_colaborador e nm\_matricula funciona.

```auto
<cardData>
    <!--Zero or more repetitions:-->
    <item>
       <item>nm_nome_colaborador</item>
       <item>Romulo Pereira</item>
    </item>
    <item>
       <item>nm_matricula</item>
       <item>RSILVA</item>
    </item>
    <item>
        <field>nm_tb_data___1</field>
        <value>24-03-2021</value>
    </item>
    <item>
        <field>nm_tb_lancamento___1</field>
        <value>TESTE DE LANCA</value>
    </item>
    <item>
        <field>nm_tb_valor_real___1</field>
        <value> 1245.65 </value>
    </item>
 </cardData>
```

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 24/03/2021, 10:49

Mas você não colocou o tableid\_\_\_1 né? Ele indica o nome da tabela pai filho.

---

## Resposta #7

**Romulo Pereira** (@romuloccomp) — 24/03/2021, 11:24 | ❤️ 1

Obrigado [@Bruno\_Gasparetto](/u/bruno_gasparetto) deu certo:

```auto
<cardData>
    <!--Zero or more repetitions:-->
    <item>
       <item>nm_nome_colaborador</item>
       <item>Romulo Pereira</item>
    </item>
    <item>
       <item>nm_matricula</item>
       <item>RSILVA</item>
    </item>
    <item>
        <item>tableid___1</item>
        <item>tb_lancamentos</item>
    </item>
    <item>
        <item>nm_tb_data___1</item>
        <item> teste </item>
    </item>
    <item>
        <item>nm_tb_lancamento___1</item>
        <item> teste </item>
    </item>
    <item>
        <item>nm_tb_valor_real___1</item>
        <item> teste </item>
    </item>
 </cardData>
```

---
