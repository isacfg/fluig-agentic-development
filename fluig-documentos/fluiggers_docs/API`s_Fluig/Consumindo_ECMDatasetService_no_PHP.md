# Consumindo ECMDatasetService no PHP

> **Fonte:** [https://fluiggers.com.br/t/consumindo-ecmdatasetservice-no-php/1205](https://fluiggers.com.br/t/consumindo-ecmdatasetservice-no-php/1205)
> **Categoria:** API`s Fluig
> **Tags:** `dataset`
> **Criado em:** 01/08/2022, 12:41
> **Visualizações:** 544 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Mauricio Freitas** (@mauriciolanner) — 01/08/2022, 12:41

Boa tarde pessoal, estou tentando consumir o ECMDatasetService no PHP, mais precisamente no Laravel. Quanto fiz os testes consumindo o webservice do RM, tudo acontece perfeitamente, porém quando consumo o do fluig gera erro de login e senha

```auto
$client = new SoapClient(env('ECMDatasetService'));

        $client = $client->getDataset([
            "companyId" => "1",
            "username" => "usuario",
            "password" => "teste",
            "name" => "dsCC",
            "fields" => [
                "item" => null
            ],
            "constraints" => [
                "item" => [
                    "contraintType" => null,
                    "fieldName" => "FILIAL",
                    "finalValue" => "010101",
                    "initialValue" => "010101"
                ]
            ],
            "order" => [
                "item" => null
            ]
        ]);
```

Alguem que ja tenha feito isso sabe onde estou errando?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 01/08/2022, 14:21 | ❤️ 1

Não cheguei a trabalhar muito nessa parte de buscar datasets (na verdade só tive um caso por enquanto de consultar o Fluig pra pegar dados de um processo específico).

Aqui fiz assim e funcionou:

```php
$client = new SoapClient(FLUIG_SERVER . '/webdesk/ECMWorkflowEngineService?wsdl');

$result = $client->__soapCall(
    'getInstanceCardData',
    [
        'user' => FLUIG_USER,
        'password' => FLUIG_PASSWORD,
        'companyId' => '1',
        'userId' => FLUIG_USER_ID,
        'processInstanceId' => $processId,
    ]
);
```

---

## Resposta #2

**Mauricio Freitas** (@mauriciolanner) — 01/08/2022, 16:04 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/bruno_gasparetto/48/68_2.png) Bruno\_Gasparetto:
>
> > `$client->__soapCall(`

Perfeito, funcionou, valeu

---
