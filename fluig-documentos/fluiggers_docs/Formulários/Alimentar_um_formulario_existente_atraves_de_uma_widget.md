# Alimentar um formulario existente atraves de uma widget

> **Fonte:** [https://fluiggers.com.br/t/alimentar-um-formulario-existente-atraves-de-uma-widget/1557](https://fluiggers.com.br/t/alimentar-um-formulario-existente-atraves-de-uma-widget/1557)
> **Categoria:** Formulários
> **Tags:** `form`, `widget`, `ecm`
> **Criado em:** 30/12/2022, 14:40
> **Visualizações:** 937 | **Likes:** 4 | **Respostas:** 7

---

## Pergunta original

**Lucas Maciel dos Santos** (@Lucas_Maciel_dos_San) — 30/12/2022, 14:40

Estou precisando alimentar um formulário a partir de uma widget. Estou iniciando no Fluig e não sei quais dos serviços SOAP usar

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 01/01/2023, 21:34 | ❤️ 1

Você pode usar o [ECMCardService](https://tdn.totvs.com/pages/releaseview.action?pageId=662867789#Documenta%C3%A7%C3%A3odosWebServices-ECMCardService).

Nesse SOAP tem vários métodos pra manipular os dados de formulário. Já usei o `updateCardData` para alterar os dados salvos no formulário.

Segue uma função que utilizo pra atualizar os dados por uma widget:

```javascript
/**
 * Salva os dados no formulário
 *
 * @param {number} cardDocumentId Id do formulário
 * @param {object} data Dados a serem persistidos no formulário
 */
function saveCardData(cardDocumentId, data) {
    const items = Object.entries(data).reduce(
        (acc, item) => acc + `<item><field>${item[0]}</field><value>${item[1]}</value></item>`
        , ""
    );

    const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.dm.ecm.technology.totvs.com/">
        <soapenv:Header/>
        <soapenv:Body>
            <ws:updateCardData>
                <companyId>${WCMAPI.organizationId}</companyId>
                <username>${fluigUsername}</username>
                <password>${fluigPassword}</password>
                <cardId>${cardDocumentId}</cardId>
                <cardData>
                    ${items}
                </cardData>
            </ws:updateCardData>
        </soapenv:Body>
        </soapenv:Envelope>`;

    return fetch(
        `${WCMAPI.serverURL}/webdesk/ECMCardService?wsdl`,
        {
            method: "POST",
            redirect: "follow",
            credentials: "omit",
            headers: {
                "Content-Type": "text/xml;charset=utf-8"
            },
            body: xml
        })
        .then(response => response.text())
        .then(xmlText => (new DOMParser()).parseFromString(xmlText, "text/xml"))
        .then(function (response) {
            const message = response.getElementsByTagName("webServiceMessage")[0].textContent;

            if (message != "ok") {
                throw message;
            }

            return response;
        });
}
```

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 02/01/2023, 08:35

Boa gaspareto,

Vale para página publica tb?
Porque ai da para usar como uma middleWare essas rotinas

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 02/01/2023, 10:34 | ❤️ 1

[@Daniel\_Sales](/u/daniel_sales) , dá sim. Até fazendo a chamada pelo SoapUI funciona de boa. É uma chamada normal SOAP. Só precisa avaliar o risco mesmo.

O problema de fazer chamada SOAP pelo JS assim é que a gente precisa colocar o usuário e senha do usuário no XML e o Fluig nem aceita isso na tag header, passando senha em base64, vai direto no campo usuário e senha.

Se alguém inspecionar o JS vai achar essa informação. Mesmo que faça igual a mim, que guardo em formulário e puxo a informação por dataset, basta inspecionar as chamadas ao Fluig pra conseguir pegar o usuário e senha.

Em uma página com usuário logado talvez a API REST melhore a segurança (acho que a [Form Management](https://api.fluig.com/latest/ecm-forms/swagger-ui/#/) ) talvez atenda. Mas até agora não usei muito a API REST por ser muito fraca de opções quando comparada com a SOAP.

Em uma página pública, com mais tipos de usuários acessando, o risco aumentaria bastante. Talvez o ideal seja realmente fazer um middleware pra não exibir a senha e garantir a segurança.

---

## Resposta #4

**Lucas Maciel dos Santos** (@Lucas_Maciel_dos_San) — 02/01/2023, 14:00

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/bruno_gasparetto/48/68_2.png) Bruno\_Gasparetto:
>
> > `<cardId>${cardDocumentId}</cardId>`

aonde que eu vejo o cardId do meu documento?

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 02/01/2023, 18:45 | ❤️ 1

[@Lucas\_Maciel\_dos\_San](/u/lucas_maciel_dos_san) , quando você consulta um dataset que é de um formulário ele normalmente tem o `metadata#id` e/ou o `documentid`, que representam o id do dado do formulário.

Então antes de tentar atualizar os dados do formulário você precisa antes pegar esse ID, seja pesquisando por algum campo específico, ou de uma lista, etc.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/bc7412116a31a8b3a034577c49efa9ce4e7ac72a_2_689x216.png)

---

## Resposta #6

**Daniel Sales** (@Daniel_Sales) — 03/01/2023, 08:41

Dou preferencia sempre a api rest por ser mais facil de usar?
Funciona bem mas em pagin publica não uso pois tem que expor as chaves rest o mesmo problema do soap passando usuario e senha. Vou tentar usar a passagem de parametro via url talves deum pouco mais de segurança.
Você é monstro kkkkk.

---

## Resposta #7

**Lucas Maciel dos Santos** (@Lucas_Maciel_dos_San) — 03/01/2023, 08:52

nesse caso eu estaria atualizando os dados de um formulário existente ou criando um formulário com os dados na qual eu quero? ( eu preciso guardar as informações escritas na widget em formulário ).

---

## Resposta #8

**Bruno Gasparetto** (@Bruno_Gasparetto) — 03/01/2023, 09:14 | ❤️ 1

[@Lucas\_Maciel\_dos\_San](/u/lucas_maciel_dos_san) , já que é criação e numa widget veja a possibilidade de usar a chamada REST [Form Management](https://api.fluig.com/latest/ecm-forms/swagger-ui/#/Form_records/create). Se não me engano ela já utiliza a sessão do usuário logado. Mas se for usar a SOAP é o método `create`.

O documentid, já que é uma criação, acredito que seja o ID da “pasta” do formulário. Mas como nunca corri atrás de criação de registro, sempre fui nas alterações, não tenho certeza. Esse ID você acha no GED do Fluig. Um formulário é representado como se fosse uma pasta.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/92abcba5eb3a2c77cc4181cecb9e715824335c0b_2_690x295.png)

---

## Resposta #9

**Bruno Gasparetto** (@Bruno_Gasparetto) — 03/01/2023, 09:17

[@Daniel\_Sales](/u/daniel_sales), até uso a REST em algumas coisas, mas no geral ela dá muito menos opções do que a SOAP.

A parte boa da REST é que pra página privada ela já pega a sessão do usuário logado, então é uma segurança a mais.

Eu ainda penso em fazer algumas modificações nas widgets que temos pra chamar datasets que fazam as chamadas aos WS ao invés de deixar usuário e senha sendo enviados pro navegador. Mas como por enquanto só usamos em páginas privadas acabei não correndo com essa melhoria.

---
