# Criação de Página Pública

> **Fonte:** [https://fluiggers.com.br/t/criacao-de-pagina-publica/2561](https://fluiggers.com.br/t/criacao-de-pagina-publica/2561)
> **Categoria:** Widgets
> **Tags:** `form`, `processo`, `fluigapi`, `widget`
> **Criado em:** 05/02/2024, 16:51
> **Visualizações:** 407 | **Likes:** 8 | **Respostas:** 5

---

## Pergunta original

**Artur Alves** (@artur.alves) — 05/02/2024, 16:51

Boa tarde!

Precisava de uma ajuda.
Estou tentando criar uma pagina pública, para que seja possível iniciar um processo através dela.

Passei a manhã inteira vendo sobre isso, e vi alguns tópicos, porém, até o momento sem sucesso!

Gostaria de saber o passo a passo se alguém souber;
Vi que tem que ter o OAuth 1.0, criar Tokens, API-Rest e etc.

Alguém já fez algo parecido? Se sim, poderia compartilhar o código para que eu pudesse analisar e tentar replicar na base?

Um que tentei executar, foi esse:

```auto
try{
        var clientService = fluigAPI.getAuthorizeClientService();
        var data = {
            companyId: getValue("WKCompany") + '',
            serviceCode: 'Rest OAuth', //nome do Serviço criado no servidor do FLUIG
            endpoint: '/process-management/api/v2/processes/112/start',
            method: 'POST',
            timeoutSerivce: '300', //segundos
            params: {
                "targerState": 1,
                "targetAssignee": '',
                "subProcessTargetState": 0,
                "comment": '',
                "formFields": {
                    "cod_produto": cod_produto,
    				"quantidade": quantidade,
    				"data_nec": data_nec,
    				"obs_com": obs_com
                }
            }
        }
        var vo = clientService.invoke(JSON.stringify(data));

        if (vo.getResult() == null || vo.getResult().isEmpty()) {
            throw new Exception("Retorno está vazio");
        } else {
            log.info(vo.getResult());
        }
    } catch (err) {
        log.info(vo.getResult());
    }
```

Mas ele dá problema assim que chega no “var clientService = fluigAPI.getAuthorizeClientService();”
Acredito que por ser arquivo .js, de Front-end.

Procurei como fazer pelo front e achei sobre esse código:

```auto
function fnCriarSolic() {
    var data = {
        "targetState": 1,
        "targetAssignee": "Teste",
        "subProcessTargetState": 0,
        "comment": "iniciado automaticamente",
        "formFields": {
        	"cod_produto": cod_produto,
    		"quantidade": quantidade,
    		"data_nec": data_nec,
    		"obs_com": obs_com
        }
    };
    startProcess('codigo do processo', data);
}
function startProcess(processId, data) {
	parent.WCMAPI.Create({
	    url: parent.WCMAPI.serverURL + '/process-management/api/v2/processes/' + processId + '/start',
	    contentType: 'application/json',
	    type: 'POST',
	    data: data,
	    success: function (data, status, jqXHR) {
	        console.log(data.processInstanceId);
	    },
	    error: function (msg) {
	        console.log(msg.status);
	        console.log(msg.statusText);
	        mapaErros(msg.status);
	    }
	});
}
```

E nesse ele retornou erro 404 - Not Found

---

## Resposta #1

**Guilherme Beranger** (@Guilherme_Beranger) — 19/02/2024, 16:38

Boa tarde guerreiro,

conseguiu caminhar? eu tenho um processo com um problema semelhante,

e criei um portal de acesso publico… pode ver através do : [GitHub - guilhermeberanger/fluigapi](https://github.com/guilhermeberanger/fluigapi)

---

## Resposta #2

**Marco Comassetto** (@marcommas) — 23/02/2024, 11:58 | ❤️ 1

Artur,

Já desenvolvi algumas páginas públicas, e sempre utilizo a criação das APIs através do Maven.
Da uma olhada em meu git que tem um exemplo que pode te ajudar.

![](https://github.githubassets.com/favicons/favicon.svg) [GitHub](https://github.com/marcommas/fluig)

![](https://opengraph.githubassets.com/72d61b15265db055ae30e314aa56c8c2607ec380f71e18b1329813a4316cb2db/marcommas/fluig)

### [GitHub - marcommas/fluig](https://github.com/marcommas/fluig)

Contribute to marcommas/fluig development by creating an account on GitHub.

---

## Resposta #3

**Bruno Henrique** (@Bruno_Henrique) — 19/05/2025, 13:46

Marco,
Bom dia

Estou tentando utilizar seu exemplo, e surgiu algumas dúvidas. No ConnectRest, tem o consumer\_key e consumer\_secret (que peguei no cadastro do app do fluig), porém logo abaixo pede um usuário e senha, qual seria esse usuário e senha (linha 39)? E na linha 101 é só passar o nome do meu dataset? E teria um exemplo de como eu faria essa consulta no .js da widget.

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/05/2025, 09:20

Na linha 39 provavelmente o user é o Access Token e a password é o Secret Token. Mas não conhecia assinar chamada assim. Na verdade ainda estou estudando as opções de usar OAuth com Java.

Linha 101 ele sobrescreve o nome do dataset pra forçar a widget a só permitir um dataset específico.

Caso não tenha alterado nada da widget quando a exportou pro Fluig você a chamaria assim:

POST `https://enderecodofluig.com.br/WSRestOAuth/rest/conn/dsConsulta`

E o corpo JSON:

```json
{
    "name": "ds_meu_dataset",
    "fields": null,
    "constraints": [
        {
            "_field": "processoId",
            "_initialValue": 3578,
            "_finalValue": 3578,
            "_type": 1
        }
    ],
    "order": null
}
```

---

## Resposta #5

**Bruno Henrique** (@Bruno_Henrique) — 20/05/2025, 11:03 | ❤️ 1

Depois de muitas tentativas ontem consegui implementar e já esta funcionando. Obrigado pelo apoio.

---

## Resposta #6 ✅ RESPOSTA ACEITA

**Artur Alves** (@artur.alves) — 12/06/2025, 10:10 | ❤️ 2

Bom dia, pessoal!

Após alguns estudos, consegui realizar a criação de uma página pública, fora do sistema fluig, ou seja, uma página que está postada em outro site e que se comunica com o fluig, realizando a criação de uma solicitação; Podendo até realizar consultas no BD como se fosse um Zoom;

Surgiu uma demanda de criação de uma página de Denúncias aqui na emrpesa, para que os colaboradores pudessem registrar as mesmas, porém, era necessário que fosse pública e não exigisse login, já que temos muitos colaboradores e ficaria inviável ter que criar login, etc.

Mas como já sabemos da principal dificuldade que há no FLUIG em deixarmos uma widget como página pública, que é a exposição de dados sensíveis como Tokens e etc.

Realizei a criação utilizando HTML, CSS e JS mesmo, porém, fiz a comunicação entre as páginas utilizando PHP e o ReCaptcha do Google para tornar mais seguro, já que no PHP, quando você inspeciona a página, ele não mostra o código, já que não fica no ‘front-end’;

Se quiserem, compartilho o código com vocês;

Não sei se já utilizaram o PHP para comunicação entre eles, mas me serviu muito bem, abrindo um leque de possibilidades, já que consegui realizar a consulta de API de Criação de Fluxos, podemos estudar para consultar outras coisas através de outras API’s.

---

## Resposta #7

**Bruno Gasparetto** (@Bruno_Gasparetto) — 12/06/2025, 10:42 | ❤️ 1

Solução incrível!

Essa comunicação com os itens do Fluig sem vazar as credenciais de WS/API sempre dá dor de cabeça.

Aqui eu uso bastante PHP pra comunicação com o Fluig, mas no geral acabo usando mais para criação de arquivos (PDF, Word, Excel etc.). Então o Fluig, via atividade de serviço/datasets, chamam os endpoints do servidor PHP e ele fornece os arquivos, efetuando a consulta em algum Processo, por exemplo.

Já essa comunicação direta da página com os endpoints ainda não realizei. Estava pensando em tentar algo com widget java pra criar a API ou em algumas formas de efetuar as chamadas ao PHP com mais segurança e essa sua ideia do ReCaptcha é ótima.

---

## Resposta #8

**Artur Alves** (@artur.alves) — 12/06/2025, 11:13 | ❤️ 3

Sim, o ReCaptcha ajuda demais, ainda mais que dentro do código, você consegue verificar se o mesmo foi concluído para só assim, enviar a requisição para o servidor;

Além de que, o ReCaptcha do google é uma API gratuita para casos de até 10.000 requisições mensais.

E você tem acesso ao painel, onde consegue acompanhar quantas requisições foram feitas, quantas deram certos, etc.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/f/f8e53ecd886ae19f98cec5e59c2f341750bac95b_2_690x377.png)

Inseri o Captcha, pois como a página está pública, estávamos com receio de algum software malicioso enviar diversas requisições para o fluig, assim, podendo abrir solicitações ilimitadas em um curto período de tempo e acabar travando todo o servidor;

Abaixo segue o código principal:

```auto
<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    session_start();

    require_once 'includes/keys.php';

    $secretKey = SECRET_KEY_CAPTCHA;

    $response = $_POST['g-recaptcha-response'];

    $remoteip = $_SERVER['REMOTE_ADDR'];

    // Se o token estiver vazio
    if (empty($response)) {
        error_log("O token do reCAPTCHA está vazio. A caixa pode não ter sido marcada.");
        exit("reCAPTCHA não marcado.");
    }

    $url = "https://www.google.com/recaptcha/api/siteverify";
    $data = [
        'secret' => $secretKey,
        'response' => $response,
        'remoteip' => $remoteip
    ];

    $options = [
        'http' => [
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data),
        ]
    ];

    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    $responseKeys = json_decode($result, true);

   //se o Captcha for válido:
    if ($responseKeys["success"]) {
        // URL da API
        $url = LINK;

        // Dados para autenticação OAuth 1.0
        $consumer_key = CONSUMER_KEY;
        $consumer_secret = CONSUMER_SECRET;
        $token = TOKEN;
        $token_secret = TOKEN_SECRET;

        // Armazena as variáveis do formulário público
        $data_ocorrencia = $_POST['data_ocorrencia'];
        if ($data_ocorrencia) {
            $data_ocorrencia = DateTime::createFromFormat('Y-m-d', $data_ocorrencia)->format('d/m/Y');
        }
        $denunciante = $_POST['denunciante'];
        $contato = $_POST['contato'];
        $filial = $_POST['filial_ocorrencia'];
        $envolvidos = $_POST['envolvidos'];
        $relato_ocorrencia = $_POST['relato_ocorrencia'];
        $observacao = $_POST['observacoes'];

        // Corpo da requisição em JSON
        $data = [
            "targetState" => 6,
            "targetAssignee" => "Pool:Role:WF018_RECEPCAO",
            "subProcessTargetState" => 0,
            "comment" => "Iniciado via Site Embrasa (API)",
            "formFields" => [
                "data_denuncia" => $data_ocorrencia,
                "denunciante" => $denunciante,
                "contato" => $contato,
                "filial" => $filial,
                "envolvidos" => $envolvidos,
                "relato" => $relato_ocorrencia,
                "observacoes" => $observacao
            ]
        ];

        $json_data = json_encode($data);

        // Função para gerar assinatura OAuth 1.0
        function build_oauth_header($url, $consumer_key, $consumer_secret, $token, $token_secret)
        {
            $oauth = [
                'oauth_consumer_key' => $consumer_key,
                'oauth_nonce' => bin2hex(random_bytes(16)),
                'oauth_signature_method' => 'HMAC-SHA1',
                'oauth_timestamp' => time(),
                'oauth_token' => $token,
                'oauth_version' => '1.0',
            ];

            $base_info = build_base_string($url, 'POST', $oauth);
            $composite_key = rawurlencode($consumer_secret) . '&' . rawurlencode($token_secret);
            $oauth_signature = base64_encode(hash_hmac('sha1', $base_info, $composite_key, true));
            $oauth['oauth_signature'] = $oauth_signature;

            // Monta o cabeçalho Authorization
            $header = 'OAuth ';
            $values = [];
            foreach ($oauth as $key => $value) {
                $values[] = "$key=\"" . rawurlencode($value) . "\"";
            }
            $header .= implode(', ', $values);
            return $header;
        }

        function build_base_string($baseURI, $method, $params)
        {
            ksort($params);
            $r = [];
            foreach ($params as $key => $value) {
                $r[] = "$key=" . rawurlencode($value);
            }
            return $method . "&" . rawurlencode($baseURI) . '&' . rawurlencode(implode('&', $r));
        }

        // Cabeçalho OAuth
        $auth_header = build_oauth_header($url, $consumer_key, $consumer_secret, $token, $token_secret);

        // Executa a requisição cURL
        $ch = curl_init();
        curl_setopt_array($ch, [
            CURLOPT_URL => $url,
            CURLOPT_POST => true,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTPHEADER => [
                "Authorization: $auth_header",
                "Content-Type: application/json"
            ],
            CURLOPT_POSTFIELDS => $json_data,
        ]);

        $response = curl_exec($ch);
        $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $err = curl_error($ch);
        curl_close($ch);

        // Resultado
        if ($err) {
            echo "Erro cURL: $err";
        } else {
            if ($http_code === 200 || $http_code === 201) {
                // Decodifica a resposta JSON da API
                $response_data = json_decode($response, true);
                // Pega o ID da solicitação
                $process_instance_id = $response_data['processInstanceId'];

                // Redireciona para response.php e passa o processInstanceId como parâmetro
                header("Location: response.php?processInstanceId=$process_instance_id");
                exit; // Garante que o código abaixo não será executado
            } else {
                echo "<h2 class='error'>Erro na solicitação. Código HTTP: $http_code</h2>";
                echo "<pre>Resposta da API:\n$response</pre>";
            }
        }
    } else {
        $_SESSION['erro'] = "Por favor, marque o reCAPTCHA.";
        header("Location: denuncias.php");
        exit;
    }

}
```

Como podem ver no código principal, que está chamando a requisição, não armazeno nenhum dado sensível.

Assim torna mais seguro, pois estou respeitando a estrutura de pastas, ou seja, dados como Links, Urls, Tokens, etc. estão todos definidos dentro de um arquivo php que está dentro da pasta include.

---
