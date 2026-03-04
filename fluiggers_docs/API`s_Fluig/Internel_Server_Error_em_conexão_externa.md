# Internel Server Error em conexão externa

> **Fonte:** [https://fluiggers.com.br/t/internel-server-error-em-conexao-externa/2969](https://fluiggers.com.br/t/internel-server-error-em-conexao-externa/2969)
> **Categoria:** API`s Fluig
> **Tags:** `dataset`, `fluigapi`, `api`, `externo`
> **Criado em:** 12/09/2024, 10:12
> **Visualizações:** 154 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Rodrigo Vasconcelos** (@Rodrigo_Vasconcelos) — 12/09/2024, 10:12

Olá, preciso de ajuda.

Estou tentando acessar as informações de um dataset de forma externa através de uma API RESTO do Fluig. Já tentei fazer isso de diferentes maneiras, com o Python, PHP e até mesmo com Power BI. Na primeira tentativa, todos funcionam(exceto o Power Bi, esse não está indo de modo nenhum) e retornam um JSON como esperado. No entanto, se eu rodar novamente, recebo um erro 500 (Internal Server Error), o que torna impossível utilizar a API em uma aplicação externa. Alguém já passou por algo semelhante antes?

Código que estou usando no python

```auto
import requests

oauth_consumer_key = "exemplo"
oauth_nonce = "exemplo"
oauth_signature = "exemplo"
oauth_signature_method = "HMAC-SHA1"
oauth_timestamp = "exemplo"
oauth_token = "exemplo"
oauth_version = "1.0"

idata_set = "id_dataset_exemplo"

url = f"""http://dominio.exemplo:8080/dataset/api/v2/dataset-handle/search?datasetId={idata_set}&oauth_consumer_key={oauth_consumer_key}&oauth_token={oauth_token}&oauth_signature_method={oauth_signature_method}&oauth_timestamp={oauth_timestamp}&oauth_nonce={oauth_nonce}&oauth_version={oauth_version}&oauth_signature={oauth_signature}"""


payload = {}
headers = {
  'Cookie': 'JSESSIONID="exemplo"; JSESSIONIDSSO=exemplo'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

retorno do erro

```auto
<html><head><title>Error</title></head><body>Internal Server Error</body></html>
```

Por favor, me ajudem kkk

---

## Resposta #1

**venturelli** (@venturelli) — 12/09/2024, 18:22

Se está usando oauth, não faze sentido passar no header os cookies. Pode ser isso que faça funcionar da primeira vez e depois “consuma” a sessão.

Não é a minha praia, mas podes tentar:

```auto
import time
import requests
from requests_oauthlib import OAuth1

oauth_consumer_key = "exemplo_consumer_key"
oauth_consumer_secret = "exemplo_consumer_secret"
oauth_token = "exemplo_token"
oauth_token_secret = "exemplo_token_secret"

oauth = OAuth1(oauth_consumer_key,
               client_secret=oauth_consumer_secret,
               resource_owner_key=oauth_token,
               resource_owner_secret=oauth_token_secret,
               signature_method='HMAC-SHA1')

dataset_id = "id_dataset_exemplo"
url = f"http://dominio.exemplo:8080/dataset/api/v2/dataset-handle/search?datasetId={dataset_id}"

response = requests.get(url, auth=oauth)

print(response.text)
```

Caso não funcione ainda, adiciona o log completo do erro. Quem sabe tem alguma informação.

---
