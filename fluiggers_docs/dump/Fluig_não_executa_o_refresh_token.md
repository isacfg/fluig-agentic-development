# Fluig não executa o refresh token

> **Fonte:** [https://fluiggers.com.br/t/fluig-nao-executa-o-refresh-token/2414](https://fluiggers.com.br/t/fluig-nao-executa-o-refresh-token/2414)
> **Categoria:** API`s Fluig
> **Tags:** `processo`, `bpm`
> **Criado em:** 10/12/2023, 22:44
> **Visualizações:** 434 | **Likes:** 1 | **Respostas:** 8

---

## Pergunta original

**Daniel Sales** (@Daniel_Sales) — 10/12/2023, 22:44

Quando configuramos no serviços do fluig uma api de terceiros com autenticação oauth 2.0 la colocamos as informações referente a obtenção de um novo token de acesso e segundo o suporte da totvs o fluig não faz o refresh token, mesmo tendo as informações la imputadas. O mesmo me disse que tenho que atualizar manualmente estas informações.
Alguem sabe se existe um metodo para faze o refresh token?

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 11/12/2023, 12:22 | ❤️ 1

Ainda não tive essa necessidade. Mas já vi um amigo comentado que fez da seguinte forma.

Criou um dataset sincronizado onde executava a api de tempo em tempo, para obter o novo token.

De posse desse novo tokem ele usava o serviço SOAP e alterava o token antigo do dataset por esse novo token que foi obtido pelo dataset sincronizado.

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 11/12/2023, 13:07

Tive uma situação de tentar utilizar um WS com OAuth com grant\_type Password e o Fluig não tem essa opção. No caso logava numa central de autenticação (tipo o Identity) que era por OAuth (e aí utilizava password) e a aplicação em si autenticava via JWT.

Acabei fazendo tudo na mão, deixando o serviço no Fluig só pra indicar a URL. Aí no `clientService.invoke` coloquei os cabeçalhos com o token JWT gerado.

Minha única utilização dessa parte de OAuth do Fluig foi pra deixar aplicações externas o acessarem, mas serviço dele indo pra outros ainda não fiz.

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 11/12/2023, 17:22

Opa acionei o suporte da totvs pois a documentação fal que é obrigatorio preencher esses dados se o token expirade tempos em tempo logo o lfuig tem que fazer. Aguardando eles responderem como contorno cadastrei o servido que estou utiliando com as autenticações e criei um servoço so para o refresh dai se otoken tiver expirado chamo o serviço de refrash pego o tokne gravo no via banco no lugar do outro token. So falta finalizar a gravação do token pois o metodo que usava na 1.7 não ta indo. Ou to fazendo besteira ou parou de funcionar kkkkkk.

```javascript
//Armazenar esse token no fluig
	var dataSource = "/jdbc/AppDS";
	var ic = new javax.naming.InitialContext();
	var ds = ic.lookup(dataSource);
	QUERY = "UPDATE fdn_authorizeclientdata SET ACCESS_TOKEN='"+ json.access_token +"' WHERE  AUTHORIZECLIENTDATA_ID=25;";
	log.info("Query "+QUERY);
	try {
		var conn = ds.getConnection();
		var stmt = conn.createStatement();
		var rs = stmt.executeUpdate(QUERY);

        dataset.addRow(["Sucesso Update"]);
	} catch (e) {
		log.error("ERRO==============> " + e.message);
		dataset.addRow([e.message]);
		return dataset;
	} finally {
		if (stmt != null) {
			stmt.close();
		}
		if (conn != null) {
			conn.close();
		}
	}
	return dataset;
```

---

## Resposta #4

**Augusto Bem-Haja** (@Augusto_Bem-Haja) — 28/01/2025, 09:29

Olá Bruno,
Estou tentando gerar um JWT num dataset Fluig. Consegui fazer o encode em Base64 do header e paylod, porém estou com dificuldade de criptografar a parte de Signature com RSA Sha256 (RS256). Você gerou o JWT no Fluig, sabe indicar alguma forma de fazer isso?
Grato

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 28/01/2025, 10:40

[@Augusto\_Bem-Haja](/u/augusto_bem-haja) , no caso eu não gerei manualmente um JWT pro Fluig. Eu efetuo a autenticação no serviço externo e ele me retorna um JWT, e aí eu o uso nas chamadas posteriores. Isso só porque nas opções do Fluig não encontrei nada que suprisse os parâmetros que eu tinha que passar pros serviços (eles não seguiam OAUTH).

Sua intenção é criar um JWT na mão pra validar o acesso de alguém ao seu Fluig?

Talvez o Fluig já tenha uma biblioteca de JWT instalada (muito provável). Aí só precisaria descobrir qual é pra conseguir usá-la direto no dataset. Mas nunca tentei algo assim em java.

---

## Resposta #6

**Augusto Bem-Haja** (@Augusto_Bem-Haja) — 28/01/2025, 15:23

Olá [@Bruno\_Gasparetto](/u/bruno_gasparetto) eu estou gerando este JWT para poder solicitar um token Bearer da Docusign. Eu preciso gerar este JWT e enviar numa requisição REST ao serviço deles, pra obter o retorno do Bearer.
Gerando o JWT via [JWT.io](http://JWT.io) on line, eu envio a requisição via postman e obtenho o bearer deles corretamente. Como preciso usar os serviços da Docusign no Fluig, então precisava gerar ester token, sempre q fosse fazer uma requisição a um serviço Docusign.
Como boa prática, a docusign recomenda que deixemos um tempo de expiração não muito longo no JWT, então preciso deixar dinâmico.

---

## Resposta #7

**Bruno Gasparetto** (@Bruno_Gasparetto) — 29/01/2025, 10:59

Nunca corri atrás disso em Java, mas vi esse gist que pareceu promissor.

[gist.github.com](https://gist.github.com/lesstif/655f6b295a619306405621e02634a08d)

#### [https://gist.github.com/lesstif/655f6b295a619306405621e02634a08d](https://gist.github.com/lesstif/655f6b295a619306405621e02634a08d)

##### HMacTest.java

```Java
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

public class HMacTest {

    public static final String ALGORITHM = "HmacSHA256";

    public static String calculateHMac(String key, String data) throws Exception {
        Mac sha256_HMAC = Mac.getInstance(ALGORITHM);
```
This file has been truncated. [show original](https://gist.github.com/lesstif/655f6b295a619306405621e02634a08d)

---

## Resposta #8

**Daniel Sales** (@Daniel_Sales) — 29/01/2025, 13:54

Se não me engano o [@daniel.cabral](/u/daniel.cabral) ja fez integração com a docusign.
mas pelo fluig padrão não vai. Se adocusign aceitar gerar um beartoken passando usuario e senha da para fazer tranq1uilo no fluig

---

## Resposta #9

**Daniel Cabral Santos** (@daniel.cabral) — 29/01/2025, 15:04

Na trave, foi a D4Sign na época. Tive alguns problemas com token, no final apelei e pedia token a cada requisição.

---

## Resposta #10

**Daniel Sales** (@Daniel_Sales) — 25/05/2025, 08:35

[@Augusto\_Bem-Haja](/u/augusto_bem-haja) Evoluiu na sua demanda. Eu to integrando o fluig com o docusign e esbarrei exatamente no seu problema. Caso afirmativo disponibilize o codigo por favor.
Caso eu consiga disponibilizo minha solução aqui.

---

## Resposta #11

**Augusto Bem-Haja** (@Augusto_Bem-Haja) — 25/05/2025, 09:32

Oi [@Daniel\_Sales](/u/daniel_sales) não evolui não. Atualmente eu gerei um token com duração longa, via [JWT.io](http://JWT.io), e estou seguindo o meu projeto. A cada requisição eu preciso pedir um token novo a Docusign, mas o JWT que envio no cabeçalho é sempre o mesmo. Foi uma soluçã provisória que encontrei.

---

## Resposta #12

**Daniel Sales** (@Daniel_Sales) — 25/05/2025, 16:11

Então acho que mudou eu gerei um assertion pelo [jwt.io](http://jwt.io) mas ele vence e tenho que gerar outro. ele não é eterno kkkkkk.

---
