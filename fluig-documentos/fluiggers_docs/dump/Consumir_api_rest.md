# Consumir api rest

> **Fonte:** [https://fluiggers.com.br/t/consumir-api-rest/3362](https://fluiggers.com.br/t/consumir-api-rest/3362)
> **Categoria:** API`s Fluig
> **Tags:** `dataset`
> **Criado em:** 30/07/2025, 17:17
> **Visualizações:** 170 | **Likes:** 5 | **Respostas:** 9

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 30/07/2025, 17:17

Prezado, sou completamente ignorante com API REST no Fluig. Alguém poderia me ajudar a criar um serviço e, depois, via Javascript acessar os dados por esse serviço?
Eu preciso consultar a compra de passagem de uma agência de viagem. Existe a Argo que oferece uma API para isto.

Gratíssimo

---

## Resposta #1

**Pablo Pádua** (@Pablo_Padua) — 01/08/2025, 13:31 | ❤️ 3

Para cadastrar um serviço, vá em Painel de Controle → Serviços → Novo Serviço

No modal que for aberto, você irá informar o tipo de serviço → REST

Insira o Nome e Descrição do Serviço, lembrando que esse nome será utilizado dentro de um dataset posteriormente, através do clientService.

No campo “domínio”, você irá inserir o DNS/BASE URL da API.

Logo abaixo, temos a opção de autenticação, com as possibilidades Basic, oAuth1, oAuth2, jwt etc. Isso varia muito de API pra API, então será necessário consultar a documentação da Argo para ver o tipo de autenticação deles. Caso seja um bearer token jwt que não expira, basta selecionar a opção “Custom” no FLUIG e inserir "Bearer " + seu token.

Após isso, o ultimo campo de preenchimento é o “URL para teste de Serviço”, nele você pode inserir uma URL teste pra validar que a consulta está de fato funcionando, lembrando que não é necessário inserir a base url novamente nessa url de teste, já que já foi informada no campo “Domínio”.

Após cadastrado seu serviço REST, basta chamá-lo normalmente via dataset. Segue um exemplo de chamada:

```auto
var columns = [
    "COLUNA1",
    "COLUNA2"
  ];

var clientService = fluigAPI.getAuthorizeClientService();
    var data = {
      companyId: String(getValue("WKCompany")),
      serviceCode: "nome do serviço cadastrado",
      endpoint: "endpoint que quer consultar",
      dataType: "json",
      method: "GET", //METODOS: GET, POST, PUT, DELETE
      options: { encoding: "UTF-8" },
      timeoutService: "600"
    };

    log.info("(dsREST) Chamando REST com:");
    log.dir(data);

    var restCall = clientService.invoke(JSON.stringify(data));
    log.info("(dsREST) REST retornou:");
    log.dir(restCall);

    if (restCall.result === "") return datasetError("(dsREST) REST retornou vazio.");
    if (restCall.httpStatusResult !== 200) return datasetError(restCall.result);

    var result = JSON.parse(restCall.result);
    log.info("(dsREST) Resultado parseado:");

    dataset.addRow([result.variavelRetornoJson, result.variavelRetornoJson2]);
```

A variável result possui o retorno do endpoint, então basta adaptar o .addRow para o atributo do JSON retornado.

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 01/08/2025, 14:52

Muito obrigado, Pablo. Vou verificar.

---

## Resposta #3

**MAURO SIMOES** (@Mautresim) — 04/08/2025, 09:32

Meu problema, Caro [@Pablo\_Padua](/u/pablo_padua) não é o código de leitura do endpoint. Meu problema é a criação do Serviço. A tela para os parâmetros aceita as inserções de valores nos campos, mas o teste do registro do Serviço não funciona, mesmo em APis públicas, tais como as do viacep.com.br, por exemplo. Aí a documentação diz para ir no servidor do Fluig, pegar o certificado, mexer nas variáveis de ambiente do Windows, etc. Mas nada disso funciona.

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 05/08/2025, 09:26

No domínio coloque o endereço completo pra “base” da API. Ex: `https://servicodados.ibge.gov.br/api/v1`.

Assim, quando chamar o endpoint pode passar só o resto da URL. Ex: `/localidades/municipios/`

![image](https://fluiggers.com.br/uploads/default/optimized/2X/7/73281ce2e8d336b1b8e949a42b9b039800479b65_2_320x500.png)

Aí é só testar:

![image](https://fluiggers.com.br/uploads/default/original/2X/3/388c0ec8d69c2d201e7087512c0ca0a921d319f4.png)

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 05/08/2025, 09:32 | ❤️ 1

Exemplo que tenho usando autenticação com Bearer Token:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/3/31206f749713cc1b25c31bbb0fa3df2e4daf6ebd_2_243x500.png)

---

## Resposta #6

**MAURO SIMOES** (@Mautresim) — 05/08/2025, 09:56

Caro [@Bruno\_Gasparetto](/u/bruno_gasparetto), com a chamada sem autenticação usando a URL do IBGE também funciona para mim. Funciona para você aquele domínio ‘[https://viacep.com.br](https://viacep.com.br)’, com o teste ‘/ws/20020010/json’?

---

## Resposta #7

**Bruno Gasparetto** (@Bruno_Gasparetto) — 05/08/2025, 10:08 | ❤️ 1

![image](https://fluiggers.com.br/uploads/default/original/2X/e/efc80e175ce3760d86ac42e64157d0b56d4a2825.png)

![image](https://fluiggers.com.br/uploads/default/optimized/2X/a/a8ca47c73dc26505ff39ecc6f9c973a5669a3a9d_2_328x500.png)

---

## Resposta #8

**MAURO SIMOES** (@Mautresim) — 05/08/2025, 10:09

Eu acho que estou com problema de permissão de porta.

---

## Resposta #9

**MAURO SIMOES** (@Mautresim) — 04/09/2025, 16:10

[@Bruno\_Gasparetto](/u/bruno_gasparetto) eu tenho credenciais como estas abaixo; e só estas.

Não sei como preencher os campos na criação do serviço rest.

url: [https://api.arquivei.com.br/v1](https://api.arquivei.com.br/v1)
X-API-ID: abcd
X-API-KEY: efgh

Os campos dos serviços rest nada tem a ver, diretamente, pelo rótulo, com estas credenciais.

Saberia me dizer o que escolho/preencho em

Tipo de Autenticação
Chave consumidora
Consumer Secret
Token de acesso
URL solicitação de Token
URL Autorização de Usuário
Usuário (nem tenho isto, como dito)
Senha (nem tenho isto, como dito)
Confirmação da senha (também não tenho)

Qualquer tipo de autenticação, qualquer preenchimento de campo, sempre dá erro.

---

## Resposta #10 ✅ RESPOSTA ACEITA

**MAURO SIMOES** (@Mautresim) — 06/09/2025, 15:36

Colegas, consegui resolver. Vários pontos estavam travando.

Primeiro, a versão do Fluig, antes da de 20250902, não me deixava criar um serviço do tipo REST e com o tipo de autenticação ‘customer’.
A patir da atualização, consegui informar as duas chaves necessárias no campo ‘customer’.

Segundo, a documentação do Fluig é falha e a gente só tem informações picadas aqui e ali.

Mas, se não fosse o chatGTP e me ajudar não iria conseguir de jeito nenhum. E, assim, consegui ler as Notas Fiscais da Arquivei (Qive) de modo que o resultado são vários objetos Javascript, facinhos de ler.

---
