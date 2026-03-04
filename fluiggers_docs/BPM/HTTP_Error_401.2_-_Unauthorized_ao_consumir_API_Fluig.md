# HTTP Error 401.2 - Unauthorized ao consumir API Fluig

> **Fonte:** [https://fluiggers.com.br/t/http-error-401-2-unauthorized-ao-consumir-api-fluig/526](https://fluiggers.com.br/t/http-error-401-2-unauthorized-ao-consumir-api-fluig/526)
> **Categoria:** BPM
> **Tags:** `fluigapi`
> **Criado em:** 23/06/2021, 15:48
> **Visualizações:** 1249 | **Likes:** 3 | **Respostas:** 2

---

## Pergunta original

**Rodrigo de Oliveira** (@redschenko) — 23/06/2021, 15:48 | ❤️ 1

Boa tarde.

Em meu ambiente Fluig, tenho habilitado a autenticação integrada (link [Configurando Autenticação Integrada - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=162170863)).
Isto permite que os usuários acessem o Fluig sem a necessidade de usuário e senha, utilizando a autenticação integrada com o AD/Domínio

Agora estou desenvolvendo um processo que cuja uma das atividades irá consumir uma API do próprio Fluig (link [TOTVS Fluig API](https://api.fluig.com/latest/content-management/swagger-ui/#/Documents)).
Entretanto a execução da atividade está apresentando erro:

**HTTP Error 401.2 - Unauthorized**
**You are not authorized to view this page due to invalid authentication headers.**

Aparentemente a execução está apresento erro devido a integração com o AD.

Para consumir estou usando o seguinte:

```auto
//nroDoc = número do documento no GED.
var clientService = fluigAPI.getAuthorizeClientService();
var data = {
    companyId : getValue("WKCompany") + '',
    serviceCode : 'FluigAPI', //Nome do serviço cadastrado no Painel de controle
    endpoint : '/content-management/api/v2/documents/'+nroDoc+'?expand=publicUrl',
    method : 'GET',
    timeoutService: '100'
}

var vo = clientService.invoke(JSON.stringify(data));
```

Alguém sabe qual o procedimento devo utilizar para que seja possível consumir API do próprio Fluig neste cenário?

Desde já agradeço a atenção.

At
Rodrigo de Oliveira.

---

## Resposta #1

**Vinicius de Moura Silveira** (@vinny.silveira) — 25/06/2021, 16:36

Boa tarde [@redschenko](/u/redschenko) !! Tudo certo?

Como você configurou o serviço FluigAPI no teu painel de controle? Colocou a autenticação certinho lá? E onde exatamente você está fazendo essa chamada? É num dataset ou evento de workflow?

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Rodrigo de Oliveira** (@redschenko) — 28/06/2021, 14:21 | ❤️ 2

Boa tarde [@vinny.silveira](/u/vinny.silveira) !
Agora está certo.

Refiz o serviço e reiniciei o servidor. Após isto, funcionou.
Ficou configurado da seguinte forma:

![Sem título2](https://fluiggers.com.br/uploads/default/original/1X/6c17b4df643b70cd200db82fa3a3057c24069400.png)

Como pode ver, não foi necessário uma autenticação.
Entretanto, tive que separar em duas atividades, sendo uma para gravar o arquivo no GED e outra para pegar a url pública.
Quando eu tentei gravar o arquivo no GED e pegar a url na mesma atividade, apresentou problemas, pois não estava reconhecendo que o arquivo estava como público.

E respondendo a última pergunta, eu estou fazendo essa chamada no evento de workflow.

Obrigado pela atenção.

At
Rodrigo de Oliveira
[@redschenko](/u/redschenko)

---

## Resposta #3

**Vinicius de Moura Silveira** (@vinny.silveira) — 29/06/2021, 08:06

Bom dia!

Que bom que conseguiu resolver! Mas é bem estranho esse comportamento… Num widget eu publico e depois faço outro request no mesmo instante (após o upload é claro) para resgatar a URL pública e funciona normal.

---

## Resposta #4

**system** (@system) — 12/07/2021, 11:30

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
